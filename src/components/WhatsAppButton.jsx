import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '6282297334277'; 
  const message = 'Halo, saya ingin bertanya lebih lanjut.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-2 right-2 
        md:bottom-5 md:right-6
        bottom-2 right-2 
        md:m-5 m-6
        z-150 
        flex flex-col items-center
      "
    >
      <img
        src="https://img.icons8.com/color/512/whatsapp.png"
        alt="Chat via WhatsApp"
        className="
          w-10 h-10
          md:w-16 md:h-16
          w-10 h-10 
          rounded-full shadow-lg 
          hover:scale-110 
          transition-transform duration-200
        "
      />
      <span className="mt-2 text-sm md:text-sm text-xs text-green-700 font-semibold">
        Chat via WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
