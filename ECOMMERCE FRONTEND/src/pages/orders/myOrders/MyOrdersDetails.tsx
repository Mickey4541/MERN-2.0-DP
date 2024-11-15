import { useParams } from "react-router-dom";
import Navbar from "../../../globals/components/navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { fetchMyOrderDetails } from "../../../store/checkoutSlice";

const MyOrdersDetails = () => {
    const { id } = useParams();
    const { orderDetails, status } = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchMyOrderDetails(id));
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="py-24 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start items-start space-y-5 flex-col">
                    <h1 className="text-xl dark:text-white lg:text-2xl font-semibold leading-7 lg:leading-9 text-gray-600">
                        My Orders:
                    </h1>
                    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                        Date : {new Date(orderDetails[0]?.order?.createdAt).toLocaleDateString()}
                    </p>
                </div>

                <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:px-6 xl:px-8 w-full">
                            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                                Order Summary:
                            </p>

                            {orderDetails.length > 0 &&
                                orderDetails.map((order) => (
                                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                        <div className="pb-4 md:pb-8 w-full md:w-40">
                                            <img
                                                className="w-full hidden md:block rounded-xl"
                                                src={`http://localhost:3000/uploads/${order?.Product?.productImageUrl}`}
                                                alt="product"
                                            />
                                        </div>
                                        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                                    {order.Product.productName}
                                                </h3>
                                            </div>
                                            <div className="flex justify-between space-x-8 items-start w-full">
                                                <p className="text-base dark:text-white xl:text-lg leading-6">
                                                    Rs.{order.Product.productPrice}
                                                </p>
                                                <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                                                    Quantity: {order.quantity}
                                                </p>
                                                <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                                    Total Rs. {order.Product.productPrice * order.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {/* Summary Section */}
                        <div className="flex flex-col px-4 py-6 md:px-6 xl:px-8 w-full bg-gray-100 dark:bg-gray-700 space-y-6 rounded-lg">
                            <h3 className="text-xl dark:text-yellow-400 font-bold leading-5 text-red-800">
                                Summary
                            </h3>
                            <div className="flex flex-col space-y-4 border-gray-200 border-b pb-4">
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800 font-semibold">
                                        Payment Method
                                    </p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                        {orderDetails[0]?.order?.payment?.paymentMethod}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800 font-semibold">
                                        Payment Status
                                    </p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                        {orderDetails[0]?.order?.payment?.paymentStatus}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800 font-semibold">
                                        Order Status
                                    </p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                        {orderDetails[0]?.order?.orderStatus}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                    Total
                                </p>
                                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                                    Rs. ...
                                </p>
                            </div>
                        </div>
                        {/* Shipping Section */}
                        <div className="flex flex-col px-4 py-6 md:px-6 xl:px-8 w-full bg-blue-100 dark:bg-gray-700 space-y-6 rounded-lg">
                            <h3 className="text-xl dark:text-white font-bold leading-5 text-gray-800">
                                Shipping
                            </h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex space-x-4 items-center">
                                    <img
                                        className="w-8 h-8"
                                        alt="logo"
                                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                                    />
                                    <div>
                                        <p className="text-lg dark:text-white font-semibold leading-6 text-gray-800">
                                            Delivery Charge
                                            <span className="block font-normal text-sm text-green-600">
                                                Delivery within 24 Hours
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold dark:text-white leading-6 text-gray-800">
                                    Rs 100
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Customer Section */}
                    <div className="flex flex-col bg-green-100 dark:bg-gray-700 w-full xl:w-96 px-4 py-4 xl:p-8 space-y-4 rounded-lg">
                        <h3 className="text-xl dark:text-blue-600  leading-5 text-emerald-800 font-bold">
                            Customer Details:
                        </h3>
                        <div className="space-y-4">
                            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                Address: {orderDetails[0]?.order?.shippingAddress}
                            </p>
                            <p className="text-sm font-bold dark:text-gray-300 text-gray-600">
                                Phone Number:  {orderDetails[0]?.order?.phoneNumber}
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button className="dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-2 hover:bg-gray-200 border border-gray-800 w-full text-center font-medium text-gray-800 rounded-md">
                                Edit Order
                            </button>
                            <button className="dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-2 hover:bg-red-200 border border-gray-800 w-full text-center font-medium text-gray-800 rounded-md">
                                Cancel Order
                            </button>
                            <button className="dark:border-white dark:bg-red-600 dark:hover:bg-red-700 py-2 border border-gray-800 w-full text-center font-medium text-white bg-red-600 hover:bg-red-700 rounded-md">
                                Delete Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrdersDetails;
