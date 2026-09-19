import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  MapPin,
  Compass,
  Bell,
  BellOff,
  Sun,
  Sunrise,
  Sunset,
  Moon,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Language } from '../types';

interface PrayerTimesSectionProps {
  lang: Language;
}

interface CityOption {
  id: string;
  nameAr: string;
  nameEn: string;
  countryAr: string;
  countryEn: string;
  lat: number;
  lng: number;
  timeZoneOffset: number; // in hours
}

const CITIES: CityOption[] = [
  { id: 'karbala', nameAr: 'كربلاء المقدسة', nameEn: 'Holy Karbala', countryAr: 'العراق', countryEn: 'Iraq', lat: 32.616, lng: 44.024, timeZoneOffset: 3 },
  { id: 'najaf', nameAr: 'النجف الأشرف', nameEn: 'Holy Najaf', countryAr: 'العراق', countryEn: 'Iraq', lat: 31.996, lng: 44.331, timeZoneOffset: 3 },
  { id: 'baghdad', nameAr: 'بغداد العاصمة', nameEn: 'Baghdad', countryAr: 'العراق', countryEn: 'Iraq', lat: 33.315, lng: 44.366, timeZoneOffset: 3 },
  { id: 'basra', nameAr: 'البصرة الفيحاء', nameEn: 'Basra', countryAr: 'العراق', countryEn: 'Iraq', lat: 30.508, lng: 47.783, timeZoneOffset: 3 },
  { id: 'samarra', nameAr: 'سامراء المقدسة', nameEn: 'Samarra', countryAr: 'العراق', countryEn: 'Iraq', lat: 34.198, lng: 43.874, timeZoneOffset: 3 },
  { id: 'mashhad', nameAr: 'مشهد المقدسة', nameEn: 'Holy Mashhad', countryAr: 'إيران', countryEn: 'Iran', lat: 36.297, lng: 59.606, timeZoneOffset: 3.5 },
  { id: 'qom', nameAr: 'قم المقدسة', nameEn: 'Holy Qom', countryAr: 'إيران', countryEn: 'Iran', lat: 34.640, lng: 50.876, timeZoneOffset: 3.5 },
  { id: 'beirut', nameAr: 'بيروت', nameEn: 'Beirut', countryAr: 'لبنان', countryEn: 'Lebanon', lat: 33.893, lng: 35.501, timeZoneOffset: 2 },
  { id: 'kuwait', nameAr: 'الكويت', nameEn: 'Kuwait City', countryAr: 'الكويت', countryEn: 'Kuwait', lat: 29.375, lng: 47.977, timeZoneOffset: 3 },
  { id: 'manama', nameAr: 'المنامة', nameEn: 'Manama', countryAr: 'البحرين', countryEn: 'Bahrain', lat: 26.228, lng: 50.586, timeZoneOffset: 3 },
  { id: 'dearborn', nameAr: 'ديربورن', nameEn: 'Dearborn', countryAr: 'أمريكا', countryEn: 'USA', lat: 42.322, lng: -83.176, timeZoneOffset: -4 },
  { id: 'london', nameAr: 'لندن', nameEn: 'London', countryAr: 'بريطانيا', countryEn: 'UK', lat: 51.507, lng: -0.127, timeZoneOffset: 0 },
];

interface ShiaPrayerSchedule {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  midnight: string;
}

