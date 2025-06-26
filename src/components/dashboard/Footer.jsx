import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

import food1 from '../../assets/img/food1.jpeg';
import food2 from '../../assets/img/food2.webp';
import food3 from '../../assets/img/food3.webp';
import food4 from '../../assets/img/food4.jpg';
import food5 from '../../assets/img/food5.jpg';
import food6 from '../../assets/img/food6.jpg';


const Footer = () => {

  const images = [food1, food2, food3, food4, food5, food6];
  return (
    <footer className="bg-[#f2f5f1] text-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-green-700">Warung Mbah Karmi</h3>
          <p className="mb-4">Langganan newsletter kami dan dapatkan diskon spesial!</p>
          <div className="flex items-center border rounded overflow-hidden w-full mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-grow outline-none"
            />
            <button className="bg-green-700 text-white p-2">
              <FiSend />
            </button>
          </div>
          <div className="flex space-x-3 text-green-700 text-lg">
            <FaPinterestP />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1" /> Jl. Kampung Babakan No.86 Sukatani Tapos Depok, Jawa Barat
            </li>
            <li className="flex items-center gap-2">
              <FiPhone /> +62 812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> info@mbahkarmi.com
            </li>
            <li className="flex items-center gap-2">
              <FiClock /> Senin - Sabtu / 10.00 - 20.00
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tautan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Kontak</a></li>
            <li><a href="#">Menu Kami</a></li>
            <li><a href="#">Tim</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Instagram Gallery */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Instagram Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, index) => (
              <div key={index} className="w-full h-20 bg-gray-300 rounded-md overflow-hidden">
                <img
                  src={img}
                  alt={`Food ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-800 text-white text-sm py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; 2025 Warung Mbah Karmi. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Partner</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
