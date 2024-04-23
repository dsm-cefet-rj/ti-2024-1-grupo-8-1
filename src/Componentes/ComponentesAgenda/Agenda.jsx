import React, { useEffect, useState } from 'react';
import '../styles.css';
import './stylesAgenda.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import AdicionarConsulta from './AdicionarConsulta'
import VisualizarConsultaM from './VisualizarConsultaM'
import VisualizarConsultaC from './VisualizarConsultaC'
import ConsultasMarcadas from './ConsultasMarcadas'
import ConsultasConcluidas from './ConsultasConcluidas'

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
  const [consulta, setConsulta] = useState('')

  const handleVisualizarConsultaM = (consultaSelecionada) => {
    setModo('Visualizar');
    setConsulta(consultaSelecionada);
  }

  const handleAdicionarConsulta = () => {
    setModo('Adicionar');
  };

  const handleConsultasMarcadas = () => {
    setModo('Inicial');
  };

  const renderizarConteudo = () => {
    if (Modo === 'Inicial') {
      return <ConsultasMarcadas handleAdicionarConsulta={handleAdicionarConsulta} handleVisualizarConsultaM={handleVisualizarConsultaM} />;
    }
    else if (Modo === 'Adicionar') {
      return <AdicionarConsulta handleConsultasMarcadas={handleConsultasMarcadas} />;
    }
    else if (Modo === 'Visualizar') {
      return <VisualizarConsultaM handleConsultasMarcadas={handleConsultasMarcadas} consulta={consulta} />;
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