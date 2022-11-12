import React from 'react';
import pic from '../../../assets/images/doctor.png'
import pic1 from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section className='mt-32' style={{background:`url(${pic1})`}}>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={pic} className=" hidden lg:block lg:w-1/2 rounded-lg shadow-2xl -mt-36" alt=''/>
                    <div>
                        <h3 className='text-lg text-primary font-bold'>Appoinment</h3>
                        <h1 className="text-4xl font-bold text-white">Make an appoinment Today</h1>
                        <p className="py-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad accusamus voluptatibus, tempora, nam commodi recusandae aperiam eos aliquam incidunt reprehenderit! Ducimus, mollitia similique. Reprehenderit, dolorem harum cum animi quia architecto maiores ab cumque error, corrupti aperiam natus consectetur perspiciatis blanditiis placeat quae consequuntur aut id laborum sapiente numquam quisquam.</p>
                        <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;