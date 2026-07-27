import { Cable, Settings, UserRound } from 'lucide-react';

const VehicleCard = ({car}) => {
  return (
        <div className='card w-75 h-100 bg-[#FFFFFF] rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
            <div className='image-div w-full'>
                <img className='rounded-md w-full h-40 mb-3 object-cover' src={car.image} alt="loading" />
            </div>

            <div className='info px-5'>

            <h2 className='text-2xl font-semibold'>{car.name}</h2>
                    
                <div className='flex items-center gap-4 mt-3 justify-start border-b-2 border-gray-200 pb-7'>
                    <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> {car.fuelType}</p>
                    <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> {car.Transmission}</p>
                    <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> {car.seats} seats</p>
                </div>

                <div className='flex items-center justify-center gap-5 mt-5'>
                    <div>
                        <h3 className='font-semibold text-2xl'>${car.pricePerDay}</h3>
                        <p>/day</p>
                    </div>
                <button className='px-10 py-1 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View <br /> Details</button>
                </div>
            </div>
        </div>   
  )
}

export default VehicleCard
