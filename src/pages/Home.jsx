import React, { useState } from 'react'
import './home.css'
import ColorCard from '../components/ColorCard';
import { colorCards } from '../dataColors';
import ColorDetail from './ColorDetail';


const Home = () => {
  const [searchString, setSearchString] = useState ('')

  const[listaColores, setListaColores] = useState(colorCards)

  const handleFilterProducto= (evento) => {
    setSearchString(evento.target.value)
  }

  return(
      <div className='container'>

          <div className='dos'>
            <div>
            <div className='navegador'>
              <input type="text"  placeholder='Busca tu color' value={searchString}  onChange={handleFilterProducto} />
            </div>
            <div className='cardColorsList'>
                  {
                    listaColores.filter(
                      colorCards => colorCards.category.toLowerCase().includes(searchString.toLowerCase())
                    ).map(({likes, colores, id, date, category}) => (
                      <ColorCard likes = {likes} colores ={colores} id={id} date={date} key={id} category={category} />
                    ))
                  }
                  </div>
            </div>
          <div>
            
          </div>
          <div className='tres'>
            <div className='ColorDesing'>
                <h2>
                Paletas de colores para diseñadores y artistas.
                </h2>
              </div>

              <div className='Discover'>
                <span>Descubra las paletas más nuevas de Color Hunt, cuidadosamente seleccionadas.</span>
              </div>
          </div>

          <div className='sugerencias'>
                <div className='sug'>
                  <span className='busqueda'>Sugerencias de busqueda:</span>
                  <span className='Retro'>Pastel</span>
                  <span className='Retro'>Vintage</span>
                  <span className='Retro'>Retro</span>
                  <span className='Retro'>Neon</span>
                  <span className='Retro'> Gold</span>
                  <span className='Retro'>Dark</span>
                  <span className='Retro'>Warm</span>
                  <span className='Retro'>Cold</span>
                  <span className='Retro'>Light</span>
                </div>
            </div>
      </div>
  </div>
  )
}

export default Home
