import React from 'react';

const AppoinmentOption = ({ option,setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-primary ">{name}</h2>
                <p>{slots.length>0 ? slots[0]:'Try Anouther Day'}</p>
                <p>{slots.length} {slots.length>1 ? "Spaces" :"Space"} Available </p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" 
                    disabled={slots.length===0}
                    className="btn btn-primary text-white"
                    onClick={()=>setTreatment(option)}
                    >Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;