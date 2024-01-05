import React, { useEffect, useState, useRef } from "react";



const About = () => {
    return(

        <div className="w-full h-full bg-white pb-56 flex items-center justify-center">
            <div className="flex space-x-4 mt-28 mb-96">

                <div className="flex-shrink-0">
                    <img className="h-96" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftheyec%2Ffiles%2F2018%2F04%2Fpexels-photo-374016.jpg"  />
                </div>

                <div className="flex-shrink-0 pl-12">
                    <div className="w-96 h-14 ml-24 text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10">About us</div>
                    <div className="w-80 h-96 ml-24 text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase or rental of real estate. 
                    Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava and Košice.<br/>We have a connection to all banks on the Slovak market, so we can solve everything under one roof. By constantly innovating our business activities, 
                    we move forward and we are able to offer truly above-standard services that set us apart from the competition.</div>
                </div>

                <div className="absolute custom-mt">
                <div className="right-3 top-0 absolute">
                    <div className="w-80 h-96 left-0 top-[2px] absolute">
                    <div className="w-80 h-96 left-0 top-0 absolute bg-white rounded border border-slate-100" />
                    <div className="w-80 left-0 top-[307px] absolute text-center text-slate-900 text-base font-normal font-['Open Sans']">Super duper position</div>
                    <div className="w-80 left-0 top-[274px] absolute text-center text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Davis Carder</div>
                    <img className="w-48 h-48 left-[75px] top-[48px] absolute rounded-full" src="https://via.placeholder.com/200x200" />
                    </div>
                    <div className="w-80 h-96 left-[2px] top-[412px] absolute">
                    <div className="w-80 h-96 left-0 top-0 absolute bg-white rounded border border-slate-100" />
                    <div className="w-80 left-0 top-[307px] absolute text-center text-slate-900 text-base font-normal font-['Open Sans']">Super duper position</div>
                    <div className="w-80 left-0 top-[274px] absolute text-center text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Randy Rosser</div>
                    <img className="w-48 h-48 left-[75px] top-[48px] absolute rounded-full" src="https://via.placeholder.com/200x200" />
                    </div>
                    <div className="w-80 h-96 left-[381px] top-0 absolute">
                    <div className="w-80 h-96 left-0 top-0 absolute bg-white rounded border border-slate-100" />
                    <div className="w-80 left-0 top-[307px] absolute text-center text-slate-900 text-base font-normal font-['Open Sans']">Super duper position</div>
                    <div className="w-80 left-0 top-[274px] absolute text-center text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Maren Press</div>
                    <img className="w-48 h-48 left-[75px] top-[48px] absolute rounded-full" src="https://via.placeholder.com/200x200" />
                    </div>
                    <div className="w-80 h-96 left-[383px] top-[410px] absolute">
                    <div className="w-80 h-96 left-0 top-0 absolute bg-white rounded border border-slate-100" />
                    <div className="w-80 left-0 top-[307px] absolute text-center text-slate-900 text-base font-normal font-['Open Sans']">Super duper position</div>
                    <div className="w-80 left-0 top-[274px] absolute text-center text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Haylie Donin</div>
                    <img className="w-48 h-48 left-[75px] top-[48px] absolute rounded-full" src="https://via.placeholder.com/200x200" />
                    </div>
                    <div className="w-80 h-96 left-[764px] top-[411px] absolute">
                    <div className="w-80 h-96 left-0 top-0 absolute bg-white rounded border border-slate-100" />
                    <div className="w-80 left-0 top-[307px] absolute text-center text-slate-900 text-base font-normal font-['Open Sans']">Super duper position</div>
                    <div className="w-80 left-0 top-[274px] absolute text-center text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Miracle Bator</div>
                    <img className="w-48 h-48 left-[75px] top-[48px] absolute rounded-full" src="https://via.placeholder.com/200x200" />
                    </div>
                </div>
                <div className="w-80 h-44 left-[762px] top-[97px] absolute">
                    <div className="w-80 h-20 left-0 top-0 absolute text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10">Our Team</div>
                    <div className="w-80 h-24 left-0 top-[80px] absolute text-slate-900 text-xl font-normal font-['Open Sans'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.</div>
                </div>
                <div className="w-28 h-4 left-[501px] top-[830px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-200 rounded-full" />
                    <div className="w-4 h-4 left-[32px] top-0 absolute bg-zinc-200 rounded-full" />
                    <div className="w-4 h-4 left-[64px] top-0 absolute bg-blue-900 rounded-full" />
                    <div className="w-4 h-4 left-[96px] top-0 absolute bg-zinc-200 rounded-full" />
                </div>
               </div>


               <div className="absolute custom-mt2">
                <div className="w-96 h-96 left-0 top-96 absolute">
                    <div className="w-96 h-20 left-0 top-0 absolute text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10">References</div>
                    <div className="w-96 h-16 left-0 top-[86px] absolute text-slate-900 text-xl font-normal font-['Open Sans'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.</div>
                    <div className="w-96 h-72 left-0 top-[198px] absolute">
                    <div className="custom-w2 h-72 left-0 top-0 absolute bg-slate-100" />
                    <div className="w-48 left-[24px] top-[219px] absolute text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Emerson Aminoff</div>
                    <div className="w-72 left-[24px] top-[248px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">3 bedroom apartmentt in Madrid</div>
                    <div className="w-96 left-[73px] top-[42px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.</div>
                    <div className="w-12 h-7 left-[24px] top-[48px] absolute opacity-50 text-slate-900 text-6xl font-bold font-['Merriweather'] leading-10">“</div>
                    </div>
                    <div className="w-96 h-72 left-[573px] top-[198px] absolute">
                    <div className="custom-w2 h-72 left-0 top-0 absolute bg-slate-100" />
                    <div className="w-48 left-[24px] top-[219px] absolute text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Jocelyn Stanton</div>
                    <div className="w-72 left-[24px] top-[248px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">2 bedroom apartmentt in Barcelona</div>
                    <div className="w-96 left-[73px] top-[42px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.</div>
                    <div className="w-12 h-7 left-[24px] top-[48px] absolute opacity-50 text-slate-900 text-6xl font-bold font-['Merriweather'] leading-10">“</div>
                    </div>
                </div>
                <div className="w-28 h-4 left-[501px] top-[900px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-200 rounded-full" />
                    <div className="w-4 h-4 left-[32px] top-0 absolute bg-zinc-200 rounded-full" />
                    <div className="w-4 h-4 left-[64px] top-0 absolute bg-blue-900 rounded-full" />
                    <div className="w-4 h-4 left-[96px] top-0 absolute bg-zinc-200 rounded-full" />
                </div>
                </div>


            </div>
         </div>
         




        

    );
};

export default About;