import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { firmConfig } from '../config/firmConfig';
import { servicesData } from '../data/servicesData';
import { feesData } from '../data/feesData';
import { ArrowRight, Phone, ShieldCheck, ChevronRight, Building2, MapPin, Clock, Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../lib/utils';
import { Toast } from '../components/common/Toast';

export const Home: React.FC = () => {
  const { t, localize, language } = useLanguage();
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
    <div className="space-y-0 overflow-hidden">
      <Toast message={t('officePreview.addressCopied')} isVisible={showToast} onClose={() => setShowToast(false)} />

      {/* 18.1 HERO SECTION WITH BACKGROUND BANNER */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-brand-borderLight dark:border-dark-border overflow-hidden">
        {/* Architectural Law Firm Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="United Jurist Law Firm Architectural Banner"
            className="w-full h-full object-cover object-center transform scale-105"
          />
          {/* Dual Gradient Overlays for Perfect Readability & Warm Ivory Palette */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/95 via-brand-bg/85 to-brand-bg/65 dark:from-dark-bg/95 dark:via-dark-bg/85 dark:to-dark-bg/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-goldSoft/50 via-transparent to-brand-bg dark:from-dark-elevated/50 dark:to-dark-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-goldSoft border border-brand-gold/30 dark:bg-dark-card dark:border-dark-gold/30">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                  {t('hero.badge')}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text dark:text-dark-text tracking-tight leading-[1.15]">
                {t('hero.title')}
              </h1>

              <p className="text-base sm:text-lg text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/consultation"
                  className="px-6 py-3.5 text-sm font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-all duration-200 flex items-center gap-2"
                >
                  <span>{t('hero.primaryCta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3.5 text-sm font-semibold text-brand-text dark:text-dark-text bg-white dark:bg-dark-card border border-brand-borderStrong dark:border-dark-border hover:border-brand-gold rounded-xl transition-all duration-200"
                >
                  {t('hero.secondaryCta')}
                </Link>

                <a
                  href={`tel:${firmConfig.phones[0].value}`}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline"
                >
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>{firmConfig.phones[0].display}</span>
                </a>
              </div>

              {/* Trust Statement */}
              <div className="pt-4 border-t border-brand-borderLight dark:border-dark-border flex items-center gap-2 text-xs text-brand-textMuted dark:text-dark-textSecondary">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{t('hero.trustNotice')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 18.2 ANIMATED MARQUEE TRUST STRIP */}
      <section className="bg-white dark:bg-dark-card py-5 border-b border-brand-borderLight dark:border-dark-border overflow-hidden relative group">
        {/* Subtle gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-dark-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-dark-card to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-10 sm:gap-16 w-max cursor-pointer"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 65,
            ease: 'linear',
          }}
        >
          {[
            { title: t('trustStrip.licensed'), desc: 'Bar Association License' },
            { title: t('trustStrip.bilingual'), desc: 'Khmer & English' },
            { title: t('trustStrip.clients'), desc: 'Domestic & Foreign' },
            { title: t('trustStrip.location'), desc: 'Sen Sok, Phnom Penh' },
            { title: t('trustStrip.licensed'), desc: 'Bar Association License' },
            { title: t('trustStrip.bilingual'), desc: 'Khmer & English' },
            { title: t('trustStrip.clients'), desc: 'Domestic & Foreign' },
            { title: t('trustStrip.location'), desc: 'Sen Sok, Phnom Penh' },
            { title: t('trustStrip.licensed'), desc: 'Bar Association License' },
            { title: t('trustStrip.bilingual'), desc: 'Khmer & English' },
            { title: t('trustStrip.clients'), desc: 'Domestic & Foreign' },
            { title: t('trustStrip.location'), desc: 'Sen Sok, Phnom Penh' },
            { title: t('trustStrip.licensed'), desc: 'Bar Association License' },
            { title: t('trustStrip.bilingual'), desc: 'Khmer & English' },
            { title: t('trustStrip.clients'), desc: 'Domestic & Foreign' },
            { title: t('trustStrip.location'), desc: 'Sen Sok, Phnom Penh' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 sm:gap-16 shrink-0">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                  {item.title}
                </span>
                <p className="text-[11px] text-brand-textMuted dark:text-dark-textSecondary">
                  {item.desc}
                </p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 18.3 FIRM INTRODUCTION */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-card border border-brand-borderLight dark:border-dark-border">
                <img
                  src="https://www.unitedjuristlaw.com/_next/image?url=%2Fteam%2Fteam.jpg&w=640&q=75"
                  alt="United Jurist Law Firm Team"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-brand-gold text-neutral-900 rounded-2xl shadow-xl hidden sm:block">
                <span className="text-3xl font-serif font-bold block">2024</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Incorporation Year</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                {t('intro.establishedYear')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text leading-tight">
                {t('intro.title')}
              </h2>
              <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {t('intro.text1')}
              </p>
              <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {t('intro.text2')}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline"
                >
                  <span>{t('intro.readMoreAboutUs')}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18.4 FEATURED SERVICES */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-card border-t border-b border-brand-borderLight dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
              {t('servicesSection.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
              {t('servicesSection.title')}
            </h2>
            <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary">
              {t('servicesSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group bg-brand-bg dark:bg-dark-surface p-6 rounded-2xl border border-brand-borderLight dark:border-dark-border hover:border-brand-gold/60 transition-all duration-300 shadow-subtle hover:shadow-gold flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-elevated text-brand-gold border border-brand-gold/20">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text group-hover:text-brand-gold transition-colors">
                    {localize(service.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary line-clamp-3 leading-relaxed">
                    {localize(service.shortDescription)}
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-borderLight/60 dark:border-dark-border/60 mt-6 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>{t('servicesSection.viewServiceDetails')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
            >
              <span>{t('servicesSection.viewAllServices')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 18.5 WHY CHOOSE UNITED JURIST */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
              {t('whyChooseUs.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
              {t('whyChooseUs.title')}
            </h2>
            <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary">
              {t('whyChooseUs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('whyChooseUs.items') as unknown as { title: string; desc: string }[]).map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-3 shadow-subtle"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-goldSoft dark:bg-dark-surface text-brand-gold flex items-center justify-center font-serif font-bold text-lg">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-text dark:text-dark-text">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18.6 WORKING PROCESS */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-card border-t border-b border-brand-borderLight dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
              {t('workingProcess.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
              {t('workingProcess.title')}
            </h2>
            <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary">
              {t('workingProcess.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {(t('workingProcess.steps') as unknown as { num: string; title: string; desc: string }[]).map((step, idx) => (
              <div
                key={idx}
                className="relative bg-brand-bg dark:bg-dark-surface p-6 rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-3"
              >
                <span className="text-2xl font-serif font-bold text-brand-gold block">
                  {step.num}
                </span>
                <h3 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18.7 LEADERSHIP */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-dark-card p-8 sm:p-12 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <img
                src="https://www.unitedjuristlaw.com/_next/image?url=%2Fteam%2Fchen.jpg&w=640&q=75"
                alt="KHEM Chen Attorney at Law"
                className="w-full h-80 sm:h-96 object-cover object-top rounded-2xl shadow-md"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                {t('leadershipSection.badge')}
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-text dark:text-dark-text">
                {t('leadershipSection.title')}
              </h2>
              <p className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold uppercase tracking-wider">
                {t('leadershipSection.subtitle')}
              </p>
              <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {t('leadershipSection.bio')}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/team/khem-chen"
                  className="px-5 py-2.5 text-xs font-semibold text-brand-text dark:text-dark-text bg-brand-goldSoft/60 dark:bg-dark-elevated rounded-xl border border-brand-borderLight dark:border-dark-border hover:border-brand-gold transition-colors"
                >
                  {t('leadershipSection.viewProfile')}
                </Link>
                <Link
                  to="/consultation"
                  className="px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
                >
                  {t('leadershipSection.scheduleConsultation')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18.8 CLIENT COMMITMENT */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-card border-t border-b border-brand-borderLight dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
              {t('clientCommitment.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
              {t('clientCommitment.title')}
            </h2>
            <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary">
              {t('clientCommitment.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t('clientCommitment.points') as unknown as { title: string; desc: string }[]).map((point, idx) => (
              <div
                key={idx}
                className="bg-brand-bg dark:bg-dark-surface p-6 rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-3"
              >
                <ShieldCheck className="w-8 h-8 text-brand-gold" />
                <h3 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                  {point.title}
                </h3>
                <p className="text-xs text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18.9 FEE PREVIEW */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                {t('feePreview.badge')}
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-text dark:text-dark-text mt-1">
                {t('feePreview.title')}
              </h2>
            </div>
            <Link
              to="/fees"
              className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline inline-flex items-center gap-1"
            >
              <span>{t('feePreview.viewAllFees')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feesData.slice(0, 3).map((fee) => (
              <div
                key={fee.id}
                className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-4 shadow-subtle"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  {localize(fee.serviceCategoryName)}
                </span>
                <h3 className="text-base font-serif font-bold text-brand-text dark:text-dark-text">
                  {localize(fee.serviceName)}
                </h3>
                <div className="text-2xl font-bold text-brand-goldDeep dark:text-dark-gold">
                  {fee.feeAmount[language]}
                </div>
                <p className="text-xs text-brand-textMuted dark:text-dark-textSecondary">
                  {localize(fee.notes)}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-amber-700 bg-amber-50 dark:bg-dark-surface dark:text-amber-300 p-4 rounded-xl border border-amber-200 dark:border-amber-900/40 mt-8">
            {t('feePreview.disclaimerNotice')}
          </p>
        </div>
      </section>

      {/* 18.10 OFFICE PREVIEW */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-card border-t border-b border-brand-borderLight dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                {t('officePreview.badge')}
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-text dark:text-dark-text">
                {t('officePreview.title')}
              </h2>

              <div className="space-y-4 text-sm text-brand-textSecondary dark:text-dark-textSecondary">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-text dark:text-dark-text block">
                      {t('officePreview.addressLabel')}
                    </span>
                    <span>{firmConfig.address.full[language]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-text dark:text-dark-text block">
                      {t('officePreview.phoneLabel')}
                    </span>
                    <span>069 240 624 / 077 662 424</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-text dark:text-dark-text block">
                      {t('officePreview.hoursLabel')}
                    </span>
                    <span>{firmConfig.businessHours[language].weekdays}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Sen+Sok+Phnom+Penh+Cambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t('officePreview.getDirections')}</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2.5 text-xs font-semibold text-brand-text dark:text-dark-text bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border hover:border-brand-gold rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : t('officePreview.copyAddress')}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 h-80 sm:h-96 rounded-3xl overflow-hidden border border-brand-borderLight dark:border-dark-border shadow-card relative">
              <iframe
                title="United Jurist Office Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7505374828135!2d104.8741!3d11.5705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951a37c0411b5%3A0xb3ff76c4!2sSen%20Sok%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 18.11 CONSULTATION CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-goldSoft via-brand-ivory to-brand-goldSoft dark:from-dark-elevated dark:via-dark-card dark:to-dark-elevated border-t border-brand-borderLight dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
            {t('consultationBanner.title')}
          </h2>
          <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
            {t('consultationBanner.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/consultation"
              className="px-8 py-3.5 text-sm font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
            >
              {t('consultationBanner.button')}
            </Link>
            <a
              href={`tel:${firmConfig.phones[0].value}`}
              className="px-6 py-3.5 text-sm font-semibold text-brand-text dark:text-dark-text bg-white dark:bg-dark-card border border-brand-borderStrong dark:border-dark-border hover:border-brand-gold rounded-xl transition-colors"
            >
              {t('consultationBanner.callDirectly')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
