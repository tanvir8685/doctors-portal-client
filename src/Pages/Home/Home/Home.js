import React from 'react';
import Banner from '../Banner/Banner';
import DentalCareSection from '../DentalCareSection/DentalCareSection';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import ServiceInfoCards from '../ServiceInfo/ServiceInfoCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceInfoCards></ServiceInfoCards>
            <DentalCareSection></DentalCareSection>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>



        </div>
    );
};

export default Home;