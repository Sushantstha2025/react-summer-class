import {
  ChartNoAxesColumnIncreasing,
  CalendarDays,
  CarFront,
} from "lucide-react";

const BottomComponent = () => {
  return (
    <div className="flex flex-wrap gap-5 py-6">

      {/* Revenue Card */}
      <div className="
        w-72.5 h-52.5
        bg-white border border-gray-200
        rounded-xl p-5
        shadow-sm
      ">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-gray-500">
              TOTAL REVENUE
            </p>

            <h2 className="text-[24px] font-bold text-[#092B66] mt-1">
              $128,450.00
            </h2>
          </div>

          <div className="
            flex items-center gap-1
            bg-green-100
            text-green-600
            text-[11px]
            font-semibold
            px-2 py-1
            rounded-lg
          ">
            <ChartNoAxesColumnIncreasing size={13}/>
            +12.5%
          </div>
        </div>


        {/* Graph */}
        <div className="mt-8">
          <svg 
            width="250" 
            height="80" 
            viewBox="0 0 250 80"
            fill="none"
          >

            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#4C8DFF" stopOpacity="0.25"/>
                <stop offset="1" stopColor="#4C8DFF" stopOpacity="0"/>
              </linearGradient>
            </defs>


            <path
              d="
              M5 65
              C45 55, 70 30, 110 35
              C145 42, 160 35, 195 18
              C220 5, 240 8, 250 5
              L250 80
              L5 80 Z"
              fill="url(#area)"
            />

            <path
              d="
              M5 65
              C45 55, 70 30, 110 35
              C145 42, 160 35, 195 18
              C220 5, 240 8, 250 5"
              stroke="#4285FF"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

          </svg>
        </div>

      </div>



      {/* Bookings Card */}
      <div className="
        w-35 h-52.5
        bg-white border border-gray-200
        rounded-xl
        flex items-center justify-center
        shadow-sm
      ">
        <div className="text-center">

          <div className="
            mx-auto
            w-10 h-10
            rounded-full
            bg-[#E7EEFF]
            flex items-center justify-center
          ">
            <CalendarDays 
              size={18}
              className="text-blue-600"
            />
          </div>


          <p className="
            text-[11px]
            text-gray-500
            font-semibold
            mt-5
          ">
            Total Bookings
          </p>


          <h2 className="
            text-2xl
            font-bold
            text-[#092B66]
          ">
            1,240
          </h2>


          <p className="
            text-[11px]
            text-green-600
            font-medium
          ">
            +45 this week
          </p>

        </div>
      </div>




      {/* Cars Card */}
      <div className="
        w-35 h-52.5
        bg-white border border-gray-200
        rounded-xl
        flex items-center justify-center
        shadow-sm
      ">

        <div className="text-center">

          <div className="
            mx-auto
            w-10 h-10
            rounded-full
            bg-[#FFE8DC]
            flex items-center justify-center
          ">
            <CarFront
              size={18}
              className="text-orange-600"
            />
          </div>


          <p className="
            text-[11px]
            text-gray-500
            font-semibold
            mt-5
          ">
            Available Cars
          </p>


          <h2 className="
            text-2xl
            font-bold
            text-[#092B66]
          ">
            84/112
          </h2>


          {/* progress bar */}
          <div className="
            mt-3
            w-20
            h-1
            bg-gray-200
            rounded-full
            overflow-hidden
            mx-auto
          ">
            <div 
              className="
                h-full
                bg-[#5B2A16]
                w-[75%]
              "
            />
          </div>

        </div>

      </div>

    <button 
  className="
    self-start
    w-fit
    px-5
    py-3
    text-sm
    font-semibold
    bg-[#092B66]
    text-white
    rounded-xl
    ml-50
    active:scale-95
  "
>
  + Book New Ride
</button>


    </div>
  );
};

export default BottomComponent;
