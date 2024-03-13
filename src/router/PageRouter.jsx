import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ColorDetail, Contact, Home,  AboutColorHunt, Terms} from '../pages'
import Error404 from '../components/Error404'

const PageRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/colordetail' element={<ColorDetail/>} />
                <Route path='/aboutcolorhunt' element={<AboutColorHunt/> }/>
                <Route path='/detail/:id' element={<ColorDetail/>} />
                <Route path='contact/Terms' element={<Terms/>} ></Route>
                <Route path='*' element={<Error404 mensaje={'La ruta buscada no existe'}/>} />
            </Routes>
        </>
    )
}

export default PageRouter
