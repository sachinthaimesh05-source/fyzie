import React from 'react';
import { X, Mail, Award, BookOpen, ShieldCheck, Heart, Sparkles, ExternalLink, MessageCircle } from 'lucide-react';
import { bookMeta, getWhatsAppBuyUrl } from '../data/bookMeta';

interface AuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPdfModal: () => void;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({
  isOpen,
  onClose,
  onOpenPdfModal
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-slate-950/95 border border-cyan-500/30 shadow-2xl p-6 sm:p-8 my-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Author Banner & Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl shadow-cyan-500/20">
              FY
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {bookMeta.author.name}
                </h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  [{bookMeta.author.alias}]
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {bookMeta.author.title}
              </p>
            </div>
          </div>

          {/* Author Quote */}
          <blockquote className="p-4 rounded-2xl bg-cyan-950/30 border-l-4 border-cyan-400 text-cyan-200 text-xs sm:text-sm italic leading-relaxed">
            "{bookMeta.author.quote}"
          </blockquote>

          {/* Bio */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>{bookMeta.author.bio}</p>
            <p>
              ශ්‍රී ලාංකික තාරුණ්‍යය ගෝලීය මෘදුකාංග ඉංජිනේරු ක්ෂේත්‍රයේ දැවැන්තයන් බවට පත් කිරීම මෙම ග්‍රන්ථයේ මූලිකම පරමාර්ථයයි.
            </p>
          </div>

          {/* Quick info boxes */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">ග්‍රන්ථ අනුවාදය</span>
              <p className="text-xs font-bold text-white">{bookMeta.edition}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">සෘජු විමසීම්</span>
              <p className="text-xs font-mono text-cyan-400 truncate">{bookMeta.author.email}</p>
            </div>
          </div>

          {/* Dedication */}
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 text-xs text-slate-400 flex items-start gap-2.5">
            <Heart className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
            <p>{bookMeta.dedication}</p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppBuyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp මඟින් සම්බන්ධ වන්න</span>
            </a>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenPdfModal();
              }}
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs font-medium text-center"
            >
              ගෙවීම් තොරතුරු
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
