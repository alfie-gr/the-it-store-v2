import { useState, useRef, useEffect } from "react";
import { CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            {/* Top Navigation */}
            <nav className="w-full bg-[#2D2D2D] px-4 md:px-10  fixed top-0 z-20  shadow">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/">
                     <img
                        src="https://www.theitstore.com/itstore/wp-content/themes/iTStore_theme_19/images/logoweb.svg"
                        alt="Logo"
                        className="h-12"

                    />
                    </Link>
                   

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex space-x-9 items-center">

                        <a href="#" className=" flex  px-3 py-5 text-white hover:text-[#FB880E] font-poppins font-medium text-sm">

                            <svg className="size-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                            01227455250</a>
                        <a href="#" className=" flex  px-3 py-5 text-white hover:text-[#FB880E] font-poppins font-medium text-sm">

                            <svg className="size-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>


                            info@theitstore.com</a>
                        
                    </div>

                    

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 space-y-2">
                        <Link to="#" className="block text-white px-4 py-2">Repair</Link>
                        <Link to="#" className="block text-white px-4 py-2">Advice</Link>
                        <Link to="#" className="block text-white px-4 py-2">Sell or Trade</Link>
                        <Link to="#" className="block text-white px-4 py-2">Contact</Link>
                    </div>
                )}
            </nav>


            {/* Secondary Nav with Dropdown */}
            <nav className="bg-[#3f3f3f] text-white w-full fixed top-16 z-20">
                <div className="flex justify-between items-center w-full px-10 font-semibold font-poppins">
                    {/* Left Section: Dropdowns */}
                    <div className="flex items-center space-x-4">
                        {/* Shop All Dropdown */}
                        <div className="relative group">
                            <button type="button" className="py-4 px-3 hover:bg-[#2D2D2D] hover:text-[#FB880E] flex items-center gap-2">
                                <span className=" text-[16px] ">Shop All</span>
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className="absolute hidden group-hover:block bg-[#2D2D2D] text-white w-48 shadow-lg">
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">Mac</a>
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">iPhone</a>
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">iPad</a>
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">Apple Watch</a>
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">Accessories</a>
                            </div>
                        </div>

                        {/* Repair Dropdown */}
                        <div className="relative group">
                            <button type="button" className="py-4 px-3 hover:bg-[#2D2D2D]  hover:text-[#FB880E] flex items-center gap-2">
                                <Link to="/repair">Repair</Link>
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className="absolute hidden group-hover:block bg-[#2D2D2D] text-white w-48 shadow-lg z-20">
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">Mac Repairs</a>
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">iPhone Repairs</a>
                                <a href="#" className="block px-6 py-5 hover:bg-[#FF8300]">iPad Repairs</a>
                            </div>
                        </div>

                        <button type="button" className="py-4 px-3 hover:bg-[#2D2D2D]  hover:text-[#FB880E] flex items-center gap-2">
                            <span>Advice</span>
                        </button>
                        <button type="button" className="py-4 px-3 hover:bg-[#2D2D2D] hover:text-[#FB880E] flex items-center gap-2">
                            <span>Sell or Trade</span>
                        </button>
                        <button type="button" className="py-4 px-3 hover:bg-[#2D2D2D] hover:text-[#FB880E] flex items-center gap-2">
                            <span>Contact Us</span>
                        </button>
                    </div>

                    
                </div>
            </nav>
        </div>
    );
}
