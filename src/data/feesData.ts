import type { FeeItem } from '../types';

export const feesData: FeeItem[] = [
  // 1. Legal Documents, Legal Opinion and Witnessing
  {
    id: 'fee-witnessing-standard',
    serviceCategory: 'documents-witnessing',
    serviceCategoryName: {
      en: 'Legal Documents & Witnessing',
      km: 'លិខិតបទដ្ឋានច្បាប់ និងការធ្វើសាក្សី',
    },
    serviceName: {
      en: 'Standard Legal Document Witnessing & Certification',
      km: 'ការធ្វើសាក្សី និងបញ្ជាក់លើលិខិតបទដ្ឋានច្បាប់ (កម្រិតស្តង់ដារ)',
    },
    feeAmount: {
      en: '$150 – $300',
      km: '១៥០$ – ៣០០$',
    },
    unit: {
      en: 'Per Document / Signature',
      km: 'ក្នុងមួយឯកសារ / ហត្ថលេខា',
    },
    location: 'phnom-penh',
    locationName: {
      en: 'Phnom Penh Main Office',
      km: 'ការិយាល័យកណ្តាល ភ្នំពេញ',
    },
    speed: 'standard',
    estimatedDuration: {
      en: '1 – 2 Business Days',
      km: '១ – ២ ថ្ងៃធ្វើការ',
    },
    notes: {
      en: 'Includes attorney review of document capacity, identity verification, and formal signature witnessing.',
      km: 'រាប់បញ្ចូលទាំងការពិនិត្យសមត្ថភាពផ្លូវច្បាប់លើឯកសារដោយមេធាវី ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ និងការធ្វើសាក្សីលើហត្ថលេខា។',
    },
    verified: true,
    requiresReview: true,
  },
  {
    id: 'fee-legal-opinion-standard',
    serviceCategory: 'documents-witnessing',
    serviceCategoryName: {
      en: 'Legal Documents & Witnessing',
      km: 'លិខិតបទដ្ឋានច្បាប់ និងការធ្វើសាក្សី',
    },
    serviceName: {
      en: 'Formal Attorney Legal Opinion (Corporate / Loan Facility)',
      km: 'លិខិតមតិផ្នែកច្បាប់ផ្លូវការពីមេធាវី (ក្រុមហ៊ុន / ឥណទានធនាគារ)',
    },
    feeAmount: {
      en: '$800 – $2,500',
      km: '៨០០$ – ២,៥០០$',
    },
    unit: {
      en: 'Per Opinion Letter',
      km: 'ក្នុងមួយលិខិតមតិ',
    },
    location: 'all',
    locationName: {
      en: 'Nationwide & International',
      km: 'ទូទាំងប្រទេស និងអន្តរជាតិ',
    },
    speed: 'both',
    estimatedDuration: {
      en: '3 – 7 Business Days',
      km: '៣ – ៧ ថ្ងៃធ្វើការ',
    },
    notes: {
      en: 'Formal opinion letter signed by licensed Attorney-at-Law. Fee varies depending on complexity and statutory scope.',
      km: 'លិខិតមតិផ្លូវការ ចុះហត្ថលេខាដោយមេធាវីមានអាជ្ញាប័ណ្ណ។ កម្រៃសេវាប្រែប្រួលតាមភាពស្មុគស្មាញ និងវិសាលភាពច្បាប់។',
    },
    verified: true,
    requiresReview: true,
  },

  // 2. Witnessing and Security Documents
  {
    id: 'fee-security-doc-witnessing',
    serviceCategory: 'security-documents',
    serviceCategoryName: {
      en: 'Security Documents Witnessing',
      km: 'ការធ្វើសាក្សីលើឯកសារធានាកាតព្វកិច្ច',
    },
    serviceName: {
      en: 'Loan Facility & Security Contract Attorney Witnessing',
      km: 'ការធ្វើសាក្សីដោយមេធាវីលើកិច្ចព្រមព្រៀងឥណទាន និងកិច្ចសន្យាធានា',
    },
    feeAmount: {
      en: '$300 – $800',
      km: '៣០០$ – ៨០០$',
    },
    unit: {
      en: 'Per Security Contract Set',
      km: 'ក្នុងមួយសំណុំកិច្ចសន្យាធានា',
    },
    location: 'phnom-penh',
    locationName: {
      en: 'Phnom Penh Office / On-site',
      km: 'ការិយាល័យភ្នំពេញ / ចុះដល់ទីតាំង',
    },
    speed: 'standard',
    estimatedDuration: {
      en: '1 – 2 Business Days',
      km: '១ – ២ ថ្ងៃធ្វើការ',
    },
    notes: {
      en: 'Comprehensive execution witnessing for borrowers, guarantors, and banking representatives.',
      km: 'ការធ្វើសាក្សីពេញលេញលើការចុះហត្ថលេខាសម្រាប់អ្នកខ្ចី អ្នកធានា និងតំណាងធនាគារ។',
    },
    verified: true,
    requiresReview: true,
  },

  // 3. Hypothec Registration
  {
    id: 'fee-hypothec-phnom-penh',
    serviceCategory: 'hypothec-registration',
    serviceCategoryName: {
      en: 'Hypothec Registration',
      km: 'ការចុះបញ្ជីហ៊ីប៉ូតែច',
    },
    serviceName: {
      en: 'Hypothec Registration at Cadastral Office (Phnom Penh)',
      km: 'ការចុះបញ្ជីហ៊ីប៉ូតែចនៅការិយាល័យសុរិយោដី (រាជធានីភ្នំពេញ)',
    },
    feeAmount: {
      en: '$450 – $750',
      km: '៤៥០$ – ៧៥០$',
    },
    unit: {
      en: 'Per Title Certificate',
      km: 'ក្នុងមួយប័ណ្ណកម្មសិទ្ធិ',
    },
    location: 'phnom-penh',
    locationName: {
      en: 'Phnom Penh Municipality',
      km: 'រាជធានីភ្នំពេញ',
    },
    speed: 'standard',
    estimatedDuration: {
      en: '10 – 15 Business Days',
      km: '១០ – ១៥ ថ្ងៃធ្វើការ',
    },
    notes: {
      en: 'Excludes official government cadastral service fees and taxes. Standard processing timeline.',
      km: 'មិនរាប់បញ្ចូលកម្រៃសេវាសាធារណៈផ្លូវការរបស់រដ្ឋ និងពន្ធ។ រយៈពេលដំណើរការស្តង់ដារ។',
    },
    verified: true,
    requiresReview: true,
  },
  {
    id: 'fee-hypothec-province',
    serviceCategory: 'hypothec-registration',
    serviceCategoryName: {
      en: 'Hypothec Registration',
      km: 'ការចុះបញ្ជីហ៊ីប៉ូតែច',
    },
    serviceName: {
      en: 'Hypothec Registration at Provincial Cadastral Offices',
      km: 'ការចុះបញ្ជីហ៊ីប៉ូតែចនៅការិយាល័យសុរិយោដីបណ្តាខេត្ត',
    },
    feeAmount: {
      en: '$600 – $1,200',
      km: '៦០០$ – ១,២០០$',
    },
    unit: {
      en: 'Per Title Certificate',
      km: 'ក្នុងមួយប័ណ្ណកម្មសិទ្ធិ',
    },
    location: 'provinces',
    locationName: {
      en: 'Provincial Authorities',
      km: 'បណ្តាខេត្ត',
    },
    speed: 'both',
    estimatedDuration: {
      en: '15 – 25 Business Days',
      km: '១៥ – ២៥ ថ្ងៃធ្វើការ',
    },
    notes: {
      en: 'Travel expenses to provincial cadastral offices may apply separately based on geographic distance.',
      km: 'កម្រៃធ្វើដំណើរទៅកាន់ការិយាល័យសុរិយោដីខេត្តអាចត្រូវបានគិតបន្ថែម អាស្រ័យលើចម្ងាយភូមិសាស្ត្រ។',
    },
    verified: true,
    requiresReview: true,
  },

  // 4. Security Registration and SETFO
  {
    id: 'fee-setfo-registration',
    serviceCategory: 'setfo-security',
    serviceCategoryName: {
      en: 'Security Registration & SETFO',
      km: 'ការចុះបញ្ជីប្រត្យក្សធានា និង SETFO',
    },
    serviceName: {
      en: 'Movable Property Security Filing at SETFO Office',
      km: 'ការចុះបញ្ជីប្រត្យក្សធានាលើទ្រព្យរំកិលនៅការិយាល័យ SETFO',
    },
    feeAmount: {
      en: '$250 – $500',
      km: '២៥០$ – ៥០០$',
    },
    unit: {
      en: 'Per Security Notice',
      km: 'ក្នុងមួយលិខិតជូនដំណឹងប្រត្យក្សធានា',
    },
    location: 'phnom-penh',
    locationName: {
      en: 'Ministry of Commerce / SETFO',
      km: 'ក្រសួងពាណិជ្ជកម្ម / SETFO',
    },
    speed: 'express',
    estimatedDuration: {
      en: '2 – 4 Business Days',
      km: '២ – ៤ ថ្ងៃធ្វើការ',
    },
    notes: {
      en: 'Filing of security interests over inventory, machinery, equipment, vehicles, or bank accounts.',
      km: 'ការចុះបញ្ជីសិទ្ធិធានាលើស្តុកទំនិញ គ្រឿងចក្រ បរិក្ខារ យានយន្ត ឬគណនីធនាគារ។',
    },
    verified: true,
    requiresReview: true,
  },

  // 5. Alternative Dispute Resolution
  {
    id: 'fee-adr-mediation',
    serviceCategory: 'adr-mediation',
    serviceCategoryName: {
      en: 'Dispute Resolution & Arbitration',
      km: 'ការដោះស្រាយជម្លោះ និងអាជ្ញាកណ្តាល',
    },
    serviceName: {
      en: 'Out-of-Court Dispute Mediation & Settlement Structuring',
      km: 'ការសម្រុះសម្រួលជម្លោះក្រៅប្រព័ន្ធតុលាការ និងការរៀបចំកិច្ចព្រមព្រៀងសះជា',
    },
    feeAmount: {
      en: '$800 – $2,000+',
      km: '៨០០$ – ២,០០០$+',
    },
    unit: {
      en: 'Per Case / Retainer',
      km: 'ក្នុងមួយករណី / កម្រៃតំណាង',
    },
    location: 'all',
    locationName: {
      en: 'Nationwide',
      km: 'ទូទាំងប្រទេស',
    },
    speed: 'standard',
    estimatedDuration: {
      en: '1 – 4 Weeks',
      km: '១ – ៤ សប្តាហ៍',
    },
    notes: {
      en: 'Includes mediation sessions, formal compromise drafting, and execution legal defense.',
      km: 'រាប់បញ្ចូលទាំងជំនួបសម្រុះសម្រួល ការរៀបចំកិច្ចសន្យាសះជាផ្លូវការ និងការការពារផ្លូវច្បាប់។',
    },
    verified: true,
    requiresReview: true,
  },

  // 6. Due Diligence
  {
    id: 'fee-due-diligence-corporate',
    serviceCategory: 'due-diligence-fees',
    serviceCategoryName: {
      en: 'Legal Due Diligence',
      km: 'ការសវនកម្មផ្នែកច្បាប់',
    },
    serviceName: {
      en: 'Full Corporate & Land Title Legal Due Diligence',
      km: 'ការសវនកម្មផ្នែកច្បាប់ពេញលេញលើក្រុមហ៊ុន និងប័ណ្ណកម្មសិទ្ធិដីធ្លី',
    },
    feeAmount: {
      en: '$1,500 – $4,500',
      km: '១,៥០០$ – ៤,៥០០$',
    },
    unit: {
      en: 'Per Investigation Report',
      km: 'ក្នុងមួយរបាយការណ៍ស៊ើបអង្កេត',
    },
    location: 'all',
    locationName: {
      en: 'Nationwide',
      km: 'ទូទាំងប្រទេស',
    },
    speed: 'both',
    estimatedDuration: {
      en: '7 – 14 Business Days',
      km: '៧ – ១៤ ថ្ងៃធ្វើការ',
    },
    notes: {
      en: 'Comprehensive physical registry searches, title history verification, and red-flag reporting.',
      km: 'ការស្រាវជ្រាវប្រវត្តិប័ណ្ណនៅសុរិយោដី ការពិនិត្យកំណត់ត្រានៅក្រសួង និងរបាយការណ៍វិភាគហានិភ័យ។',
    },
    verified: true,
    requiresReview: true,
  },

  // 7. Other Services
  {
    id: 'fee-trademark-registration',
    serviceCategory: 'other-public-fees',
    serviceCategoryName: {
      en: 'Other Public Services',
      km: 'សេវាសាធារណៈផ្សេងៗ',
    },
    serviceName: {
      en: 'Trademark Registration Filing at Ministry of Commerce',
      km: 'ការចុះបញ្ជីពាណិជ្ជសញ្ញា (ម៉ាក) នៅក្រសួងពាណិជ្ជកម្ម',
    },
    feeAmount: {
      en: '$400 – $700',
      km: '៤០០$ – ៧០០$',
    },
    unit: {
      en: 'Per Mark / Per Class',
      km: 'ក្នុងមួយម៉ាក / មួយថ្នាក់',
    },
    location: 'phnom-penh',
    locationName: {
      en: 'Department of Intellectual Property',
      km: 'នាយកដ្ឋានកម្មសិទ្ធិបញ្ញា',
    },
    speed: 'standard',
    estimatedDuration: {
      en: '3 – 6 Months (Official Processing)',
      km: '៣ – ៦ ខែ (រយៈពេលដំណើរការផ្លូវការ)',
    },
    notes: {
      en: 'Includes trademark search, formal dossier submission, publication monitoring, and certificate collection.',
      km: 'រាប់បញ្ចូលទាំងការស្រាវជ្រាវម៉ាក ការដាក់ពាក្យផ្លូវការ ការតាមដានការផ្សាយ និងការទទួលវិញ្ញាបនបត្រ។',
    },
    verified: true,
    requiresReview: true,
  },
];
