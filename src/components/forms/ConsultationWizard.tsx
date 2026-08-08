import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, Calendar, ShieldCheck, User, FileText, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { servicesData } from '../../data/servicesData';
import confetti from 'canvas-confetti';

export const ConsultationWizard: React.FC = () => {
  const { language, t, localize } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Form State across steps
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    preferredLanguage: language,
    serviceCategory: 'corporate-business-law',
    matterTitle: '',
    description: '',
    urgency: 'normal',
    knownDeadline: '',
    consultationType: 'office',
    preferredDate: '',
    preferredTime: '10:00',
    alternativeDate: '',
    consent: false,
  });

  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (stepErrors[field]) {
      setStepErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const errors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    } else if (currentStep === 2) {
      if (!formData.matterTitle.trim()) errors.matterTitle = 'Matter title is required';
      if (!formData.description.trim() || formData.description.length < 10) {
        errors.description = 'Please provide a brief description (min 10 chars)';
      }
    } else if (currentStep === 3) {
      if (!formData.preferredDate) errors.preferredDate = 'Please select a preferred date';
    } else if (currentStep === 4) {
      if (!formData.consent) errors.consent = 'You must acknowledge consent to submit';
    }

    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    setIsSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    // Generate simulated reference confirmation code
    const refCode = `UJL-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(refCode);
    setIsCompleted(true);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // Fallback if confetti fails
    }
  };

  return (
    <div className="bg-white dark:bg-dark-card p-6 sm:p-10 rounded-2xl shadow-card border border-brand-borderLight dark:border-dark-border max-w-3xl mx-auto">
      {/* Wizard Header Progress Bar */}
      {!isCompleted && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold">
              Step {step} of 4
            </span>
            <span className="text-xs text-brand-textMuted dark:text-dark-textSecondary">
              {step === 1 && t('consultationPage.step1')}
              {step === 2 && t('consultationPage.step2')}
              {step === 3 && t('consultationPage.step3')}
              {step === 4 && t('consultationPage.step4')}
            </span>
          </div>
          <div className="w-full h-2 bg-brand-goldSoft/60 dark:bg-dark-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-gold transition-all duration-300 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {isCompleted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-6"
        >
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-brand-text dark:text-dark-text">
              {t('consultationPage.confirmationTitle')}
            </h3>
            <p className="text-sm text-brand-textSecondary dark:text-dark-textSecondary mt-2 max-w-md mx-auto">
              {t('consultationPage.confirmationText')}
            </p>
          </div>

          <div className="p-4 bg-brand-goldSoft/50 dark:bg-dark-surface rounded-xl border border-brand-gold/30 max-w-xs mx-auto">
            <span className="text-xs text-brand-textMuted uppercase font-bold tracking-wider block">
              {t('consultationPage.confirmationCode')}
            </span>
            <span className="text-2xl font-mono font-bold text-brand-goldDeep dark:text-dark-gold mt-1 block">
              {confirmationCode}
            </span>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setIsCompleted(false);
                setStep(1);
              }}
              className="px-6 py-3 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl transition-colors shadow-gold"
            >
              Submit Another Request
            </button>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {/* Step 1: Contact Information */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-serif font-bold text-brand-text dark:text-dark-text flex items-center gap-2">
                <User className="w-5 h-5 text-brand-gold" />
                {t('consultationPage.step1')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    {t('contactPage.fullName')} *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    placeholder="e.g. Sok Dara"
                  />
                  {stepErrors.fullName && <p className="text-xs text-rose-600 mt-1">{stepErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    {t('contactPage.companyName')}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    {t('contactPage.phone')} *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    placeholder="069 240 624"
                  />
                  {stepErrors.phone && <p className="text-xs text-rose-600 mt-1">{stepErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    {t('contactPage.email')} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    placeholder="name@domain.com"
                  />
                  {stepErrors.email && <p className="text-xs text-rose-600 mt-1">{stepErrors.email}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Legal Matter Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-serif font-bold text-brand-text dark:text-dark-text flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-gold" />
                {t('consultationPage.step2')}
              </h3>

              <div>
                <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                  Practice Area / Category
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => updateField('serviceCategory', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {localize(s.title)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                  Matter Title *
                </label>
                <input
                  type="text"
                  value={formData.matterTitle}
                  onChange={(e) => updateField('matterTitle', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="e.g. Land Title Transfer in Sen Sok"
                />
                {stepErrors.matterTitle && <p className="text-xs text-rose-600 mt-1">{stepErrors.matterTitle}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                  Detailed Description *
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="Describe background context, key parties, and goals..."
                />
                {stepErrors.description && <p className="text-xs text-rose-600 mt-1">{stepErrors.description}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    Urgency Level
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => updateField('urgency', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  >
                    <option value="normal">{t('consultationPage.urgencyNormal')}</option>
                    <option value="urgent">{t('consultationPage.urgencyUrgent')}</option>
                    <option value="immediate">{t('consultationPage.urgencyImmediate')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    Known Deadline (If any)
                  </label>
                  <input
                    type="date"
                    value={formData.knownDeadline}
                    onChange={(e) => updateField('knownDeadline', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Appointment Preferences */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-serif font-bold text-brand-text dark:text-dark-text flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-gold" />
                {t('consultationPage.step3')}
              </h3>

              <div>
                <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-2">
                  Consultation Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'office', label: t('consultationPage.typeOffice') },
                    { id: 'telephone', label: t('consultationPage.typePhone') },
                    { id: 'video', label: t('consultationPage.typeVideo') },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => updateField('consultationType', item.id)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        formData.consultationType === item.id
                          ? 'border-brand-gold bg-brand-goldSoft dark:bg-dark-elevated text-brand-goldDeep dark:text-dark-gold ring-1 ring-brand-gold'
                          : 'border-brand-borderLight dark:border-dark-border bg-brand-bg dark:bg-dark-surface text-brand-textSecondary'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => updateField('preferredDate', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                  {stepErrors.preferredDate && <p className="text-xs text-rose-600 mt-1">{stepErrors.preferredDate}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => updateField('preferredTime', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  >
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="16:30">04:30 PM</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Summary Review & Legal Consent */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-serif font-bold text-brand-text dark:text-dark-text flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
                {t('consultationPage.step4')}
              </h3>

              <div className="p-4 bg-brand-goldSoft/30 dark:bg-dark-surface rounded-xl border border-brand-borderLight dark:border-dark-border space-y-3 text-xs">
                <div className="flex justify-between border-b border-brand-borderLight/60 pb-2">
                  <span className="text-brand-textMuted">Full Name:</span>
                  <span className="font-semibold text-brand-text dark:text-dark-text">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-brand-borderLight/60 pb-2">
                  <span className="text-brand-textMuted">Contact Info:</span>
                  <span className="font-semibold text-brand-text dark:text-dark-text">{formData.phone} | {formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-brand-borderLight/60 pb-2">
                  <span className="text-brand-textMuted">Matter Title:</span>
                  <span className="font-semibold text-brand-text dark:text-dark-text">{formData.matterTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-textMuted">Requested Appointment:</span>
                  <span className="font-semibold text-brand-goldDeep dark:text-dark-gold">{formData.preferredDate} at {formData.preferredTime}</span>
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => updateField('consent', e.target.checked)}
                    className="mt-1 rounded text-brand-gold focus:ring-brand-gold w-4 h-4"
                  />
                  <span className="text-xs text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                    {t('contactPage.consent')}
                  </span>
                </label>
                {stepErrors.consent && <p className="text-xs text-rose-600 mt-1">{stepErrors.consent}</p>}
              </div>
            </motion.div>
          )}

          {/* Navigation Control Buttons */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-brand-borderLight dark:border-dark-border">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2.5 text-xs font-semibold text-brand-textSecondary dark:text-dark-textSecondary hover:text-brand-text dark:hover:text-dark-text flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {t('consultationPage.back')}
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl shadow-gold flex items-center gap-1 transition-colors"
              >
                {t('consultationPage.next')}
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-3 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright disabled:opacity-50 rounded-xl shadow-gold flex items-center gap-2 transition-colors"
              >
                {isSubmitting ? (
                  <span>{t('contactPage.submitting')}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t('consultationPage.submit')}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};
