
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from './pages/home/Home'
import EditBook from './pages/editBook/EditBook'
import SingleBook from './pages/singleBook/SingleBook'
import AddBook from './pages/addBook/AddBook'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<EditBook/>}/>
        <Route path='/single' element={<SingleBook/>}/>
        <Route path='/add' element={<AddBook/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App