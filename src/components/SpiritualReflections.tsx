import React, { useState } from 'react';
import { Heart, Sparkles, Copy, Check, Share2, BookOpen } from 'lucide-react';
import { Language, SpiritualGem } from '../types';
import { spiritualGems } from '../data/shiaContent';

interface SpiritualReflectionsProps {
  lang: Language;
}

export const SpiritualReflections: React.FC<SpiritualReflectionsProps> = ({ lang }) => {
  const [activeGemIndex, setActiveGemIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentGem = spiritualGems[activeGemIndex];

  const handleCopy = () => {
    const textToCopy = `${lang === 'ar' ? currentGem.titleAr : currentGem.titleEn}\n\n«${lang === 'ar' ? currentGem.textAr : currentGem.textEn}»\n\n— ${lang === 'ar' ? currentGem.sourceAr : currentGem.sourceEn}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="reflections" className="py-24 bg-gradient-to-b from-stone-900/60 to-stone-950 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-600/40 text-amber-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'ينابيع العرفان والمناجاة' : 'Fountains of Mysticism & Spiritual Intimacy'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100 font-serif-ar mb-5">
            {lang === 'ar' ? 'رَوَائِعُ الأَدْعِيَةِ وَالتَّأَمُّلَاتِ الرُّوحِيَّة' : 'Sublime Supplications & Meditations'}
          </h2>
          <p className="text-stone-300 font-sans-ar text-base sm:text-lg leading-relaxed">
            {lang === 'ar'
              ? 'تراث أهل البيت يزخر بأعظم نصوص الأدعية والمناجاة التي تصقل القلب الإنساني، وتهذب النفس بالأخلاق والرحمة.'
              : 'The legacy of Ahl al-Bayt offers unmatched spiritual literature, elevating human consciousness toward divine beauty, social empathy, and inner serenity.'}
          </p>
        </div>

        {/* Gem Carousel Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {spiritualGems.map((gem, idx) => (
            <button
              key={gem.id}
              onClick={() => setActiveGemIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                activeGemIndex === idx
                  ? 'bg-amber-600 text-stone-950 border-amber-400 shadow-md shadow-amber-950/50'
                  : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700/40 hover:bg-stone-850'
              }`}
            >
              {lang === 'ar' ? gem.titleAr : gem.titleEn}
            </button>
          ))}
        </div>

        {/* Main Contemplation Board */}
        <div className="max-w-4xl mx-auto p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/30 border border-amber-600/40 shadow-2xl relative">
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-800">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-1">
                {lang === 'ar' ? currentGem.sourceAr : currentGem.sourceEn}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-100 font-serif-ar">
                {lang === 'ar' ? currentGem.titleAr : currentGem.titleEn}
              </h3>
            </div>

            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-300 hover:text-amber-300 hover:border-amber-600/50 transition-all flex items-center gap-2 text-xs cursor-pointer"
              title={lang === 'ar' ? 'نسخ النص' : 'Copy text'}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{lang === 'ar' ? 'تم النسخ!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'ar' ? 'نسخ النص' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>

          {/* Primary Text */}
          <div className="my-8">
            <p className="text-xl sm:text-2xl font-serif-ar text-amber-100 leading-relaxed sm:leading-loose text-center italic">
              «{lang === 'ar' ? currentGem.textAr : currentGem.textEn}»
            </p>
          </div>

          {/* Reflection Commentary */}
          <div className="mt-8 pt-6 border-t border-stone-800/80 bg-stone-950/60 p-5 rounded-2xl border border-stone-800 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-amber-300 block mb-1">
                {lang === 'ar' ? 'إضاءة معرفية:' : 'Philosophical Insight:'}
              </span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-ar">
                {lang === 'ar' ? currentGem.reflectionAr : currentGem.reflectionEn}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
