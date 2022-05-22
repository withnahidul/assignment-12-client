import React from 'react';
import banner1 from '../../assets/images/banner1.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Best Quality products</h1>
                    <p class="py-6">From personal computer hardware to business server solutions, renowned for quality and innovation, GIGABYTE is the very choice for PC users and business partners.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;