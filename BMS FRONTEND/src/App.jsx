
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
        <Route path='/book/:id' element={<SingleBook/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/editBook/:id' element={<EditBook/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App