


const Resume = () => {
  return (
    <section className="text-gray-900 dark:text-white bg-gray-900 dark:bg-gray-800 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">My Resume</h1>
      <p className="mb-6 text-base sm:text-lg text-gray-300 text-center">
        Click the button below to print or download my resume in a new tab.
      </p>

      <a
        href="/NoelaDeaneITResume.pdf"
        download="NoelaDeaneITResume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 sm:py-3 sm:px-6 rounded-full transition transform hover:scale-105 mb-6"
      >
        Print Resume
      </a>

      <div className="w-full max-w-4xl h-[400px] sm:h-[600px] md:h-[800px]">
        <iframe
          src="/NoelaDeaneITResume.pdf"
          title="Noela Deane's Resume"
          className="w-full h-full border-2 border-gray-300 rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
