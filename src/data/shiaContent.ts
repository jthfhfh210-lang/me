import { PillarOfFaith, InfallibleLeader, KarbalaChapter, SacredShrine, QuestionClarification, SpiritualGem } from '../types';
import karbalaAerial from '../assets/images/karbala_aerial_night_1789795967375.jpg';
import minaretsSunset from '../assets/images/karbala_minarets_sunset_1789796019676.jpg';
import shrineZarih from '../assets/images/shrine_silver_zarih_1789795982560.jpg';

export const pillarsOfFaith: PillarOfFaith[] = [
  {
    id: 'tawheed',
    number: '٠١',
    titleAr: 'التوحيد والعدل الإلهي',
    titleEn: 'Monotheism & Divine Justice',
    subtitleAr: 'أصل الوجود ونفي الشريك والظلم',
    subtitleEn: 'The Foundation of Existence & Absolute Transcendence',
    conceptAr: 'الإيمان بوحدانية الله سبحانه وتعالى في ذاته وصفاته وأفعاله وعبادته، وأنه عادل لا يظلم أحداً مثقال ذرة، بل خلق الكون بالحق وأمر بالعدل والإحسان.',
    conceptEn: 'Belief in the absolute oneness, transcendence, and justice of Allah. God does not oppress or act without profound wisdom, and commands humanity toward justice and mercy.',
    quranVerseAr: 'قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
    quranVerseEn: 'Say: He is Allah, the One! Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.',
    verseRef: 'سورة الإخلاص: ١-٤',
    rationalAspectAr: 'العقل هو الحجة الباطنة؛ وبواسطة البرهان العقلي يُدرك الإنسان عظمة الصانع واستحالة التعدد، ويستيقن بأن الظلم قبيح عقلاً يستحيل على الكمال الإلهي المطلق.',
    rationalAspectEn: 'Intellect (Aql) is the inner prophet. Reason demonstrates the necessity of a single Creator and the impossibility of injustice from an all-wise, omnipotent Lord.',
    iconName: 'Sparkles',
  },
  {
    id: 'nubuwwah',
    number: '٠٢',
    titleAr: 'النبوة والرسالة الخاتمة',
    titleEn: 'Prophethood & The Final Revelation',
    subtitleAr: 'الهداية الإلهية عبر الأنبياء وخاتمهم محمد ﷺ',
    subtitleEn: 'Divine Guidance through Prophets, sealed by Muhammad ﷺ',
    conceptAr: 'بعث الله الأنبياء والرسل رحمةً للعالمين لإرشاد العقول وتبليغ الرسالات. وخاتمهم هو النبي الأعظم محمد بن عبد الله ﷺ، صاحب الرسالة العالمية والقرآن المجيد المحفوظ.',
    conceptEn: 'Allah sent messengers across human history to illuminate minds and guide hearts. The seal and pinnacle of this lineage is Prophet Muhammad ﷺ, bearer of the universal Quran.',
    quranVerseAr: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',
    quranVerseEn: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds.',
    verseRef: 'سورة الأنبياء: ١٠٧',
    rationalAspectAr: 'ضرورة اللطف الإلهي: كما زوّد الله الإنسان بالحواس للاحتياجات المادية، فإنه من فيض رحمته وحكمته أرسل هداةً معصومين لإنقاذ البشرية من التخبط الأخلاقي والروحي.',
    rationalAspectEn: 'The principle of Divine Grace (Lutf): Just as humanity is provided with physical senses, Divine wisdom necessitates spiritual guides of pristine character and integrity.',
    iconName: 'BookOpen',
  },
  {
    id: 'imamah',
    number: '٠٣',
    titleAr: 'الإمامة والولاية الروحية',
    titleEn: 'Imamate & Spiritual Stewardship',
    subtitleAr: 'استمرار الهداية وصيانة الرسالة عبر عترة النبي الأطهار',
    subtitleEn: 'The Ongoing Sanctuary of Knowledge through the Prophet\'s Ahl al-Bayt',
    conceptAr: 'الإمامة امتداد لوظيفة النبوة في حراسة الشريعة وبيان معارفها وتطبيق العدالة الاجتماعية. وهي منصب إلهي بالنص، خُص به أمير المؤمنين علي بن أبي طالب والأئمة من ذريته المعصومون.',
    conceptEn: 'The Imamate is the spiritual and intellectual continuation of Prophetic guidance, safeguarding the Quran\'s interpretation and social justice, beginning with Imam Ali and the Infallible Imams.',
    quranVerseAr: 'إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا',
    quranVerseEn: 'Allah only intends to remove all impurity from you, O Ahl al-Bayt, and to purify you with a thorough purification.',
    verseRef: 'سورة الأحزاب: ٣٣',
    rationalAspectAr: 'استمرار الشريعة يحتاج إلى مرجعية علمية وأخلاقية نقية من الأهواء تكون قدوة للبشرية وملاذاً فكرياً موثوقاً في كل عصر.',
    rationalAspectEn: 'Preserving the original pristine ethics and interpretations of scripture requires a living, incorruptible intellectual reference point across generations.',
    iconName: 'Compass',
  },
  {
    id: 'maad',
    number: '٠٤',
    titleAr: 'المعاد والحساب والخلود',
    titleEn: 'The Resurrection & Moral Consequence',
    subtitleAr: 'يوم الجمع ومستقر العدالة الكونية المطلقة',
    subtitleEn: 'The Gathering & Cosmic Realization of Justice',
    conceptAr: 'البعث والنشور وحساب الخلائق على أعمالهم بميزان الحق. الحياة الدنيا دار امتحان وتكامل، والآخرة دار الجزاء والخلود؛ حيث يوفى كل إنسان ما عمل دون نقص.',
    conceptEn: 'Belief in bodily and spiritual resurrection, where every individual is held accountable with consummate equity. Earth is a testing ground for virtue; eternity is the realm of reward and realization.',
    quranVerseAr: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ * وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ',
    quranVerseEn: 'So whoever does an atom\'s weight of good will see it, and whoever does an atom\'s weight of evil will see it.',
    verseRef: 'سورة الزلزلة: ٧-٨',
    rationalAspectAr: 'عدالة الخالق تتطلب يوماً يسترد فيه المظلوم حقه ويُجازى فيه المحسن، إذ لا تستقيم حكمة الوجود بانتهاء الظالم والمظلوم دون محكمة كبرى.',
    rationalAspectEn: 'Divine wisdom dictates that virtue and cruelty cannot end equally in dust; a cosmic day of balance is rational necessity for universal justice.',
    iconName: 'Scale',
  },
  {
    id: 'aql-ijtihad',
    number: '٠٥',
    titleAr: 'العقل والاجتهاد الحي',
    titleEn: 'Reason, Intellect & Dynamic Ijtihad',
    subtitleAr: 'انفتاح الفقه ومواكبة متطلبات العصر بالبصيرة',
    subtitleEn: 'The Living Fountain of Intellect & Contemporary Jurisprudence',
    conceptAr: 'يعتبر العقل أصلاً رابعاً من أصول استنباط الأحكام الشرعية بجانب القرآن والسنّة والإجماع. باب الاجتهاد مفتوح دائماً عند فقهاء الشيعة لمواجهة النوازل والتطورات الإنسانية.',
    conceptEn: 'Intellect (Aql) is revered alongside the Quran, Sunnah, and consensus as a source of deduction. The door of Ijtihad (juridical reasoning) remains open and vibrant to meet modern human needs.',
    quranVerseAr: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',
    quranVerseEn: 'Indeed, in the creation of the heavens and the earth and the alternation of the night and day are signs for those of understanding.',
    verseRef: 'سورة آل عمران: ١٩٠',
    rationalAspectAr: 'الجمود يقتل الرسالة؛ بينما الاجتهاد الحي المستند إلى القواعد العقلية والأصولية يُبقي الشريعة نبضاً متجدداً يُخاطب ضمير الإنسانية.',
    rationalAspectEn: 'Stagnation stifles spiritual vitality. Rigorous and dynamic scholarship rooted in rational axioms keeps divine ethics responsive to evolving civilization.',
    iconName: 'Lightbulb',
  }
];

export const karbalaEditorial: KarbalaChapter[] = [
  {
    id: 'epic-uprising',
    titleAr: 'نهضة الإمام الحسين: ثورة الكرامة الإنسانية',
    titleEn: 'Imam Hussain\'s Stand: A Renaissance of Human Dignity',
    tagAr: 'الرسالة الخالدة',
    tagEn: 'Eternal Ethos',
    summaryAr: 'لم تكن كربلاء صراعاً على سلطة دنيوية، بل كانت وقفة ضمير وجودية ضد تحريف الدين واستعباد الإرادة الإنسانية.',
    summaryEn: 'Karbala was never a bid for mundane power, but an existential moral stand defending human conscience, spiritual truth, and liberty against tyranny.',
    detailsAr: 'خرج الإمام الحسين بن علي عليه السلام في عام ٦١ هـ مع ثلة من أهل بيته وأصحابه الأوفياء، رافعاً شعار: "إني لم أخرج أشراً ولا بطراً ولا مفسداً ولا ظالماً، وإنما خرجت لطلب الإصلاح في أمة جدي، أريد أن آمر بالمعروف وأنهى عن المنكر". استشهد الحسين ومعه ٧٢ من أصحابه في ملحمة صاغت وجدان الإنسانية، وحولت أرض كربلاء إلى منارة أبدية لكل أحرار العالم.',
    detailsEn: 'In 61 AH, Imam Hussain rose alongside his family and seventy-two devoted companions with his historic manifesto: "I did not rise out of vanity, insolence, mischief, or oppression. Rather, I rose seeking reform in the community of my grandfather; I desire to enjoin virtue and forbid injustice." His ultimate sacrifice transformed Karbala into an eternal sanctuary of freedom and sacrifice.',
    heroQuoteAr: 'هَيْهَاتَ مِنَّا الذِّلَّة، يَأْبَى اللَّهُ لَنَا ذَلِكَ وَرَسُولُهُ وَالْمُؤْمِنُونَ',
    heroQuoteEn: 'Dignity forbids us from submitting to humiliation; neither Allah, His Messenger, nor the virtuous would ever accept that for us.',
    globalThinkers: [
      {
        author: 'المهاتما غاندي (Mahatma Gandhi)',
        role: 'زعيم حركة استقلال الهند',
        quoteAr: 'تعلمت من الحسين كيف أكون مظلوماً فأنتصر، وأيقنت أن الهند إن أرادت أن تكون دولة مستقلة فعليها أن تقتدي بالحسين بن علي.',
        quoteEn: 'I learned from Hussain how to achieve victory while being oppressed. If India desires independence, she must follow the path of Hussain ibn Ali.'
      },
      {
        author: 'تشارلز ديكنز (Charles Dickens)',
        role: 'الأديب والروائي الإنجليزي',
        quoteAr: 'إن كان الحسين قد حارب لقضاء مأرب دنيوي، فإني لا أفهم لماذا اصطحب معه نساءه وأطفاله؟ إذاً فالعقل يحكم أنه ضحى بكل شيء فقط لأجل الإسلام والحرية.',
        quoteEn: 'If Hussain fought to satisfy worldly desires, why did he accompany his women and children? Reason decrees he sacrificed everything purely for the ideals of Islam and human liberty.'
      },
      {
        author: 'أنطوان بارا (Antoine Bara)',
        role: 'مفكر وأديب مسيحي معاصر',
        quoteAr: 'لو كان الحسين منا لنشرنا له في كل أرض راية، ولأقمنا له في كل قرية منبراً، ولدعونا الناس إلى المسيحية باسم الحسين.',
        quoteEn: 'Had Hussain belonged to us, we would have raised a banner for him in every corner of the earth, erected a pulpit in every hamlet, and invited humanity to faith in the name of Hussain.'
      },
      {
        author: 'إدوارد براون (Edward G. Browne)',
        role: 'مستشرق بريطاني وبروفيسور في كامبريدج',
        quoteAr: 'هل ثمة قلب لا يمتلئ بالأسى والحرقة حين يسمع بحديث كربلاء؟ حتى من ليس مسلماً لا يسعه إلا أن يشهد بنقاء الروح التي خاضت بها هذه العصبة الطاهرة غمار الموت.',
        quoteEn: 'Is there a heart that does not melt with sorrow and reverence upon hearing the tragedy of Karbala? Even non-Muslims cannot deny the sublime nobility of spirit displayed by that saintly band.'
      }
    ]
  },
  {
    id: 'arbaeen-walk',
    titleAr: 'مسيرة الأربعين: أكبر تظاهرة إنسانية سلمية في العالم',
    titleEn: 'The Arbaeen Pilgrimage: The World\'s Largest Gathering of Peace & Hospitality',
    tagAr: 'الظاهرة الكونية',
    tagEn: 'Global Phenomenon',
    summaryAr: 'عشرات الملايين من البشر من مختلف القارات والأعراق والأديان يقطعون مئات الكيلومترات مشياً نحو كربلاء في موكب سلام وإطعام ومحبة لا نظير له في التاريخ.',
    summaryEn: 'Tens of millions of pilgrims from every continent, race, and creed walk hundreds of miles toward Karbala in an unmatched outpouring of unconditional hospitality, generosity, and peace.',
    detailsAr: 'تُمثل زيارة الأربعين (مرور ٤٠ يوماً على استشهاد الإمام الحسين) نموذجاً حضارياً فريداً؛ حيث تُفتح البيوت والمواكب العراقية على طول الطرق (من البصرة والنجف إلى كربلاء) لتقديم الطعام المجاني، والمأوى، والعناية الطبية، والدفء الإنساني لملايين المشاة دون أي مقابل، مجسدين أعظم قيم العطاء الإنساني في عالم اليوم.',
    detailsEn: 'Arbaeen represents an unparalleled socio-spiritual wonder: along the desert highways stretching hundreds of kilometers, hundreds of thousands of voluntary service stations (Mowkibs) offer free dining, healthcare, foot massage, and sanctuary to tens of millions, manifesting human fraternity at its purest zenith.',
    heroQuoteAr: 'كربلاء ليست بقعة جغرافية فحسب، بل هي بوصلة ضمير ونداء للإنسانية جمعاء للانتصار للمظلوم وإطعام الجائع وإيواء الغريب.',
    heroQuoteEn: 'Karbala is not merely a geographic location; it is a moral compass and an eternal summons to stand with the oppressed and comfort the stranger.',
  }
];

