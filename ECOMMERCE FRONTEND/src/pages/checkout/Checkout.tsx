import { ChangeEvent, FormEvent, useState } from "react";
import Footer from "../../globals/components/footer/Footer";
import Navbar from "../../globals/components/navbar/Navbar";
import { useAppSelector } from "../../store/hooks";
import { ItemDetails, OrderData, PaymentMethod } from "../../globals/components/types/checkoutTypes";

const Checkout = () => {
    const { items } = useAppSelector((state) => state.carts);
    // console.log(items);
    
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.COD); // by default COD is selected

    const [data, setData] = useState<OrderData>({
        phoneNumber: "",
        shippingAddress: "",
        totalAmount: 0,
        paymentDetails: {
            paymentMethod: PaymentMethod.COD,
        },
        items: [],
    });

    const handlePaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(e.target.value as PaymentMethod);
        setData({
            ...data,
            paymentDetails: {
                paymentMethod: e.target.value as PaymentMethod,
            },
        });
        //console.log(paymentMethod); // payment method log shows ulto selection but data is correct
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    // console.log(data);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const itemDetails: ItemDetails[] = items.map((item) => {
            return {
                productId: item.Product.id,
                quantity: item.quantity,
            };
        });
        const totalAmount = items.reduce((total, item) => item.Product.productPrice * item.quantity + total, 0);
        const orderData = {
            ...data,
            items: itemDetails,
            totalAmount: totalAmount,
        };
        console.log("order data is", orderData);
    };

    return (
        <>
        <Navbar />
        <div className="pt-24 px-4 sm:px-10 lg:px-20 xl:px-32">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Side: Order Summary */}
                <div className="lg:w-1/2">
                    <p className="text-2xl font-semibold text-white">Order Summary</p>
                    <p className="text-gray-300">Review your items and select a suitable shipping method.</p>

                    {items.length > 0 && items.map((item) => (
                        <div key={item.Product.id} className="mt-4 space-y-4 rounded-lg border bg-white px-4 py-1 shadow-lg">
                            <div className="flex flex-col sm:flex-row items-center justify-between bg-grey-800 rounded-lg p-1 shadow-sm">
                                <img
                                    className="h-24 w-28 rounded-md border object-cover"
                                    src={`http://localhost:3000/uploads/${item?.Product?.productImageUrl}`}
                                    alt="Product"
                                />
                                <div className="flex flex-col w-full px-4 py-2">
                                    <span className="text-lg font-semibold text-gray-900">{item?.Product?.productName}</span>
                                    <span className="float-right text-gray-500">Quantity: {item?.quantity}</span>
                                    <p className="text-xl font-bold text-gray-900">Price: ${item?.Product?.productPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <p className="mt-8 text-xl font-semibold">Payment Methods</p>
                    <form className="mt-6 space-y-8" onSubmit={handleSubmit}>
                        {/* COD Option */}
                        <div className="relative">
                            <input
                                className="peer hidden"
                                id="radio_1"
                                type="radio"
                                name="paymentMethod"
                                value={PaymentMethod?.COD}
                                onChange={handlePaymentMethod}
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-red-300 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-500 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 shadow-md peer-checked:text-gray-900"
                                htmlFor="radio_1"
                            >
                                <img className="w-14 object-contain" src="../public/cash-on-delivery-banner.png" alt="COD" />
                                <div className="ml-5">
                                    <span className="font-semibold peer-checked:text-gray-900">COD (Cash On Delivery)</span>
                                </div>
                            </label>
                        </div>

                        {/* Khalti Option */}
                        <div className="relative">
                            <input
                                className="peer hidden"
                                id="radio_2"
                                type="radio"
                                value={PaymentMethod?.khalti}
                                onChange={handlePaymentMethod}
                                name="paymentMethod"
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-red-300 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-500 flex cursor-pointer select-none rounded-lg border border-grey-300 p-4 shadow-md peer-checked:text-gray-900"
                                htmlFor="radio_2"
                            >
                                <img className="w-14 object-contain" src="../public/khalti.png" alt="Khalti" />
                                <div className="ml-5">
                                    <span className="font-semibold peer-checked:text-gray-900">Online (Khalti)</span>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>

                {/* Right Side: Payment Details */}
                <form className="lg:w-1/2 bg-gray-100 rounded-lg shadow-lg px-4 pt-8 pb-2 h-fit" onSubmit={handleSubmit}>
                    <p className="text-2xl font-semibold text-gray-900">Payment Details</p>
                    <p className="text-gray-500">Complete your order by providing your payment details.</p>
                    <div className="mt-6 space-y-4">
                        {/* Phone Number Input */}
                        <div className="relative">
                            <label htmlFor="phoneNumber" className="mt-4 block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="number"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:text-black text-black"
                                placeholder="Your Phone Number"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Shipping Address Input */}
                        <div className="relative">
                            <label htmlFor="shippingAddress" className="mt-4 block text-sm font-medium text-gray-700">Shipping Address</label>
                            <input
                                type="text"
                                id="shippingAddress"
                                name="shippingAddress"
                                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:text-black text-black"
                                placeholder="Street Address"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Order Summary */}
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                <p className="font-semibold text-gray-900">Rs 1000</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Shipping</p>
                                <p className="font-semibold text-gray-900">Rs 50</p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">Rs 1050</p>
                        </div>

                        {/* Action Buttons */}
                        <button type="submit" className="mt-4 mb-8 w-full rounded-md bg-green-700 px-6 py-3 font-medium text-white hover:bg-gray-800 transition duration-300">
                            Place Order
                        </button>
                        <button className="mt-4 mb-8 w-full rounded-md bg-[#5D2F9B] px-6 py-3 font-medium text-white hover:bg-gray-800 transition duration-300">
                            Pay With Khalti
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Checkout;
