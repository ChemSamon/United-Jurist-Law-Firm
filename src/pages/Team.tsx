import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { teamData } from '../data/teamData';
import { firmConfig } from '../config/firmConfig';
import { ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Team: React.FC = () => {
  const { t, localize } = useLanguage();

  return (
    <div className="space-y-0">
      <PageHero
        badge="Firm Leadership"
        title={t('teamPage.title')}
        subtitle={t('teamPage.subtitle')}
        breadcrumbs={[{ label: t('nav.team') }]}
      />

      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-dark-card p-8 sm:p-12 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Portrait */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={member.portraitUrl}
                    alt={localize(member.name)}
                    className="w-full h-96 sm:h-[420px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 p-3 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md rounded-xl border border-brand-borderLight dark:border-dark-border">
                    <span className="text-xs font-bold text-brand-goldDeep dark:text-dark-gold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> Bar Licensed Attorney
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    {t('teamPage.leadershipTitle')}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text dark:text-dark-text mt-1">
                    {localize(member.name)}
                  </h2>
                  <p className="text-sm font-semibold text-brand-goldDeep dark:text-dark-gold mt-1">
                    {localize(member.position)}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {localize(member.biography)}
                </p>

                {/* Verified Practice Areas */}
                {member.practiceAreas && (
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-text dark:text-dark-text block">
                      Core Practice Areas
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.practiceAreas.map((pa, idx) => (
                        <div key={idx} className="p-2.5 bg-brand-bg dark:bg-dark-surface rounded-xl border border-brand-borderLight dark:border-dark-border flex items-center gap-2 text-xs text-brand-textSecondary dark:text-dark-textSecondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                          <span>{localize(pa)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Developer Mode Feedback Notice */}
                {firmConfig.flags.developerMode && (
                  <div className="p-3 bg-amber-50 dark:bg-dark-surface rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300 font-mono">
                    Developer Mode: {t('teamPage.missingDetailsNotice')}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-brand-borderLight dark:border-dark-border">
                  <Link
                    to={`/team/${member.slug}`}
                    className="px-6 py-3 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/consultation"
                    className="px-6 py-3 text-xs font-semibold text-brand-text dark:text-dark-text bg-brand-bg dark:bg-dark-surface border border-brand-borderLight hover:border-brand-gold rounded-xl transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
