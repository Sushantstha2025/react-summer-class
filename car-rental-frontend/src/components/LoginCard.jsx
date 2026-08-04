import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../services/api';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [forgotMode, setForgotMode] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await authAPI.login({ email, password });
      login(res.user, res.token);
      
      if (res.user?.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/viewFleetPage');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setResetMessage('');
      await authAPI.forgotPassword({ email });
      // redirect to verify OTP page and pass email along
      navigate('/verify-otp', { state: { email } });
    } catch (err) {
      setError(err.message || 'Unable to send reset email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-[calc(100vh-64px-100px)] flex items-center justify-center bg-[#FFFFFF] py-10'>
      <div className='w-full max-w-md px-8 py-7 border border-gray-200 rounded-lg shadow-lg bg-white'>
        <div className='flex items-center flex-col'>
          <h1 className='text-3xl font-semibold mb-1 tracking-tight text-[#1E3A8A]'>Welcome Back</h1>
          <h4 className='text-gray-600 text-sm mb-6 text-center'>Enter your credentials to access your account</h4>
        </div>

        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg text-center'>
            {error}
          </div>
        )}

        {forgotMode ? (
          <form onSubmit={handleForgotSubmit} className='flex flex-col'>
            <h2 className='text-2xl font-semibold mb-1 text-[#1E3A8A]'>Reset Password</h2>
            <p className='text-sm text-gray-600 mb-6 text-center'>Enter your email to receive a reset OTP.</p>

            <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="reset-email">Email Address</label>
            <div className="relative mb-5">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-200 bg-[#F4F3FA] py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {resetMessage && (
              <div className='mb-4 p-3 bg-green-100 border border-green-300 text-green-700 text-sm rounded-lg text-center'>
                {resetMessage}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className='w-full bg-[#1E3A8A] text-white text-center py-3 rounded-lg text-base font-semibold mb-4 hover:bg-[#162c6a] transition disabled:opacity-50'
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>

            <button
              type='button'
              className='w-full border border-gray-200 text-gray-700 py-3 rounded-lg text-base font-semibold hover:bg-gray-50 transition'
              onClick={() => {
                setForgotMode(false);
                setError('');
                setResetMessage('');
              }}
            >
              Back to Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="email">Email Address</label>
            <div className="relative mb-5">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-200 bg-[#F4F3FA] py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className='flex items-center justify-between mb-1'>
              <label className='text-sm text-gray-700 font-semibold' htmlFor="password">Password</label>
              <button
                type='button'
                className='text-xs text-[#3177C0] hover:underline'
                onClick={() => {
                  setForgotMode(true);
                  setError('');
                  setResetMessage('');
                }}
              >
                Forgot Password?
              </button>
            </div>

            <div className='relative mb-6'>
              <Lock className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
              <input 
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                className='w-full rounded-lg border border-gray-200 bg-[#F4F3FA] py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className='w-full bg-[#1E3A8A] text-white text-center py-3 rounded-lg text-base font-semibold mb-4 hover:bg-[#162c6a] transition disabled:opacity-50'
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        )}

        <div className='flex items-center justify-center gap-2 mt-2'>
          <h3 className='text-gray-600 text-sm'>Don't have an account?</h3>
          <Link className='text-blue-800 font-semibold text-sm hover:underline' to="/register">Register</Link>
        </div>
      </div>
    </main>
  );
};

export default LoginCard;
