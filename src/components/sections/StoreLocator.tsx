import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { MapPin, Navigation, Search, Filter, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const StoreLocator = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Search & Filters */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <Badge>Find Convenience</Badge>
              <h2 className="text-4xl font-black text-gray-900">Your Nearest <br />7-Eleven.</h2>
              <p className="text-gray-500 text-lg">We are closer than you think. Find locations with gas, fresh food, or 24/7 services.</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Enter zip code or city..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#008061] focus:bg-white transition-all outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {['Open Now', 'Fuel Station', 'Delivery', 'Fresh Pizza', 'Rewards'].map((filter) => (
                  <button key={filter} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 border border-gray-100 flex items-center gap-2 transition-colors">
                    {filter}
                  </button>
                ))}
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {[
                  { name: '7-Eleven Downtown', dist: '0.4 mi', open: true, address: '492 Market St, San Francisco' },
                  { name: '7-Eleven SoMa', dist: '0.9 mi', open: true, address: '827 Folsom St, San Francisco' },
                  { name: '7-Eleven Mission', dist: '1.5 mi', open: false, address: '1699 Valencia St, San Francisco' },
                ].map((store, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:border-[#008061]/30 hover:bg-[#008061]/5 transition-all cursor-pointer group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#008061] transition-colors">{store.name}</h4>
                        <p className="text-sm text-gray-500">{store.address}</p>
                      </div>
                      <div className="text-sm font-black text-gray-400">{store.dist}</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <div className={cn("w-2 h-2 rounded-full", store.open ? "bg-green-500" : "bg-red-500")}></div>
                         <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{store.open ? 'Open 24/7' : 'Opening Soon'}</span>
                       </div>
                       <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#008061] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="w-full gap-2">
               <Navigation className="w-4 h-4" /> Use Current Location
            </Button>
          </div>

          {/* Right Column: Map Placeholder */}
          <div className="lg:col-span-3 h-[600px] bg-gray-100 rounded-[3rem] relative overflow-hidden group shadow-inner">
             {/* Styled Map Background simulation */}
             <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover" />
             
             {/* Map Pins */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute top-1/3 left-1/2 p-3 bg-white rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-2 z-10"
             >
                <div className="w-8 h-8 bg-[#008061] rounded-lg flex items-center justify-center text-white font-bold text-sm">7</div>
                <div className="pr-2">
                    <div className="text-xs font-black">7-Eleven Downtown</div>
                    <div className="text-[10px] text-gray-400">Open Now</div>
                </div>
             </motion.div>

             <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <MapPin className="w-6 h-6 text-[#008061]" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900 tracking-tight">Viewing Store Route</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 uppercase tracking-widest font-bold">
                            <Clock className="w-3 h-3 text-[#008061]" /> 5 mins away
                        </div>
                    </div>
                </div>
                <Button size="sm" variant="outline">Start Route</Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import { cn } from '../../utils/cn';
