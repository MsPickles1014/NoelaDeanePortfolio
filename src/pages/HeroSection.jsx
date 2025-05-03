import { Link } from "react-router-dom";
import portraitImage from '../assets/NoelaImage.jpg';

function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left w-full md:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            Elevate Your Online Presence
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 animate-fade-in">
            I Am a Full-Stack Software Developer and Web Designer. Making Your Vision a Reality
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
            <Link to="/portfolio" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-sm sm:text-base font-medium text-white text-center">
              My Portfolio
            </Link>
            <Link
              to="mailto:noela.deane@cune.org"
              className="px-6 py-3 border border-gray-300 hover:bg-gray-800 transition rounded-full text-sm sm:text-base font-medium text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src={portraitImage}
            alt="Noela Deane Portrait"
            className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover border-4 border-blue-500 transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
