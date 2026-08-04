import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { authAPI } from '../services/api';

const VerifyOTPPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || '');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !otp) {
      setError('Please provide both email and OTP');
      return;
    }

    try {
      setLoading(true);
      const res = await authAPI.verifyOTP({ email, otp });
      setSuccess('OTP verified. Redirecting to reset password...');
      // session storage ma plain token store.
      try {
        sessionStorage.setItem('resetToken', res.token);
      } catch (e) {
        console.log(e.message)
      }
      navigate('/reset-password', { state: { resetToken: res.token, email } });
    } catch (err) {
      setError(err.message || 'OTP verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-[calc(100vh-64px-100px)] flex items-center justify-center bg-[#FFFFFF] py-10'>
      <div className='w-full max-w-md px-8 py-7 border border-gray-200 rounded-lg shadow-lg bg-white'>
        <div className='flex items-center flex-col mb-4'>
          <h1 className='text-2xl font-semibold mb-1 tracking-tight text-[#1E3A8A]'>Enter OTP</h1>
          <p className='text-sm text-gray-600 text-center'>Enter the OTP sent to your email to verify.</p>
        </div>

        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg text-center'>{error}</div>
        )}

        {success && (
          <div className='mb-4 p-3 bg-green-100 border border-green-300 text-green-700 text-sm rounded-lg text-center'>{success}</div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor='email'>Email Address</label>
          <div className='relative mb-4'>
            <Mail className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full rounded-lg border border-gray-200 bg-[#F4F3FA] py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor='otp'>OTP</label>
          <input
            id='otp'
            type='text'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder='Enter OTP'
            className='px-3 py-2 bg-[#F4F3FA] border border-gray-200 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-[#1E3A8A] text-white text-center py-3 rounded-lg text-base font-semibold mb-4 hover:bg-[#162c6a] transition disabled:opacity-50'
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <div className='flex items-center justify-center gap-2 mt-2'>
          <Link className='text-blue-800 font-semibold text-sm hover:underline' to='/login'>Back to Login</Link>
        </div>
      </div>
    </main>
  );
};

export default VerifyOTPPage;
