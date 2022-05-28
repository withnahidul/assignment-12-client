import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (

        <div className='my-28'>
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/Twm7LS2/12.png" className="md:max-w-xl rounded-lg" alt="" />
                <div>
                    <h1 className="md:text-5xl text-2xl font-bold">Quanta Computer Manufacturing Ltd.</h1>
                    <p className="py-6 md:text-xl text-lg">Top computer manufacturing in Asia..<br /></p>
                    <p className='text-accent font-semibold py-3'>We serve the best for customer needs. Explore to grow your Business Today.</p>
                    <PrimaryButton>Explore</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Banner;