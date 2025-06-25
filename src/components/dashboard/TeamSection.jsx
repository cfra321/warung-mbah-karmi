import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';
import team1 from '../../assets/img/team1.jpg';
import team2 from '../../assets/img/team2.jpg';
// import team3 from '../../assets/img/team3.jpg';
import team4 from '../../assets/img/team4.jpg';

const teamMembers = [
  { name: 'alr. Mbah Karmi', role: 'Founder', image: team1 },
  { name: 'Siti Nursyamsiah', role: 'Owner', image: team2 },
  { name: 'Mama Hero', role: 'Chef', image: team3 },
  { name: 'Kukuh Wicaksono', role: 'Desainer', image: team4 },
];

const TeamSection = () => {
  return (
    <section className="relative py-20 bg-green-900 text-white text-center overflow-hidden">
      {/* Background blur pattern */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: "url('https://www.fodors.com/wp-content/uploads/2019/04/04_TraditionalfoodsinJava__Pecel_shutterstock_796820512.jpg')" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold mb-2">Team Member</h2>
        <p className="mb-12 text-gray-300">
         "Kenali sosok di balik cita rasa warisan Jawa. Tim kami adalah keluarga yang menjaga keaslian dan kehangatan Warung Mbah Karmi dari dapur hingga ke meja makan Anda."
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md group relative">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-700 hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-700 hover:text-white">
                    <FaTwitter />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-700 hover:text-white">
                    <FaYoutube />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-700 hover:text-white">
                    <FaPinterestP />
                  </button>
                </div>
              </div>
              <div className="py-4">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
