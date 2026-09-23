import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Bookmark,
  CheckCircle,
  Search,
  Filter,
  ChevronRight,
  BookmarkCheck,
  Layers,
  Sparkles,
  X,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { allChapters } from '../data/chapters/allChapters';
import { bookVolumes } from '../data/bookInfo';
import { getThemeClasses } from '../utils/themeStyles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const {
    theme,
    currentChapterId,
    setCurrentChapterId,
    readChapterIds,
    bookmarkedChapterIds,
    toggleBookmarkChapter,
    isChapterRead,
    isChapterBookmarked,
  } = useReader();

  const themeClasses = getThemeClasses(theme);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [selectedVolume, setSelectedVolume] = useState<number | 'all'>('all');
  const [filterMode, setFilterMode] = useState<'all' | 'bookmarked' | 'unread'>('all');

  // Filter chapters based on search query, volume, and filterMode
  const filteredChapters = useMemo(() => {
    return allChapters.filter((ch) => {
      // Volume filter
      if (selectedVolume !== 'all' && ch.volumeId !== selectedVolume) {
        return false;
      }
      // Filter mode
      if (filterMode === 'bookmarked' && !bookmarkedChapterIds.includes(ch.id)) {
        return false;
      }
      if (filterMode === 'unread' && readChapterIds.includes(ch.id)) {
        return false;
      }
      // Search
      if (sidebarSearch.trim() !== '') {
        const q = sidebarSearch.toLowerCase();
        const matchesTitle = ch.title.toLowerCase().includes(q);
        const matchesEn = ch.englishTitle.toLowerCase().includes(q);
        const matchesNum = ch.chapterNumber.toString() === q;
        return matchesTitle || matchesEn || matchesNum;
      }
      return true;
    });
  }, [sidebarSearch, selectedVolume, filterMode, bookmarkedChapterIds, readChapterIds]);

  const progressPercent = Math.round((readChapterIds.length / allChapters.length) * 100);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 sm:w-96 flex flex-col z-35 transition-transform duration-300 border-r ${
          themeClasses.sidebarBg
        } ${themeClasses.borderColor} ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header of Sidebar */}
        <div className={`p-3.5 border-b ${themeClasses.borderColor}`}>
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600" />
              <span className={`text-xs font-bold uppercase tracking-wider ${themeClasses.textColor}`}>
                පටුන සහ පරිච්ඡේද
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${themeClasses.badgeBg}`}>
                {readChapterIds.length}/{allChapters.length} කියවා ඇත
              </span>
              <button
                onClick={onClose}
                className="lg:hidden p-1 rounded hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Search */}
          <div className="relative mb-2">
            <Search className={`w-3.5 h-3.5 absolute left-2.5 top-2.5 ${themeClasses.textMuted}`} />
            <input
              type="text"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="පරිච්ඡේද සොයන්න (Search)..."
              className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border outline-none transition-all ${
                themeClasses.borderColor
              } ${themeClasses.cardBg} ${themeClasses.textColor} focus:ring-1 focus:ring-amber-500`}
            />
            {sidebarSearch && (
              <button
                onClick={() => setSidebarSearch('')}
                className="absolute right-2.5 top-2 text-xs text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Volume Dropdown / Selector */}
          <div className="grid grid-cols-2 gap-1.5">
            <select
              value={selectedVolume}
              onChange={(e) => setSelectedVolume(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className={`text-xs py-1 px-2 rounded-md border ${themeClasses.borderColor} ${themeClasses.cardBg} ${themeClasses.textColor}`}
            >
              <option value="all">සියලුම පරිමා (9)</option>
              {bookVolumes.map((vol) => (
                <option key={vol.id} value={vol.id}>
                  පරිමාව {vol.id}: {vol.title}
                </option>
              ))}
            </select>

            <select
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value as any)}
              className={`text-xs py-1 px-2 rounded-md border ${themeClasses.borderColor} ${themeClasses.cardBg} ${themeClasses.textColor}`}
            >
              <option value="all">සියල්ල පෙන්වන්න</option>
              <option value="bookmarked">⭐ සුරැකි පිටු ({bookmarkedChapterIds.length})</option>
              <option value="unread">නොකියවූ පරිච්ඡේද</option>
            </select>
          </div>
        </div>

        {/* Scrollable Chapter List */}
        <div className="flex-1 overflow-y-auto px-2 py-2 space-y-1">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-10 px-4">
              <p className={`text-xs ${themeClasses.textMuted}`}>කිසිදු පරිච්ඡේදයක් හමු නොවීය.</p>
              <button
                onClick={() => {
                  setSidebarSearch('');
                  setSelectedVolume('all');
                  setFilterMode('all');
                }}
                className="mt-2 text-xs text-amber-600 hover:underline font-medium"
              >
                පෙරහන් ඉවත් කරන්න
              </button>
            </div>
          ) : (
            filteredChapters.map((ch) => {
              const isActive = ch.id === currentChapterId;
              const isRead = isChapterRead(ch.id);
              const isBookmarked = isChapterBookmarked(ch.id);

              return (
                <div
                  key={ch.id}
                  onClick={() => {
                    setCurrentChapterId(ch.id);
                    if (window.innerWidth < 1024) onClose();
                  }}
                  className={`group relative flex items-start gap-2.5 p-2 rounded-xl text-left cursor-pointer transition-all ${
                    isActive
                      ? `${themeClasses.cardBg} shadow-xs font-semibold border ${themeClasses.borderColor}`
                      : `hover:bg-black/5 dark:hover:bg-white/5`
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-amber-500" />
                  )}

                  {/* Chapter Number Badge */}
                  <div
                    className={`shrink-0 w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-amber-500 text-white shadow-xs'
                        : isRead
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : `${themeClasses.cardBgSecondary} ${themeClasses.textMuted}`
                    }`}
                  >
                    {isRead ? <CheckCircle className="w-3.5 h-3.5" /> : ch.chapterNumber}
                  </div>

                  {/* Chapter Info */}
                  <div className="flex-1 min-w-0 pr-6">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] uppercase tracking-wider font-semibold opacity-70 ${themeClasses.textMuted}`}>
                        පරිමාව {ch.volumeId} • පි. {ch.pageNumber}
                      </span>
                    </div>
                    <p
                      className={`text-xs line-clamp-1 font-sinhala-sans ${
                        isActive ? 'text-amber-600 dark:text-amber-400 font-bold' : themeClasses.textColor
                      }`}
                    >
                      {ch.title}
                    </p>
                    <p className={`text-[11px] line-clamp-1 truncate ${themeClasses.textMuted}`}>
                      {ch.englishTitle}
                    </p>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmarkChapter(ch.id);
                    }}
                    title={isBookmarked ? 'සුරැකි බව ඉවත් කරන්න' : 'පිටුව සුරකින්න'}
                    className={`absolute right-2 top-2 p-1 rounded transition-opacity ${
                      isBookmarked
                        ? 'text-amber-500 opacity-100'
                        : 'opacity-0 group-hover:opacity-60 text-stone-400 hover:text-amber-500'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Progress Footer */}
        <div className={`p-3 border-t ${themeClasses.borderColor} ${themeClasses.cardBgSecondary}`}>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className={`font-medium ${themeClasses.textColor}`}>මුළු කියවීම් ප්‍රගතිය</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
