import React from 'react';

function PagPaci({ pacientes, pagou }) {

  return (
    <div>
      <h2>Pacientes:</h2>
      {pacientes.map((paciente) => (
        <div key={paciente.nome}>
          <p>Nome: {paciente.nome}</p>
          <p>Pagou: {pagou ? 'Sim' : 'Não'}</p>
        </div>
      ))}
    </div>
  );
}

export default PagPaci;