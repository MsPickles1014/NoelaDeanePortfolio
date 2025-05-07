
import portraitImage from '../assets/NoelaAboutPic1.jpg';

const About = () => {
    return (
        <main className="bg-gray-900 text-white py-12">
        <section className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Bio Section (Top on Mobile, Left on Desktop) */}
          <div className="w-full md:w-2/3 text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-6">About Me</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              I graduated with a degree in Computer Science and established a firm foundation...
            </p>
      
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">I specialize in:</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm sm:text-base">
                <li>Front-end and full-stack web development</li>
                <li>CSS, HTML, JavaScript, Web APIs...</li>
                <li>Creating user-friendly, efficient applications</li>
              </ul>
            </div>
      
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">What Sets Me Apart:</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm sm:text-base">
                <li>Unique background that brings a fresh perspective</li>
                <li>Detail-oriented approach + growth mindset</li>
              </ul>
            </div>
      
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">Current Journey:</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm sm:text-base">
                <li>Expanding my technical toolkit</li>
                <li>Building a portfolio of meaningful projects</li>
              </ul>
            </div>
      
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">
              Let&apos;s connect and explore how my unique talents can contribute to your next project!
            </h3>
          </div>
      
          {/* Portrait Image (Bottom on Mobile, Right on Desktop) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src={portraitImage}
              alt="Noela Deane Portrait"
              className="rounded-full w-52 h-52 sm:w-60 sm:h-60 object-cover border-4 border-blue-500 transition-transform hover:scale-105"
            />
          </div>
      
        </section>
      </main>
      
    );
};

export default About;
