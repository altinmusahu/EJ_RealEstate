import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-5 sm:p-10 mx-5 sm:mx-10 justify-center lg:gap-20 mb-10">
      <div className="flex items-center sm:mr-28">
        <NavLink to='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="40"
          viewBox="0 0 65 40"
          fill="none"
          className="cursor-pointer"
          
        >
           <path
                d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
                fill="#091638"
            ></path> 
       </svg>
       </NavLink>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-5 sm:mt-0 gap-4 w-full sm:w-auto">
        <NavLink
          to='/topOffers'
          className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 my-2 sm:mx-4"
        >
          Top offers
        </NavLink>
        <NavLink
          to='/searchInOffers'
          className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 my-2 sm:mx-4"
        >
          Search in offers
        </NavLink>
        {/* <NavLink
          to='/references'
          className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 my-2 sm:mx-4"
        >
          References
        </NavLink> */}
        <NavLink
          to='/about'
          className="text-slate-900 text-base font-normal font-['Open Sans'] leading-9 my-2 sm:mx-4"
        >
          About us
        </NavLink>

        </div>
      <div className={`flex items-center justify-center sm:flex sm:mt-0 mt-5 ml-0 sm:ml-12`}>
        <button className="bg-blue-900 rounded justify-start mr-2 items-center text-center text-white text-base font-bold font-['Open Sans'] py-3 sm:mx-2 w-36 rounded">
          Sign in
        </button>
        <button className="bg-transparent rounded justify-start ml-2 items-center hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-3 w-36 border border-blue-500 hover:border-transparent rounded sm:mx-2">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
