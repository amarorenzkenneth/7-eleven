import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Send, Phone, MessageSquare, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge>Contact Us</Badge>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Let's <span className="text-[#008061]">Connect.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Have a question about a product, feedback on a store visit, or just want to say hi? We are all ears.
              </p>
            </div>

            <div className="space-y-8">
                {[
                    { icon: Phone, label: 'Customer Helpline', value: '1-800-711-HELP', color: 'text-green-600 bg-green-100' },
                    { icon: Mail, label: 'Email Support', value: 'hello@7eleven.com', color: 'text-orange-600 bg-orange-100' },
                    { icon: MessageSquare, label: 'Live Chat', value: 'Available in App', color: 'text-blue-600 bg-blue-100' },
                ].map((item, i) => (
                    <div key={i} className="flex gap-6 group cursor-pointer">
                        <div className={cn("w-14 h-14 rounded-3xl shrink-0 flex items-center justify-center transition-transform group-hover:scale-110", item.color)}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
                            <div className="text-xl font-black text-gray-900 group-hover:text-[#008061] transition-colors">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-10 border-t border-gray-100 space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect with us on Social</div>
                <div className="flex gap-4">
                    {['fb', 'tw', 'ig', 'yt'].map((plat) => (
                        <div key={plat} className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-gray-400 hover:bg-[#008061] hover:text-white transition-all cursor-pointer uppercase">
                            {plat}
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <Card className="p-10 md:p-16 h-full shadow-[0_40px_100px_rgba(0,0,0,0.05)] border-none">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 text-[#008061] rounded-full flex items-center justify-center">
                    <Send className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-gray-900">Message Sent!</h3>
                    <p className="text-gray-500">We've received your inquiry and will get back to you shortly.</p>
                  </div>
                  <Button onClick={() => setFormState('idle')} variant="outline">Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                       <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#008061] focus:bg-white transition-all outline-none" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                       <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#008061] focus:bg-white transition-all outline-none" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#008061] focus:bg-white transition-all outline-none appearance-none">
                        <option>General Inquiry</option>
                        <option>Customer Support</option>
                        <option>Franchise Interest</option>
                        <option>Careers</option>
                        <option>App Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                        required
                        rows={4} 
                        placeholder="How can we help you?" 
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#008061] focus:bg-white transition-all outline-none resize-none"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-2xl">
                     <div className="w-5 h-5 shrink-0 rounded border-2 border-gray-200 flex items-center justify-center cursor-pointer hover:border-[#008061]">
                        <div className="w-3 h-3 bg-[#008061] rounded-sm" />
                     </div>
                     <p className="text-xs text-gray-400">I agree to the privacy policy and terms of service.</p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gap-3"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </Card>

            {/* Corner decorator */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

import { cn } from '../../utils/cn';
