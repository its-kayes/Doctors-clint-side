import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hook/useToken';
import Error from '../../Shared/Error';
import Loading from '../../Shared/Loading';



let errorLogin;
const Register = () => {
    // let  = useNavigation();
    // const [user] = useAuthState(auth);

    let navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);
    let [token] = useToken(gUser || user);

    if (token) {
        console.log(gUser || user || updateProfile);
        navigate('/')
    }

    if (loading || gLoading || updating) {
        return <Loading> </Loading>
    }

    if (error || gError) {
        errorLogin = <Error />
    }

    let emailSignup = async event => {
        event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;
        let pass = event.target.pass.value;
        await createUserWithEmailAndPassword(email, pass);
        await updateProfile({ displayName: name});
        // console.log(error);
    }


    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={emailSignup}>
                        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                        <label htmlFor="name" className='mt-4'> Name </label>
                        <input name='name' type="text" placeholder="Full Name" className=" input input-bordered w-full max-w-xs" required />

                        <label htmlFor="email" className='mt-4'> Email </label>
                        <input name='email' type="email" placeholder="Email" className=" input input-bordered w-full max-w-xs" required />

                        <label htmlFor="pass" className='my-4'> Password </label>
                        <input name='pass' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                        {/* <p> Forget Password ? </p> */}

                        {errorLogin}

                        <input type='submit' value='Login' className="mt-2 btn btn-dark w-full max-w-sm" />
                    </form>
                    <p className='text-sm text-center'>Have a Account? <Link to='/login' className='text-primary'> Login </Link></p>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline"> CONTINUE WITH GOOGLE </button>

                </div>
            </div>
        </div>
    );
};

export default Register;