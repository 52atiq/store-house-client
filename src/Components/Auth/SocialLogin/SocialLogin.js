import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
     const navigate = useNavigate();
   let errorElement;
      
    if(loading || loadingGithub){
      return <Loading> </Loading>
    }

    if (error || errorGithub) {
      
      errorElement  =   <p className="text-danger">Error: {error?.message} {errorGithub?.message}</p>
      
     
    }

    if(user || userGithub){
      navigate('/home')
    }
    return (
        <div>

        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>
        {errorElement}
        <div>
            <div className="">
            <button
            onClick={ () => signInWithGoogle()}
             className=" btn btn-warning w-50 d-block mx-auto my-2 font-medium ">
               {/* <img  src={google} alt="" /> */}
               <span className="text-white">  Google Sign In </span>
            </button>
            </div>

            {/* <button */}
            {/* onClick={ () => signInWithGithub()} */}
             {/* className="btn btn-warning w-50 d-block mx-auto"> */}
               {/* <img  src={github} alt="" /> */}
               {/* <span className="px-2 text-white">  Github Sign In </span> */}
            {/* </button> */}
            
        </div>
      </div>
    );
};

export default SocialLogin;