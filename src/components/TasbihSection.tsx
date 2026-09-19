import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RotateCcw,
  Volume2,
  VolumeX,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Flame,
  Layers,
  Heart,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { TASBIH_PRESETS, TasbihPreset } from '../data/tasbihData';

interface TasbihSectionProps {
  lang: Language;
}

interface FloatingWord {
  id: number;
  text: string;
  x: number;
  y: number;
}

export const TasbihSection: React.FC<TasbihSectionProps> = ({ lang }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('zahra');
  const [count, setCount] = useState<number>(0);
  const [zahraStepIndex, setZahraStepIndex] = useState<number>(0);
  const [totalLifetimeCount, setTotalLifetimeCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('shia_app_tasbih_total');
      return saved ? parseInt(saved, 10) : 1240;
    }
    return 1240;
  });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [vibrationEnabled, setVibrationEnabled] = useState<boolean>(true);
  const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const activePreset = TASBIH_PRESETS.find((p) => p.id === selectedPresetId) || TASBIH_PRESETS[0];

  // Web Audio Click Synthesizer (works 100% offline with zero dependencies)
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      if (audioCtxRef.current) {
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = 'sine';
        // Elegant wood/bead tone
        osc.frequency.setValueAtTime(480, audioCtxRef.current.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, audioCtxRef.current.currentTime + 0.08);

        gain.gain.setValueAtTime(0.3, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        osc.stop(audioCtxRef.current.currentTime + 0.09);
      }
    } catch {
      // Audio context might be restricted before user gesture, safely continue
    }
  };

  // Determine current active phrase for Zahra multi-step or single
  const getCurrentPhrase = () => {
    if (activePreset.isZahraMultiStep && activePreset.steps) {
      return activePreset.steps[zahraStepIndex].phraseAr;
    }
    return lang === 'ar' ? activePreset.phraseAr : activePreset.phraseEn;
  };

  const getCurrentStepMax = () => {
    if (activePreset.isZahraMultiStep && activePreset.steps) {
      return activePreset.steps[zahraStepIndex].count;
    }
    return activePreset.targetCount || 100;
  };

  const handleTap = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 140);

    // Audio click
    playClickSound();

    // Haptic feedback for mobile phones
    if (vibrationEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(28);
    }

    const currentMax = getCurrentStepMax();
    const newCount = count + 1;

    // Floating text animation
    const rect = e.currentTarget.getBoundingClientRect();
    const wordText = getCurrentPhrase();
    const newFloatingWord: FloatingWord = {
      id: Date.now() + Math.random(),
      text: wordText,
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 40,
    };
    setFloatingWords((prev) => [...prev.slice(-8), newFloatingWord]);

    // Save total
    const newTotal = totalLifetimeCount + 1;
    setTotalLifetimeCount(newTotal);
    if (typeof window !== 'undefined') {
      localStorage.setItem('shia_app_tasbih_total', newTotal.toString());
    }

    // Step logic
    if (activePreset.isZahraMultiStep && activePreset.steps) {
      if (newCount >= currentMax) {
        if (zahraStepIndex < activePreset.steps.length - 1) {
          setZahraStepIndex(zahraStepIndex + 1);
          setCount(0);
          if (vibrationEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate([60, 40, 60]);
          }
        } else {
          // Completed full Zahra Tasbih
          setZahraStepIndex(0);
          setCount(0);
          if (vibrationEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate([100, 50, 100, 50, 100]);
          }
        }
      } else {
        setCount(newCount);
      }
    } else {
      if (activePreset.targetCount > 0 && newCount >= activePreset.targetCount) {
        setCount(0);
        if (vibrationEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
          navigator.vibrate([80, 40, 80]);
        }
      } else {
        setCount(newCount);
      }
    }
  };

  const handleReset = () => {
    setCount(0);
    setZahraStepIndex(0);
  };

  const handlePresetSelect = (presetId: string) => {
    setSelectedPresetId(presetId);
    setCount(0);
    setZahraStepIndex(0);
  };

  // Progress percentage
  const currentMax = getCurrentStepMax();
  const progressPercent = currentMax > 0 ? Math.min(100, Math.round((count / currentMax) * 100)) : 100;

  return (
    <section id="tasbih" className="py-20 bg-stone-950 border-b border-amber-900/30 relative overflow-hidden">
      {/* Sacred atmospheric glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 right-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'السبحة الإلكترونية التفاعلية • ذكر ودعاء' : 'Interactive Digital Rosary • Remembrance'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-100 mb-3 tracking-tight">
            {lang === 'ar' ? 'السُّبْحَةُ المَهْدِيَّةُ المُطَهَّرَة' : 'Sacred Digital Tasbih'}
          </h2>
          <p className="text-sm text-stone-400">
            {lang === 'ar'
              ? 'المس الدائرة المباركة للتسبيح، واستشعر الأثر الروحي والاهتزاز وحركات الأنيميشن مع كل تسبيحة وتحميد.'
              : 'Tap the sacred rosary sphere with tactile feedback and luminous particles of remembrance.'}
          </p>
        </div>

        {/* Preset Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {TASBIH_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handlePresetSelect(preset.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border shrink-0 ${
                selectedPresetId === preset.id
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md shadow-amber-950/50 scale-105'
                  : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
              }`}
            >
              {lang === 'ar' ? preset.nameAr : preset.nameEn}
            </button>
          ))}
        </div>

        {/* Main Tasbih Card */}
        <div className="bg-gradient-to-b from-stone-900/90 via-stone-900/60 to-stone-950 border border-amber-800/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Controls bar: Sound, Vibrate, Reset */}
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  soundEnabled
                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                    : 'bg-stone-900 border-stone-800 text-stone-500'
                }`}
                title={lang === 'ar' ? 'صوت النقر' : 'Sound click'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setVibrationEnabled(!vibrationEnabled)}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  vibrationEnabled
                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                    : 'bg-stone-900 border-stone-800 text-stone-500'
                }`}
                title={lang === 'ar' ? 'الاهتزاز' : 'Vibration'}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Total Counter Badge */}
            <div className="text-center">
              <span className="text-[11px] text-stone-400 block font-medium">
                {lang === 'ar' ? 'مجموع التسبيحات الكلي' : 'Lifetime Count'}
              </span>
              <span className="text-sm font-black text-amber-400">
                {totalLifetimeCount.toLocaleString(lang === 'ar' ? 'ar-IQ' : 'en-US')}
              </span>
            </div>

            {/* Reset current count */}
            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-amber-400 hover:border-amber-700 transition-colors cursor-pointer flex items-center gap-1 text-xs"
              title={lang === 'ar' ? 'تصفير العداد' : 'Reset counter'}
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'تصفير' : 'Reset'}</span>
            </button>
          </div>

          {/* Zahra Multi-Step Indicator (if Zahra Tasbih is active) */}
          {activePreset.isZahraMultiStep && activePreset.steps && (
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
              {activePreset.steps.map((step, idx) => {
                const isStepActive = idx === zahraStepIndex;
                const isStepPassed = idx < zahraStepIndex;
                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-2xl border text-center transition-all ${
                      isStepActive
                        ? 'bg-amber-500/15 border-amber-400 shadow-md shadow-amber-950/60'
                        : isStepPassed
                        ? 'bg-emerald-950/40 border-emerald-600/50 text-emerald-400'
                        : 'bg-stone-950/60 border-stone-800/80 text-stone-500'
                    }`}
                  >
                    <div className="text-[11px] font-bold mb-0.5">
                      {lang === 'ar' ? step.phraseAr : step.phraseEn}
                    </div>
                    <div className="text-xs font-black">
                      {isStepActive ? (
                        <span className="text-amber-300 font-mono">
                          {count} / {step.count}
                        </span>
                      ) : isStepPassed ? (
                        <span className="text-emerald-400 flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> تم
                        </span>
                      ) : (
                        <span className="text-stone-600">{step.count}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* The Interactive Glowing Tasbih Circle */}
          <div className="relative flex flex-col items-center justify-center py-6 sm:py-10">
            
            {/* Floating Word Popups */}
            <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center">
              <AnimatePresence>
                {floatingWords.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 1, scale: 0.8, y: 0, x: item.x }}
                    animate={{ opacity: 0, scale: 1.4, y: -130 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute text-amber-300 font-bold text-sm sm:text-base drop-shadow-[0_2px_12px_rgba(245,158,11,0.8)] whitespace-nowrap"
                  >
                    ✨ {item.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Circular Progress Ring */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 240 240">
                <circle
                  cx="120"
                  cy="120"
                  r="104"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-stone-800/80 fill-none"
                />
                <circle
                  cx="120"
                  cy="120"
                  r="104"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 104}
                  strokeDashoffset={2 * Math.PI * 104 * (1 - progressPercent / 100)}
                  strokeLinecap="round"
                  className="text-amber-500 transition-all duration-150 fill-none drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                />
              </svg>

              {/* Main Tap Button Sphere */}
              <button
                id="tasbih-tap-circle"
                onClick={handleTap}
                className={`absolute inset-3 rounded-full bg-gradient-to-b from-amber-600/30 via-stone-900 to-stone-950 border-2 border-amber-500/60 shadow-[0_0_40px_rgba(217,119,6,0.3)] hover:shadow-[0_0_55px_rgba(217,119,6,0.5)] flex flex-col items-center justify-center transition-transform cursor-pointer select-none active:scale-90 ${
                  isPressed ? 'scale-90 border-amber-300' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Active Phrase Label */}
                <span className="text-amber-300 text-xs sm:text-sm font-bold mb-1 px-4 text-center leading-tight">
                  {getCurrentPhrase()}
                </span>

                {/* Big Animated Count */}
                <motion.span
                  key={count}
                  initial={{ scale: 0.7, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.12 }}
                  className="text-5xl sm:text-6xl font-black text-stone-100 font-mono tracking-tighter drop-shadow-md"
                >
                  {count}
                </motion.span>

                {/* Progress Target */}
                <span className="text-[11px] font-semibold text-stone-400 mt-1">
                  {currentMax > 0 ? (
                    <span>
                      {lang === 'ar' ? 'الهدف:' : 'Target:'} {currentMax}
                    </span>
                  ) : (
                    <span>{lang === 'ar' ? 'عداد حر' : 'Continuous'}</span>
                  )}
                </span>
                
                <span className="text-[10px] text-amber-500/80 font-bold mt-2 animate-pulse">
                  {lang === 'ar' ? 'اضغط للتسبيح 👆' : 'Tap to Count 👆'}
                </span>
              </button>
            </div>

            {/* Bottom Current Remembrance Display */}
            <div className="mt-8 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-300 mb-1">
                « {getCurrentPhrase()} »
              </div>
              <p className="text-xs text-stone-400 max-w-sm mx-auto">
                {lang === 'ar'
                  ? 'قال الصادق (ع): تسبيح فاطمة الزهراء (ع) في كل يوم في دبر كل صلاة أحب إلي من صلاة ألف ركعة في كل يوم.'
                  : 'The remembrance of Allah brings serenity, tranquility, and elevation of the heart.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
