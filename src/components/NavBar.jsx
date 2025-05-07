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
      className="relative z-50 bg-cover bg-center text-black shadow-lg"
      style={{ backgroundImage: `url('/yellowFlowerField.jpg')` }}
    >
      {/* Overlay for background image readability */}
      <div className="absolute inset-0 bg-white/60 z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Noela Deane</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="hover:text-gray-700 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-gray-700 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-black focus:outline-none text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`relative z-10 md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-white px-4 py-4 space-y-3 text-lg">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="block text-gray-800 hover:text-blue-600 transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 hover:text-blue-600 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
