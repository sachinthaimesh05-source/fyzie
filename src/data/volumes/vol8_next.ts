import { Volume } from '../../types';

export const volume8: Volume = {
  id: 8,
  volumeNumber: 8,
  title: "නෙක්ස්ට් පේ.එස් (Next.js) - අති නවීන වෙබ් රාමුව",
  englishTitle: "Next.js Cutting-Edge Full-stack Framework",
  color: "from-zinc-500/20 via-neutral-500/10 to-stone-500/20",
  iconName: "Layers",
  badge: "Next.js App Router & SSR",
  description: "Server-Side Rendering (SSR), App Router (app/), Server vs Client Components ('use client'), Caching & Revalidation, Streaming & Suspense, Server Actions, Middleware සහ InsightBlog Dashboard.",
  chapterCount: 11,
  pageRange: "පිටු 274 - 300",
  chapters: [
    {
      id: 91,
      volumeId: 8,
      chapterNumber: 91,
      title: "නෙක්ස්ට් පේ.එස් හැඳින්වීම - රියැක්ට් තාක්ෂණයේ ඊළඟ පියවර",
      englishTitle: "Introduction to Next.js - The Next Step of React",
      pageRange: "පිටු 274 - 275",
      description: "Full-stack Web Framework, Vercel, මෝටර් රථ එන්ජිම උපමාව, Server-Side Rendering (SSR) vs CSR, Static Site Generation (SSG), DX සහ SEO.",
      learningObjectives: [
        "Next.js යනු React මත පදනම් වූ පූර්ණ වෙබ් රාමුවක් (Full-stack Web Framework) බව වටහා ගැනීම",
        "React (එන්ජිම පමණක්) සහ Next.js (සම්පූර්ණ මෝටර් රථය) අතර වෙනස",
        "Server-Side Rendering (SSR): සර්වර් එක විසින්ම HTML පිටුව සූදානම් කර එවීමේ අතිශය වේගවත් බව",
        "Static Site Generation (SSG) සහ Google SEO ශ්‍රේණිගත කිරීමේ වාසි"
      ],
      sections: [
        {
          title: "91.1 Next.js යනු කුමක්ද සහ මෝටර් රථ උපමාව",
          content: [
            "රියැක්ට් යනු ඉතා හොඳ එන්ජිමක් වැනිය. නමුත් වාහනයක් පැදවීමට නම් අපට රෝද, බොඩිය, ලයිට් සහ සීට් අවශ්‍ය වේ. Next.js යනු එම සියලුම කොටස් එකතු කර සාදන ලද සම්පූර්ණ මෝටර් රථයකි.",
            "SSR මඟින් බ්‍රවුසරයට හිස් පිටුවක් නොව, දත්ත පිරුණු සම්පූර්ණ HTML පිටුවක් ක්ෂණිකව ලැබේ. Google සෙවුම් යන්ත්‍රවලට සියල්ල පරිපූර්ණව කියවිය හැක."
          ]
        }
      ],
      keyPoints: [
        "Next.js යනු Frontend සහ Backend (Full-stack) යන දෙකම හැසිරවිය හැකි ප්‍රබල රාමුවකි."
      ],
      exercises: [
        { id: 1, question: "Client-Side Rendering වලට වඩා Server-Side Rendering උසස් වන්නේ ඇයි?" }
      ]
    },
    {
      id: 92,
      volumeId: 8,
      chapterNumber: 92,
      title: "පද්ධතිය සැකසීම සහ ඇප් රවුටර් ව්‍යුහය (App Router Architecture)",
      englishTitle: "Environment Setup & App Router Architecture",
      pageRange: "පිටු 276 - 277",
      description: "create-next-app, App Router (app/ folder), page.tsx, layout.tsx, globals.css, and npm run dev.",
      learningObjectives: [
        "npx create-next-app@latest මඟින් Next.js ව්‍යාපෘතියක් ආරම්භ කිරීම",
        "නූතන Next.js හි හදවත බඳු App Router (src/app) ව්‍යුහය තේරුම් ගැනීම",
        "ප්‍රධාන ගොනු 3: page.tsx (පිටුව), layout.tsx (පොදු සැකිල්ල), globals.css (පොදු CSS)",
        "සංවර්ධන සර්වර් එක (localhost:3000) ධාවනය කිරීම"
      ],
      sections: [
        {
          title: "92.1 App Router Setup සහ ගොනු ව්‍යුහය",
          content: [
            "App Router හිදී ෆෝල්ඩරයක් සැදූ සැණින් එය වෙබ් අඩවියේ පාරක් (URL Path) බවට පත් වේ. එම ෆෝල්ඩරය තුළ page.tsx තිබිය යුතුයි."
          ],
          asciiDiagram: `src/app/
├── layout.tsx  (මුළු වෙබ් අඩවියටම පොදු සැකිල්ල)
├── page.tsx    (මුල් පිටුව - /)
└── globals.css (Tailwind CSS ඇතුළත්)`
        }
      ],
      keyPoints: [
        "page.tsx ගොනුව නොමැතිව කිසිදු පිටුවක් බ්‍රවුසරයේ දිස් නොවේ."
      ],
      exercises: [
        { id: 1, question: "layout.tsx සහ page.tsx අතර ඇති කාර්යභාරමය වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 93,
      volumeId: 8,
      chapterNumber: 93,
      title: "ගොනු පද්ධතිය මත පදනම් වූ රවුටින් (File-based Routing)",
      englishTitle: "File-based Routing in Next.js",
      pageRange: "පිටු 277 - 280",
      description: "Folder = URL Path, Special Files (page, layout, loading, error, not-found), Nested Routes, Dynamic Routes ([id]), next/link.",
      learningObjectives: [
        "react-router-dom අවශ්‍ය නොවී ෆෝල්ඩර සෑදීමෙන්ම රවුටින් ස්වයංක්‍රීයව සිදු වීම",
        "Nested Routes: app/dashboard/settings/page.tsx",
        "Dynamic Routes: app/blog/[slug]/page.tsx",
        "<Link> සංරචකය සහ Route Prefetching මඟින් පිටු පෙරළීම අකුණු වේගයෙන් සිදු වීම"
      ],
      sections: [
        {
          title: "93.1 Dynamic Routes සහ next/link",
          content: [
            "බ්ලොග් අඩවියක ලිපි සිය ගණනක් සඳහා ෆෝල්ඩරයේ නම [id] ලෙස වරහන් තුළ ලිවීමෙන් ගතික පිටු නිර්මාණය කළ හැක."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "app/blog/[id]/page.tsx",
              code: `import Link from 'next/link';

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>ලිපියේ අංකය: {params.id}</h1>
      <Link href="/blog">නැවත බ්ලොග් ලැයිස්තුවට</Link>
    </div>
  );
}`
            }
          ]
        }
      ],
      keyPoints: [
        "next/link භාවිතයෙන් පිටුව Refresh නොවී පසුබිමෙන් දත්ත ඩවුන්ලෝඩ් වේ (Prefetching)."
      ],
      exercises: [
        { id: 1, question: "Next.js හි Dynamic Route එකක් සෑදීමට ෆෝල්ඩරයේ නම ලියන්නේ කෙසේද?" }
      ]
    },
    {
      id: 94,
      volumeId: 8,
      chapterNumber: 94,
      title: "සර්වර් සහ ක්ලයන්ට් සංරචක (Server vs. Client Components)",
      englishTitle: "Server vs. Client Components ('use client')",
      pageRange: "පිටු 280 - 282",
      description: "React Server Components (RSC) vs Client Components, කුස්සිය සහ මේසය උපමාව, 'use client' Directive, Zero Bundle Size, Hydration.",
      learningObjectives: [
        "Next.js හි සෑම සංරචකයක්ම පෙරනිමියෙන් Server Component එකක් වන බව දැනගැනීම",
        "Server Components: බ්‍රවුසරයට JS නොයවා සර්වර් එක තුළදීම HTML බවට පත් වීම (Zero Bundle Size)",
        "Client Components ('use client'): useState, useEffect, onClick වැනි අන්තර්ක්‍රියා සඳහා පමණක් යෙදීම",
        "කුස්සිය (Server) සහ කෑම මේසය (Client) සැබෑ ලෝකයේ උපමාව"
      ],
      sections: [
        {
          title: "94.1 කුස්සිය සහ කෑම මේසය උපමාව",
          content: [
            "• Server Component (කුස්සිය): ආහාරය (HTML) පිසින ස්ථානයයි. සියලු අමුද්‍රව්‍ය එකතු කර පිළිස්සීම සිදු කරයි. පාරිභෝගිකයාට ලැබෙන්නේ සූදානම් ආහාරයයි.",
            "• Client Component (මේසය): පීසා එක ලැබුණු පසු ලුණු හෝ සෝස් එකතු කිරීම වැනි පාරිභෝගිකයා විසින් සිදු කරන 'අන්තර්ක්‍රියාකාරී' (Interactive) වැඩ වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Client Component ('use client')",
              code: `'use client'; // ක්ලයන්ට් එකේ ක්‍රියාත්මක වන බව පවසයි

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes} Likes
    </button>
  );
}`
            }
          ]
        }
      ],
      keyPoints: [
        "හැකි සෑම විටම සංරචක සර්වර් එකේ තබාගෙන, අන්තර්ක්‍රියාවක් ඇති කොටස පමණක් 'use client' කරන්න (Server-first approach)."
      ],
      exercises: [
        { id: 1, question: "සංරචකයක 'use client' ලිවිය යුතු ප්‍රධාන අවස්ථා 3 මොනවාද?" }
      ]
    },
    {
      id: 95,
      volumeId: 8,
      chapterNumber: 95,
      title: "උසස් සැකිලි සහ ටෙම්ප්ලේටින් (Advanced Layouts)",
      englishTitle: "Advanced Layouts, Templates & Metadata API",
      pageRange: "පිටු 282 - 284",
      description: "Root Layout vs Nested Layouts, layout.tsx vs template.tsx, Route Groups ((folder)), Metadata API (Static & Dynamic SEO).",
      learningObjectives: [
        "Root Layout සහ Nested Layouts මඟින් අනු-පිටු වලට සැකිලි ලබා දීම",
        "layout (State රඳවා ගනී) සහ template (සෑම විටම Re-mount වේ) අතර වෙනස",
        "Route Groups ((auth)) මඟින් URL වෙනස් නොකර ගොනු සංවිධානය",
        "Metadata API මඟින් එක් එක් පිටුවට අද්විතීය SEO Titles සහ Open Graph tags සැකසීම"
      ],
      sections: [
        {
          title: "95.1 Metadata API සහ Route Groups",
          content: [
            "Route Groups: app/(auth)/login/page.tsx ලෙස ලියූ විට URL එක example.com/login ලෙස පෙනේ (auth කොටස සැඟවේ).",
            "Metadata API මඟින් Google සෙවුම් ප්‍රතිඵල සහ සමාජ මාධ්‍ය Share Cards අලංකාර කරයි."
          ]
        }
      ],
      keyPoints: [
        "layout.tsx තුළ <html> සහ <body> තිබිය යුත්තේ Root Layout එකෙහි පමණි."
      ],
      exercises: [
        { id: 1, question: "Route Groups සඳහා වරහන් ( ) භාවිතා කරන්නේ කුමන හේතුවක් සඳහාද?" }
      ]
    },
    {
      id: 96,
      volumeId: 8,
      chapterNumber: 96,
      title: "දත්ත ලබා ගැනීම සහ මතක තැබීම (Data Fetching & Caching)",
      englishTitle: "Data Fetching, Caching & Revalidation",
      pageRange: "පිටු 284 - 287",
      description: "Server Component Data Fetching, ළිඳ සහ නළ ජලය උපමාව, Caching (Data Cache), Revalidation (Time-based vs On-demand), Force Cache vs No Store.",
      learningObjectives: [
        "Server Components තුළ කෙලින්ම async/await fetch() භාවිතා කිරීමේ පහසුව",
        "ළිඳ (Client-side) සහ නළ ජලය (Server-side) සැබෑ ලෝකයේ උපමාව",
        "Next.js Data Cache මඟින් වෙබ් අඩවියේ වේගය උපරිම වීම",
        "Revalidation: { next: { revalidate: 60 } } මඟින් දත්ත අලුත් කිරීම"
      ],
      sections: [
        {
          title: "96.1 සර්වර් මට්ටමේ Data Fetching",
          content: [
            "සාමාන්‍ය React හිදී useEffect සහ useState අවශ්‍ය වුවද, Next.js Server Components තුළ සෘජුවම async/await fetch() කළ හැක:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Server Component Data Fetching",
              code: `async function getArticles() {
  const res = await fetch('https://api.example.com/articles', {
    next: { revalidate: 3600 } // පැයකට වරක් දත්ත අලුත් වේ
  });
  if (!res.ok) throw new Error("දත්ත ලබා ගැනීමට නොහැකි විය!");
  return res.json();
}

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <div>
      {articles.map((a: any) => <h3 key={a.id}>{a.title}</h3>)}
    </div>
  );
}`
            }
          ]
        }
      ],
      keyPoints: [
        "force-cache මඟින් දත්ත ස්ථිරව තබා ගන්නා අතර no-store මඟින් සෑම විටම සජීවී දත්ත ලබා ගනී."
      ],
      exercises: [
        { id: 1, question: "Time-based Revalidation යනු කුමක්ද?" }
      ]
    },
    {
      id: 97,
      volumeId: 8,
      chapterNumber: 97,
      title: "දත්ත ප්‍රවාහය සහ සස්පෙන්ස් (Streaming & Suspense)",
      englishTitle: "Streaming and Suspense - Instant Loading States",
      pageRange: "පිටු 287 - 289",
      description: "Streaming (HTML chunks), Progressive Rendering, loading.tsx, React <Suspense>, Skeleton Screens (සැකිලි තිර).",
      learningObjectives: [
        "මුළු පිටුවම ලෝඩ් වන තෙක් බලා නොසිට කොටස් වශයෙන් පෙන්වීම (Streaming)",
        "loading.tsx මඟින් ස්වයංක්‍රීයව ලස්සන Loading තිරයක් පෙන්වීම",
        "React <Suspense fallback={<Skeleton />}> මඟින් තනි සංරචකයක් පමණක් පාලනය කිරීම",
        "Skeleton Screens මඟින් පරිශීලක අත්දැකීම (UX) ඉහළ නැංවීම"
      ],
      sections: [
        {
          title: "97.1 Streaming සහ Skeleton Screens",
          content: [
            "සාමාන්‍ය ක්‍රමයේදී සූපය, ප්‍රධාන කෑම සහ අතුරුපස සියල්ල සූදානම් වන තෙක් වේටර්වරයා කිසිවක් නොගෙන එයි. ස්ට්‍රීමිං ක්‍රමයේදී වතුර වීදුරුව ගෙන එයි, පසුව සුප් එක ගෙන එයි, අවසානයේ ප්‍රධාන කෑම ගෙන එයි. බලා සිටීම අපහසු නැත."
          ]
        }
      ],
      keyPoints: [
        "Streaming මඟින් Time to First Contentful Paint (TTFCP) අගය සැලකිය යුතු ලෙස අඩු වේ."
      ],
      exercises: [
        { id: 1, question: "Skeleton Screen එකක් සාමාන්‍ය Loading Spinner එකකට වඩා හොඳ වන්නේ ඇයි?" }
      ]
    },
    {
      id: 98,
      volumeId: 8,
      chapterNumber: 98,
      title: "පින්තූර ප්‍රශස්තකරණය සහ අකුරු පාලනය (Image & Font Optimization)",
      englishTitle: "Image Optimization (<Image />) & Next.js Fonts",
      pageRange: "පිටු 289 - 291",
      description: "<Image /> component, Cumulative Layout Shift (CLS) වැළැක්වීම, ස්වයංක්‍රීය WebP/AVIF, priority property, next/font (Google Fonts self-hosting).",
      learningObjectives: [
        "සාමාන්‍ය <img> වෙනුවට <Image /> භාවිතා කිරීමෙන් CLS දෝෂය සම්පූර්ණයෙන්ම වැළැක්වීම",
        "පරිශීලකයාගේ තිරයට ගැලපෙන සේ ස්වයංක්‍රීයව පින්තූර ප්‍රමාණය වෙනස් වීම",
        "priority මඟින් Hero banner එකක් ක්ෂණිකව ලෝඩ් කරවා ගැනීම",
        "next/font මඟින් Google Fonts සර්වර් එක තුළම තැන්පත් වී (Zero Layout Shift) අධික වේගයක් ලැබීම"
      ],
      sections: [
        {
          title: "98.1 <Image /> සහ next/font භාවිතය",
          content: [
            "Zero Layout Shift: සාමාන්‍ය පින්තූරයක් ලෝඩ් වන විට ඉඩ වෙන් කර නැති නිසා අකුරු පහළට පනියි (Bad UX). Next.js හි <Image width={...} height={...} /> මඟින් කලින්ම ඉඩ වෙන් කර තබයි."
          ]
        }
      ],
      keyPoints: [
        "Hero banner හෝ Logo සඳහා සැමවිටම priority ගුණාංගය ලබා දෙන්න."
      ],
      exercises: [
        { id: 1, question: "Cumulative Layout Shift (CLS) යනු කුමක්ද?" }
      ]
    },
    {
      id: 99,
      volumeId: 8,
      chapterNumber: 99,
      title: "සර්වර් ඇක්ෂන්ස් - ෆෝර්ම් සහ දත්ත හැසිරවීමේ නව මාවත (Server Actions)",
      englishTitle: "Server Actions - Direct Database & Form Mutation",
      pageRange: "පිටු 291 - 294",
      description: "Server Actions ('use server'), Backend API Route නොමැතිව සෘජුව සර්වර් කේත ධාවනය, <form action={addItem}>, revalidatePath, useFormStatus.",
      learningObjectives: [
        "Server Actions යනු කුමක්ද සහ එය API Routes ලිවීමේ වෙහෙස නැති කළ විප්ලවය බව",
        "'use server' විධානය මඟින් සර්වර් එක තුළ පමණක් ක්‍රියාත්මක වන ශ්‍රිත සෑදීම",
        "revalidatePath('/dashboard') මඟින් දත්ත එක් කළ පසු පිටුව නැවුම් කිරීම",
        "useFormStatus මඟින් පෝරමය Submit වන අතරතුර බොත්තම අක්‍රිය (pending) කිරීම"
      ],
      sections: [
        {
          title: "99.1 Server Actions සරල උදාහරණය",
          content: [
            "තැපැල් ලියුමක් වෙනුවට සෘජු සංවාදය: පිටතින් API එකක් ලියා එයට JSON යවනවා වෙනුවට, සෘජුවම සර්වර් ශ්‍රිතය ඇමතීම සිදු වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Server Action with revalidatePath",
              code: `// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  console.log("Database එකට එකතු කරයි:", title);
  
  // පිටුවේ cache එක මකා අලුත් දත්ත පෙන්වයි
  revalidatePath('/blog');
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Server Actions මඟින් JavaScript නොමැති පරිසරයකදී පවා (Progressive Enhancement) පෝරම සාර්ථකව ක්‍රියාත්මක වේ."
      ],
      exercises: [
        { id: 1, question: "revalidatePath() විධානය මඟින් කරන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 100,
      volumeId: 8,
      chapterNumber: 100,
      title: "මැදිහත්කරු සහ ආරක්ෂාව - වෙබ් අඩවියේ ගේට්ටු පාලකයා (Middleware & Security)",
      englishTitle: "Middleware & Security in Next.js",
      pageRange: "පිටු 294 - 296",
      description: "Middleware (ආරක්ෂක නිලධාරියා උපමාව), middleware.ts, Matcher, Authentication vs Authorization, Edge Runtime, Auth.js (NextAuth).",
      learningObjectives: [
        "Middleware යනු පරිශීලකයා පිටුවකට ඇතුළු වීමට පෙර ක්‍රියාත්මක වන ආරක්ෂක නිලධාරියා බව",
        "middleware.ts සහ matcher: '/dashboard/:path*' මඟින් පිටු ආරක්ෂා කිරීම",
        "Authentication (ඔබ කවුද?) සහ Authorization (ඔබට කුමක් කළ හැකිද?) අතර වෙනස",
        "Edge Runtime මඟින් ලොව පුරා සර්වර් හරහා ක්ෂණිකව ආරක්ෂක පරීක්ෂාව සිදුවීම"
      ],
      sections: [
        {
          title: "100.1 middleware.ts මඟින් පිටු ආරක්ෂා කිරීම",
          content: [
            "බැංකු ආරක්ෂක නිලධාරියා උපමාව: ඔබ බැංකුවට ඇතුළු වීමට පෙර දොර අසල සිටින ආරක්ෂක නිලධාරියා ඔබේ හැඳුනුම්පත පරීක්ෂා කර අවසර ඇත්නම් පමණක් ඇතුළු වීමට ඉඩ දෙයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "middleware.ts Example",
              code: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  
  // පරිශීලකයා ලොගින් වී නැත්නම් login පිටුවට යවමු
  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};`
            }
          ]
        }
      ],
      keyPoints: [
        "Infinite Redirect වළක්වා ගැනීමට /login සහ /api පාරවල් මැදිහත්කරුගෙන් Exclude කරන්න."
      ],
      exercises: [
        { id: 1, question: "Authentication සහ Authorization අතර ඇති තාක්ෂණික වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 101,
      volumeId: 8,
      chapterNumber: 101,
      title: "මහා ව්‍යාපෘතිය - 'InsightBlog' පූර්ණ ඉදිරිපෙළ පද්ධතිය",
      englishTitle: "Capstone Project: InsightBlog Full-stack Dashboard",
      pageRange: "පිටු 296 - 300",
      description: "Full-Stack App Architecture: Route Groups (main/admin), Mock Database (server-only), Server Actions, Skeletons, Dynamic SEO, ISR.",
      learningObjectives: [
        "පාඨමාලාවේ උච්චතම අවස්ථාව: App Router, Server Components, Server Actions, Tailwind, Dynamic SEO එකතු කර සැබෑ ව්‍යාපෘතියක් සෑදීම",
        "Incremental Static Regeneration (ISR) මඟින් Static සහ Dynamic සමතුලිතතාවය පවත්වා ගැනීම",
        "Vercel Deployment සහ Lighthouse Audit මඟින් 100/100 ලකුණු ලබා ගැනීම",
        "ඔබ දැන් Junior Frontend Engineer තනතුරක් සඳහා 200% ක් සුදුසුකම් ලබා ඇති බව තහවුරු කිරීම"
      ],
      sections: [
        {
          title: "101.1 InsightBlog ගෘහ නිර්මාණ ශිල්පය සහ Route Groups",
          content: [
            "InsightBlog යනු App Router, Server Components, Server Actions, සහ ISR මූලධර්ම මත පදනම්ව ගොඩනැගූ නවීන Full-stack බ්ලොග් පද්ධතියකි. මෙහි පරිපාලක (Admin) සහ පොදු පරිශීලක (Public) කොටස් Route Groups මඟින් වෙන් කර ඇත:"
          ],
          asciiDiagram: `src/app/
├── (public)/
│   ├── layout.tsx         <── Public Navbar & Footer
│   ├── page.tsx           <── Hero & Recent Posts (ISR: 60s)
│   └── blog/
│       ├── page.tsx       <── All Articles List with Search
│       └── [slug]/
│           ├── page.tsx   <── Dynamic Blog Post + SEO Metadata
│           └── loading.tsx<── Article Skeleton Loader
├── (admin)/
│   └── dashboard/
│       ├── layout.tsx     <── Admin Sidebar & Protected Route
│       └── new-post/
│           └── page.tsx   <── Server Action Post Editor Form
└── actions/
    └── postActions.ts     <── 'use server' Database Mutators`
        },
        {
          title: "101.2 Server Actions මඟින් දත්ත සුරැකීම සහ Revalidation",
          content: [
            "නව ලිපියක් ඇතුළත් කළ විට Database එක යාවත්කාලීන කර, බ්ලොග් ලැයිස්තුවේ Cache එක ක්ෂණිකව Revalidate කරන Server Action කේතය:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "src/app/actions/postActions.ts",
              code: `'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPostAction(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  // සැබෑ Database එකකට (Prisma / Supabase) දත්ත ඇතුළත් කිරීම
  console.log("Database එකට එකතු කරයි:", { title, slug, content });

  // 1. මුල් පිටුව සහ බ්ලොග් ලැයිස්තුව Revalidate කිරීම
  revalidatePath('/');
  revalidatePath('/blog');

  // 2. අලුත් ලිපිය වෙත පරිශීලකයා යොමු කිරීම
  redirect(\`/blog/\${slug}\`);
}`
            }
          ]
        },
        {
          title: "101.3 Dynamic Route, Dynamic Metadata සහ Skeleton Loader",
          content: [
            "සෑම බ්ලොග් ලිපියකටම ගැලපෙන අද්විතීය Open Graph & Twitter Card SEO ලබා දෙන generateMetadata සහ Suspense Loader සංරචකය:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "src/app/(public)/blog/[slug]/page.tsx",
              code: `import { Suspense } from 'react';
import type { Metadata } from 'next';

// Dynamic SEO Tags
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: \`\${params.slug} | InsightBlog\`,
    description: "Read the latest insights and professional web development articles.",
    openGraph: {
      title: \`\${params.slug} | InsightBlog\`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-white tracking-tight capitalize mb-4">
        {params.slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-slate-400 text-sm mb-8">පළ කළ දිනය: 2026 සැප්තැම්බර් 20 • කියවීමේ කාලය: විනාඩි 5යි</p>
      
      <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4">
        <p>Next.js App Router මඟින් Server-Side Rendering සහ Streaming තාක්ෂණයන් ඒකාබද්ධ කර ක්ෂණික වෙබ් අත්දැකීමක් ලබා දෙයි...</p>
      </div>
    </article>
  );
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Server Actions මඟින් REST API Routes ලිවීමේ අවශ්‍යතාවය 100% ක් ඉවත් කර Frontend සහ Backend කේත සෘජුව සම්බන්ධ කරයි.",
        "Incremental Static Regeneration (ISR) මඟින් සර්වර් බරකින් තොරව මිලියන සංඛ්‍යාත පරිශීලකයන්ට අකුණු වේගයෙන් පිටු ලබා දේ.",
        "සුභ පැතුම්! ඔබ දැන් පරිච්ඡේද 1 සිට 101 දක්වා වූ අති දැවැන්ත ගමනක් සාර්ථකව අවසන් කර ඇත!"
      ],
      exercises: [
        { id: 1, question: "Incremental Static Regeneration (ISR) යන්නෙන් අදහස් වන්නේ කුමක්ද?" },
        { id: 2, question: "Next.js හි Route Groups මඟින් URL ව්‍යුහය වෙනස් නොවී තබා ගන්නේ කෙසේද?" }
      ]
    }
  ]
};
