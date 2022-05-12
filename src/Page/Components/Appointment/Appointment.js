import React, {  useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentDates from './AppointmentDates';
import ServiceAppointments from './ServiceAppointments';


const Appointment = () => {
    let [date, setDate] = useState(new Date());

   


    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}> </AppointmentBanner>

            <ServiceAppointments date={date}> </ServiceAppointments>

            {/* <AppointmentDates> </AppointmentDates> */}
        </div>
    );
};

export default Appointment;