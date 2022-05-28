import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableOrders = () => {
    const [product, setProduct] = useState(null);

    const formattedDate = format(new Date, 'PP');
    const { data: services, isLoading } = useQuery(['available', formattedDate], () => fetch(`https://infinite-savannah-93709.herokuapp.com/available`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10 px-8'>
            <h2 className='text-xl md:text-4xl text-accent text-center font-bold my-5'>Parts Manufactured</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setProduct={setProduct}
                    ></Service>)
                }
            </div>
            {product && <BookingModal
                product={product}
                setProduct={setProduct}

            ></BookingModal>}
        </div>
    );
};

export default AvailableOrders;