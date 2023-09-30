import React from 'react';

const ReviewCard = ({rvw}) => {

    const {name, textarea} = rvw;

    return (
        <div className='mb-6 w-4/6 mx-auto'>
            <div className="indicator">
                <div className="indicator-item indicator-bottom">
                    <button className="btn btn-primary">Image</button>
                </div> 
                <div className="card border">
                    <div className="card-body">
                    <h2 className="card-title">{name}</h2> 
                    <p>{textarea}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;