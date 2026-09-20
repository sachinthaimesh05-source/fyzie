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
            "රියැක්ට් (React) යනු අතිශය ප්‍රබල එන්ජිමක් වැනිය. නමුත් වාහනයක් පාරේ ධාවනය කිරීමට නම් එන්ජිමට අමතරව රෝද, චැසිය, ලයිට්, සහ තිරිංග අවශ්‍ය වේ. Next.js යනු රියැක්ට් එන්ජිම වටා එම සියලු කොටස් (Routing, SSR, Optimization, Server Functions) එකතු කර සාදන ලද සම්පූර්ණ නවීන මෝටර් රථයයි.",
            "Next.js නිර්මාණය කරන ලද්දේ Vercel සමාගම විසිනි. එය අද වන විට ලොව දැවැන්තම සමාගම් (Netflix, Twitch, TikTok, Nike) විසින් සිය ප්‍රමුඛ වෙබ් අඩවි සඳහා භාවිත කරනු ලබයි."
          ]
        },
        {
          title: "91.2 Client-Side Rendering (CSR) vs Server-Side Rendering (SSR)",
          content: [
            "• Client-Side Rendering (සාමාන්‍ය React): බ්‍රවුසරයට යවන්නේ හිස් HTML ගොනුවකි (<div id='root'></div>). බ්‍රවුසරය සියලු JS බාගත කර ධාවනය කරන තුරු පරිශීලකයාට සුදු තිරයක් දිස් වේ. මෙය Slow Internet වලදී දුර්වල UX එකක් සහ දුර්වල Google SEO ඇති කරයි.",
            "• Server-Side Rendering (Next.js SSR): පරිශීලකයා පිටුව ඉල්ලූ සැණින් සර්වර් එක තුළදීම දත්ත සමඟ සම්පූර්ණ HTML පිටුව සූදානම් කර බ්‍රවුසරය වෙත ක්ෂණිකව එවයි. තත්පරයකින් පරිශීලකයාට තොරතුරු දැකගත හැක."
          ],
          asciiDiagram: `[ Client-Side Rendering (CSR) ]
Browser ──> ඉල්ලීම ──> Server (හිස් HTML) ──> JS බාගත වේ ──> අවසානයේ පිටුව පෙනේ (ප්‍රමාදයි)

[ Server-Side Rendering (SSR) ]
Browser ──> ඉල්ලීම ──> Server (සම්පූර්ණ HTML සූදානම් කරයි) ──> ක්ෂණිකව පිටුව පෙනේ (අකුණු වේගය)`
        },
        {
          title: "91.3 Static Site Generation (SSG) සහ SEO වාසි",
          content: [
            "Static Site Generation (SSG) හිදී Build කරන අවස්ථාවේදීම සියලු HTML පිටු සාදා සූදානම් කර CDN එකක තැන්පත් කරයි. පරිශීලකයින් මිලියන ගණනක් පැමිණියද සර්වර් බරකින් තොරව ක්ෂණිකව පිටු පෙන්විය හැක.",
            "Google, Bing වැනි සෙවුම් යන්ත්‍රවල Crawlers වලට සම්පූර්ණ HTML එක සෘජුවම කියවිය හැකි බැවින් Next.js වෙබ් අඩවි වලට ඉහළම SEO ශ්‍රේණිගත කිරීමක් ලැබේ."
          ]
        }
      ],
      keyPoints: [
        "Next.js යනු Frontend සහ Backend (Full-stack) යන දෙකම හැසිරවිය හැකි ප්‍රබල රාමුවකි.",
        "SSR මඟින් First Contentful Paint (FCP) කාලය අතිශයින් අඩු කර විශිෂ්ට SEO ලබා දේ."
      ],
      exercises: [
        { id: 1, question: "Client-Side Rendering වලට වඩා Server-Side Rendering උසස් වන්නේ ඇයි?" },
        { id: 2, question: "SSG සහ SSR අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" }
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
          title: "92.1 create-next-app සහ ස්ථාපනය",
          content: [
            "Next.js ව්‍යාපෘතියක් ආරම්භ කිරීමට පහත විධානය ටර්මිනලයේ ධාවනය කරන්න:",
            "npm run dev විධානයෙන් පසු http://localhost:3000 ඔස්සේ ඔබේ වෙබ් අඩවිය සජීවීව දැකගත හැක."
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Create Next.js Project",
              code: `npx create-next-app@latest my-next-app

# අසන ප්‍රශ්න සඳහා:
# ✔ Would you like to use TypeScript? Yes
# ✔ Would you like to use ESLint? Yes
# ✔ Would you like to use Tailwind CSS? Yes
# ✔ Would you like your code inside a 'src/' directory? Yes
# ✔ Would you like to use App Router? (recommended) Yes

cd my-next-app
npm run dev`
            }
          ]
        },
        {
          title: "92.2 App Router නාමාවලි ව්‍යුහය සහ Special Files",
          content: [
            "Next.js හි App Router ක්‍රමයේදී src/app නාමාවලිය තුළ විශේෂ ගොනු කිහිපයක් පවතී:",
            "• page.tsx: එම ෆෝල්ඩරයේ URL පාරට අදාළ වන පරිශීලක අතුරුමුහුණත (UI).",
            "• layout.tsx: පිටු කිහිපයකට පොදු වන Navbars, Footers වැනි සැකිලි.",
            "• loading.tsx: දත්ත ලෝඩ් වන අතරතුර ස්වයංක්‍රීයව පෙන්වන Loading UI.",
            "• error.tsx: දෝෂයක් ඇති වූ විට පෙන්වන Error Boundary."
          ],
          asciiDiagram: `src/app/
├── layout.tsx     <── Root Layout (html, body, Navbar)
├── page.tsx       <── මුල් පිටුව (Home page - /)
├── loading.tsx    <── Global Skeleton Loader
├── error.tsx      <── Global Error Boundary
└── globals.css    <── Tailwind & Base Styles`
        },
        {
          title: "92.3 layout.tsx සහ page.tsx සංයෝජනය",
          content: [
            "layout.tsx සංරචකය තුළ children prop එකක් ඇති අතර, ඒ තුළට page.tsx හි ඇති අන්තර්ගතය ස්වයංක්‍රීයව ඇතුළු වේ. පිටු මාරු වන විට layout එක නැවත Render නොවී පවතින බැවින් state ආරක්ෂා වේ."
          ]
        }
      ],
      keyPoints: [
        "App Router හි සෑම ෆෝල්ඩරයක්ම URL Route එකක් විය හැක්කේ ඒ තුළ page.tsx ඇත්නම් පමණි.",
        "Root Layout හි <html> සහ <body> අනිවාර්යයෙන්ම තිබිය යුතුය."
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
          title: "93.1 File-based Routing සහ Nested Routes",
          content: [
            "Next.js හි වෙනම Routes ලියන්නට අවශ්‍ය නැත. ඔබ src/app තුළ ෆෝල්ඩරයක් සෑදූ විට, එම ෆෝල්ඩරයේ නම ස්වයංක්‍රීයව වෙබ් අඩවියේ URL පාර (Path) බවට පත් වේ:",
            "• src/app/about/page.tsx ➔ yoursite.com/about",
            "• src/app/dashboard/settings/page.tsx ➔ yoursite.com/dashboard/settings"
          ]
        },
        {
          title: "93.2 Dynamic Routes ([id], [slug])",
          content: [
            "බ්ලොග් අඩවියක ලිපි දහස් ගණනක් සඳහා වෙන වෙනම ෆෝල්ඩර සෑදිය නොහැක. ඒ වෙනුවට කොටු වරහන් [ ] යොදා Dynamic Route එකක් සෑදිය හැක:",
            "src/app/blog/[slug]/page.tsx ➔ yoursite.com/blog/learn-react හෝ yoursite.com/blog/typescript-mastery"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "app/blog/[slug]/page.tsx",
              code: `interface PageProps {
  params: { slug: string };
}

export default function BlogPost({ params }: PageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">ලිපිය: {params.slug}</h1>
      <p>මෙම පිටුව Next.js Dynamic Route මඟින් නිර්මාණය කරන ලද්දකි.</p>
    </div>
  );
}`
            }
          ]
        },
        {
          title: "93.3 next/link සංරචකය සහ Automatic Prefetching",
          content: [
            "සාමාන්‍ය HTML හි <a> ටැගය ක්ලික් කළ විට මුළු පිටුවම Refresh වේ. නමුත් Next.js හි <Link href='/about'> භාවිතා කළ විට බ්‍රවුසරය Refresh වන්නේ නැත.",
            "Prefetching: Link එකක් පරිශීලකයාගේ තිරයේ දිස්වන මොහොතේදීම Next.js පසුබිමෙන් එම පිටුවේ දත්ත කලින්ම බාගත කර තබා ගනී. පරිශීලකයා ක්ලික් කළ සැණින් බිංදු තත්පරයකින් පිටුව මාරු වේ!"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Using next/link",
              code: `import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-900 text-white">
      <Link href="/" className="hover:text-sky-400">මුල් පිටුව</Link>
      <Link href="/blog" className="hover:text-sky-400">බ්ලොග්</Link>
      <Link href="/about" className="hover:text-sky-400">අප ගැන</Link>
    </nav>
  );
}`
            }
          ]
        }
      ],
      keyPoints: [
        "කොටු වරහන් [param] මඟින් Dynamic Routes නිර්මාණය වේ.",
        "<Link> සංරචකය මඟින් SPA ආකාරයෙන් Instant Page Transitions ලැබේ."
      ],
      exercises: [
        { id: 1, question: "next/link සහ සාමාන්‍ය <a> tag එක අතර ඇති වෙනස කුමක්ද?" }
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
            "• Server Component (කුස්සිය): ආහාරය (HTML) පිසින ස්ථානයයි. සියලු අමුද්‍රව්‍ය (Database queries, Secret API Keys) එකතු කර පිළිස්සීම සිදු කරයි. පාරිභෝගිකයාට ලැබෙන්නේ සූදානම් ආහාරයයි. අමුද්‍රව්‍ය පාරිභෝගිකයාට නොපෙනේ.",
            "• Client Component (මේසය): පීසා එක ලැබුණු පසු ලුණු හෝ සෝස් එකතු කිරීම වැනි පාරිභෝගිකයා විසින් සිදු කරන 'අන්තර්ක්‍රියාකාරී' (Interactive buttons, inputs) වැඩ වේ."
          ]
        },
        {
          title: "94.2 React Server Components (RSC) හි වාසි (Zero Bundle Size)",
          content: [
            "Server Components හි ඇති ප්‍රධානතම වාසිය නම් ඒවායේ JavaScript බ්‍රවුසරයට ඩවුන්ලෝඩ් නොවීමයි. එමඟින් වෙබ් අඩවියේ බර (Bundle Size) අතිශය සැහැල්ලු වී වෙබ් අඩවිය ක්ෂණිකව පැටවේ.",
            "Server Components තුළ සෘජුවම Database Queries, File System access, සහ Secret Environment Variables (process.env.DB_PASSWORD) භාවිතා කළ හැක."
          ]
        },
        {
          title: "94.3 'use client' Directive සහ Client Components",
          content: [
            "ඔබට useState, useEffect, හෝ onClick, onChange වැනි Browser Event Listeners අවශ්‍ය නම් පමණක් ගොනුවේ ඉහළින්ම 'use client' යෙදිය යුතුය:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Client Component ('use client')",
              code: `'use client'; // ක්ලයන්ට් එකේ ක්‍රියාත්මක වන බව පවසයි

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-sky-500 text-white rounded-lg"
    >
      ගණනය: {count}
    </button>
  );
}`
            }
          ]
        },
        {
          title: "94.4 Server සහ Client Components ඒකාබද්ධ කිරීමේ රන් නීතිය",
          content: [
            "හැකි සෑම විටම පිටුවේ විශාල කොටස Server Component එකක් ලෙස තබාගෙන, ක්ලික් කිරීමට හෝ State වෙනස් කිරීමට අවශ්‍ය කුඩා බොත්තම පමණක් Client Component එකක් ලෙස සදා එය ඇතුළු කරන්න (Push Client Components to the leaves)."
          ]
        }
      ],
      keyPoints: [
        "Next.js App Router හි සියලු සංරචක පෙරනිමියෙන්ම Server Components වේ.",
        "useState, useEffect අවශ්‍ය විට පමණක් 'use client' ලියන්න."
      ],
      exercises: [
        { id: 1, question: "සංරචකයක 'use client' ලිවිය යුතු අවස්ථා 3ක් මොනවාද?" }
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
          title: "95.1 Root Layout vs Nested Layouts",
          content: [
            "Root Layout මුළු අඩවියටම බලපාන අතර, කිසියම් උප-ෆෝල්ඩරයක (උදා: app/dashboard/layout.tsx) තවත් layout එකක් සෑදූ විට එය හැඳින්වෙන්නේ Nested Layout ලෙසයි. උප-පිටු වලට Dashboard Sidebar එකක් ලබා දීමට මෙය සුදුසුයි."
          ]
        },
        {
          title: "95.2 Route Groups ((groupName))",
          content: [
            "URL එකෙහි පාර වෙනස් නොකර ගොනු සංවිධානය කිරීමට වරහන් ( ) සහිත ෆෝල්ඩර යොදා ගනී. උදාහරණයක් ලෙස app/(auth)/login/page.tsx ගොනුව බ්‍රවුසරයේ දිස්වන්නේ /auth/login ලෙස නොව සෘජුවම /login ලෙසයි."
          ]
        },
        {
          title: "95.3 Metadata API (Static & Dynamic SEO)",
          content: [
            "Google සෙවුම් ප්‍රතිඵල සහ සමාජ මාධ්‍ය Share Cards සඳහා එක් එක් පිටුවට අදාළ Metadata පහසුවෙන් ලබා දිය හැක:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Metadata API in page.tsx",
              code: `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frontend Mastery Pro - T. Sachintha Imesh",
  description: "Learn modern Web Development with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Frontend Mastery Course",
    images: ["/og-image.png"],
  }
};`
            }
          ]
        }
      ],
      keyPoints: [
        "Route Groups මඟින් URL එක වෙනස් නොවී පිරිසිදු ගොනු ව්‍යුහයක් නඩත්තු කළ හැක.",
        "Next.js Metadata API මඟින් Head tags ස්වයංක්‍රීයව ජනනය වේ."
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
          title: "96.1 සර්වර් මට්ටමේ async/await Data Fetching",
          content: [
            "සාමාන්‍ය React හිදී useEffect, useState සහ Loading Spinners අවශ්‍ය වුවද, Next.js Server Components තුළ සෘජුවම async/await මඟින් දත්ත ලබා ගත හැක. දත්ත ලැබෙන තුරු සර්වර් එක තුළ රැඳී සිට සම්පූර්ණ HTML එක බ්‍රවුසරයට එවයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Async Server Component",
              code: `async function getArticles() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error("දත්ත ලබා ගැනීමට අපොහොසත් විය!");
  return res.json();
}

export default async function BlogPage() {
  const posts = await getArticles();
  return (
    <div>
      {posts.map((post: any) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}`
            }
          ]
        },
        {
          title: "96.2 Caching සහ Revalidation උපාය මාර්ග",
          content: [
            "Next.js හි fetch() ස්වයංක්‍රීයව Data Cache එකක් සාදයි. ඔබ නැවත නැවත එකම පිටුව ඉල්ලූ විට API එකට නොගොස් මතකයෙන් දත්ත ක්ෂණිකව ලබා දේ:",
            "1. Time-based Revalidation: { next: { revalidate: 60 } } මඟින් තත්පර 60කට වරක් දත්ත අලුත් වේ.",
            "2. No Store (Dynamic): { cache: 'no-store' } මඟින් හැම ඉල්ලීමකදීම සජීවී දත්ත ලබා ගනී (Stock prices, Crypto)."
          ]
        }
      ],
      keyPoints: [
        "Server Components හි දත්ත ලබා ගැනීම සරල සහ වේගවත්ය.",
        "revalidate විධානය මඟින් Static Speed එක සහ Dynamic Data එකවර භුක්ති විඳිය හැක."
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
            "සාමාන්‍ය ක්‍රමයේදී සූපය, ප්‍රධාන කෑම සහ අතුරුපස සියල්ල සූදානම් වන තෙක් වේටර්වරයා කිසිවක් නොගෙන එයි. ස්ට්‍රීමිං ක්‍රමයේදී වතුර වීදුරුව ගෙන එයි, පසුව සුප් එක ගෙන එයි, අවසානයේ ප්‍රධාන කෑම ගෙන එයි. බලා සිටීම අපහසු නැත.",
            "Next.js හිදී පිටුවේ සූදානම් කොටස (Header, Navbar) ක්ෂණිකව බ්‍රවුසරයට යවා, දත්ත ප්‍රමාද වන කොටසට Skeleton එකක් පෙන්වා දත්ත ලැබුණු සැණින් එය Stream කර ප්‍රතිස්ථාපනය කරයි."
          ]
        },
        {
          title: "97.2 loading.tsx සහ React <Suspense>",
          content: [
            "යම් ෆෝල්ඩරයක loading.tsx ගොනුවක් සෑදූ විට, එම පිටුවේ Server Component එක දත්ත ලබා ගන්නා තුරු එම Loading UI එක ස්වයංක්‍රීයව දිස් වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Using Suspense with Fallback",
              code: `import { Suspense } from 'react';
import PostsList from './PostsList';
import PostsSkeleton from './PostsSkeleton';

export default function BlogSection() {
  return (
    <div>
      <h1>නවතම ලිපි</h1>
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList />
      </Suspense>
    </div>
  );
}`
            }
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
          title: "98.1 <Image /> සහ Cumulative Layout Shift (CLS) වැළැක්වීම",
          content: [
            "සාමාන්‍ය <img> ටැගයක් ලෝඩ් වන විට ඉඩ වෙන් කර නැති නිසා අකුරු පහළට පැන Layout එක කැඩී යයි (CLS Error). Next.js හි <Image width={800} height={400} /> මඟින් කලින්ම ඉඩ වෙන් කර තබයි.",
            "එසේම සාමාන්‍ය JPEG පින්තූර ස්වයංක්‍රීයව කුඩා WebP හෝ AVIF ආකෘතියට සම්පීඩනය කර යවයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Next.js <Image /> Component",
              code: `import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <Image
        src="/hero-banner.jpg"
        alt="Frontend Development"
        width={1200}
        height={600}
        priority // Hero banner ක්ෂණිකව පූරණය වීමට
      />
    </div>
  );
}`
            }
          ]
        },
        {
          title: "98.2 next/font සහ Self-Hosting Google Fonts",
          content: [
            "පිටත Google CDN එකකට request යවනවා වෙනුවට, Next.js Build වන විටම Font එක බාගත කර සර්වර් එක තුළම රඳවා ගනී (Zero Layout Shift & Zero Network Delay)."
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
            "වෙනම Node.js API එකක් ලියා එයට fetch() POST request එකක් යවනවා වෙනුවට, සෘජුවම සර්වර් ශ්‍රිතයක් <form action={createPost}> ලෙස ඇමතීමට Next.js Server Actions මඟින් ඉඩ ලබා දේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "app/actions.ts",
              code: `'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  // Database එකට insert කිරීම
  console.log("Database එකට එකතු කළා:", title);

  revalidatePath('/blog'); // බ්ලොග් ලැයිස්තුව Refresh වේ
}`
            }
          ]
        },
        {
          title: "99.2 Progressive Enhancement සහ Form Handling",
          content: [
            "Server Actions මඟින් සකසන පෝරම පරිශීලකයාගේ බ්‍රවුසරයේ JavaScript සම්පූර්ණයෙන්ම අක්‍රිය කර තිබුණද සාර්ථකව Submit වී ක්‍රියාත්මක වේ (Progressive Enhancement)."
          ]
        }
      ],
      keyPoints: [
        "Server Actions මඟින් REST API boilerplate කේත අවශ්‍යතාවය මුළුමනින්ම ඉවත් වේ."
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
  const token = request.cookies.get('auth_token');

  // Dashboard එකට යන පරිශීලකයා ලොගින් වී නැත්නම් login පිටුවට යවමු
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};`
            }
          ]
        },
        {
          title: "100.2 Authentication vs Authorization",
          content: [
            "• Authentication (සත්‍යාපනය): ඔබ සැබවින්ම කවුරුන්දැයි හඳුනා ගැනීම (Login with Password / Google).",
            "• Authorization (බලය පැවරීම): ඔබ හඳුනා ගත් පසු, ඔබට එම පිටුවට හෝ ක්‍රියාවට අවසර ඇත්දැයි බැලීම (Admin vs Regular User)."
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
