import React from 'react';
import banner1 from '../../assets/images/banner1.jpg';
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Best Quality products</h1>
                    <p className="py-6">From personal computer hardware to business server solutions, renowned for quality and innovation, GIGABYTE is the very choice for PC users and business partners.</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;