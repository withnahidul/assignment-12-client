import React from 'react';
import quote from '../../assets/icons/quote.svg';

const Testimonials = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <div className=''>
                    <h3 className='text-xl text-primary font-bold'>Review section</h3>
                    <h2 className='text-3xl'>What our clients say</h2>
                </div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonials;