import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const ClientReview = () => {

    const [reviewProduct, setReviewProduct] = useState(null);

    const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch('https://infinite-savannah-93709.herokuapp.com/review', {

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className='my-28'>

            <h2 className='lg:text-5xl md:text-3xl text-xl text-center text-accent font-bold my-16'>What our Customers says</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        setReviewProduct={setReviewProduct}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default ClientReview;