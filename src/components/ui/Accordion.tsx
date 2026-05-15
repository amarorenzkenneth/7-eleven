import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  className?: string;
}

export const Accordion = ({ items, className }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-100">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
          >
            <span className="text-lg font-medium text-gray-900 group-hover:text-[#008061] transition-colors">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              className="text-[#008061]"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
