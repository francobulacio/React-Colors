import React, { useState }  from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.gif'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {

    return (
        <>
            <header>
                <Link to={'./'} className='Logo'>
                    <div><img src={Logo} /></div>
                    <h1 className='ColorH'>Color Hunt</h1>
                </Link>


                <Link to={'../Contact'}>
                    <button className='Registro'>
                    Contáctanos
                    </button>
                </Link>
                <button className='Menu'> <AiOutlineMenu/> </button>
            </header>

        </>
    )
}

export default Navbar
