import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export const Breadcrumb: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs md:text-sm text-brand-textSecondary dark:text-dark-textSecondary">
      <ol className="flex items-center flex-wrap gap-1 md:gap-2">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-gold dark:hover:text-dark-gold transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>{t('nav.home')}</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center gap-1 md:gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-brand-textMuted dark:text-dark-textSecondary" />
            {item.url ? (
              <Link to={item.url} className="hover:text-brand-gold dark:hover:text-dark-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-brand-text dark:text-dark-text" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
