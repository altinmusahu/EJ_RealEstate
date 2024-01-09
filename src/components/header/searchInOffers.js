import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from 'react-router-dom';


const SearchInOffers = () => {

  return (

    <div className="w-full h-full">

        <div className="w-full h-16 text-center text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10 mx-auto mt-16">Search for an offer </div>
        <div className="w-full h-11 text-center text-slate-900 text-xl font-normal font-['Open Sans'] leading-9">Choose from the most advantageous offers</div>

        <div className="w-full h-90 bg-slate-100 rounded mt-12">
            <div className="w-96 h-14 relative">
                <div className="w-96 h-14 left-[330px] top-14 absolute">
                <div className="w-36 h-14 left-[604px] top-0 absolute bg-blue-900 rounded" />
                <div className="w-14 h-6 left-[645px] top-[17.93px] absolute text-center text-white text-base font-bold font-['Open Sans'] cursor-pointer">Search</div>
                <div className="w-4 h-4 left-[418px] top-[21.09px] absolute"></div>
                </div>
                <div className="w-96 h-14 left-[550px] top-14 absolute bg-white text-base font-normal font-['Open Sans'] leading-relaxed pl-2">
                    <input
                    type="text"
                    className="w-full h-full border-none outline-none text-slate-900"
                    placeholder="Enter a keyword"
                    />
                </div>

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

        <div className="flex flex-col justify-center items-center md:flex-row gap-6 lg:mt-20 mt-12 mb-12">
            <div className="lg:w-80 lg:h-auto w-80 h-96 md:h-96 bg-white rounded border border-slate-100">
                <img className="w-96 h-72" src="https://via.placeholder.com/495x278" />
                <div className="w-80 text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Large 4-room apartment with a beautiful terrace</div>
                <div className="text-blue-900 text-base font-bold font-['Open Sans']">320 000€</div>
                <div className="text-slate-900 text-base font-normal font-['Open Sans']">Barcelona IV. </div>
            </div>
        </div>


        <div className="flex items-center justify-center m-5">
            <button className="w-32 h-12 py-3 rounded border-2 border-blue-900 flex items-center justify-center gap-2.5 focus:border-blue-500 cursor-pointer">
                    <div className="text-center text-blue-900 text-base font-bold font-['Open Sans']">Show next</div>
            </button>
        </div>


    </div>


    

  );
};

export default SearchInOffers;