import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';


const InfoDetails = () => {
    return (
        <div className='mt-32'>
            <p className='text-secondary font-bold text-center text-2xl'> OUR SERVICES </p>
            <p className='text-center text-4xl mt-1'> Services We Provide </p>


            <div className='flex justify-around mt-20'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fluoride Treatment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam quae quas asperiores officia nam?</p>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cavity Filling</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam quae quas asperiores officia nam?</p>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Teeth Whitening</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam quae quas asperiores officia nam?</p>
                    </div>
                </div>
            </div>







            {/* <div>
                <div class="bg-gradient-to-r from-primary to-secondary card lg:card-side shadow-xl p-5">
                    <figure><img className='' src={fluoride} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Fluoride Treatment</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default InfoDetails;