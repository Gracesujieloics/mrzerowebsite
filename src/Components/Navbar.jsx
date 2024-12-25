import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-black text-white fixed top-0 z-30 w-full">
        {/* Navbar */}
        <header className="w-full flex justify-between items-center px-6 py-4 md:px-12">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <a href="/">mrzero</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-md uppercase">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/gallery" className="hover:text-gray-400">
              Gallery
            </a>
            <a href="/testimonials" className="hover:text-gray-400">
              Testimonials
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-white text-black text-md px-4 py-2 rounded uppercase font-bold">
              Contact
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-black w-full absolute top-16 left-0 py-4`}
        >
          <nav className="flex flex-col items-center gap-4 text-md uppercase">
            <a
              href="/"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/gallery"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="/testimonials"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <button
              className="bg-white text-black text-md px-4 py-2 rounded uppercase font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
