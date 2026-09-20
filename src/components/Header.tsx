import React from 'react';
import { 
  BookOpen, 
  Search, 
  Download, 
  Menu, 
  X, 
  Sparkles, 
  UserCheck, 
  Type, 
  BookmarkCheck,
  ShieldAlert,
  MessageCircle
} from 'lucide-react';
import { bookMeta, getWhatsAppBuyUrl } from '../data/bookMeta';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenPdfModal: () => void;
  onOpenAuthorModal: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  readingProgress: number; // 0 to 100
  fontSize: 'sm' | 'md' | 'lg';
  onChangeFontSize: (size: 'sm' | 'md' | 'lg') => void;
  readCount: number;
  totalChapters: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenPdfModal,
  onOpenAuthorModal,
  onToggleSidebar,
  isSidebarOpen,
  readingProgress,
  fontSize,
  onChangeFontSize,
  readCount,
  totalChapters
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
      {/* Top Reading Progress Bar */}
      <div className="w-full h-1 bg-slate-900 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-violet-500 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, readingProgress))}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Mobile Menu + Branding */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl border border-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-3 group cursor-pointer" onClick={onOpenAuthorModal}>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 border border-sky-500/30 flex items-center justify-center p-1 shadow-inner shadow-sky-500/10 group-hover:border-sky-400 transition-all duration-300">
              <BookOpen className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-violet-400 tracking-tight group-hover:from-sky-300 group-hover:to-violet-300 transition-colors">
                  FyZie
                </span>
                <span className="hidden sm:inline-flex text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold">
                  Full Stack Web Development
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span>By T. Sachintha Imesh</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold font-mono">107 Chapters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Quick Search Trigger */}
        <div className="hidden md:flex items-center flex-1 max-w-sm mx-4">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-400 hover:text-slate-200 text-xs transition-all duration-200 shadow-inner group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              <span>පරිච්ඡේද සහ මාතෘකා සොයන්න...</span>
            </div>
            <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 border border-white/10 text-slate-300">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Action Icons & PDF Purchase Button */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Icon */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl border border-white/10"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-slate-300" />
          </button>

          {/* Read counter badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/95 border border-white/10 text-xs text-slate-300">
            <BookmarkCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-emerald-400 font-bold">{readCount}/{totalChapters}</span>
            <span className="text-slate-500 text-[10px]">කියවා ඇත</span>
          </div>

          {/* Font Size Adjuster */}
          <div className="hidden sm:flex items-center bg-slate-900/95 p-1 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => onChangeFontSize('sm')}
              title="Small text"
              className={`px-2 py-0.5 text-xs font-mono rounded-lg transition-all ${
                fontSize === 'sm' ? 'bg-sky-500/20 text-sky-300 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => onChangeFontSize('md')}
              title="Default text"
              className={`px-2 py-0.5 text-xs font-mono rounded-lg transition-all ${
                fontSize === 'md' ? 'bg-sky-500/20 text-sky-300 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => onChangeFontSize('lg')}
              title="Large text"
              className={`px-2 py-0.5 text-xs font-mono rounded-lg transition-all ${
                fontSize === 'lg' ? 'bg-sky-500/20 text-sky-300 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              A+
            </button>
          </div>

          {/* Author Bio Button */}
          <button
            type="button"
            onClick={onOpenAuthorModal}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900/95 hover:bg-slate-900 border border-white/10 hover:border-sky-500/30 transition-all duration-200"
          >
            <UserCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>කර්තෘ විස්තර</span>
          </button>

          {/* Quick WhatsApp Direct Link */}
          <a
            href={getWhatsAppBuyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp මඟින් මිලදී ගන්න"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-md shadow-emerald-500/10"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
            <span>WhatsApp Chat</span>
          </a>

          {/* Official Full PDF CTA Button with High-End Glassmorphic Gradient */}
          <button
            type="button"
            onClick={onOpenPdfModal}
            className="relative group overflow-hidden flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl font-medium text-xs sm:text-sm bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 hover:border-amber-400 text-amber-200 shadow-lg shadow-amber-500/10 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Download className="w-4 h-4 text-amber-300 group-hover:translate-y-0.5 transition-transform" />
            <span className="font-semibold tracking-wide">සම්පූර්ණ PDF</span>
            <span className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-mono font-bold">
              PRO
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
