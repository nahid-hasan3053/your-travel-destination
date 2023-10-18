import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const AllReview = () => {

    const [review, setReview] = useState([])

    useEffect(()=>{
        fetch('https://travel-destination-server-nahid-hasan3053.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (
        <div>
            <h1 className='text-center font-bold text-5xl mt-14 mb-6'>OUR CLIENT REVIEW</h1>
            <br />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto'>
                {
                    review.map(rvw => <ReviewCard rvw={rvw} key={rvw.id}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReview;