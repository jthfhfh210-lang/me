import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  BookOpen,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  Copy,
  Check,
  Send,
  User,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Calendar,
  Volume2,
  Filter,
  UserCheck,
  Headphones
} from 'lucide-react';
import { Language, ProxyZiyarahRecord } from '../types';
import { ZIYARAT_LIST, ZiyarahItem, ZiyarahReciter } from '../data/ziyaratData';

interface ProxyZiyarahPortalProps {
  lang: Language;
}

export const ProxyZiyarahPortal: React.FC<ProxyZiyarahPortalProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'encyclopedia' | 'proxy'>('encyclopedia');
  const [selectedZiyarahId, setSelectedZiyarahId] = useState<string>('ashura');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [fontSize, setFontSize] = useState<number>(21);
  const [copied, setCopied] = useState<boolean>(false);

  // Audio Recitation Player with Multiple Reciters
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [selectedReciterId, setSelectedReciterId] = useState<string>('tammar');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Proxy Ziyarah Form State
  const [pilgrimName, setPilgrimName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [country, setCountry] = useState('');
  const [targetShrine, setTargetShrine] = useState<'both' | 'hussain' | 'abbas' | 'najaf' | 'kadhimayn' | 'samarra' | 'mashhad'>('both');
  const [intention, setIntention] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCertificate, setSubmittedCertificate] = useState<ProxyZiyarahRecord | null>(null);

  const activeZiyarah = ZIYARAT_LIST.find((z) => z.id === selectedZiyarahId) || ZIYARAT_LIST[0];

  // Keep reciter valid when switching Ziyarah
  useEffect(() => {
    if (activeZiyarah.reciters && activeZiyarah.reciters.length > 0) {
      const exists = activeZiyarah.reciters.some((r) => r.id === selectedReciterId);
      if (!exists) {
        setSelectedReciterId(activeZiyarah.reciters[0].id);
      }
    }
  }, [activeZiyarah, selectedReciterId]);

  const currentReciter = activeZiyarah.reciters?.find((r) => r.id === selectedReciterId) || activeZiyarah.reciters?.[0];

  const handleTogglePlay = (ziyarah: ZiyarahItem, reciterOverride?: ZiyarahReciter) => {
    const reciterToPlay = reciterOverride || currentReciter;
    const isCurrentlyPlayingThis = playingId === ziyarah.id;

    if (isCurrentlyPlayingThis && !reciterOverride) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
    } else {
      setPlayingId(ziyarah.id);
      if (reciterOverride) {
        setSelectedReciterId(reciterOverride.id);
      }
      if (audioRef.current && reciterToPlay) {
        audioRef.current.src = reciterToPlay.url;
        audioRef.current.play().catch(() => {
          // If audio network failed or blocked
          setPlayingId(null);
        });
      }
    }
  };

  const handleSelectReciter = (reciter: ZiyarahReciter) => {
    setSelectedReciterId(reciter.id);
    if (playingId === activeZiyarah.id && audioRef.current) {
      audioRef.current.src = reciter.url;
      audioRef.current.play().catch(() => setPlayingId(null));
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(`${activeZiyarah.titleAr}\n\n${activeZiyarah.textAr}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitProxy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pilgrimName.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const targetLabels: Record<string, string> = {
        both: lang === 'ar' ? 'الروضتان المقدستان الحسينية والعباسية (كربلاء)' : 'Holy Hussaini & Abbasi Shrines (Karbala)',
        hussain: lang === 'ar' ? 'العتبة الحسينية المقدسة (كربلاء)' : 'Imam Hussain Holy Shrine (Karbala)',
        abbas: lang === 'ar' ? 'العتبة العباسية المقدسة (كربلاء)' : 'Al-Abbas Holy Shrine (Karbala)',
        najaf: lang === 'ar' ? 'العتبة العلوية المقدسة (النجف الأشرف)' : 'Imam Ali Holy Shrine (Najaf)',
        kadhimayn: lang === 'ar' ? 'العتبة الكاظمية المقدسة (بغداد)' : 'Holy Kadhimayn Shrine (Baghdad)',
        samarra: lang === 'ar' ? 'العتبة العسكرية المقدسة (سامراء)' : 'Holy Askari Shrine (Samarra)',
        mashhad: lang === 'ar' ? 'الروضة الرضوية المقدسة (مشهد)' : 'Holy Razavi Shrine (Mashhad)'
      };

      const newRecord: ProxyZiyarahRecord = {
        id: `zyr-${Date.now()}`,
        registrationNumber: `ZYR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
        pilgrimName: pilgrimName.trim(),
        motherName: motherName.trim() || (lang === 'ar' ? 'أَمَةُ اللَّه' : 'Servant of God'),
        country: country.trim() || (lang === 'ar' ? 'العراق' : 'Iraq'),
        targetShrine: targetShrine as any,
        intention: intention.trim() || (lang === 'ar' ? 'زيارة ودعاء وطلب التوفيق والشفاء وحسن العاقبة' : 'Prayer for health and blessings'),
        timestamp: new Date().toLocaleDateString(lang === 'ar' ? 'ar-IQ' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        certificateBarcode: `ATB-${Math.floor(100000000 + Math.random() * 900000000)}`,
        status: 'confirmed',
      };

      setSubmittedCertificate(newRecord);
      setIsSubmitting(false);
    }, 800);
  };

  const categories = [
    { id: 'all', labelAr: 'كافة الزيارات (١٥)', labelEn: 'All Ziyarat (15)' },
    { id: 'karbala', labelAr: 'كربلاء والشهداء', labelEn: 'Karbala' },
    { id: 'prophet', labelAr: 'المصطفى ﷺ', labelEn: 'Prophet' },
    { id: 'ali', labelAr: 'أمير المؤمنين', labelEn: 'Imam Ali' },
    { id: 'fatima', labelAr: 'الزهراء (ع)', labelEn: 'Fatima' },
    { id: 'baqi', labelAr: 'أئمة البقيع', labelEn: 'Baqi' },
    { id: 'kadhimayn', labelAr: 'الكاظميان', labelEn: 'Kadhimayn' },
    { id: 'rida', labelAr: 'الإمام الرضا', labelEn: 'Imam Rida' },
    { id: 'askariyayn', labelAr: 'العسكريان', labelEn: 'Askariyayn' },
    { id: 'mahdi', labelAr: 'إمام الزمان (عج)', labelEn: 'Imam Mahdi' },
    { id: 'general', labelAr: 'الجامعة والكبرى', labelEn: 'General' },
  ];

  const filteredZiyarat = ZIYARAT_LIST.filter(
    (z) => selectedCategory === 'all' || z.category === selectedCategory
  );

  return (
    <section id="ziyarah" className="py-20 bg-stone-950 border-b border-amber-900/30 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-950/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Hidden Global Audio Element */}
      <audio
        ref={audioRef}
        onEnded={() => setPlayingId(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-3">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'ar' ? 'موسوعة الزيارات الشريفة لجميع المعصومين الـ ١٤' : 'Sacred Infallibles Ziyarat Encyclopedia'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-100 mb-3 tracking-tight">
            {lang === 'ar' ? 'زِيَارَاتُ أَهْلِ البَيْتِ وَالإِنَابَةُ الشَّرِيفَة' : 'Holy Ziyarat & Proxy Registration'}
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed">
            {lang === 'ar'
              ? 'موسوعة كاملة لزيارات المصطفى والأئمة المعصومين (عليهم السلام) مع تلاوات وقراءات مسموعة بأصوات كبار المنشدين، وخدمة تسجيل الزيارة بالإنابة لجميع المراقد المقدسة.'
              : 'Complete authentic texts with multi-reciter audio for all 14 Infallibles, plus free official proxy pilgrimage registration.'}
          </p>
        </div>

        {/* Master Toggle: Encyclopedia vs Proxy */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('encyclopedia')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'encyclopedia'
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-lg shadow-amber-950/60 scale-105'
                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'ar' ? `📖 موسوعة زيارات الأئمة (${ZIYARAT_LIST.length})` : `📖 Imams Ziyarat Library (${ZIYARAT_LIST.length})`}</span>
          </button>

          <button
            onClick={() => setActiveTab('proxy')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'proxy'
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-950/60 scale-105'
                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'ar' ? '🤲 طلب الزيارة بالإنابة المجانية' : '🤲 Free Proxy Ziyarah Form'}</span>
          </button>
        </div>

        {/* Tab 1: Complete Infallibles Ziyarat Encyclopedia */}
        {activeTab === 'encyclopedia' && (
          <div className="space-y-4">
            
            {/* Horizontal Categories Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar select-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                      : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                  }`}
                >
                  {lang === 'ar' ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Ziyarat Selector Sidebar (4 cols) */}
              <div className="lg:col-span-4 bg-stone-950/90 border border-stone-800/90 rounded-2xl p-4 flex flex-col h-[280px] sm:h-[350px] lg:h-[620px] shadow-xl">
                <div className="text-xs font-bold text-amber-400 mb-3 flex items-center justify-between border-b border-stone-800 pb-2">
                  <span>{lang === 'ar' ? 'اختر الزيارة الشريفة:' : 'Select Ziyarah:'}</span>
                  <span className="text-[10px] text-stone-400 font-mono">{filteredZiyarat.length} زيارات مأثورة</span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                  {filteredZiyarat.map((ziyarah) => {
                    const isSelected = ziyarah.id === selectedZiyarahId;
                    const isAudioActive = playingId === ziyarah.id;
                    return (
                      <button
                        key={ziyarah.id}
                        onClick={() => setSelectedZiyarahId(ziyarah.id)}
                        className={`w-full text-right p-3 rounded-xl border transition-all flex items-start justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-md'
                            : 'bg-stone-900/50 border-stone-800/80 text-stone-300 hover:bg-stone-900 hover:border-stone-700'
                        }`}
                      >
                        <div className="text-right flex-1 pr-1">
                          <div className="font-bold text-xs sm:text-sm text-stone-100 flex items-center gap-1.5">
                            {isSelected && <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                            <span>{ziyarah.titleAr}</span>
                          </div>
                          <div className="text-[11px] text-amber-400/80 mt-0.5 font-medium line-clamp-1">
                            {ziyarah.targetAr}
                          </div>
                        </div>

                        {ziyarah.duration && (
                          <span className="text-[10px] text-stone-400 font-mono mt-0.5 shrink-0 bg-stone-800/80 px-1.5 py-0.5 rounded">
                            {ziyarah.duration}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Ziyarah Text & Audio Recitation Area (8 cols) */}
              <div className="lg:col-span-8 bg-stone-950/90 border border-stone-800/90 rounded-2xl p-4 sm:p-6 flex flex-col h-[520px] sm:h-[580px] lg:h-[620px] shadow-xl">
                
                {/* Header Info & Actions */}
                <div className="border-b border-stone-800 pb-4 mb-4 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-amber-300">
                        {activeZiyarah.titleAr}
                      </h3>
                      <div className="text-xs text-stone-400 mt-0.5 max-w-2xl leading-relaxed">
                        {activeZiyarah.virtueAr}
                      </div>
                    </div>

                    {/* Toolbar */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        onClick={() => handleTogglePlay(activeZiyarah)}
                        className={`px-3 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors ${
                          playingId === activeZiyarah.id
                            ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md animate-pulse'
                            : 'bg-stone-900 border-stone-700 text-amber-300 hover:bg-stone-800'
                        }`}
                        title={playingId === activeZiyarah.id ? (lang === 'ar' ? 'إيقاف التلاوة' : 'Pause') : (lang === 'ar' ? 'استماع للتلاوة' : 'Play audio')}
                      >
                        {playingId === activeZiyarah.id ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                        <span>{playingId === activeZiyarah.id ? (lang === 'ar' ? 'إيقاف' : 'Pause') : (lang === 'ar' ? 'استماع' : 'Listen')}</span>
                      </button>

                      <button
                        onClick={() => setFontSize(Math.min(34, fontSize + 2))}
                        className="p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer"
                        title={lang === 'ar' ? 'تكبير الخط' : 'Zoom In'}
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setFontSize(Math.max(16, fontSize - 2))}
                        className="p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer"
                        title={lang === 'ar' ? 'تصغير الخط' : 'Zoom Out'}
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>

                      <button
                        onClick={handleCopyText}
                        className="p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer"
                        title={lang === 'ar' ? 'نسخ نص الزيارة' : 'Copy text'}
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Reciter Selector Bar (القراء المعتمدون) */}
                  {activeZiyarah.reciters && activeZiyarah.reciters.length > 0 && (
                    <div className="flex items-center gap-2 pt-2 border-t border-stone-800/80 overflow-x-auto">
                      <div className="flex items-center gap-1 text-xs text-amber-400 font-bold shrink-0">
                        <Headphones className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'اختر القارئ:' : 'Reciter:'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {activeZiyarah.reciters.map((rec) => {
                          const isRecSelected = rec.id === selectedReciterId;
                          return (
                            <button
                              key={rec.id}
                              onClick={() => handleSelectReciter(rec)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-1.5 ${
                                isRecSelected
                                  ? 'bg-amber-500/25 border-amber-400 text-amber-200'
                                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              <UserCheck className={`w-3 h-3 ${isRecSelected ? 'text-amber-400' : 'text-stone-500'}`} />
                              <span>{lang === 'ar' ? rec.nameAr : rec.nameEn}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Reader Container */}
                <div className="flex-1 overflow-y-auto px-4 py-4 bg-stone-900/40 rounded-xl border border-stone-800/70 custom-scrollbar text-center">
                  <div className="text-center font-bold text-amber-400/90 mb-4 text-lg">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </div>
                  <div
                    className="font-sans-ar text-stone-100 whitespace-pre-line text-justify leading-relaxed px-2 sm:px-4"
                    style={{ fontSize: `${fontSize}px`, lineHeight: '2.1' }}
                  >
                    {activeZiyarah.textAr}
                  </div>

                  {/* English Translation Toggle */}
                  {activeZiyarah.textEn && (
                    <div className="mt-8 pt-6 border-t border-stone-800/80 text-left text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
                      <div className="font-bold text-stone-300 mb-2">English Translation:</div>
                      {activeZiyarah.textEn}
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Proxy Ziyarah Registration */}
        {activeTab === 'proxy' && (
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {!submittedCertificate ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-stone-950 rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-800">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">
                        {lang === 'ar' ? 'تسجيل طلب زيارة وصلاة بالإنابة' : 'Proxy Ziyarah Registration'}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 mt-1">
                        {lang === 'ar' ? 'يقوم خَدَمَة العتبات المقدسة بالزيارة والدعاء باسمك وصلاة ركعتين تحت القباب الطاهرة مجاناً' : 'Shrine servants will perform rites & prayer on your behalf at holy shrines'}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  </div>

                  <form onSubmit={handleSubmitProxy} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                          {lang === 'ar' ? 'الاسم الثلاثي أو المستعار *' : 'Full Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={pilgrimName}
                          onChange={(e) => setPilgrimName(e.target.value)}
                          placeholder={lang === 'ar' ? 'مثال: علي بن حسن الكربلائي' : 'e.g. Ali Hassan'}
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                          {lang === 'ar' ? 'اسم الأم (اختياري، يذكر في الدعاء)' : "Mother's Name (Optional)"}
                        </label>
                        <input
                          type="text"
                          value={motherName}
                          onChange={(e) => setMotherName(e.target.value)}
                          placeholder={lang === 'ar' ? 'مثال: فاطمة' : "e.g. Fatima"}
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                          {lang === 'ar' ? 'البلد والمدينة' : 'Country / City'}
                        </label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder={lang === 'ar' ? 'مثال: العراق - بغداد' : 'e.g. Iraq, Baghdad'}
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                          {lang === 'ar' ? 'المرقد الشريف المقصود بالزيارة' : 'Target Sacred Shrine'}
                        </label>
                        <select
                          value={targetShrine}
                          onChange={(e) => setTargetShrine(e.target.value as any)}
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 focus:outline-none focus:border-emerald-500 text-sm cursor-pointer"
                        >
                          <option value="both">{lang === 'ar' ? 'كربلاء المقدسة (الإمام الحسين وأبو الفضل العباس ع)' : 'Karbala (Imam Hussain & al-Abbas)'}</option>
                          <option value="hussain">{lang === 'ar' ? 'العتبة الحسينية المقدسة فقط' : 'Imam Hussain Holy Shrine only'}</option>
                          <option value="abbas">{lang === 'ar' ? 'العتبة العباسية المقدسة فقط' : 'Al-Abbas Holy Shrine only'}</option>
                          <option value="najaf">{lang === 'ar' ? 'النجف الأشرف (أمير المؤمنين الإمام علي ع)' : 'Najaf (Imam Ali Holy Shrine)'}</option>
                          <option value="kadhimayn">{lang === 'ar' ? 'الكاظمية المقدسة (الإمامان الكاظم والجواد ع)' : 'Kadhimayn (Imams Kadhim & Jawad)'}</option>
                          <option value="samarra">{lang === 'ar' ? 'سامراء المقدسة (الإمامان الهادي والعسكري ع)' : 'Samarra (Askari Holy Shrine)'}</option>
                          <option value="mashhad">{lang === 'ar' ? 'مشهد المقدسة (الإمام علي بن موسى الرضا ع)' : 'Mashhad (Imam al-Rida)'}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        {lang === 'ar' ? 'النية الخاصة أو الدعاء المطلوب' : 'Intention or Special Prayer Request'}
                      </label>
                      <textarea
                        rows={3}
                        value={intention}
                        onChange={(e) => setIntention(e.target.value)}
                        placeholder={lang === 'ar' ? 'مثال: طلب الشفاء لمريض، قضاء حاجة متعسرة، التوفيق لحسن العاقبة والزيارة...' : 'e.g. Prayer for healing, relief of hardship, or peaceful passing...'}
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-emerald-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-stone-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/70 transition-transform active:scale-98 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-stone-950" />
                          <span>{lang === 'ar' ? 'تأكيد التسجيل وإصدار وصل الإنابة الفوري' : 'Submit & Generate Proxy Certificate'}</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="certificate"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-stone-950 rounded-3xl border-2 border-emerald-500/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
                >
                  <div className="text-center pb-6 border-b border-stone-800">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-3 border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-emerald-300">
                      {lang === 'ar' ? 'تَمَّ تَسْجِيلُ زِيَارَتِكُم بِإِذْنِ الله' : 'Proxy Registration Confirmed'}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      {lang === 'ar' ? 'سوف يقوم الإخوة الخَدَمَة بالزيارة وصلاة ركعتين تحت القبة الشريفة بنيتكم' : 'Official registration completed successfully'}
                    </p>
                  </div>

                  <div className="py-6 space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <span className="text-stone-400">{lang === 'ar' ? 'رقم الوصل:' : 'Receipt Number:'}</span>
                      <span className="font-mono text-emerald-400 font-bold">{submittedCertificate.registrationNumber}</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <span className="text-stone-400">{lang === 'ar' ? 'اسم الزائر:' : 'Pilgrim Name:'}</span>
                      <span className="text-stone-200 font-bold">{submittedCertificate.pilgrimName}</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <span className="text-stone-400">{lang === 'ar' ? 'التاريخ والتوقيت:' : 'Timestamp:'}</span>
                      <span className="text-stone-300">{submittedCertificate.timestamp}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-right">
                      <div className="text-stone-400 text-xs mb-1">{lang === 'ar' ? 'النية المسجلة:' : 'Intention:'}</div>
                      <div className="text-stone-200">{submittedCertificate.intention}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmittedCertificate(null)}
                    className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 font-bold text-xs cursor-pointer border border-stone-700 transition-colors"
                  >
                    {lang === 'ar' ? 'تسجيل زائر أو قريب آخر' : 'Register Another Person'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
};
