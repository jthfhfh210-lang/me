import React, { useState, useMemo } from 'react';
import { Award, BookOpen, MapPin, Quote, ChevronRight, UserCheck, Sparkles, Filter } from 'lucide-react';
import { Language, InfallibleLeader } from '../types';
import { infallibleLeaders } from '../data/shiaContent';

interface AhlulbaytGridProps {
  lang: Language;
  onSelectLeader: (leader: InfallibleLeader) => void;
}

export const AhlulbaytGrid: React.FC<AhlulbaytGridProps> = ({ lang, onSelectLeader }) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const groups = [
    { id: 'all', labelAr: 'كافة المعصومين (١٤)', labelEn: 'All 14 Infallibles' },
    { id: 'kisa', labelAr: 'أصحاب الكساء الخمسة', labelEn: 'The Five of the Cloak' },
    { id: 'baqi', labelAr: 'أئمة البقيع (ع)', labelEn: 'Imams of al-Baqi' },
    { id: 'iraq', labelAr: 'أئمة العراق وإيران (ع)', labelEn: 'Imams of Iraq & Tus' },
    { id: 'mahdi', labelAr: 'إمام العصر والزمان (عج)', labelEn: 'Imam al-Mahdi (aj)' },
  ];

  const filteredLeaders = useMemo(() => {
    if (selectedGroup === 'all') return infallibleLeaders;
    if (selectedGroup === 'kisa') {
      return infallibleLeaders.filter((l) => [1, 2, 3, 4, 5].includes(l.number));
    }
    if (selectedGroup === 'baqi') {
      return infallibleLeaders.filter((l) => [4, 6, 7, 8].includes(l.number));
    }
    if (selectedGroup === 'iraq') {
      return infallibleLeaders.filter((l) => [3, 5, 9, 10, 11, 12, 13].includes(l.number));
    }
    if (selectedGroup === 'mahdi') {
      return infallibleLeaders.filter((l) => l.number === 14);
    }
    return infallibleLeaders;
  }, [selectedGroup]);

  return (
    <section id="ahlulbayt" className="py-20 sm:py-24 bg-stone-950 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-700/40 text-emerald-300 text-xs font-semibold mb-4 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'ar' ? 'سفينة النجاة وأئمة الهدى المعصومين' : 'The Ark of Salvation & The Fourteen Infallibles'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100 font-serif-ar mb-4">
            {lang === 'ar' ? 'النَّبِيُّ الأَعْظَمُ وَأَهْلُ بَيْتِهِ الأَطْهَار' : 'The Holy Prophet & The Noble Ahl al-Bayt'}
          </h2>
          <p className="text-stone-300 font-sans-ar text-sm sm:text-lg leading-relaxed">
            {lang === 'ar'
              ? 'الذين أذهب الله عنهم الرجس وطهرهم تطهيراً بنص آية التطهير؛ الأربعة عشر معصوماً قادة الأمة وورثة علم النبي الخاتم.'
              : 'Those purified by Allah from all spiritual blemishes (Ayat al-Tathir, 33:33); the Fourteen Infallibles who guide humanity with divine wisdom.'}
          </p>
        </div>

        {/* Filter Tabs for Mobile and Desktop */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {groups.map((grp) => {
            const isActive = selectedGroup === grp.id;
            return (
              <button
                key={grp.id}
                onClick={() => setSelectedGroup(grp.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-amber-600 text-stone-950 border-amber-500 shadow-md shadow-amber-950/40 scale-105'
                    : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700/50 hover:bg-stone-850'
                }`}
              >
                {lang === 'ar' ? grp.labelAr : grp.labelEn}
              </button>
            );
          })}
        </div>

        {/* Leaders Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredLeaders.map((leader) => {
            return (
              <div
                key={leader.id}
                onClick={() => onSelectLeader(leader)}
                className="p-5 sm:p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-500/60 active:scale-[0.99] transition-all flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-amber-950/30"
              >
                <div>
                  {/* Top identifier */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-bold flex items-center justify-center font-serif-ar shadow-sm">
                      {leader.number}
                    </span>
                    <span className="text-[11px] text-amber-400/90 font-medium px-2 py-0.5 rounded-md bg-amber-950/40 border border-amber-900/40">
                      {leader.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 font-serif-ar group-hover:text-amber-300 transition-colors mb-1">
                    {lang === 'ar' ? leader.nameAr : leader.nameEn}
                  </h3>
                  
                  <p className="text-xs text-amber-400 font-medium mb-3 line-clamp-1">
                    {lang === 'ar' ? leader.titleAr : leader.titleEn}
                  </p>

                  {/* Golden Quote */}
                  <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 mb-3 text-xs italic font-serif-ar text-stone-300 leading-relaxed shadow-inner">
                    «{lang === 'ar' ? leader.quoteAr : leader.quoteEn}»
                  </div>

                  {/* Short Bio summary */}
                  <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mb-4">
                    {lang === 'ar' ? leader.biographyAr : leader.biographyEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate max-w-[140px] text-[11px]">
                      {lang === 'ar' ? leader.restingPlaceAr.split('-')[0] : leader.restingPlaceEn.split(',')[0]}
                    </span>
                  </div>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[11px]">
                    {lang === 'ar' ? 'السيرة الكاملة' : 'Full Bio'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
