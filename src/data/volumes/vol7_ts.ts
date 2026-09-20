import { Volume } from '../../types';

export const volume7: Volume = {
  id: 7,
  volumeNumber: 7,
  title: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
  englishTitle: "TypeScript Mastery",
  color: "from-blue-600/20 via-sky-600/10 to-indigo-600/20",
  iconName: "ShieldCheck",
  badge: "Type Safety & Enterprise Code",
  description: "Static vs Dynamic Typing, Type Annotations, Type Inference, Unions, Type Aliases, Interfaces vs Types, Generics (<T>), Utility Types, සහ Advanced Classes.",
  chapterCount: 8,
  pageRange: "පිටු 253 - 272",
  chapters: [
    {
      id: 83,
      volumeId: 7,
      chapterNumber: 83,
      title: "ටයිප්ස්ක්‍රිප්ට් හැඳින්වීම - ජාවාස්ක්‍රිප්ට් වලට ලැබුණු ආරක්ෂාව",
      englishTitle: "Introduction to TypeScript & Type Safety",
      pageRange: "පිටු 253 - 254",
      description: "TypeScript = JavaScript + Static Typing, Microsoft TSC Compiler, Compile-time vs Runtime errors, සහ tsconfig.json.",
      learningObjectives: [
        "ටයිප්ස්ක්‍රිප්ට් (TypeScript) යනු ජාවාස්ක්‍රිප්ට් වලට ඉහළින් (Superset) ගොඩනැගූ ආරක්ෂිත ස්ථරය බව තේරුම් ගැනීම",
        "ජාවාස්ක්‍රිප්ට් හි දත්ත වර්ග පරීක්ෂාව නොමැති වීම නිසා සිදුවන බරපතල ගැටලු (උදා: add('5', 10) ➔ '510')",
        "Static Typing: දත්ත වර්ගය තීරණය වී කේතය ලියන අතරතුරදීම (Compile-time) වැරදි හසු වීම",
        "TypeScript Compiler (TSC) මඟින් .ts ගොනු සාමාන්‍ය .js බවට හැරවීම",
        "tsconfig.json ගොනුව මඟින් Compiler Options සකස් කිරීම"
      ],
      sections: [
        {
          title: "83.1 TypeScript හැඳින්වීම සහ Static Typing සංකල්පය",
          content: [
            "ජාවාස්ක්‍රිප්ට් යනු Dynamic Typed භාෂාවකි. එහිදී විචල්‍යයකට ඕනෑම මොහොතක ඕනෑම වර්ගයක දත්තයක් පැවරිය හැක. මෙය ආරම්භයේදී පහසු බවක් පෙනුනද, දැවැන්ත කේත පද්ධතිවලදී අනපේක්ෂිත Runtime Bugs ඇති කිරීමට හේතු වේ.",
            "ටයිප්ස්ක්‍රිප්ට් (TypeScript) යනු Microsoft සමාගම විසින් නිර්මාණය කරන ලද JavaScript හි 'Superset' එකකි. එනම් වලංගු ඕනෑම JavaScript කේතයක් TypeScript තුළ ක්‍රියාත්මක වන අතර, ඊට අමතරව 'Static Typing' නම් ප්‍රබල ආරක්ෂිත ආවරණය එක් කර ඇත.",
            "Static Typing මඟින් සෑම විචල්‍යයක්ම, ශ්‍රිතයක පරාමිතියක්ම සහ ප්‍රතිදානයක්ම කුමන වර්ගයේ දත්තයක්ද යන්න කේතය ලියන අවස්ථාවේදීම දැඩි ලෙස තහවුරු කරයි."
          ],
          asciiDiagram: `┌────────────────────────────────────────┐
│           TypeScript (.ts)             │
│  ┌──────────────────────────────────┐  │
│  │         JavaScript (.js)         │  │
│  │  (Variables, Functions, Loops)   │  │
│  └──────────────────────────────────┘  │
│   + Static Typing, Interfaces, Generics│
└──────────────────┬─────────────────────┘
                   │ TSC Compiler Transpiles
                   ▼
┌────────────────────────────────────────┐
│      Pure Browser JavaScript (.js)     │
└────────────────────────────────────────┘`
        },
        {
          title: "83.2 Compile-Time vs Runtime Errors (JavaScript හි සීමාවන්)",
          content: [
            "ජාවාස්ක්‍රිප්ට් හිදී function add(a, b) { return a + b; } ලියූ විට, පරිශීලකයෙකු add('5', 10) යැවුවහොත් ලැබෙන්නේ 15 නොව '510' නමැති වැරදි String එකයි. මෙය පරිශීලකයා වෙබ් අඩවිය භාවිතා කරන මොහොතේදී පමණක් (Runtime) අනාවරණය වේ.",
            "නමුත් TypeScript හිදී කේතය ලියන මොහොතේදීම (Compile-time) කේත සංස්කාරකය තුළ රතු ඉරක් මතු කර දෝෂය පෙන්වා දෙයි. නිෂ්පාදන මට්ටමේ (Production) බිඳ වැටීම් 60% කට වඩා වැළැක්වීමට මෙය සමත් වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Compile-Time Error Checking",
              code: `function add(a: number, b: number): number {
  return a + b;
}

add(5, 10); // ✅ 15 - නිවැරදියි!

// add("5", 10); 
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.`
            }
          ]
        },
        {
          title: "83.3 TypeScript Compiler (TSC) සහ tsconfig.json වින්‍යාසය",
          content: [
            "බ්‍රවුසරවලට සෘජුවම TypeScript කියවිය නොහැක. එබැවින් TypeScript Compiler (tsc) මඟින් .ts ගොනුව සාමාන්‍ය .js ගොනුවක් බවට පරිවර්තනය (Transpile) කරයි.",
            "tsconfig.json ගොනුව යනු ටයිප්ස්ක්‍රිප්ට් ව්‍යාපෘතියක හදවතයි. එමඟින් Compiler එක හැසිරිය යුතු නීති පද්ධතිය තීරණය කරයි:"
          ],
          codeSnippets: [
            {
              language: "json",
              title: "tsconfig.json Sample",
              code: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,            // සියලුම දැඩි වර්ග පරීක්ෂණ සක්‍රීය කරයි
    "noImplicitAny": true,     // කිසිදු විචල්‍යයකට නොදැනුවත්ව any ලැබීම වළක්වයි
    "jsx": "preserve",
    "skipLibCheck": true
  },
  "include": ["src"]
}`
            }
          ]
        }
      ],
      keyPoints: [
        "TypeScript යනු JavaScript හි Static Superset එකකි.",
        "Compile-time errors මඟින් පාරිභෝගිකයා අතට බග්ස් (Bugs) යාම වළක්වයි.",
        "tsc මඟින් කේතය පිරිසිදු JavaScript බවට Transpile වේ."
      ],
      exercises: [
        { id: 1, question: "Static Typing සහ Dynamic Typing අතර ඇති මූලික වෙනස කුමක්ද?" },
        { id: 2, question: "tsconfig.json හි 'strict': true දැමීමේ අරමුණ කුමක්ද?" }
      ]
    },
    {
      id: 84,
      volumeId: 7,
      chapterNumber: 84,
      title: "මූලික දත්ත වර්ග සහ ටයිප් ඇනෝටේෂන්",
      englishTitle: "Basic Data Types, Annotations & Inference",
      pageRange: "පිටු 254 - 257",
      description: "Type Annotation (Shape Sorter උපමාව), Type Inference, number, string, boolean, Arrays, Tuples, Enums, any, void, never.",
      learningObjectives: [
        "Type Annotation (විචල්‍යයේ නමට පසු : type යෙදීම) ප්‍රගුණ කිරීම",
        "Type Inference: ටයිප්ස්ක්‍රිප්ට් විසින් අගය බලා දත්ත වර්ගය ස්වයංක්‍රීයව අනුමාන කිරීම",
        "Arrays, Tuples සහ Enums හි වෙනස්කම් වටහා ගැනීම",
        "any, unknown, void සහ never යන විශේෂ දත්ත වර්ග නිවැරදිව භාවිතය"
      ],
      sections: [
        {
          title: "84.1 Primitive Types සහ Type Inference",
          content: [
            "ටයිප්ස්ක්‍රිප්ට් හි මූලික ප්‍රාථමික දත්ත වර්ග 3කි: string, number, සහ boolean.",
            "Type Annotation යනු විචල්‍යය අසලින්ම එහි වර්ගය ලියා දැක්වීමයි: let age: number = 24;",
            "Type Inference: ඔබ වර්ගය නොලිව්වද, ප්‍රථමයෙන් පවරන අගය අනුව TypeScript ස්වයංක්‍රීයව වර්ගය අනුමාන කර ගනී (Infers). ഉදාහරණයක් ලෙස let name = 'Sachintha'; ලියූ විට එය ස්වයංක්‍රීයව string ලෙස පිළිගනී."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Primitive Types & Inference",
              code: `let developerName: string = "Sachintha Imesh";
let experienceYears: number = 4;
let isProDeveloper: boolean = true;

// Type Inference:
let siteUrl = "https://mysite.com"; // TS knows it's a string!
// siteUrl = 404; // ❌ Error: Type 'number' is not assignable to type 'string'`
            }
          ]
        },
        {
          title: "84.2 Arrays සහ Tuples",
          content: [
            "Arrays: එකම වර්ගයේ දත්ත සමූහයක් ගබඩා කිරීමට number[] හෝ Array<string> යොදා ගැනේ.",
            "Tuples: සාමාන්‍ය අරාවකට වඩා වෙනස්ව, නියමිත දිගක් (Fixed Length) සහ එක් එක් ස්ථානයේ නිශ්චිත දත්ත වර්ගයක් (Fixed Types per Index) අඩංගු අරාවන් Tuples ලෙස හැඳින්වේ. (උදාහරණ: React හි useState Hook එක ප්‍රතිදානය කරන්නේ Tuple එකකි: [value, setter])."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Arrays & Tuples",
              code: `// Array:
const skills: string[] = ["React", "TypeScript", "Next.js", "Tailwind"];
const scores: Array<number> = [95, 88, 100];

// Tuple: [string, number, boolean]
let userRecord: [string, number, boolean];
userRecord = ["Sachintha", 20, true]; // ✅ නිවැරදියි
// userRecord = [20, "Sachintha", true]; // ❌ වැරදියි! පිළිවෙල මාරු කළ නොහැක`
            }
          ]
        },
        {
          title: "84.3 Enums: නියත අගයන් සංවිධානය කිරීම",
          content: [
            "Enums (Enumerations) මඟින් එකිනෙකට සම්බන්ධ නියත අගයන් සමූහයකට හඳුනාගත හැකි පහසු නම් ලබා දේ. පෙරනිමියෙන් Numeric Enums 0 සිට අංකනය වන අතර, කාර්මාන්ත මට්ටමේදී String Enums බහුලව භාවිත වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Numeric & String Enums",
              code: `// String Enum (නිර්දේශිතයි)
enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED"
}

function updateOrder(status: OrderStatus) {
  console.log("වත්මන් ඇණවුම් තත්ත්වය:", status);
}

updateOrder(OrderStatus.SHIPPED); // ✅ Type-safe!`
            }
          ]
        },
        {
          title: "84.4 විශේෂ දත්ත වර්ග: any, unknown, void, සහ never",
          content: [
            "• any: වර්ග පරීක්ෂාව සම්පූර්ණයෙන්ම අක්‍රිය කරයි (Danger zone). කිසිවිටෙකත් පුරුද්දක් ලෙස භාවිත නොකරන්න.",
            "• unknown: වර්ගය නොදන්නා අවස්ථාවලදී any වෙනුවට ආරක්ෂිත විකල්පයයි. භාවිතා කිරීමට පෙර Type Check එකක් සිදු කළ යුතුමය.",
            "• void: කිසිදු අගයක් Return නොකරන ශ්‍රිත සඳහා භාවිතා වේ.",
            "• never: කිසිදා සාර්ථකව අවසන් නොවන (හැමවිටම Error එකක් විසිකරන හෝ Infinite Loop ඇති) ශ්‍රිත සඳහා යෙදේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "unknown vs void vs never",
              code: `// unknown:
let rawData: unknown = "හෙලෝ";
if (typeof rawData === "string") {
  console.log(rawData.toUpperCase()); // ✅ Safe after check
}

// void:
function logMessage(msg: string): void {
  console.log("Log:", msg);
}

// never:
function throwFatalError(message: string): never {
  throw new Error("අනපේක්ෂිත බිඳවැටීමක්: " + message);
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Type Annotation මඟින් දත්ත වර්ගය තහවුරු කරන අතර Inference මඟින් කේතය කෙටි කරයි.",
        "Tuples මඟින් ස්ථාවර අනුපිළිවෙලක් සහිත අරාවන් තහවුරු කරයි.",
        "any වෙනුවට unknown භාවිත කිරීම ආරක්ෂිත වේ."
      ],
      exercises: [
        { id: 1, question: "any සහ unknown අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "[string, number] ආකාරයේ Tuple එකක් සාදන උදාහරණයක් ලියන්න." }
      ]
    },
    {
      id: 85,
      volumeId: 7,
      chapterNumber: 85,
      title: "යූනියන් ටයිප්ස් සහ ටයිප් ඇලියස් (Unions & Type Aliases)",
      englishTitle: "Union Types, Type Aliases & Type Narrowing",
      pageRange: "පිටු 257 - 260",
      description: "Union Types (|) - බහුකාර්ය පෑන උපමාව, Type Guarding (typeof), Literal Types ('light' | 'dark'), Type Aliases (type User = { }), Optional properties (?).",
      learningObjectives: [
        "Union Types (|) මඟින් විචල්‍යයකට දත්ත වර්ග කිහිපයකින් එකක් ලබා දීම",
        "Type Guarding සහ Narrowing (typeof, in, instanceof) ප්‍රගුණ කිරීම",
        "Literal Types මඟින් අගයන් නියත වචන කිහිපයකට සීමා කිරීම",
        "Type Aliases (type Keyword) මඟින් සංකීර්ණ දත්ත ව්‍යුහයන් සඳහා නම් ලබා දීම",
        "Intersection Types (&) මඟින් වර්ග දෙකක් එකතු කිරීම"
      ],
      sections: [
        {
          title: "85.1 Union Types (|) සහ Literal Types",
          content: [
            "Union Type (|) එකක් යනු OR (හෝ) කොන්දේසියක් වැනිය. යම් විචල්‍යයකට වර්ග කිහිපයකින් එකක් විය හැකි බව පවසයි (උදා: string | number).",
            "Literal Types මඟින් සාමාන්‍ය string හෝ number වෙනුවට, විචල්‍යයට ගත හැකි නිශ්චිත අගයන් ලැයිස්තුවක්ම නියම කළ හැක (උදා: status: 'loading' | 'success' | 'error')."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Union and Literal Types",
              code: `type ThemeMode = "light" | "dark" | "system";
type Status = "idle" | "pending" | "resolved" | "rejected";

let currentTheme: ThemeMode = "dark"; // ✅
// currentTheme = "blue"; // ❌ Error: Type '"blue"' is not assignable to type 'ThemeMode'.`
            }
          ]
        },
        {
          title: "85.2 Type Aliases (type Keyword) සහ Optional Properties",
          content: [
            "සංකීර්ණ Object එකක ව්‍යුහය නැවත නැවත ලිවීම වෙනුවට 'type' යතුරුපදය මඟින් එයට අද්විතීය නමක් (Alias) ලබා දිය හැක.",
            "යම් ගුණාංගයක් අනිවාර්ය නොවේ නම්, නමට පසු ? (Question mark) යෙදීමෙන් එය Optional Property එකක් බවට පත් කළ හැක."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Type Alias with Optional Property",
              code: `type User = {
  readonly id: number;      // වෙනස් කළ නොහැක
  name: string;
  email: string;
  phoneNumber?: string;     // Optional (ඇතුළත් කිරීම අනිවාර්ය නැත)
};

const user1: User = {
  id: 1,
  name: "Sachintha",
  email: "sachintha@example.com"
}; // phoneNumber නැතත් දෝෂයක් නැත!`
            }
          ]
        },
        {
          title: "85.3 Type Narrowing සහ Type Guards (typeof, in)",
          content: [
            "Union Type එකක් ඇති විට (උදා: string | number), එම විචල්‍යය භාවිතා කිරීමට පෙර TypeScript එහි සැබෑ වර්ගය කුමක්දැයි පරීක්ෂා කර බලා එම වර්ගයට පමණක් සීමා කරයි (Narrowing).",
            "Type Guards ලෙස typeof, instanceof, හෝ in ක්‍රියාකරු යොදා ගැනේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Type Narrowing with typeof",
              code: `function formatInput(val: string | number): string {
  if (typeof val === "string") {
    // මෙහිදී TS දනියි val යනු string එකක් බව!
    return val.trim().toUpperCase();
  } else {
    // මෙහිදී TS දනියි val යනු number එකක් බව!
    return val.toFixed(2);
  }
}`
            }
          ]
        },
        {
          title: "85.4 Intersection Types (&) - වර්ග එකතු කිරීම",
          content: [
            "Union Type (|) මඟින් වර්ග දෙකකින් එකක් තෝරා ගන්නා අතර, Intersection Type (&) මඟින් වර්ග දෙකේම ඇති සියලුම ගුණාංග එකතු කර නව සංයුක්ත වර්ගයක් සාදයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Intersection Type Example",
              code: `type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const student: Person = {
  name: "Nimal",
  age: 21
}; // ගුණාංග දෙකම තිබිය යුතුයි!`
            }
          ]
        }
      ],
      keyPoints: [
        "Union Types (|) මඟින් විකල්ප දත්ත වර්ග ලබා දේ.",
        "Type Guards (typeof) මඟින් Runtime එකේදී දත්ත වර්ගය පරීක්ෂා කර ආරක්ෂාව තහවුරු කරයි.",
        "Intersection Types (&) මඟින් වර්ග කිහිපයක් එකට ඒකාබද්ධ කරයි."
      ],
      exercises: [
        { id: 1, question: "Type Narrowing යනු කුමක්ද සහ එය අවශ්‍ය වන්නේ ඇයි?" },
        { id: 2, question: "Literal Types සහ Enums අතර ඇති සමානකම කුමක්ද?" }
      ]
    },
    {
      id: 86,
      volumeId: 7,
      chapterNumber: 86,
      title: "ශ්‍රිත සහ ටයිප්ස්ක්‍රිප්ට් (Functions in TypeScript)",
      englishTitle: "Functions in TypeScript - Parameters & Returns",
      pageRange: "පිටු 260 - 262",
      description: "Parameter Types, Return Types, Optional parameters (?), Default parameters (=), void vs never, Arrow Functions with TS, Function Type Expressions.",
      learningObjectives: [
        "ශ්‍රිතයක පරාමිතීන් (Parameters) සහ ප්‍රතිදානය (Return Type) නිවැරදිව ටයිප් කිරීම",
        "Optional (?) සහ Default (=) parameters භාවිතය",
        "Rest Parameters (...args) ටයිප් කිරීම",
        "Function Type Signatures සාදා නැවත භාවිතා කිරීම"
      ],
      sections: [
        {
          title: "86.1 Function Parameter සහ Return Type Annotations",
          content: [
            "ශ්‍රිතයකට ඇතුළු වන පරාමිතීන් සහ පිටවන ප්‍රතිදානය දැඩි ලෙස ටයිප් කිරීමෙන් වැරදි දත්ත ශ්‍රිතය තුළට යාම වළක්වයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Function Type Annotation",
              code: `function calculateTotal(price: number, quantity: number, taxRate: number): number {
  const subtotal = price * quantity;
  return subtotal + (subtotal * taxRate);
}

const total: number = calculateTotal(1500, 2, 0.15);`
            }
          ]
        },
        {
          title: "86.2 Optional (?) සහ Default (=) Parameters",
          content: [
            "Optional parameter එකක් යනු ශ්‍රිතය අමතන විට ලබා දීම අනිවාර්ය නොවන පරාමිතියකි. එය සැමවිටම අනිවාර්ය පරාමිතීන්ට පසුව තැබිය යුතුය.",
            "Default parameter මඟින් පරිශීලකයා අගයක් ලබා නොදුනහොත් පෙරනිමි අගයක් ලබා දේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Optional and Default Parameters",
              code: `function sendEmail(to: string, subject: string, cc?: string, priority: string = "Normal"): void {
  console.log(\`Sending to \${to}, Priority: \${priority}\`);
  if (cc) console.log(\`CC: \${cc}\`);
}

sendEmail("user@example.com", "සාදරයෙන් පිළිගනිමු"); // ✅ නිවැරදියි!`
            }
          ]
        },
        {
          title: "86.3 Rest Parameters (...args) සහ Arrow Functions",
          content: [
            "අනන්ත සංඛ්‍යා ප්‍රමාණයක් එකතු කිරීමට Rest parameters යෙදිය හැක. ටයිප්ස්ක්‍රිප්ට් හිදී එය අරාවක් ලෙස ටයිප් කරනු ලැබේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Rest Parameters & Typed Arrow Functions",
              code: `// Rest Parameters:
function sumAllNumbers(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Arrow Function Type Signature:
type MathOp = (a: number, b: number) => number;

const multiply: MathOp = (x, y) => x * y;
const divide: MathOp = (x, y) => x / y;`
            }
          ]
        }
      ],
      keyPoints: [
        "Return type එක නොලියා Inference මඟින් තීරණය කිරීමට ඉඩ දිය හැකි වුවද, පැහැදිලි බව සඳහා Return type ලිවීම හොඳම පුරුද්දකි.",
        "Optional parameters සැමවිටම අවසානයට තැබිය යුතුය."
      ],
      exercises: [
        { id: 1, question: "Optional parameter එකක් අනිවාර්ය parameter එකකට පෙර තැබිය නොහැක්කේ ඇයි?" }
      ]
    },
    {
      id: 87,
      volumeId: 7,
      chapterNumber: 87,
      title: "ඉන්ටර්ෆේස් - දත්ත ව්‍යුහයන් සැලසුම් කිරීම (Interfaces)",
      englishTitle: "Interfaces in TypeScript - Designing Contracts",
      pageRange: "පිටු 262 - 264",
      description: "Interface යනු කුමක්ද (රියදුරු බලපත්‍රය උපමාව), interface syntax, readonly, extends (Inheritance), Interface vs Type Alias, Declaration Merging.",
      learningObjectives: [
        "Interface යනු වස්තුවක් (Object) සතු විය යුතු ගිවිසුමක් (Contract) බව වටහා ගැනීම",
        "extends මඟින් ඉන්ටර්ෆේස් එකිනෙකට උරුම කර දීම (Inheritance)",
        "Interface vs Type Alias අතර ඇති තාක්ෂණික වෙනස්කම්",
        "Declaration Merging සංකල්පය"
      ],
      sections: [
        {
          title: "87.1 Interface යනු කුමක්ද? (කොන්ත්‍රාත් ගිවිසුම උපමාව)",
          content: [
            "Interface යනු වස්තුවක් (Object) සතු විය යුතු හැඩය (Shape) තීරණය කරන ගිවිසුමකි. එම ගිවිසුමට එකඟ වන ඕනෑම Object එකක් එහි සඳහන් නීති රීති ඒ ආකාරයෙන්ම පිළිපැදිය යුතුය."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Basic Interface",
              code: `interface Student {
  readonly id: number; // වෙනස් කළ නොහැක
  name: string;
  grade: number;
  isPassed: boolean;
  greet(): string;    // Method signature
}

const nimal: Student = {
  id: 101,
  name: "නිමල් පෙරේරා",
  grade: 12,
  isPassed: true,
  greet() {
    return \`ආයුබෝවන්, මගේ නම \${this.name}\`;
  }
};`
            }
          ]
        },
        {
          title: "87.2 Interface Inheritance (extends Keyword)",
          content: [
            "extends යතුරුපදය මඟින් පවතින Interface එකක ඇති සියලුම ගුණාංග උරුම කරගෙන නව අමතර ගුණාංග එකතු කළ හැක."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Extending Interfaces",
              code: `interface Person {
  name: string;
  email: string;
}

interface Developer extends Person {
  techStack: string[];
  githubUrl: string;
}

const fyzie: Developer = {
  name: "T. Sachintha Imesh",
  email: "fyzie44@gmail.com",
  techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
  githubUrl: "https://github.com"
};`
            }
          ]
        },
        {
          title: "87.3 Interface vs Type Alias (සන්සන්දනය)",
          content: [
            "• Interface: Object වල හැඩය නිර්වචනයට සහ Class වලට implement කිරීමට වඩාත්ම සුදුසුය. Declaration Merging (එකම නමින් Interfaces දෙකක් ලියූ විට එකතු වීම) කළ හැක.",
            "• Type Alias: Unions (|), Primitives, සහ Tuples නිර්වචනය සඳහා අත්‍යවශ්‍ය වේ. Declaration Merging කළ නොහැක."
          ]
        }
      ],
      keyPoints: [
        "Object Shapes සඳහා Interfaces ද, Unions සඳහා Type Aliases ද කාර්මාන්ත ප්‍රමිතියයි.",
        "extends මඟින් Code Reusability උපරිම වේ."
      ],
      exercises: [
        { id: 1, question: "Interface එකක් සහ Type Alias එකක් අතර ප්‍රධාන වෙනස්කම් 2ක් දක්වන්න." }
      ]
    },
    {
      id: 88,
      volumeId: 7,
      chapterNumber: 88,
      title: "ජෙනරික්ස් - නම්‍යශීලී සහ නැවත භාවිතා කළ හැකි කේතකරණය (Generics)",
      englishTitle: "Generics in TypeScript (<T>)",
      pageRange: "පිටු 265 - 267",
      description: "Generics යනු කුමක්ද (වෙළඳ යන්ත්‍රය උපමාව), Generic Functions (<T>), Generic Interfaces, Generic Classes, Constraints (extends HasLength).",
      learningObjectives: [
        "Generic යනු ඕනෑම දත්ත වර්ගයක් සමඟ Type-Safety රකිමින් වැඩ කළ හැකි ශ්‍රිත සහ පන්ති සෑදීම බව",
        "any වෙනුවට Generics භාවිතා කිරීමෙන් Type Safety රැක ගැනීම",
        "<T> (Type Parameter) භාවිතා කිරීමේ නීති",
        "Generic Constraints (extends) මඟින් සීමාවන් පැනවීම"
      ],
      sections: [
        {
          title: "88.1 Generics හැඳින්වීම සහ වාත්තු අච්චුව උපමාව",
          content: [
            "වාත්තු අච්චුවක් (Mold) ගැන සිතන්න. එම අච්චුවට රත්තරන් දැමුවහොත් රන් මුදුවක් ලැබේ. රිදී දැමුවහොත් රිදී මුදුවක් ලැබේ. අච්චුවේ හැඩය එකමය. Generics යනු එම අච්චුව වැනිය.",
            "any භාවිතා කළහොත් ඇතුළු කරන වර්ගය සහ ප්‍රතිදානය අතර සම්බන්ධය ගිලිහී යයි. නමුත් <T> භාවිතා කළ විට ඇතුළු කරන වර්ගයම (Type) නොවෙනස්ව ප්‍රතිදානය වන බවට සහතික වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Generic Function <T>",
              code: `function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(100); // return type is number
const str = identity<string>("හෙලෝ"); // return type is string`
            }
          ]
        },
        {
          title: "88.2 Generic Arrays සහ Generic Interfaces",
          content: [
            "අරාවක පළමු අයිතමය ලබා ගන්නා ශ්‍රිතයක් හෝ API එකකින් දත්ත ලබා ගන්නා Response Wrapper එකක් සාදන විට Generic Interfaces අතිශය ප්‍රයෝජනවත් වේ:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Generic API Response Interface",
              code: `interface ApiResponse<TData> {
  statusCode: number;
  message: string;
  data: TData;
}

interface UserProfile {
  id: number;
  username: string;
}

// UserProfile වර්ගයේ දත්ත ලැබෙන ප්‍රතිචාරය:
const userResponse: ApiResponse<UserProfile> = {
  statusCode: 200,
  message: "සාර්ථකයි",
  data: { id: 1, username: "sachintha" }
};`
            }
          ]
        },
        {
          title: "88.3 Generic Constraints (extends Keyword)",
          content: [
            "ඕනෑම වර්ගයක් භාර ගන්නවා වෙනුවට යම් නිශ්චිත ගුණාංගයක් (උදා: .length) අනිවාර්යයෙන්ම තිබිය යුතු බවට සීමා කිරීමට Generic Constraints (T extends Interface) යොදයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Generic Constraint with extends",
              code: `interface HasLength {
  length: number;
}

function printLength<T extends HasLength>(item: T): void {
  console.log("දිග ප්‍රමාණය:", item.length);
}

printLength("Hello World"); // ✅ Strings have length
printLength([1, 2, 3, 4]);   // ✅ Arrays have length
// printLength(12345);        // ❌ Error: numbers don't have .length`
            }
          ]
        }
      ],
      keyPoints: [
        "Generics මඟින් කේතය නැවත ලිවීමෙන් තොරව උපරිම Type-Safety ලබා දේ.",
        "extends මඟින් Generic Type එකට නීති පැනවිය හැක."
      ],
      exercises: [
        { id: 1, question: "Generic Function එකක <T> අකුරෙන් අදහස් වන්නේ කුමක්ද?" },
        { id: 2, question: "any භාවිතා කරනවාට වඩා Generics උසස් වන්නේ ඇයි?" }
      ]
    },
    {
      id: 89,
      volumeId: 7,
      chapterNumber: 89,
      title: "උසස් ටයිප් ඉංජිනේරු විද්‍යාව සහ කාර්මාන්ත සම්මත රටා",
      englishTitle: "Advanced Type Engineering & Utility Types",
      pageRange: "පිටු 267 - 270",
      description: "Discriminated Unions (status: 'success' | 'error'), Utility Types (Partial, Pick, Omit, Readonly), Type Assertions (as), Index Signatures, Mapped Types.",
      learningObjectives: [
        "Discriminated Unions මඟින් සංකීර්ණ API Responses හැසිරවීම",
        "Utility Types: Partial<T>, Pick<T, K>, Omit<T, K>, Readonly<T> ප්‍රගුණ කිරීම",
        "Index Signatures මඟින් ගතික Objects කළමනාකරණය",
        "Type Assertions (as) නිවැරදිව භාවිතය"
      ],
      sections: [
        {
          title: "89.1 Discriminated Unions මඟින් දෝෂ රහිත State හැසිරවීම",
          content: [
            "සෑම වර්ගයකටම පොදු 'ලේබලයක්' (Discriminant property, උදා: type හෝ status) ලබා දීමෙන් සාර්ථක ප්‍රතිචාරයක (Success) දත්ත අසාර්ථක ප්‍රතිචාරයක (Error) පණිවිඩ සමඟ පටලවා නොගන්නා බවට TypeScript සහතික වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Discriminated Unions Pattern",
              code: `type AsyncState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; errorMsg: string };

function renderUI(state: AsyncState) {
  switch (state.status) {
    case "loading":
      return "පූරණය වෙමින් පවතී...";
    case "success":
      return \`දත්ත ගණන: \${state.data.length}\`;
    case "error":
      return \`දෝෂය: \${state.errorMsg}\`;
    default:
      return "සූදානම්";
  }
}`
            }
          ]
        },
        {
          title: "89.2 අත්‍යවශ්‍ය Utility Types: Partial, Pick, Omit, Readonly",
          content: [
            "TypeScript හි ඇති ගොඩනැගූ Utility Types මඟින් පවතින වර්ග නව හැඩයන්ට පහසුවෙන් හැරවිය හැක:",
            "• Partial<T>: සියලුම ගුණාංග Optional (?) බවට පත් කරයි (Update Forms සඳහා).",
            "• Readonly<T>: කිසිදු ගුණාංගයක් වෙනස් කළ නොහැකි ලෙස Lock කරයි.",
            "• Pick<T, Keys>: අවශ්‍ය ගුණාංග කිහිපයක් පමණක් තෝරා ගනී.",
            "• Omit<T, Keys>: අනවශ්‍ය ගුණාංග ඉවත් කර ඉතිරිය ලබා ගනී."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Utility Types in Action",
              code: `interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

// 1. Partial: සියල්ල Optional
type ProductUpdate = Partial<Product>;

// 2. Pick: name සහ price පමණක් තෝරා ගනී
type ProductCardProps = Pick<Product, "name" | "price">;

// 3. Omit: id හැර අනෙක් සියල්ල
type NewProductInput = Omit<Product, "id">;`
            }
          ]
        },
        {
          title: "89.3 Record<K, T> සහ Index Signatures",
          content: [
            "පූර්වයෙන් Keys මොනවාදැයි නිශ්චිත නැති ගතික Objects හැසිරවීමට Record හෝ Index Signature යොදා ගැනේ:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Record & Index Signatures",
              code: `// Record<KeyType, ValueType>
type UserRoles = Record<string, "admin" | "editor" | "viewer">;

const appRoles: UserRoles = {
  "kamal": "admin",
  "nimal": "editor"
};`
            }
          ]
        }
      ],
      keyPoints: [
        "Discriminated Unions යනු React & Redux state කළමනාකරණයේ රන් සම්මතයයි.",
        "Utility Types මඟින් නව Interfaces අතින් ලිවීමකින් තොරව පවතින ඒවා පරිවර්තනය කරයි."
      ],
      exercises: [
        { id: 1, question: "Pick<T, K> සහ Omit<T, K> අතර වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 90,
      volumeId: 7,
      chapterNumber: 90,
      title: "ඉන්ටර්ෆේස්, දියුණු පන්ති සහ ප්‍රකාශන ගොනු",
      englishTitle: "Advanced Classes, Access Modifiers & Declaration Files (.d.ts)",
      pageRange: "පිටු 270 - 272",
      description: "Access Modifiers (public, private, protected), implements Runnable, Abstract Classes, Declaration Files (.d.ts) සහ @types පැකේජ.",
      learningObjectives: [
        "public, private, protected සහ readonly ප්‍රවේශ පාලක (Access Modifiers)",
        "Parameter Properties මඟින් කෙටි Constructor ලිවීම",
        "Abstract Classes සහ Interfaces Implements කිරීම",
        ".d.ts ගොනු සහ DefinitelyTyped (@types) හි කාර්යභාරය"
      ],
      sections: [
        {
          title: "90.1 Access Modifiers (public, private, protected) සහ Readonly",
          content: [
            "• public: ඕනෑම තැනක සිට ප්‍රවේශ විය හැක (පෙරනිමි අගයයි).",
            "• private: එම පන්තිය (Class) තුළ පමණක් ප්‍රවේශ විය හැක.",
            "• protected: එම පන්තිය සහ එයින් උරුම වූ දරු පන්ති (Subclasses) තුළ පමණක් ප්‍රවේශ විය හැක.",
            "• readonly: Constructor එකේදී අගය පැවරූ පසු වෙනස් කළ නොහැක."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Access Modifiers & Shorthand Syntax",
              code: `class BankAccount {
  // Shorthand: constructor එකේදීම private/public ලියූ විට property එක ස්වයංක්‍රීයව සෑදේ
  constructor(
    public readonly accountNumber: string,
    public accountHolder: string,
    private balance: number
  ) {}

  public deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  public getBalance(): number {
    return this.balance; // private බැවින් පිටතට පෙන්වන්නේ මෙහෙමයි
  }
}`
            }
          ]
        },
        {
          title: "90.2 Abstract Classes සහ Interface Implementation",
          content: [
            "Abstract Class එකක් යනු සෘජුවම Object (Instance) සෑදිය නොහැකි, අනුප්‍රාප්තික පන්ති සඳහා මූලික සැකිල්ලක් (Blueprint) සපයන පන්තියකි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Abstract Classes & Implements",
              code: `interface Authenticatable {
  login(): boolean;
}

abstract class BaseUser implements Authenticatable {
  constructor(public email: string) {}
  abstract getRole(): string; // Subclass එකෙන් අනිවාර්යයෙන්ම සම්පූර්ණ කළ යුතුයි
  login(): boolean {
    return true;
  }
}

class AdminUser extends BaseUser {
  getRole(): string {
    return "SUPER_ADMIN";
  }
}`
            }
          ]
        },
        {
          title: "90.3 Declaration Files (.d.ts) සහ DefinitelyTyped (@types)",
          content: [
            "පැරණි JavaScript පුස්තකාල වල (උදා: Lodash, jQuery) TypeScript types අඩංගු නොවේ. එවිට DefinitelyTyped ප්‍රජාව විසින් ලියන ලද @types/lodash වැනි පැකේජ මඟින් එම පුස්තකාල වලට සම්පූර්ණ Type-Safety ලබා දේ.",
            ".d.ts ගොනු වල සැබෑ කේත (Executable Code) නොමැති අතර, අඩංගු වන්නේ Types ප්‍රකාශන (Type Declarations) පමණි."
          ]
        }
      ],
      keyPoints: [
        "Constructor Shorthand මඟින් Classes ලිවීම අතිශය කෙටි කරයි.",
        ".d.ts මඟින් JavaScript පුස්තකාල TypeScript සමඟ සුහදව ක්‍රියාත්මක වේ.",
        "සුභ පැතුම්! ඔබ දැන් පූර්ණ TypeScript ප්‍රවීණයෙකි!"
      ],
      exercises: [
        { id: 1, question: "private සහ protected අතර ඇති ප්‍රායෝගික වෙනස කුමක්ද?" },
        { id: 2, question: ".d.ts ගොනුවක ප්‍රධාන කාර්යභාරය කුමක්ද?" }
      ]
    }
  ]
};
