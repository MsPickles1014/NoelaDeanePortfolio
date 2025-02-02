const ErrorPage = () => {
  return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200" >
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p>Oops! Something went wrong.</p>
      <p>The page you are looking for cannot be found.</p>
      <a href="/" className="text-blue-500 hover:text-blue-700">
              Go Back to Home
          </a>
    </div>
  );
};

export default ErrorPage;