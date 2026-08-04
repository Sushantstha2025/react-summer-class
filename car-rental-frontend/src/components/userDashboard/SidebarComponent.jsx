import React from 'react'
import MenuComponent from './MenuComponent'

const SidebarComponent = () => {
  return (
    <div className='sidebar bg-[#F4F3FA] w-full px-7 py-4 min-h-[calc(100vh-400px)] border-gray-200 border-r-2 shadow-lg rounded-b-md'>
        <h1 className='text-blue-800 font-bold text-2xl tracking-tighter mb-10'>LUXE DRIVE</h1>
        <MenuComponent className='bg-[#F4F3FA]' />
    </div>
  )
}

export default SidebarComponent
