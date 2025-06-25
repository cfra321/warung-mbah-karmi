import React from 'react';
import { partners } from '../../store/parnerData.constants';

const OurPartners = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex justify-center items-center m-4 p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-105"
          >
            <img
  src={partner.logo}
  alt={partner.name}
  className="h-24 w-auto"
/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
