import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../data/servicesData';
import { feesData } from '../data/feesData';
import { CheckCircle2, ChevronDown, FileText, HelpCircle } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, localize, language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <button onClick={() => navigate('/services')} className="px-4 py-2 bg-brand-gold rounded-xl text-neutral-900 text-xs font-semibold">
          Back to All Services
        </button>
      </div>
    );
  }

  const relatedFees = feesData.filter((f) => f.serviceCategory.includes(service.category) || service.category.includes(f.serviceCategory));

  return (
    <div className="space-y-0">
      <PageHero
        badge={localize(service.categoryName)}
        title={localize(service.title)}
        subtitle={localize(service.shortDescription)}
        breadcrumbs={[
          { label: t('nav.services'), url: '/services' },
          { label: localize(service.title) },
        ]}
      />

      <section className="py-16 md:py-24 bg-brand-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div id="overview" className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-4">
                <h2 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                  Overview & Cambodian Legal Basis
                </h2>
                <p className="text-sm sm:text-base text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  {localize(service.overview)}
                </p>
              </div>

              {/* How We Assist */}
              <div id="assistance" className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6">
                <h2 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                  How United Jurist Assists Your Practice
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.assistancePoints.map((point, idx) => (
                    <div key={idx} className="p-4 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-text dark:text-dark-text font-medium leading-relaxed">
                        {localize(point)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Work */}
              <div id="scope" className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-4">
                <h2 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                  Scope of Work & Deliverables
                </h2>
                <ul className="space-y-3">
                  {service.scopeOfWork.map((scope, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary">
                      <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0 mt-2" />
                      <span>{localize(scope)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents */}
              <div id="documents" className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-4">
                <h2 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                  Required Initial Client Documents
                </h2>
                <div className="space-y-3">
                  {service.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="p-3.5 bg-brand-goldSoft/40 dark:bg-dark-surface rounded-xl border border-brand-gold/20 flex items-start gap-3">
                      <FileText className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-text dark:text-dark-text">{localize(doc)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Process Timeline */}
              <div id="process" className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6">
                <h2 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                  Step-by-Step Legal Process
                </h2>
                <div className="space-y-4">
                  {service.workingProcess.map((proc) => (
                    <div key={proc.step} className="p-4 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-brand-gold text-neutral-900 font-serif font-bold flex items-center justify-center shrink-0 text-sm">
                        0{proc.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-brand-text dark:text-dark-text">
                          {localize(proc.title)}
                        </h4>
                        <p className="text-xs text-brand-textSecondary dark:text-dark-textSecondary mt-1 leading-relaxed">
                          {localize(proc.description)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Fees Preview */}
              {relatedFees.length > 0 && (
                <div id="fees" className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
                      Related Service Fees
                    </h2>
                    <Link to="/fees" className="text-xs font-semibold text-brand-goldDeep dark:text-dark-gold hover:underline">
                      View Full Fee Schedule
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {relatedFees.map((fee) => (
                      <div key={fee.id} className="p-4 bg-brand-bg dark:bg-dark-surface rounded-2xl border border-brand-borderLight dark:border-dark-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-semibold text-brand-text dark:text-dark-text">{localize(fee.serviceName)}</h4>
                          <span className="text-xs text-brand-textMuted dark:text-dark-textSecondary">{localize(fee.notes)}</span>
                        </div>
                        <span className="text-base font-bold text-brand-goldDeep dark:text-dark-gold shrink-0">{fee.feeAmount[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Accordion */}
              {service.faqs.length > 0 && (
                <div id="faqs" className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6">
                  <h2 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-gold" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-brand-borderLight dark:border-dark-border rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                          className="w-full p-4 bg-brand-bg dark:bg-dark-surface text-left flex items-center justify-between font-semibold text-xs sm:text-sm text-brand-text dark:text-dark-text"
                        >
                          <span>{localize(faq.question)}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaqIndex === idx && (
                          <div className="p-4 text-xs sm:text-sm text-brand-textSecondary dark:text-dark-textSecondary bg-white dark:bg-dark-card border-t border-brand-borderLight dark:border-dark-border leading-relaxed">
                            {localize(faq.answer)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}


            </div>

            {/* Desktop Sticky Table of Contents Sidebar */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 bg-white dark:bg-dark-card p-6 rounded-3xl border border-brand-borderLight dark:border-dark-border shadow-card space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text dark:text-dark-text border-b border-brand-borderLight dark:border-dark-border pb-3">
                  On This Page
                </h3>
                <nav className="space-y-2 text-xs font-medium text-brand-textSecondary dark:text-dark-textSecondary">
                  <a href="#overview" className="block p-2 rounded-lg hover:bg-brand-goldSoft/60 hover:text-brand-gold transition-colors">1. Overview & Legal Basis</a>
                  <a href="#assistance" className="block p-2 rounded-lg hover:bg-brand-goldSoft/60 hover:text-brand-gold transition-colors">2. How We Assist</a>
                  <a href="#scope" className="block p-2 rounded-lg hover:bg-brand-goldSoft/60 hover:text-brand-gold transition-colors">3. Scope of Work</a>
                  <a href="#documents" className="block p-2 rounded-lg hover:bg-brand-goldSoft/60 hover:text-brand-gold transition-colors">4. Required Documents</a>
                  <a href="#process" className="block p-2 rounded-lg hover:bg-brand-goldSoft/60 hover:text-brand-gold transition-colors">5. Step-by-Step Process</a>
                  <a href="#fees" className="block p-2 rounded-lg hover:bg-brand-goldSoft/60 hover:text-brand-gold transition-colors">6. Related Fees</a>
                  <a href="#faqs" className="block p-2 rounded-lg hover:bg-brand-goldSoft/60 hover:text-brand-gold transition-colors">7. FAQs</a>
                </nav>

                <div className="pt-4 border-t border-brand-borderLight dark:border-dark-border space-y-3">
                  <Link
                    to="/consultation"
                    className="block w-full py-3 text-center text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold transition-colors"
                  >
                    Request Consultation
                  </Link>
                  <a
                    href="tel:+85569240624"
                    className="block w-full py-2.5 text-center text-xs font-semibold text-brand-text dark:text-dark-text bg-brand-bg dark:bg-dark-surface border border-brand-borderLight rounded-xl hover:border-brand-gold transition-colors"
                  >
                    Call 069 240 624
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Consultation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white dark:bg-dark-card border-t border-brand-borderLight dark:border-dark-border shadow-2xl flex items-center justify-between">
        <span className="text-xs font-bold text-brand-text dark:text-dark-text line-clamp-1">{localize(service.title)}</span>
        <Link to="/consultation" className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-brand-gold rounded-xl shadow-gold shrink-0">
          Book Consultation
        </Link>
      </div>
    </div>
  );
};
