import React, { useEffect, useState } from 'react';
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {

    const [services , setServices] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-20'>SERVICES WE OFFER FOR YOU</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='w-1/4 mx-auto text-center mt-8'>
                <button className="btn btn-outline btn-primary"><Link to='/allservices'>See All Services</Link></button>
            </div>
        </div>
    );
};

export default Services;