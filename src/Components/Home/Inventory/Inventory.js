import React from 'react';

const Inventory = ({inventory}) => {
    const {id,name, image, description, price, supplier} = inventory;
    return (
        <div className='grid mx-auto'>
            <img className='w-56' src={image} alt="" />
             <h2>{name}</h2>
            
        </div>
    );
};

export default Inventory;