import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  BookOpen,
  ArrowRight,
  X,
  FileCode,
  Layers,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { searchChapters } from '../data/chapters/allChapters';
import { getThemeClasses } from '../utils/themeStyles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { theme, openReaderWithChapter } = useReader();
  const themeClasses = getThemeClasses(theme);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K & Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() ? searchChapters(query).slice(0, 10) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col z-50 animate-in zoom-in-95 duration-150 ${
          themeClasses.cardBg
        } ${themeClasses.borderColor}`}
      >
        {/* Search Input Box */}
        <div className={`p-4 border-b flex items-center gap-3 ${themeClasses.borderColor}`}>
          <Search className={`w-5 h-5 ${themeClasses.textMuted}`} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="පරිච්ඡේදය, මාතෘකාව හෝ සංකල්පය සොයන්න (උදා: React, Flexbox, V8, Next.js)..."
            className={`flex-1 bg-transparent text-sm sm:text-base outline-none font-sinhala-sans ${themeClasses.textColor}`}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] rounded bg-black/10 dark:bg-white/10 font-mono text-stone-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-xs text-stone-400 space-y-2">
              <p>ග්‍රන්ථයේ ඕනෑම පරිච්ඡේදයක් හෝ පාඩමක් ක්ෂණිකව සොයා ගන්න.</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['HTML Form', 'CSS Grid', 'JavaScript Engine', 'Async Await', 'React Hooks', 'TypeScript', 'Next.js App Router'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 rounded-full text-[11px] bg-black/5 dark:bg-white/5 hover:bg-amber-500/10 hover:text-amber-600 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-stone-400">
              <p>"{query}" සඳහා කිසිදු ප්‍රතිඵලයක් හමු නොවීය.</p>
            </div>
          ) : (
            results.map((ch) => (
              <div
                key={ch.id}
                onClick={() => {
                  openReaderWithChapter(ch.id);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs bg-amber-500/10 text-amber-600 shrink-0">
                    {ch.chapterNumber}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-xs sm:text-sm font-semibold truncate group-hover:text-amber-600 transition-colors ${themeClasses.textColor}`}>
                      {ch.title}
                    </p>
                    <p className="text-[11px] text-stone-400 truncate">
                      {ch.englishTitle} • පරිමාව {ch.volumeId}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <span>කියවන්න</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
