import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center h-[300px]'>
             <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;