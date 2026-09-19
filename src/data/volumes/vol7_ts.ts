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
        "TypeScript Compiler (TSC) මඟින් .ts ගොනු සාමාන්‍ය .js බවට හැරවීම"
      ],
      sections: [
        {
          title: "83.1 TypeScript හි ආරක්ෂිත ස්ථරය",
          content: [
            "ජාවාස්ක්‍රිප්ට් හිදී function add(a, b) { return a + b; } ලියූ විට, යමෙකු අංක වෙනුවට add('5', 10) යැවුවහොත් '510' කියා වැරදි පිළිතුරක් ලැබේ. බැංකු පද්ධතියකදී මෙය අතිශය විනාශකාරී විය හැක.",
            "ටයිප්ස්ක්‍රිප්ට් මඟින් කේතය ලියන විටම රතු ඉරක් වැටී එම දෝෂය පෙන්වයි!"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "TypeScript Function with Type Safety",
              code: `function add(a: number, b: number): number {
  return a + b;
}

add(5, 10); // ✅ 15
// add("5", 10); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'`
            }
          ]
        }
      ],
      keyPoints: [
        "ලෝකයේ මෘදුකාංග සමාගම් 80% ක්ම අද භාවිතා කරන්නේ TypeScript ය.",
        "කේතය කියවන ඕනෑම අයෙකුට විචල්‍යය තුළ තිබිය යුතු දත්තය කුමක්දැයි පැහැදිලි වන 'Self-documenting code' එකක් ලැබේ."
      ],
      exercises: [
        { id: 1, question: "Static Typing සහ Dynamic Typing අතර වෙනස කුමක්ද?" }
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
        "Tuples (ස්ථාවර දිගක් සහ වර්ග ඇති අරාවන්) සහ Enums (නියත අගයන් සමූහය)",
        "any භාවිතා කිරීමෙන් වැළකී සිටීමේ වැදගත්කම"
      ],
      sections: [
        {
          title: "84.1 Tuples සහ Enums",
          content: [
            "Shape Sorter ළමා සෙල්ලම් බඩු උපමාව: තරු හැඩති සිදුරෙන් ඇතුළු කළ හැක්කේ තරු හැඩැති කොටස පමණි. රවුම් සිදුරෙන් රවුම් කොටස පමණි. Type Annotation යනු සිදුරේ හැඩය තීරණය කිරීමයි.",
            "Tuples සහ Enums උදාහරණ:"
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Tuples & Enums Example",
              code: `// Tuple: ස්ථාවර දිගක් සහ අනුපිළිවෙලක් ඇති අරාවකි
let person: [string, number] = ["කමල්", 25];

// Enum: නියත අගයන් සමූහයක්
enum Role {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  GUEST = "GUEST"
}

let currentUser: Role = Role.ADMIN;`
            }
          ]
        }
      ],
      keyPoints: [
        "any යොදා ගැනීම යනු නැවතත් සාමාන්‍ය ජාවාස්ක්‍රිප්ට් වලට යාම වැනිය. වෘත්තීය මට්ටමේදී any භාවිතා නොකරන්න."
      ],
      exercises: [
        { id: 1, question: "Tuple එකක් සහ සාමාන්‍ය Array එකක් අතර වෙනස කුමක්ද?" }
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
        "Type Guarding (Narrowing): දත්ත වර්ගය පරීක්ෂා කර ආරක්ෂිතව ක්‍රියාත්මක කිරීම",
        "Literal Types මඟින් අගයන් සීමා කිරීම (උදා: status: 'pending' | 'success')",
        "Type Aliases (type Keyword) මඟින් සංකීර්ණ වස්තූන් සඳහා නම් ලබා දීම"
      ],
      sections: [
        {
          title: "85.1 Union Types සහ Type Guarding",
          content: [
            "බහුකාර්ය පෑන උපමාව: රතු, නිල්, කළු යන පාට තුනම ඇති පෑනක් මෙන්, id: number | string විචල්‍යයකට අංකයක් හෝ අකුරු වැලක් ලෙස ක්‍රියා කළ හැක."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Type Alias & Union Guarding",
              code: `type ThemeMode = "light" | "dark" | "system";

type UserProfile = {
  id: string | number;
  name: string;
  email: string;
  phone?: string; // Optional (අනිවාර්ය නැත)
};

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // TS knows it's a string
  } else {
    console.log(id.toFixed(2));     // TS knows it's a number
  }
}`
            }
          ]
        }
      ],
      keyPoints: [
        "DRY (Don't Repeat Yourself) පිළිපැදීමට සංකීර්ණ Object ව්‍යුහයන් සඳහා Type Aliases භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "Type Aliases හි ? (Optional property) යෙදීමෙන් අදහස් වන්නේ කුමක්ද?" }
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
        "ශ්‍රිතයක පරාමිතීන් සහ Return වර්ගය නිවැරදිව නිර්වචනය කිරීම",
        "Optional parameters (?) අනිවාර්ය පරාමිතීන්ට පසුව පමණක් තැබීමේ රීතිය",
        "void (ප්‍රතිඵලයක් නැති) සහ never (කිසිදා අවසන් නොවන/දෝෂ විසිකරන) දත්ත වර්ග",
        "Function Type Expressions මඟින් ශ්‍රිත සඳහාම Type Aliases සෑදීම"
      ],
      sections: [
        {
          title: "86.1 Function Types සහ Default Parameters",
          content: [
            "ශ්‍රිතයක 'ගේට්ටුව' අසල ආරක්ෂකයෙකු තැබුවාක් මෙන්, ඇතුළු වන දත්ත සහ පිටවන දත්තවල වර්ගය TypeScript විසින් පරීක්ෂා කරයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Typed Arrow Function",
              code: `type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (x, y) => x * y;
const divide: MathOperation = (x, y) => x / y;

function greetUser(name: string, greeting: string = "ආයුබෝවන්"): string {
  return \`\${greeting}, \${name}!\`;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Inference මඟින් return type එක ස්වයංක්‍රීයව හඳුනා ගත හැකි වුවද, විශාල කේතවලදී return type එක ලිවීම හොඳ පුරුද්දකි."
      ],
      exercises: [
        { id: 1, question: "void සහ never අතර ඇති වෙනස කුමක්ද?" }
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
        "Interface (ඉන්ටර්ෆේස්) යනු වස්තුවක් සතු විය යුතු ගිවිසුමක් (Contract) බව වටහා ගැනීම",
        "extends මඟින් ඉන්ටර්ෆේස් එකිනෙකට උරුම කර දීම",
        "readonly මඟින් දත්ත වෙනස් කළ නොහැකි ලෙස ආරක්ෂා කිරීම",
        "Interface සහ Type Alias අතර වෙනස සහ වස්තූන් සඳහා Interface භාවිතය"
      ],
      sections: [
        {
          title: "87.1 Interface Extension සහ Comparison",
          content: [
            "රියදුරු බලපත්‍රය උපමාව: බලපත්‍රය යනු Interface එකකි. ඕනෑම පුද්ගලයෙකුට එය ලබා ගැනීමට නම් එහි ඇති නීති රීති (ඇස් පෙනීම, මාර්ග නීති) සපුරාලිය යුතුය."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Extending Interfaces",
              code: `interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  techStack: string[];
  githubUrl: string;
}

const fyzie: Developer = {
  name: "T. Sachintha Imesh",
  age: 20,
  techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
  githubUrl: "https://github.com"
};`
            }
          ]
        }
      ],
      keyPoints: [
        "වස්තූන් (Objects) සහ පන්ති (Classes) සඳහා Interface ද, Unions සඳහා Type Alias ද නිර්දේශිතය."
      ],
      exercises: [
        { id: 1, question: "Interface එකක readonly යෙදීමෙන් ලැබෙන ආරක්ෂාව කුමක්ද?" }
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
        "Generic යනු එක් දත්ත වර්ගයකට පමණක් සීමා නොවී විවිධ වර්ග සමඟ එක හා සමානව වැඩ කළ හැකි සංරචක සෑදීම බව",
        "any වෙනුවට Generics භාවිතා කිරීමෙන් Type Safety රැක ගැනීම",
        "<T> (Type Parameter) භාවිතා කිරීමේ රටාව",
        "Constraints (extends) මඟින් Generics පාලනය කිරීම"
      ],
      sections: [
        {
          title: "88.1 වෙළඳ යන්ත්‍රය උපමාව සහ Generic Functions",
          content: [
            "වෙළඳ යන්ත්‍රය (Vending Machine) උපමාව: යන්ත්‍රයේ ව්‍යුහය එකමය. නමුත් ඔබ මුදල් දමා බීම තෝරා ගත්තොත් ලැබෙන්නේ බීම වර්ගයයි. බිස්කට් තෝරා ගත්තොත් ලැබෙන්නේ බිස්කට් වර්ගයයි. Generics යනු එම යන්ත්‍රය වැනිය."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Generic Function with Constraints",
              code: `// <T> මඟින් එවන දත්ත වර්ගයම ආපසු ලැබෙන බව සහතික කරයි
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirstItem([10, 20, 30]); // type: number
const firstStr = getFirstItem(["Apple", "Mango"]); // type: string

// Generic Constraints: length ගුණාංගය අනිවාර්ය කිරීම
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(\`දිග: \${item.length}\`);
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Generics මඟින් කේතය නැවත ලිවීමකින් තොරව 100% Type Safe ලෙස පවත්වා ගත හැක."
      ],
      exercises: [
        { id: 1, question: "any භාවිතා කරනවාට වඩා Generics භාවිතා කිරීමේ වාසිය කුමක්ද?" }
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
        "Discriminated Unions මඟින් දෝෂ රහිතව සංකීර්ණ API Responses හැසිරවීම",
        "Utility Types: Partial<T>, Pick<T, K>, Omit<T, K>, Readonly<T>",
        "Index Signatures: [key: string]: string ගතික දත්ත ව්‍යුහයන් පාලනය",
        "Type Assertions (as) භාවිතා කළ යුතු නිවැරදි අවස්ථා"
      ],
      sections: [
        {
          title: "89.1 Discriminated Unions සහ Utility Types",
          content: [
            "සෑම වර්ගයකටම පොදු 'ලේබලයක්' (Discriminant) ලබා දීමෙන් සාර්ථක ප්‍රතිචාරයක (Success) දත්ත අසාර්ථක ප්‍රතිචාරයක (Error) පණිවිඩ සමඟ පටලවා නොගන්නා බවට TypeScript සහතික වේ."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "Discriminated Unions & Utility Types",
              code: `type ApiResponse = 
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log("Data count:", res.data.length);
  } else {
    console.error("Error:", res.message);
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Utility Types:
type UserUpdate = Partial<User>; // සියල්ල optional වේ
type UserContact = Pick<User, "name" | "email">; // name සහ email පමණි
type UserWithoutId = Omit<User, "id">; // id හැර අනෙක් සියල්ල`
            }
          ]
        }
      ],
      keyPoints: [
        "Discriminated Unions යනු Enterprise React & Backend කේතවල බහුලවම භාවිතා වන රටාවකි."
      ],
      exercises: [
        { id: 1, question: "Partial<T> සහ Omit<T, K> යන Utility Types වල කාර්යය කුමක්ද?" }
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
        "public (සැමට විවෘත), private (පන්තිය තුළ පමණක්), protected (උරුම පන්ති තුළ) ප්‍රවේශ පාලනය",
        "implements මඟින් පන්තියක් ඉන්ටර්ෆේස් ගිවිසුමකට යටත් කිරීම",
        ".d.ts ගොනු සහ DefinitelyTyped (@types/lodash) මඟින් පරණ JS පුස්තකාල වලට Types ලබා ගැනීම",
        "පරිමාව 7 අවසාන නිගමනය: ඔබ දැන් සැබෑ TypeScript Architect කෙනෙකි!"
      ],
      sections: [
        {
          title: "90.1 Access Modifiers සහ Declaration Files",
          content: [
            "private මඟින් බැංකු ගිණුමක ශේෂය (balance) වැනි රහස් දත්ත පිටතින් සෘජුව වෙනස් කිරීම වළක්වා ආරක්ෂාව තහවුරු කරයි."
          ],
          codeSnippets: [
            {
              language: "typescript",
              title: "TypeScript Class with Access Modifiers",
              code: `class BankAccount {
  public holderName: string;
  private balance: number; // පිටතට රහසක්

  constructor(name: string, initialBalance: number) {
    this.holderName = name;
    this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance;
  }
}`
            }
          ]
        }
      ],
      keyPoints: [
        "TypeScript හි සියලු පාඩම් අවසන් වූ ඔබ දැන් ලෝකයේ ඕනෑම React හෝ Next.js ව්‍යාපෘතියක් Type-Safe ලෙස සැලසුම් කිරීමට සූදානම්ය."
      ],
      exercises: [
        { id: 1, question: "private සහ protected අතර ඇති වෙනස කුමක්ද?" }
      ]
    }
  ]
};
