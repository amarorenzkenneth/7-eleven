import { SERVICES } from '../../constants';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export const Features = () => {
  return (
    <section id="delivery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 px-4">
          <Badge>Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Designed for Your <br />
            <span className="text-[#008061]">Everyday Modern Life.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From essential services to gourmet coffee, we bring the best of modern physical and digital retail to your neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as any)[service.icon];
            return (
              <Card key={service.id} className="group cursor-pointer">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#008061] group-hover:text-white">
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-sm font-bold text-[#008061] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <Icons.ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
