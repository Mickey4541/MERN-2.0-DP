import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AddBook = () => {
  const [bookName, setbookName] = useState('')
  const [bookPrice, setbookPrice] = useState('')
  const [isbnNumber, setisbnNumber] = useState(null)
  const [authorName, setauthorName] = useState('')
  const [publishedAt, setpublishedAt] = useState('')
  const [publication, setpublication] = useState('')
  const [bookDescription, setbookDescription] = useState('')
  const [bookImage, setbookImage] = useState(null)


  return (
    <>
      <Navbar />
      <section className="mt-20 bg-gray-50 dark:bg-gray-900 h-auto">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add Book Here:
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookName</label>
                  <input type="text" onChange={(e)=>setbookName(e.target.value)} name="bookName" id="bookName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Name" required />
                </div>
                <div>
                  <label htmlFor="bookPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookPrice</label>
                  <input type="text" onChange={(e)=>setbookPrice(e.target.value)} name="bookPrice" id="bookPrice" placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">authorName</label>
                  <input type="text" onChange={(e)=>setauthorName(e.target.value)} name="authorName" id="authorName" placeholder="Author Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="isbnNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">isbnNumber</label>
                  <input type="text" onChange={(e)=>setisbnNumber(e.target.value)} name="isbnNumber" id="isbnNumber" placeholder="ISBN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="publishedAt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publishedAt</label>
                  <input type="text" onChange={(e)=>setpublishedAt(e.target.value)} name="publishedAt" id="publishedAt" placeholder="Published Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="publication" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publication</label>
                  <input type="text" onChange={(e)=>setpublication(e.target.value)} name="publication" id="publication" placeholder="Publication" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="bookDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookDescription</label>
                  <input type="text" onChange={(e)=>setbookDescription(e.target.value)} name="bookDescription" id="bookDescription"  placeholder="Book Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="bookImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image</label>
                  <input type="file" onChange={(e)=>setbookImage(e.target.files[0])} name="image" id="bookImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type='submit' className='p-2 m-2 bg-green-700 rounded items-center hover:bg-blue-600'>Submit 31 minutes day 18</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddBook;
