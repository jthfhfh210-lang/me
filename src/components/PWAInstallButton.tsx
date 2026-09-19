import React, { useState } from 'react';
import { Download, Smartphone, Check, X, Sparkles, Share2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';

interface PWAInstallButtonProps {
  lang: Language;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ lang }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running as installed application, display installed status badge
  if (isInstalled) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-bold shadow-sm">
        <Check className="w-3.5 h-3.5 text-emerald-400" />
        <span>{lang === 'ar' ? 'التطبيق مُثبّت' : 'App Installed'}</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const installed = await install();
      if (!installed) {
        setShowGuide(true);
      }
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-stone-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-950/60 border border-emerald-300 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        title={lang === 'ar' ? 'تثبيت التطبيق على جهازك' : 'Install App on your device'}
      >
        <Smartphone className="w-4 h-4 shrink-0 text-stone-950 animate-bounce" />
        <span className="whitespace-nowrap">
          {lang === 'ar' ? '📱 تثبيت تطبيق الأندرويد' : '📱 Install Android App'}
        </span>
        <Download className="w-3.5 h-3.5 text-stone-950" />
      </button>

      {/* Guided Installation Modal (Android Chrome & iOS Safari instructions) */}
      {showGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-stone-900 border-2 border-emerald-500/60 rounded-2xl p-6 shadow-2xl relative text-stone-100">
            <button
              onClick={() => setShowGuide(false)}
              className="absolute top-4 left-4 p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-emerald-300">
                  {lang === 'ar' ? 'تثبيت تطبيق الأندرويد' : 'Install Android Application'}
                </h3>
                <p className="text-xs text-stone-400">
                  {lang === 'ar' ? 'يعمل كتطبيق أصلي كامل بدون متصفح' : 'Full native standalone experience'}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-stone-300 mb-6 bg-stone-950/60 p-4 rounded-xl border border-stone-800">
              {isIOS ? (
                <>
                  <div className="font-bold text-amber-400 text-xs mb-1">
                    {lang === 'ar' ? 'خطوات التثبيت على آيفون / آيباد:' : 'Steps for iPhone / iPad:'}
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-800 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                    <span>{lang === 'ar' ? 'اضغط على زر المشاركة (Share ⬆️) في شريط المتصفح السفلي.' : 'Tap the Share button in Safari.'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-800 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                    <span>{lang === 'ar' ? 'اختر "إضافة إلى الشاشة الرئيسية" (Add to Home Screen ➕).' : 'Select "Add to Home Screen".'}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="font-bold text-emerald-400 text-xs mb-1">
                    {lang === 'ar' ? 'خطوات التثبيت على نظام أندرويد:' : 'Steps for Android:'}
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-800 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                    <span>{lang === 'ar' ? 'اضغط على زر الخيارات (الثلاث نقاط ⋮) في أعلى أو أسفل المتصفح.' : 'Tap menu (3 dots ⋮) in Chrome.'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-800 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                    <span>{lang === 'ar' ? 'اضغط على "تثبيت التطبيق" (Install app) أو "إضافة إلى الشاشة الرئيسية".' : 'Tap "Install App" or "Add to Home screen".'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-800 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                    <span>{lang === 'ar' ? 'سينزل التطبيق فوراً بأيقونة كربلاء الرسمية في قائمة تطبيقات هاتفك ويعمل أوفلاين!' : 'The app will appear with full offline functionality!'}</span>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setShowGuide(false)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-black text-sm cursor-pointer transition-colors shadow-lg"
            >
              {lang === 'ar' ? 'حسناً، فهمت' : 'Got it'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
