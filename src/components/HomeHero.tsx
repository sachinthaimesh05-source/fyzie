import React from 'react';
import {
  BookOpen,
  Compass,
  Code2,
  Download,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Award,
  Layers,
  Cpu,
  Globe,
  Terminal,
  Zap,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { bookVolumes, bookRoadmap } from '../data/bookInfo';
import { getThemeClasses } from '../utils/themeStyles';

export const HomeHero: React.FC = () => {
  const { theme, setActiveTab, openReaderWithChapter, readChapterIds } = useReader();
  const themeClasses = getThemeClasses(theme);

  const stats = [
    { label: 'පරිමා (Volumes)', value: '09', desc: 'මූලික තත්වයේ සිට Full Stack දක්වා' },
    { label: 'පරිච්ඡේද (Chapters)', value: '107', desc: 'සම්පූර්ණ ප්‍රායෝගික පාඩම්' },
    { label: 'පිටු සංඛ්‍යාව (Pages)', value: '340+', desc: 'ගැඹුරු න්‍යාය සහ කේත විග්‍රහ' },
    { label: 'ප්‍රායෝගික ව්‍යාපෘති', value: '20+', desc: 'කර්මාන්ත මට්ටමේ යෙදුම්' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* Hero Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Sparkles className="w-4 h-4" />
              <span>නිල ඩිජිටල් සංස්කරණය • 2026 Edition</span>
            </div>

            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-sinhala-serif ${themeClasses.textColor}`}>
              සම්පූර්ණ වෙබ් සංවර්ධනය
              <span className="block text-xl sm:text-2xl lg:text-3xl font-normal mt-2 text-amber-600 dark:text-amber-400 font-sans">
                Full Stack Web Development Course Book
              </span>
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed ${themeClasses.textMuted} max-w-2xl mx-auto lg:mx-0`}>
              වෙබ් නිර්මාණයේ ඇටසැකිල්ල වූ <strong>HTML</strong> සිට, හැඩතල ගන්වන <strong>CSS</strong>, මොළය වන <strong>JavaScript</strong>, නූතන <strong>React & TypeScript</strong> සහ සම්පූර්ණ Full-Stack බලය ලබා දෙන <strong>Next.js</strong> දක්වා සිංහල භාෂාවෙන් ලියැවුණු පරිපූර්ණ ග්‍රන්ථය සහ ඉගෙනුම් වේදිකාව.
            </p>

            {/* Author Credit */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500 bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-sm">
                FY
              </div>
              <div className="text-left">
                <p className={`text-sm font-bold ${themeClasses.textColor}`}>T. Sachintha Imesh [FYZIE]</p>
                <p className={`text-xs ${themeClasses.textMuted}`}>කර්තෘ සහ මෘදුකාංග ඉංජිනේරු • Author & Lead Engineer</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => openReaderWithChapter('ch-1')}
                className="px-6 py-3 rounded-xl font-bold text-sm sm:text-base bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>දැන්ම කියවීම අරඹන්න (Chapter 1)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('contents')}
                className={`px-5 py-3 rounded-xl font-semibold text-sm sm:text-base border transition-all hover:bg-black/5 dark:hover:bg-white/5 ${themeClasses.borderColor} ${themeClasses.textColor}`}
              >
                <span>සම්පූර්ණ පටුන බලන්න (107 Chapters)</span>
              </button>

              <a
                href="/Full_Stack_Web_Development_Book_FYZIE.pdf"
                download="Full_Stack_Web_Development_Book_FYZIE.pdf"
                className="px-5 py-3 rounded-xl font-bold text-sm sm:text-base border border-amber-500/50 bg-gradient-to-r from-amber-500/15 to-orange-500/15 hover:from-amber-500/25 hover:to-orange-500/25 text-amber-800 dark:text-amber-300 shadow-sm transition-all flex items-center gap-2.5 group"
                title="සම්පූර්ණ PDF ග්‍රන්ථය සෘජුවම බාගත කරන්න"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="leading-tight">PDF එක බාගත කරන්න</div>
                  <div className="text-[10px] font-normal text-amber-700 dark:text-amber-400 opacity-80">පරිච්ඡේද 107 • සම්පූර්ණ ග්‍රන්ථය (Direct Download)</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Book Cover Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group perspective-1000">
              {/* Decorative Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 to-rose-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Book Container with 3D shadow and spine */}
              <div className="relative w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20 bg-gradient-to-br from-amber-900 via-stone-900 to-black text-amber-50 p-6 flex flex-col justify-between min-h-[420px] transition-transform duration-300 group-hover:scale-[1.02]">
                {/* Book Spine Simulation */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-amber-950 via-amber-800 to-amber-900 shadow-inner" />

                {/* Top Badge */}
                <div className="pl-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-amber-400">
                      PROFESSIONAL HANDBOOK
                    </span>
                    <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                      2026 ED.
                    </span>
                  </div>
                  <div className="w-8 h-0.5 bg-amber-500 mt-2" />
                </div>

                {/* Center Title */}
                <div className="pl-3 py-6 my-auto text-left">
                  <h3 className="text-xl sm:text-2xl font-black font-sinhala-serif text-white tracking-wide leading-tight">
                    සම්පූර්ණ වෙබ්
                    <br />
                    සංවර්ධනය
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-amber-300/90 font-mono mt-2 font-bold">
                    Full Stack Web Dev
                  </p>
                  <p className="text-[11px] text-amber-100/70 mt-1">
                    HTML • CSS • JS • React • Next.js
                  </p>
                </div>

                {/* Bottom Footer on Book */}
                <div className="pl-3 border-t border-amber-500/20 pt-4 flex items-center justify-between text-[11px]">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-amber-400 block font-bold">කර්තෘ</span>
                    <span className="font-semibold text-white">T. Sachintha Imesh</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-wider text-amber-400 block font-bold">පරිමා 9</span>
                    <span className="text-white">පරිච්ඡේද 107</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 sm:p-8 rounded-2xl border grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ${themeClasses.cardBg} ${themeClasses.borderColor} shadow-xs`}>
          {stats.map((s, i) => (
            <div key={i} className="text-center sm:text-left">
              <p className="text-2xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 tracking-tight">
                {s.value}
              </p>
              <p className={`text-xs sm:text-sm font-bold mt-1 ${themeClasses.textColor}`}>{s.label}</p>
              <p className={`text-xs mt-0.5 ${themeClasses.textMuted}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volume Grid Section (Volumes 1 to 9) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            පරිමා 09 කින් සමන්විත පාඨමාලා ග්‍රන්ථය
          </span>
          <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 font-sinhala-serif ${themeClasses.textColor}`}>
            මූලික දැනුමේ සිට වෘත්තීය ඉංජිනේරු විද්‍යාව දක්වා
          </h2>
          <p className={`text-sm mt-2 ${themeClasses.textMuted}`}>
            ඕනෑම පරිමාවක් තෝරාගෙන එහි අඩංගු පරිච්ඡේද කෙලින්ම කියවීම ආරම්භ කරන්න.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bookVolumes.map((vol) => {
            const firstChId = vol.chapters[0]?.id || 'ch-01';

            return (
              <div
                key={vol.id}
                onClick={() => openReaderWithChapter(firstChId)}
                className={`group p-5 rounded-2xl border transition-all cursor-pointer hover:shadow-md hover:border-amber-500 flex flex-col justify-between ${
                  themeClasses.cardBg
                } ${themeClasses.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs bg-amber-500/10 text-amber-600 border border-amber-500/20">
                      0{vol.id}
                    </span>
                    <span className={`text-[11px] font-medium ${themeClasses.textMuted}`}>
                      {vol.chapterRange}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold font-sinhala-sans group-hover:text-amber-600 transition-colors ${themeClasses.textColor}`}>
                    {vol.title}
                  </h3>
                  <p className={`text-xs font-medium tracking-wide mt-0.5 ${themeClasses.textMuted}`}>
                    {vol.englishTitle}
                  </p>

                  <p className={`text-xs leading-relaxed mt-2.5 line-clamp-2 ${themeClasses.textMuted}`}>
                    {vol.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-amber-600 group-hover:translate-x-0.5 transition-transform">
                  <span>කියවීම අරඹන්න</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Preface & Author Statement Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}>
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-amber-600" />
            <div>
              <h3 className={`text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
                කර්තෘ පෙරවදන (Author's Preface)
              </h3>
              <p className={`text-xs ${themeClasses.textMuted}`}>T. Sachintha Imesh [FYZIE] වෙතින්</p>
            </div>
          </div>

          <p className={`text-xs sm:text-sm leading-relaxed italic ${themeClasses.textColor} font-sinhala-serif`}>
            "මෘදුකාංග ඉංජිනේරු විද්‍යාව යනු හුදෙක් කේත කටපාඩම් කිරීමක් නොව, තාර්කිකව සිතා සැබෑ ලෝකයේ ගැටලුවලට විසඳුම් ලබා දීමේ විශිෂ්ට කලාවකි. මගේ අරමුණ වූයේ ශ්‍රී ලාංකීය සිසුන්ට සහ තරුණ පරපුරට ජාත්‍යන්තර මට්ටමේ Full Stack දැනුම කිසිදු අපැහැදිලි බවකින් තොරව සිංහලෙන් තිළිණ කිරීමයි. ඔබ ලබා ගන්නා මේ දැනුම ලෝකය ජය ගැනීමට ශක්තියක් වේවා!"
          </p>

          <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
            <span className={`text-xs ${themeClasses.textMuted}`}>සංස්කරණය: 2026 • සියලු හිමිකම් ඇවිරිණි</span>
            <button
              onClick={() => setActiveTab('author')}
              className="text-xs font-semibold text-amber-600 hover:underline"
            >
              සම්පූර්ණ විස්තරය කියවන්න →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
