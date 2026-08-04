import React, { useState } from "react";
import { CalendarDays, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { rentalAPI } from "../../services/api";

export default function BookingCard({ car }) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const getTodayStr = () => new Date().toISOString().split("T")[0];
  const getTomorrowStr = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split("T")[0];
  };

  const [startDate, setStartDate] = useState(getTodayStr());
  const [endDate, setEndDate] = useState(getTomorrowStr());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const pricePerDay = car?.pricePerDay || 200;

  const calculateDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start) || isNaN(end) || start > end) return 1;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  const days = calculateDays();
  const rentalTotal = pricePerDay * days;
  const serviceFee = Math.round(rentalTotal * 0.05);
  const totalPrice = rentalTotal + serviceFee;

  const handleBookNow = async () => {
    setError("");
    setSuccess("");

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (!car?._id && !car?.id) {
      setError("Invalid vehicle selected");
      return;
    }

    try {
      setLoading(true);
      const vehicleId = car._id || car.id;
      const res = await rentalAPI.bookVehicle(vehicleId, {
        startDate,
        endDate,
        price: totalPrice,
      });

      setSuccess("Booking successful! View in My Bookings.");
      setTimeout(() => {
        navigate("/user");
      }, 1500);
    } catch (err) {
      setError(err.message || "Failed to place booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[340px] rounded-3xl bg-white shadow-xl border border-gray-200 p-6 mx-auto">
      {/* Price Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-4xl font-bold text-[#1E3A8A]">
            ${pricePerDay}
            <span className="text-sm font-medium text-gray-500"> / day</span>
          </h2>
        </div>

        <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1E3A8A]">
          {car?.category || "Available"}
        </span>
      </div>

      <div className="my-4 border-t border-gray-100" />

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl text-center">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl text-center font-medium">
          {success}
        </div>
      )}

      {/* Pick Up Date */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wide text-[#1E3A8A]">
          Pick-Up Date
        </label>
        <div className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-[#F8F8FC] px-4 py-3">
          <CalendarDays className="h-5 w-5 text-[#3656C8] mr-2" />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none"
            min={getTodayStr()}
          />
        </div>
      </div>

      {/* Return Date */}
      <div className="mt-4 space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wide text-[#1E3A8A]">
          Return Date
        </label>
        <div className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-[#F8F8FC] px-4 py-3">
          <CalendarDays className="h-5 w-5 text-[#3656C8] mr-2" />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none"
            min={startDate || getTodayStr()}
          />
        </div>
      </div>

      {/* Price Summary */}
      <div className="mt-5 rounded-2xl bg-[#F8F8FC] p-4 text-sm border border-gray-100">
        <div className="mb-2 flex justify-between text-gray-600">
          <span>{days} {days === 1 ? 'Day' : 'Days'} Rental</span>
          <span>${rentalTotal.toFixed(2)}</span>
        </div>

        <div className="mb-3 flex justify-between text-gray-600">
          <span>Service & Processing Fee</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-3">
          <span className="text-lg font-bold text-[#1E3A8A]">
            Total Price
          </span>
          <span className="text-xl font-bold text-[#1E3A8A]">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleBookNow}
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-[#27429C] py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#1f3682] disabled:opacity-50"
      >
        {loading ? "Processing Booking..." : isAuthenticated ? "Book Now" : "Sign In to Book"}
      </button>

      {/* Footer note */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
        <Shield className="h-4 w-4 text-green-600" />
        <span>Instant Confirmation & Free Cancellation</span>
      </div>
    </div>
  );
}