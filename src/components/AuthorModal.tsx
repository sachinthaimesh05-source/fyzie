import React from 'react';
import {
  User,
  Heart,
  Award,
  BookOpen,
  Mail,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { bookMetadata, bookPreface, bookDedication } from '../data/bookInfo';
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
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-md bg-amber-100 flex items-center justify-center shrink-0">
            <span className="text-3xl font-extrabold text-amber-800">FY</span>
          </div>

          {/* Details */}
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className={`text-2xl sm:text-3xl font-extrabold font-sinhala-serif ${themeClasses.textColor}`}>
                {bookMetadata.author}
              </h1>
              <span className="px-2 py-0.5 rounded text-xs font-bold uppercase bg-amber-500/10 text-amber-600 border border-amber-500/20">
                FYZIE
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">
              {bookMetadata.authorRole}
            </p>

            <p className={`text-xs sm:text-sm leading-relaxed ${themeClasses.textMuted}`}>
              ශ්‍රී ලංකාවේ තාක්ෂණික අධ්‍යාපන ක්ෂේත්‍රයේ නව පිබිදීමක් ඇති කරමින්, ජාත්‍යන්තර මෘදුකාංග ඉංජිනේරු සම්මුතීන් සිංහල භාෂාවෙන් තරුණ පරපුර වෙත ගෙන ඒම වෙනුවෙන් කැප වූ ප්‍රවීණ මෘදුකාංග නිර්මාණකරුවෙකි.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-stone-500">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-500" />
                පරිමා 9ක සම්පූර්ණ කර්තෘත්වය
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                පළමු සංස්කරණය (2026)
              </span>
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
          <span className={themeClasses.textMuted}>කොළඹ, ශ්‍රී ලංකාව • 2026 ජනවාරි</span>
          <span className="font-bold text-amber-600">T. Sachintha Imesh [FYZIE]</span>
        </div>
      </section>

      {/* Copyright & License Note */}
      <section className="text-center text-xs space-y-2 text-stone-400">
        <p>© 2026 T. Sachintha Imesh [FYZIE]. All Rights Reserved.</p>
        <p className="max-w-xl mx-auto leading-normal">
          මෙම ග්‍රන්ථයේ හෝ එහි කොටස් කර්තෘගේ පූර්ව ලිඛිත අවසරයකින් තොරව කිසිදු ආකාරයකින් වාණිජමය අරමුණු සඳහා ප්‍රතිනිෂ්පාදනය කිරීම නීතියෙන් තහනම් වේ. අධ්‍යාපනික කටයුතු සඳහා පමණක් පරිශීලනය කරන්න.
        </p>
      </section>
    </div>
  );
};
