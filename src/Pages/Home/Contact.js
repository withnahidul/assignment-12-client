import React from 'react';
import Footer from '../Shared/Footer';


const Contact = () => {
    return (
        <div className="bg-accent text-gray-100 py-1">
            <div className="max-w-screen-xl mb-8 mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">

                <form >
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Your Full Name" required />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder='Your Email'
                            type="email" required />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            mailto="mailto:mdrashadul.rimon@gmail.com"
                            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
                
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Get in Touch!</h2>
                        <div className="text-gray-700 mt-8">
                            Send us an <span className="underline">email</span>.
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Contact;