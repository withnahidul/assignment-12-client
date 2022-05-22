import React from 'react';
import carton1 from '../../assets/images/carton1.png';
import banner5 from '../../assets/images/banner5.png';
import MainButton from '../Shared/MainButton';

const MakeBusiness = () => {
    return (
        <section style={{
            background: `url(${banner5})`
        }} className='flex justify-center items-center my-28'>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={carton1} alt='' />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-white uppercase font bold'>Be A Dealer</h3>
                <h2 className='text-4xl text-white'>Start Business From Today</h2>
                <p className='text-white'>Nis Computer Manufacturer is an experienced computer hardware accessories/PC/Gaming Motherboard manufacturer and supplier. We provide high-quality multinational products.</p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeBusiness;