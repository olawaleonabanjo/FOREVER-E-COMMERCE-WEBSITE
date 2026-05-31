import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col text-center justify-around sm:flex-row sm:gap-2 gap-12 py-20 text-xs sm:text-sm md:text-base text-gray-700'>
       <div>
         <img src={assets.exchange_icon} alt='' className='w-12 m-auto mb-5'/>
         <p className='font-semibold'>Easy Exchange Policy</p>
         <p className='text-gray-400'>We offer hassle free exchange policy</p>
       </div>
    </div>
  )
}

export default OurPolicy
