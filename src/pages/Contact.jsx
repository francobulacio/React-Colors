import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'


const Contact = () => {
  const mostrarAlerta =() =>{
    alert('Sus datos han sido enviados, nos contáctaremos a su correo ingresado desde soporte de Color Hunt')
  }
  return (

    <div>
      <div className='Formulario'>
        <div>
          <h2 className='informacion'>Formulario de contacto</h2>
          <span className='creadora'>Creador/a de paletas de colores</span>
        </div>

        <div className='contenedortres'>
            <label className='nombre'>Ingrese su nombre:</label>
            <input className='botonUno' type="text" placeholder="Dominguez Pedro "  />
        </div>

        <div className='correo'>
            <label className='email'>Ingrese su email:</label>
            <input className='botonDos' type="text" placeholder="Pedro@gmail.com"/>
        </div>

        <label className='seleccionarPaís' htmlFor="paises" required>Seleccione su país</label>
            <select className='paisess' >
                <option> Argentina</option>
                <option> Chile</option>
                <option> Perú</option>
                <option> Bolivia</option>
                <option> Paraguay</option>
                <option> Brasil</option>
            </select>

            <div className='correo'>
            <label className='conocimientos'>Comentenos sus conocimientos en creación de paletas</label>
            <input className='Tres' type="text"/>
        </div>
        <div className='conditions'>
          <label className='Terms' >Está de acuerdo con los</label>
          <Link to={'./Terms'} className='linksT' > términos y condiciones </Link>
          <input type="checkbox" id="term" />
        </div>

        <div className='Envío'>
            <button className='enviar' onClick={mostrarAlerta}>Enviar</button>
        </div> 

      </div>
    </div>
      
      
  )
}

export default Contact
