export type Language = 'en' | 'km';
export type Theme = 'light' | 'dark';

export interface LocalizedString {
  en: string;
  km: string;
}

export interface LegalService {
  id: string;
  slug: string;
  category: string;
  categoryName: LocalizedString;
  title: LocalizedString;
  shortDescription: LocalizedString;
  overview: LocalizedString;
  assistancePoints: LocalizedString[];
  scopeOfWork: LocalizedString[];
  requiredDocuments: LocalizedString[];
  workingProcess: {
    step: number;
    title: LocalizedString;
    description: LocalizedString;
  }[];
  relatedFeesCount: number;
  faqs: {
    question: LocalizedString;
    answer: LocalizedString;
  }[];
  iconName: string;
  popular?: boolean;
}

export interface FeeItem {
  id: string;
  serviceCategory: string;
  serviceCategoryName: LocalizedString;
  serviceName: LocalizedString;
  feeAmount: {
    en: string;
    km: string;
  };
  unit: LocalizedString;
  location: 'phnom-penh' | 'provinces' | 'all';
  locationName: LocalizedString;
  speed: 'standard' | 'express' | 'both';
  estimatedDuration: LocalizedString;
  notes: LocalizedString;
  verified: boolean;
  requiresReview: boolean;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: LocalizedString;
  position: LocalizedString;
  isLeadership: boolean;
  verified: boolean;
  portraitUrl?: string;
  biography?: LocalizedString;
  practiceAreas?: LocalizedString[];
  languages?: LocalizedString[];
  education?: LocalizedString[];
  experienceYears?: number;
  barRegistrationNo?: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  category: string;
  categoryName: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  publishedDate: string;
  readTimeMinutes: number;
  author: LocalizedString;
  featuredImage: string;
  isDraft: boolean;
  contentHtml: LocalizedString;
  tableOfContents: {
    id: string;
    title: LocalizedString;
  }[];
  relatedServiceSlugs?: string[];
}

export interface SearchResultItem {
  id: string;
  type: 'service' | 'fee' | 'insight' | 'page';
  title: string;
  description: string;
  url: string;
  category?: string;
}

export interface ConsultationFormData {
  // Step 1
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  preferredLanguage: Language;
  
  // Step 2
  serviceCategory: string;
  matterTitle: string;
  description: string;
  urgency: 'normal' | 'urgent' | 'immediate';
  knownDeadline?: string;
  
  // Step 3
  consultationType: 'office' | 'telephone' | 'video';
  preferredDate: string;
  preferredTime: string;
  alternativeDate?: string;
  
  // Step 4
  consentGiven: boolean;
}
