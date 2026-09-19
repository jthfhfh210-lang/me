import React, { useState } from 'react';
import { MapPin, Sparkles, Building2, Eye, Compass, ShieldCheck } from 'lucide-react';
import { Language, SacredShrine } from '../types';
import { sacredShrines } from '../data/shiaContent';

interface ShrinesVirtualTourProps {
  lang: Language;
}

export const ShrinesVirtualTour: React.FC<ShrinesVirtualTourProps> = ({ lang }) => {
  const [activeShrineId, setActiveShrineId] = useState<string>(sacredShrines[0].id);

  const activeShrine = sacredShrines.find((s) => s.id === activeShrineId) || sacredShrines[0];

  return (
    <section id="shrines" className="py-24 bg-stone-900/60 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-600/40 text-amber-300 text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'قباب النور والفن الإسلامي الخالد' : 'Sanctuaries of Light & Timeless Architecture'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100 font-serif-ar mb-5">
            {lang === 'ar' ? 'المَرَاقِدُ المُقَدَّسَةُ وَفُنُونُ العِمَارَة' : 'Sacred Shrines & Architectural Grandeur'}
          </h2>
          <p className="text-stone-300 font-sans-ar text-base sm:text-lg leading-relaxed">
            {lang === 'ar'
              ? 'مراقد أئمة أهل البيت تمثل تحفاً معمارية خالدة؛ حيث يلتقي الخط العربي الأصيل بالقرميد الكربلائي والقباب الذهبية والمقرنصات الأندلسية والفارسية في لوحة خشوع روحية.'
              : 'The sacred shrines represent peaks of Islamic architectural artistry, where monumental golden domes, intricate muqarnas, cobalt ceramics, and calligraphic masterpieces inspire tranquility.'}
          </p>
        </div>

        {/* Shrine Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sacredShrines.map((shrine) => {
            const isSelected = shrine.id === activeShrineId;
            return (
              <button
                key={shrine.id}
                onClick={() => setActiveShrineId(shrine.id)}
                className={`px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-amber-600 text-stone-950 border-amber-400 shadow-lg shadow-amber-900/40 scale-105'
                    : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-amber-700/50 hover:bg-stone-900'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-stone-950' : 'text-amber-400'}`} />
                <span>{lang === 'ar' ? shrine.nameAr : shrine.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Active Shrine Showcase */}
        <div className="bg-stone-950 rounded-3xl border border-amber-600/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left/Content info */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{lang === 'ar' ? `${activeShrine.cityAr}، ${activeShrine.country}` : `${activeShrine.cityEn}, ${activeShrine.country}`}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-100 font-serif-ar mb-3">
                  {lang === 'ar' ? activeShrine.nameAr : activeShrine.nameEn}
                </h3>

                <p className="text-stone-300 text-base leading-relaxed mb-6 font-sans-ar">
                  {lang === 'ar' ? activeShrine.descriptionAr : activeShrine.descriptionEn}
                </p>

                {/* Architecture Insights */}
                <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2 mb-6">
                  <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{lang === 'ar' ? 'السمات المعمارية والزخرفية' : 'Architectural & Decorative Hallmarks'}</span>
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {lang === 'ar' ? activeShrine.architectureAr : activeShrine.architectureEn}
                  </p>
                </div>

                {/* Features Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                    {lang === 'ar' ? 'أبرز المعالم:' : 'Key Landmarks:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeShrine.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-amber-950/40 border border-amber-700/30 text-xs text-amber-300 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Significance footer */}
              <div className="pt-6 border-t border-stone-800 text-xs text-stone-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'ar' ? activeShrine.significanceAr : activeShrine.significanceEn}</span>
              </div>
            </div>

            {/* Right/Visual column */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-stone-900 overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10" />
              <img
                src={activeShrine.imageUrl}
                alt={activeShrine.nameAr}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-75 hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-20 text-center p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-amber-500/30 max-w-xs">
                <h4 className="text-lg font-bold text-amber-200 font-serif-ar">
                  {lang === 'ar' ? activeShrine.cityAr : activeShrine.cityEn}
                </h4>
                <p className="text-xs text-stone-300 mt-1">
                  {lang === 'ar' ? 'مهوى القلوب وملتقى الحضارات' : 'Spiritual Haven & World Heritage'}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
