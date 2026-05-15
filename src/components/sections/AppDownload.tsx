import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Smartphone, Download, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AppDownload = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gray-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_30%_50%,#008061_0%,transparent_50%)] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual Mockups */}
        <div className="relative flex justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-[300px] h-[620px] bg-black rounded-[3.5rem] border-[10px] border-gray-800 shadow-[0_0_80px_rgba(0,128,97,0.3)] overflow-hidden relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20" />
               <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                alt="App Dashboard"
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex flex-col justify-end p-8 space-y-6">
                 <div className="w-full h-20 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#008061]" />
                        <div className="flex-1 space-y-2">
                           <div className="w-2/3 h-2.5 bg-white/30 rounded-full" />
                           <div className="w-1/2 h-2.5 bg-white/20 rounded-full" />
                        </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Secondary phone */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              whileInView={{ opacity: 1, x: 140, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-20 -z-10"
            >
              <div className="w-[280px] h-[580px] bg-gray-800 rounded-[3rem] border-[8px] border-gray-700 shadow-2xl opacity-40 blur-[2px]" />
            </motion.div>
          </motion.div>

          {/* Floating UI */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 left-1/4 p-6 bg-white rounded-3xl shadow-2xl flex items-center gap-4 border border-gray-100 hidden sm:flex"
          >
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-[#008061]">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="text-xl font-black text-gray-900">4.9/5</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <Badge className="bg-[#008061]/20 text-[#008061] border border-[#008061]/30">The 7-Eleven App</Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Convenience at Your <br />
              <span className="text-[#008061]">Fingertips.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Join over 10 million users and unlock exclusive deals, earn points on every purchase, and enjoy lightning-fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
            {[
              "Real-time order tracking",
              "Exclusive mobile-only deals",
              "Digital wallet & fast checkout",
              "Earn points on every dollar",
              "In-app store locator",
              "Personalized food suggestions"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#008061]" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-3">
              <Download className="w-5 h-5" />
              App Store
            </Button>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-3">
              <Smartphone className="w-5 h-5" />
              Google Play
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center gap-12">
             <div className="space-y-1">
                <div className="text-3xl font-black text-white">10M+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Downloads</div>
             </div>
             <div className="space-y-1">
                <div className="text-3xl font-black text-white">4.9</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">App Rating</div>
             </div>
             <div className="space-y-1">
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Support</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
