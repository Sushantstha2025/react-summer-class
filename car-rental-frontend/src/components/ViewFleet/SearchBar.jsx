import React from 'react'
import { ArrowDownFromLine, Search } from 'lucide-react';

const SearchBar = ({ count = 0, searchTerm = '', setSearchTerm, sortBy = '', setSortBy }) => {
  return (
    <div className='relative z-10 px-12 py-4'>
      <div className='bg-[#F4F3FA] rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center w-full gap-4'>
        <h1 className='text-2xl font-bold text-blue-900'>{count} Cars Available</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input 
              id="pickup" 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
              placeholder="Search car model..." 
              className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={18} className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none' />
          </div>

          <div className='relative w-full sm:w-56'>
            <select 
              id="type"
              value={sortBy}
              onChange={(e) => setSortBy && setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-4 pr-8 py-2.5 bg-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort by Price</option>
              <option value="low">Price: Low to High</option>  
              <option value="high">Price: High to Low</option>
            </select>
            <ArrowDownFromLine className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none' size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
