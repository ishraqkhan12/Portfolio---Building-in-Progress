import React from 'react';

const Home = () => {
    return (
        <section className="w-full h-[100vh] bg-white py-16">
        <div className="flex  md:flex-row item-centre space-x-auto gap-10 w-full h-[70vh] px-6 ">

                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2 mt-[10%] ">
                    <div className='w-[70%] ml-[20%]'>
                    <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
                        Welcome to My Magical Space ✨
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        I'm a creative developer who brings designs to life with clean code and beautiful interfaces.
                        Let’s make something dreamy together!
                    </p>
                    <a
                        href="/projects"
                        className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md"
                    >
                        🌸 Explore My Projects
                    </a>
                    </div>
                   
                </div>

                {/* Girl Image */}
                <div className="md:w-1/2 flex justify-center ">
                    <img
                        src="https://pm1.aminoapps.com/6846/ee79e99af7575813c5c7abc40d3e59b1b654004bv2_hq.jpg"
                        alt="Creative girl"
                        className="rounded-2xl shadow-lg w-[40rem] h-auto object-cover"
                        // width={500}
                    />
                </div>


            </div>
        </section>
    );
};

export default Home;
