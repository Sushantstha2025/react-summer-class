import React from 'react'

import Bottom from '../components/ViewFleet/Bottom'
import Main from '../components/ViewFleet/Main';

const ViewFleetPage = () => {
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
    <div className="w-full min-h-screen">
        <Main cars = {vehicles} />
        <Bottom />
    </div>
  )
}

export default ViewFleetPage    
