import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Error from '../../Shared/Error';
import Loading from '../../Shared/Loading';



let errorLogin;
const Register = () => {
    // let  = useNavigation();
    let navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    if (gUser || user) {
        console.log(gUser);
        navigate('/')
    }

    if(loading || gLoading) {
        return <Loading> </Loading>
    }

    if(error || gError) {
        errorLogin = <Error />
    }

    let emailSignup = event => {
        event.preventDefault();
        let email = event.target.email.value;
        let pass = event.target.pass.value;
        createUserWithEmailAndPassword(email, pass);
        // console.log(error);
    }


    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form onSubmit={emailSignup}>
                        <h2 class="text-2xl font-bold text-center">Sign Up</h2>
                        <label htmlFor="name" className='mt-4'> Name </label>
                        <input name='name' type="text" placeholder="Full Name" class=" input input-bordered w-full max-w-xs" required />

                        <label htmlFor="email" className='mt-4'> Email </label>
                        <input name='email' type="email" placeholder="Email" class=" input input-bordered w-full max-w-xs" required />

                        <label htmlFor="pass" className='my-4'> Password </label>
                        <input name='pass' type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required />
                        {/* <p> Forget Password ? </p> */}

                        {errorLogin}

                        <input type='submit' value='Login' class="mt-2 btn btn-dark w-full max-w-sm" />
                    </form>
                    <p className='text-sm text-center'>Have a Account? <Link to='/login' className='text-primary'> Login </Link></p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-outline"> CONTINUE WITH GOOGLE </button>

                </div>
            </div>
        </div>
    );
};

export default Register;