import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Gift, Zap, ArrowRight, Star, CreditCard } from 'lucide-react';

export const Rewards = () => {
  return (
    <section id="rewards" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Dashboard Mockup */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Card className="p-0 rounded-[2.5rem] overflow-hidden border-none shadow-[0_40px_100px_rgba(0,128,97,0.1)]">
                <div className="bg-gradient-to-br from-[#008061] to-[#00664d] p-10 text-white space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center">
                            <Star className="w-7 h-7 fill-current text-white" />
                        </div>
                        <div>
                            <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Available Points</div>
                            <div className="text-4xl font-black">2,450 <span className="text-lg font-medium opacity-60 italic">pts</span></div>
                        </div>
                    </div>
                    <div className="w-20 h-20 bg-white p-2 rounded-2xl shadow-xl">
                        {/* Fake QR Code */}
                        <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-1">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-[#008061] rounded-sm" />
                                ))}
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-bold">
                        <span>Gold Status Progress</span>
                        <span>75%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '75%' }}
                            viewport={{ once: true }}
                            className="h-full bg-white shadow-[0_0_20px_white]" 
                        />
                    </div>
                    <p className="text-white/60 text-xs">Unlock 2x multiplier at 3,000 points</p>
                  </div>
                </div>

                <div className="p-10 space-y-8 bg-gray-50">
                    <h4 className="text-lg font-black text-gray-900 border-b border-gray-100 pb-4">Recent Activity</h4>
                    <div className="space-y-6">
                        {[
                            { icon: Gift, label: 'Free Slurpee Reedemed', date: 'Yesterday', pts: '-400' },
                            { icon: CreditCard, label: 'Store Purchase #8271', date: '2 days ago', pts: '+120' },
                            { icon: Zap, label: 'Night Owl Bonus', date: '3 days ago', pts: '+50' },
                        ].map((row, i) => (
                            <div key={i} className="flex items-center justify-between group/row">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 group-hover/row:text-[#008061] transition-colors">
                                        <row.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">{row.label}</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{row.date}</div>
                                    </div>
                                </div>
                                <div className={cn("text-sm font-black", row.pts.startsWith('+') ? "text-[#008061]" : "text-gray-900")}>
                                    {row.pts}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className="w-full justify-center">View Full Rewards Dashboard</Button>
                </div>
              </Card>

              {/* Floating Stat */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-10 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 z-20"
              >
                 <div className="text-[#FF6B00] text-3xl font-black tracking-tight">FREE!</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Next Reward Level</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary">7-Eleven Rewards</Badge>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Get Paid to <br />
                <span className="text-[#008061]">Snack.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Our rewards program isn't just points. It is a premium membership experience designed for people who value time, quality, and savings.
              </p>
            </div>

            <div className="space-y-6">
                {[
                    { title: '10x Multiplier', desc: 'Earn faster on fresh food items and special product launches.', color: 'bg-green-100 text-[#008061]' },
                    { title: 'Free Birthday Gifts', desc: 'Celebrate with any item under $5 on the house.', color: 'bg-orange-100 text-[#FF6B00]' },
                    { title: 'Exclusive Access', desc: 'Be the first to try new products and limited-time snacks.', color: 'bg-blue-100 text-blue-600' },
                ].map((perk, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group cursor-default"
                    >
                        <div className={cn("w-12 h-12 rounded-xl flex shrink-0 items-center justify-center font-black", perk.color)}>
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="font-black text-gray-900 group-hover:text-[#008061] transition-colors">{perk.title}</h4>
                            <p className="text-sm text-gray-500">{perk.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Button size="lg" className="gap-2 px-12 group">
              Join Rewards Program <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#008061]/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

import { cn } from '../../utils/cn';
