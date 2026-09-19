import React, { useState } from 'react';
import { 
  CheckCircle, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  BookOpen, 
  Sparkles, 
  Lightbulb, 
  HelpCircle, 
  ShieldCheck, 
  Download, 
  Volume2, 
  Bookmark,
  Share2,
  Check,
  Award,
  MessageCircle
} from 'lucide-react';
import { Chapter, Volume } from '../types';
import { LiveCodeRunner } from './LiveCodeRunner';
import { getWhatsAppBuyUrl } from '../data/bookMeta';

interface ChapterViewerProps {
  chapter: Chapter;
  volume: Volume;
  fontSize: 'sm' | 'md' | 'lg';
  isRead: boolean;
  onToggleRead: (chapterId: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  onOpenPdfModal: () => void;
}

export const ChapterViewer: React.FC<ChapterViewerProps> = ({
  chapter,
  volume,
  fontSize,
  isRead,
  onToggleRead,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  onOpenPdfModal
}) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleAnswer = (id: number) => {
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const textToRead = `${chapter.englishTitle}. ${chapter.title}. ${chapter.description}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${chapter.title} - Full Stack Web Development by Fyzie`,
        text: `පරිච්ඡේදය ${chapter.chapterNumber}: ${chapter.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const fontSizeClasses = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose'
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 selection:bg-cyan-500/30 selection:text-white">
      {/* Volume & Chapter Navigation Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono font-semibold border border-cyan-500/20">
            පරිමාව {volume.volumeNumber}: {volume.badge}
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-mono">
            පරිච්ඡේදය {chapter.chapterNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 text-xs border border-white/10 transition-colors"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copiedLink ? 'ලින්ක් එක පිටපත් විය' : 'Share'}</span>
          </button>

          {/* Text-to-speech narration */}
          <button
            type="button"
            onClick={handleSpeech}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border transition-all ${
              isSpeaking
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 animate-pulse'
                : 'bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800'
            }`}
            title="Read title aloud"
          >
            <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isSpeaking ? 'නතර කරන්න' : 'Listen'}</span>
          </button>

          {/* Mark as Read Toggle */}
          <button
            type="button"
            onClick={() => onToggleRead(chapter.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
              isRead 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                : 'bg-slate-900/80 text-slate-300 hover:text-white border-white/10 hover:border-emerald-500/30'
            }`}
          >
            {isRead ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>කියවා ඇත</span>
              </>
            ) : (
              <>
                <Circle className="w-3.5 h-3.5 text-slate-400" />
                <span>කියවූ බව සලකුණු කරන්න</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Chapter Title & Header Block */}
      <header className="mt-8 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>CHAPTER {chapter.chapterNumber}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3 h-3" />
            මිනිත්තු 10-15 කියවීම
          </span>
          <span>•</span>
          <span className="text-slate-400">{chapter.pageRange}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
          {chapter.title}
        </h1>
        <p className="text-base sm:text-lg text-cyan-400 font-medium mt-1.5 font-sans">
          {chapter.englishTitle}
        </p>

        {/* Chapter Summary Card with Glassmorphism */}
        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-slate-900/80 via-indigo-950/30 to-slate-900/80 backdrop-blur-xl border border-white/10 shadow-xl">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {chapter.description}
          </p>
        </div>
      </header>

      {/* Learning Objectives Box */}
      {chapter.learningObjectives && chapter.learningObjectives.length > 0 && (
        <section className="my-8 p-6 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-200 uppercase tracking-wider">
              මෙම පරිච්ඡේදයේ ඉගෙනුම් අරමුණු (Learning Objectives)
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapter.learningObjectives.map((obj, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-cyan-300 text-[10px] font-mono font-bold">
                  ✓
                </div>
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Main Chapter Content Sections */}
      <div className={`space-y-10 text-slate-200 ${fontSizeClasses[fontSize]}`}>
        {chapter.sections.map((section, sIdx) => (
          <section key={sIdx} className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2 pt-4 border-t border-white/5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              {section.title}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-3">
              {section.content.map((paragraph, pIdx) => {
                const isBullet = paragraph.startsWith('•') || paragraph.startsWith('-') || /^\d+\./.test(paragraph);
                const isAnalogy = paragraph.includes('උපමාව') || paragraph.includes('උදාහරණයක්');

                if (isAnalogy) {
                  return (
                    <div key={pIdx} className="my-4 p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200/90 text-sm leading-relaxed">
                      <div className="flex items-center gap-2 font-bold text-amber-300 mb-1">
                        <Lightbulb className="w-4 h-4" />
                        <span>සැබෑ ලෝකයේ උපමාව (Real-world Analogy)</span>
                      </div>
                      <p>{paragraph}</p>
                    </div>
                  );
                }

                if (isBullet) {
                  return (
                    <div key={pIdx} className="pl-4 py-1 text-slate-300 border-l-2 border-slate-700">
                      {paragraph}
                    </div>
                  );
                }

                return (
                  <p key={pIdx} className="text-slate-300 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Ascii Architectural Diagram if present */}
            {section.asciiDiagram && (
              <div className="my-6 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950/90 p-4 shadow-xl">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs font-mono text-cyan-400">
                  <span>පද්ධති ආකෘතිය (Architectural Flow Diagram)</span>
                  <span className="text-[10px] text-slate-500 font-mono">ASCII Schema</span>
                </div>
                <pre className="font-mono text-xs sm:text-sm text-cyan-300/90 overflow-x-auto p-2 leading-relaxed whitespace-pre">
                  {section.asciiDiagram}
                </pre>
              </div>
            )}

            {/* Code Snippets with Live Runner */}
            {section.codeSnippets && section.codeSnippets.map((snippet, cIdx) => (
              <LiveCodeRunner
                key={cIdx}
                initialCode={snippet.code}
                language={snippet.language}
                title={snippet.title}
              />
            ))}
          </section>
        ))}
      </div>

      {/* Key Takeaways Section */}
      {chapter.keyPoints && chapter.keyPoints.length > 0 && (
        <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-900/60 backdrop-blur-xl border border-indigo-500/20 shadow-xl">
          <div className="flex items-center gap-2.5 mb-4 text-indigo-300">
            <Award className="w-5 h-5" />
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-100">
              මතක තබාගත යුතු රන් නීති (Key Takeaways)
            </h3>
          </div>
          <ul className="space-y-2.5">
            {chapter.keyPoints.map((point, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Interactive Exercises & Quizzes */}
      {chapter.exercises && chapter.exercises.length > 0 && (
        <div className="my-10 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-2.5 mb-5 text-cyan-400">
            <HelpCircle className="w-5 h-5" />
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-100">
              ස්වයං ඇගයීම් අභ්‍යාස සහ ප්‍රශ්න (Self-Assessment Exercises)
            </h3>
          </div>

          <div className="space-y-4">
            {chapter.exercises.map((ex) => {
              const isAnswerRevealed = revealedAnswers[ex.id];

              return (
                <div key={ex.id} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      Q{ex.id}
                    </span>
                    <p className="text-sm font-medium text-slate-200">
                      {ex.question}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => toggleAnswer(ex.id)}
                      className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isAnswerRevealed ? 'පිළිතුර සඟවන්න' : 'පිළිතුරු ඉඟිය බලන්න'}</span>
                    </button>
                    <span className="text-[10px] text-slate-500 font-mono">Chapter Assessment</span>
                  </div>

                  {isAnswerRevealed && (
                    <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200/90 leading-relaxed animate-in fade-in duration-200">
                      💡 <strong>විසඳුම් ඉඟිය:</strong> {chapter.description}. පාඩමේ ඉහත සඳහන් කොටස් හොඳින් කියවා ඔබේම වචනවලින් පිළිතුර ගලපන්න.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Official PDF Purchase Promotion Banner (Security & Monetization) */}
      <div className="my-12 relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-purple-500/10 backdrop-blur-2xl border border-amber-500/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              OFFICIAL COMPLETE E-BOOK (PDF EDITION)
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              පිටු 315ක සම්පූර්ණ PDF පොත ඔබ සතුව තබා ගැනීමට අවශ්‍යද?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              කර්තෘගේ නිල අත්සන සහිත, පරිච්ඡේද 107ම සහ පරිමාවන් 9ම එකට ඇතුළත්, මුද්‍රණය කළ හැකි සහ නොබැඳිව (Offline) කියවිය හැකි නිල ඩිජිටල් පිටපත සුරක්ෂිතව ලබා ගන්න.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href={getWhatsAppBuyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp මඟින් මිලදී ගන්න</span>
            </a>

            <button
              type="button"
              onClick={onOpenPdfModal}
              className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 font-semibold text-xs border border-amber-500/40 hover:border-amber-300 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ගෙවීම් විස්තර</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Chapter Navigation Bar (Previous & Next Chapter) */}
      <nav className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
        {hasPrevious ? (
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-cyan-500/30 text-xs sm:text-sm transition-all group"
          >
            <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] text-slate-400 font-mono">පෙර පරිච්ඡේදය</span>
              <span className="font-semibold text-white">Previous Chapter</span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {hasNext ? (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-200 border border-cyan-500/40 text-xs sm:text-sm transition-all group"
          >
            <div className="text-right">
              <span className="block text-[10px] text-cyan-400 font-mono">මීළඟ පරිච්ඡේදය</span>
              <span className="font-semibold text-white">Next Chapter</span>
            </div>
            <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            🎉 ඔබ සම්පූර්ණ පොතම සාර්ථකව අවසන් කර ඇත!
          </div>
        )}
      </nav>

      {/* Anti-Scraping / Copyright Watermark Footer */}
      <footer className="mt-16 pt-8 border-t border-white/5 text-center text-[11px] text-slate-500 space-y-1">
        <p>
          Full Stack Web Development © {new Date().getFullYear()} T. Sachintha Imesh [FYZIE]. All Rights Reserved.
        </p>
        <p className="text-[10px] text-slate-600">
          කර්තෘගේ අවසරයකින් තොරව මෙම අන්තර්ගතය පිටපත් කිරීම, නැවත විකිණීම හෝ අනිසි ලෙස ප්‍රචාරය කිරීම බුද්ධිමය දේපළ පනත යටතේ නීතිවිරෝධී වේ.
        </p>
      </footer>
    </article>
  );
};
