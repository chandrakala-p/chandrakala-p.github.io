'use client';

import { ExternalLink, Github, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

// Map project type to a badge colour
const TYPE_VARIANT: Record<string, 'emerald' | 'blue' | 'purple' | 'orange'> = {
  'Pre-Sales POC': 'emerald',
  'Technical POC': 'blue',
  'Internal Tool': 'purple',
  'Developer Tool': 'orange',
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title={
              <>
                Featured{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Work
                </span>
              </>
            }
            subtitle="A selection of proof-of-concepts, integration frameworks, and tooling that I've built to accelerate enterprise deals and improve team velocity."
          />
        </AnimatedSection>

        {/* Featured projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, index) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={index * 0.12}>
              <div className="group h-full flex flex-col p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800 hover:shadow-xl dark:hover:shadow-slate-950/60 transition-all duration-300">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <Badge variant={TYPE_VARIANT[project.type] ?? 'emerald'}>
                    {project.type}
                  </Badge>
                  {project.link || project.github ? (
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-emerald-500 transition-colors"
                          aria-label="GitHub repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-emerald-500 transition-colors"
                          aria-label="Live project"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 mb-4">
                  <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    {project.impact}
                  </span>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Non-featured projects — compact row */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((project, index) => (
              <AnimatedSection key={project.id} animation="fade-up" delay={index * 0.1}>
                <div className={cn(
                  'group flex flex-col gap-3 p-5 rounded-2xl',
                  'bg-slate-50 dark:bg-slate-900',
                  'border border-slate-200 dark:border-slate-800',
                  'hover:border-emerald-300 dark:hover:border-emerald-800',
                  'hover:shadow-md transition-all duration-300'
                )}>
                  <div className="flex items-center justify-between">
                    <Badge variant={TYPE_VARIANT[project.type] ?? 'slate'} size="sm">
                      {project.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    {project.impact}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="slate" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
