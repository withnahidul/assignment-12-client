import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const BookingModal = ({ product, setProduct }) => {
    const { _id, name, price, minOrderQuantity, availableQuantity } = product;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(new Date, 'PP pp');
    const navigate = useNavigate();



    const handleBooking = event => {
        event.preventDefault();
        const unit = event.target.unit.value;


        const totalPrice = unit * price;
        console.log(totalPrice);

        const booking = {
            productId: _id,
            name: name,
            date: formattedDate,
            totalPrice,
            unit,
            price,
            bookingMail: user.email,
            purchaserName: user.displayName,
            phone: event.target.phone.value
        };


        fetch('https://infinite-savannah-93709.herokuapp.com/booking', {
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
                setProduct(null);
                navigate('/dashboard');
            });
    }


    if (loading) {
        <Loading />
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={formattedDate} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs capitalize" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <span>Available Quantity</span>
                        <input type="number" disabled value={availableQuantity} className="input input-bordered w-full max-w-xs" />

                        <span>Minimum Order</span>
                        <input type="number" disabled value={minOrderQuantity} className="input input-bordered w-full max-w-xs" />

                        <span>Price per unit</span>
                        <input type="number" disabled value={price} className="input input-bordered w-full max-w-xs" />

                        <input type="number" name="unit" placeholder="Enter Quantity" min={minOrderQuantity} max={availableQuantity} className="input input-bordered w-full max-w-xs" required />

                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Go to Purchase" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;