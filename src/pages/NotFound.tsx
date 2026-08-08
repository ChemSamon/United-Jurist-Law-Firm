import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home, Scale, Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export const NotFound: React.FC = () => {
  const { openSearch } = useSearch();

  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-brand-goldSoft/40 to-brand-bg dark:from-dark-elevated dark:to-dark-bg">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-24 h-24 bg-white dark:bg-dark-card text-brand-gold rounded-3xl shadow-card border border-brand-borderLight dark:border-dark-border flex items-center justify-center mx-auto">
          <FileQuestion className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-textSecondary dark:text-dark-textSecondary max-w-md mx-auto">
            The legal document or page you requested could not be located. It may have been moved or updated.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/services"
            className="px-5 py-2.5 text-xs font-semibold text-brand-text dark:text-dark-text bg-white dark:bg-dark-card border border-brand-borderLight hover:border-brand-gold rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <Scale className="w-4 h-4 text-brand-gold" />
            <span>View Services</span>
          </Link>

          <button
            onClick={openSearch}
            className="px-4 py-2.5 text-xs font-semibold text-brand-textSecondary dark:text-dark-textSecondary bg-white dark:bg-dark-card border border-brand-borderLight rounded-xl hover:border-brand-gold transition-colors inline-flex items-center gap-1.5"
          >
            <Search className="w-4 h-4 text-brand-gold" />
            <span>Quick Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};
