import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Smartphone } from 'lucide-react';
import { Button } from '../ui/Button';
import { NAV_ITEMS } from '../../constants';
import { cn } from '../../utils/cn';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#008061] rounded-lg flex items-center justify-center font-bold text-white text-2xl shadow-lg">
            7
          </div>
          <span className="text-xl font-bold tracking-tighter text-gray-900 hidden sm:block">
            ELEVEN <span className="text-[#008061] font-black">PRO</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-[#008061] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden xl:flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            Find Store
          </Button>
          <Button size="sm">Get the App</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 mt-4 overflow-hidden shadow-2xl rounded-2xl"
          >
            <div className="flex flex-col p-4 gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <hr className="my-2 border-gray-100" />
              <Button className="w-full justify-center mt-2">Get the App</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
