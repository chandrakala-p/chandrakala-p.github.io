'use client';

import { Code2, Globe, MapPin, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection, StaggerContainer } from '@/components/common/AnimatedSection';
import { personal } from '@/data/personal';

const highlights = [
  { icon: Code2,  text: 'Senior Backend Engineer — Node.js, NestJS, TypeScript, AWS' },
  { icon: Globe,  text: 'Full-Stack Experience — Web Platforms, Mobile App Backends, Enterprise SaaS' },
  { icon: MapPin, text: 'Bangalore, India · Open to remote & global opportunities' },
  { icon: Award,  text: 'Best Performer Award — HCL Technologies · B.E. CGPA 8.9' },
];

const whatIDo = [
  {
    title: 'Full-Stack Delivery, Backend-First',
    description:
      'From REST APIs and database design to AWS infrastructure and mobile app backends — I work across the full stack with a backend-first mindset, ensuring every layer is built for reliability and scale.',
  },
  {
    title: 'API-First Engineering',
    description:
      'I define API contracts with product and frontend teams before a line of code is written, eliminating integration friction and keeping cross-functional delivery on track.',
  },
  {
    title: 'Systems That Scale With the Business',
    description:
      'Whether it\'s handling peak e-commerce traffic, serving personalised content to mobile users, or securing a multi-tenant enterprise platform — I build systems that grow with the business, not against it.',
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
                Built Across the Stack.{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Shipped at Scale.
                </span>
              </>
            }
            subtitle="4+ years engineering high-scale backends for web, mobile, and enterprise — with full-stack exposure across every layer of delivery."
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
