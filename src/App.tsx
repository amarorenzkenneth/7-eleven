/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Deals } from './components/sections/Deals';
import { AppDownload } from './components/sections/AppDownload';
import { Rewards } from './components/sections/Rewards';
import { Franchise } from './components/sections/Franchise';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { StoreLocator } from './components/sections/StoreLocator';
import { Contact } from './components/sections/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Smartphone } from 'lucide-react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#008061] selection:text-white">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 360]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-16 h-16 bg-[#008061] rounded-2xl flex items-center justify-center text-white font-black text-4xl shadow-2xl"
            >
              7
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Deals />
        <AppDownload />
        <StoreLocator />
        <Rewards />
        <Franchise />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating Mobile CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#008061] text-white px-8 py-4 rounded-full font-black text-lg shadow-2xl shadow-green-900/40 flex items-center gap-3 border-4 border-white"
        >
          <Smartphone className="w-6 h-6" />
          GET THE APP
        </motion.button>
      </motion.div>
    </div>
  );
}
