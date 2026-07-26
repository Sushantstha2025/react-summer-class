import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VehicleCard from '../components/ViewFleet/VehicleCard'
import MenuComponent from '../components/userDashboard/MenuComponent'
import { Cable, Settings, UserRound, ArrowDownFromLine, Search } from 'lucide-react';
import { Pagination } from 'antd';

const ViewFleetPage = () => {
  
  return (
    <div className="w-full min-h-screen relative">

      <main className='w-full flex gap-10 bg-[#FAF8FF]'>
        <div className="sidebar w-fit bg-[#F4F3FA] h-fit px-7 py-4 border-gray-200 border-r-2 shadow-lg">
            <h1 className='text-blue-800 font-bold text-2xl tracking-tighter mb-10'>LUXE DRIVE</h1>
            <MenuComponent/>
        </div>

        <div className="main-content w-fit">
            <Navbar state={true} />
            <div className='relative z-10 px-15'>
                <div className='bg-[#F4F3FA] rounded-lg p-5 shadow-xl flex justify-between items-center w-full'>
                    <h1 className='text-3xl font-semibold'>32 Cars Available</h1>
                    <form className="grid grid-cols-2 gap-4 items-end">
                        <div className="relative">
                            <input id="pickup" type="text" placeholder="Search car model..." className="border border-gray-400 rounded-lg px-4 py-3"/>
                            <Search size={20} strokeWidth={2} className='absolute left-40 top-4 h-5 w-5 text-gray-900 -translate-y-0.5' />
                        </div>

                            <div className='relative'>
                                <ArrowDownFromLine className='absolute left-40 top-4 h-5 w-5 text-gray-900 -translate-y-0.5' size={16} strokeWidth={2} />
                                <select id="type"className="border rounded-lg px-4 py-3 appearance-none w-full border-gray-400">
                                    <option>Sort by: </option>
                                    <option>Lowest to Highest</option>  
                                    <option>Highest to Lowest</option>
                                </select>
                            </div>
                    </form>

                </div>
            </div>

            <div className='cards-container flex flex-wrap items-center justify-start gap-10 px-20 py-7'>
                <VehicleCard /> 
                <VehicleCard /> 
                <VehicleCard /> 
                <VehicleCard /> 
                <VehicleCard /> 
                <VehicleCard /> 
            
            </div>
        </div>
      </main>

        <div className='bg-[#FAF8FF] py-10'>
            <Pagination align="center" defaultCurrent={1} total={72} />
        </div>
    

      <Footer />
    </div>
  )
}

export default ViewFleetPage    
