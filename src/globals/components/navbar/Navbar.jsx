import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchProfile, logOut } from '../../../store/authSlice';
import { fetchCartItems } from '../../../store/cartSlice';

const Navbar = () => {
    const {items} = useSelector((state) => state.cart);
    const {data:user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    navigate("/login")
  }

  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchProfile())
  },[])

  return (
    <> 
<>
<nav className="fixed top-0 left-0 z-10 w-full bg-transparent md:bg-transparent transition duration-300 ease-in-out">
    <div className="container m-auto px-6 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-4 gap-6">
            <div className="w-full flex justify-between lg:w-max">
                <Link to="/">
                    <div aria-label="logo" className="flex items-center space-x-3">
                    <img src="https://img.icons8.com/ios/452/restaurant.png" className="w-12" alt="restaurant logo" width="144" height="133" />

                        <span className="text-3xl font-bold text-yellow-900">
                            Food <span className="text-yellow-700">Management</span>
                        </span>
                    </div>
                </Link>
                <button aria-label="hamburger" id="hamburger" className="relative w-10 h-10 lg:hidden">
                    <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transition duration-300"></div>
                    <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transition duration-300"></div>
                </button>
            </div>

            <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white bg-opacity-60 md:space-y-0 md:p-0 md:flex-nowrap lg:w-7/12">
                <div className="text-gray-600 lg:pr-4">
                    <ul className="flex space-x-6 font-medium text-sm tracking-wide">
                        {
                            localStorage.getItem("token") && <Link to='/profile'><li>
                            <a className="block md:px-4 transition hover:text-yellow-700">
                                Profile
                            </a>
                        </li></Link>
                        }
                        {
                            items.length !== 0 && (
                                <li className="relative">
                            <Link to="/cart">
                                <a className="block md:px-4 transition hover:text-yellow-700">
                                    Cart
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-2 -translate-y-2">
                                        {items.length}
                                    </span>
                                </a>
                            </Link>
                        </li>
                            )
                        }
                    </ul>
                </div>
                <div className="flex items-center space-x-4 border-yellow-200 lg:pl-4">
                    {
                        (!localStorage.getItem("token")) ? (
                            <>
                                <Link to="/register">
                                    <button type="button" title="Register" className="py-3 px-6 rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300">
                                        <span className="font-semibold text-sm text-yellow-900">
                                            Register
                                        </span>
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button type="button" title="Login" className="py-3 px-6 rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300">
                                        <span className="font-semibold text-sm text-yellow-900">
                                            Login
                                        </span>
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <button onClick={handleLogout} type="button" title="Logout" className="py-3 px-6 rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300">
                                <span className="font-semibold text-sm text-yellow-900">
                                    Logout
                                </span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
</nav>


</>

    </>
  )
}

export default Navbar