const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-sm sm:text-base mb-2">Oops! Something went wrong.</p>
      <p className="text-sm sm:text-base mb-6">The page you are looking for cannot be found.</p>
      <a
        href="/"
        className="inline-block px-5 py-2 text-sm sm:text-base bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
