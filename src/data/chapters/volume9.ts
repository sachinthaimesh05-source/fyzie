import { Chapter } from '../../types/book';

export const volume9Chapters: Chapter[] = [
  {
    id: "ch-101",
    chapterNumber: 101,
    title: "සැබෑ ලෝකයේ මෘදුකාංග ගෘහ නිර්මාණ ශිල්පය සහ System Design",
    englishTitle: "Real-World Full-Stack Software Architecture & System Design",
    volumeId: 9,
    volumeTitle: "ප්‍රායෝගික ව්‍යාපෘති, AI යුගය සහ වෘත්තීය ගමන් මග",
    pageNumber: 312,
    learningObjectives: [
      "Monolithic Architecture එදිරිව Microservices සහ Modular Monolith සංකල්ප.",
      "Scalability මූලධර්ම: Horizontal Scaling (Scale-out) එදිරිව Vertical Scaling (Scale-up).",
      "Load Balancers, Reverse Proxies (Nginx, Cloudflare) සහ Caching Layers (Redis).",
      "Event-Driven Architecture සහ Message Queues (RabbitMQ, Kafka, Upstash QStash)."
    ],
    sections: [
      {
        title: "101.1 නවීන වෙබ් පද්ධතියක සමස්ත ගෘහ නිර්මාණ ශිල්පය",
        content: [
          "කේත ලිවීමට වඩා මෘදුකාංග ඉංජිනේරුවෙකු සතු විය යුතු වැදගත්ම හැකියාව වන්නේ පද්ධති සැලසුම් කිරීමයි (System Design).",
          "පරිශීලකයින් 10 දෙනෙකු වෙනුවෙන් සාදන යෙදුමක් සහ පරිශීලකයින් ලක්ෂ 10ක් එකවර පිවිසෙන යෙදුමක් අතර දැවැන්ත වෙනසක් ඇත.",
          "නවීන නිෂ්පාදන පද්ධතියක ප්‍රධාන කොටස්:",
          "1. Edge / DNS & CDN Layer: Cloudflare හෝ CloudFront මගින් DDoS ප්‍රහාර වැළැක්වීම සහ ස්ථිතික ලිපිගොනු ලොව පුරා පරිශීලකයින්ට ආසන්නයෙන්ම බෙදාහැරීම.",
          "2. Application Layer: Next.js හෝ Node.js සර්වර්ස් Containerized (Docker/Kubernetes) හෝ Serverless ලෙස ස්වයංක්‍රීයව පරිශීලක ප්‍රමාණය අනුව ප්‍රසාරණය වීම (Auto-scaling).",
          "3. Caching Layer: Redis මතක ගබඩාව මගින් නිතර අවශ්‍ය වන දත්ත මයික්‍රෝ තත්පර ගණනකින් සැපයීම.",
          "4. Persistent Database Layer: PostgreSQL ප්‍රධාන දත්ත සමුදාය (Primary Read/Write) සහ Read Replicas කිහිපයක්."
        ],
        asciiDiagram: `[Global Users]
      │ (HTTPS / DNS / DDoS Shield)
[Cloudflare CDN & Edge Caching]
      │
[Load Balancer / Reverse Proxy]
   ┌──┴────────────────┬────────────────┐
   ▼                   ▼                ▼
[Next.js App 1]   [Next.js App 2]   [Next.js App 3] (Auto-scaled)
   ├───(Redis Cache for Sessions & Hot Data)───┤
   ▼                                            ▼
[Primary DB - Write] ─────────(Replication)─> [Read Replica DB - Read]`
      },
      {
        title: "101.2 දත්ත සමුදාය Connection Pooling ගැටලුව විසඳීම",
        content: [
          "Serverless පරිසරයක (Vercel, AWS Lambda) සෑම ඉල්ලීමක් සඳහාම තාවකාලික Function එකක් නිර්මාණය වන බැවින්, දත්ත සමුදාය වෙත සෘජුවම සම්බන්ධ වුවහොත් දහස් ගණනක් Connection එකවර විවෘත වී Database එක බිඳ වැටිය හැක.",
          "මෙය විසඳීමට PgBouncer, Neon Serverless, Prisma Accelerate හෝ Supabase Pooler වැනි Connection Poolers භාවිතා කිරීම අනිවාර්ය වේ."
        ],
        tips: [
          "මුලින්ම අනවශ්‍ය සංකීර්ණ Microservices වලට නොගොස්, මනාව සංවිධානය වූ Modular Monolith එකක් ලෙස ආරම්භ කරන්න. අවශ්‍ය විටදී පමණක් Microservices වලට වෙන් කරන්න."
        ]
      }
    ],
    keyPoints: [
      "System Design යනු මෘදුකාංගයක් බිඳ නොවැටී ප්‍රසාරණය වීමට ඇති හැකියාව තහවුරු කිරීමයි.",
      "Caching (Redis / Edge) මගින් Database එක මත ඇති බර 80%කට වඩා අඩු කළ හැක.",
      "Connection Pooling මගින් Serverless යෙදුම් වල Database ආරක්ෂා වේ."
    ],
    exercises: [
      "පරිශීලකයින් මිලියනයකට සේවය සපයන Twitter වැනි Social Feed එකක Architecture Diagram එකක් අඳින්න."
    ],
    interviewQuestions: [
      {
        question: "Horizontal Scaling සහ Vertical Scaling අතර වෙනස කුමක්ද?",
        answer: "Vertical Scaling යනු පවතින තනි සර්වර් එකේ RAM හෝ CPU ප්‍රමාණය වැඩිකිරීමයි (මෙයට සීමාවක් ඇත). Horizontal Scaling යනු එම වැඩසටහනම ධාවනය වන සර්වර් ගණන (Instances) Load Balancer එකක් යටතේ වැඩි කිරීමයි (අසීමිත ලෙස ප්‍රසාරණය කළ හැක)."
      }
    ]
  },
  {
    id: "ch-102",
    chapterNumber: 102,
    title: "දත්ත සමුදාය සැලසුම්කරණය, Pooling සහ Real-time WebSocket ඒකාබද්ධ කිරීම",
    englishTitle: "Database Design, Normalization & Real-time WebSockets",
    volumeId: 9,
    volumeTitle: "ප්‍රායෝගික ව්‍යාපෘති, AI යුගය සහ වෘත්තීය ගමන් මග",
    pageNumber: 316,
    learningObjectives: [
      "Database Normalization (1NF, 2NF, 3NF) සහ නිවැරදි Indexes යෙදීම.",
      "SQL එදිරිව NoSQL (PostgreSQL vs MongoDB vs Firestore) සංසන්දනය.",
      "WebSockets සහ Server-Sent Events (SSE) හරහා ක්ෂණික සජීවී සන්නිවේදනය.",
      "Real-time Chat සහ Collaborative Dashboard යෙදුමක් තැනීම."
    ],
    sections: [
      {
        title: "102.1 Database Indexing සහ Query Optimization",
        content: [
          "දත්ත සමුදායක පේළි මිලියන ගණනක් ඇති විට, Index එකක් නොමැතිව `WHERE email = 'user@example.com'` වැනි query එකක් ක්‍රියාත්මක කළහොත් මුළු වගුවම (Full Table Scan) පරීක්ෂා කිරීමට තත්පර ගණනාවක් ගතවේ.",
          "Index එකක් යෙදූ විට B-Tree ව්‍යුහයක් හරහා මිලි තත්පරයකින් දත්ත සොයාගත හැක."
        ],
        codeSnippet: {
          language: "sql",
          code: `-- Database Indexing උදාහරණය
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);`,
          description: "SQL Indexing"
        }
      },
      {
        title: "102.2 Real-time සන්නිවේදනය: WebSockets vs SSE",
        content: [
          "සාම්ප්‍රදායික HTTP ඉල්ලීමකදී සේවාදායකයා (Client) ඉල්ලීමක් කළ විට පමණක් සර්වර් එක ප්‍රතිචාර දක්වයි.",
          "WebSockets: දෙපසටම එකවර විවෘත වූ සජීවී නාලිකාවකි (Full Duplex). Chat Apps, Multiplayer Games සඳහා වඩාත් සුදුසුය.",
          "Server-Sent Events (SSE): සර්වර් එකෙන් බ්‍රවුසරයට පමණක් අඛණ්ඩව දත්ත ගලා එන නාලිකාවකි. AI LLM Streaming (ChatGPT/Gemini පිළිතුරු අකුරෙන් අකුර ඒම) සහ Live Stock Tickers සඳහා කදිම විසඳුමකි."
        ]
      }
    ],
    keyPoints: [
      "නිතර Filter හෝ Join කරන Foreign Keys සහ Email ක්ෂේත්‍ර සඳහා Index යෙදීම අනිවාර්ය වේ.",
      "AI Streaming සඳහා WebSocket වෙනුවට සැහැල්ලු SSE (Server-Sent Events) වඩාත් යෝග්‍ය වේ."
    ],
    exercises: [
      "Node.js සහ Socket.io හෝ WebSocket API භාවිතයෙන් සරල Real-time Chat Room එකක් තනන්න."
    ]
  },
  {
    id: "ch-103",
    chapterNumber: 103,
    title: "වෙබ් ආරක්ෂාව සහ ආක්‍රමණ වැළැක්වීම (Web Security)",
    englishTitle: "Web Security, OWASP Top 10, JWT & RBAC",
    volumeId: 9,
    volumeTitle: "ප්‍රායෝගික ව්‍යාපෘති, AI යුගය සහ වෘත්තීය ගමන් මග",
    pageNumber: 320,
    learningObjectives: [
      "OWASP Top 10 වෙබ් ප්‍රහාර සහ ඒවා වළක්වා ගැනීමේ උපක්‍රම.",
      "SQL Injection සහ Parameterized Queries.",
      "Cross-Site Scripting (XSS) සහ Content Security Policy (CSP).",
      "Cross-Site Request Forgery (CSRF) සහ SameSite Cookies.",
      "Role-Based Access Control (RBAC: Admin, Editor, Member) ක්‍රියාත්මක කිරීම."
    ],
    sections: [
      {
        title: "103.1 ප්‍රධාන වෙබ් තර්ජන 3 සහ ආරක්ෂක පියවර",
        content: [
          "1. SQL Injection: පරිශීලක input කෙලින්ම SQL query එකට එකතු කළ විට හැකර්වරුන්ට Database එකම මකා දැමිය හැක. විසඳුම: Drizzle/Prisma වැනි ORM හෝ Parameterized Queries පමණක් භාවිත කිරීම.",
          "2. Cross-Site Scripting (XSS): වෙනත් පරිශීලකයින්ගේ බ්‍රවුසර තුළ අනිෂ්ට JavaScript ධාවනය කරවීම. විසඳුම: React හි පෙරනිමියෙන් ඇති auto-escaping භාවිත කිරීම. කිසිවිටෙකත් විශ්වාස නැති දත්ත `dangerouslySetInnerHTML` මගින් ඇතුළත් නොකිරීම.",
          "3. CSRF (Cross-Site Request Forgery): පරිශීලකයා නොදැනුවත්ව වෙනත් අඩවියකින් ඔබගේ සර්වර් එක වෙත මුදල් හුවමාරු කිරීම් වැනි ඉල්ලීම් යැවීම. විසඳුම: `SameSite=Lax` හෝ `SameSite=Strict` සහ `HttpOnly` කුකීස් භාවිතය."
        ],
        codeSnippet: {
          language: "ts",
          code: `// ආරක්ෂිත JWT Cookie එකක් සකස් කිරීම
res.setHeader('Set-Cookie', [
  'session_token=' + token + '; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400'
]);`,
          description: "HttpOnly Secure Cookie සැකසීම"
        }
      }
    ],
    keyPoints: [
      "කිසිදු User Input එකක් අන්ධ ලෙස විශ්වාස නොකරන්න (Never trust user input - validate with Zod).",
      "Auth Tokens කිසිවිටෙකත් බ්‍රවුසරයේ LocalStorage තුළ නොතබන්න; HttpOnly Cookies භාවිතා කරන්න.",
      "RBAC මගින් Admin Dashboard වෙත සාමාන්‍ය පරිශීලකයින්ට පිවිසීම සර්වර් මට්ටමේදී අවහිර කරන්න."
    ],
    exercises: [
      "Zod Schema Validation පුස්තකාලය මගින් Signup Form එකක දත්ත සත්‍යාපනය කරන කේතයක් ලියන්න."
    ]
  },
  {
    id: "ch-104",
    chapterNumber: 104,
    title: "ස්වයංක්‍රීය පරීක්ෂා කිරීම් සහ මෘදුකාංග තත්ත්ව සහතිකය (Testing)",
    englishTitle: "Testing Trophy: Unit, Integration & End-to-End Testing",
    volumeId: 9,
    volumeTitle: "ප්‍රායෝගික ව්‍යාපෘති, AI යුගය සහ වෘත්තීය ගමන් මග",
    pageNumber: 324,
    learningObjectives: [
      "The Testing Trophy: Static, Unit, Integration, සහ E2E Tests.",
      "Vitest සහ React Testing Library භාවිතයෙන් Unit & Component Testing.",
      "Playwright හෝ Cypress මගින් සම්පූර්ණ පරිශීලක ගමන පරීක්ෂා කිරීම (E2E Testing).",
      "Test-Driven Development (TDD) මූලික සංකල්ප."
    ],
    sections: [
      {
        title: "104.1 Testing මට්ටම් 3",
        content: [
          "මෘදුකාංගයක් පරිශීලකයින් අතට පත්වූ පසු බිඳ වැටීම වැළැක්වීමට ස්වයංක්‍රීය පරීක්ෂණ (Automated Testing) අත්‍යවශ්‍ය වේ.",
          "1. Unit Tests: තනි Function එකක් (උදා: මුදල් ගණනය කිරීමේ සූත්‍රයක්) නිවැරදිදැයි පරීක්ෂා කිරීම.",
          "2. Integration Tests: සංරචක කිහිපයක් එකට එක්වූ විට (උදා: Form එක පුරවා Submit බොත්තම එබූ විට) ක්‍රියා කරන ආකාරය පරීක්ෂා කිරීම.",
          "3. End-to-End (E2E) Tests: සැබෑ බ්‍රවුසරයක් ස්වයංක්‍රීයව විවෘත වී, Login වී, භාණ්ඩයක් Cart එකට දමා Checkout වන තෙක් පරිශීලකයෙකු මෙන් පරීක්ෂා කිරීම."
        ],
        codeSnippet: {
          language: "ts",
          code: `// tests/math.test.ts (Vitest)
import { describe, it, expect } from 'vitest';

function calculateTotal(price: number, taxRate: number): number {
  return price + (price * taxRate);
}

describe('calculateTotal', () => {
  it('බද්ද නිවැරදිව ගණනය කළ යුතුය', () => {
    expect(calculateTotal(100, 0.15)).toBe(115);
  });
});`,
          description: "සරල Vitest Unit Test එකක්"
        }
      }
    ],
    keyPoints: [
      "Integration Tests මගින් අඩු වියදමකින් ඉහළම විශ්වසනීයත්වයක් ලැබේ.",
      "Playwright මගින් Chromium, Firefox, සහ WebKit බ්‍රවුසර ත්‍රිත්වයේම ස්වයංක්‍රීයව E2E Tests ධාවනය කළ හැක."
    ],
    exercises: [
      "පරිශීලක ලොගින් පෝරමයක් පරීක්ෂා කිරීම සඳහා Playwright E2E Test script එකක් ලියන්න."
    ]
  },
  {
    id: "ch-105",
    chapterNumber: 105,
    title: "CI/CD Pipelines, Docker Containers සහ Production DevOps",
    englishTitle: "CI/CD Automation, Docker Containers & DevOps",
    volumeId: 9,
    volumeTitle: "ප්‍රායෝගික ව්‍යාපෘති, AI යුගය සහ වෘත්තීය ගමන් මග",
    pageNumber: 328,
    learningObjectives: [
      "DevOps යනු කුමක්ද සහ සංවර්ධකයාට එහි ඇති වැදගත්කම.",
      "Docker සහ Containers මගින් 'Works on my machine' ගැටලුව විසඳීම.",
      "GitHub Actions මගින් ස්වයංක්‍රීය Continuous Integration & Continuous Deployment (CI/CD).",
      "Production Error Monitoring (Sentry) සහ CloudWatch / Logtail Logs."
    ],
    sections: [
      {
        title: "105.1 Docker Containers සංකල්පය",
        content: [
          "Docker මගින් ඔබගේ යෙදුම, Node.js අනුවාදය, Dependencies, සහ System Libraries සියල්ල කුඩා පෙට්ටියක් (Container) තුළ බහාලයි.",
          "එමගින් ඔබේ පරිගණකයේ වැඩ කරන ආකාරයටම කිසිදු වෙනසක් නැතිව Linux Production Server එකේදීම දෝෂ රහිතව ධාවනය වේ."
        ],
        codeSnippet: {
          language: "dockerfile",
          code: `# Dockerfile
FROM node:20-alpine AS runner
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]`,
          description: "Next.js Production Dockerfile"
        }
      }
    ],
    keyPoints: [
      "GitHub Actions මගින් සෑම `git push` එකකදීම ස්වයංක්‍රීයව Tests සහ Linter ධාවනය වේ.",
      "Docker මගින් Cloud පරිසරයන් අතර (AWS, DigitalOcean, GCP) යෙදුම මාරු කිරීම ඉතා පහසු වේ."
    ],
    exercises: [
      "GitHub Actions `.github/workflows/deploy.yml` ගොනුවක් සකස් කර Lint සහ Test ස්වයංක්‍රීය කරන්න."
    ]
  },
  {
    id: "ch-106",
    chapterNumber: 106,
    title: "AI යුගයේ වෙබ් ඉංජිනේරුවා (AI-Augmented Engineering)",
    englishTitle: "The AI-Augmented Engineer: LLMs, Tools & Prompt Mastery",
    volumeId: 9,
    volumeTitle: "ප්‍රායෝගික ව්‍යාපෘති, AI යුගය සහ වෘත්තීය ගමන් මග",
    pageNumber: 332,
    learningObjectives: [
      "AI මෙවලම් (Cursor, GitHub Copilot, Claude, Gemini) සහායකයෙකු ලෙස බුද්ධිමත්ව භාවිතය.",
      "AI විසින් ලියන කේත වල දුර්වලතා හඳුනා ගැනීම සහ Code Auditing.",
      "වෙබ් යෙදුම් තුළට Google Gemini / OpenAI APIs ඒකාබද්ධ කිරීම.",
      "Structured Output, Tool Calling සහ RAG (Retrieval-Augmented Generation) මූලික කරුණු."
    ],
    sections: [
      {
        title: "106.1 AI යුගයේ Developer භූමිකාව වෙනස් වීම",
        content: [
          "නූතන ලෝකයේ සාමාන්‍ය කේත පේළි ලිවීම AI මගින් වේගවත් කර ඇත. එහෙත් මෘදුකාංගයක ආරක්ෂාව, කාර්යක්ෂමතාව, දත්ත ව්‍යුහය සහ ව්‍යාපාරික අවශ්‍යතා තීරණය කිරීමේ බර තවමත් ඇත්තේ ඉංජිනේරුවා සතුවය.",
          "ඉදිරියේදී සාර්ථක වන්නේ AI වලට බිය වන කෙනා නොව, AI මෙවලමක් ලෙස ගෙන තනිවම සම්පූර්ණ මෘදුකාංග කණ්ඩායමක කාර්යක්ෂමතාව ලබාගන්නා 'AI-Augmented Engineer' ය."
        ]
      }
    ],
    keyPoints: [
      "AI මගින් ලැබෙන කේතයන්හි Security Pitfalls සහ Hallucinations තිබිය හැකි බැවින් ඒවා විමර්ශනය කිරීමට මූලික දැනුම අත්‍යවශ්‍ය වේ.",
      "Prompt Engineering යනු ගැටලුව නිශ්චිත සන්දර්භයක් (Context) සහ Constraints සහිතව ඉදිරිපත් කිරීමයි."
    ],
    exercises: [
      "@google/genai SDK එක භාවිතයෙන් පරිශීලකයාගේ සටහන් ස්වයංක්‍රීයව සාරාංශ කරන API Route එකක් තනන්න."
    ]
  },
  {
    id: "ch-107",
    chapterNumber: 107,
    title: "ගෝලීය වෘත්තීය මාවත, ජයග්‍රාහී Portfolio සහ සම්මුඛ පරීක්ෂණ ජය ගැනීම",
    englishTitle: "Global Career Launch, Killer Portfolio & Technical Interviews",
    volumeId: 9,
    volumeTitle: "ප්‍රායෝගික ව්‍යාපෘති, AI යුගය සහ වෘත්තීය ගමන් මග",
    pageNumber: 336,
    learningObjectives: [
      "බඳවා ගන්නන් (Recruiters) වශී කරන Developer Portfolio එකක අඩංගු විය යුතු අංග.",
      "GitHub Profile එක සකස් කිරීම: පිරිසිදු Readme, Live Demo Links සහ Open Source දායකත්වය.",
      "Technical Coding Interviews (DSA, Live Coding, System Architecture) ජයගැනීමේ රහස්.",
      "Freelancing (Upwork, Fiverr) සහ Remote Developer රැකියා සඳහා අයදුම් කිරීම."
    ],
    sections: [
      {
        title: "107.1 ජයග්‍රාහී Developer Portfolio එකක අංග 5",
        content: [
          "1. Live Interactive Demos: වීඩියෝ හෝ පින්තූර පමණක් නොව, ක්ලික් කර බැලිය හැකි සජීවී URL එකක් සෑම ව්‍යාපෘතියකටම තිබිය යුතුය.",
          "2. GitHub Source Code: පිරිසිදු Commit Messages, ESLint, TypeScript, සහ පැහැදිලි README.md ගොනුවක් තිබීම.",
          "3. Real-world Complexity: සාමාන්‍ය To-Do list නොව, Authentication, Payments, Database, සහ AI APIs ඒකාබද්ධ කළ සැබෑ ව්‍යාපෘති 2-3ක් තිබීම.",
          "4. Problem-Solving Story: ව්‍යාපෘතිය හැදුවේ ඇයි, මුහුණ දුන් අභියෝග මොනවාද සහ ඒවා ජයගත්තේ කෙසේද යන්න විස්තර කිරීම.",
          "5. Mobile Responsiveness සහ Fast Loading: දුරකථනයෙන් බලන Recruiter කෙනෙකුටත් වෙබ් අඩවිය තත්පර 1කින් විවෘත විය යුතුය."
        ],
        tips: [
          "පොත් කියවා අවසන් වූ පසු කේත ලිවීම නවත්වන්න එපා. අදම ඔබේම අලුත් ව්‍යාපෘතියක් ආරම්භ කර එය ලොවට විවෘත කරන්න!"
        ]
      }
    ],
    practicalTask: {
      title: "ඔබගේම Full Stack Portfolio වෙබ් අඩවිය සජීවීව ප්‍රකාශනය කිරීම",
      steps: [
        "Next.js, Tailwind CSS සහ TypeScript භාවිතයෙන් ඔබගේ Portfolio අඩවිය නිර්මාණය කරන්න.",
        "මෙම පොතෙන් ඔබ ගොඩනැගූ හොඳම ව්‍යාපෘති 3 (TaskMaster Pro, SkyCast, E-commerce) එයට ඇතුළත් කරන්න.",
        "GitHub වෙත Upload කර Vercel හෝ Netlify හරහා සජීවී Custom Domain එකක් යටතේ විවෘත කරන්න.",
        "LinkedIn සහ Twitter/X හි ඔබගේ නිර්මාණය බෙදාහදා ගන්න."
      ]
    },
    keyPoints: [
      "නිරන්තර පුහුණුව සහ අත් නොහැරීමේ උත්සාහය සාර්ථක මෘදුකාංග ඉංජිනේරුවෙකු වීමේ එකම රහසයි.",
      "T. Sachintha Imesh [FYZIE] ගේ මෙම පාඨමාලා ග්‍රන්ථය ඔබගේ සාර්ථකත්වයට තැබූ ශක්තිමත් පදනමයි. ඉදිරි ගමන ඔබ සතුය!"
    ],
    exercises: [
      "ඔබගේ LinkedIn Headine එක සහ Bio එක නවීන Full Stack Developer කෙනෙකුට ගැළපෙන පරිදි සකස් කරන්න."
    ],
    interviewQuestions: [
      {
        question: "සම්මුඛ පරීක්ෂණයකදී පිළිතුරක් නොදන්නා ප්‍රශ්නයක් ඇසුවහොත් ඔබ කළ යුත්තේ කුමක්ද?",
        answer: "බොරු නොකියා, එම ක්ෂේත්‍රයේ ඔබ දන්නා මූලික සංකල්පය පවසා, ගැටලුව විසඳීමට ඔබ සිතන තාර්කික ප්‍රවේශය (Thought Process) සම්මුඛ පරීක්ෂකවරයාට පැහැදිලි කරන්න. ඉංජිනේරුවෙකුගෙන් සොයන්නේ පිළිතුරු කටපාඩම් කර ඇති බව නොව, නොදන්නා ගැටලුවකට මුහුණ දෙන ආකාරයයි."
      }
    ]
  }
];
