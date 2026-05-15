import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TESTIMONIALS } from '../../constants';
import { Star, MessageCircle } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <Badge>Community Love</Badge>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight">Voices of Our <span className="text-[#008061]">Family.</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">Hear from the millions of customers and thousands of business owners who make 7-Eleven more than just a store.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <Card key={testimonial.id} className="relative group p-10 flex flex-col justify-between">
              <div className="absolute top-6 right-6 text-gray-50 group-hover:text-[#008061]/10 transition-colors">
                <MessageCircle className="w-20 h-20 fill-current" />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex gap-1 text-[#FF6B00]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl italic font-medium text-gray-800 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-10 relative z-10">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#008061] rounded-full flex items-center justify-center border-2 border-white">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase font-black tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Auto-scrolling row simulation (visual) */}
        <div className="mt-20 pt-20 border-t border-gray-100 flex flex-nowrap items-center gap-12 overflow-hidden opacity-30 select-none pointer-events-none">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center gap-4 shrink-0 px-8">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="text-sm font-black whitespace-nowrap">USER_{i * 123} SCANNING REWARDS...</div>
                <div className="text-[#008061] font-black">+10 pts</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
