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
      "Next.js යනු කුමක්ද සහ Vercel සමාගමෙහි දායකත්වය.",
      "React සහ Next.js අතර ඇති ප්‍රධාන වෙනස (Library vs Full-stack Framework).",
      "නිරූපණ උපාය මාර්ග (Rendering Strategies): CSR, SSR, SSG, ISR.",
      "SEO (සෙවුම් යන්ත්‍ර ප්‍රශස්තකරණය) සහ Initial Page Load වේගය."
    ],
    sections: [
      {
        title: "90.1 Next.js යනු කුමක්ද සහ SSR එදිරිව CSR",
        content: [
          "Next.js යනු Vercel විසින් නිර්මාණය කරන ලද, React සඳහා වන ලොව ජනප්‍රියම Full-Stack Web Framework එකයි.",
          "React (CSR - Client-Side Rendering): බ්‍රවුසරයට යන්නේ හිස් HTML ගොනුවක් පමණි (<div id=\"root\"></div>). JS සියල්ල බාගත වන තෙක් තිරයේ කිසිවක් නොපෙනේ. SEO සඳහා අහිතකරය.",
          "Next.js (SSR / SSG): සර්වර් එක තුළදීම සම්පූර්ණ HTML පිටුව සකස් කර බ්‍රවුසරයට එවයි. ක්ෂණිකව තිරය මත අකුරු සහ පින්තූර දිස්වේ. Google bots ලාට පහසුවෙන් කියවිය හැක.",
          "• SSG (Static Site Generation): Build වන විටම පිටු සාදයි.",
          "• SSR (Server-Side Rendering): පරිශීලකයා පිවිසෙන සෑම වාරයකම සර්වර් එකේදී පිටුව සකසයි.",
          "• ISR (Incremental Static Regeneration): පිටු නිශ්චිත කාලයකට පසු සර්වර් එකේදී නැවත යාවත්කාලීන කරයි."
        ]
      }
    ],
    keyPoints: [
      "Next.js යනු React මත ගොඩනැගූ Full-Stack Framework එකකි.",
      "SSR සහ SSG මගින් ඉහළ SEO සහ අධිවේගී පේජ් ලෝඩිං ලැබේ.",
      "Vercel විසින් Next.js සත්කාරකත්වය (Hosting) අතිශය පහසු කර ඇත."
    ],
    exercises: [
      "CSR සහ SSR අතර වෙනස චිත්‍ර සටහනකින් පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-91",
    chapterNumber: 91,
    title: "ඇප් රවුටර් - ගොනු පද්ධතිය මත පදනම් වූ සංචලනය",
    englishTitle: "The App Router & File-based Routing",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 277,
    learningObjectives: [
      "App Router (app/ directory) සංකල්පය.",
      "විශේෂිත ගොනු: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx.",
      "ගොනු පද්ධතිය හරහා මාර්ග (Nested Routes) සෑදීම.",
      "ගතික මාර්ග (Dynamic Routes: [slug] හෝ [id])."
    ],
    sections: [
      {
        title: "91.1 File-based Routing සහ Special Files",
        content: [
          "Next.js හි වෙනම route ගොනු ලිවිය යුතු නැත. app/ ෆෝල්ඩරය තුළ සාදන ෆෝල්ඩර අනුව URL එක ස්වයංක්‍රීයව නිර්මාණය වේ (උදා: app/blog/page.tsx -> /blog).",
          "විශේෂිත ගොනු:",
          "• layout.tsx: පිටු කිහිපයකට පොදු වන සැකිල්ල (Navbar, Footer).",
          "• page.tsx: අදාළ URL එකේ ප්‍රධාන පිටුව.",
          "• loading.tsx: දත්ත පූරණය වන විට ස්වයංක්‍රීයව පෙනෙන Skeleton/Loader එක.",
          "• error.tsx: දෝෂයක් ආ විට පෙන්වන පිටුව.",
          "• [id]/page.tsx: ගතික මාර්ග සඳහා (උදා: /products/123)."
        ]
      }
    ],
    keyPoints: [
      "Next.js හි රවුටින් පදනම් වන්නේ Folder Structure එක මතය.",
      "layout.tsx පිටු අතර මාරු වන විට නැවත render නොවේ (State ආරක්ෂා වේ).",
      "loading.tsx මගින් Instant Loading States ලැබේ."
    ],
    exercises: [
      "app/dashboard/settings/page.tsx මගින් නිර්මාණය වන URL එක කුමක්ද?"
    ]
  },
  {
    id: "ch-92",
    chapterNumber: 92,
    title: "සර්වර් සහ ක්ලයන්ට් සංරචක - නවීන වෙබ් විප්ලවය",
    englishTitle: "Server Components (RSC) vs Client Components",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 280,
    learningObjectives: [
      "React Server Components (RSC) විප්ලවය.",
      "Default Server Component සංකල්පය.",
      "'use client' නියෝගය සහ එය යෙදිය යුතු අවස්ථා.",
      "Bundle Size අඩු වීම: සර්වර් සංරචක වල JS බ්‍රවුසරයට නොයැවීම.",
      "Server සහ Client සංරචක එකට මිශ්‍ර කරන ආකාරය."
    ],
    sections: [
      {
        title: "92.1 RSC vs 'use client' තේරීම",
        content: [
          "Next.js App Router හි සෑම සංරචකයක්ම පෙරනිමියෙන් (Default) Server Component එකකි. ඒවා සර්වර් එකේදී පමණක් ක්‍රියාත්මක වන අතර කිසිදු JavaScript කේතයක් බ්‍රවුසරයට නොයවයි!",
          "කවදාද 'use client' භාවිතා කරන්නේ?",
          "• useState, useEffect, useReducer වැනි හුක්ස් අවශ්‍ය විට.",
          "• onClick, onChange වැනි Event Listeners අවශ්‍ය විට.",
          "• window, localStorage වැනි Browser APIs අවශ්‍ය විට.",
          "කවදාද Server Components භාවිතා කරන්නේ?",
          "• Database / API වෙතින් කෙලින්ම දත්ත ලබා ගන්නා විට.",
          "• රහස්‍ය API Keys සහ Security අවශ්‍ය විට."
        ],
        codeSnippet: {
          language: "tsx",
          code: `// app/products/page.tsx (Server Component)
import LikeButton from './LikeButton';

export default async function ProductPage() {
  const res = await fetch('https://api.example.com/product');
  const product = await res.json();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      {/* Client Component එකක් ඇතුළත් කිරීම */}
      <LikeButton />
    </div>
  );
}`
        }
      }
    ],
    keyPoints: [
      "සැමවිටම Server Components භාවිතා කරන්න, අත්‍යවශ්‍ය නම් පමණක් මුදුනේ 'use client' යොදන්න.",
      "RSC මගින් පරිශීලකයාගේ බ්‍රවුසරය ඉතා සැහැල්ලු කරයි."
    ],
    exercises: [
      "useState අඩංගු සංරචකයක 'use client' නොලිව්වහොත් සිදුවන්නේ කුමක්ද?"
    ]
  },
  {
    id: "ch-93",
    chapterNumber: 93,
    title: "දත්ත ලබා ගැනීම, හැඹිලිකරණය සහ නැවත වලංගු කිරීම",
    englishTitle: "Data Fetching, Caching and Revalidation",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 283,
    learningObjectives: [
      "Server Component එකක් තුළ සෘජුවම async/await මගින් දත්ත ගැනීම.",
      "Next.js Extended Fetch API.",
      "Static Fetching vs Dynamic Fetching.",
      "Time-based Revalidation (revalidate: 60).",
      "On-demand Revalidation (revalidatePath, revalidateTag)."
    ],
    sections: [
      {
        title: "93.1 Caching සහ ISR ක්‍රමවේද",
        content: [
          "Next.js සර්වර් සංරචක තුළ useEffect නොමැතිව සෘජුවම fetch() කළ හැක:",
          "1. Default (Static / Cached): fetch('url', { cache: 'force-cache' })",
          "2. Dynamic (No Cache - SSR): fetch('url', { cache: 'no-store' })",
          "3. Revalidation (ISR): fetch('url', { next: { revalidate: 3600 } }) - සෑම පැයකට වරක් සර්වර් එකේදී අලුත් දත්ත ලබා ගනී."
        ]
      }
    ],
    keyPoints: [
      "Server Components තුළ async/await සෘජුවම භාවිතා කළ හැක.",
      "ISR මගින් අධිවේගී Static පිටු සහ Dynamic දත්ත යන දෙකෙහිම වාසි ලැබේ."
    ],
    exercises: [
      "තත්පර 30කට වරක් යාවත්කාලීන වන News Feed එකක් සඳහා fetch විධානය ලියන්න."
    ]
  },
  {
    id: "ch-94",
    chapterNumber: 94,
    title: "සර්වර් ක්‍රියාකාරකම් සහ දත්ත සමුදා සම්බන්ධතා",
    englishTitle: "Server Actions & Database Integration",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 285,
    learningObjectives: [
      "Server Actions ('use server') යනු මොනවාද?",
      "වෙනම API Routes නොලියා Form Submissions සෘජුවම සර්වර් එකට යැවීම.",
      "Progressive Enhancement සංකල්පය.",
      "Prisma ORM හෝ PostgreSQL සෘජුව සම්බන්ධ කිරීම."
    ],
    sections: [
      {
        title: "94.1 Server Actions ('use server') භාවිතය",
        content: [
          "අතීතයේදී Form එකක් Submit කිරීමට /api/create-user නමින් API Route එකක් ලියා, fetch() යැවිය යුතු විය.",
          "Server Actions මගින් සෘජුවම ශ්‍රිතය තුළ 'use server' ලියා <form action={createPost}> ලබා දිය හැක. JavaScript ක්‍රියා විරහිත කර තිබුණද Form එක ක්‍රියා කරයි (Progressive Enhancement)."
        ],
        codeSnippet: {
          language: "tsx",
          code: `// app/new-post/page.tsx
export default function NewPostPage() {
  async function createPost(formData: FormData) {
    'use server';
    const title = formData.get('title');
    console.log("සර්වර් එකේ දත්ත සුරැකිණි:", title);
  }

  return (
    <form action={createPost} className="p-4 space-y-4">
      <input name="title" placeholder="ලිපියේ මාතෘකාව" className="border p-2" />
      <button type="submit" className="bg-blue-600 text-white p-2">පළ කරන්න</button>
    </form>
  );
}`
        }
      }
    ],
    keyPoints: [
      "Server Actions මගින් API Routes ලිවීමේ අවශ්‍යතාවය අවම කරයි.",
      "'use server' මගින් කේතය සර්වර් එකේ පමණක් ධාවනය වන බව තහවුරු කරයි."
    ],
    exercises: [
      "Server Action එකක් භාවිතා කර පරිශීලකයාගේ විද්‍යුත් තැපෑල සර්වර් කොන්සෝලයේ පෙන්වන Form එකක් සාදන්න."
    ]
  },
  {
    id: "ch-95",
    chapterNumber: 95,
    title: "මහා ව්‍යාපෘතිය - සම්පූර්ණ Full-Stack ඊ-වාණිජ්‍ය පද්ධතියක්",
    englishTitle: "Capstone Project - Full-Stack E-Commerce / Blog Engine",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 288,
    learningObjectives: [
      "Next.js App Router, Server Components, Server Actions සහ Tailwind CSS එක් කර සැබෑ Full-Stack වෙබ් අඩවියක් නිර්මාණය.",
      "ගතික නිෂ්පාදන පිටු ([id]), සෙවුම් (Search Params), සහ Shopping Cart.",
      "Vercel මත තනි ක්ලික් කිරීමකින් සජීවීව ප්‍රසිද්ධ කිරීම."
    ],
    sections: [
      {
        title: "95.1 Full-Stack ව්‍යාපෘති ගෘහ නිර්මාණ ශිල්පය",
        content: [
          "ගොනු ව්‍යුහය:",
          "app/page.tsx: Hero section සහ Featured Products.",
          "app/products/[id]/page.tsx: Server-side rendering සහිත භාණ්ඩ පිටුව.",
          "app/actions/cart.ts: Server Actions මගින් Cart දත්ත පාලනය.",
          "components/Navbar.tsx, components/ProductCard.tsx."
        ]
      }
    ],
    keyPoints: [
      "සම්පූර්ණ Full-stack කේතයම තනි Next.js ව්‍යාපෘතියක් තුළ ලිවිය හැක.",
      "Vercel වෙත Deploy කළ සැණින් ගෝලීය CDN ජාලයක් හරහා ක්‍රියාත්මක වේ."
    ],
    exercises: [
      "ඔබේ Next.js ව්‍යාපෘතිය Vercel වෙත push කර සජීවී link එකක් ලබා ගන්න."
    ]
  },
  {
    id: "ch-96",
    chapterNumber: 96,
    title: "නෙක්ස්ට් ඉංජිනේරු විද්‍යාව, අතුරුමෘදුකාංග සහ ආරක්ෂාව (විශේෂ ප්‍රෝ-මට්ටම)",
    englishTitle: "Next.js Middleware, Edge Runtime & Security",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 290,
    learningObjectives: [
      "Middleware (middleware.ts): ඉල්ලීමක් පිටුවට යාමට පෙර අතරමගදී පරික්ෂා කිරීම.",
      "Edge Runtime: ලොව පුරා විසිරී ඇති සර්වර් වල අතිවේගයෙන් ක්‍රියාත්මක වීම.",
      "Route Handlers (app/api/route.ts): REST APIs නිර්මාණය.",
      "වෙබ් ආරක්ෂාව: XSS, CSRF, සහ Content Security Policy (CSP)."
    ],
    sections: [
      {
        title: "96.1 Middleware සහ Route Handlers",
        content: [
          "Middleware: ගුවන් තොටුපළක ආරක්ෂක නිලධාරියා මෙන්, පරිශීලකයා පිටුවට පිවිසීමට පෙර ටෝකනය (JWT Token) වලංගු දැයි පරීක්ෂා කර ආරක්ෂිත පිටුවට යවයි හෝ Login පිටුවට හරවා යවයි (Redirect).",
          "Route Handlers: export async function GET() { return Response.json({ status: 'ok' }); }"
        ],
        codeSnippet: {
          language: "typescript",
          code: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}`
        }
      }
    ],
    keyPoints: [
      "Middleware මගින් ආරක්ෂිත Authentication Checks සිදු කරයි.",
      "Route Handlers මගින් ජංගම දුරකථන යෙදුම් (Mobile Apps) සඳහාද API ලබා දිය හැක."
    ],
    exercises: [
      "ඇඩ්මින් පිටු (/admin/*) සඳහා පමණක් ක්‍රියාත්මක වන Middleware matcher එකක් ලියන්න."
    ]
  },
  {
    id: "ch-97",
    chapterNumber: 97,
    title: "උසස් දත්ත සමුදායන්, ඔතීකරණය සහ ගෘහ නිර්මාණ ශිල්පය",
    englishTitle: "Authentication (Auth.js), Database Pooling & Webhooks",
    volumeId: 8,
    volumeTitle: "නෙක්ස්ට් (Next.js) - පූර්ණ මෘදුකාංග සංවර්ධනය",
    pageNumber: 293,
    learningObjectives: [
      "NextAuth.js / Auth.js මගින් Google/GitHub OAuth පිවිසුම් සැකසීම.",
      "Connection Pooling (Neon / Supabase / Prisma Accelerate).",
      "Webhooks: Stripe හෝ LemonSqueezy ගෙවීම් සාර්ථක වූ විට දත්ත යාවත්කාලීන කිරීම.",
      "SWR සහ TanStack Query."
    ],
    sections: [
      {
        title: "97.1 Auth.js, Database Pooling සහ Webhooks",
        content: [
          "Auth.js: මුරපද ගබඩා කරමින් වෙහෙස නොවී Google, GitHub හරහා එක ක්ලික් එකෙන් ආරක්ෂිතව පිවිසීමට ඉඩ සලසයි.",
          "Connection Pooling: සර්වර්ලස් (Serverless) ක්‍රමයේදී එකවර දහස් ගණනක් දත්ත සමුදායට පිවිසෙන විට බිඳවැටීම වැළැක්වීමට Pooler එකක් භාවිතා කරයි.",
          "Webhooks: මුදල් ගෙවූ සැණින් බැංකුව හෝ Stripe විසින් අපගේ සර්වර් එකට යවන රහසිගත පණිවිඩයයි."
        ]
      }
    ],
    keyPoints: [
      "Auth.js යනු Next.js සඳහා සම්මත Authentication විසඳුමයි.",
      "Serverless පරිසරයකදී Database Connection Pooling අනිවාර්ය වේ."
    ],
    exercises: [
      "Webhooks ක්‍රියාත්මක වන ආකාරය සරලව විස්තර කරන්න."
    ]
  }
];
