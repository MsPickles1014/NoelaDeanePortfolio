import { useState } from "react";
import { Link } from "react-router-dom";   

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "mailto:noela.deane@cune.org", external: true },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav 
      className="            bg-cover bg-center p-4 text-black py-6 shadow-lg"
      style={{ backgroundImage: `url('/yellowFlowerField.jpg')` }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-6xl md:text-6xl font-bold">Noela Deane </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a 
                  href={link.path} 
                  className="hover:text-gray-700 transition duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path} 
                  className="hover:text-gray-700 transition duration-300"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu (with animations) */}
      <div className={`absolute top-16 left-0 w-full bg-white transition-transform duration-300 shadow-lg md:hidden ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <ul className="p-4 space-y-4 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a 
                  href={link.path} 
                  className="block text-gray-800 hover:text-gray-500 transition duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path} 
                  className="block text-gray-800 hover:text-gray-500 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
