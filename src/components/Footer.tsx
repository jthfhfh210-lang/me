import React from 'react';
import { Compass, BookMarked, ShieldCheck, Heart, ArrowUp, Landmark, Users } from 'lucide-react';
import { Language, AppEdition } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primarySources = [
    { titleAr: 'القرآن الكريم (المحفوظ إجماعاً)', titleEn: 'The Holy Quran (Universally Preserved)' },
    { titleAr: 'نهج البلاغة - لأمير المؤمنين (ع) والشريف الرضي', titleEn: 'Nahj al-Balagha (Peak of Eloquence)' },
    { titleAr: 'الصحيفة السجادية - للإمام زين العابدين (ع)', titleEn: 'Al-Sahifa al-Sajjadiyya' },
    { titleAr: 'الكافي (الأصول والفروع) - لثقة الإسلام الكليني', titleEn: 'Al-Kafi by al-Kulayni' },
    { titleAr: 'من لا يحضره الفقيه - للشيخ الصدوق', titleEn: 'Man La Yahduruhu al-Faqih by al-Saduq' },
    { titleAr: 'تهذيب الأحكام والاستبصار - للشيخ الطوسي', titleEn: 'Tahdhib al-Ahkam & al-Istibsar by al-Tusi' },
    { titleAr: 'وسائل الشيعة - للحر العاملي', titleEn: 'Wasa\'il al-Shia by al-Hurr al-Amili' },
  ];

  return (
    <footer className="bg-stone-950 border-t border-amber-900/40 text-stone-300 pt-16 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-900/60 border border-amber-500/40 flex items-center justify-center text-amber-300">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-amber-200 font-serif-ar">
                {lang === 'ar' ? 'تَعَرَّفْ عَلَى الشِّيعَة' : 'Know About Shia'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 font-sans-ar leading-relaxed">
              {lang === 'ar'
                ? 'منصة ثقافية إرثية تُعنى بالتعريف الموضوعي والأكاديمي بفكر مذهب أهل البيت عليهم السلام ونهضة كربلاء المقدسة، ونشر قيم العدالة والحرية والتسامح الإنساني.'
                : 'A cultural portal dedicated to objective, scholarly illumination of the school of Ahl al-Bayt and eternal Karbala, advancing justice, freedom, and universal human fraternity.'}
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              {lang === 'ar' ? 'أقسام المنصة' : 'Portal Sections'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('pillars')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• أصول العقيدة الخمسة' : '• Five Pillars of Faith'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('karbala')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• ملحمة كربلاء والأربعين' : '• Karbala & Arbaeen'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ahlulbayt')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• الأئمة المعصومون الأطهار' : '• The Infallible Imams'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shrines')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• العمارة والمراقد المقدسة' : '• Architecture & Shrines'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('karbala-gallery')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• معرض الصور والتحف النادرة' : '• Photo & Relics Gallery'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('proxy-ziyarah')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• نظام الزيارة بالإنابة والتبرك' : '• Proxy Ziyarah Portal'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('karbala-live')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• مواقيت كربلاء والبث الروحي' : '• Karbala Timings & Live Feed'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('clarifications')} className="hover:text-amber-300 transition-colors">
                  {lang === 'ar' ? '• إيضاحات وأسئلة شائعة' : '• Clarifications & FAQs'}
                </button>
              </li>
            </ul>
          </div>

          {/* Primary Scholarly Sources */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'أبرز المصادر والمراجع الأكاديمية' : 'Key References & Primary Compilations'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-400">
              {primarySources.map((src, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-stone-900/60 border border-stone-800/80">
                  {lang === 'ar' ? src.titleAr : src.titleEn}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            {lang === 'ar'
              ? '© منصة تعرف على الشيعة — مكرسة للسلام والوعي والمعرفة الإنسانية المشتركة.'
              : '© Know About Shia Platform — Dedicated to peace, conscience, and mutual understanding.'}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-amber-950/60 border border-stone-800 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to top'}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
