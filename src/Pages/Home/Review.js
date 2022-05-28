import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Review = ({ review, setReviewProduct }) => {
    const { ratings, product, description } = review;

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    setReviewProduct(review);

    return (
        <div className='grid grid-cols-1 md:px-8'>
            <div className="card bg-base-100 shadow-xl image-full">
                
                <div className="card-body">
                    <h2 className="card-title text-white">Ratings: {ratings}/5 </h2>
                    <input type="range" className="range range-xs input-bordered" min="1" max="5" value={ratings} />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;