export const infallibleLeaders: InfallibleLeader[] = [
  {
    id: 'prophet-muhammad',
    number: 1,
    nameAr: 'النبي الأعظم محمد ﷺ',
    nameEn: 'Prophet Muhammad ﷺ',
    titleAr: 'خاتم الأنبياء والمرسلين والرحمة المهداة',
    titleEn: 'Seal of the Prophets & Universal Mercy',
    period: '٥٣ ق.هـ - ١١ هـ (570 - 632 م)',
    roleAr: 'حامل الرسالة الإلهية الخاتمة ومتمم مكارم الأخلاق',
    roleEn: 'Bearer of the Final Divine Message & Paragon of Moral Excellence',
    quoteAr: 'إِنِّي تَارِكٌ فِيكُمُ الثَّقَلَيْنِ: كِتَابَ اللَّهِ وَعِتْرَتِي أَهْلَ بَيْتِي، مَا إِنْ تَمَسَّكْتُمْ بِهِمَا لَنْ تَضِلُّوا بَعْدِي أَبَدًا.',
    quoteEn: 'I leave among you two weighty treasures: the Book of Allah and my progeny, my Ahl al-Bayt. If you hold fast to both, you will never go astray after me.',
    biographyAr: 'النبي الخاتم الذي غيّر مجرى التاريخ الإنساني، أرسله الله شاهداً ومبشراً ونذيراً وداعياً إلى الله بإذنه وسراجاً منيراً، ونشر رسالة التوحيد والعدالة والأخوة الإنسانية.',
    biographyEn: 'The final messenger who transformed human civilization, illuminating dark epochs with monotheism, compassion, civic equality, and profound humility.',
    restingPlaceAr: 'المسجد النبوي الشريف - المدينة المنورة',
    restingPlaceEn: 'The Prophet\'s Mosque, Medina, Saudi Arabia',
    keyLegacyAr: 'القرآن الكريم، ومكارم الأخلاق، وبناء مجتمع العدالة الإنسانية.',
    keyLegacyEn: 'The Holy Quran, universal moral standards, and the charter of human equality.'
  },
  {
    id: 'fatima-zahra',
    number: 2,
    nameAr: 'السيدة فاطمة الزهراء (عليها السلام)',
    nameEn: 'Lady Fatima az-Zahra (as)',
    titleAr: 'سيدة نساء العالمين وبضعة الرسول',
    titleEn: 'Mistress of the Women of the Worlds & Heart of the Prophet',
    period: '٨ ق.هـ - ١١ هـ (615 - 632 م)',
    roleAr: 'المثل الأعلى للكمال الإنساني والروحي للمرأة في الإسلام',
    roleEn: 'The Archetype of Spiritual Radiance & Moral Fortitude for Womankind',
    quoteAr: 'فَرَضَ اللَّهُ الْإِيمَانَ تَطْهِيرًا لَكُمْ مِنَ الشِّرْكِ، وَالصَّلَاةَ تَنْزِيهًا لَكُمْ عَنِ الْكِبْرِ، وَالْعَدْلَ تَنْسِيقًا لِلْقُلُوبِ.',
    quoteEn: 'Allah instituted faith as purification from polytheism, prayer as transcendence from arrogance, and justice as the harmonious bond of human hearts.',
    biographyAr: 'ابنة الرسول الأكرم وأم الأئمة الأطهار، عاشت مجاهدة صابرة، كانت الملجأ الروحي لأبيها حتى لُقبت بـ "أم أبيها"، ومثلت القمة في الطهارة والفصاحة والدفاع عن الحق.',
    biographyEn: 'Beloved daughter of the Prophet and mother of the Imams, she demonstrated unrivaled wisdom, spiritual asceticism, eloquence, and courageous civic advocacy.',
    restingPlaceAr: 'البقيع الغرقد / روضة النبي - المدينة المنورة',
    restingPlaceEn: 'Al-Baqi / Rawdah, Medina',
    keyLegacyAr: 'الخطبة الفدكية في الفلسفة التشريعية، ورسالة العفة والجهاد الفكري.',
    keyLegacyEn: 'The Sermon of Fadak on Islamic legal philosophy, and the paradigm of female sanctity.'
  },
  {
    id: 'imam-ali',
    number: 3,
    nameAr: 'أمير المؤمنين علي بن أبي طالب (عليه السلام)',
    nameEn: 'Imam Ali ibn Abi Talib (as)',
    titleAr: 'باب مدينة العلم، بطل العدالة الإنسانية',
    titleEn: 'The Voice of Human Justice & Gate of Wisdom',
    period: '٢٣ ق.هـ - ٤٠ هـ (600 - 661 م)',
    roleAr: 'الإمام الأول وخليفة رسول الله بنص الغدير، ورائد العدالة الاجتماعية',
    roleEn: 'First Imam, appointed successor at Ghadir Khumm, and beacon of universal justice',
    quoteAr: 'النَّاسُ صِنْفَانِ: إِمَّا أَخٌ لَكَ فِي الدِّينِ، أَوْ نَظِيرٌ لَكَ فِي الْخَلْقِ.',
    quoteEn: 'People are of two kinds: either your brother in faith, or your equal in creation.',
    biographyAr: 'تربى في حجر النبي وصار صهره وأخاه وباب علمه. تجسدت في شخصيته الشجاعة الفذة مع منتهى الرأفة بالفقراء واليتامى، وحكم بعدل فريد سجله التاريخ في عهده لمالك الأشتر الذي اعتبرته الأمم المتحدة وثيقة تاريخية للعدالة والحكم الرشيد.',
    biographyEn: 'Raised by the Prophet, his brother in spirit and gate of wisdom. His governance remains a golden standard of unyielding compassion for the vulnerable, enshrined in his celebrated Epistle to Malik al-Ashtar.',
    restingPlaceAr: 'المرقد العلوي المطهر - النجف الأشرف، العراق',
    restingPlaceEn: 'Holy Shrine of Imam Ali, Najaf al-Ashraf, Iraq',
    keyLegacyAr: 'نهج البلاغة، ووثيقة حقوق الرعية، والتطبيق الصارم للعدالة.',
    keyLegacyEn: 'Nahj al-Balagha (The Peak of Eloquence), civil equity charter, and philosophical depth.'
  },
  {
    id: 'imam-hassan',
    number: 4,
    nameAr: 'الإمام الحسن المجتبى (عليه السلام)',
    nameEn: 'Imam al-Hasan al-Mujtaba (as)',
    titleAr: 'سيد شباب أهل الجنة وكريم أهل البيت',
    titleEn: 'Prince of the Youth of Paradise & Master of Generosity',
    period: '٣ هـ - ٥٠ هـ (625 - 670 م)',
    roleAr: 'الإمام الثاني وصاحب معاهدة الصلن التاريخية لحقن دماء الأمة',
    roleEn: 'Second Imam, renowned for sublime forbearance and the historic peace treaty',
    quoteAr: 'إِنَّ أَحْسَنَ الْحَسَنِ الْخُلُقُ الْحَسَنُ، وَأَوْحَشَ الْوَحْشَةِ الْعُجْبُ.',
    quoteEn: 'The most beautiful of virtues is noble character, and the most isolating desolation is vanity.',
    biographyAr: 'حفيد النبي الأول الذي شهد له النبي بأنه سيد شباب أهل الجنة. اشتهر بكرمه الخارق وعفوه وسماحته، وقاد الأمة بحكمة دقيقة حقنت الدماء وحافظت على الرسالة.',
    biographyEn: 'Eldest grandson of the Prophet; celebrated for boundless generosity, patience, and supreme statesmanship that averted fratricidal ruin.',
    restingPlaceAr: 'البقيع الغرقد - المدينة المنورة',
    restingPlaceEn: 'Al-Baqi Cemetery, Medina',
    keyLegacyAr: 'مدرسة الحلم والدبلوماسية الشرعية، وإنفاق المال في سبيل المحرومين.',
    keyLegacyEn: 'Mastery of moral diplomacy, self-sacrifice, and altruistic charity.'
  },
  {
    id: 'imam-hussain',
    number: 5,
    nameAr: 'الإمام الحسين الشهيد (عليه السلام)',
    nameEn: 'Imam al-Hussain the Martyr (as)',
    titleAr: 'سيد الشهداء وأبو الأحرار وموقظ الضمير',
    titleEn: 'Master of Martyrs & Beacon of Global Freedom',
    period: '٤ هـ - ٦١ هـ (626 - 680 م)',
    roleAr: 'الإمام الثالث وقائد ملحمة الطف الخالدة في كربلاء',
    roleEn: 'Third Imam, leader of the monumental Karbala uprising for justice',
    quoteAr: 'إِنِّي لَا أَرَى الْمَوْتَ إِلَّا سَعَادَةً، وَالْحَيَاةَ مَعَ الظَّالِمِينَ إِلَّا بَرَمًا.',
    quoteEn: 'I see death in the cause of righteousness as nothing but honor, and living under tyranny as nothing but misery.',
    biographyAr: 'سبط النبي الذي قال فيه: "حسين مني وأنا من حسين". هب لنصرة المظلومين ومواجهة الاستبداد الأموي، فقدم دمه الطاهر فداءً للحرية ولإنقاذ جوهر الإسلام من التزييف.',
    biographyEn: 'The Prophet declared: "Hussain is from me and I am from Hussain." He stood unflinchingly against tyranny, inspiring revolutions of human dignity forever.',
    restingPlaceAr: 'الروضة الحسينية المقدسة - كربلاء، العراق',
    restingPlaceEn: 'Holy Shrine of Imam Hussain, Karbala, Iraq',
    keyLegacyAr: 'ثورة عاشوراء، ودرس التضحية المطلقة من أجل المبادئ.',
    keyLegacyEn: 'The Ashura legacy of moral defiance, honor, and unshakeable principle.'
  },
  {
    id: 'imam-sajjad',
    number: 6,
    nameAr: 'الإمام علي زين العابدين (السجاد)',
    nameEn: 'Imam Ali Zayn al-Abidin (al-Sajjad)',
    titleAr: 'سيد الساجدين وزينة العباد',
    titleEn: 'The Adornment of Worshippers & Master of Prostration',
    period: '٣٨ هـ - ٩٥ هـ (659 - 713 م)',
    roleAr: 'الإمام الرابع، مؤسس النهضة الروحية وصاحب رسالة الحقوق',
    roleEn: 'Fourth Imam, author of the profound Sahifa Sajjadiyya and Charter of Rights',
    quoteAr: 'حَقُّ النَّفْسِ عَلَيْكَ أَنْ تَسْتَعْمِلَهَا فِي طَاعَةِ اللَّهِ، وَحَقُّ جَلِيسِكَ أَنْ تُلِينَ لَهُ جَانِبَكَ وَتُنْصِفَهُ فِي مُجَارَاةِ اللَّفْظِ.',
    quoteEn: 'The right of your soul is to devote it to righteousness; and the right of your companion is gentle demeanour and equity in conversation.',
    biographyAr: 'عاش فاجعة كربلاء ونقل رسالتها، وكرّس حياته لنشر الأخلاق والأدعية العرفانية العميقة في "الصحيفة السجادية"، وكتب أول ميثاق متكامل لحقوق الإنسان والكون "رسالة الحقوق".',
    biographyEn: 'Survivor of Karbala who transformed sorrow into a renaissance of mystical intimacy through the Psalms of Islam (Al-Sahifa al-Sajjadiyya) and comprehensive human rights.',
    restingPlaceAr: 'البقيع الغرقد - المدينة المنورة',
    restingPlaceEn: 'Al-Baqi Cemetery, Medina',
    keyLegacyAr: 'الصحيفة السجادية (زبور آل محمد)، ورسالة الحقوق الجامعة.',
    keyLegacyEn: 'Al-Sahifa al-Sajjadiyya, the Treatise on Rights, and sublime spiritual literature.'
  },
  {
    id: 'imam-baqir',
    number: 7,
    nameAr: 'الإمام محمد الباقر (عليه السلام)',
    nameEn: 'Imam Muhammad al-Baqir (as)',
    titleAr: 'باقر علوم الأولين والآخرين',
    titleEn: 'Splitter & Revealer of Divine Knowledge',
    period: '٥٧ هـ - ١١٤ هـ (677 - 733 م)',
    roleAr: 'الإمام الخامس، مؤسس الجامعة العلمية الكبرى لعلوم آل محمد',
    roleEn: 'Fifth Imam, founder of the great academic academy of Medina',
    quoteAr: 'عَالِمٌ يُنْتَفَعُ بِعِلْمِهِ أَفْضَلُ مِنْ سَبْعِينَ أَلْفَ عَابِدٍ.',
    quoteEn: 'A scholar whose knowledge benefits humanity is superior to seventy thousand worshippers.',
    biographyAr: 'فتح آفاق العلوم الإسلامية والفلسفية والقرآنية في المدينة المنورة، وفتح أبواب المناظرات الفكرية الرصينة مع مختلف التيارات الفكرية.',
    biographyEn: 'Established rigorous scholarly seminars in Medina, opening theological and scientific horizons and systematizing Islamic jurisprudence.',
    restingPlaceAr: 'البقيع الغرقد - المدينة المنورة',
    restingPlaceEn: 'Al-Baqi Cemetery, Medina',
    keyLegacyAr: 'تأسيس النهضة المعرفية وتفريع المسائل الفقهية والأخلاقية.',
    keyLegacyEn: 'Systematization of theological sciences, ethics, and exegesis.'
  },
  {
    id: 'imam-sadiq',
    number: 8,
    nameAr: 'الإمام جعفر الصادق (عليه السلام)',
    nameEn: 'Imam Ja\'far al-Sadiq (as)',
    titleAr: 'رئيس المذهب ومنبع المعارف والفقه والعلوم',
    titleEn: 'Pillar of the School & Fountain of Science and Jurisprudence',
    period: '٨٣ هـ - ١٤٨ هـ (702 - 765 م)',
    roleAr: 'الإمام السادس، الذي روى عنه أربعة آلاف من كبار العلماء والمحدثين',
    roleEn: 'Sixth Imam, under whom over four thousand scholars studied theology, law, and natural science',
    quoteAr: 'إِنَّمَا جُعِلَتِ الْأَحْكَامُ لِمَصَالِحِ الْعِبَادِ، وَلَا إِيمَانَ لِمَنْ لَا أَمَانَةَ لَهُ.',
    quoteEn: 'Divine precepts were enacted solely for the welfare of humanity; and faith is void in one who lacks trustworthiness.',
    biographyAr: 'جامعة إنسانية كبرى تخرج منها أئمة المذاهب الإسلامية كأبي حنيفة ومالك بن أنس، كما تتلمذ عليه رواد العلوم الطبيعية كجابر بن حيان مؤسس علم الكيمياء.',
    biographyEn: 'Presided over a flourishing intellectual academy, mentoring major jurists such as Abu Hanifa and Malik ibn Anas, as well as polymaths like Jabir ibn Hayyan (Geber), father of chemistry.',
    restingPlaceAr: 'البقيع الغرقد - المدينة المنورة',
    restingPlaceEn: 'Al-Baqi Cemetery, Medina',
    keyLegacyAr: 'الفقه الجعفري، وتأصيل المنهج العلمي التجريبي والمناظرات الحرة.',
    keyLegacyEn: 'The Ja\'fari jurisprudence, rational debate traditions, and natural sciences.'
  },
  {
    id: 'imam-kadhim',
    number: 9,
    nameAr: 'الإمام موسى بن جعفر الكاظم (عليه السلام)',
    nameEn: 'Imam Musa ibn Ja\'far al-Kadhim (as)',
    titleAr: 'باب الحوائج، كاظم الغيظ والعبد الصالح',
    titleEn: 'The Gateway to Fulfillments & Master of Patience',
    period: '١٢٨ هـ - ١٨٣ هـ (745 - 799 م)',
    roleAr: 'الإمام السابع، بطل الصبر في السجون المظلمة ورمز الصلابة المبدئية',
    roleEn: 'Seventh Imam, paragon of steadfast patience through prolonged unjust imprisonment',
    quoteAr: 'قِلَّةُ الْكَلَامِ حُكْمٌ عَظِيمٌ، فَعَلَيْكُمْ بِالصَّمْتِ فَإِنَّهُ حُسْنُ دَعَةٍ، وَقِلَّةُ وِزْرٍ، وَخِفَّةٌ مِنَ الذُّنُوبِ.',
    quoteEn: 'Briefness of speech is profound wisdom; adhere to silence, for it brings tranquility, lightens burden, and shields from error.',
    biographyAr: 'عُرف بحلمه الاستثنائي وكظمه للغيظ حتى لُقب بالكاظم. قضى سنوات طوالاً من حياته صابراً في طوامير سجون هارون الرشيد، يُحوّل ظلمة الزنازين إلى محراب عبادة وتسبيح حتى استشهد مسموماً ببغداد.',
    biographyEn: 'Renowned for peerless forbearance and generosity toward those who wronged him. Spent long years in dark Abbasid dungeons, transforming isolation into continuous prayer and spiritual contemplation before his martyrdom in Baghdad.',
    restingPlaceAr: 'الروضة الكاظمية المقدسة - بغداد، العراق',
    restingPlaceEn: 'Holy Shrine of al-Kadhimayn, Baghdad, Iraq',
    keyLegacyAr: 'مدرسة كظم الغيظ، ومواجهة الظلم السياسي بالسلاح الأخلاقي والروحي.',
    keyLegacyEn: 'The ethic of self-restraint, spiritual fortitude, and moral defiance against autocratic power.'
  },
  {
    id: 'imam-rida',
    number: 10,
    nameAr: 'الإمام علي بن موسى الرضا (عليه السلام)',
    nameEn: 'Imam Ali ibn Musa al-Rida (as)',
    titleAr: 'عالم آل محمد، وضامن الجنان، ورضا المرتضى',
    titleEn: 'The Savant of Ahl al-Bayt & Master of Khorasan',
    period: '١٤٨ هـ - ٢٠٣ هـ (765 - 818 م)',
    roleAr: 'الإمام الثامن، رائد الحوار الديني والمناظرات الحضارية الكبرى في مرو',
    roleEn: 'Eighth Imam, champion of interfaith dialogue and philosophical debate in Merv',
    quoteAr: 'صَدِيقُ كُلِّ امْرِئٍ عَقْلُهُ، وَعَدُوُّهُ جَهْلُهُ.',
    quoteEn: 'Every person\'s true friend is their intellect, and their true enemy is their ignorance.',
    biographyAr: 'اشتهر بمناظراته الفلسفية والكلامية الكبرى التي عقدها المأمون العباسي مع كبار علماء الأديان والمذاهب (اليهود، النصارى، الزرادشتيين، والزنادقة)، فأبهرهم ببراهينه النقلية والعقلية. روى حديث سلسلة الذهب الشهير في نيسابور.',
    biographyEn: 'Famous for historic philosophical symposiums with premier Christian, Jewish, Zoroastrian, and secular scholars in Merv, decisively establishing Islamic rational superiority. Dictated the legendary "Golden Chain" tradition (Hadith Silsilat al-Dhahab) in Nishapur.',
    restingPlaceAr: 'العتبة الرضوية المقدسة - مشهد، إيران',
    restingPlaceEn: 'Holy Shrine of Imam al-Rida, Mashhad, Iran',
    keyLegacyAr: 'المناظرات العقائدية، وحديث سلسلة الذهب، وموسوعة فقه الرضا وعيون الأخبار.',
    keyLegacyEn: 'Pioneering inter-religious and inter-faith dialogue, Hadith of the Golden Chain, and theology.'
  },
  {
    id: 'imam-jawad',
    number: 11,
    nameAr: 'الإمام محمد بن علي الجواد (عليه السلام)',
    nameEn: 'Imam Muhammad ibn Ali al-Jawad (as)',
    titleAr: 'باب المراد، التقي الجواد، ومعجزة العلم المبكر',
    titleEn: 'The Gateway of Desires & The Generous Prodigy',
    period: '١٩٥ هـ - ٢٢٠ هـ (811 - 835 م)',
    roleAr: 'الإمام التاسع، تولى الإمامة في سن مبكرة وأفحم كبار فقهاء عصره بالبراهين',
    roleEn: 'Ninth Imam, assumed spiritual stewardship in his youth, astonishing premier jurists',
    quoteAr: 'الثِّقَةُ بِاللَّهِ تَعَالَى ثَمَنٌ لِكُلِّ غَالٍ، وَسُلَّمٌ إِلَى كُلِّ عَالٍ.',
    quoteEn: 'Trust in Allah is the price of every precious thing, and the ladder to every noble height.',
    biographyAr: 'تولى منصب الإمامة في عمر الثامنة تقريباً بعد استشهاد والده، مما كان تجسيداً لإمامة عيسى بن مريم ويحيى عليهما السلام في القرآن. خاض مناظرات فقهية عظمى بحضور قاضي القضاة يحيى بن أكثم في بغداد وأبان علماً إلهياً لدنياً مبهراً.',
    biographyEn: 'Assumed divine leadership in early youth, reflecting the prophetic archetypes of Jesus and John the Baptist in the Quran. Answered intricate legal questions posed by chief Abbasid jurists, vindicating the divine source of Imamate knowledge.',
    restingPlaceAr: 'الروضة الكاظمية المقدسة - بغداد، العراق',
    restingPlaceEn: 'Holy Shrine of al-Kadhimayn, Baghdad, Iraq',
    keyLegacyAr: 'إثبات الإمامة اللدنية المبكرة، والرسائل الفقهية والأخلاقية.',
    keyLegacyEn: 'Demonstration of divine grace beyond biological age, legal clarity, and generous altruism.'
  },
  {
    id: 'imam-hadi',
    number: 12,
    nameAr: 'الإمام علي بن محمد الهادي (عليه السلام)',
    nameEn: 'Imam Ali ibn Muhammad al-Hadi (as)',
    titleAr: 'النقي الهادي، وصاحب الزيارة الجامعة الكبيرة',
    titleEn: 'The Pure Guide & Composer of the Universal Ziyarah',
    period: '٢١٢ هـ - ٢٥٤ هـ (828 - 868 م)',
    roleAr: 'الإمام العاشر، قاد الطائفة بحكمة تحت الإقامة الجبرية في سامراء',
    roleEn: 'Tenth Imam, steered the community through severe house arrest in military Samarra',
    quoteAr: 'الدُّنْيَا سُوقٌ رَبِحَ فِيهَا قَوْمٌ وَخَسِرَ آخَرُونَ.',
    quoteEn: 'The world is a marketplace where some profit and others incur loss.',
    biographyAr: 'استقدمه المتوكل العباسي قسراً من المدينة إلى سامراء (المعسكر) ووضعه تحت المراقبة العسكرية الصارمة لأكثر من عشرين عاماً. رسخ نظام الوكلاء (شبكة المرجعية) وأنشد الزيارة الجامعة الكبيرة التي تُعد أرقى وثيقة عقائدية في معرفة أهل البيت.',
    biographyEn: 'Forcibly summoned to military garrison in Samarra by Abbasid caliphs and kept under strict surveillance for over twenty years. Systematized the deputy network (Wukala) and bequeathed the Grand Universal Ziyarah (Ziyarah Jami\'ah Kabirah), the definitive creedal text on Ahl al-Bayt.',
    restingPlaceAr: 'العتبة العسكرية المقدسة - سامراء، العراق',
    restingPlaceEn: 'Holy Shrine of the Askariyyayn, Samarra, Iraq',
    keyLegacyAr: 'الزيارة الجامعة الكبيرة، وتنظيم شبكة الوكلاء لإعداد الأمة لغيبة الإمام.',
    keyLegacyEn: 'Ziyarah Jami\'ah Kabirah, institutional deputy network, and doctrinal preservation.'
  },
  {
    id: 'imam-askari',
    number: 13,
    nameAr: 'الإمام الحسن بن علي العسكري (عليه السلام)',
    nameEn: 'Imam al-Hasan ibn Ali al-Askari (as)',
    titleAr: 'الزكي العسكري، والد الإمام المهدي المنتظر',
    titleEn: 'The Pure Soldier of God & Father of the Promised Savior',
    period: '٢٣٢ هـ - ٢٦٠ هـ (846 - 874 م)',
    roleAr: 'الإمام الحادي عشر، مهّد الأمة لعصر الغيبة الصغرى وصان ولادة القائم',
    roleEn: 'Eleventh Imam, prepared the faithful for the era of Occultation and protected his successor',
    quoteAr: 'لَيْسَتِ الْعِبَادَةُ كَثْرَةَ الصِّيَامِ وَالصَّلَاةِ، وَإِنَّمَا الْعِبَادَةُ كَثْرَةُ التَّفَكُّرِ فِي أَمْرِ اللَّهِ.',
    quoteEn: 'Worship consists not merely in abundant prayer and fasting, but in deep reflection upon Allah\'s purpose.',
    biographyAr: 'عاش في الحصار العسكري المشدد بسامراء. نجح بحنكة بالغة في حماية ولادة ولده الحجة المهدي (عج) وتعيين وكلائه الثقات وتأليف أصحابه على الرجوع للفقهاء المأمونين: "فأما من كان من الفقهاء صائناً لنفسه، حافظاً لدينه، مخالفاً على هواه، مطيعاً لأمر مولاه، فللعوام أن يقلدوه".',
    biographyEn: 'Lived under intense military surveillance in Samarra. Safeguarded the birth of his successor Imam al-Mahdi, established the foundational rule of following upright scholars (Marja\'iyyah), and fortified scholarly solidarity before his martyrdom at age twenty-eight.',
    restingPlaceAr: 'العتبة العسكرية المقدسة - سامراء، العراق',
    restingPlaceEn: 'Holy Shrine of the Askariyyayn, Samarra, Iraq',
    keyLegacyAr: 'التأسيس الشرعي لنظام التقليد والمرجعية، والتمهيد للغيبة.',
    keyLegacyEn: 'Doctrinal foundation of juristic imitation (Taqleed) and the transition to the Occultation.'
  },
  {
    id: 'imam-mahdi',
    number: 14,
    nameAr: 'الإمام المهدي المنتظر (عجل الله تعالى فرجه الشريف)',
    nameEn: 'Imam Muhammad al-Mahdi — The Promised Savior (ajfs)',
    titleAr: 'القائم، الحجة بن الحسن، صاحب الزمان وبقية الله',
    titleEn: 'The Awaited Hope, The Proof of God & Master of the Era',
    period: 'ولد عام ٢٥٥ هـ في سامراء (869 م - حاضر)',
    roleAr: 'الإمام الثاني عشر، خاتم الأوصياء الذي يملأ الأرض قسطاً وعدلاً كما ملئت ظلماً وجوراً',
    roleEn: 'Twelfth Imam, Seal of Successors destined to establish universal peace and global justice',
    quoteAr: 'إِنَّا غَيْرُ مُهْمِلِينَ لِمُرَاعَاتِكُمْ، وَلَا نَاسِينَ لِذِكْرِكُمْ، وَلَوْلَا ذَلِكَ لَنَزَلَ بِكُمُ اللَّأْوَاءُ وَاصْطَلَمَكُمُ الْأَعْدَاءُ.',
    quoteEn: 'We are never neglectful of your well-being, nor are we forgetful of your remembrance; were it not so, calamities would engulf you and your foes would overwhelm you.',
    biographyAr: 'ولد في النصف من شعبان عام ٢٥٥ هـ في سامراء. خاض الغيبة الصغرى (٢٦٠ - ٣٢٩ هـ) عبر السفراء الأربعة، ثم بدأت الغيبة الكبرى بأمر الله تعالى. يمثل عقيدة الأمل الإنساني العالمي في انتصار الحق المطلق، وسيخرج بمشيئة الله ليملأ الأرض قسطاً وعدلاً بعدما ملئت جوراً.',
    biographyEn: 'Born in Samarra in 255 AH. Guided believers through four special envoys during the Minor Occultation (260-329 AH), before entering the Major Occultation by divine decree. He embodies humanity\'s universal longing for the triumph of cosmic justice, destined to reappear to eradicate tyranny alongside Prophet Jesus.',
    restingPlaceAr: 'حي يرزق بإذن الله، وظهوره الموعود في مكة المكرمة عند الكعبة المشرفة',
    restingPlaceEn: 'Living by Allah\'s power, destined to reappear at the Holy Kaaba in Mecca',
    keyLegacyAr: 'عقيدة الانتظار الإيجابي، والرجاء بانتصار العدل النهائي، ودعاء الفرج.',
    keyLegacyEn: 'Constructive anticipation (Intidhar), universal justice, and the hope of global peace.'
  }
];

