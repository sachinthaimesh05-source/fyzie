import React, { useState } from 'react';
import {
  Bookmark,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Download,
  Share2,
  BookOpen,
  Sparkles,
  HelpCircle,
  Terminal,
  ExternalLink,
  Code2,
  ListFilter,
  Lightbulb,
  AlertTriangle,
  Briefcase,
  Wrench,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { getChapterById, getNextChapter, getPrevChapter, allChapters } from '../data/chapters/allChapters';
import { getThemeClasses, getFontClasses } from '../utils/themeStyles';

interface ReaderViewProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

export const ReaderView: React.FC<ReaderViewProps> = ({ onToggleSidebar, sidebarOpen }) => {
  const {
    theme,
    fontSize,
    fontFamily,
    currentChapterId,
    setCurrentChapterId,
    setActiveTab,
    isChapterRead,
    toggleReadChapter,
    isChapterBookmarked,
    toggleBookmarkChapter,
  } = useReader();

  const themeClasses = getThemeClasses(theme);
  const { sizeClass, familyClass } = getFontClasses(fontSize, fontFamily);

  const chapter = getChapterById(currentChapterId) || allChapters[0];
  const nextChapter = getNextChapter(chapter.id);
  const prevChapter = getPrevChapter(chapter.id);

  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedInterviewIdx, setExpandedInterviewIdx] = useState<number | null>(null);

  const isRead = isChapterRead(chapter.id);
  const isBookmarked = isChapterBookmarked(chapter.id);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 print-container">
      {/* Top Chapter Action Bar */}
      <div className={`no-print flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b ${themeClasses.borderColor}`}>
        <div className="flex items-center gap-2">
          {/* Toggle Sidebar Button */}
          <button
            onClick={onToggleSidebar}
            title="පටුන පෙන්වන්න / සඟවන්න"
            className={`p-2 rounded-lg border flex items-center gap-1.5 text-xs font-semibold transition-all ${
              themeClasses.borderColor
            } ${themeClasses.cardBg} ${themeClasses.textColor} hover:bg-black/5`}
          >
            <ListFilter className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">පටුන {sidebarOpen ? 'සඟවන්න' : 'පෙන්වන්න'}</span>
          </button>

          {/* Volume Indicator */}
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${themeClasses.borderColor} ${themeClasses.badgeBg}`}>
            පරිමාව {chapter.volumeId}: {chapter.volumeTitle}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Mark as Read Toggle */}
          <button
            onClick={() => toggleReadChapter(chapter.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isRead
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : `${themeClasses.borderColor} ${themeClasses.textColor} hover:bg-black/5`
            }`}
          >
            <CheckCircle className={`w-4 h-4 ${isRead ? 'fill-emerald-500 text-white' : ''}`} />
            <span>{isRead ? 'කියවා අවසන්' : 'කියවූ බව සලකුණු කරන්න'}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmarkChapter(chapter.id)}
            title={isBookmarked ? 'සුරැකි බව ඉවත් කරන්න' : 'පිටුව සුරකින්න'}
            className={`p-2 rounded-lg border transition-all ${
              isBookmarked
                ? 'border-amber-500 bg-amber-500/10 text-amber-600'
                : `${themeClasses.borderColor} ${themeClasses.textColor} hover:bg-black/5`
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          {/* Direct Download Book PDF */}
          <a
            href="/Full_Stack_Web_Development_Book_FYZIE.pdf"
            download="Full_Stack_Web_Development_Book_FYZIE.pdf"
            title="සම්පූර්ණ PDF ග්‍රන්ථය සෘජුවම බාගත කරන්න (Download Complete PDF Book)"
            className={`p-2 rounded-lg border transition-all ${themeClasses.borderColor} text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 flex items-center gap-1 font-semibold text-xs`}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">PDF</span>
          </a>

          {/* Share Button */}
          <button
            onClick={handleShareLink}
            title="සබැඳිය පිටපත් කරන්න (Share Link)"
            className={`p-2 rounded-lg border transition-all ${themeClasses.borderColor} ${themeClasses.textColor} hover:bg-black/5 relative`}
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Chapter Header Banner */}
      <header className="mb-8 sm:mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-amber-500 text-white">
            පරිච්ඡේදය {chapter.chapterNumber}
          </span>
          <span className={`text-xs font-medium ${themeClasses.textMuted}`}>
            පිටුව {chapter.pageNumber} • සම්පූර්ණ පාඩම
          </span>
        </div>

        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 ${familyClass} ${themeClasses.textColor}`}
        >
          {chapter.title}
        </h1>

        <p className={`text-sm sm:text-base font-medium tracking-wide ${themeClasses.textMuted}`}>
          {chapter.englishTitle}
        </p>
      </header>

      {/* Learning Objectives Box */}
      {chapter.learningObjectives && chapter.learningObjectives.length > 0 && (
        <section
          className={`p-5 sm:p-6 rounded-2xl border mb-8 sm:mb-12 shadow-xs ${themeClasses.cardBg} ${themeClasses.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <h2 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
              මෙම පරිච්ඡේදයේ ප්‍රධාන ඉගෙනුම් අරමුණු (Learning Objectives)
            </h2>
          </div>

          <ul className="grid sm:grid-cols-1 gap-2.5">
            {chapter.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 mt-0.5">
                  {i + 1}
                </span>
                <span className={`${themeClasses.textColor} leading-normal`}>{obj}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Chapter Sections Content */}
      <div className="space-y-8 sm:space-y-12">
        {chapter.sections.map((sec, secIdx) => (
          <section key={secIdx} className="space-y-4">
            <h3
              className={`text-xl sm:text-2xl font-bold border-b pb-2 ${themeClasses.borderColor} ${familyClass} ${themeClasses.textColor}`}
            >
              {sec.title}
            </h3>

            {/* Paragraphs */}
            <div className={`space-y-3.5 ${familyClass} ${sizeClass} ${themeClasses.textColor}`}>
              {sec.content.map((paragraph, pIdx) => {
                // Bullet points formatting
                if (paragraph.startsWith('•') || paragraph.startsWith('-')) {
                  return (
                    <div key={pIdx} className="flex items-start gap-2 pl-2">
                      <span className="text-amber-600 font-bold select-none">•</span>
                      <p className="flex-1 leading-relaxed">{paragraph.replace(/^[•-]\s*/, '')}</p>
                    </div>
                  );
                }
                return (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* ASCII Architecture Diagram */}
            {sec.asciiDiagram && (
              <div className="my-5 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-inner">
                <div className="bg-stone-800 text-stone-300 px-4 py-2 text-xs font-mono flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    සංකල්පමය සැලසුම් සටහන (Architecture Diagram)
                  </span>
                  <button
                    onClick={() => copyToClipboard(sec.asciiDiagram || '', secIdx + 100)}
                    className="hover:text-white transition-colors"
                  >
                    {copiedCodeIndex === secIdx + 100 ? (
                      <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                        <Check className="w-3 h-3" /> පිටපත් විය
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-stone-900 text-amber-300 font-mono text-xs sm:text-sm overflow-x-auto leading-tight">
                  {sec.asciiDiagram}
                </pre>
              </div>
            )}

            {/* Code Snippet Box */}
            {sec.codeSnippet && (
              <div className="my-5 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md">
                <div className="bg-stone-800 text-stone-200 px-4 py-2 text-xs font-mono flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span className="uppercase font-bold tracking-wider text-[11px] text-emerald-400">
                      {sec.codeSnippet.language}
                    </span>
                    {sec.codeSnippet.description && (
                      <span className="text-stone-400 hidden sm:inline">• {sec.codeSnippet.description}</span>
                    )}
                  </div>
                  <button
                    onClick={() => copyToClipboard(sec.codeSnippet?.code || '', secIdx)}
                    className="flex items-center gap-1.5 px-2 py-1 rounded bg-stone-700/60 hover:bg-stone-700 text-stone-200 text-xs transition-colors"
                  >
                    {copiedCodeIndex === secIdx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">පිටපත් විය!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>කේතය පිටපත් කරන්න</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-stone-950 text-stone-100 font-code text-xs sm:text-sm overflow-x-auto leading-relaxed">
                  <code>{sec.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Section Tips (ප්‍රවීණ ඉඟි) */}
            {sec.tips && sec.tips.length > 0 && (
              <div className="my-4 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300">
                    ප්‍රවීණ ඉඟි සහ උපදෙස් (Pro Tips)
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-900 dark:text-amber-100">
                  {sec.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Section Mistakes (සුලබ වැරදි) */}
            {sec.mistakes && sec.mistakes.length > 0 && (
              <div className="my-4 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span className="text-xs font-bold text-rose-800 dark:text-rose-300">
                    සුලබව සිදුවන වැරදි සහ ඒවා වළක්වා ගැනීම (Common Pitfalls)
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-rose-900 dark:text-rose-100">
                  {sec.mistakes.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">⚠️</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Practical Task (ප්‍රායෝගික ව්‍යාපෘති පැවරුම) */}
      {chapter.practicalTask && (
        <section
          className={`mt-10 sm:mt-14 p-5 sm:p-6 rounded-2xl border shadow-sm ${themeClasses.cardBg} border-amber-500/40`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-5 h-5 text-amber-600" />
            <h3 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
              ප්‍රායෝගික ව්‍යාපෘති පැවරුම: {chapter.practicalTask.title}
            </h3>
          </div>
          <div className="space-y-2">
            <p className={`text-xs font-semibold ${themeClasses.textMuted}`}>අනුගමනය කළ යුතු පියවර (Step-by-step):</p>
            <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm">
              {chapter.practicalTask.steps.map((step, sIdx) => (
                <li key={sIdx} className={`leading-relaxed ${themeClasses.textColor}`}>
                  <span className="font-normal">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Technical Interview Questions & Answers (සම්මුඛ පරීක්ෂණ ප්‍රශ්න) */}
      {chapter.interviewQuestions && chapter.interviewQuestions.length > 0 && (
        <section
          className={`mt-8 p-5 sm:p-6 rounded-2xl border ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <h3 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
              තාක්ෂණික සම්මුඛ පරීක්ෂණ ප්‍රශ්න සහ පිළිතුරු (Interview Q&A)
            </h3>
          </div>

          <div className="space-y-3">
            {chapter.interviewQuestions.map((qa, qIdx) => {
              const isExpanded = expandedInterviewIdx === qIdx;
              return (
                <div
                  key={qIdx}
                  className={`rounded-xl border transition-all ${themeClasses.cardBg} ${themeClasses.borderColor}`}
                >
                  <button
                    onClick={() => setExpandedInterviewIdx(isExpanded ? null : qIdx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold"
                  >
                    <span className={themeClasses.textColor}>
                      Q{qIdx + 1}: {qa.question}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-3.5 pt-0 border-t border-black/5 dark:border-white/5 text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                      <p className="font-semibold text-emerald-600 mb-1">පිළිතුර:</p>
                      <p>{qa.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Key Takeaways Summary Banner */}
      {chapter.keyPoints && chapter.keyPoints.length > 0 && (
        <section
          className={`mt-8 p-5 sm:p-6 rounded-2xl border ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <h3 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
              මතක තබා ගත යුතු ප්‍රධාන කරුණු (Key Takeaways)
            </h3>
          </div>
          <ul className="space-y-2">
            {chapter.keyPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span className={`${themeClasses.textColor}`}>{pt}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Practice Exercises */}
      {chapter.exercises && chapter.exercises.length > 0 && (
        <section
          className={`mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl border ${themeClasses.cardBg} ${themeClasses.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <h3 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
              ප්‍රායෝගික අභ්‍යාස සහ ප්‍රශ්න (Exercises)
            </h3>
          </div>
          <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm">
            {chapter.exercises.map((ex, i) => (
              <li key={i} className={`${themeClasses.textColor} pl-1`}>
                <span className="font-normal">{ex}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Previous & Next Chapter Navigation Cards */}
      <nav aria-label="පරිච්ඡේද අතර මාරුවීම" className="no-print mt-12 sm:mt-16 pt-6 border-t border-black/10 dark:border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevChapter ? (
            <button
              onClick={() => {
                setCurrentChapterId(prevChapter.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all hover:border-amber-500 group ${
                themeClasses.cardBg
              } ${themeClasses.borderColor}`}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className={`text-[11px] font-semibold uppercase ${themeClasses.textMuted}`}>
                  පෙර පරිච්ඡේදය ({prevChapter.chapterNumber})
                </span>
                <p className={`text-xs sm:text-sm font-bold truncate font-sinhala-sans ${themeClasses.textColor}`}>
                  {prevChapter.title}
                </p>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <button
              onClick={() => {
                setCurrentChapterId(nextChapter.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`p-4 rounded-xl border text-right flex items-center justify-end gap-3 transition-all hover:border-amber-500 group ${
                themeClasses.cardBg
              } ${themeClasses.borderColor}`}
            >
              <div className="flex-1 min-w-0 text-right">
                <span className={`text-[11px] font-semibold uppercase ${themeClasses.textMuted}`}>
                  ඊළඟ පරිච්ඡේදය ({nextChapter.chapterNumber})
                </span>
                <p className={`text-xs sm:text-sm font-bold truncate font-sinhala-sans ${themeClasses.textColor}`}>
                  {nextChapter.title}
                </p>
              </div>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-xs font-bold text-amber-600">සුබ පැතුම්! ඔබ ග්‍රන්ථයේ අවසාන පරිච්ඡේදයට පැමිණ ඇත! 🎉</span>
            </div>
          )}
        </div>

        {/* Back to Table of Contents button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setActiveTab('contents')}
            className={`inline-flex items-center gap-2 text-xs font-semibold hover:underline ${themeClasses.textMuted}`}
          >
            <BookOpen className="w-4 h-4" />
            <span>සම්පූර්ණ පටුන වෙත ආපසු යන්න (View All Chapters)</span>
          </button>
        </div>
      </nav>
    </article>
  );
};
