// import portraitImage from '../assets/nDeaneProfilePic.jpg';

// const About = () => {
//     return (
//         <main className="bg-gray-900 text-white py-12">
//             <section className="container mx-auto px-6 lg:px-12 text-center">
//                 {/* Portrait Photo */}
//                 <div className="flex justify-center mb-8">
//                     <img
//                         src={portraitImage}
//                         alt="Noela Deane Portrait"
//                         className="rounded-full w-32 h-40 object-cover border-4 border-blue-500 transition-transform transform hover:scale-105"
//                     />
//                 </div>

//                 {/* Bio Section */}
//                 <div>
//                     <h1 className="text-4xl font-bold text-blue-500 mb-6">About Me</h1>
//                     <p className="text-lg text-gray-300 mb-6">
//                         I graduated with a Bachelor's degree in Computer Science and established a firm foundation in the educational sector.
//                         I am a former Executive Director of Education embarking on an exciting journey into software development.
//                         My transition from education leadership to technology represents my commitment to lifelong learning and embracing new challenges.
//                     </p>

//                     <div className="mb-8">
//                         <h3 className="text-2xl font-semibold text-blue-400 mb-4">I specialize in:</h3>
//                         <ul className="list-disc pl-6 mt-2 text-gray-300">
//                             <li>Front-end and full-stack web development</li>
//                             <li>CSS, HTML, JavaScript, Web APIs, Typescript, Servers and APIs, SQL, NoSQL, Full-Stack React, MERN, Authentication, Python</li>
//                             <li>Creating efficient, user-friendly applications</li>
//                             <li>Building responsive and intuitive user interfaces</li>
//                         </ul>
//                     </div>

//                     <div className="mb-8">
//                         <h3 className="text-2xl font-semibold text-blue-400 mb-4">What Sets Me Apart:</h3>
//                         <ul className="list-disc pl-6 mt-2 text-gray-300">
//                             <li>Unique background that brings a fresh perspective to software development</li>
//                             <li>Detail-oriented approach combined with a growth mindset</li>
//                             <li>Strong foundation in problem-solving and analytical thinking</li>
//                             <li>Natural ability to break down complex concepts, developed through years of teaching</li>
//                             <li>Expertise in facilitating collaborative environments that foster innovation</li>
//                         </ul>
//                     </div>

//                     <div className="mb-8">
//                         <h3 className="text-2xl font-semibold text-blue-400 mb-4">Current Journey:</h3>
//                         <ul className="list-disc pl-6 mt-2 text-gray-300">
//                             <li>I am actively expanding my technical toolkit</li>
//                             <li>Developing practical applications using modern frameworks</li>
//                             <li>Building a portfolio of meaningful projects</li>
//                             <li>Focusing on creating innovative solutions that enhance user experiences</li>
//                             <li>Contributing to projects that make a positive impact in the tech industry</li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h3 className="text-2xl font-semibold text-blue-400">Let's connect and explore how my unique talents can contribute to your next project!</h3>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default About;


import portraitImage from '../assets/nDeaneProfilePic.jpg';

const About = () => {
    return (
        <main className="bg-gray-900 text-white py-12">
            <section className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Bio Section (Left Side) */}
                <div className="w-1/2 text-left">
                    <h1 className="text-4xl font-bold text-blue-500 mb-6">About Me</h1>
                    <p className="text-lg text-gray-300 mb-6">
                        I graduated with a Bachelor's degree in Computer Science and established a firm foundation in the educational sector.
                        I am a former Executive Director of Education embarking on an exciting journey into software development.
                        My transition from education leadership to technology represents my commitment to lifelong learning and embracing new challenges.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-4">I specialize in:</h3>
                        <ul className="list-disc pl-6 mt-2 text-gray-300">
                            <li>Front-end and full-stack web development</li>
                            <li>CSS, HTML, JavaScript, Web APIs, TypeScript, Servers and APIs, SQL, NoSQL, Full-Stack React, MERN, Authentication, Python</li>
                            <li>Creating efficient, user-friendly applications</li>
                            <li>Building responsive and intuitive user interfaces</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-4">What Sets Me Apart:</h3>
                        <ul className="list-disc pl-6 mt-2 text-gray-300">
                            <li>Unique background that brings a fresh perspective to software development</li>
                            <li>Detail-oriented approach combined with a growth mindset</li>
                            <li>Strong foundation in problem-solving and analytical thinking</li>
                            <li>Natural ability to break down complex concepts, developed through years of teaching</li>
                            <li>Expertise in facilitating collaborative environments that foster innovation</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-4">Current Journey:</h3>
                        <ul className="list-disc pl-6 mt-2 text-gray-300">
                            <li>I am actively expanding my technical toolkit</li>
                            <li>Developing practical applications using modern frameworks</li>
                            <li>Building a portfolio of meaningful projects</li>
                            <li>Focusing on creating innovative solutions that enhance user experiences</li>
                            <li>Contributing to projects that make a positive impact in the tech industry</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-400">
                            Let's connect and explore how my unique talents can contribute to your next project!
                        </h3>
                    </div>
                </div>

                {/* Portrait Photo (Right Side) */}
                <div className="w-1/3 flex justify-end">
                    <img
                        src={portraitImage}
                        alt="Noela Deane Portrait"
                        className="rounded-full w-75h-60 object-cover border-4 border-blue-500 transition-transform transform hover:scale-105"
                    />
                </div>
            </section>
        </main>
    );
};

export default About;
