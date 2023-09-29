import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();

    const {title, img, description, price, duration} = serviceDetails

    return (
        <div className='m-10'>
            <div className="service-card card lg:card-side bg-sky-100 h-1/2 m-5 w-full py-2 mx-auto">
                <figure className='w-1/2'><img className=" ms-16 w-full rounded-2xl" src={img} alt="Album"/></figure>
                <div className="card-body w-3/5">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className='text-xl font-bold'>Duration: {duration}</p>
                    <p className='text-lg font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;