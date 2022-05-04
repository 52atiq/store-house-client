import React from 'react';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories]= useInventories([])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto'>
            {
                inventories.map(inventory => <Inventory
                key={inventory.id}
                inventory={inventory}
                ></Inventory>)
            }
        </div>
    );
};

export default Inventories;