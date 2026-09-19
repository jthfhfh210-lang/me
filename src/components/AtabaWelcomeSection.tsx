import React, { useState } from 'react';
import { Landmark, Award, ShieldCheck, Check, Copy, ExternalLink, Sparkles, HeartHandshake, ArrowDown } from 'lucide-react';
import { Language } from '../types';

interface AtabaWelcomeSectionProps {
  lang: Language;
  onOpenProposal: () => void;
  onScrollToExplore: () => void;
}

export const AtabaWelcomeSection: React.FC<AtabaWelcomeSectionProps> = ({
  lang,
  onOpenProposal,
  onScrollToExplore,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const atabaUrl = `${window.location.origin}${window.location.pathname}?edition=ataba`;
    navigator.clipboard.writeText(atabaUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-950/90 via-stone-950 to-stone-950 border-b-2 border-amber-600/50 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Islamic geometric subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-44 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Top Official Crest & Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-bold shadow-lg shadow-amber-950/40 mb-5">
          <Landmark className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'النسخة الرسمية الخاصة بالأمانة العامة للعتبة المقدسة' : 'Official Special Edition — Holy Shrine General Secretariat'}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
        </div>

        {/* Bismillah */}
        <div className="text-amber-300/90 font-serif-ar text-lg sm:text-2xl font-bold tracking-wider mb-3">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>

        {/* Grand Welcoming Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-amber-100 font-serif-ar leading-tight sm:leading-snug mb-4">
          {lang === 'ar'
            ? 'أَهْلاً وَسَهْلاً بِالأَمَانَةِ العَامَّةِ لِلعَتَبَةِ المُقَدَّسَة'
            : 'Welcome to the Holy Shrine General Secretariat'}
        </h1>

        {/* Respectful Dedication & Greeting Paragraph */}
        <p className="text-sm sm:text-base lg:text-lg text-stone-200 max-w-3xl mx-auto font-sans-ar leading-relaxed mb-6">
          {lang === 'ar'
            ? 'السلام عليكم ورحمة الله وبركاته. نتشرف بالترحيب بسماحة الأمين العام، والسادة أعضاء مجلس الإدارة الموقر، وخدام العتبتين الحسينية والعباسية الشريفتين. هذه هي النسخة الخاصة المعتمدة للمنصة، المهداة لخدمة معالم كربلاء المقدسة، وتوثيق نفائس الحرمين، ونشر فكر وأخلاق أهل البيت (عليهم السلام) للعالمين.'
            : 'Peace and blessings be upon you. It is our utmost honor to welcome the Secretary-General, the honorable Board of Trustees, and the noble servants of the Holy Shrines of Imam Hussain and Al-Abbas. This is the official dedicated edition, honoring sacred Karbala, its treasury heritage, and the universal message of Ahl al-Bayt.'}
        </p>

        {/* Verification & Authentication Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8 text-xs sm:text-sm">
          <div className="bg-stone-900/80 border border-amber-800/40 rounded-2xl p-3.5 flex items-center justify-center gap-2 text-stone-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{lang === 'ar' ? 'معتمد وفق المعايير المتحفية' : 'Curatorial Standard Certified'}</span>
          </div>
          <div className="bg-stone-900/80 border border-amber-800/40 rounded-2xl p-3.5 flex items-center justify-center gap-2 text-stone-300">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{lang === 'ar' ? 'فحص الصور بدقة Ultra-HD' : 'Ultra-HD Examination Ready'}</span>
          </div>
          <div className="bg-stone-900/80 border border-amber-800/40 rounded-2xl p-3.5 flex items-center justify-center gap-2 text-stone-300">
            <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{lang === 'ar' ? 'نظام الزيارة بالإنابة المباشر' : 'Official Proxy Ziyarah System'}</span>
          </div>
        </div>

        {/* Action Buttons: Copy Link, View Dossier, Explore, Switch */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          
          {/* Direct Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xl shadow-amber-950/60 border border-amber-400 cursor-pointer transition-all hover:scale-105"
          >
            {copied ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
            <span>
              {copied
                ? (lang === 'ar' ? 'تم نسخ الرابط الخاص بالعتبة!' : 'Special Link Copied!')
                : (lang === 'ar' ? 'نسخ رابط النسخة الخاصة' : 'Copy Special Edition Link')}
            </span>
          </button>

          {/* View Dossier Modal */}
          <button
            onClick={onOpenProposal}
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-amber-500/50 text-amber-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'ملف التقديم للأمانة العامة' : 'Secretariat Dossier'}</span>
          </button>

          {/* Scroll down button */}
          <button
            onClick={onScrollToExplore}
            className="px-4 py-2.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/60 text-amber-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>{lang === 'ar' ? 'متابعة تصفح المنصة' : 'Explore Platform'}</span>
            <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
          </button>

        </div>

      </div>
    </section>
  );
};
