import { firmConfig } from '../config/firmConfig';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: firmConfig.name.en,
    alternateName: [firmConfig.name.enAlt, firmConfig.name.km],
    url: 'https://www.unitedjuristlaw.com',
    logo: 'https://www.unitedjuristlaw.com/_next/image?url=%2Fujl-logo.png&w=640&q=75',
    address: {
      '@type': 'PostalAddress',
      streetAddress: firmConfig.address.street,
      addressLocality: firmConfig.address.khan,
      addressRegion: firmConfig.address.city,
      addressCountry: 'KH',
    },
    telephone: firmConfig.phones[0].display,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
  };
}
