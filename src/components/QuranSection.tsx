import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Search,
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipForward,
  SkipBack,
  ZoomIn,
  ZoomOut,
  Copy,
  Check,
  Bookmark,
  Sparkles,
  Compass,
  Download,
  Share2,
  ChevronDown
} from 'lucide-react';
import { Language } from '../types';
import { ALL_114_SURAHS, SurahMeta } from '../data/quranData';

interface QuranSectionProps {
  lang: Language;
}

interface SurahAyah {
  numberInSurah: number;
  text: string;
}

export const QuranSection: React.FC<QuranSectionProps> = ({ lang }) => {
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedReciter, setSelectedReciter] = useState<'abdulbasit' | 'altammar' | 'minshawi'>('abdulbasit');
  
  // Audio Player State
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Text reader state
  const [fontSize, setFontSize] = useState<number>(22);
  const [surahAyahs, setSurahAyahs] = useState<SurahAyah[]>([]);
  const [isLoadingText, setIsLoadingText] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarkedSurah, setBookmarkedSurah] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('shia_app_quran_bookmark');
      return saved ? parseInt(saved, 10) : 1;
    }
    return 1;
  });

  const activeSurah = ALL_114_SURAHS.find((s) => s.number === selectedSurahNumber) || ALL_114_SURAHS[0];

  // Quick popular Surahs shortcuts
  const popularSurahNumbers = [1, 18, 36, 55, 56, 67, 76, 112];

  // Fetch or retrieve cached Surah text
  useEffect(() => {
    let isMounted = true;
    const fetchSurahText = async () => {
      // 1. Check if we have sample verses in data
      if (activeSurah.sampleVerses && activeSurah.sampleVerses.length === activeSurah.versesCount) {
        setSurahAyahs(
          activeSurah.sampleVerses.map((v) => ({
            numberInSurah: v.number,
            text: v.textAr,
          }))
        );
        return;
      }

      // 2. Check local offline storage cache
      const cacheKey = `shia_quran_text_${activeSurah.number}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setSurahAyahs(parsed);
            return;
          }
        } catch {
          // ignore cache error
        }
      }

      // 3. Fetch from global Quran API and cache it for permanent offline usage
      setIsLoadingText(true);
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${activeSurah.number}/quran-uthmani`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.data && Array.isArray(data.data.ayahs)) {
            const ayahs: SurahAyah[] = data.data.ayahs.map((a: { numberInSurah: number; text: string }) => ({
              numberInSurah: a.numberInSurah,
              text: a.text,
            }));
            setSurahAyahs(ayahs);
            // Cache permanently for offline access
            try {
              localStorage.setItem(cacheKey, JSON.stringify(ayahs));
            } catch {
              // quota exceeded or private mode, safe to skip
            }
          }
        } else {
          // Fallback to sample verses if available
          if (activeSurah.sampleVerses) {
            setSurahAyahs(
              activeSurah.sampleVerses.map((v) => ({
                numberInSurah: v.number,
                text: v.textAr,
              }))
            );
          }
        }
      } catch {
        // Offline or network error: fallback to built-in sample verses
        if (isMounted && activeSurah.sampleVerses) {
          setSurahAyahs(
            activeSurah.sampleVerses.map((v) => ({
              numberInSurah: v.number,
              text: v.textAr,
            }))
          );
        }
      } finally {
        if (isMounted) setIsLoadingText(false);
      }
    };

    fetchSurahText();

    return () => {
      isMounted = false;
    };
  }, [activeSurah]);

  // Handle Audio playback
  const currentAudioUrl = activeSurah.audioUrls[selectedReciter];

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleNextSurah = () => {
    if (selectedSurahNumber < 114) {
      setSelectedSurahNumber(selectedSurahNumber + 1);
      setIsPlaying(false);
    }
  };

  const handlePrevSurah = () => {
    if (selectedSurahNumber > 1) {
      setSelectedSurahNumber(selectedSurahNumber - 1);
      setIsPlaying(false);
    }
  };

  const handleBookmark = () => {
    setBookmarkedSurah(activeSurah.number);
    if (typeof window !== 'undefined') {
      localStorage.setItem('shia_app_quran_bookmark', activeSurah.number.toString());
    }
  };

  const handleCopySurah = () => {
    const textToCopy = surahAyahs.map((a) => `${a.text} ﴿${a.numberInSurah}﴾`).join(' ');
    navigator.clipboard.writeText(`سورة ${activeSurah.nameAr}\n\n${textToCopy}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Filtered Surahs based on search query
  const filteredSurahs = ALL_114_SURAHS.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      s.nameAr.includes(q) ||
      s.nameEn.toLowerCase().includes(q) ||
      s.transliteration.toLowerCase().includes(q) ||
      s.number.toString() === q
    );
  });

  return (
    <section id="quran" className="py-20 bg-stone-900/70 border-b border-amber-900/30 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-950/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentAudioUrl}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setAudioCurrentTime(audioRef.current.currentTime);
            setAudioProgress(
              (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100
            );
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setAudioDuration(audioRef.current.duration);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          handleNextSurah();
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-3">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'ar' ? 'القرآن الكريم كاملاً • قراءة واستماع' : 'The Holy Quran • Complete Recitation & Reader'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-100 mb-3 tracking-tight">
            {lang === 'ar' ? 'المُصْحَفُ الشَّرِيفُ المُعْتَمَد' : 'The Holy Quran Portal'}
          </h2>
          <p className="text-sm text-stone-400">
            {lang === 'ar'
              ? 'تصفح كافة سور القرآن الكريم الـ 114 بالرسم العثماني الشريف، واستمع لتلاوات خاشعة تعمل أونلاين وأوفلاين بدون إنترنت.'
              : 'Explore all 114 Surahs with clear Arabic calligraphy, listening controls, and offline accessibility.'}
          </p>
        </div>

        {/* Popular Surahs Shortcuts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          <span className="text-xs text-stone-400 font-bold ml-1 shrink-0">
            {lang === 'ar' ? 'سور شائعة:' : 'Frequent:'}
          </span>
          {popularSurahNumbers.map((num) => {
            const surah = ALL_114_SURAHS.find((s) => s.number === num);
            if (!surah) return null;
            const isCurrent = surah.number === selectedSurahNumber;
            return (
              <button
                key={num}
                onClick={() => {
                  setSelectedSurahNumber(surah.number);
                  setIsPlaying(false);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border shrink-0 ${
                  isCurrent
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md scale-105'
                    : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-amber-800'
                }`}
              >
                {surah.nameAr}
              </button>
            );
          })}
        </div>

        {/* Main Grid: Surah Selector (Left/Right) & Quran Reader + Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Surah List Column (4 cols) */}
          <div className="lg:col-span-4 bg-stone-950/80 border border-stone-800/90 rounded-2xl p-4 flex flex-col h-[260px] sm:h-[320px] lg:h-[560px] shadow-xl">
            
            {/* Search Box */}
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'ar' ? 'ابحث باسم السورة أو رقمها...' : 'Search surah by name or number...'}
                className="w-full bg-stone-900 border border-stone-800 rounded-xl px-9 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500/70"
              />
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-2.5" />
            </div>

            {/* Reciter Selector */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-2.5 mb-3">
              <label className="text-[11px] font-bold text-amber-400 block mb-1">
                {lang === 'ar' ? 'القارئ المعتمد للاستماع:' : 'Select Reciter:'}
              </label>
              <select
                value={selectedReciter}
                onChange={(e) => {
                  setSelectedReciter(e.target.value as 'abdulbasit' | 'altammar' | 'minshawi');
                  setIsPlaying(false);
                }}
                className="w-full bg-stone-950 border border-stone-700 text-xs rounded-lg px-2.5 py-1.5 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="abdulbasit">{lang === 'ar' ? 'الشيخ عبد الباسط عبد الصمد (مرتل)' : 'Sheikh Abdul Basit (Murattal)'}</option>
                <option value="altammar">{lang === 'ar' ? 'الشيخ ميثم التمار (تلاوة عراقية)' : 'Sheikh Maytham Al-Tammar'}</option>
                <option value="minshawi">{lang === 'ar' ? 'الشيخ محمد صديق المنشاوي' : 'Sheikh Al-Minshawi'}</option>
              </select>
            </div>

            {/* 114 Surahs Scrollable List */}
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
              {filteredSurahs.map((surah) => {
                const isSelected = surah.number === selectedSurahNumber;
                return (
                  <button
                    key={surah.number}
                    onClick={() => {
                      setSelectedSurahNumber(surah.number);
                      setIsPlaying(false);
                    }}
                    className={`w-full text-right p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-md'
                        : 'bg-stone-900/50 border-stone-800/80 text-stone-300 hover:bg-stone-900 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isSelected ? 'bg-amber-500 text-stone-950 font-black' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {surah.number}
                      </span>
                      <div className="text-right">
                        <div className="font-bold text-xs">{surah.nameAr}</div>
                        <div className="text-[10px] text-stone-400">{surah.transliteration}</div>
                      </div>
                    </div>

                    <div className="text-left text-[10px] text-stone-400 font-medium">
                      <span>{surah.versesCount} {lang === 'ar' ? 'آية' : 'ayahs'}</span>
                      <span className="mx-1">•</span>
                      <span>{surah.typeAr}</span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Reader & Audio Player Column (8 cols) */}
          <div className="lg:col-span-8 bg-stone-950/80 border border-stone-800/90 rounded-2xl p-4 sm:p-6 flex flex-col h-[460px] sm:h-[520px] lg:h-[560px] shadow-xl">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-amber-300">
                    سُورَةُ {activeSurah.nameAr}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium">
                    {activeSurah.typeAr} • {activeSurah.versesCount} {lang === 'ar' ? 'آية' : 'ayahs'}
                  </span>
                </div>
                <span className="text-xs text-stone-400">
                  {activeSurah.transliteration} — {activeSurah.nameEn}
                </span>
              </div>

              {/* Controls: Zoom, Bookmark, Copy */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setFontSize(Math.min(36, fontSize + 2))}
                  className="p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
                  title={lang === 'ar' ? 'تكبير الخط' : 'Zoom In'}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setFontSize(Math.max(16, fontSize - 2))}
                  className="p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
                  title={lang === 'ar' ? 'تصغير الخط' : 'Zoom Out'}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleBookmark}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    bookmarkedSurah === activeSurah.number
                      ? 'bg-amber-500/20 border-amber-400 text-amber-400'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                  title={lang === 'ar' ? 'حفظ موضع القراءة' : 'Bookmark Surah'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopySurah}
                  className="p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
                  title={lang === 'ar' ? 'نسخ السورة' : 'Copy Surah'}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Middle: Quran Verses Reader Area */}
            <div className="flex-1 overflow-y-auto px-2 py-4 bg-stone-900/40 rounded-xl border border-stone-800/70 custom-scrollbar text-center">
              
              {/* Bismillah Header (except At-Tawbah) */}
              {activeSurah.number !== 9 && (
                <div className="text-center font-bold text-amber-300 mb-6 text-xl sm:text-2xl drop-shadow-sm font-sans-ar">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
              )}

              {isLoadingText ? (
                <div className="py-20 flex flex-col items-center justify-center text-stone-400">
                  <Sparkles className="w-6 h-6 text-amber-400 animate-spin mb-2" />
                  <span className="text-xs">{lang === 'ar' ? 'جاري تحميل النص الشريف...' : 'Loading sacred text...'}</span>
                </div>
              ) : (
                <div
                  className="leading-loose text-stone-100 font-sans-ar text-justify px-2 sm:px-6"
                  style={{ fontSize: `${fontSize}px`, lineHeight: '2.2' }}
                >
                  {surahAyahs.length > 0 ? (
                    surahAyahs.map((ayah) => (
                      <span key={ayah.numberInSurah} className="inline">
                        {ayah.text}{' '}
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-mono font-bold mx-1 select-none">
                          {ayah.numberInSurah}
                        </span>{' '}
                      </span>
                    ))
                  ) : (
                    <div className="text-stone-400 text-sm py-12">
                      {lang === 'ar'
                        ? 'اضغط زر الاستماع بالأسفل لتشغيل السورة كاملة بصوت القارئ المعتمد.'
                        : 'Tap the player below to listen to the full Surah recitation.'}
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Bottom: Dedicated Audio Recitation Player Bar */}
            <div className="mt-4 bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/40 border border-amber-800/40 rounded-xl p-3 shadow-lg">
              
              {/* Progress Slider */}
              <div className="flex items-center gap-3 text-xs text-stone-400 font-mono mb-2">
                <span>{formatTime(audioCurrentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={audioProgress}
                  onChange={(e) => {
                    if (audioRef.current && audioDuration) {
                      const newTime = (parseFloat(e.target.value) / 100) * audioDuration;
                      audioRef.current.currentTime = newTime;
                      setAudioProgress(parseFloat(e.target.value));
                    }
                  }}
                  className="flex-1 accent-amber-500 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                />
                <span>{formatTime(audioDuration)}</span>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSurah}
                    disabled={selectedSurahNumber <= 1}
                    className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white disabled:opacity-30 cursor-pointer"
                    title={lang === 'ar' ? 'السورة السابقة' : 'Previous Surah'}
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    id="quran-play-toggle-btn"
                    onClick={handleTogglePlay}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-950/60 cursor-pointer transition-transform active:scale-95"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    <span>
                      {isPlaying
                        ? (lang === 'ar' ? 'إيقاف مؤقت' : 'Pause')
                        : (lang === 'ar' ? `تشغيل سورة ${activeSurah.nameAr}` : `Play Surah ${activeSurah.transliteration}`)}
                    </span>
                  </button>

                  <button
                    onClick={handleNextSurah}
                    disabled={selectedSurahNumber >= 114}
                    className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white disabled:opacity-30 cursor-pointer"
                    title={lang === 'ar' ? 'السورة التالية' : 'Next Surah'}
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-left hidden sm:block text-xs text-amber-400 font-bold">
                  {lang === 'ar' ? 'جودة صوتية عالية • يعمل أوفلاين وأونلاين' : 'HD Audio • Offline & Online'}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
