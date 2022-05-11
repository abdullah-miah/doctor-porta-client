import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import DentalCare from './DentalCare';
import DoctorAppointment from './DoctorAppointment';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <DoctorAppointment></DoctorAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>

        </div>
    );
};

export default Home;