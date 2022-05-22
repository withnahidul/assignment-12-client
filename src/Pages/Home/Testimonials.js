import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Shohan',
            review: '',
            location:'usa',
            img: people1
        },
        {
            _id: 2,
            name: 'Shohan',
            review: '',
            location: 'uae',
            img: people2
        },
        {
            _id: 3,
            name: 'Shohan',
            review: '',
            location: 'uk',
            img: people3
        }
    ];
    return (
        <section>
            <div className='flex justify-between'>
                <div className=''>
                    <h3 className='text-xl text-primary font-bold'>Review section</h3>
                    <h2 className='text-3xl'>What our clients say</h2>
                </div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;