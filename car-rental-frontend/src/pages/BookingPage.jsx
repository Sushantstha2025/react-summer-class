import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Top from '../components/bookingDashboard/Top'
import Middle from '../components/bookingDashboard/Middle'
import Bottom from '../components/bookingDashboard/Bottom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { vehicleAPI } from '../services/api'

const BookingPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  const fetchCarDetails = async () => {
    try {
      setLoading(true);
      if (id) {
        const res = await vehicleAPI.getCarById(id);
        setCar(res.car);
      } else {
        // If no ID in route, fetch first car from fleet
        const res = await vehicleAPI.getAllCars();
        if (res.cars && res.cars.length > 0) {
          setCar(res.cars[0]);
        } else {
          setError('No cars available in fleet');
        }
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch car details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='bg-[#FAF8FF] px-12 border-t-2 border-gray-200 py-6'>  
        <Top />
        {loading ? (
          <div className="py-20 text-center text-blue-900 font-semibold text-xl animate-pulse">
            Loading vehicle details...
          </div>
        ) : error ? (
          <div className="py-12 text-center text-red-600 font-medium">
            {error}
          </div>
        ) : (
          <Middle car={car} />
        )}
        <Bottom />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
