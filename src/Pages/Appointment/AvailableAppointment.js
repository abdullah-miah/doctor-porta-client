import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import React from 'react';
import Service from './Service';
import BookingModals from './BookingModals';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, SetTreatment] = useState();
    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }
        ,[])
    return (
        <div>
            <p className='text-center text-secondary text-2xl'>Available Appointment on {format(date, 'PP')}  </p>
        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-5'>
            {
                services.map(service =><Service
                key={service._id}
                service={service}
                SetTreatment ={SetTreatment}
                >
                </Service>)
            }
        </div>
        {treatment && <BookingModals 
        treatment ={treatment}
        ></BookingModals>}
        </div>
    );
};

export default AvailableAppointment;