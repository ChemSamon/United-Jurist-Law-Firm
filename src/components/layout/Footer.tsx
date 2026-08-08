import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { firmConfig } from '../../config/firmConfig';
import { servicesData } from '../../data/servicesData';

export const Footer: React.FC = () => {
  const { language, t, localize, isKhmer } = useLanguage();

  return (
    <footer className="bg-brand-footerDark text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t('footer.aboutFirm')}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-brand-gold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t('footer.verificationNotice')}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-brand-gold transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-brand-gold transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-brand-gold transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-neutral-400 hover:text-brand-gold transition-colors">
                  {t('nav.fees')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-neutral-400 hover:text-brand-gold transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-neutral-400 hover:text-brand-gold transition-colors">
                  {t('nav.insights')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-brand-gold transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Practice Areas */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.practiceAreas')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-neutral-400 hover:text-brand-gold line-clamp-1 transition-colors"
                  >
                    {localize(service.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Verification Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.contactUs')}
            </h3>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{firmConfig.address.full[language]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex flex-col">
                  {firmConfig.phones.map((phone) => (
                    <a key={phone.value} href={`tel:${phone.value}`} className="hover:text-brand-gold transition-colors">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              {/* Unverified Email Handling */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-amber-400/90 font-medium">
                  {firmConfig.email.displayNotice[language]}
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{firmConfig.businessHours[language].weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal links & Toggles */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <span>•</span>
            <Link to="/terms-of-use" className="hover:text-neutral-300 transition-colors">
              {t('footer.termsOfUse')}
            </Link>
            <span>•</span>
            <Link to="/legal-disclaimer" className="hover:text-neutral-300 transition-colors">
              {t('footer.legalDisclaimer')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className={isKhmer ? 'font-khmer' : ''}>
              © {new Date().getFullYear()} {firmConfig.name[language]}. {t('footer.allRightsReserved')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
