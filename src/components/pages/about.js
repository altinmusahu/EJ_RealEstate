import React, { useEffect, useState, useRef } from "react";



const About = () => {
    return(
<div className="lg:w-full lg:h-full bg-white lg:flex items-center justify-center flex-col hidden">
    <div className="flex space-x-4 mt-28 flex-col">


        <div className="flex items-center justify-center mb-28 ml-6">

            <div className="lg:flex hidden sm:hidden">
                <img className="h-96" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftheyec%2Ffiles%2F2018%2F04%2Fpexels-photo-374016.jpg" alt="Image" />
            </div>

            <div className="w-1/3 ml-10">
                <div className="text-slate-900 text-5xl font-bold font-[merriweather] leading-10 mb-6 text-center">About us</div>
                <div className="text-slate-900 text-base font-normal font-['open-sans'] leading-relaxed w-96 ml-16">
                    We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase, or rental of real estate. 
                    Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava.
                    <br />
                    We have a connection to all banks on the Slovak market, so we can solve everything under one roof. By constantly innovating our business activities, 
                    we move forward and we are able to offer truly above-standard services that set us apart from the competition.
                </div>
            </div>
        </div>

        <div className="md:flex md:items-center md:justify-center md:gap-8 md:flex-row flex-col text-center justify-center">

            <div className="w-60 h-96 bg-white rounde flex justify-center items-center flex-col">
                <div className="flex">
                    <img className="rounded object-contain" src="https://img.freepik.com/free-photo/close-up-smiley-woman-working_23-2149300652.jpg" alt="Placeholder" />
                </div>
                <div className="flex flex-col justify-center items-center mt-12">
                    <div className="text-center text-slate-900 text-2xl font-bold font-['Merriweather'] leading-7">Ava Mitchell</div>
                    <div className="text-center text-slate-900 text-xl font-normal font-['Open Sans']">Real Estate Broker</div>
                </div>
            </div>
            <div className="w-60 h-96 bg-white rounded flex justify-center items-center flex-col">
                <div className="flex">
                    <img className="rounded object-contain" src="https://www.u-r-home.com/wp-content/uploads/2022/11/Real-Estate-Agent-Condo-201811-001.jpg" alt="Placeholder" />
                </div>
                <div className="flex flex-col justify-center items-center mt-12">
                    <div className="text-center text-slate-900 text-2xl font-bold font-['Merriweather'] leading-7">Davis Carder</div>
                    <div className="text-center text-slate-900 text-xl font-normal font-['Open Sans']">Real Estate Agent</div>
                </div>
            </div>
            




            <div className="ml-14">
                <div className="text-slate-900 text-5xl font-bold font-[merriweather] leading-10 mb-6">Our Team</div>
                    <div className="text-slate-900 text-base font-normal font-[Open-Sans] leading-relaxed w-96">
                        We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase, or rental of real estate. 
                        Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava.
                    </div>
            </div>

        </div>

        <div className="p-32 flex flex-col">
            <div className="text-slate-900 text-5xl font-bold font-[merriweather] leading-10 mb-6 w-full text-center">References</div>
            <div className="text-slate-900 text-base font-normal font-[Open-Sans] leading-relaxed w-full text-center">
                Some reviews that clients and collaborators have given us.
            </div>
            <div className="flex flex-1 justify-start items-start">
                <div className="h-full p-9 bg-slate-100 mt-12 flex flex-col flex-1 mr-4 items-center">
                    <div className=" text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">“Our experience with LA-Real Estate was exceptional. Their team's expertise and dedication made our real estate transaction smooth and stress-free. From finding the perfect property to navigating the financial aspects, they were with us every step of the way. Highly recommended!”</div>
                    <div className="p-9 text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Emerson Aminoff</div>
                    <div className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">3 bedroom apartment in Madrid</div>

                </div>
                <div className="h-full p-9 bg-slate-100 mt-12 flex flex-col flex-1 mr-4 items-center">
                    <div className=" text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">“As a real estate professional, I have collaborated with LA- Real Estate on numerous occasions. Their commitment to excellence and deep understanding of the market set them apart. Working with them is a guarantee of quality service and successful outcomes.”</div>
                    <div className="p-9 text-slate-900 text-xl font-bold font-['Merriweather'] leading-7"> Sarah Johnson</div>
                    <div className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">2 bedroom apartment in Barcelona</div>
                </div>
                <div className="h-full p-9 bg-slate-100 mt-12 flex flex-col flex-1 mr-4 items-center">
                    <div className=" text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed pb-10 mb-3">“Choosing LA-Real Estate was the best decision we made in our home-buying journey. Their team not only helped us find our dream home but also provided valuable insights into the real estate market. Trustworthy and efficient!”</div>
                    <div className="p-9 text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Mark Davis</div>
                    <div className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">4 bedroom apartment in Valencia</div>
                </div>
                <div className="h-[140%] p-9 bg-slate-100 mt-12 flex flex-col flex-1 mr-4 items-center">
                    <div className=" text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed mb-6">“We have had a long-standing partnership with [Your Company Name], and it has been nothing short of fantastic. Their professionalism, integrity, and results-driven approach make them a preferred collaborator. Looking forward to continued success together!”</div>
                    <div className="p-9 text-slate-900 text-xl font-bold font-['Merriweather'] leading-7"> Alex Rodriguez</div>
                    <div className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">2 bedroom apartmentt in Barcelona</div>
                </div>
                
            </div>
        </div>



        


    </div>

    

</div>
         




        

    );
};

export default About;