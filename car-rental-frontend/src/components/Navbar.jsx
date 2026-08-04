import React from 'react';
import { Search, BellDot, CircleUser, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = (props) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const isLoggedIn = props.state !== undefined ? props.state : isAuthenticated;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='bg-[#FAF8FF] px-10 py-4 flex items-center justify-between border-b border-gray-100'>
      <Link to="/" className='text-blue-800 font-bold text-3xl tracking-tighter'>
        LUXE DRIVE
      </Link>

      {isLoggedIn ? (
        <div className='flex items-center gap-6'>
          <nav className='flex gap-6 font-medium text-gray-700 text-sm mr-4'>
            <Link to="/viewFleetPage" className='hover:text-blue-800 transition'>Fleet</Link>
            {user?.role === 'admin' ? (
              <Link to="/admin" className='hover:text-blue-800 font-semibold text-blue-900 transition'>Admin Dashboard</Link>
            ) : (
              <Link to="/user" className='hover:text-blue-800 font-semibold text-blue-900 transition'>My Bookings</Link>
            )}
          </nav>
          
          <div className='flex items-center gap-4 text-gray-700'>
            <Search size={20} className="cursor-pointer hover:text-blue-800" />
            <BellDot size={18} className="cursor-pointer hover:text-blue-800" />
            <div className='flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100'>
              <CircleUser size={20} className="text-blue-800" />
              <span className='text-sm font-semibold text-blue-900 capitalize'>
                {user?.name || "User"}
              </span>
            </div>
            <button 
              onClick={handleLogout}
              title="Logout"
              className='p-2 hover:bg-red-50 text-red-600 rounded-full transition'
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className='flex items-center gap-8'>
          <nav className='flex gap-8 font-semibold text-gray-700'>
            <Link to="/viewFleetPage" className='hover:text-blue-800 transition'>Cars</Link>
            <a href="#" className='hover:text-blue-800 transition'>Services</a>
            <a href="#" className='hover:text-blue-800 transition'>Brands</a>
            <a href="#" className='hover:text-blue-800 transition'>Support</a>
          </nav>
          <Link 
            to="/login"
            className='bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full font-semibold transition'
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
