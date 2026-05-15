import { DEALS } from '../../constants';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Clock, Tag, Plus } from 'lucide-react';
import { motion } from 'motion/react';

export const Deals = () => {
  return (
    <section id="deals" className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <Badge variant="secondary">Limited Time</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Fresh Deals <br /> 
              <span className="text-[#FF6B00]">Just for You.</span>
            </h2>
          </div>
          <Button variant="outline" className="w-fit">View All Promotions</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEALS.map((deal) => (
            <Card key={deal.id} className="p-0 overflow-hidden flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 backdrop-blur-md border-none shadow-sm">{deal.badge}</Badge>
                </div>
                {deal.expiry && (
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#E11B22] text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg">
                    <Clock className="w-3.5 h-3.5" />
                    {deal.expiry}
                  </div>
                )}
              </div>
              <div className="p-8 space-y-6 flex-1">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#FF6B00] transition-colors">{deal.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {deal.description}
                  </p>
                </div>
                <div className="pt-4 mt-auto border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#E11B22]">
                    <Tag className="w-5 h-5 fill-current" />
                    <span className="font-black text-lg">Claim Offer</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center cursor-pointer"
                  >
                    <Icons.Plus className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
