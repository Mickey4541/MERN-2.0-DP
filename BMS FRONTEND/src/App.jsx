import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import About from './About'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<h1>Hello contact Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App