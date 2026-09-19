import React, { useState } from 'react';
import { Sparkles, BookOpen, Compass, Scale, Lightbulb, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Language, PillarOfFaith } from '../types';
import { pillarsOfFaith } from '../data/shiaContent';

interface PillarsSectionProps {
  lang: Language;
  onOpenArticle: (title: string, content: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ lang, onOpenArticle }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(pillarsOfFaith[0].id);

  const selectedPillar = pillarsOfFaith.find((p) => p.id === selectedPillarId) || pillarsOfFaith[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-amber-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-amber-400" />;
      case 'Scale': return <Scale className="w-6 h-6 text-amber-400" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-stone-950 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الأسس العقلية والنصية' : 'Rational & Scriptural Foundations'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 font-serif-ar mb-4">
            {lang === 'ar' ? 'أُصُولُ العَقِيدَةِ وَالفِكْرِ الإِسْلَامِيّ' : 'Pillars of Faith & Theological Thought'}
          </h2>
          <p className="text-stone-400 font-sans-ar text-base leading-relaxed">
            {lang === 'ar'
              ? 'يقوم فكر أهل البيت عليهم السلام على التوحيم بين النقل الصريح والعقل الصريح؛ فلا تناقض بين حكمة الخالق وبصيرة الفطرة الإنسانية.'
              : 'The school of Ahl al-Bayt harmonizes authentic revelation with profound rational contemplation: Divine wisdom never contradicts sound human intellect.'}
          </p>
        </div>

        {/* Pillar Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {pillarsOfFaith.map((p) => {
            const isSelected = p.id === selectedPillarId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillarId(p.id)}
                className={`p-4 rounded-xl text-right transition-all flex flex-col justify-between border cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-950/80 to-stone-900 border-amber-500/60 shadow-lg shadow-amber-950/50 scale-[1.02]'
                    : 'bg-stone-900/60 border-stone-800 hover:border-amber-700/40 hover:bg-stone-900'
                } ${lang === 'en' ? 'text-left' : 'text-right'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-400/80 font-serif-ar">{p.number}</span>
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-stone-800/80 text-stone-400'}`}>
                    {getPillarIcon(p.iconName)}
                  </div>
                </div>
                <div>
                  <h3 className={`font-bold text-sm sm:text-base leading-snug font-serif-ar mb-1 ${isSelected ? 'text-amber-200' : 'text-stone-200'}`}>
                    {lang === 'ar' ? p.titleAr : p.titleEn}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-1">
                    {lang === 'ar' ? p.subtitleAr : p.subtitleEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed View Box */}
        <div className="bg-stone-900/90 rounded-2xl border border-amber-600/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Concept & Rational Argument */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-950/60 px-3 py-1 rounded-full border border-amber-700/30">
                  {lang === 'ar' ? `الأصل ${selectedPillar.number}` : `Principle ${selectedPillar.number}`}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-100 font-serif-ar mt-3 mb-2">
                  {lang === 'ar' ? selectedPillar.titleAr : selectedPillar.titleEn}
                </h3>
                <h4 className="text-base text-amber-400/90 font-medium mb-4">
                  {lang === 'ar' ? selectedPillar.subtitleAr : selectedPillar.subtitleEn}
                </h4>
                <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-sans-ar">
                  {lang === 'ar' ? selectedPillar.conceptAr : selectedPillar.conceptEn}
                </p>
              </div>

              {/* Rational Proof Box */}
              <div className="p-5 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'ar' ? 'البرهان العقلي والفلسفي' : 'The Rational & Philosophical Proof'}</span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {lang === 'ar' ? selectedPillar.rationalAspectAr : selectedPillar.rationalAspectEn}
                </p>
              </div>
            </div>

            {/* Right Column: Quranic Anchor & Interactive Reflection */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quranic Verse Showcase */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 border border-amber-600/40 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'الشاهد القرآني المجيد' : 'Quranic Scriptural Anchor'}</span>
                </div>
                
                <p className="text-xl sm:text-2xl font-serif-ar text-amber-100 leading-loose text-center my-4 py-2 border-y border-amber-800/30">
                  {lang === 'ar' ? `﴿ ${selectedPillar.quranVerseAr} ﴾` : `"${selectedPillar.quranVerseEn}"`}
                </p>
                
                <div className="text-center text-xs text-amber-400/80 font-medium">
                  {selectedPillar.verseRef}
                </div>
              </div>

              {/* Scholarly note */}
              <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800/70 text-xs text-stone-400 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  {lang === 'ar'
                    ? 'منهج مذهب أهل البيت يشترط اليقين والبرهان في أصول الدين، ولا يقبل التقليد الأعمى في العقائد الأساسية.'
                    : 'The Shia epistemological framework mandates conscious conviction and intellectual certainty in fundamental beliefs, rejecting blind conformity.'}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
