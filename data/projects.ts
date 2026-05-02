import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'elf-cosmetics',
    title: 'E.l.f. Cosmetics — Global E-commerce Platform',
    description:
      'Architected and built the backend for a global e-commerce platform serving millions of concurrent users. Designed scalable API layers, implemented Redis caching to slash latency, and integrated AI-powered content moderation using AWS Rekognition and Comprehend — enabling the business to scale confidently without operational risk.',
    type: 'Enterprise Platform',
    techStack: ['Node.js', 'AWS Lambda', 'MongoDB', 'Redis', 'ECS Fargate', 'AWS SNS', 'AWS Rekognition'],
    impact: 'Reduced API latency for high-traffic routes; auto-scaling handled peak commerce traffic without downtime',
    featured: true,
  },
  {
    id: 'globallogic-collab',
    title: 'Enterprise Collaboration Platform — GlobalLogic',
    description:
      'Led backend design for an enterprise-grade collaboration suite: team management, meetings, event lifecycle, and knowledge resources across multiple business units. Defined API contracts with frontend teams, implemented CASL attribute-based access control, and built a multi-tenant system with secure data isolation — all collaboratively shaped through stakeholder workshops and product alignment sessions.',
    type: 'Enterprise SaaS',
    techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'CASL', 'REST APIs', 'Docker', 'AWS'],
    impact: 'Delivered a production multi-tenant platform covering auth, events, and admin governance for enterprise clients',
    featured: true,
  },
  {
    id: 'academy-of-pop',
    title: 'Academy of Pop — Personalised Content Platform',
    description:
      'Built modular microservices for a personalised content and learning platform, integrating AWS Personalize to deliver dynamic content recommendations tailored to each user. Designed for modularity so individual services could be independently scaled, deployed, and replaced — a pattern I now advocate in systems consulting.',
    type: 'Microservices',
    techStack: ['Node.js', 'AWS Lambda', 'AWS Personalize', 'DynamoDB', 'MongoDB', 'Docker', 'S3'],
    impact: 'Enabled personalised content delivery at scale with independently deployable service modules',
    featured: false,
  },
  {
    id: 'fullstack-ecommerce',
    title: 'Full-Stack E-commerce App (Personal Project)',
    description:
      'End-to-end MERN stack commerce application with admin dashboards, dynamic product classification, and dual database support (MongoDB + PostgreSQL). Shipped with full test coverage — unit, functional, and regression — and documented all API endpoints via Postman.',
    type: 'Personal Project',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Postman'],
    impact: 'Full test coverage with unit, functional, and regression suites; clean API documentation',
    featured: false,
  },
];
