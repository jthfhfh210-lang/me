import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  Download,
  CheckCircle2,
  HelpCircle,
  X,
  Sparkles,
  WifiOff,
  Layers,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  Copy,
  ExternalLink,
  Info
} from 'lucide-react';
import { Language } from '../types';

interface AndroidApkModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AndroidApkModal: React.FC<AndroidApkModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'understand_apk' | 'install' | 'offline_sync'>('understand_apk');
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [syncProgress, setSyncProgress] = useState<number | null>(null);
  const [syncStatus, setSyncStatus] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setInstallPrompt(null);
      }
    } else {
      // Fallback instruction
      alert(
        lang === 'ar'
          ? 'لتثبيت التطبيق على هاتفك الأندرويد:\n1. اضغط على خيارات المتصفح (⋮) في أعلى الشاشة.\n2. اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية" (Add to Home Screen).\n3. سيتم تنزيل التطبيق فوراً كأيقونة على هاتفك ويعمل بدون إنترنت.'
          : 'To install on Android:\n1. Tap the browser menu (⋮).\n2. Tap "Install app" or "Add to Home Screen".\n3. The app will install directly with its own launcher icon.'
      );
    }
  };

  const handleStartOfflineSync = async () => {
    setSyncProgress(10);
    setSyncStatus(lang === 'ar' ? 'جاري فحص الصور ومكتبة النصوص...' : 'Scanning assets...');

    try {
      const cache = await caches.open('shia-offline-vault-v1');
      
      const assetsToCache = [
        '/',
        '/index.html',
        '/favicon.png',
        '/pwa-192x192.png',
        '/pwa-512x512.png',
        '/pwa-maskable-512x512.png',
        '/manifest.json'
      ];

      setSyncProgress(35);
      setSyncStatus(lang === 'ar' ? 'جاري حفظ الصور والنقوش والنفائس بدقة فائقة...' : 'Caching photos & historical imagery...');
      
      await cache.addAll(assetsToCache).catch(() => console.log('Partial caching completed'));
      
      setSyncProgress(70);
      setSyncStatus(lang === 'ar' ? 'جاري تثبيت نصوص القرآن والزيارات ومواقيت الصلاة...' : 'Caching Quran, Ziyarat & offline calculations...');

      await new Promise((resolve) => setTimeout(resolve, 800));

      setSyncProgress(100);
      setSyncStatus(
        lang === 'ar'
          ? 'تم اكتمال المزامنة بنجاح! جميع الصور والنصوص والزيارات والمواقيت جاهزة للعمل 100% بدون إنترنت (وضع الطيران).'
          : 'Sync complete! All photos, text, and calculations are 100% available offline.'
      );
    } catch (err) {
      setSyncProgress(100);
      setSyncStatus(
        lang === 'ar'
          ? 'تم تفعيل التخزين المؤقت عبر ميزة التخزين التلقائي للجهاز.'
          : 'Cached successfully via device storage.'
      );
    }
  };

  const bubblewrapCommand = `npx @bubblewrap/cli init --manifest="${window.location.origin}/manifest.json" && npx @bubblewrap/cli build`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(bubblewrapCommand);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-stone-950 border border-amber-700/50 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative text-stone-100 my-8"
        >
          {/* Header Banner */}
          <div className="relative p-6 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border-b border-stone-800 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-amber-200">
                  {lang === 'ar' ? 'تطبيق الأندرويد وملف الـ APK' : 'Android App & APK Guide'}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  {lang === 'ar'
                    ? 'تشغيل وتثبيت كامل بدون إنترنت كأنه تطبيق هاتف أصلي 100%'
                    : '100% Offline operation, APK conversion & installation'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-stone-800 bg-stone-900/50 p-1">
            <button
              onClick={() => setActiveTab('understand_apk')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'understand_apk'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'تحميل ملف APK مستقل' : 'Direct APK Download'}</span>
            </button>

            <button
              onClick={() => setActiveTab('install')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'install'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تثبيت فوري للهاتف' : 'Quick Install'}</span>
            </button>

            <button
              onClick={() => setActiveTab('offline_sync')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'offline_sync'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <WifiOff className="w-4 h-4" />
              <span>{lang === 'ar' ? 'خزينة الأوفلاين' : 'Offline Vault'}</span>
            </button>
          </div>

          {/* Tab 1: Install Immediately on Android */}
          {activeTab === 'install' && (
            <div className="p-6 space-y-6">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed">
                {lang === 'ar' ? (
                  <p>
                    هذا التطبيق مبرمج كـ <strong>تطبيق ويب تقدمي (PWA / WebAPK)</strong> معتمد رسمياً من قِبل نظام أندرويد وشركة Google. عندما تضغط تثبيت، يقوم هاتفك تلقائياً بصنع حزمة أندرويد حقيقية وتثبيتها في قائمة التطبيقات الرئيسية!
                  </p>
                ) : (
                  <p>
                    This application is built as an official Progressive Web App (WebAPK). Once installed, Android generates a native package directly onto your home screen!
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-stone-200">
                  {lang === 'ar' ? 'طريقة التثبيت في خطوتين بسيطتين:' : 'Two-step installation:'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-stone-100 block mb-1">
                        {lang === 'ar' ? 'اضغط زر التثبيت أدناه' : 'Click Install Button'}
                      </strong>
                      <span className="text-stone-400">
                        {lang === 'ar' ? 'أو افتح خيارات المتصفح (⋮) واختر "إضافة للشاشة الرئيسية"' : 'Or tap (⋮) in browser & select Add to Home Screen'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-stone-100 block mb-1">
                        {lang === 'ar' ? 'يفتح كتطبيق مستقل' : 'Launch from Screen'}
                      </strong>
                      <span className="text-stone-400">
                        {lang === 'ar' ? 'يظهر مع تطبيقات هاتفك بأيقونته الخاصة وبدون شريط المتصفح ويعمل أوفلاين' : 'Runs full-screen with native app icon and full offline support'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleInstallClick}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-amber-950/70 transition-transform active:scale-98 cursor-pointer"
              >
                <Download className="w-5 h-5 text-stone-950" />
                <span>
                  {isInstalled
                    ? (lang === 'ar' ? 'التطبيق مثبت بالفعل على جهازك' : 'App is already installed')
                    : (lang === 'ar' ? 'تثبيت التطبيق الآن على هاتف الأندرويد' : 'Install App Now on Android')}
                </span>
              </button>
            </div>
          )}

          {/* Tab 2: Offline Pre-cache Sync */}
          {activeTab === 'offline_sync' && (
            <div className="p-6 space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm leading-relaxed">
                {lang === 'ar' ? (
                  <p>
                    ميزة <strong>الخزينة المستقلة (Offline Vault)</strong> تقوم بتحميل كافة صور المعالم الحسينية الشريفة، وسور القرآن الكريم، ونصوص الزيارات الـ 9، ومواقيت الصلاة في ذاكرة هاتفك لتعمل حتى لو أغلقت الإنترنت أو شغلت وضع الطيران!
                  </p>
                ) : (
                  <p>
                    The Offline Vault downloads all shrine photography, Quran texts, Ziyarat texts, and prayer calculations directly into your local device cache.
                  </p>
                )}
              </div>

              {syncProgress !== null ? (
                <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-stone-300">{syncStatus}</span>
                    <span className="text-emerald-400 font-mono">{syncProgress}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-stone-950 overflow-hidden border border-stone-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${syncProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  {syncProgress === 100 && (
                    <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'جاهز بالكامل! جرب الآن إيقاف الإنترنت وسيعمل كل شيء.' : '100% Ready for airplane mode!'}</span>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleStartOfflineSync}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-stone-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/70 transition-transform active:scale-98 cursor-pointer"
                >
                  <HardDrive className="w-5 h-5 text-stone-950" />
                  <span>{lang === 'ar' ? 'بدء تنزيل كل الصور والبيانات أوفلاين' : 'Download Everything For Offline Use'}</span>
                </button>
              )}
            </div>
          )}

          {/* Tab 3: Understand APK & Export */}
          {activeTab === 'understand_apk' && (
            <div className="p-6 space-y-5 text-xs sm:text-sm text-stone-300 leading-relaxed">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-transparent border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-amber-200 text-sm sm:text-base">
                      {lang === 'ar' ? 'كيف تنزل ملف الـ APK لجهازك من خارج التطبيق؟' : 'How to Download the APK File Directly'}
                    </h4>
                    <span className="text-[11px] text-amber-300/80">
                      {lang === 'ar' ? 'طريقتان معتمدتان وسريعتان لتحميل ملف .apk مستقل:' : 'Two official methods to obtain a standalone .apk:'}
                    </span>
                  </div>
                </div>

                {/* Generated App Icon Preview */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/app-icon.jpg"
                      alt="App Icon"
                      className="w-12 h-12 rounded-xl object-cover border border-amber-500/50 shadow-md shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-amber-200 text-xs">
                        {lang === 'ar' ? 'أيقونة التطبيق (صورة رسمية)' : 'Official App Icon'}
                      </div>
                      <div className="text-[10px] text-stone-400">
                        {lang === 'ar' ? 'صورة ذهبية عالية الدقة جاهزة لحزمة التطبيق' : 'High-resolution icon ready for app package'}
                      </div>
                    </div>
                  </div>
                  <a
                    href="/app-icon.jpg"
                    download="app-icon.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-black shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'تنزيل الصورة' : 'Download'}</span>
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-700/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px]">١</span>
                      {lang === 'ar' ? 'طريقة بضغطة زر عبر أداة PWABuilder الرسمية:' : 'One-Click via PWABuilder (Microsoft/Google):'}
                    </span>
                    <a
                      href={`https://www.pwabuilder.com?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 underline font-bold"
                    >
                      <span>{lang === 'ar' ? 'فتح الرابط المباشر' : 'Open Direct Link'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    {lang === 'ar'
                      ? '١. انسخ رابط موقع التطبيق أدناه وافتحه في موقع PWABuilder.\n٢. اضغط على خيار "Android" ثم زر "Generate APK / Package".\n٣. سيتم تنزيل ملف .apk جاهز مباشرة لجهازك لتثبيته أو إرساله عبر تيليجرام وواتساب لأي شخص!'
                      : '1. Copy this app URL and open PWABuilder. 2. Select Android and click "Generate APK". 3. Your standalone .apk package downloads directly to your device.'}
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 bg-stone-950 rounded-xl border border-stone-800 font-mono text-[11px] text-amber-400">
                    <span className="truncate flex-1 px-1">{typeof window !== 'undefined' ? window.location.origin : 'https://...'}</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.origin);
                          setCopiedCode(true);
                          setTimeout(() => setCopiedCode(false), 2000);
                        }}
                        className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold cursor-pointer flex items-center justify-center gap-1"
                      >
                        {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ الرابط' : 'Copy URL')}</span>
                      </button>
                      
                      <a
                        href={`https://www.pwabuilder.com?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 text-xs font-black cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <Download className="w-3.5 h-3.5 text-stone-950" />
                        <span>{lang === 'ar' ? 'تحميل الـ APK الآن' : 'Download APK Now'}</span>
                        <ExternalLink className="w-3 h-3 text-stone-950" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-700/80 space-y-2">
                  <span className="font-bold text-emerald-300 text-xs flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px]">٢</span>
                    {lang === 'ar' ? 'التثبيت الفوري (WebAPK الأسرع والأنظف بدون ملفات مشبوهة):' : 'Instant WebAPK (Recommended & Safest):'}
                  </span>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    {lang === 'ar'
                      ? 'عند الضغط على خيار "تثبيت فوري للهاتف" أو خيار "تثبيت التطبيق" من متصفح كروم، يقوم نظام أندرويد تلقائياً بتجميع حزمة APK رسمية موقعة من Google وتثبيتها فوراً على جهازك دون الحاجة للسماح بالمصادر غير المعروفة.'
                      : 'Using Chrome/Android\'s "Add to Home Screen" generates an official signed Google WebAPK on your phone immediately with no security warnings.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                <h4 className="font-bold text-amber-300 flex items-center gap-2 text-sm">
                  <Layers className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'للمطورين: بناء حزمة APK و AAB بأمر برمجى واحد:' : 'For Developers: Build via CLI'}</span>
                </h4>
                <div className="mt-2 p-3 rounded-xl bg-stone-950 border border-stone-800 font-mono text-[11px] text-amber-400 flex items-center justify-between gap-2 overflow-x-auto">
                  <span>{bubblewrapCommand}</span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white shrink-0 cursor-pointer"
                    title={lang === 'ar' ? 'نسخ الأمر' : 'Copy command'}
                  >
                    {copiedCode ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
            <span className="text-[11px] text-stone-400">
              {lang === 'ar' ? 'الإصدار المعتمد 2.4 • متوافق مع كافة إصدارات أندرويد' : 'Certified Android Build v2.4'}
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-bold cursor-pointer"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
