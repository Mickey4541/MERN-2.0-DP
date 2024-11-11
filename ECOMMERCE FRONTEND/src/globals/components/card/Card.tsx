    import { Link } from "react-router-dom";
import { Product } from "../types/productTypes";

    interface CardProps {
    data: Product;
    }

    export const Card: React.FC<CardProps> = ({ data }) => {
    const fixedRating = 4;

    // Get only the first 10 words of the description
    const shortDescription = data.productDescription.split(" ").slice(0, 10).join(" ") + (data.productDescription.split(" ").length > 10 ? "..." : "");

    return (
        <>
     
        <div className="flex flex-col p-1 py-1 bg-purple-50 text-center transform duration-500 hover:-translate-y-2  rounded-xl sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/5 gap-1 mx-2 sm:mx-4 mt-10">
        {/* Use the image URL from the data prop */}
        <img
          src={`http://localhost:3000/uploads/${data.productImageUrl}`}
            // src={data.productImageUrl}
            // src={data.productImageUrl ? data.productImageUrl : "#"}
            alt={data?.productName}
            className="mx-auto mb-2 w-full object-cover max-h-48 rounded-xl"  // Ensures the image height doesn't grow beyond 48px
        />

        <div className="space-x-1 flex justify-center mt-4">
            {/* Use the fixed rating */}
            {Array.from({ length: 5 }).map((_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 mx-px fill-current ${index < fixedRating ? 'text-orange-600' : 'text-gray-300'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
            >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
            </svg>
            ))}
        </div>

        <h1 className="text-xl my-2 text-black font-bold">{data?.productName}</h1> {/* Adjusted text size */}
        <p className="mb-1 text-black text-sm sm:text-base md:text-lg lg:text-xl">{shortDescription}</p> {/* Adjusted margin */}
        <h2 className="font-semibold mb-2 text-green-700 text-sm sm:text-base md:text-lg font-bold">Price: ${data.productPrice}</h2> {/* Adjusted margin */}
        <div className="space-x-1">
            <Link to={`/product/${data.id}`}>
            <button className="bg-green-700 p-2 px-4  text-white rounded-md hover:bg-green-600 font-medium">See More</button>
            </Link>
        <button className="p-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 font-medium">
            Add To Cart
        </button>
        </div>
        
        </div>
       
   
       </>
    );
    };
