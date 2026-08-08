import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { ConsultationWizard } from '../components/forms/ConsultationWizard';

export const Consultation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      <PageHero
        badge="Legal Consultation"
        title={t('consultationPage.title')}
        subtitle={t('consultationPage.subtitle')}
        breadcrumbs={[{ label: t('nav.consultation') }]}
      />

      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationWizard />
        </div>
      </section>
    </div>
  );
};
