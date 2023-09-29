import React, { useEffect, useState } from 'react';
import SupportCard from './SupportCard';

const Support = () => {

    const [supports , setSupports] = useState([])
    useEffect(()=>{
        fetch('support.json')
        .then(res => res.json())
        .then(data => setSupports(data))
    },[])

    return (
        <div>
            <h1 className='mt-20 mb-10 text-5xl font-bold text-center'>WHY YOU CHOOSE US!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 w-11/12 mx-auto mt-7 mb-24'>
                {
                    supports.map(support => <SupportCard key={support.id} support={support}></SupportCard>)
                }
            </div>
        </div>
    );
};

export default Support;