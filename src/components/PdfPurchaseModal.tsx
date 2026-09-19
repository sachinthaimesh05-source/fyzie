import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  MessageCircle,
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { bookMeta, getWhatsAppBuyUrl } from '../data/bookMeta';

interface PdfPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfPurchaseModal: React.FC<PdfPurchaseModalProps> = ({ isOpen, onClose }) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');

  if (!isOpen) return null;

  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const url = getWhatsAppBuyUrl(buyerName, buyerEmail);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-slate-950/95 border border-emerald-500/40 shadow-2xl shadow-emerald-500/10 p-6 sm:p-8 my-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/40">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>OFFICIAL WHATSAPP PURCHASE & ACCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            සම්පූර්ණ නිල PDF පිටපත ලබා ගැනීම
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            වෙබ් අඩවියෙන් පරිච්ඡේද නොමිලේ කියවිය හැකි වුවද, අනවසරයෙන් විකිණීම සහ කොල්ලකෑම (Piracy) වැළැක්වීම සඳහා සම්පූර්ණ පිටු 315 ක PDF එක ආරක්ෂිතව තබා ඇත. ඔබට නිල PDF එක අවශ්‍ය නම් කර්තෘගේ නිල <strong>WhatsApp Chat</strong> එක හරහා සෘජුවම සම්බන්ධ වී ලබා ගත හැක.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Pricing Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-emerald-500/10 border border-emerald-500/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-300 font-mono uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                විශේෂ ශිෂ්‍ය වට්ටම් මිල (Special Student Price)
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-white">රු. 1,500</span>
                <span className="text-xs text-slate-400 line-through">රු. 3,500</span>
                <span className="text-xs text-emerald-400 font-bold">(57% OFF)</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-300 block">315 පිටු • පරිමාවන් 9</span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">High-Res Official PDF</span>
            </div>
          </div>

          {/* Quick Direct 1-Click WhatsApp Button */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/40 border-2 border-emerald-500/50 text-center space-y-3 shadow-lg shadow-emerald-950/50">
            <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold text-sm">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>කර්තෘගේ සෘජු WhatsApp Chat සබඳතාවය</span>
            </div>

            <p className="text-xs text-slate-300">
              පහත බොත්තම ක්ලික් කළ සැණින් Fyzie ගේ WhatsApp වෙත පණිවිඩය සූදානම් වී chat එක විවෘත වේ:
            </p>

            <button
              type="button"
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp මඟින් ක්ෂණිකව මිලදී ගන්න</span>
              <ExternalLink className="w-4 h-4 opacity-75" />
            </button>
          </div>

          {/* Optional: Fill info before messaging */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              නම සහ ඊමේල් ලිපිනය සමඟ WhatsApp පණිවිඩය යැවීමට (විකල්ප):
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">
                  ඔබගේ නම (Your Name)
                </label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="උදා: කසුන් පෙරේරා"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">
                  ඊමේල් ලිපිනය (Email)
                </label>
                <input
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  placeholder="kasun@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            {buyerName && (
              <button
                type="button"
                onClick={() => handleOpenWhatsApp()}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 font-semibold text-xs border border-emerald-500/40 flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>"{buyerName}" නමින් WhatsApp Chat එක විවෘත කරන්න</span>
              </button>
            )}
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <button 
            type="button"
            onClick={() => handleOpenWhatsApp()}
            className="flex items-center gap-1.5 text-emerald-400 hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>කර්තෘගේ නිල WhatsApp සබඳතාවය</span>
          </button>
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> නිල කර්තෘගේ සෘජු අනුමැතිය (Official Author)
          </span>
        </div>
      </div>
    </div>
  );
};
