import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from './AppoinmentOption';
const AvailableAppointments = ({selectedDate}) => {
    const [appoinmentOptions,setAppoinmentOptions]=useState([]);
    useEffect(()=>{
        fetch('appoinmentOptions.json')
        .then(res=>res.json())
        .then(data=>setAppoinmentOptions(data))
    },[])
    return (
        <section className='mt-16'>
            <h2 className='text-center text-secondary font-bold'>Available Appoinemt on {format(selectedDate,'PP')}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinmentOptions.map(option=><AppoinmentOption
                    key={option._id}
                    option={option}
                    ></AppoinmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;