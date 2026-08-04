import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';

const RegisterCard = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const res = await authAPI.register({
        name: fullName,
        email,
        password,
      });

      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-[calc(100vh-64px-100px)] flex items-center justify-center bg-[#FFFFFF] py-10'>
      <div className="w-full max-w-lg px-8 py-7 border border-gray-200 rounded-lg shadow-lg bg-white">
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-semibold mb-1 tracking-tight text-[#1E3A8A]'>Create Your Account</h1>
          <h4 className='text-gray-600 text-sm mb-6 text-center'>Join the elite fleet of Luxe Drive members</h4>    
        </div>

        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg text-center'>
            {error}
          </div>
        )}

        {success && (
          <div className='mb-4 p-3 bg-green-100 border border-green-300 text-green-700 text-sm rounded-lg text-center'>
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="fullName">Full Name</label>
          <input 
            className='px-3 py-2 bg-[#F4F3FA] border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type="text" 
            placeholder='John Doe' 
            id='fullName' 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="email">Email Address</label>
          <input 
            className='px-3 py-2 bg-[#F4F3FA] border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type="email" 
            placeholder='john@example.com' 
            id='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
            <div className='flex flex-col'>
              <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="password">Password</label>
              <input 
                className='px-3 py-2 bg-[#F4F3FA] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                type="password" 
                placeholder='••••••••' 
                id='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="confirmPassword">Confirm Password</label>
              <input 
                className='px-3 py-2 bg-[#F4F3FA] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                type="password" 
                placeholder='••••••••' 
                id='confirmPassword' 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className='w-full bg-[#1E3A8A] text-white text-center py-3 rounded-lg text-base font-semibold hover:bg-[#162c6a] transition disabled:opacity-50'
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className='flex items-center justify-center gap-2 mt-6'>
          <h3 className='text-gray-600 text-sm'>Already have an account?</h3>
          <Link className='text-blue-600 font-semibold text-sm hover:underline' to="/login">Login here</Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterCard;
