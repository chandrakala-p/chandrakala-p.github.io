'use client';

import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Experience"
            title={
              <>
                Professional{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Journey
                </span>
              </>
            }
            subtitle="4+ years building production systems at scale — from global e-commerce and mobile content platforms to enterprise collaboration SaaS."
          />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-emerald-300/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.id} animation="fade-up" delay={index * 0.15}>
                <div className="relative flex gap-6 md:gap-10">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div
                      className={cn(
                        'w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-sm md:text-base font-extrabold text-white shadow-lg transition-all',
                        exp.current
                          ? 'bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-glow'
                          : 'bg-gradient-to-br from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800'
                      )}
                    >
                      {exp.company.slice(0, 2).toUpperCase()}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-8">
                    <div className="group p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800 shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <Badge variant="emerald" size="sm">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                              {exp.company}
                            </span>
                            {exp.companyUrl && (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${exp.company}`}
                                className="text-slate-400 hover:text-emerald-500 transition-colors"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 text-xs text-slate-500 dark:text-slate-500">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm">
                            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="slate" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
