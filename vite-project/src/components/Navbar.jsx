import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-pink-700">🌸 My Portfolio</h1>
        <ul className="flex justify-center items-centre space-x-6 text-sm md:text-base font-medium text-pink-800">
          <li><a href="/" className="hover:text-pink-600 transition-all">Home</a></li>
          <li><a href="/about" className="hover:text-pink-600 transition-all">About</a></li>
          <li><a href="/projects" className="hover:text-pink-600 transition-all">Projects</a></li>
          <li><a href="/contact" className="hover:text-pink-600 transition-all">Contact</a></li>
      
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
