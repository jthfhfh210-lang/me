export interface TasbihPreset {
  id: string;
  nameAr: string;
  nameEn: string;
  targetCount: number;
  phraseAr: string;
  phraseEn: string;
  isZahraMultiStep?: boolean;
  steps?: { phraseAr: string; phraseEn: string; count: number }[];
  color: string;
}

export const TASBIH_PRESETS: TasbihPreset[] = [
  {
    id: 'zahra',
    nameAr: 'تسبيحة السيدة فاطمة الزهراء (ع)',
    nameEn: 'Tasbih of Lady Fatimah al-Zahra (p)',
    targetCount: 100,
    phraseAr: 'اللهُ أَكْبَر',
    phraseEn: 'Allahu Akbar',
    isZahraMultiStep: true,
    steps: [
      { phraseAr: 'اللهُ أَكْبَر', phraseEn: 'Allahu Akbar (34 times)', count: 34 },
      { phraseAr: 'الحَمْدُ لِلَّه', phraseEn: 'Alhamdulillah (33 times)', count: 33 },
      { phraseAr: 'سُبْحَانَ الله', phraseEn: 'SubhanAllah (33 times)', count: 33 },
    ],
    color: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'salawat',
    nameAr: 'الصلاة على محمد وآل محمد',
    nameEn: 'Salawat upon the Holy Prophet & Household',
    targetCount: 100,
    phraseAr: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّد',
    phraseEn: 'Allahumma Salli Ala Muhammadin Wa Aali Muhammad',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'istighfar',
    nameAr: 'الاستغفار وطلب الرحمة',
    nameEn: 'Istighfar (Seeking Forgiveness)',
    targetCount: 100,
    phraseAr: 'أَسْتَغْفِرُ اللهَ رَبِّي وَأَتُوبُ إِلَيْه',
    phraseEn: 'Astaghfirullaha Rabbi Wa Atoobu Ilayh',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'tahleel',
    nameAr: 'كلمة التوحيد (لا إله إلا الله)',
    nameEn: 'Tahleel (Unity of God)',
    targetCount: 100,
    phraseAr: 'لَا إِلَهَ إِلَّا الله',
    phraseEn: 'La Ilaha Illa Allah',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'hawqala',
    nameAr: 'الحوقلة (دفع البلاء والهم)',
    nameEn: 'Hawqala (Divine Strength)',
    targetCount: 100,
    phraseAr: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ العَظِيم',
    phraseEn: 'La Hawla Wala Quwwata Illa Billahil Aliyyil Adheem',
    color: 'from-rose-500 to-amber-600',
  },
  {
    id: 'ya_hussain',
    nameAr: 'نداء سيد الشهداء (لبيك يا حسين)',
    nameEn: 'Call of Imam Hussain',
    targetCount: 72,
    phraseAr: 'لَبَّيْكَ يَا حُسَيْن',
    phraseEn: 'Labbayka Ya Hussain',
    color: 'from-red-600 to-amber-700',
  },
  {
    id: 'free',
    nameAr: 'تسبيح مفتوح (عداد حر)',
    nameEn: 'Free Tasbih Counter',
    targetCount: 0,
    phraseAr: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
    phraseEn: 'SubhanAllahi Wa Bihamdih',
    color: 'from-stone-600 to-stone-400',
  },
];
