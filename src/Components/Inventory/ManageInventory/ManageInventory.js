import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    
        <div >
           
            <div> 
                <h2 className='text-center'>All Inventory:  </h2>
             </div>
            <div className='container grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {
                inventories.map(inventory =>
                    <div className='grid gap-3 border-4 line' key={inventory._id}>
                        
                        <p className='leading-3'>Name:{inventory.name}</p>
                        <p  className='leading-3'>Price:{inventory.price}</p>
                        <p  className='leading-3'>Supplier:{inventory.supplier}</p>
                        <p  className='leading-3'>Quantity:{inventory.quantity}</p>
                        <p  className='leading-3'>Description: {inventory.description}</p>
                       <button className='btn btn-danger' onClick={()=> handleDelete(inventory._id)}> Delete </button>
                    </div>
                    )
            }
        </div>
        </div>
    );
};

export default ManageInventory;