export const sacredShrines: SacredShrine[] = [
  {
    id: 'karbala-hussain',
    nameAr: 'العتبة الحسينية المقدسة',
    nameEn: 'The Holy Shrine of Imam Hussain',
    cityAr: 'كربلاء المقدسة',
    cityEn: 'Karbala',
    country: 'العراق',
    descriptionAr: 'الحرم المطهر الذي يحتضن الجسد الطاهر لسبط رسول الله الإمام الحسين عليه السلام، تحيط به روضة من الجلال والروحانية يقصدها الملايين من كل أصقاع المعمورة.',
    descriptionEn: 'The sacred sanctuary cradling the resting place of Imam Hussain. A breathtaking haven of gilded domes, cobalt tilework, and profound spiritual elevation visited by tens of millions annually.',
    architectureAr: 'تتميز بالقبة الذهبية الشامخة التي ترتفع ٣٧ متراً، والمنارتين المذهبتين، وأعمال المقرنصات والزجاج المعكوس الفاطمي والعثماني والصفوي، بالإضافة إلى ضريح من الفضة والذهب الخالص أبدعته أنامل كبار الخطاطين.',
    architectureEn: 'Adorned with a magnificent 37-meter golden dome, twin minarets, intricate Persian muqarnas stalactites, mirror mosaic halls, and a silver-and-gold zariyh crafted with timeless Quranic calligraphy.',
    significanceAr: 'مهوى قلوب الأحرار، ومنطلق ثورة الكرامة، ومركز مسيرة الأربعين المليونية.',
    significanceEn: 'Heart of the Ashura revolution, destination of the epic Arbaeen walk, and universal refuge of conscience.',
    features: ['القبة الذهبية', 'الصحن الشريف', 'متحف النفائس والمخطوطات', 'المكتبة الحسينية التخصصية'],
    imageUrl: karbalaAerial
  },
  {
    id: 'karbala-abbas',
    nameAr: 'العتبة العباسية المقدسة',
    nameEn: 'The Holy Shrine of al-Abbas ibn Ali',
    cityAr: 'كربلاء المقدسة',
    cityEn: 'Karbala',
    country: 'العراق',
    descriptionAr: 'مرقد قمر بني هاشم أبي الفضل العباس، رمز الوفاء والإيثار والشجاعة الخالدة، يرتبط بمرقد أخيه الحسين عبر ساحة "بين الحرمين" الشريفين.',
    descriptionEn: 'Sanctuary of al-Abbas ibn Ali, "The Moon of Banu Hashim", eternal symbol of chivalry, devotion, and selfless sacrifice, facing his brother Hussain across the sacred Bayn al-Haramayn plaza.',
    architectureAr: 'واجهة مهيبة من الطابوق الكربلائي المطعم بالذهب واللازورد، وتصميم معماري بديع يُبرز هيبة ومكانة ساقي عطاشى كربلاء.',
    architectureEn: 'Grand facade clad in Karbalai cobalt tiles inlaid with gold leaf and lapis lazuli, embodying heroic majesty and sublime architectural grace.',
    significanceAr: 'رمز الوفاء الأخوي والشرف والإيثار الإنساني الأسمى في تاريخ البشرية.',
    significanceEn: 'Eternal emblem of fraternal fidelity, chivalrous courage, and pure spiritual altruism.',
    features: ['بين الحرمين', 'المنارات المذهبة', 'مضيف أبي الفضل', 'مركز الفهرسة والترميم'],
    imageUrl: minaretsSunset
  },
  {
    id: 'najaf-ali',
    nameAr: 'العتبة العلوية المقدسة',
    nameEn: 'The Holy Shrine of Imam Ali',
    cityAr: 'النجف الأشرف',
    cityEn: 'Najaf al-Ashraf',
    country: 'العراق',
    descriptionAr: 'حرم أمير المؤمنين علي بن أبي طالب، قبلة العلماء ومهد الحوزة العلمية العريقة التي تأسست قبل ألف عام، ومقصد الباحثين عن الحكمة والعدالة.',
    descriptionEn: 'The resting sanctuary of Imam Ali ibn Abi Talib; spiritual epicenter of the millennium-old Najaf Islamic Seminary (Hawza) and beacon for seekers of wisdom and equity.',
    architectureAr: 'الإيوان الذهبي الشهير ومصلى صحن فاطمة الزهراء الجديد الذي يُعد تحفة معمارية إسلامية معاصرة تجمع بين الأصالة وأحدث الفنون الإنشائية.',
    architectureEn: 'The iconic Golden Iwan, historic vaulted gates, and the breathtaking modern Sahn Fatima complex, combining classical muqarnas with vast contemporary pavilions.',
    significanceAr: 'مركز الفكر الشيعي الأول في العالم، ومستقر بطل الإسلام وأبي الأئمة الأطهار.',
    significanceEn: 'The foremost intellectual heart of Shia scholarship, hosting international theological institutions and historic libraries.',
    features: ['الإيوان الذهبي', 'صحن فاطمة الزهراء', 'المكتبة الحيدرية', 'الحوزة العلمية'],
    imageUrl: shrineZarih
  }
];

