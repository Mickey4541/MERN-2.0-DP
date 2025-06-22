import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'


const Home = () => {


  //Aba hamilai homepage maa database maa vako book show garna parni xa. So, aba homepage bata backend ko /book api hit hannu paryo.
  const [books, setBooks] = useState([])//backend bata data array maa aauxa so initial maa empty array garnu paryo.

const fetchBooks = async () => {//this function hits the api and store the fetched data.
  const response = await axios.get('http://localhost:3000/book')
  //console.log(response.data.data);
  if(response.status == 200){
    setBooks(response.data.data)
  }

}
  //aba yo useeffect chai jaba koi user site maa first time aauxa, taba initial trigger hunxa, hamilai chhiyako pani yei ho, koi ley site kholyo vani site kholdaa bitikai useeffect call huni vayo ra vako jati book fetch huni vayo.
  useEffect(()=>{ 
    fetchBooks()
  },[])
//console.log(books);


  return (
    <>
        <Navbar/>
        <div className='flex flex-wrap justify-evenly gap-1 mt-20'>
        {
          books.length > 0 && books.map((book, index)=>{//loop na lagayera map lagaunu ko karan vaneko loop ley return gardaina.
            return (
              <Card key={index} book = {book}/> //yahabata maile book maa vako data as a props pass gare, aba yeslai card.jsx maa access garna sakxu
            )
          })
          
        }
       
        </div>
       
    </>
  )
}

export default Home