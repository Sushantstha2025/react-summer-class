import { ArrowRight } from 'lucide-react';
import VehicleCard from '../VehicleCard';

const Middle = () => {
    const cars = [
  {
    id: 1,
    image: "https://imgs.search.brave.com/clczfTJE78DLQq6vLTBiwHsc7cp6L58gVsZJiMyZSyo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvdGVz/bGEtbW9kZWwtcy10/aGUtY2FyLXRoYXQt/Y2hhbmdlZC1ldnMt/Zm9yZXZlci1lbmRz/LXYwLUVSWk0yeGli/VzJNVWFuaDUtYU4t/QjIzVmNuSTRxMlNM/UnIwckxYTDZqVXcu/anBlZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz0yMmNmNGUzZDU0/NGNhNTZkM2E5YzJm/ZTRiNjIyYzhlMWE2/NzkyMTU4",
    brand: "Tesla",
    model: "Model S Plaid",
    price: 299,
    type: "Electric",
    transmission: "Auto",
    seats: 5,
  },
  {
    id: 2,  
    image: "https://imgs.search.brave.com/r_-sacbZDGzW54uZ5b8oqjg1G-D9BDD3eHBloh0QUKw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2FyZ3VydXMu/Y29tL2ltYWdlcy9m/b3JzYWxlLzIwMjYv/MDYvMDUvMTEvNDgv/MjAyMV9ibXdfbTQt/cGljLTUwNDk5Nzk3/ODEwNDk4NDI2NjEt/MTAyNHg3NjguanBl/Zz9pbz10cnVlJndp/ZHRoPTY0MCZoZWln/aHQ9NDgwJmZpdD1i/b3VuZHMmZm9ybWF0/PWpwZyZhdXRvPXdl/YnA",
    brand: "BMW",
    model: "M4 Competition",
    price: 380,
    type: "Petrol",
    transmission: "Manual",
    seats: 4,
  },
  {
    id: 3,
    image: "https://imgs.search.brave.com/HAQsRYOFB-3GUHRlu1P_YsJ11Ypl4T-UxAH1XZFCPAo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2xhc3NpYy5j/b20vdmVoaWNsZXMv/ZDk4ZTJkNDcwODIy/MDY0NjM5MzUzMTQ1/NjAwNGMxYjMuanBl/Zz9hcj0xNjo5JmZp/dD1jcm9wJmg9MzM4/Jnc9NjAw",
    brand: "Porsche",
    model: "911 Carrera",
    price: 550,
    type: "Petrol",
    transmission: "Auto",
    seats: 2,
  },
  {
    id: 4,
    image: "https://imgs.search.brave.com/2oPvN2Opyy03_MZGtNhBvMXHIDo7VCHoITu359yrn00/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJjYXJzLm5l/dC9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE2LzA0LzIw/MTJfTWVyY2VkZXNC/ZW56X1NMU0FNR0dU/MzQ1dGhBbm5pdmVy/c2FyeS0wLTE1MzYt/MzcweDI0Ny5qcGc",
    brand: "Mercedes",
    model: "AMG GT",
    price: 470,
    type: "Petrol",
    transmission: "Auto",
    seats: 2,
  },
  {
    id: 5,
    image: "https://imgs.search.brave.com/lNevhsi8Ytuk_fKLskGSQT6JqrO-3RHc16cmkKfzK_E/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/d3N1cGVyY2Fycy5j/b20vdGh1bWJuYWls/cy1zdXBlci11bHRy/YXdpZGUvQXVkaS8y/MDIyLUF1ZGktUlMt/RS1Ucm9uLUdULTAw/My5qcGc",
    brand: "Audi",
    model: "RS e-tron GT",
    price: 420,
    type: "Electric",
    transmission: "Auto",
    seats: 5,
  },
  {
    id: 6,
    image: "https://imgs.search.brave.com/CVvU5WY7SE_n1IHwjyvkY5cLQwXAitROe6BqM5mkR_4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5wcm9kdWN0aW9u/Lmpscm1zLmNvbS9z/dHlsZXMvaGVyb19j/cm9wL3MzLzIwMjUt/MDgtMDQvaW1hZ2Uv/MjEyMzdkODItZmIy/ZC00OWY5LThiNWUt/MmE3OGI1YzliNDc2/L1JSU19TVl9DYXJi/b25fRjM0XzE2eDlf/OEtfU0gwMDFfdjJf/UFIuanBnP1ZlcnNp/b25JZD14bXM5b3kx/aElOZ3Jabnk1eWdt/QUJfOG9XeElTVVU0/ayZoPTllZDQ4NTk2/Jml0b2s9TW9DaVdx/UlQ",
    brand: "Range Rover",
    model: "Sport SV",
    price: 650,
    type: "Hybrid",
    transmission: "Auto",
    seats: 7,
  }
];
  return (
    <section className='cards-section pt-15'>
            <div className='px-15'>
                <h4 className='tracking-tight text-blue-600'>PREMIUM FLEET</h4>
                <div className='flex items-center justify-between mt-2'>
                    <h1 className='text-3xl text-blue-800 font-bold'>Featured Vehicles</h1>
                    <button className='text-blue-600 flex items-center justify-between gap-2 mr-10 cursor-pointer translate-x-0 hover:translate-x-1 hover:text-blue-800 ease-in duration-100'>View all cars <ArrowRight className='text-blue-800' size={16} strokeWidth={2} /></button>
                </div>
            </div>

            <div className='cards-container flex flex-wrap items-center justify-center gap-10 px-20 py-7'>
                {
                    cars.map((car)=>{
                        return <VehicleCard car={car} />
                    })
                }
            </div>
        </section>
  )
}

export default Middle
