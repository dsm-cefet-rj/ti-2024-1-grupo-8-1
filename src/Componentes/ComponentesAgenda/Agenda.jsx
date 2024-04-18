import React from 'react'
import { createRoot } from 'react-dom/client'
import ExibirCalendario from './Calendario/exibirCalendario'
import './stylesAgenda.css'

function Agenda(){
  
  
  return(
    document.addEventListener('DOMContentLoaded', function() {
      createRoot(document.body.appendChild(document.createElement('div')))
        .render(<ExibirCalendario />)
    })
  )
}

export default Agenda