import type { LocalizedString } from '../types';

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: 'general' | 'services' | 'fees' | 'consultation';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-licensed',
    question: {
      en: 'Is United Jurist Law Firm officially licensed in Cambodia?',
      km: 'តើក្រុមហ៊ុនមេធាវី យូណាយធីត ជូរីស មានអាជ្ញាប័ណ្ណផ្លូវការនៅកម្ពុជាដែរឬទេ?',
    },
    answer: {
      en: 'Yes, United Jurist Law Firm is incorporated in Cambodia and its attorneys are registered and licensed by the Bar Association of the Kingdom of Cambodia.',
      km: 'បាទ/ចាស ក្រុមហ៊ុនមេធាវី យូណាយធីត ជូរីស ត្រូវបានបង្កើតឡើង និងចុះបញ្ជីយ៉ាងត្រឹមត្រូវនៅកម្ពុជា ហើយមេធាវីទាំងអស់មានអាជ្ញាប័ណ្ណពេញលេញពីគណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជា។',
    },
    category: 'general',
  },
  {
    id: 'faq-location',
    question: {
      en: 'Where is the main office of United Jurist located?',
      km: 'តើការិយាល័យកណ្តាលរបស់ក្រុមហ៊ុន យូណាយធីត ជូរីស ស្ថិតនៅទីណា?',
    },
    answer: {
      en: 'Our primary office is located at #24, Street Borey 08, Tumnup Village, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh, Cambodia.',
      km: 'ការិយាល័យកណ្តាលរបស់យើងស្ថិតនៅ ផ្ទះលេខ ២៤ ផ្លូវបុរី ០៨ ភូមិទំនប់ សង្កាត់ភ្នំពេញថ្មី ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ កម្ពុជា។',
    },
    category: 'general',
  },
  {
    id: 'faq-languages',
    question: {
      en: 'What languages does your legal team support?',
      km: 'តើក្រុមការងារច្បាប់របស់អ្នកផ្តល់ការប្រឹក្សាជាភាសាអ្វីខ្លះ?',
    },
    answer: {
      en: 'We provide full legal consultation and document drafting in both Khmer and English.',
      km: 'យើងផ្តល់ការប្រឹក្សាយោបល់ផ្នែកច្បាប់ និងការរៀបចំសេចក្តីព្រាងឯកសារយ៉ាងពេញលេញជាភាសាខ្មែរ និងភាសាអង់គ្លេស។',
    },
    category: 'general',
  },
  {
    id: 'faq-first-consultation',
    question: {
      en: 'How do I schedule an initial legal consultation?',
      km: 'តើខ្ញុំអាចកក់ការប្រឹក្សាយោបល់ច្បាប់លើកដំបូងដោយរបៀបណា?',
    },
    answer: {
      en: 'You can request a consultation using our 4-step online consultation wizard, calling our office directly at 069 240 624 / 077 662 424, or submitting an inquiry via our contact form.',
      km: 'អ្នកអាចស្នើសុំការប្រឹក្សាយោបល់តាមរយៈទម្រង់កក់ ៤ ជំហានលើគេហទំព័រ ទូរស័ព្ទមកកាន់ការិយាល័យផ្ទាល់ 069 240 624 / 077 662 424 ឬផ្ញើសារតាមទម្រង់ទំនាក់ទំនង។',
    },
    category: 'consultation',
  },
  {
    id: 'faq-fee-binding',
    question: {
      en: 'Are the prices shown on the website automatically binding?',
      km: 'តើតម្លៃដែលបង្ហាញលើគេហទំព័រមានសុពលភាពចងកាតព្វកិច្ចដោយស្វ័យប្រវត្តិដែរឬទេ?',
    },
    answer: {
      en: 'No, published fee schedules are for general reference and subject to formal confirmation based on specific matter scope, government tariffs, and travel requirements.',
      km: 'ទេ កម្រៃសេវាដែលបានបោះពុម្ពផ្សាយ គឺសម្រាប់ជាព័ត៌មានយោងទូទៅ និងតម្រូវឲ្យមានការបញ្ជាក់តាមរយៈលិខិតសម្រង់តម្លៃផ្លូវការ ផ្អែកលើវិសាលភាពជាក់ស្តែង និងពន្ធរដ្ឋ។',
    },
    category: 'fees',
  },
];
