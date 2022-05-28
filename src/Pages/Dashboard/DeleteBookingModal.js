import React from 'react';

const DeleteBookingModal = ({ deleteBooking, setDeleteBooking, refetch }) => {

    const { id, name } = deleteBooking;

    const handleDelete = () => {
        fetch(`https://infinite-savannah-93709.herokuapp.com/booking/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    console.log('dekhito', data);
                    setDeleteBooking(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-rose-400">Are you sure you want to delete {name}!</h3>

                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-booking-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBookingModal;