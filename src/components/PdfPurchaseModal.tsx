import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Building2, 
  QrCode, 
  Lock, 
  MessageCircle,
  Copy,
  Check,
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
  const [selectedMethod, setSelectedMethod] = useState<'whatsapp' | 'bank' | 'qr'>('whatsapp');
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [copiedBank, setCopiedBank] = useState(false);

  if (!isOpen) return null;

  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const url = getWhatsAppBuyUrl(buyerName, buyerEmail);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyBankDetails = () => {
    navigator.clipboard.writeText(`Commercial Bank - A/C: 8009234120 - T. Sachintha Imesh (FYZIE)`);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
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

          {/* Payment Method Selector Tabs for Bank/Slip Info */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              බැංකු තැන්පතු හෝ QR මඟින් ගෙවීමට (Bank / LankaQR):
            </span>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedMethod('bank')}
                className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all text-xs font-semibold ${
                  selectedMethod === 'bank'
                    ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/50 shadow-md'
                    : 'bg-slate-900/95 text-slate-400 border-white/10 hover:border-white/20'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>බැංකු ගිණුම් විස්තර</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('qr')}
                className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all text-xs font-semibold ${
                  selectedMethod === 'qr'
                    ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/50 shadow-md'
                    : 'bg-slate-900/95 text-slate-400 border-white/10 hover:border-white/20'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>LankaQR / Slip එවන්න</span>
              </button>
            </div>
          </div>

          {/* Method Details */}
          {selectedMethod === 'bank' && (
            <div className="p-4 rounded-xl bg-slate-900/95 border border-white/10 text-xs space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">Commercial Bank ගිණුම් විස්තර:</span>
                <button
                  type="button"
                  onClick={copyBankDetails}
                  className="flex items-center gap-1 text-[11px] text-sky-400 hover:underline"
                >
                  {copiedBank ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedBank ? 'පිටපත් විය' : 'Copy details'}</span>
                </button>
              </div>
              <div className="space-y-1 font-mono text-slate-300">
                <p>බැංකුව: Commercial Bank of Ceylon</p>
                <p>ගිණුම් අංකය: 8009234120</p>
                <p>නම: T. Sachintha Imesh (FYZIE)</p>
                <p>ශාඛාව: Colombo City Office</p>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <p className="text-[11px] text-emerald-300/90">
                  * ගෙවීමෙන් පසු Slip පත්‍රිකාවේ ඡායාරූපය WhatsApp හරහා එවන්න.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenWhatsApp()}
                  className="text-[11px] text-emerald-400 underline font-semibold flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp Open කරන්න</span>
                </button>
              </div>
            </div>
          )}

          {selectedMethod === 'qr' && (
            <div className="p-4 rounded-xl bg-slate-900/95 border border-white/10 text-center space-y-3 animate-in fade-in duration-200">
              <div className="w-24 h-24 mx-auto rounded-xl bg-white p-2 flex items-center justify-center shadow-lg">
                <div className="w-full h-full border-2 border-slate-900 rounded-lg flex flex-col items-center justify-center font-mono text-[9px] text-slate-900 font-bold text-center">
                  <QrCode className="w-8 h-8 text-slate-900" />
                  <span>LankaQR</span>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Commercial Bank Flash, Sampath WePay, BOC SmartPay හෝ Genie මඟින් රු. 1,500 ගෙවා Slip එක WhatsApp හරහා එවන්න.
              </p>
              <button
                type="button"
                onClick={() => handleOpenWhatsApp()}
                className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp හරහා Slip එක එවන්න</span>
              </button>
            </div>
          )}
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
