import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { KarbalaMemorial } from './components/KarbalaMemorial';
import { AhlulbaytGrid } from './components/AhlulbaytGrid';
import { ShrinesVirtualTour } from './components/ShrinesVirtualTour';
import { KarbalaGallery } from './components/KarbalaGallery';
import { ProxyZiyarahPortal } from './components/ProxyZiyarahPortal';
import { QuranSection } from './components/QuranSection';
import { TasbihSection } from './components/TasbihSection';
import { PrayerTimesSection } from './components/PrayerTimesSection';
import { FaqClarifications } from './components/FaqClarifications';
import { SpiritualReflections } from './components/SpiritualReflections';
import { ArticleModal } from './components/ArticleModal';
import { SearchModal } from './components/SearchModal';
import { ShrineProposalModal } from './components/ShrineProposalModal';
import { AndroidApkModal } from './components/AndroidApkModal';
import { Footer } from './components/Footer';
import { AtabaWelcomeSection } from './components/AtabaWelcomeSection';
import { OfflineIndicator } from './components/OfflineIndicator';
import { AndroidBottomNav } from './components/AndroidBottomNav';
import { PWAInstallButton } from './components/PWAInstallButton';
import { Language, InfallibleLeader, AppEdition } from './types';

const getInitialEdition = (): AppEdition => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('edition') === 'ataba' ||
      params.get('version') === 'ataba' ||
      window.location.pathname.startsWith('/ataba') ||
      window.location.hash.includes('ataba')
    ) {
      return 'ataba';
    }
  }
  return 'public';
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [edition, setEdition] = useState<AppEdition>(getInitialEdition);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [shrineProposalOpen, setShrineProposalOpen] = useState<boolean>(false);
  const [apkModalOpen, setApkModalOpen] = useState<boolean>(false);
  const [selectedLeader, setSelectedLeader] = useState<InfallibleLeader | null>(null);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // Sync edition changes with browser URL
  const handleEditionChange = (newEdition: AppEdition) => {
    setEdition(newEdition);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (newEdition === 'ataba') {
        url.searchParams.set('edition', 'ataba');
      } else {
        url.searchParams.delete('edition');
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  // Sync browser back/forward navigation with URL
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get('edition') === 'ataba' ||
        window.location.pathname.startsWith('/ataba') ||
        window.location.hash.includes('ataba')
      ) {
        setEdition('ataba');
      } else {
        setEdition('public');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Audio synthesizer ref
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  // Keep dir and lang in sync with state
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Section Observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'quran',
        'ziyarah',
        'tasbih',
        'prayer',
        'karbala',
        'ahlulbayt',
        'shrines',
        'karbala-gallery',
        'clarifications',
        'reflections',
      ];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio peaceful contemplative drone
  const toggleAudio = () => {
    if (audioPlaying) {
      // Stop
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.5);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try { osc.stop(); } catch (e) { /* ignore */ }
          });
          oscillatorsRef.current = [];
          setAudioPlaying(false);
        }, 600);
      } else {
        setAudioPlaying(false);
      }
    } else {
      // Start ambient chord (D minor peaceful meditation chord: D2, A2, D3, F3)
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2); // Soft volume
        gainNodeRef.current = masterGain;

        // Biquad low-pass filter for warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        masterGain.connect(filter);
        filter.connect(ctx.destination);

        const freqs = [73.42, 110.0, 146.83, 174.61]; // D2, A2, D3, F3
        const newOscs: OscillatorNode[] = [];

        freqs.forEach((f, i) => {
          const osc = ctx.createOscillator();
          osc.type = i % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          osc.connect(masterGain);
          osc.start();
          newOscs.push(osc);
        });

        oscillatorsRef.current = newOscs;
        setAudioPlaying(true);
      } catch (err) {
        console.error('Audio could not be initialized:', err);
      }
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-800 selection:text-amber-100 pb-20 ${lang === 'ar' ? 'font-sans-ar' : ''}`}>
      
      {/* Offline Status Tracker */}
      <OfflineIndicator lang={lang} />

      {/* Top Banner Notice with Install Android App CTA */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border-b border-amber-800/40 py-2 px-4 text-xs text-amber-300 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold">
              {lang === 'ar'
                ? '📱 تطبيق الأندرويد الرسمي: تعرّف على الشيعة ومعالم كربلاء المقدسة'
                : '📱 Official Android App: Know About Shia & Karbala Heritage'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setApkModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black transition-all cursor-pointer text-xs shadow-md"
            >
              <span>{lang === 'ar' ? '📥 تحميل ملف الـ APK' : '📥 Download APK File'}</span>
            </button>
            <PWAInstallButton lang={lang} />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={() => setLang(lang === 'ar' ? 'en' : 'ar')}
        edition={edition}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenProposal={() => setShrineProposalOpen(true)}
        audioPlaying={audioPlaying}
        onToggleAudio={toggleAudio}
      />

      {/* Main Content */}
      <main>
        {/* Ataba Special Edition ONLY: Dedicated Official Welcome */}
        {edition === 'ataba' && (
          <AtabaWelcomeSection
            lang={lang}
            onOpenProposal={() => setShrineProposalOpen(true)}
            onScrollToExplore={() => handleNavigate('hero')}
          />
        )}

        {/* 1. Hero */}
        <HeroSection
          lang={lang}
          onNavigate={handleNavigate}
          onOpenArticle={() => handleNavigate('pillars')}
        />

        {/* 2. The Holy Quran Full Recitation & Reader Portal */}
        <QuranSection
          lang={lang}
        />

        {/* 3. Infallibles Holy Ziyarat & Proxy Registration Portal */}
        <ProxyZiyarahPortal
          lang={lang}
        />

        {/* 4. Interactive Electronic Tasbih (Remembrance) */}
        <TasbihSection
          lang={lang}
        />

        {/* 5. Shia Ja'fari Astronomical Prayer Timings */}
        <PrayerTimesSection
          lang={lang}
        />

        {/* 6. Sacred Karbala Memorial & Ashura */}
        <KarbalaMemorial
          lang={lang}
        />

        {/* 7. Ahl al-Bayt Infallibles */}
        <AhlulbaytGrid
          lang={lang}
          onSelectLeader={(leader) => setSelectedLeader(leader)}
        />

        {/* 8. Shrines Virtual Tour & Architecture */}
        <ShrinesVirtualTour
          lang={lang}
        />

        {/* 9. Sacred Photographic & Treasury Exhibition */}
        <KarbalaGallery
          lang={lang}
        />

        {/* 10. Pillars of Faith */}
        <PillarsSection
          lang={lang}
          onOpenArticle={() => handleNavigate('pillars')}
        />

        {/* 11. Clarifications & FAQs */}
        <FaqClarifications
          lang={lang}
        />

        {/* 12. Spiritual Gems & Supplications */}
        <SpiritualReflections
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={lang}
        onNavigate={handleNavigate}
      />

      <ArticleModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
        lang={lang}
      />

      <ShrineProposalModal
        isOpen={shrineProposalOpen}
        onClose={() => setShrineProposalOpen(false)}
        lang={lang}
      />

      <AndroidApkModal
        isOpen={apkModalOpen}
        onClose={() => setApkModalOpen(false)}
        lang={lang}
      />

      {/* Android Native Bottom Navigation Bar */}
      <AndroidBottomNav
        lang={lang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
