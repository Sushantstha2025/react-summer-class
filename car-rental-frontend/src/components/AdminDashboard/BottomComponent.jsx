import React, { useState, useEffect } from 'react';
import {
  ChartNoAxesColumnIncreasing,
  CalendarDays,
  CarFront,
} from "lucide-react";
import { rentalAPI, vehicleAPI } from '../../services/api';

const BottomComponent = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalBookings: 0,
    availableCars: 0,
    totalCars: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [rentalRes, vehicleRes] = await Promise.all([
        rentalAPI.getAllBookings().catch(() => ({ history: [] })),
        vehicleAPI.getAllCars().catch(() => ({ cars: [] })),
      ]);

      const history = rentalRes.history || [];
      const cars = vehicleRes.cars || [];

      const activeRentals = history.filter((r) => r.status !== 'Cancelled');
      const revenue = activeRentals.reduce((sum, r) => sum + (r.price || 0), 0);
      const availableCount = cars.filter((c) => c.status === 'Available').length;

      setStats({
        totalRevenue: revenue,
        totalBookings: history.length,
        availableCars: availableCount,
        totalCars: cars.length,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-wrap gap-5 py-6 items-center">
      {/* Revenue Card */}
      <div className="w-72.5 h-52.5 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-gray-500">
              TOTAL REVENUE
            </p>
            <h2 className="text-[24px] font-bold text-[#092B66] mt-1">
              ${stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h2>
          </div>

          <div className="flex items-center gap-1 bg-green-100 text-green-600 text-[11px] font-semibold px-2 py-1 rounded-lg">
            <ChartNoAxesColumnIncreasing size={13}/>
            Live
          </div>
        </div>

        {/* Graph SVG */}
        <div className="mt-8">
          <svg width="250" height="80" viewBox="0 0 250 80" fill="none">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#4C8DFF" stopOpacity="0.25"/>
                <stop offset="1" stopColor="#4C8DFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path
              d="M5 65 C45 55, 70 30, 110 35 C145 42, 160 35, 195 18 C220 5, 240 8, 250 5 L250 80 L5 80 Z"
              fill="url(#area)"
            />
            <path
              d="M5 65 C45 55, 70 30, 110 35 C145 42, 160 35, 195 18 C220 5, 240 8, 250 5"
              stroke="#4285FF"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Bookings Card */}
      <div className="w-48 h-52.5 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
        <div className="text-center p-4">
          <div className="mx-auto w-10 h-10 rounded-full bg-[#E7EEFF] flex items-center justify-center">
            <CalendarDays size={18} className="text-blue-600" />
          </div>

          <p className="text-[11px] text-gray-500 font-semibold mt-4">
            Total Bookings
          </p>

          <h2 className="text-2xl font-bold text-[#092B66] mt-1">
            {stats.totalBookings}
          </h2>

          <p className="text-[11px] text-green-600 font-medium mt-1">
            Recorded in system
          </p>
        </div>
      </div>

      {/* Cars Card */}
      <div className="w-48 h-52.5 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
        <div className="text-center p-4 w-full">
          <div className="mx-auto w-10 h-10 rounded-full bg-[#FFE8DC] flex items-center justify-center">
            <CarFront size={18} className="text-orange-600" />
          </div>

          <p className="text-[11px] text-gray-500 font-semibold mt-4">
            Available Cars
          </p>

          <h2 className="text-2xl font-bold text-[#092B66] mt-1">
            {stats.availableCars}/{stats.totalCars}
          </h2>

          {/* Progress bar */}
          <div className="mt-3 w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-[#5B2A16] transition-all"
              style={{ width: `${stats.totalCars > 0 ? (stats.availableCars / stats.totalCars) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomComponent;
