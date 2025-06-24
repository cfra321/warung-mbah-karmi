import React from 'react';

const testimonials = [
  {
    name: 'Budi Santoso',
    comment: 'Makanannya enak banget! Serasa masakan nenek di kampung.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Siti Aminah',
    comment: 'Warung Mbah Karmi punya cita rasa khas Jawa yang ngangenin.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Agus Salim',
    comment: 'Pelayanan ramah, porsi pas, dan harga bersahabat!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

const CustomerReview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Apa Kata Mereka</h2>
        <p className="text-gray-600 mb-12">
          Beberapa ulasan dari pelanggan setia Warung Mbah Karmi.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-2">"{review.comment}"</p>
              <h4 className="text-green-700 font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
