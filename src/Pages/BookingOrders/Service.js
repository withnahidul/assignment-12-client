import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Service = ({ service, setProduct }) => {
    const { _id, name, img, price, minOrderQuantity, availableQuantity, description } = service;

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const navigateToBooking = id => {
        setProduct(service);
        navigate(`/bookingPurchase/${id}`);

    }

    return (
        <div className="card items-center lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <div className="grid items-center justify-center">
                    <img src={img} alt="" className='h-48' />
                </div>
                <h2 className="text-xl font-bold text-accent">{name}</h2>

                <div>
                    <p className='font-semibold text-lg'>Price: ${price} /unit</p>
                    <p>Minimum Order: <span>{minOrderQuantity}</span></p>
                    <p>Available Quantity: <span className='font-semibold'>
                        {
                            availableQuantity > 500 ? <span className='text-green-500'>{availableQuantity}</span>
                                :
                                <span className='text-red-500'>{availableQuantity}</span>
                        }
                    </span></p>
                    <small>{description}</small>
                </div>

                <button onClick={() => navigateToBooking(_id)} className="btn btn-accent hover:btn-secondary hover:text-white text-white">Purchase</button>

            </div>
        </div>
    );
};

export default Service;