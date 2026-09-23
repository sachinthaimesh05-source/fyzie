import { Chapter } from '../../types/book';

export const volume8Chapters: Chapter[] = [
  {
    id: "ch-90",
    chapterNumber: 90,
    title: "නෙක්ස්ට් (Next.js) හැඳින්වීම සහ සංකල්ප",
    englishTitle: "Introduction to Next.js & Rendering Strategies",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 275,
    learningObjectives: [
      "Next.js යනු කුමක්ද සහ React පුස්තකාලය හා එහි ඇති වෙනස.",
      "නිරූපණ උපාය මාර්ග (Rendering Strategies): CSR, SSR, SSG, සහ ISR ගැඹුරින් අවබෝධ කර ගැනීම.",
      "සෙවුම් යන්ත්‍ර ප්‍රශස්තකරණය (SEO) සහ First Contentful Paint (FCP) වේගවත් වීම.",
      "Vercel සමාගම සහ Next.js පරිසර පද්ධතියේ ඉතිහාසය."
    ],
    sections: [
      {
        title: "90.1 Next.js යනු කුමක්ද?",
        content: [
          "Next.js යනු React මත පදනම්ව ගොඩනගන ලද, ලොව ප්‍රමුඛතම Full-Stack Web Application Framework එකයි. එය Vercel ආයතනය විසින් නඩත්තු කරනු ලබයි.",
          "සාම්ප්‍රදායික React (Client-Side Rendering - CSR) යෙදුමකදී බ්‍රවුසරය වෙත ලැබෙන්නේ හිස් HTML සැකිල්ලක් පමණි (<div id=\"root\"></div>). ඉන්පසු මෙගාබයිට් ගණනක JavaScript බාගත වී ක්‍රියාත්මක වන තෙක් පරිශීලකයාට තිරයේ කිසිදු අන්තර්ගතයක් නොපෙනේ. මෙය ජංගම දුරකථන සහ දුර්වල අන්තර්ජාල සබඳතා ඇති අයට දැඩි අපහසුතාවයක් මෙන්ම Google Bots ලාට වෙබ් අඩවියේ අන්තර්ගතය කියවීමට (Indexing) බාධාවකි.",
          "Next.js මෙම ගැටලුව මුළුමනින්ම විසඳයි. පරිශීලකයා වෙබ් පිටුව ඉල්ලූ සැණින්, සර්වර් එක තුළදීම අලංකාරව සකසන ලද සම්පූර්ණ HTML පිටුව ක්ෂණිකව බ්‍රවුසරයට එවයි. இதனால் පිටුව ක්ෂණිකව දිස්වන අතර, පසුබිමෙන් අවශ්‍ය JavaScript සක්‍රිය වේ (Hydration)."
        ],
        tips: [
          "SEO අත්‍යවශ්‍ය Blog, E-commerce, හෝ Marketing වෙබ් අඩවි සඳහා නිතරම Next.js තෝරාගන්න.",
          "React යනු UI Library එකක් වන අතර Next.js යනු Routing, Data Fetching, Optimizations ඇතුළත් Full-Stack Framework එකකි."
        ],
        mistakes: [
          "Next.js ඉගෙන ගැනීමට පෙර මූලික React Hooks (useState, useEffect) නොදැන සිටීම."
        ]
      },
      {
        title: "90.2 නිරූපණ උපාය මාර්ග 4 (Rendering Strategies)",
        content: [
          "Next.js සතුව ප්‍රධාන පිටු සැකසුම් ක්‍රමවේද 4ක් ඇත:",
          "1. CSR (Client-Side Rendering): සම්පූර්ණ පිටුව බ්‍රවුසරයේදී Render වේ.",
          "2. SSR (Server-Side Rendering): සෑම පරිශීලක ඉල්ලීමකදීම (Request) සර්වර් එක මගින් නැවුම්ව පිටුව සකසා එවයි. (නිතර වෙනස් වන පරිශීලක Dashboard සඳහා සුදුසුයි).",
          "3. SSG (Static Site Generation): යෙදුම Build කරන අවස්ථාවේදීම සියලු පිටු HTML ලෙස තනා තබයි. (අකුණු වේගයෙන් ලෝඩ් වන බ්ලොග් සහ ලේඛන සඳහා අතිවිශිෂ්ටයි).",
          "4. ISR (Incremental Static Regeneration): Static පිටුවක් වුවද, මුළු වෙබ් අඩවියම නැවත Build නොකර නිශ්චිත කාලයකට පසු (උදා: තත්පර 60කට වරක්) සර්වර් එකේදී පසුබිමෙන් යාවත්කාලීන කිරීමට ඉඩ සලසයි."
        ],
        asciiDiagram: `[User Request] 
      │
      ├──> (SSR): Server fetches DB -> Generates HTML -> Sends to Browser
      ├──> (SSG): Pre-built HTML sent immediately from Edge CDN (< 50ms)
      └──> (ISR): Pre-built HTML served + Background re-generation if stale`
      }
    ],
    keyPoints: [
      "Next.js යනු React සඳහා වන නිෂ්පාදන මට්ටමේ Full-Stack Framework එකකි.",
      "SSR සහ SSG මගින් Core Web Vitals සහ Google Search Ranking ඉහළ නංවයි.",
      "ISR මගින් Static වේගය සහ Dynamic දත්ත වල නැවුම් බව යන දෙකම එකවර ලැබේ."
    ],
    exercises: [
      "CSR, SSR, SSG, සහ ISR අතර වෙනස සන්සන්දනාත්මක වගුවක් මගින් ලියන්න.",
      "ඔබ තනන ව්‍යාපෘතිය ඊ-වාණිජ්‍ය නිෂ්පාදන පිටුවක් නම්, එයට වඩාත්ම ගැළපෙන Rendering Strategy එක තෝරා හේතු දක්වන්න."
    ],
    interviewQuestions: [
      {
        question: "Next.js හි Hydration යනු කුමක්ද?",
        answer: "සර්වර් එකෙන් බ්‍රවුසරයට එවන ලද ස්ථිතික HTML සැකිල්ල මතට JavaScript Event Listeners සහ React State සම්බන්ධ කර එය අන්තර්ක්‍රියාකාරී පිටුවක් බවට පත් කිරීමේ ක්‍රියාවලිය Hydration ලෙස හැඳින්වේ."
      }
    ]
  },
  {
    id: "ch-91",
    chapterNumber: 91,
    title: "ඇප් රවුටර් - ගොනු පද්ධතිය මත පදනම් වූ සංචලනය",
    englishTitle: "The App Router & File-based Routing",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 278,
    learningObjectives: [
      "Next.js App Router (app directory) ගෘහ නිර්මාණ ශිල්පය.",
      "විශේෂිත ගොනු (Special Files): layout.tsx, page.tsx, loading.tsx, error.tsx, not-found.tsx.",
      "Nested Routes සහ Route Groups `(group)` නිර්මාණය කිරීම.",
      "Dynamic Segments `[id]` සහ Catch-all Routes `[...slug]` හැසිරවීම."
    ],
    sections: [
      {
        title: "91.1 File-system Routing සංකල්පය",
        content: [
          "Next.js හි වෙනම Route ගොනු ලියමින් switch/case දැමිය යුතු නැත. `app/` ෆෝල්ඩරය තුළ ඔබ සාදන Folder ව්‍යුහය ස්වයංක්‍රීයව URL එක බවට පත්වේ.",
          "උදාහරණයක් ලෙස:",
          "• `app/page.tsx` -> `/` (මුල් පිටුව)",
          "• `app/about/page.tsx` -> `/about`",
          "• `app/blog/[slug]/page.tsx` -> `/blog/my-first-post`"
        ],
        codeSnippet: {
          language: "tsx",
          code: `// app/blog/[slug]/page.tsx
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return (
    <article className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">ලිපිය: {slug}</h1>
      <p className="mt-4 text-stone-600">නෙක්ස්ට් ඇප් රවුටරයේ ගතික පිටුවකි.</p>
    </article>
  );
}`,
          description: "Dynamic Route Component උදාහරණය"
        }
      },
      {
        title: "91.2 විශේෂිත ගොනු (Special Routing Files)",
        content: [
          "Next.js App Router හි සෑම ෆෝල්ඩරයක් තුළම භාවිත කළ හැකි නියමිත විශේෂ ගොනු කිහිපයක් ඇත:",
          "1. `layout.tsx`: පිටු කිහිපයකට පොදු සැකිල්ල (Header, Footer). පිටු මාරු වන විට මෙය නැවත render නොවන බැවින් State සුරැකේ.",
          "2. `page.tsx`: අදාළ URL එකේ ප්‍රධාන දෘශ්‍ය අතුරුමුහුණත.",
          "3. `loading.tsx`: පිටුවේ දත්ත පූරණය වන තෙක් React Suspense ආධාරයෙන් ස්වයංක්‍රීයව දිස්වන Skeleton Loader එක.",
          "4. `error.tsx`: දෝෂයක් හටගත් විට යෙදුම බිඳ නොවැටී පරිශීලකයාට පෙන්වන Error Boundary එක ('use client' විය යුතුය).",
          "5. `not-found.tsx`: පිටුවක් හමු නොවූ විට පෙන්වන 404 අතුරුමුහුණත."
        ],
        tips: [
          "URL එකට බලපෑමක් නොකර ගොනු සංවිධානය කිරීමට වරහන් සහිත Route Groups භාවිතා කරන්න: `app/(marketing)/about/page.tsx` -> `/about`."
        ]
      }
    ],
    keyPoints: [
      "App Router හි රවුටින් පදනම් වන්නේ Folder Hierarchy එක මතය.",
      "layout.tsx මගින් අනවශ්‍ය Re-renders වළක්වා කාර්යක්ෂමතාව ඉහළ නංවයි.",
      "loading.tsx සහ error.tsx මගින් ස්වයංක්‍රීයව User Experience වැඩිදියුණු වේ."
    ],
    exercises: [
      "පරිශීලක Dashboard එකක් සඳහා `app/dashboard/settings/page.tsx` සහ `app/dashboard/layout.tsx` ගොනු සාදා පරීක්ෂා කරන්න."
    ],
    interviewQuestions: [
      {
        question: "Next.js හි Pages Router සහ App Router අතර ඇති ප්‍රධාන වෙනස කුමක්ද?",
        answer: "Pages Router පදනම් වූයේ සාම්ප්‍රදායික Client Components මත වන අතර, App Router (Next.js 13+) පදනම් වන්නේ React Server Components (RSC), Nested Layouts සහ Streaming Architecture මතය."
      }
    ]
  },
  {
    id: "ch-92",
    chapterNumber: 92,
    title: "සර්වර් සහ ක්ලයන්ට් සංරචක - නවීන වෙබ් විප්ලවය",
    englishTitle: "Server Components (RSC) vs Client Components",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 281,
    learningObjectives: [
      "React Server Components (RSC) හි විප්ලවීය ක්‍රියාකාරීත්වය.",
      "Default Server Component සංකල්පය සහ Zero Bundle Size ප්‍රතිලාභය.",
      "'use client' නියෝගය යෙදිය යුතු නිවැරදි අවස්ථා.",
      "Server සහ Client සංරචක නිවැරදිව එකට සංයුක්ත කිරීම (Composition Pattern)."
    ],
    sections: [
      {
        title: "92.1 Server Components (RSC) යනු මොනවාද?",
        content: [
          "Next.js App Router හි සාදන සෑම Component එකක්ම පෙරනිමියෙන් (Default) Server Component එකකි. ඒවා ක්‍රියාත්මක වන්නේ සර්වර් එක තුළ පමණි.",
          "එහි වාසි:",
          "• Zero Bundle Size: සංරචකය ක්‍රියාත්මක කිරීමට අවශ්‍ය බරැති JavaScript කේත හෝ npm පැකේජ බ්‍රවුසරයට නොයවයි.",
          "• සෘජු Backend ප්‍රවේශය: API එකක් නොලියාම Component එක තුළදීම Database queries හෝ Server Secrets (API Keys) පරිහරණය කළ හැක.",
          "• ස්වයංක්‍රීය Caching: දත්ත Fetch කිරීම් සර්වර් මට්ටමේදී Cache වේ."
        ]
      },
      {
        title: "92.2 කවදාද 'use client' යෙදිය යුත්තේ?",
        content: [
          "ගොනුවක මුදුනෙන්ම `'use client';` යන නියෝගය යෙදූ විට එය Client Component එකක් බවට පත්වේ.",
          "එය අවශ්‍ය වන්නේ මෙම අවස්ථාවන්හිදී පමණි:",
          "1. අන්තර්ක්‍රියාකාරී State අවශ්‍ය විට: `useState`, `useReducer`, `useContext`.",
          "2. Lifecycle Effects අවශ්‍ය විට: `useEffect`, `useLayoutEffect`.",
          "3. Event Listeners අවශ්‍ය විට: `onClick`, `onChange`, `onSubmit`.",
          "4. Browser APIs අවශ්‍ය විට: `window`, `localStorage`, `navigator`, Geolocation."
        ],
        codeSnippet: {
          language: "tsx",
          code: `'use client';

import { useState } from 'react';

export function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      className="px-4 py-2 bg-rose-500 text-white font-bold rounded-lg"
    >
      ❤️ කැමැත්ත ({likes})
    </button>
  );
}`,
          description: "Client Component සඳහා නිදසුන"
        },
        tips: [
          "'use client' ගස මුදුනට නොදමා, අන්තර්ක්‍රියාකාරීත්වය අවශ්‍ය කුඩාම බොත්තම හෝ input එක වැනි Leaf Components වලට පමණක් සීමා කරන්න (Push Client Components to the Leaves)."
        ]
      }
    ],
    keyPoints: [
      "App Router හි පෙරනිමි සියලු සංරචක Server Components වේ.",
      "Server Components වලට Database වෙත කෙලින්ම සම්බන්ධ විය හැක.",
      "'use client' අවශ්‍ය වන්නේ Browser events සහ State අවශ්‍ය සංරචක සඳහා පමණි."
    ],
    exercises: [
      "පිටුවක Server Component එකක් තුළ Client Component එකක් Children ලෙස pass කරන Component Architecture එකක් සැලසුම් කරන්න."
    ]
  },
  {
    id: "ch-93",
    chapterNumber: 93,
    title: "දත්ත ලබා ගැනීම සහ හැඹිලිය (Data Fetching & Caching)",
    englishTitle: "Modern Data Fetching & Caching Architecture",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 284,
    learningObjectives: [
      "Async/Await සෘජුවම Server Components තුළ භාවිතය.",
      "Next.js Fetch API Caching විකල්ප (force-cache, no-store, revalidate).",
      "Request Memoization සහ Data Cache ක්‍රියාකාරීත්වය.",
      "React Suspense ආධාරයෙන් Streaming UI සකස් කිරීම."
    ],
    sections: [
      {
        title: "93.1 Server Component තුළ සෘජු Data Fetching",
        content: [
          "React හි මෙන් `useEffect` සහ `useState` ලියමින් Loader දැමීම වෙනුවට, Next.js Server Component එක `async function` එකක් බවට පත් කර සෘජුවම දත්ත ලබාගත හැක."
        ],
        codeSnippet: {
          language: "tsx",
          code: `// app/products/page.tsx
interface Product {
  id: string;
  name: string;
  price: number;
}

export default async function ProductsPage() {
  // සර්වර් එකේදී සෘජුවම fetch වේ
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 } // තත්පර 3600ක් (පැයක්) Cache වේ (ISR)
  });
  const products: Product[] = await res.json();

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <div key={p.id} className="p-4 border rounded-xl shadow-sm">
          <h2 className="font-bold">{p.name}</h2>
          <p className="text-amber-600 font-semibold">රු. {p.price}</p>
        </div>
      ))}
    </div>
  );
}`,
          description: "Server Component Data Fetching"
        }
      }
    ],
    keyPoints: [
      "Server Components තුළ async/await සෘජුවම භාවිතා කළ හැක.",
      "Next.js fetch API එක පුළුල් කර Caching සහ Revalidation එක් කර ඇත.",
      "Suspense මගින් මන්දගාමී දත්ත කොටස් වෙන වෙනම Stream කළ හැක."
    ],
    exercises: [
      "`fetch` සඳහා `cache: 'no-store'` දැමූ විට සිදුවන්නේ කුමක්දැයි පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-94",
    chapterNumber: 94,
    title: "සර්වර් ඇක්ෂන්ස් - පෝරම සහ විකෘති කිරීම්",
    englishTitle: "Server Actions & Form Mutations",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 287,
    learningObjectives: [
      "Server Actions යනු මොනවාද සහ 'use server' නියෝගය.",
      "වෙනම API Routes නොලියා Form submission හැසිරවීම.",
      "`revalidatePath` සහ `revalidateTag` මගින් Cache යාවත්කාලීන කිරීම.",
      "React 19 Hooks: `useActionState` සහ `useFormStatus`."
    ],
    sections: [
      {
        title: "94.1 Server Actions ක්‍රියාකාරීත්වය",
        content: [
          "Server Actions යනු සර්වර් එක තුළ ආරක්ෂිතව ක්‍රියාත්මක වන Asynchronous Functions වේ. ඒවා Form actions ලෙස හෝ Event handlers ලෙස කෙලින්ම කැඳවිය හැක.",
          "එහි ඇති විශිෂ්ටත්වය නම්, වෙනම `/api/submit` endpoint එකක් ලියා `fetch` කිරීමට අවශ්‍ය නොවීමයි."
        ],
        codeSnippet: {
          language: "tsx",
          code: `// app/actions/createPost.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // මෙහිදී කෙලින්ම Database එකට insert කළ හැක
  console.log("Saving to DB:", { title, content });

  // පිටුවේ Cache එක ඉවත් කර නැවුම් දත්ත පෙන්වන්න
  revalidatePath('/posts');
}`,
          description: "Server Action එකක් නිර්මාණය කිරීම"
        }
      }
    ],
    keyPoints: [
      "Server Actions මගින් API boilerplates විශාල ලෙස අඩු කරයි.",
      "`revalidatePath` මගින් දත්ත ඇතුළත් කළ සැණින් UI එක නැවුම් වේ.",
      "CSRF ආරක්ෂාව Next.js මගින් ස්වයංක්‍රීයව සපයනු ලැබේ."
    ],
    exercises: [
      "පරිශීලක නම සහ විද්‍යුත් තැපෑල ඇතුළත් කරන Form එකක් සඳහා Server Action එකක් ලියන්න."
    ]
  },
  {
    id: "ch-95",
    chapterNumber: 95,
    title: "මෙටාඩේටා සහ සෙවුම් යන්ත්‍ර ප්‍රශස්තකරණය (SEO)",
    englishTitle: "Metadata API, OpenGraph & Search Optimization",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 290,
    learningObjectives: [
      "Next.js Metadata API (Static & Dynamic Metadata).",
      "OpenGraph (OG) කාඩ්පත් සහ සමාජ මාධ්‍ය පෙරදසුන් (Social Share Cards).",
      "ගතික sitemap.ts සහ robots.ts ස්වයංක්‍රීයව ජනනය කිරීම.",
      "Google Search Console සඳහා Structured Data (JSON-LD) එක් කිරීම."
    ],
    sections: [
      {
        title: "95.1 Metadata API භාවිතය",
        content: [
          "Next.js හි `<head>` ටැගය අතින් ලිවීම වෙනුවට `metadata` object එකක් export කිරීමෙන් title, description, favicon, සහ OpenGraph පින්තූර පහසුවෙන් සැකසිය හැක."
        ],
        codeSnippet: {
          language: "tsx",
          code: `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full Stack Web Development | සම්පූර්ණ පාඨමාලා පොත',
  description: 'HTML, CSS, JS, React සහ Next.js සිංහලෙන් ඉගෙන ගන්න.',
  openGraph: {
    title: 'Full Stack Web Development',
    description: 'T. Sachintha Imesh [FYZIE] ගේ නිල පාඨමාලා ග්‍රන්ථය',
    url: 'https://example.com',
    siteName: 'FullStackDev',
    images: [{ url: '/og-cover.png', width: 1200, height: 630 }],
    locale: 'si_LK',
    type: 'website',
  },
};`,
          description: "Static Metadata උදාහරණය"
        }
      }
    ],
    keyPoints: [
      "Next.js Metadata API මගින් ඉහළම මට්ටමේ SEO සූදානමක් ලැබේ.",
      "`generateMetadata` මගින් Dynamic පිටු සඳහා (Blog post titles) මෙටා දත්ත ජනනය කළ හැක."
    ],
    exercises: [
      "ඔබගේ වෙබ් අඩවියට Dynamic OpenGraph Image එකක් ජනනය කරන කේතයක් ලියන්න."
    ]
  },
  {
    id: "ch-96",
    chapterNumber: 96,
    title: "දත්ත සමුදාය සහ සත්‍යාපනය (Databases & Authentication)",
    englishTitle: "Databases, ORMs (Prisma/Drizzle) & Auth.js",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 293,
    learningObjectives: [
      "Next.js සමග PostgreSQL, MySQL, හෝ SQLite සම්බන්ධ කිරීම.",
      "Modern ORMs: Prisma සහ Drizzle ORM මගින් Type-safe Database Queries ලිවීම.",
      "Auth.js (NextAuth v5) මගින් Google / GitHub OAuth සහ Credentials Login හැසිරවීම.",
      "ආරක්ෂිත Session කළමනාකරණය සහ Middleware මගින් Route Protection."
    ],
    sections: [
      {
        title: "96.1 Drizzle / Prisma ORM සහ Database Connection",
        content: [
          "Next.js Server Components සහ Server Actions තුළදී ORM එකක් හරහා දත්ත සමුදායට සම්බන්ධ වීම අතිශය සුමටය. Drizzle හෝ Prisma මගින් TypeScript Types ස්වයංක්‍රීයව ලැබෙන බැවින් SQL දෝෂ ඇති නොවේ."
        ],
        codeSnippet: {
          language: "tsx",
          code: `import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getUserProfile(userId: string) {
  // Type-safe query සෘජුවම Server Component එක තුළ
  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });
  return user;
}`,
          description: "Type-safe Database Query උදාහරණය"
        }
      }
    ],
    keyPoints: [
      "Next.js හි Database Credentials බ්‍රවුසරයට නිරාවරණය නොවන සේ සර්වර් මට්ටමේදී පමණක් ක්‍රියාත්මක වේ.",
      "Auth.js මගින් Social Logins සහ Passwordless Magic Links පහසුවෙන් ක්‍රියාත්මක කළ හැක."
    ],
    exercises: [
      "Next.js යෙදුමකට GitHub OAuth Login එකතු කිරීමේ පියවර ලැයිස්තුගත කරන්න."
    ]
  },
  {
    id: "ch-97",
    chapterNumber: 97,
    title: "ප්‍රායෝගික Full-Stack ව්‍යාපෘතිය - සම්පූර්ණ ඊ-වාණිජ්‍ය වෙළඳපොළ",
    englishTitle: "Full-Stack E-Commerce Market Capstone Project",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 296,
    learningObjectives: [
      "සම්පූර්ණ Full-Stack යෙදුමක පද්ධති සැලසුම (System Architecture).",
      "නිෂ්පාදන ලැයිස්තුව, පෙරහන් (Filters), සෙවීම් සහ Pagination.",
      "Shopping Cart කළමනාකරණය (Server State + Client State).",
      "Stripe / PayHere මගින් ආරක්ෂිත ගෙවීම් ද්වාරයක් (Payment Gateway) සම්බන්ධ කිරීම."
    ],
    sections: [
      {
        title: "97.1 ව්‍යාපෘති ගෘහ නිර්මාණ ශිල්පය",
        content: [
          "මෙම ව්‍යාපෘතියේදී අපි Next.js App Router, Tailwind CSS, Server Actions, PostgreSQL දත්ත සමුදාය, සහ Stripe Checkout ඒකාබද්ධ කර සම්පූර්ණ නිෂ්පාදන මට්ටමේ වෙළඳපොළක් ගොඩනගමු."
        ],
        asciiDiagram: `[Client Browser] 
      │ (Browse & Add to Cart)
[Next.js App Router] ──> (Server Components + Fast CDN)
      │ (Checkout via Server Action)
[PostgreSQL Database] + [Stripe Payment Gateway]
      │
[Order Confirmation & Email Notification]`
      }
    ],
    practicalTask: {
      title: "Full-Stack ඊ-වාණිජ්‍ය වෙබ් අඩවිය තැනීම",
      steps: [
        "Next.js App Router සහ Tailwind CSS මූලික ව්‍යාපෘතිය සකසන්න.",
        "PostgreSQL දත්ත සමුදාය තුළ Products, Users, සහ Orders වගු සාදන්න.",
        "Server Components මගින් නිෂ්පාදන කාඩ්පත් අධිවේගයෙන් Render කරන්න.",
        "Server Actions මගින් Checkout ක්‍රියාවලිය සම්පූර්ණ කරන්න."
      ]
    },
    keyPoints: [
      "Full-Stack සංවර්ධනයේදී Frontend සහ Backend මනා ලෙස ඒකාබද්ධ විය යුතුය.",
      "ගෙවීම් තොරතුරු හැසිරවීමේදී Webhooks මගින් සර්වර් මට්ටමේ තහවුරු කිරීම අනිවාර්ය වේ."
    ],
    exercises: [
      "Stripe Webhook එකක් Next.js Route Handler එකක් තුළ සත්‍යාපනය කරන්නේ කෙසේදැයි ලියන්න."
    ]
  },
  {
    id: "ch-98",
    chapterNumber: 98,
    title: "Next.js Middleware, Route Handlers (APIs) සහ Caching Deep Dive",
    englishTitle: "Middleware, Route Handlers & Advanced Caching",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 300,
    learningObjectives: [
      "Next.js Middleware ක්‍රියාකාරීත්වය සහ Edge Runtime හි එය ධාවනය වීම.",
      "Route Handlers (app/api/.../route.ts) මගින් RESTful APIs ලිවීම.",
      "Next.js Caching Layers 4: Request Memoization, Data Cache, Full Route Cache, Router Cache.",
      "On-demand Revalidation (revalidatePath සහ revalidateTag)."
    ],
    sections: [
      {
        title: "98.1 Next.js Middleware භාවිතය",
        content: [
          "Middleware යනු ඉල්ලීමක් (Request) පිටුවකට හෝ API එකකට ළඟා වීමට පෙර, අතරමැදදී එය පරීක්ෂා කර වෙනස් කිරීමට හෝ Redirect කිරීමට හැකි බලවත් මෙවලමකි. එය ක්‍රියාත්මක වන්නේ ලොව පුරා විසිරුණු Edge Servers වල බැවින් මිලි තත්පර කිහිපයකින් ප්‍රතිචාර දක්වයි."
        ],
        codeSnippet: {
          language: "ts",
          code: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;

  // ආරක්ෂිත පිටුවකට token නැතිව පිවිසීමට උත්සාහ කළහොත් login පිටුවට යවන්න
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};`,
          description: "Route Protection සඳහා Middleware භාවිතය"
        }
      }
    ],
    keyPoints: [
      "Middleware මගින් Route Protection, Geolocation, සහ Bot Detection සිදු කළ හැක.",
      "Route Handlers මගින් Third-party mobile apps හෝ Webhooks සඳහා REST APIs සකස් කළ හැක."
    ],
    exercises: [
      "API එකක් සඳහා IP Rate Limiting යොදන Middleware එකක තර්කය පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-99",
    chapterNumber: 99,
    title: "ජාත්‍යන්තරකරණය (i18n), ප්‍රවේශ්‍යතාව (a11y) සහ සම්පත් ප්‍රශස්තකරණය",
    englishTitle: "Internationalization (i18n), Accessibility & Asset Optimization",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 304,
    learningObjectives: [
      "`next/image` සංරචකය සහ ස්වයංක්‍රීය WebP/AVIF පරිවර්තනය, Lazy Loading.",
      "`next/font` මගින් Zero Layout Shift සමඟ Google Fonts සර්වර් මට්ටමේදී බාගත කර ගැනීම.",
      "බහුභාෂා වෙබ් අඩවි (Internationalization - i18n: සිංහල, English, දෙමළ).",
      "WCAG 2.1 ප්‍රවේශ්‍යතා (Accessibility) ප්‍රමිතීන් තහවුරු කිරීම."
    ],
    sections: [
      {
        title: "99.1 `next/image` සහ `next/font` ප්‍රශස්තකරණය",
        content: [
          "සාමාන්‍ය `<img>` ටැගයක් භාවිත කළ විට විශාල පින්තූර බාගත වී පිටුවේ පෙනුම සෙලවේ (Cumulative Layout Shift - CLS).",
          "`next/image` මගින්:",
          "1. පරිශීලකයාගේ තිරයේ ප්‍රමාණයට ගැළපෙන පරිදි පින්තූරයේ ප්‍රමාණය ස්වයංක්‍රීයව වෙනස් කරයි (Responsive sizes).",
          "2. නවීන WebP හෝ AVIF ආකෘතියට සම්පීඩනය කරයි (80% වඩා කුඩා වේ).",
          "3. තිරයට පැමිණෙන තෙක් පින්තූරය පූරණය නොකරයි (Lazy loading).",
          "`next/font` මගින් බ්‍රවුසරය Google වෙතින් අකුරු බාගත කිරීම වෙනුවට, සර්වර් එක තුළදීම Fonts ගබඩා කර CSS එක සමඟම ක්ෂණිකව සපයයි."
        ]
      }
    ],
    keyPoints: [
      "`next/image` මගින් Core Web Vitals ලකුණු 100% දක්වා ඉහළ නංවයි.",
      "i18n මගින් ලොව පුරා ඕනෑම භාෂාවක පරිශීලකයින්ට වෙබ් අඩවිය විවෘත වේ."
    ],
    exercises: [
      "`next/font/google` භාවිතයෙන් Noto Sans Sinhala ෆොන්ට් එක Layout එකට එක් කරන ආකාරය ලියන්න."
    ]
  },
  {
    id: "ch-100",
    chapterNumber: 100,
    title: "Vercel Production Deployment, Monitoring සහ Edge Functions",
    englishTitle: "Production Deployment, Observability & Edge Computing",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 308,
    learningObjectives: [
      "GitHub Repo එකක් Vercel වෙත සම්බන්ධ කර ස්වයංක්‍රීය CI/CD මගින් Production Deploy කිරීම.",
      "පරිසර විචල්‍යයන් (Environment Variables) ආරක්ෂිතව කළමනාකරණය.",
      "Vercel Analytics සහ Speed Insights මගින් සැබෑ පරිශීලක වේගය මැනීම.",
      "Edge Functions සහ Serverless Cold Starts අවම කිරීම."
    ],
    sections: [
      {
        title: "100.1 Vercel සජීවී ප්‍රකාශනය සහ CI/CD",
        content: [
          "Next.js සකස් කළ Vercel ආයතනය විසින්ම සපයන Global Edge Network එක Next.js ධාවනය සඳහා ලොව හොඳම පරිසරයයි.",
          "පියවර:",
          "1. ඔබගේ Next.js ව්‍යාපෘතිය GitHub වෙත Push කරන්න.",
          "2. Vercel.com වෙත ගොස් 'Add New Project' ක්ලික් කර එම Repo එක තෝරන්න.",
          "3. Environment Variables (Database URL, Secret Keys) ඇතුළත් කරන්න.",
          "4. 'Deploy' බොත්තම ක්ලික් කරන්න. තත්පර 60ක් තුළ ඔබගේ යෙදුම ලොව පුරා සජීවීව විවෘත වේ!"
        ]
      }
    ],
    keyPoints: [
      "Vercel Preview Deployments මගින් සෑම Pull Request එකකටම සජීවී පරීක්ෂණ URL එකක් ලැබේ.",
      "Serverless Architecture මගින් සර්වර් කළමනාකරණ බරකින් තොරව මිලියන ගණනක පරිශීලකයින් හැසිරවිය හැක."
    ],
    exercises: [
      "ඔබගේ Next.js ව්‍යාපෘතිය Vercel වෙත Deploy කර එහි Performance Score එක Lighthouse මගින් පරීක්ෂා කරන්න."
    ]
  }
];
