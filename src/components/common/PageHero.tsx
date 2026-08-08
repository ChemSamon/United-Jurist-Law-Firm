import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import type { BreadcrumbItem } from './Breadcrumb';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
  bgImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
}) => {
  return (
    <section className="relative border-b border-brand-borderLight dark:border-dark-border pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      {/* Background Banner Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Page Hero Background"
            className="w-full h-full object-cover object-center opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/95 via-brand-bg/90 to-brand-bg/75 dark:from-dark-bg/95 dark:via-dark-bg/90 dark:to-dark-bg/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-goldSoft/40 via-transparent to-brand-bg dark:from-dark-elevated/40 dark:to-dark-bg" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumb items={breadcrumbs} />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl"
        >
          {badge && (
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-brand-goldDeep bg-brand-goldSoft border border-brand-gold/30 rounded-full dark:bg-dark-card dark:text-dark-gold">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-text dark:text-dark-text tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative Gold Accent Lines */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-gold/10 dark:bg-dark-gold/5 rounded-full blur-3xl pointer-events-none z-0" />
    </section>
  );
};
