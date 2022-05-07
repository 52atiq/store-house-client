import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url , {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })

    }

    return (
        <div className='mx-auto w-50'>
            <h2>Please add a item</h2>
     <form className='flex flex-column gap-1' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' className='border-2' {...register("name")} />
      <input placeholder='Photo URL' className='border-2' type="text" {...register("image")} />
      <input placeholder='Price' className='border-2' type="number" {...register("price")} />
      <input placeholder='Quantity' className='border-2' type="number" {...register("quantity")} />
      <input placeholder='Supplier' className='border-2' {...register("supplier")} />
      <textarea placeholder='Description' className='border-2' {...register("description")} />
      <input className='border-2' type="submit" value="Add Item" />
    </form>
            
        </div>
    );
};

export default AddItem;