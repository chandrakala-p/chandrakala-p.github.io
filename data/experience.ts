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
      'Designed and scaled modular NestJS backend services powering collaboration features: team management, meetings, events, and knowledge resources across multiple business units',
      'Built RESTful APIs for full event and meeting lifecycle management — creation, scheduling, RSVPs, and notifications — ensuring high availability and low-latency under concurrent load',
      'Implemented fine-grained CASL attribute-based access control, enforcing role- and context-aware permissions across users, groups, and admin workflows',
      'Engineered a multi-tenant user and group management system with hierarchical business structures, secure data isolation, and role-based access',
      'Developed a centralised admin portal backend for user provisioning, role assignment, and organisation-wide governance',
      'Collaborated with frontend and product teams to define API contracts, ensuring seamless integration and consistent user experience across platforms',
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
      'Designed and built backend architecture for E.l.f. Cosmetics\' global e-commerce platform using Node.js, AWS Lambda, and MongoDB to handle high-volume, high-concurrency traffic',
      'Implemented Redis caching layers that significantly reduced API response latency for frequently accessed product and catalogue data',
      'Configured ECS Fargate for auto-scaling distributed services and AWS SNS for asynchronous high-volume message processing, improving overall system resilience',
      'Automated image and text moderation pipelines using AWS Rekognition and Comprehend, improving content processing throughput and reliability',
      'Built modular microservices for Academy of Pop using Node.js and AWS, integrated AWS Personalize for dynamic personalised content recommendations',
      'Authored unit, functional, and regression test suites across all services; conducted systematic performance benchmarking to detect bottlenecks and failure points',
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
      'Contributed to a large-scale Node.js + MongoDB platform, optimising search algorithms and data retrieval strategies for high-concurrency workloads',
      'Designed secure inter-system communication layers ensuring reliability, data integrity, and fault tolerance across distributed services',
      'Implemented unit, functional, and security test suites; led cross-functional code reviews to uphold engineering standards',
      'Used Git, BitBucket, Docker, and Postman daily for version control, containerisation, and API validation across development and deployment workflows',
      'Awarded Best Performer of the Month for outstanding backend performance and technical contributions',
    ],
    technologies: ['Node.js', 'MongoDB', 'Express.js', 'Docker', 'Git', 'BitBucket', 'Postman', 'REST APIs'],
  },
];
