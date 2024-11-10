import Footer from "../../../globals/components/footer/Footer";
import Navbar from "../../../globals/components/navbar/Navbar";
import { deleteCartItem } from "../../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const Cart = () => {
  const { items } = useAppSelector((state) => state.carts);

  const dispatch = useAppDispatch();

  const handleDelete = (productId: string) => {
    dispatch(deleteCartItem(productId));
    
  };

  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-700 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">MY CART ITEMS:</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3">
            {items.length > 0 &&
              items.map((item, index) => {
                
                return (
                  <div
                    key={item.Product.id || index}
                    className="justify-between mb-6 rounded-lg bg-white p-1 shadow-md sm:flex sm:justify-start "
                  >
                    <img
                      className="w-full h-48 object-cover rounded-xl"
                      src={`http://localhost:3000/uploads/${item.Product.productImageUrl}`}
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.Product.productName}
                        </h2>
                        <p className="mt-1 text-xs text-blue-800 font-bold">
                          {item.Product?.category?.categoryName}
                        </p>
                        <p className="mt-1 text-xs text-gray-700">
                          {item.Product?.productDescription}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span className="cursor-pointer rounded-l bg-gray-700 py-1 px-3.5 duration-100 hover:bg-emerald-500 hover:text-blue-50">
                            {" "}
                            -{" "}
                          </span>
                          <input
                            className="h-8 w-8 border bg-black text-center text-xs outline-none"
                            type="number"
                            value={item.Quantity}
                            min="1"
                          />
                          <span className="cursor-pointer rounded-r bg-gray-700 py-1 px-3 duration-100 hover:bg-emerald-500 hover:text-blue-50">
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm text-green-700 font-bold">
                            Price: ${item.Product?.productPrice}
                          </p>
                          <button onClick={() => handleDelete(item.Product.id)} className="text-white mt-6 w-full rounded-2xl bg-red-500 px-2 py-1 font-sm hover:bg-red-600">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold text-green-700">Total:</p>
              <div className="">
                <p className="mb-1 text-lg font-bold text-green-800">
                  $134.98 USD
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-green-700 py-1.5 font-medium text-blue-50 hover:bg-green-600">
              Check out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
