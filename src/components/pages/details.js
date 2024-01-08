import React from "react";
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

  const descriptions = [
    "Living room with a beautiful view.",
    "Modern kitchen with ample space.",
    "Cozy bedroom with stylish decor.",
    // Add more descriptions as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex-col w-full h-full bg-white pb-12 md:pb-24">
      <h1 className="text-slate-900 text-5xl font-bold font-['Merriweather'] leading-10 mb-4 text-center">Premium penthouse in central Barcelona with panoramic views</h1>
      <div className="w-[40%] mt-8 ml-28">
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-md">
              <img src={url} alt={`Photo ${index + 1}`} className="w-full h-80 object-cover mx-auto" />
              <div className="p-4">
                <p className="text-gray-700">{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex space-x-4 mt-28 flex-col">
        <div className="flex items-center justify-center mb-28">
        </div>
      </div>
    </div>
  );
};

export default Details;
