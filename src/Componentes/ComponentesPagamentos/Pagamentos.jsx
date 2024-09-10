import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPagamentos } from '../../features/listaPagamentosSlice';
import { fetchConsultas } from '../../features/listaConsultaSlice';
import './pagamentos.css';

const Pagamentos = () => {
    const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);
    const compromissos = useSelector((state) => state.listaConsulta.consultas);
    const [mesAtual, setMesAtual] = useState(new Date());
    const [cpfPesquisa, setCpfPesquisa] = useState(''); // Estado para armazenar o CPF pesquisado

    const dispatch = useDispatch();

    // Disparar o fetch dos dados apenas uma vez quando o componente for montado
    useEffect(() => {
        dispatch(fetchPagamentos());
        dispatch(fetchConsultas());
    }, [dispatch]);

    // Função para lidar com a mudança no input de CPF
    const handleCpfChange = (e) => {
        setCpfPesquisa(e.target.value);
    };

    // Filtrar os pagamentos por mês e, se CPF for fornecido, também por CPF
    const pagamentosFiltrados = useMemo(() => {
        return pagamentos.reduce((acc, pagamento) => {
            const compromissoDoPagamento = compromissos.find((compromisso) => compromisso._id === pagamento.idConsulta);

            if (compromissoDoPagamento && compromissoDoPagamento.dia) {
                const mesConsulta = parseInt(compromissoDoPagamento.dia.split('-')[1], 10) - 1; // Mês no formato 0-11

                // Filtra por mês e também por CPF, caso o CPF seja fornecido
                if (
                    mesConsulta === mesAtual.getMonth() && 
                    (cpfPesquisa === '' || compromissoDoPagamento.cpfPaciente.includes(cpfPesquisa))
                ) {
                    acc.push({ pag: pagamento, data: compromissoDoPagamento.dia });
                }
            }

            return acc;
        }, []);
    }, [pagamentos, compromissos, mesAtual, cpfPesquisa]);

    const avancarMes = () => {
        setMesAtual((prevDate) => {
            const novaData = new Date(prevDate);
            novaData.setMonth(prevDate.getMonth() + 1);
            return novaData;
        });
    };

    const retrocederMes = () => {
        setMesAtual((prevDate) => {
            const novaData = new Date(prevDate);
            novaData.setMonth(prevDate.getMonth() - 1);
            return novaData;
        });
    };

    const mesAnoAtual = mesAtual.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });

    return (
        <div>
            <div className="controle-mes">
                <button onClick={retrocederMes}>Anterior</button>
                <h3>{mesAnoAtual}</h3>
                <button onClick={avancarMes}>Próximo</button>
            </div>

            <div className="pesquisa-cpf">
                <label htmlFor="cpf">Pesquisar por CPF:</label>
                <input
                    id="cpf"
                    type="text"
                    value={cpfPesquisa}
                    onChange={handleCpfChange}
                />
            </div>

            <ul className="grid-pagamentos">
                {pagamentosFiltrados.length > 0 ? (
                    pagamentosFiltrados.map((pagamento, index) => (
                        <li key={index} className="mini-recibo">
                            <p>Valor Total: R${pagamento.pag.valorTotal.toFixed(2)}</p>
                            <p>Parcela: {pagamento.pag.parcela}</p>
                            <p>Método: {pagamento.pag.metodo}</p>
                            <p>Data: {new Date(pagamento.data).toLocaleDateString('pt-BR')}</p>
                        </li>
                    ))
                ) : (
                    <p>Nenhum pagamento encontrado para este mês ou CPF.</p>
                )}
            </ul>
        </div>
    );
};

export default Pagamentos;
