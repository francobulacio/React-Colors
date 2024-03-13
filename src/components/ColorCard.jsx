import React, { useState } from 'react'
import './colorCard.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import { colorCards } from '../dataColors';
import { useGlobalContext } from '../context/GlobalContextProvider';



const ColorCard = ({colores, date, likes, id}) => {
    const[isLiked, setIsLiked] = useState(false)


const colorsToRender = colores.map((color) =>(
        <div>
            <span> {color} </span>
        </div>
    ))

    const handleLikeCard = () =>{
            setIsLiked(!isLiked)
        }   
    return (
        <div className='colorCard'>
            <Link to={'/detail/' +id} className='colores'>
                    <ColorsList colors={colores} />
            </Link>

            <div className='colorCardControls'>
                <button className='megusta' onClick={handleLikeCard}>
                    {isLiked ? <AiFillHeart/> :  <AiOutlineHeart/> }
                    {isLiked ? likes + 1 : likes} </button>
                <span className='date'> {date} </span>
            </div>

        </div>
            
        
    )
}

export default ColorCard

const ColorsList = ({colors}) =>{
    return(
        <>
        {
            colors.map((color, index) =>(
                <div key={index} style={{backgroundColor: color}}>
                    <span> {color} </span>
                </div>
            ))
        }
        </>
    )
}