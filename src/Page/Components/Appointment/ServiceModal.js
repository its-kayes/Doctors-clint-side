import { format } from 'date-fns';
import React from 'react';

const ServiceModal = ({ booking, date, setBooking }) => {
    let { name, slots } = booking;
    // console.dir(booking)
    let modelSubmit = event => {
        event.preventDefault();
        let slot = event.target.time.value;
        console.log(slot);
        setBooking(null);
    }


    return (
        <div>
            <input type="checkbox" id="service-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <form onSubmit={modelSubmit} class="modal-box">
                    <label for="service-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <input name='date' type="text" value={format(date, 'PP')} disabled class="mt-7 input input-bordered w-full max-w-xs" />
                    <select name='time' class="my-4 select select-bordered w-full max-w-xs">
                        {
                            slots.map( slot => <option> {slot} </option> )
                        }
                    </select>
                    <input name='name' type="text" placeholder="Patient Name" class="my-4 input input-bordered w-full max-w-xs" />
                    <input name='number' type="number" placeholder="Phone Number" class="my-4 input input-bordered w-full max-w-xs" />
                    <input name='email' type="email" placeholder="Email" class="my-4 input input-bordered w-full max-w-xs" />
                    {/* <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <div class="modal-action">
                        <input type="submit" class="btn" value="Submit" />
                        {/* <label for="service-modal" class="btn">Yay!</label> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceModal;