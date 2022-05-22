import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import MakeBusiness from './MakeBusiness';
import Popular from './Popular';

import Services from './Services';
import Testimonials from './Testimonials';





const Home = () => {
    return (
        <div className='my-28 px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Popular></Popular>
            <Services></Services>
            <MakeBusiness></MakeBusiness>
            <Testimonials></Testimonials>
            <Footer></Footer>

        </div>
    );
};

export default Home;