import React from 'react';
import './stylesPaciente.css';

function AdicionarPaciente({ handleInicioPaciente }) {
    return (
        <div>
            <div>
                <button className='botãoPaciente' onClick={handleInicioPaciente}>Inicio</button>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default AdicionarPaciente;