    import { Link } from 'react-router-dom';

    interface FormProps {
    type: string;
    }

    const Form = ({ type }: FormProps) => {
    return (
        <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
        <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
            <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
            <div>
                <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
                <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Welcome to our registration page! Get started by creating your account.
                </p>
            </div>
            <div>
                <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
                <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.
                </p>
            </div>
            </div>

            <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
            <div className="mb-6">
                <h3 className="text-gray-800 text-2xl font-bold">


                {type === "register" ? "Create an account" : "Login to your account"}
                </h3>
            </div>

            <div className="space-y-6">

                {type === "register" && (
                <div>
                    <label className="text-gray-800 text-sm mb-2 block">Username</label>
                    <div className="relative flex items-center">
                    <input
                        name="username"
                        type="text"
                        required
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                        placeholder="Enter username"
                    />
                    </div>
                </div>
                )}

                <div>
                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                <div className="relative flex items-center">
                    <input
                    name="email"
                    type="email"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter email"
                    />
                </div>
                </div>

                <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                    <input
                    name="password"
                    type="password"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter password"
                    />
                </div>
                </div>
            </div>

            {/* The button text displays "Register Account" if type is "register", otherwise it shows "Login". */}
            <div className="!mt-12">
                <button
                type="button"
                className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                >
                {type === "register" ? "Register Account" : "Login"}
                </button>
            </div>



            {/* type === "register": This checks if the type prop passed to the Form component is "register". If it is, then the content inside the parentheses (...) is rendered. Otherwise, it is skipped. */}
            {type === "register" && (
                <p className="text-[13px] text-center text-gray-500 mt-6">
                Already have an account?
                <Link
                    to="/login" 
                    className="text-blue-600 font-semibold hover:underline ml-1"
                >
                    Login here
                </Link>
                </p>
            )}


            
            {/* type === "login": This checks if the type prop passed to the Form component is "login". If it is, then the content inside the parentheses (...) is rendered. Otherwise, it is skipped. */}
            {type === "login" && (
                <p className="text-[13px] text-center text-gray-500 mt-6">
                Don’t have an account?
                <Link
                    to="/register"  
                    className="text-blue-600 font-semibold hover:underline ml-1"
                >
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
