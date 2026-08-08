import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '../../contexts/LanguageContext';
import { servicesData } from '../../data/servicesData';
import { Toast } from '../common/Toast';
import { AlertCircle, Send, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  companyName: z.string().optional(),
  phone: z.string().min(8, { message: 'Please enter a valid phone number' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  preferredLanguage: z.enum(['en', 'km']),
  serviceCategory: z.string().min(1, { message: 'Please select a practice area' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(15, { message: 'Please describe your matter (min 15 characters)' }),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the legal relationship disclaimer',
  }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const { language, t, localize } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredLanguage: language,
      consent: false,
    },
  });

  const messageValue = watch('message', '');

  const onSubmit = async (_data: ContactFormInputs) => {
    setIsSubmitting(true);
    // Simulate API network submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setToastMessage(t('contactPage.successTitle'));
    setShowToast(true);
    reset();
  };

  return (
    <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl shadow-card border border-brand-borderLight dark:border-dark-border">
      <Toast message={toastMessage} isVisible={showToast} onClose={() => setShowToast(false)} />

      <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-text dark:text-dark-text mb-2">
        {t('contactPage.formTitle')}
      </h3>

      {/* Lawyer-Client Relationship Disclaimer Notice */}
      <div className="mb-6 p-4 bg-amber-50 dark:bg-dark-elevated border border-amber-200 dark:border-amber-900/40 rounded-xl flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
          {t('contactPage.warningNotice')}
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-brand-text dark:text-dark-text">
            {t('contactPage.successTitle')}
          </h4>
          <p className="text-sm text-brand-textSecondary dark:text-dark-textSecondary max-w-md mx-auto">
            {t('contactPage.successText')}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 text-xs font-semibold text-neutral-900 bg-brand-gold hover:bg-brand-goldBright rounded-xl transition-colors mt-4"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                {t('contactPage.fullName')} *
              </label>
              <input
                type="text"
                {...register('fullName')}
                className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
                placeholder="e.g. Sok Dara / John Smith"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                {t('contactPage.companyName')}
              </label>
              <input
                type="text"
                {...register('companyName')}
                className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
                placeholder="Company Name (Optional)"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                {t('contactPage.phone')} *
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
                placeholder="e.g. 069 240 624"
              />
              {errors.phone && (
                <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                {t('contactPage.email')} *
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
                placeholder="name@example.com"
              />
              {errors.email && (
                <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Practice Area Selection */}
            <div>
              <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                {t('contactPage.service')} *
              </label>
              <select
                {...register('serviceCategory')}
                className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <option value="">-- Select Practice Area --</option>
                {servicesData.map((s) => (
                  <option key={s.id} value={s.category}>
                    {localize(s.title)}
                  </option>
                ))}
              </select>
              {errors.serviceCategory && (
                <p className="text-xs text-rose-600 mt-1">{errors.serviceCategory.message}</p>
              )}
            </div>

            {/* Preferred Language */}
            <div>
              <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
                {t('contactPage.language')}
              </label>
              <select
                {...register('preferredLanguage')}
                className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <option value="en">English</option>
                <option value="km">ខ្មែរ (Khmer)</option>
              </select>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-semibold text-brand-text dark:text-dark-text mb-1">
              {t('contactPage.subject')} *
            </label>
            <input
              type="text"
              {...register('subject')}
              className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              placeholder="Brief summary of your legal matter"
            />
            {errors.subject && (
              <p className="text-xs text-rose-600 mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Area & Character Counter */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-brand-text dark:text-dark-text">
                {t('contactPage.message')} *
              </label>
              <span className="text-[11px] text-brand-textMuted dark:text-dark-textSecondary">
                {messageValue.length} / 1000 chars
              </span>
            </div>
            <textarea
              rows={4}
              maxLength={1000}
              {...register('message')}
              className="w-full px-3.5 py-2.5 bg-brand-bg dark:bg-dark-surface border border-brand-borderLight dark:border-dark-border rounded-xl text-sm text-brand-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-gold"
              placeholder="Provide relevant details regarding your legal situation or query..."
            />
            {errors.message && (
              <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                {...register('consent')}
                className="mt-1 rounded text-brand-gold focus:ring-brand-gold w-4 h-4"
              />
              <span className="text-xs text-brand-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {t('contactPage.consent')}
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-rose-600 mt-1">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 font-semibold text-sm text-neutral-900 bg-brand-gold hover:bg-brand-goldBright disabled:opacity-50 rounded-xl shadow-gold transition-all duration-200 flex items-center justify-center gap-2 mt-4"
          >
            {isSubmitting ? (
              <span>{t('contactPage.submitting')}</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{t('contactPage.submit')}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
