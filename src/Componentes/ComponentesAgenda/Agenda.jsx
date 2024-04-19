import React, { useEffect, useState } from 'react';
import '../styles.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

function Agenda() {
  
  const handleDateClick = (arg) =>{
    alert(arg.dateStr)
  }




  return (
    <div className= "container-lg">
      <form className= "row g-3">
        <div className= "col-12">
          <FullCalendar plugins={[ dayGridPlugin, interactionPlugin ]} dateClick={handleDateClick} initialView="dayGridMonth" updateSize/>
        </div>
      </form>
    </div>
  );
}

export default Agenda;