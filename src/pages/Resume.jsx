import resumePDF from '../assets/NoelaDeaneTechnicalResume.pdf'

const Resume = () => {
    return (
        <section className="text-gray-900 dark:text-white bg-gray-900 dark:bg-gray-800 min-h-screen flex flex-col items-center justify-center py-12 px-6">
            <h1 className="text-4xl font-bold mb-6 text-white">My Resume</h1>
            <p className="mb-6 text-lg text-gray-300">
                Click the button below to view or download my resume in a new tab.
            </p>
            <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105 mb-8"
            >
                 My Resume
            </a>
            <div className="mt-6 w-full max-w-4xl">
                <iframe
                    src={resumePDF}
                    title="Noela Deane's Resume"
                    className="w-full h-[800px] border-2 border-gray-300 rounded-lg shadow-lg"
                ></iframe>
            </div>
        </section>
    );
};

export default Resume;
