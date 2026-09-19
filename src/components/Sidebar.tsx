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
  X
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
  1: <Code className="w-4 h-4 text-orange-400" />,
  2: <Palette className="w-4 h-4 text-blue-400" />,
  3: <Cpu className="w-4 h-4 text-yellow-400" />,
  4: <Sparkles className="w-4 h-4 text-emerald-400" />,
  5: <Terminal className="w-4 h-4 text-indigo-400" />,
  6: <Atom className="w-4 h-4 text-cyan-400" />,
  7: <ShieldCheck className="w-4 h-4 text-sky-400" />,
  8: <Layers className="w-4 h-4 text-zinc-300" />,
  9: <Briefcase className="w-4 h-4 text-rose-400" />
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

  const [searchQuery, setSearchQuery] = useState('');

  const toggleVolume = (volumeId: number) => {
    setExpandedVolumes(prev => ({
      ...prev,
      [volumeId]: !prev[volumeId]
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
        chap.description.toLowerCase().includes(q)
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
        className={`fixed lg:sticky top-0 lg:top-16 z-50 lg:z-30 h-screen lg:h-[calc(100vh-4rem)] w-80 sm:w-88 flex-shrink-0 bg-slate-950/95 lg:bg-slate-950/80 backdrop-blur-2xl border-r border-white/10 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header & Search */}
        <div className="p-4 border-b border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
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
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Volume & Chapter List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 custom-scrollbar">
          {filteredVolumes.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
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
                      ? 'bg-slate-900/90 border-cyan-500/30 shadow-md shadow-cyan-500/5' 
                      : 'bg-slate-900/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Volume Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleVolume(volume.id)}
                    className="w-full text-left p-3 flex items-start justify-between gap-2.5 group transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-1.5 rounded-lg bg-slate-800/80 border border-white/5 group-hover:border-white/20 transition-colors">
                        {volumeIcons[volume.id] || <BookOpen className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                            පරිමාව 0{volume.volumeNumber}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/5">
                            {volume.pageRange}
                          </span>
                        </div>
                        <h3 className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors line-clamp-1 leading-snug">
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
                    <div className="px-2 pb-2.5 pt-1 space-y-1 border-t border-white/5 bg-slate-950/40">
                      {volume.chapters.map((chapter) => {
                        const isCurrent = chapter.id === currentChapterId;
                        const isRead = readChapterIds.includes(chapter.id);

                        return (
                          <button
                            key={chapter.id}
                            type="button"
                            onClick={() => {
                              onSelectChapter(chapter.id);
                              if (window.innerWidth < 1024) {
                                onClose();
                              }
                            }}
                            className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all duration-200 ${
                              isCurrent
                                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm font-semibold'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className={`w-5 h-5 rounded-md text-[10px] font-mono flex items-center justify-center flex-shrink-0 ${
                                isCurrent 
                                  ? 'bg-cyan-500 text-slate-950 font-bold' 
                                  : 'bg-slate-800 text-slate-400'
                              }`}>
                                {chapter.chapterNumber}
                              </span>
                              <span className="truncate leading-relaxed">
                                {chapter.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 flex-shrink-0">
                              {isRead ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Circle className="w-3 h-3 text-slate-500" />
                              )}
                            </div>
                          </button>
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
        <div className="p-3 border-t border-white/10 bg-slate-900/60 text-center">
          <p className="text-[10px] text-slate-400">
            © {new Date().getFullYear()} T. Sachintha Imesh [FYZIE].
          </p>
          <p className="text-[9px] text-slate-400">
            සියලුම හිමිකම් ඇවිරිණි. Digital Watermarked.
          </p>
        </div>
      </aside>
    </>
  );
};
