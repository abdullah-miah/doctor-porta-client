import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';


const DoctorAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
        
        className='flex  justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor}></img>
            </div>
            <div className='flex-1 px-5 py-5'>
                <h3 className='text-primary font-bold text-2xl'>Appointment</h3>
                <h1 className='font-bold text-4xl text-white mt-4'>Make an appointment Today</h1>
            <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className='mt-3'>
            <Button></Button>
            </div>
            </div>
        </section>
    );
};

export default DoctorAppointment;