import { Cable, Settings, UserRound } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Middle = () => {
  return (
    <section className='cards-section pt-15'>
            <div className='px-15'>
                <h4 className='tracking-tight text-blue-600'>PREMIUM FLEET</h4>
                <div className='flex items-center justify-between mt-2'>
                    <h1 className='text-3xl text-blue-800 font-bold'>Featured Vehicles</h1>
                    <button className='text-blue-600 flex items-center justify-between gap-2 mr-10 cursor-pointer translate-y-1 hover:translate-y-0 hover:text-blue-800 ease-in duration-100'>View all cars <ArrowRight className='text-blue-800' size={16} strokeWidth={2} /></button>
                </div>
            </div>

            <div className='cards-container flex flex-wrap items-center justify-center gap-10 px-20 py-7'>
                <div className='card w-100 h-100 bg-[#FAF8FF] px-10 py-4 rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
                    <div className='image-div border-b-2 border-gray-300'>
                        <img className='rounded-md ml-2.5 w-75 h-40 mb-3' src="https://imgs.search.brave.com/R9lqImg9KbGk_7YKKBSg3GWSGEfIyG8SYlzGLSzNE_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy85NzNj/YzUyYy0wYzk2LTRm/ZmItYWFjZS05MmU2/OTQxMmIzNzEuanBn/P2Nyb3A9MC41NjN4/dzowLjQ3NnhoOzAu/Mjc5eHcsMC4zMjB4/aCZyZXNpemU9NzAw/Oio" alt="loading" />
                    </div>
                    <div className='info mt-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-gray-600 tracking-tight'>Lucid</h4>
                            <h3 className='font-semibold'>$450</h3>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Air Sapphire</h2>
                            <h4 className='text-gray-600 tracking-tight'>/day</h4>
                        </div>

                        <div className='flex items-center gap-4 mt-3'>
                            <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> Electric</p>
                            <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> Auto</p>
                            <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> 5 Seats</p>
                        </div>

                        <button className='px-3 py-2 mt-8 ml-50 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View Details</button>
                    </div>
                </div>

                <div className='card w-100 h-100 bg-[#FAF8FF] px-10 py-4 rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
                    <div className='image-div border-b-2 border-gray-300'>
                        <img className='rounded-md ml-2.5 w-75 h-40 mb-3' src="https://imgs.search.brave.com/R9lqImg9KbGk_7YKKBSg3GWSGEfIyG8SYlzGLSzNE_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy85NzNj/YzUyYy0wYzk2LTRm/ZmItYWFjZS05MmU2/OTQxMmIzNzEuanBn/P2Nyb3A9MC41NjN4/dzowLjQ3NnhoOzAu/Mjc5eHcsMC4zMjB4/aCZyZXNpemU9NzAw/Oio" alt="loading" />
                    </div>
                    <div className='info mt-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-gray-600 tracking-tight'>Lucid</h4>
                            <h3 className='font-semibold'>$450</h3>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Air Sapphire</h2>
                            <h4 className='text-gray-600 tracking-tight'>/day</h4>
                        </div>

                        <div className='flex items-center gap-4 mt-3'>
                            <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> Electric</p>
                            <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> Auto</p>
                            <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> 5 Seats</p>
                        </div>

                        <button className='px-3 py-2 mt-8 ml-50 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View Details</button>
                    </div>
                </div>

                <div className='card w-100 h-100 bg-[#FAF8FF] px-10 py-4 rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
                    <div className='image-div border-b-2 border-gray-300'>
                        <img className='rounded-md ml-2.5 w-75 h-40 mb-3' src="https://imgs.search.brave.com/R9lqImg9KbGk_7YKKBSg3GWSGEfIyG8SYlzGLSzNE_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy85NzNj/YzUyYy0wYzk2LTRm/ZmItYWFjZS05MmU2/OTQxMmIzNzEuanBn/P2Nyb3A9MC41NjN4/dzowLjQ3NnhoOzAu/Mjc5eHcsMC4zMjB4/aCZyZXNpemU9NzAw/Oio" alt="loading" />
                    </div>
                    <div className='info mt-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-gray-600 tracking-tight'>Lucid</h4>
                            <h3 className='font-semibold'>$450</h3>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Air Sapphire</h2>
                            <h4 className='text-gray-600 tracking-tight'>/day</h4>
                        </div>

                        <div className='flex items-center gap-4 mt-3'>
                            <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> Electric</p>
                            <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> Auto</p>
                            <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> 5 Seats</p>
                        </div>

                        <button className='px-3 py-2 mt-8 ml-50 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View Details</button>
                    </div>
                </div>

                <div className='card w-100 h-100 bg-[#FAF8FF] px-10 py-4 rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
                    <div className='image-div border-b-2 border-gray-300'>
                        <img className='rounded-md ml-2.5 w-75 h-40 mb-3' src="https://imgs.search.brave.com/R9lqImg9KbGk_7YKKBSg3GWSGEfIyG8SYlzGLSzNE_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy85NzNj/YzUyYy0wYzk2LTRm/ZmItYWFjZS05MmU2/OTQxMmIzNzEuanBn/P2Nyb3A9MC41NjN4/dzowLjQ3NnhoOzAu/Mjc5eHcsMC4zMjB4/aCZyZXNpemU9NzAw/Oio" alt="loading" />
                    </div>
                    <div className='info mt-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-gray-600 tracking-tight'>Lucid</h4>
                            <h3 className='font-semibold'>$450</h3>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Air Sapphire</h2>
                            <h4 className='text-gray-600 tracking-tight'>/day</h4>
                        </div>

                        <div className='flex items-center gap-4 mt-3'>
                            <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> Electric</p>
                            <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> Auto</p>
                            <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> 5 Seats</p>
                        </div>

                        <button className='px-3 py-2 mt-8 ml-50 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View Details</button>
                    </div>
                </div>

                <div className='card w-100 h-100 bg-[#FAF8FF] px-10 py-4 rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
                    <div className='image-div border-b-2 border-gray-300'>
                        <img className='rounded-md ml-2.5 w-75 h-40 mb-3' src="https://imgs.search.brave.com/R9lqImg9KbGk_7YKKBSg3GWSGEfIyG8SYlzGLSzNE_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy85NzNj/YzUyYy0wYzk2LTRm/ZmItYWFjZS05MmU2/OTQxMmIzNzEuanBn/P2Nyb3A9MC41NjN4/dzowLjQ3NnhoOzAu/Mjc5eHcsMC4zMjB4/aCZyZXNpemU9NzAw/Oio" alt="loading" />
                    </div>
                    <div className='info mt-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-gray-600 tracking-tight'>Lucid</h4>
                            <h3 className='font-semibold'>$450</h3>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Air Sapphire</h2>
                            <h4 className='text-gray-600 tracking-tight'>/day</h4>
                        </div>

                        <div className='flex items-center gap-4 mt-3'>
                            <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> Electric</p>
                            <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> Auto</p>
                            <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> 5 Seats</p>
                        </div>

                        <button className='px-3 py-2 mt-8 ml-50 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View Details</button>
                    </div>
                </div>
                
                <div className='card w-100 h-100 bg-[#FAF8FF] px-10 py-4 rounded-lg border border-gray-300 translate-y-1 transition-all duration-300 hover:shadow-lg hover:translate-y-0'>
                    <div className='image-div border-b-2 border-gray-300'>
                        <img className='rounded-md ml-2.5 w-75 h-40 mb-3' src="https://imgs.search.brave.com/R9lqImg9KbGk_7YKKBSg3GWSGEfIyG8SYlzGLSzNE_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy85NzNj/YzUyYy0wYzk2LTRm/ZmItYWFjZS05MmU2/OTQxMmIzNzEuanBn/P2Nyb3A9MC41NjN4/dzowLjQ3NnhoOzAu/Mjc5eHcsMC4zMjB4/aCZyZXNpemU9NzAw/Oio" alt="loading" />
                    </div>
                    <div className='info mt-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-gray-600 tracking-tight'>Lucid</h4>
                            <h3 className='font-semibold'>$450</h3>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Air Sapphire</h2>
                            <h4 className='text-gray-600 tracking-tight'>/day</h4>
                        </div>

                        <div className='flex items-center gap-4 mt-3'>
                            <p className='flex items-center justify-between w-fit gap-1'><Cable size={16} strokeWidth={1.25} /> Electric</p>
                            <p className='flex items-center justify-between w-fit gap-1'><Settings size={16} strokeWidth={1.25} /> Auto</p>
                            <p className='flex items-center justify-between w-fit gap-1'><UserRound size={16} strokeWidth={1.25} /> 5 Seats</p>
                        </div>

                        <button className='px-3 py-2 mt-8 ml-50 bg-[#E9E7EF] hover:bg-blue-500 hover:text-white rounded-lg ease-in-out duration-200'>View Details</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Middle
