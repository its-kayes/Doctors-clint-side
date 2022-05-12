import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import ServiceModal from './ServiceModal';

const ServiceAppointments = ({ date }) => {

    let [services, setServices] = useState([])
    let [booking, setBooking] = useState();

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(req => req.json())
            .then(data => setServices(data))

    }, []);

    return (
        <div>
            <p className='text-secondary text-center text-xl'> Available Appointments on {format(date, 'PP')} </p>

            <div className='my-24 grid grid-cols-3 gap-9 justify-around text-center'>
                {
                    services.map(service => <Service service={service} setBooking={setBooking} key={service._id} > </Service>)
                }
            </div>
            {
                booking && <ServiceModal booking={booking} date={date} setBooking={setBooking}> </ServiceModal>
            }
        </div>
    );
};

export default ServiceAppointments;