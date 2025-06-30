import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDashboard from '../components/dashboard/NavbarDashboard';
import Footer from '../components/dashboard/Footer';
import FoodCategorySection from '../components/dashboard/FoodCategorySection';
import CustomerReview from '../components/dashboard/CustomerReview';
import heroImage from '../assets/img/nasi-goreng-2.png';
import bgImage from '../assets/img/bg-nasigoreng.png';
import FoodMenu from '../components/dashboard/FoodMenu';
import TeamSection from '../components/dashboard/TeamSection';
import OurPartners from '../components/dashboard/OurPartner';
import WhatsAppButton from '../components/WhatsAppButton';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavbarDashboard />
      <WhatsAppButton />

      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-green-700 font-semibold mb-2 italic">
              Authentic & Tasty Food
            </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Enjoy Tasty Food with{' '}
            <span className="font-extrabold">
              <span className="text-green-800">W</span>arung{' '}
              <span className="text-green-800">M</span>bah{' '}
              <span className="text-green-800">K</span>armi
            </span>.
          </h1>


            <p className="text-gray-600 mb-6">
              Temukan kelezatan sejati dari resep turun-temurun di Warung Mbah Karmi. Sajian otentik yang menggugah selera, dimasak dengan penuh cinta dan rasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/menu"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
              >
                Show more
              </Link>
              <Link
                to="/orders"
                className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50"
              >
                Place an order
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center items-center">
            {/* Foreground Image */}
            <img
              src={heroImage}
              alt="Nasi Goreng"
              className="w-full max-w-md max-h-[700px] object-contain z-10 mx-auto"
            />
               {/* Background Image */}
            <img
              src={bgImage}
              alt="background shape"
              className="absolute top-0 right-5 w-[380px] h-[280px] md:w-[500px] md:h-[400px] z-0 object-contain"
            />
          </div>
       
        </div>
      </section>


        {/* About Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left: Food Images Grid */}
          <div className="grid grid-cols-2 gap-4 md:w-1/2">
            <img src="https://www.fodors.com/wp-content/uploads/2019/04/04_TraditionalfoodsinJava__Pecel_shutterstock_796820512.jpg" className="rounded-lg w-full h-auto object-cover" alt="Food 1" />
            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/VEGAN-RAMEN-998cd60.jpg?quality=90&resize=556,505" className="rounded-lg w-full h-auto object-cover" alt="Food 2" />
            <img src="https://ralahami.com/wp-content/uploads/2021/04/Avurudu-table-21-3-1024x681.jpg" className="col-span-2 rounded-lg w-full h-auto object-cover" alt="Food 3" />
          </div>

          {/* Right: Text Content */}
          <div className="md:w-1/2">
            <p className="text-green-700 font-semibold mb-2 italic">About us</p>
            <h2 className="text-3xl font-bold mb-4">Makanan tradisional Jawa, bagian penting dari  <span className="text-green-800"> keseimbangan rasa</span> dan  <span className="text-green-800">budaya</span>.</h2>
            <p className="text-gray-600 mb-6">
              Setiap sajian di Warung Mbah Karmi bukan hanya mengenyangkan, tapi juga membangkitkan cerita dan tradisi kuliner Jawa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
              >
                Show more
              </Link>
              <button className="flex items-center gap-2 border border-green-700 px-6 py-3 rounded-lg text-green-700 hover:bg-green-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Category Section */}
      <FoodCategorySection />
      
      <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">

               {/* right: Food Images Grid (Salad, Juice, etc) */}
            <div className="grid grid-cols-2 gap-4 md:w-1/2 relative">
              <img
                src="https://www.fodors.com/wp-content/uploads/2019/04/05_TraditionalfoodsinJava__GadoGado_shutterstock_1134726908.jpg"
                className="rounded-lg w-full h-auto object-cover z-10"
                alt="Food 1"
              />
              <img
                src="https://www.fodors.com/wp-content/uploads/2019/04/TraditionalfoodsinJava__HERO_shutterstock_1161085942.jpg"
                className="rounded-lg w-full h-auto object-cover z-10"
                alt="Food 2"
              />
              <img
                src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-green-spinach-leafs-vector-illustration-of-vegetables-on-white-background-png-image_4827702.png"
                className="absolute -top-15   left-24 w-32 md:w-48 z-0"
                alt="Bayam dekorasi"
              />
            </div>
            {/* left: Text Content */}
            <div className="md:w-1/2">
              <p className="text-green-700 font-semibold mb-2 italic">Why Choose Us</p>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why We Are the Best?</h2>
              <p className="text-gray-600 mb-6">
                Setiap sajian di <span className="text-green-700 font-semibold">Warung Mbah Karmi</span> bukan hanya mengenyangkan,
                tapi juga membangkitkan cerita dan tradisi kuliner khas Jawa Tengah dan sekitarnya.
              </p>

              {/* Icon Features */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <img src="https://cdn6.aptoide.com/imgs/d/c/a/dca673cd43f9247059f91fcdd54962ff_icon.png" alt="Fast Delivery" className="w-8 h-8 mr-3" />
                  <span className="font-semibold text-sm text-gray-800">Fast Delivery</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <img src="https://cdn-icons-png.flaticon.com/512/2020/2020773.png" alt="24/7 Services" className="w-8 h-8 mr-3" />
                  <span className="font-semibold text-sm text-gray-800">All Day Services</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <img src="https://cdn-icons-png.flaticon.com/512/4661/4661520.png" alt="Fresh Food" className="w-8 h-8 mr-3" />
                  <span className="font-semibold text-sm text-gray-800">Fresh Food</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <img src="https://img.freepik.com/premium-vector/indonesian-halal-logo-new-branding-2022-halal-logo-halal-food-certified-logo_1008660-1625.jpg" alt="Quality" className="w-8 h-8 mr-3" />
                  <span className="font-semibold text-sm text-gray-800">Quality Maintain</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      {/* Food Menu Section */}
      <FoodMenu />  

      {/* Team Section */}
      <TeamSection />

      {/* Customer Review Section */}
      <CustomerReview />

      {/* Our Partners Section */}
      <OurPartners />

      {/* Footer Section */}
      <Footer />
    </div>
  );  
};

export default Dashboard;
