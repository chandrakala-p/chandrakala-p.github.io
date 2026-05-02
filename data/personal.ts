import type { PersonalInfo, NavLink } from '@/types';

export const personal: PersonalInfo = {
  name: 'Chandrakala P',
  initials: 'CP',
  title: 'Senior Backend Engineer',
  company: 'GlobalLogic',
  tagline: 'Scalable Systems. Consultative Clarity. Real Impact.',
  bio: 'Senior Backend Engineer with 4+ years building high-scale, production-ready systems across web platforms, enterprise SaaS, and mobile application backends — with hands-on exposure across the full stack from database to deployment.',
  extendedBio:
    'My work spans high-volume e-commerce, enterprise collaboration tools, AI-integrated microservices, and personalised content platforms for mobile — always shipping systems that perform under real production load. I\'ve contributed across the full stack: defining API contracts with frontend teams, designing database schemas, architecting cloud infrastructure on AWS, and building the backend services that tie it all together. That breadth is what lets me move fast, communicate clearly across teams, and deliver systems that hold up when it matters.',
  email: 'chandrakalapr11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chandrakalap/',
  github: 'https://github.com/chandrakala-p',
  blog: 'https://chandrakalap.hashnode.dev/',
  location: 'Bangalore, India',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'AWS Services', value: '10+' },
    { label: 'Systems Built', value: '3' },
    { label: 'Technologies', value: '20+' },
  ],
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
