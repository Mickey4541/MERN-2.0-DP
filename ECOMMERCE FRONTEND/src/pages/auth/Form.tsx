import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProps, UserDataType } from './types';

const Form: React.FC<FormProps> = ({ type, onSubmit }) => {
    //for register::;
    const [userData, setUserData] = useState<UserDataType>({
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(userData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700 p-4">
            <div className="flex flex-col items-center md:flex-row w-full max-w-2xl shadow-[0_2px_10px_9px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden bg-gray-800 hover:shadow-[0_2px_15px_5px_rgba(6,81,237,0.6)] transition-shadow duration-300">
                <div className="flex flex-col justify-center w-full md:w-1/2 bg-gray-800 p-6 space-y-8">
                    <div>
                        <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
                        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                            Welcome to our registration page! Get started by creating your account.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
                        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                            Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.
                        </p>
                    </div>
                </div>

                <form className="flex flex-col w-full md:w-1/2 p-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <h3 className="text-white text-2xl font-bold">
                            {type === "register" ? "Create an account" : "Login to your account"}
                        </h3>
                    </div>

                    <div className="space-y-6">
                        {type === "register" && (
                            <div>
                                <label className="text-white text-sm mb-2 block">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    required
                                    className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                    placeholder="Enter username"
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        <div>
                            <label className="text-white text-sm mb-2 block">Email Id</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="text-white text-sm mb-2 block">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter password"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* The button text displays "Register Account" if type is "register", otherwise it shows "Login". */}
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="w-full py-3 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none"
                        >
                            {type === "register" ? "Register Account" : "Login"}
                        </button>
                    </div>

                    {/* type === "register": This checks if the type prop passed to the Form component is "register". If it is, then the content inside the parentheses (...) is rendered. Otherwise, it is skipped. */}
                    {type === "register" && (
                        <p className="text-sm text-center text-gray-500 mt-6">
                            Already have an account?
                            <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
                                Login here
                            </Link>
                        </p>
                    )}

                    {/* type === "login": This checks if the type prop passed to the Form component is "login". If it is, then the content inside the parentheses (...) is rendered. Otherwise, it is skipped. */}
                    {type === "login" && (
                        <p className="text-sm text-center text-gray-500 mt-6">
                            Don’t have an account?
                            <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1">
                                Register here
                            </Link>
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Form;
