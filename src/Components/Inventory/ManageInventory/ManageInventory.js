import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';

const ManageInventory = () => {
    const [inventories, setInventories]= useInventories([]);

    
 
    return (
        <div className='container grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {/* <h2>Details of inventory </h2> */}
            {
                inventories.map(inventory =>
                    <div className='grid gap-3 border-4 line'>
                        <p className='leading-3'>Name:{inventory.name}</p>
                        <p  className='leading-3'>Price:{inventory.price}</p>
                        <p  className='leading-3'>Supplier:{inventory.supplier}</p>
                        <p  className='leading-3'>Quantity:{inventory.quantity}</p>
                        <p  className='leading-3'>Description: {inventory.description}</p>
                       <button className='btn btn-danger'> Delete </button>
                    </div>
                    )
            }
             {/* {
                inventories.slice(0,6).map(inventory => <Inventory
                key={inventory._id}
                inventory={inventory}
                ></Inventory>)
            } */}

        </div>
    );
};

export default ManageInventory;