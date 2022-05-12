import React from 'react';

const Service = ({service, SetTreatment}) => {
    const {name, slots}= service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    {
        slots.length >0?
        <span> {slots[0]}</span> : <span className='text-red-500'>Try another day</span>
    }
    <p>{slots.length}  {slots.length >1? 'spaces': 'space'} have Available</p>
    <div class="card-actions justify-center">
          <label
          onClick={()=>SetTreatment(service)}
          disabled={slots.length===0}
          for="booking-modal" class="btn btn-secondary">Booking Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;