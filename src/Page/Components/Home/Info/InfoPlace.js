import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';

const InfoPlace = () => {
    return (
        <div className='flex justify-between m-3 text-white'>
            <div class="bg-gradient-to-r from-primary to-secondary card lg:card-side shadow-xl p-5">
                <figure><img className='' src={clock} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class=" bg-accent card lg:card-side shadow-xl p-5">
                <figure><img className='' src={marker} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Visit our location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class=" bg-gradient-to-r from-primary to-secondary card lg:card-side shadow-xl p-5">
                <figure><img className='' src={phone} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Contact us now</h2>
                    <p>+000 123 4567890000000000000000</p>
                </div>
            </div>
        </div>

    );
};

export default InfoPlace;