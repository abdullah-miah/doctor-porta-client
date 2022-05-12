import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div>
            <h3 className='text-center font-bold text-primary mt-20 uppercase'>Our Service</h3>
            <h2 className='text-center  text-3xl mt-2'>Services We Provide</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-1'>
           <ServiceCard serviceTitle='Fluoride Treatment' img={fluoride}></ServiceCard>
           <ServiceCard serviceTitle='Cavity Filling' img={cavity}></ServiceCard>
           <ServiceCard serviceTitle='Teeth Whitening' img={whitening}></ServiceCard>
           </div>
        </div>
    );
};

export default Services;