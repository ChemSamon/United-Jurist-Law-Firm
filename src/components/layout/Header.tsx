import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Moon, Sun, Menu, ChevronDown, Phone } from 'lucide-react';
import { Logo } from '../common/Logo';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { MobileDrawer } from './MobileDrawer';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useSearch } from '../../contexts/SearchContext';
import { firmConfig } from '../../config/firmConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { openSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-brand-borderLight dark:border-dark-border py-3 shadow-subtle'
          : 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md py-4 border-b border-brand-borderLight/40 dark:border-dark-border/40'
      }`}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Logo */}
        <Logo variant={isScrolled ? 'mobile' : 'header'} />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors hover:text-brand-gold dark:hover:text-dark-gold ${
              isActive('/') ? 'text-brand-gold dark:text-dark-gold font-semibold' : 'text-brand-text dark:text-dark-text'
            }`}
          >
            {t('nav.home')}
          </Link>

          <Link
            to="/about"
            className={`transition-colors hover:text-brand-gold dark:hover:text-dark-gold ${
              isActive('/about') ? 'text-brand-gold dark:text-dark-gold font-semibold' : 'text-brand-text dark:text-dark-text'
            }`}
          >
            {t('nav.about')}
          </Link>

          {/* Mega Menu Service Trigger Button */}
          <div className="relative">
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              className={`inline-flex items-center gap-1 transition-colors hover:text-brand-gold dark:hover:text-dark-gold ${
                isActive('/services') ? 'text-brand-gold dark:text-dark-gold font-semibold' : 'text-brand-text dark:text-dark-text'
              }`}
            >
              <span>{t('nav.services')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <Link
            to="/fees"
            className={`transition-colors hover:text-brand-gold dark:hover:text-dark-gold ${
              isActive('/fees') ? 'text-brand-gold dark:text-dark-gold font-semibold' : 'text-brand-text dark:text-dark-text'
            }`}
          >
            {t('nav.fees')}
          </Link>

          <Link
            to="/team"
            className={`transition-colors hover:text-brand-gold dark:hover:text-dark-gold ${
              isActive('/team') ? 'text-brand-gold dark:text-dark-gold font-semibold' : 'text-brand-text dark:text-dark-text'
            }`}
          >
            {t('nav.team')}
          </Link>

          <Link
            to="/insights"
            className={`transition-colors hover:text-brand-gold dark:hover:text-dark-gold ${
              isActive('/insights') ? 'text-brand-gold dark:text-dark-gold font-semibold' : 'text-brand-text dark:text-dark-text'
            }`}
          >
            {t('nav.insights')}
          </Link>

          <Link
            to="/contact"
            className={`transition-colors hover:text-brand-gold dark:hover:text-dark-gold ${
              isActive('/contact') ? 'text-brand-gold dark:text-dark-gold font-semibold' : 'text-brand-text dark:text-dark-text'
            }`}
          >
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Right Header Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Global Search Trigger */}
          <button
            onClick={openSearch}
            className="p-2 text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-gold dark:hover:text-dark-gold transition-colors rounded-lg"
            aria-label="Search site"
            title="Search (Ctrl + K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Phone Quick Link */}
          <a
            href={`tel:${firmConfig.phones[0].value}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>{firmConfig.phones[0].display}</span>
          </a>

          {/* Language Selector */}
          <div className="inline-flex items-center gap-1 p-1 bg-brand-goldSoft/50 dark:bg-dark-card rounded-lg border border-brand-borderLight dark:border-dark-border text-xs">
            <Globe className="w-3.5 h-3.5 text-brand-gold ml-1" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded font-medium transition-colors ${
                language === 'en' ? 'bg-white dark:bg-dark-elevated text-brand-text dark:text-dark-text shadow-sm' : 'text-brand-textMuted'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('km')}
              className={`px-2 py-0.5 rounded font-medium transition-colors ${
                language === 'km' ? 'bg-white dark:bg-dark-elevated text-brand-text dark:text-dark-text shadow-sm' : 'text-brand-textMuted'
              }`}
            >
              ខ្មែរ
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-gold transition-colors rounded-lg"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Consultation CTA */}
          <Link
            to="/consultation"
            className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors duration-200"
          >
            {t('nav.consultation')}
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={openSearch}
            className="p-2 text-brand-text dark:text-dark-text"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 text-brand-text dark:text-dark-text hover:text-brand-gold"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Full Width Services Mega Menu */}
      <ServicesMegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  );
};
