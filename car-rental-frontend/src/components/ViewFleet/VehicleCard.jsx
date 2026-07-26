import { Cable, Settings, UserRound } from 'lucide-react';

const VehicleCard = () => {
  return (
        <div className='card w-75 h-100 bg-[#FFFFFF] rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
            <div className='image-div w-full'>
                <img className='rounded-md w-full h-40 mb-3 object-cover' src="https://imgs.search.brave.com/2oPvN2Opyy03_MZGtNhBvMXHIDo7VCHoITu359yrn00/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJjYXJzLm5l/dC9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE2LzA0LzIw/MTJfTWVyY2VkZXNC/ZW56X1NMU0FNR0dU/MzQ1dGhBbm5pdmVy/c2FyeS0wLTE1MzYt/MzcweDI0Ny5qcGc" alt="loading" />
            </div>

            <div className='info px-5'>

            <h2 className='text-2xl font-semibold'>Mercedes E Class</h2>
                    
                <div className='flex items-center gap-4 mt-3 justify-start border-b-2 border-gray-200 pb-7'>
                    <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> Electric</p>
                    <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> Auto</p>
                    <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> 5 seats</p>
                </div>

                <div className='flex items-center justify-center gap-5 mt-5'>
                    <div>
                        <h3 className='font-semibold text-2xl'>$250</h3>
                        <p>/day</p>
                    </div>
                <button className='px-10 py-1 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View <br /> Details</button>
                </div>
            </div>
        </div>   
  )
}

export default VehicleCard
