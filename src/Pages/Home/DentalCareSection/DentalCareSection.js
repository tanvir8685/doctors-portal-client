import React from 'react';
import pic from '../../../assets/images/treatment.png'

const DentalCareSection = () => {
    return (
        <div>
            <div className="hero mt-10 ">
                <div className="hero-content flex-col lg:flex-row p-10 ">
                    <img src={pic} className="lg:w-1/3 h-96 rounded-lg shadow-2xl ml-10" alt='' />
                    <div className='ml-20'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCareSection;