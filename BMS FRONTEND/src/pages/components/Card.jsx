import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ book }) => { //Home.jsx bata send gareko props yaha receive gareko ho, destructure garera.
  // console.log(props);
  //   const navigate = useNavigate()
  return (
    <div className="border border-gray-600 p-2 w-full md:w-1/2 lg:w-1/4 rounded-2xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow duration-300" key={book._id}>
      <img className="w-full h-60 object-cover rounded-t-xl" src={book.imageUrl ? book.imageUrl : "#"} alt="Book Image" />
      <div className="px-4 py-3">
        <div className="font-bold text-center text-xl text-white mb-2">{book.bookName}</div>
        <p className="text-justify text-sm text-gray-300">{book.bookDescription}</p>
      </div>
      <div className="px-4 pt-3 pb-4 flex flex-col gap-2">
        <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
          Rs. {book.bookPrice}
        </span>
        <span className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
          ISBN: {book.isbnNumber}
        </span>
        <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
          Author: {book.authorName}
        </span>
        <Link
          to={`/book/${book._id}`}
          className="mt-2 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl transition-transform duration-300 hover:scale-105"
        >
          See More
        </Link>
        {/* <button className="bg-green-500 p-2 rounded-xl transition-transform duration-300 hover:scale-110" onClick={()=>navigate('/book/')}>See More</button> */}
      </div>
    </div>
  );
};

export default Card;
