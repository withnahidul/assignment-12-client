import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageReview from './ManageReview';

const ManageProduct = () => {
    const [deleteReview, setDeleteReview] = useState(null);

    const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch('https://infinite-savannah-93709.herokuapp.com/review', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Products: {reviews.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speech</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, index) => <ManageReview
                                key={review._id}
                                review={review}
                                index={index}
                                refetch={refetch}
                                setDeleteReview={setDeleteReview}
                            ></ManageReview>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteReview && <DeleteConfirmModal
                deleteReview={deleteReview}
                refetch={refetch}
                setDeleteReview={setDeleteReview}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProduct;