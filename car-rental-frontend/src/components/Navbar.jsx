import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='bg-[#FAF8FF] px-20 py-4 flex items-center justify-between'>
        <h1 className='text-blue-800 font-bold text-3xl tracking-tighter'>LUXE DRIVE</h1>
        <nav className='flex gap-10 font-semibold'>
            <a href="#">Cars</a>
            <a href="#">Services</a>
            <a href="#">Brands</a>
            <a href="#">Support</a>
        </nav>
        <div className='flex items-center gap-10'>
            <Search size={32} strokeWidth={1.75} />
            <button className='bg-blue-700 text-white px-3 py-2 rounded-full font-semibold'>Sign In</button>
        </div>
      </div>
  )
}

export default Navbar
