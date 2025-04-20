import React from 'react';

const About = () => {
    return (
        <section className="w-full min-h-screen h-[100vh] py-16 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                
                {/* Image Side */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://st4.depositphotos.com/1907633/21216/i/450/depositphotos_212160042-stock-photo-coding-software-developer-work-new.jpg"
                        alt="Me being creative"
                        className="rounded-3xl shadow-2xl w-[29rem] md:w-[26rem] object-cover"
                    />
                </div>

                {/* Text Side */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
                        About Me 💫
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Hi, I'm <span className="font-semibold text-pink-600">Ishraq</span> — a passionate <span className="text-purple-600 font-medium">Full Stack Developer</span> who loves turning complex ideas into smooth, beautiful web experiences.
                    </p>
                    <p className="text-md text-gray-600 mb-3">
                        With strong hands-on experience in both frontend and backend, I build fully functional and modern web applications using:
                    </p>
                    <ul className="list-disc list-inside text-left text-md text-gray-700 mb-3">
                        <li><span className="font-medium text-blue-600">Frontend:</span> HTML, CSS, JavaScript, React.js, Next.js, TypeScript</li>
                        <li><span className="font-medium text-green-600">Backend:</span> Node.js, MongoDB</li>
                    </ul>
                    <p className="text-md text-gray-600 mb-3">
                        I enjoy working on both the design and logic side — from pixel-perfect layouts to efficient APIs and database models.
                    </p>
                    <p className="text-md text-gray-600">
                        Always open to collaboration, learning, and building something magical together. Let’s create the web of tomorrow, today ✨
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
