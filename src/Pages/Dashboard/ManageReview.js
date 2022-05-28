import React from 'react';

const ManageReview = ({ review, index, refetch, setDeleteReview }) => {
    const { name, specialty, img, email } = review;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeleteReview(review)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageReview;