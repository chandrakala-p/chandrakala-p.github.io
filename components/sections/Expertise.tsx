'use client';

import { type ElementType } from 'react';
import {
  Briefcase,
  Shield,
  Code2,
  Layers,
  Users,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { expertiseAreas } from '@/data/expertise';
import { cn } from '@/lib/utils';

// Icon registry — keeps the data layer free of React imports
const ICON_MAP: Record<string, ElementType> = {
  Briefcase,
  Shield,
  Code2,
  Layers,
  Users,
  TrendingUp,
};

const COLOR_MAP: Record<string, string> = {
  emerald: 'from-emerald-500 to-emerald-600 shadow-emerald-500/30',
  blue: 'from-blue-500 to-blue-600 shadow-blue-500/30',
  purple: 'from-purple-500 to-purple-600 shadow-purple-500/30',
  orange: 'from-orange-500 to-orange-600 shadow-orange-500/30',
  teal: 'from-teal-500 to-teal-600 shadow-teal-500/30',
  cyan: 'from-cyan-500 to-cyan-600 shadow-cyan-500/30',
};

const BORDER_MAP: Record<string, string> = {
  emerald: 'hover:border-emerald-300 dark:hover:border-emerald-800',
  blue: 'hover:border-blue-300 dark:hover:border-blue-800',
  purple: 'hover:border-purple-300 dark:hover:border-purple-800',
  orange: 'hover:border-orange-300 dark:hover:border-orange-800',
  teal: 'hover:border-teal-300 dark:hover:border-teal-800',
  cyan: 'hover:border-cyan-300 dark:hover:border-cyan-800',
};

export function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Expertise"
            title={
              <>
                What I{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Specialise In
                </span>
              </>
            }
            subtitle="Six core domains where I deliver measurable impact — from closing enterprise deals to designing institutional-grade crypto solutions."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertiseAreas.map((area, index) => {
            const Icon = ICON_MAP[area.icon] ?? Briefcase;
            const gradientClass = COLOR_MAP[area.color] ?? COLOR_MAP.emerald;
            const borderClass = BORDER_MAP[area.color] ?? BORDER_MAP.emerald;

            return (
              <AnimatedSection key={area.id} animation="scale-up" delay={index * 0.08}>
                <div
                  className={cn(
                    'group h-full p-6 rounded-2xl',
                    'bg-slate-50 dark:bg-slate-900',
                    'border border-slate-200 dark:border-slate-800',
                    borderClass,
                    'hover:shadow-lg dark:hover:shadow-slate-950/50',
                    'transition-all duration-300 cursor-default'
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                      'bg-gradient-to-br shadow-lg',
                      gradientClass,
                      'group-hover:scale-110 transition-transform duration-300'
                    )}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {area.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                        <span className="flex-shrink-0 w-1 h-1 rounded-full bg-emerald-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
