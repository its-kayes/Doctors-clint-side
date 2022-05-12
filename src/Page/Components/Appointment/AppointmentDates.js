import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';

const AppointmentDates = () => {
    return (
        <div>
            <p className='text-secondary text-center text-xl'> Available Appointments on April 30, 2022 </p>
            <div className='my-24 grid grid-cols-3 gap-9 justify-around text-center'>
                <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                    <p className='text-secondary font-semibold text-xl p-2'> Teeth Orthodontics </p>
                    <p className='p-1'> 8:00 AM - 9:00 AM </p>
                    <p className='p-1 pb-3'> 10 SPACES AVAILABLE </p>
                    <PrimaryBtn> Book Appointment </PrimaryBtn>
                </div>
                <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                    <p className='text-secondary font-semibold text-xl p-2'> Cosmetic Dentistry </p>
                    <p className='p-1'> 8:00 AM - 9:00 AM </p>
                    <p className='p-1 pb-3'> 10 SPACES AVAILABLE </p>
                    <PrimaryBtn> Book Appointment </PrimaryBtn>
                </div>
                <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                    <p className='text-secondary font-semibold text-xl p-2'> Teeth Cleaning </p>
                    <p className='p-1'> 8:00 AM - 9:00 AM </p>
                    <p className='p-1 pb-3'> 10 SPACES AVAILABLE </p>
                    <PrimaryBtn> Book Appointment </PrimaryBtn>
                </div>
                <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                    <p className='text-secondary font-semibold text-xl p-2'> Teeth Orthodontics </p>
                    <p className='p-1'> 8:00 AM - 9:00 AM </p>
                    <p className='p-1 pb-3'> 10 SPACES AVAILABLE </p>
                    <PrimaryBtn> Book Appointment </PrimaryBtn>
                </div>
                <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                    <p className='text-secondary font-semibold text-xl p-2'> Teeth Orthodontics </p>
                    <p className='p-1'> 8:00 AM - 9:00 AM </p>
                    <p className='p-1 pb-3'> 10 SPACES AVAILABLE </p>
                    <PrimaryBtn> Book Appointment </PrimaryBtn>
                </div>
                <div style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)", borderRadius: "18px" }} className='rounded p-16'>
                    <p className='text-secondary font-semibold text-xl p-2'> Teeth Orthodontics </p>
                    <p className='p-1'> 8:00 AM - 9:00 AM </p>
                    <p className='p-1 pb-3'> 10 SPACES AVAILABLE </p>
                    <PrimaryBtn> Book Appointment </PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDates;