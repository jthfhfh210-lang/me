import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  X,
  Printer,
  FileCheck,
  ShieldCheck,
  Landmark,
  Layers,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';

interface ShrineProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ShrineProposalModal: React.FC<ShrineProposalModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="bg-stone-950 border-2 border-amber-500/60 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto text-stone-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
                  {lang === 'ar' ? 'وثيقة العرض والاعتماد الرسمي' : 'Official Presentation Dossier'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-amber-100 font-serif-ar">
                  {lang === 'ar' ? 'ملف التقديم إلى الأمانة العامة للعتبة المقدسة' : 'Presentation to the Holy Shrine Secretariat'}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-900 text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dossier Content */}
          <div className="space-y-8 font-sans-ar leading-relaxed text-stone-300 text-sm sm:text-base">
            
            {/* Dedication Card */}
            <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 rounded-2xl p-6 border border-amber-500/40 text-center sm:text-right">
              <span className="text-xs text-amber-400 font-semibold block mb-1">
                {lang === 'ar' ? 'مقدم إلى:' : 'Presented To:'}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-amber-200 font-serif-ar">
                {lang === 'ar'
                  ? 'الأمانة العامة الموقرة للعتبتين الحسينية والعباسية المقدستين'
                  : 'The General Secretariat of the Holy Shrines of Imam Hussain & Al-Abbas'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                {lang === 'ar'
                  ? 'أقسام: الإعلام والاتصال الرقمي، الشؤون الفكرية والثقافية، ومتحف النفائس والمخطوطات في كربلاء المقدسة'
                  : 'Directorates: Digital Media, Intellectual & Cultural Affairs, and the Treasury Museum'}
              </p>
            </div>

            {/* Platform Executive Summary */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-amber-200 font-serif-ar mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-400" />
                <span>{lang === 'ar' ? '١. ملخص المشروع والرؤية الرقمية' : '1. Executive Vision & Objectives'}</span>
              </h4>
              <p className="text-stone-300 leading-relaxed text-justify">
                {lang === 'ar'
                  ? 'تم تصميم وبناء هذه المنصة الرقمية الحضارية كصرح معرفي وإرثي يعرّف العالم بمذهب أهل البيت عليهم السلام ونهضة الإمام الحسين الإنسانية الخالدة في كربلاء، مع تقديم حلول تفاعلية متطورة تخدم ملايين الزوار عبر تقنيات الويب الحديثة، والتوثيق الأكاديمي، والأرشفة المتحفية ثلاثية الدقة.'
                  : 'Engineered as a flagship digital cultural portal illuminating the universal humanitarian values of Imam Hussain and the School of Ahl al-Bayt, providing interactive services to millions of pilgrims worldwide.'}
              </p>
            </div>

            {/* Core Systems Included */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-amber-200 font-serif-ar mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>{lang === 'ar' ? '٢. المنظومات والأنظمة المدمجة في المنصة' : '2. Integrated Systems & Digital Infrastructure'}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <span className="font-bold text-amber-300 block mb-1">✦ نظام الأرشيف البصري الفائق (Ultra-HD Loupe)</span>
                  <p className="text-stone-400">توثيق الـ 12 صورة للمعالم والشباك والأسلحة التاريخية مع عدسة فحص مجهري 2.5x وسجل متحفي معتمد.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <span className="font-bold text-amber-300 block mb-1">✦ نظام الزيارة بالإنابة وإصدار شهادة التبرك</span>
                  <p className="text-stone-400">تسجيل طلبات الزيارة للمحبين حول العالم وإصدار وثيقة تبرك رقمية رسمية بباركود أمني وختم معتمد.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <span className="font-bold text-amber-300 block mb-1">✦ نظام مواقيت الصلاة والبث الصوتي الروحي</span>
                  <p className="text-stone-400">مواقيت الصلوات الخمس وفق أفق كربلاء، بوصلة القبلة الدقيقة، ومشغل صوتي للزيارات والأدعية.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <span className="font-bold text-amber-300 block mb-1">✦ موسوعة أهل البيت وأصول العقيدة الخمسة</span>
                  <p className="text-stone-400">طرح عقلاني برهاني لأصول الدين، وسير المعصومين الـ 14، ومحطات ملحمة عاشوراء الموثقة.</p>
                </div>

              </div>
            </div>

            {/* Heritage Compliance */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-amber-200 font-serif-ar mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{lang === 'ar' ? '٣. معايير الدقة والالتزام العقائدي والأكاديمي' : '3. Academic & Theological Rigor'}</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300 list-disc list-inside">
                <li>اعتماد القرآن الكريم وصحاح الحديث النبوي ونهج البلاغة والصحيفة السجادية ومصادر كبار مراجع الطائفة.</li>
                <li>فهرسة التحف والسيوف والأسلحة الأثرية وفق معايير المجلس الدولي للمتاحف (ICOM).</li>
                <li>دعم كامل للغتين العربية والإنجليزية لتعريف الشعوب والمجتمعات الغربية بفكر أهل البيت الأصيل.</li>
                <li>تصميم بصري ملكي إسلامي وقور يخلو من أي شوائب رقمية أو ابتذال تجاري.</li>
              </ul>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-amber-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ar' ? 'جاهز للاعتماد والعرض أمام اللجنة المشرفة' : 'Ready for official Ataba evaluation'}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <Printer className="w-4 h-4" />
                <span>{lang === 'ar' ? 'طباعة ملف التقديم' : 'Print Dossier'}</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
