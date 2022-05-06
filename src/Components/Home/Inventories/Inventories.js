import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories]= useInventories([]);
    // const navigate = useNavigate();
    // const navigateToManageInventory = id =>{
    //      navigate(`/inventory/${id}`)
    // }
    return (
        <div >
            <div><h2 className='text-center mt-3 mb-3'>My Inventories </h2></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto'>
            {
                inventories.slice(0,6).map(inventory => <Inventory
                key={inventory._id}
                inventory={inventory}
                ></Inventory>)
            }
            </div>
            <Link to='inventory'  className='flex justify-center items-center  w-64 mx-auto bg-amber-500 p-3 text-xl text-black no-underline mt-16 mb-24 '> Manage Inventories </Link>
        </div>
    );
};

export default Inventories;