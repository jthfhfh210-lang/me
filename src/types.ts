export type Language = 'ar' | 'en';
export type AppEdition = 'public' | 'ataba';

export interface PillarOfFaith {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  conceptAr: string;
  conceptEn: string;
  quranVerseAr: string;
  quranVerseEn: string;
  verseRef: string;
  rationalAspectAr: string;
  rationalAspectEn: string;
  iconName: string;
}

export interface InfallibleLeader {
  id: string;
  number: number;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  period: string;
  roleAr: string;
  roleEn: string;
  quoteAr: string;
  quoteEn: string;
  biographyAr: string;
  biographyEn: string;
  restingPlaceAr: string;
  restingPlaceEn: string;
  keyLegacyAr: string;
  keyLegacyEn: string;
}

export interface KarbalaChapter {
  id: string;
  titleAr: string;
  titleEn: string;
  tagAr: string;
  tagEn: string;
  summaryAr: string;
  summaryEn: string;
  detailsAr: string;
  detailsEn: string;
  heroQuoteAr: string;
  heroQuoteEn: string;
  globalThinkers?: {
    author: string;
    role: string;
    quoteAr: string;
    quoteEn: string;
  }[];
}

export interface SacredShrine {
  id: string;
  nameAr: string;
  nameEn: string;
  cityAr: string;
  cityEn: string;
  country: string;
  descriptionAr: string;
  descriptionEn: string;
  architectureAr: string;
  architectureEn: string;
  significanceAr: string;
  significanceEn: string;
  features: string[];
  imageUrl: string;
}

export interface QuestionClarification {
  id: string;
  category: 'quran' | 'worship' | 'unity' | 'history' | 'ethics' | 'fiqh' | 'imamah';
  questionAr: string;
  questionEn: string;
  shortAnswerAr: string;
  shortAnswerEn: string;
  detailedExplanationAr: string;
  detailedExplanationEn: string;
  evidencesAr: string[];
  evidencesEn: string[];
}

export interface SpiritualGem {
  id: string;
  sourceAr: string;
  sourceEn: string;
  titleAr: string;
  titleEn: string;
  textAr: string;
  textEn: string;
  reflectionAr: string;
  reflectionEn: string;
  theme: string;
}

export interface CuratorialSpec {
  catalogNumber: string;
  period: string;
  materialsAr: string;
  materialsEn: string;
  dimensionsAr: string;
  dimensionsEn: string;
  provenanceAr: string;
  provenanceEn: string;
  craftsmanshipAr: string;
  craftsmanshipEn: string;
  inscriptionsAr: string;
  inscriptionsEn: string;
  conditionStatusAr: string;
  conditionStatusEn: string;
}

export interface ProxyZiyarahRecord {
  id: string;
  registrationNumber: string;
  pilgrimName: string;
  motherName: string;
  country: string;
  targetShrine: 'hussain' | 'abbas' | 'both';
  intention: string;
  timestamp: string;
  certificateBarcode: string;
  status: 'confirmed' | 'performed';
}

export interface KarbalaPrayerSchedule {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  nextPrayerAr: string;
  nextPrayerEn: string;
  timeRemaining: string;
}

