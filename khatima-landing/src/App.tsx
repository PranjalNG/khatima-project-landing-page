import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Leaf, Truck, Clock } from 'lucide-react';

const App: React.FC = () => {
  // Animation variants for Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-brand font-bold text-2xl">
          <Leaf className="w-8 h-8" />
          <span>Khatima Fresh</span>
        </div>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-brand font-medium">Login</button>
          <button className="bg-brand text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-dark transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section (Zomato Style) */}
      <main className="relative flex flex-col items-center justify-center pt-20 pb-32 px-4">
        {/* Background decorative blob */}
        <div className="absolute top-0 -z-10 w-full max-w-4xl opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <motion.div 
          className="text-center max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Fresh Sabji Mandi Veggies, <br/>
            <span className="text-brand">Delivered to your Door.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-10">
            Order before 8 PM for next morning delivery. Free delivery within 2km of Khatima Sabji Mandi.
          </motion.p>

          {/* Search Bar Container */}
          <motion.div variants={fadeUp} className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto border border-gray-100">
            <div className="flex items-center gap-2 px-4 py-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="text-brand w-5 h-5" />
              <input 
                type="text" 
                placeholder="Khatima, UK" 
                className="outline-none w-full text-gray-700 bg-transparent"
                defaultValue="Khatima"
                disabled
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-3 w-full">
              <Search className="text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for potato, onion, tomato..." 
                className="outline-none w-full text-gray-700 bg-transparent"
              />
            </div>
            <button className="bg-brand text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-colors whitespace-nowrap">
              Find Veggies
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 text-brand">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mandi Fresh</h3>
              <p className="text-gray-600">Handpicked directly from Khatima Sabji Mandi every morning to ensure maximum freshness.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 text-brand">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free 2km Delivery</h3>
              <p className="text-gray-600">Enjoy absolutely free delivery if you are within a 2km radius of the Mandi. Small fee for outer areas.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 text-brand">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Daily Updates</h3>
              <p className="text-gray-600">Our stock and prices are updated daily based on real Mandi rates so you always get the fair price.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default App;