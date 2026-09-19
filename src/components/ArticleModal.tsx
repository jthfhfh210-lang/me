import React, { useState } from 'react';
import { X, MapPin, Award, BookOpen, Quote, Share2, Copy, Check, Sparkles } from 'lucide-react';
import { Language, InfallibleLeader } from '../types';

interface ArticleModalProps {
  leader: InfallibleLeader | null;
  onClose: () => void;
  lang: Language;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ leader, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  if (!leader) return null;

  const handleCopyQuote = () => {
    const text = `«${lang === 'ar' ? leader.quoteAr : leader.quoteEn}»\n— ${lang === 'ar' ? leader.nameAr : leader.nameEn}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: lang === 'ar' ? leader.nameAr : leader.nameEn,
          text: `«${lang === 'ar' ? leader.quoteAr : leader.quoteEn}»\n— ${lang === 'ar' ? leader.nameAr : leader.nameEn}`,
          url: window.location.href,
        });
      } catch {
        // user cancelled share
      }
    } else {
      handleCopyQuote();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md overflow-hidden transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full sm:max-w-3xl bg-stone-950 border border-amber-600/40 rounded-t-[2.5rem] sm:rounded-3xl shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto overscroll-contain animate-in slide-in-from-bottom duration-300 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle Indicator */}
        <div className="w-12 h-1.5 bg-stone-700/80 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Header Action Buttons */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/80">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-950/80 border border-amber-600/40 text-amber-300 font-bold flex items-center justify-center text-sm font-serif-ar">
              {leader.number}
            </span>
            <span className="text-xs text-amber-400 font-semibold px-2 py-0.5 rounded-md bg-amber-950/50 border border-amber-800/40">
              {leader.period}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-amber-300 hover:bg-stone-800 transition-colors"
              title={lang === 'ar' ? 'مشاركة' : 'Share'}
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              title={lang === 'ar' ? 'إغلاق' : 'Close'}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Leader Title & Identity */}
        <div className="pt-3 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-amber-100 font-serif-ar mb-1">
            {lang === 'ar' ? leader.nameAr : leader.nameEn}
          </h2>
          <p className="text-xs sm:text-sm text-amber-400/90 font-medium">
            {lang === 'ar' ? leader.titleAr : leader.titleEn}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-5 pb-6">
          
          {/* Golden Quote Card with Haptic Copy */}
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-950/50 via-stone-900 to-stone-950 border border-amber-600/35 relative shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'من درر كلماته الخالدة:' : 'Timeless Words of Wisdom:'}</span>
              </span>
              <button
                onClick={handleCopyQuote}
                className="px-2 py-1 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-300 hover:text-amber-300 transition-colors text-[11px] flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ الحكمة' : 'Copy Quote')}</span>
              </button>
            </div>
            <p className="text-base sm:text-xl font-serif-ar text-amber-100 italic leading-relaxed sm:leading-loose text-center py-2">
              «{lang === 'ar' ? leader.quoteAr : leader.quoteEn}»
            </p>
          </div>

          {/* Historical Role */}
          <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800/80 space-y-1.5">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'الدور الرسالي والقيادي:' : 'Historical Role & Stewardship:'}</span>
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans-ar">
              {lang === 'ar' ? leader.roleAr : leader.roleEn}
            </p>
          </div>

          {/* Full Biography & Intellectual Radiance */}
          <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800/80 space-y-1.5">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'السيرة والإشعاع المعرفي:' : 'Biography & Intellectual Impact:'}</span>
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans-ar">
              {lang === 'ar' ? leader.biographyAr : leader.biographyEn}
            </p>
          </div>

          {/* Key Legacy */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-1">
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ar' ? 'الأثر الخالد والتراث العلمي:' : 'Enduring Legacy:'}</span>
            </span>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
              {lang === 'ar' ? leader.keyLegacyAr : leader.keyLegacyEn}
            </p>
          </div>

          {/* Sacred Resting Place */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 p-3 rounded-xl bg-stone-900 border border-stone-800">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-stone-400">{lang === 'ar' ? 'المرقد الشريف:' : 'Sacred Resting Place:'}</span>
            <span className="text-amber-200 font-bold">
              {lang === 'ar' ? leader.restingPlaceAr : leader.restingPlaceEn}
            </span>
          </div>

        </div>

        {/* Mobile Sticky Close Button */}
        <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-3">
          <button
            onClick={handleCopyQuote}
            className="flex-1 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 font-bold text-xs hover:bg-stone-850 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'نسخ الحكمة' : 'Copy'}</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-bold text-xs hover:from-amber-500 hover:to-amber-600 transition-all cursor-pointer shadow-md shadow-amber-950/40"
          >
            {lang === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
