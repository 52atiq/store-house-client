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
                    <div className='grid gap-3 border-4'>
                        <p>Name:{inventory.name}</p>
                        <p>Price:{inventory.price}</p>
                        <p>Supplier:{inventory.supplier}</p>
                        <p>Name:{inventory.name}</p>
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