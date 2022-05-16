import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Myappointments = () => {
 const [appointments, setAppointment] = useState([]);
 const [user, loading, error] = useAuthState(auth);
 useEffect(()=>{
  if(user){
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
    .then(res => res.json())
    .then(data => setAppointment(data));
  }
 },[user])
 if(loading){
   return <Loading></Loading>
 }
    return (
        <div>
          <h1 >My appointments:{appointments.length}</h1>  
          <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      
        {
          appointments.map((a , index)=>
            <tr>
              <th>{index +1 }</th>
        <td>{a.patientName}</td>
        <td>{a.date}</td>
        <td>{a.slot}</td>
        <td>{a.treatment}</td>
      </tr>
            )
        }
        
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myappointments;