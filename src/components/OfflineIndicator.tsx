import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { Language } from '../types';

interface OfflineIndicatorProps {
  lang: Language;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ lang }) => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-2 rounded-full bg-amber-600/95 text-stone-950 font-bold px-4 py-1.5 text-xs shadow-xl border border-amber-400 animate-pulse">
      <WifiOff className="w-4 h-4 text-stone-950" />
      <span>{lang === 'ar' ? 'وضع غير متصل — البيانات مخزنة محلياً في جهازك' : 'Offline Mode — Operating from local cache'}</span>
    </div>
  );
};
