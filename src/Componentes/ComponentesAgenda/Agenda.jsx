import React, { useEffect, useState } from 'react';
import '../styles.css';

function Agenda() {
  const [mesAtual, setMesAtual] = useState('');
  const [diasDoMes, setDiasDoMes] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const mesesDoAno = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const obterConsultas = () => {
        setTimeout(() => {
        const consultas = [
          { dia: new Date(2024, 3, 14, 10, 0), paciente: 'Maria' },
          { dia: new Date(2024, 3, 14, 17, 30), paciente: 'João' },
          { dia: new Date(2024, 3, 15, 15, 0), paciente: 'Ana' },
          { dia: new Date(2024, 3, 23, 18, 0), paciente: 'Ana' },
          { dia: new Date(2024, 3, 30, 8, 30), paciente: 'Ana' },
          { dia: new Date(2024, 3, 30, 9, 30), paciente: 'Piru' }
        ];
        setConsultas(consultas);
      }, 500);
    };

    const atualizarCalendario = () => {
      const mesCorrente = new Date().getMonth();
      const anoCorrente = new Date().getFullYear();
      const primeiroDia = new Date(anoCorrente, mesCorrente, 1);
      const ultimoDia = new Date(anoCorrente, mesCorrente + 1, 0);
      const diasNoMes = ultimoDia.getDate();

      setMesAtual(mesesDoAno[mesCorrente]);

      const primeiroDiaSemana = primeiroDia.getDay();
      const dias = Array(primeiroDiaSemana).fill('');
      for (let i = 1; i <= diasNoMes; i++) {
        dias.push(i);
      }
      setDiasDoMes(dias);
    };

    obterConsultas();
    atualizarCalendario();
  }, []);

  const mostrarConsultas = (dia) => {
    const consultasDoDia = consultas.filter(consulta => {
      const dataConsulta = new Date(consulta.dia);
      return (
        dataConsulta.getFullYear() === dia.getFullYear() &&
        dataConsulta.getMonth() === dia.getMonth() &&
        dataConsulta.getDate() === dia.getDate()
      );
    });

    if (consultasDoDia.length === 0) {
      return <li>Nenhuma consulta marcada para este dia.</li>;
    }

    return consultasDoDia.map((consulta, index) => (
      <li key={index}>{consulta.dia.toLocaleTimeString()} - {consulta.paciente}</li>
    ));
  };

  return (
    <div className="corpo">
      <div className="juncao">
        <div className="calendar">
          <div className="cabeca">
            <button id="BtnMesAnterior" className="btn-mes">
              &lt;-
            </button>
            <div id="mes" className="mes">{mesAtual}</div>
            <button id="BtnMesPosterior" className="btn-mes">
              -&gt;
            </button>
          </div>
          <div className="dia daSemana">
            <div>DOM</div>
            <div>SEG</div>
            <div>TER</div>
            <div>QUA</div>
            <div>QUI</div>
            <div>SEX</div>
            <div>SAB</div>
          </div>
          <div id="dias" className="dia">
            {diasDoMes.map((dia, index) => (
              <div key={index}>{dia}</div>
            ))}
          </div>
        </div>
        <div id="ListaDeConsultas" className="consultas">
          <ul>
            {mostrarConsultas(new Date())}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Agenda;