import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { firmConfig } from '../config/firmConfig';
import { ContactForm } from '../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, Copy, Check, ExternalLink } from 'lucide-react';
import { copyToClipboard } from '../lib/utils';
import { Toast } from '../components/common/Toast';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyAddress = async () => {
    const success = await copyToClipboard(firmConfig.address.full[language]);
    if (success) {
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="space-y-0">
      <Toast message={t('officePreview.addressCopied')} isVisible={showToast} onClose={() => setShowToast(false)} />

      <PageHero
        badge="Contact Us"
        title={t('contactPage.title')}
        subtitle={t('contactPage.subtitle')}
        breadcrumbs={[{ label: t('nav.contact') }]}
      />

      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Card */}
              <div className="bg-white dark:bg-dark-card p-6 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-3">
                <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-surface text-brand-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                  Office Location
                </h3>
                <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {firmConfig.address.full[language]}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Sen+Sok+Phnom+Penh+Cambodia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleCopyAddress}
                    className="text-xs font-semibold text-brand-textMuted hover:text-brand-text inline-flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="bg-white dark:bg-dark-card p-6 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-3">
                <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-surface text-brand-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                  Direct Telephone Lines
                </h3>
                <div className="space-y-1 text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary">
                  {firmConfig.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.value}`}
                      className="block font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white dark:bg-dark-card p-6 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-3">
                <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-surface text-brand-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                  Official Email Address
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-goldDeep dark:text-dark-gold">
                  info@unitedjuristlaw.com
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white dark:bg-dark-card p-6 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-3">
                <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-surface text-brand-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                  Office Operating Hours
                </h3>
                <div className="space-y-1 text-xs text-brand-textSecondary dark:text-dark-textSecondary">
                  <p>{firmConfig.businessHours[language].weekdays}</p>
                  <p>{firmConfig.businessHours[language].saturday}</p>
                  <p>{firmConfig.businessHours[language].sunday}</p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Embed */}
      <section className="h-96 bg-neutral-200 dark:bg-dark-surface relative border-t border-brand-borderLight dark:border-dark-border">
        <iframe
          title="United Jurist Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7505374828135!2d104.8741!3d11.5705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951a37c0411b5%3A0xb3ff76c4!2sSen%20Sok%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </div>
  );
};
