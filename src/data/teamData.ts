import type { TeamMember } from '../types';

export const teamData: TeamMember[] = [
  {
    id: 'khem-chen',
    slug: 'khem-chen',
    name: {
      en: 'KHEM Chen',
      km: 'ខែម ចិន',
    },
    position: {
      en: 'Attorney-at-Law / President',
      km: 'មេធាវី / ប្រធានក្រុមហ៊ុន',
    },
    isLeadership: true,
    verified: true,
    portraitUrl: 'https://www.unitedjuristlaw.com/_next/image?url=%2Fteam%2Fchen.jpg&w=640&q=75',
    biography: {
      en: 'Attorney KHEM Chen serves as President of United Jurist Law Firm. Licensed by the Bar Association of the Kingdom of Cambodia, Attorney Chen leads the firm’s legal practice in corporate structuring, banking security perfection, real estate transactions, and commercial litigation.',
      km: 'លោកមេធាវី ខែម ចិន គឺជាប្រធានក្រុមហ៊ុនមេធាវី យូណាយធីត ជូរីស។ ដោយមានអាជ្ញាប័ណ្ណត្រឹមត្រូវពីគណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជា លោកមេធាវីដឹកនាំការប្រតិបត្តិការផ្នែកច្បាប់របស់ក្រុមហ៊ុនលើកិច្ចការក្រុមហ៊ុន ធនាគារ និងហិរញ្ញវត្ថុ អចលនទ្រព្យ និងការតំណាងក្តីពាណិជ្ជកម្ម។',
    },
    practiceAreas: [
      { en: 'Corporate & Commercial Law', km: 'ច្បាប់ក្រុមហ៊ុន និងពាណិជ្ជកម្ម' },
      { en: 'Banking & Financial Security', km: 'ច្បាប់ធនាគារ និងកាតព្វកិច្ចធានា' },
      { en: 'Real Estate & Land Titles', km: 'ច្បាប់អចលនទ្រព្យ និងប័ណ្ណដី' },
      { en: 'Litigation & Commercial Dispute Resolution', km: 'ការដោះស្រាយជម្លោះ និងតុលាការ' },
    ],
    languages: [
      { en: 'Khmer (Native)', km: 'ភាសាខ្មែរ (ភាសាកំណើត)' },
      { en: 'English (Professional)', km: 'ភាសាអង់គ្លេស (កម្រិតវិជ្ជាជីវៈ)' },
    ],
  },
];
