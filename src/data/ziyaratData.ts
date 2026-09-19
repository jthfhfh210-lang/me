// Comprehensive, Authentic Shia Infallibles Ziyarat Library
// Sourced from: Kamil al-Ziyarat (Ibn Qulawayh), Man La Yahduruhu al-Faqih (al-Saduq),
// Tahdhib al-Ahkam & Misbah al-Mutahajjid (al-Tusi), and Mafatih al-Jinan (al-Qummi).

export interface ZiyarahReciter {
  id: string;
  nameAr: string;
  nameEn: string;
  url: string;
}

export interface ZiyarahItem {
  id: string;
  titleAr: string;
  titleEn: string;
  targetAr: string;
  targetEn: string;
  category: 'prophet' | 'ali' | 'fatima' | 'karbala' | 'baqi' | 'kadhimayn' | 'askariyayn' | 'rida' | 'mahdi' | 'general';
  virtueAr: string;
  virtueEn: string;
  duration?: string;
  reciters: ZiyarahReciter[];
  textAr: string;
  textEn: string;
}

export const ZIYARAT_LIST: ZiyarahItem[] = [
  // 1. Ziyarah Ashura
  {
    id: 'ashura',
    titleAr: 'زِيَارَةُ عَاشُورَاء المَشْهُورَة',
    titleEn: 'Ziyarah Ashura (The Renowned)',
    targetAr: 'سيد الشهداء الإمام الحسين بن علي (ع)',
    targetEn: 'Imam Hussain ibn Ali (peace be upon him)',
    category: 'karbala',
    virtueAr: 'مروية في "كامل الزيارات" لابن قولويه و"مصباح المتهجد" للشيخ الطوسي بأسانيد صحيحة عن الإمام الباقر (ع)، وهي من أقدس الزيارات أثراً في كشف الكروب واستجابة الدعوات.',
    virtueEn: 'Documented in Kamil al-Ziyarat and Misbah al-Mutahajjid with authentic chains from Imam al-Baqir (as); celebrated for immense spiritual blessings.',
    duration: '11:45',
    reciters: [
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/ashura.mp3' },
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/ashura_altammar.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/ashura_abather.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكَ يا أَبا عَبْدِ اللهِ، السَّلامُ عَلَيْكَ يَابْنَ رَسُولِ اللهِ، السَّلامُ عَلَيْكَ يَابْنَ أَمِيرِ المُؤْمِنِينَ وَابْنَ سَيِّدِ الوَصِيِّينَ، السَّلامُ عَلَيْكَ يَابْنَ فاطِمَةَ سَيِّدَةِ نِساءِ العالَمِينَ.
السَّلامُ عَلَيْكَ يا ثارَ اللهِ وَابْنَ ثارِهِ وَالوِتْرَ المَوْتُورَ. السَّلامُ عَلَيْكَ وَعَلى الأَرْواحِ الَّتِي حَلَّتْ بِفِنائِكَ، عَلَيْكُمْ مِنِّي جَميعاً سَلامُ اللهِ أَبَداً ما بَقِيتُ وَبَقِيَ اللَّيْلُ وَالنَّهارُ.
يا أَبا عَبْدِ اللهِ، لَقَدْ عَظُمَتِ الرَّزِيَّةُ وَجَلَّتْ وَعَظُمَتِ المُصِيبَةُ بِكَ عَلَيْنا وَعَلى جَمِيعِ أَهْلِ الإِسْلامِ، وَجَلَّتْ وَعَظُمَتْ مُصِيبَتُكَ فِي السَّماواتِ عَلى جَمِيعِ أَهْلِ السَّماواتِ.
فَلَعَنَ اللهُ أُمَّةً أَسَّسَتْ أَساسَ الظُّلْمِ وَالجَوْرِ عَلَيْكُمْ أَهْلَ البَيْتِ، وَلَعَنَ اللهُ أُمَّةً دَفَعَتْكُمْ عَنْ مَقامِكُمْ وَأَزالَتْكُمْ عَنْ مَراتِبِكُمُ الَّتِي رَتَّبَكُمُ اللهُ فِيها.
يا أَبا عَبْدِ اللهِ، إِنِّي سِلْمٌ لِمَنْ سالَمَكُمْ وَحَرْبٌ لِمَنْ حارَبَكُمْ إِلى يَوْمِ القِيامَةِ.
اللَّهُمَّ اجْعَلْنِي فِي مَقامِي هذا مِمَّنْ تَنالُهُ مِنْكَ صَلَواتٌ وَرَحْمَةٌ وَمَغْفِرَةٌ. اللَّهُمَّ اجْعَلْ مَحْيايَ مَحْيا مُحَمَّدٍ وَآلِ مُحَمَّدٍ، وَمَماتِي مَماتَ مُحَمَّدٍ وَآلِ مُحَمَّدٍ.
اللَّهُمَّ ارْزُقْنِي شَفاعَةَ الحُسَيْنِ يَوْمَ الوُرُودِ، وَثَبِّتْ لِي قَدَمَ صِدْقٍ عِنْدَكَ مَعَ الحُسَيْنِ وَأَصْحابِ الحُسَيْنِ، الَّذِينَ بَذَلُوا مُهَجَهُمْ دُونَ الحُسَيْنِ عَلَيْهِ السَّلامُ.`,
    textEn: `Peace be upon you, O Aba Abdillah! Peace be upon you, O son of the Messenger of Allah! Peace be upon you, O son of the Commander of the Faithful and master of successors! Peace be upon you, O son of Fatimah, the lady of the women of the worlds!
Peace be upon you, O unavenged blood of Allah, and the son of His unavenged blood. Upon you all be the peace of Allah forever, as long as I remain and as long as night and day endure.
O Aba Abdillah! I am at peace with those who make peace with you, and at war with those who make war with you until the Day of Resurrection.
O Allah, make my life the life of Muhammad and his Household, and my death the death of Muhammad and his Household!`
  },

  // 2. Ziyarah Warith
  {
    id: 'warith',
    titleAr: 'زِيَارَةُ وَارِث',
    titleEn: 'Ziyarah Warith',
    targetAr: 'الإمام الحسين بن علي (عليهما السلام)',
    targetEn: 'Imam Hussain ibn Ali (p)',
    category: 'karbala',
    virtueAr: 'مروية عن الإمام جعفر الصادق (ع) في "كامل الزيارات"، تؤكد أن الإمام الحسين وارث أنبياء الله ورسالات التوحيد من آدم ونوح وإبراهيم وموسى وعيسى إلى المصطفى ﷺ.',
    virtueEn: 'Narrated by Imam Ja\'far al-Sadiq in Kamil al-Ziyarat, affirming Imam Hussain as the spiritual inheritor of prophetic monotheism.',
    duration: '05:30',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/warith.mp3' },
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/warith_basim.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكَ يا وارِثَ آدَمَ صَفْوَةِ اللهِ،
السَّلامُ عَلَيْكَ يا وارِثَ نُوحٍ نَبِيِّ اللهِ،
السَّلامُ عَلَيْكَ يا وارِثَ إِبْراهِيمَ خَلِيلِ اللهِ،
السَّلامُ عَلَيْكَ يا وارِثَ مُوسى كَلِيمِ اللهِ،
السَّلامُ عَلَيْكَ يا وارِثَ عِيسى رُوحِ اللهِ،
السَّلامُ عَلَيْكَ يا وارِثَ مُحَمَّدٍ حَبِيبِ اللهِ،
السَّلامُ عَلَيْكَ يا وارِثَ أَمِيرِ المُؤْمِنِينَ عَلَيْهِ السَّلامُ،
السَّلامُ عَلَيْكَ يا وارِثَ فاطِمَةَ الزَّهْراءِ،
السَّلامُ عَلَيْكَ يا وارِثَ الحَسَنِ المُجْتَبى،
السَّلامُ عَلَيْكَ يَابْنَ رَسُولِ اللهِ.
أَشْهَدُ أَنَّكَ قَدْ أَقَمْتَ الصَّلاةَ، وَآتَيْتَ الزَّكاةَ، وَأَمَرْتَ بِالمَعْرُوفِ، وَنَهَيْتَ عَنِ المُنْكَرِ، وَأَطَعْتَ اللهَ وَرَسُولَهُ حَتّى أَتاكَ اليَقِينُ.
فَلَعَنَ اللهُ أُمَّةً قَتَلَتْكَ، وَلَعَنَ اللهُ أُمَّةً ظَلَمَتْكَ، وَلَعَنَ اللهُ أُمَّةً سَمِعَتْ بِذلِكَ فَرَضِيَتْ بِهِ.
يا مَوْلايَ يا أَبا عَبْدِ اللهِ، أَشْهَدُ أَنَّكَ كُنْتَ نُوراً فِي الأَصْلابِ الشَّامِخَةِ، وَالأَرْحامِ المُطَهَّرَةِ.`,
    textEn: `Peace be upon you, O inheritor of Adam, the elect of Allah! Peace be upon you, O inheritor of Noah, the prophet of Allah! Peace be upon you, O inheritor of Abraham, the intimate friend of Allah! Peace be upon you, O inheritor of Moses, the interlocutor of Allah! Peace be upon you, O inheritor of Jesus, the spirit of Allah! Peace be upon you, O inheritor of Muhammad, the beloved of Allah!`
  },

  // 3. Ziyarah of the Prophet Muhammad (pbuh)
  {
    id: 'prophet',
    titleAr: 'زِيَارَةُ النَّبِيِّ الأَعْظَمِ مُحَمَّدٍ ﷺ',
    titleEn: 'Ziyarah of the Holy Prophet Muhammad (pbuh)',
    targetAr: 'رسول الله وخاتم الأنبياء محمد بن عبد الله ﷺ',
    targetEn: 'Prophet Muhammad (peace be upon him and his holy progeny)',
    category: 'prophet',
    virtueAr: 'قال رسول الله ﷺ في الكافي: "من زارني حياً أو ميتاً كنتُ له شفيعاً يوم القيامة". مروية في "الفقيه" و"التهذيب" و"كامل الزيارات".',
    virtueEn: 'The Prophet stated: "Whoever visits me in life or after passing, I shall be their intercessor on the Day of Judgment."',
    duration: '07:20',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/prophet_tammar.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/prophet_abather.mp3' }
    ],
    textAr: `أَشْهَدُ أَنْ لا إِلـهَ إِلاّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّكَ مُحَمَّدُ بْنُ عَبْدِ اللهِ، وَأَشْهَدُ أَنَّكَ خاتَمُ النَّبِيِّينَ وَسَيِّدُ المُرْسَلِينَ.
السَّلامُ عَلَيْكَ يا رَسُولَ اللهِ، السَّلامُ عَلَيْكَ يا صَفْوَةَ اللهِ، السَّلامُ عَلَيْكَ يا حَبِيبَ اللهِ.
أَشْهَدُ يا رَسُولَ اللهِ أَنَّكَ قَدْ بَلَّغْتَ الرِّسالاتِ، وَنَصَحْتَ لِأُمَّتِكَ، وَجاهَدْتَ فِي سَبِيلِ اللهِ، وَعَبَدْتَهُ حَتّى أَتاكَ اليَقِينُ.
فَبَلَّغَ اللهُ بِكَ أَشْرَفَ مَحَلِّ المُكَرَّمِينَ، وَأَعْلى مَنازِلِ المُقَرَّبِينَ.
اللَّهُمَّ صَلِّ عَلى مُحَمَّدٍ وَآلِ مُحَمَّدٍ، وَاجْعَلْ جَوامِعَ صَلَواتِكَ، وَنَوامِيَ بَرَكاتِكَ، عَلى سَيِّدِ المُرْسَلِينَ وَإِمامِ المُتَّقِينَ مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ وَصَفِيِّكَ وَخِيَرَتِكَ مِنْ خَلْقِكَ.`,
    textEn: `I bear witness that there is no god but Allah alone with no associate, and I bear witness that you are Muhammad, son of Abdullah, seal of prophets and master of messengers. Peace be upon you, O Messenger of Allah! Peace be upon you, O chosen of Allah!`
  },

  // 4. Ziyarah Ameenullah (Imam Ali & All Imams)
  {
    id: 'ameenullah',
    titleAr: 'زِيَارَةُ أَمِينِ اللهِ (لأمير المؤمنين وسائر الأئمة)',
    titleEn: 'Ziyarah Ameenullah',
    targetAr: 'أمير المؤمنين الإمام علي بن أبي طالب (ع) وكافة الأئمة',
    targetEn: 'Imam Ali ibn Abi Talib and all Infallibles',
    category: 'ali',
    virtueAr: 'من أصح الزيارات سنداً؛ أنشأها الإمام زين العابدين (ع) عند ضريح جده أمير المؤمنين بالنجف، وتزار بها كافة قبور الأئمة الأطهار.',
    virtueEn: 'One of the most authenticated prayers, recited by Imam Zayn al-Abidin at the sacred shrine of Imam Ali in Najaf.',
    duration: '06:15',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/ameenullah.mp3' },
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/ameenullah_basim.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكَ يا أَمِينَ الله فِي أَرْضِهِ، وَحُجَّتَهُ عَلى عِبادِهِ، السَّلامُ عَلَيْكَ يا أَمِيرَ المُؤْمِنِينَ.
أَشْهَدُ أَنَّكَ جاهَدْتَ فِي الله حَقَّ جِهادِهِ، وَعَمِلْتَ بِكِتابِهِ، وَاتَّبَعْتَ سُنَنَ نَبِيِّهِ صَلّى الله عَلَيْهِ وَآلِهِ، حَتّى دَعاكَ الله إِلى جِوارِهِ، فَقَبَضَكَ إِلَيْهِ بِاخْتِيارِهِ.
اللّهُمَّ فَاجْعَلْ نَفْسِي مُطْمَئِنَّةً بِقَدَرِكَ، راضِيَةً بِقَضائِكَ، مُولَعَةً بِذِكْرِكَ وَدُعائِكَ، مُحِبَّةً لِصَفْوَةِ أَوْلِيائِكَ، مَحْبُوبَةً فِي أَرْضِكَ وَسَمائِكَ، صابِرَةً عَلى نُزُولِ بَلائِكَ، شاكِرَةً لِفَواضِلِ نَعْمائِكَ، ذاكِرَةً لِسَوابِغِ آلائِكَ، مُشْتاقَةً إِلى فَرْحَةِ لِقائِكَ، مُتَزَوِّدَةً التَّقْوى لِيَوْمِ جَزائِكَ، مُسْتَنَّةً بِسُنَنِ أَوْلِيائِكَ، مُفارِقَةً لِأَخْلاقِ أَعْدائِكَ، مَشْغُولَةً عَنِ الدُّنْيا بِحَمْدِكَ وَثَنائِكَ.`,
    textEn: `Peace be upon you, O trustee of Allah upon His earth, and His proof over His servants! Peace be upon you, O Commander of the Faithful! O Allah, make my soul tranquil with Your decree, pleased with Your determination, devoted to Your remembrance and invocation.`
  },

  // 5. Ziyarah of Lady Fatima az-Zahra (sa)
  {
    id: 'fatima',
    titleAr: 'زِيَارَةُ سَيِّدَةِ النِّسَاءِ فَاطِمَةَ الزَّهْرَاءِ (ع)',
    titleEn: 'Ziyarah of Lady Fatima az-Zahra',
    targetAr: 'الصديقة الطاهرة بضعة المصطفى وسيدة نساء العالمين',
    targetEn: 'Lady Fatima az-Zahra (peace be upon her)',
    category: 'fatima',
    virtueAr: 'مروية في "التهذيب" و"من لا يحضره الفقيه" بسند معتبر عن الإمام الباقر (ع)، وتبين مقام امتحانها وصبرها وطهارتها القدسية.',
    virtueEn: 'Reported in Tahdhib al-Ahkam and Man La Yahduruhu al-Faqih from Imam al-Baqir, honoring the Queen of Women.',
    duration: '04:40',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/fatima_tammar.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/fatima_abather.mp3' }
    ],
    textAr: `يا مُمْتَحَنَةُ، امْتَحَنَكِ اللهُ الَّذِي خَلَقَكِ قَبْلَ أَنْ يَخْلُقَكِ، فَوَجَدَكِ لِما امْتَحَنَكِ صابِرَةً.
وَزَعَمْنا أَنَّا لَكِ أَوْلِياءُ وَمُصَدِّقُونَ، وَصابِرُونَ لِكُلِّ ما أَتى بِهِ أَبُوكِ صَلَّى اللهُ عَلَيْهِ وَآلِهِ، وَأَتى بِهِ وَصِيُّهُ.
فَإِنَّا نَسْأَلُكِ إِنْ كُنَّا صَدَّقْناكِ إِلاّ أَلْحَقْتِنا بِتَصْدِيقِنا لَهُما، لِنُبَشِّرَ أَنْفُسَنا بِأَنَّا قَدْ طَهُرْنا بِوِلايَتِكِ.
السَّلامُ عَلَيْكِ يا بِنْتَ رَسُولِ اللهِ، السَّلامُ عَلَيْكِ يا بِنْتَ نَبِيِّ اللهِ، السَّلامُ عَلَيْكِ يا زَوْجَةَ وَلِيِّ اللهِ، السَّلامُ عَلَيْكِ يا أُمَّ الحَسَنِ وَالحُسَيْنِ سَيِّدَيْ شَبابِ أَهْلِ الجَنَّةِ، السَّلامُ عَلَيْكِ أَيَّتُهَا الصِّدِّيقَةُ الشَّهِيدَةُ.`,
    textEn: `O examined one! Allah who created you tested you before creating you, and found you steadfast through that trial. We affirm that we are your loyal followers, professing faith in all brought by your father and his successor. Peace be upon you, O truthful martyr!`
  },

  // 6. Ziyarah of Abu al-Fadl al-Abbas (as)
  {
    id: 'abbas',
    titleAr: 'زِيَارَةُ أَبِي الفَضْلِ العَبَّاسِ (ع)',
    titleEn: 'Ziyarah of Abu al-Fadl al-Abbas',
    targetAr: 'قمر بني هاشم وساقي عطاشى كربلاء',
    targetEn: 'Abu al-Fadl al-Abbas ibn Ali',
    category: 'karbala',
    virtueAr: 'مروية في "كامل الزيارات" عن الإمام الصادق (ع)، تؤكد تسليمه ووفاءه وتضحيته العظمى لنصرة حجة زمانه الإمام الحسين (ع).',
    virtueEn: 'Transmitted by Imam al-Sadiq in Kamil al-Ziyarat, celebrating the steadfast courage and ultimate loyalty of al-Abbas.',
    duration: '04:50',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/abbas.mp3' },
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/abbas_basim.mp3' }
    ],
    textAr: `سَلامُ اللهِ وَسَلامُ مَلائِكَتِهِ المُقَرَّبِينَ، وَأَنْبِيائِهِ المُرْسَلِينَ، وَعِبادِهِ الصَّالِحِينَ، وَجَمِيعِ الشُّهَداءِ وَالصِّدِّيقِينَ، وَالزَّاكِياتِ الطَّيِّباتِ فِيما تَغْتَدِي وَتَرُوحُ، عَلَيْكَ يَابْنَ أَمِيرِ المُؤْمِنِينَ.
أَشْهَدُ لَكَ بِالتَّسْلِيمِ، وَالتَّصْدِيقِ، وَالوَفاءِ، وَالنَّصِيحَةِ، لِخَلَفِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَآلِهِ المُرْسَلِ، وَالسِّبْطِ المُنْتَجَبِ، وَالدَّلِيلِ العالِمِ.
فَجَزاكَ اللهُ عَنْ رَسُولِهِ، وَعَنْ أَمِيرِ المُؤْمِنِينَ، وَعَنِ الحَسَنِ وَالحُسَيْنِ، صَلَواتُ اللهِ عَلَيْهِمْ، أَفْضَلَ الجَزاءِ بِما صَبَرْتَ، وَاحْتَسَبْتَ، وَأَعَنْتَ.
أَشْهَدُ أَنَّكَ قُتِلْتَ مَظْلُوماً، وَأَنَّ اللهَ مُنْجَزٌ لَكُمْ ما وَعَدَكُمْ.`,
    textEn: `The peace of Allah and His proximate angels and prophets be upon you, O son of the Commander of the Faithful! I bear witness to your submission, fidelity, and supreme loyalty to the grandson of the Prophet!`
  },

  // 7. Ziyarah of the Imams of al-Baqi (as)
  {
    id: 'baqi',
    titleAr: 'زِيَارَةُ أَئِمَّةِ البَقِيعِ (الحسن، السجاد، الباقر، الصادق ع)',
    titleEn: 'Ziyarah of the Four Imams of al-Baqi',
    targetAr: 'الإمام الحسن، الإمام السجاد، الإمام الباقر، الإمام الصادق',
    targetEn: 'Imams al-Hasan, al-Sajjad, al-Baqir, and al-Sadiq',
    category: 'baqi',
    virtueAr: 'مروية في كتب المزار الشيعية لزيارة قبور أئمة الهدى الأربعة المدفونين في جنة البقيع بالمدينة المنورة بجوار جدهم المصطفى ﷺ.',
    virtueEn: 'Salutations upon the four Infallible Imams resting in the historic Baqi cemetery in Medina.',
    duration: '06:00',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/baqi.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/baqi_abather.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكُمْ أَئِمَّةَ الهُدى، السَّلامُ عَلَيْكُمْ أَهْلَ التَّقْوى، السَّلامُ عَلَيْكُمْ أَيُّهَا الحُجَجُ عَلى أَهْلِ الدُّنْيا.
السَّلامُ عَلَيْكَ يا أَبا مُحَمَّدٍ الحَسَنَ بْنَ عَلِيٍّ المُجْتَبى، السَّلامُ عَلَيْكَ يا سَيِّدَ العابِدِينَ عَلِيَّ بْنَ الحُسَيْنِ، السَّلامُ عَلَيْكَ يا باقِرَ عِلْمِ النَّبِيِّينَ مُحَمَّدَ بْنَ عَلِيٍّ، السَّلامُ عَلَيْكَ يا صَادِقَ العِتْرَةِ جَعْفَرَ بْنَ مُحَمَّدٍ.
أَشْهَدُ أَنَّكُمُ الأَئِمَّةُ الرَّاشِدُونَ المَهْدِيُّونَ، وَأَنَّكُمْ قَدْ بَلَّغْتُمْ عَنِ اللهِ جَلَّ وَعَلا، وَنَصَحْتُمْ لِعِبادِهِ، وَصَبَرْتُمْ فِي ذاتِ اللهِ حَتّى أَتاكُمُ اليَقِينُ.
جِئْتُكُمْ عارِفاً بِحَقِّكُمْ، مُسْتَبْصِراً بِشَأْنِكُمْ، مُعادِياً لِأَعْدائِكُمْ، مُوالِياً لِأَوْلِيائِكُمْ، بِأَبِي أَنْتُمْ وَأُمِّي وَنَفْسِي وَأَهْلِي وَمالِي.`,
    textEn: `Peace be upon you, O guides of light! Peace be upon you, O people of piety! Peace be upon you, O proofs of Allah upon mankind! Peace be upon al-Hasan al-Mujtaba, Ali Zayn al-Abidin, Muhammad al-Baqir, and Ja'far al-Sadiq!`
  },

  // 8. Ziyarah of Imam Musa al-Kadhim & Imam Muhammad al-Jawad (al-Kadhimayn)
  {
    id: 'kadhimayn',
    titleAr: 'زِيَارَةُ الإِمَامَيْنِ الجَوَادَيْنِ (الكَاظِمِ وَالجَوَادِ ع)',
    titleEn: 'Ziyarah of the Two Jawads (al-Kadhimayn)',
    targetAr: 'الإمام موسى بن جعفر الكاظم والإمام محمد بن علي الجواد (ع)',
    targetEn: 'Imam Musa al-Kadhim & Imam Muhammad al-Jawad (peace be upon them)',
    category: 'kadhimayn',
    virtueAr: 'مروية في "التهذيب" و"كامل الزيارات" لزيارة الروضة الكاظمية المطهرة في بغداد، باب الحوائج ومعدن الجود والكرم الإلهي.',
    virtueEn: 'Reported for visiting the golden shrine of al-Kadhimayn in Baghdad, gates to divine mercy and boundless generosity.',
    duration: '06:45',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/kadhimayn_tammar.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/kadhimayn_abather.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكُما يا وَلِيَّيِ اللهِ وَحُجَّتَيْهِ، السَّلامُ عَلَيْكُما يا نُورَيِ اللهِ فِي ظُلُماتِ الأَرْضِ.
السَّلامُ عَلَيْكَ يا مَوْلايَ يا مُوسى بْنَ جَعْفَرٍ، الكاظِمَ الغَيْظَ، وَالصَّابِرَ عَلَى الرَّزايا، السَّلامُ عَلَيْكَ يا بابَ الحَوائِجِ.
السَّلامُ عَلَيْكَ يا مَوْلايَ يا مُحَمَّدَ بْنَ عَلِيٍّ، الجَوادَ الكَرِيمَ، الإِمامَ البَرَّ التَّقِيَّ الزَّكِيَّ.
أَشْهَدُ أَنَّكُما قَدْ أَقَمْتُما الصَّلاةَ، وَآتَيْتُما الزَّكاةَ، وَأَمَرْتُما بِالمَعْرُوفِ، وَنَهَيْتُما عَنِ المُنْكَرِ، وَجاهَدْتُما فِي اللهِ حَقَّ جِهادِهِ.
أَتَيْتُكُما زائِراً عارِفاً بِحَقِّكُما، مُعادِياً لِأَعْدائِكُما، مُوالِياً لِأَوْلِيائِكُما، فَاشْفَعا لِي عِنْدَ رَبِّكُما فِي قَضاءِ حَوائِجِي.`,
    textEn: `Peace be upon you both, O intimate guardians of Allah and His two proofs! Peace be upon Musa ibn Ja'far, who swallowed anger and endured imprisonment! Peace be upon Muhammad ibn Ali al-Jawad, the fountainhead of boundless generosity!`
  },

  // 9. Ziyarah of Imam Ali al-Rida (as)
  {
    id: 'rida',
    titleAr: 'زِيَارَةُ أَنِيسِ النُّفُوسِ الإِمَامِ الرِّضَا (ع)',
    titleEn: 'Ziyarah of Imam Ali ibn Musa al-Rida',
    targetAr: 'الإمام الرؤوف ثامن الحجج علي بن موسى الرضا (ع)',
    targetEn: 'Imam Ali al-Rida (peace be upon him)',
    category: 'rida',
    virtueAr: 'قال الإمام الصادق (ع) في الكافي: يخرج رجل من ولدي يُدفن بأرض خراسان، ما زاره مكروب إلا فرج الله كربته ولا مذنب إلا غفر الله ذنوبه.',
    virtueEn: 'Reported in Al-Kafi and Uyun Akhbar al-Rida: visiting the 8th Imam in Mashhad grants forgiveness and relief of distress.',
    duration: '07:10',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/rida.mp3' },
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/rida_basim.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكَ يا حُجَّةَ اللهِ فِي أَرْضِهِ، وَعَيْنَهُ فِي خَلْقِهِ.
السَّلامُ عَلَيْكَ يا نُورَ اللهِ الَّذِي يَهْتَدِي بِهِ المُهْتَدُونَ، وَيُفَرَّجُ بِهِ عَنِ المُؤْمِنِينَ.
السَّلامُ عَلَيْكَ يا عَلِيَّ بْنَ مُوسى الرِّضا المُرْتَضى، السَّلامُ عَلَيْكَ أَيُّهَا الإِمامُ الرَّؤُوفُ، السَّلامُ عَلَيْكَ أَيُّهَا الصِّدِّيقُ الشَّهِيدُ.
أَشْهَدُ أَنَّكَ قَدْ أَقَمْتَ الصَّلاةَ، وَآتَيْتَ الزَّكاةَ، وَأَمَرْتَ بِالمَعْرُوفِ، وَنَهَيْتَ عَنِ المُنْكَرِ، وَعَبَدْتَ اللهَ مُخْلِصاً حَتّى أَتاكَ اليَقِينُ.
السَّلامُ عَلَيْكَ يا مَوْلايَ وَرَحْمَةُ اللهِ وَبَرَكاتُهُ، أَتَيْتُكَ عارِفاً بِحَقِّكَ، مُوالِياً لِأَوْلِيائِكَ، مُعادِياً لِأَعْدائِكَ، فَاشْفَعْ لِي عِنْدَ رَبِّكَ.`,
    textEn: `Peace be upon you, O proof of Allah on His earth! Peace be upon you, O Ali ibn Musa al-Rida, the gentle and compassionate Imam, the truthful martyr! Intercede for me with your Lord.`
  },

  // 10. Ziyarah of Imam Ali al-Hadi & Imam Hasan al-Askari (al-Askariyayn)
  {
    id: 'askariyayn',
    titleAr: 'زِيَارَةُ الإِمَامَيْنِ العَسْكَرِيَّيْنِ (الهَادِي وَالعَسْكَرِيِّ ع)',
    titleEn: 'Ziyarah of the Two Askari Imams (Samarra)',
    targetAr: 'الإمام علي بن محمد الهادي والإمام الحسن بن علي العسكري (ع)',
    targetEn: 'Imam Ali al-Hadi & Imam al-Hasan al-Askari',
    category: 'askariyayn',
    virtueAr: 'مروية لزيارة المرقدين الشريفين بسامراء، معقل نور الإمامة ومولد الحجة بن الحسن المهدي (عج).',
    virtueEn: 'Honoring the 10th and 11th Infallible Imams in Samarra, parents and protectors of the promised Mahdi.',
    duration: '06:10',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/askariyayn_tammar.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/askariyayn_abather.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكُما يا وَلِيَّيِ اللهِ، السَّلامُ عَلَيْكُما يا حُجَّتَيِ اللهِ، السَّلامُ عَلَيْكُما يا نُورَيِ اللهِ فِي ظُلُماتِ الأَرْضِ.
السَّلامُ عَلَيْكَ يا أَبَا الحَسَنِ عَلِيَّ بْنَ مُحَمَّدٍ الهادِيَ النَّقِيَّ، السَّلامُ عَلَيْكَ يا صاحِبَ الزِّيارَةِ الجامِعَةِ الكَبِيرَةِ.
السَّلامُ عَلَيْكَ يا أَبَا مُحَمَّدٍ الحَسَنَ بْنَ عَلِيٍّ العَسْكَرِيَّ الزَّكِيَّ، السَّلامُ عَلَيْكَ يا والِدَ الحُجَّةِ المُنْتَظَرِ.
أَشْهَدُ أَنَّكُما قَدْ بَلَّغْتُما عَنِ اللهِ ما أَنْزَلَهُ، وَصَدَعْتُما بِأَمْرِهِ، وَجاهَدْتُما فِي سَبِيلِهِ، وَصَبَرْتُما عَلَى الأَذى فِي جَنْبِهِ.
صَلَواتُ اللهِ عَلَيْكُما وَعَلى أَرْواحِكُما وَأَجْسادِكُما وَرَحْمَةُ اللهِ وَبَرَكاتُهُ.`,
    textEn: `Peace be upon you both, O guardians of Allah! Peace be upon Ali ibn Muhammad al-Hadi al-Naqi, and peace be upon al-Hasan ibn Ali al-Askari, father of the awaited proof!`
  },

  // 11. Ziyarah Al Yasin (Imam al-Mahdi)
  {
    id: 'alyasin',
    titleAr: 'زِيَارَةُ آلِ يَاسِين (لإمام الزمان المهدي عج)',
    titleEn: 'Ziyarah Al Yasin',
    targetAr: 'الإمام المهدي المنتظر الحجة بن الحسن (عجل الله فرجه)',
    targetEn: 'Imam al-Mahdi (may Allah hasten his relief)',
    category: 'mahdi',
    virtueAr: 'وردت بتوقيع مقدس عن الناحية المقدسة، رواها الطبرسي في الاحتجاج والمجلسي في البحار، وهي من أرقى وأقدس مناجاة للمؤمن مع إمام زمانه.',
    virtueEn: 'Authorized sacred visitation transmitted directly through the Holy Representative, establishing profound bond with the living Imam.',
    duration: '08:00',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/alyasin.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/alyasin_abather.mp3' },
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/alyasin_basim.mp3' }
    ],
    textAr: `سَلامٌ عَلى آلِ يس، السَّلامُ عَلَيْكَ يا داعِيَ اللهِ وَرَبَّانِيَّ آياتِهِ،
السَّلامُ عَلَيْكَ يا بابَ اللهِ وَدَيَّانَ دِينِهِ،
السَّلامُ عَلَيْكَ يا خَلِيفَةَ اللهِ وَناصِرَ حَقِّهِ،
السَّلامُ عَلَيْكَ يا حُجَّةَ اللهِ وَدَلِيلَ إِرادَتِهِ،
السَّلامُ عَلَيْكَ فِي آناءِ لَيْلِكَ وَأَطْرافِ نَهارِكَ،
السَّلامُ عَلَيْكَ يا بَقِيَّةَ اللهِ فِي أَرْضِهِ،
السَّلامُ عَلَيْكَ يا مِيثاقَ اللهِ الَّذِي أَخَذَهُ وَوَكَّدَهُ،
السَّلامُ عَلَيْكَ حِينَ تَقُومُ، السَّلامُ عَلَيْكَ حِينَ تَقْعُدُ،
السَّلامُ عَلَيْكَ حِينَ تَقْرَأُ وَتُبَيِّنُ، السَّلامُ عَلَيْكَ حِينَ تُصَلِّي وَتَقْنُتُ،
السَّلامُ عَلَيْكَ حِينَ تَرْكَعُ وَتَسْجُدُ، السَّلامُ عَلَيْكَ حِينَ تُهَلِّلُ وَتُكَبِّرُ،
السَّلامُ عَلَيْكَ حِينَ تَحْمَدُ وَتَسْتَغْفِرُ، السَّلامُ عَلَيْكَ حِينَ تُصْبِحُ وَتُمْسِي.
أَشْهَدُ يا مَوْلايَ أَنَّكَ الحُجَّةُ البالِغَةُ، وَأَنَّ نَفْسِي مُؤْمِنَةٌ بِاللهِ وَبِرَسُولِهِ وَبِأَمِيرِ المُؤْمِنِينَ وَبِكُمْ يا مَوْلايَ أَوَّلِكُمْ وَآخِرِكُمْ.`,
    textEn: `Peace be upon the family of Yasin! Peace be upon you, O caller to Allah! Peace be upon you when you stand, when you sit, when you recite, when you pray, and when you prostrate! I bear witness that you are the decisive proof of Allah.`
  },

  // 12. Al-Ziyarah Al-Jami'ah Al-Kabirah (All Infallibles)
  {
    id: 'jamiah',
    titleAr: 'الزِّيَارَةُ الجَامِعَةُ الكَبِيرَةُ (لِكُلِّ الأَئِمَّةِ ع)',
    titleEn: 'Al-Ziyarah Al-Jami’ah Al-Kabirah',
    targetAr: 'كافة الأئمة الاثني عشر المعصومين (عليهم السلام)',
    targetEn: 'All the Twelve Infallible Imams',
    category: 'general',
    virtueAr: 'مروية في "من لا يحضره الفقيه" للصدوق و"تهذيب الأحكام" للطوسي عن الإمام علي الهادي (ع)، أجمع نص عقائدي وعرفاني في بيان مقامات أهل البيت وولاية الله التكوينية والتشريعية.',
    virtueEn: 'Reported in Man La Yahduruhu al-Faqih and Tahdhib al-Ahkam from Imam al-Hadi; the pinnacle of theological depth on the status of Ahl al-Bayt.',
    duration: '22:00',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/jamiah.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/jamiah_abather.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكُمْ يا أَهْلَ بَيْتِ النُّبُوَّةِ، وَمَوْضِعَ الرِّسالَةِ، وَمُخْتَلَفَ المَلائِكَةِ، وَمَهْبِطَ الوَحْيِ، وَمَعْدِنَ الرَّحْمَةِ، وَخُزَّانَ العِلْمِ، وَمُنْتَهى الحِلْمِ، وَأُصُولَ الكَرَمِ، وَقادَةَ الأُمَمِ، وَأَوْلِياءَ النِّعَمِ، وَعَناصِرَ الأَبْرارِ، وَدَعائِمَ الأَخْيارِ، وَساسَةَ العِبادِ، وَأَرْكانَ البِلادِ، وَأَبْوابَ الإِيمانِ، وَأُمَناءَ الرَّحْمنِ، وَسُلالَةَ النَّبِيِّينَ، وَصَفْوَةَ المُرْسَلِينَ، وَعِتْرَةَ خِيَرَةِ رَبِّ العالَمِينَ.
أَشْهَدُ أَنْ لا إِلهَ إِلاّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ، كَما شَهِدَ اللهُ لِنَفْسِهِ، وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ المُنْتَجَبُ، وَرَسُولُهُ المُرْتَضى.
وَأَشْهَدُ أَنَّكُمُ الأَئِمَّةُ الرَّاشِدُونَ المَهْدِيُّونَ، المَعْصُومُونَ المُكَرَّمُونَ، المُقَرَّبُونَ المُتَّقُونَ، الصَّادِقُونَ المُصْطَفَوْنَ، المُطِيعُونَ لِلهِ، القَوَّامُونَ بِأَمْرِهِ، العامِلُونَ بِإِرادَتِهِ، الفائِزُونَ بِكَرامَتِهِ.`,
    textEn: `Peace be upon you, O Household of the Prophet, the abode of divine message, the descending place of angels, the focal point of revelation, the fountain of mercy, and the custodians of divine knowledge!`
  },

  // 13. Ziyarah of Lady Zaynab al-Kubra (sa)
  {
    id: 'zainab',
    titleAr: 'زِيَارَةُ عَقِيلَةِ الهَاشِمِيِّينَ زَيْنَبَ الكُبْرَى (ع)',
    titleEn: 'Ziyarah of Lady Zaynab bint Ali',
    targetAr: 'بطلة كربلاء عقيلة الطالبيين زينب بنت أمير المؤمنين (ع)',
    targetEn: 'Lady Zaynab bint Ali (peace be upon her)',
    category: 'general',
    virtueAr: 'زيارة مأثورة لعقيلة بني هاشم وشريكة الإمام الحسين في النهضة وصوت الحق الصادع في وجه طغاة الكوفة والشام.',
    virtueEn: 'Honoring the voice of Karbala and heroic protector of the holy household whose speeches shook the tyrant courts.',
    duration: '05:10',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/zainab.mp3' },
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/zainab_basim.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكِ يا بِنْتَ سَيِّدِ الأَنْبِياءِ، السَّلامُ عَلَيْكِ يا بِنْتَ سَيِّدِ الأَوْصِياءِ، السَّلامُ عَلَيْكِ يا بِنْتَ فاطِمَةَ الزَّهْراءِ سَيِّدَةِ نِساءِ العالَمِينَ.
السَّلامُ عَلَيْكِ يا أُخْتَ الحَسَنِ وَالحُسَيْنِ سَيِّدَيْ شَبابِ أَهْلِ الجَنَّةِ.
السَّلامُ عَلَيْكِ يا عَقِيلَةَ بَنِي هاشِمٍ، السَّلامُ عَلَيْكِ يا امْرَأَةً صَبُورَةً مُحْتَسِبَةً، السَّلامُ عَلَيْكِ يا مَنْ خَطَبَتْ فِي مَجالِسِ الظَّالِمِينَ خُطَبَ الصِّدِّيقِينَ.
أَشْهَدُ أَنَّكِ كُنْتِ لِأَخِيكِ الحُسَيْنِ ناصِرَةً وَشَرِيكَةً فِي نَهْضَتِهِ، كَلَّمْتِ الطُّغاةَ بِكَلِماتِ الحَقِّ، وَصَبَرْتِ عَلى المَصائِبِ ابْتِغاءَ مَرْضاةِ اللهِ.`,
    textEn: `Peace be upon you, O daughter of the master of prophets! Peace be upon you, O daughter of the master of successors! Peace be upon you, O sister of al-Hasan and al-Hussain!`
  },

  // 14. Ziyarah of Ali al-Akbar and the Martyrs of Karbala
  {
    id: 'shuhada',
    titleAr: 'زِيَارَةُ عَلِيٍّ الأَكْبَرِ وَشُهَدَاءِ الطَّفِّ (ع)',
    titleEn: 'Ziyarah of Ali al-Akbar & Martyrs of Karbala',
    targetAr: 'علي بن الحسين الأكبر وشيعة الحسين المستشهدين معه',
    targetEn: 'Ali al-Akbar and the 72 Martyrs of Karbala',
    category: 'karbala',
    virtueAr: 'مروية في "كامل الزيارات" عن الإمام الصادق (ع): "طِبْتُمْ وَطابَتِ الأَرْضُ الَّتِي فِيها دُفِنْتُمْ، وَفُزْتُمْ فَوْزاً عَظِيماً".',
    virtueEn: 'Honoring Ali al-Akbar (who resembled the Prophet in form and ethics) and the faithful companions who laid down their lives.',
    duration: '04:30',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/shuhada_tammar.mp3' },
      { id: 'abather', nameAr: 'الحاج أباذر الحلواجي', nameEn: 'Abather al-Halwachi', url: 'https://cdn.islamic.network/audio/ziyarah/shuhada_abather.mp3' }
    ],
    textAr: `السَّلامُ عَلَيْكَ يا أَوَّلَ قَتِيلٍ مِنْ نَسْلِ خَيْرِ سَلِيلٍ، مِنْ سُلالَةِ إِبْراهِيمَ الخَلِيلِ، صَلَّى اللهُ عَلَيْكَ وَعَلى أَبِيكَ، إِذْ قالَ فِيكَ: قَتَلَ اللهُ قَوْماً قَتَلُوكَ يا بُنَيَّ، ما أَجْرَأَهُمْ عَلَى الرَّحْمنِ وَعَلَى انْتِهاكِ حُرْمَةِ الرَّسُولِ.
السَّلامُ عَلَيْكُمْ يا أَوْلِياءَ اللهِ وَأَحِبَّائَهُ، السَّلامُ عَلَيْكُمْ يا أَصْفِياءَ اللهِ وَأَوِدَّائَهُ، السَّلامُ عَلَيْكُمْ يا أَنْصارَ دِينِ اللهِ، السَّلامُ عَلَيْكُمْ يا أَنْصارَ رَسُولِ اللهِ، السَّلامُ عَلَيْكُمْ يا أَنْصارَ أَمِيرِ المُؤْمِنِينَ، السَّلامُ عَلَيْكُمْ يا أَنْصارَ فاطِمَةَ الزَّهْراءِ، السَّلامُ عَلَيْكُمْ يا أَنْصارَ أَبِي مُحَمَّدٍ الحَسَنِ، السَّلامُ عَلَيْكُمْ يا أَنْصارَ أَبِي عَبْدِ اللهِ الحُسَيْنِ.
بِأَبِي أَنْتُمْ وَأُمِّي طِبْتُمْ وَطابَتِ الأَرْضُ الَّتِي فِيها دُفِنْتُمْ، وَفُزْتُمْ فَوْزاً عَظِيماً، فَيا لَيْتَنِي كُنْتُ مَعَكُمْ فَأَفُوزَ مَعَكُمْ.`,
    textEn: `Peace be upon you, O first martyr from the noble lineage of Ibrahim al-Khalil! Peace be upon you, O faithful companions of Abu Abdillah al-Hussain! Blessed are you, and blessed is the soil in which you rest!`
  },

  // 15. Ziyarah Arbaeen
  {
    id: 'arbaeen',
    titleAr: 'زِيَارَةُ الأَرْبَعِينِ الخَالِدَة',
    titleEn: 'Ziyarah of Arbaeen',
    targetAr: 'الإمام الحسين بن علي (ع) في العشرين من صفر',
    targetEn: 'Imam Hussain on the 40th day commemoration',
    category: 'karbala',
    virtueAr: 'قال الإمام الحسن العسكري (ع) في "التهذيب": "علامات المؤمن خمس: صلاة الخمسين، وزيارة الأربعين، والتختم في اليمين، وتعفير الجبين، والجهر ببسم الله الرحمن الرحيم".',
    virtueEn: 'Reported by Imam al-Hasan al-Askari: One of the five signs of a true believer is reciting the Ziyarah of Arbaeen.',
    duration: '06:30',
    reciters: [
      { id: 'tammar', nameAr: 'الحاج ميثم التمار', nameEn: 'Maytham al-Tammar', url: 'https://cdn.islamic.network/audio/ziyarah/arbaeen_tammar.mp3' },
      { id: 'basim', nameAr: 'الحاج باسم الكربلائي', nameEn: 'Basim Karbalaei', url: 'https://cdn.islamic.network/audio/ziyarah/arbaeen_basim.mp3' }
    ],
    textAr: `السَّلامُ عَلى وَلِيِّ اللهِ وَحَبِيبِهِ، السَّلامُ عَلى خَلِيلِ اللهِ وَنَجِيبِهِ، السَّلامُ عَلى صَفِيِّ اللهِ وَابْنِ صَفِيِّهِ، السَّلامُ عَلى الحُسَيْنِ المَظْلُومِ الشَّهِيدِ، السَّلامُ عَلى أَسِيرِ الكُرُباتِ وَقَتِيلِ العَبَراتِ.
اللَّهُمَّ إِنِّي أَشْهَدُ أَنَّهُ وَلِيُّكَ وَابْنُ وَلِيِّكَ، وَصَفِيُّكَ وَابْنُ صَفِيِّكَ، الفائِزُ بِكَرامَتِكَ، أَكْرَمْتَهُ بِالشَّهادَةِ، وَحَبَوْتَهُ بِالسَّعادَةِ، وَاجْتَبَيْتَهُ بِطِيبِ الوِلادَةِ.
وَأَعْطَيْتَهُ مَوارِيثَ الأَنْبِياءِ، وَجَعَلْتَهُ حُجَّةً عَلى خَلْقِكَ مِنَ الأَوْصِياءِ، فَأَعْذَرَ فِي الدُّعاءِ، وَمَنَحَ النُّصْحَ، وَبَذَلَ مُهْجَتَهُ فِيكَ لِيَسْتَنْقِذَ عِبادَكَ مِنَ الجَهالَةِ وَحَيْرَةِ الضَّلالَةِ.`,
    textEn: `Peace be upon the intimate friend and beloved of Allah! Peace be upon Hussain, the oppressed martyr, captive of grief and subject of shed tears! He gave his heart\'s blood for You to rescue Your servants from ignorance and the confusion of misguidance!`
  }
];
