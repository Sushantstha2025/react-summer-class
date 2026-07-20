import React from 'react'

const TopComponent = () => {
  return (
    <div className='top flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-[#1A1B21]'>Welcome Back, James Doe</h1>
            <h4 className='text-gray-600 tracking-tight'>Your premium fleet is ready for your next journey.</h4>
          </div>

          <div className='flex gap-2'>
            <button className='px-4 py-2 bg-gray-300 rounded-lg font-semibold text-black'>View history</button>
            <button className='px-4 py-2 bg-[#00236F] font-semibold rounded-lg text-[#FAF8FF]'>+ Book New Ride</button>
          </div>

        </div>
  )
}

export default TopComponent
