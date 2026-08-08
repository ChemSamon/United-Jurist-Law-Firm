// Centralized Firm Configuration for United Jurist Law Firm
// Single source of truth for address, phone, email status, leadership, and verification flags.

export interface FirmConfig {
  name: {
    en: string;
    enAlt: string;
    km: string;
  };
  incorporationYear: number;
  licensingBody: {
    en: string;
    km: string;
  };
  address: {
    full: {
      en: string;
      km: string;
    };
    street: string;
    sangkat: string;
    khan: string;
    city: string;
    country: string;
    requiresAddressConfirmation: boolean;
    discrepancyNote: string;
  };
  phones: {
    display: string;
    value: string;
    primary: boolean;
  }[];
  unverifiedPhone: {
    display: string;
    value: string;
    verified: boolean;
    publiclyVisible: boolean;
  };
  email: {
    value: string;
    emailVerified: boolean;
    displayNotice: {
      en: string;
      km: string;
    };
  };
  businessHours: {
    en: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    km: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    requiresConfirmation: boolean;
  };
  flags: {
    showVerifiedStatistics: boolean;
    showVerifiedTestimonials: boolean;
    developerMode: boolean;
  };
  developerNotes: {
    licensing: string;
    addressDiscrepancy: string;
    missingDetailsNotice: string;
    contentDisclaimer: string;
  };
}

export const firmConfig: FirmConfig = {
  name: {
    en: "United Jurist Law Firm",
    enAlt: "United Jurist Law Office",
    km: "ក្រុមហ៊ុនមេធាវី យូណាយធីត ជូរីស",
  },
  incorporationYear: 2024,
  licensingBody: {
    en: "Bar Association of the Kingdom of Cambodia",
    km: "គណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជា",
  },
  address: {
    full: {
      en: "#24, Street Borey 08, Tumnup Village, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh, Cambodia",
      km: "ផ្ទះលេខ ២៤ ផ្លូវបុរី ០៨ ភូមិទំនប់ សង្កាត់ភ្នំពេញថ្មី ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ កម្ពុជា",
    },
    street: "Street Borey 08",
    sangkat: "Sangkat Phnom Penh Thmey",
    khan: "Khan Sen Sok",
    city: "Phnom Penh",
    country: "Cambodia",
    requiresAddressConfirmation: true,
    discrepancyNote: "TODO: Confirm whether the correct office number is #24 or #25.",
  },
  phones: [
    {
      display: "069 240 624",
      value: "+85569240624",
      primary: true,
    },
    {
      display: "077 662 424",
      value: "+85577662424",
      primary: false,
    },
  ],
  unverifiedPhone: {
    display: "+855 86 906 838",
    value: "+85586906838",
    verified: false,
    publiclyVisible: false,
  },
  email: {
    value: "REPLACE_WITH_VERIFIED_FIRM_EMAIL",
    emailVerified: false,
    displayNotice: {
      en: "Official email to be confirmed",
      km: "អ៊ីមែលផ្លូវការរង់ចាំការបញ្ជាក់",
    },
  },
  businessHours: {
    en: {
      weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 1:00 PM",
      sunday: "Sunday: Closed",
    },
    km: {
      weekdays: "ថ្ងៃចន្ទ – ថ្ងៃសុក្រ៖ ៨:០០ ព្រឹក – ៦:០០ ល្ងាច",
      saturday: "ថ្ងៃសៅរ៍៖ ៩:០០ ព្រឹក – ១:០០ រសៀល",
      sunday: "ថ្ងៃអាទិត្យ៖ បិទទ្វារ",
    },
    requiresConfirmation: true,
  },
  flags: {
    showVerifiedStatistics: false,
    showVerifiedTestimonials: false,
    developerMode: import.meta.env.DEV || false,
  },
  developerNotes: {
    licensing: "Confirm the firm’s licensing wording and establishment date before production publication.",
    addressDiscrepancy: "TODO: Confirm whether the correct office number is #24 or #25.",
    missingDetailsNotice: "Information to be confirmed",
    contentDisclaimer: "Draft content requiring review by a qualified legal professional.",
  },
};
