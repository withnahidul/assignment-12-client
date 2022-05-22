import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import img1 from '../../assets/images/img1.jpg';

import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Gaming ",
            description: ``,
            img: fluoride
        },
        {
            _id: 2,
            name: "Gaming ",
            description: ``,
            img: cavity
        },
        {
            _id: 3,
            name: "Gaming ",
            description: ``,
            img: cavity
        },
        {
            _id: 4,
            name: "Gaming ",
            description: ``,
            img: img1
        },
        {
            _id: 5,
            name: "Gaming ",
            description: ``,
            img: cavity
        },
        {
            _id: 6,
            name: "Gaming ",
            description: ``,
            img: whitening
        }

    ];
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our products</h3>
                <h2 className='text-4xl'>Products We Have!!</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;