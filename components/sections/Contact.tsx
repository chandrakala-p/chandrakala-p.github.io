'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { personal } from '@/data/personal';
import { cn } from '@/lib/utils';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/chandrakalap',
    href: personal.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission — wire to your preferred service (Formspree, Resend, etc.)
    await new Promise((res) => setTimeout(res, 1200));
    setIsLoading(false);
    setSubmitted(true);
  };

  const inputCls = cn(
    'w-full px-4 py-3 rounded-xl text-sm',
    'bg-slate-50 dark:bg-slate-900',
    'border border-slate-200 dark:border-slate-700',
    'text-slate-900 dark:text-white',
    'placeholder:text-slate-400 dark:placeholder:text-slate-600',
    'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent',
    'transition-all duration-200'
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title={
              <>
                Let&apos;s Work{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Together
                </span>
              </>
            }
            subtitle="Whether you're exploring digital asset infrastructure, need a solutions engineering perspective, or just want to connect — I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — contact info */}
          <AnimatedSection animation="slide-left" className="lg:col-span-2">
            <div className="space-y-5">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m always open to discussing new projects, enterprise digital asset solutions, or interesting pre-sales challenges. Drop me a message and I&apos;ll get back to you promptly.
              </p>

              <div className="space-y-3">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors group"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                        {label}
                      </p>
                      {href ? (
                        <Link
                          href={href}
                          target={href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                        >
                          {value}
                        </Link>
                      ) : (
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social quick links */}
              <div className="flex gap-3 pt-2">
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </Link>
                <Link
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection animation="slide-right" className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-5 p-10 rounded-2xl bg-white dark:bg-slate-950 border border-emerald-300 dark:border-emerald-800 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <Button variant="outline" onClick={() => { setForm(INITIAL_FORM); setSubmitted(false); }}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subject <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Digital Asset Integration Discussion"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    className={cn(inputCls, 'resize-none')}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
