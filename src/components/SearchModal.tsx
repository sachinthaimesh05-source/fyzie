import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { searchContent } from '../data/volumes';
import { Chapter } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapterId: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectChapter
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = searchContent(query);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-slate-950/95 border border-white/10 shadow-2xl p-4 sm:p-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="relative flex items-center border-b border-white/10 pb-4">
          <Search className="w-5 h-5 text-slate-400 absolute left-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="පරිච්ඡේද, සංකල්ප, HTML, React, Git ආදිය සොයන්න..."
            className="w-full pl-11 pr-10 py-2.5 rounded-2xl bg-slate-900/90 border border-white/5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="absolute right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/10">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-2 custom-scrollbar">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-xs text-slate-500 space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-slate-600 mb-2" />
              <p>පරිච්ඡේද 107න් ඕනෑම එකක් සෙවීමට අකුරු ටයිප් කරන්න.</p>
              <p className="text-[11px] text-slate-600">උදා: Flexbox, useState, Git, DOM, TypeScript, SEO</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-500">
              "{query}" සඳහා ප්‍රතිඵල හමු නොවීය.
            </div>
          ) : (
            results.map(({ chapter, volume, matchType }) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => {
                  onSelectChapter(chapter.id);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all flex items-start justify-between gap-3 group"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Vol {volume.volumeNumber} • Ch {chapter.chapterNumber}
                    </span>
                    <span className="text-[11px] text-slate-400 truncate font-sans">
                      {chapter.englishTitle}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {chapter.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {chapter.description}
                  </p>
                </div>

                <div className="flex-shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
          <span>ප්‍රතිඵල {results.length} ක් හමු විය</span>
          <span>Enter ඔබා පිවිසෙන්න</span>
        </div>
      </div>
    </div>
  );
};
