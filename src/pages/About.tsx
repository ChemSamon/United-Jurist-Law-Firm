import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { firmConfig } from '../config/firmConfig';
import type { GalleryImage } from '../components/common/OfficeGalleryLightbox';
import { OfficeGalleryLightbox } from '../components/common/OfficeGalleryLightbox';
import { ShieldCheck, Target, Eye, Award, Users, ChevronRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    caption: { en: 'Executive Meeting Room & Client Advisory Area', km: 'បន្ទប់ប្រជុំប្រតិបត្តិ និងកន្លែងទទួលអតិថិជន' },
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    caption: { en: 'Phnom Penh Office Building Exterior in Sen Sok', km: 'ទិដ្ឋភាពអគារការិយាល័យនៅខណ្ឌសែនសុខ ភ្នំពេញ' },
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    caption: { en: 'Legal Research & Contract Documentation Workstation', km: 'កន្លែងធ្វើការស្រាវជ្រាវ និងរៀបចំឯកសារកិច្ចសន្យា' },
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200',
    caption: { en: 'Client Legal Signing & Attorney Witnessing Suite', km: 'បន្ទប់ចុះហត្ថលេខា និងធ្វើសាក្សីដោយមេធាវី' },
  },
];

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-0">
      <PageHero
        badge={t('aboutPage.estBadge')}
        title={t('aboutPage.title')}
        subtitle={t('aboutPage.subtitle')}
        breadcrumbs={[{ label: t('nav.about') }]}
      />

      {/* Firm Overview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-card border-b border-brand-borderLight dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
                Registered & Licensed Practice
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-text dark:text-dark-text leading-tight">
                Established in 2024 with Unwavering Ethics
              </h2>
              <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                United Jurist Law Firm (ក្រុមហ៊ុនមេធាវី យូណាយធីត ជូរីស) is a full-service Cambodian law office incorporated in 2024. Licensed by the Bar Association of the Kingdom of Cambodia, our firm provides legal advisory across commercial, financial, property, and dispute resolution matters.
              </p>
              <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                We take pride in building transparent, responsive, and long-term legal partnerships with Cambodian enterprises, foreign investors, financial institutions, and private individuals.
              </p>

              <div className="p-4 bg-brand-goldSoft/50 dark:bg-dark-surface rounded-2xl border border-brand-gold/30">
                <p className="text-xs text-amber-800 dark:text-amber-300 font-mono">
                  Developer Content Note: {firmConfig.developerNotes.licensing}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-2">
                <span className="text-3xl font-serif font-bold text-brand-gold block">2024</span>
                <span className="text-xs font-semibold text-brand-text dark:text-dark-text block">Incorporation Year</span>
                <p className="text-xs text-brand-textMuted dark:text-dark-textSecondary">Active Cambodian law practice</p>
              </div>

              <div className="p-6 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-2">
                <ShieldCheck className="w-8 h-8 text-brand-gold" />
                <span className="text-xs font-semibold text-brand-text dark:text-dark-text block">Bar Licensed</span>
                <p className="text-xs text-brand-textMuted dark:text-dark-textSecondary">Kingdom of Cambodia</p>
              </div>

              <div className="p-6 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-2">
                <Award className="w-8 h-8 text-brand-gold" />
                <span className="text-xs font-semibold text-brand-text dark:text-dark-text block">11 Services</span>
                <p className="text-xs text-brand-textMuted dark:text-dark-textSecondary">Comprehensive legal practice</p>
              </div>

              <div className="p-6 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-2">
                <Users className="w-8 h-8 text-brand-gold" />
                <span className="text-xs font-semibold text-brand-text dark:text-dark-text block">Bilingual</span>
                <p className="text-xs text-brand-textMuted dark:text-dark-textSecondary">Khmer & English</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-4">
              <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-elevated text-brand-gold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                {t('aboutPage.missionTitle')}
              </h3>
              <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {t('aboutPage.missionText')}
              </p>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-4">
              <div className="p-3 w-fit rounded-xl bg-brand-goldSoft dark:bg-dark-elevated text-brand-gold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                {t('aboutPage.visionTitle')}
              </h3>
              <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {t('aboutPage.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-card border-t border-b border-brand-borderLight dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
              {t('aboutPage.coreValuesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('aboutPage.values') as unknown as { name: string; desc: string }[]).map((val, idx) => (
              <div
                key={idx}
                className="bg-brand-bg dark:bg-dark-surface p-6 rounded-2xl border border-brand-borderLight dark:border-dark-border space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-gold text-neutral-900 font-serif font-bold flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-text dark:text-dark-text">
                  {val.name}
                </h3>
                <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Gallery Section with Lightbox */}
      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
              {t('aboutPage.galleryTitle')}
            </h2>
            <p className="text-sm text-brand-textSecondary dark:text-dark-textSecondary">
              {t('aboutPage.gallerySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-brand-borderLight dark:border-dark-border shadow-subtle"
              >
                <img
                  src={img.url}
                  alt={img.caption[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <p className="text-xs text-white font-medium line-clamp-2">
                    {img.caption[language]}
                  </p>
                  <span className="mt-2 text-[10px] uppercase font-bold text-brand-gold flex items-center gap-1">
                    <Maximize2 className="w-3 h-3" /> View Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficeGalleryLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      {/* Leadership CTA Link */}
      <section className="py-16 bg-white dark:bg-dark-card border-t border-brand-borderLight dark:border-dark-border text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-text dark:text-dark-text">
            Meet Our Legal Executive Leadership
          </h2>
          <p className="text-sm text-brand-textSecondary dark:text-dark-textSecondary">
            Learn more about Attorney KHEM Chen, Attorney-at-Law and President of United Jurist Law Firm.
          </p>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
          >
            <span>View Leadership Profile</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
