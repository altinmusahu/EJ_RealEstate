import React, { useEffect, useState, useRef } from "react";
import { NavLink } from 'react-router-dom';


const Header = () => {

  return (
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
            <NavLink to='/searchInOffers' className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">Search in offers</NavLink>
            <NavLink className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">References</NavLink>
            <NavLink className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">About us</NavLink>
            <NavLink className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 mx-4">Our team</NavLink>

        </div>
        <div className="flex items-center gap-5">
        <button class="bg-blue-900 rounded justify-start items-center text-center text-white text-base  font-bold  font-['Open Sans'] py-2 px-4 rounded">
            Sign in
        </button>
        <button class="bg-transparent rounded justify-start items-center hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Sign up
        </button>
        </div>
    </div>

  );
};

export default Header;
