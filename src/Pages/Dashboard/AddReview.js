import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))


    const onSubmit = async data => {
       
        const makeReview = {
            ratings: data.ratings,
            product: data.product,
            description: data.description
        }
        // send to your database 
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(makeReview)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the Review');
                }
            })

    }


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-xl text-slate-800 my-5">Add a Review. Make positive vibe if we have feel you happy. We are for our clients.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 justify-items-center'>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Reviewed Product</span>
                    </label>
                    <select {...register('product')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input
                        type="range"
                        placeholder="Enter Ratings"
                        className="range range-primary"
                        min="1" max="5"
                        {...register("ratings",{
                            required: {
                                value: true,
                                message: 'Ratings is Required'
                            }
                        })}
                    />
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <label className="label">
                        {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Write text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>


                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;