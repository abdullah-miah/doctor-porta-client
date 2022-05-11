import React from 'react';
import treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button';

const DentalCare = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='pl-20'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <Button></Button>
    </div>
  </div>
</div>
    );
};

export default DentalCare;