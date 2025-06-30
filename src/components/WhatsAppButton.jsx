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
            className="fixed bottom-10 right-10 z-150 flex flex-col items-center"
        >
            <img
                src="https://img.icons8.com/color/512/whatsapp.png"
                alt="Chat via WhatsApp"
                className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            />
            <span className="mt-2 text-sm text-green-700 font-semibold">
                Chat via WhatsApp
            </span>
        </a>
    );
};

export default WhatsAppButton;
