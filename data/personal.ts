import type { PersonalInfo, NavLink } from '@/types';

export const personal: PersonalInfo = {
  name: 'Chandrakala P',
  initials: 'CP',
  title: 'Senior Backend Engineer',
  company: 'GlobalLogic',
  tagline: 'Scalable Systems. Consultative Clarity. Real Impact.',
  bio: 'Senior Backend Engineer with 4+ years building distributed, cloud-native systems at scale — now channelling deep technical expertise into client-facing, solutions-oriented roles. I translate complex architectures into clear business narratives.',
  extendedBio:
    'My journey spans high-volume e-commerce platforms, enterprise collaboration tools, and AI-integrated microservices — always with an eye on not just how systems are built, but why they matter to the business. I\'ve collaborated closely with product managers, frontend engineers, and stakeholders to define API contracts, drive architectural decisions, and ship systems that perform at scale. That cross-functional mindset is what draws me towards Solutions Engineering — where technical depth and consultative communication create the most value.',
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
