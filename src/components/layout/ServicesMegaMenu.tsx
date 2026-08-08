import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronRight, Building2, Landmark, Home, FileCheck, FileText, Users, Gavel, ClipboardList, ShieldCheck, Search, Award } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { localize, t } = useLanguage();

  if (!isOpen) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'Home': return <Home className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'FileText': return <FileText className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'Users': return <Users className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'Gavel': return <Gavel className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'ClipboardList': return <ClipboardList className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />;
      case 'Search': return <Search className="w-5 h-5 text-brand-gold shrink-0" />;
      default: return <Award className="w-5 h-5 text-brand-gold shrink-0" />;
    }
  };

  return (
    <div
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 w-full bg-white dark:bg-dark-card shadow-2xl border-t border-b border-brand-borderLight dark:border-dark-border py-8 px-6 sm:px-8 z-50 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {servicesData.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            onClick={onClose}
            className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-goldSoft/60 dark:hover:bg-dark-elevated transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-brand-goldSoft dark:bg-dark-surface border border-brand-gold/20 shrink-0 group-hover:scale-105 transition-transform">
              {getIcon(service.iconName)}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs sm:text-sm font-semibold text-brand-text dark:text-dark-text group-hover:text-brand-gold dark:group-hover:text-dark-gold transition-colors line-clamp-1">
                {localize(service.title)}
              </h4>
              <p className="text-[11px] text-brand-textSecondary dark:text-dark-textSecondary line-clamp-2 mt-1 leading-relaxed">
                {localize(service.shortDescription)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-brand-borderLight dark:border-dark-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-xs text-brand-textSecondary dark:text-dark-textSecondary">
          Need a tailored legal consultation for your business?
        </span>
        <div className="flex items-center gap-4">
          <Link
            to="/services"
            onClick={onClose}
            className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline inline-flex items-center gap-1"
          >
            {t('nav.viewAllServices')}
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/consultation"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-lg shadow-sm transition-colors"
          >
            {t('nav.consultation')}
          </Link>
        </div>
      </div>
    </div>
  );
};
