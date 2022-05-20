import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const ServiceModal = ({ booking, date, setBooking }) => {
    const [user, loading, error] = useAuthState(auth);
    let { name, slots, _id, cost } = booking;
    // console.dir(booking)
    let modelSubmit = event => {
        event.preventDefault();
        let slot = event.target.time.value;
        console.log(slot);

        let formattedDate = format(date, 'PP')
        let bookingDetails = {
            serviceId: _id,
            service: name,
            date: formattedDate,
            slot: slot,
            cost: cost,
            patientName: user?.displayName,
            patientEmail: user?.email,
            number: event.target.number.value
        }

        fetch('https://murmuring-atoll-87463.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(req => req.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(` You already have an appointment on ${bookingDetails?.date} `)
                }
                console.log(data);
                setBooking(null);
            })
    }


    return (
        <div>
            <input type="checkbox" id="service-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={modelSubmit} className="modal-box">
                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <input name='date' type="text" value={format(date, 'PP')} disabled className="mt-7 input input-bordered w-full max-w-xs" />
                    <select name='time' className="my-4 select select-bordered w-full max-w-xs">
                        {
                            slots.map(slot => <option> {slot} </option>)
                        }
                    </select>
                    <input name='name' type="text" disabled value={user?.displayName} placeholder="Patient Name" className="my-4 input input-bordered w-full max-w-xs" />
                    <input name='number' type="number" placeholder="Phone Number" className="my-4 input input-bordered w-full max-w-xs" />
                    <input name='email' type="email" disabled value={user?.email} placeholder="Email" className="my-4 input input-bordered w-full max-w-xs" />
                    {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <div className="modal-action">
                        <input type="submit" className="btn" value="Submit" />
                        {/* <label htmlFor="service-modal" className="btn">Yay!</label> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceModal;