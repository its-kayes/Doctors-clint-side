import React from 'react';
import people1 from '../../../assets/images/people1.png';
import quote from '../../../assets/icons/quote.svg';

const TestimonialHome = () => {
    return (
        <div className='mt-20 mb-32' style={{ background: `url(${quote})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
            <div className='px-10 mb-48' >
                <p className='text-primary text-xl'> Testimonial </p>
                <p className='text-3xl'> What Our Patients Says </p>
            </div>
            <div className='flex justify-evenly'>
                <div className='p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 shadow-xl'>
                    <p>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                    </p>
                    <div className="flex flex-row justify-evenly items-center mt-6">
                        <img className="mb-3 w-20 h-18 rounded-full p-1 border-4 border-primary shadow-lg" src={people1} alt="Bonnie image" />
                        <div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Winson Herry</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">California</span>
                        </div>
                    </div>
                </div>
                <div className='p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                    <p>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                    </p>
                    <div className="flex flex-row justify-evenly items-center mt-6">
                        <img className="mb-3 w-20 h-18 rounded-full p-1 border-4 border-primary shadow-lg" src={people1} alt="Bonnie image" />
                        <div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Winson Herry</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">California</span>
                        </div>
                    </div>
                </div>
                <div className='p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                    <p>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                    </p>
                    <div className="flex flex-row justify-evenly items-center mt-6">
                        <img className="mb-3 w-20 h-18 rounded-full p-1 border-4 border-primary shadow-lg" src={people1} alt="Bonnie image" />
                        <div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Winson Herry</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">California</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialHome;