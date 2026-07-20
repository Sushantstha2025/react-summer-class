import React from 'react'
import { BellDot } from 'lucide-react';
import { Search } from 'lucide-react';

const NavbarComponent = () => {
  return (
    <div className='px-17 py-4 w-full h-fit bg-[#FAF8FF] border-gray-200 border-b-2'>
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl text-blue-800 font-semibold'>Dashboard Overview</h1>
      <div className='flex items-center gap-4 mt-3'>
          <form>
            <div className='relative'>
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" size={16} strokeWidth={2.5} />
              <input className="w-full rounded-lg border-gray-200 bg-[#F4F3FA] py-2 pl-10 pr-4" type="text" placeholder='Search cars' />
            </div>
          </form>
          <BellDot size={20} strokeWidth={2} />
          <img className='w-8 h-8 overflow-hidden rounded-full object-cover' src="https://imgs.search.brave.com/2UY52qbEbiKu7a4muAJHiulqaNEp541WWMTQiKt61yo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0L2Ez/L2I2Lzc0YTNiNmE4/ODU2YjAwNGRmZmY4/MjRhZTk2NjhmZTli/LmpwZw" alt="Loading" />
      </div>
    </div>  

    </div>
  )
}

export default NavbarComponent
