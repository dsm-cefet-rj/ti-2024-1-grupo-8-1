import React, { useState } from "react";

const ConclusaoCompromisso = ({ fecharPopup }) => {
    const [valorTotal, setValorTotal] = useState(0);
    const [metodoPagamento, setMetodoPagamento] = useState('cartaoCredito');
    const [parcelas, setParcelas] = useState(1);
    const [observacoes, setObservacoes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para processar a conclusão do compromisso pode ser adicionada aqui.
        fecharPopup(); // Função passada como prop para fechar o popup
    };

    return (
        <form className='formularioConclusao' onSubmit={handleSubmit}>
            <div className="pagamentos">
                <label>
                    Valor Total:
                    <input
                        type="number"
                        className='input-popup'
                        placeholder="Insira o valor total"
                        onChange={(e) => setValorTotal(parseFloat(e.target.value) || 0)} 
                        required
                    />
                </label>
                <label>
                    Método de Pagamento:
                    <select
                        className='select-popup'
                        value={metodoPagamento}
                        onChange={(e) => setMetodoPagamento(e.target.value)}
                    >
                        <option value="cartaoCredito">Cartão de Crédito</option>
                        <option value="cartaoDebito">Cartão de Débito</option>
                        <option value="boleto">Boleto</option>
                        <option value="dinheiro">Dinheiro</option>
                    </select>
                </label>
                <label>
                    Parcelas:
                    <select
                        className='select-popup'
                        value={parcelas}
                        onChange={(e) => setParcelas(parseInt(e.target.value))}
                    >
                        {[...Array(12)].map((_, index) => {
                            const numParcelas = index + 1;
                            const valorParcela = (valorTotal > 0 ? (valorTotal / numParcelas).toFixed(2) : 0);
                            return (
                                <option key={numParcelas} value={numParcelas}>
                                    {numParcelas}x de R$ {valorParcela}
                                </option>
                            );
                        })}
                    </select>
                </label>
            </div>

            {/* Observações adicionais */}
            <textarea
                className='textarea-popup'
                placeholder="Observações sobre o atendimento"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
            ></textarea>

            {/* Botão para concluir */}
            <button type="submit">Concluir</button>
        </form>
    );
};

export default ConclusaoCompromisso;
