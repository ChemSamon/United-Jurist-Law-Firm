import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { insightsData } from '../data/insightsData';
import { Calendar, Clock, AlertCircle, ArrowLeft } from 'lucide-react';

export const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, localize } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = insightsData.find((a) => a.slug === slug) || insightsData[0];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-0">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-50 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

      <PageHero
        badge={localize(article.categoryName)}
        title={localize(article.title)}
        subtitle={localize(article.summary)}
        breadcrumbs={[
          { label: t('nav.insights'), url: '/insights' },
          { label: localize(article.title) },
        ]}
      />

      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Article Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-dark-card rounded-2xl border border-brand-borderLight dark:border-dark-border text-xs text-brand-textMuted dark:text-dark-textSecondary">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                {article.publishedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                {article.readTimeMinutes} min read
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-brand-text dark:text-dark-text">By {localize(article.author)}</span>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="h-80 sm:h-96 rounded-3xl overflow-hidden shadow-card border border-brand-borderLight dark:border-dark-border">
            <img src={article.featuredImage} alt={localize(article.title)} className="w-full h-full object-cover" />
          </div>

          {/* Article HTML Content */}
          <article
            className="bg-white dark:bg-dark-card p-8 sm:p-12 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6 text-brand-text dark:text-dark-text"
            dangerouslySetInnerHTML={{ __html: localize(article.contentHtml) }}
          />

          {/* Bottom Disclaimer */}
          <div className="p-4 bg-amber-50 dark:bg-dark-surface rounded-2xl border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Disclaimer: This article is provided for general academic and informative purposes only and does not constitute formal legal advice. Readers should seek specific legal counsel regarding their particular matter.
            </p>
          </div>

          <div className="pt-4">
            <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Insights</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
