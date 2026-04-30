import type { ExpertiseArea } from '@/types';

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'backend',
    title: 'Backend Engineering at Scale',
    description:
      'Designing and shipping modular, fault-tolerant backend services in Node.js and NestJS — from high-volume e-commerce traffic to enterprise collaboration platforms — with a relentless focus on reliability and performance.',
    icon: 'Code2',
    color: 'emerald',
    highlights: [
      'NestJS & Node.js Microservices',
      'RESTful API Design & Contracts',
      'Auth & RBAC (CASL, Auth0, Okta)',
      'Multi-tenant System Architecture',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud-Native AWS Architecture',
    description:
      'Hands-on delivery across 10+ AWS services — building event-driven, auto-scaling, serverless systems that handle real production workloads without breaking a sweat.',
    icon: 'Globe',
    color: 'blue',
    highlights: [
      'Lambda, ECS Fargate, SNS',
      'S3, CloudFront, ALB',
      'CloudWatch, OpenSearch',
      'AI/ML: Rekognition & Comprehend',
    ],
  },
  {
    id: 'distributed',
    title: 'Distributed Systems & Performance',
    description:
      'Building inter-service communication layers with data integrity and fault tolerance in mind. Benchmarking systems for performance bottlenecks, failure points, and recovery — before they hit production.',
    icon: 'Layers',
    color: 'purple',
    highlights: [
      'Redis Caching Strategies',
      'Performance Benchmarking',
      'Async Processing (SNS, Queues)',
      'Fault Tolerance & Resilience',
    ],
  },
  {
    id: 'api-consulting',
    title: 'API Design & Technical Consulting',
    description:
      'I don\'t just write APIs — I collaborate with product, frontend, and business stakeholders to define contracts that make sense for every team. Clear documentation, agreed interfaces, and no surprises at integration time.',
    icon: 'Briefcase',
    color: 'orange',
    highlights: [
      'API Contract Negotiation',
      'Swagger / OpenAPI Documentation',
      'Frontend–Backend Alignment',
      'Integration Planning',
    ],
  },
  {
    id: 'stakeholder',
    title: 'Stakeholder & Cross-team Communication',
    description:
      'Translating complex backend architecture into language that product managers, clients, and leadership can act on — whether that\'s a system design review, a technical proposal, or a post-mortem.',
    icon: 'Users',
    color: 'teal',
    highlights: [
      'Technical Storytelling',
      'Architecture Documentation',
      'Agile Cross-functional Delivery',
      'Engineering–Product Bridging',
    ],
  },
  {
    id: 'testing',
    title: 'Quality Engineering & Reliability',
    description:
      'Shipping with confidence through comprehensive test strategies — unit, functional, regression, and security — combined with systematic benchmarking to catch failure modes before they reach users.',
    icon: 'Shield',
    color: 'cyan',
    highlights: [
      'Unit & Functional Testing',
      'Regression & Security Tests',
      'Performance Benchmarking',
      'Code Review Leadership',
    ],
  },
];
