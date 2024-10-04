import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Purely
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Login</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
