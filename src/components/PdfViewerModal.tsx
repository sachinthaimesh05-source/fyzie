import React, { useState } from 'react';
import {
  FileText,
  Upload,
  Printer,
  Download,
  CheckCircle2,
  AlertCircle,
  Eye,
  Maximize2,
  Trash2,
  BookOpen,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { getThemeClasses } from '../utils/themeStyles';
import { allChapters } from '../data/chapters/allChapters';

export const PdfViewerModal: React.FC = () => {
  const { theme, currentChapterId, openReaderWithChapter } = useReader();
  const themeClasses = getThemeClasses(theme);

  const [uploadedPdfUrl, setUploadedPdfUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setUploadedPdfUrl(url);
      setFileName(file.name);
      setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
    }
  };

  const handlePrintCurrentChapter = () => {
    window.print();
  };

  const handleClearPdf = () => {
    if (uploadedPdfUrl) {
      URL.revokeObjectURL(uploadedPdfUrl);
      setUploadedPdfUrl(null);
      setFileName('');
      setFileSize('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
          PDF ග්‍රන්ථය සහ මුද්‍රණ මධ්‍යස්ථානය
        </span>
        <h1 className={`text-2xl sm:text-3xl font-extrabold mt-1 font-sinhala-serif ${themeClasses.textColor}`}>
          PDF කියවීම සහ මුද්‍රණය (PDF Hub)
        </h1>
        <p className={`text-xs sm:text-sm mt-2 ${themeClasses.textMuted}`}>
          ඔබ සතු "Full Stack Web Development" PDF ගොනුව මෙතැනට එක් කර පහසුවෙන් කියවන්න, නැතහොත් වෙබ් අඩවියේ ඇති පරිච්ඡේද සෘජුවම PDF ලෙස මුද්‍රණය කරගන්න.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column: Upload or Viewer Area */}
        <div className="lg:col-span-8 space-y-6">
          {!uploadedPdfUrl ? (
            /* Upload Dropzone */
            <div
              className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center transition-all ${
                themeClasses.borderColor
              } ${themeClasses.cardBg} hover:border-amber-500`}
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-amber-500/10 text-amber-600">
                <Upload className="w-8 h-8" />
              </div>

              <h2 className={`text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
                ඔබගේ PDF ගොනුව මෙතැනට ඇද දමන්න (Drag & Drop)
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-md mx-auto ${themeClasses.textMuted}`}>
                ඔබ සතු පාඨමාලා PDF ගොනුව මෙතැනට Upload කර වෙබ් අඩවිය තුළම අලංකාරව කියවන්න. (Browse PDF file from your computer)
              </p>

              <label className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm cursor-pointer shadow-md transition-all">
                <FileText className="w-4 h-4" />
                <span>PDF ගොනුව තෝරන්න (Select PDF)</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              <p className={`text-[11px] mt-3 ${themeClasses.textMuted}`}>
                ගොනුව ඔබගේ බ්‍රවුසරය තුළ පමණක් සුරක්ෂිතව විවෘත වන අතර කිසිදු සර්වර් එකකට උඩුගත නොවේ.
              </p>
            </div>
          ) : (
            /* Embedded PDF Viewer */
            <div className={`rounded-2xl border overflow-hidden shadow-lg ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
              {/* Viewer Control Bar */}
              <div className={`p-3 border-b flex items-center justify-between ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}>
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className={`text-xs font-bold truncate ${themeClasses.textColor}`}>{fileName}</span>
                  <span className={`text-[10px] ${themeClasses.textMuted}`}>({fileSize})</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={uploadedPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg border hover:bg-black/5 text-xs flex items-center gap-1 font-semibold"
                    title="නව ටැබයක විවෘත කරන්න"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">විශාල කර බලන්න</span>
                  </a>
                  <button
                    onClick={handleClearPdf}
                    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-500/10 text-xs flex items-center gap-1 font-semibold"
                    title="PDF ඉවත් කරන්න"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">ඉවත් කරන්න</span>
                  </button>
                </div>
              </div>

              {/* PDF Iframe */}
              <div className="w-full h-[650px] bg-stone-900">
                <iframe
                  src={uploadedPdfUrl}
                  title="Course Book PDF Viewer"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Print & Export Options */}
        <div className="lg:col-span-4 space-y-5">
          {/* Quick Print Current Chapter */}
          <div className={`p-5 rounded-2xl border ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
            <div className="flex items-center gap-2 mb-2">
              <Printer className="w-5 h-5 text-amber-600" />
              <h3 className={`text-sm font-bold font-sinhala-sans ${themeClasses.textColor}`}>
                වත්මන් පරිච්ඡේදය මුද්‍රණය / Save PDF
              </h3>
            </div>
            <p className={`text-xs ${themeClasses.textMuted} mb-4`}>
              දැනට ඔබ කියවන පරිච්ඡේදය පිරිසිදු A4 කඩදාසි පෙනුමකින් PDF ලෙස Save කරගත හැක.
            </p>

            <button
              onClick={handlePrintCurrentChapter}
              className="w-full py-2.5 px-4 rounded-xl border border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold text-xs hover:bg-amber-500 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>පරිච්ඡේදය Print / PDF සුරකින්න</span>
            </button>
          </div>

          {/* Book Details Card */}
          <div className={`p-5 rounded-2xl border ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}>
            <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${themeClasses.textColor}`}>
              ග්‍රන්ථ පිරිවිතර (Book Specifications)
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className={themeClasses.textMuted}>කර්තෘ:</span>
                <span className="font-semibold">T. Sachintha Imesh [FYZIE]</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className={themeClasses.textMuted}>භාෂාව:</span>
                <span className="font-semibold">සිංහල (Sinhala Edition)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className={themeClasses.textMuted}>මුළු පරිමා:</span>
                <span className="font-semibold">09 Volumes</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className={themeClasses.textMuted}>පරිච්ඡේද:</span>
                <span className="font-semibold">98 Chapters</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className={themeClasses.textMuted}>පිටු ගණන:</span>
                <span className="font-semibold">300+ Pages</span>
              </div>
              <div className="flex justify-between py-1">
                <span className={themeClasses.textMuted}>සංස්කරණය:</span>
                <span className="font-semibold">2026 First Edition</span>
              </div>
            </div>
          </div>

          {/* Direct Reading Shortcut */}
          <div className={`p-5 rounded-2xl border ${themeClasses.cardBg} ${themeClasses.borderColor} text-center`}>
            <p className={`text-xs ${themeClasses.textMuted} mb-3`}>
              වෙබ් අඩවියේ ඇති අන්තර්ක්‍රියාකාරී කියවනය වඩාත් පහසු සහ වේගවත්ය:
            </p>
            <button
              onClick={() => openReaderWithChapter(currentChapterId)}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>ඩිජිටල් කියවනයට යන්න</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
