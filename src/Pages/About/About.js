import React from 'react';

const About = () => {
    return (
        <div className="lg:mx-5 mx-3 my-40">
            <div className='flex md:flex-row flex-col items-center gap-4 my-5 mx-5'>

                <div className="md:order-2">
                    <h1 className='text-3xl font-extralight mb-5 text-left'>Personal Portfolio</h1>
                    <p className='flex flex-col gap-2'>
                        <span className='text-7xl text-accent font-bold text-left'>Nahidul Islam Sohan</span> <br />

                        <span className='text-2xl text-left'>Work: Web Developer</span>
                    </p>
                </div>
            </div>

            <div className="mx-4">
                <h1 className='text-3xl font-extralight my-5 text-left'>About Me</h1>
                <p className='font-light text-lg text-justify'>
                    I'm a front-end web developer currently learning from Programming Hero
                    course conduct by Jhankar Mahbub. I am organized and
                    dependable candidate successful at managing multiple priorities with a positive
                    attitude. Willingness to take on added responsibilities to meet team goals.
                </p>

                <h1 className='text-3xl font-extralight my-5 text-left'>Education</h1>
                <p className='text-2xl text-left'>B. Sc in Computer Science Engineering</p>
                <p className='text-left'>Bangladesh Army University of Engineering and Technology, Qadirabad Cantonment</p>
            </div>

            <h2 className='mt-16 text-center lg:text-4xl text-2xl font-bold text-accent'>Projects Link</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center my-5'>
                <div class="mockup-window border lg:block bg-base-300 hover:bg-slate-500 transition">
                    <div class="flex justify-center px-4 py-8 bg-base-200">
                        <a href="https://nis-todoaps.netlify.app" title="Click to Visit" target="_blank">
                            <p className='px-3 py-2 border border-gray-800'> 1.to-do-site</p>
                        </a>
                    </div>
                </div>
                <div class="mockup-window border lg:block bg-base-300 hover:bg-slate-500 transition">
                    <div class="flex justify-center px-4 py-8 bg-base-200 ">
                        <a href="https://nis-books-warehouse.netlify.app/" title="Click to Visit" target="_blank">
                            <p className='px-3 py-2 border border-gray-800'>2.books-ware house </p>
                        </a>
                    </div>
                </div>
                <div class="mockup-window border lg:block bg-base-300 hover:bg-slate-500 transition">
                    <div class="flex justify-center px-4 py-8 bg-base-200">
                        <a href="https://nis-wedding-photographer.netlify.app/" title="Click to Visit" target="_blank">
                            <p className='px-3 py-2 border border-gray-800'> 3.weddding-photographer</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;