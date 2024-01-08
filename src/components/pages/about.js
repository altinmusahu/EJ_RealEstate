import React, { useEffect, useState, useRef } from "react";



const About = () => {
    return(
<div className="lg:w-full lg:h-full bg-white lg:flex items-center justify-center flex-col hidden">
    <div className="flex space-x-4 mt-28 flex-col">


        <div className="flex items-center justify-center mb-28">

            <div className="lg:flex hidden sm:hidden">
                <img className="h-96" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftheyec%2Ffiles%2F2018%2F04%2Fpexels-photo-374016.jpg" alt="Image" />
            </div>

            <div className="w-1/3 ml-10">
                <div className="text-slate-900 text-5xl font-bold font-merriweather leading-10 mb-6">About us</div>
                <div className="text-slate-900 text-base font-normal font-open-sans leading-relaxed">
                    We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase, or rental of real estate. 
                    Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava.
                    <br />
                    We have a connection to all banks on the Slovak market, so we can solve everything under one roof. By constantly innovating our business activities, 
                    we move forward and we are able to offer truly above-standard services that set us apart from the competition.
                </div>
            </div>
        </div>

        <div className="md:flex md:items-center md:justify-center md:gap-8 md:flex-row flex-col text-center justify-center">

            <div className="w-80 h-96 bg-white rounded border border-slate-100 flex justify-center items-center flex-col">
                <div className="flex">
                    <img className="rounded-full object-contain" alt="Placeholder" />
                </div>
                <div className="flex flex-col justify-center items-center mt-12">
                    <div className="text-center text-slate-900 text-2xl font-bold font-['Merriweather'] leading-7">Davis Carder</div>
                    <div className="text-center text-slate-900 text-xl font-normal font-['Open Sans']">Super duper position</div>
                </div>
            </div>
            <div className="w-80 h-96 bg-white rounded border border-slate-100 flex justify-normal items-center flex-col">
                <div className="flex">
                    <img className="rounded-full object-contain" alt="Placeholder" />
                </div>
                <div className="flex flex-col justify-center items-center mt-12">
                    <div className="text-center text-slate-900 text-2xl font-bold font-['Merriweather'] leading-7">Davis Carder</div>
                    <div className="text-center text-slate-900 text-xl font-normal font-['Open Sans']">Super duper position</div>
                </div>
            </div>
            




            <div className="ml-10">
                <div className="text-slate-900 text-5xl font-bold font-merriweather leading-10 mb-6">Our Team</div>
                    <div className="text-slate-900 text-base font-normal font-open-sans leading-relaxed w-96">
                        We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase, or rental of real estate. 
                        Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava.
                    </div>
            </div>

        </div>

        <div className="p-32 flex flex-col">
            <div className="text-slate-900 text-5xl font-bold font-merriweather leading-10 mb-6 w-full">References</div>
            <div className="text-slate-900 text-base font-normal font-open-sans leading-relaxed w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.
            </div>
            <div className="flex flex-1 justify-start items-start">
                <div className="h-72 p-9 bg-slate-100 mt-12 flex flex-col flex-1 mr-4 items-center">
                    <div className=" text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.</div>
                    <div className="p-9 text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Emerson Aminoff</div>
                    <div className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">3 bedroom apartmentt in Madrid</div>

                </div>
                <div className="h-72 p-9 bg-slate-100 mt-12 flex flex-col flex-1 mr-4 items-center">
                    <div className=" text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.</div>
                    <div className="p-9 text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Jocelyn Stanton</div>
                    <div className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">2 bedroom apartmentt in Barcelona</div>
                </div>
                
            </div>
        </div>



        


    </div>

    

</div>
         




        

    );
};

export default About;