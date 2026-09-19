import React, { useState } from 'react';
import { BookOpen, Globe, Search, Volume2, VolumeX, Menu, X, Compass, Award, ShieldCheck, Heart, Landmark, Users } from 'lucide-react';
import { Language, AppEdition } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  edition?: AppEdition;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenProposal: () => void;
  audioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  edition = 'public',
  activeSection,
  onNavigate,
  onOpenSearch,
  onOpenProposal,
  audioPlaying,
  onToggleAudio,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'quran', labelAr: 'القرآن الكريم', labelEn: 'Holy Quran' },
    { id: 'ziyarah', labelAr: 'زيارات الأئمة', labelEn: 'Holy Ziyarat' },
    { id: 'tasbih', labelAr: 'السبحة الإلكترونية', labelEn: 'Digital Tasbih' },
    { id: 'prayer', labelAr: 'مواقيت الصلاة', labelEn: 'Prayer Times' },
    { id: 'karbala', labelAr: 'نهضة كربلاء', labelEn: 'Sacred Karbala' },
    { id: 'ahlulbayt', labelAr: 'أهل البيت (ع)', labelEn: 'Ahl al-Bayt' },
    { id: 'shrines', labelAr: 'المراقد والعمارة', labelEn: 'Holy Shrines' },
    { id: 'clarifications', labelAr: 'إيضاحات', labelEn: 'Clarifications' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-950/90 border-b border-amber-900/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 cursor-pointer group select-none"
            id="brand-logo"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-700 via-amber-900 to-emerald-950 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-950/50 group-hover:border-amber-400 transition-colors">
              <Compass className="w-6 h-6 text-amber-300 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-amber-200 font-serif-ar">
                  {lang === 'ar' ? 'تَعَرَّفْ عَلَى الشِّيعَة' : 'Know About Shia'}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 hidden sm:inline-block">
                  {lang === 'ar' ? 'إرث وحضارة' : 'Sacred Heritage'}
                </span>
              </div>
              <p className="text-xs text-stone-400 font-sans-ar hidden md:block">
                {lang === 'ar' ? 'منصة تعريفية بفكر ونهضة مذهب أهل البيت عليهم السلام' : 'The School of Ahl al-Bayt & Eternal Karbala'}
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-2.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-amber-950/70 text-amber-300 border border-amber-700/50 shadow-inner'
                      : 'text-stone-300 hover:text-amber-200 hover:bg-stone-900/60'
                  }`}
                >
                  {lang === 'ar' ? item.labelAr : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Install Android App Button */}
            <div className="hidden sm:block">
              <PWAInstallButton lang={lang} />
            </div>

            {/* Shrine Proposal Button - ONLY shown on Ataba edition */}
            {edition === 'ataba' && (
              <button
                onClick={onOpenProposal}
                className="px-2.5 sm:px-3 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-950/50 border border-amber-400/40 cursor-pointer hover:scale-105 transition-all"
                title={lang === 'ar' ? 'ملف التقديم للأمانة العامة للعتبة' : 'Ataba Presentation Dossier'}
              >
                <Award className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{lang === 'ar' ? 'ملف العتبة' : 'Ataba Dossier'}</span>
              </button>
            )}

            {/* Search Button */}
            <button
              id="search-toggle-btn"
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-300 hover:text-amber-300 hover:border-amber-800/60 transition-all flex items-center gap-2 text-xs cursor-pointer"
              title={lang === 'ar' ? 'بحث في المنصة' : 'Search portal'}
            >
              <Search className="w-4 h-4 text-amber-400" />
            </button>

            {/* Audio Ambiance Toggle */}
            <button
              id="audio-toggle-btn"
              onClick={onToggleAudio}
              className={`p-2 sm:p-2.5 rounded-lg border transition-all cursor-pointer ${
                audioPlaying
                  ? 'bg-amber-900/40 border-amber-600 text-amber-300 shadow-sm shadow-amber-900/40 animate-pulse'
                  : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
              title={audioPlaying ? (lang === 'ar' ? 'إيقاف الصدى الروحي' : 'Mute ambience') : (lang === 'ar' ? 'تشغيل الأجواء الروحية' : 'Play peaceful ambience')}
            >
              {audioPlaying ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg bg-gradient-to-r from-amber-950/70 to-stone-900 border border-amber-800/40 text-xs font-semibold text-amber-300 hover:border-amber-500/70 hover:shadow-md hover:shadow-amber-950/40 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 sm:p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-stone-950 border-b border-amber-900/40 px-4 pt-2 pb-6 space-y-2">
          <div className="py-2 border-b border-stone-800/80 mb-2">
            <PWAInstallButton lang={lang} />
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-right py-2 px-3 text-sm rounded-lg text-stone-200 hover:bg-stone-900 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>{lang === 'ar' ? item.labelAr : item.labelEn}</span>
              {activeSection === item.id && <span className="w-2 h-2 rounded-full bg-amber-400" />}
            </button>
          ))}
          {edition === 'ataba' && (
            <div className="pt-3 border-t border-stone-800">
              <button
                onClick={() => {
                  onOpenProposal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-600 text-stone-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>{lang === 'ar' ? 'ملف التقديم للأمانة العامة للعتبة المقدسة' : 'Ataba Presentation Dossier'}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
