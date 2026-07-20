import React from 'react'
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='bg-[#FAF8FF] px-20 py-4 flex items-center justify-between'>
        <h1 className='text-blue-800 font-bold text-3xl tracking-tighter'>LUXE DRIVE</h1>
        <nav className='flex gap-10 font-semibold'>
            <a href="#">Cars</a>
            <a href="#">Services</a>
            <a href="#">Brands</a>
            <a href="#">Support</a>
        </nav>
        <div className='flex items-center gap-10'>
            <Search size={32} strokeWidth={1.75} />
            <a className='font-bold underline text-xl text-blue-600' href="#">Sign In</a>
        </div>
      </div>
  )
}

export default Navbar