export const questionsAndClarifications: QuestionClarification[] = [
  {
    id: 'quran-integrity',
    category: 'quran',
    questionAr: 'ما هي عقيدة الشيعة في القرآن الكريم؟ هل يعتقدون بتحريفه؟',
    questionEn: 'What is the Shia belief regarding the Holy Quran? Is it fully preserved?',
    shortAnswerAr: 'القرآن الكريم الموجود بين أيدي المسلمين اليوم هو كلام الله المعجز والمنزل على النبي محمد ﷺ، وهو محفوظ بحفظ الله التام ولم يُحذف أو يُزاد منه حرف واحد بإجماع علماء ومراجع الشيعة قاطبة.',
    shortAnswerEn: 'The Quran in our hands today is the verbatim word of Allah revealed unto Prophet Muhammad ﷺ. By unanimous consensus of Shia scholars across history, it is perfectly intact without addition, omission, or corruption.',
    detailedExplanationAr: 'يُجمع فقهاء ومفسرو ومحقّقو الشيعة الإمامية عبر كل العصور (كالشيخ الصدوق في كتاب الاعتقادات، والشيخ المفيد في تصحيح الاعتقاد، والشريف المرتضى، والشيخ الطوسي في تفسير التبيان، وأمين الإسلام الطبرسي في مجمع البيان، وصولاً إلى مراجع العصر الحاضر كالسيد الخوئي في البيان والسيد السيستاني) على أن القرآن الكريم كامل لا نقص فيه ولا زيادة. وقد قرر أئمة أهل البيت في الكافي الشريف القاعدة الحاكمة: "ما وافق كتاب الله فخذوه، وما خالف كتاب الله فاضربوا به عرض الجدار".',
    detailedExplanationEn: 'From classical authorities (Shaykh al-Saduq in Kitab al-I\'tiqadat, al-Mufid, al-Tusi in al-Tibyan, al-Tabarsi in Majma al-Bayan) to contemporary grand jurists (al-Khoei in al-Bayan, al-Sistani), Shia scholars unequivocally declare that the Holy Quran is immaculate, complete, and eternally guarded. In Al-Kafi, the Infallible Imams established the foundational test: "Whatever agrees with the Book of Allah, take it; whatever contradicts the Book of Allah, cast it against the wall."',
    evidencesAr: [
      'قوله تعالى: ﴿إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ﴾ [الحجر: ٩]',
      'كتاب "الاعتقادات في دين الإمامية" للشيخ الصدوق (ص ٩٣): "اعتقادنا أن القرآن الذي أنزله الله تعالى على نبيه محمد ﷺ هو ما بين الدفتين، وهو ما في أيدي الناس ليس بأكثر من ذلك، ومن نسب إلينا أنا نقول إنه أكثر من ذلك فهو كاذب".',
      'الكافي الشريف للكليني (كتاب فضل العلم، باب الأخذ بالسنة وشواهد الكتاب): عن الصادق (ع): "كل حديث لا يوافق كتاب الله فهو زخرف".',
      'كتاب "البيان في تفسير القرآن" للإمام المرجع السيد أبو القاسم الخوئي في تفنيد وبطلان دعاوى التحريف بالأدلة القاطعة.'
    ],
    evidencesEn: [
      'Quran 15:9: "Indeed, it is We who sent down the Quran and indeed, We will be its guardian."',
      'Shaykh al-Saduq (d. 981 CE) in Kitab al-I\'tiqadat: "Our firm belief is that the Quran revealed by Allah to His Prophet is exactly what is between the two covers, in the hands of the people, without addition or alteration."',
      'Al-Kafi by al-Kulayni (Kitab Fadl al-Ilm): Imam al-Sadiq declared: "Any narration that does not accord with the Book of Allah is futile ornament."',
      'Grand Ayatollah al-Khoei\'s seminal work "Al-Bayan fi Tafsir al-Quran" systematically demonstrating the absolute textual preservation of the Quran.'
    ]
  },
  {
    id: 'turbah-sajdah',
    category: 'worship',
    questionAr: 'لماذا يسجد الشيعة على التربة الحسينية أو التراب الطبيعي؟ وما الدليل من مصادرهم؟',
    questionEn: 'Why do Shia Muslims prostrate upon a clay tablet (Turbah) or natural earth? What are the authentic Shia sources?',
    shortAnswerAr: 'السجود عند الشيعة عبادة وتذلل لله وحده لا شريك له، ويكون "على" الأرض الطاهرة أو ما أنبتت الأرض (غير المأكول والملبوس) اتباعاً لحديث النبي وأئمة الهدى، والتربة الحسينية هي تراب كربلاء الطاهر مستحب للتبرك واستحضار الفداء.',
    shortAnswerEn: 'Prostration (Sujud) is an act of supreme worship directed exclusively to Allah alone. Shia Muslims prostrate *upon* clean natural earth or non-wearable vegetation in direct adherence to the teachings of the Prophet and his Infallible Household. The clay tablet (Turbah) of Karbala is venerated soil for seeking blessings and commemorating martyrdom.',
    detailedExplanationAr: 'روى ثقة الإسلام الكليني في الكافي في صحيحة هشام بن الحكم عن الإمام الصادق (ع): "السجود لا يجوز إلا على الأرض أو على ما أنبتت الأرض، إلا ما أُكِل أو لُبِس". وروى الشيخ الصدوق في من لا يحضره الفقيه عن النبي ﷺ: "جُعِلَتْ لِيَ الأَرْضُ مَسْجِدًا وَطَهُورًا". فالتربة الطينية ليست سوى قطعة نظيفة من تراب الأرض تُسهّل السجود الشرعي على التراب في المساجد والمنازل. وروى الشيخ الطوسي في تهذيب الأحكام والحر العاملي في وسائل الشيعة عن معاوية بن عمار: "كان لأبي عبد الله الصادق (ع) خريطة ديباج صفراء فيها تربة أبي عبد الله الحسين (ع)، فإذا حضرته الصلاة صبه على سجادته وسجد عليه، وقال: السجود على تربة أبي عبد الله يخرق الحجب السبع".',
    detailedExplanationEn: 'In Al-Kafi, in the authentic report of Hisham ibn al-Hakam, Imam Ja\'far al-Sadiq ruled: "Prostration is not permissible except upon the earth or what grows from the earth, except for what is eaten or worn." In Man La Yahduruhu al-Faqih, the Prophet declared: "The earth has been made for me a place of prostration and a purifier." A Turbah is simply purified, compressed natural earth enabling worship on earth anywhere. In Tahdhib al-Ahkam by Shaykh al-Tusi and Wasa\'il al-Shia, Mu\'awiyah ibn Ammar reports: "Imam al-Sadiq kept a silk pouch containing the soil of Imam al-Hussain; when prayer was due, he poured it on his prayer rug and prostrated upon it, saying: Prostration on the clay of Hussain pierces the seven veils."',
    evidencesAr: [
      'الكافي للشيخ الكليني (ج ٣، كتاب الصلاة، باب ما يسجد عليه، ص ٣٣٠): صحيحة هشام بن الحكم عن الإمام الصادق (ع).',
      'من لا يحضره الفقيه للشيخ الصدوق (ج ١، باب ما يسجد عليه، ص ٢٦٩): عن رسول الله ﷺ: "جُعِلَتْ لِيَ الأَرْضُ مَسْجِدًا وَطَهُورًا".',
      'تهذيب الأحكام لشيخ الطائفة الطوسي (ج ٢، ص ٣٠٢) ووسائل الشيعة للحر العاملي (ج ٥، ص ٣٦٦): صحيحة معاوية بن عمار في سجود الإمام الصادق على تربة كربلاء.',
      'من لا يحضره الفقيه (ج ١، ص ٢٦٧): قول الإمام الصادق (ع): "السجود على الأرض أفضل لأنه أبلغ في التواضع والخضوع لله عز وجل".'
    ],
    evidencesEn: [
      'Al-Kafi by Shaykh al-Kulayni (Vol. 3, Kitab al-Salah, p. 330): Authentic tradition of Hisham ibn al-Hakam from Imam al-Sadiq.',
      'Man La Yahduruhu al-Faqih by Shaykh al-Saduq (Vol. 1, p. 269): Prophetic report: "The earth has been made for me a place of prostration and a purifier."',
      'Tahdhib al-Ahkam by Shaykh al-Tusi (Vol. 2, p. 302) & Wasa\'il al-Shia by al-Hurr al-Amili (Vol. 5, p. 366): Tradition of Mu\'awiyah ibn Ammar detailing Imam al-Sadiq\'s prostration upon the soil of Karbala.',
      'Man La Yahduruhu al-Faqih (Vol. 1, p. 267): Imam al-Sadiq: "Prostrating on bare earth is superior because it is the most profound expression of humbleness before Allah."'
    ]
  },
  {
    id: 'jam-salatayn',
    category: 'fiqh',
    questionAr: 'لماذا يجمع الشيعة بين صلاتي الظهر والعصر وبين المغرب والعشاء؟ وما سندها من مصادر الشيعة؟',
    questionEn: 'Why do Shia Muslims join Dhuhr with Asr, and Maghrib with Isha? What are the authentic Shia sources?',
    shortAnswerAr: 'الجمع بين الظهرين والعشائين جائز وثابت عن النبي محمد ﷺ وأهل بيته الأطهار توسعةً وتيسيراً على الأمة، مع جواز تفريقهما وهو الأفضل، ولكل صلاة وقتها المشترك ووقتها الفضيل.',
    shortAnswerEn: 'Combining Dhuhr with Asr, and Maghrib with Isha, is fully permissible and established in the authentic Sunnah of Prophet Muhammad ﷺ and his Ahl al-Bayt as a mercy and ease for the community, while separating them into five distinct prayer times remains permissible and meritorious.',
    detailedExplanationAr: 'روى ثقة الإسلام الكليني في الكافي (ج ٣، ص ٢٨٦) وصاحب وسائل الشيعة (ج ٤، ص ٢٢٠) في صحيحة عبد الله بن سنان عن الإمام الصادق (ع): "صلى رسول الله ﷺ الظهر والعصر في مكان واحد من غير علة ولا سبب، فقال له عمر: أحدَثَ في الصلاة شيء؟ فقال: لا، ولكن أردتُ أن أوسّع على أمتي". وروى الشيخ الصدوق في من لا يحضره الفقيه والشيخ الطوسي في تهذيب الأحكام: أن صلاة الظهر إذا زالت الشمس دخل وقت الظهر والعصر جميعاً حتى تغرب الشمس، وإذا غابت الحمرة المشرقية دخل وقت المغرب والعشاء حتى منتصف الليل، فالجمع رحمة وتيسير شرعي ثابت في فقه الإمامية.',
    detailedExplanationEn: 'In Al-Kafi (Vol. 3, p. 286) and Wasa\'il al-Shia (Vol. 4, p. 220), Abdullah ibn Sinan narrates from Imam Ja\'far al-Sadiq: "The Messenger of Allah ﷺ prayed Dhuhr and Asr together in one place without illness or cause of fear; Umar asked him: Has something new occurred in prayer? The Prophet replied: No, but I wished to make things easier for my community." Classical Shia works like Tahdhib al-Ahkam and Man La Yahduruhu al-Faqih clarify that when the sun crosses zenith, the shared time for Dhuhr and Asr begins until sunset; and when evening twilight appears, the shared window for Maghrib and Isha extends until midnight.',
    evidencesAr: [
      'الكافي للشيخ الكليني (ج ٣، كتاب الصلاة، باب وقت الظهر والعصر، ص ٢٨٦): صحيحة عبد الله بن سنان وصحيحة زرارة عن الإمام الصادق (ع).',
      'وسائل الشيعة للحر العاملي (ج ٤، أبواب المواقيت، باب جواز الجمع بين الظهرين والعشائين، ص ٢٢٠).',
      'من لا يحضره الفقيه للشيخ الصدوق (ج ١، ص ١٤٦): بيان مواقيت الصلاة المشتركة في مذهب أهل البيت.',
      'تهذيب الأحكام لشيخ الطائفة الطوسي (ج ٢، أبواب المواقيت، ص ٢٦): الجمع النبوي بدون خوف ولا مطر.'
    ],
    evidencesEn: [
      'Al-Kafi by al-Kulayni (Vol. 3, Kitab al-Salah, p. 286): Authentic traditions of Abdullah ibn Sinan and Zurarah from Imam al-Sadiq.',
      'Wasa\'il al-Shia by al-Hurr al-Amili (Vol. 4, Abwab al-Mawaqit, p. 220): Canonical chapter on the permissibility of combining prayers.',
      'Man La Yahduruhu al-Faqih by al-Saduq (Vol. 1, p. 146): Specification of shared prayer windows in Ja\'fari jurisprudence.',
      'Tahdhib al-Ahkam by al-Tusi (Vol. 2, p. 26): Transmissions demonstrating the Prophet combined prayers to remove hardship.'
    ]
  },
  {
    id: 'wudu-mash-rijlayn',
    category: 'fiqh',
    questionAr: 'ما هي صفة الوضوء عند الشيعة؟ ولماذا يمسحون الرأس والقدمين بدلاً من غسلهما؟',
    questionEn: 'How do Shia Muslims perform Wudu (Ablution)? Why do they wipe their head and feet instead of washing them?',
    shortAnswerAr: 'يلتزم الشيعة بظاهر الآية القرآنية الكريمة ﴿وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ﴾؛ فيغسلون الوجه واليدين من المرفقين إلى أطراف الأصابع، ويمسحون مقدم الرأس والقدمين ببلل اليدين الباقي دون استئناف ماء جديد كما علم أئمة أهل البيت.',
    shortAnswerEn: 'Shia Muslims adhere strictly to the literal command of the Holy Quran: "and wipe your heads and your feet to the ankles" (5:6). They wash the face and arms (from elbows downward), and wipe the front of the head and the tops of both feet with the residual moisture on their hands, exactly as transmitted by the Infallible Imams.',
    detailedExplanationAr: 'الآية السادسة من سورة المائدة واضحة المعنى: ﴿فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ﴾؛ فعُطفت الأرجل بالمسح على الرؤوس الممسوحة. وقد روى ثقة الإسلام الكليني في الكافي (ج ٣، كتاب الطهارة، ص ٢٤) في صحيحة زرارة وبكير بن أعين عن الإمام محمد الباقر (ع) أنه وصف وضوء رسول الله ﷺ عملياً: فغسل وجهه ويديه ثم مسح برأسه ورجليه ببلل كفيه ولم يغسل رجليه بالماء الجاري قط.',
    detailedExplanationEn: 'Surah al-Ma\'idah (5:6) explicitly states: "Wash your faces and your hands to the elbows, and wipe over your heads and your feet to the ankles." Grammatically, feet (arjulakum) is coupled with heads (ru\'usikum) governed by the verb wipe (wamsahu). In Al-Kafi (Vol. 3, Kitab al-Taharah, p. 24), in the renowned authentic report of Zurarah and Bukayr ibn A\'yan, Imam Muhammad al-Baqir demonstrated the exact physical ablution of Prophet Muhammad ﷺ: he washed his face and forearms once, then wiped his head and feet using the remaining moisture on his palms without taking new water.',
    evidencesAr: [
      'القرآن الكريم: سورة المائدة، الآية ٦: ﴿وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ﴾.',
      'الكافي للشيخ الكليني (ج ٣، كتاب الطهارة، باب صفة الوضوء، ص ٢٤): صحيحة زرارة وبكير عن الإمام الباقر (ع).',
      'تهذيب الأحكام لشيخ الطائفة الطوسي (ج ١، باب صفة الوضوء، ص ٥٥): روايات الأئمة الأطهار في مسح الرجلين.',
      'مجمع البيان في تفسير القرآن للعلامة الطبرسي: إعراب وتفسير آية الوضوء ومسح الرجلين.'
    ],
    evidencesEn: [
      'Holy Quran, Surah al-Ma\'idah 5:6: "And wipe over your heads and your feet to the ankles."',
      'Al-Kafi by al-Kulayni (Vol. 3, Kitab al-Taharah, p. 24): Authentic demonstration of the Prophet\'s Wudu by Imam al-Baqir.',
      'Tahdhib al-Ahkam by al-Tusi (Vol. 1, p. 55): Comprehensive Hadith documentation on wiping rather than washing the feet.',
      'Majma al-Bayan fi Tafsir al-Quran by al-Tabarsi: Linguistic and grammatical analysis confirming wiping of the feet.'
    ]
  },
  {
    id: 'azan-hayya-ala-khayr-alamal',
    category: 'fiqh',
    questionAr: 'ما هي فصول الأذان عند الشيعة؟ وما هو أصل "حي على خير العمل" والشهادة الثالثة؟',
    questionEn: 'What are the parts of the Shia Adhan (Call to Prayer)? What is the basis for "Hayya Ala Khayr al-Amal" and the Third Testimony?',
    shortAnswerAr: '"حي على خير العمل" جزء أصيل وتوقيفي من الأذان النبوي الثابت في مصادر الشيعة، أما الشهادة الثالثة (أشهد أن علياً ولي الله) فهي شعار إيماني مستحب يؤتى به بنية القربة وتأكيداً لبيعة الغدير، وليست جزءاً واجباً من أصل الأذان.',
    shortAnswerEn: '"Hayya Ala Khayr al-Amal" (Hasten to the best of deeds) is an integral, authentic phrase of the Prophetic call to prayer preserved in Shia sources. The Third Testimony ("I bear witness that Ali is the Vicegerent of Allah") is a recommended, beloved profession of faith uttered with devotion following the testament of Prophethood, rather than an obligatory constitutive part of the Adhan.',
    detailedExplanationAr: 'روى الشيخ الصدوق في من لا يحضره الفقيه (ج ١، ص ٢٨٨) والشيخ الطوسي في تهذيب الأحكام (ج ٢، ص ٦١) والاستبصار بأسانيد معتبرة: أن "حي على خير العمل" كان النبي ﷺ وأهل بيته وأصحابه المخلصون (كبلال وعمار وسلمان وأبي ذر) يؤذنون بها على عهده، وخير العمل هو الصلاة وبر الوالدين والولاية. أما الشهادة بالولاية لأمير المؤمنين علي بن أبي طالب (ع) فمستحبة استناداً لحديث الغدير ولقول الإمام الصادق في الاحتجاج: "إذا قال أحدكم: لا إله إلا الله، محمد رسول الله، فليقل: علي أمير المؤمنين".',
    detailedExplanationEn: 'Shaykh al-Saduq in Man La Yahduruhu al-Faqih (Vol. 1, p. 288) and Shaykh al-Tusi in Tahdhib al-Ahkam (Vol. 2, p. 61) document with sound chains that "Hayya Ala Khayr al-Amal" was proclaimed in the Prophet\'s original Adhan by loyal companions like Bilal, Salman, and Ammar; the "best of deeds" represents prayer and divine stewardship. Meanwhile, reciting the Wilayah of Imam Ali is a meritorious spiritual declaration based on Imam al-Sadiq\'s counsel in Al-Ihtijaj: "Whenever one proclaims La Ilaha Illa Allah, Muhammadun Rasulullah, let him affirm: Aliyyun Amir al-Mu\'minin."',
    evidencesAr: [
      'من لا يحضره الفقيه للشيخ الصدوق (ج ١، باب الأذان والإقامة، ص ٢٨٨).',
      'تهذيب الأحكام لشيخ الطائفة الطوسي (ج ٢، باب الأذان، ص ٦١): ثبوت "حي على خير العمل" في الأذان النبوي.',
      'الاستبصار لشيخ الطائفة الطوسي (ج ١، ص ٣٠٥): بيان فصول الأذان الشرعية عند أهل البيت.',
      'كتاب الاحتجاج للطبرسي (ج ١، ص ٢٣٠): استحباب اقتران اسم علي بن أبي طالب مع اسم النبي ﷺ.'
    ],
    evidencesEn: [
      'Man La Yahduruhu al-Faqih by al-Saduq (Vol. 1, Bab al-Adhan wa al-Iqamah, p. 288).',
      'Tahdhib al-Ahkam by al-Tusi (Vol. 2, p. 61): Archival proof of "Hayya Ala Khayr al-Amal" in the Prophetic era.',
      'Al-Istibsar by al-Tusi (Vol. 1, p. 305): Canonical legal breakdown of Adhan components according to Ahl al-Bayt.',
      'Al-Ihtijaj by al-Tabarsi (Vol. 1, p. 230): The merit of pairing testimony of Ali\'s Wilayah with that of the Prophet.'
    ]
  },
  {
    id: 'imamah-ghadir-khumm',
    category: 'imamah',
    questionAr: 'كيف يثبت الشيعة إمامة أهل البيت وعلي بن أبي طالب؟ وما هي أدلة الغدير والثقلين؟',
    questionEn: 'How do Shia Muslims prove the Imamate of Ahl al-Bayt and Imam Ali? What are the proofs of Ghadir and Thaqalayn?',
    shortAnswerAr: 'تثبت الإمامة بالنص الإلهي الجلي الصادر عن رسول الله ﷺ بأمر ربه؛ وفي مقدمة ذلك حديث الغدير المتواتر وحديث الثقلين المرويان بأصح الأسانيد في كتب الحديث الشيعية.',
    shortAnswerEn: 'The Imamate is established by explicit divine decree proclaimed by Prophet Muhammad ﷺ. Foremost among these proofs are the universally transmitted Hadith of Ghadir Khumm and Hadith of the Two Weighty Things (al-Thaqalayn), recorded with immaculate chains in classical Shia compilations.',
    detailedExplanationAr: 'في الكافي الشريف (كتاب الحجة) وكتاب كمال الدين للشيخ الصدوق وأمالي المفيد: خطب رسول الله ﷺ في غدير خم في حجة الوداع أمام مئة ألف من المسلمين، ورفع يد علي بن أبي طالب حتى رُئي بياض إبطيهما، وقال: "من كنتُ مولاه فهذا عليٌّ مولاه، اللهم والِ من والاه، وعادِ من عاداه، وانصر من نصره، واخذل من خذله". وأكد ذلك بحديث الثقلين: "إني تاركٌ فيكم الثقلين: كتاب الله وعترتي أهل بيتي، ما إن تمسكتم بهما لن تضلوا بعدي أبداً، وإنهما لن يفترقا حتى يردا عليّ الحوض".',
    detailedExplanationEn: 'In Al-Kafi (Kitab al-Hujjah), Kamal al-Din by al-Saduq, and Amali of al-Mufid: during the Farewell Pilgrimage at Ghadir Khumm before tens of thousands of Muslims, the Prophet took Imam Ali\'s hand, raising it until their underarms were visible, proclaiming: "Whoever\'s Master I am, this Ali is his Master! O Allah, befriend whoever befriends him, oppose whoever opposes him, support whoever supports him, and forsake whoever forsakes him." This was anchored by Hadith al-Thaqalayn: "I leave among you two weighty things: the Book of Allah and my progeny, my Ahl al-Bayt; if you adhere to them, you will never go astray, and they shall never separate until they meet me at the Fountain."',
    evidencesAr: [
      'الكافي للشيخ الكليني (ج ١، كتاب الحجة، باب النص على أمير المؤمنين عليه السلام، ص ٢٨٦ وما بعدها).',
      'كمال الدين وتمام النعمة للشيخ الصدوق (ص ٢٥٦): تواتر حديث الغدير وتعيين الأئمة الاثني عشر.',
      'بصائر الدرجات لأبي جعفر الصفار (ص ٤٣٢): نصوص رسول الله ﷺ في فضل وولاية أهل البيت.',
      'إعلام الورى بأعلام الهدى للشيخ الطبرسي (ص ١٦٥): ملحمة الغدير وتتويج أمير المؤمنين بالولاية.'
    ],
    evidencesEn: [
      'Al-Kafi by al-Kulayni (Vol. 1, Kitab al-Hujjah, p. 286+): Complete transmission of the designation of Imam Ali at Ghadir Khumm.',
      'Kamal al-Din wa Tamam al-Ni\'mah by al-Saduq (p. 256): Mass-transmitted Hadith of Ghadir and the designation of the Twelve Imams.',
      'Basa\'ir al-Darajat by al-Saffar (p. 432): Textual foundations of the knowledge and spiritual authority of the Ahl al-Bayt.',
      'I\'lam al-Wara bi A\'lam al-Huda by al-Tabarsi (p. 165): Detailed documentation of the historic assembly at Ghadir Khumm.'
    ]
  },
  {
    id: 'tawassul-intercession',
    category: 'worship',
    questionAr: 'ما حقيقة التوسل بأهل البيت والشفاعة في مصادر الشيعة؟ أليس هذا شركاً؟',
    questionEn: 'What is the reality of Intercession (Shafa\'ah) and Tawassul in Shia sources? Is it polytheism?',
    shortAnswerAr: 'التوسل ليس عبادةً للمتوسل به على الإطلاق، بل هو ابتغاء الوسيلة الصالحة إلى الله تعالى وطلب استجابته بحق محمد وآله الطاهرين، والمستجيب والرازق والخالق والمحيي هو الله وحده لا شريك له.',
    shortAnswerEn: 'Tawassul is never the worship of intermediaries. Rather, it is beseeching Allah by invoking the honor and piety of His chosen righteous servants. Allah alone is the Sole Creator, Bestower, and Granter of all supplication.',
    detailedExplanationAr: 'القرآن الكريم صريح في الحث على اتخاذ الوسيلة: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ﴾ [المائدة: ٣٥]. وفي سورة النساء آية ٦٤: ﴿وَلَوْ أَنَّهُمْ إِذ ظَّلَمُوا أَنفُسَهُمْ جَاءُوكَ فَاسْتَغْفَرُوا اللَّهَ وَاسْتَغْفَرَ لَهُمُ الرَّسُولُ لَوَجَدُوا اللَّهَ تَوَّابًا رَّحِيمًا﴾. وروى الكليني في الكافي (كتاب الحجة) والشيخ الصدوق في عيون أخبار الرضا: أن محمداً وآل محمد هم أبواب الله وأسباب رحمته، وقد علّم الإمام علي الهادي الأمة في "الزيارة الجامعة الكبيرة": "من أراد الله بدأ بكم، ومن وحده قبل عنكم، ومن قصده توجه بكم". فالدعاء موجه لله وحده، وحب أهل البيت وسيلة إلى رحمته.',
    detailedExplanationEn: 'The Quran commands: "O you who believe! Fear Allah and seek the means of approach (wasilah) to Him" (5:35). In Surah an-Nisa 4:64: "If, when they had wronged themselves, they had come to you and asked forgiveness of Allah, and the Messenger had asked forgiveness for them, they would have found Allah Forgiving and Merciful." In Al-Kafi (Kitab al-Hujjah) and Uyun Akhbar al-Rida, Ahl al-Bayt are described as the gates to divine grace. In the Ziyarah Jami\'ah Kabirah, Imam al-Hadi teaches: "Whoever seeks Allah begins with you, whoever affirms His oneness accepts from you, and whoever directs toward Him turns through you." The prayer is directed solely to Allah.',
    evidencesAr: [
      'قوله تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ﴾ [المائدة: ٣٥]',
      'الزيارة الجامعة الكبيرة للإمام علي الهادي (ع) المروية في "من لا يحضره الفقيه" للشيخ الصدوق (ج ٢، ص ٦٠٩) و"تهذيب الأحكام" للشيخ الطوسي.',
      'نهج البلاغة للشريف الرضي (الحكمة ٢٥٧): قول أمير المؤمنين (ع): "وَالشَّفِيعُ جَنَاحُ الطَّالِبِ".',
      'دعاء التوسل المروي في بحار الأنوار للعلامة المجلسي (ج ٩٩، ص ٢٤٧) ومفاتيح الجنان للمحدث القمي.'
    ],
    evidencesEn: [
      'Holy Quran 5:35: "O you who believe! Revere Allah and seek the means of approach unto Him."',
      'Ziyarah Jami\'ah Kabirah by Imam Ali al-Hadi in Man La Yahduruhu al-Faqih (Vol. 2, p. 609) and Tahdhib al-Ahkam.',
      'Nahj al-Balagha, Saying 257: Imam Ali states: "The intercessor is the wing of the seeker."',
      'Supplication of Tawassul recorded in Bihar al-Anwar by al-Majlisi (Vol. 99, p. 247) and Mafatih al-Jinan by al-Qummi.'
    ]
  },
  {
    id: 'islamic-unity',
    category: 'unity',
    questionAr: 'ما هو موقف الشيعة من سائر المذاهب الإسلامية والأخوة الإيمانية من كتبهم ورواياتهم؟',
    questionEn: 'What is the Shia stance on Islamic unity, fraternity, and other Muslim schools according to their primary texts?',
    shortAnswerAr: 'الوحدة الإسلامية فريضة شرعية ومبدأ استراتيجي ثابت عند الشيعة الإمامية؛ فجميع من ينطق بالشهادتين هو مسلم معصوم الدم والعرض والمال، وأخ في الدين تجب نصرته ومودته.',
    shortAnswerEn: 'Islamic unity and fraternity is a paramount religious duty and strategic pillar in Shia Islam. Anyone who professes the two testimonies (Shahadatayn) is a full Muslim whose life, dignity, and property are sacred, and a brother in faith deserving love and solidarity.',
    detailedExplanationAr: 'روى ثقة الإسلام الكليني في الكافي (ج ٢، كتاب العشرة، باب صلة الإخوان، ص ٦٣٦) في صحيحة معاوية بن وهب عن الإمام جعفر الصادق (ع) وصيته الخالدة لشيعته: "صلوا في عشائرهم، واشهدوا جنائزهم، وعودوا مرضاهم، وأدوا حقوقهم... ولا يسبقوكم إلى خير فأنتم أولى به منهم، وكونوا زيناً لنا ولا تكونوا شيناً علينا". وتؤكد فتاوى كبار مراجع النجف الأشرف وقم المقدسة (وعلى رأسهم المرجع الأعلى السيد علي السيستاني) حرمة النزاع الطائفي وإعلانه الشهير: "أهل السنة ليسوا إخواننا فحسب، بل هم أنفسنا"، وحرمة الإساءة لمقدسات المسلمين.',
    detailedExplanationEn: 'In Al-Kafi (Vol. 2, Kitab al-Ishrah, p. 636), Mu\'awiyah ibn Wahb narrates Imam Ja\'far al-Sadiq\'s eternal testament to his followers: "Pray in their congregations, attend their funerals, visit their sick, and fulfill their rights... let them not precede you in any good deed, for you are more entitled to it; be an adornment for us and do not be a disgrace to us." Edicts by Shia Maraji\' across history, led by Grand Ayatollah Ali al-Sistani, strictly forbid sectarian strife, crystallizing in his famous doctrine: "Sunnis are not merely our brothers, they are our own souls."',
    evidencesAr: [
      'الكافي للشيخ الكليني (ج ٢، كتاب العشرة، ص ٦٣٦): صحيحة معاوية بن وهب في حسن معاشرة سائر المسلمين.',
      'فتوى المرجع الديني الأعلى السيد علي الحسيني السيستاني: "لا تقولوا إخواننا أهل السنة، بل قولوا: أنفسنا".',
      'فتاوى مراجع النجف الأشرف وقم بحرمة سب رموز المسلمين أو إثارة النعرات الطائفية بين أبناء القبلة الواحدة.',
      'نهج البلاغة (الكتاب ٥٣): قول أمير المؤمنين علي (ع): "فَإِنَّهُمْ صِنْفَانِ: إِمَّا أَخٌ لَكَ فِي الدِّينِ، أَوْ نَظِيرٌ لَكَ فِي الْخَلْقِ".'
    ],
    evidencesEn: [
      'Al-Kafi by al-Kulayni (Vol. 2, Kitab al-Ishrah, p. 636): Authentic report of Mu\'awiyah ibn Wahb regarding virtuous fraternity with all Muslims.',
      'Grand Ayatollah al-Sistani\'s celebrated declaration: "Do not say our Sunni brothers, say our own selves."',
      'Decrees from top Shia Maraji\' prohibiting any insult to symbols venerated by other Islamic denominations.',
      'Nahj al-Balagha (Letter 53): Imam Ali: "For people are of two kinds: either your brother in faith, or your equal in creation."'
    ]
  },
  {
    id: 'women-status',
    category: 'ethics',
    questionAr: 'كيف ينظر فكر أهل البيت إلى مكانة المرأة ودورها القيادي في المجتمع؟',
    questionEn: 'How does the school of Ahl al-Bayt view women and their leadership in society?',
    shortAnswerAr: 'تُعد المرأة في فكر أهل البيت شقيقة الرجل في الكرامة والمسؤولية والولاية الأخلاقية؛ وقد قدّم المذهب نماذج تاريخية قادت الأمة كالسيدة خديجة الكبرى، والسيدة فاطمة الزهراء، وبطلة كربلاء السيدة زينب الكبرى.',
    shortAnswerEn: 'Women are recognized as full intellectual, spiritual, and civic equals to men in moral dignity and leadership, epitomized by towering historical figures like Lady Khadijah, Lady Fatima az-Zahra, and the heroine of Karbala, Lady Zaynab.',
    detailedExplanationAr: 'لعبت المرأة في مدرسة أهل البيت أدواراً تاريخية قيادية غير مسبوقة: فالسيدة خديجة الكبرى كانت أول من آمن بالرسالة وبذلت مالها وفكرها لنصرة النبي، والسيدة فاطمة الزهراء سيدة نساء العالمين كانت قطب البيت النبوي وصاحبة الخطبة الفدكية الخالدة في فلسفة الشريعة والعدالة، والسيدة زينب الكبرى عقيلة بني هاشم قادت ركب كربلاء بعد استشهاد أخيها الحسين وحطمت كبرياء الطغاة في الكوفة والشام بخطبتها المدوية: "فكد كيدك، واسعَ سعيك، فناصب جهدك، فوالله لا تمحو ذكرنا". ووضع الإمام السجاد في "رسالة الحقوق" أعظم ميثاق لتكريم الأم والزوجة والبنت.',
    detailedExplanationEn: 'In the school of Ahl al-Bayt, women occupy central historical stewardship: Lady Khadijah was the first believer whose wisdom and wealth financed the dawn of Islam; Lady Fatima was the spiritual axis of the Infallible Household whose Sermon of Fadak stands as a masterpiece of legal philosophy and social justice; and Lady Zaynab preserved the Karbala awakening through her legendary oration defying tyrants in Kufa and Damascus: "Scheme your worst, exert your efforts, and strive your utmost, but by Allah, you shall never erase our memory." Furthermore, Imam al-Sajjad in his Treatise on Rights established unprecedented protections for mothers, wives, and daughters.',
    evidencesAr: [
      'قوله تعالى: ﴿وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ يَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ﴾ [التوبة: ٧١]',
      'الخطبة الفدكية للسيدة فاطمة الزهراء (ع) في كتاب "الاحتجاج" للشيخ الطبرسي (ج ١، ص ١٣١).',
      'خطبة السيدة زينب الكبرى (ع) في الشام المروية في "أمالي الشيخ المفيد" و"أمالي الشيخ الطوسي" و"بحار الأنوار" (ج ٤٥، ص ١٣٣).',
      'رسالة الحقوق للإمام زين العابدين علي بن الحسين (ع) المروية في "تحف العقول" و"الخصال" للشيخ الصدوق.'
    ],
    evidencesEn: [
      'Quran 9:71: "The believing men and believing women are allies of one another. They enjoin what is right and forbid what is wrong."',
      'The Sermon of Fadak by Lady Fatima az-Zahra in Al-Ihtijaj by al-Tabarsi (Vol. 1, p. 131).',
      'Lady Zaynab\'s historic Damascus speech recorded in Amali of al-Mufid, Amali of al-Tusi, and Bihar al-Anwar (Vol. 45, p. 133).',
      'The Treatise on Rights (Risalat al-Huquq) by Imam Zayn al-Abidin in Tuhaf al-Uqul and Al-Khisal by Shaykh al-Saduq.'
    ]
  },
  {
    id: 'taqiyyah-concept',
    category: 'ethics',
    questionAr: 'ما هي حقيقة التقية عند الشيعة؟ وهل هي خداع أم حفظ للدماء؟',
    questionEn: 'What is the true meaning of Taqiyyah in Shia Islam? Is it deception or self-preservation of human life?',
    shortAnswerAr: 'التقية رخصة شرعية قرآنية لحفظ النفس والدماء المحترمة من بطش الطغاة عند الاضطهاد، وهي سلوك إنساني عقلاني مشروع مارسه الأنبياء والصحابة كالصحابي عمار بن ياسر.',
    shortAnswerEn: 'Taqiyyah is a legitimate Quranic dispensation practiced under lethal persecution to preserve human life and dignity against oppressive tyrants. It is a rational, humane principle practiced by prophets and early companions like Ammar ibn Yasir.',
    detailedExplanationAr: 'التقية مأخوذة من "الاتقاء" والحذر، وليست خداعاً أو نفاقاً؛ بل نص عليها القرآن الكريم صراحة في قوله تعالى: ﴿إِلَّا أَن تَتَّقُوا مِنْهُمْ تُقَاةً﴾ [آل عمران: ٢٨]، وفي قصة الصحابي عمار بن ياسر حين عذبه المشركون: ﴿إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالإِيمَانِ﴾ [النحل: ١٠٦]. وروى الكليني في الكافي (كتاب الإيمان والكفر، باب التقية): "التقية ترس المؤمن وحرزه". والتقية لا تجوز إذا أدت إلى هدم أصل الدين أو إراقة دماء الأبرياء، كما أثبت الإمام الحسين عليه السلام بخروجه وشهادته في كربلاء حيث لا تجوز التقية.',
    detailedExplanationEn: 'Derived from the Arabic root for protection and caution, Taqiyyah is not deception; it is explicit in the Quran: "Except when taking precaution against them in prudence" (3:28) and in the story of Ammar ibn Yasir under pagan torture: "Except one who was forced while his heart is content with faith" (16:106). In Al-Kafi, Imam al-Sadiq explains: "Taqiyyah is the shield of the believer." Taqiyyah is forbidden if it compromises core faith or causes the shedding of innocent blood, as demonstrated by Imam Hussain who chose martyrdom in Karbala because upholding righteousness under Yazid left no room for compromise.',
    evidencesAr: [
      'قوله تعالى: ﴿إِلَّا أَن تَتَّقُوا مِنْهُمْ تُقَاةً وَيُحَذِّرُكُمُ اللَّهُ نَفْسَهُ﴾ [آل عمران: ٢٨]',
      'قوله تعالى: ﴿مَن كَفَرَ بِاللَّهِ مِن بَعْدِ إِيمَانِهِ إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالإِيمَانِ﴾ [النحل: ١٠٦]',
      'الكافي للشيخ الكليني (ج ٢، كتاب الإيمان والكفر، باب التقية، ص ٢١٧): عن أبي جعفر الباقر (ع): "التقية في كل ضرورة، وصاحبها أعلم بها حين تنزل به".',
      'تفسير التبيان لشيخ الطائفة الطوسي وتفسير مجمع البيان للطبرسي في آيات التقية وحرمة دماء المؤمنين.'
    ],
    evidencesEn: [
      'Quran 3:28: "Except that you take precaution against them in caution."',
      'Quran 16:106: "Whoever disbelieves in Allah after his belief, except for one who is forced [to profess it] while his heart is secure in faith."',
      'Al-Kafi by al-Kulayni (Vol. 2, Kitab al-Iman wa al-Kufr, Bab al-Taqiyyah, p. 217): Imam al-Baqir: "Taqiyyah is sanctioned in every genuine dire necessity."',
      'Al-Tibyan by Shaykh al-Tusi and Majma al-Bayan by al-Tabarsi examining the Quranic sanctity of protecting innocent lives.'
    ]
  },
  {
    id: 'khums-obligation',
    category: 'fiqh',
    questionAr: 'ما هو الخمس في فقه الشيعة؟ وما هو سنده من القرآن والسنة؟ وأين يُصرف؟',
    questionEn: 'What is Khums in Shia jurisprudence? What is its Quranic basis and how is it distributed?',
    shortAnswerAr: 'الخمس فريضة مالية قرآنية واجبة بنص آية الغنيمة في سورة الأنفال (٤١)، تؤدى عن فاضل المؤونة السنوية والأرباح، وتُقسم إلى سهم الإمام (ع) لرعاية الأيتام والمحتاجين والمصالح الإسلامية، وسهم السادة لفقراء بني هاشم.',
    shortAnswerEn: 'Khums is an obligatory Islamic financial duty instituted in Surah al-Anfal (8:41). Levied at twenty percent on annual surplus savings and earnings after living expenses, it is allocated to the Share of the Imam (for social welfare, education, and public good) and the Share of the Hashimites (for needy descendants who are legally barred from taking Zakat).',
    detailedExplanationAr: 'قال تعالى: ﴿وَاعْلَمُوا أَنَّمَا غَنِمْتُمْ مِنْ شَيْءٍ فَأَنَّ لِلَّهِ خُمُسَهُ وَلِلرَّسُولِ وَلِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَابْنِ السَّبِيلِ﴾ [الأنفال: ٤١]. وقد بيّن أئمة أهل البيت في الكافي والتهذيب والاستبصار أن "الغنيمة" في لغة العرب والقرآن هي كل ما يُستفاد ويُظفر به من ربح وفائدة، وليست محصورة بغنائم الحرب فقط. روى الكليني في الكافي (كتاب الحجة، باب الفيء والأنفال وتفسير الخمس) بسند صحيح عن الإمام الصادق (ع): "هي والله الإفادة يوماً بيوم". والخمس نظام تكافلي عظيم يحفظ كرامة الفقراء ويمول المشاريع الإنسانية والمدارس ومستشفيات العتبات المقدسة.',
    detailedExplanationEn: 'Surah al-Anfal 8:41 states: "And know that whatever you gain (ghanimtum) of anything, for Allah is a fifth of it, and for the Messenger and near relatives and orphans, the needy, and the traveler." In Arabic linguistic consensus and classical Shia compilations (Al-Kafi, Tahdhib, and Al-Istibsar), "Ghanimah" encompasses any net profit, surplus revenue, or gained asset. In Al-Kafi, Imam al-Sadiq authenticates: "By Allah, it applies to net earnings acquired day by day." Khums constitutes a powerful social solidarity mechanism funding hospitals, welfare foundations, orphanages, and educational institutions.',
    evidencesAr: [
      'القرآن الكريم: سورة الأنفال، الآية ٤١: ﴿وَاعْلَمُوا أَنَّمَا غَنِمْتُمْ مِن شَيْءٍ فَأَنَّ لِلَّهِ خُمُسَهُ...﴾.',
      'الكافي للشيخ الكليني (ج ١، كتاب الحجة، باب الفيء والأنفال والفرائض والخمس، ص ٥٣٩): صحاح روايات أهل البيت في موارد الخمس.',
      'تهذيب الأحكام لشيخ الطائفة الطوسي (ج ٤، كتاب الخمس، ص ١٢١): تفصيل أحكام أرباح المكاسب والفوائض.',
      'الاستبصار للشيخ الطوسي (ج ٢، ص ٥٤): الروايات المعتبرة في قسمة الخمس ومصارفه الشرعية.'
    ],
    evidencesEn: [
      'Holy Quran, Surah al-Anfal 8:41: Divine injunction establishing the entitlement of Khums.',
      'Al-Kafi by al-Kulayni (Vol. 1, Kitab al-Hujjah, Bab al-Khums, p. 539): Authentic traditions defining surplus gains.',
      'Tahdhib al-Ahkam by al-Tusi (Vol. 4, Kitab al-Khums, p. 121): Comprehensive jurisprudence on commercial earnings and minerals.',
      'Al-Istibsar by al-Tusi (Vol. 2, p. 54): Legal proofs governing the distribution to the impoverished and societal welfare.'
    ]
  },
  {
    id: 'ismah-infallibility',
    category: 'imamah',
    questionAr: 'ما هو دليل الشيعة العقلي والقرآني على عصمة الأنبياء والأئمة الاثني عشر؟',
    questionEn: 'What is the rational and Quranic proof for the Infallibility (Ismah) of Prophets and the Twelve Imams?',
    shortAnswerAr: 'العصمة لطف إلهي وصيانة ربانية تجعل النبي والإمام مأموناً من الذنوب والخطأ عمداً وسهواً، ودليلها العقلي ضرورة وثوق الناس المطلق بالهداية الإلهية، ودليلها القرآني آية التطهير وآية ابتلاء إبراهيم.',
    shortAnswerEn: 'Infallibility (Ismah) is divine protection ensuring that the Prophet and Imam are immune from sin, transgression, and deviation in transmitting truth. The rational proof is that without complete integrity, mankind could never place absolute trust in divine revelation. The Quranic proof includes the Verse of Purification (33:33) and the covenant with Abraham (2:124).',
    detailedExplanationAr: 'يستدل علماء الشيعة بالعقل أولاً: لو جاز الذنب أو الخطأ على الإمام لسقطت الثقة بأوامره ونواهيه، ولوجب على الناس الإنكار عليه حين يذنب، في حين أمر الله بطاعته المطلقة ﴿أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الأَمْرِ مِنكُمْ﴾، والأمر بالطاعة المطلقة لمن يخطئ تناقض قبيح يستحيل على الحكيم. ومن القرآن الكريم قوله تعالى لإبراهيم (ع): ﴿قَالَ إِنِّي جَاعِلُكَ لِلنَّاسِ إِمَامًا قَالَ وَمِنْ ذُرِّيَّتِي قَالَ لا يَنَالُ عَهْدِي الظَّالِمِينَ﴾ [البقرة: ١٢٤]، والذنب ظلم للنفس، فالإمامة لا تُمنح لمن تلبس بظلم قط. وأكدت آية التطهير: ﴿إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا﴾ [الأحزاب: ٣٣] العصمة التامة لعترة النبي.',
    detailedExplanationEn: 'Shia theologians argue rationally: If a spiritual guide were susceptible to error, sins, or moral hypocrisy, public trust would collapse; commanded obedience (4:59) would conflict with forbidding evil. Furthermore, in Surah al-Baqarah 2:124, when Abraham asked for leadership in his progeny, God answered: "My covenant does not encompass the wrongdoers." Any transgression is wrongdoing to oneself, proving that the Divine covenant of Imamate is granted exclusively to those untainted by sin. This is reinforced by the Verse of Purification (33:33) declaring total purification from all spiritual impurities.',
    evidencesAr: [
      'قوله تعالى: ﴿قَالَ لا يَنَالُ عَهْدِي الظَّالِمِينَ﴾ [البقرة: ١٢٤] في نفي الإمامة عمن ارتكب معصية قط.',
      'قوله تعالى: ﴿إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا﴾ [الأحزاب: ٣٣].',
      'كتاب "الاعتقادات" للشيخ الصدوق (باب الاعتقاد في العصمة، ص ٩٦): "اعتقادنا في الأنبياء والرسل والأئمة والملائكة صلوات الله عليهم أنهم معصومون مطهرون من كل دنس".',
      'كتاب "تجريد الاعتقاد" لنصير الدين الطوسي وشرحه للعلامة الحلي في البرهان العقلي على وجوب عصمة الإمام.'
    ],
    evidencesEn: [
      'Quran 2:124: "My covenant does not reach the wrongdoers (dhalimin)."',
      'Quran 33:33: The decisive decree removing all spiritual uncleanness from the Ahl al-Bayt.',
      'Kitab al-I\'tiqadat by Shaykh al-Saduq (p. 96): Canonical articulation of complete infallibility from all indecency.',
      'Tajrid al-I\'tiqad by Nasir al-Din al-Tusi with commentary by al-Allama al-Hilli: Rational proofs on the necessity of Infallibility.'
    ]
  },
  {
    id: 'ghaybah-mahdi',
    category: 'imamah',
    questionAr: 'ما هي حكمة غيبة الإمام المهدي (عج)؟ وكيف يستفيد المؤمنون منه في عصر الغيبة؟',
    questionEn: 'What is the divine wisdom behind the Occultation (Ghaybah) of Imam al-Mahdi? How do believers benefit during this era?',
    shortAnswerAr: 'غيبة الإمام الثاني عشر الحجة بن الحسن المهدي (عج) سنة إلهية جرت في الأنبياء السابقين كعيسى وموسى، لحفظ حياته من بطش الطغاة وامتحان إيمان البشر، وينتفع به العالم كانتفاعهم بالشمس إذا غيّبها السحاب.',
    shortAnswerEn: 'The Occultation of the Twelfth Imam, Muhammad ibn al-Hasan al-Mahdi (aj), mirrors divine precedents in prophetic history (such as Jesus and Moses). It safeguards his life from tyrant assassination and tests faith; humanity benefits from his spiritual presence just as the earth derives warmth and life from the sun when veiled by clouds.',
    detailedExplanationAr: 'روى الشيخ الصدوق في كتابه العظيم "كمال الدين وتمام النعمة" (ص ٤٨٥) والشيخ الطوسي في "كتاب الغيبة": سُئل النبي ﷺ: هل ينتفع الشيعة بالقائم في غيبته؟ فقال: "إي والذي بعثني بالنبوة، إنهم لينتفعون به، ويستضيئون بنور ولايته في غيبته كانتفاع الناس بالشمس وإن جللها السحاب". والإمام هو حجة الله وأمان أهل الأرض وبقاء النواميس، وقد فوّض في زمن الغيبة الكبرى إدارة شؤون الأحكام إلى الفقهاء العدول المأمونين على الدين، كما جاء في توقيعه الشريف: "وأما الحوادث الواقعة فارجعوا فيها إلى رواة حديثنا، فإنهم حجتي عليكم وأنا حجة الله".',
    detailedExplanationEn: 'In Kamal al-Din wa Tamam al-Ni\'mah (p. 485) and Kitab al-Ghaybah by al-Tusi, the Prophet was asked: "Shall your followers benefit from the Qa\'im during his occultation?" He answered: "Yes, by the One who sent me with the truth! They receive illumination from his guidance in his concealment just as people benefit from the sun even when shrouded by clouds." The Imam is the anchor of spiritual grace. During the Major Occultation, judicial guidance is entrusted to principled scholars: "As for occurring events, consult the narrators of our traditions; they are my proof over you, and I am the proof of Allah."',
    evidencesAr: [
      'كمال الدين وتمام النعمة للشيخ الصدوق (أوسع مصنّف شيعي في نصوص ولادة وغيبة الإمام المهدي).',
      'كتاب الغيبة لشيخ الطائفة الطوسي: دراسة الروايات والأدلة العقلية على استتار الإمام والرد على الشبهات.',
      'التوقيع الرفيع المروي في الاحتجاج للطبرسي (ج ٢، ص ٢٨٣) وإكمال الدين: "أما الحوادث الواقعة فارجعوا فيها إلى رواة حديثنا".',
      'الكافي للشيخ الكليني (ج ١، كتاب الحجة، باب في الغيبة، ص ٣٣٦).'
    ],
    evidencesEn: [
      'Kamal al-Din wa Tamam al-Ni\'mah by al-Saduq: The definitive encyclopedia on the birth and occultation of Imam al-Mahdi.',
      'Kitab al-Ghaybah by Shaykh al-Tusi: Rational analysis and responses to theological objections on prolonged life.',
      'The Sacred Epistle in Al-Ihtijaj by al-Tabarsi (Vol. 2, p. 283): Directing believers to the upright jurists of traditions.',
      'Al-Kafi by al-Kulayni (Vol. 1, Kitab al-Hujjah, Bab fi al-Ghaybah, p. 336): Prophetic traditions foretelling the Occultation.'
    ]
  },
  {
    id: 'karbala-mourning-rites',
    category: 'worship',
    questionAr: 'ما هي فلسفة إقامة مجالس العزاء والبكاء على الإمام الحسين (ع) في مصادر الشيعة؟',
    questionEn: 'What is the philosophy of mourning assemblies (Majalis) and weeping for Imam Hussain in Shia sources?',
    shortAnswerAr: 'إقامة العزاء والبكاء على سيد الشهداء شعيرة إيمانية وإنسانية كبرى أمر بها النبي الأكرم والأئمة، لإحياء قيم العدالة ونصرة المظلوم ومقاومة الطغيان، وليست مجرد حزن عابر بل وقفة ضمير ونهج حياة.',
    shortAnswerEn: 'Mourning and weeping for Imam Hussain is a profound prophetic and humanitarian tradition commanded by Prophet Muhammad ﷺ and the Infallible Imams. It revitalizes ideals of moral courage, solidarity with the oppressed, and resistance to oppression, transforming sorrow into enduring conscience.',
    detailedExplanationAr: 'روى ابن قولويه في "كامل الزيارات" (ص ١٠٠ وما بعدها) والحر العاملي في "وسائل الشيعة" عن الإمام جعفر الصادق (ع): "من ذُكر الحسين عنده فخرج من عينه من الدموع مقدار جناح ذباب كان ثوابه على الله ولم يرضَ له بدون الجنة"، وقال الإمام الرضا (ع) لابن شبيب في الرواية المعتبرة: "يا بن شبيب، إن كنتَ باكياً لشيء فابكِ للحسين بن علي بن أبي طالب، فإنه ذُبح كما يُذبح الكبش". فمجالس الحسين هي مدارس فكرية لنشر علوم آل محمد وبث الوعي ضد الاستبداد وغرس قيم التضحية والإيثار في نفوس الأجيال.',
    detailedExplanationEn: 'In Kamil al-Ziyarat (p. 100+) and Wasa\'il al-Shia, Imam Ja\'far al-Sadiq taught: "Whoever recalls Hussain and a tear as tiny as the wing of a fly flows from their eye, their reward rests with Allah, and He shall be pleased with nothing less than Paradise for them." In the famous authentic testament to Ibn Shabib, Imam Ali al-Rida instructed: "O son of Shabib, if you are to weep for anything, weep for Hussain ibn Ali; for he was slaughtered as a ram is slaughtered." These commemorations serve as public seminaries teaching moral resistance and sacrifice across generations.',
    evidencesAr: [
      'كامل الزيارات لأبي القاسم جعفر بن محمد بن قولويه (الباب ٣٢ وما بعده في ثواب البكاء على الحسين).',
      'عيون أخبار الرضا للشيخ الصدوق (ج ١، ص ٢٩٩): حديث الإمام الرضا التاريخي لريان بن شبيب.',
      'الأمالي للشيخ المفيد (ص ٣٣٨): مجالس الذكر وإحياء أمر أهل البيت: "رحم الله من أحيا أمرنا".',
      'وسائل الشيعة للحر العاملي (ج ١٤، أبواب المزار، ص ٥٠١): استحباب رثاء الحسين وإنشاد الشعر في فاجعة الطف.'
    ],
    evidencesEn: [
      'Kamil al-Ziyarat by Ibn Qulawayh (Chapters 32+): Canonical traditions on spiritual rewards of commemorating Karbala.',
      'Uyun Akhbar al-Rida by al-Saduq (Vol. 1, p. 299): The historic Ibn Shabib transmission on mourning Imam Hussain.',
      'Amali of al-Mufid (p. 338): Commendation of memorial gatherings: "May Allah have mercy on whoever revives our cause."',
      'Wasa\'il al-Shia by al-Hurr al-Amili (Vol. 14, p. 501): Compendium on eulogizing Karbala martyrs and social consciousness.'
    ]
  },
  {
    id: 'marjaiyyah-taqleed',
    category: 'fiqh',
    questionAr: 'ما هو التقليد والرجوع إلى المرجعية الدينية؟ ولماذا لا يستنبط كل إنسان حكمه بنفسه؟',
    questionEn: 'What is Marja\'iyyah and Taqleed (emulation in religious rulings)? Why does a believer consult a qualified jurist?',
    shortAnswerAr: 'التقليد هو رجوع غير المتخصص إلى المتخصص، وهو أصل عقلائي عام في كل مجالات الحياة كالطب والهندسة؛ فالمكلف يرجع للفقيه الجامع لشرائط الفتوى والأعلم بأحكام القرآن والسنة النبوية.',
    shortAnswerEn: 'Taqleed is the rational principle of consulting certified expertise—the same common-sense practice governing medicine, engineering, and law. A layperson follows a preeminent, thoroughly vetted jurist (Marja\') who has dedicated decades to mastering Quranic Arabic, Hadith authentication, and legal epistemology.',
    detailedExplanationAr: 'استنباط الحكم الشرعي من مداركه التخصصية يحتاج إلى إحاطة واسعة بعلوم اللغة العربية، وأصول الفقه، وعلم الرجال والحديث، ومعرفة الناسخ والمنسوخ، والقواعد الفقهية؛ وهو أمر يتعذر على عموم الناس. وقد أرشد القرآن إلى هذا المبدأ: ﴿فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لا تَعْلَمُونَ﴾ [النحل: ٤٣]، وقال تعالى: ﴿فَلَوْلا نَفَرَ مِن كُلِّ فِرْقَةٍ مِّنْهُمْ طَائِفَةٌ لِّيَتَفَقَّهُوا فِي الدِّينِ﴾ [التوبة: ١٢٢]. وروى الشيخ الطبرسي في "الاحتجاج" عن الإمام الحسن العسكري (ع): "فأما من كان من الفقهاء صائناً لنفسه، حافظاً لدينه، مخالفاً على هواه، مطيعاً لأمر مولاه، فللعوام أن يقلدوه". والمرجعية في النجف الأشرف وقم تمثل صمام أمان للأمة في حفظ دينها وحقوقها ودفع العدوان عنها.',
    detailedExplanationEn: 'Deriving divine rulings from scriptures requires mastery of linguistics, Hadith verification (Ilm al-Rijal), jurisprudence (Usul al-Fiqh), and contextual hermeneutics—skills requiring decades of scholarly dedication. The Quran commands: "Ask the people of knowledge if you do not know" (16:43) and "Why should not a contingent from every group go forth to gain sound understanding in faith?" (9:122). In Al-Ihtijaj, Imam al-Hasan al-Askari laid the foundation: "Whoever among the jurists guards his soul, protects his faith, defies corrupt whims, and obeys his Master, the public may follow him." The Marja\'iyyah in Najaf and Qum acts as an independent guardian of public ethics and civic rights.',
    evidencesAr: [
      'قوله تعالى: ﴿فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لا تَعْلَمُونَ﴾ [النحل: ٤٣].',
      'قوله تعالى: ﴿فَلَوْلا نَفَرَ مِن كُلِّ فِرْقَةٍ مِّنْهُمْ طَائِفَةٌ لِّيَتَفَقَّهُوا فِي الدِّينِ وَلِيُنذِرُوا قَوْمَهُمْ﴾ [التوبة: ١٢٢].',
      'الاحتجاج للشيخ الطبرسي (ج ٢، ص ٢٦٣): حديث الإمام الحسن العسكري (ع) في شروط الفقيه المقلَّد.',
      'وسائل الشيعة للحر العاملي (ج ٢٧، كتاب القضاء، باب وجوب الرجوع في القضاء والفتوى إلى رواة الحديث، ص ١٣١).'
    ],
    evidencesEn: [
      'Holy Quran 16:43: "So ask the people of the message if you do not know."',
      'Holy Quran 9:122: Divine mandate for scholarly specialization in religious sciences.',
      'Al-Ihtijaj by al-Tabarsi (Vol. 2, p. 263): The criteria established by Imam al-Hasan al-Askari for valid religious emulation.',
      'Wasa\'il al-Shia by al-Hurr al-Amili (Vol. 27, Kitab al-Qada, p. 131): Obligations of consulting verified scholars of prophetic traditions.'
    ]
  }
];

