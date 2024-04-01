import React from 'react';
import './styles.css';

function Pacientes() {
  return (
    <div className="corpo">
      <div className="cabecalho">
        Pacientes
      </div>
      <div>
        <div>
          <button>adicionar</button>
          <button>remover</button>
        </div>
      </div>
   </div>
  );
}

export default Pacientes;