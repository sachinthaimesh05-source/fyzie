import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Search, 
  Code, 
  Palette, 
  Cpu, 
  Sparkles, 
  Terminal, 
  Atom, 
  ShieldCheck, 
  Layers, 
  Briefcase,
  BookOpen,
  Filter,
  X,
  ListTree
} from 'lucide-react';
import { allVolumes } from '../data/volumes';
import { Chapter, Volume } from '../types';

interface SidebarProps {
  currentChapterId: number;
  onSelectChapter: (chapterId: number) => void;
  isOpen: boolean;
  onClose: () => void;
  readChapterIds: number[];
}

const volumeIcons: Record<number, React.ReactNode> = {
  1: <Code className="w-4 h-4 text-sky-400" />,
  2: <Palette className="w-4 h-4 text-sky-400" />,
  3: <Cpu className="w-4 h-4 text-sky-400" />,
  4: <Sparkles className="w-4 h-4 text-sky-400" />,
  5: <Terminal className="w-4 h-4 text-sky-400" />,
  6: <Atom className="w-4 h-4 text-sky-400" />,
  7: <ShieldCheck className="w-4 h-4 text-sky-400" />,
  8: <Layers className="w-4 h-4 text-sky-400" />,
  9: <Briefcase className="w-4 h-4 text-sky-400" />
};

