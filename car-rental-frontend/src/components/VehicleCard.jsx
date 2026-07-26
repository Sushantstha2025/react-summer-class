import { Cable, Settings, UserRound } from 'lucide-react';

const VehicleCard = ({car}) => {
  return (
        <div key={car.id} className='card w-100 h-100 bg-[#FAF8FF] px-10 py-4 rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
        <div className='image-div border-b-2 border-gray-300'>
            <img className='rounded-md ml-2.5 w-75 h-40 mb-3 object-cover' src={car.image} alt="loading" />
        </div>
        <div className='info mt-2'>
            <div className='flex items-center justify-between'>
                <h4 className='text-gray-600 tracking-tight'>{car.brand}</h4>
                <h3 className='font-semibold'>${car.price}</h3>
            </div>

            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>{car.model}</h2>
                <h4 className='text-gray-600 tracking-tight'>/day</h4>
            </div>

            <div className='flex items-center gap-4 mt-3'>
                <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> {car.type}</p>
                <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> {car.transmission}</p>
                <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> {car.seat}</p>
            </div>

            <button className='px-3 py-2 mt-8 ml-50 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View Details</button>
        </div>
    </div>    
  )
}

export default VehicleCard
