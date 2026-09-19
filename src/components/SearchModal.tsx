import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Compass, Heart, HelpCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { pillarsOfFaith, karbalaEditorial, infallibleLeaders, sacredShrines, questionsAndClarifications, spiritualGems } from '../data/shiaContent';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, lang, onNavigate }) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const items: Array<{ id: string; title: string; category: string; sectionId: string }> = [];

    // Search pillars
    pillarsOfFaith.forEach((p) => {
      const match = (lang === 'ar' ? p.titleAr + p.conceptAr : p.titleEn + p.conceptEn).toLowerCase();
      if (match.includes(q)) {
        items.push({
          id: p.id,
          title: lang === 'ar' ? p.titleAr : p.titleEn,
          category: lang === 'ar' ? 'أصول العقيدة' : 'Pillars of Faith',
          sectionId: 'pillars',
        });
      }
    });

    // Search Karbala
    karbalaEditorial.forEach((k) => {
      const match = (lang === 'ar' ? k.titleAr + k.detailsAr : k.titleEn + k.detailsEn).toLowerCase();
      if (match.includes(q)) {
        items.push({
          id: k.id,
          title: lang === 'ar' ? k.titleAr : k.titleEn,
          category: lang === 'ar' ? 'نهضة كربلاء' : 'Sacred Karbala',
          sectionId: 'karbala',
        });
      }
    });

    // Search Leaders
    infallibleLeaders.forEach((l) => {
      const match = (lang === 'ar' ? l.nameAr + l.titleAr + l.biographyAr : l.nameEn + l.titleEn + l.biographyEn).toLowerCase();
      if (match.includes(q)) {
        items.push({
          id: l.id,
          title: lang === 'ar' ? l.nameAr : l.nameEn,
          category: lang === 'ar' ? 'أهل البيت (ع)' : 'Ahl al-Bayt',
          sectionId: 'ahlulbayt',
        });
      }
    });

    // Search Shrines
    sacredShrines.forEach((s) => {
      const match = (lang === 'ar' ? s.nameAr + s.descriptionAr : s.nameEn + s.descriptionEn).toLowerCase();
      if (match.includes(q)) {
        items.push({
          id: s.id,
          title: lang === 'ar' ? s.nameAr : s.nameEn,
          category: lang === 'ar' ? 'المراقد المقدسة' : 'Sacred Shrines',
          sectionId: 'shrines',
        });
      }
    });

    // Search Questions
    questionsAndClarifications.forEach((faq) => {
      const match = (lang === 'ar' ? faq.questionAr + faq.detailedExplanationAr : faq.questionEn + faq.detailedExplanationEn).toLowerCase();
      if (match.includes(q)) {
        items.push({
          id: faq.id,
          title: lang === 'ar' ? faq.questionAr : faq.questionEn,
          category: lang === 'ar' ? 'إيضاحات وحوار' : 'Clarifications',
          sectionId: 'clarifications',
        });
      }
    });

    return items.slice(0, 8);
  }, [query, lang]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-stone-950 border border-amber-600/40 rounded-3xl shadow-2xl p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <Search className="w-5 h-5" />
            <span>{lang === 'ar' ? 'البحث الشامل في المنصة' : 'Global Platform Search'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-900 text-stone-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <div className="my-4 relative">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'ar' ? 'اكتب كلمة البحث (مثال: الحسين، التربة، العدل، القرآن...)' : 'Type search terms (e.g. Hussain, Turbah, Justice, Quran)...'}
            className="w-full px-4 py-3.5 bg-stone-900 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
          />
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto space-y-2 mt-2">
          {query.trim() === '' ? (
            <p className="text-center py-8 text-xs text-stone-500">
              {lang === 'ar' ? 'ابدأ بكتابة كلمة للبحث في الأقسام والمواضيع' : 'Start typing to search all sections and topics'}
            </p>
          ) : results.length === 0 ? (
            <p className="text-center py-8 text-xs text-stone-500">
              {lang === 'ar' ? 'لا توجد نتائج مطابقة لبحثك' : 'No results found matching your query'}
            </p>
          ) : (
            results.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  onNavigate(r.sectionId);
                  onClose();
                }}
                className="w-full p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-600/50 hover:bg-stone-900 transition-all text-right flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/30">
                    {r.category}
                  </span>
                  <h4 className="text-sm font-semibold text-stone-200 group-hover:text-amber-200 mt-1 font-serif-ar">
                    {r.title}
                  </h4>
                </div>
                <span className="text-xs text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">
                  {lang === 'ar' ? 'انتقال ←' : 'Go →'}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
