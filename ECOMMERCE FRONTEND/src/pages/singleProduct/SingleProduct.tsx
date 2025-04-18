import { useParams } from "react-router-dom"
import Footer from "../../globals/components/footer/Footer"
import Navbar from "../../globals/components/navbar/Navbar"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchByProductId } from "../../store/productSlice"
import { addToCart } from "../../store/cartSlice"




const SingleProduct = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {status, singleProduct} = useAppSelector((state) => state.products)

    const [flashMessage, setFlashMessage] = useState<string | null>(null)

    useEffect(() => {//This useEffect runs when the component first loads and whenever id or dispatch changes.
        if (id && !singleProduct) {
            dispatch(fetchByProductId(id));
        }
    }, [id, dispatch]);

        const handleAddToCart = () => {
            if(id && singleProduct){
                dispatch(addToCart(id))
                 // Show flash message when product is added to cart (new addition)
            setFlashMessage('Product added to cart successfully!')

            // Automatically hide the flash message after 3 seconds (new addition)
            setTimeout(() => {
                setFlashMessage(null)
            }, 3000)

            }
            
        }
    // console.log(singleProduct);
    
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 dark:bg-gray-800 py-8 pt-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover"  src={`http://localhost:3000/uploads/${singleProduct?.productImageUrl}`} alt="Product Image"/> 
                    {/* src={singleProduct?.productImageUrl} */}
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-green-900 dark:bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-green-700" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{singleProduct?.productName}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   {singleProduct?.productDescription}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">${singleProduct?.productPrice}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                {/* <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div> */}
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {singleProduct?.productDescription}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
 {/* Flash Message */}
 {flashMessage && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-md shadow-lg z-50">
                    {flashMessage}
                </div>
            )}
<Footer/>
    </>

  )
}

export default SingleProduct