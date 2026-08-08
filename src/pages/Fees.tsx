import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { feesData } from '../data/feesData';
import type { FeeItem } from '../types';
import { Search, Printer, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Fees: React.FC = () => {
  const { t, localize, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedLocation = searchParams.get('location') || 'all';
  const selectedSpeed = searchParams.get('speed') || 'all';
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const [activeDrawerFee, setActiveDrawerFee] = useState<FeeItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'documents-witnessing', label: 'Legal Documents & Witnessing' },
    { id: 'security-documents', label: 'Security Documents' },
    { id: 'hypothec-registration', label: 'Hypothec Registration' },
    { id: 'setfo-security', label: 'SETFO & Security Filing' },
    { id: 'adr-mediation', label: 'Dispute Resolution' },
    { id: 'due-diligence-fees', label: 'Due Diligence' },
    { id: 'other-public-fees', label: 'Public Services & Licenses' },
  ];

  const handlePrint = () => {
    window.print();
  };

  const filteredFees = feesData.filter((fee) => {
    const matchesCategory = selectedCategory === 'all' || fee.serviceCategory === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || fee.location === selectedLocation || fee.location === 'all';
    const matchesSpeed = selectedSpeed === 'all' || fee.speed === selectedSpeed || fee.speed === 'both';
    
    const name = localize(fee.serviceName).toLowerCase();
    const notes = localize(fee.notes).toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q || name.includes(q) || notes.includes(q);

    return matchesCategory && matchesLocation && matchesSpeed && matchesQuery;
  });

  return (
    <div className="space-y-0">
      <PageHero
        badge="Transparent Pricing"
        title={t('feesPage.title')}
        subtitle={t('feesPage.subtitle')}
        breadcrumbs={[{ label: t('nav.fees') }]}
      />

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white dark:bg-dark-card border-b border-brand-borderLight dark:border-dark-border sticky top-16 z-30 shadow-subtle no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-brand-textMuted dark:text-dark-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('feesPage.searchPlaceholder')}
                className="w-full pl-10 pr-10 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-xs sm:text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-textMuted">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Controls: Location & Speed */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <select
                value={selectedLocation}
                onChange={(e) => {
                  searchParams.set('location', e.target.value);
                  setSearchParams(searchParams);
                }}
                className="px-3.5 py-2 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-xs font-medium text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <option value="all">{t('feesPage.allLocations')}</option>
                <option value="phnom-penh">{t('feesPage.phnomPenh')}</option>
                <option value="provinces">{t('feesPage.provinces')}</option>
              </select>

              <select
                value={selectedSpeed}
                onChange={(e) => {
                  searchParams.set('speed', e.target.value);
                  setSearchParams(searchParams);
                }}
                className="px-3.5 py-2 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-xs font-medium text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <option value="all">{t('feesPage.allSpeeds')}</option>
                <option value="standard">{t('feesPage.standardSpeed')}</option>
                <option value="express">{t('feesPage.expressSpeed')}</option>
              </select>

              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-brand-goldSoft/60 dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border hover:border-brand-gold rounded-xl text-xs font-semibold text-brand-text dark:text-dark-text inline-flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-brand-gold" />
                <span>{t('feesPage.printView')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Fee Schedule Body */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Desktop Sticky Category Sidebar */}
            <div className="lg:col-span-3 hidden lg:block no-print">
              <div className="sticky top-32 bg-white dark:bg-dark-card p-4 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textMuted dark:text-dark-textSecondary p-2">
                  Fee Categories
                </h4>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      if (cat.id === 'all') searchParams.delete('category');
                      else searchParams.set('category', cat.id);
                      setSearchParams(searchParams);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-colors block ${
                      selectedCategory === cat.id
                        ? 'bg-brand-gold text-neutral-900 shadow-gold'
                        : 'text-brand-textSecondary dark:text-dark-textSecondary hover:bg-brand-goldSoft/40 hover:text-brand-text'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Table View & Mobile Cards */}
            <div className="lg:col-span-9 space-y-8">
              {/* Desktop Table */}
              <div className="hidden sm:block bg-white dark:bg-dark-card rounded-3xl border border-brand-borderLight dark:border-dark-border overflow-hidden shadow-card">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-goldSoft/50 dark:bg-dark-surface border-b border-brand-borderLight dark:border-dark-border text-xs font-semibold uppercase tracking-wider text-brand-textMuted dark:text-dark-textSecondary">
                      <th className="p-4">Service Description</th>
                      <th className="p-4">Reference Fee</th>
                      <th className="p-4">Location</th>
                      <th className="p-4">Est. Timeline</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-borderLight dark:divide-dark-border text-xs sm:text-sm">
                    {filteredFees.map((fee) => (
                      <tr key={fee.id} className="hover:bg-brand-goldSoft/20 dark:hover:bg-dark-elevated transition-colors">
                        <td className="p-4">
                          <span className="font-semibold text-brand-text dark:text-dark-text block">
                            {localize(fee.serviceName)}
                          </span>
                          <span className="text-xs text-brand-textMuted dark:text-dark-textSecondary line-clamp-1">
                            {localize(fee.notes)}
                          </span>
                        </td>
                        <td className="p-4 font-bold text-brand-goldDeep dark:text-dark-gold whitespace-nowrap">
                          {fee.feeAmount[language]}
                        </td>
                        <td className="p-4 text-brand-textSecondary dark:text-dark-textSecondary whitespace-nowrap">
                          {localize(fee.locationName)}
                        </td>
                        <td className="p-4 text-brand-textSecondary dark:text-dark-textSecondary whitespace-nowrap">
                          {localize(fee.estimatedDuration)}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => setActiveDrawerFee(fee)}
                            className="px-3 py-1.5 bg-brand-goldSoft dark:bg-dark-surface hover:bg-brand-gold text-brand-text dark:text-dark-text hover:text-neutral-900 rounded-lg text-xs font-semibold transition-colors"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards View */}
              <div className="sm:hidden space-y-4">
                {filteredFees.map((fee) => (
                  <div
                    key={fee.id}
                    onClick={() => setActiveDrawerFee(fee)}
                    className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-3 shadow-subtle"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                      {localize(fee.serviceCategoryName)}
                    </span>
                    <h4 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                      {localize(fee.serviceName)}
                    </h4>
                    <div className="text-xl font-bold text-brand-goldDeep dark:text-dark-gold">
                      {fee.feeAmount[language]}
                    </div>
                    <div className="flex items-center justify-between text-xs text-brand-textMuted dark:text-dark-textSecondary pt-2 border-t border-brand-borderLight dark:border-dark-border">
                      <span>{localize(fee.locationName)}</span>
                      <span>{localize(fee.estimatedDuration)}</span>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Fee Item Detail Drawer Popup */}
      {activeDrawerFee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-dark-card w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-brand-borderStrong dark:border-dark-border space-y-4 relative">
            <button
              onClick={() => setActiveDrawerFee(null)}
              className="absolute top-4 right-4 p-2 text-brand-textMuted hover:text-brand-text rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block">
              {localize(activeDrawerFee.serviceCategoryName)}
            </span>

            <h3 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">
              {localize(activeDrawerFee.serviceName)}
            </h3>

            <div className="p-4 bg-brand-goldSoft/50 dark:bg-dark-surface rounded-2xl border border-brand-gold/30">
              <span className="text-xs text-brand-textMuted block">Reference Fee Amount:</span>
              <span className="text-2xl font-bold text-brand-goldDeep dark:text-dark-gold">
                {activeDrawerFee.feeAmount[language]}
              </span>
            </div>

            <div className="space-y-2 text-xs text-brand-textSecondary dark:text-dark-textSecondary">
              <p><strong>Unit:</strong> {localize(activeDrawerFee.unit)}</p>
              <p><strong>Location:</strong> {localize(activeDrawerFee.locationName)}</p>
              <p><strong>Est. Duration:</strong> {localize(activeDrawerFee.estimatedDuration)}</p>
              <p><strong>Legal Scope Notes:</strong> {localize(activeDrawerFee.notes)}</p>
            </div>

            <div className="pt-4 border-t border-brand-borderLight dark:border-dark-border flex items-center justify-end gap-3">
              <Link
                to={`/consultation?feeId=${activeDrawerFee.id}`}
                onClick={() => setActiveDrawerFee(null)}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
              >
                {t('feesPage.requestQuote')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
