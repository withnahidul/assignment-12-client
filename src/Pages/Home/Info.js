import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard cardTitle="Openning Hours" cardInfo="9am to 10pm" bgclassName="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Contract Us" cardInfo="11589" bgclassName="bg-neutral" img={phone}></InfoCard>
            <InfoCard cardTitle="Our Address" cardInfo="Dhaka-0101" bgclassName="bg-gradient-to-r from-secondary to-primary" img={marker}></InfoCard>
        </div>
    );
};

export default Info;