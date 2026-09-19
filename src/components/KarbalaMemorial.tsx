import React, { useState } from 'react';
import { Heart, Globe, Users, Flame, Quote, Sparkles, Compass, Check, Copy } from 'lucide-react';
import { Language } from '../types';
import { karbalaEditorial } from '../data/shiaContent';

interface KarbalaMemorialProps {
  lang: Language;
}

export const KarbalaMemorial: React.FC<KarbalaMemorialProps> = ({ lang }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const mainChapter = karbalaEditorial[0];
  const arbaeenChapter = karbalaEditorial[1];

  const handleCopyQuote = (quote: string, index: number) => {
    navigator.clipboard.writeText(quote);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="karbala" className="py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-amber-950/60 relative overflow-hidden">
      
      {/* Subtle blood-red & gold ambient glow reflecting the majesty of Ashura */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-700/40 text-red-300 text-xs font-semibold mb-4">
            <Flame className="w-3.5 h-3.5 text-red-400" />
            <span>{lang === 'ar' ? 'صوت الضمير الإنساني الخالد' : 'The Eternal Cry for Human Liberty'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100 font-serif-ar mb-5 leading-tight">
            {lang === 'ar' ? 'كَرْبَلَاء: مَلْحَمَةُ الفِدَاءِ وَثَوْرَةُ الحُرِّيَّة' : 'Sacred Karbala: The Epic of Freedom & Honor'}
          </h2>
          <p className="text-stone-300 font-sans-ar text-base sm:text-lg leading-relaxed">
            {lang === 'ar'
              ? 'يوم عاشوراء سنة ٦١ هـ لم يكن مجرد واقعة عسكرية؛ بل كان زلزالاً أخلاقياً أعاد تعريف الشرف، ورسخ أن الدم الطاهر ينتصر على السيف والظلم مهما طال الزمان.'
              : 'The Day of Ashura (61 AH) was never merely a historical skirmish; it was a cosmic moral revolution demonstrating that sacrifice for truth and justice ultimately triumphs over tyranny.'}
          </p>
        </div>

        {/* Hero Manifesto of Imam Hussain */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-red-950/30 via-stone-900 to-stone-950 border border-red-800/40 shadow-2xl relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-900/40 border border-red-500/50 flex items-center justify-center text-red-400 mb-6">
              <Quote className="w-6 h-6" />
            </div>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif-ar font-bold text-red-200 leading-relaxed sm:leading-loose mb-6">
              «{lang === 'ar' ? mainChapter.heroQuoteAr : mainChapter.heroQuoteEn}»
            </p>

            <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent my-6" />

            <p className="text-stone-300 font-sans-ar text-base sm:text-lg leading-relaxed">
              {lang === 'ar' ? mainChapter.detailsAr : mainChapter.detailsEn}
            </p>
          </div>
        </div>

        {/* Testimonies of Global Thinkers */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-200 font-serif-ar">
                {lang === 'ar' ? 'كربلاء في عيون فلاسفة وقادة العالم' : 'Karbala in the Words of World Thinkers'}
              </h3>
              <p className="text-sm text-stone-400 font-sans-ar mt-1">
                {lang === 'ar' ? 'كيف ألهمت تضحية الحسين قادة الحرية والأدب العالمي' : 'How Imam Hussain inspired global advocates of conscience and freedom'}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-xs text-amber-400 font-semibold bg-amber-950/40 px-3 py-1.5 rounded-full border border-amber-800/40">
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'شهادات عالمية' : 'Universal Voices'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainChapter.globalThinkers?.map((thinker, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-700/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-950 border border-amber-600/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-100 text-base">{thinker.author}</h4>
                        <p className="text-xs text-amber-400/80">{thinker.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopyQuote(lang === 'ar' ? thinker.quoteAr : thinker.quoteEn, idx)}
                      className="p-2 rounded-lg bg-stone-800/80 text-stone-400 hover:text-amber-300 hover:bg-stone-800 transition-colors"
                      title={lang === 'ar' ? 'نسخ الاقتباس' : 'Copy quote'}
                    >
                      {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic font-serif-ar">
                    "{lang === 'ar' ? thinker.quoteAr : thinker.quoteEn}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Arbaeen Pilgrimage Feature Card */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950/50 via-stone-900 to-emerald-950/40 border border-amber-600/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-600/40 text-amber-300 text-xs font-semibold">
                <Users className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'معجزة الكرم والتضامن الإنساني' : 'The Miracle of Universal Fraternity'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif-ar">
                {lang === 'ar' ? arbaeenChapter.titleAr : arbaeenChapter.titleEn}
              </h3>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans-ar">
                {lang === 'ar' ? arbaeenChapter.detailsAr : arbaeenChapter.detailsEn}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20 text-amber-200 text-sm italic font-serif-ar">
                «{lang === 'ar' ? arbaeenChapter.heroQuoteAr : arbaeenChapter.heroQuoteEn}»
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-950/80 p-6 rounded-2xl border border-stone-800 space-y-4">
              <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                {lang === 'ar' ? 'أرقام وحقائق من كربلاء' : 'Karbala Vital Statistics'}
              </h4>
              <div className="space-y-3 divide-y divide-stone-800 text-xs sm:text-sm">
                <div className="pt-2 flex justify-between items-center text-stone-300">
                  <span>{lang === 'ar' ? 'المشاركون سنوياً:' : 'Annual Pilgrims:'}</span>
                  <span className="font-bold text-amber-400 font-serif-ar text-base">٢١+ مليون زائر</span>
                </div>
                <div className="pt-2 flex justify-between items-center text-stone-300">
                  <span>{lang === 'ar' ? 'المواكب الخدمية التطوعية:' : 'Voluntary Service Stations:'}</span>
                  <span className="font-bold text-amber-400 font-serif-ar text-base">١٤,٠٠٠+ موكب</span>
                </div>
                <div className="pt-2 flex justify-between items-center text-stone-300">
                  <span>{lang === 'ar' ? 'الوجبات المجانية المقدمة:' : 'Free Meals Served Daily:'}</span>
                  <span className="font-bold text-emerald-400 font-serif-ar text-base">ملايين بلا مقابل</span>
                </div>
                <div className="pt-2 flex justify-between items-center text-stone-300">
                  <span>{lang === 'ar' ? 'الجنسيات المشاركة:' : 'Participating Nations:'}</span>
                  <span className="font-bold text-amber-400 font-serif-ar text-base">٨٠+ دولة</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
