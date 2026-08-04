import React, { useState, useEffect } from 'react';
import Bottom from '../components/ViewFleet/Bottom';
import Main from '../components/ViewFleet/Main';
import { vehicleAPI } from '../services/api';

const ViewFleetPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const data = await vehicleAPI.getAllCars();
      setVehicles(data.cars || []);
    } catch (err) {
      setError(err.message || 'Failed to load vehicles from database.');
    } finally {
      setLoading(false);
    }
  };

  const filteredVehicles = vehicles
    .filter((car) => {
      const title = `${car.brand || ''} ${car.model || ''}`.toLowerCase();
      return title.includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === 'low') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'high') return b.pricePerDay - a.pricePerDay;
      return 0;
    });

  return (
    <div className="w-full min-h-screen bg-[#FAF8FF]">
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-xl font-semibold text-blue-900 animate-pulse">Loading Luxe Fleet...</div>
        </div>
      ) : error ? (
        <div className="p-10 text-center text-red-600 bg-red-50 rounded-lg m-10 border border-red-200">
          <p className="font-semibold">{error}</p>
          <button onClick={fetchVehicles} className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-md">
            Retry
          </button>
        </div>
      ) : (
        <Main 
          cars={filteredVehicles} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      )}
      <Bottom />
    </div>
  );
};

export default ViewFleetPage;
