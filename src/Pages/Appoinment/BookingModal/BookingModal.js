import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import {toast} from 'react-hot-toast'

const BookingModal = ({ treatment, selectedDate,setTreatment,refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const {user}=useContext(AuthContext);
    const  handleBooking=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const slot=form.slot.value;
        const phone=form.phone.value;
        const booking={
            appointmentDate:date,
            treatment:treatmentName,
            patient: name,
            slot,
            email,
            phone

        }
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                setTreatment(null)
                toast.success('Booking Confrimed');
                refetch();

            }
           
        })
        console.log(booking)
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-6'>
                        <input type="text" value={date} disabled className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            
                            {
                                slots.map((slot,i)=><option value={slot} 
                                key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;