import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { Printer } from 'lucide-react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="space-y-0">
      <PageHero
        badge="Legal Terms"
        title="Terms of Use"
        subtitle="Terms and conditions governing website access and public legal information."
        breadcrumbs={[{ label: 'Terms of Use' }]}
      />

      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between no-print">
            <span className="text-xs text-brand-textMuted dark:text-dark-textSecondary">Last Updated: February 2026</span>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 bg-white dark:bg-dark-card border border-brand-borderLight dark:border-dark-border rounded-xl text-xs font-semibold text-brand-text dark:text-dark-text inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-brand-gold" />
              <span>Print Terms</span>
            </button>
          </div>

          <div className="bg-white dark:bg-dark-card p-8 sm:p-12 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6 text-sm text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the official website of United Jurist Law Firm, you agree to comply with and be bound by these Terms of Use and all applicable laws of the Kingdom of Cambodia.
            </p>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">2. No Lawyer-Client Relationship</h2>
            <p>
              Accessing this website, reading published insights, or submitting inquiry forms does not create a lawyer-client or attorney-client relationship. Representation commences solely upon formal execution of a written Legal Services Agreement signed by an authorized attorney of United Jurist Law Firm.
            </p>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">3. Intellectual Property</h2>
            <p>
              All website graphics, official logos, legal insight articles, text compilations, and software components are the intellectual property of United Jurist Law Firm and protected under Cambodian copyright statutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
