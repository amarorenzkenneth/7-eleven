import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { TrendingUp, Award, BarChart3, Globe2, ArrowRight, ShieldCheck } from 'lucide-react';

export const Franchise = () => {
  return (
    <section id="franchise" className="py-24 px-6 bg-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <Badge className="bg-white/10 text-white border-white/20">Franchise Opportunities</Badge>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Grow Your Future <br />
            <span className="text-[#FF6B00]">with 7-Eleven.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join the world leader in convenience retail. With 70,000+ stores worldwide, our franchise model is built for sustainable growth and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: TrendingUp, title: '9.8% Annual Growth', desc: 'Our franchisees see consistent year-over-year revenue growth across multiple markets.', value: 'ROI Focused' },
            { icon: Award, title: '#1 Convenience Brand', desc: 'Unmatched brand recognition and trust built over nearly a century of excellence.', value: 'Globally Trusted' },
            { icon: Globe2, title: '70,000+ Locations', desc: 'Leverage our massive global supply chain and logistics expertise from day one.', value: 'Scale Ready' },
          ].map((stat, i) => (
            <Card key={i} className="bg-white/5 border-white/10 p-10 hover:bg-white/10 transition-colors group">
              <div className="space-y-6 text-white">
                <div className="w-16 h-16 bg-[#FF6B00]/20 rounded-2xl flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform">
                  <stat.icon className="w-9 h-9" />
                </div>
                <div className="space-y-3">
                   <div className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">{stat.value}</div>
                   <h3 className="text-2xl font-black">{stat.title}</h3>
                   <p className="text-gray-400 leading-relaxed text-sm">{stat.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                   <Button variant="ghost" className="p-0 h-auto text-white hover:text-[#FF6B00] hover:bg-transparent flex items-center gap-2 group/btn">
                     Analysis Report <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6B00]/5 rounded-l-full blur-3xl pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-gray-900">Start Your Journey Today.</h3>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    Speak with our dedicated franchise expansion team to understand investment requirements, layout options, and market availability.
                  </p>
                </div>

                <div className="space-y-4">
                    {[
                        { label: 'Comprehensive Training', icon: ShieldCheck },
                        { label: 'Site Selection Assistance', icon: ShieldCheck },
                        { label: 'Marketing & Ad Support', icon: ShieldCheck },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 font-bold text-gray-800">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-[#008061]">
                                <item.icon className="w-4 h-4" />
                            </div>
                            {item.label}
                        </div>
                    ))}
                </div>

                <Button variant="secondary" size="lg" className="px-12">Submit Inquiry Form</Button>
            </div>

            <div className="relative">
                <Card className="shadow-none border-gray-100 p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Market Interest</div>
                        <div className="flex items-center gap-2 text-[#008061] font-black">
                            <BarChart3 className="w-5 h-5" />
                            High
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { region: 'North America', status: '75%', color: 'bg-[#008061]' },
                            { region: 'East Asia', status: '92%', color: 'bg-[#FF6B00]' },
                            { region: 'Southeast Asia', status: '64%', color: 'bg-[#008061]' },
                        ].map((reg, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>{reg.region}</span>
                                    <span>{reg.status}</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: reg.status }}
                                        viewport={{ once: true }}
                                        className={cn("h-full", reg.color)} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#008061]/5 rounded-2xl p-4 text-center">
                        <p className="text-[10px] uppercase font-bold text-[#008061] tracking-widest">Projection for 2026</p>
                        <p className="text-sm font-black text-gray-900 mt-1">+15% Global Footprint Expansion</p>
                    </div>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
};

import { cn } from '../../utils/cn';
