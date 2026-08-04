import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';

const ResetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resetToken, setResetToken] = useState(() => {
    // prefer location state, fallback to sessionStorage (plain token)
    if (location.state?.resetToken) return location.state.resetToken;
    try {
      const stored = sessionStorage.getItem('resetToken');
      return stored || '';
    } catch (e) {
      return '';
    }
  });
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!resetToken || !password) {
      setError('Please provide the reset token and a new password');
      return;
    }

    try {
      setLoading(true);
      await authAPI.resetPassword({ resetToken, password });
      setSuccess('Password reset successfully. Redirecting to login...');
      try { sessionStorage.removeItem('resetToken'); } catch {}
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.message || 'Unable to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-[calc(100vh-64px-100px)] flex items-center justify-center bg-[#FFFFFF] py-10'>
      <div className='w-full max-w-md px-8 py-7 border border-gray-200 rounded-lg shadow-lg bg-white'>
        <div className='flex items-center flex-col mb-4'>
          <h1 className='text-2xl font-semibold mb-1 tracking-tight text-[#1E3A8A]'>Reset Password</h1>
          <p className='text-sm text-gray-600 text-center'>Enter the reset token and your new password.</p>
        </div>

        {error && <div className='mb-4 p-3 bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg text-center'>{error}</div>}
        {success && <div className='mb-4 p-3 bg-green-100 border border-green-300 text-green-700 text-sm rounded-lg text-center'>{success}</div>}

        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor='resetToken'>Reset Token</label>
          <input
            id='resetToken'
            type='text'
            value={resetToken}
            onChange={(e) => setResetToken(e.target.value)}
            placeholder='Paste reset token or use prefilled'
            className='px-3 py-2 bg-[#F4F3FA] border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor='password'>New Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter new password'
            className='px-3 py-2 bg-[#F4F3FA] border border-gray-200 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-[#1E3A8A] text-white text-center py-3 rounded-lg text-base font-semibold mb-4 hover:bg-[#162c6a] transition disabled:opacity-50'
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <div className='flex items-center justify-center gap-2 mt-2'>
          <Link className='text-blue-800 font-semibold text-sm hover:underline' to='/login'>Back to Login</Link>
        </div>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
