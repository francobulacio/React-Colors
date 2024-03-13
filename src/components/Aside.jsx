import React, {useState} from 'react'
import './aside.css'
import { AiOutlineFire, AiFillFire, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { colorCards } from '../dataColors';
import ColorCard from './ColorCard';

const Aside = () => {

    const [isSeleccionado, setIsSeleccionado] = useState(false)
    const handleSeleccionar = () =>{
        setIsSeleccionado(!isSeleccionado)
    }  

    const [isEstrella, setIsEstrella] = useState(false)
    const handleEstrella = () =>{
        setIsEstrella(!isEstrella)
        }

    const [isRandom, setIsRandom] = useState(false)
    const handleRandom = () =>{
        setIsRandom(!isRandom)
    }

    const [isColecction, setIsColecction] = useState(false)
        const handleColecction = () =>{
        setIsColecction(!isColecction)
    }
    return(
        <div className='container'>


            <div className='uno'>
                <Link to={'../'}>
                    <button className='New' onClick={handleSeleccionar}>
                    {isSeleccionado ? <AiFillFire/> : <AiOutlineFire/> }
                    <span>New </span>
                    </button>
                </Link>

                <Link to={'../AboutColorHunt'} >
                    <button className='ColorHunt'onClick={handleRandom}>
                    {isRandom ? <IoIosStar/> : <IoIosStarOutline/> }
                    <span>ColorHunt</span>
                    </button>
                </Link>

                <Link to= {'https://www.instagram.com/color.hunt/'}>
                    <button className='Instagram' onClick={handleColecction}> 
                    {isColecction ? <AiFillHeart/> : <AiOutlineHeart/> }
                    <span>Instagram</span>
                    </button>
                </Link>
            
            </div>

        
        </div>
    )
}

export default Aside