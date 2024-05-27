import React from 'react'
import { FaInstagram,FaYoutube,FaFacebookF,FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import {
    PaperAirplaneIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
  } from "@heroicons/react/24/outline";



const Footer = () => {
  return (
    <div className='h-auto lg:h-[500px] text-white bg-transparent mt-[50px]  '>
        <div className='h-full lg:pb-0 pb-6  pt-12 flex justify-between  flex-wrap w-[calc(100vw-17vw)] mx-auto gap-8 sm:gap-0'>
            <div className='sm:w-[300px] flex flex-col gap-7 sm:items-start items-center'>
                
                 <div className='flex flex-col text-[#b2b2b2] '>
                    <p className='text-[15px]'>© 2024 Coder.io</p>
                    <p className='text-[15px]'>All Rights Reserved</p>
                </div>
                <Link to='/' className='flex gap-1 items-center '>
                    <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                    <span>Coder.io</span>
                </Link>
            </div>
            <div className='sm:w-[300px] flex flex-col sm:items-start items-center '>
                {/* first */}
                <div className='flex flex-col gap-2 sm:gap-4'>
                    <h2 className='text-[#ffffff] text-2xl font-semibold'>Contact Us</h2>
                    <div className='flex gap-4'>
                        <Link><FaInstagram size={24} className='hover:text-orange-600' /></Link>
                        <Link><FaYoutube size={24} className='hover:text-orange-600' /></Link>
                        <Link><FaFacebookF size={24} className='hover:text-orange-600'/></Link>
                        <Link><FaTwitter size={24} className='hover:text-orange-600'/></Link>
                    </div>
                    <p className='text-[#b2b2b2] bg-transparen w-[170px] text-[15px]'>
                       Noida, Uttar Pradesh
                       India
                    </p>

                    <Link to='#' className=' text-[#b2b2b2] underline text-[15px]'>info@Coderio.com</Link>
                    <p className='text-[16px] text-[#b2b2b2]'>(212) 287-9252</p>

                    <div className='text-[15px] text-[#b2b2b2]'>
                        <p className='text-[15px] '>Terms and Conditions</p>
                        <p className='text-[15px]'>Liability Waiver</p>
                    </div>
                    <Link to='/privacy' className='text-[15px] text-[#b2b2b2]'>Privacy Policy</Link>
                </div>
            </div>
            <div className='w-[300px] h-fit flex flex-col gap-2 '>
                <h2 className='text-[#d6b85f] text-2xl font-semibold'>Features</h2>
                <div className='border-[1px] border-[#3b3b3b] flex flex-col '>
                    <Link to='/' className='text-[#b2b2b2] text-sm px-3 py-2 hover:bg-[#2e2d2e] hover:text-[#96804a]'>HOME</Link>
                    <Link to='' className=' text-[#b2b2b2] text-sm px-3 py-2 hover:bg-[#2e2d2e] hover:text-[#96804a]'>ContactUs</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer