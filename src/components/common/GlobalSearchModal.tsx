import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight, FileText, Scale, DollarSign, HelpCircle } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export const GlobalSearchModal: React.FC = () => {
  const { isOpen, closeSearch, query, setQuery, results } = useSearch();
  const { t } = useLanguage();

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Scale className="w-4 h-4 text-brand-gold" />;
      case 'fee':
        return <DollarSign className="w-4 h-4 text-emerald-600" />;
      case 'insight':
        return <FileText className="w-4 h-4 text-amber-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-neutral-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-brand-borderStrong dark:border-dark-border overflow-hidden"
        >
          {/* Search Input Header */}
          <div className="flex items-center px-4 py-3 border-b border-brand-borderLight dark:border-dark-border">
            <Search className="w-5 h-5 text-brand-textMuted dark:text-dark-textSecondary shrink-0 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('nav.searchPlaceholder')}
              className="w-full bg-transparent text-base text-brand-text dark:text-dark-text focus:outline-none placeholder:text-brand-textMuted dark:placeholder:text-dark-textSecondary"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 mr-2 text-brand-textMuted hover:text-brand-text dark:hover:text-dark-text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-brand-textMuted bg-neutral-100 dark:bg-dark-elevated rounded border border-brand-borderLight dark:border-dark-border">
              ESC
            </kbd>
          </div>

          {/* Search Results Body */}
          <div className="max-h-96 overflow-y-auto p-4">
            {!query.trim() ? (
              <div className="py-8 text-center text-sm text-brand-textMuted dark:text-dark-textSecondary">
                Type keywords to search across legal practice areas, service fees, insights, and FAQs.
              </div>
            ) : results.length === 0 ? (
              <div className="py-8 text-center text-sm text-brand-textMuted dark:text-dark-textSecondary">
                No matching legal services or documents found for &ldquo;{query}&rdquo;.
              </div>
            ) : (
              <div className="space-y-2">
                {results.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    onClick={closeSearch}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-brand-goldSoft/70 dark:hover:bg-dark-elevated transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-neutral-100 dark:bg-dark-surface shrink-0 mt-0.5">
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-brand-text dark:text-dark-text group-hover:text-brand-gold dark:group-hover:text-dark-gold transition-colors">
                            {item.title}
                          </span>
                          {item.category && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-neutral-100 dark:bg-dark-surface text-brand-textMuted dark:text-dark-textSecondary rounded">
                              {item.category}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-brand-textSecondary dark:text-dark-textSecondary line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-brand-textMuted dark:text-dark-textSecondary group-hover:translate-x-0.5 transition-transform self-center" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
