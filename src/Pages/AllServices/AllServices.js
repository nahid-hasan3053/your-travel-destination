import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceCard from './AllServiceCard';

const AllServices = () => {

    const allServices = useLoaderData();

    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-20'>ALL EXCLUSIVE SERVICES FOR YOU</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto mb-24'>
                {
                    allServices.map(allService => <AllServiceCard key={allService._id} allService={allService}></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;