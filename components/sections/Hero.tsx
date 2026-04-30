'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { personal } from '@/data/personal';

const floatingBadges = [
  { label: 'Node.js', delay: 0, x: '-60%', y: '-120%' },
  { label: 'NestJS', delay: 0.3, x: '60%', y: '-100%' },
  { label: 'AWS', delay: 0.6, x: '-80%', y: '60%' },
  { label: 'MongoDB', delay: 0.9, x: '70%', y: '80%' },
  { label: 'Redis', delay: 1.2, x: '-30%', y: '130%' },
  { label: 'API Design', delay: 1.5, x: '50%', y: '140%' },
];

const socialLinks = [
  { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: personal.github, icon: Github, label: 'GitHub' },
  { href: personal.blog ?? '#', icon: BookOpen, label: 'Blog' },
  { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* ── Background ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-60 dark:opacity-30" />
        {/* Radial gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-300/8 dark:bg-emerald-400/6 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-400/6 dark:bg-teal-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left column — text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status chip */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Sparkles className="w-3 h-3" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3"
            >
              Hi, I&apos;m{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Chandrakala
                </span>
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {personal.title}
              </span>
              <span className="text-slate-400 dark:text-slate-600">@</span>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                {personal.company}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('#projects')}
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll('#contact')}
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
              <span className="text-xs text-slate-400 dark:text-slate-600 ml-2">
                {personal.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Right column — avatar with floating badges */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Outer ring */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-300/50 dark:border-emerald-700/50 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-emerald-200/40 dark:border-emerald-800/40" />

              {/* Avatar circle */}
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 shadow-emerald-glow-lg flex items-center justify-center">
                <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight select-none">
                  {personal.initials}
                </span>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map(({ label, delay, x, y }) => (
                <motion.div
                  key={label}
                  className="absolute top-1/2 left-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.8, duration: 0.4, ease: 'backOut' }}
                  style={{ transform: `translate(${x}, ${y})` }}
                >
                  <Badge variant="emerald" size="sm" className="shadow-sm font-semibold whitespace-nowrap">
                    {label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {personal.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors group"
            >
              <p className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-emerald-500 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
