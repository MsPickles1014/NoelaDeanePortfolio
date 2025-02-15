const Footer = () => {
    return (
        <footer className="bg-blue-600 p-4 text-white py-3">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                
                {/* GitHub Link */}
                <a
                    href="https://github.com/MsPickles1014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-black transition-transform transform hover:scale-105"
                    aria-label="GitHub"
                >
                    GitHub
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/noela-d-09516a1a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-black transition-transform transform hover:scale-105"
                    aria-label="LinkedIn"
                >
                    LinkedIn
                </a>

                {/* Email Link */}
                <a
                    href="mailto:noela.deane@cune.org"
                    className="text-gray-300 hover:text-black transition-transform transform hover:scale-105"
                    aria-label="Email"
                >
                    Email
                </a>
            </div>

            {/* Copyright Text */}
            <p className="text-center text-black text-lg mt-4">
                &copy; 2025 Noela Deane. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
