import React from 'react'
import SideBar from './SideBar'
import SearchBar from './SearchBar'
import Navbar from '../Navbar'
import VehicleCard from "./VehicleCard"

const Main = ({ cars, searchTerm, setSearchTerm, sortBy, setSortBy }) => {
  return (
    <main className='w-full flex bg-[#FAF8FF] min-h-screen'>
      <SideBar />

      <div className="main-content flex-1">
        <Navbar />
        <SearchBar 
          count={cars.length} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className='cards-container flex flex-wrap items-center justify-start gap-8 px-12 py-7'>
          {cars.length > 0 ? (
            cars.map((car) => (
              <VehicleCard key={car._id || car.id} car={car} />
            ))
          ) : (
            <div className="w-full text-center py-16 text-gray-500 text-lg">
              No vehicles found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main
