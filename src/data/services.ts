import { images, type ImageKey } from '@/data/images';

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  short: string;
  description: string;
  bullets: string[];
  image: ImageKey;
  icon: string;
  note?: string;
};

export const services: Service[] = [
  {
    slug: 'house-residential-cleaning',
    title: 'House & Residential Cleaning',
    eyebrow: 'For the places you live',
    short: 'Standard and deep cleaning tailored to your home and your routine.',
    description: 'A considered clean for the rooms you use every day. We work around the way your home actually feels and functions, with thoughtful attention to the surfaces that make the biggest difference.',
    bullets: ['Kitchens, bathrooms, living areas and bedrooms', 'Dusting, wiping, vacuuming and floor care', 'A clear plan for the details that matter most to you', 'One-time or recurring residential appointments'],
    image: 'kitchen',
    icon: 'house',
  },
  {
    slug: 'deep-cleaning-services',
    title: 'Deep Cleaning Services',
    eyebrow: 'For a fresh start',
    short: 'Detailed, thorough cleaning for homes needing a little extra care.',
    description: 'When a regular reset is not enough, deep cleaning reaches further into the overlooked edges and buildup. It is a practical way to bring a space back to feeling cared for.',
    bullets: ['Extra attention to buildup and high-touch areas', 'Detailed work around fixtures, trim and corners', 'Ideal for seasonal resets or a first appointment', 'Hard water buildup can be discussed in your quote'],
    image: 'bathroomDetail',
    icon: 'sparkle',
    note: 'Hard water buildup varies by surface and age. Tell us what you are seeing so we can talk through the best approach.',
  },
  {
    slug: 'move-in-move-out-cleaning',
    title: 'Move In / Move Out Cleaning',
    eyebrow: 'For the in-between moments',
    short: 'Specialty support to prepare surfaces, floors and rooms for new occupants.',
    description: 'Moving brings enough logistics on its own. We help make the handoff feel lighter with a focused clean for empty or nearly empty spaces.',
    bullets: ['Empty-room floors, surfaces and fixtures', 'Kitchen and bathroom detail', 'A clean slate before move-in or after move-out', 'Flexible support around your moving schedule'],
    image: 'moveOut',
    icon: 'key',
  },
  {
    slug: 'post-construction-cleaning',
    title: 'Post-Construction Cleaning',
    eyebrow: 'For the final reveal',
    short: 'Removal of dust and debris following repairs, remodeling or home improvements.',
    description: 'The work may be finished, but renovation dust has a way of settling everywhere. We help bring the finished space forward so it can be enjoyed, staged or handed over.',
    bullets: ['Dust and debris removal after improvements', 'Wipe-downs for reachable surfaces and fixtures', 'Floor and room reset after repair work', 'A practical clean-up plan for your space'],
    image: 'construction',
    icon: 'bubbles',
  },
  {
    slug: 'janitorial-office-cleaning',
    title: 'Janitorial & Office Cleaning',
    eyebrow: 'For spaces that keep moving',
    short: 'Scheduled maintenance and cleaning for offices and commercial properties.',
    description: 'A clean workplace supports the people in it. We provide thoughtful maintenance for offices and commercial properties, with a rhythm that can fit how your team works.',
    bullets: ['Work areas, shared spaces and entry points', 'Break rooms, restrooms and high-touch surfaces', 'Scheduled maintenance plans for ongoing care', 'A professional finish for employees and guests'],
    image: 'office',
    icon: 'building',
  },
];

export const getServiceBySlug = (slug?: string) => services.find((service) => service.slug === slug);
export const getServiceImage = (service: Service) => images[service.image];
