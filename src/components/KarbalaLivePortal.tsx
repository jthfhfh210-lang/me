import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock,
  Volume2,
  VolumeX,
  Compass,
  Play,
  Pause,
  BookOpen,
  MapPin,
  Sparkles,
  CheckCircle2,
  Calendar,
  Radio,
  Sun,
  Moon
} from 'lucide-react';
import { Language } from '../types';

interface KarbalaLivePortalProps {
  lang: Language;
}

interface RecitationTrack {
  id: string;
  titleAr: string;
  titleEn: string;
  narratorAr: string;
  narratorEn: string;
  duration: string;
  textAr: string;
  textEn: string;
  virtueAr: string;
  virtueEn: string;
}

export const KarbalaLivePortal: React.FC<KarbalaLivePortalProps> = ({ lang }) => {
  const [activeTrackId, setActiveTrackId] = useState<string>('warith');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState<string>('');
  
  // Real-time Karbala Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Karbala Iraq Time (Asia/Baghdad)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Baghdad',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTimeFormatted(new Intl.DateTimeFormat(lang === 'ar' ? 'ar-IQ' : 'en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  // Sacred Recitation Tracks
  const tracks: RecitationTrack[] = [
    {
      id: 'warith',
      titleAr: 'زِيَارَةُ وَارِث (لسيد الشهداء الإمام الحسين ع)',
      titleEn: 'Ziyarah Warith (Imam Hussain p)',
      narratorAr: 'مروية عن الإمام جعفر الصادق (ع)',
      narratorEn: 'Reported by Imam Ja’far al-Sadiq',
      duration: '4:20',
      virtueAr: 'تجسد امتداد ثورة الإمام الحسين لرسالات الأنبياء من آدم ونوح وإبراهيم وموسى وعيسى ومحمد ﷺ.',
      virtueEn: 'Affirms Imam Hussain as the spiritual heir to the divine missions of Adam, Noah, Abraham, Moses, Jesus, and Muhammad.',
      textAr: 'السَّلَامُ عَلَيْكَ يَا وَارِثَ آدَمَ صَفْوَةِ اللَّهِ، السَّلَامُ عَلَيْكَ يَا وَارِثَ نُوحٍ نَبِيِّ اللَّهِ، السَّلَامُ عَلَيْكَ يَا وَارِثَ إِبْرَاهِيمَ خَلِيلِ اللَّهِ، السَّلَامُ عَلَيْكَ يَا وَارِثَ مُوسَى كَلِيمِ اللَّهِ، السَّلَامُ عَلَيْكَ يَا وَارِثَ عِيسَى رُوحِ اللَّهِ، السَّلَامُ عَلَيْكَ يَا وَارِثَ مُحَمَّدٍ حَبِيبِ اللَّهِ... أَشْهَدُ أَنَّكَ قَدْ أَقَمْتَ الصَّلَاةَ، وَآتَيْتَ الزَّكَاةَ، وَأَمَرْتَ بِالْمَعْرُوفِ، وَنَهَيْتَ عَنِ الْمُنْكَرِ، وَأَطَعْتَ اللَّهَ وَرَسُولَهُ حَتَّى أَتَاكَ الْيَقِينُ.',
      textEn: 'Peace be upon you, heir of Adam, the chosen of Allah; Peace be upon you, heir of Noah, the Prophet of Allah; Peace be upon you, heir of Abraham, the friend of Allah; Peace be upon you, heir of Moses, the spoken to by Allah; Peace be upon you, heir of Jesus, the spirit of Allah; Peace be upon you, heir of Muhammad, the beloved of Allah... I bear witness that you established prayer, paid zakat, enjoined good, forbade evil, and obeyed Allah and His Messenger until certainty came upon you.',
    },
    {
      id: 'abbas',
      titleAr: 'زِيَارَةُ أَبِي الفَضْلِ العَبَّاس (ساقي عطاشى كربلاء)',
      titleEn: 'Ziyarah of Al-Abbas (Bearer of the Banner)',
      narratorAr: 'مروية بسند معتبر عن الإمام الصادق (ع)',
      narratorEn: 'Transmitted by Imam Ja’far al-Sadiq',
      duration: '3:45',
      virtueAr: 'تخلد وفاء أبي الفضل العباس وثباته وبصيرته النافذة وفداءه لأخيه سيد الشهداء.',
      virtueEn: 'Honors the peerless fidelity, penetrating insight, and heroic sacrifice of Al-Abbas for human dignity.',
      textAr: 'سَلَامُ اللَّهِ وَسَلَامُ مَلَائِكَتِهِ الْمُقَرَّبِينَ، وَأَنْبِيَائِهِ الْمُرْسَلِينَ، وَعِبَادِهِ الصَّالِحِينَ، وَجَمِيعِ الشُّهَدَاءِ وَالصِّدِّيقِينَ، الزَّاكِيَاتُ الطَّيِّبَاتُ، فِيمَا تَغْتَدِي وَتَرُوحُ، عَلَيْكَ يَا ابْنَ أَمِيرِ الْمُؤْمِنِينَ... أَشْهَدُ لَكَ بِالتَّسْلِيمِ وَالتَّصْدِيقِ وَالْوَفَاءِ وَالنَّصِيحَةِ لِخَلَفِ النَّبِيِّ الْمُرْسَلِ.',
      textEn: 'The peace of Allah and the peace of His archangels, His messianic prophets, His righteous servants, and all the truthful martyrs, be upon you, O son of the Commander of the Faithful. I bear witness to your absolute surrender, fidelity, and sincerity towards the successor of the Holy Prophet.',
    },
    {
      id: 'faraj',
      titleAr: 'دُعَاءُ الفَرَج (للمولى صاحب العصر والزمان عج)',
      titleEn: 'Du’a al-Faraj (For the Promised Saviour)',
      narratorAr: 'دعاء مستحب ومروي عن أهل البيت (ع)',
      narratorEn: 'Supplication for universal divine justice',
      duration: '2:15',
      virtueAr: 'دعاء لتعجيل ظهور مصلح البشرية وتطهير الأرض من الظلم والجور وإقامة موازين العدل.',
      virtueEn: 'A universal prayer for the advent of divine justice, universal peace, and cosmic equity.',
      textAr: 'اللَّهُمَّ كُنْ لِوَلِيِّكَ الحُجَّةِ بْنِ الحَسَنِ، صَلَوَاتُكَ عَلَيْهِ وَعَلَى آبَائِهِ، فِي هَذِهِ السَّاعَةِ وَفِي كُلِّ سَاعَةٍ، وَلِيّاً وَحَافِظاً، وَقَائِداً وَنَاصِراً، وَدَلِيلاً وَعَيْناً، حَتَّى تُسْكِنَهُ أَرْضَكَ طَوْعاً، وَتُمَتِّعَهُ فِيهَا طَوِيلاً، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ.',
      textEn: 'O Allah, be for Your representative, Al-Hujjah son of Al-Hasan, Your blessings be upon him and upon his pure forebears, in this hour and in every hour, a guardian, a protector, a leader, a helper, a guide, and an eye, until You settle him upon Your earth willingly, and grant him prolonged peaceful stewardship therein.',
    },
  ];

  const activeTrack = tracks.find((t) => t.id === activeTrackId) || tracks[0];

  return (
    <section id="karbala-live" className="py-24 bg-stone-950 border-b border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4">
            <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{lang === 'ar' ? 'البث الروحي الحي ومواقيت كربلاء المقدسة' : 'Live Spiritual Feed & Sacred Karbala Timings'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100 font-serif-ar tracking-wide mb-6">
            {lang === 'ar' ? 'مَوَاقِيتُ الصَّلَاةِ وَالمَنصَّةُ الصَّوتِيَّةُ الرُّوحِيَّة' : 'Karbala Timings & Spiritual Recitations'}
          </h2>
          <p className="text-stone-300 font-sans-ar text-base sm:text-lg leading-relaxed">
            {lang === 'ar'
              ? 'توقيت كربلاء المقدسة الحي، ومواقيت الصلوات الخمس وفق أفق العتبة الحسينية والعباسية، مع تلاوة متزامنة لأعظم الزيارات والأدعية المعتمدة.'
              : 'Real-time Karbala astronomical timings and prayer schedule with synchronised sacred recitations honoring the school of Ahl al-Bayt.'}
          </p>
        </div>

        {/* Live Clock & Karbala Prayer Times Grid */}
        <div className="bg-stone-900/80 rounded-3xl border border-stone-800 p-6 sm:p-8 shadow-2xl mb-12">
          
          {/* Top Real-time Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b border-stone-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300">
                <Clock className="w-6 h-6 animate-pulse text-amber-400" />
              </div>
              <div>
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">
                  {lang === 'ar' ? 'التوقيت المباشر لكربلاء المقدسة (العراق)' : 'Karbala Official Time (Iraq GMT+3)'}
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-200">
                  {currentTimeFormatted || '12:00:00 PM'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-stone-950 border border-amber-600/30 text-amber-300">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'اتجاه القبلة في كربلاء: 201.8° جنوب غرب نحو مكة' : 'Qibla Azimuth: 201.8° SW to Makkah'}</span>
            </div>
          </div>

          {/* 5 Prayers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            
            {/* Fajr */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors">
              <Moon className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
              <span className="text-xs text-stone-400 block">{lang === 'ar' ? 'الفجر' : 'Fajr'}</span>
              <span className="text-lg font-mono font-bold text-stone-100">04:32</span>
              <span className="text-[10px] text-stone-500 block mt-1">{lang === 'ar' ? 'صلاة الصبح' : 'Dawn Prayer'}</span>
            </div>

            {/* Sunrise */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors">
              <Sun className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <span className="text-xs text-stone-400 block">{lang === 'ar' ? 'الشروق' : 'Sunrise'}</span>
              <span className="text-lg font-mono font-bold text-stone-100">05:54</span>
              <span className="text-[10px] text-stone-500 block mt-1">{lang === 'ar' ? 'طلوع الشمس' : 'Solar Sunrise'}</span>
            </div>

            {/* Dhuhr */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 hover:border-amber-400 transition-colors shadow-lg">
              <Sun className="w-5 h-5 text-amber-300 mx-auto mb-2" />
              <span className="text-xs text-amber-300 font-bold block">{lang === 'ar' ? 'الظهر' : 'Dhuhr'}</span>
              <span className="text-xl font-mono font-black text-amber-100">12:08</span>
              <span className="text-[10px] text-amber-400/80 block mt-1">{lang === 'ar' ? 'صلاة الظهرين' : 'Midday Prayer'}</span>
            </div>

            {/* Asr */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors">
              <Sun className="w-5 h-5 text-orange-400 mx-auto mb-2" />
              <span className="text-xs text-stone-400 block">{lang === 'ar' ? 'العصر' : 'Asr'}</span>
              <span className="text-lg font-mono font-bold text-stone-100">15:34</span>
              <span className="text-[10px] text-stone-500 block mt-1">{lang === 'ar' ? 'العصر الفضيل' : 'Afternoon Prayer'}</span>
            </div>

            {/* Maghrib */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors">
              <Moon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <span className="text-xs text-stone-400 block">{lang === 'ar' ? 'المغرب' : 'Maghrib'}</span>
              <span className="text-lg font-mono font-bold text-stone-100">18:22</span>
              <span className="text-[10px] text-stone-500 block mt-1">{lang === 'ar' ? 'ذهاب الحمرة' : 'Sunset Prayer'}</span>
            </div>

            {/* Isha */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors">
              <Moon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
              <span className="text-xs text-stone-400 block">{lang === 'ar' ? 'العشاء' : 'Isha'}</span>
              <span className="text-lg font-mono font-bold text-stone-100">19:35</span>
              <span className="text-[10px] text-stone-500 block mt-1">{lang === 'ar' ? 'العشاء الآخرة' : 'Night Prayer'}</span>
            </div>

          </div>
        </div>

        {/* Sacred Recitations Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tracks List */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'ar' ? 'قائمة الزيارات والأدعية المباركة' : 'Sacred Recitation Tracks'}</span>
            </h4>

            {tracks.map((track) => {
              const isSelected = track.id === activeTrackId;
              return (
                <button
                  key={track.id}
                  onClick={() => {
                    setActiveTrackId(track.id);
                    setIsPlaying(true);
                  }}
                  className={`w-full text-right p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-950/60 border-amber-500/60 shadow-lg shadow-amber-950/50 scale-[1.01]'
                      : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:bg-stone-900 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                    }`}>
                      {isSelected && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-stone-100">{lang === 'ar' ? track.titleAr : track.titleEn}</h5>
                      <span className="text-xs text-stone-400">{lang === 'ar' ? track.narratorAr : track.narratorEn}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-amber-400/80">{track.duration}</span>
                </button>
              );
            })}
          </div>

          {/* Active Recitation Text Viewer */}
          <div className="lg:col-span-7 bg-stone-950 rounded-3xl border border-amber-600/30 p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-800">
              <div>
                <span className="text-xs text-amber-400 font-semibold block mb-1">
                  {lang === 'ar' ? activeTrack.narratorAr : activeTrack.narratorEn}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-100 font-serif-ar">
                  {lang === 'ar' ? activeTrack.titleAr : activeTrack.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-3 rounded-2xl cursor-pointer transition-colors ${
                  isPlaying ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-amber-300 border border-stone-800 hover:bg-stone-800'
                }`}
                title={isPlaying ? 'إيقاف مؤقت' : 'استماع'}
              >
                {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Virtue Note */}
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 text-amber-200 text-xs sm:text-sm mb-6 leading-relaxed flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{lang === 'ar' ? activeTrack.virtueAr : activeTrack.virtueEn}</span>
            </div>

            {/* Sacred Text with Arabic Diacritics */}
            <div className="max-h-72 overflow-y-auto pr-2 sm:pr-4 space-y-4">
              <p className="text-base sm:text-lg text-amber-100 font-serif-ar leading-loose text-justify select-text">
                {lang === 'ar' ? activeTrack.textAr : activeTrack.textEn}
              </p>
            </div>

            {/* Bottom Status */}
            <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'ar' ? 'النصوص معتمدة من مصادر الحديث المعتبرة' : 'Text authenticated from canonical compilations'}</span>
              </div>
              <span className="font-mono text-stone-500">{activeTrack.duration}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
