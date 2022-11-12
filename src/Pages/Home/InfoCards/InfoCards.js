import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg' 
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=[
        {
            id:1,
            name:'Opening Hours',
            description:'Open 9.00 am to 5.00 pm everyday',
            icon:clock,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name:'Our Locations',
            description:'KandirPar Cumilla',
            icon:marker,
            bgClass:'bg-accent'
        },
        {
            id:3,
            name:'Contact Us',
            description:'Phone:413413',
            icon:phone,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols1 gap-6 mt-8'>
            {
                cardData.map(cd=><InfoCard
                key={cd.id}
                cd={cd}>

                </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;