import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AddBook = () => {
  // const [bookName, setbookName] = useState('')
  // const [bookPrice, setbookPrice] = useState('')
  // const [isbnNumber, setisbnNumber] = useState(null)
  // const [authorName, setauthorName] = useState('')
  // const [publishedAt, setpublishedAt] = useState('')
  // const [publication, setpublication] = useState('')
  // const [bookDescription, setbookDescription] = useState('')
  // const [bookImage, setbookImage] = useState(null)

// console.log(bookName, bookPrice, isbnNumber, authorName, publishedAt,publication, bookDescription, bookImage);


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const response = await axios.post('http://localhost:3000/book', {
//     bookName: bookName,
//     bookPrice : bookPrice,
//     isbnNumber : isbnNumber,
//     authorName : authorName,
//     publishedAt : publishedAt,
//     publication : publication,
//     bookDescription : bookDescription,
//     image : bookImage
//   },{
//     headers : { //image server maa send garda json maa jadaina tei vayera hamile header maa multipart/formdata garera pathauna parni hunxa.
//       'content-Type' : 'multipart/form-data'
//     }
//   })
// }

//OR//////////////////////////////////////////////////////
// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const formData = new FormData() //it return empty object and it can hold image. It is not a normal object, it is a object which is made from the form data. Normal object can hold image path but the object made from form data can hold image also.
//   formData.append('bookName', bookName)
//   formData.append('bookPrice', bookPrice)
//   formData.append('isbnNumber', isbnNumber)
//   formData.append('authorName', authorName)
//   formData.append('publishedAt', publishedAt)
//   formData.append('publication', publication)
//   formData.append('bookDescription', bookDescription)
//   formData.append('image', bookImage)
//   try {
//     const response = await axios.post('http://localhost:3000/book', formData);
//     //console.log(response.data);
//   } catch (error) {
//     console.error('Error posting data:', error);
//   }
// }

//ORR/////////////////////////////////////////////////////////////
const navigate = useNavigate()//to navigate in homepage if status is 201. usenavigate is a hook
const [data, setData] = useState({ //making state of object.
      bookName: "", //yaha key ko name backend ley j accept gariraxa tei lekhepaxi sajilo hunxa.
      bookPrice : "",
      isbnNumber : null,
      authorName : "",
      publishedAt : "",
      publication : "",
      bookDescription : "",
})

const [image, setImage] = useState(null) //making different usestate to handle image because object of data,setdata usestate cannot handle the image, it can only handle the url



const handleChange = (e) => {
  //console.log(e.target.value, e.target.name);
  const {name,value} = e.target //form input maa jaha change garxa ra jun maa change garxa tesko name ra change vako value chhiyo . 
  setData({ // hamile name ra value lirako xam e.target maa, aba input maa user ley jun name/field maa change garxa mathi setdata maa name vaneko bookName vayo ra value vaneko book ko name k halyo user ley input bata.
    ...data, //initial hamile data empty banako xam data,setdata usestate maa, aba jaba user ley book ko name fill garxa tyo fill vayo ani aba bookprice fill garna lagyo vani agi ko bookname jasta ko testai basni vayo ra bookprice user ley fill garyo. Like preserving the initially filled data and updating only the specific field that changed. This ensures the form data stays complete with each new input update.
    [name] : value //The syntax [name]: value dynamically assigns the value to the property specified by name in the data object. This means if name is "bookName" and value is "New Book", it will update data as { ...data, bookName: "New Book" }, preserving other properties.
  })
}
//console.log(data);



//giving data to api
const handleSubmit = async (e) => {
  e.preventDefault()
  const formData = new FormData()//it is form object which can hold text and image.
  Object.entries(data).forEach(([key,value]) => {//object.entries ley  key value pair of object lai each array maa convert garxa. aba array maa convert garepaxi foreach loop lagauna ni sakinxa. foreach array ley tyo convert gareko each array dinxa(like all array maa loop lagxa)..
    // console.log(key,value);
    
    formData.append(key,value) //form data maa aako array lai append agreko. like bookName maa user ley helako book ko name append/inject gareko palipilo.
  })
  formData.append('image', image)
  const response = await axios.post('https://bms-backend-lp6t.onrender.com/book', formData)
  if(response.status === 201){
    navigate('/') //using usenavigate hook
  }else[
    alert("Something went wrong")
  ]
}



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
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookName</label>
                  <input type="text" onChange={handleChange} name="bookName" id="bookName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Name" required />
                </div>
                <div>
                  <label htmlFor="bookPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookPrice</label>
                  <input type="text" onChange={handleChange} name="bookPrice" id="bookPrice" placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">authorName</label>
                  <input type="text" onChange={handleChange} name="authorName" id="authorName" placeholder="Author Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="isbnNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">isbnNumber</label>
                  <input type="number" onChange={handleChange} name="isbnNumber" id="isbnNumber" placeholder="ISBN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="publishedAt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publishedAt</label>
                  <input type="text" onChange={handleChange} name="publishedAt" id="publishedAt" placeholder="Published Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="publication" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publication</label>
                  <input type="text" onChange={handleChange} name="publication" id="publication" placeholder="Publication" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="bookDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookDescription</label>
                  <input type="text" onChange={handleChange} name="bookDescription" id="bookDescription"  placeholder="Book Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="bookImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image</label>
                  <input type="file" onChange={(e)=>setImage(e.target.files[0])} name="image" id="bookImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type='submit' className='p-2 m-2 bg-green-700 rounded items-center hover:bg-blue-600'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddBook;
