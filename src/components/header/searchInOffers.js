import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../store/properties-slice";
import { Buffer } from "buffer"; // Import the Buffer class

const SearchInOffers = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const filteredOffers =
    selectedLocation === ""
      ? properties
      : properties.filter(
          (property) => property.City === selectedLocation
        );


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
          </select>
        </div>

      </div>
      <div className="flex flex-wrap justify-center items-center md:flex-row gap-6 lg:mt-20 mt-12">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((property) => (
            <div className="max-w-[20rem]" key={property.PropertyID}>
              <Link to={`/details/${property.PropertyID}`}>
                <div className="lg:w-80 lg:h-auto w-64 h-80 md:h-96 bg-white rounded border border-slate-100 ">
                  <img
                    src={`http://localhost:4000/${property.Image}`}
                    className="w-80 h-48 md:h-64 object-contain transition duration-300 transform hover:scale-105"
                    alt="Offer"
                  />
                  <div className="flex flex-col justify-between p-2 md:p-4">
                    <div className="text-slate-900 text-lg md:text-xl font-bold font-[merriweather] leading-6 mb-4">
                      {property.PropertyName}
                    </div>
                    <div className="text-blue-900 text-base font-bold font-[Open-Sans]">
                      {property.Price}
                    </div>
                    <div className="text-slate-900 text-base font-normal font-[open-sans] flex">
                      <FaLocationDot className="flex justify-center items-center mt-1 mr-2" />
                      {property.City}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No properties available for the selected location.</p>
        )}
      </div>
    </div>
  );
};

export default SearchInOffers;
