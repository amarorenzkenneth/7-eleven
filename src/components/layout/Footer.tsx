import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#008061] rounded-lg flex items-center justify-center font-bold text-white text-2xl">
              7
            </div>
            <span className="text-xl font-bold tracking-tighter">7-ELEVEN</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Revolutionizing convenience since 1927. Everything you need, anytime, anywhere.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#008061] transition-colors"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Deals & Rewards', 'Store Locator', 'Fresh Food', 'Mobile App', 'Delivery Info'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold mb-6">Business</h4>
          <ul className="space-y-4">
            {['Franchising', 'Corporate Careers', 'Investor Relations', 'Sustainability', 'Media Center'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#008061]" />
              <span>123 Convenience Way, TX 75001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#008061]" />
              <span>1-800-711-HELP</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#008061]" />
              <span>support@7eleven.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <p>© 2026 7-Eleven Modern. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
