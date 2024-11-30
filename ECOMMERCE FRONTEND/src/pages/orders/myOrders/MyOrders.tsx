    import { useEffect, useState } from "react";
    import Navbar from "../../../globals/components/navbar/Navbar";
    import { useAppDispatch, useAppSelector } from "../../../store/hooks";
    import {
    fetchMyOrders,
    updateOrderStatusInStore,
    } from "../../../store/checkoutSlice";
    import { Link } from "react-router-dom";
    import { OrderStatus } from "../../../globals/components/types/checkoutTypes";
    import { socket } from "../../../App";

    const MyOrders = () => {
    const dispatch = useAppDispatch();
    const { myOrders } = useAppSelector((state) => state.orders);

    const [selectedItem, setselectedItem] = useState<OrderStatus>(
        OrderStatus.All
    );
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [date, setDate] = useState("");

    // console.log(selectedItem);

    useEffect(() => {
        dispatch(fetchMyOrders());
    }, []);
    console.log(myOrders);

    const filteredOrders = myOrders
        .filter(
        (order) =>
            selectedItem === OrderStatus.All || order.orderStatus === selectedItem
        )
        .filter(
        (order) =>
            order.id.toLowerCase().includes(searchTerm) ||
            order.payment.paymentMethod.toLowerCase().includes(searchTerm) ||
            order.totalAmount.toString().includes(searchTerm)
        )
        .filter(
        (order) =>
            date === "" ||
            new Date(order.createdAt).toLocaleDateString() ===
            new Date(date).toLocaleDateString()
        );
    // >>>>>>>>>>>>>>>>>>>>>OR>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // const filteredOrders = myOrders
    // .filter(order => selectedItem === OrderStatus.All || order.orderStatus === selectedItem)
    // .filter(order => {
    //     const term = searchTerm?.toLowerCase() || ""; // Handle undefined by defaulting to an empty string
    //     return (
    //     order.id.toLowerCase().includes(term) ||
    //     order.payment.paymentMethod.toLowerCase().includes(term) ||
    //     order.totalAmount.toString().includes(term)
    //     );
    // });

    useEffect(() => {
        socket.on("statusUpdated", (data: any) => {
        dispatch(updateOrderStatusInStore(data));
        });
    }, [socket]);

    return (
        <>
        <Navbar />
        <div className="antialiased font-sans bg-black min-h-screen pt-20">
            <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                <h2 className="text-3xl font-semibold leading-tight text-white">
                    Orders
                </h2>
                </div>
                <div className="my-4 flex sm:flex-row flex-col space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                    <select
                        onChange={(e) =>
                        setselectedItem(e.target.value as OrderStatus)
                        }
                        className="h-full rounded-lg border border-gray-600 bg-gray-800 text-white py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500"
                    >
                        <option value={OrderStatus.All}>All</option>
                        <option value={OrderStatus.Pending}>Pending</option>
                        <option value={OrderStatus.Delivered}>Delivered</option>
                        <option value={OrderStatus.Ontheway}>On The Way</option>
                        <option value={OrderStatus.Cancel}>Cancelled</option>
                        <option value={OrderStatus.Preparation}>Preparation</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                    </div>
                </div>
                <div className="block relative flex-grow">
                    <input
                    placeholder="Search by orderId, totalAmt. or paymentMethod"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="appearance-none rounded-lg border border-gray-600 bg-gray-800 text-white py-2 px-6 pl-10 w-full text-sm placeholder-gray-400 focus:outline-none focus:bg-gray-700"
                    />
                </div>
                <div className="block relative flex-grow">
                    <input
                    placeholder="Search"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    className="appearance-none rounded-lg border border-gray-600 bg-gray-800 text-white py-2 px-6 pl-10 w-full text-sm placeholder-gray-400 focus:outline-none focus:bg-gray-700"
                    />
                </div>
                </div>
                <div className="overflow-x-auto">
                <div className="min-w-full shadow-lg rounded-lg overflow-hidden bg-gray-800">
                    <table className="min-w-full table-auto text-white">
                    <thead>
                        <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-700 text-left text-xs font-semibold uppercase tracking-wider">
                            OrderId
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-700 text-left text-xs font-semibold uppercase tracking-wider">
                            Total Amt
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-700 text-left text-xs font-semibold uppercase tracking-wider">
                            Payment Status
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-700 text-left text-xs font-semibold uppercase tracking-wider">
                            Order Status
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-700 text-left text-xs font-semibold uppercase tracking-wider">
                            Ordered At
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 &&
                        filteredOrders.map((order) => {
                            // console.log("The payment staus is ", order.Payment.paymentStatus);

                            return (
                            <tr key={order.id}>
                                <td className="px-5 py-5 border-b border-gray-700 text-sm">
                                <Link to={`/myorders/${order.id}`}>
                                    <p className="text-blue-500 cursor-pointer">
                                    {order.id}
                                    </p>
                                </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-700 text-sm">
                                <p className="text-gray-400">
                                    {order.totalAmount}
                                </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-700 text-sm">
                                <p className="text-green-400">
                                    {order.payment.paymentStatus ?? "N/A"}
                                </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-700 text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-yellow-500 leading-tight">
                                    <span className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                                    <span className="relative">
                                    {order.orderStatus}
                                    </span>
                                </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-700 text-sm">
                                <p className="text-gray-400">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                    </table>
                    <div className="px-5 py-5 bg-gray-800 border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-xs xs:text-sm text-gray-400">
                        Showing 1 to 4 of 50 Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button className="text-sm bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-l">
                        Prev
                        </button>
                        <button className="text-sm bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-r">
                        Next
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
    };

    export default MyOrders;
