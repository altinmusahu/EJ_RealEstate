import React from "react";
import { CiSearch } from "react-icons/ci";
import pic1 from '../../utils/pic1.png'; // Placeholder image
import { FaLocationDot } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';


const Offers = () => {
  return (
    <div className="w-full h-full bg-slate-100 pb-12 md:pb-24  ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between justify">
        <div className="w-full">
          <div className="text-slate-900 text-3xl md:text-5xl font-bold font-[Merriweather] leading-8 pl-8 md:pl-40 pt-8 md:pt-12">Top offers</div>
          <div className="text-slate-900 text-base md:text-xl font-normal font-[Open-Sans] leading-6 pl-8 md:pl-40 pt-2 md:pt-7">
            Fulfill your career dreams, enjoy all the achievements of the <br /> city center and luxury housing to the fullest.
          </div>
        </div>
        <div className="flex lg:justify-end justify-center items-end w-full">
          <NavLink to='/searchInOffers'>
            <button className="text-center text-blue-900 text-sm md:text-base font-bold font-[Open-Sans] leading-5 border border-blue-900 rounded lg:p-5 mt-20 p-2 lg:mr-80 hover:border-blue-500 hover:text-blue-500">Show all offers</button>
          </NavLink>
        </div>
      </div>

      <div className=" lg:block custom-w h-0.5 bg-blue-900 lg:ml-40 hidden mt-2"></div>

      <div className="flex flex-col justify-center items-center md:flex-row gap-6 lg:mt-20 mt-12">
        {/* Box 1 */}
        <Link to="/details"> 
        <div className="lg:w-80 lg:h-auto w-64 h-80 md:h-96 bg-white rounded border border-slate-100 ">
          <img className="w-80 h-48 md:h-64 object-contain  overflow-hidden transition duration-300 transform hover:scale-105" src={pic1} alt="Offer" />
          <div className="flex flex-col justify-between p-2 md:p-4">
            <div className="text-slate-900 text-lg md:text-xl font-bold font-[merriweather] leading-6 mb-4">
              Premium penthouse in central Barcelona
              with panoramic views
            </div>
            <div className="text-blue-900 text-base font-bold font-[Open-Sans]">807.57 €/ month</div>
            <div className="text-slate-900 text-base font-normal font-[open-sans] flex"> <FaLocationDot className="flex justify-center items-center mt-1 mr-2"/>
            Barcelona I</div>
          </div>
        </div>
        </Link>
      </div>
      
    </div>
  );
}

export default Offers;
