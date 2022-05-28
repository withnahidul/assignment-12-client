import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2JLWF43rQws5D5EdpvXEXI9C0Dq24MgkSuUwQ0N53SfJjrWLb724kxIvER2FINekULqxrxwz4MKRm5USEFqxRa00uztDKgfY');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/paybooking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.purchaserName}</p>
                    <h2 class="card-title">Please Pay for {appointment.product}</h2>
                    <p>Purchased Date: <span className='text-orange-700'>{appointment.date}</span></p>
                    <p>Please pay: ${appointment.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;