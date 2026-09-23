import { Volume } from '../types/book';
import { volume1Chapters } from './chapters/volume1';
import { volume2Chapters } from './chapters/volume2';
import { volume3Chapters } from './chapters/volume3';
import { volume4Chapters } from './chapters/volume4';
import { volume5Chapters } from './chapters/volume5';
import { volume6Chapters } from './chapters/volume6';
import { volume7Chapters } from './chapters/volume7';
import { volume8Chapters } from './chapters/volume8';
import { volume9Chapters } from './chapters/volume9';

export const BOOK_METADATA = {
  title: "FULL STACK WEB DEVELOPMENT",
  subtitle: "Complete Course Book",
  technologies: "HTML • CSS • JavaScript • React • Next.js",
  tagline: "A Complete Learning Guide to Modern Web Development",
  author: "T. SACHINTHA IMESH",
  alias: "[FYZIE]",
  authorRole: "Full Stack Web Developer & Software Engineering Mentor",
  email: "fyzie44@gmail.com",
  copyrightYear: "2026",
  coverImage: "/src/assets/images/book_cover_fullstack_1790146835720.jpg",
  authorImage: "/src/assets/images/author_avatar_1790146851211.jpg",
  heroBanner: "/src/assets/images/hero_reading_banner_1790146863557.jpg"
};

export const bookMetadata = BOOK_METADATA;

export const COPYRIGHT_NOTICE = {
  title: "ප්‍රකාශන හිමිකම්",
  copyright: "© 2026 T. SACHINTHA IMESH [FYZIE]",
  content: [
    "මෙම පොතේ සියලුම ප්‍රකාශන හිමිකම් කර්තෘ සතුය.",
    "කර්තෘගේ ලිඛිත අවසරයකින් තොරව මෙම පොතේ කිසිදු කොටසක් පිටපත් කිරීම, නැවත ප්‍රකාශනය කිරීම, බෙදාහැරීම හෝ වාණිජමය වශයෙන් භාවිත කිරීම තහනම් වේ."
  ]
};

export const PREFACE = {
  title: "පෙරවදන (Preface)",
  content: [
    "FULL STACK WEB DEVELOPMENT යනු නූතන වෙබ් සංවර්ධනය ඉගෙන ගැනීමට කැමති පාඨකයෙකු සඳහා මූලික සංකල්පවලින් ආරම්භ වී ක්‍රමයෙන් වඩාත් උසස් තාක්ෂණයන් වෙත ගමන් කරන සම්පූර්ණ පාඨමාලා මාර්ගෝපදේශනයකි. මෙහි HTML සහ CSS මගින් වෙබ් පිටු ගොඩනැගීමේ පදනම තැබීමෙන් පසු JavaScript, React, Next.js සහ TypeScript වැනි නූතන තාක්ෂණයන් වෙත පියවරෙන් පියවර ගමන් කිරීමට අවකාශ සලසා ඇත.",
    "මෙම පොත නිර්මාණය කිරීමේ අරමුණ වූයේ ඉගෙන ගන්නා කෙනෙකුට තනි තනි තොරතුරු අතර අතරමං නොවී, සම්බන්ධිත සහ පිළිවෙළකට සැකසූ ඉගෙනුම් ගමනක් ලබාදීමයි. සංකල්පයක් කියවා ඉදිරියට යාම පමණක් ප්‍රමාණවත් නොවේ; එය කේතයක් ලෙස ලියා, ප්‍රතිඵලය නිරීක්ෂණය කර, වෙනස්කම් කර බලමින් අත්දැකීමෙන් අවබෝධ කරගැනීම වඩාත් වැදගත්ය.",
    "එබැවින් මෙම පොත භාවිතා කරන විට ඉක්මනින් අවසානයට යාමට උත්සාහ නොකරන්න. එක් පරිච්ඡේදයක අදහස හොඳින් තේරුම්ගෙන, උදාහරණ ඔබම ලියා ක්‍රියාත්මක කර, වැරදි ඇති වූ විට ඒවා අසාර්ථකත්වයක් ලෙස නොව ඉගෙනුම් අවස්ථාවක් ලෙස භාවිත කරන්න. නිතර පුහුණුව, කුතුහලය සහ නැවත නැවත උත්සාහ කිරීම වෙබ් සංවර්ධනය ඉගෙනගැනීමේ සැබෑ ශක්තිය වේ.",
    "මෙම පොත ඔබට සරලව තාක්ෂණ ලැයිස්තුවක් මතක තබාගැනීමට නොව, ඒවා එකිනෙකට සම්බන්ධ කරමින් සැබෑ ව්‍යාපෘති නිර්මාණය කළ හැකි ආකාරයට සිතීමට උපකාරී වනු ඇතැයි බලාපොරොත්තු වෙමි. ඔබගේ ඉගෙනුම් ගමනේදී මෙම පොත මාර්ගෝපදේශකයක් ලෙස භාවිත කරමින්, ඔබගේම අත්දැකීම් සහ නිර්මාණ සමඟ එය ඉදිරියට ගෙන යන්න."
  ],
  paragraphs: [
    "FULL STACK WEB DEVELOPMENT යනු නූතන වෙබ් සංවර්ධනය ඉගෙන ගැනීමට කැමති පාඨකයෙකු සඳහා මූලික සංකල්පවලින් ආරම්භ වී ක්‍රමයෙන් වඩාත් උසස් තාක්ෂණයන් වෙත ගමන් කරන සම්පූර්ණ පාඨමාලා මාර්ගෝපදේශනයකි.",
    "මෙම පොත නිර්මාණය කිරීමේ අරමුණ වූයේ ඉගෙන ගන්නා කෙනෙකුට තනි තනි තොරතුරු අතර අතරමං නොවී, සම්බන්ධිත සහ පිළිවෙළකට සැකසූ ඉගෙනුම් ගමනක් ලබාදීමයි. සංකල්පයක් කියවා ඉදිරියට යාම පමණක් ප්‍රමාණවත් නොවේ; එය කේතයක් ලෙස ලියා, ප්‍රතිඵලය නිරීක්ෂණය කර, වෙනස්කම් කර බලමින් අත්දැකීමෙන් අවබෝධ කරගැනීම වඩාත් වැදගත්ය.",
    "එබැවින් මෙම පොත භාවිතා කරන විට ඉක්මනින් අවසානයට යාමට උත්සාහ නොකරන්න. එක් පරිච්ඡේදයක අදහස හොඳින් තේරුම්ගෙන, උදාහරණ ඔබම ලියා ක්‍රියාත්මක කර, වැරදි ඇති වූ විට ඒවා අසාර්ථකත්වයක් ලෙස නොව ඉගෙනුම් අවස්ථාවක් ලෙස භාවිත කරන්න.",
    "මෙම පොත ඔබට සරලව තාක්ෂණ ලැයිස්තුවක් මතක තබාගැනීමට නොව, ඒවා එකිනෙකට සම්බන්ධ කරමින් සැබෑ ව්‍යාපෘති නිර්මාණය කළ හැකි ආකාරයට සිතීමට උපකාරී වනු ඇතැයි බලාපොරොත්තු වෙමි."
  ]
};

