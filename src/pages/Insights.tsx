import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { insightsData } from '../data/insightsData';
import { Search, Clock, Calendar, ChevronRight } from 'lucide-react';

export const Insights: React.FC = () => {
  const { t, localize } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'real-estate', label: 'Real Estate & Trusts' },
    { id: 'corporate', label: 'Corporate & Investment' },
  ];

  const filteredArticles = insightsData.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const title = localize(art.title).toLowerCase();
    const summary = localize(art.summary).toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q || title.includes(q) || summary.includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-0">
      <PageHero
        badge="Legal Knowledge & Research"
        title={t('insightsPage.title')}
        subtitle={t('insightsPage.subtitle')}
        breadcrumbs={[{ label: t('nav.insights') }]}
      />

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white dark:bg-dark-card border-b border-brand-borderLight dark:border-dark-border sticky top-16 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-brand-textMuted dark:text-dark-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('insightsPage.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-xs sm:text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-brand-gold text-neutral-900 shadow-gold'
                    : 'bg-brand-bg dark:bg-dark-surface text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-text border border-brand-borderLight'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white dark:bg-dark-card rounded-3xl border border-brand-borderLight dark:border-dark-border overflow-hidden shadow-card hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={article.featuredImage}
                      alt={localize(article.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold border border-brand-borderLight">
                        {localize(article.categoryName)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-brand-textMuted dark:text-dark-textSecondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTimeMinutes} {t('insightsPage.readTime')}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text group-hover:text-brand-gold transition-colors">
                      {localize(article.title)}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary line-clamp-3 leading-relaxed">
                      {localize(article.summary)}
                    </p>


                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-brand-borderLight/60 dark:border-dark-border/60 mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-textMuted dark:text-dark-textSecondary">
                    By {localize(article.author)}
                  </span>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>{t('insightsPage.readArticle')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
