import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'



const App = () => {

  return (
    <div className='min-h-screen w-full p-10 bg-black text-xl text-white font-bold'>
      < Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
