import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '/src/components/Logo.png'
//a tag se pura pg reload hota,Link se nhi isliye react SPA
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white  px-4 lg:px-6 py-2.5 backdrop-blur-md">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        
                        {/* <Link
                            to="#"
                            className="text-white  bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link> */}
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive? "text-blue-500":"text-gray-600"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive? " text-blue-500":"text-gray-600"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/precaution"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive? " text-blue-500":"text-gray-600"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Precaution
                                </NavLink>
                            </li>
                            
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

