import React from 'react';
import './Banner.css'
import img from '../../../Assets/BannerImage/20230908_165231-01.jpeg'

const Banner = () => {
    return (
        <div className="img-gradient">
            <img src={img} alt="" />
                <div className='absolute top-1/3 text-white w-full text-center'>
                        <div clssName='text-white text-center w-4/5 mx-auto pl-12'>
                            <p>EXPLORE MAJESTIC BANGLADESH</p>
                            <h2 className='text-6xl font-bold mb-6 mt-4'>YOUT NEXT DESTINATION</h2>
                            <p className='w-2/6 mx-auto mb-8'>Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer ...</p>
                            <div>
                                <button className="btn btn-white font-bold rounded-lg text-xs ps-4 pe-4">Discover More</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;