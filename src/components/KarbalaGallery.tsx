import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  Layers,
  Landmark,
  Shield,
  UploadCloud,
  Compass,
  CheckCircle2,
  Info,
  FileText,
  Search,
  Sliders,
  Printer,
  Eye,
  Award,
  ShieldAlert
} from 'lucide-react';
import { Language } from '../types';
import { curatedPhotos, GalleryPhoto } from '../data/galleryData';

interface KarbalaGalleryProps {
  lang: Language;
}

type VisualFilterMode = 'crisp' | 'royal' | 'studio' | 'original';

export const KarbalaGallery: React.FC<KarbalaGalleryProps> = ({ lang }) => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(curatedPhotos);
  const [activeCategory, setActiveCategory] = useState<'all' | 'shrines' | 'museum'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isPlayingSlideshow, setIsPlayingSlideshow] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [showCuratorialSpec, setShowCuratorialSpec] = useState<boolean>(false);
  const [visualMode, setVisualMode] = useState<VisualFilterMode>('crisp');
  
  // Interactive Loupe (Magnifying Glass) state
  const [loupeActive, setLoupeActive] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; relX: number; relY: number }>({
    x: 0,
    y: 0,
    relX: 50,
    relY: 50,
  });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredPhotos = photos.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const activePhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Handle slideshow interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingSlideshow && selectedPhotoIndex !== null) {
      interval = setInterval(() => {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : 0));
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isPlayingSlideshow, selectedPhotoIndex, filteredPhotos.length]);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setZoomLevel(1);
    setIsPlayingSlideshow(false);
    setShowCuratorialSpec(false);
    setLoupeActive(false);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    setIsPlayingSlideshow(false);
    setZoomLevel(1);
    setShowCuratorialSpec(false);
    setLoupeActive(false);
  };

  const navigateNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    setZoomLevel(1);
  };

  const navigatePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    setZoomLevel(1);
  };

  // Mouse move handler for interactive loupe
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const relX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const relY = Math.max(0, Math.min(100, (y / rect.height) * 100));
    setMousePos({ x, y, relX, relY });
  };

  // User upload handling
  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newPhotosList: GalleryPhoto[] = [];

    Array.from(files).forEach((file, idx) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        const newPhoto: GalleryPhoto = {
          id: `user-photo-${Date.now()}-${idx}`,
          photoNumber: photos.length + idx + 1,
          titleAr: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
          titleEn: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
          category: 'shrines',
          categoryLabelAr: 'صورة وثائقية جديدة',
          categoryLabelEn: 'New Documentation Photo',
          descriptionAr: 'صورة وثائقية مضافة مباشرة بدقة عالية للاعتماد والمعاينة المتحفية.',
          descriptionEn: 'High-definition documentary photograph imported for curatorial assessment.',
          detailsAr: `الملف: ${file.name} | حجم البيانات: ${(file.size / 1024).toFixed(1)} ك.ب | النوع: ${file.type}`,
          detailsEn: `File: ${file.name} | Size: ${(file.size / 1024).toFixed(1)} KB | Format: ${file.type}`,
          locationAr: 'كربلاء المقدسة',
          locationEn: 'Holy Karbala',
          image: result,
          isUserUploaded: true,
          curatorial: {
            catalogNumber: `USR-IMP-${Date.now().toString().slice(-4)}`,
            period: 'التوثيق الرقمي المعاصر',
            materialsAr: 'بيانات بصرية رقمية عالية الكثافة والوضوح',
            materialsEn: 'High-density raw optical documentary capture',
            dimensionsAr: 'الأبعاد: دقة الكاميرا الأصلية',
            dimensionsEn: 'Dimensions: Source capture matrix',
            provenanceAr: 'إيداع مباشر عبر بوابة العتبة الرقمية',
            provenanceEn: 'Direct repository deposit via Shrine digital gateway',
            craftsmanshipAr: 'توثيق فوتوغرافي تخصصي',
            craftsmanshipEn: 'Specialist field documentary photography',
            inscriptionsAr: 'توثيق معالم الزيارة والتراث',
            inscriptionsEn: 'Visual record of sacred heritage',
            conditionStatusAr: 'أصلية ونقية',
            conditionStatusEn: 'Pristine raw digital state',
          },
        };
        newPhotosList.push(newPhoto);
        if (newPhotosList.length === files.length) {
          setPhotos((prev) => [...newPhotosList, ...prev]);
          setUploadMessage(
            lang === 'ar'
              ? `تم بنجاح إضافة وتوثيق ${newPhotosList.length} صورة في المعرض!`
              : `Successfully cataloged ${newPhotosList.length} photo(s) in the archive!`
          );
          setTimeout(() => setUploadMessage(null), 4000);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Get CSS filter based on visual mode
  const getFilterStyle = () => {
    switch (visualMode) {
      case 'crisp':
        return 'contrast(1.10) brightness(1.02) saturate(1.08)';
      case 'royal':
        return 'contrast(1.15) brightness(1.04) saturate(1.14) sepia(0.06)';
      case 'studio':
        return 'contrast(1.22) brightness(1.03) saturate(1.02)';
      case 'original':
      default:
        return 'none';
    }
  };

  return (
    <section id="karbala-gallery" className="py-24 bg-stone-950 relative overflow-hidden border-b border-stone-800">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'الأرشيف البصري المعتمد والتوثيق المتحفي التخصصي' : 'Curatorial Visual Archive & Sacred Armory'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-amber-100 font-serif-ar tracking-wide mb-6"
          >
            {lang === 'ar' ? 'معرض كربلاء المقدسة ومتحف النفائس' : 'The Holy Karbala & Treasury Gallery'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 font-sans-ar text-base sm:text-lg leading-relaxed"
          >
            {lang === 'ar'
              ? 'أرشيف وثائقي فائق الدقة يضم الـ 12 صورة الأصلية لمعالم العتبتين الحسينية والعباسية، والشباك الفضي، وقبة المرايا، مع التحف والسيوف والأسلحة التاريخية النادرة المفهرسة وفق المعايير المتحفية الدولية.'
              : 'A master curatorial exhibition featuring 12 authentic archival plates of the holy shrines, the consecrated silver Zarih, and rare battle armor from the shrine museum, cataloged to international heritage standards.'}
          </motion.p>
        </div>

        {/* Upload Alert Toast */}
        <AnimatePresence>
          {uploadMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto mb-8 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-sm flex items-center justify-between shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{uploadMessage}</span>
              </div>
              <button
                onClick={() => setUploadMessage(null)}
                className="text-emerald-400 hover:text-emerald-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Controls & Action Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-800/80">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`relative px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-amber-600 text-stone-950 shadow-lg shadow-amber-900/40'
                  : 'bg-stone-900 text-stone-300 hover:text-amber-200 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'ar' ? `كل الصور الموثقة (${photos.length})` : `All Records (${photos.length})`}</span>
            </button>

            <button
              onClick={() => setActiveCategory('shrines')}
              className={`relative px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === 'shrines'
                  ? 'bg-amber-600 text-stone-950 shadow-lg shadow-amber-900/40'
                  : 'bg-stone-900 text-stone-300 hover:text-amber-200 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>{lang === 'ar' ? 'معالم العتبات والضريح المقدس' : 'Sacred Shrines & Sanctuary'}</span>
            </button>

            <button
              onClick={() => setActiveCategory('museum')}
              className={`relative px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === 'museum'
                  ? 'bg-amber-600 text-stone-950 shadow-lg shadow-amber-900/40'
                  : 'bg-stone-900 text-stone-300 hover:text-amber-200 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>{lang === 'ar' ? 'متحف النفائس والتراث الحربي' : 'Treasury & Armory Relics'}</span>
            </button>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-3">
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-amber-600/40 text-amber-300 text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-md"
              title={lang === 'ar' ? 'إيداع وتوثيق صور إضافية' : 'Deposit custom photos'}
            >
              <UploadCloud className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'إيداع صور إضافية' : 'Deposit Photos'}</span>
            </button>
          </div>
        </div>

        {/* Drag & Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            handleFileUpload(e.dataTransfer.files);
          }}
          className={`transition-all duration-300 rounded-3xl p-1 mb-8 ${
            isDragOver ? 'border-2 border-dashed border-amber-400 bg-amber-950/30' : ''
          }`}
        >
          {isDragOver && (
            <div className="text-center py-8 text-amber-300 font-bold flex items-center justify-center gap-2">
              <UploadCloud className="w-6 h-6 animate-bounce" />
              <span>{lang === 'ar' ? 'أفلت الصور هنا لإيداعها في السجل التوثيقي فوراً!' : 'Drop photos here to index them immediately!'}</span>
            </div>
          )}

          {/* Photos Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-stone-900/90 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/60 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-950">
                    <img
                      src={photo.image}
                      alt={lang === 'ar' ? photo.titleAr : photo.titleEn}
                      referrerPolicy="no-referrer"
                      style={{ filter: getFilterStyle() }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Badges */}
                    <div className="absolute top-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-lg bg-stone-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shadow-md">
                        {photo.curatorial.catalogNumber}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-950/85 backdrop-blur-md border border-stone-700 text-stone-300 text-xs font-medium flex items-center gap-1.5 shadow-md">
                        {photo.category === 'shrines' ? (
                          <Landmark className="w-3 h-3 text-amber-400" />
                        ) : (
                          <Shield className="w-3 h-3 text-emerald-400" />
                        )}
                        <span>{lang === 'ar' ? photo.categoryLabelAr : photo.categoryLabelEn}</span>
                      </span>
                    </div>

                    {/* Quick Expand Button */}
                    <button
                      onClick={() => openLightbox(index)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-950/60 backdrop-blur-[2px] cursor-pointer"
                      title={lang === 'ar' ? 'فحص الدقة والبيانات المتحفية' : 'Curatorial Inspection & Details'}
                    >
                      <div className="w-14 h-14 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-xl font-bold">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </button>
                  </div>

                  {/* Caption Content */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-amber-100 font-serif-ar mb-2 group-hover:text-amber-300 transition-colors line-clamp-1">
                        {lang === 'ar' ? photo.titleAr : photo.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 font-sans-ar line-clamp-2 leading-relaxed mb-4">
                        {lang === 'ar' ? photo.descriptionAr : photo.descriptionEn}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                      <div className="flex items-center gap-1 text-amber-400/80">
                        <Compass className="w-3.5 h-3.5" />
                        <span className="line-clamp-1">{lang === 'ar' ? photo.locationAr : photo.locationEn}</span>
                      </div>
                      <button
                        onClick={() => openLightbox(index)}
                        className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'السجل الفني' : 'Curatorial Spec'}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center text-xs text-stone-400 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-amber-500/80" />
          <span>
            {lang === 'ar'
              ? 'انقر على أي صورة لفتح المعاينة الفائقة واستخدام عدسة الفحص المجهري وتصفح السجل المتحفي المعتمد'
              : 'Click any photo to activate Ultra-HD inspection loupe and view official curatorial archive specifications'}
          </span>
        </div>
      </div>

      {/* Lightbox Modal with Ultra-HD Curatorial Loupe */}
      <AnimatePresence>
        {activePhoto && selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Toolbar */}
            <div className="p-4 sm:px-8 bg-stone-950/85 border-b border-stone-800/80 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-sm font-bold border border-amber-500/40">
                  {activePhoto.curatorial.catalogNumber}
                </span>
                <h4 className="text-stone-200 font-bold text-sm sm:text-base hidden sm:block">
                  {lang === 'ar' ? activePhoto.titleAr : activePhoto.titleEn}
                </h4>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                
                {/* Visual Clarity Mode Selector */}
                <div className="hidden md:flex items-center bg-stone-900 border border-stone-800 rounded-xl p-1 gap-1">
                  <button
                    onClick={() => setVisualMode('crisp')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      visualMode === 'crisp' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'
                    }`}
                    title="وضوح فائق HDR"
                  >
                    {lang === 'ar' ? 'فائق الوضوح' : 'Ultra-Crisp'}
                  </button>
                  <button
                    onClick={() => setVisualMode('royal')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      visualMode === 'royal' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'
                    }`}
                    title="الإضاءة الملكية"
                  >
                    {lang === 'ar' ? 'ملكي دافئ' : 'Royal Glow'}
                  </button>
                  <button
                    onClick={() => setVisualMode('original')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      visualMode === 'original' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'
                    }`}
                    title="الأصل الطبيعي"
                  >
                    {lang === 'ar' ? 'طبيعي' : 'Natural'}
                  </button>
                </div>

                {/* Ultra-HD Loupe Toggle Button */}
                <button
                  onClick={() => setLoupeActive(!loupeActive)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border cursor-pointer transition-colors ${
                    loupeActive
                      ? 'bg-amber-500 text-stone-950 border-amber-400'
                      : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                  title={lang === 'ar' ? 'تفعيل عدسة الفحص المجهري' : 'Toggle Inspection Loupe'}
                >
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {lang === 'ar' ? (loupeActive ? 'إلغاء العدسة' : 'عدسة فحص 2.5x') : 'Loupe 2.5x'}
                  </span>
                </button>

                {/* Curatorial Spec Sheet Toggle */}
                <button
                  onClick={() => setShowCuratorialSpec(!showCuratorialSpec)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border cursor-pointer transition-colors ${
                    showCuratorialSpec
                      ? 'bg-amber-500 text-stone-950 border-amber-400'
                      : 'bg-stone-900 text-amber-300 border-amber-600/40 hover:bg-stone-800'
                  }`}
                  title={lang === 'ar' ? 'عرض السجل الفني والمتحفي' : 'Toggle Curatorial Spec'}
                >
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {lang === 'ar' ? 'السجل المتحفي' : 'Spec Sheet'}
                  </span>
                </button>

                {/* Slideshow Button */}
                <button
                  onClick={() => setIsPlayingSlideshow(!isPlayingSlideshow)}
                  className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border cursor-pointer transition-colors ${
                    isPlayingSlideshow
                      ? 'bg-amber-500 text-stone-950 border-amber-400'
                      : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                  title={isPlayingSlideshow ? 'إيقاف مؤقت' : 'تشغيل العرض التلقائي'}
                >
                  {isPlayingSlideshow ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                {/* Zoom Controls */}
                <button
                  onClick={() => setZoomLevel((z) => (z === 1 ? 1.5 : z === 1.5 ? 2 : 1))}
                  className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 cursor-pointer"
                  title="تكبير"
                >
                  {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-200 cursor-pointer transition-colors"
                  title="إغلاق (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Stage Area */}
            <div className="relative flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden">
              
              {/* Previous Button */}
              <button
                onClick={navigatePrev}
                className="absolute left-4 sm:left-8 z-30 p-3 sm:p-4 rounded-full bg-stone-900/80 hover:bg-amber-600 text-stone-200 hover:text-stone-950 border border-stone-800 hover:border-amber-400 transition-all cursor-pointer shadow-2xl hover:scale-110"
                title={lang === 'ar' ? 'السابق (سهم يسار)' : 'Previous (Left Arrow)'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={navigateNext}
                className="absolute right-4 sm:right-8 z-30 p-3 sm:p-4 rounded-full bg-stone-900/80 hover:bg-amber-600 text-stone-200 hover:text-stone-950 border border-stone-800 hover:border-amber-400 transition-all cursor-pointer shadow-2xl hover:scale-110"
                title={lang === 'ar' ? 'التالي (سهم يمين)' : 'Next (Right Arrow)'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Active Image Container with Loupe */}
              <motion.div
                key={activePhoto.id}
                ref={imageContainerRef}
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`relative max-w-5xl max-h-[62vh] sm:max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-stone-800 shadow-2xl bg-stone-950 ${
                  loupeActive ? 'cursor-crosshair' : ''
                }`}
              >
                <img
                  src={activePhoto.image}
                  alt={lang === 'ar' ? activePhoto.titleAr : activePhoto.titleEn}
                  referrerPolicy="no-referrer"
                  style={{ filter: getFilterStyle() }}
                  className="max-w-full max-h-[62vh] sm:max-h-[70vh] object-contain select-none"
                />

                {/* Ultra-HD Inspection Loupe (Magnifying Glass) */}
                {loupeActive && (
                  <div
                    style={{
                      left: `${mousePos.x - 85}px`,
                      top: `${mousePos.y - 85}px`,
                      backgroundImage: `url(${activePhoto.image})`,
                      backgroundPosition: `${mousePos.relX}% ${mousePos.relY}%`,
                      backgroundSize: '280%',
                    }}
                    className="absolute w-44 h-44 rounded-full border-4 border-amber-400 shadow-2xl pointer-events-none z-30 overflow-hidden bg-no-repeat bg-stone-950"
                  >
                    <div className="absolute inset-0 bg-amber-500/5 pointer-events-none" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-stone-950/80 text-[10px] text-amber-300 font-mono font-bold border border-amber-500/40">
                      2.5x HD LOUPE
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Curatorial Spec Modal Sheet Overlay */}
              <AnimatePresence>
                {showCuratorialSpec && (
                  <motion.div
                    initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
                    className="absolute top-4 bottom-4 right-4 sm:right-8 w-full max-w-md bg-stone-950/95 border border-amber-600/50 rounded-3xl p-6 shadow-2xl z-40 overflow-y-auto backdrop-blur-2xl text-stone-200"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400" />
                        <h4 className="font-bold text-base text-amber-200 font-serif-ar">
                          {lang === 'ar' ? 'السجل المتحفي المعتمد' : 'Curatorial Spec Sheet'}
                        </h4>
                      </div>
                      <button
                        onClick={() => setShowCuratorialSpec(false)}
                        className="p-1 rounded-lg bg-stone-900 text-stone-400 hover:text-stone-200 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="mt-4 space-y-4 text-xs sm:text-sm">
                      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-between">
                        <span className="text-amber-400 font-semibold">{lang === 'ar' ? 'رقم القيد الفهرسي:' : 'Catalog No:'}</span>
                        <span className="font-mono font-bold text-amber-200">{activePhoto.curatorial.catalogNumber}</span>
                      </div>

                      <div>
                        <span className="text-stone-400 font-semibold block mb-1">{lang === 'ar' ? 'الحقبة والتاريخ:' : 'Period & Era:'}</span>
                        <p className="text-stone-200 bg-stone-900/70 p-2.5 rounded-xl border border-stone-800">
                          {activePhoto.curatorial.period}
                        </p>
                      </div>

                      <div>
                        <span className="text-stone-400 font-semibold block mb-1">{lang === 'ar' ? 'المواد الخام المكونة:' : 'Materials:'}</span>
                        <p className="text-stone-200 bg-stone-900/70 p-2.5 rounded-xl border border-stone-800">
                          {lang === 'ar' ? activePhoto.curatorial.materialsAr : activePhoto.curatorial.materialsEn}
                        </p>
                      </div>

                      <div>
                        <span className="text-stone-400 font-semibold block mb-1">{lang === 'ar' ? 'القياسات والأبعاد والوزن:' : 'Dimensions & Mass:'}</span>
                        <p className="text-stone-200 bg-stone-900/70 p-2.5 rounded-xl border border-stone-800">
                          {lang === 'ar' ? activePhoto.curatorial.dimensionsAr : activePhoto.curatorial.dimensionsEn}
                        </p>
                      </div>

                      <div>
                        <span className="text-stone-400 font-semibold block mb-1">{lang === 'ar' ? 'تقنية الصنع والحرفية:' : 'Craftsmanship Technique:'}</span>
                        <p className="text-stone-200 bg-stone-900/70 p-2.5 rounded-xl border border-stone-800">
                          {lang === 'ar' ? activePhoto.curatorial.craftsmanshipAr : activePhoto.curatorial.craftsmanshipEn}
                        </p>
                      </div>

                      <div>
                        <span className="text-stone-400 font-semibold block mb-1">{lang === 'ar' ? 'النقوش والنصوص الشريفة:' : 'Inscriptions & Epigraphy:'}</span>
                        <p className="text-amber-300 font-serif-ar bg-amber-950/20 p-2.5 rounded-xl border border-amber-600/30 leading-relaxed">
                          «{lang === 'ar' ? activePhoto.curatorial.inscriptionsAr : activePhoto.curatorial.inscriptionsEn}»
                        </p>
                      </div>

                      <div>
                        <span className="text-stone-400 font-semibold block mb-1">{lang === 'ar' ? 'الحالة الحفظية والبيئية:' : 'Conservation Status:'}</span>
                        <p className="text-emerald-300 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-600/30">
                          ✓ {lang === 'ar' ? activePhoto.curatorial.conditionStatusAr : activePhoto.curatorial.conditionStatusEn}
                        </p>
                      </div>

                      {/* Print and Official Stamp */}
                      <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>معتمد لدى سجل نفائس العتبة</span>
                        </div>
                        <button
                          onClick={() => window.print()}
                          className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>{lang === 'ar' ? 'طباعة الوثيقة' : 'Print Spec'}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Details Drawer */}
            <div className="bg-stone-950/90 border-t border-stone-800/80 p-4 sm:px-8 py-5 z-20">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
                      {lang === 'ar' ? activePhoto.categoryLabelAr : activePhoto.categoryLabelEn}
                    </span>
                    <span className="text-xs text-stone-400 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-amber-400" />
                      {lang === 'ar' ? activePhoto.locationAr : activePhoto.locationEn}
                    </span>
                    <span className="text-xs text-amber-400/80 font-mono">
                      #{activePhoto.curatorial.catalogNumber}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 font-serif-ar mb-1">
                    {lang === 'ar' ? activePhoto.titleAr : activePhoto.titleEn}
                  </h3>
                  <p className="text-stone-300 font-sans-ar text-xs sm:text-sm leading-relaxed max-w-3xl">
                    {lang === 'ar' ? activePhoto.descriptionAr : activePhoto.descriptionEn}
                  </p>
                  <p className="text-amber-400/90 font-sans-ar text-xs mt-1.5 leading-relaxed">
                    ✦ {lang === 'ar' ? activePhoto.detailsAr : activePhoto.detailsEn}
                  </p>
                </div>

                {/* Thumbnails strip */}
                <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1 shrink-0">
                  {filteredPhotos.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => openLightbox(idx)}
                      className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        idx === selectedPhotoIndex
                          ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/30'
                          : 'border-stone-800 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.titleAr}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
