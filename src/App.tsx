import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChapterViewer } from './components/ChapterViewer';
import { BookOverview } from './components/BookOverview';
import { PdfPurchaseModal } from './components/PdfPurchaseModal';
import { SearchModal } from './components/SearchModal';
import { AuthorModal } from './components/AuthorModal';
import { 
  getChapterById, 
  getVolumeById, 
  getNextChapter, 
  getPreviousChapter, 
  allChapters, 
  allVolumes 
} from './data/volumes';
import { BookOpen, Home, ChevronRight, Download, ShieldAlert, MessageCircle, ExternalLink } from 'lucide-react';
import { getWhatsAppBuyUrl } from './data/bookMeta';

export function App() {
  const [activeChapterId, setActiveChapterId] = useState<number>(() => {
    const saved = localStorage.getItem('fyzie_last_chapter_id');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [viewMode, setViewMode] = useState<'overview' | 'chapter'>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>(() => {
    const saved = localStorage.getItem('fyzie_font_size');
    return (saved as 'sm' | 'md' | 'lg') || 'md';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [securityToast, setSecurityToast] = useState<string | null>(null);

  const [readChapterIds, setReadChapterIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('fyzie_read_chapters');
    return saved ? JSON.parse(saved) : [];
  });

  // Current chapter & volume resolution
  const currentChapter = getChapterById(activeChapterId) || allChapters[0];
  const currentVolume = getVolumeById(currentChapter.volumeId) || allVolumes[0];

  const nextChapter = getNextChapter(activeChapterId);
  const prevChapter = getPreviousChapter(activeChapterId);

  // Save active chapter
  useEffect(() => {
    localStorage.setItem('fyzie_last_chapter_id', activeChapterId.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeChapterId]);

  // Save read chapters
  useEffect(() => {
    localStorage.setItem('fyzie_read_chapters', JSON.stringify(readChapterIds));
  }, [readChapterIds]);

  // Save font size
  useEffect(() => {
    localStorage.setItem('fyzie_font_size', fontSize);
  }, [fontSize]);

  // Keyboard shortcut Cmd/Ctrl + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Anti-scraping protection: Warn on print shortcut Ctrl+P
  useEffect(() => {
    const handlePrintPrevent = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setSecurityToast('සම්පූර්ණ පොත PDF ලෙස මුද්‍රණය කිරීමට අවසර නැත. නිල PDF එක ලබා ගැනීමට කරුණාකර නිල ද්වාරය භාවිතා කරන්න.');
        setTimeout(() => setSecurityToast(null), 4000);
        setIsPdfModalOpen(true);
      }
    };
    window.addEventListener('keydown', handlePrintPrevent);
    return () => window.removeEventListener('keydown', handlePrintPrevent);
  }, []);

  const handleSelectChapter = (chapterId: number) => {
    setActiveChapterId(chapterId);
    setViewMode('chapter');
    setIsSidebarOpen(false);
  };

  const handleSelectVolume = (volumeId: number) => {
    const vol = getVolumeById(volumeId);
    if (vol && vol.chapters.length > 0) {
      setActiveChapterId(vol.chapters[0].id);
      setViewMode('chapter');
    }
  };

  const handleToggleRead = (chapterId: number) => {
    setReadChapterIds(prev => 
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const readingProgress = (readChapterIds.length / allChapters.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased relative selection:bg-cyan-500/30">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-64 left-1/4 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-56 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[160px]" />
        <div className="absolute -bottom-56 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[160px]" />
      </div>

      {/* Security Toast Notification */}
      {securityToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl bg-amber-950/90 border border-amber-500/40 text-amber-200 text-xs shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p>{securityToast}</p>
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onOpenAuthorModal={() => setIsAuthorModalOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
        isSidebarOpen={isSidebarOpen}
        readingProgress={readingProgress}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        readCount={readChapterIds.length}
        totalChapters={allChapters.length}
      />

      {/* Main Application Layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex">
        {/* Left Sticky Sidebar (All 9 Volumes & 107 Chapters) */}
        <Sidebar
          currentChapterId={activeChapterId}
          onSelectChapter={handleSelectChapter}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          readChapterIds={readChapterIds}
        />

        {/* Right Main Content Area */}
        <main className="flex-1 min-w-0 pb-20">
          {/* Subheader Toolbar: Overview toggle + Breadcrumb quick jump */}
          <div className="sticky top-16 z-20 px-4 sm:px-8 py-2.5 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode(viewMode === 'overview' ? 'chapter' : 'overview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                  viewMode === 'overview'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-white/10'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>{viewMode === 'overview' ? 'කියවීම් මාදිලියට' : 'පොත් පිවිසුම (Overview)'}</span>
              </button>

              {viewMode === 'chapter' && (
                <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span className="truncate max-w-[200px] text-slate-300">
                    {currentVolume.title}
                  </span>
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span className="truncate max-w-[200px] text-cyan-400 font-medium">
                    {currentChapter.title}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPdfModalOpen(true)}
                className="text-[11px] text-amber-400 hover:underline flex items-center gap-1 font-mono"
              >
                <Download className="w-3 h-3" />
                <span>Get PDF</span>
              </button>
            </div>
          </div>

          {/* Render Active View */}
          {viewMode === 'overview' ? (
            <BookOverview
              onStartReading={() => {
                setViewMode('chapter');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectVolume={handleSelectVolume}
              onOpenPdfModal={() => setIsPdfModalOpen(true)}
              onOpenAuthorModal={() => setIsAuthorModalOpen(true)}
            />
          ) : (
            <ChapterViewer
              chapter={currentChapter}
              volume={currentVolume}
              fontSize={fontSize}
              isRead={readChapterIds.includes(activeChapterId)}
              onToggleRead={handleToggleRead}
              onPrevious={() => prevChapter && handleSelectChapter(prevChapter.id)}
              onNext={() => nextChapter && handleSelectChapter(nextChapter.id)}
              hasPrevious={!!prevChapter}
              hasNext={!!nextChapter}
              onOpenPdfModal={() => setIsPdfModalOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectChapter={handleSelectChapter}
      />

      <PdfPurchaseModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <AuthorModal
        isOpen={isAuthorModalOpen}
        onClose={() => setIsAuthorModalOpen(false)}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 group">
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none px-3 py-1.5 rounded-xl bg-slate-900/95 border border-emerald-500/30 text-[11px] text-emerald-300 font-medium shadow-xl">
          Fyzie සමඟ WhatsApp ඔස්සේ සම්බන්ධ වන්න
        </div>
        <a
          href={getWhatsAppBuyUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-300/40"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-current text-slate-950" />
          <span className="font-bold">WhatsApp Chat</span>
        </a>
      </aside>
    </div>
  );
}

export default App;
