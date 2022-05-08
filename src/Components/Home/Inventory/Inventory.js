import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({inventory}) => {
    const {_id,name, image, description, price, supplier} = inventory;
   
    const navigate = useNavigate();
    const navigateToManageInventory = id =>{
         navigate(`/inventory/${id}`)
    }
    return (
        <div className='grid mx-auto shadow-inner h-[440px] w-96 mb-1 p-1 leading-none'>
            <img className='w-full h-48' src={image} alt="" />
             <p className='leading-none text-center  font-bold mb-0'>{name}</p>
             <p  className='leading-none text-center font-medium mb-0'>Price: $ {price}</p>
             {/* <p  className='leading-none text-center'>Quantity:</p> */}
             <p className='leading-none text-center font-medium mb-0'>Supplier: {supplier}</p>
             <p className='leading-none text-justify mx-px font-medium'> {description}</p>
       
       <button onClick={() => navigateToManageInventory(_id)} className=' bg-amber-400 h-10'> Update </button>
       </div>
        

    );
};

export default Inventory;