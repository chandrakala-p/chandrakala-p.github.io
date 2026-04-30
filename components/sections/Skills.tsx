'use client';

import { type ElementType } from 'react';
import {
  Briefcase,
  Code2,
  Globe,
  Wrench,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, ElementType> = {
  Briefcase,
  Code2,
  Globe,
  Wrench,
};

// Subtle card accent colours per category
const ACCENT_MAP: Record<string, string> = {
  presales: 'border-t-emerald-500',
  technical: 'border-t-blue-500',
  domain: 'border-t-purple-500',
  tools: 'border-t-orange-500',
};

const ICON_COLOR_MAP: Record<string, string> = {
  presales: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400',
  technical: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
  domain: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
  tools: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400',
};

const PILL_MAP: Record<string, string> = {
  presales:
    'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60',
  technical:
    'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60',
  domain:
    'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/60',
  tools:
    'bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/60',
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Skills"
            title={
              <>
                My{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Skill Set
                </span>
              </>
            }
            subtitle="A curated toolkit spanning pre-sales engineering, software development, domain knowledge, and the platforms I use every day."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = ICON_MAP[category.icon] ?? Code2;

            return (
              <AnimatedSection key={category.id} animation="fade-up" delay={index * 0.12}>
                <div
                  className={cn(
                    'h-full p-6 rounded-2xl',
                    'bg-white dark:bg-slate-950',
                    'border-t-4 border border-slate-200 dark:border-slate-800',
                    ACCENT_MAP[category.id] ?? 'border-t-emerald-500',
                    'hover:shadow-lg dark:hover:shadow-slate-950/50',
                    'transition-all duration-300'
                  )}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={cn(
                        'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                        ICON_COLOR_MAP[category.id]
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={cn(
                          'px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-default',
                          PILL_MAP[category.id]
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
