import React, { useRef,useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBlackTie } from "react-icons/fa6";

const Details = () => {
  const imageUrls = [
    'https://www.digitalphotomentor.com/photography/2018/09/real-estate-living-room-photo-2.jpg',
    'https://candyfoxstudio.com/media/Real%20estate/2.jpg',
    'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/12/Luxurious-bedrooms-luxury-bedroom-design.jpg',
  ];

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPhoneNumber(numericValue);
    // e kom hek at incrementin qe i rrit numret per shkak qe duhet me shenu veq numrin e telefonit, jo mi rrit numret
  };

  const descriptions = [
    "Living room with a beautiful view.",
    "Modern kitchen with ample space.",
    "Cozy bedroom with stylish decor.",
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
        <div className="h-32 text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10 ml-28">Premium penthouse in central Barcelona <br></br>with panoramic views</div>
        <div className="flex flex-cols-2">
            <div className="flex-col w-[70%] h-full bg-white pb-12 md:pb-24">
            <div className="w-[70%] mt-8 ml-28 relative">
            
                <Slider ref={sliderRef} {...settings}>
                {imageUrls.map((url, index) => (
                    <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-md">
                    <img src={url} alt={`Photo ${index + 1}`} className="w-full h-80 object-cover mx-auto" />
                    <div className="p-4 bg-gray-100">
                        <p className="text-gray-700 text-lg">{descriptions[index]}</p>
                    </div>
                    </div>
                ))}
                </Slider>
                <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-gray-700"
                onClick={() => sliderRef.current.slickPrev()}
                >
                {"<"}
                </button>
                <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl text-gray-700"
                onClick={() => sliderRef.current.slickNext()}
                >
                {">"}
                </button>
            </div>

            {/* <div className="flex space-x-4 mt-28 flex-col">
                <div className="flex items-center justify-center">
                </div>
            </div> */}

                <div className="lg:flex items-center justify-start flex-row ml-40 mt-10 w-full h-full">
                
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_2581)">
                        <path d="M28 18.1801L45.62 21.6801C47.04 21.9801 48 23.1801 48 24.6001V45.0001C48 46.6601 46.66 48.0001 45 48.0001H27C27.56 48.0001 28 47.5601 28 47.0001V46.0001H45C45.54 46.0001 46 45.5601 46 45.0001V24.6001C46 24.1401 45.68 23.7201 45.22 23.6201L28 20.2201V18.1801Z" fill="#4764C3"/>
                        <path d="M39 28C39.56 28 40 28.44 40 29C40 29.56 39.56 30 39 30H35C34.44 30 34 29.56 34 29C34 28.44 34.44 28 35 28H39Z" fill="#4764C3"/>
                        <path d="M39 34C39.56 34 40 34.44 40 35C40 35.56 39.56 36 39 36H35C34.44 36 34 35.56 34 35C34 34.44 34.44 34 35 34H39Z" fill="#4764C3"/>
                        <path d="M39 40C39.56 40 40 40.44 40 41C40 41.56 39.56 42 39 42H35C34.44 42 34 41.56 34 41C34 40.44 34.44 40 35 40H39Z" fill="#4764C3"/>
                        <path d="M28 47.0001C28 47.5601 27.56 48.0001 27 48.0001C26.44 48.0001 26 47.5601 26 47.0001V46.0001V19.0001C26 18.7001 26.14 18.4201 26.36 18.2201C26.6 18.0401 26.9 17.9601 27.2 18.0201L28 18.1801V20.2201V46.0001V47.0001Z" fill="#4764C3"/>
                        <path d="M26 46V47C26 47.56 26.44 48 27 48H19C19.56 48 20 47.56 20 47V46H26Z" fill="#4764C3"/>
                        <path d="M21 10C21.56 10 22 10.44 22 11C22 11.56 21.56 12 21 12H17C16.44 12 16 11.56 16 11C16 10.44 16.44 10 17 10H21Z" fill="#4764C3"/>
                        <path d="M22 17C22 17.56 21.56 18 21 18H17C16.44 18 16 17.56 16 17C16 16.44 16.44 16 17 16H21C21.56 16 22 16.44 22 17Z" fill="#4764C3"/>
                        <path d="M21 22C21.56 22 22 22.44 22 23C22 23.56 21.56 24 21 24H17C16.44 24 16 23.56 16 23C16 22.44 16.44 22 17 22H21Z" fill="#4764C3"/>
                        <path d="M21 28C21.56 28 22 28.44 22 29C22 29.56 21.56 30 21 30H17C16.44 30 16 29.56 16 29C16 28.44 16.44 28 17 28H21Z" fill="#4764C3"/>
                        <path d="M12 29C12 29.56 11.56 30 11 30H7C6.44 30 6 29.56 6 29C6 28.44 6.44 28 7 28H11C11.56 28 12 28.44 12 29Z" fill="#4764C3"/>
                        <path d="M11 10C11.56 10 12 10.44 12 11C12 11.56 11.56 12 11 12H7C6.44 12 6 11.56 6 11C6 10.44 6.44 10 7 10H11Z" fill="#4764C3"/>
                        <path d="M11 16C11.56 16 12 16.44 12 17C12 17.56 11.56 18 11 18H7C6.44 18 6 17.56 6 17C6 16.44 6.44 16 7 16H11Z" fill="#4764C3"/>
                        <path d="M11 22C11.56 22 12 22.44 12 23C12 23.56 11.56 24 11 24H7C6.44 24 6 23.56 6 23C6 22.44 6.44 22 7 22H11Z" fill="#4764C3"/>
                        <path d="M18 37C18 36.44 17.54 36 17 36H11C10.44 36 10 36.44 10 37V46H8.00003V37C8.00003 35.34 9.34003 34 11 34H17C18.66 34 20 35.34 20 37V46H18V37Z" fill="#4764C3"/>
                        <path d="M10 46H18H20V47C20 47.56 19.56 48 19 48H9.00003C8.44003 48 8.00003 47.56 8.00003 47V46H10Z" fill="#4764C3"/>
                        <path d="M3.5 0.400022L25.48 3.74002C26.94 3.98002 28 5.22002 28 6.70002V18.18L27.2 18.02C26.9 17.96 26.6 18.04 26.36 18.22C26.14 18.42 26 18.7 26 19V6.70002C26 6.20002 25.64 5.78002 25.16 5.70002L3.18 2.38002C3.12 2.36002 3.06 2.36002 3 2.36002C2.76 2.36002 2.54 2.44002 2.36 2.60002C2.12 2.80002 2 3.06002 2 3.36002V45C2 45.56 2.46 46 3 46H8V47C8 47.56 8.44 48 9 48H3C1.34 48 0 46.66 0 45V3.36002C0 2.48002 0.38 1.64002 1.06 1.08002C1.74 0.500022 2.62 0.260022 3.5 0.400022Z" fill="#4764C3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_2581">
                        <rect width="48" height="48" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        
                    <div className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7 px-12">a Flat</div>

                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5 10.45H3C2.78783 10.45 2.58434 10.5343 2.43431 10.6843C2.28429 10.8343 2.2 11.0378 2.2 11.25V43.5C2.2 43.7122 2.28429 43.9157 2.43431 44.0657C2.58434 44.2157 2.78783 44.3 3 44.3H37.5C37.7122 44.3 37.9157 44.2157 38.0657 44.0657C38.2157 43.9157 38.3 43.7122 38.3 43.5V11.25C38.3 11.0378 38.2157 10.8343 38.0657 10.6843C37.9157 10.5343 37.7122 10.45 37.5 10.45ZM7.55 12.05H10.45V19.45H7.55V12.05ZM3.8 12.05H5.95V20.25C5.95 20.4622 6.03429 20.6657 6.18431 20.8157C6.33434 20.9657 6.53783 21.05 6.75 21.05H11.25C11.4622 21.05 11.6657 20.9657 11.8157 20.8157C11.9657 20.6657 12.05 20.4622 12.05 20.25V12.05H14.2V42.7H3.8V12.05ZM36.7 42.7H15.8V12.05H36.7V42.7Z" fill="#4764C3" stroke="#4764C3" stroke-width="0.1"/>
                        <path d="M33.75 39.7H33.7V39.75V41.25V41.3H33.75H35.25H35.3V41.25V39.75V39.7H35.25H33.75Z" fill="#4764C3" stroke="#4764C3" stroke-width="0.1"/>
                        <path d="M30.75 39.7H30.7V39.75V41.25V41.3H30.75H32.25H32.3V41.25V39.75V39.7H32.25H30.75Z" fill="#4764C3" stroke="#4764C3" stroke-width="0.1"/>
                        <path d="M27.75 39.7H27.7V39.75V41.25V41.3H27.75H29.25H29.3V41.25V39.75V39.7H29.25H27.75Z" fill="#4764C3" stroke="#4764C3" stroke-width="0.1"/>
                        <path d="M22.5 19.55H30C30.61 19.55 31.195 19.3077 31.6263 18.8763C32.0577 18.445 32.3 17.86 32.3 17.25C32.3 16.64 32.0577 16.055 31.6263 15.6237C31.195 15.1923 30.61 14.95 30 14.95H22.5C21.89 14.95 21.305 15.1923 20.8737 15.6237C20.4423 16.055 20.2 16.64 20.2 17.25C20.2 17.86 20.4423 18.445 20.8737 18.8763C21.305 19.3077 21.89 19.55 22.5 19.55ZM22.5 16.55H30C30.1857 16.55 30.3637 16.6237 30.495 16.755C30.6263 16.8863 30.7 17.0643 30.7 17.25C30.7 17.4357 30.6263 17.6137 30.495 17.745C30.3637 17.8763 30.1857 17.95 30 17.95H22.5C22.3143 17.95 22.1363 17.8763 22.005 17.745C21.8737 17.6137 21.8 17.4357 21.8 17.25C21.8 17.0643 21.8737 16.8863 22.005 16.755C22.1363 16.6237 22.3143 16.55 22.5 16.55Z" fill="#4764C3" stroke="#4764C3" stroke-width="0.1"/>
                        <path d="M45.75 12.05H45.8V12V10.5V10.45H45.75H39.75H39.7V10.5V12V12.05H39.75H41.95V42.7H39.75H39.7V42.75V44.25V44.3H39.75H45.75H45.8V44.25V42.75V42.7H45.75H43.55V12.05H45.75Z" fill="#4764C3" stroke="#4764C3" stroke-width="0.1"/>
                        <path d="M36.7 3V5.2H15.8V3V2.95H15.75H14.25H14.2V3V5.2H3.8V3V2.95H3.75H2.25H2.2V3V9V9.05H2.25H3.75H3.8V9V6.8H14.2V9V9.05H14.25H15.75H15.8V9V6.8H36.7V9V9.05H36.75H38.25H38.3V9V3V2.95H38.25H36.75H36.7V3Z" fill="#4764C3" stroke="#4764C3" stroke-width="0.1"/>
                    </svg>
                    <div className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7 px-12"> 224m<span className="text-slate-900 text-sm font-bold font-['Merriweather'] leading-7">
                        <span className="text-xl">2</span>
                    </span>
                    </div>

                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5861 33.7012L35.7663 21.0397C36.9433 18.9068 37.5652 16.4849 37.5652 14.0348C37.5652 6.29635 31.4797 0 24 0C16.5204 0 10.4348 6.29635 10.4348 14.0348C10.4348 16.5141 11.063 18.9391 12.2504 21.0501L19.4129 33.7012C12.8244 34.6007 8.34784 37.3743 8.34784 40.6957C8.34784 44.8602 15.0772 48 24 48C32.9238 48 39.6522 44.8602 39.6522 40.6957C39.6522 37.3743 35.1757 34.5997 28.5861 33.7012ZM14.0682 20.0243C13.056 18.2275 12.5218 16.1562 12.5218 14.0348C12.5218 7.4473 17.6713 2.08696 24 2.08696C30.3287 2.08696 35.4783 7.4473 35.4783 14.0348C35.4783 16.1332 34.9461 18.2066 33.9444 20.0202L24 37.559L22.007 34.0466L14.0682 20.0243ZM24 45.913C16.0059 45.913 10.4348 43.1635 10.4348 40.6957C10.4348 38.713 14.1934 36.3423 20.5252 35.664L23.0922 40.1885C23.2779 40.5151 23.6244 40.7165 24 40.7165C24.3757 40.7165 24.7221 40.5151 24.9078 40.1885L27.4748 35.664C33.8056 36.3423 37.5652 38.713 37.5652 40.6957C37.5652 43.1635 31.9941 45.913 24 45.913Z" fill="#4764C3"/>
                        <path d="M31.3044 13.5652C31.3044 9.53739 28.0268 6.26086 24 6.26086C19.9722 6.26086 16.6957 9.53739 16.6957 13.5652C16.6957 17.593 19.9722 20.8696 24 20.8696C28.0268 20.8696 31.3044 17.593 31.3044 13.5652ZM18.7826 13.5652C18.7826 10.6883 21.1232 8.34782 24 8.34782C26.8769 8.34782 29.2174 10.6883 29.2174 13.5652C29.2174 16.4421 26.8769 18.7826 24 18.7826C21.1232 18.7826 18.7826 16.4421 18.7826 13.5652Z" fill="#4764C3"/>
                    </svg>
                    <div className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7 px-10">Barcelona I.</div>


                </div>

                <div className="w-[70%] h-24 bg-slate-100 rounded ml-28 mt-10 p-3">
                    <div className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">Mortgage since: </div>
                    <div className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">807.57 €/ month</div>
                </div>

                <div className="w-[70%] text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed ml-28 mt-5">
                    FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room apartment on Vincent Hložník Street in the Condominium 
                    Renaissance residential complex.<br/>Thanks to its unique location, the property has access to a large Japanese garden
                    with an area of 35 m2, which can be accessed directly from the bedroom. The front of the apartment is at the height of
                    the third floor, so the terrace is located just above the treetops, which gives the apartment a unique atmosphere.
                    Overall, the apartment has a direct view of the Danube River and the surrounding forests.<br/>The apartment offers 
                    extraordinary comfort, has a first-class interior from the leading architectural office Cakov Makara and equipment
                        from renowned world furniture manufacturers. The overall atmosphere of the apartment is completed.
                </div>


                <div className="w-[70%] ml-28">
                    <p className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Basic characteristics:<br/></p>
                    <p className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">
                        * number of rooms: 5<br/>
                        * 2nd floor of 5<br/>
                        * apartment area: 223.92 m2<br/>
                        * terrace area: 27.09 m2<br/>
                        * balcony area: 6.63 m2<br/>
                        * area of the Japanese garden: 35 m2<br/>
                    </p>
                    <p className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Layout solution:<br/></p>
                    <p className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">
                        Kitchen, living room, study, 4 bedrooms, 2 bathrooms, wardrobe, fireplace. Two garage parking spaces in the underground garage.<br/>
                        The apartment is divided into day and night zone. The living area consists of a large living room, which is connected to the kitchen and dining room. In this part of the apartment there is also a study, which is very subtly separated from the living area by an elegant glass wall and wooden beams. From the living area there is a smooth transition to the night wing, where there are two rooms, a wardrobe, a shared bathroom and a master bedroom with a separate bathroom.<br/>
                    </p>
                    <p className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Execution and furnishing of the apartment:<br/></p>
                    <p className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">
                        The apartment has intelligent control via a mobile application. Premium natural materials - wood, stone tiles, cast concrete - are found in many places in the living space.<br/>
                        The kitchen of the LEICHT brand with SIEMENS appliances has been made to measure, bathrooms and toilets are equipped with sanitary ware from the manufacturers VILLEROY BOCH and HANSGROHE. In the master bathroom you will find the design edition of the AXOR MASSAUD brand, the master bedroom is dominated by the RUF BETTEN bed. The living room is equipped with ROLF BENZ brand products.<br/>
                    </p>
                    <p className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Location:<br/></p>
                    <p className="text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">
                        The property is located above Devínská cesta, there is an excellent transport connection. The nearby housing estate provides complete civic amenities, including shops, cafes, restaurants, schools, kindergartens and many other benefits.<br/>
                    </p>
        
                </div>

                
        
            </div>

            <div className="w-80 h-full -ml-40">
                <div className="w-80 h-full bg-slate-100 rounded mt-10 p-4 mb-10">
                    <div className="w-80 h-12 text-slate-700 text-2xl font-bold font-['Merriweather'] leading-9">Contact us</div>
                    <div className="w-48 h-6 text-slate-700 text-base font-normal font-['Open Sans'] leading-relaxed">Full name</div>
                    <input
                        type="text"
                        placeholder="Your full name"
                        value={fullName}
                        onChange={handleFullNameChange}
                        className="w-[80%] border border-gray-300 px-1 py-1 justify-center rounded mb-8"
                    />

                    <div className="w-48 h-6 text-slate-700 text-base font-normal font-['Open Sans'] leading-relaxed">Phone number</div>
                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Your phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="w-[80%] border border-gray-300 px-1 py-1 justify-center rounded mb-8"
                    />

                    <div className="w-48 h-6 text-slate-700 text-base font-normal font-['Open Sans'] leading-relaxed justify-start">Your message</div>
                    <input
                        type="text"
                        value={fullName}
                        onChange={handleFullNameChange}
                        className="w-[80%] h-96 border border-gray-300 px-1 py-1 rounded mb-8"
                    />

                    <div className="w-72 h-12 relative">
                    <button className="w-64 absolute text-center border border-blue-900 text-blue-900 text-base font-bold font-['Helvetica'] leading-tight p-3 hover:text-blue-300 hover:border-blue-300 active:border-blue-300 transition-colors duration-200 ease-in-out">Send Message</button>
                    </div>
                </div>


                <div className="w-80 h-80 bg-slate-100 rounded pt-2">
                    <img className="w-36 h-32 rounded-full mt-8 mb-8 object-cover ml-[25%]" src="https://media.istockphoto.com/id/1425667477/photo/real-estate-black-real-estate-agent-or-property-manager-in-house-or-home-building-interior.jpg?s=612x612&w=0&k=20&c=12MMM-7HFWZyBrtKBkwG4RFlshZa9jQ2gYhAm8b0XwM=" />
                    <div className="w-80 text-center text-slate-900 text-xl font-bold font-['Merriweather'] leading-7">Haylie Donin</div>
                    <div className="w-80 text-center text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">+34 555 781 731<br/>haylie.donin@realestate.es</div>
                </div>


                <div className="w-80 h-96 bg-slate-100 rounded mt-12 p-6">
                    <div className="text-slate-900 text-xl font-bold font-['Merriweather'] leading-7 pb-6">Brief characteristics</div>
                    <div className="w-72">
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">City: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">Barcelona I.<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Street: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">Vincent ala Carne<br/>
                        </span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Garages: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">2 cars<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Type: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">5 rooms<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Number of rooms: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">5<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Usable area: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">224 m2<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Total area: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">307 m2<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Insulated object: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">Yes<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Balcony: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">Yes<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Terrace: </span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed">Yes<br/></span>
                        <span className="text-slate-900 text-base font-bold font-'Open Sans' leading-relaxed">Number of bathrooms:</span>
                        <span className="text-slate-900 text-base font-normal font-'Open Sans' leading-relaxed"> 1</span>
                    </div>
                </div>




            </div>
    

        </div>
    </div>





);
};

export default Details;




               