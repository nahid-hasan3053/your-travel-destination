import React from 'react';
import './Services.css'
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {img, title, name, duration, _id} = service

    return (
        <div className="card card-img shadow-2xl">
            <figure><img className='rounded-xl mt-4 p-2' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{duration}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline btn-success"><Link to={`/serviceDetails/${_id}`}>More Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Service;