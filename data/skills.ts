import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: 'Code2',
    skills: [
      'Node.js',
      'NestJS',
      'Express.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'REST API Design',
      'Microservices',
      'Functional Programming',
      'Auth0 / Okta / RBAC',
      'Postman / Swagger',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure (AWS)',
    icon: 'Globe',
    skills: [
      'AWS Lambda',
      'ECS Fargate',
      'S3 & CloudFront',
      'SNS & Step Functions',
      'CloudWatch & OpenSearch',
      'ALB & ECR',
      'AWS Rekognition',
      'AWS Personalize',
    ],
  },
  {
    id: 'data',
    title: 'Databases & Caching',
    icon: 'Database',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'DynamoDB',
      'Redis',
      'OpenSearch',
      'Query Optimisation',
      'Performance Benchmarking',
    ],
  },
  {
    id: 'consulting',
    title: 'Architecture & Collaboration',
    icon: 'Briefcase',
    skills: [
      'API Contract Design',
      'System Architecture Review',
      'Stakeholder Communication',
      'Cross-functional Collaboration',
      'Technical Documentation',
      'Jira / Confluence',
    ],
  },
];
