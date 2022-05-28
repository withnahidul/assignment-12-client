import React, { useState } from 'react';
import Banner from './Banner';
import Contact from './Contact';
import AvailableOrders from '../BookingOrders/AvailableOrders';
import BusinessSummary from './BusinessSummary';
import PhoneMockup from './PhoneMockup';
import ClientReview from './ClientReview';

const Home = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Banner />
            <AvailableOrders date={date}/>
            <BusinessSummary />
            <ClientReview />
            <PhoneMockup />
            <Contact />
            
        </div>
    );
};

export default Home;