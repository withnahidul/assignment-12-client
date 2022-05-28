import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const BookingPurchase = ({ service, setProduct }) => {
    const { _id, id, name, price, minOrderQuantity, availableQuantity } = useParams();

    const [product] = useProduct(id);

    const [user, loading] = useAuthState(auth);

    const formattedDate = format(new Date, 'PP pp');
    const navigate = useNavigate();


    const handleBooking = event => {
        event.preventDefault();
        const unit = event.target.unit.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const price = event.target.price.value;

        const totalPrice = (unit * price);
        console.log('price is ', price);
        console.log('unit is ', unit);
        console.log(totalPrice);

        const booking = {
            productId: id,
            name: product.name,
            date: formattedDate,
            totalPrice,
            unit: event.target.unit.value,
            price: product.price,
            bookingMail: user.email,
            purchaserName: user.displayName,
            address,
            phone
        };

        const url = `https://infinite-savannah-93709.herokuapp.com/booking/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast.success(`Booked for ${name} at ${formattedDate} of ${unit} unit`)

                setProduct(service);

            });
        navigate('/dashboard');
    }


    return (
        <div>

            <h2 className='lg:text-5xl md:text-3xl text-2xl text-center text-accent font-bold my-5'>Purchase Your Booking</h2>
            <h2 className='text-xl text-center text-orange-600 my-5'>Please Fill Out All the Field</h2>

            <div className="">
                <div className="">

                    <h3 className="font-bold text-lg text-secondary text-center">Booking for: {product.name}</h3>
                    <form onSubmit={handleBooking} className='grid lg:grid-cols-3 grid-cols-1 gap-3 justify-items-center mt-2'>

                        <div>
                            <label className="label">
                                <span className="label-text">Booking Date/Time</span>
                            </label>
                            <input type="text" disabled value={formattedDate} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Purchaser E-mail</span>
                            </label>
                            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Purchaser Name</span>
                            </label>
                            <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs capitalize" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" disabled value={product.availableQuantity} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input type="number" disabled value={product.minOrderQuantity} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Price per unit</span>
                            </label>
                            <input type="number" name="price" disabled value={product.price} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Enter Quantity</span>
                            </label>
                            <input type="number" name="unit" min={product.minOrderQuantity} max={product.availableQuantity} className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" placeholder="Shipping Address" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name="phone" placeholder="Phone Number" min="0" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="submit" value="Confirm Purchase" className="btn btn-secondary w-full max-w-xs" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingPurchase;