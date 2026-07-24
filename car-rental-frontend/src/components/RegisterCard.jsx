const RegisterCard = () => {
  return (
    <main className='min-h-[calc(100vh-64px-100px)] flex items-center justify-center bg-[#FFFFFF]'>
        <div className="w-fit h-full px-5 py-5 border-gray-400 rounded-lg shadow-lg">
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-semibold mb-1 tracking-tight'>Create Your Account</h1>
                <h4 className='text-gray-700 text-l mb-7'>Join the elite fleet of Luxe Drive members</h4>    
            </div>

            <form className='flex flex-col'>
                <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="fullName">Full Name</label>
                <input className='px-3 py-2 bg-[#F4F3FA] rounded-lg mb-6' type="text" placeholder='John Doe' name='fullName' id='fullName' />

                <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="email">Email Address</label>
                <input className='px-3 py-2 bg-[#F4F3FA] rounded-lg mb-6' type="email" placeholder='john@example.com' name='email' id='email' />

                <label className='text-sm text-gray-700 font-semibold mb-1' htmlFor="phone">Phone Number</label>
                <input className='px-3 py-2 bg-[#F4F3FA] rounded-lg mb-6' type="number" placeholder='(+977) 000-000-0000' />

                <div className='flex gap-6'>
                    <div className='flex flex-col'>
                        <label className='text-md mb-1' htmlFor="password">Password</label>
                        <input className='px-3 py-2 bg-[#F4F3FA] rounded-lg mb-2' type="password" placeholder='xxxxxxxx' name='password' id='password' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-md mb-1' htmlFor="confirmPassword">Confirm Password</label>
                        <input className='px-3 py-2 bg-[#F4F3FA] rounded-lg mb-2' type="password" placeholder='xxxxxxxx' name='confirmPassword' id='confirmPassword' />
                    </div>
                    
                </div>
            </form>

            <button className='bg-[#1E3A8A] text-white text-center px-36 py-3 rounded-lg text-l font-semibold mt-8 ml-4 hover:bg-[#162c6a]'>Create Account</button>

            <div className='flex items-center justify-center gap-2 mt-4'>
                <h3 className='text-gray-700 text-l'>Already have an account?</h3>
                <a className='text-blue-600 font-semibold text-l' href="#">Login here</a>
            </div>
        </div>
    </main>
  )
}

export default RegisterCard
