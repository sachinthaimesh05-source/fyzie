import React from 'react';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Cpu,
  BookOpen,
} from 'lucide-react';
import { useReader } from '../context/ReaderContext';
import { bookRoadmap } from '../data/bookInfo';
import { getThemeClasses } from '../utils/themeStyles';

export const RoadmapView: React.FC = () => {
  const { theme, openReaderWithChapter } = useReader();
  const themeClasses = getThemeClasses(theme);

  const roadmapMilestones = [
    {
      step: 1,
      volId: 1,
      firstChId: 'ch-1',
      title: 'HTML මූලධර්ම සහ වෙබ් සැකිල්ල',
      enTitle: 'HTML5 Semantic Foundations',
      duration: 'සති 1 - 2',
      badge: 'ඇටසැකිල්ල',
      techs: ['HTML5', 'Semantic Tags', 'Forms & Inputs', 'SEO Basics', 'Accessibility'],
      project: 'ප්‍රායෝගික Portfolio සැකිල්ල සහ ආකෘති පත්‍රය',
      icon: <Globe className="w-5 h-5 text-amber-500" />,
    },
    {
      step: 2,
      volId: 2,
      firstChId: 'ch-13',
      title: 'CSS ප්‍රවීණතාව සහ හැඩතල ගැන්වීම',
      enTitle: 'Modern CSS, Flexbox & Grid',
      duration: 'සති 2 - 3',
      badge: 'පෙනුම සහ හැඩය',
      techs: ['Box Model', 'Flexbox', 'CSS Grid', 'Media Queries', 'Glassmorphism', 'Variables'],
      project: 'ප්‍රතිචාරාත්මක නවීන විද්‍යුත් වාණිජ්‍ය වෙබ් අතුරුමුහුණත',
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
    },
    {
      step: 3,
      volId: 3,
      firstChId: 'ch-28',
      title: 'ජාවාස්ක්‍රිප්ට් මූලධර්ම සහ ඩොම් පාලනය',
      enTitle: 'JavaScript Fundamentals & DOM Manipulation',
      duration: 'සති 3 - 4',
      badge: 'මොළය සහ පේශි',
      techs: ['Variables (let/const)', 'Functions', 'Arrays & Objects', 'DOM API', 'Event Listeners'],
      project: 'අන්තර්ක්‍රියාකාරී To-Do List කළමනාකරණ පද්ධතිය',
      icon: <Code2 className="w-5 h-5 text-yellow-500" />,
    },
    {
      step: 4,
      volId: 4,
      firstChId: 'ch-43',
      title: 'උසස් ජාවාස්ක්‍රිප්ට් සහ අසමකාලීන කේතකරණය',
      enTitle: 'Modern JS (ES6+), Async/Await & Fetch API',
      duration: 'සති 2 - 3',
      badge: 'දත්ත හුවමාරුව',
      techs: ['Arrow Functions', 'Destructuring', 'Promises', 'Async/Await', 'Fetch API', 'LocalStorage'],
      project: 'SkyCast Pro කාලගුණ දත්ත විශ්ලේෂණ පද්ධතිය',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      step: 5,
      volId: 5,
      firstChId: 'ch-52',
      title: 'වෘත්තීය මෙවලම්, Git සහ සජීවී ප්‍රසිද්ධ කිරීම',
      enTitle: 'Terminal, Git, GitHub & Cloud Deployment',
      duration: 'සති 1 - 2',
      badge: 'කර්මාන්ත සම්මත',
      techs: ['CLI / Terminal', 'Git VCS', 'GitHub Cloud', 'Netlify / Vercel', 'SEO & Lighthouse'],
      project: 'වෘත්තීය Portfolio අඩවිය Netlify හරහා සජීවීව ප්‍රසිද්ධ කිරීම',
      icon: <Terminal className="w-5 h-5 text-emerald-500" />,
    },
    {
      step: 6,
      volId: 6,
      firstChId: 'ch-60',
      title: 'රියැක්ට් (React.js) සහ නවීන ඉදිරිපෙළ සංවර්ධනය',
      enTitle: 'React.js, Hooks, Context & Tailwind CSS',
      duration: 'සති 4 - 5',
      badge: 'SPA පෙරළිය',
      techs: ['Virtual DOM', 'JSX', 'useState / useEffect', 'React Router', 'Context API', 'Tailwind CSS'],
      project: 'TaskMaster Pro පූර්ණ React ව්‍යාපෘති පද්ධතිය',
      icon: <Cpu className="w-5 h-5 text-sky-500" />,
    },
    {
      step: 7,
      volId: 7,
      firstChId: 'ch-82',
      title: 'ටයිප්ස්ක්‍රිප්ට් (TypeScript) ප්‍රවීණතාවය',
      enTitle: 'TypeScript, Type Safety & Generic Architecture',
      duration: 'සති 2 - 3',
      badge: 'දෝෂ රහිත කේතය',
      techs: ['Static Typing', 'Interfaces & Types', 'Generics <T>', 'Discriminated Unions', 'Utility Types'],
      project: 'ආරක්ෂිත Type-safe API Client සහ දත්ත ව්‍යුහ පද්ධතිය',
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
    },
    {
      step: 8,
      volId: 8,
      firstChId: 'ch-90',
      title: 'නෙක්ස්ට් (Next.js) සහ Full-Stack සංවර්ධනය',
      enTitle: 'Next.js App Router, RSC & Server Actions',
      duration: 'සති 4 - 5',
      badge: 'පූර්ණ බලය',
      techs: ['App Router', 'Server Components', 'Server Actions', 'SSR / ISR', 'Database Pooling', 'Auth.js'],
      project: 'සම්පූර්ණ Full-Stack ඊ-වාණිජ්‍ය වෙළඳපොළ යෙදුම',
      icon: <Globe className="w-5 h-5 text-purple-500" />,
    },
    {
      step: 9,
      volId: 9,
      firstChId: 'ch-101',
      title: 'සැබෑ ලෝකයේ ව්‍යාපෘති, AI යුගය සහ ගෝලීය වෘත්තීය මාවත',
      enTitle: 'System Design, Security, AI & Global Career Launch',
      duration: 'නොනවතින',
      badge: 'ජයග්‍රහණය',
      techs: ['System Design', 'Web Security (OWASP)', 'Testing (Vitest/Playwright)', 'Docker & CI/CD', 'AI Augmentation', 'Portfolio'],
      project: 'ගෝලීය වෙළඳපොළට සුදුසු ජයග්‍රාහී Software Engineer Portfolio',
      icon: <BookOpen className="w-5 h-5 text-rose-500" />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
          සම්පූර්ණ ඉගෙනුම් මාර්ග සිතියම • FULL-STACK ROADMAP
        </span>
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-1 font-sinhala-serif ${themeClasses.textColor}`}>
          පියවර 09 කින් Full Stack Engineer කෙනෙකු වන්න
        </h1>
        <p className={`text-xs sm:text-sm mt-2 ${themeClasses.textMuted}`}>
          මෙම ග්‍රන්ථයේ පරිමා 9 තුළින් ඔබව මුල සිට අග දක්වා මෙහෙයවන ක්‍රමානුකූල ඉංජිනේරු ගමන් මාර්ගය.
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {roadmapMilestones.map((m) => (
          <div key={m.step} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-110 transition-transform">
              0{m.step}
            </div>

            {/* Milestone Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${themeClasses.cardBg} ${themeClasses.borderColor} hover:border-amber-500 hover:shadow-md`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    {m.icon}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-amber-600">
                      පරිමාව 0{m.volId} • {m.duration}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold font-sinhala-sans ${themeClasses.textColor}`}>
                      {m.title}
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  {m.badge}
                </span>
              </div>

              <p className={`text-xs ${themeClasses.textMuted} mb-4`}>
                {m.enTitle}
              </p>

              {/* Technologies Badges */}
              <div className="mb-4">
                <p className={`text-[11px] font-semibold mb-1.5 ${themeClasses.textMuted}`}>ප්‍රධාන තාක්ෂණයන්:</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.techs.map((t, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono border ${themeClasses.borderColor} ${themeClasses.cardBgSecondary} ${themeClasses.textColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone Project Highlight */}
              <div className={`p-3 rounded-xl border mb-4 ${themeClasses.cardBgSecondary} ${themeClasses.borderColor}`}>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ප්‍රායෝගික ව්‍යාපෘතිය (Capstone Project):</span>
                </div>
                <p className={`text-xs ${themeClasses.textColor}`}>{m.project}</p>
              </div>

              {/* CTA button */}
              <div className="flex justify-end">
                <button
                  onClick={() => openReaderWithChapter(m.firstChId)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-all"
                >
                  <span>පරිමාව කියවීම අරඹන්න</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
