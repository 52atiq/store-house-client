import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams();

    const [inventory, setInventory] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[])

    return (
        <div className='container'>
            <h2>Welcome to inventory detail : {inventory.name}</h2>
           
            {/* <div className='text-center'>
                <Link to="/inventory">
                    <button className='btn btn-primary'>Delivered</button>
                </Link>
            </div> */}
           
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10 gap-6 border-2 p-3'>
                <div>
                  
                <img className='h-96' src={inventory.image} alt="" />
                </div>
                <div>
                  
                    <p>ID: {inventoryId}</p>
            <p> Name: {inventory.name}</p>
            <p>Price: {inventory.price}</p>
            <p>Quantity:{inventory.quantity}</p>
            <p>Supplier:{inventory.supplier}</p>
            <p>Description:{inventory.description}</p>
            <p>Sold:</p>
            <button className='btn btn-primary'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;