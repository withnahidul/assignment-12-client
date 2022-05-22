import React from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';

import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Gaming ",
            description: ``,
            img: img1
        },
        {
            _id: 2,
            name: "Gaming ",
            description: ``,
            img: img2
        },
        {
            _id: 3,
            name: "Gaming ",
            description: ``,
            img: img3
        },
        {
            _id: 4,
            name: "Gaming ",
            description: ``,
            img: img4
        },
        {
            _id: 5,
            name: "Gaming ",
            description: ``,
            img: img5
        },
        {
            _id: 6,
            name: "Gaming ",
            description: ``,
            img: img6
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