import React, { useEffect, useState, useRef } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import pic1 from '../../utils/pic1.png';
import { CiSearch } from "react-icons/ci";
import About from "./about";
import Offers from "./offers";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const searchRef = useRef();


  const searchHandler = (e) => {
    e.preventDefault();
    setSearchClicked((prev) => !prev);
    if (searchClicked) {
      searchRef.current.focus();
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <><div className="flex sm:flex-row items-center justify-center sm:justify-center sm:items-start mt-5">
      <div className="flex flex-col items-center justify-center lg:pl-40 mb-40">
        <div className="text-center lg:w-4/5 mt-12">
          <div className=" text-slate-900 text-7xl font-bold font-['Merriweather'] leading-12">Modern living for everyone</div>
          <div className=" text-slate-900 text-xl font-normal font-['Open Sans'] mt-5 leading-9">We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.</div>
        </div>
        <div className="w-auto flex items-center justify-center">

          <div className="w-screen sm:w-full h-24 bg-slate-100 rounded border-b-2 mt-12 relative flex gap-4">
            <Menu as="div" className="relative inline-block text-left">
              <div className="p-6">
                <Menu.Button
                  onClick={handleMenuToggle}
                  className="inline-flex w-full justify-center  ml-6 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-base font-normal font-['Open Sans'] leading-relaxed"
                >
                  Property type
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 ml-3 text-gray-400"
                    aria-hidden="true" />
                </Menu.Button>
              </div>

              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {/* Dropdown items */}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      License
                    </a>
                  </div>
                </div>
              )}
            </Menu>
            <div className="bg-white rounded w-48 h-10 mt-6 gap-1 flex items-center justify-start text-center font-['Open Sans']">
              <CiSearch className="ml-2 cursor-pointer" />
              <input
              type="text"
              className="w-40 h-10 border-none outline-none text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed"
              placeholder="Search for location"
              />
            </div>

            <button class="w-28 mr-5 bg-blue-900 h-10 rounded flex mt-6 justify-center items-center text-center text-white text-base  font-bold  font-['Open Sans'] rounded">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse mt-12 hidden sm:hidden md:hidden">
        <div className="w-56 h-full relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[144px] absolute bg-slate-100 rounded-full" />
        </div>

        <div className="w-56 h-36 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[144px] absolute bg-slate-100 rounded-full" />
        </div>
        <div className="w-2/6 h-36 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[144px] absolute bg-slate-100 rounded-full" />
        </div>
      </div>
      <div className="lg:flex flex-col items-end mt-12 hidden sm:hidden md:hidden">

        <div className="w-72 h-full relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[144px] absolute bg-slate-100 rounded-full" />
        </div>

        <div className="w-72 h-36 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[144px] absolute bg-slate-100 rounded-full" />
        </div>
        <div className="w-72 h-36 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[144px] absolute bg-slate-100 rounded-full" />
        </div>
        <div className="w-72 h-36 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-0 top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[97px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[49px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[146px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[16px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[113px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[65px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[32px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[129px] top-[144px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-0 absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[16px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[32px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[48px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[64px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[80px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[96px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[112px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[128px] absolute bg-slate-100 rounded-full" />
          <div className="w-2 h-2 left-[81px] top-[144px] absolute bg-slate-100 rounded-full" />
        </div>


      </div>
      <div className="hidden sm:hidden md:hidden lg:flex absolute justify-end items-end right-0 mr-44 mt-8">
        <img className="w-3/3 h-full object-cover" src={pic1} alt="Your Image" />
      </div>



    </div><Offers /><About /></>
    );
};

export default Home;
