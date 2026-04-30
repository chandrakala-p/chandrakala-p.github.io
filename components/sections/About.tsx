'use client';

import { Code2, MapPin, Briefcase, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection, StaggerContainer } from '@/components/common/AnimatedSection';
import { personal } from '@/data/personal';

const highlights = [
  { icon: Code2,     text: 'Senior Backend Engineer — Node.js, NestJS, AWS' },
  { icon: MapPin,    text: 'Bangalore, India · Open to remote & global roles' },
  { icon: Briefcase, text: 'Targeting Solutions Engineering & client-facing roles' },
  { icon: Award,     text: 'Best Performer — HCL Technologies · B.E. CGPA 8.9' },
];

const whatIDo = [
  {
    title: 'Build Systems That Scale',
    description:
      'From high-volume e-commerce platforms to enterprise SaaS, I design modular, cloud-native backends on AWS that handle real production workloads — reliably, efficiently, and maintainably.',
  },
  {
    title: 'Define APIs That Connect Teams',
    description:
      'I work closely with product managers, frontend engineers, and stakeholders to negotiate API contracts before a single line of code is written — eliminating integration friction and keeping everyone aligned.',
  },
  {
    title: 'Translate Technology Into Business Value',
    description:
      'Complex distributed systems, caching strategies, and access control frameworks don\'t mean much unless they solve a business problem. I\'ve learned to bridge that gap, and it\'s what makes me a natural fit for Solutions Engineering.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="About Me"
            title={
              <>
                Engineering Depth.{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Consulting Mindset.
                </span>
              </>
            }
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — bio */}
          <AnimatedSection animation="slide-left">
            <div className="space-y-5">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {personal.bio}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {personal.extendedBio}
              </p>

              {/* Quick highlights */}
              <ul className="space-y-3 pt-2">
                {highlights.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Right — What I Do cards */}
          <StaggerContainer staggerChildren={0.15}>
            <div className="space-y-4">
              {whatIDo.map(({ title, description }, i) => (
                <AnimatedSection key={title} animation="slide-right" delay={i * 0.1}>
                  <div className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800 hover:shadow-lg dark:hover:shadow-slate-950 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold shadow-emerald-glow group-hover:shadow-emerald-glow-lg transition-shadow">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
