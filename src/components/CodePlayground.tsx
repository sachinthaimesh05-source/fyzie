import React, { useState } from 'react';
import {
  Code2,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  Copy,
  Check,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { getThemeClasses } from '../utils/themeStyles';

interface PlaygroundTemplate {
  name: string;
  category: string;
  html: string;
  css: string;
  js: string;
}

const templates: PlaygroundTemplate[] = [
  {
    name: 'පරිච්ඡේදය 40: To-Do List යෙදුම',
    category: 'JavaScript DOM',
    html: `<div class="app-card">
  <h2>මගේ වැඩ ලැයිස්තුව (To-Do List)</h2>
  <div class="input-row">
    <input type="text" id="taskInput" placeholder="අලුත් වැඩක් ලියන්න...">
    <button id="addBtn">එකතු කරන්න</button>
  </div>
  <ul id="taskList">
    <li>ජාවාස්ක්‍රිප්ට් 33 පරිච්ඡේදය කියවීම</li>
  </ul>
</div>`,
    css: `body {
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  padding: 30px;
}
.app-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 400px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 18px;
}
.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
}
button {
  background: #d97706;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #b45309;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 10px 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s;
}
li:hover {
  background: #e2e8f0;
}
.completed {
  text-decoration: line-through;
  opacity: 0.6;
  background: #dcfce7;
}`,
    js: `const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const val = input.value.trim();
  if (!val) return;
  
  const li = document.createElement("li");
  li.innerText = val;
  li.addEventListener("click", () => li.classList.toggle("completed"));
  list.appendChild(li);
  input.value = "";
});

// Click existing items
document.querySelectorAll("#taskList li").forEach(li => {
  li.addEventListener("click", () => li.classList.toggle("completed"));
});`
  },
  {
    name: 'පරිච්ඡේදය 20: Glassmorphism කාඩ්පත',
    category: 'Modern CSS',
    html: `<div class="glass-container">
  <div class="glass-card">
    <div class="badge">PRO EDITION</div>
    <h3>Full Stack Web Development</h3>
    <p>නවීන Glassmorphism සහ Backdrop Filter තාක්ෂණයෙන් සැරසූ කාඩ්පතක්.</p>
    <button class="btn">තව දැනගන්න</button>
  </div>
</div>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: system-ui, sans-serif;
}
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 32px;
  width: 320px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
.badge {
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  margin-bottom: 16px;
}
h3 {
  margin: 0 0 10px 0;
  font-size: 20px;
}
p {
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 24px;
}
.btn {
  background: white;
  color: #764ba2;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn:hover {
  transform: translateY(-2px);
}`,
    js: `document.querySelector(".btn").addEventListener("click", () => {
  alert("Glassmorphism සාර්ථකව ක්‍රියාත්මකයි!");
});`
  },
  {
    name: 'පරිච්ඡේදය 10: ප්‍රතිචාරාත්මක ලියාපදිංචි පෝරමය',
    category: 'HTML & CSS Forms',
    html: `<form class="form-box">
  <h3>ශිෂ්‍ය ලියාපදිංචිය</h3>
  <div class="field">
    <label>සම්පූර්ණ නම</label>
    <input type="text" placeholder="ඔබගේ නම මෙහි ලියන්න" required>
  </div>
  <div class="field">
    <label>විද්‍යුත් තැපෑල</label>
    <input type="email" placeholder="name@example.com" required>
  </div>
  <div class="field">
    <label>පාඨමාලාව</label>
    <select>
      <option>Full Stack Web Development</option>
      <option>React & TypeScript</option>
      <option>Next.js Engineering</option>
    </select>
  </div>
  <button type="submit">ලියාපදිංචි වන්න</button>
</form>`,
    css: `body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  padding: 40px;
}
.form-box {
  background: white;
  padding: 28px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 380px;
}
h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #0f172a;
}
.field {
  margin-bottom: 14px;
}
label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  margin-bottom: 6px;
}
input, select {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 13px;
}
button {
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
}`,
    js: `document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("ඔබගේ ලියාපදිංචිය සාර්ථකව භාරගන්නා ලදී!");
});`
  }
];

export const CodePlayground: React.FC = () => {
  const { theme } = useReader();
  const themeClasses = getThemeClasses(theme);

  const [activeTemplate, setActiveTemplate] = useState<number>(0);
  const [htmlCode, setHtmlCode] = useState(templates[0].html);
  const [cssCode, setCssCode] = useState(templates[0].css);
  const [jsCode, setJsCode] = useState(templates[0].js);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  const handleSelectTemplate = (idx: number) => {
    setActiveTemplate(idx);
    setHtmlCode(templates[idx].html);
    setCssCode(templates[idx].css);
    setJsCode(templates[idx].js);
  };

  const handleReset = () => {
    setHtmlCode(templates[activeTemplate].html);
    setCssCode(templates[activeTemplate].css);
    setJsCode(templates[activeTemplate].js);
  };

  const handleCopy = () => {
    const combined = `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n// JavaScript\n${jsCode}`;
    navigator.clipboard.writeText(combined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate sandbox iframe srcDoc
  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>
          try {
            ${jsCode}
          } catch(err) {
            console.error("Playground Error:", err);
          }
        </script>
      </body>
    </html>
  `;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
          කේත අත්හදා බැලීමේ පරිසරය • CODE PLAYGROUND
        </span>
        <h1 className={`text-2xl sm:text-3xl font-extrabold mt-1 font-sinhala-serif ${themeClasses.textColor}`}>
          සජීවී කේත වැඩබිම (Live Runner)
        </h1>
        <p className={`text-xs sm:text-sm mt-2 ${themeClasses.textMuted}`}>
          පොතේ ඇති HTML, CSS, සහ JavaScript කේතයන් බ්‍රවුසරය තුළම සංස්කරණය කර එහි සජීවී ප්‍රතිඵලය ක්ෂණිකව නරඹන්න.
        </p>
      </div>

      {/* Template Chooser Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {templates.map((tpl, i) => (
            <button
              key={i}
              onClick={() => handleSelectTemplate(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTemplate === i
                  ? 'bg-amber-600 text-white shadow-xs'
                  : `border ${themeClasses.borderColor} ${themeClasses.cardBg} ${themeClasses.textMuted} hover:${themeClasses.textColor}`
              }`}
            >
              {tpl.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 ${themeClasses.borderColor} ${themeClasses.textColor} hover:bg-black/5`}
            title="මුල් කේතයට හරවන්න"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">නැවත මුලට</span>
          </button>
          <button
            onClick={handleCopy}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 ${themeClasses.borderColor} ${themeClasses.textColor} hover:bg-black/5`}
            title="සියල්ල පිටපත් කරන්න"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">පිටපත් කරන්න</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Editor Box */}
        <div className={`rounded-2xl border overflow-hidden flex flex-col shadow-md ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
          {/* Tab Selector */}
          <div className="bg-stone-900 px-3 py-2 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-1">
              {(['html', 'css', 'js'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase font-bold transition-colors ${
                    activeTab === tab
                      ? 'bg-amber-500 text-stone-950'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-[11px] text-stone-500 font-mono">සජීවීව වෙනස් කරන්න</span>
          </div>

          {/* Text Area */}
          <div className="flex-1 bg-stone-950 p-2 min-h-[380px]">
            {activeTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="w-full h-full min-h-[380px] bg-transparent text-emerald-400 font-code text-xs sm:text-sm p-2 outline-none resize-none"
                spellCheck={false}
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="w-full h-full min-h-[380px] bg-transparent text-sky-400 font-code text-xs sm:text-sm p-2 outline-none resize-none"
                spellCheck={false}
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="w-full h-full min-h-[380px] bg-transparent text-amber-300 font-code text-xs sm:text-sm p-2 outline-none resize-none"
                spellCheck={false}
              />
            )}
          </div>
        </div>

        {/* Live Preview Iframe */}
        <div className={`rounded-2xl border overflow-hidden flex flex-col shadow-md ${themeClasses.cardBg} ${themeClasses.borderColor}`}>
          <div className="bg-stone-900 px-4 py-2.5 flex items-center justify-between border-b border-stone-800">
            <span className="text-xs font-mono text-stone-300 flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              සජීවී ප්‍රතිඵලය (Live Output)
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="flex-1 bg-white min-h-[380px]">
            <iframe
              srcDoc={srcDoc}
              title="Live Sandbox"
              sandbox="allow-scripts"
              className="w-full h-full min-h-[380px] border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
