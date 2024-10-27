import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBook = () => {
  const{id} = useParams() //book ko id id.id maa aako xa yaha destructure gareko
  //console.log(id);
  const [book, setBook] = useState({})
  const fetchBook = async () => {
    // const response = await axios.get('http://localhost:3000/' + id)
    const response = await axios.get(`https://bms-backend-lp6t.onrender.com/book/${id}`)
    //console.log(response);
    if(response.status === 200){
      setBook(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBook()
  },[])
  //console.log(book.imageUrl);



  //delete blog on clicking delete button.
  const navigate = useNavigate()
const handleDelete = async () => {
  console.log(id);
  const response = await axios.delete(`https://bms-backend-lp6t.onrender.com/book/${id}`) //specific book ko id chai url maa aako xa, tya bata useparams use garera id maa store vako thiyo, tei id lai access garera delete gareko.
  if(response.status === 200){
    navigate('/');
  }else{
    alert("Failed to delete the book.")
  }
  
}




  return (
    <>
      <Navbar />
      {/* Wrapper for full height on small screens */}
      <div className="border border-white p-4 w-full max-w-screen-md mx-auto rounded overflow-hidden shadow-lg mt-20 h-full sm:h-auto">
        
        {/* Book Image */}
        <img 
          className="w-full h-64 sm:h-80 md:h-96 object-contain rounded mb-4" 
          src={book.imageUrl ? book.imageUrl : "#"} 
          alt="Book cover" 
        />
        
        {/* Book Information */}
        <div className="px-4 py-2 flex flex-col items-center text-center space-y-3">
          <h1 className="font-bold text-lg md:text-2xl text-white">{book.bookName}</h1>
          <p className="text-sm md:text-base text-white leading-relaxed">
            {book.bookDescription}
          </p>
        </div>
        
        {/* Book Details */}
        <div className="px-4 py-4 flex flex-wrap justify-center gap-3">
          <span className="bg-gray-200 rounded-full py-1 px-4 text-sm font-semibold text-gray-700">
            RS.{book.bookPrice}
          </span>
          <span className="bg-gray-200 rounded-full py-1 px-4 text-sm font-semibold text-gray-700">
            ISBN:{book.isbnNumber}
          </span>
          <span className="bg-gray-200 rounded-full py-1 px-4 text-sm font-semibold text-gray-700">
            Author:{book.authorName}
          </span>
        </div>
        <button onClick={handleDelete} className='bg-red-500 p-2 rounded-2xl'>Delete Book</button>
        <Link to={`/editBook/${book._id}`}>
        <button className='bg-blue-600 p-2 rounded-2xl ml-2 pl-2 pr-2'>Edit book</button>
        </Link>
      </div>
    </>
  );
};

export default SingleBook;
