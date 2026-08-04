import React from 'react'
import { Banknote, EvCharger, Dice1, CarFront, Tag, Cog, Palette, IdCardLanyard, CircleCheck, Gauge, UserRound } from 'lucide-react';
import BookingCard from './BookingCard';

const Middle = ({ car }) => {
  if (!car) {
    return (
      <div className="w-full text-center py-10 text-gray-500 font-medium">
        Vehicle details not available.
      </div>
    );
  }

  const defaultImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80";
  const titleName = `${car.brand || ''} ${car.model || ''}`;

  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row justify-between gap-8 bg-[#FAF8FF] py-6'>
      <div className='right-side h-full lg:w-2/3 w-full'>
        <h1 className='font-bold text-4xl text-blue-900 tracking-tight'>{titleName}</h1>
        <h3 className='text-gray-600 mt-1 text-sm font-medium'>Category: {car.category || 'Luxury'}</h3>

        <div className='flex flex-wrap gap-4 my-4 items-center'>
          <p className='bg-[#D1FAE5] px-4 py-1 rounded-full text-green-900 text-sm font-semibold tracking-wide flex items-center gap-2'>
            <CircleCheck size={16} strokeWidth={3} /> {car.status || 'Available'}
          </p>
          <span className='flex items-center gap-4 bg-[#EEEDF4] px-5 py-1 rounded-full text-sm'>
            <p className='flex items-center gap-1 text-gray-700'>
              <Banknote color='darkblue' size={18} /> 
              <span className='text-blue-900 font-bold'>${car.pricePerDay}</span>/day
            </p>
            <p className='flex items-center gap-1 text-gray-700'>
              <Gauge size={18} color='darkblue' /> 
              <span className='text-blue-900 font-bold'>{car.mileage || '1,200'}</span>mi
            </p>
            <p className='flex items-center gap-1 text-gray-700'>
              <UserRound size={18} color='darkblue'/> 
              <span className='text-blue-900 font-bold'>{car.seats || 5}</span> Seats
            </p>
          </span>
        </div>

        <div className='w-full max-h-[420px] overflow-hidden rounded-xl bg-gray-100 my-6 shadow-md'>
          <img 
            className='rounded-xl w-full h-[420px] object-cover transition-transform duration-300 hover:scale-105' 
            src={car.image || defaultImage} 
            alt={titleName}
            onError={(e) => { e.target.src = defaultImage; }}
          />
        </div>

        <h2 className='text-blue-900 font-bold text-2xl mt-6'>Description</h2>
        <p className='text-gray-700 leading-relaxed mt-2 text-sm md:text-base'>
          {car.description || `Experience high performance and luxury with the ${titleName}. Featuring top-grade design, modern technology, and exceptional comfort, this vehicle is ideal for business trips and leisure travel.`}
        </p>

        <h2 className='text-blue-900 font-bold text-2xl mt-8'>Technical Details</h2>
        <div className='card-container flex items-center justify-start flex-wrap gap-4 mt-4'>
          <div className='card bg-[#F4F3FA] p-4 rounded-xl border border-gray-200 flex items-center gap-3 min-w-[160px]'>
            <Dice1 className='bg-[#DEE0EF] w-10 h-10 p-2.5 rounded-full text-blue-900' />
            <div>
              <h4 className='text-gray-500 text-xs font-semibold'>BRAND</h4>
              <h3 className='font-bold text-blue-900 text-base'>{car.brand}</h3>
            </div>
          </div>

          <div className='card bg-[#F4F3FA] p-4 rounded-xl border border-gray-200 flex items-center gap-3 min-w-[160px]'>
            <CarFront className='bg-[#DEE0EF] w-10 h-10 p-2.5 rounded-full text-blue-900' />
            <div>
              <h4 className='text-gray-500 text-xs font-semibold'>MODEL</h4>
              <h3 className='font-bold text-blue-900 text-base'>{car.model}</h3>
            </div>
          </div>

          <div className='card bg-[#F4F3FA] p-4 rounded-xl border border-gray-200 flex items-center gap-3 min-w-[160px]'>
            <Tag className='bg-[#DEE0EF] w-10 h-10 p-2.5 rounded-full text-blue-900' />
            <div>
              <h4 className='text-gray-500 text-xs font-semibold'>CATEGORY</h4>
              <h3 className='font-bold text-blue-900 text-base'>{car.category || 'Luxury'}</h3>
            </div>
          </div>

          <div className='card bg-[#F4F3FA] p-4 rounded-xl border border-gray-200 flex items-center gap-3 min-w-[160px]'>
            <EvCharger className='bg-[#DEE0EF] w-10 h-10 p-2.5 rounded-full text-blue-900' />
            <div>
              <h4 className='text-gray-500 text-xs font-semibold'>FUEL TYPE</h4>
              <h3 className='font-bold text-blue-900 text-base'>{car.fuelType || 'Petrol'}</h3>
            </div>
          </div>

          <div className='card bg-[#F4F3FA] p-4 rounded-xl border border-gray-200 flex items-center gap-3 min-w-[160px]'>
            <Cog className='bg-[#DEE0EF] w-10 h-10 p-2.5 rounded-full text-blue-900' />
            <div>
              <h4 className='text-gray-500 text-xs font-semibold'>TRANSMISSION</h4>
              <h3 className='font-bold text-blue-900 text-base'>{car.transmission || 'Automatic'}</h3>
            </div>
          </div>

          <div className='card bg-[#F4F3FA] p-4 rounded-xl border border-gray-200 flex items-center gap-3 min-w-[160px]'>
            <Palette className='bg-[#DEE0EF] w-10 h-10 p-2.5 rounded-full text-blue-900' />
            <div>
              <h4 className='text-gray-500 text-xs font-semibold'>COLOR</h4>
              <h3 className='font-bold text-blue-900 text-base'>{car.color || 'Standard'}</h3>
            </div>
          </div>

          <div className='card bg-[#F4F3FA] p-4 rounded-xl border border-gray-200 flex items-center gap-3 min-w-[160px]'>
            <IdCardLanyard className='bg-[#DEE0EF] w-10 h-10 p-2.5 rounded-full text-blue-900' />
            <div>
              <h4 className='text-gray-500 text-xs font-semibold'>LICENSE PLATE</h4>
              <h3 className='font-bold text-blue-900 text-base'>{car.licensePlate || 'N/A'}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='sidebar lg:w-1/3 w-full'>
        <BookingCard car={car} />
      </div>
    </div>
  );
};

export default Middle;
