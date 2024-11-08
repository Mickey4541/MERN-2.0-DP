import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useEffect, useState } from 'react';
import { clearToken } from '../../../store/authSlice';

const Navbar = () => {
    const navigate = useNavigate()

    // const data = useAppSelector((state)=>state.auth) //state vanni redux ko room vayo ra state.auth vaneko tesko room vayo from store.ts.
    // const user = data.user
    // console.log(user);
    /////////OR direct distructuring /////////////
    const {user} = useAppSelector((state)=>state.auth) //state vanni redux ko room vayo ra state.auth vaneko tesko room vayo from store.ts.
    // console.log(user.token);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)


    useEffect(() => {
      const token =  localStorage.getItem('token')
      setIsLoggedIn(!!token || !!user.token)//The setIsLoggedIn(!!token || !!user.token); code uses a logical expression to determine
    // whether the user is logged in. First, it applies a double negation (!!) to both token and user.token. This converts each of these 
    // values to a boolean: if token or user.token has a truthy value (such as a non-empty string), !!token or !!user.token will evaluate to true; 
    // otherwise, if they're falsy (like null or undefined), they’ll evaluate to false. The logical OR (||) operator then checks if at least one of 
    // these values is true. If either !!token or !!user.token is true, the whole expression becomes true, meaning isLoggedIn will be set to true. If 
    // both are false, isLoggedIn will be false. This setup is particularly useful for authentication checks, as it sets isLoggedIn to true whenever a 
    // valid token is present, indicating the user is logged in.
    
    //isLoggedIn(!false || !true)
    //isloggedIn(true || false)
    //isloggedIn(true)
    }, [user.token])
    


    const handleLogout = () => {
    //     console.log('Before logout, token in localStorage:', localStorage.getItem('token'));
    // console.log('Before logout, token in Redux:', user.token);  // Use Redux state to check the token

        localStorage.removeItem('token')
        setIsLoggedIn(false)
        const dispatch = useAppDispatch()
        dispatch(clearToken())
        
    //     console.log('After logout, token in localStorage:', localStorage.getItem('token'));
    // console.log('After logout, token in Redux:', user.token);  // Use Redux state to check the token
        navigate('/login')
    }

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
            
            {
                !isLoggedIn ? (
                    <>
                    <Link to="/login" className="py-2 px-6 flex">
                LOGIN
            </Link> 
            <Link to="/register" className="py-2 px-6 flex bg-red-600 rounded-xl">
                REGISTER
            </Link>
                    </>
                ) : (
                    <Link to='#' onClick={(e)=>{e.preventDefault(); handleLogout();}} className="py-2 px-6 flex">
                LOGOUT
            </Link>
                )
            }
            
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