import React from 'react'
import MenuComponent from '../userDashboard/MenuComponent'

const SideBar = () => {
  return (
    <div className="sidebar w-fit bg-[#F4F3FA] h-fit px-7 py-4 border-gray-200 border-r-2 shadow-lg">
        <h1 className='text-blue-800 font-bold text-2xl tracking-tighter mb-10'>LUXE DRIVE</h1>
        <MenuComponent />
    </div>
  )
}

export default SideBar
