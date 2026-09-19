import React from 'react';
import { Compass, BookOpen, Heart, Shield, Sparkles, ArrowDown, ChevronRight, Award } from 'lucide-react';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenArticle: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onNavigate,
  onOpenArticle,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-amber-950/40">
      {/* Subtle decorative background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/10 via-amber-900/15 to-emerald-950/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-amber-950/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'التعريف الأكاديمي الشامل بمذهب أهل البيت' : 'The Comprehensive Scholarly Shia Portal'}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-stone-300 text-xs">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'ar' ? 'أصالة المصادر • حرية الفكر • الحوار الحضاري' : 'Authentic Sources • Free Inquiry • Civilized Dialogue'}</span>
          </div>
        </div>

        {/* Hero Title & Ethos */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif-ar leading-tight">
            {lang === 'ar' ? (
              <>
                رِسَالَةُ الحَقِّ وَالْعَدَالَة: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  فِكْرُ أَهْلِ البَيْتِ وَنَهْضَةُ كَرْبَلَاء
                </span>
              </>
            ) : (
              <>
                The Beacon of Justice & Reason: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  The Path of Ahl al-Bayt & Karbala
                </span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 font-sans-ar leading-relaxed mb-8 max-w-3xl mx-auto">
            {lang === 'ar' ? (
              'منصة فكرية وإرثية تسلط الضوء على جوهر المذهب الجعفري الإمامي: من أصول التوحيد والعدل والعقلانية، إلى إشراقات نهج البلاغة، وثورة الحسين التي رسخت حرية وكرامة الإنسان عبر العصور.'
            ) : (
              'An intellectual sanctuary illuminating the bedrock of the Ja\'fari school: from pure monotheism, cosmic justice, and dynamic rationalism, to the eternal human rights charter of Nahj al-Balagha and Karbala\'s stand for universal freedom.'
            )}
          </p>

          {/* Core Calligraphy Quote Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900/90 to-stone-950/90 border border-amber-500/30 shadow-2xl shadow-black/60 max-w-3xl mx-auto">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-amber-700/80 text-[11px] font-bold tracking-wider text-amber-100 uppercase border border-amber-400/40">
              {lang === 'ar' ? 'كلمة للتاريخ الإنساني' : 'A Cosmic Proclamation'}
            </div>
            <p className="text-xl sm:text-2xl font-serif-ar text-amber-100 italic leading-loose text-center">
              {lang === 'ar' ? (
                '«النَّاسُ صِنْفَانِ: إِمَّا أَخٌ لَكَ فِي الدِّينِ، أَوْ نَظِيرٌ لَكَ فِي الْخَلْقِ»'
              ) : (
                '"People are of two kinds: either your brother in faith, or your equal in creation."'
              )}
            </p>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 font-medium text-center">
              {lang === 'ar' ? '— أمير المؤمنين علي بن أبي طالب (عليه السلام)، عهده التاريخي لمالك الأشتر' : '— Imam Ali ibn Abi Talib (as), The Historic Charter to Malik al-Ashtar'}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              id="cta-explore-pillars"
              onClick={() => onNavigate('pillars')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-stone-950 font-bold text-base hover:brightness-110 shadow-lg shadow-amber-900/40 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-5 h-5 text-stone-950" />
              <span>{lang === 'ar' ? 'استكشف أصول العقيدة' : 'Explore Pillars of Faith'}</span>
            </button>

            <button
              id="cta-explore-karbala"
              onClick={() => onNavigate('karbala')}
              className="px-6 py-3.5 rounded-xl bg-stone-900 border border-amber-700/40 text-amber-200 font-semibold text-base hover:bg-amber-950/40 hover:border-amber-500/70 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-5 h-5 text-amber-400" />
              <span>{lang === 'ar' ? 'ملحمة كربلاء والأربعين' : 'The Karbala & Arbaeen Epic'}</span>
            </button>

            <button
              id="cta-explore-faq"
              onClick={() => onNavigate('clarifications')}
              className="px-6 py-3.5 rounded-xl bg-stone-900/60 border border-stone-800 text-stone-300 font-medium text-base hover:text-white hover:border-stone-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-stone-400" />
              <span>{lang === 'ar' ? 'إيضاحات وحوار أكاديمي' : 'Clarifications & Questions'}</span>
            </button>
          </div>
        </div>

        {/* Pillars Summary Bento Quick Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-800/60">
          <div 
            onClick={() => onNavigate('pillars')}
            className="p-4 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 hover:bg-stone-900/80 transition-all cursor-pointer group"
          >
            <div className="text-2xl font-bold text-amber-400 font-serif-ar mb-1">١٤٠٠+</div>
            <div className="text-sm font-semibold text-stone-200 group-hover:text-amber-200 transition-colors">
              {lang === 'ar' ? 'عام من التدوين والاجتهاد' : 'Years of Scholarly Heritage'}
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {lang === 'ar' ? 'فقه حي مستمر ونوافذ اجتهادية مفتوحة' : 'Dynamic open jurisprudence & philosophy'}
            </div>
          </div>

          <div 
            onClick={() => onNavigate('karbala')}
            className="p-4 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 hover:bg-stone-900/80 transition-all cursor-pointer group"
          >
            <div className="text-2xl font-bold text-amber-400 font-serif-ar mb-1">٢٠+ مليون</div>
            <div className="text-sm font-semibold text-stone-200 group-hover:text-amber-200 transition-colors">
              {lang === 'ar' ? 'زائر في مسيرة الأربعين' : 'Arbaeen Peace Walkers'}
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {lang === 'ar' ? 'أكبر موئل إنساني تطوعي للإطعام والسلام' : 'The largest hospitality gathering in history'}
            </div>
          </div>

          <div 
            onClick={() => onNavigate('ahlulbayt')}
            className="p-4 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 hover:bg-stone-900/80 transition-all cursor-pointer group"
          >
            <div className="text-2xl font-bold text-amber-400 font-serif-ar mb-1">١٤ معصوماً</div>
            <div className="text-sm font-semibold text-stone-200 group-hover:text-amber-200 transition-colors">
              {lang === 'ar' ? 'النبي وعترته الطاهرة' : 'The Fourteen Infallibles'}
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {lang === 'ar' ? 'قمم العلم والزهد ومكارم الأخلاق' : 'Pinnacles of virtue, ethics and wisdom'}
            </div>
          </div>

          <div 
            onClick={() => onNavigate('clarifications')}
            className="p-4 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 hover:bg-stone-900/80 transition-all cursor-pointer group"
          >
            <div className="text-2xl font-bold text-amber-400 font-serif-ar mb-1">١٠٠٪</div>
            <div className="text-sm font-semibold text-stone-200 group-hover:text-amber-200 transition-colors">
              {lang === 'ar' ? 'القرآن المحفوظ إجماعاً' : 'The Inviolate Quran'}
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {lang === 'ar' ? 'كتاب الله الخالد دون زيادة ولا نقصان' : 'Complete consensus on God\'s preserved Book'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
