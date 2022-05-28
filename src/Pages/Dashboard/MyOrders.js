import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading';


const MyOrders = ({ refetch, name }) => {

    const [orders, setOrders] = useState([]);

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const [delBooking, setDelBooking] = useState([]);


    useEffect(() => {
        if (user) {
            fetch(`https://infinite-savannah-93709.herokuapp.com/booking?bookingMail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                    refetch();
                });
        }
    }, [user])


    const handleDelete = () => {

        fetch(`https://infinite-savannah-93709.herokuapp.com/booking?bookingMail=${delBooking.email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setDelBooking(data);
                refetch();
            });

    }

    if (loading) {
        <Loading />
    }

    return (
        <div>
            <h2>My Orders List: {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/L</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.purchaserName}</td>
                                <td>{a.date}</td>
                                <td>{a.name}</td>
                                <td>${a.price}</td>
                                <td>{a.unit}</td>
                                <td>${a.totalPrice}</td>

                                <td>
                                    {(a.totalPrice && !a.paid) &&
                                        <span className='flex gap-4'><Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>

                                            <label for="delete-booking-modal" className='btn btn-xs btn-error'>Cancel</label>

                                        </span>

                                    }

                                    {(a.totalPrice && a.paid) &&
                                        <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>TrxId: <span className='text-success'>{a.transactionId}</span></p>
                                        </div>}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            {/* Delete Modal */}
            <input type="checkbox" id="delete-booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete!</h3>

                    <div class="modal-action">
                        <label onClick={() => handleDelete()} for="delete-booking-modal" class="btn btn-xs btn-error">Delete</label>
                        <label htmlFor="delete-booking-modal" className="btn btn-xs">Discard</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyOrders;