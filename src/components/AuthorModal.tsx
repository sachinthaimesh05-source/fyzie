import React from 'react';
import {
  User,
  Heart,
  Award,
  BookOpen,
  Mail,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  HelpCircle,
  FileText,
  Compass,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import {
  bookMetadata,
  bookPreface,
  bookDedication,
  ABOUT_AUTHOR,
  HOW_TO_USE,
  NOTE_ON_CREATION,
  LEARNING_OUTCOMES,
  COPYRIGHT_NOTICE,
} from '../data/bookInfo';
import { getThemeClasses } from '../utils/themeStyles';

export const AuthorModal: React.FC = () => {
  const { theme, openReaderWithChapter } = useReader();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Author Profile Card */}
      <section className={`p-6 sm:p-8 rounded-3xl border shadow-sm ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          {/* Avatar */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-md bg-stone-900 text-white flex items-center justify-center shrink-0">
            <span className="text-3xl font-extrabold text-amber-400">FY</span>
          </div>

          {/* Details */}
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className={`text-2xl sm:text-3xl font-extrabold font-sinhala-serif ${themeClasses.textColor}`}>
                {bookMetadata.author}
              </h1>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-amber-500/10 text-amber-600 border border-amber-500/20">
                {bookMetadata.alias}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">
              {bookMetadata.authorRole}
            </p>

            <div className={`space-y-2 text-xs sm:text-sm leading-relaxed ${themeClasses.textColor}`}>
              {ABOUT_AUTHOR.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-stone-500">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-500" />
                පරිමා 9 සහ පරිච්ඡේද 107
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                පළමු සංස්කරණය ({bookMetadata.copyrightYear})
              </span>
              <a
                href={`mailto:${bookMetadata.email}`}
                className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500" />
                {bookMetadata.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dedication Card (පිදුම) */}
      <section className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}>
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <h2 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
            පිදුම (Dedication)
          </h2>
        </div>

        <p className={`text-sm sm:text-base leading-relaxed italic ${themeClasses.textColor} font-sinhala-serif`}>
          "{bookDedication.text}"
        </p>

        <p className="mt-3 text-xs font-semibold text-amber-600">
          - {bookDedication.authorSign}
        </p>
      </section>

      {/* Preface (පෙරවදන) */}
      <section className={`p-6 sm:p-8 rounded-3xl border shadow-xs space-y-4 ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-amber-600" />
          <h2 className={`text-xl font-bold font-sinhala-sans ${themeClasses.textColor}`}>
            {bookPreface.title}
          </h2>
        </div>

        <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${themeClasses.textColor} font-sinhala-serif`}>
          {bookPreface.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs">
          <span className={themeClasses.textMuted}>කොළඹ, ශ්‍රී ලංකාව • {bookMetadata.copyrightYear}</span>
          <span className="font-bold text-amber-600">{bookMetadata.author} {bookMetadata.alias}</span>
        </div>
      </section>

      {/* Note on Creation (නිර්මාණය පිළිබඳ සටහන) */}
      <section className={`p-6 sm:p-8 rounded-3xl border shadow-xs space-y-4 ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          <h2 className={`text-xl font-bold font-sinhala-sans ${themeClasses.textColor}`}>
            {NOTE_ON_CREATION.title}
          </h2>
        </div>

        <div className={`space-y-3.5 text-xs sm:text-sm leading-relaxed ${themeClasses.textColor} font-sinhala-serif`}>
          {NOTE_ON_CREATION.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* How to Use This Book (මෙම පොත භාවිතා කරන ආකාරය) */}
      <section className={`p-6 sm:p-8 rounded-3xl border shadow-xs space-y-4 ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}>
        <div className="flex items-center gap-2 mb-2">
          <Compass className="w-5 h-5 text-amber-600" />
          <h2 className={`text-xl font-bold font-sinhala-sans ${themeClasses.textColor}`}>
            {HOW_TO_USE.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HOW_TO_USE.rules.map((rule) => (
            <div
              key={rule.num}
              className={`p-4 rounded-2xl border ${themeClasses.cardBg} ${themeClasses.borderColor} flex items-start gap-3`}
            >
              <span className="w-7 h-7 rounded-xl bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {rule.num}
              </span>
              <div>
                <h3 className={`text-xs sm:text-sm font-bold font-sinhala-sans ${themeClasses.textColor} mb-1`}>
                  {rule.heading}
                </h3>
                <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Outcomes (අවසාන ඉගෙනුම් ප්‍රතිඵල) */}
      <section className={`p-6 sm:p-8 rounded-3xl border shadow-xs space-y-4 ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h2 className={`text-xl font-bold font-sinhala-sans ${themeClasses.textColor}`}>
            මෙම පොත අවසානයේ ඔබ ලබන ඉගෙනුම් ප්‍රතිඵල (Learning Outcomes)
          </h2>
        </div>

        <ul className="space-y-2.5">
          {LEARNING_OUTCOMES.map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className={themeClasses.textColor}>{outcome}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Copyright Notice */}
      <section className={`p-5 rounded-2xl border text-center ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}>
        <p className="text-xs font-bold text-stone-500 mb-1">
          {COPYRIGHT_NOTICE.copyright}
        </p>
        <p className={`text-[11px] ${themeClasses.textMuted}`}>
          {COPYRIGHT_NOTICE.content.join(' ')}
        </p>
      </section>

      {/* Action CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => openReaderWithChapter('ch-1')}
          className="px-8 py-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-md hover:shadow-lg transition-all"
        >
          පළමු පරිච්ඡේදයෙන් කියවීම ආරම්භ කරන්න 🚀
        </button>
      </div>
    </div>
  );
};
