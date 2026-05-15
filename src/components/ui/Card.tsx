import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { motion, HTMLMotionProps } from 'motion/react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true, ...props }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={cn(
        'bg-white rounded-3xl p-6 shadow-xl shadow-gray-200 border border-gray-100 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
