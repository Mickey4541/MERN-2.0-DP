import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../1.jpg"
            className="h-8"
            alt="Rajan's Logo"
          />
          <Link to='/'>
          <span className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white">
            BMS
          </span>
          </Link>
        </a>
        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse w-auto justify-between">
          <Link to='/addBook'>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-green-800"
          >
            Add Book
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
