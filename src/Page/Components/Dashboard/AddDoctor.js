import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const AddDoctor = () => {
    let [imageUrl, setImageUrl] = useState();

    let { data: services, isLoading } = useQuery('service', () => fetch('http://localhost:5000/services').then(res => res.json()))

    if (isLoading) {
        return <Loading> </Loading>
    }

    let addDoctor = event => {
        event.preventDefault();

        let email = event.target.email.value;
        let name = event.target.name.value;
        let specialist = event.target.specialist.value;
        // let image = event.target.image.value;

        let doctorsData = {
            name: name,
            email: email,
            specialist: specialist,
            image: imageUrl
        }

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctorsData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast(" Doctor Added ")
                }
                else (
                    toast.error(" Failed to add doctor")
                )
                console.log(result)
            })


        // console.log(imageUrl);
        console.log(doctorsData);
        event.target.reset();
    }


    // this code written hy myself 
    let handleImageUpload = image => {
        // console.log(image.target.files[0]);
        const imageData = new FormData();
        let imgSecretKey = 'c25b9d9e071325c2967df21a4422b129';
        let url = `https://api.imgbb.com/1/upload?key=${imgSecretKey}`
        imageData.append('image', image.target.files[0]);

        fetch(url, {
            method: 'POST',
            body: imageData
        })
            .then(response => {
                return response.json()
            })
            .then(result => {
                // console.log('Success:', result);
                // console.log(result.data.image.url);
                setImageUrl(result.data.image.url);
            })
    }




    // This Code Given By Support Session 


    // const handleImageUpload = image => {
    //     console.log(image.target.files[0]);
    //     const imageData = new FormData();
    //     imageData.set('key', 'c25b9d9e071325c2967df21a4422b129');
    //     imageData.append('image', image.target.files[0]);

    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //         .then(function (response) {
    //             console.log(response.data.data.display_url);

    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


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

                                {/* <label htmlFor="image" className='my-4'> Image </label>
                                <input name='image' type="file" placeholder="image" className=" input-bordered w-full max-w-xs" required /> */}


                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" style={{ cursor: 'pointer' }} id="customFile" name="file" onChange={handleImageUpload} required />
                                    <label className="custom-file-label" htmlFor="customFile">Upload an Image</label>
                                </div>



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