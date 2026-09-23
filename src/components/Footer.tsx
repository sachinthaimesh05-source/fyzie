import React from 'react';
import {
  BookOpen,
  Heart,
  ArrowUp,
  FileText,
  Compass,
  Code2,
  User,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { getThemeClasses } from '../utils/themeStyles';
import { bookVolumes } from '../data/bookInfo';

export const Footer: React.FC = () => {
  const { theme, setActiveTab, openReaderWithChapter } = useReader();
  const themeClasses = getThemeClasses(theme);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`no-print border-t transition-colors duration-200 mt-20 ${themeClasses.borderColor} ${themeClasses.cardBgSecondary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand & Summary */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className={`font-bold text-base font-sinhala-sans ${themeClasses.textColor}`}>
                සම්පූර්ණ වෙබ් සංවර්ධනය
              </span>
            </div>
            <p className={`text-xs leading-relaxed ${themeClasses.textMuted}`}>
              Full Stack Web Development පාඨමාලා ග්‍රන්ථය සහ ඩිජිටල් ඉගෙනුම් වේදිකාව. T. Sachintha Imesh [FYZIE] විසින් සම්පාදිතයි.
            </p>
            <p className={`text-[11px] ${themeClasses.textMuted}`}>
              පරිමා 9 • පරිච්ඡේද 98 • පිටු 300+
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${themeClasses.textColor}`}>
              ප්‍රධාන අංශ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); scrollToTop(); }}
                  className={`hover:text-amber-600 transition-colors ${themeClasses.textMuted}`}
                >
                  මුල් පිටුව (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contents'); scrollToTop(); }}
                  className={`hover:text-amber-600 transition-colors ${themeClasses.textMuted}`}
                >
                  සම්පූර්ණ පටුන (Table of Contents)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('roadmap'); scrollToTop(); }}
                  className={`hover:text-amber-600 transition-colors ${themeClasses.textMuted}`}
                >
                  ඉගෙනුම් මාර්ග සිතියම (Roadmap)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('playground'); scrollToTop(); }}
                  className={`hover:text-amber-600 transition-colors ${themeClasses.textMuted}`}
                >
                  සජීවී කේත වැඩබිම (Live Playground)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('pdf'); scrollToTop(); }}
                  className={`hover:text-amber-600 transition-colors ${themeClasses.textMuted}`}
                >
                  PDF ග්‍රන්ථය / මුද්‍රණය (PDF Hub)
                </button>
              </li>
            </ul>
          </div>

          {/* Key Volumes Shortcut */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${themeClasses.textColor}`}>
              ප්‍රධාන පරිමා
            </h4>
            <ul className="space-y-1.5 text-xs">
              {bookVolumes.slice(0, 5).map((vol) => (
                <li key={vol.id}>
                  <button
                    onClick={() => {
                      openReaderWithChapter(vol.chapters[0]?.id || 'ch-01');
                      scrollToTop();
                    }}
                    className={`hover:text-amber-600 transition-colors truncate block max-w-full text-left ${themeClasses.textMuted}`}
                  >
                    පරිමාව {vol.id}: {vol.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Author Statement */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${themeClasses.textColor}`}>
              කර්තෘ සහ හිමිකම්
            </h4>
            <p className={`text-xs leading-relaxed ${themeClasses.textMuted} mb-3`}>
              T. Sachintha Imesh [FYZIE]<br />
              Lead Software Engineer & Author
            </p>
            <button
              onClick={() => { setActiveTab('author'); scrollToTop(); }}
              className="text-xs font-semibold text-amber-600 hover:underline"
            >
              කර්තෘ ප්‍රකාශය සහ පෙරවදන →
            </button>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={themeClasses.textMuted}>
            © 2026 T. Sachintha Imesh [FYZIE]. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all hover:bg-black/5 ${themeClasses.borderColor} ${themeClasses.textColor}`}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>ඉහළට යන්න (Back to Top)</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
