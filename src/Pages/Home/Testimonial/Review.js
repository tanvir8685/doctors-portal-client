import React from 'react';

const Review = ({ review }) => {
    const { name, comment, location,img } = review;

    return (
        <div className='card-body p-8'>
            <h2 className='card-title'> {comment}</h2>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>{location}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default Review;