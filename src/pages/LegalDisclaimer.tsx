import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { Printer, ShieldAlert } from 'lucide-react';

export const LegalDisclaimer: React.FC = () => {
  return (
    <div className="space-y-0">
      <PageHero
        badge="Legal Disclosures"
        title="Legal Disclaimer"
        subtitle="Important regulatory and advisory disclosures regarding website content."
        breadcrumbs={[{ label: 'Legal Disclaimer' }]}
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
              <span>Print Disclaimer</span>
            </button>
          </div>

          <div className="bg-white dark:bg-dark-card p-8 sm:p-12 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6 text-sm text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
            <div className="p-4 bg-amber-50 dark:bg-dark-surface rounded-2xl border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                The materials and legal insight articles contained on this website are provided for general informative purposes only and do not constitute specific statutory legal advice.
              </p>
            </div>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">1. Non-Binding Information</h2>
            <p>
              Published legal descriptions, fee estimates, timelines, and insight articles reflect general reference standards in Cambodia. They are not automatically binding on United Jurist Law Firm without formal confirmation.
            </p>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">2. Cambodian Jurisdiction</h2>
            <p>
              United Jurist Law Firm practices strictly in accordance with the laws, royal decrees, and regulations of the Kingdom of Cambodia under the statutory licensing of the Cambodian Bar Association.
            </p>

            <h2 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">3. Guarantee Limitations</h2>
            <p>
              Past case outcomes, statutory precedents, and legal opinions described on this site do not guarantee identical results in future court litigation or government administrative applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
