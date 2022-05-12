import React from 'react';


const Service = ({ service, setBooking, name, slots }) => {
    return (
        <div >

            <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                <p className='text-secondary font-semibold text-xl p-2'> {service.name} </p>
                <p className='p-1'> 8:00 AM - 9:00 AM </p>
                <p className='p-1 pb-3'> {service.slots.length} {service.slots.length > 0 ? 'SPACES' : 'SPACE'}  AVAILABLE </p>
    
                {/* <button onClick={()=> setBooking(service)} disabled={service.slots.length===0} className="btn font-bold text-white bg-gradient-to-r from-primary to-secondary"> Book Appointment </button> */}

                <label for="service-modal" onClick={()=> setBooking(service)} disabled={service.slots.length===0} className="btn font-bold text-white bg-gradient-to-r from-primary to-secondary"> Book Appointment</label>
            </div>

        </div>
    );
};

export default Service;