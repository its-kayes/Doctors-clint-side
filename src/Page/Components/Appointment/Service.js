import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Service = ({service, name, slots }) => {
    return (
        <div >

            <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                <p className='text-secondary font-semibold text-xl p-2'> {service.name} </p>
                <p className='p-1'> 8:00 AM - 9:00 AM </p>
                <p className='p-1 pb-3'> {service.slots.length} {service.slots.length > 0 ? 'SPACES' : 'SPACE'}  AVAILABLE </p>
                <PrimaryBtn> Book Appointment </PrimaryBtn>
            </div>

        </div>
    );
};

export default Service;