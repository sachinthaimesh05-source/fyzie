import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Code, 
  Terminal, 
  Atom, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Clock, 
  UserCheck,
  MessageCircle
} from 'lucide-react';
import { bookMeta, getWhatsAppBuyUrl } from '../data/bookMeta';
import { allVolumes } from '../data/volumes';

interface BookOverviewProps {
  onStartReading: () => void;
  onSelectVolume: (volumeId: number) => void;
  onOpenPdfModal: () => void;
  onOpenAuthorModal: () => void;
}

export const BookOverview: React.FC<BookOverviewProps> = ({
  onStartReading,
  onSelectVolume,
  onOpenPdfModal,
  onOpenAuthorModal
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Section with 3D Glassmorphic Book Showcase */}
      <section className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-indigo-950/50 backdrop-blur-2xl border border-white/10 shadow-2xl">
        {/* Glow circles behind */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-cyan-300 font-black">FyZie</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>OFFICIAL MASTERCLASS E-BOOK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{bookMeta.edition}</span>
            </div>

            <div>
              <span className="block text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 tracking-tight">
                FyZie Presents
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mt-1">
                {bookMeta.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-cyan-300 font-semibold font-sans">
              {bookMeta.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              මුල සිට සරලව, සැබෑ ලෝකයේ උපමා ඇසුරින් වෙබ් නිර්මාණකරණයේ සහ මෘදුකාංග ඉංජිනේරු විද්‍යාවේ ඉහළම තලයට පියනැගීමට සිංහලෙන් ලියැවුණු සම්පූර්ණ ප්‍රායෝගික අත්පොත.
            </p>

            {/* Author Credit Badge */}
            <div 
              onClick={onOpenAuthorModal}
              className="inline-flex items-center gap-3 p-2.5 pr-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md font-mono">
                FZ
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {bookMeta.author.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-400">
                    [FyZie]
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  {bookMeta.author.title}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onStartReading}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>කියවීම ආරම්භ කරන්න</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppBuyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp මඟින් මිලදී ගන්න</span>
              </a>

              <button
                type="button"
                onClick={onOpenPdfModal}
                className="px-4 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 font-semibold text-xs sm:text-sm border border-amber-500/30 hover:border-amber-400 shadow-lg shadow-amber-500/5 transition-all duration-300 flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>PDF විස්තර</span>
              </button>
            </div>
          </div>

          {/* Right: 3D Holographic Book Card Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group perspective-1000">
              <div className="w-64 sm:w-72 rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20 transform group-hover:rotate-y-6 group-hover:-rotate-x-2 transition-transform duration-500 relative overflow-hidden">
                {/* Hologram lines */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                
                {/* Book Spine accent */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-l-3xl" />

                <div className="space-y-4 pl-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                      COURSE BOOK
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      315 PAGES
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 block tracking-widest uppercase">
                      FyZie Course
                    </span>
                    <h2 className="text-xl font-black text-white leading-tight mt-1">
                      FULL STACK WEB DEVELOPMENT
                    </h2>
                    <p className="text-[11px] text-cyan-300/80 mt-1 font-mono">
                      COMPLETE SYSTEM ARCHITECTURE
                    </p>
                  </div>

                  <div className="py-4 border-y border-white/10 space-y-1.5 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">පරිමාවන් (Volumes):</span>
                      <span className="font-mono text-cyan-300 font-bold">09</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">පරිච්ඡේද (Chapters):</span>
                      <span className="font-mono text-cyan-300 font-bold">107</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">භාෂාව:</span>
                      <span className="text-white font-medium">සිංහල (Sinhala)</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-[11px]">
                      <span className="block text-slate-400">කර්තෘ:</span>
                      <span className="text-xs font-bold text-white">T. Sachintha Imesh</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold text-xs">
                      FY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
            <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">09</span>
            <p className="text-xs text-slate-400 mt-1">ප්‍රධාන පරිමාවන්</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
            <span className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">107</span>
            <p className="text-xs text-slate-400 mt-1">සවිස්තරාත්මක පරිච්ඡේද</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
            <span className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">315</span>
            <p className="text-xs text-slate-400 mt-1">සම්පූර්ණ පිටු සංඛ්‍යාව</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">100%</span>
            <p className="text-xs text-slate-400 mt-1">ප්‍රායෝගික කේත උදාහරණ</p>
          </div>
        </div>
      </section>

      {/* Preface & Author's Vision Section */}
      <section className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            කර්තෘගේ දැක්ම සහ පෙරවදන (Preface)
          </h2>
        </div>

        <blockquote className="italic text-base sm:text-lg text-slate-300 border-l-4 border-cyan-400 pl-4 py-1 leading-relaxed">
          "{bookMeta.author.quote}"
        </blockquote>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {bookMeta.preface}
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
          {bookMeta.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* All 9 Volumes Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            පොතෙහි අන්තර්ගත පරිමාවන් 09
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            සෑම පරිමාවක්ම වෙන වෙනම කියවීමට පහත ඕනෑම පරිමාවක් තෝරාගන්න
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVolumes.map((vol) => (
            <div
              key={vol.id}
              onClick={() => onSelectVolume(vol.id)}
              className="p-6 rounded-3xl bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    VOLUME 0{vol.volumeNumber}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {vol.pageRange}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {vol.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    {vol.englishTitle}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {vol.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">
                  {vol.chapterCount} පරිච්ඡේද
                </span>
                <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  කියවන්න <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Protection Notice */}
      <section className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>ඩිජිටල් බුද්ධිමය දේපළ ආරක්ෂණ දැනුම්දීම (Digital Copyright & Anti-Scraping Protection)</span>
        </div>
        <p className="text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed">
          මෙම වෙබ් අඩවිය පරිශීලකයන්ට පරිච්ඡේදයෙන් පරිච්ඡේදය අධ්‍යයනය කිරීමට පහසුකම් සපයන නිල කියවීම් වේදිකාවයි. සම්පූර්ණ පොත එකවර නොමිලේ බාගත කර අනිසි ලෙස විකිණීම වැළැක්වීමට අධි-ආරක්ෂිත තාක්ෂණික පියවර ගෙන ඇත. නිල PDF පිටපත අවශ්‍ය නම් පමණක් පහත ආරක්ෂිත ද්වාරය හරහා ලබා ගත හැක.
        </p>
        <button
          type="button"
          onClick={onOpenPdfModal}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>නිල PDF මිලදී ගැනීමේ ක්‍රියාවලිය</span>
        </button>
      </section>
    </div>
  );
};
