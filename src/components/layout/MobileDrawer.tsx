import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone, Globe, Moon, Sun } from 'lucide-react';
import { Logo } from '../common/Logo';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { servicesData } from '../../data/servicesData';
import { firmConfig } from '../../config/firmConfig';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage, t, localize } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const drawerContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-[101]"
          />

          {/* Slide-In Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 h-full w-full max-w-[320px] sm:max-w-sm bg-white dark:bg-dark-card shadow-2xl flex flex-col z-[102] overflow-hidden border-l border-brand-borderLight dark:border-dark-border"
          >
            {/* Top Bar Header (shrink-0 instead of sticky) */}
            <div className="flex items-center justify-between p-4 border-b border-brand-borderLight dark:border-dark-border bg-white dark:bg-dark-card shrink-0">
              <Logo variant="mobile" />
              <button
                onClick={onClose}
                className="p-2 text-brand-textMuted dark:text-dark-textSecondary hover:text-brand-text dark:hover:text-dark-text rounded-lg border border-brand-borderLight dark:border-dark-border"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="p-4 space-y-2 flex-1 overflow-y-auto">
              <Link
                to="/"
                onClick={onClose}
                className="block px-4 py-3 text-sm font-semibold text-brand-text dark:text-dark-text hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated rounded-xl transition-colors"
              >
                {t('nav.home')}
              </Link>

              <Link
                to="/about"
                onClick={onClose}
                className="block px-4 py-3 text-sm font-semibold text-brand-text dark:text-dark-text hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated rounded-xl transition-colors"
              >
                {t('nav.about')}
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-brand-text dark:text-dark-text hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated rounded-xl transition-colors"
                >
                  <span>{t('nav.services')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesExpanded ? 'rotate-180' : ''}`} />
                </button>

                {servicesExpanded && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-brand-goldSoft/30 dark:bg-dark-surface/50 rounded-xl my-1 border border-brand-gold/20">
                    <Link
                      to="/services"
                      onClick={onClose}
                      className="block px-3 py-2 text-xs font-bold text-brand-goldDeep dark:text-dark-gold uppercase tracking-wider"
                    >
                      {t('nav.viewAllServices')}
                    </Link>
                    {servicesData.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        onClick={onClose}
                        className="block px-3 py-2 text-xs text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-gold line-clamp-1 transition-colors"
                      >
                        {localize(s.title)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/fees"
                onClick={onClose}
                className="block px-4 py-3 text-sm font-semibold text-brand-text dark:text-dark-text hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated rounded-xl transition-colors"
              >
                {t('nav.fees')}
              </Link>

              <Link
                to="/team"
                onClick={onClose}
                className="block px-4 py-3 text-sm font-semibold text-brand-text dark:text-dark-text hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated rounded-xl transition-colors"
              >
                {t('nav.team')}
              </Link>

              <Link
                to="/insights"
                onClick={onClose}
                className="block px-4 py-3 text-sm font-semibold text-brand-text dark:text-dark-text hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated rounded-xl transition-colors"
              >
                {t('nav.insights')}
              </Link>

              <Link
                to="/contact"
                onClick={onClose}
                className="block px-4 py-3 text-sm font-semibold text-brand-text dark:text-dark-text hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated rounded-xl transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Bottom Actions Footer */}
            <div className="p-4 border-t border-brand-borderLight dark:border-dark-border space-y-3 bg-brand-bg/60 dark:bg-dark-surface/60 shrink-0">
              {/* Language & Theme Controls */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1 p-1 bg-white dark:bg-dark-elevated rounded-xl border border-brand-borderLight dark:border-dark-border text-xs">
                  <Globe className="w-3.5 h-3.5 text-brand-gold ml-1.5" />
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                      language === 'en' ? 'bg-brand-gold text-neutral-900 shadow-sm' : 'text-brand-textMuted'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('km')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                      language === 'km' ? 'bg-brand-gold text-neutral-900 shadow-sm' : 'text-brand-textMuted'
                    }`}
                  >
                    ខ្មែរ
                  </button>
                </div>

                <button
                  onClick={toggleTheme}
                  className="p-2.5 bg-white dark:bg-dark-elevated text-brand-text dark:text-dark-text rounded-xl border border-brand-borderLight dark:border-dark-border"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
                </button>
              </div>

              {/* Direct Telephone Action Links */}
              <div className="space-y-1">
                {firmConfig.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={`tel:${phone.value}`}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-gold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Call {phone.display}</span>
                  </a>
                ))}
              </div>

              {/* Consultation CTA */}
              <Link
                to="/consultation"
                onClick={onClose}
                className="block w-full py-3 text-center text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
              >
                {t('nav.consultation')}
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(drawerContent, document.body);
};
