import type { InsightArticle } from '../types';

export const insightsData: InsightArticle[] = [
  {
    id: 'insight-cambodia-trust-law-2026',
    slug: 'cambodia-trust-law-guide-2026',
    category: 'real-estate',
    categoryName: {
      en: 'Real Estate & Trusts',
      km: 'អចលនទ្រព្យ និងបរមធនបាលកិច្ច',
    },
    title: {
      en: 'Navigating Cambodia’s Trust Law Framework for Foreign Land Ownership',
      km: 'ការយល់ដឹងអំពីក្របខ័ណ្ឌច្បាប់បរមធនបាលកិច្ចនៅកម្ពុជាសម្រាប់ការកាន់កាប់ដីធ្លីរបស់ជនបរទេស',
    },
    summary: {
      en: 'An in-depth legal legal review of how foreign investors can register landed property legally through registered Trust Companies under the supervision of the Trust Regulator.',
      km: 'ការវិភាគច្បាប់ស៊ីជម្រៅអំពីរបៀបដែលវិនិយោគិនបរទេសអាចចុះបញ្ជីអចលនទ្រព្យដីធ្លីដោយស្របច្បាប់តាមរយៈក្រុមហ៊ុនបរមធនបាលកិច្ចក្រោមការគ្រប់គ្រងរបស់និយ័តករបរមធនបាលកិច្ច។',
    },
    publishedDate: '2026-02-15',
    readTimeMinutes: 6,
    author: {
      en: 'United Jurist Legal Research Team',
      km: 'ក្រុមស្រាវជ្រាវច្បាប់ យូណាយធីត ជូរីស',
    },
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    isDraft: true,
    tableOfContents: [
      { id: 'sec-1', title: { en: '1. Introduction to the Trust Law Framework', km: '១. សេចក្តីផ្តើមអំពីក្របខ័ណ្ឌច្បាប់បរមធនបាលកិច្ច' } },
      { id: 'sec-2', title: { en: '2. Commercial vs Personal Trusts', km: '២. បរមធនបាលកិច្ចពាណិជ្ជកម្ម និងបុគ្គល' } },
      { id: 'sec-3', title: { en: '3. Registration Requirements with TR', km: '៣. តម្រូវការចុះបញ្ជីជាមួយនិយ័តករបរមធនបាលកិច្ច' } },
      { id: 'sec-4', title: { en: '4. Legal Risk Protection for Settlors', km: '៤. ការការពារហានិភ័យផ្លូវច្បាប់សម្រាប់អ្នកបង្កើត' } },
    ],
    contentHtml: {
      en: `
        <p class="text-xs font-mono text-amber-700 bg-amber-50 p-3 rounded border border-amber-200 mb-6">
          <strong>Developer & Reviewer Notice:</strong> Draft content requiring review by a qualified legal professional before final statutory publication.
        </p>
        <h2 id="sec-1" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">1. Introduction to the Trust Law Framework</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          Enacted in 2019, the Law on Trusts revolutionized real estate ownership structures in the Kingdom of Cambodia. Prior to this landmark legislation, foreign individuals and corporations relied heavily on Land Holding Company (LHC) structures or nomination agreements to secure interest in Cambodian land.
        </p>
        <p class="mb-6 text-neutral-700 leading-relaxed">
          Under the Trust Law system, a foreign entity (the Settlor or Trustor) transfers legal title of land to a licensed Trustee who manages the asset solely for the benefit of the foreign beneficiary according to a registered Trust Deed.
        </p>

        <h2 id="sec-2" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">2. Commercial vs Personal Trusts</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          The Trust Regulator (TR) recognizes several trust categories, with Commercial Trusts and Financial Trusts being the primary vehicles utilized by commercial developers, equity funds, and private investors.
        </p>

        <h2 id="sec-3" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">3. Registration Requirements with TR</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          All trusts holding real estate assets in Cambodia must be formally registered with the Non-Bank Financial Service Authority’s Trust Regulator. Failure to complete registration renders the trust unenforceable under statutory law.
        </p>

        <h2 id="sec-4" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">4. Legal Risk Protection for Settlors</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          Properly drafted trust deeds include explicit claw-back clauses, beneficiary substitution rights, and mandatory arbitration forums in Phnom Penh (such as NCAC) to preserve foreign capital security.
        </p>
      `,
      km: `
        <p class="text-xs font-mono text-amber-700 bg-amber-50 p-3 rounded border border-amber-200 mb-6">
          <strong>ចំណាំសម្រាប់អ្នកអភិវឌ្ឍន៍ និងអ្នកពិនិត្យ៖</strong> សេចក្តីព្រាងខ្លឹមសារនេះតម្រូវឲ្យមានការពិនិត្យឡើងវិញដោយអ្នកច្បាប់ដែលមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់មុនពេលបោះពុម្ពផ្សាយផ្លូវការ។
        </p>
        <h2 id="sec-1" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">១. សេចក្តីផ្តើមអំពីក្របខ័ណ្ឌច្បាប់បរមធនបាលកិច្ច</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          ច្បាប់ស្តីពីបរមធនបាលកិច្ចដែលត្រូវបានប្រកាសឲ្យប្រើក្នុងឆ្នាំ ២០១៩ បានធ្វើបដិវត្តន៍រចនាសម្ព័ន្ធកម្មសិទ្ធិអចលនទ្រព្យក្នុងព្រះរាជាណាចក្រកម្ពុជា។ មុនពេលមានច្បាប់នេះ វិនិយោគិនបរទេសភាគច្រើនពឹងផ្អែកលើរចនាសម្ព័ន្ធក្រុមហ៊ុនកាន់កាប់ដី (LHC) ឬកិច្ចព្រមព្រៀងតំណាង។
        </p>
        <p class="mb-6 text-neutral-700 leading-relaxed">
          ក្រោមប្រព័ន្ធច្បាប់បរមធនបាលកិច្ច បុគ្គល ឬក្រុមហ៊ុនបរទេសអាចផ្ទេរសិទ្ធិកាន់កាប់ដីធ្លីទៅឲ្យបរមធនបាលដែលមានអាជ្ញាប័ណ្ណត្រឹមត្រូវ ដើម្បីគ្រប់គ្រងទ្រព្យសម្បត្តិសម្រាប់ផលប្រយោជន៍របស់អ្នកទទួលផលបរទេសស្របតាមលិខិតបរមធនបាលកិច្ចដែលបានចុះបញ្ជី។
        </p>

        <h2 id="sec-2" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">២. បរមធនបាលកិច្ចពាណិជ្ជកម្ម និងបុគ្គល</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          និយ័តករបរមធនបាលកិច្ច (TR) ទទួលស្គាល់ប្រភេទបរមធនបាលកិច្ចជាច្រើន ដោយក្នុងនោះបរមធនបាលកិច្ចពាណិជ្ជកម្ម និងហិរញ្ញវត្ថុ គឺជាឧបករណ៍ចម្បងដែលត្រូវបានប្រើប្រាស់ដោយវិនិយោគិន។
        </p>

        <h2 id="sec-3" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">៣. តម្រូវការចុះបញ្ជីជាមួយនិយ័តករបរមធនបាលកិច្ច</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          បរមធនបាលកិច្ចទាំងអស់ដែលកាន់កាប់អចលនទ្រព្យនៅកម្ពុជា ត្រូវតែចុះបញ្ជីផ្លូវការនៅនិយ័តករបរមធនបាលកិច្ចនៃអាជ្ញាធរសេវាហិរញ្ញវត្ថុនាម៉ាក្រូ។
        </p>

        <h2 id="sec-4" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">៤. ការការពារហានិភ័យផ្លូវច្បាប់សម្រាប់អ្នកបង្កើត</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          លិខិតបរមធនបាលកិច្ចដែលបានរៀបចំយ៉ាងត្រឹមត្រូវ រាប់បញ្ចូលទាំងប្រយោគការពារសិទ្ធិ និងយន្តការដោះស្រាយជម្លោះតាមរយៈអាជ្ញាកណ្តាលនៅភ្នំពេញ (ដូចជា NCAC)។
        </p>
      `,
    },
    relatedServiceSlugs: ['trusts-estate-planning', 'real-estate-construction'],
  },
  {
    id: 'insight-cambodia-qip-investment-2026',
    slug: 'qip-investment-incentives-cambodia-2026',
    category: 'corporate',
    categoryName: {
      en: 'Corporate Law',
      km: 'ច្បាប់ក្រុមហ៊ុន',
    },
    title: {
      en: 'Understanding Qualified Investment Project (QIP) Status Under the New Investment Law',
      km: 'ការយល់ដឹងអំពីគម្រោងវិនិយោគមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់ (QIP) ក្រោមច្បាប់ស្តីពីវិនិយោគថ្មី',
    },
    summary: {
      en: 'A practical overview of tax holidays, import duty exemptions, and statutory guarantees available to qualified Cambodian investments.',
      km: 'ការពិនិត្យសង្ខេបអំពីការលើកលែងពន្ធ ការលើកលែងពន្ធនាំចូល និងការធានាផ្លូវច្បាប់សម្រាប់គម្រោងវិនិយោគដែលមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់នៅកម្ពុជា។',
    },
    publishedDate: '2026-01-20',
    readTimeMinutes: 5,
    author: {
      en: 'United Jurist Legal Research Team',
      km: 'ក្រុមស្រាវជ្រាវច្បាប់ យូណាយធីត ជូរីស',
    },
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    isDraft: true,
    tableOfContents: [
      { id: 'sec-1', title: { en: '1. Overview of QIP Incentives', km: '១. សេចក្តីសង្ខេបអំពីការលើកទឹកចិត្ត QIP' } },
      { id: 'sec-2', title: { en: '2. Income Tax Exemption Options', km: '២. ជម្រើសនៃការលើកលែងពន្ធលើប្រាក់ចំណូល' } },
      { id: 'sec-3', title: { en: '3. Application Process with CDC', km: '៣. នីតិវិធីដាក់ពាក្យនៅក្រុមប្រឹក្សាអភិវឌ្ឍន៍កម្ពុជា (CDC)' } },
    ],
    contentHtml: {
      en: `
        <p class="text-xs font-mono text-amber-700 bg-amber-50 p-3 rounded border border-amber-200 mb-6">
          <strong>Developer & Reviewer Notice:</strong> Draft content requiring review by a qualified legal professional before final statutory publication.
        </p>
        <h2 id="sec-1" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">1. Overview of QIP Incentives</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          The Law on Investment (promulgated in October 2021) establishes a highly attractive legal framework for local and international investors seeking Qualified Investment Project (QIP) incentives through the Council for the Development of Cambodia (CDC).
        </p>
        <h2 id="sec-2" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">2. Income Tax Exemption Options</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          Investors registering a QIP can choose between a Tax Holiday (up to 9 years of 0% Income Tax exemption) or Special Depreciation schemes combined with custom duty exemptions on production equipment and raw materials.
        </p>
        <h2 id="sec-3" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">3. Application Process with CDC</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          Filing involves technical feasibility reports, environmental impact assessments, and coordination through the CDC one-stop portal.
        </p>
      `,
      km: `
        <p class="text-xs font-mono text-amber-700 bg-amber-50 p-3 rounded border border-amber-200 mb-6">
          <strong>ចំណាំសម្រាប់អ្នកអភិវឌ្ឍន៍ និងអ្នកពិនិត្យ៖</strong> សេចក្តីព្រាងខ្លឹមសារនេះតម្រូវឲ្យមានការពិនិត្យឡើងវិញដោយអ្នកច្បាប់ដែលមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់មុនពេលបោះពុម្ពផ្សាយផ្លូវការ។
        </p>
        <h2 id="sec-1" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">១. សេចក្តីសង្ខេបអំពីការលើកទឹកចិត្ត QIP</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          ច្បាប់ស្តីពីវិនិយោគ (ប្រកាសឲ្យប្រើក្នុងខែតុលា ឆ្នាំ ២០២១) បានបង្កើតក្របខ័ណ្ឌច្បាប់ដ៏ទាក់ទាញសម្រាប់វិនិយោគិនក្នុងការទទួលបានការលើកទឹកចិត្ត QIP ពីក្រុមប្រឹក្សាអភិវឌ្ឍន៍កម្ពុជា (CDC)។
        </p>
        <h2 id="sec-2" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">២. ជម្រើសនៃការលើកលែងពន្ធលើប្រាក់ចំណូល</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          វិនិយោគិនដែលចុះបញ្ជី QIP អាចជ្រើសរើសរវាងការលើកលែងពន្ធលើប្រាក់ចំណូល (រហូតដល់ ៩ ឆ្នាំ) ឬការរំលស់ពិសេស រួមជាមួយការលើកលែងពន្ធគយលើគ្រឿងចក្រ។
        </p>
        <h2 id="sec-3" class="text-2xl font-serif font-bold text-neutral-900 mt-8 mb-4">៣. នីតិវិធីដាក់ពាក្យនៅក្រុមប្រឹក្សាអភិវឌ្ឍន៍កម្ពុជា (CDC)</h2>
        <p class="mb-4 text-neutral-700 leading-relaxed">
          ការដាក់ពាក្យរួមមានរបាយការណ៍សមិទ្ធិលទ្ធភាពបច្ចេកទេស ការវាយតម្លៃហេតុប៉ះពាល់បរិស្ថាន និងការសម្របសម្រួលតាមច្រកចេញចូលតែមួយរបស់ CDC។
        </p>
      `,
    },
    relatedServiceSlugs: ['corporate-business-law', 'due-diligence'],
  },
];
