import { Banknote } from 'lucide-react';
import Footer from '../Footer'

const Bottom = () => {
  return (
    <div>
      <section className='upper-footer mt-20 bg-[#F4F3FA] px-4 py-10 pb-15'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h3 className='text-blue-500 text-xl tracking-tight font-sans'>THE LUXE DIFFERENCE</h3>
                <h1 className='text-blue-900 text-3xl mt-1 font-bold'>Why Choose Luxe Drive?</h1>
            </div>
            <div className='flex flex-wrap mt-10 gap-10 justify-center'>
                <div className='bg-white flex flex-col justify-center items-center gap-4 p-5 border-2 border-gray-200 translate-y-1 hover:translate-y-0 hover:shadow-lg duration-200 rounded-2xl h-70 w-70'>
                    <Banknote className='w-15 h-15 bg-[#1E3A8A] text-[#90A8FF] p-3 rounded-full' size={20} strokeWidth={2} />
                    <h3 className='text-[#1E3A8A] font-serif'>Affordable Pricing</h3>
                    <p className='font-serif text-gray-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis labore amet iusto necessitatibus, totam eaque vero saepe unde quis quasi.</p>
                </div>

                <div className='bg-white flex flex-col justify-center items-center gap-4 p-5 border-2 border-gray-200 translate-y-1 hover:translate-y-0 hover:shadow-lg duration-200 rounded-2xl h-70 w-70'>
                    <Banknote className='w-15 h-15 bg-[#1E3A8A] text-[#90A8FF] p-3 rounded-full' size={20} strokeWidth={2} />
                    <h3 className='text-[#1E3A8A] font-serif'>Affordable Pricing</h3>
                    <p className='font-serif text-gray-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis labore amet iusto necessitatibus, totam eaque vero saepe unde quis quasi.</p>
                </div>

                <div className='bg-white flex flex-col justify-center items-center gap-4 p-5 border-2 border-gray-200 translate-y-1 hover:translate-y-0 hover:shadow-lg duration-200 rounded-2xl h-70 w-70'>
                    <Banknote className='w-15 h-15 bg-[#1E3A8A] text-[#90A8FF] p-3 rounded-full' size={20} strokeWidth={2} />
                    <h3 className='text-[#1E3A8A] font-serif'>Affordable Pricing</h3>
                    <p className='font-serif text-gray-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis labore amet iusto necessitatibus, totam eaque vero saepe unde quis quasi.</p>
                </div>

                <div className='bg-white flex flex-col justify-center items-center gap-4 p-5 border-2 border-gray-200 translate-y-1 hover:translate-y-0 hover:shadow-lg duration-200 rounded-2xl h-70 w-70'>
                    <Banknote className='w-15 h-15 bg-[#1E3A8A] text-[#90A8FF] p-3 rounded-full' size={20} strokeWidth={2} />
                    <h3 className='text-[#1E3A8A] font-serif'>Affordable Pricing</h3>
                    <p className='font-serif text-gray-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis labore amet iusto necessitatibus, totam eaque vero saepe unde quis quasi.</p>
                </div>
                
            </div>
        </section>

        <section className='middle-footer pt-20 pb-20 border-b-2 border-gray-200 w-full bg-[#FFFFFF] flex flex-col justify-center items-center'>
            <h2 className='text-xl text-gray-400 tracking-wide'>OUR GLOBAL PARTNERS</h2>
            <div className='flex gap-20 mt-10 flex-wrap'>
                <h1 className='font-bold text-[#a8a8a8] text-4xl'>BMW</h1>
                <h1 className='font-bold text-[#a8a8a8] text-4xl'>MERCEDES</h1>
                <h1 className='font-bold text-[#a8a8a8] text-4xl'>AUDI</h1>
                <h1 className='font-bold text-[#a8a8a8] text-4xl'>TOYOTA</h1>
                <h1 className='font-bold text-[#a8a8a8] text-4xl'>TESLA</h1>
                
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Bottom
