import React, { useState } from 'react'
import PageRouter from './router/PageRouter'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import { colorCards } from './dataColors'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Aside/>
      <PageRouter/>
    </div>
    )
 }

export default App
