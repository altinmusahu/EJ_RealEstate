import React, { useEffect, useState, useRef } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import pic1 from '../../utils/pic1.png';
import { CiSearch } from "react-icons/ci";

const Offers = () => {
    return(
        <div className="w-full h-full  bg-slate-100 pb-24">
            <div className="w-95 h-20 text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10 pl-40 pt-12">Top offers</div>
            <div className="w-45 h-16 text-slate-900 text-xl font-normal font-['Open Sans'] leading-7 pl-40 pt-7">
                Fulfill your career dreams, enjoy all the achievements of the <br></br>city center and luxury housing to the fullest.</div>

                 <button className="custom-ml w-42 text-center text-blue-900 text-base font-bold font-open-sans leading-tight border
                  border-blue-900 rounded p-3 ml-120"> Show all offers
                 </button>

                    <div className="flex space-x-4 custom-ml mt-8">
                        <div className="origin-top-left rotate-180 w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute origin-top-left rotate-180 bg-blue-900 rounded-full" /></div>
                        <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute bg-blue-900 rounded-full" /></div>
                    </div>
                    
                

                <div className="custom-w h-0.5 bg-blue-900 ml-40"> </div>

                <div className="flex space-x-4">
                    {/* Box 1 */}
                    <div className="flex-shrink-0 w-80 h-96 bg-white rounded border border-slate-100 mt-12 ml-20">
                    <img className="w-96 h-64" src="" />
                        <div className="flex flex-col justify-between p-4">
                            <div className="w-80 text-slate-900 text-xl font-bold font-merriweather leading-7">
                            Large 4-room apartment with a beautiful terrace
                            </div>
                            <div className="text-blue-900 text-base font-bold font-open-sans">320 000€</div>
                            <div className="text-slate-900 text-base font-normal font-open-sans">Ne zemer te Prishtines</div>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="flex-shrink-0 w-80 h-96 bg-white rounded border border-slate-100 mt-12 ml-20">
                        <img className="w-96 h-64" src="https://via.placeholder.com/444x249" />
                        <div className="flex flex-col justify-between p-4">
                            <div className="w-80 text-slate-900 text-xl font-bold font-merriweather leading-7">
                            Large 4-room apartment with a beautiful terrace
                            </div>
                            <div className="text-blue-900 text-base font-bold font-open-sans">320 000€</div>
                            <div className="text-slate-900 text-base font-normal font-open-sans">Ne zemer te Prishtines</div>
                        </div>
                    </div>

                     {/* Box 3 */}
                    <div className="flex-shrink-0 w-80 h-96 bg-white rounded border border-slate-100 mt-12 ml-20">
                        <img className="w-96 h-64" src="https://via.placeholder.com/444x249" />
                        <div className="flex flex-col justify-between p-4">
                            <div className="w-80 text-slate-900 text-xl font-bold font-merriweather leading-7">
                            Large 4-room apartment with a beautiful terrace
                            </div>
                            <div className="text-blue-900 text-base font-bold font-open-sans">320 000€</div>
                            <div className="text-slate-900 text-base font-normal font-open-sans">Ne zemer te Prishtines</div>
                        </div>
                    </div>
                </div>


                

        </div>

        
    )
}

export default Offers;
