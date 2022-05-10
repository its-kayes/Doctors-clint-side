import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Contact = () => {
    return (
        <div className='' style={{ background: `url(${appointment})` }}>

            <p className='text-center text-primary font-bold text-xl pt-8'>Contact Us</p>
            <p className='text-center text-2xl text-white mb-4'>Stay connected with us</p>
            <div className='flex flex-col justify-center items-center'>
                <input className='w-1/5 rounded mb-2' type="email" name="" id="" />
                <input className='w-1/5 rounded mb-2' type="text" />
                <textarea className='w-1/5 rounded mb-2' rows="5" cols="80" id="TITLE">
                </textarea>
            </div>
            <div className='text-center m-2 p-5'>
                <PrimaryBtn> Submit </PrimaryBtn>
            </div>

        </div>
    );
};

export default Contact;