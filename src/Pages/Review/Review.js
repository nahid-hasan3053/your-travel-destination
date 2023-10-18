import React from 'react';
import AllReview from '../AllReview/AllReview';

const Review = () => {

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const textarea = form.textarea.value;
        const review = {name, textarea}
        fetch('https://travel-destination-server-nahid-hasan3053.vercel.app/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset()
                alert('Thanks for your feedback')
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <AllReview></AllReview>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-bold'>SHARE YOUR REVIEW</h1>
                <p className='mt-3 font-semibold text-sm'>YOUR EXPERIENCE THROUGHOUT OUR JOURNEY</p>
            </div>
            <form onSubmit={handleReview} className='w-1/2 mx-auto items-center mb-20'>
                <input type="name" name='name'  placeholder="Enter Your Name" className="input mb-4 input-bordered input-info w-full" /><br />
                <textarea type='textarea' name='textarea' className="textarea textarea-info w-full" placeholder="Share Your Review Here"></textarea>
                <button className='btn btn-primary mt-2'>Submit Review</button>
            </form>
        </div>
    );
};

export default Review;