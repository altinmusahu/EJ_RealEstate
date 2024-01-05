import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from 'react-router-dom';


const SearchInOffers = () => {

  return (

    <div className="w-full h-full">
        <div className="flex items-center p-10 mx-10 justify-between">
            <div className="flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="40"
                viewBox="0 0 65 40"
                fill="none"
                className="ml-12"
                >
                <path
                    d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
                    fill="#091638"
                ></path>
                </svg>
                
            </div>
            <div className="flex items-center">
                <NavLink to='/' className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">Top offers</NavLink>
                <NavLink to='' className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">Search in offers</NavLink>
                <NavLink className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">References</NavLink>
                <NavLink className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">About us</NavLink>
                <NavLink className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">Our team</NavLink>

            </div>
            <div className="flex items-center gap-5">
            <div className="w-32 h-12 px-6 py-3 bg-blue-900 rounded justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-base font-bold font-['Open Sans']">Contact us</div>
            </div>
            </div>

        </div>

        <div className="w-full h-16 text-center text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10 mx-auto mt-16">Search for an offer </div>
        <div className="w-full h-11 text-center text-slate-900 text-xl font-normal font-['Open Sans'] leading-9">Choose from the most advantageous offers</div>

        <div className="w-full h-90 bg-slate-100 rounded mt-12">
            <div className="w-96 h-14 relative">
                <div className="w-96 h-14 left-[330px] top-14 absolute">
                <div className="w-36 h-14 left-[604px] top-0 absolute bg-blue-900 rounded" />
                <div className="w-14 h-6 left-[645px] top-[17.93px] absolute text-center text-white text-base font-bold font-['Open Sans']">Search</div>
                <div className="w-4 h-4 left-[418px] top-[21.09px] absolute"></div>
                </div>
                <div className="w-96 h-14 left-[550px] top-14 absolute text-slate-900 bg-white text-base font-normal font-['Open Sans'] leading-relaxed pt-3 pl-2">Enter a keyword</div>
             </div>

             <div className="flex space-x-5 ml-44">
                <div className="w-64 h-12 relative bg-white border-2 border-slate-900 mt-32 ml-20 rounded-md">
                    <div className="relative p-2 text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Sale</div>
                 </div>

                 <div className="w-64 h-12 relative bg-white border-2 border-slate-900 mt-32 rounded-md">
                    <div className="left-[16px] top-[11px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Select room flat</div>
                </div>

                <div className="w-64 h-12 relative bg-white border-2 border-slate-900 mt-32 rounded-md">
                    <div className="left-[16px] top-[11px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Select location</div>
                </div>

                <div className="w-64 h-12 relative  bg-white border-2 border-slate-900 mt-32 rounded-md">
                    <div className="left-[16px] top-[11px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Most expensive</div>
                </div>



                

            </div>


            <div className="w-92 h-16 relative ml-96 mt-12">
  <div className="left-52 top-[30px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-9">0 €</div>
  <div className="left-[580px] top-[31px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-9">980 000 €</div>
  <div className="w-96 h-1 left-[220px] top-[14px] absolute bg-indigo-300 rounded-3xl" />
  <div className="w-6 h-6 left-52 top-0 absolute bg-blue-900 rounded-full" />
  <div className="w-6 h-6 left-[600px] top-0 absolute bg-blue-900 rounded-full" />
</div>

        </div>

        
            
        

          
    </div>
    

  );
};

export default SearchInOffers;
