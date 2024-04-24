import React, { useEffect, useState } from 'react';
import '../styles.css';
import './stylesAgenda.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import AdicionarConsulta from './AdicionarConsulta'
import ConcluirConsulta from './ConcluirConsulta'
import VisualizarConsultaM from './VisualizarConsultaM'
import VisualizarConsultaC from './VisualizarConsultaC'
import ConsultasMarcadas from './ConsultasMarcadas'
import ConsultasConcluidas from './ConsultasConcluidas'
import AddPag from './addPag'

function Agenda() {

  function handleDateSelect(s){

    let title = prompt('Insira a consulta abaixo')
    let evento = s.view.calendar

    evento.unselect()

    if(title){
      evento.addEvent({
        
        title,
        start: s.startStr,
        end: s.endStr,
        allDay: s.allDay
      })
    }

  }
  
  const [Modo, setModo] = useState('Inicial')
  const [consultaM, setConsultaM] = useState('')
  const [consultaC, setConsultaC] = useState('')

  const handleVisualizarConsultaM = (consultaSelecionada) => {
    setModo('VisualizarM');
    setConsultaM(consultaSelecionada);
  }

  const handleVisualizarConsultaC = (consultaSelecionada) => {
    setModo('VisualizarC');
    setConsultaC(consultaSelecionada);
  }

  const handleAdicionarConsulta = () => {
    setModo('Adicionar');
  };

  const handleConcluirConsulta = (consultaSelecionada) =>{
    setModo('Concluir')
    setConsultaM(consultaSelecionada);
  }

  const handleConsultasMarcadas = () => {
    setModo('Inicial');
  };

  const handleConsultasConcluidas = () => {
    setModo('Consultas')
  };

  const handleAddPag = (consultaSelecionada) =>{
    setModo('Pagamento')
    setConsultaC(consultaSelecionada);
  };

  const renderizarConteudo = () => {
    if (Modo === 'Inicial') {
      return <ConsultasMarcadas handleAdicionarConsulta={handleAdicionarConsulta} handleVisualizarConsultaM={handleVisualizarConsultaM} handleConsultasConcluidas={handleConsultasConcluidas} />;
    }
    else if (Modo === 'Consultas') {
      return <ConsultasConcluidas handleVisualizarConsultaC={handleVisualizarConsultaC} handleConsultasMarcadas={handleConsultasMarcadas} />;
    }
    else if (Modo === 'Adicionar') {
      return <AdicionarConsulta handleConsultasMarcadas={handleConsultasMarcadas} />;
    }
    else if(Modo === 'Concluir'){
      return <ConcluirConsulta handleConsultasMarcadas={handleConsultasMarcadas} consultaM={consultaM} handleConsultasConcluidas={handleConsultasConcluidas} handleAddPag={handleAddPag}/>;
    }
    else if (Modo === 'VisualizarM') {
      return <VisualizarConsultaM handleConsultasMarcadas={handleConsultasMarcadas} consultaM={consultaM} handleConcluirConsulta={handleConcluirConsulta}/>;
    }
    else if (Modo === 'VisualizarC') {
      return <VisualizarConsultaC handleConsultasConcluidas={handleConsultasConcluidas} consultaC={consultaC} />;
    }
    else if (Modo === 'Pagamento') {
      return <AddPag handleConsultasConcluidas={handleConsultasConcluidas} consultaC={consultaC}/>
    }
  }
 
  return (

    <div>
      <div className= "calendario">
        <FullCalendar 
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]} 
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth timeGridDay today'
          }}
          initialView="dayGridMonth"
          select={handleDateSelect}
          eventContent={renderEventContent}
          editable={true}
          selectable={true}
          selectMirror={true} 
          height="auto"/>
      </div>
      <div>
        {renderizarConteudo()}

      </div>

      
    </div>
  );
}

function renderEventContent(consulta) {
  return (
    <>
      {consulta.timeText}
      {consulta.event.title}
    </>
  )
}

export default Agenda;