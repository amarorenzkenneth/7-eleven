import { NavItem, Service, Deal, Testimonial, FAQItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Deals', href: '#deals' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Food Delivery',
    description: 'Get your favorites delivered to your door in as little as 30 minutes. Fresh pizza, snacks, and drinks.',
    icon: 'Truck',
  },
  {
    id: '2',
    title: 'Rewards Program',
    description: 'Earn points on every purchase and redeem them for free snacks, drinks, and exclusive deals.',
    icon: 'Gift',
  },
  {
    id: '3',
    title: 'Bill Payments',
    description: 'Pay your utility bills, top up your phone, and handle other financial services conveniently in-store.',
    icon: 'CreditCard',
  },
  {
    id: '4',
    title: 'Mobile Wallet',
    description: 'Seamlessly pay for your purchases using the 7-Eleven app. Fast, secure, and touch-free.',
    icon: 'Wallet',
  },
  {
    id: '5',
    title: '24/7 Convenience',
    description: 'We never close. Whether it is 2 PM or 2 AM, your neighborhood 7-Eleven is always open.',
    icon: 'Clock',
  },
  {
    id: '6',
    title: 'Fresh Food',
    description: 'From freshly brewed coffee to hand-crafted sandwiches and salads, we provide quality on the go.',
    icon: 'Coffee',
  },
];

export const DEALS: Deal[] = [
  {
    id: '1',
    title: 'Any Size Coffee $1',
    description: 'Start your morning right with any size hot or iced coffee for just one dollar.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    badge: 'Morning Special',
    expiry: 'Ends in 2 days',
  },
  {
    id: '2',
    title: '2 Slices of Pizza for $3',
    description: 'Grab a quick lunch with our famous warm pizza slices. Multiple toppings available.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    badge: 'Lunch Special',
  },
  {
    id: '3',
    title: 'BOGO Slurpee',
    description: 'Buy one Slurpee of any size and get the second one absolutely free.',
    image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=800&auto=format&fit=crop',
    badge: 'Limited Time',
    expiry: 'Today Only',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Loyal Customer',
    content: 'The rewards program is actually worth it! I get a free coffee almost every week and the delivery is lightning fast.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Franchise Owner',
    content: 'Investing in a 7-Eleven franchise was the best career move I ever made. The support from corporate is unmatched.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Night Shift Worker',
    content: 'As someone who works nights, 7-Eleven is a lifesaver. The staff is always friendly and the food is always fresh.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How do I earn 7-Eleven Rewards points?',
    answer: 'Simply scan your app at checkout or enter your phone number. You earn 10 points for every $1 spent on qualifying items.',
  },
  {
    id: '2',
    question: 'Is delivery available in my area?',
    answer: 'We cover most metropolitan areas. Check the "Delivery" section in our app to see if your local store delivers to your address.',
  },
  {
    id: '3',
    question: 'How can I apply for a franchise?',
    answer: 'Visit our Franchise section and fill out the inquiry form. One of our specialists will reach out to you within 48 hours.',
  },
  {
    id: '4',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, Apple Pay, Google Pay, and our own 7-Eleven Wallet.',
  },
];
