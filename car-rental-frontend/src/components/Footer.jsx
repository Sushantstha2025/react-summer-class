const Footer = () => {
  return (
     <footer className="bg-[#E3E1E9] w-full py-4 px-10 text-black flex items-center justify-between">
        <div>
            <h1 className='text-2xl text-[#00236F] font-bold'>LUXE DRIVE</h1>
            <p className='tracking-wide text-gray-600 text-sm mt-2'>@ 2024 Luxe Drive Car Rental System. All rights reserved.</p>
        </div>

        <div className='flex gap-6 text-gray-600'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Service</a>
            <a href="#">Contact Us</a>
        </div>
    </footer>
  )
}

export default Footer
