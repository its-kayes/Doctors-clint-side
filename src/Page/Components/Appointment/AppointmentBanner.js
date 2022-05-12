import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';


const AppointmentBanner = () => {

    let [date, setDate] = useState(new Date());

    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                    <img src={chair} className="w-2/4" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            />
                            <p className='text-center font-semibold pt-4'>You picked {format(date, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;