import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React, { useRef } from 'react';

const FoodCategorySection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const foodCategories = [
    {
      title: 'Sambal Ijo',
      items: 10,
      img: 'https://whatsnewindonesia.com/sites/default/files/inline-images/Sambal-Ijo.jpg',
    },
    {
      title: 'Pepes Ikan Kembung',
      items: 23,
      img: 'https://www.cookmeindonesian.com/wp-content/uploads/2020/07/pepes-ikan-kembung2.jpg',
    },
    {
      title: 'Rawon Malang',
      items: 20,
      img: 'https://mtcmedia.co.id/wp-content/uploads/2024/08/ra_Artboard_16.jpg',
    },
    {
      title: 'Soto Madiun',
      items: 26,
      img: 'https://asset.kompas.com/crops/GNRtFQv9epqwwSRmUev9oP49mGE=/44x0:944x600/750x500/data/photo/2019/12/20/5dfc85343a63e.jpg',
    },
    {
      title: 'Ayam Penyet',
      items: 19,
      img: 'https://www.cookmeindonesian.com/wp-content/uploads/2021/09/ayam-penyet-fin3.jpg',
    },
     {
      title: 'Botok Tahu Tempe',
      items: 19,
      img: 'https://asset.kompas.com/crops/bfsE42zY5P6rfGfOhI54JBWcoJo=/0x533:667x978/1200x800/data/photo/2023/08/25/64e7f615069c8.jpeg',
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-2 mt-5">Food Category</h2>
        <p className="text-gray-600 mb-10">
          Berbagai macam kategori makanan yang bisa kamu nikmati
        </p>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-md z-10"
            onClick={() => scroll('left')}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-md z-10"
            onClick={() => scroll('right')}
          >
            <FaChevronRight />
          </button>

          {/* Scrollable content */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-10"
          >
            {foodCategories.map((food, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-white rounded-xl shadow p-4 flex-shrink-0"
              >
                <img
                  src={food.img}
                  className="rounded-lg mb-4 w-full h-[180px] object-cover"
                  alt={food.title}
                />
                <h3 className="font-semibold">{food.title}</h3>
                <p className="text-gray-500 text-sm">{food.items} item</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategorySection;
