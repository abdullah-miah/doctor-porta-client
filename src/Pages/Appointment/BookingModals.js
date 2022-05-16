import { format, set } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const BookingModals = ({treatment, date,SetTreatment, refetch}) => {
    const {name, slots , _id}=treatment;
    const [user] = useAuthState(auth);
    const formatedDate = format (date, "PP")
    const handlemodal =event=>{
        event.preventDefault()
        const slot = event.target.slot.value;
        const booking ={
            treatmentId: _id,
            treatment:name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }
        fetch('http://localhost:5000/booking',{
           method: "POST",
           headers:{
            'content-type': 'application/json'
           },
           body: JSON.stringify(booking) 
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.success){
                toast(`Appointment is successfully submited`)
            }else{
                toast.error(`Appointment is set ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch();
            SetTreatment(null)
        })
       
    }
    return (
        <div>
            
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                <form onSubmit={handlemodal} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                <input type="text" disabled  value={format(date, 'PP')}  class="input input-bordered w-full max-w-xs" />
                <select name='slot' class="select select-bordered w-full max-w-xs">
                    {
                        slots.map(slot=><option value={slot}>{slot}</option>)
                    }
                    </select>
                <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value='submit' class="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModals;