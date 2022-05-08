import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    if(loading || sending){
      return <Loading> </Loading>
    }
  
    if(user){
      // navigate('/home')
      navigate(from, { replace: true });
    }
    if (error ) {
        
      errorElement  =   <p className="text-danger">Error: {error?.message} </p>
       
     
    }
  
    const handleSubmit = (event) =>{
     event.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
    //  console.log(email, password);
    signInWithEmailAndPassword(email, password)
    }
  
    const navigateRegister = event =>{
      navigate('/register');
    }
    const resetPassword =async () =>{
      const email = emailRef.current.value;
     if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
     } else{
       toast('Please Enter Your Email ')
     }
  
    }
    return (
        <div className="container w-50 mx-auto m-20 h-[100vh] ">
        <h2 className="text-center mt-3">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Email"  required/>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          
  
          <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
           Login
          </Button>
        </Form>
     {errorElement}
      <p>New to Store-House? <Link to='/register' className="text-primary text-decoration-none" onClick={navigateRegister}>Please Register </Link></p>
      <p>Forget Password? <button  className=" text-primary text-decoration-none" onClick={resetPassword}>Reset Password  </button></p>
        <SocialLogin> </SocialLogin>
        <ToastContainer />
      </div>
    );
};

export default Login;