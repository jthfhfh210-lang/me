import React, { useState, useMemo } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, CheckCircle2, ShieldCheck, BookOpen, Layers } from 'lucide-react';
import { Language, QuestionClarification } from '../types';
import { questionsAndClarifications } from '../data/shiaContent';

interface FaqClarificationsProps {
  lang: Language;
}

export const FaqClarifications: React.FC<FaqClarificationsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(questionsAndClarifications[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelAr: 'كافة المواضيع', labelEn: 'All Topics' },
    { id: 'imamah', labelAr: 'الإمامة والولاية', labelEn: 'Imamate & Wilayah' },
    { id: 'fiqh', labelAr: 'الفقه وأحكام العبادات', labelEn: 'Fiqh & Prayer Laws' },
    { id: 'quran', labelAr: 'القرآن الكريم والتنزيه', labelEn: 'Quranic Inerrancy' },
    { id: 'worship', labelAr: 'التربة والتوسل والشفاعة', labelEn: 'Turbah & Tawassul' },
    { id: 'unity', labelAr: 'الوحدة الإسلامية', labelEn: 'Islamic Unity' },
    { id: 'ethics', labelAr: 'المرأة والتقية والأخلاق', labelEn: 'Ethics & Society' },
  ];

  const handleCopyAnswer = (q: QuestionClarification) => {
    const text = `${lang === 'ar' ? q.questionAr : q.questionEn}\n\n${lang === 'ar' ? q.shortAnswerAr : q.shortAnswerEn}\n\n${lang === 'ar' ? q.detailedExplanationAr : q.detailedExplanationEn}`;
    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredQuestions = useMemo(() => {
    return questionsAndClarifications.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const qText = (lang === 'ar' ? item.questionAr : item.questionEn).toLowerCase();
      const aText = (lang === 'ar' ? item.shortAnswerAr + item.detailedExplanationAr : item.shortAnswerEn + item.detailedExplanationEn).toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || qText.includes(query) || aText.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  return (
    <section id="clarifications" className="py-24 bg-stone-950 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-600/40 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'حسب الأصول والمصادر الشيعية المعتمدة' : 'Grounded Exclusively in Authentic Shia Sources'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100 font-serif-ar mb-4">
            {lang === 'ar' ? 'إِيضَاحَاتٌ وَحِوَارٌ عِلْمِيٌّ رَصِين' : 'Academic Clarifications & Scholarly Grounding'}
          </h2>
          <p className="text-stone-300 font-sans-ar text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'إجابات علمية موثقة حصرياً من كتب الشيعة الإمامية الأربعة (الكافي، الفقيه، التهذيب، الاستبصار) ونهج البلاغة وتفاسير مذهب أهل البيت عليهم السلام.'
              : 'Scholarly answers drawn exclusively from the canonical Four Shia Books (Al-Kafi, Al-Faqih, Al-Tahdhib, Al-Istibsar), Nahj al-Balagha, and Shia jurisprudence.'}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-3xl mx-auto mb-10 space-y-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ar' ? 'ابحث عن أي مسألة (الجمع بين الصلاتين، التربة، الغدير، التوسل...)' : 'Search any inquiry (Combining prayers, Turbah, Ghadir, Tawassul...)'}
              className="w-full pl-4 pr-12 py-3 bg-stone-900/90 border border-stone-800 rounded-2xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-sm"
            />
          </div>

          {/* Categories Horizontal Scrolling Pill List for Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-amber-600 text-stone-950 border-amber-500 shadow-md shadow-amber-950/40 scale-105'
                      : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700/50 hover:bg-stone-850'
                  }`}
                >
                  {lang === 'ar' ? cat.labelAr : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-16 bg-stone-900/40 rounded-2xl border border-stone-800 text-stone-400">
              <HelpCircle className="w-12 h-12 mx-auto text-stone-600 mb-3" />
              <p className="text-base font-semibold">
                {lang === 'ar' ? 'لم يتم العثور على نتائج مطابقة للبحث' : 'No matching questions found'}
              </p>
              <p className="text-xs text-stone-500 mt-1">
                {lang === 'ar' ? 'جرّب البحث بكلمات أخرى أو اختر فئة مختلفة' : 'Try different keywords or select another category'}
              </p>
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const isExpanded = expandedId === q.id;
              const isCopied = copiedId === q.id;
              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-stone-900 border-amber-600/60 shadow-xl shadow-black/50 ring-1 ring-amber-500/20'
                      : 'bg-stone-900/70 border-stone-800 hover:border-stone-700 active:bg-stone-850'
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : q.id)}
                    className="w-full p-4 sm:p-6 text-right flex items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl shrink-0 transition-colors ${isExpanded ? 'bg-amber-500 text-stone-950 shadow-md' : 'bg-stone-800 text-amber-400'}`}>
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-950/70 text-amber-300 border border-amber-700/40 font-semibold">
                            {lang === 'ar' ? 'المصادر الشيعية المعتمدة' : 'Authenticated Shia Sources'}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-stone-100 font-serif-ar leading-snug">
                          {lang === 'ar' ? q.questionAr : q.questionEn}
                        </h3>
                      </div>
                    </div>
                    <div className="shrink-0 text-stone-400 p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-6 pt-2 space-y-4 border-t border-stone-800/80">
                      {/* Short summary highlight */}
                      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-700/35 text-amber-100 text-xs sm:text-sm font-medium leading-relaxed shadow-inner">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-amber-400 block text-xs">
                            {lang === 'ar' ? 'خلاصة القول وبيان المذهب:' : 'Core Doctrine Summary:'}
                          </span>
                          <button
                            onClick={() => handleCopyAnswer(q)}
                            className="px-2 py-0.5 rounded-lg bg-stone-900/80 border border-amber-700/40 text-amber-300 text-[11px] flex items-center gap-1 hover:bg-stone-850 cursor-pointer"
                          >
                            <BookOpen className="w-3 h-3" />
                            <span>{isCopied ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ الجواب' : 'Copy')}</span>
                          </button>
                        </div>
                        <p>{lang === 'ar' ? q.shortAnswerAr : q.shortAnswerEn}</p>
                      </div>

                      {/* Detailed academic explanation */}
                      <div className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans-ar space-y-2 p-3 sm:p-4 rounded-xl bg-stone-950/60 border border-stone-800/80">
                        <span className="font-bold text-amber-300 text-xs block">
                          {lang === 'ar' ? 'التفصيل والتأصيل في مصادر الشيعة:' : 'Detailed Exposition & Texts:'}
                        </span>
                        <p className="leading-relaxed">{lang === 'ar' ? q.detailedExplanationAr : q.detailedExplanationEn}</p>
                      </div>

                      {/* Documentary Evidences */}
                      <div className="pt-2">
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">
                          {lang === 'ar' ? 'أبرز المصادر والكتب الشيعية المستند إليها:' : 'Documented Shia Reference Compilations:'}
                        </span>
                        <ul className="space-y-1.5">
                          {(lang === 'ar' ? q.evidencesAr : q.evidencesEn).map((ev, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-stone-300 bg-stone-900/50 p-2 rounded-lg border border-stone-800/60">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ev}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
