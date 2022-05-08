import React from 'react';
import logo from '../../../assets/logo/logo.png'
import facebook from '../../../assets/social/facebook.png'
import instagram from '../../../assets/social/instagram.png'
import twitter from '../../../assets/social/twitter.png'
import linkedin from '../../../assets/social/linkedin2.png'
import youtube from '../../../assets/social/youtube.png'
const Footer = () => {
    return (

        <div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-blue-800 gap-10 p-7 mt-52'>
                <div className='text-white leading-none'>
                   
                 <div><img className='h-36 w-64 mb-4' src={logo} alt="" /></div>
                 {/* <h4>Store House</h4> */}
                 <p>Kadamtola,Purbo Basabo,Sabujbag</p>
                 <p>Road A-block 96/7 2 Number lane</p>
                 <p>Basabo, Dhaka-1214</p>
                </div>

                <div className='text-white '>
                    <h2 className='text-2xl' >COMPANY</h2>
                    <p>Our Story</p>
                    <p>Our Team</p>
                    <p> Career</p>
                    <p>Privacy Policy</p>

                </div>


                <div className='text-white'>
                    <h2 className='text-2xl' >CONTACT</h2>
                    <p>Get in Touch</p>
                    <p> Request Quote</p>
                    <p>Location</p>
                </div>
                <div>
                    <h2 className='text-white text-2xl'>CONNECT</h2>
                    <div className='grid content-center gap-2 '>
                       <img className='h-10 rounded-full' src={facebook} alt="" />
                        <img className='h-10 rounded-full'  src={instagram} alt="" />
                        <img className='h-10 rounded-full'  src={twitter} alt="" />
                        <img className='h-10 rounded-full'  src={linkedin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;