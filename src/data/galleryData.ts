export interface GalleryItem {
  id: string;
  url: string;
  caption: {
    en: string;
    km: string;
  };
}

export const galleryImages: GalleryItem[] = [
  {
    id: '1',
    url: '/images/gallery/attorneys_standing.jpg',
    caption: {
      en: 'United Jurist Executive Attorneys & Legal Leadership',
      km: 'ក្រុមមេធាវី និងថ្នាក់ដឹកនាំក្រុមហ៊ុនមេធាវី យូណាយធីត ជូរីស',
    },
  },
  {
    id: '2',
    url: '/images/gallery/attorney_khem_chen_dignitary.jpg',
    caption: {
      en: 'Attorney KHEM Chen in Official Advisory Session',
      km: 'លោកមេធាវី ខែម ចិន ក្នុងជំនួបពិភាក្សាការងារច្បាប់',
    },
  },
  {
    id: '3',
    url: '/images/gallery/team_meeting_1.jpg',
    caption: {
      en: 'Executive Boardroom & Legal Team Strategy Conference',
      km: 'ការប្រជុំពិភាក្សាការងារច្បាប់ និងយុទ្ធសាស្ត្ររបស់ក្រុមការងារមេធាវី',
    },
  },
  {
    id: '4',
    url: '/images/gallery/team_meeting_2.jpg',
    caption: {
      en: 'Legal Research & Client Contract Documentation Workstation',
      km: 'សកម្មភាពប្រជុំស្រាវជ្រាវច្បាប់ និងរៀបចំឯកសារកិច្ចសន្យារបស់ក្រុមហ៊ុន',
    },
  },
];
