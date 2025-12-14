import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 bg-white/90 backdrop-blur-sm shadow-md fixed z-50">
      <div>
        <h1 className="text-2xl font-bold text-blue-600">Ashu Tiwari</h1>
      </div>

      <ul className="hidden md:flex gap-8">
        {links.map(({ id, link }) => (
          <li key={id}>
            <a
              href={`#${link}`}
              className="capitalize font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-700 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-6 text-3xl"
              onClick={() => setNav(false)}
            >
              <a
                href={`#${link}`}
                className="capitalize text-gray-700 hover:text-blue-600"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
