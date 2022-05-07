import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';

const ManageInventory = () => {
    const [inventories, setInventories]= useInventories();

   const handleDelete = id =>{
       const proceed = window.confirm('Are You Sure?');
       if(proceed){
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            const remaining = inventories.filter(inventory => inventory._id !== id);
            setInventories(remaining)
        })
       }
   }
    
 
    return ( 
    
        <div className='container mt-6'>
            <Link to='/additem'  className='  justify-center m-3  bg-green-600 p-2 text-xl text-white no-underline'> Add New Item </Link>
            <div> 
                <h2 className='text-center mb-3'>Manage Inventory:  </h2>
             </div>
            <div className='container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                inventories.map(inventory =>
                    <div className='grid m-2 shadow-inner line' key={inventory._id}>
                        
                        <div className='grid p-3 '>
                        <p className='leading-3'>Name:{inventory.name}</p>
                        <p  className='leading-3'>Price:{inventory.price}</p>
                        <p  className='leading-3'>Supplier:{inventory.supplier}</p>
                        <p  className='leading-3'>Quantity:{inventory.quantity}</p>
                        <p  className='leading-3'>Description: {inventory.description}</p>
                       
                        </div>
                        <button className='btn btn-danger' onClick={()=> handleDelete(inventory._id)}> Delete </button>
                    </div>
                    )
            }
        </div>
        </div>
    );
};

export default ManageInventory;