
const Footer = () => {
  return (
      <footer >
          <div className="flex justify-center space-x-6"
          >
              <ul>
                  <a
                      href="https://github.com/MsPickles1014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700 dark:hover:text-blue-300"

                      aria-label="GitHub"
                  >
                      GitHub
                  </a>
              </ul>
              <ul>
                  <a
                  href="https://www.linkedin.com/in/noela-d-09516a1a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className
                  aria-label="LinkedIn"
              >
                  LinkedIn
              </a>

                  </ul>
                  <ul>
                <a
                  href="mailto:noela.deane@cune.org"
                  className="hover:text-blue-700 dark:hover:text-blue-300"
                  aria-label="Email"
              >
                  Email
              </a>
                  </ul>
             
          </div>
          <p> &copy; 2025 Noela Deane. All Rights Reserved.</p>
      </footer>
  );
};

export default Footer;














