import React, { useEffect, useState } from 'react';
import '../styles.css';
import './stylesAgenda.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"

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