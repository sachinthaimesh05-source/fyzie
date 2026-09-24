import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Sliders,
  Type,
  Sun,
  Moon,
  Compass,
  Code2,
  Download,
  User,
  Menu,
  X,
  CheckCircle2,
  Palette,
} from 'lucide-react';
import { useReader, TabType } from '../context/ReaderContext';
import { getThemeClasses } from '../utils/themeStyles';
import { ReaderTheme } from '../types/book';
import { allChapters } from '../data/chapters/allChapters';
import { downloadBookPdf } from '../utils/downloadPdf';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCustomizer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    activeTab,
    setActiveTab,
    readChapterIds,
  } = useReader();

  const themeClasses = getThemeClasses(theme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navItems: { id: TabType; label: string; enLabel: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'මුල් පිටුව', enLabel: 'Home', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'contents', label: 'පටුන', enLabel: 'Contents', icon: <Menu className="w-4 h-4" /> },
    { id: 'reader', label: 'කියවනය', enLabel: 'Reader', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'roadmap', label: 'මාර්ග සිතියම', enLabel: 'Roadmap', icon: <Compass className="w-4 h-4" /> },
    { id: 'playground', label: 'කේත වැඩබිම', enLabel: 'Playground', icon: <Code2 className="w-4 h-4" /> },
    { id: 'author', label: 'කර්තෘ', enLabel: 'Author', icon: <User className="w-4 h-4" /> },
  ];

  const themeOptions: { id: ReaderTheme; name: string; desc: string; bg: string; border: string }[] = [
    { id: 'sepia', name: 'සුවපහසු කහට (Sepia)', desc: 'ඇස් වලට පහසු උණුසුම් කහට තේමාව', bg: '#F9F6F0', border: '#D97706' },
    { id: 'paper', name: 'සුදු පැපිරස් (Parchment)', desc: 'පොතක සැබෑ කඩදාසි පෙනුම', bg: '#FAF8F5', border: '#0D9488' },
    { id: 'modern', name: 'නවීන සුදු (Modern Light)', desc: 'පිරිසිදු අධි-විභේදන සුදු ආලෝකය', bg: '#FFFFFF', border: '#2563EB' },
    { id: 'dark', name: 'රාත්‍රී අඳුර (Midnight Dark)', desc: 'අඳුරු පරිසරයක කියවීමට සුදුසුයි', bg: '#0B0F19', border: '#38BDF8' },
  ];

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-200 ${themeClasses.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105 ${themeClasses.accentBg} text-white`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-base sm:text-lg tracking-tight font-sinhala-sans ${themeClasses.textColor}`}>
                  සම්පූර්ණ වෙබ් සංවර්ධනය
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-500/10 text-amber-600 border border-amber-500/20">
                  Full Stack
                </span>
              </div>
              <p className={`text-xs ${themeClasses.textMuted} hidden sm:block`}>
                T. Sachintha Imesh [FYZIE] • සංස්කරණය 2026
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? `${themeClasses.badgeBg} font-semibold shadow-xs`
                      : `${themeClasses.textMuted} hover:${themeClasses.textColor} hover:bg-black/5 dark:hover:bg-white/5`
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Search, Theme Selector, Font Size */}
          <div className="flex items-center gap-2">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="සොයන්න"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm border transition-all ${themeClasses.borderColor} ${themeClasses.textMuted} hover:${themeClasses.textColor} bg-black/5 dark:bg-white/5`}
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">සොයන්න...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-black/10 dark:bg-white/10 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Reading Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                title="වර්ණ තේමාව තෝරන්න (Choose Reading Theme)"
                className={`p-2 rounded-lg border transition-all ${themeClasses.borderColor} ${themeClasses.textMuted} hover:${themeClasses.textColor} bg-black/5 dark:bg-white/5 flex items-center gap-1.5`}
              >
                <Palette className="w-4 h-4" />
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: themeOptions.find(t => t.id === theme)?.border }} />
              </button>

              {themeDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setThemeDropdownOpen(false)}
                  />
                  <div className={`absolute right-0 mt-2 w-72 p-2 rounded-xl shadow-xl border z-50 animate-in fade-in zoom-in-95 duration-100 ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
                    <div className="px-3 py-2 border-b border-black/5 dark:border-white/5 mb-1.5">
                      <p className={`text-xs font-semibold ${themeClasses.textColor}`}>කියවීමේ වර්ණ තේමාව (Theme)</p>
                      <p className={`text-[11px] ${themeClasses.textMuted}`}>ඔබගේ ඇස් වලට වඩාත් පහසු තේමාව තෝරන්න</p>
                    </div>

                    <div className="space-y-1">
                      {themeOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setTheme(opt.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-all ${
                            theme === opt.id
                              ? `${themeClasses.badgeBg} font-medium`
                              : `hover:bg-black/5 dark:hover:bg-white/5 ${themeClasses.textColor}`
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className="w-4 h-4 rounded-full border shadow-xs"
                              style={{ backgroundColor: opt.bg, borderColor: opt.border }}
                            />
                            <div>
                              <p className="text-xs font-semibold">{opt.name}</p>
                              <p className={`text-[10px] ${themeClasses.textMuted}`}>{opt.desc}</p>
                            </div>
                          </div>
                          {theme === opt.id && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        </button>
                      ))}
                    </div>

                    {/* Font Family Switcher */}
                    <div className="mt-2 pt-2 border-t border-black/5 dark:border-white/5 px-2">
                      <p className={`text-[11px] font-semibold mb-1.5 ${themeClasses.textColor}`}>අකුරු හැඩතලය (Typography)</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => setFontFamily('serif')}
                          className={`px-2 py-1.5 rounded text-xs text-center border font-sinhala-serif ${
                            fontFamily === 'serif'
                              ? 'border-amber-500 bg-amber-500/10 font-bold'
                              : 'border-transparent hover:bg-black/5'
                          }`}
                        >
                          පොත් අකුරු (Serif)
                        </button>
                        <button
                          onClick={() => setFontFamily('sans')}
                          className={`px-2 py-1.5 rounded text-xs text-center border font-sinhala-sans ${
                            fontFamily === 'sans'
                              ? 'border-amber-500 bg-amber-500/10 font-bold'
                              : 'border-transparent hover:bg-black/5'
                          }`}
                        >
                          නවීන (Sans)
                        </button>
                      </div>
                    </div>

                    {/* Font Size Adjuster */}
                    <div className="mt-2 pt-2 border-t border-black/5 dark:border-white/5 px-2">
                      <p className={`text-[11px] font-semibold mb-1.5 ${themeClasses.textColor}`}>අකුරු ප්‍රමාණය (Size)</p>
                      <div className="grid grid-cols-3 gap-1">
                        <button
                          onClick={() => setFontSize('normal')}
                          className={`px-2 py-1 rounded text-xs text-center border ${
                            fontSize === 'normal' ? 'border-amber-500 bg-amber-500/10 font-bold' : 'border-transparent'
                          }`}
                        >
                          සාමාන්‍ය
                        </button>
                        <button
                          onClick={() => setFontSize('large')}
                          className={`px-2 py-1 rounded text-sm text-center border ${
                            fontSize === 'large' ? 'border-amber-500 bg-amber-500/10 font-bold' : 'border-transparent'
                          }`}
                        >
                          විශාල
                        </button>
                        <button
                          onClick={() => setFontSize('xlarge')}
                          className={`px-2 py-1 rounded text-base text-center border ${
                            fontSize === 'xlarge' ? 'border-amber-500 bg-amber-500/10 font-bold' : 'border-transparent'
                          }`}
                        >
                          ඉතා විශාල
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Direct PDF Download Button */}
            <button
              onClick={() => downloadBookPdf()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="සම්පූර්ණ PDF ග්‍රන්ථය සෘජුවම බාගත කරන්න (Direct Download Book PDF)"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">PDF බාගත කරන්න</span>
              <span className="text-[10px] hidden md:inline px-1 py-0.5 rounded bg-black/20 font-mono">PDF</span>
            </button>

            {/* Quick Read Progress Badge */}
            <div
              onClick={() => setActiveTab('contents')}
              title={`පරිච්ඡේද ${allChapters.length}න් ${readChapterIds.length}ක් කියවා ඇත`}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer border ${themeClasses.borderColor} ${themeClasses.badgeBg}`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{Math.round((readChapterIds.length / allChapters.length) * 100)}%</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg border ${themeClasses.borderColor} ${themeClasses.textMuted}`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className={`xl:hidden py-3 px-2 border-t ${themeClasses.borderColor} animate-in slide-in-from-top-2 duration-150`}>
            {/* Mobile Direct Download Banner */}
            <button
              onClick={() => {
                downloadBookPdf();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-3 mb-3 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>සම්පූර්ණ PDF ග්‍රන්ථය බාගත කරන්න (Direct Download)</span>
            </button>

            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2.5 rounded-lg text-sm text-left transition-all ${
                    activeTab === item.id
                      ? `${themeClasses.badgeBg} font-bold`
                      : `${themeClasses.textMuted} hover:${themeClasses.textColor}`
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className={`p-2.5 rounded-lg ${themeClasses.cardBgSecondary} text-xs flex items-center justify-between`}>
              <span>කියවීමේ ප්‍රගතිය:</span>
              <span className="font-bold">{readChapterIds.length} / {allChapters.length} පරිච්ඡේද ({Math.round((readChapterIds.length / allChapters.length) * 100)}%)</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
