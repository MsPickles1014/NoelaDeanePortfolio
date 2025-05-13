import image1 from '../assets/CoolCademyImage.jpg'
import image7 from '../assets/employeeTrackerDB-SQL.png';
import image8 from '../assets/ReadMeImage.png';
import image9 from '../assets/vehicleBuilderImage.webp';
import image5 from '../assets/Weather-Forecast-API-Image.jpeg';
import image6 from '../assets/digital-marketing-meeting.jpg';
import image2 from '../assets/GlimmerPic.png';
import image3 from '../assets/WordleImage.png';
import image4 from '../assets/GridVentureImage.png';
const projects = [
    {
        id: 1,
        title: "Alphabet Learning App",
        description: "The Alphabet Learning App is an interactive, educational tool designed to help users learn the alphabet. Users are able to input letters, dynamically generates flashcards with images and text.",
        image: image1, 
        github: "https://github.com/MsPickles1014/CoolCademy",
        webpage: "https://mspickles1014.github.io/CoolCademy/",
    },   
    {
        id: 2,
        title: "Glimmer In Time",
        description: "GlimmerApp is a full-stack web application that allows users to discover historical events that happened on a specific month and day using data from Wikipedia's On This Day API.",
        image: image2, // Imported image
        github: "https://github.com/MsPickles1014/challange-14-GlimmerApp",
        webpage: "",
    }, 
    {
        id: 3,
        title: "Wordle Game",
        description: "A fully functional CLASSIC Wordle clone built with React Vite and Tailwind CSS, featuring a modern UI with gradient and glassmorphism, deployed on AWS Amplify, and tested via GitHub Actions.",
        image: image3, // Imported image
        github: "",
        webpage: "",
        
    },
    {
        id: 4,
        title: "Grid Venture",
        description: "GridVenture is a retro-inspired, grid-based exploration puzzle game where players navigate a grid, solve puzzles, and uncover secrets.  blend of strategy and adventure, with engaging graphics and sound effects.",
        image: image4, // Imported image
        github: "https://github.com/MsPickles1014/Grid-Venture",
        webpage: "https://main.d1mhan6qm2jheq.amplifyapp.com/",
    },
    {
        id: 5,
        title: "Weather Tracker",
        description: "Weather Tracker is a dynamic web application that provides real-time weather information for user-specified locations. Using the OpenWeather API, the app displays current conditions, a 5-day forecast, and key metrics like temperature, humidity, and wind speed.",
        image: image5, // Imported image
        github: "https://github.com/MsPickles1014/Weather-Dashboard",
        webpage: "",
    },
    {
        id: 6,
        title: "Horiseon",
        description: "Horiseon is an Search Engine Optimization (SEO) platform specifically designed to boost business’s online visibility and organic search rankings through a variety of optimization strategies. The website provides a full range of services including keyword research, on-page optimization and technical audits.",
        image: image6, // Imported image
        github: "https://github.com/MsPickles1014/Horiseon-module1-challange",
        webpage: "",
    },
    {
        id: 7,
        title: "Employee Tracker",
        description: "Employee Tracker is a command-line application built to streamline the management of a company's employee database. It enables users to efficiently add, view, update, and organize employee records, roles, and departments.",
        image: image7, // Imported image
        github: "https://github.com/MsPickles1014/Challenge-10",
        webpage: "",
    },
    {
        id: 8,
        title: "Professional README Generator",
        description: "The README Generator is a powerful Command Line Interface (CLI) tool.designed to streamline the creation of professional and structured README.md files for projects. By providing simple prompts, developers can create a polished README.",
        image: image8, // Imported image
        github: "https://github.com/MsPickles1014/challenge-5",
        // webpage: "",
    },
    {
        id: 9,
        title: "Vehicle Builder",
        description: "This project is a Command Line Interface (CLI) application for managing a fleet of vehicles. It allows users to create different types of vehicles (Cars, Trucks, and Motorbikes), interact with them, and perform various actions.",
        image: image9, // Imported image
        github: "https://github.com/MsPickles1014/Challenge-6",
        // webpage: "",
    },
   
];

const Portfolio = () => {
    return(
       
                <section id="portfolio" className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
        
                    <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                            My Portfolio
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-300 animate-fade-in">
                            A showcase of my best software and web development projects.
                        </p>
        
                        {/* Project Grid */}
                        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-gray-800 shadow-lg rounded-lg overflow-hidden h-full flex flex-col transition transform hover:scale-105"
                                >
                                    {/* Project Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    {/* Project Details */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-300 flex-grow">
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-lg font-medium text-white text-center"
                                        >
                                            View on GitHub
                                        </a>
                                        <a
                                        href={project.webpage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-lg font-medium text-white text-center"
                                        >
                                            View Webpage
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
    )

}


export default Portfolio;