import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Error from '../../Shared/Error';
import Loading from '../../Shared/Loading';


let errorLogin;
const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (gUser) {
        console.log(gUser);
    }

    if(loading || gLoading) {
        return <Loading> </Loading>
    }

    if(error || gError) {
        errorLogin = <Error />
    }

    let emailLogin = event => {
        event.preventDefault();
        let email = event.target.email.value;
        let pass = event.target.pass.value;
        signInWithEmailAndPassword(email, pass);
        // console.log(error);
    }

    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form onSubmit={emailLogin}>
                        <h2 class="text-2xl font-bold text-center">Login</h2>
                        <label htmlFor="email" className='mt-4'> Email </label>
                        <input name='email' type="email" placeholder="Email" class=" input input-bordered w-full max-w-xs" />

                        <label htmlFor="pass" className='my-4'> Password </label>
                        <input name='pass' type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                        <p> Forget Password ? </p>

                            {errorLogin}

                        <input type='submit' value='Login' class="mt-2 btn btn-dark w-full max-w-sm" /> 
                    </form>
                    <p className='text-sm text-center'>New to Doctors Portal? <a href="" className='text-primary'> Create New Account </a></p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-outline"> CONTINUE WITH GOOGLE </button>

                </div>
            </div>
        </div>
    );
};

export default Login;