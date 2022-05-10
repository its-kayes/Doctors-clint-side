import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import appointment from '../../../assets/images/appointment.png'


const AppointmentHome = () => {
    return (
        <section 
        style={{background: `url(${appointment})`}}
        className='flex justify-between items-center'>
            <div className='flex-1 mt-[-150px]'>
                <img src={doctor} alt="" />
            </div>

            <div className='flex-1'>
                <p className='text-primary text-xl'> Appointment </p>
                <p className='text-3xl mt-3 mb-3 text-white'> Make an appointment Today </p>
                <p className='mb-5 text-white'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>
                <PrimaryBtn> Get Started </PrimaryBtn>
            </div>
        </section>
    );
};

export default AppointmentHome;