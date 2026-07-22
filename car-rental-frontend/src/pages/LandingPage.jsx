import React from 'react'
import Navbar from '../components/Navbar'
import { ArrowDownFromLine } from 'lucide-react';

const LandingPage = () => {
  return (
        <div className='min-h-screen'>
            <Navbar />
            <div className="relative">
                <img className="h-[calc(100vh-54px-80px)] object-cover w-full" src="https://imgs.search.brave.com/0-mo4AvkkeHO-nrsmnMQZ3ZM1cVKf4YeUG7Hof_QsIc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vY2FyLWRyaXZp/bmctZG93bi1yb2Fk/LXN1bnNldF8xMDcy/MTM4LTI1MDQyMS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA" alt="loading"/>

                <div className="absolute top-48 px-10">
                <h1 className="font-bold text-4xl text-white mb-3">
                    Find Your Perfect Ride
                </h1>

                <h4 className="text-gray-300 font-semibold mb-4">
                    Premium vehicle rentals for your next journey. Rent quickly and travel in style <br /> with our curated fleet of luxury and performance cars.
                </h4>

                <div className="flex gap-4">
                    <button className="px-4 py-3 bg-orange-500 text-white rounded-lg">
                    Rent Now
                    </button>

                    <button className="px-4 py-3 bg-[#384A77] text-white rounded-lg">
                    Explore Cars
                    </button>
                </div>
                </div>
            </div>

            <div className='relative z-10 max-w-8xl mx-auto -mt-12 px-6'>
                <div className='bg-[#FAF8FF] rounded-lg p-5'>
                <form className="grid grid-cols-5 gap-4 items-end">
                    <div className="flex flex-col">
                        <label htmlFor="pickup" className="mb-2">Pickup Location</label>
                        <input id="pickup" type="text" placeholder="City, Airport..." className="border border-gray-400 rounded-lg px-4 py-3"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pickupDate" className="mb-2">Pickup Date</label>
                        <input id="pickupDate" type="date" className="border border-gray-400 rounded-lg px-4 py-3"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="returnDate" className="mb-2">Return Date</label>
                        <input id="returnDate" type="date" className="border border-gray-400 rounded-lg px-4 py-3" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="type" className="mb-2">Vehicle Type</label>
                        <div className='relative'>
                            <ArrowDownFromLine className='absolute left-55 top-4 h-5 w-5 text-gray-900 -translate-y-0.5' size={16} strokeWidth={2} />
                            <select id="type"className="border rounded-lg px-4 py-3 appearance-none w-full border-gray-400">
                                <option>All Types</option>
                                <option>Volvo</option>  
                                <option>Porsche</option>
                                <option>Toyota</option>
                                <option>Mercedes</option>
                            </select>
                        </div>
                    </div>

                    <button className="bg-blue-900 text-white rounded-lg px-6 py-3 h-fit">Search</button>
                </form>

                </div>
            </div>
        
        <section className='pt-20'>
            hello
        </section>

        </div>
  )
}

export default LandingPage
