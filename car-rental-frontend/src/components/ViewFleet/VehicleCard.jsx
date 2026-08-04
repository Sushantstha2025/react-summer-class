import React from 'react';
import { Cable, Settings, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ car }) => {
  const carName = car.name || `${car.brand || ''} ${car.model || ''}`;
  const defaultImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80";

  return (
    <div className='card w-75 h-100 bg-[#FFFFFF] rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden'>
      <div>
        <div className='image-div w-full bg-gray-100 overflow-hidden'>
          <img 
            className='w-full h-44 object-cover transition-transform duration-300 hover:scale-105' 
            src={car.image || defaultImage} 
            alt={carName} 
            onError={(e) => { e.target.src = defaultImage; }}
          />
        </div>

        <div className='info px-5 pt-4'>
          <h2 className='text-xl font-bold text-gray-900 truncate' title={carName}>{carName}</h2>
          <p className='text-xs text-blue-800 font-semibold tracking-wide uppercase mt-0.5'>{car.category || 'Luxury'}</p>
                
          <div className='flex items-center gap-3 mt-4 justify-between border-b border-gray-200 pb-5 text-gray-600 text-xs font-medium'>
            <p className='flex items-center gap-1'><Cable size={14} /> {car.fuelType || 'Petrol'}</p>
            <p className='flex items-center gap-1'><Settings size={14} /> {car.transmission || 'Auto'}</p>
            <p className='flex items-center gap-1'><UserRound size={14} /> {car.seats || 5} seats</p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between px-5 pb-5 pt-2'>
        <div>
          <h3 className='font-bold text-2xl text-blue-900'>${car.pricePerDay}</h3>
          <p className='text-xs text-gray-500 font-medium'>per day</p>
        </div>
        <Link 
          to={`/booking/${car._id || car.id}`}
          className='px-5 py-2.5 bg-blue-900 text-white hover:bg-blue-800 rounded-lg text-sm font-semibold transition text-center'
        >
          View Details
        </Link>
      </div>
    </div>   
  );
};

export default VehicleCard;
