import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AddDoctor = () => {
    // let [services, setServices] = useState();

    let { data: services, isLoading } = useQuery('service', () => fetch('http://localhost:5000/services').then(res => res.json()))

    if (isLoading) {
        return <Loading> </Loading>
    }

    let addDoctor = event => {
        event.preventDefault();

        let email = event.target.email.value;
        let name = event.target.name.value;
        let specialist = event.target.specialist.value;
        let image = event.target.image.value;

        let data = {
            name: name,
            email: email,
            specialist: specialist,
            image: image
        }
        console.log(data);
        event.target.reset();
    }

    return (
        <div>
            <div>
                <h1 className='py-5 text-2xl'>Add Doctor</h1>
            </div>
            <div>
                <div className='flex justify-center my-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={addDoctor}>
                                <h2 className="text-2xl font-bold text-center">Doctor Details</h2>
                                <label htmlFor="name" className='mt-4'> Name </label>
                                <input name='name' type="text" placeholder="Doctor Name" className=" input input-bordered w-full max-w-xs" required />

                                <label htmlFor="email" className='mt-4'> Email </label>
                                <input name='email' type="email" placeholder="Email" className=" input input-bordered w-full max-w-xs" required />

                                <select name='specialist' class="input-bordered select w-full max-w-xs my-4">
                                    {
                                        services.map(service => <option >{service.name}</option>)
                                    }
                                </select>

                                <label htmlFor="image" className='my-4'> Image </label>
                                <input name='image' type="file" placeholder="image" className=" input-bordered w-full max-w-xs" required />

                                <input type='submit' value='Add' className="mt-2 btn btn-dark w-full max-w-sm" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddDoctor;