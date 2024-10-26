import React from "react";

const Card = ({book}) => { //Home.jsx bata send gareko props yaha receive gareko ho, destructure garera.
  // console.log(props);
  
  return (
    <div className="border border-white p-1 w-full md:w-1/2 lg:w-1/4 rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={book.imageUrl ? book.imageUrl : "#"} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl mb-2">{book.bookName}</div>
        <p className="text-justify text-base text-white">{book.bookDescription}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 p-1">RS.{book.bookPrice}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 p-1">ISBN:{book.isbnNumber}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 p-1">Author:{book.authorName}</span>
      </div>
    </div>
  );
};

export default Card;
