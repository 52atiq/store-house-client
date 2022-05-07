import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({inventory}) => {
    const {_id,name, image, description, price, supplier} = inventory;
   
    const navigate = useNavigate();
    const navigateToManageInventory = id =>{
         navigate(`/inventory/${id}`)
    }
    return (
        <div className='grid mx-auto border-2 h-[440px] w-96 mb-5'>
            <img className='w-full h-48' src={image} alt="" />
             <p className='leading-3 text-center'>Name:{name}</p>
             <p className='leading-3 text-center'>Price: $ {price}</p>
             <p className='leading-3 text-center'>Quantity:{}</p>
             <p className='leading-3 text-center'>Supplier:{supplier}</p>
             <p className='leading-3'>Description: {description}</p>
     <button onClick={() => navigateToManageInventory(_id)} className=' bg-amber-400'> Update </button>
        </div>
    );
};

export default Inventory;