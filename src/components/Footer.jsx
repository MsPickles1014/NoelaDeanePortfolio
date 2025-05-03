const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          
          {/* GitHub */}
          <a
            href="https://github.com/MsPickles1014"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-100 transition-transform transform hover:scale-105"
            aria-label="GitHub"
          >
            GitHub
          </a>
  
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/noela-d-09516a1a6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-100 transition-transform transform hover:scale-105"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
  
          {/* Email */}
          <a
            href="mailto:noela.deane@cune.org"
            className="hover:text-yellow-100 transition-transform transform hover:scale-105"
            aria-label="Email"
          >
            Email
          </a>
        </div>
  
        {/* Copyright */}
        <p className="text-center text-sm sm:text-base mt-6 text-white">
          &copy; {new Date().getFullYear()} Noela Deane. All Rights Reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  