export const bookPreface = PREFACE;

export const bookDedication = {
  text: "මගේ ජීවිතයේ සෑම පියවරකදීම මට ශක්තියක් වූ ආදරණීය දෙමව්පියන්ට සහ මට තාක්ෂණයේ මාවත පෙන්වා දුන් සියලුම ගුරුභවතුන්ට ගෞරවයෙන් පුද කරමි.",
  authorSign: "T. Sachintha Imesh [FYZIE]"
};

export const bookRoadmap = [
  { id: 1, title: "වෙබ් සහ HTML මූලික කරුණු", range: "පරිච්ඡේද 1-12", color: "from-amber-500 to-orange-600" },
  { id: 2, title: "CSS සහ ප්‍රතිචාරාත්මක වෙබ් නිර්මාණය", range: "පරිච්ඡේද 13-27", color: "from-blue-500 to-cyan-600" },
  { id: 3, title: "JavaScript මූලික කරුණු", range: "පරිච්ඡේද 28-42", color: "from-yellow-500 to-amber-600" },
  { id: 4, title: "උසස් JavaScript (ES6+, Async, OOP)", range: "පරිච්ඡේද 43-51", color: "from-emerald-500 to-teal-600" },
  { id: 5, title: "Git, GitHub සහ ප්‍රකාශනය", range: "පරිච්ඡේද 52-59", color: "from-purple-500 to-indigo-600" },
  { id: 6, title: "React.js සහ නූතන ඉදිරිපෙළ සංවර්ධනය", range: "පරිච්ඡේද 60-81", color: "from-sky-500 to-blue-600" },
  { id: 7, title: "TypeScript සහ වඩාත් ආරක්ෂිත සංවර්ධනය", range: "පරිච්ඡේද 82-89", color: "from-indigo-500 to-violet-600" },
  { id: 8, title: "Next.js සහ නූතන වෙබ් යෙදුම්", range: "පරිච්ඡේද 90-97", color: "from-slate-700 to-slate-900" },
  { id: 9, title: "AI යුගය සහ වෘත්තීය ගමන් මග", range: "පරිච්ඡේද 98", color: "from-rose-500 to-red-600" }
];

