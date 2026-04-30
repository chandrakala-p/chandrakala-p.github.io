// ─── Domain Models ───────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  current?: boolean;
  companyUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  type: string;
  impact: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  company: string;
  tagline: string;
  bio: string;
  extendedBio: string;
  email: string;
  linkedin: string;
  github: string;
  blog?: string;
  location: string;
  stats: Stat[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// ─── UI Helpers ───────────────────────────────────────────────────────────────

export type Theme = 'light' | 'dark' | 'system';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

export type BadgeVariant = 'emerald' | 'slate' | 'neutral';
