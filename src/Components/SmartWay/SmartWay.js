import React from 'react';
import service1 from '../../assets/service/service-1.png'

const SmartWay = () => {
    return (
        // <div className=''>
           <div className='container grid  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-9 gap-6 '>
           <div>
           <img className='w-[500px] ' src={service1} alt="" />
            </div>
            <div>
            
                <h1>WE DO THINGS THE SMART WAY</h1>
                <p className='text-lg leading-8 mt-10'>
                We are your brand partner and your powerful back-of-the-house solution. Pairing premium technology and automation with decades of industry expertise, we provide our clients peace of mind to focus on their brands, knowing we are staying ahead of the industry’s demands. Our solution ensures your brand is always one step ahead of your customers' expectations.
                </p>
                <button className='bg-white border-amber-500 border-2 text-amber-500  font-semibold mt-14 p-3'>OUR SERVICES</button>
            </div>
           </div>
        // </div>
    );
};

export default SmartWay;