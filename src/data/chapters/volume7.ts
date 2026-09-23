import { Chapter } from '../../types/book';

export const volume7Chapters: Chapter[] = [
  {
    id: "ch-82",
    chapterNumber: 82,
    title: "ටයිප්ස්ක්‍රිප්ට් හැඳින්වීම - ජාවාස්ක්‍රිප්ට් වලට ලැබුණු ආරක්ෂාව",
    englishTitle: "Introduction to TypeScript & Type Safety",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 253,
    learningObjectives: [
      "ටයිප්ස්ක්‍රිප්ට් (TypeScript) යනු කුමක්ද සහ එය ජාවාස්ක්‍රිප්ට් වලින් වෙනස් වන්නේ කෙසේද?",
      "වෘත්තීය මට්ටමේදී TypeScript භාවිතා කිරීමට හේතු (Type Safety).",
      "Static Typing සහ Dynamic Typing අතර ඇති වෙනස.",
      "TypeScript ස්ථාපනය සහ tsc compiler භාවිතය.",
      "ප්‍රථම .ts ගොනුව ක්‍රියාත්මක කිරීම."
    ],
    sections: [
      {
        title: "82.1 TypeScript යනු කුමක්ද සහ ඇයි අපට අවශ්‍ය වන්නේ?",
        content: [
          "TypeScript යනු Microsoft සමාගම විසින් නිර්මාණය කරන ලද, ජාවාස්ක්‍රිප්ට් වලට ඉහළින් (Superset) ගොඩනගන ලද ආරක්ෂිත ස්ථරයකි.",
          "TypeScript = JavaScript + Static Typing.",
          "ගැටලුව (JS): function add(a, b) { return a + b; } -> add('5', 10) දුන් විට '510' ලැබේ. දෝෂයක් නොපෙන්වයි! බැංකු පද්ධතියකදී මෙය ඉතා භයානක විය හැක.",
          "විසඳුම (TS): function add(a: number, b: number): number { return a + b; } -> add('5', 10) ලියන මොහොතේම රතු ඉරක් වැටී වැරැද්ද පෙන්වයි!",
          "Static Typing (TS): කේතය ලියන විටම (Compile-time) වැරදි හසු වේ.",
          "Dynamic Typing (JS): කේතය ක්‍රියාත්මක වන විට (Runtime) පමණක් වැරදි හසු වේ."
        ],
        codeSnippet: {
          language: "typescript",
          code: `// index.ts
let message: string = "ආයුබෝවන් TypeScript!";
let count: number = 42;

console.log(message);`
        }
      }
    ],
    keyPoints: [
      "TypeScript යනු ජාවාස්ක්‍රිප්ට් වලට Type Safety එකතු කළ භාෂාවකි.",
      "TSC මගින් .ts කේතය .js බවට හරවයි.",
      "ලෝකයේ මෘදුකාංග සමාගම් 80% ක්ම අද TypeScript භාවිතා කරයි."
    ],
    exercises: [
      "TypeScript ස්ථාපනය කර tsc -v මගින් අනුවාදය පරීක්ෂා කරන්න.",
      "Static Typing සහ Dynamic Typing අතර ඇති ප්‍රධාන වෙනස ලියන්න."
    ]
  },
  {
    id: "ch-83",
    chapterNumber: 83,
    title: "මූලික දත්ත වර්ග සහ ටයිප් ඇනොටේෂන්",
    englishTitle: "Basic Data Types and Type Annotations",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 254,
    learningObjectives: [
      "ටයිප් ඇනොටේෂන් (Type Annotation) සහ Type Inference.",
      "මූලික දත්ත වර්ග: string, number, boolean.",
      "Array Types: number[], string[], Array<T>.",
      "Tuples: නිශ්චිත දිගක් සහ පිළිවෙළක් ඇති අරාවන්.",
      "Enums: නියත අගයන් සමූහයක් (ADMIN, EDITOR, GUEST).",
      "any, void, සහ never විශේෂ වර්ග."
    ],
    sections: [
      {
        title: "83.1 Type Annotations, Tuples සහ Enums",
        content: [
          "Type Annotation: විචල්‍යයේ නමට පසුව : Colon තබා අදාළ දත්ත වර්ගය ලිවීම (let age: number = 16;).",
          "Type Inference: අගය දුන් විට ටයිප්ස්ක්‍රිප්ට් විසින් ස්වයංක්‍රීයව වර්ගය හඳුනා ගැනීම.",
          "Tuples: නිශ්චිත දිගක් සහ දත්ත වර්ග පිළිවෙළක් ඇති අරාවන්: let person: [string, number] = ['කමල්', 25];",
          "Enums: enum Role { ADMIN, EDITOR, GUEST } -> let userRole: Role = Role.ADMIN;",
          "any: ටයිප් පරීක්ෂාව නතර කරයි (වෘත්තීය මට්ටමේදී any භාවිතා නොකරන්න!).",
          "void: ප්‍රතිඵලයක් ආපසු නොදෙන ශ්‍රිත සඳහා.",
          "never: කිසිදා අවසන් නොවන (Error throw කරන) ශ්‍රිත සඳහා."
        ],
        codeSnippet: {
          language: "typescript",
          code: `enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  DELIVERED = "DELIVERED"
}

interface Order {
  id: number;
  status: OrderStatus;
  items: string[];
}`
        }
      }
    ],
    keyPoints: [
      "Type Annotation මගින් දත්ත වර්ග ස්ථාවර කරයි.",
      "any භාවිතය සම්පූර්ණයෙන්ම මගහරින්න.",
      "Tuples සහ Enums ටයිප්ස්ක්‍රිප්ට් හි සුවිශේෂී ප්‍රයෝජනවත් අංග වේ."
    ],
    exercises: [
      "පරිශීලකයාගේ හැඳුනුම්පත් අංකය (string) සහ දුරකථන අංකය (number) අඩංගු Tuple එකක් සාදන්න."
    ]
  },
  {
    id: "ch-84",
    chapterNumber: 84,
    title: "යූනියන් ටයිප්ස් සහ ටයිප් ඇලියස්",
    englishTitle: "Union Types and Type Aliases",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 257,
    learningObjectives: [
      "යූනියන් ටයිප්ස් (Union Types: string | number).",
      "Type Guarding (typeof මගින් වර්ගය තහවුරු කිරීම).",
      "Literal Types: 'light' | 'dark'.",
      "Type Aliases (type User = ...).",
      "Optional Properties (?): id, name, phone?."
    ],
    sections: [
      {
        title: "84.1 Union Types සහ Type Aliases",
        content: [
          "Union Types (|): බහුකාර්ය පෑනක් වැනි දෙයකි. එකම විචල්‍යයකට අංකයක් හෝ අකුරු වැලක් ලබා ගැනීමට: let id: number | string;",
          "Type Guarding: if (typeof id === 'string') { id.toUpperCase(); }",
          "Literal Types: let theme: 'light' | 'dark'; - නියමිත අගයන් පමණක් ලබා දීමට.",
          "Type Alias: සංකීර්ණ ටයිප් එකකට අර්ථවත් නමක් ලබා දී නැවත භාවිතය:",
          "type User = { id: number; name: string; email: string; phone?: string; };"
        ],
        codeSnippet: {
          language: "typescript",
          code: `type Theme = 'light' | 'dark' | 'system';
type ApiResponseState = 'loading' | 'success' | 'error';

function setTheme(t: Theme) {
  console.log("තෝරාගත් තේමාව:", t);
}`
        }
      }
    ],
    keyPoints: [
      "Union Types මගින් නම්‍යශීලී දත්ත ලබා දේ.",
      "Type Aliases මගින් සංකීර්ණ දත්ත ව්‍යුහ පිරිසිදුව තබයි.",
      "? ලකුණ මගින් දත්තයක් අත්‍යවශ්‍ය නොවන (Optional) බව දක්වයි."
    ],
    exercises: [
      "Vehicle නමින් type alias එකක් සාදා එහි brand (string), model (string), year (number) සහ price (number) ලියන්න."
    ]
  },
  {
    id: "ch-85",
    chapterNumber: 85,
    title: "ශ්‍රිත සහ ටයිප්ස්ක්‍රිප්ට් - ආරක්ෂිතව තර්කනය ගොඩනැගීම",
    englishTitle: "Functions in TypeScript",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 260,
    learningObjectives: [
      "ශ්‍රිතවල පරාමිතීන් සහ Return Types ටයිප් කිරීම.",
      "Optional Parameters (?) සහ Default Parameters (=).",
      "Arrow Functions ටයිප් කරන ආකාරය.",
      "Function Type Expressions (type MathFunc = (x: number, y: number) => number)."
    ],
    sections: [
      {
        title: "85.1 Function Typing සහ Arrow Functions",
        content: [
          "ශ්‍රිතයක ආරම්භක පරාමිතීන් සහ අවසාන පිළිතුරේ දත්ත වර්ගය අනිවාර්යයෙන්ම නියම කළ යුතුය:",
          "function calculateTax(price: number): number { return price * 0.15; }",
          "Optional Parameter: function greet(name: string, message?: string): string { ... } (Optional parameter එක සැමවිටම අනිවාර්ය පරාමිතීන්ට පසුව තිබිය යුතුය).",
          "Arrow Function: const multiply = (a: number, b: number): number => a * b;"
        ],
        codeSnippet: {
          language: "typescript",
          code: `type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(10, 20)); // 30`
        }
      }
    ],
    keyPoints: [
      "ශ්‍රිත පරාමිතීන් සහ return අගයන් අනිවාර්යයෙන්ම ටයිප් කළ යුතුය.",
      "? මගින් පරාමිතියක් optional කළ හැක.",
      "= මගින් default අගයක් ලබා දිය හැක."
    ],
    exercises: [
      "අංක දෙකක් ලබා දුන් විට විශාලතම අංකය (Maximum) ලබා දෙන ශ්‍රිතයක් ටයිප්ස්ක්‍රිප්ට් වලින් ලියන්න."
    ]
  },
  {
    id: "ch-86",
    chapterNumber: 86,
    title: "ඉන්ටර්ෆේස් - දත්ත ව්‍යුහයන් සැලසුම් කිරීම",
    englishTitle: "Interfaces in TypeScript",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 262,
    learningObjectives: [
      "Interface (ඉන්ටර්ෆේස්) යනු කුමක්ද සහ 'ගිවිසුමක්' (Contract) ලෙස භාවිතය.",
      "Interface vs Type Alias වෙනස.",
      "Extending Interfaces (උරුම කර ගැනීම).",
      "readonly සහ optional (?) ගුණාංග.",
      "Declaration Merging."
    ],
    sections: [
      {
        title: "86.1 Interfaces, Extends සහ Type Alias වෙනස",
        content: [
          "Interface යනු වස්තුවක් සතු විය යුතු හැඩය විස්තර කරන 'ගිවිසුමකි' (රියදුරු බලපත්‍රය වැනිය).",
          "Extends: interface Admin extends User { adminLevel: number; }",
          "Interface vs Type Alias:",
          "• Interface: Objects සහ Classes සඳහා පමණි, extends පහසුයි, declaration merging සහය දක්වයි.",
          "• Type Alias: Unions, Primitives, Tuples ආදී ඕනෑම දත්ත වර්ගයක් සඳහා යොදාගත හැක."
        ],
        codeSnippet: {
          language: "typescript",
          code: `interface Vehicle {
  readonly vin: string;
  brand: string;
  model: string;
  year?: number;
}

interface Car extends Vehicle {
  doors: number;
}

const myCar: Car = {
  vin: "XYZ123",
  brand: "Toyota",
  model: "Corolla",
  doors: 4
};`
        }
      }
    ],
    keyPoints: [
      "වස්තූන්ගේ හැඩය (Shape) සඳහා සැමවිටම Interface භාවිතා කරන්න.",
      "extends මගින් එක ඉන්ටර්ෆේස් එකක් තවත් එකකට උරුම කර දිය හැක.",
      "readonly මගින් දත්ත වෙනස් කළ නොහැකි ලෙස ආරක්ෂා කරයි."
    ],
    exercises: [
      "Computer නමින් Interface එකක් සාදා RAM, Processor, Storage අඩංගු කරන්න. RAM අගය readonly කරන්න."
    ]
  },
  {
    id: "ch-87",
    chapterNumber: 87,
    title: "ජෙනරික්ස් - නම්‍යශීලී සහ නැවත භාවිතා කළ හැකි කේතකරණය",
    englishTitle: "Generics in TypeScript",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 265,
    learningObjectives: [
      "ජෙනරික්ස් (Generics <T>) යනු කුමක්ද?",
      "any වෙනුවට Generics භාවිතා කිරීමේ Type Safety වාසි.",
      "Generic Functions සහ Generic Interfaces.",
      "Generic Classes (StorageBox<T>).",
      "Generic Constraints (T extends HasLength)."
    ],
    sections: [
      {
        title: "87.1 වෙළඳ යන්ත්‍ර උපමාව සහ Generic Functions",
        content: [
          "වෙළඳ යන්ත්‍රයක් (Vending Machine) වැනි දෙයකි. යන්ත්‍රයේ ක්‍රියාකාරීත්වය එකම වුවත් ඇතුළත් කරන කාසිය හෝ ගන්නා අයිතමය (Drink හෝ Snack) අනුව වර්ගය වෙනස් වේ.",
          "Generic Function: function identity<T>(arg: T): T { return arg; }",
          "Generic Interface: interface ApiResponse<T> { data: T; status: number; message: string; }",
          "Constraints: function logLength<T extends { length: number }>(item: T) { console.log(item.length); }"
        ],
        codeSnippet: {
          language: "typescript",
          code: `interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

const userRes: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Kasun", age: 20 },
  status: 200,
  success: true
};`
        }
      }
    ],
    keyPoints: [
      "Generics මගින් Type Safety අහිමි නොවී නැවත භාවිත කළ හැකි කේත සාදයි.",
      "<T> යනු Type Parameter එකකි.",
      "extends මගින් Generics සීමා (Constraints) කළ හැක."
    ],
    exercises: [
      "KeyPair<K, V> නමින් ජෙනරික් ඉන්ටර්ෆේස් එකක් සාදා key এবং value ලබා දෙන්න."
    ]
  },
  {
    id: "ch-88",
    chapterNumber: 88,
    title: "උසස් ටයිප් ඉංජිනේරු විද්‍යාව සහ කර්මාන්ත සම්මත රටා (විශේෂ ප්‍රෝ-මට්ටම)",
    englishTitle: "Advanced Type Engineering & Industrial Patterns",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 267,
    learningObjectives: [
      "Discriminated Unions: දෝෂ රහිතව සංකීර්ණ දත්ත කළමනාකරණය.",
      "Utility Types: Partial, Pick, Omit, Readonly.",
      "Index Signatures: ගතික දත්ත වස්තූන් සඳහා ටයිප්ස්.",
      "Type Assertions (as) නිවැරදිව භාවිතය.",
      "Mapped Types රහස්."
    ],
    sections: [
      {
        title: "88.1 Discriminated Unions සහ Utility Types",
        content: [
          "Discriminated Unions: පොදු 'ලේබලයක්' (Discriminant) ලබා දී වර්ගය වෙන් කර ගැනීම (status: 'success' | 'error').",
          "Utility Types:",
          "• Partial<User>: සියලුම ගුණාංග optional කරයි.",
          "• Pick<User, 'name' | 'email'>: අවශ්‍ය කොටස් පමණක් තෝරා ගනී.",
          "• Omit<User, 'password'>: අනවශ්‍ය කොටස ඉවත් කර ඉතිරිය ගනී.",
          "• Readonly<User>: සියල්ල readonly කරයි.",
          "Index Signatures: interface Dictionary { [key: string]: string; }"
        ],
        codeSnippet: {
          language: "typescript",
          code: `type NetworkState = 
  | { status: 'loading' }
  | { status: 'success'; data: string[] }
  | { status: 'error'; message: string };

function render(state: NetworkState) {
  switch (state.status) {
    case 'loading': return "පූරණය වෙමින් පවතී...";
    case 'success': return \`දත්ත ගණන: \${state.data.length}\`;
    case 'error': return \`දෝෂය: \${state.message}\`;
  }
}`
        }
      }
    ],
    keyPoints: [
      "Discriminated Unions සංකීර්ණ දත්ත ආරක්ෂිතව පාලනය කරයි.",
      "Utility Types මගින් කේතය කෙටි සහ පිරිසිදු කරයි."
    ],
    exercises: [
      "Partial සහ Omit භාවිතා කර User එකකින් imageUpdate ටයිප් එකක් සාදන්න."
    ]
  },
  {
    id: "ch-89",
    chapterNumber: 89,
    title: "ඉන්ටර්ෆේස්, දියුණු පන්ති සහ ප්‍රකාශන ගොනු",
    englishTitle: "Advanced Classes, Access Modifiers and .d.ts Files",
    volumeId: 7,
    volumeTitle: "ටයිප්ස්ක්‍රිප්ට් ප්‍රවීණතාවය",
    pageNumber: 270,
    learningObjectives: [
      "Access Modifiers: public, private, protected.",
      "Abstract Classes (අමූර්ත පන්ති).",
      "Implementing Interfaces (class Car implements Runnable).",
      "Declaration Files (.d.ts) සහ @types/lodash භාවිතය."
    ],
    sections: [
      {
        title: "89.1 Access Modifiers සහ Declaration Files",
        content: [
          "Access Modifiers:",
          "• public: ඕනෑම තැනක සිට පිවිසිය හැක.",
          "• private: එම පන්තිය ඇතුළතදී පමණි.",
          "• protected: එම පන්තිය සහ එයින් උරුම වූ දරු පන්ති ඇතුළත පමණි.",
          "Declaration Files (.d.ts): සාමාන්‍ය JS පුස්තකාල වලට TypeScript සහය ලබා දෙන ගොනු වේ (npm install -D @types/lodash)."
        ]
      }
    ],
    keyPoints: [
      "Access Modifiers මගින් දත්ත ආරක්ෂා කරයි.",
      "implements මගින් පන්තියක් සඳහා නීති පනවයි.",
      "@types මගින් බාහිර JS පුස්තකාල TS සමඟ සම්බන්ධ කරයි."
    ],
    exercises: [
      "BankAccount පන්තියක් සාදා balance එක private කර Getters/Setters සකසන්න."
    ]
  }
];
