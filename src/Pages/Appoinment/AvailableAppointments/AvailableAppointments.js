import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';
import {useQuery}from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading';
const AvailableAppointments = ({selectedDate}) => {
    // const [appoinmentOptions,setAppoinmentOptions]=useState([]);
    const [treatment,setTreatment]=useState(null);
    const date=format(selectedDate, 'PP')

    const{data:appoinmentOptions=[],refetch,isLoading}=useQuery({
        queryKey:['appoinmentOptions',date],
        queryFn:()=>fetch(`http://localhost:5000/appoinmentOptions?date=${date}`)
        .then(res=>res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appoinmentOptions')
    //     .then(res=>res.json())
    //     .then(data=>setAppoinmentOptions(data))
    // },[])
    return (
        <section className='mt-16'>
            <h2 className='text-center text-secondary font-bold'>Available Appoinemt on {format(selectedDate,'PP')}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinmentOptions.map(option=><AppoinmentOption
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>
           { treatment &&
           <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>
            
            }
        </section>
    );
};

export default AvailableAppointments;