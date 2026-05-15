import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Smartphone, MapPin, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#008061]/5">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#008061]/10 to-transparent pointer-events-none" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#008061]" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Available 24/7 in 100+ Countries</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight"
          >
            Everything You Need. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008061] to-[#FF6B00]">Anytime.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            Experience the future of convenience. From fresh food delivery to instant rewards, your neighborhood 7-Eleven is now in your pocket.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2 group">
              Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <MapPin className="w-5 h-5" /> Find a Store
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
          >
            {[
              { icon: Zap, label: 'Fast Delivery', value: '30 min' },
              { icon: Users, label: 'Customers', value: '10M+' },
              { icon: ShieldCheck, label: 'Service', value: '24/7' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-gray-400">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
                <div className="text-xl font-black text-gray-900">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Phone Mockup Placeholder */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20" />
              <img 
                src="https://images.unsplash.com/photo-1512428559083-a40ce9033afb?q=80&w=800&auto=format&fit=crop" 
                alt="App Mockup"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex flex-col justify-end p-6 space-y-4">
                <div className="w-full h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
                <div className="w-2/3 h-4 bg-[#008061] rounded-full" />
                <div className="w-full h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-[#FF6B00]">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Points Earned</div>
                <div className="text-[#FF6B00] font-black">+250 pts</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-16 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 z-20 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-[#008061]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-sm font-black">Scanning...</div>
              </div>
              <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-full bg-[#008061]" 
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#008061]/5 rounded-full blur-3xl pointer-events-none -z-10" />
        </div>
      </div>
    </section>
  );
};
