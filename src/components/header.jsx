import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import Navbar from './navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-blue-800 text-blue-600 shadow-md">
        <div className="container mx-auto px-2 py-1 flex justify-between items-center">
          <div className="text-indigo-500 text-2xl hover:text-gray-800 font-semibold">
              <button className="flex items-center hover:text-gray-800 hover:shadow-md hover:ring-2 hover:ring-blue-500/50 text-white font-bold py-2 px-4 rounded transition duration-300">
                <img src="./vite.svg" className="w-6 pt-1 h-6 mr-2" alt="logo unavailable" />Blue Mountain Online Store
              </button>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative mt-2">
                <input
                  type="text"
                  className="mr-10 w-full bg-white text-sm border rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                  placeholder="Search Blue Mountain"
                />
                <button
                  className="bg-blue-800 absolute right-1 top-1 rounded p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow active:bg-slate-700 active:shadow-none"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <Link to="/" className="text-white pt-3 hover:text-gray-800 font-bold transition">Home</Link>
            <Link to="/product" className="text-white pt-3 hover:text-gray-800 font-bold transition">Products</Link>
            <Link to="/delivery" className="text-white pt-3 hover:text-gray-800 font-bold transition">Countdown</Link>
            <Link to="/store" className="text-white pt-3 hover:text-gray-800 font-bold transition">Store</Link>
            <Link to="/login" className="text-white pt-3 hover:text-gray-800 font-bold transition">Login</Link>
            <Link to="/signup" className="text-white pt-3 hover:text-gray-800 font-bold transition">Signup</Link>
          </nav>

          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none ml-4"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden bg-blue-600 dark:bg-blue-600 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <Link to="/" className="block text-white hover:text-gray-800 font-bold transition py-2 px-4">Home</Link>
          <Link to="/product" className="block text-white hover:text-gray-800 font-bold transition py-2 px-4">Products</Link>
          <Link to="/delivery" className="block text-white hover:text-gray-800 font-bold transition py-2 px-4">Countdown</Link>
          <Link to="/store" className="block text-white hover:text-gray-800 font-bold transition py-2 px-4">Store</Link>
          <Link to="/login" className="block text-white hover:text-gray-800 font-bold transition py-2 px-4">Login</Link>
          <Link to="/signup" className="block text-white hover:text-gray-800 font-bold transition py-2 px-4">Signup</Link>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
