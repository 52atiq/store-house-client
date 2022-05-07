import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=''>
            <div className='text-center   h-[100vh]  '>
            <h1 className='text-red-600 text-9xl mt-10'>404</h1>
             <h2 className='text-black'>OOPS! Page Not Found</h2>
            <h5 className='text-black'>The page you were looking for does not exists!</h5>
            <Link to='/'  className='flex justify-center items-center  w-64 mx-auto bg-amber-500 p-3 text-xl text-white no-underline mt-16 mb-24 '> Go To Home Page  </Link>
        </div>
        </div>
    );
};

export default NotFound;