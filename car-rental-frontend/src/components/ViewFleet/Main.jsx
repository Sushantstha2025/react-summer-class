import React from 'react'
import SideBar from './SideBar'
import SearchBar from './SearchBar'
import Navbar from '../Navbar'
import VehicleCard from "./VehicleCard"

const Main = ({cars}) => {
  return (
    <main className='w-full flex gap-10 bg-[#FAF8FF]'>
        <SideBar />

        <div className="main-content w-fit">
            <Navbar state={true} />
            <SearchBar />

            <div className='cards-container flex flex-wrap items-center justify-start gap-10 px-20 py-7'>
               {
                cars.map((car)=>{
                    return <VehicleCard car={car} />
                })
               }
            
            </div>
        </div>
      </main>
  )
}

export default Main
