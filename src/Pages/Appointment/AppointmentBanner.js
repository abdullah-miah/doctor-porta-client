import React, { useState } from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <div style={{
            background: `url(${bg})`
          }} class="hero min-h-screen px-12 ">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <DayPicker 
             mode="single"
             selected={date}
             onSelect={setDate}
            />
            </div>
          </div>
        </div>
    );
};

export default AppointmentBanner;