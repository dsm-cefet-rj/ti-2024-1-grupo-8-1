import React,{useState} from 'react';
import Pacientes from '../Data/pacData';
function PagPaci() {
  const [pacienteSelecionado, setPacienteSelecionado] = useState('Ana Santos');

  let nomeProcurado = pacienteSelecionado;

  const pacienteEncontrado= Pacientes.find((paciente) => paciente.nome === nomeProcurado);
  return (
    <div>
      <h2>Pacientes:</h2>
      <select id="inputState" className="form-select"  onChange={(p)=>setPacienteSelecionado(p.target.value)} >
              <option selected>Escolha...</option>
              {Pacientes.map((Paciente) => (
          <option key={Paciente.nome} value={Paciente.nome}>
            {Paciente.nome}
          </option>
        ))}
            </select>
                  <div>
                 <table border={1}>
                 <tr>
                      <td>Nome: </td>
                    <td>{pacienteEncontrado.nome}</td>
                    <td>Pagou: </td>
                    <td>{pacienteEncontrado.pagou}</td>
                    </tr>
                 
                 </table>
                  </div>
    </div>
  );
}

export default PagPaci;