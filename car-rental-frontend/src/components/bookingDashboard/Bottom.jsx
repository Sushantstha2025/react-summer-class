import React from 'react'
import VehicleCard from '../ViewFleet/VehicleCard'
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Bottom = () => {
  const vehicles = [
  {
    id: 1,
    name: "Mercedes E-Class",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    fuelType: "Electric",
    transmission: "Auto",
    seats: 5,
    pricePerDay: 250,
  },
  {
    id: 2,
    name: "BMW X5",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    fuelType: "Diesel",
    transmission: "Auto",
    seats: 7,
    pricePerDay: 310,
  },
  {
    id: 3,
    name: "Tesla Model 3",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    fuelType: "Electric",
    transmission: "Auto",
    seats: 5,
    pricePerDay: 280,
  },
  {
    id: 4,
    name: "Toyota Corolla",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80",
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    pricePerDay: 120,
  },
  {
    id: 5,
    name: "Audi Q7",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    fuelType: "Hybrid",
    transmission: "Auto",
    seats: 7,
    pricePerDay: 340,
  },
  {
    id: 6,
    name: "Ford Mustang GT",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80",
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 4,
    pricePerDay: 295,
  },
];
  return (
    <div className='mt-15'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl text-blue-800 font-bold tracking-tight mb-8'>Recommended Alternatives</h1>
        <div className='btns flex justify-between gap-4 items-center'>
          <button className='rounded-full bg-white-600 h-fit w-fit p-2 translate-y-1 hover:translate-y-0.5 hover:bg-blue-700 hover:text-white duration-200 border-gray-300 border-2'><ChevronLeft /></button>
          <button className='rounded-full bg-white-600 h-fit w-fit p-2 translate-y-1 hover:translate-y-0.5 hover:bg-blue-700 hover:text-white duration-200 border-gray-300 border-2'><ChevronRight /></button>
        </div>
      </div>  

      <div className="card-container flex flex-wrap items-center justify-start gap-10 pb-20">
        {
          vehicles.map((car)=>{
            return <VehicleCard car={car} />
          })
        }
      </div>
    </div>
  )
}

export default Bottom
