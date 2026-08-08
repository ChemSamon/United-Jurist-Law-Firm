import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { galleryImages } from '../../data/galleryData';
import { OfficeGalleryLightbox } from './OfficeGalleryLightbox';
import { Maximize2 } from 'lucide-react';

export const OfficeGallerySection: React.FC = () => {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg border-t border-b border-brand-borderLight dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
            United Jurist Law Firm
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text">
            {t('aboutPage.galleryTitle')}
          </h2>
          <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary">
            {t('aboutPage.gallerySubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-brand-borderLight dark:border-dark-border shadow-subtle hover:shadow-gold transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.caption[language]}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <p className="text-xs text-white font-medium line-clamp-2 leading-relaxed">
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

      <OfficeGalleryLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
