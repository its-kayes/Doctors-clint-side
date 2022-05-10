import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import './Home.css';

const DentalCare = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col justify-between lg:flex-row-reverse gap-28">
                    <div className=''>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn font-bold text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                    <img src={treatment} className="w-1/3 rounded" />
                </div>
            </div>
        </div>
    );
};

export default DentalCare;