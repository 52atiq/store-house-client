import React from 'react';
import { useParams } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';

const ManageInventory = () => {
    // const {inventoryId} = useParams()
    const [inventories,setInventories]= useInventories([]);
    
 
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {/* <h2>Details of inventory </h2> */}
            {
                inventories.map(inventory =>
                    <div>
                        <p>Name:{inventory.name}</p>
                        <p>Price:{inventory.price}</p>
                        <p>Supplier:{inventory.supplier}</p>
                        <p>Name:{inventory.name}</p>
                       
                    </div>
                    )
            }

        </div>
    );
};

export default ManageInventory;