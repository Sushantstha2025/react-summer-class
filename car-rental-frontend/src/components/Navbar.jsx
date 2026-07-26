import { Search, BellDot, CircleUser  } from 'lucide-react';

const Navbar = (props) => {
  const isLoggedIn = props.state
  return (
    <div className='bg-[#FAF8FF] px-10 py-4 flex items-center justify-between'>
        <h1 className='text-blue-800 font-bold text-3xl tracking-tighter'>LUXE DRIVE</h1>
        { 
          isLoggedIn ? (
            <>
              <div className='flex items-center gap-7'>
                  <Search size={24} strokeWidth={1.75} />
                  <BellDot size={20} strokeWidth={2} />
                  <CircleUser size={24} strokeWidth={2} />
              </div>
            </>
            ) : (
              <>
              <nav className='flex gap-10 font-semibold'>
                  <a href="#">Cars</a>
                  <a href="#">Services</a>
                  <a href="#">Brands</a>
                  <a href="#">Support</a>
              </nav>
              <button className='bg-blue-700 text-white px-3 py-2 rounded-full font-semibold'>Sign In</button>
              </>
          )}
            
        
      </div>
  )
}

export default Navbar
