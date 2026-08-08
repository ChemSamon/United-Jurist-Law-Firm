import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../data/servicesData';
import { Search, Building2, ChevronRight, X } from 'lucide-react';

export const Services: React.FC = () => {
  const { t, localize } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: t('servicesPage.allCategories') },
    { id: 'corporate', label: 'Corporate & Business' },
    { id: 'finance', label: 'Banking & Finance' },
    { id: 'real-estate', label: 'Real Estate & Construction' },
    { id: 'commercial', label: 'Contracts & Commercial' },
    { id: 'advisory', label: 'Legal Documents & Opinions' },
    { id: 'labor', label: 'Employment & Labor' },
    { id: 'litigation', label: 'Litigation & ADR' },
    { id: 'estate', label: 'Trusts & Estate' },
    { id: 'compliance', label: 'Due Diligence' },
    { id: 'public', label: 'Public Licenses' },
  ];

  const handleCategoryChange = (cat: string) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredServices = servicesData.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const title = localize(s.title).toLowerCase();
    const desc = localize(s.shortDescription).toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q || title.includes(q) || desc.includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-0">
      <PageHero
        badge="Legal Practice Areas"
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
        breadcrumbs={[{ label: t('nav.services') }]}
      />

      {/* Filter and Search Bar Header */}
      <section className="py-8 bg-white dark:bg-dark-card border-b border-brand-borderLight dark:border-dark-border sticky top-16 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-brand-textMuted dark:text-dark-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('servicesPage.searchPlaceholder')}
                className="w-full pl-10 pr-10 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-xs sm:text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-textMuted hover:text-brand-text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-brand-gold text-neutral-900 shadow-gold'
                      : 'bg-brand-bg dark:bg-dark-surface text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-text border border-brand-borderLight dark:border-dark-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <h3 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">
                {t('servicesPage.noResultsTitle')}
              </h3>
              <p className="text-sm text-brand-textSecondary dark:text-dark-textSecondary">
                {t('servicesPage.noResultsText')}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
              >
                {t('servicesPage.clearFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-brand-borderLight dark:border-dark-border hover:border-brand-gold/60 transition-all duration-300 shadow-subtle hover:shadow-gold flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-surface text-brand-gold border border-brand-gold/20">
                      <Building2 className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                        {localize(service.categoryName)}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text group-hover:text-brand-gold transition-colors mt-1">
                        {localize(service.title)}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary line-clamp-3 leading-relaxed">
                      {localize(service.shortDescription)}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-borderLight dark:border-dark-border mt-6 flex items-center justify-between">
                    <span className="text-xs font-medium text-brand-textMuted dark:text-dark-textSecondary">
                      {service.relatedFeesCount} Fee Items
                    </span>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      <span>Detail Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