export const spiritualGems: SpiritualGem[] = [
  {
    id: 'nahj-human-brotherhood',
    sourceAr: 'نهج البلاغة - عهد مالك الأشتر',
    sourceEn: 'Nahj al-Balagha — Letter to Malik al-Ashtar',
    titleAr: 'ميثاق العدالة وحقوق الإنسان',
    titleEn: 'The Universal Charter of Human Equality',
    textAr: 'وَأَشْعِرْ قَلْبَكَ الرَّحْمَةَ لِلرَّعِيَّةِ، وَالْمَحَبَّةَ لَهُمْ، وَاللُّطْفَ بِهِمْ، وَلَا تَكُونَنَّ عَلَيْهِمْ سَبُعاً ضَارِياً تَغْتَنِمُ أَكْلَهُمْ، فَإِنَّهُمْ صِنْفَانِ: إِمَّا أَخٌ لَكَ فِي الدِّينِ، أَوْ نَظِيرٌ لَكَ فِي الْخَلْقِ.',
    textEn: 'Infuse your heart with compassion for the people, love for them, and kindness toward them. Be not like a voracious beast preying upon them; for they are of two kinds: either your brother in faith, or your equal in creation.',
    reflectionAr: 'هذه العبارة الخالدة لأمير المؤمنين علي عليه السلام تمثل أسمى إعلان عالمي لحقوق الإنسان يسبق كافة المواثيق الحديثة بقرون.',
    reflectionEn: 'This eternal decree by Imam Ali establishes a cosmic foundation for human dignity: regardless of faith, ethnicity, or status, every person deserves unconditional justice.',
    theme: 'عدالة وحقوق'
  },
  {
    id: 'dua-kumayl-mercy',
    sourceAr: 'دعاء كميل المروي عن الإمام علي (ع)',
    sourceEn: 'Dua Kumayl — Transmitted from Imam Ali (as)',
    titleAr: 'سعة الرحمة الإلهية وسر المناجاة',
    titleEn: 'The Boundlessness of Divine Mercy',
    textAr: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ، وَبِقُوَّتِكَ الَّتِي قَهَرْتَ بِهَا كُلَّ شَيْءٍ، وَخَضَعَ لَهَا كُلُّ شَيْءٍ، وَذَلَّ لَهَا كُلُّ شَيْءٍ...',
    textEn: 'O Allah, I ask You by Your Mercy which embraces all things, and by Your Power through which You vanquish all things, and before which all things are humbled...',
    reflectionAr: 'دعاء كميل هو نشيد الروح التائبة؛ يتنقل بالمؤمن بين الإقرار بالضعف البشري واليقين بالفيض الإلهي الذي لا ينقطع.',
    reflectionEn: 'Dua Kumayl is a mystical symphony of repentance and hope, elevating the human heart to direct intimacy with the All-Merciful Creator.',
    theme: 'مناجاة وروحانية'
  },
  {
    id: 'makarim-akhlaq',
    sourceAr: 'الصحيفة السجادية - دعاء مكارم الأخلاق',
    sourceEn: 'Al-Sahifa al-Sajjadiyya — The Prayer of Noble Character',
    titleAr: 'نبل الأخلاق ومحاربة الأنانية',
    titleEn: 'Cultivating Nobility of Character',
    textAr: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِهِ، وَحَلِّنِي بِحِلْيَةِ الصَّالِحِينَ، وَأَلْبِسْنِي زِينَةَ الْمُتَّقِينَ، فِي بَسْطِ الْعَدْلِ، وَكَظْمِ الغَيْظِ، وَإِطْفَاءِ النَّائِرَةِ، وَضَمِّ أَهْلِ الفُرْقَةِ، وَإِصْلَاحِ ذَاتِ البَيْنِ...',
    textEn: 'O Allah, bless Muhammad and his household, and adorn me with the ornament of the righteous and the mantle of the pious: in spreading justice, restraining anger, extinguishing hostility, uniting the divided, and reconciling hearts...',
    reflectionAr: 'منهج الإمام السجاد عليه السلام في بناء الشخصية الإنسانية السامية التي تواجه الإساءة بالإحسان وترتقي عن سفاسف الأحقاد.',
    reflectionEn: 'Imam al-Sajjad\'s educational paradigm for the enlightened soul: counteracting enmity with reconciliation, and cultivating peace in fragmented societies.',
    theme: 'أخلاق وسلوك'
  }
];
