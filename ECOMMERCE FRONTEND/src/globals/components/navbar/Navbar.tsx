import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
            Rajan
        </div>
        <div className="flex items-center">
        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            <Link to="/" className="py-2 px-6 flex">
                Home
            </Link>
            
            <Link to="/login" className="py-2 px-6 flex">
                LOGIN
            </Link>
            <Link to="/logout" className="py-2 px-6 flex">
                LOGOUT
            </Link>
            <Link to="/register" className="py-2 px-6 flex bg-red-600 rounded-xl">
                REGISTER
            </Link>
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
            </button>
        </div>
    </div>
</header>
  )
}

export default Navbar