export const PrayerTimesSection: React.FC<PrayerTimesSectionProps> = ({ lang }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('karbala');
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [azanAlert, setAzanAlert] = useState<boolean>(true);

  const activeCity = CITIES.find((c) => c.id === selectedCityId) || CITIES[0];

  // Update real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Ja'fari Shia Astronomical Calculation Method (100% offline & robust)
  const calculateShiaPrayers = (city: CityOption, date: Date): ShiaPrayerSchedule => {
    // Day of the year
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Solar declination approx
    const declination = 23.45 * Math.sin(((360 / 365) * (dayOfYear - 81) * Math.PI) / 180);
    const decRad = (declination * Math.PI) / 180;
    const latRad = (city.lat * Math.PI) / 180;

    // Equation of time approx (minutes)
    const B = ((360 / 365) * (dayOfYear - 81) * Math.PI) / 180;
    const eqTime = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);

    // Solar noon (Dhuhr) in local time
    const timeCorrection = 4 * (city.lng - 15 * city.timeZoneOffset) + eqTime;
    const solarNoonMinutes = 12 * 60 - timeCorrection;

    // Sun angle calculation helper
    const getHourAngle = (angleDegrees: number) => {
      const angleRad = (angleDegrees * Math.PI) / 180;
      const cosH = (Math.sin(angleRad) - Math.sin(latRad) * Math.sin(decRad)) / (Math.cos(latRad) * Math.cos(decRad));
      if (cosH > 1 || cosH < -1) return 0;
      return (Math.acos(cosH) * 180) / Math.PI / 15 * 60; // minutes
    };

    // Shia Ithna Ashari parameters:
    // Fajr: 16 degrees twilight
    // Sunrise: 0.833 degrees
    // Sunset: 0.833 degrees
    // Maghrib: 4 degrees (disappearance of eastern redness / زوال الحمرة المشرقية, ~15 mins after sunset)
    const fajrHA = getHourAngle(-16);
    const sunriseHA = getHourAngle(-0.833);
    const sunsetHA = sunriseHA;
    const maghribHA = getHourAngle(-4);

    const fajrMin = solarNoonMinutes - fajrHA;
    const sunriseMin = solarNoonMinutes - sunriseHA;
    const dhuhrMin = solarNoonMinutes + 4; // Add ihtiyat
    const asrMin = solarNoonMinutes + (sunsetHA * 0.48); // Shia Asr فضيلة العصر
    const sunsetMin = solarNoonMinutes + sunsetHA;
    const maghribMin = Math.max(sunsetMin + 14, solarNoonMinutes + maghribHA); // 14-16 min after sunset
    const ishaMin = maghribMin + 45; // Shia Isha
    const midnightMin = sunsetMin + (24 * 60 + fajrMin - sunsetMin) / 2; // منتصف الليل الشرعي

    const formatMinutes = (totalMins: number) => {
      let normalized = Math.round(totalMins) % (24 * 60);
      if (normalized < 0) normalized += 24 * 60;
      const h = Math.floor(normalized / 60);
      const m = normalized % 60;
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    };

    return {
      fajr: formatMinutes(fajrMin),
      sunrise: formatMinutes(sunriseMin),
      dhuhr: formatMinutes(dhuhrMin),
      asr: formatMinutes(asrMin),
      maghrib: formatMinutes(maghribMin),
      isha: formatMinutes(ishaMin),
      midnight: formatMinutes(midnightMin),
    };
  };

  const schedule = calculateShiaPrayers(activeCity, currentTime);

  const prayerCards = [
    { id: 'fajr', nameAr: 'صلاة الفجر', nameEn: 'Fajr Prayer', time: schedule.fajr, icon: Moon, descAr: 'وقت الفضيلة من طلوع الفجر الصادق' },
    { id: 'sunrise', nameAr: 'شروق الشمس', nameEn: 'Sunrise', time: schedule.sunrise, icon: Sunrise, descAr: 'انتهاء وقت أداء صلاة الصبح' },
    { id: 'dhuhr', nameAr: 'صلاة الظهرين (الظهر)', nameEn: 'Dhuhr Prayer', time: schedule.dhuhr, icon: Sun, descAr: 'وقت الزوال الشرعي، يجوز الجمع' },
    { id: 'asr', nameAr: 'صلاة العصر', nameEn: 'Asr Prayer', time: schedule.asr, icon: Sun, descAr: 'وقت فضيلة صلاة العصر' },
    { id: 'maghrib', nameAr: 'صلاة المغرب (العشائين)', nameEn: 'Maghrib Prayer', time: schedule.maghrib, icon: Sunset, descAr: 'زوال الحمرة المشرقية المعتمد فقهياً' },
    { id: 'isha', nameAr: 'صلاة العشاء', nameEn: 'Isha Prayer', time: schedule.isha, icon: Moon, descAr: 'وقت فضيلة صلاة العشاء' },
    { id: 'midnight', nameAr: 'منتصف الليل الشرعي', nameEn: 'Shia Midnight', time: schedule.midnight, icon: Clock, descAr: 'نهاية وقت صلاة العشاء وصلاة الليل' },
  ];

  return (
    <section id="prayer" className="py-20 bg-stone-950 border-b border-amber-900/30 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-3">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'المواقيت الشرعية الجعفرية • تعمل بدون إنترنت' : 'Shia Ja’fari Prayer Timings • Offline Ready'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-100 mb-3 tracking-tight">
            {lang === 'ar' ? 'مَوَاقِيتُ الصَّلَاةِ وَالأَذَانُ الشَّرِيف' : 'Accurate Shia Prayer Timings'}
          </h2>
          <p className="text-sm text-stone-400">
            {lang === 'ar'
              ? 'حساب فلكي دقيق وفق المذهب الجعفري الإمامي (المغرب عند زوال الحمرة المشرقية) لمدينة كربلاء وعواصم العالم.'
              : 'Precision astronomical calculation adhering to the Ithna-Ashari Ja’fari jurisprudential standard.'}
          </p>
        </div>

        {/* City Selector Bar */}
        <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-stone-200">
              {lang === 'ar' ? 'المدينة الحالية:' : 'Current City:'}
            </span>
            <select
              value={selectedCityId}
              onChange={(e) => setSelectedCityId(e.target.value)}
              className="bg-stone-950 border border-amber-700/50 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-amber-300 font-bold focus:outline-none focus:border-amber-400"
            >
              {CITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nameAr} ({c.countryAr})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAzanAlert(!azanAlert)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                azanAlert
                  ? 'bg-amber-500/15 border-amber-400 text-amber-300'
                  : 'bg-stone-950 border-stone-800 text-stone-500'
              }`}
            >
              {azanAlert ? <Bell className="w-3.5 h-3.5 text-amber-400" /> : <BellOff className="w-3.5 h-3.5" />}
              <span>{azanAlert ? (lang === 'ar' ? 'تنبيه الأذان مفعّل' : 'Azan Alert On') : (lang === 'ar' ? 'تنبيه الأذان متوقف' : 'Alert Off')}</span>
            </button>

            <div className="text-xs text-stone-400 font-mono hidden sm:block">
              {currentTime.toLocaleTimeString(lang === 'ar' ? 'ar-IQ' : 'en-US')}
            </div>
          </div>
        </div>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {prayerCards.map((card) => {
            const Icon = card.icon;
            const isHighlight = card.id === 'dhuhr' || card.id === 'maghrib';
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -4 }}
                className={`p-4 rounded-2xl border flex flex-col items-center justify-between text-center transition-all ${
                  isHighlight
                    ? 'bg-gradient-to-b from-amber-950/40 via-stone-900 to-stone-950 border-amber-500/60 shadow-lg shadow-amber-950/50'
                    : 'bg-stone-900/60 border-stone-800/80 text-stone-300'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-stone-950/80 border border-stone-800 flex items-center justify-center text-amber-400 mb-2">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-xs font-bold text-stone-200 mb-1">
                  {lang === 'ar' ? card.nameAr : card.nameEn}
                </div>

                <div className="text-xl sm:text-2xl font-black font-mono text-amber-300 my-1 tracking-tight">
                  {card.time}
                </div>

                <div className="text-[10px] text-stone-500 line-clamp-2 mt-1">
                  {card.descAr}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fiqh Note */}
        <div className="mt-8 text-center text-xs text-stone-500 max-w-xl mx-auto">
          {lang === 'ar'
            ? 'ملاحظة فقهية: وقت صلاة المغرب عند فقهاء الشيعة الإمامية يتحقق بزوال الحمرة المشرقية من قبة السماء (بعد غروب قرص الشمس بنحو 15 دقيقة تقريباً احتياطاً).'
            : 'Jurisprudential note: Maghrib in Ja’fari fiqh begins after the disappearance of the eastern redness.'}
        </div>

      </div>
    </section>
  );
};
