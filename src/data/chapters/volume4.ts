import { Chapter } from '../../types/book';

export const volume4Chapters: Chapter[] = [
  {
    id: "ch-43",
    chapterNumber: 43,
    title: "නූතන ජාවාස්ක්‍රිප්ට් - ES6+ හඳුන්වාදීම",
    englishTitle: "Introduction to Modern JavaScript (ES6+)",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 134,
    learningObjectives: [
      "ECMAScript (ES) යනු කුමක්ද සහ එහි ඉතිහාසය කෙටියෙන් වටහා ගැනීම.",
      "ES6 (ES2015) සංස්කරණය ජාවාස්ක්‍රිප්ට් ලෝකයේ විප්ලවයක් ඇති කළේ ඇයිදැයි තේරුම් ගැනීම.",
      "Template Literals (ආකෘතිමය අකුරු වැල්: `Hello ${name}`) භාවිතය.",
      "Arrow Functions (ඊතල ශ්‍රිත) සහ සාමාන්‍ය ශ්‍රිත අතර වෙනස.",
      "Destructuring (ව්‍යුහගත දත්ත වෙන් කිරීම) භාවිතයෙන් කේතය කෙටි කිරීම.",
      "Spread සහ Rest ක්‍රියාකාරුවන් (...)."
    ],
    sections: [
      {
        title: "43.1 Template Literals, Arrow Functions සහ Destructuring",
        content: [
          "ECMAScript (ES) යනු ජාවාස්ක්‍රිප්ට් භාෂාවේ ප්‍රමිතියයි (ව්‍යාකරණ පොත වැනිය). 2015 දී පැමිණි ES6 මගින් භාෂාවට නව පණක් ලැබිණි.",
          "Template Literals (` `): `මගේ නම ${name} වන අතර වයස ${age} කි.` - string concatenation පහසු කරයි.",
          "Arrow Functions: const add = (a, b) => a + b; - කෙටි සහ පැහැදිලිය.",
          "Destructuring: වස්තුවකින් හෝ අරාවකින් දත්ත සෘජුවම ලබා ගැනීම: const { name, age } = user;",
          "Spread Operator (...): අරාවක හෝ වස්තුවක දත්ත පිටපත් කර අලුත් එකක් සෑදීමට: const newArr = [...oldArr, 4];",
          "Rest Operator (...): ශ්‍රිතයකට ලැබෙන සියලු අගයන් තනි අරාවකට එකතු කර ගැනීමට: function sum(...nums) { ... }"
        ],
        codeSnippet: {
          language: "javascript",
          code: `const user = { name: "Kasun", city: "Colombo", role: "Developer" };
const { name, role } = user; // Destructuring

const greet = (u) => \`ආයුබෝවන් \${u.name}, ඔබ \${u.role} කෙනෙකි.\`;
console.log(greet(user));`
        }
      }
    ],
    keyPoints: [
      "Template Literals මගින් අකුරු සහ විචල්‍යයන් පහසුවෙන් සම්බන්ධ කරයි.",
      "Arrow Functions මගින් ශ්‍රිත ලිවීම කෙටි සහ නවීන කරයි.",
      "Destructuring මගින් Object සහ Array වලින් දත්ත පහසුවෙන් ලබා ගනී.",
      "Spread Operator මගින් දත්ත පිටපත් කිරීම පහසු කරයි."
    ],
    exercises: [
      "අංක දෙකක් ගුණ කර පිළිතුර ලබා දෙන සරල Arrow Function එකක් ලියන්න.",
      "Destructuring භාවිතයෙන් { brand: 'Samsung', price: 85000 } වෙතින් අගයන් වෙන් කරගන්න."
    ]
  },
  {
    id: "ch-44",
    chapterNumber: 44,
    title: "මොඩියුල - කේතය ක්‍රමවත්ව බෙදා වෙන් කිරීම",
    englishTitle: "Modules - Organizing Your Code (Export & Import)",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 136,
    learningObjectives: [
      "ජාවාස්ක්‍රිප්ට් මොඩියුල (Modules) යනු කුමක්දැයි තේරුම් ගැනීම.",
      "Separation of Concerns: විශාල කේත ගොනු කුඩා කොටස්වලට බෙදීම.",
      "export සහ import මූලපද භාවිතා කරන ආකාරය.",
      "Named Exports සහ Default Exports අතර වෙනස.",
      "HTML ගොනුවක type=\"module\" ගුණාංගය භාවිතා කිරීම."
    ],
    sections: [
      {
        title: "44.1 Export සහ Import සංකල්පය",
        content: [
          "මෝටර් රථයක එන්ජිම, රෝද, ලයිට් වෙන වෙනම මොඩියුල ලෙස සාදා ඇතිවාක් මෙන්, විශාල ජාවාස්ක්‍රිප්ට් කේත ගොනුද මොඩියුල වලට බෙදා වෙන් කරනු ලැබේ.",
          "Named Exports: එකම ගොනුවකින් දේවල් කිහිපයක් පිටතට යැවීමට (export const add = ...; import { add } from './math.js';).",
          "Default Export: ප්‍රධාන වශයෙන් එක් දෙයක් පමණක් යැවීමට (export default User; import MyUser from './User.js';).",
          "HTML හි මොඩියුල ක්‍රියාත්මක කිරීමට <script type=\"module\" src=\"app.js\"></script> යෙදිය යුතුය."
        ],
        codeSnippet: {
          language: "javascript",
          code: `// mathUtils.js
export const PI = 3.14159;
export const add = (a, b) => a + b;

// main.js
import { PI, add } from './mathUtils.js';
console.log(add(10, 5)); // 15`
        }
      }
    ],
    keyPoints: [
      "Modules මගින් කේතය විවිධ ගොනු වලට බෙදා පිරිසිදුව තබයි.",
      "Named exports කිහිපයක් තිබිය හැක; Default export ඇත්තේ එකක් පමණි.",
      "HTML හි type=\"module\" භාවිතා කළ යුතුය."
    ],
    exercises: [
      "Named Export සහ Default Export අතර ඇති ප්‍රධාන වෙනස්කම් 3ක් ලියන්න."
    ]
  },
  {
    id: "ch-45",
    chapterNumber: 45,
    title: "අසමකාලීන ජාවාස්ක්‍රිප්ට් - පොරොන්දු (Promises)",
    englishTitle: "Asynchronous JavaScript & Promises",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 139,
    learningObjectives: [
      "සමකාලීන (Synchronous) සහ අසමකාලීන (Asynchronous) අතර වෙනස.",
      "Single-threaded ස්වභාවය සහ අවහිර කිරීම් (Blocking) වැළැක්වීම.",
      "පොරොන්දුවක් (Promise) යනු කුමක්ද සහ එහි වැදගත්කම.",
      "පොරොන්දුවක පවතින අවස්ථා තුන: Pending, Resolved (Fulfilled), Rejected.",
      ".then(), .catch() සහ .finally() භාවිතය."
    ],
    sections: [
      {
        title: "45.1 ආපනශාලා උපමාව සහ Promise අවස්ථා 3",
        content: [
          "ආපනශාලා උපමාව: ඔබ ආහාරයක් ඇණවුම් කළ විට වේටර්වරයා ඔබට බසරයක් (Buzzer) ලබා දී වාඩි වන්නැයි පවසයි. ආහාරය සූදානම් වන තෙක් පෝලිමේ නොසිට වෙනත් වැඩක් කළ හැක. ආහාරය සූදානම් වූ පසු බසරය නාද වේ (Asynchronous).",
          "Promise යනු අනාගතයේදී සිදුවීමට නියමිත යම් ක්‍රියාවක ප්‍රතිඵලය නිරූපණය කරන වස්තුවකි ('මම දැන් වැඩක් පටන් ගන්නවා, ඒක ඉවර වුණාම ප්‍රතිඵලය දෙන්නම්').",
          "අවස්ථා 3:",
          "1. Pending: වැඩේ කෙරෙමින් පවතින අතරමැදි කාලය.",
          "2. Fulfilled / Resolved: වැඩේ සාර්ථකව අවසන් වී දත්ත ලැබුණු අවස්ථාව (.then()).",
          "3. Rejected: යම් දෝෂයක් නිසා අසාර්ථක වූ අවස්ථාව (.catch()).",
          "4. .finally(): සාර්ථක වුවත් අසාර්ථක වුවත් අවසානයේදී සිදුවිය යුතු දේ."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const fetchUserData = new Promise((resolve, reject) => {
  let isConnected = true;
  setTimeout(() => {
    if (isConnected) {
      resolve({ id: 101, name: "Kasun" });
    } else {
      reject("ජාල දෝෂයකි!");
    }
  }, 1000);
});

fetchUserData
  .then(data => console.log("දත්ත:", data))
  .catch(err => console.error("දෝෂය:", err))
  .finally(() => console.log("ක්‍රියාවලිය නිමයි."));`
        }
      }
    ],
    keyPoints: [
      "Promise යනු අසමකාලීන වැඩක ප්‍රතිඵලය පෙන්වන වස්තුවකි.",
      "Pending, Resolved, Rejected යනු එහි ප්‍රධාන අවස්ථා 3යි.",
      ".catch() භාවිතා නොකළහොත් Uncaught Error ඇති වී වෙබ් අඩවිය අඩපණ විය හැක."
    ],
    exercises: [
      "සැබෑ ලෝකයේ අසමකාලීන (Asynchronous) වැඩක් සිදුවන අවස්ථාවක් උදාහරණයකින් පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-46",
    chapterNumber: 46,
    title: "අසින්ක් සහ අවේට් - අසමකාලීන කේතය සරල කිරීම",
    englishTitle: "Async and Await - Modern Asynchronous JS",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 141,
    learningObjectives: [
      "async සහ await යනු කුමක්දැයි තේරුම් ගැනීම.",
      "Promise Chaining වෙනුවට async/await වඩාත් දියුණු වන්නේ ඇයි?",
      "async මූලපදය සහ await මූලපදය භාවිතය.",
      "try...catch මගින් දෝෂ හැසිරවීම (Error Handling).",
      "ප්‍රායෝගික කෝපි ඇණවුම් කිරීමේ පද්ධතිය."
    ],
    sections: [
      {
        title: "46.1 Async/Await සහ try...catch භාවිතය",
        content: [
          "2017 දී හඳුන්වා දුන් Async/Await යනු Promises සඳහා ඇති 'Syntactic Sugar' එකකි. අසමකාලීන කේතයක් වුවද සාමාන්‍ය කේතයක් මෙන් ඉහළ සිට පහළට ඉතා පිරිසිදුව ලිවීමට අවස්ථාව ලබා දෙයි.",
          "async: ශ්‍රිතයක් ඉදිරියෙන් යෙදූ විට එම ශ්‍රිතය සැමවිටම Promise එකක් ආපසු ලබා දෙයි.",
          "await: Promise එකක් ඉදිරියෙන් යෙදූ විට, එය සම්පූර්ණ වන තෙක් එම පේළියේදී පමණක් ඉවසයි. (බ්‍රවුසරය හිර නොකරයි!). await භාවිතා කළ හැක්කේ async ශ්‍රිතයක් තුළ පමණි.",
          "try...catch: await කේතයක දෝෂ හැසිරවීමට try { ... } catch (error) { ... } භාවිතා කරයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `async function makeCoffee() {
  try {
    console.log("කෝපි හදමින් පවතී...");
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("රසවත් කෝපි කෝප්පය සූදානම්! ☕"), 2000);
    });
    console.log(result);
  } catch (error) {
    console.error("කෝපි යන්ත්‍රය ක්‍රියා විරහිතයි:", error);
  }
}

makeCoffee();`
        }
      }
    ],
    keyPoints: [
      "async ශ්‍රිතයක් සැමවිටම Promise එකක් ආපසු එවයි.",
      "await මගින් Promise එක අවසන් වන තෙක් ශ්‍රිතයේ ක්‍රියාකාරීත්වය රඳවා තබයි.",
      "අසමකාලීන වැඩවලදී වැරදි හැසිරවීමට සැමවිටම try...catch භාවිතා කරන්න."
    ],
    exercises: [
      ".then() භාවිතා කර ලියන ලද කේතයක් async/await ක්‍රමයට පරිවර්තනය කරන්න."
    ]
  },
  {
    id: "ch-47",
    chapterNumber: 47,
    title: "ෆෙච් ඒ.පී.අයි. සහ ජේසන් (Fetch API & JSON)",
    englishTitle: "Fetch API & JSON - Getting Data from the Internet",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 144,
    learningObjectives: [
      "API (Application Programming Interface) යනු කුමක්ද?",
      "JSON (JavaScript Object Notation) දත්ත හැඩතලය.",
      "Fetch API මගින් සර්වර් එකකට ඉල්ලීමක් (Request) යවන ආකාරය.",
      "response.json() මගින් දත්ත පරිවර්තනය.",
      "ජාල දෝෂ (Network Errors) සහ HTTP status හැසිරවීම."
    ],
    sections: [
      {
        title: "47.1 API යනු කුමක්ද සහ Fetch API පියවර",
        content: [
          "API යනු මෘදුකාංග දෙකක් අතර තොරතුරු හුවමාරු කර ගැනීමට භාවිතා කරන 'පාලමක්' හෝ වේටර්වරයෙකු වැනිය.",
          "JSON: අන්තර්ජාලය හරහා දත්ත හුවමාරුවට භාවිතා කරන විශ්ව සම්මත භාෂාවයි. Key සැමවිටම ද්විත්ව උද්ධෘත \"key\" තුළ තිබිය යුතුය.",
          "දත්ත ලබා ගැනීමේ පියවර:",
          "1. const response = await fetch(url);",
          "2. if (!response.ok) throw new Error('දෝෂයකි');",
          "3. const data = await response.json();"
        ],
        codeSnippet: {
          language: "javascript",
          code: `async function getUserData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!res.ok) throw new Error("දත්ත ලබාගත නොහැක!");
    const user = await res.json();
    console.log("නම:", user.name);
    console.log("විද්‍යුත් තැපෑල:", user.email);
  } catch (error) {
    console.error("වැරැද්දක් සිදු විය:", error.message);
  }
}
getUserData();`
        }
      }
    ],
    keyPoints: [
      "API යනු දත්ත ලබා ගැනීමට ඇති පියගැටපෙළයි.",
      "fetch() මගින් දත්ත ඉල්ලීමක් යවයි.",
      "response.json() මගින් string දත්ත ජාවාස්ක්‍රිප්ට් Object එකක් බවට හරවයි."
    ],
    exercises: [
      "JSON සහ JavaScript Object අතර ඇති ප්‍රධාන වෙනස කුමක්ද?",
      "https://api.adviceslip.com/advice වෙතින් උපදෙසක් ලබාගෙන පෙන්වන ශ්‍රිතයක් ලියන්න."
    ]
  },
  {
    id: "ch-48",
    chapterNumber: 48,
    title: "දෝෂ හැසිරවීම - වැරදි පාලනය කරමු",
    englishTitle: "Error Handling in JavaScript (try...catch...finally)",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 146,
    learningObjectives: [
      "දෝෂ (Errors) යනු මොනවාද සහ සිදුවන ආකාරය.",
      "ප්‍රධාන දෝෂ වර්ග: SyntaxError, ReferenceError, TypeError.",
      "try...catch...finally ව්‍යුහය.",
      "throw මගින් තමන්ගේම දෝෂ (Custom Errors) නිර්මාණය කිරීම.",
      "Error Object (name, message)."
    ],
    sections: [
      {
        title: "48.1 Try...Catch...Finally සහ Throw Error",
        content: [
          "ක්‍රමලේඛනයේදී වැරදි සිදුවීම සාමාන්‍ය දෙයකි. Error Handling මගින් මෘදුකාංගය Crash නොවී ආරක්ෂා කරගනී.",
          "try { ... }: වැරදීමට ඉඩ ඇති කේතය ලියයි.",
          "catch (err) { ... }: වැරැද්දක් වුවහොත් පාලනය මෙතැනට මාරු වේ.",
          "finally { ... }: වැරැද්දක් සිදු වුවත් නොවුවත් අනිවාර්යයෙන්ම අවසානයට සිදු වේ.",
          "throw new Error('පණිවිඩය'): තමන්ගේම දෝෂයක් නිකුත් කිරීමට."
        ],
        codeSnippet: {
          language: "javascript",
          code: `function divide(a, b) {
  if (b === 0) {
    throw new Error("බිංදුවෙන් බෙදිය නොහැක!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error("දෝෂය:", err.message);
} finally {
  console.log("ගණනය කිරීම අවසන්.");
}`
        }
      }
    ],
    keyPoints: [
      "Error Handling මගින් මෘදුකාංගය Crash වීම වළක්වයි.",
      "throw මගින් අපටම දෝෂ නිර්මාණය කළ හැක.",
      "finally සෑම අවස්ථාවකම ක්‍රියාත්මක වේ."
    ],
    exercises: [
      "පරිශීලකයාගේ මුරපදය අකුරු 8කට වඩා අඩු නම් throw Error එකක් නිකුත් කරන ශ්‍රිතයක් ලියන්න."
    ]
  },
  {
    id: "ch-49",
    chapterNumber: 49,
    title: "ලෝකල් ස්ටෝරේජ් - බ්‍රවුසරය තුළ දත්ත ස්ථිරව ගබඩා කිරීම",
    englishTitle: "Local Storage & Client-Side Persistence",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 149,
    learningObjectives: [
      "වෙබ් බ්‍රවුසරයක දත්ත ගබඩා කිරීමේ අවශ්‍යතාවය.",
      "Local Storage සහ Session Storage අතර වෙනස.",
      "මූලික ක්‍රමවේද 4: setItem, getItem, removeItem, clear.",
      "Objects/Arrays ගබඩා කිරීමට JSON.stringify සහ JSON.parse භාවිතය.",
      "පිටුව Refresh කළද දත්ත නොමැකී තබා ගැනීම."
    ],
    sections: [
      {
        title: "49.1 Local Storage ක්‍රමවේද 4 සහ JSON පරිවර්තනය",
        content: [
          "පිටුව Refresh කළ විට JS විචල්‍යයන් මැකී යයි. Local Storage යනු බ්‍රවුසරය තුළ 5MB-10MB පමණ දත්ත ස්ථිරව Key-Value යුගල ලෙස ගබඩා කරන පද්ධතියකි.",
          "1. localStorage.setItem('key', 'value')",
          "2. localStorage.getItem('key')",
          "3. localStorage.removeItem('key')",
          "4. localStorage.clear()",
          "වැදගත්ම නීතිය: Strings පමණි! Objects හෝ Arrays ගබඩා කිරීමට පෙර JSON.stringify() කර, ලබාගත් පසු JSON.parse() කළ යුතුය."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const userSettings = { theme: "dark", fontSize: "large" };

// ගබඩා කිරීම
localStorage.setItem("settings", JSON.stringify(userSettings));

// නැවත ලබා ගැනීම
const saved = JSON.parse(localStorage.getItem("settings"));
console.log(saved.theme); // "dark"`
        }
      }
    ],
    keyPoints: [
      "Local Storage මගින් බ්‍රවුසරය තුළ දත්ත ස්ථිරව තබා ගනී.",
      "Objects සහ Arrays සඳහා JSON.stringify / JSON.parse අනිවාර්ය වේ.",
      "මුරපද (Passwords) හෝ සංවේදී දත්ත Local Storage තුළ ගබඩා නොකරන්න."
    ],
    exercises: [
      "Local Storage සහ Session Storage අතර ඇති ප්‍රධාන වෙනස කුමක්ද?",
      "පරිශීලකයා වෙබ් අඩවියට පිවිසෙන සෑම වතාවකම Visit Count එක වැඩි වන කේතයක් ලියන්න."
    ]
  },
  {
    id: "ch-50",
    chapterNumber: 50,
    title: "පන්ති සහ මතක කළමනාකරණය - වෘත්තීය මෘදුකාංග ව්‍යුහය",
    englishTitle: "Classes, OOP & Memory Management",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 152,
    learningObjectives: [
      "Classes (පන්ති): සැලසුම් සටහනක් (Blueprint) ලෙස වටහා ගැනීම.",
      "constructor: වස්තුව සෑදෙන විටම ක්‍රියාත්මක වන රහස් ශ්‍රිතය.",
      "Inheritance (උරුමය): extends සහ super() භාවිතය.",
      "Getters සහ Setters මගින් දත්ත ආරක්ෂා කිරීම (Encapsulation).",
      "Memory Management: Garbage Collection සහ Memory Leaks වැළැක්වීම."
    ],
    sections: [
      {
        title: "50.1 OOP පන්ති, Constructor සහ Inheritance",
        content: [
          "Class යනු වස්තූන් (Objects) නිර්මාණය කිරීමට භාවිතා කරන 'සැලසුම් සටහනක්' (Blueprint) වැනිය. නිවසක් තැනීමට පෙර අඳින සැලසුම Class එක වන අතර එය බලා සාදන සැබෑ නිවස Instance / Object එකයි.",
          "constructor(name, email): වස්තුව සෑදෙන මොහොතේම ක්‍රියාත්මක වේ.",
          "extends සහ super(): එක් පන්තියක ඇති දේවල් තවත් පන්තියකට උරුම කර දීමට (උදා: class Admin extends User).",
          "Getters / Setters: දත්ත ඇතුළත් කිරීමට පෙර පරීක්ෂා කර වලංගු කිරීමට (get price(), set price(val)).",
          "Garbage Collection: භාවිත නොවන විචල්‍යයන් ස්වයංක්‍රීයව මතකයෙන් ඉවත් කර ඉඩ නිදහස් කරයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return \`ආයුබෝවන්, මම \${this.name}!\`;
  }
}

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }
}

