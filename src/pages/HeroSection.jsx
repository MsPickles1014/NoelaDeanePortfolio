import { Link } from "react-router-dom";
import portraitImage from '../assets/nDeaneProfilePic.jpg';


function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
      {/* Background Overlay */}  
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-1/3 flex justify-end">
                          <img
                              src={portraitImage}
                              alt="Noela Deane Portrait"
                              className="rounded-full w-75h-60 object-cover border-4 border-blue-500 transition-transform transform hover:scale-105"
                          />
                      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
          Elevate Your Online Presence
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 animate-fade-in">
          I Am a Full-Stack Software Developer and Web Designer. Making Your Vision a Reality
        </p>

        <div className="mt-6 space-x-4">
          <Link to="/portfolio" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-lg font-medium">
            My Portfolio
          </Link>
          <Link
            to="mailto:your-noela.deane@cune.org"
            className="px-6 py-3 border border-gray-300 hover:bg-gray-800 transition rounded-full text-lg font-medium"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
