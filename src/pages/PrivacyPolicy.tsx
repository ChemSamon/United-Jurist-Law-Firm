import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { Printer } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {

  return (
    <div className="space-y-0">
      <PageHero
        badge="Legal Compliance"
        title="Privacy Policy"
        subtitle="How United Jurist Law Firm collects, protects, and handles user information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
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
              <span>Print Policy</span>
            </button>
          </div>

          <div className="bg-white dark:bg-dark-card p-8 sm:p-12 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6 text-sm text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">1. Collection of Information</h2>
            <p>
              United Jurist Law Firm collects information submitted voluntarily through our online consultation wizard, contact form, and telephone communications. This includes full name, company name, contact numbers, email address, and matter descriptions.
            </p>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">2. Purpose of Use</h2>
            <p>
              Information collected is strictly utilized to evaluate legal inquiries, schedule consultation appointments, verify conflict of interest checks, and communicate regarding requested legal services under Cambodian law.
            </p>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">3. Attorney Confidentiality & Data Protection</h2>
            <p>
              We maintain rigorous physical, technical, and procedural safeguards in accordance with the Cambodian Code of Ethics for Attorneys. Your submitted information will never be sold, rented, or disclosed to third parties without your explicit prior authorization or a lawful Cambodian court order.
            </p>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">4. Website Analytics & Cookies</h2>
            <p>
              Our website uses basic session local storage to preserve user language (Khmer/English) and visual theme preferences (Light/Dark mode). We do not deploy invasive third-party tracking scripts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
