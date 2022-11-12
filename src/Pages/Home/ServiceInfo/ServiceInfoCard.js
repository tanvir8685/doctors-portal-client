import React from 'react';

const ServiceInfoCard = ({sd}) => {
    const{name,description,icon}=sd;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body items-center text-cente">
                <h2 className="card-title">{name}</h2>
                <p className='text-center'>{description}</p>
                
            </div>
        </div>
    );
};

export default ServiceInfoCard;