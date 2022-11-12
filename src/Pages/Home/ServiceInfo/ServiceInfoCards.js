import React from 'react';
import pic1 from '../../../assets/images/fluoride.png'
import pic2 from '../../../assets/images/cavity.png'
import pic3 from '../../../assets/images/whitening.png';
import ServiceInfoCard from './ServiceInfoCard';

const ServiceInfoCards = () => {
    const serviceData=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'its one of the most common common dissease for public',
            icon:pic1
            
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'its one of the most common common dissease for public',
            icon:pic2,
            
        },
        {
            id:3,
            name:'Teeth Whitening',
            description:'its one of the most common common dissease for public',
            icon:pic3,
            
        },
    ]
    return (
        <div>

            <h1 className='text-center mt-20 text-primary text-xl font-bold'>OUR SERVICES</h1>
            <h1 className='text-center text-3xl'>Service We Provided</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols1 gap-6 mt-8'>
            {
                serviceData.map(sd=><ServiceInfoCard
                key={sd.id}
                sd={sd}></ServiceInfoCard>)
            }
            
        </div>
        </div>
    );
};

export default ServiceInfoCards;