import React, { createContext, useContext, useState, useEffect } from 'react';
import type { SearchResultItem } from '../types';
import { servicesData } from '../data/servicesData';
import { feesData } from '../data/feesData';
import { insightsData } from '../data/insightsData';
import { faqData } from '../data/faqData';
import { useLanguage } from './LanguageContext';

interface SearchContextType {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  query: string;
  setQuery: (q: string) => void;
  results: SearchResultItem[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { language, localize } = useLanguage();
  const [results, setResults] = useState<SearchResultItem[]>([]);

  const openSearch = () => setIsOpen(true);
  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const matches: SearchResultItem[] = [];

    // Search Services
    servicesData.forEach((s) => {
      const title = localize(s.title);
      const desc = localize(s.shortDescription);
      if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || s.category.includes(q)) {
        matches.push({
          id: `service-${s.id}`,
          type: 'service',
          title,
          description: desc,
          url: `/services/${s.slug}`,
          category: localize(s.categoryName),
        });
      }
    });

    // Search Fees
    feesData.forEach((f) => {
      const name = localize(f.serviceName);
      const notes = localize(f.notes);
      const amount = f.feeAmount[language];
      if (name.toLowerCase().includes(q) || notes.toLowerCase().includes(q) || amount.toLowerCase().includes(q)) {
        matches.push({
          id: `fee-${f.id}`,
          type: 'fee',
          title: `${name} (${amount})`,
          description: notes,
          url: `/fees?search=${encodeURIComponent(q)}`,
          category: localize(f.serviceCategoryName),
        });
      }
    });

    // Search Insights
    insightsData.forEach((art) => {
      const title = localize(art.title);
      const summary = localize(art.summary);
      if (title.toLowerCase().includes(q) || summary.toLowerCase().includes(q)) {
        matches.push({
          id: `insight-${art.id}`,
          type: 'insight',
          title,
          description: summary,
          url: `/insights/${art.slug}`,
          category: localize(art.categoryName),
        });
      }
    });

    // Search FAQs
    faqData.forEach((faq) => {
      const question = localize(faq.question);
      const answer = localize(faq.answer);
      if (question.toLowerCase().includes(q) || answer.toLowerCase().includes(q)) {
        matches.push({
          id: `faq-${faq.id}`,
          type: 'page',
          title: question,
          description: answer,
          url: `/about#faq-${faq.id}`,
          category: 'FAQ',
        });
      }
    });

    setResults(matches.slice(0, 10));
  }, [query, language]);

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        openSearch,
        closeSearch,
        query,
        setQuery,
        results,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
