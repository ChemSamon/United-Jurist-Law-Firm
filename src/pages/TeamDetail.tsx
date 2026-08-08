import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { teamData } from '../data/teamData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TeamDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, localize } = useLanguage();

  const member = teamData.find((m) => m.slug === slug) || teamData[0];

  return (
    <div className="space-y-0">
      <PageHero
        badge={localize(member.position)}
        title={localize(member.name)}
        subtitle="Bar Association Licensed Cambodian Attorney-at-Law"
        breadcrumbs={[
          { label: t('nav.team'), url: '/team' },
          { label: localize(member.name) },
        ]}
      />

      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-dark-card p-6 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6">
                <img
                  src={member.portraitUrl}
                  alt={localize(member.name)}
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div>
                  <h3 className="text-xl font-serif font-bold text-brand-text dark:text-dark-text">
                    {localize(member.name)}
                  </h3>
                  <span className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold block mt-0.5">
                    {localize(member.position)}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-brand-textSecondary dark:text-dark-textSecondary border-t border-brand-borderLight dark:border-dark-border pt-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Bar Association of the Kingdom of Cambodia</span>
                  </div>
                </div>

                <Link
                  to="/consultation"
                  className="block w-full py-3 text-center text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-4">
                <h3 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                  Executive Profile & Legal Practice
                </h3>
                <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {localize(member.biography)}
                </p>
              </div>

              {member.practiceAreas && (
                <div className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                    Core Legal Practice Areas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {member.practiceAreas.map((pa, idx) => (
                      <div key={idx} className="p-4 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-brand-text dark:text-dark-text">
                          {localize(pa)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
