import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [createUserWithEmailAndPassword, user, loading,  error, ] =
     useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

     const [updateProfile, updating, updateError] = useUpdateProfile(auth);
       
       
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }
    if(loading || updating){
        return <Loading> </Loading>
    }


    if(user){
        // navigate('/home')
        console.log('user', user);
    }

    const handleRegister = async ( event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        // if(agree){
      await  createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name });
      console.log('Updated profile');
      navigate('/home')
        // }
    }
    return (
        <div className='mt-20'>
        <div className='register-form '>
           <h2 className='text-center'> Register </h2>
              
               <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Name' /> 

                    <input type="email" name="email" id="" placeholder='Email' required /> 

                    <input type="password" name="password" id="" placeholder='Password' required />

                    <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'ps-2 text-primary': ' ps-2 text-danger'} htmlFor="terms">Accept i-photo Terms and Condition</label>

                    <input 
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
                </form>

                <p>Already have an account? <Link to='/login' className="text-primary text-decoration-none" onClick={navigateLogin}> Login</Link></p>
                <SocialLogin> </SocialLogin>
           
        </div>
        </div>
    );
};

export default Register;