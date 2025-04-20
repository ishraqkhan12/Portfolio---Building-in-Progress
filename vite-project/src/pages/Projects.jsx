import React from 'react';

const Projects = () => {
    const myProjects = [
        {
            id: 1,
            title: "✨ Magical Mode Toggle",
            description: "A simple light/dark mode toggle button with dreamy transitions using HTML, CSS, and JavaScript.",
            link: "#",
        },
        {
            id: 2,
            title: "🌸 Quote of the Day Chrome Extension",
            description: "A Chrome extension that shows a new inspirational quote every time it's opened. Built using JavaScript and manifest.json.",
            link: "#",
        },
        {
            id: 3,
            title: "🚗 Car Rental Website",
            description: "A full-stack car rental website built with Next.js, Tailwind CSS, and Sanity CMS. Includes booking, filters, and payment gateway.",
            link: "#",
        },
        {
            id: 4,
            title: "🛒 E-Commerce UI (Frontend)",
            description: "Designed an e-commerce platform UI using Figma and built with Next.js and Tailwind CSS. Fully responsive and minimal design.",
            link: "#",
        },
        {
            id: 5,
            title: "🎮 Tic Tac Toe Game",
            description: "A simple and fun Tic Tac Toe game made using HTML, CSS, and JavaScript. Includes win/draw detection.",
            link: "#",
        },
        {
            id: 6,
            title: "📄 Dynamic Resume Builder",
            description: "A React-based resume generator where users input details and get a professional CV instantly.",
            link: "#",
        }
    ];
    

    return (
        <section className="w-full min-h-screen bg-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-pink-700 text-center mb-10">
                    My Dreamy Projects 🪄
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {myProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-pink-600 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                className="inline-block text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full transition-all"
                            >
                                🔗 View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
