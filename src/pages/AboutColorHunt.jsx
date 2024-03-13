import React from 'react'
import ColorHunt from '../img/ColorHunt.gif'
import './aboutColorHunt.css'

const AboutColorHunt = () => {
  return (
    <div className='contenedor'>
        <div className='imagen'>
            <img src={ColorHunt} />
        </div>
        <div className='Color'>
            <span>Color Hunt</span>
        </div>
        <div className='description'>
            <span>Color Hunt es una colección abierta de hermosas paletas de colores, creada por Gal Shir y LucilaCompany's. Color Hunt comenzó como un pequeño proyecto personal creado para compartir combinaciones de colores de moda entre un grupo de amigos diseñadores. La colección se amplió y ahora miles de personas en todo el mundo la utilizan a diario como un recurso útil.</span>
        </div>
        <div className='PreguntaUno'>
            <span>¿Quién crea las paletas de colores?</span>
        </div>
        <div className='RespuestaUno'>Estamos desarrollando una creadora de paletas, para que ustedes, los usuarios, puedan crear sus propias combinaciones de colores y compartirlas entre todos. Por el momento, Color Hunt desarrolla las paletas que se encuentran disponibles.
         </div>
         <div className='Made'>
             <span> Hecho por Gal Shir
         </span></div>
         <div className='colaboration'>
            <span>
                En colaboración con Lucila Ledesma
            </span>
         </div>
    </div>
  )
}

export default AboutColorHunt