export const bookVolumes: Volume[] = [
  {
    id: 1,
    numberString: "01",
    title: "වෙබ් සහ HTML මූලික කරුණු",
    englishTitle: "Web & HTML Foundations",
    summary: "අන්තර්ජාලයේ ක්‍රියාකාරීත්වය, HTTP/HTTPS, සහ නූතන අර්ථවත් HTML5 ටැග්, ආකෘති පත්‍ර (Forms) සහ Accessibility පිළිබඳ සවිස්තරාත්මක අධ්‍යයනය.",
    chapterRange: "පරිච්ඡේද 01 - 12",
    chapters: volume1Chapters
  },
  {
    id: 2,
    numberString: "02",
    title: "CSS සහ ප්‍රතිචාරාත්මක වෙබ් නිර්මාණය",
    englishTitle: "CSS & Responsive Web Design",
    summary: "Box Model, Flexbox, CSS Grid, Transitions, Animations, Responsive Media Queries සහ Glassmorphism වැනි නූතන මෝස්තර නිර්මාණ ශිල්ප ක්‍රම.",
    chapterRange: "පරිච්ඡේද 13 - 27",
    chapters: volume2Chapters
  },
  {
    id: 3,
    numberString: "03",
    title: "ජාවාස්ක්‍රිප්ට් (JavaScript) මූලික කරුණු",
    englishTitle: "JavaScript Core & DOM Mastery",
    summary: "Variables, Functions, Loops, Array Methods, DOM Navigation, Event Listeners සහ Dynamic UI පාලනය ප්‍රායෝගික To-Do ව්‍යාපෘතියක් සමඟ.",
    chapterRange: "පරිච්ඡේද 28 - 42",
    chapters: volume3Chapters
  },
  {
    id: 4,
    numberString: "04",
    title: "උසස් ජාවාස්ක්‍රිප්ට් (ES6+, Async, OOP)",
    englishTitle: "Modern JS (ES6+), Async & APIs",
    summary: "Arrow functions, Destructuring, Promises, Async/Await, Fetch API, LocalStorage සහ කාලගුණ විග්‍රහ SkyCast Pro යෙදුම.",
    chapterRange: "පරිච්ඡේද 43 - 51",
    chapters: volume4Chapters
  },
  {
    id: 5,
    numberString: "05",
    title: "Git, GitHub, ටර්මිනලය සහ ප්‍රකාශනය",
    englishTitle: "Developer Tooling & Cloud Deployment",
    summary: "Terminal විධාන, Git Version Control, Branching, GitHub Remote Repo සහ Netlify / Vercel හරහා සජීවීව ලොවට විවෘත කිරීම.",
    chapterRange: "පරිච්ඡේද 52 - 59",
    chapters: volume5Chapters
  },
  {
    id: 6,
    numberString: "06",
    title: "රියැක්ට් (React.js) සහ ඉදිරිපෙළ සංවර්ධනය",
    englishTitle: "React.js, Hooks & Modern Frontend",
    summary: "Virtual DOM, JSX, State & Props, useEffect, Custom Hooks, Context API, Tailwind CSS සහ TaskMaster Pro පූර්ණ SPA යෙදුම.",
    chapterRange: "පරිච්ඡේද 60 - 81",
    chapters: volume6Chapters
  },
  {
    id: 7,
    numberString: "07",
    title: "ටයිප්ස්ක්‍රිප්ට් (TypeScript) ප්‍රවීණතාව",
    englishTitle: "TypeScript, Type Safety & Generics",
    summary: "Static Typing, Interfaces, Type Aliases, Generics, Discriminated Unions සහ React + TypeScript සංයෝජනය.",
    chapterRange: "පරිච්ඡේද 82 - 89",
    chapters: volume7Chapters
  },
  {
    id: 8,
    numberString: "08",
    title: "නෙක්ස්ට් (Next.js) සහ Full-Stack සංවර්ධනය",
    englishTitle: "Next.js App Router & Full Stack Architecture",
    summary: "App Router, Server Components (RSC), Client Components, Server Actions, Dynamic Routes, SSR / SSG / ISR, දත්ත සමුදාය සහ සත්‍යාපනය.",
    chapterRange: "පරිච්ඡේද 90 - 97",
    chapters: volume8Chapters
  },
  {
    id: 9,
    numberString: "09",
    title: "AI යුගය සහ වෘත්තීය ගමන් මග",
    englishTitle: "The AI Era, System Architecture & Career Launch",
    summary: "AI මෙවලම් (Cursor, Copilot, Claude, Gemini) සහායකයෙකු ලෙස බුද්ධිමත්ව භාවිතය, ජයග්‍රාහී Developer Portfolio, සහ සම්මුඛ පරීක්ෂණ ජය ගැනීම.",
    chapterRange: "පරිච්ඡේද 98",
    chapters: volume9Chapters
  }
];
