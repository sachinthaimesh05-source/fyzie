import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Filter,
  Download,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { allChapters } from '../data/chapters/allChapters';
import { bookVolumes } from '../data/bookInfo';
import { getThemeClasses } from '../utils/themeStyles';
import { downloadBookPdf } from '../utils/downloadPdf';

export const TableOfContents: React.FC = () => {
  const {
    theme,
    openReaderWithChapter,
    readChapterIds,
    toggleReadChapter,
    bookmarkedChapterIds,
    toggleBookmarkChapter,
    isChapterRead,
    isChapterBookmarked,
  } = useReader();

  const themeClasses = getThemeClasses(theme);
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'unread' | 'read' | 'bookmarked'>('all');
  const [expandedVolumes, setExpandedVolumes] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const toggleVolumeExpand = (volId: number) => {
    setExpandedVolumes((prev) =>
      prev.includes(volId) ? prev.filter((id) => id !== volId) : [...prev, volId]
    );
  };

  const expandAll = () => setExpandedVolumes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const collapseAll = () => setExpandedVolumes([]);

  // Filtered chapters
  const filteredChapters = useMemo(() => {
    return allChapters.filter((ch) => {
      // Filter status
      if (selectedFilter === 'read' && !readChapterIds.includes(ch.id)) return false;
      if (selectedFilter === 'unread' && readChapterIds.includes(ch.id)) return false;
      if (selectedFilter === 'bookmarked' && !bookmarkedChapterIds.includes(ch.id)) return false;

      // Search
      if (search.trim() !== '') {
        const q = search.toLowerCase().trim();
        const matchesTitle = ch.title.toLowerCase().includes(q);
        const matchesEn = ch.englishTitle.toLowerCase().includes(q);
        const matchesVol = ch.volumeTitle.toLowerCase().includes(q);
        const matchesNum = ch.chapterNumber.toString() === q;
        return matchesTitle || matchesEn || matchesVol || matchesNum;
      }
      return true;
    });
  }, [search, selectedFilter, readChapterIds, bookmarkedChapterIds]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
          ග්‍රන්ථ පටුන • TABLE OF CONTENTS
        </span>
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-1 font-sinhala-serif ${themeClasses.textColor}`}>
          සම්පූර්ණ පරිච්ඡේද {allChapters.length}
        </h1>
        <p className={`text-xs sm:text-sm mt-2 ${themeClasses.textMuted}`}>
          පරිමා 9ක් යටතේ පෙළගස්වන ලද සියලුම පරිච්ඡේද 107, කේත නිදසුන් සහ ප්‍රායෝගික අභ්‍යාස.
        </p>

        {/* Progress Tracker and PDF Download */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <div className={`p-3 rounded-xl border inline-flex items-center gap-4 text-xs ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
            <div className="flex items-center gap-1.5 font-semibold text-emerald-600">
              <CheckCircle className="w-4 h-4" />
              <span>{readChapterIds.length} / {allChapters.length} කියවා ඇත ({Math.round((readChapterIds.length / allChapters.length) * 100)}%)</span>
            </div>
            <span className="text-stone-300">|</span>
            <div className="flex items-center gap-1.5 font-semibold text-amber-600">
              <Bookmark className="w-4 h-4 fill-amber-500" />
              <span>සුරැකි පිටු {bookmarkedChapterIds.length}</span>
            </div>
          </div>

          <button
            onClick={() => downloadBookPdf()}
            className="p-3 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 inline-flex items-center gap-2 text-xs font-bold transition-all shadow-xs cursor-pointer"
            title="සම්පූර්ණ PDF ග්‍රන්ථය සෘජුවම බාගත කරන්න"
          >
            <Download className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>සම්පූර්ණ PDF ග්‍රන්ථය බාගත කරන්න (Direct Download)</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className={`p-4 rounded-2xl border mb-8 flex flex-col md:flex-row gap-4 items-center justify-between ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className={`w-4 h-4 absolute left-3 top-3 ${themeClasses.textMuted}`} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="පරිච්ඡේදය හෝ මාතෘකාව සොයන්න..."
            className={`w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border outline-none ${themeClasses.borderColor} ${themeClasses.pageBg} ${themeClasses.textColor} focus:ring-1 focus:ring-amber-500`}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {[
            { id: 'all', label: `සියල්ල (${allChapters.length})` },
            { id: 'unread', label: 'නොකියවූ' },
            { id: 'read', label: 'කියවූ' },
            { id: 'bookmarked', label: '⭐ සුරැකි පිටු' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === f.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : `border ${themeClasses.borderColor} ${themeClasses.textMuted} hover:${themeClasses.textColor}`
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Expand / Collapse All */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium">
          <button onClick={expandAll} className="text-amber-600 hover:underline">
            සියල්ල දිගහරින්න
          </button>
          <span className="text-stone-300">/</span>
          <button onClick={collapseAll} className="text-stone-500 hover:underline">
            හකුළන්න
          </button>
        </div>
      </div>

      {/* Volumes Listing */}
      <div className="space-y-6">
        {bookVolumes.map((vol) => {
          const volChapters = filteredChapters.filter((ch) => ch.volumeId === vol.id);
          if (volChapters.length === 0) return null;

          const isExpanded = expandedVolumes.includes(vol.id);
          const readCountInVol = volChapters.filter((ch) => readChapterIds.includes(ch.id)).length;

          return (
            <div
              key={vol.id}
              className={`rounded-2xl border overflow-hidden transition-all shadow-xs ${themeClasses.cardBg} ${themeClasses.borderColor}`}
            >
              {/* Volume Header Toggle */}
              <div
                onClick={() => toggleVolumeExpand(vol.id)}
                className={`p-4 sm:p-5 cursor-pointer flex items-center justify-between border-b transition-colors select-none ${
                  themeClasses.cardBgSecondary
                } ${themeClasses.borderColor}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs bg-amber-500 text-white shadow-xs">
                    0{vol.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
                        {vol.title}
                      </h2>
                      <span className={`text-[11px] font-medium hidden sm:inline ${themeClasses.textMuted}`}>
                        ({vol.englishTitle})
                      </span>
                    </div>
                    <p className={`text-xs ${themeClasses.textMuted}`}>
                      {volChapters.length} පරිච්ඡේද • {readCountInVol} කියවා ඇත ({vol.chapterRange})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:block w-20 h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${Math.round((readCountInVol / volChapters.length) * 100)}%` }}
                    />
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                </div>
              </div>

              {/* Chapters List inside Volume */}
              {isExpanded && (
                <div className="divide-y divide-black/5 dark:divide-white/5">
                  {volChapters.map((ch) => {
                    const isRead = isChapterRead(ch.id);
                    const isBookmarked = isChapterBookmarked(ch.id);

                    return (
                      <div
                        key={ch.id}
                        className={`p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors hover:bg-black/5 dark:hover:bg-white/5`}
                      >
                        {/* Chapter Number & Title */}
                        <div
                          onClick={() => openReaderWithChapter(ch.id)}
                          className="flex items-start sm:items-center gap-3 flex-1 min-w-0 cursor-pointer group"
                        >
                          <span
                            className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                              isRead
                                ? 'bg-emerald-500/10 text-emerald-600'
                                : `${themeClasses.cardBgSecondary} ${themeClasses.textMuted}`
                            }`}
                          >
                            {ch.chapterNumber}
                          </span>

                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-xs sm:text-sm font-semibold group-hover:text-amber-600 transition-colors truncate font-sinhala-sans ${themeClasses.textColor}`}
                            >
                              {ch.title}
                            </p>
                            <div className="flex items-center gap-2 text-[11px] text-stone-400">
                              <span className="truncate">{ch.englishTitle}</span>
                              <span>•</span>
                              <span>පිටුව {ch.pageNumber}</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions: Mark read, Bookmark, Read button */}
                        <div className="flex items-center gap-2 shrink-0">
                          {/* Bookmark */}
                          <button
                            onClick={() => toggleBookmarkChapter(ch.id)}
                            title={isBookmarked ? 'සුරැකි බව ඉවත් කරන්න' : 'පිටුව සුරකින්න'}
                            className={`p-1.5 rounded-lg transition-colors ${
                              isBookmarked
                                ? 'text-amber-500 bg-amber-500/10'
                                : 'text-stone-400 hover:text-amber-500'
                            }`}
                          >
                            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                          </button>

                          {/* Read toggle */}
                          <button
                            onClick={() => toggleReadChapter(ch.id)}
                            title={isRead ? 'කියවූ බව ඉවත් කරන්න' : 'කියවූ බව සලකුණු කරන්න'}
                            className={`p-1.5 rounded-lg transition-colors ${
                              isRead
                                ? 'text-emerald-600 bg-emerald-500/10'
                                : 'text-stone-400 hover:text-emerald-500'
                            }`}
                          >
                            <CheckCircle className={`w-4 h-4 ${isRead ? 'fill-emerald-500 text-white' : ''}`} />
                          </button>

                          {/* Read CTA */}
                          <button
                            onClick={() => openReaderWithChapter(ch.id)}
                            className="hidden sm:flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-500 hover:text-white transition-all"
                          >
                            <span>කියවන්න</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