export const Sidebar: React.FC<SidebarProps> = ({
  currentChapterId,
  onSelectChapter,
  isOpen,
  onClose,
  readChapterIds
}) => {
  // Find which volume the current chapter belongs to and keep it expanded by default
  const activeVolumeId = useMemo(() => {
    for (const vol of allVolumes) {
      if (vol.chapters.some(c => c.id === currentChapterId)) {
        return vol.id;
      }
    }
    return 1;
  }, [currentChapterId]);

  const [expandedVolumes, setExpandedVolumes] = useState<Record<number, boolean>>({
    [activeVolumeId]: true
  });

  // Automatically expand volume when navigating across volume boundaries
  React.useEffect(() => {
    setExpandedVolumes(prev => ({
      ...prev,
      [activeVolumeId]: true
    }));
  }, [activeVolumeId]);

  const areAllExpanded = useMemo(() => {
    return allVolumes.every(vol => !!expandedVolumes[vol.id]);
  }, [expandedVolumes]);

  const toggleExpandAll = () => {
    if (areAllExpanded) {
      setExpandedVolumes({ [activeVolumeId]: true });
    } else {
      const all: Record<number, boolean> = {};
      allVolumes.forEach(v => { all[v.id] = true; });
      setExpandedVolumes(all);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const toggleVolume = (volumeId: number) => {
    setExpandedVolumes(prev => ({
      ...prev,
      [volumeId]: !prev[volumeId]
    }));
  };

  const [expandedChapterSections, setExpandedChapterSections] = useState<Record<number, boolean>>({});
  const [areAllSectionsExpanded, setAreAllSectionsExpanded] = useState(false);

  const toggleAllSections = () => {
    setAreAllSectionsExpanded(prev => !prev);
  };

  const toggleChapterSections = (e: React.MouseEvent, chapterId: number) => {
    e.stopPropagation();
    setExpandedChapterSections(prev => ({
      ...prev,
      [chapterId]: prev[chapterId] !== undefined ? !prev[chapterId] : false
    }));
  };

  const filteredVolumes = useMemo(() => {
    if (!searchQuery.trim()) return allVolumes;
    const q = searchQuery.toLowerCase().trim();

    return allVolumes.map(vol => {
      const matchingChapters = vol.chapters.filter(chap => 
        chap.title.toLowerCase().includes(q) ||
        chap.englishTitle.toLowerCase().includes(q) ||
        chap.chapterNumber.toString().includes(q) ||
        chap.description.toLowerCase().includes(q) ||
        chap.sections.some(sec => sec.title.toLowerCase().includes(q))
      );

      return {
        ...vol,
        chapters: matchingChapters
      };
    }).filter(vol => vol.chapters.length > 0);
  }, [searchQuery]);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Main Sidebar Container */}
      <aside 
        className={`fixed lg:sticky top-0 lg:top-16 z-50 lg:z-30 h-screen lg:h-[calc(100vh-4rem)] w-80 sm:w-88 flex-shrink-0 bg-slate-950/95 lg:bg-slate-950/95 backdrop-blur-2xl border-r border-white/10 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header & Search */}
        <div className="p-4 border-b border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                FyZie
              </span>
              <span className="text-slate-600 text-xs">/</span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                පටුන (Index)
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                9 Volumes • 107 Ch
              </span>
              <button
                type="button"
                onClick={onClose}
                className="lg:hidden p-1 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick filter input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="පරිච්ඡේද සොයන්න..."
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-slate-900/95 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Quick Controls: Expand All & Volume Jump Pills */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={toggleExpandAll}
              className="text-[11px] font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors px-1 py-0.5 rounded"
            >
              {areAllExpanded ? 'පරිමාවන් හකුළන්න' : 'පරිමාවන් සියල්ල (1-9)'}
            </button>
            <button
              type="button"
              onClick={toggleAllSections}
              className={`text-[11px] font-medium px-2 py-0.5 rounded-lg border transition-colors flex items-center gap-1 ${
                areAllSectionsExpanded
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 font-bold'
                  : 'text-slate-400 hover:text-sky-300 border-white/10 hover:border-sky-500/20'
              }`}
            >
              <ListTree className="w-3 h-3" />
              <span>{areAllSectionsExpanded ? 'අනු කොටස් හකුළන්න' : 'අනු කොටස් සියල්ල (12.1...)'}</span>
            </button>
          </div>

          {/* Quick Volume Navigator Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar text-[10px] font-mono">
            {allVolumes.map(v => {
              const isCurrentVol = v.chapters.some(c => c.id === currentChapterId);
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setExpandedVolumes(prev => ({ ...prev, [v.id]: true }));
                    if (v.chapters.length > 0) {
                      onSelectChapter(v.chapters[0].id);
                    }
                  }}
                  title={`Volume ${v.volumeNumber}: ${v.title} (Chapters ${v.chapters[0]?.chapterNumber} - ${v.chapters[v.chapters.length - 1]?.chapterNumber})`}
                  className={`px-2 py-0.5 rounded-md flex-shrink-0 transition-all ${
                    isCurrentVol
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-white/5'
                  }`}
                >
                  V{v.volumeNumber} ({v.chapters[0]?.chapterNumber}-{v.chapters[v.chapters.length - 1]?.chapterNumber})
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Volume & Chapter List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 custom-scrollbar">
          {filteredVolumes.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              කිසිදු පරිච්ඡේදයක් හමු නොවීය.
            </div>
          ) : (
            filteredVolumes.map((volume) => {
              const isExpanded = expandedVolumes[volume.id] || searchQuery.length > 0;
              const hasActiveChapter = volume.chapters.some(c => c.id === currentChapterId);
              const readInVolume = volume.chapters.filter(c => readChapterIds.includes(c.id)).length;

              return (
                <div 
                  key={volume.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    hasActiveChapter 
                      ? 'bg-slate-900/95 border-sky-500/40 shadow-md shadow-sky-500/5' 
                      : 'bg-slate-900/95 border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Volume Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleVolume(volume.id)}
                    className="w-full text-left p-3 flex items-start justify-between gap-2.5 group transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-1.5 rounded-lg bg-slate-800/80 border border-white/5 group-hover:border-sky-500/30 transition-colors">
                        {volumeIcons[volume.id] || <BookOpen className="w-4 h-4 text-sky-400" />}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono uppercase text-sky-400 font-bold">
                            පරිමාව 0{volume.volumeNumber}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/5">
                            {volume.pageRange}
                          </span>
                        </div>
                        <h3 className="text-xs font-bold text-slate-200 group-hover:text-sky-300 transition-colors line-clamp-1 leading-snug">
                          {volume.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 line-clamp-1 font-sans">
                          {volume.englishTitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0 mt-1">
                      <span className="text-[10px] font-mono text-slate-400">
                        {readInVolume}/{volume.chapters.length}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Volume Chapters List */}
                  {isExpanded && (
                    <div className="px-2 pb-2.5 pt-1 space-y-1 border-t border-white/5 bg-slate-950/95">
                      {volume.chapters.map((chapter) => {
                        const isCurrent = chapter.id === currentChapterId;
                        const isRead = readChapterIds.includes(chapter.id);
                        const isSectionsExpanded = areAllSectionsExpanded || (expandedChapterSections[chapter.id] !== undefined ? expandedChapterSections[chapter.id] : isCurrent);

                        return (
                          <div key={chapter.id} className="space-y-0.5">
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  onSelectChapter(chapter.id);
                                  if (window.innerWidth < 1024) {
                                    onClose();
                                  }
                                }}
                                className={`flex-1 text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all duration-200 ${
                                  isCurrent
                                    ? 'bg-sky-500/20 text-sky-200 border border-sky-500/40 shadow-sm font-semibold'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className={`w-5 h-5 rounded-md text-[10px] font-mono flex items-center justify-center flex-shrink-0 ${
                                    isCurrent 
                                      ? 'bg-sky-500 text-slate-950 font-bold' 
                                      : 'bg-slate-800 text-slate-400'
                                  }`}>
                                    {chapter.chapterNumber}
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <span className="truncate leading-relaxed block font-medium">
                                      {chapter.title}
                                    </span>
                                    {chapter.sections && chapter.sections.length > 0 && (
                                      <span className="text-[10px] font-mono text-sky-400/90 block">
                                        {chapter.sections.length} අනු කොටස් ({chapter.chapterNumber}.1 - {chapter.chapterNumber}.{chapter.sections.length})
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center gap-1 flex-shrink-0">
                                  {isRead ? (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <Circle className="w-3 h-3 text-slate-600" />
                                  )}
                                </div>
                              </button>

                              {chapter.sections && chapter.sections.length > 0 && (
                                <button
                                  type="button"
                                  onClick={(e) => toggleChapterSections(e, chapter.id)}
                                  title={`${chapter.sections.length} උප මාතෘකා පෙන්වන්න`}
                                  className={`p-1.5 rounded-lg text-slate-400 hover:text-sky-300 hover:bg-slate-800 transition-colors flex-shrink-0 ${
                                    isSectionsExpanded ? 'text-sky-400 bg-slate-900' : ''
                                  }`}
                                >
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSectionsExpanded ? 'rotate-180' : ''}`} />
                                </button>
                              )}
                            </div>

                            {/* Nested Subtopics List */}
                            {isSectionsExpanded && chapter.sections && chapter.sections.length > 0 && (
                              <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 border-sky-500/20 ml-3.5 my-1">
                                {chapter.sections.map((sec, secIdx) => (
                                  <button
                                    key={secIdx}
                                    type="button"
                                    onClick={() => {
                                      onSelectChapter(chapter.id);
                                      if (window.innerWidth < 1024) {
                                        onClose();
                                      }
                                      setTimeout(() => {
                                        const el = document.getElementById(`section-${chapter.id}-${secIdx}`);
                                        if (el) {
                                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                      }, 150);
                                    }}
                                    className="w-full text-left px-2 py-1 rounded text-[11px] text-slate-400 hover:text-sky-300 hover:bg-white/5 truncate block transition-colors font-mono"
                                  >
                                    <span className="text-sky-400/80 mr-1 font-semibold">•</span>
                                    {sec.title}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Sidebar Footer: Copyright & Security Note */}
        <div className="p-3 border-t border-white/10 bg-slate-900/95 text-center">
          <p className="text-[10px] text-slate-400">
            © {new Date().getFullYear()} T. Sachintha Imesh [FYZIE].
          </p>
          <p className="text-[9px] text-slate-500">
            සියලුම හිමිකම් ඇවිරිණි. Digital Watermarked.
          </p>
        </div>
      </aside>
    </>
  );
};
