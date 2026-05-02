import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'globallogic',
    company: 'GlobalLogic India Pvt Ltd',
    role: 'Senior Software Engineer',
    period: 'Sept 2025 – Present',
    location: 'Bangalore, India',
    current: true,
    companyUrl: 'https://www.globallogic.com',
    description:
      'Designing and scaling modular backend services for enterprise-grade collaboration platforms serving multiple business units — driving API contract definitions and cross-functional alignment with product, frontend, and infrastructure teams.',
    achievements: [
      'Built modular NestJS backend services for team management, meetings, events, and knowledge resources across multiple business units',
      'Designed RESTful APIs for full event and meeting lifecycle — scheduling, RSVPs, and notifications — with high availability under concurrent load',
      'Implemented CASL attribute-based access control for role- and context-aware permissions across users, groups, and admin workflows',
      'Engineered a multi-tenant user/group management system with hierarchical business structures and secure data isolation',
      'Drove API contract definitions with frontend and product teams, ensuring seamless integration and consistent UX across platforms',
    ],
    technologies: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'CASL', 'REST APIs', 'Docker', 'AWS'],
  },
  {
    id: 'ajmera',
    company: 'Ajmera Infotech',
    role: 'Software Development Engineer II',
    period: 'Sept 2023 – Aug 2025',
    location: 'Bangalore, India',
    description:
      'Led backend engineering for two distinct product verticals: a global e-commerce platform for E.l.f. Cosmetics and a personalised content platform for Academy of Pop — both on AWS, both at high concurrency.',
    achievements: [
      'Architected the backend for E.l.f. Cosmetics\' global e-commerce platform on Node.js, AWS Lambda, and MongoDB — built to handle peak commerce traffic at scale',
      'Implemented Redis caching for high-traffic product and catalogue routes, significantly reducing API response latency',
      'Configured ECS Fargate auto-scaling and AWS SNS async messaging, improving system resilience under concurrent load',
      'Automated image and text moderation pipelines with AWS Rekognition and Comprehend, removing a manual bottleneck in content processing',
      'Built AWS Personalize-powered microservices for Academy of Pop, delivering dynamic content recommendations per user at scale',
    ],
    technologies: [
      'Node.js', 'AWS Lambda', 'MongoDB', 'Redis', 'ECS Fargate', 'AWS SNS',
      'AWS Rekognition', 'AWS Comprehend', 'AWS Personalize', 'DynamoDB', 'Docker',
    ],
  },
  {
    id: 'hcl',
    company: 'HCL Technologies',
    role: 'Software Engineer',
    period: 'Aug 2021 – Sept 2023',
    location: 'Bangalore, India',
    description:
      'Contributed to a large-scale server-side platform with high-concurrency workloads, focusing on search optimisation, secure inter-system communication, and cross-functional code quality.',
    achievements: [
      'Optimised search algorithms and data retrieval on a high-concurrency Node.js + MongoDB platform, improving query performance at scale',
      'Designed secure inter-system communication layers with fault tolerance and data integrity across distributed services',
      'Implemented unit, functional, and security test suites; led code reviews to maintain engineering standards across the team',
      'Awarded Best Performer of the Month for backend performance and technical contributions',
    ],
    technologies: ['Node.js', 'MongoDB', 'Express.js', 'Docker', 'Git', 'BitBucket', 'Postman', 'REST APIs'],
  },
];
