import React from 'react';
import useInventories from '../../hooks/useInventories';

const MyItem = () => {
    const [inventories, setInventories]= useInventories();

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
         const url = `https://murmuring-shore-75057.herokuapp.com/inventory/${id}`;
         fetch(url, {
             method: 'DELETE'
         })
         .then(res =>res.json())
         .then(data => {
             console.log(data);
             const remaining = inventories.filter(inventory => inventory._id !== id);
             setInventories(remaining)
         })
        }
    }
    return (
        <div className='container m-20 h-[100vh]'>
       
        <div> 
            <h2 className='text-center mb-3'>My Items:  </h2>
         </div>
        <div className='container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-[340px] w-96'>
        {
            inventories.map(inventory =>
                <div className='grid m-2 shadow-inner ' key={inventory._id}>
                    
                   <div className='grid p-3 ' >
                   <p className='leading-none text-center  font-bold mb-0'>{inventory.name}</p>
                    <p  className='leading-none text-center  font-bold mb-0'>Price: ${inventory.price}</p>
                    <p className='leading-none text-center  font-semibold mb-0' >Supplier:{inventory.supplier}</p>
                    <p  className='leading-none text-center  font-semibold mb-0' >Quantity:{inventory.quantity}</p>
                    <p  className='leading-none text-center  font-semibold mb-0'> {inventory.description}</p>
                    <button className='btn btn-danger h-10 mt-10' onClick={()=> handleDelete(inventory._id)}> Delete </button>
                   </div>
                   
                  
                </div>
                )
        }
    </div>
    </div>
    );
};

export default MyItem;