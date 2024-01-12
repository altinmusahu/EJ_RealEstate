import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import pic1 from '../../utils/pic1.png'; // Placeholder image
import pic2 from '../../utils/pic2.jpg';
import pic3 from '../../utils/pic3.avif';
import pic4 from '../../utils/pic4.avif';
import pic5 from '../../utils/pic5.jpeg';
import pic6 from '../../utils/pic6.webp';
import pic7 from '../../utils/pic7.jpg';
import pic8 from '../../utils/pic8.avif';

const SearchInOffers = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const offers = [
    {
      location: "Barcelona",
      image: pic1,
      title: "Premium penthouse in central Barcelona with panoramic views",
      price: "807.57 €/month",
    },
    {
      location: "Madrid",
      image: pic2,
      title: "Seaside retreat with breathtaking ocean view.",
      price: "690 000€",
    },
    {
      location: "Valencia",
      image: pic3,
      title: "Two-story residence featuring modern amenities.",
      price: "410 000€",
    },
    {
      location: "Sevilla",
      image: pic4,
      title: "Charming urban loft with panoramic city views and contemporary design.",
      price: "562 300€",
    },
    {
      location: "Granada",
      image: pic5,
      title: "Quaint 3-bedroom home with a spacious backyard retreat",
      price: "365 000€",
    },
    {
      location: "Bilbao",
      image: pic6,
      title: "Quaint countryside cottage, a perfect escape from the city.",
      price: "451 230€",
    },
    {
      location: "Zaragoza",
      image: pic7,
      title: "Elegant townhouse showcasing timeless architecture and luxurious finishes.",
      price: "445 000€",
    },
    {
      location: "Malaga",
      image: pic8,
      title: "Rustic wood villa nestled in nature's embrace, where tranquility meets timeless charm.",
      price: "555 222€",
    },
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const filteredOffers = selectedLocation
    ? offers.filter((offer) => offer.location === selectedLocation)
    : offers;

  return (
    <div className="w-full h-full">
      <div className="w-full h-16 text-center text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10 mx-auto mt-16">Search for an offer </div>
      <div className="w-full h-11 text-center text-slate-900 text-xl font-normal font-['Open Sans'] leading-9">Choose from the most advantageous offers</div>
        <div className="w-96 h-14 relative mx-auto mt-8">
          <div className="w-64 h-12 relative bg-white border-2 border-slate-900 mt-8 rounded-md mx-auto">
            <div className="left-[16px] top-[11px] absolute text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed">
              
            </div>
            <select
              className="w-full h-full p-2 text-slate-900 text-base font-normal font-['Open Sans'] leading-relaxed flex justify-center items-center"
              value={selectedLocation}
              onChange={(e) => handleLocationSelect(e.target.value)}
            >
              <div>Select a location</div>
              <option value="">All Locations</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Madrid">Madrid</option>
              <option value="Valencia">Valencia</option>
              <option value="Sevilla">Sevilla</option>
              <option value="Granada">Granada</option>
              <option value="Bilbao">Bilbao</option>
              <option value="Zaragoza">Zaragoza</option>
              <option value="Malaga">Malaga</option>
              {/* Add more locations as needed */}
            </select>
          </div>

        </div>
      

      <div className="flex flex-wrap justify-center items-center md:flex-row gap-6 lg:mt-20 mt-12">
        {filteredOffers.map((offer, index) => (
          <div className="max-w-[20rem]" key={index}>
          <Link to={`/details${index + 1}`} key={index}>
            <div className="lg:w-80 lg:h-auto w-64 h-80 md:h-96 bg-white rounded border border-slate-100 ">
              <img className="w-80 h-48 md:h-64 object-contain  overflow-hidden transition duration-300 transform hover:scale-105" src={offer.image} alt="Offer" />
              <div className="flex flex-col justify-between p-2 md:p-4">
                <div className="text-slate-900 text-lg md:text-xl font-bold font-[merriweather] leading-6 mb-4">
                  {offer.title}
                </div>
                <div className="text-blue-900 text-base font-bold font-[Open-Sans]">{offer.price}</div>
                <div className="text-slate-900 text-base font-normal font-[open-sans] flex">
                  <FaLocationDot className="flex justify-center items-center mt-1 mr-2" />
                  {offer.location}
                </div>
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default SearchInOffers;
