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
        <div>
            <h2>Welcome to inventory detail : {inventory.name}</h2>
            <img className='h-56' src={inventory.image} alt="" />
            <p>ID: {inventoryId}</p>
            <p> Name: {inventory.name}</p>
            <p>Price: {inventory.price}</p>
            <p>Quantity:{inventory.quantity}</p>
            <p>Supplier:{inventory.supplier}</p>
            <p>Description:{inventory.description}</p>
            <div className='text-center'>
                <Link to="/inventory">
                    <button className='btn btn-primary'>Delivered</button>
                </Link>
            </div>
            <hr />
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                <div>
                    image
                <img className='h-56' src={inventory.image} alt="" />
                </div>
                <div>
                    description
                    <p>ID: {inventoryId}</p>
            <p> Name: {inventory.name}</p>
            <p>Price: {inventory.price}</p>
            <p>Quantity:{inventory.quantity}</p>
            <p>Supplier:{inventory.supplier}</p>
            <p>Description:{inventory.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;