import React from 'react'
import { Key, CircleCheckBig, Heart } from 'lucide-react';

const BottomComponent = () => {
  return (
    <div className='bottom py-8 flex flex-wrap justify-start items-center gap-8'>
          <div className='bg-[#FFFFFF] border-blue-400 border-l-3 w-42 h-36 p-5 rounded-2xl shadow-lg'>
            <div className='bg-[#becefc] p-2 w-fit rounded-lg'>
              <Key />
            </div>
            <h4 className='text-gray-500 font-semibold tracking-tight text-xs mt-2'>Active Rentals</h4>
            <h2 className='font-semibold text-2xl mt-1'>03</h2>
          </div>

          <div className='bg-[#FFFFFF] w-42 h-36 p-5 rounded-2xl shadow-lg'>
            <div className='bg-[#becefc] p-2 w-fit rounded-lg'>
              <CircleCheckBig />
            </div>
            <h4 className='text-gray-500 font-semibold tracking-tight text-xs mt-2'>Completed Bookings</h4>
            <h2 className='font-semibold text-2xl mt-1'>42</h2>
          </div>

          <div className='bg-[#FFFFFF] w-42 h-36 p-5 rounded-2xl shadow-lg'>
            <div className='bg-[#FFDBCB] p-2 w-fit rounded-lg'>
              <Heart size={20} strokeWidth={1.75} />
            </div>
            <h4 className='text-gray-500 font-semibold tracking-tight text-xs mt-2'>Wishlist</h4>
            <h2 className='font-semibold text-2xl mt-1'>03</h2>
          </div>

          <div className='bg-[#FFFFFF] w-42 h-36 p-5 rounded-2xl shadow-lg border-blue-700 border-l-3'>
            <div className='bg-[#becefc] p-2 w-fit rounded-lg'>
              <Key />
            </div>
            <h4 className='text-gray-500 font-semibold tracking-tight text-xs mt-2 '>Total Spending</h4>
            <h2 className='font-semibold text-2xl mt-1'>$12,450.00</h2>
          </div>

        </div>
  )
}

export default BottomComponent
