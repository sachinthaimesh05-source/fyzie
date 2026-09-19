import { Volume } from '../../types';

export const volume4: Volume = {
  id: 4,
  volumeNumber: 4,
  title: "උසස් ජාවාස්ක්‍රිප්ට්",
  englishTitle: "Advanced JavaScript & Modern APIs",
  color: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
  iconName: "Cpu",
  badge: "ES6+, Async & OOP",
  description: "ECMAScript (ES6+), Modules (Import/Export), Promises, Async/Await, Fetch API & JSON, Error Handling (try...catch), Local Storage, Classes (OOP), සහ SkyCast Pro Weather Dashboard.",
  chapterCount: 9,
  pageRange: "පිටු 134 - 160",
  chapters: [
    {
      id: 44,
      volumeId: 4,
      chapterNumber: 44,
      title: "නූතන ජාවාස්ක්‍රිප්ට් - ES6+ හඳුන්වාදීම",
      englishTitle: "Modern JavaScript - ES6+ Introduction",
      pageRange: "පිටු 134 - 136",
      description: "ECMAScript ඉතිහාසය, Template Literals (` ` සහ ${ }), Arrow Functions (=>), Destructuring, Spread & Rest operators (...).",
      learningObjectives: [
        "ECMAScript (ES6/2015) මඟින් ජාවාස්ක්‍රිප්ට් භාෂාවට නව පණක් ලැබුණු ආකාරය",
        "Template Literals මඟින් අකුරු සහ විචල්‍යයන් පහසුවෙන් සම්බන්ධ කිරීම",
        "Arrow Functions (ඊතල ශ්‍රිත) කෙටි හා බලවත් ශ්‍රිත ලිවීමේ ක්‍රමය",
        "Destructuring මඟින් Object සහ Array වලින් දත්ත පහසුවෙන් ලබා ගැනීම",
        "Spread (...) සහ Rest (...) ක්‍රියාකාරුවන්"
      ],
      sections: [
        {
          title: "44.1 Template Literals සහ Arrow Functions",
          content: [
            "පැරණි ක්‍රමයේදී + ලකුණු සහ උද්ධෘත ලකුණු වැරදීමට ඉඩ වැඩි විය. නූතන Backticks (`) සහ ${ } මඟින් ඉතා පිරිසිදුව කේත ලිවිය හැක.",
            "Arrow Functions මඟින් function යන වචනය නොමැතිව සංක්ෂිප්තව ශ්‍රිත ලිවිය හැක."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "ES6+ Modern Syntax",
              code: `// Template Literals
const name = "කසුන්";
const age = 20;
console.log(\`මගේ නම \${name} වන අතර මගේ වයස \${age} කි.\`);

// Arrow Function
const double = (n) => n * 2;

// Destructuring
const user = { firstName: "නිමල්", city: "කොළඹ" };
const { firstName, city } = user;

// Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]`
            }
          ]
        }
      ],
      keyPoints: [
        "Spread Operator මඟින් පවතින අරාවක ඇති සියලු දත්ත තවත් අරාවකට පිටපත් කරයි.",
        "Rest Operator මඟින් ශ්‍රිතයකට එවන දත්ත සමූහයක් එකම අරාවකට ලබා ගනී."
      ],
      exercises: [
        { id: 1, question: "Arrow Function එකක් සාමාන්‍ය Function එකකට වඩා වෙනස් වන ප්‍රධාන කරුණු 2ක් ලියන්න." }
      ]
    },
    {
      id: 45,
      volumeId: 4,
      chapterNumber: 45,
      title: "මොඩියුල - කේතය ක්‍රමවත්ව බෙදා වෙන් කිරීම (Modules)",
      englishTitle: "Modules - Organizing Your Code",
      pageRange: "පිටු 136 - 138",
      description: "Separation of Concerns, export (Named vs Default), import, type='module', සහ Live Server හි අවශ්‍යතාවය.",
      learningObjectives: [
        "විශාල කේත ගොනු කුඩා, ස්වාධීන කොටස්වලට බෙදීමේ (Modularization) වැදගත්කම",
        "Named Exports (export const a = ...) සහ Default Exports (export default ...)",
        "HTML ගොනුවක <script type='module' src='app.js'> භාවිතය",
        "CORS Policy හේතුවෙන් මොඩියුල ධාවනයට Live Server අවශ්‍ය වීම"
      ],
      sections: [
        {
          title: "45.1 Export සහ Import",
          content: [
            "මෝටර් රථයක් එකම යකඩ ගොඩක් නොව, එන්ජිම, රෝද, ලයිට් වැනි වෙන වෙනම මොඩියුල එකතු වී සෑදුණාක් මෙන්, මෘදුකාංගයක්ද මොඩියුල වලට බෙදිය යුතුය."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "mathUtils.js (Export)",
              code: `export const PI = 3.14159;
export const add = (a, b) => a + b;`
            },
            {
              language: "javascript",
              title: "app.js (Import)",
              code: `import { PI, add } from './mathUtils.js';
console.log(PI); // 3.14159
console.log(add(10, 5)); // 15`
            }
          ]
        }
      ],
      keyPoints: [
        "Default export ගොනුවකට තිබිය හැක්කේ එකක් පමණි; import කිරීමේදී කැමති නමක් ලබා දිය හැක."
      ],
      exercises: [
        { id: 1, question: "Named Export සහ Default Export අතර වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 46,
      volumeId: 4,
      chapterNumber: 46,
      title: "අසමකාලීන ජාවාස්ක්‍රිප්ට් - පොරොන්දු (Promises)",
      englishTitle: "Asynchronous JavaScript & Promises",
      pageRange: "පිටු 139 - 141",
      description: "Synchronous vs Asynchronous (ආපනශාලාවේ Buzzer උපමාව), Blocking ගැටලුව, Promise States (Pending, Resolved, Rejected), .then(), .catch(), .finally().",
      learningObjectives: [
        "Synchronous (එකක් පසුපස එකක්) සහ Asynchronous (පසුබිමෙන් ක්‍රියාත්මක වන) අතර වෙනස",
        "පොරොන්දුවක් (Promise) යනු අනාගතයේදී සිදුවීමට නියමිත කාර්යයක ප්‍රතිඵලය නිරූපණය කරන වස්තුවක් බව",
        "පොරොන්දුවක පවතින අවස්ථා 3: Pending, Fulfilled / Resolved, Rejected",
        ".then(), .catch() සහ .finally() මඟින් ප්‍රතිඵල පාලනය"
      ],
      sections: [
        {
          title: "46.1 Buzzer උපමාව සහ Promise නිර්මාණය",
          content: [
            "ආපනශාලා උපමාව: ඔබ පීසා ඇණවුම් කළ විට වේටර්වරයා ඔබට 'බසර්' (Buzzer) එකක් ලබා දී වාඩි වෙන්නැයි පවසයි. පීසා ලැබෙන තෙක් ඔබ පෝලිමේ නොසිට මිතුරෙකු සමඟ කතා කරමින් සිටිය හැක. පීසා සූදානම් වූ පසු බසරය නාද වේ (Asynchronous)."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Creating & Consuming a Promise",
              code: `const fetchProduct = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve({ id: 101, title: "Laptop", price: 150000 });
    } else {
      reject("සර්වර් එක සම්බන්ධ කරගත නොහැක!");
    }
  }, 2000);
});

fetchProduct
  .then(data => console.log("ලැබුණු දත්ත: ", data))
  .catch(err => console.error("දෝෂය: ", err))
  .finally(() => console.log("ක්‍රියාවලිය නිම විය."));`
            }
          ]
        }
      ],
      keyPoints: [
        ".catch() අමතක කළහොත් Uncaught Error ඇති වී වෙබ් අඩවිය අඩපණ විය හැක."
      ],
      exercises: [
        { id: 1, question: "Promise එකක පවතින අවස්ථා 3 මොනවාද?" }
      ]
    },
    {
      id: 47,
      volumeId: 4,
      chapterNumber: 47,
      title: "අසින්ක් සහ අවේට් - අසමකාලීන කේතය සරල කිරීම (Async & Await)",
      englishTitle: "Async/Await - Modern Asynchronous JavaScript",
      pageRange: "පිටු 141 - 144",
      description: "async keyword, await keyword, Promise Chaining ගැටලුවට විසඳුම, try...catch සමඟ error handling, සහ කෝපි ඇණවුම් කිරීමේ පද්ධතිය.",
      learningObjectives: [
        "async සහ await යනු Promises මත ගොඩනැගුණු Syntactic Sugar බව තේරුම් ගැනීම",
        "අසමකාලීන කේතය සමකාලීන කේතයක් මෙන් ඉහළ සිට පහළට ඉතා පිරිසිදුව ලිවීම",
        "await භාවිතා කළ හැක්කේ async ශ්‍රිතයක් ඇතුළත පමණක් බව",
        "try...catch මඟින් දෝෂ හැසිරවීම"
      ],
      sections: [
        {
          title: "47.1 Async / Await සහ try...catch",
          content: [
            "2017 වසරේදී ජාවාස්ක්‍රිප්ට් වලට Async/Await හඳුන්වා දෙන ලදී. .then() ක්‍රමයේදී ඇතිවන Promise Chaining සංකීර්ණතාවය සම්පූර්ණයෙන්ම සමනය කර ඉතා පිරිසිදු කේතයක් ලබා දෙයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Async/Await with try/catch",
              code: `async function getOrderDetails() {
  try {
    console.log("ඇණවුම පරීක්ෂා කරමින්...");
    const order = await fetchOrder(); // මෙතැන පොරොන්දුව ඉටු වන තෙක් ඉවසයි
    console.log("සාර්ථකයි:", order);
  } catch (error) {
    console.error("දෝෂය:", error);
  }
}`
            }
          ]
        }
      ],
      keyPoints: [
        "await මඟින් බ්‍රවුසරය හිර කරන්නේ නැත; එය අදාළ async ශ්‍රිතය පමණක් තාවකාලිකව නතර කර අනෙක් වැඩ වලට බ්‍රවුසරයට ඉඩ දෙයි."
      ],
      exercises: [
        { id: 1, question: "async ශ්‍රිතයකින් ආපසු ලැබෙන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 48,
      volumeId: 4,
      chapterNumber: 48,
      title: "ෆෙච් ඒ.පී.අයි. සහ ජේසන් (Fetch API & JSON)",
      englishTitle: "Networking - Fetch API & JSON",
      pageRange: "පිටු 144 - 146",
      description: "API (Application Programming Interface), JSON (JavaScript Object Notation), fetch(), response.json(), සහ Error states.",
      learningObjectives: [
        "API යනු මෘදුකාංග දෙකක් අතර තොරතුරු හුවමාරු කර ගන්නා පාලමක් බව තේරුම් ගැනීම",
        "JSON දත්ත හැඩතලය සහ එහි නීති (Double quotes on keys)",
        "fetch() සහ response.json() මඟින් සර්වර් එකකින් දත්ත ලබා ගැනීම",
        "response.ok පරීක්ෂා කිරීම සහ ජාල දෝෂ හඳුනා ගැනීම"
      ],
      sections: [
        {
          title: "48.1 Fetch API මඟින් සජීවී දත්ත ලබා ගැනීම",
          content: [
            "ආපනශාලා උපමාව: ඔබ (Client) ➔ වේටර් (API) ➔ කුස්සිය (Server/Database).",
            "JSONPlaceholder මඟින් සජීවී පරිශීලක දත්ත ලබා ගන්නා කේතය:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Fetch API Example",
              code: `async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error("දත්ත ලබා ගැනීමට නොහැකි විය!");
    }
    const data = await response.json();
    console.log("නම: ", data.name);
    console.log("විද්‍යුත් තැපෑල: ", data.email);
    console.log("නගරය: ", data.address.city);
  } catch (error) {
    console.error("දෝෂය: ", error.message);
  }
}

fetchUserData();`
            }
          ]
        }
      ],
      keyPoints: [
        "JSON වලදී Key එක සැමවිටම ද්විත්ව උද්ධෘත ලකුණු (\" \") ඇතුළත ලිවිය යුතුය.",
        "Loading State එකක් පෙන්වීම පරිශීලක අත්දැකීම (UX) සඳහා අත්‍යවශ්‍ය වේ."
      ],
      exercises: [
        { id: 1, question: "fetch() මඟින් ලැබෙන response එක response.json() කිරීමට හේතුව කුමක්ද?" }
      ]
    },
    {
      id: 49,
      volumeId: 4,
      chapterNumber: 49,
      title: "දෝෂ හැසිරවීම - වැරදි පාලනය කරමු (Error Handling)",
      englishTitle: "Error Handling - try...catch & Custom Errors",
      pageRange: "පිටු 146 - 148",
      description: "Syntax, Reference, Type errors, try...catch...finally, throw new Error(), Error object (name, message), සහ Silent catch වැළැක්වීම.",
      learningObjectives: [
        "මෘදුකාංගයක් Crash නොවී වැරදි හසුකර ගැනීමේ වැදගත්කම (ඩෑෂ්බෝඩ් ලාම්පු උපමාව)",
        "ප්‍රධාන දෝෂ වර්ග 3 (SyntaxError, ReferenceError, TypeError)",
        "finally කොටස මඟින් කුමන තත්ත්වයකදීත් ක්‍රියාත්මක විය යුතු පිරිසිදු කිරීම් සිදු කිරීම",
        "throw new Error('පණිවිඩය') මඟින් තමන්ගේම දෝෂ නිර්මාණය"
      ],
      sections: [
        {
          title: "49.1 Error Handling සහ Custom Errors",
          content: [
            "වාහනයක එන්ජිමේ දෝෂයක් ආ විට පාර මැද නතර වී යනවාට වඩා ඩෑෂ්බෝඩ් එකේ ලාම්පුවක් දල්වා ආරක්ෂිතව පසෙකට ගැනීමට ඉඩ දීම වැනි දෙයකි Error Handling."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Custom Validation Error",
              code: `function checkAge(age) {
  if (age < 0) {
    throw new Error("වයස සෘණ අංකයක් විය නොහැක!");
  }
  return "ඔබගේ වයස: " + age;
}

try {
  console.log(checkAge(-5));
} catch (err) {
  console.error("දෝෂයක් හසු විය:", err.message);
} finally {
  console.log("පරීක්ෂාව අවසන්.");
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Silent Catch (දෝෂය හසුකර කිසිවක් නොකර සිටීම) ඉතා නරක පුරුද්දකි; අවම වශයෙන් console.error කරන්න."
      ],
      exercises: [
        { id: 1, question: "finally කොටස භාවිතා කරන්නේ කුමන අවස්ථාවලදීද?" }
      ]
    },
    {
      id: 50,
      volumeId: 4,
      chapterNumber: 50,
      title: "ලෝකල් ස්ටෝරේජ් - බ්‍රවුසරය තුළ දත්ත ස්ථිරව ගබඩා කිරීම (Local Storage)",
      englishTitle: "Local Storage & Session Storage",
      pageRange: "පිටු 149 - 151",
      description: "Web Storage API, Local Storage vs Session Storage, setItem, getItem, removeItem, clear, JSON.stringify සහ JSON.parse.",
      learningObjectives: [
        "වෙබ් පිටුව Refresh කළද දත්ත මැකී නොයන ලෙස බ්‍රවුසරයේ තබා ගැනීම",
        "Local Storage (ස්ථිර) සහ Session Storage (ටැබ් එක වසන තෙක්) අතර වෙනස",
        "ප්‍රධාන ක්‍රමවේද 4: setItem(k, v), getItem(k), removeItem(k), clear()",
        "Arrays සහ Objects ගබඩා කිරීමට JSON.stringify() සහ JSON.parse() භාවිතය"
      ],
      sections: [
        {
          title: "50.1 Local Storage සහ JSON Serialization",
          content: [
            "වැදගත්ම නීතිය: ලෝකල් ස්ටෝරේජ් තුළ ගබඩා කළ හැක්කේ අකුරු වැල් (Strings) පමණි!",
            "අරාවක් හෝ වස්තුවක් ගබඩා කිරීමට පෙර JSON.stringify() ද, ලබා ගත් පසු JSON.parse() ද අනිවාර්යයෙන්ම භාවිතා කළ යුතුය."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Storing Complex Objects in LocalStorage",
              code: `const student = { name: "අමරා", grade: 11 };

// 1. String බවට හරවා ගබඩා කිරීම
localStorage.setItem("studentData", JSON.stringify(student));

// 2. ලබාගෙන නැවත Object එකක් බවට හැරවීම
const storedData = localStorage.getItem("studentData");
if (storedData) {
  const finalData = JSON.parse(storedData);
  console.log(finalData.name); // "අමරා"
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Local Storage හි මුරපද හෝ Credit Card විස්තර කිසිවිටක ගබඩා නොකරන්න (XSS අවදානම)."
      ],
      exercises: [
        { id: 1, question: "Local Storage සහ Session Storage අතර ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 51,
      volumeId: 4,
      chapterNumber: 51,
      title: "පන්ති සහ මතක කළමනාකරණය (Classes, OOP, & Memory)",
      englishTitle: "Classes, OOP & Memory Management",
      pageRange: "පිටු 152 - 154",
      description: "Classes (Blueprint උපමාව), constructor, methods, extends & super (Inheritance), Getters & Setters, Memory Heap & Garbage Collection.",
      learningObjectives: [
        "පන්තියක් (Class) යනු නිවාස සැලසුමක් (Blueprint) වැනි වස්තූන් සාදන ආකෘතියක් බව",
        "constructor ක්‍රියාත්මක වන ආකාරය",
        "extends සහ super මඟින් පන්තියක ලක්ෂණ තවත් පන්තියකට උරුම කර දීම",
        "Getters & Setters මඟින් දත්ත ආරක්ෂිතව හැසිරවීම",
        "Garbage Collector සහ Memory Leak වළක්වා ගැනීම"
      ],
      sections: [
        {
          title: "51.1 OOP Inheritance සහ Getters/Setters",
          content: [
            "නිවාස සැලසුමක උපමාව: Class = නිවාස සැලසුම (Plan). Object = එම සැලසුම බලා හැදූ සැබෑ නිවස (Instance).",
            "උරුමය (Inheritance) උදාහරණය:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Class Inheritance in JavaScript",
              code: `class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    console.log(\`ආයුබෝවන්, මම \${this.name}!\`);
  }
}

class Admin extends User {
  constructor(name, email, role) {
    super(name, email); // පියාගේ constructor අමතයි
    this.role = role;
  }
  deleteUser() {
    console.log("පරිශීලකයා මකා දමන ලදී.");
  }
}

const admin = new Admin("අමරා", "amara@mail.com", "SuperAdmin");
admin.sayHello(); // "ආයුබෝවන්, මම අමරා!"`
            }
          ]
        }
      ],
      keyPoints: [
        "React වලදී Immutability (පැරණි දත්ත සෘජුව වෙනස් නොකර අලුත් පිටපතක් සෑදීම) ඉතා වැදගත් වේ."
      ],
      exercises: [
        { id: 1, question: "super() මඟින් සිදුවන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 52,
      volumeId: 4,
      chapterNumber: 52,
      title: "මහා ව්‍යාපෘතිය - 'SkyCast Pro' කාලගුණ විශ්ලේෂණ පද්ධතිය",
      englishTitle: "Capstone Project: SkyCast Pro Weather Dashboard",
      pageRange: "පිටු 154 - 160",
      description: "Full Architecture: WeatherService Class, HistoryManager (LocalStorage), UI Engine, Glassmorphism UI, Real-time search, සහ Error popup.",
      learningObjectives: [
        "පරිමාව 4 තුළ උගත් සියලුම සංකල්ප (Classes, Async/Await, Fetch, LocalStorage, Error Handling) එකතු කර සම්පූර්ණ Dashboard එකක් සෑදීම",
        "Separation of Concerns: දත්ත ලබා ගැනීමට සහ UI හැසිරවීමට වෙන වෙනම Classes සැකසීම",
        "පරිශීලකයාගේ සෙවුම් ඉතිහාසය LocalStorage හි තබා ගැනීම",
        "Glassmorphism සහ Responsive CSS මඟින් උසස් නිමාවක් ලබා දීම"
      ],
      sections: [
        {
          title: "52.1 SkyCast Pro ගෘහ නිර්මාණ ශිල්පය",
          content: [
            "මෙය සාමාන්‍ය කාලගුණ ඇප් එකක් නොවේ. පන්ති මූලික සැලසුම්කරණය (Class-based Architecture) සහිත වෘත්තීය මට්ටමේ Dashboard එකකි."
          ]
        }
      ],
      keyPoints: [
        "සැබෑ මෘදුකාංගයකදී API Key එක කේතය තුළ ලියන්නේ නැත; .env ගොනු තුළ තැන්පත් කරයි."
      ],
      exercises: [
        { id: 1, question: "SkyCast Pro හි දත්ත ලබා ගැනීම සහ UI පාලනයට වෙන වෙනම පන්ති යෙදීමේ වාසිය කුමක්ද?" }
      ]
    }
  ]
};
