// import { useState } from "react";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Contact", path: "/contact" },
//     { name: "Resume", path: "/resume" },
//   ];

//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-3xl font-bold"> Hello 
//         <ul>
//         I am Noela
//             </ul>
//         </h1>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-6">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a href={link.path} className="hover:text-gray-300">
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-black focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <ul className="md:hidden bg-gray-900 p-4 space-y-2">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a href={link.path} className="block text-white hover:text-gray-300">
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
import { useState } from "react";
import { Link } from "react-router-dom";  // :white_check_mark: Import Link

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },  // :white_check_mark: Fixed Path
  ];

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hello, I am Noela</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-gray-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="block text-white hover:text-gray-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;