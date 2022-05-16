import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import React from 'react';
import Service from './Service';
import BookingModals from './BookingModals';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, SetTreatment] = useState();
    const formattedDate = format(date, 'PP');
    const {data: services, isLoading, refetch}=useQuery(['available', formattedDate], ()=>fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json())
    )
   if(isLoading){
       return <Loading></Loading>
   }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }
    //     ,[formattedDate])
    return (
        <div>
            <p className='text-center text-secondary text-2xl mt-20'>Available Appointment on {format(date, 'PP')}  </p>
        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-5 my-20'>
            {
                services?.map(service =><Service
                key={service._id}
                service={service}
                SetTreatment ={SetTreatment}
                >
                </Service>)
            }
        </div>
        {treatment && <BookingModals 
        treatment ={treatment}
        date ={date}
        refetch ={refetch}
        SetTreatment={SetTreatment}
        ></BookingModals>}
        </div>
    );
};

export default AvailableAppointment;