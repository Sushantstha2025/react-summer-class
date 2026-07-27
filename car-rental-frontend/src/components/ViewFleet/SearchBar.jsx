import React from 'react'
import { ArrowDownFromLine, Search } from 'lucide-react';

const SearchBar = () => {
  return (
     <div className='relative z-10 px-15'>
                <div className='bg-[#F4F3FA] rounded-lg p-5 shadow-xl flex justify-between items-center w-full'>
                    <h1 className='text-3xl font-semibold'>32 Cars Available</h1>
                    <form className="grid grid-cols-2 gap-4 items-end">
                        <div className="relative">
                            <input id="pickup" type="text" placeholder="Search car model..." className="border border-gray-400 rounded-lg px-4 py-3"/>
                            <button><Search size={20} strokeWidth={2} className='absolute left-40 top-4 h-5 w-5 text-gray-900 -translate-y-0.5' /></button>
                            
                        </div>

                            <div className='relative'>
                                <button><ArrowDownFromLine className='absolute left-40 top-4 h-5 w-5 text-gray-900 -translate-y-0.5' size={16} strokeWidth={2} /></button>
                                <select id="type"className="border rounded-lg px-4 py-3 appearance-none w-full border-gray-400">
                                    <option>Sort by: </option>
                                    <option>Lowest to Highest</option>  
                                    <option>Highest to Lowest</option>
                                </select>
                            </div>
                    </form>

                </div>
            </div>
  )
}

export default SearchBar
