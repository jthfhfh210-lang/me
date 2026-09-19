import React from 'react';
import { Home, BookOpen, Heart, Sparkles, Clock, Compass, Landmark } from 'lucide-react';
import { Language } from '../types';

interface AndroidBottomNavProps {
  lang: Language;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const AndroidBottomNav: React.FC<AndroidBottomNavProps> = ({
  lang,
  activeSection,
  onNavigate,
}) => {
  const handleTabClick = (sectionId: string) => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(12);
      } catch {
        // vibration not allowed or supported
      }
    }
    onNavigate(sectionId);
  };

  const tabs = [
    {
      id: 'hero',
      labelAr: 'الرئيسية',
      labelEn: 'Home',
      icon: Home,
    },
    {
      id: 'quran',
      labelAr: 'المصحف',
      labelEn: 'Quran',
      icon: BookOpen,
    },
    {
      id: 'ziyarah',
      labelAr: 'الزيارات',
      labelEn: 'Ziyarat',
      icon: Heart,
    },
    {
      id: 'tasbih',
      labelAr: 'السبحة',
      labelEn: 'Tasbih',
      icon: Sparkles,
    },
    {
      id: 'prayer',
      labelAr: 'المواقيت',
      labelEn: 'Prayers',
      icon: Clock,
    },
    {
      id: 'karbala',
      labelAr: 'كربلاء',
      labelEn: 'Karbala',
      icon: Compass,
    },
    {
      id: 'ahlulbayt',
      labelAr: 'المعصومين',
      labelEn: 'Infallibles',
      icon: Landmark,
    },
  ];

  return (
    <div className="fixed bottom-2.5 inset-x-2.5 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-xl z-50 pointer-events-none pb-safe">
      <nav className="pointer-events-auto bg-stone-950/92 backdrop-blur-2xl border border-amber-500/30 rounded-2xl p-1.5 shadow-[0_12px_45px_rgba(0,0,0,0.9)] ring-1 ring-white/5 flex items-center justify-between gap-0.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-300 cursor-pointer flex-1 min-h-[46px] select-none ${
                isActive
                  ? 'text-amber-300 font-bold'
                  : 'text-stone-400 hover:text-stone-200 active:scale-95'
              }`}
            >
              {/* Active pill background glow */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/25 to-amber-900/30 border border-amber-500/50 rounded-xl -z-10 shadow-inner" />
              )}

              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'text-stone-400'
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                )}
              </div>

              <span className={`text-[10px] mt-1 tracking-tight whitespace-nowrap transition-colors ${isActive ? 'text-amber-200 font-semibold' : 'text-stone-400'}`}>
                {lang === 'ar' ? tab.labelAr : tab.labelEn}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
