import React from 'react'
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';

const LoginCard = () => {
  return (
    <main className='min-h-[calc(100vh-64px-80px)] flex items-center justify-center bg-[#FFFFFF]'>
        <div className='w-1/4 h-full px-5 py-10 border-gray-400 rounded-lg shadow-lg'>
        <div className='flex items-center flex-col'>
            <h1 className='text-3xl font-semibold mb-1 tracking-tight'>Welcome Back</h1>
            <h4 className='text-gray-700 text-l mb-7'>Enter your credentials to access your account</h4>
        </div>
            <form>
                <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="email">Email Address</label>
                <div className="relative mb-5">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border-gray-200 bg-[#F4F3FA] py-2 pl-10 pr-4"
                    />
                </div>

                <div className='flex items-center justify-between'>
                    <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="password">Password</label>
                    <a className='text-[#3177C0]' href="#">Forgot Password?</a>
                </div>

                <div className='relative mb-10'>
                    <Lock className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' size={28} strokeWidth={0.75} />
                    <input 
                        type="password"
                        placeholder='xxxxxxxxxx'
                        className='w-full rounded-lg border-gray-200 bg-[#F4F3FA] py-2 pl-10 pr-4'
                    />
                </div>
            </form>

            <button className='bg-[#1E3A8A] text-white text-center px-36 py-3 rounded-lg text-l font-semibold mb-4 hover:bg-[#162c6a]'>Sign In</button>


            <div className='flex items-center justify-center gap-2'>
                <h3 className='text-gray-700 text-l'>Don't have an account?</h3>
                <a className='text-blue-800 text-l' href="#">Register</a>
            </div>

        </div>
    </main>
  )
}

export default LoginCard
