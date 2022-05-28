import React from 'react';
import Loading from '../Shared/Loading';
import ClientReview from './ClientReview';

const ManageClientReview = () => {

    const [deleteReview, setDeleteReview] = useState(null);

    const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch('https://infinite-savannah-93709.herokuapp.com/review', {

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {reviews.length}</h2>
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
                            reviews.map((review, index) => <ClientReview
                                key={review._id}
                                review={review}
                                index={index}
                                refetch={refetch}
                                setDeleteReview={setDeleteReview}
                            ></ClientReview>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClientReview;