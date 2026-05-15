import { Accordion } from '../ui/Accordion';
import { Badge } from '../ui/Badge';
import { FAQS } from '../../constants';
import { HelpCircle, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

export const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary">Common Questions</Badge>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight">Got Questions? <br />We Got <span className="text-[#008061]">Answers.</span></h2>
          <div className="flex items-center justify-center gap-6 pt-4">
             <div className="flex items-center gap-2 text-[#008061] font-bold">
                <HelpCircle className="w-5 h-5" /> 24/7 Live Support
             </div>
             <div className="flex items-center gap-2 text-[#FF6B00] font-bold border-l border-gray-200 pl-6">
                <ExternalLink className="w-5 h-5" /> Knowledge Base
             </div>
          </div>
        </div>

        <Accordion items={FAQS} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200" />

        <div className="mt-16 p-10 bg-gray-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 sm:px-12">
            <div className="space-y-2 text-center md:text-left">
                <h4 className="text-2xl font-black text-white">Can't find what you need?</h4>
                <p className="text-gray-400">Our customer happiness team is standing by to help you.</p>
            </div>
            <Button size="lg" className="whitespace-nowrap">Contact Support <ExternalLink className="w-5 h-5 ml-2" /></Button>
        </div>
      </div>
    </section>
  );
};
