import React, { useState } from 'react';
import { Play, RotateCcw, Check, Copy, Code2, Eye } from 'lucide-react';

interface LiveCodeRunnerProps {
  initialCode: string;
  language: string;
  title?: string;
}

export const LiveCodeRunner: React.FC<LiveCodeRunnerProps> = ({
  initialCode,
  language,
  title
}) => {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  const isRunnable = language === 'html' || language === 'javascript' || language === 'css';

  const generatePreviewSrc = () => {
    if (language === 'html') {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { 
                font-family: system-ui, -apple-system, sans-serif; 
                padding: 16px; 
                color: #e2e8f0; 
                background: #0f172a; 
                margin: 0;
              }
              button {
                background: #0284c7;
                color: #ffffff;
                border: none;
                padding: 8px 16px;
                border-radius: 6px;
                font-weight: bold;
                cursor: pointer;
              }
              input {
                padding: 8px;
                border-radius: 6px;
                border: 1px solid #334155;
                background: #1e293b;
                color: white;
                margin: 4px 0;
              }
              .card {
                background: #1e293b;
                border: 1px solid #334155;
                padding: 16px;
                border-radius: 12px;
                margin-top: 12px;
              }
            </style>
          </head>
          <body>
            ${code}
          </body>
        </html>
      `;
    }

    if (language === 'javascript') {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { 
                font-family: 'Fira Code', monospace; 
                padding: 16px; 
                color: #38bdf8; 
                background: #090d16; 
                margin: 0;
                font-size: 13px;
              }
              .log-entry { margin-bottom: 6px; border-bottom: 1px solid #1e293b; padding-bottom: 4px; }
            </style>
          </head>
          <body>
            <div id="output"></div>
            <script>
              const out = document.getElementById('output');
              const oldLog = console.log;
              const oldError = console.error;
              console.log = function(...args) {
                const p = document.createElement('div');
                p.className = 'log-entry';
                p.textContent = '▶ ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
                out.appendChild(p);
                oldLog.apply(console, args);
              };
              console.error = function(...args) {
                const p = document.createElement('div');
                p.className = 'log-entry';
                p.style.color = '#f87171';
                p.textContent = '✖ ' + args.join(' ');
                out.appendChild(p);
                oldError.apply(console, args);
              };
              try {
                ${code}
              } catch(e) {
                console.error(e.message);
              }
            </script>
          </body>
        </html>
      `;
    }

    return '';
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl transition-all duration-300">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-700" />
          </div>
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase">
            {language}
          </span>
          {title && (
            <span className="text-xs font-medium text-slate-400 truncate max-w-[200px] sm:max-w-md">
              {title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {isRunnable && (
            <div className="flex p-0.5 bg-slate-800/90 rounded-lg border border-white/5 mr-2">
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'code'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>කේතය</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'preview'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>පෙරදසුන</span>
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handleReset}
            title="Reset code"
            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">පිටපත් විය!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor & Preview Body */}
      <div className="relative">
        {activeTab === 'code' ? (
          <div className="relative font-mono text-sm">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-slate-950/95 text-slate-200 p-4 font-mono text-xs sm:text-sm leading-relaxed focus:outline-none focus:ring-1 focus:ring-sky-500/40 resize-y min-h-[140px] max-h-[420px] selection:bg-sky-500/30"
              spellCheck={false}
            />
          </div>
        ) : (
          <div className="bg-slate-900/95 p-3 min-h-[160px] max-h-[360px] overflow-hidden">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-slate-400 font-mono">
              <span>සජීවී ප්‍රතිඵලය (Live Sandboxed Output)</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ready
              </span>
            </div>
            <iframe
              title="Live Code Preview"
              srcDoc={generatePreviewSrc()}
              className="w-full h-[220px] rounded-lg border border-white/5 bg-slate-950"
              sandbox="allow-scripts"
            />
          </div>
        )}
      </div>
    </div>
  );
};
