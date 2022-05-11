import React from 'react';
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}>
           <div className='flex justify-center items-center mt-12'>
           <div>
                <h3 className='text-center text-primary text-2xl my-4'>Contact us</h3>
                <h1 className='text-3xl mb-7 text-white'>Stay connected with us</h1>
                <from>
                <input type="email" placeholder="Email Adress" class=" mb-4 input input-bordered input-success w-full max-w-xs" />
                <br/>
                <input type="text" placeholder="Subject" class="input  mb-4 input-bordered input-success w-full max-w-xs" />
            <br/>
            <textarea class=" w-full textarea textarea-success mb-4 " placeholder="Bio"></textarea>
                <div className='flex justify-center pb-8'><Button> Submit</Button></div>
                </from>
            </div>
           </div>
        </section>
    );
};

export default Contact;