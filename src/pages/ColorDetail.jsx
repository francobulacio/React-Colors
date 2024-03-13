import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { colorCards } from '../dataColors'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import './colorDetail.css'
import ColorCard from '../components/ColorCard';


 const ColorDetail = () => {
  const[isLiked, setIsLiked] = useState(false)


  const {id} = useParams()
  const productFound = colorCards.find((colorCards) => colorCards.id === Number(id) )


  const handleLikeCard = () =>{
          setIsLiked(!isLiked)


  } 

  return (
    <div>
      {
        productFound
        ?
            <div className='colos'>
              <span>{productFound.img} </span>

              <div className='colorCardControls'>
                <button className='likes' onClick={handleLikeCard} >
                    {isLiked ? <AiFillHeart/> :  <AiOutlineHeart/> }
                    {isLiked ? productFound.likes + 1 : productFound.likes} </button>
                <span className='fecha'> {productFound.date} </span>
            </div>
         </div>
        : 
        <h2>Error 404: producto no encontrado</h2>
        } 
        <div className='EditorPelotitas'>
            <div className='pelotitasUno'>{productFound.bolitasuno}</div>
            <div className='pelotitasDos'>{productFound.bolitasdos}</div>
            <div className='pelotitasTres'>{productFound.bolitastres}</div>
            <div className='pelotitasCuatro'>{productFound.bolitascuatro}</div>
        </div>

        <div className='datoscolor'>
            <div className='datosuno'>
              {productFound.datosuno}   
            </div>

            <div className='datosdos'>
              {productFound.datosdos}
            </div>

            <div className='datostres'>
              {productFound.datostres}
              </div>

            <div className='datoscuatro'>
              {productFound.datoscuatro}
              </div>
        </div>


        <div className='detalles'>
            <div className='Category'>
              <h2>
              {productFound.category}
              </h2>
            </div>

            <div className='Description'>
              <span> {productFound.description} </span>
            </div>
        </div>

    </div>
  )
}


export default ColorDetail