const admin1 = new Admin("අමරා", "amara@mail.com", "SuperAdmin");
console.log(admin1.sayHello());`
        }
      }
    ],
    keyPoints: [
      "Classes යනු වස්තූන් සෑදීමට භාවිතා කරන සැලසුම් (Blueprints) වේ.",
      "extends මගින් දෙමාපිය පන්තියෙන් උරුමය ලබා දේ.",
      "Immutability: React වැනි තාක්ෂණයන්හිදී පවතින දත්ත සෘජුව වෙනස් නොකර අලුත් පිටපතක් සාදන්න."
    ],
    exercises: [
      "Shape නමින් පන්තියක් සාදා, ඉන්පසු Circle නමින් දරු පන්තියක් සාදා වර්ගඵලය සෙවීමේ ශ්‍රිතයක් ලියන්න."
    ]
  },
  {
    id: "ch-51",
    chapterNumber: 51,
    title: "මහා ව්‍යාපෘතිය - 'SkyCast Pro' කාලගුණ විශ්ලේෂණ පද්ධතිය",
    englishTitle: "Capstone Project - SkyCast Pro Weather Dashboard",
    volumeId: 4,
    volumeTitle: "උසස් ජාවාස්ක්‍රිප්ට්",
    pageNumber: 154,
    learningObjectives: [
      "සැබෑ ලෝකයේ API දත්ත හැසිරවීම (OpenWeatherMap / Mock API).",
      "Async/Await මගින් අසමකාලීන දත්ත ගලායාම පාලනය.",
      "Class-based Architecture: WeatherService, HistoryManager, සහ SkyCastApp පන්ති.",
      "LocalStorage මගින් සෙවුම් ඉතිහාසය ස්ථිරව ගබඩා කිරීම.",
      "Glassmorphism UI සහ Responsive පිරිසැලසුම්."
    ],
    sections: [
      {
        title: "51.1 SkyCast Pro නිර්මාණය සහ ව්‍යුහය",
        content: [
          "මෘදුකාංගයේ ප්‍රධාන අංග:",
          "• WeatherService Class: API එක සමඟ ගනුදෙනු කර දත්ත ලබා ගනී.",
          "• HistoryManager Class: LocalStorage එකෙහි නගර 5ක ඉතිහාසයක් රඳවා ගනී.",
          "• App Controller: පරිශීලක අතුරුමුහුණත සහ දත්ත එකිනෙක සම්බන්ධ කරයි.",
          "• Glassmorphism CSS: නවීන backdrop-filter blur සහිත කාඩ්පත් පෙනුමක් ලබා දෙයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `class WeatherService {
  async fetchWeather(city) {
    const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&units=metric&appid=API_KEY\`);
    if (!res.ok) throw new Error("නගරය සොයාගත නොහැකි විය!");
    const data = await res.json();
    return {
      city: data.name,
      temp: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      condition: data.weather[0].description
    };
  }
}`
        }
      }
    ],
    keyPoints: [
      "වෘත්තීය මෘදුකාංගයක් සැමවිටම කොටස් වලට බෙදා (Modular) නිර්මාණය කළ යුතුය.",
      "UX සඳහා දෝෂ පණිවිඩ සහ Loading තත්ත්වයන් ඉතා වැදගත් වේ."
    ],
    exercises: [
      "Celsius සහ Fahrenheit අතර උෂ්ණත්වය මාරු කිරීමට Toggle බොත්තමක් එක් කරන්න."
    ]
  }
];
