import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditBook = () => {

  const {id} = useParams()
  
  const navigate = useNavigate()//to navigate in homepage if status is 201. usenavigate is a hook
  const [data, setData] = useState({ //making state of object.
        bookName: "", //yaha key ko name backend ley j accept gariraxa tei lekhepaxi sajilo hunxa.
        bookPrice : "",
        isbnNumber : '',
        authorName : "",
        publishedAt : "",
        publication : "",
        bookDescription : "",
  })
  
  const [image, setImage] = useState(null) //making different usestate to handle image because object of data,setdata usestate cannot handle the image, it can only handle the url
  
  //for updating image::
  const [updateImage, setupdateImage] = useState(null) //for image preview
  const [currentImageUrl, setCurrentImageUrl] = useState(''); // To store the old image URL

  
  
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
    const response = await axios.patch('https://bms-backend-lp6t.onrender.com/book/' + id, formData)
    if(response.status === 200){
      navigate('/book/' +id) //using usenavigate hook
    }else[
      alert("Something went wrong")
    ]
  }

//form edit garni bela form pahile nai fill vayera aauni banauna ko lagi hami sanga id ta pahile nai xa, aba id xa vani tyo id ko book fetch garna milyo
const fetchBook = async() => {
  const response = await axios.get("https://bms-backend-lp6t.onrender.com/book/" + id)
  if(response.status === 200){
    setData(response.data.data)  //yahasamma data aayo aba yo data lai kunai state maa set garni ani 
    setupdateImage(response.data.imageUrl)// Set the initial image URL for preview
    setCurrentImageUrl(response.data.imageUrl)// Store the old image URL
  }
}
useEffect(() => {
  fetchBook()
}, [])

const handleImageChange = (e) => {
  setImage(e.target.files[0]);
  setupdateImage(URL.createObjectURL(e.target.files[0])); // Preview the new image
};



  return (
    <>
    <Navbar />
    <section className="mt-20 bg-gray-50 dark:bg-gray-900 h-auto">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Edit Book Here:
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookName</label>
                <input type="text" value={data.bookName}  name="bookName" onChange={handleChange} id="bookName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Name" required />
              </div>
              <div>
                <label htmlFor="bookPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookPrice</label>
                <input type="text" value={data.bookPrice} name="bookPrice" onChange={handleChange} id="bookPrice" placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">authorName</label>
                <input type="text" value={data.authorName} name="authorName" onChange={handleChange}  id="authorName" placeholder="Author Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="isbnNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">isbnNumber</label>
                <input type="number" value={data.isbnNumber} name="isbnNumber" onChange={handleChange}  id="isbnNumber" placeholder="ISBN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="publishedAt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publishedAt</label>
                <input type="text" value={data.publishedAt} name="publishedAt" onChange={handleChange}  id="publishedAt" placeholder="Published Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="publication" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publication</label>
                <input type="text" value={data.publication} name="publication" onChange={handleChange}  id="publication" placeholder="Publication" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="bookDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bookDescription</label>
                <input type="text" value={data.bookDescription} name="bookDescription" onChange={handleChange}  id="bookDescription"  placeholder="Book Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="bookImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image</label>
                <input 
                  type="file"
                  // onChange={(e) => {
                  //   setImage(e.target.files[0]), 
                  //   setupdateImage(URL.createObjectURL(e.target.files[0]));
                  // }} 
                  onChange={handleImageChange} 
                  name="image"   
                  id="bookImage" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {updateImage && (<img src={updateImage} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded" />)}
              </div>
              <button type='submit' className='p-2 m-2 bg-green-700 rounded items-center hover:bg-blue-600'>Edit Book</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default EditBook