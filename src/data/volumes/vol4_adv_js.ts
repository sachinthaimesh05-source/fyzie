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
        "Arrow Functions (ඊතල ශ්‍රිත) කෙටි හා බලවත් ශ්‍රිත ලිවීමේ ක්‍රමය සහ Lexical this",
        "Destructuring මඟින් Object සහ Array වලින් දත්ත පහසුවෙන් ලබා ගැනීම",
        "Spread (...) සහ Rest (...) ක්‍රියාකාරුවන්ගේ ප්‍රායෝගික භාවිතය"
      ],
      sections: [
        {
          title: "44.1 ECMAScript පරිණාමය සහ ES6 විප්ලවය",
          content: [
            "ජාවාස්ක්‍රිප්ට් භාෂාවේ ප්‍රමිතිය පාලනය කරන්නේ ECMA International සංවිධානයයි. 2015 දී නිකුත් වූ ES6 (ECMAScript 2015) යනු ජාවාස්ක්‍රිප්ට් ඉතිහාසයේ සිදු වූ දැවැන්තම පරිවර්තනයයි.",
            "ඉන්පසු සෑම වසරකම නව පහසුකම් එක් කෙරෙන අතර (ES2016, ES2020 ආදී වශයෙන්), මේ සියල්ල පොදුවේ ES6+ ලෙස හැඳින්වේ."
          ]
        },
        {
          title: "44.2 Template Literals (` ` සහ ${ })",
          content: [
            "පැරණි ක්‍රමයේදී Strings එකතු කිරීමට + ලකුණු සහ උද්ධෘත ලකුණු රාශියක් අවශ්‍ය වූ අතර, පේළි කිහිපයකට ලිවීම (Multi-line) ඉතා අපහසු විය.",
            "Template Literals මඟින් Backticks (`) ඇතුළත ${variable} ලෙස විචල්‍යයන් සහ ප්‍රකාශන කෙලින්ම ඇතුළත් කළ හැක."
          ]
        },
        {
          title: "44.3 Arrow Functions (=>) සහ Lexical this",
          content: [
            "Arrow Functions මඟින් function යන වචනය නොමැතිව සංක්ෂිප්තව ශ්‍රිත ලිවිය හැක. තනි පේළියේ ශ්‍රිත සඳහා return යෙදීමද අවශ්‍ය නොවේ (Implicit Return).",
            "ප්‍රධානම වෙනස: සාමාන්‍ය function එකකට තමන්ගේම this අගයක් ඇති නමුත්, Arrow Function එකකට තමන්ගේම this අගයක් නොමැති අතර එය තම පිටත වටපිටාවේ this අගය (Lexical this) ලබා ගනී."
          ]
        },
        {
          title: "44.4 Destructuring Assignment (Objects & Arrays)",
          content: [
            "Object හෝ Array එකකින් දත්ත තනි තනි විචල්‍යයන් වලට ලබා ගැනීමේ කෙටි හා පිරිසිදු ක්‍රමයයි:",
            "• const { name, age } = person;",
            "• const [first, second] = colors;"
          ]
        },
        {
          title: "44.5 Spread Operator (...) සහ Rest Parameters (...)",
          content: [
            "• Spread Operator: අරාවක් හෝ වස්තුවක් දිගහැර (Unpack) එහි ඇති සියලු අගයන් පිටපත් කරයි.",
            "• Rest Parameters: ශ්‍රිතයකට එවන ඕනෑම තර්ක සංඛ්‍යාවක් එකම අරාවකට (Array) එකතු කර ගනී."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "ES6+ Modern Syntax Masterclass",
              code: `// 1. Template Literals & Multi-line Strings
const userName = "සචින්ත";
const role = "Frontend Engineer";
const greeting = \`ආයුබෝවන් \${userName},
ඔබගේ තනතුර: \${role.toUpperCase()}
අද දිනය: \${new Date().toLocaleDateString()}\`;
console.log(greeting);

// 2. Arrow Functions & Implicit Return
const add = (a, b) => a + b;
const square = x => x * x;
console.log("එකතුව: " + add(15, 25)); // 40

// 3. Object & Array Destructuring
const developer = {
  id: 101,
  fullName: "කසුන් පෙරේරා",
  skills: ["React", "TypeScript", "Tailwind"],
  location: { city: "කොළඹ", country: "ශ්‍රී ලංකාව" }
};

const { fullName, skills, location: { city } } = developer;
const [primarySkill, secondarySkill] = skills;
console.log(\`නම: \${fullName}, ප්‍රධාන නිපුණතාව: \${primarySkill}, නගරය: \${city}\`);

// 4. Spread (...) vs Rest (...)
// Spread: Safe Immutability Copying
const originalScores = [80, 85, 90];
const updatedScores = [...originalScores, 95, 100];

// Rest: Unlimited Function Arguments
function calculateTotal(...prices) {
  return prices.reduce((acc, curr) => acc + curr, 0);
}
console.log("මුළු මුදල: " + calculateTotal(150, 250, 400, 100)); // 900`
            }
          ]
        }
      ],
      keyPoints: [
        "Spread Operator මඟින් පවතින අරාවක ඇති සියලු දත්ත තවත් අරාවකට නව පිටපතක් ලෙස ලබා දේ (Immutability).",
        "Arrow Functions වල තමන්ගේම this අගයක් නැත (Lexical Scoping).",
        "Destructuring මඟින් කේතයේ පේළි ගණන අඩුවන අතර කියවීමේ හැකියාව (Readability) ඉහළ යයි."
      ],
      exercises: [
        { id: 1, question: "Arrow Function එකක් සහ සාමාන්‍ය Function එකක් අතර this හැසිරවීමේ වෙනස කුමක්ද?" },
        { id: 2, question: "Spread Operator (...) සහ Rest Parameters (...) අතර ප්‍රධාන වෙනස කුමක්ද?" }
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
        "Named Exports (export const a = ...) සහ Named Imports ({ a })",
        "Default Exports (export default ...) සහ Import Aliasing (as)",
        "HTML ගොනුවක <script type='module' src='app.js'> භාවිතය",
        "CORS Policy හේතුවෙන් මොඩියුල ධාවනයට Live Server හෝ Local Dev Server අවශ්‍ය වීම"
      ],
      sections: [
        {
          title: "45.1 මොඩියුල යනු මොනවාද? (Separation of Concerns)",
          content: [
            "මෝටර් රථයක් එකම යකඩ ගොඩක් නොව, එන්ජිම, රෝද, සුක්කානම, තිරිංග වැනි වෙන වෙනම මොඩියුල එකතු වී සෑදුණාක් මෙන්, මෘදුකාංගයක්ද මොඩියුල වලට බෙදිය යුතුය.",
            "මොඩියුල භාවිතයෙන් එක් එක් කේත කොටසට තමන්ගේම Scope එකක් හිමි වන අතර Global Scope එක අපවිත්‍ර වීම (Global Namespace Pollution) සම්පූර්ණයෙන්ම වැළකේ."
          ],
          asciiDiagram: `[mathUtils.js] ──► export ──► [app.js] (import { add })
[authService.js] ─► export ──► [app.js] (import auth from ...)`
        },
        {
          title: "45.2 Named Exports vs Default Exports",
          content: [
            "• Named Export: එකම ගොනුවකින් විචල්‍යයන්, ශ්‍රිත හෝ Classes කිහිපයක් අපනයනය කළ හැක. ආනයනය (Import) කිරීමේදී එම නිශ්චිත නමම { } වරහන් තුළ ලිවිය යුතුය.",
            "• Default Export: ගොනුවකට තිබිය හැක්කේ එකක් පමණි. ආනයනය කිරීමේදී { } වරහන් අවශ්‍ය නොවන අතර කැමති නමක් ලබා දිය හැක."
          ]
        },
        {
          title: "45.3 Import Aliasing (as) සහ <script type='module'>",
          content: [
            "නම් ගැටුමක් ඇති වූ විට as මඟින් වෙනත් නමක් ලබා දිය හැක (උදා: import { add as sumNumbers } from './math.js').",
            "බ්‍රවුසරයේ මොඩියුල ධාවනය කිරීමට HTML හි <script type='module' src='app.js'></script> ලෙස ලිවිය යුතුය.",
            "සැලකිය යුතුයි: type='module' යෙදූ විට බ්‍රවුසරයේ CORS ආරක්ෂණ ප්‍රතිපත්තිය නිසා file:/// ආකාරයෙන් සෘජුව විවෘත කළ නොහැක. ඒ සඳහා Live Server (VS Code Extension) හෝ Vite/Node.js සර්වරයක් අවශ්‍ය වේ."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "mathUtils.js (Exports)",
              code: `// Named Exports
export const PI = 3.14159;
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Default Export
export default class Calculator {
  greet() {
    return "කැල්කියුලේටරය සූදානම්!";
  }
}`
            },
            {
              language: "javascript",
              title: "app.js (Imports)",
              code: `// Named Imports (වරහන් සහිතව) & Default Import (වරහන් රහිතව)
import Calculator, { PI, add as sum, multiply } from './mathUtils.js';

console.log("PI අගය: " + PI);
console.log("එකතුව: " + sum(10, 20));
console.log("ගුණිතය: " + multiply(5, 4));

const calc = new Calculator();
console.log(calc.greet());`
            }
          ]
        }
      ],
      keyPoints: [
        "Default Export එකක් import කිරීමේදී curly braces { } භාවිතා නොකරයි.",
        "HTML තුළ <script type='module'> භාවිතා කළ විට defer ස්වයංක්‍රීයව ක්‍රියාත්මක වේ.",
        "මොඩියුල ක්‍රියාත්මක කිරීමට Local Server එකක් (Live Server / Vite) අනිවාර්ය වේ."
      ],
      exercises: [
        { id: 1, question: "Named Export සහ Default Export අතර ඇති ප්‍රධාන වෙනස්කම් 2ක් දක්වන්න." },
        { id: 2, question: "<script type='module'> යෙදූ විට file:// මඟින් බ්‍රවුසරයේ විවෘත කිරීමට නොහැකි වන්නේ ඇයි?" }
      ]
    },
    {
      id: 46,
      volumeId: 4,
      chapterNumber: 46,
      title: "අසමකාලීන ජාවාස්ක්‍රිප්ට් - පොරොන්දු (Promises)",
      englishTitle: "Asynchronous JavaScript & Promises",
      pageRange: "පිටු 139 - 141",
      description: "Synchronous vs Asynchronous (ආපනශාලාවේ Buzzer උපමාව), Blocking ගැටලුව, Promise States (Pending, Fulfilled, Rejected), .then(), .catch(), .finally().",
      learningObjectives: [
        "Synchronous (එකක් පසුපස එකක්) සහ Asynchronous (පසුබිමෙන් ක්‍රියාත්මක වන) අතර වෙනස",
        "Callback Hell (Pyramid of Doom) ගැටලුව සහ Promise මඟින් එය විසඳන ආකාරය",
        "පොරොන්දුවක පවතින අවස්ථා 3: Pending, Fulfilled / Resolved, Rejected",
        ".then(), .catch() සහ .finally() මඟින් අසමකාලීන ප්‍රතිඵල හැසිරවීම",
        "Promise.all() සහ Promise.race() සංකල්ප"
      ],
      sections: [
        {
          title: "46.1 Synchronous vs Asynchronous සහ Buzzer උපමාව",
          content: [
            "Synchronous: ඔබ බැංකු පෝලිමක සිටී නම්, ඉදිරියේ සිටින පුද්ගලයාගේ වැඩ අවසන් වන තෙක් මුළු පෝලිමම හිර වී බලා සිටිය යුතුය (Blocking).",
            "Asynchronous: ඔබ පීසා කඩයකට ගොස් ඇණවුම් කළ විට, වේටර්වරයා ඔබට ඉලෙක්ට්‍රොනික 'බසර්' (Buzzer) එකක් ලබා දෙයි. පීසා එක හැදෙන තෙක් ඔබ කවුන්ටරය ඉදිරියේ නොසිට මේසයක වාඩි වී මිතුරන් සමඟ කතා කරයි. පීසා හැදුණු සැණින් බසරය නාද වේ (Non-blocking)."
          ],
          asciiDiagram: `[Sync]:  Task A (හිරවීම) ──► Task B (හිරවීම) ──► Task C
[Async]: Task A (පසුබිමේ) ──┬──► Task B (වහාම ක්‍රියාත්මක වේ)
                           └──► Task A නිම වූ විට Buzzer එක නාද වේ!`
        },
        {
          title: "46.2 Callback Hell සහ පොරොන්දු (Promises) බිහිවීම",
          content: [
            "අතීතයේදී අසමකාලීන කේත ලිවීමට Callbacks යොදාගත් අතර, ඒවා එකක් ඇතුළේ එකක් ලියන විට කේතය පිරමීඩයක් මෙන් දකුණට ඇදී ගියේය (Callback Hell / Pyramid of Doom).",
            "පොරොන්දුවක් (Promise) යනු අනාගතයේදී කිසියම් අගයක් (හෝ දෝෂයක්) ලබා දෙන බවට බ්‍රවුසරය ලබා දෙන සහතිකයකි."
          ]
        },
        {
          title: "46.3 Promise එකක පවතින අවස්ථා 3",
          content: [
            "1. Pending: කාර්යය තවමත් පසුබිමේ සිදුවෙමින් පවතී (බසර් එක නාද වී නැත).",
            "2. Fulfilled (Resolved): කාර්යය සාර්ථකව නිම විය (පීසා එක ලැබුණි). .then() ක්‍රියාත්මක වේ.",
            "3. Rejected: කාර්යය අසාර්ථක විය (පීසා පිළිස්සුණි). .catch() ක්‍රියාත්මක වේ."
          ]
        },
        {
          title: "46.4 Promise නිර්මාණය සහ පරිභෝජනය (.then, .catch, .finally)",
          content: [
            "new Promise((resolve, reject) => { ... }) මඟින් පොරොන්දුවක් සාදනු ලබයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Creating & Consuming Promises",
              code: `// 1. Creating a Promise
function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    console.log(\`\${flavor} පීසා එක සූදානම් කරමින් පවතී... (Buzzer එක දී ඇත)\`);
    
    setTimeout(() => {
      const isAvailable = true; // අමුද්‍රව්‍ය තිබේදැයි පරීක්ෂාව
      
      if (isAvailable) {
        resolve({ orderId: 452, item: flavor, status: "Ready" });
      } else {
        reject("කණගාටුයි, අමුද්‍රව්‍ය අවසන් වී ඇත!");
      }
    }, 2000);
  });
}

// 2. Consuming the Promise
orderPizza("Chicken BBQ")
  .then(order => {
    console.log("ලැබුණු ඇණවුම:", order);
    return "බිල්පත ගෙවන ලදී.";
  })
  .then(paymentStatus => {
    console.log(paymentStatus); // Promise Chaining!
  })
  .catch(error => {
    console.error("දෝෂයක් ඇති විය:", error);
  })
  .finally(() => {
    console.log("ගනුදෙනුව අවසන්. ස්තූතියි!");
  });`
            }
          ]
        }
      ],
      keyPoints: [
        "Promise එකක් එක්කෝ Fulfilled වේ, නැතහොත් Rejected වේ. කිසිවිටක එකවර දෙකම සිදු නොවේ.",
        ".catch() නොයෙදුවහොත් 'UnhandledPromiseRejection' දෝෂය හටගනී.",
        ".finally() කුමන ප්‍රතිඵලයක් ආවද අවසානයේදී අනිවාර්යයෙන්ම ක්‍රියාත්මක වේ."
      ],
      exercises: [
        { id: 1, question: "Promise එකක පවතින අවස්ථා 3 මොනවාද?" },
        { id: 2, question: "Callback Hell යනු කුමක්ද සහ Promise මඟින් එය සමනය කරන්නේ කෙසේද?" }
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
        "අසමකාලීන කේතය සාමාන්‍ය සමකාලීන කේතයක් මෙන් ඉහළ සිට පහළට පිරිසිදුව ලිවීම",
        "await භාවිතා කළ හැක්කේ async ශ්‍රිතයක් ඇතුළත පමණක් බව",
        "try...catch...finally මඟින් අසමකාලීන දෝෂ හැසිරවීම",
        "සමාන්තරව කාර්යයන් කිහිපයක් කිරීමට Promise.all() භාවිතය"
      ],
      sections: [
        {
          title: "47.1 Async / Await යනු කුමක්ද?",
          content: [
            "2017 දී ES8 (ES2017) සමඟ Async/Await හඳුන්වා දෙන ලදී. මෙය Promises වෙනුවට ආ අලුත් දෙයක් නොව, Promises භාවිතා කිරීම ඉතා පහසු සහ කියවීමට පහසු කරවන ක්‍රමවේදයකි (Syntactic Sugar).",
            "• async: ඕනෑම ශ්‍රිතයක් ඉදිරියට async යෙදූ විට එම ශ්‍රිතය සැමවිටම ආපසු ලබා දෙන්නේ Promise එකකි.",
            "• await: Promise එක විසඳෙන තෙක් (Resolve වන තෙක්) එම පේළියේදී කේතය මඳකට නතර කර තබයි. එය භාවිතා කළ හැක්කේ async ශ්‍රිතයක් තුළ පමණි."
          ]
        },
        {
          title: "47.2 try...catch මඟින් දෝෂ පාලනය",
          content: [
            "Promises වලදී .catch() යෙදුවාක් මෙන්, async/await සමඟ සම්මත try...catch බ්ලොක් එක යොදා දෝෂ හසුකර ගත හැක. මෙය කේතය කියවීමේ පහසුව උපරිම කරයි."
          ]
        },
        {
          title: "47.3 සමාන්තර ඉටුකිරීම් (Parallel Execution with Promise.all)",
          content: [
            "සෑම await එකක්ම එකක් පසුපස එකක් ලිවීමෙන් කාලය අපතේ යා හැක. එකිනෙකට සම්බන්ධ නැති කාර්යයන් එකවර (Parallel) කිරීමට Promise.all([task1(), task2()]) යෙදිය යුතුය."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Modern Async/Await Coffee Machine",
              code: `// Helper function: Simulated Promise delay
const delay = ms => new Promise(res => setTimeout(res, ms));

async function brewCoffee(type) {
  console.log(\`\${type} කෝපි සැකසීම ආරම්භ කළා...\`);
  await delay(1500); // තත්පර 1.5ක් ඉවසයි
  return \`සුවඳැති උණුසුම් \${type} කෝපි කෝප්පය සූදානම්!\`;
}

async function prepareBreakfast() {
  try {
    console.log("උදෑසන ආහාරය පිළියෙල කරමු.");
    
    // Serial: එකක් පසුපස එකක්
    const coffee = await brewCoffee("Cappuccino");
    console.log(coffee);
    
    // Parallel: කාර්යයන් දෙකක් එකවර
    console.log("පාන් ටෝස්ට් කිරීම සහ බිත්තර බැදීම එකවර අරඹමු...");
    const [toast, egg] = await Promise.all([
      delay(1000).then(() => "ටෝස්ට් පාන් සූදානම්"),
      delay(1000).then(() => "බිත්තරය සූදානම්")
    ]);
    
    console.log(\`\${toast} සහ \${egg}!\`);
    console.log("උදෑසන ආහාරය සම්පූර්ණයි!");
  } catch (error) {
    console.error("උදෑසන ආහාරය සැකසීමේදී දෝෂයක්:", error.message);
  } finally {
    console.log("කුස්සියේ වැඩ අවසන්.");
  }
}

prepareBreakfast();`
            }
          ]
        }
      ],
      keyPoints: [
        "async ශ්‍රිතයක් සැමවිටම Promise එකක් return කරයි (return 5 කළද එය Promise.resolve(5) වේ).",
        "await මඟින් බ්‍රවුසරය Freeze නොකරයි; එය අදාළ ශ්‍රිතය පමණක් තාවකාලිකව pause කරයි.",
        "ස්වාධීන කාර්යයන් කිහිපයක් සඳහා අනවශ්‍ය ලෙස sequential await නොයොදා Promise.all භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "await යෙදුම සාමාන්‍ය (non-async) ශ්‍රිතයක් තුළ ලිවිය හැකිද?" },
        { id: 2, question: "Promise.all() භාවිතයෙන් ලැබෙන ප්‍රධාන කාර්යසාධන වාසිය (Performance advantage) කුමක්ද?" }
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
        "HTTP Status Codes (200, 404, 500) සහ response.ok පරීක්ෂා කිරීම",
        "Loading State සහ Error State කළමනාකරණය"
      ],
      sections: [
        {
          title: "48.1 API සහ ආපනශාලාවේ වේටර්වරයාගේ උපමාව",
          content: [
            "API (Application Programming Interface) උපමාව:",
            "• පාරිභෝගිකයා (Client / Browser): ඔබට අවශ්‍ය කෑම තෝරා ඇණවුම් කරයි.",
            "• වේටර්වරයා (API): ඔබගේ ඇණවුම රැගෙන කුස්සියට ගොස්, කෑම පිළියෙල වූ පසු නැවත ඔබ වෙත රැගෙන එයි.",
            "• කුස්සිය (Server / Database): ආහාර ගබඩා කර පිළියෙල කර තබන මධ්‍යස්ථානයයි."
          ],
          asciiDiagram: `[Client / Browser] ──(Request)──► [API (Fetch)] ──► [Server / DB]
[Client / Browser] ◄──(JSON Data)── [API (Fetch)] ◄── [Server / DB]`
        },
        {
          title: "48.2 JSON (JavaScript Object Notation) නීති",
          content: [
            "අන්තර්ජාලය හරහා දත්ත හුවමාරු වන විශ්වීය භාෂාව JSON වේ:",
            "• සියලු Keys ද්විත්ව උද්ධෘත ලකුණු (\" \") ඇතුළත තිබිය යුතුය. (උදා: {\"name\": \"කසුන්\"}).",
            "• අවසාන අගය පසුපස Trailing Comma (,) තැබිය නොහැක.",
            "• Functions හෝ undefined අගයන් JSON තුළ තිබිය නොහැක."
          ]
        },
        {
          title: "48.3 fetch() සහ response.ok වැදගත්කම",
          content: [
            "බොහෝ ආධුනිකයන් සිතන්නේ 404 (Not Found) හෝ 500 (Server Error) ආ විට fetch() එක catch එකට වැටෙන බවයි. නමුත් fetch() reject වන්නේ අන්තර්ජාලය සම්පූර්ණයෙන්ම විසන්ධි වූ විට (Network Failure) පමණි!",
            "එබැවින් if (!response.ok) ලෙස පරීක්ෂා කර සර්වර් දෝෂ හඳුනා ගැනීම අනිවාර්ය වේ."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Bulletproof Fetch API Pattern",
              code: `async function fetchUsers() {
  const userList = document.getElementById("userList");
  
  try {
    // 1. Loading State පෙන්වීම
    userList.innerHTML = "<p class='loading'>දත්ත පූරණය වෙමින් පවතී...</p>";

    // 2. Network Request යැවීම
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // 3. HTTP Error පරීක්ෂා කිරීම (404, 500 etc)
    if (!response.ok) {
      throw new Error(\`සර්වර් දෝෂයකි: Status \${response.status}\`);
    }

    // 4. JSON බවට හැරවීම
    const users = await response.json();

    // 5. UI එකට දත්ත ඇතුළත් කිරීම
    userList.innerHTML = users.map(user => \`
      <div class="user-card">
        <h3>\${user.name}</h3>
        <p>✉ \${user.email}</p>
        <p>🏢 \${user.company.name}</p>
      </div>
    \`).join("");

  } catch (error) {
    // 6. Error State පෙන්වීම
    console.error("දෝෂය:", error.message);
    userList.innerHTML = \`<p class="error">දත්ත ලබා ගැනීමට නොහැකි විය: \${error.message}</p>\`;
  }
}`
            }
          ]
        }
      ],
      keyPoints: [
        "fetch() දෝෂයක් ලෙස සලකන්නේ ජාලය විසන්ධි වූ විට පමණි; 404 හෝ 500 දෝෂ සඳහා response.ok පරීක්ෂා කළ යුතුය.",
        "JSON වලදී Key එක සැමවිටම ද්විත්ව උද්ධෘත ලකුණු (\" \") ඇතුළත තිබිය යුතුය.",
        "UI එකේ Loading State සහ Error State කළමනාකරණය වෘත්තීය මෘදුකාංග සඳහා අත්‍යවශ්‍ය වේ."
      ],
      exercises: [
        { id: 1, question: "fetch() මඟින් 404 Not Found ලැබුණද .catch() එකට කෙලින්ම නොවැටෙන්නේ ඇයි?" },
        { id: 2, question: "response.json() මඟින් සිදුවන කාර්යය කුමක්ද?" }
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
        "ප්‍රධාන දෝෂ වර්ග (SyntaxError, ReferenceError, TypeError, RangeError)",
        "try...catch...finally ගෘහ නිර්මාණ ශිල්පය",
        "throw new Error('පණිවිඩය') මඟින් තමන්ගේම දෝෂ නිර්මාණය",
        "Silent Catching (දෝෂ සඟවා තැබීම) නමැති විනාශකාරී පුරුද්දෙන් වැළකීම"
      ],
      sections: [
        {
          title: "49.1 වාහනයේ Dashboard Indicator උපමාව",
          content: [
            "වාහනයක එන්ජිමේ තෙල් අඩුවක් හෝ බැටරියේ දෝෂයක් ආ විට, පාර මැද ක්ෂණිකව බ්‍රේක් වැදී රියදුරා අනතුරට පත්වනවාට වඩා, ඩෑෂ්බෝඩ් එකේ Warning ලාම්පුවක් දල්වා ආරක්ෂිතව වාහනය පසෙකට ගැනීමට ඉඩ දීම වැනි දෙයකි Error Handling.",
            "හොඳ මෘදුකාංගයක් කිසිවිටෙක කළු තිරයක් පෙන්වමින් Crash නොවේ; එය පරිශීලකයාට සුහදශීලී පණිවිඩයක් පෙන්වයි."
          ]
        },
        {
          title: "49.2 JavaScript හි ප්‍රධාන දෝෂ වර්ග",
          content: [
            "• SyntaxError: කේතයේ ව්‍යාකරණ වැරදි (උදා: වරහනක් අඩුවීම).",
            "• ReferenceError: ප්‍රකාශ නොකළ (Declare නොකළ) විචල්‍යයකට ප්‍රවේශ වීම.",
            "• TypeError: දත්ත වර්ගයකට නොගැලපෙන දෙයක් කිරීමට යාම (උදා: null.toUpperCase() හෝ const විචල්‍යයකට නැවත අගයක් පැවරීම).",
            "• RangeError: අවසර ලත් සීමාව ඉක්මවා යාම (උදා: නිමක් නැති recursion)."
          ]
        },
        {
          title: "49.3 Custom Errors සහ throw ප්‍රකාශය",
          content: [
            "අපගේ ව්‍යාපාරික තර්කනයට (Business Logic) පටහැනි දෙයක් සිදු වූ විට throw new Error() මඟින් දෝෂයක් උත්පාදනය කළ හැක:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Production-grade Error Handling Pattern",
              code: `function processPayment(amount, userBalance) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new TypeError("වලංගු මුදලක් ඇතුළත් කරන්න!");
  }
  
  if (amount > userBalance) {
    throw new RangeError("ගිණුමේ ප්‍රමාණවත් මුදලක් නොමැත!");
  }

  return {
    success: true,
    remainingBalance: userBalance - amount
  };
}

try {
  console.log("ගෙවීම් ක්‍රියාවලිය ඇරඹුණා...");
  const result = processPayment(5000, 3000);
  console.log("සාර්ථකයි:", result);
} catch (error) {
  // Silent catch නොකරන්න! දෝෂ වර්ගය හඳුනාගෙන සුදුසු පියවර ගන්න:
  if (error instanceof RangeError) {
    console.warn("මුදල් ප්‍රමාණවත් නොවේ:", error.message);
  } else if (error instanceof TypeError) {
    console.error("දත්ත වර්ගයේ දෝෂයකි:", error.message);
  } else {
    console.error("නොදන්නා දෝෂයකි:", error.message);
  }
} finally {
  console.log("පද්ධති සම්පත් නිදහස් කර සැසිය අවසන් විය.");
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Silent Catch (catch(e) {} තුළ කිසිවක් නොකර සිටීම) ඉතා භයානකයි; දෝෂය හඳුනා ගැනීමට නොහැකි වේ.",
        "finally කොටස error එකක් ආවද නැතද අනිවාර්යයෙන්ම ක්‍රියාත්මක වන බැවින් Loading Spinners නැවැත්වීමට සුදුසුම තැනයි."
      ],
      exercises: [
        { id: 1, question: "ReferenceError සහ TypeError අතර වෙනස උදාහරණ සහිතව පැහැදිලි කරන්න." },
        { id: 2, question: "finally කොටස ප්‍රායෝගිකව වැදගත් වන අවස්ථාවක් සඳහන් කරන්න." }
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
        "Arrays සහ Objects ගබඩා කිරීමට JSON.stringify() සහ JSON.parse() භාවිතය",
        "ආරක්ෂක නීති: XSS අවදානම සහ සංවේදී දත්ත (Passwords/Tokens) නොතැබීම"
      ],
      sections: [
        {
          title: "50.1 Web Storage API: LocalStorage එදිරිව SessionStorage",
          content: [
            "• LocalStorage: පරිගණකය Shutdown කළද, බ්‍රවුසරය වැසුවද දත්ත නොමැකී පවතී (සාමාන්‍යයෙන් ~5MB-10MB ධාරිතාවක් ඇත). තේමාවන් (Dark/Light mode), සෙවුම් ඉතිහාසය, To-Do lists වැනි දේට යොදයි.",
            "• SessionStorage: අදාළ බ්‍රවුසර් ටැබ් එක වසා දැමූ සැණින් සියලු දත්ත මැකී යයි. එක් සැසියකට පමණක් අදාළ තාවකාලික දත්ත සඳහා යොදයි."
          ]
        },
        {
          title: "50.2 මූලික මෙහෙයුම් 4 (CRUD)",
          content: [
            "1. localStorage.setItem('key', 'value') - දත්ත තැන්පත් කිරීම.",
            "2. localStorage.getItem('key') - දත්ත කියවීම (නැතිනම් null ලැබේ).",
            "3. localStorage.removeItem('key') - අදාළ key එක මකා දැමීම.",
            "4. localStorage.clear() - සියලුම දත්ත මුළුමනින්ම මකා දැමීම."
          ]
        },
        {
          title: "50.3 රන් නීතිය: Arrays සහ Objects ගබඩා කිරීම",
          content: [
            "ලෝකල් ස්ටෝරේජ් තුළ ගබඩා කළ හැක්කේ Strings (අකුරු වැල්) පමණි! ඔබ Object එකක් සෘජුව දැමුවහොත් එය '[object Object]' ලෙස විනාශ වේ.",
            "විසඳුම: තැන්පත් කිරීමට පෙර JSON.stringify() ද, ලබා ගත් පසු JSON.parse() ද යොදන්න."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Theme & User Preferences Manager with LocalStorage",
              code: `const ThemeManager = {
  // තේමාව සුරැකීම
  saveTheme(themeName) {
    localStorage.setItem("app_theme", themeName);
    document.body.className = themeName;
  },

  // සුරකින ලද තේමාව කියවීම
  getSavedTheme() {
    return localStorage.getItem("app_theme") || "light";
  },

  // සංකීර්ණ වස්තුවක් සුරැකීම
  saveUserData(userObj) {
    localStorage.setItem("user_profile", JSON.stringify(userObj));
  },

  // කියවා Object එකක් බවට හැරවීම
  getUserData() {
    const raw = localStorage.getItem("user_profile");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
};

// භාවිතය:
ThemeManager.saveTheme("dark-mode");
console.log("වත්මන් තේමාව:", ThemeManager.getSavedTheme());

ThemeManager.saveUserData({ name: "සචින්ත", level: "Expert", points: 1250 });
const profile = ThemeManager.getUserData();
console.log(\`පරිශීලක: \${profile.name} (ලකුණු: \${profile.points})\`);`
            }
          ]
        }
      ],
      keyPoints: [
        "LocalStorage හි ගබඩා කළ හැක්කේ Strings පමණි. Array/Object සඳහා JSON.stringify සහ JSON.parse අත්‍යවශ්‍යයි.",
        "Passwords, Credit Card විස්තර, හෝ රහස් API Keys කිසිවිටෙක LocalStorage හි නොතබන්න (XSS Attack අවදානම).",
        "වෙබ් පිටුවක් පළමුව පූරණය වන විට LocalStorage පරීක්ෂා කර පරිශීලකයාගේ සුපුරුදු සැකසුම් යෙදීම විශිෂ්ට UX එකකි."
      ],
      exercises: [
        { id: 1, question: "LocalStorage සහ SessionStorage අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "Object එකක් LocalStorage හි තැන්පත් කිරීමට පෙර JSON.stringify() නොකළහොත් කුමක් සිදුවේද?" }
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
        "constructor ක්‍රියාත්මක වන ආකාරය සහ new keyword",
        "extends සහ super මඟින් පන්තියක ලක්ෂණ තවත් පන්තියකට උරුම කර දීම (Inheritance)",
        "Getters & Setters මඟින් දත්ත ආරක්ෂිතව හැසිරවීම (Encapsulation)",
        "Memory Heap, Call Stack, සහ V8 Garbage Collector ක්‍රියා කරන ආකාරය"
      ],
      sections: [
        {
          title: "51.1 OOP සහ නිවාස සැලසුම් (Blueprint) උපමාව",
          content: [
            "Class (පන්තිය): නිවසක් තැනීමට පෙර ආර්කිටෙක්ට් අඳින නිවාස සැලසුමයි (Blueprint). එහි කාමර ගණන, දොරවල් පිහිටීම ලියා ඇතත් එය තුළ ජීවත් විය නොහැක.",
            "Object (වස්තුව): එම සැලසුම බලා සැබෑ පොළොවේ සිමෙන්ති ගඩොල් යොදා තැනූ සැබෑ නිවසයි (Instance). එකම සැලසුමෙන් නිවාස 100ක් වුවද තැනිය හැක."
          ],
          asciiDiagram: `[Class: House Blueprint] ──(new House())──► [Object 1: සැබෑ නිවස A]
                                           └──► [Object 2: සැබෑ නිවස B]`
        },
        {
          title: "51.2 constructor, methods සහ Inheritance (extends, super)",
          content: [
            "• constructor: new යෙදූ සැණින් ක්‍රියාත්මක වී වස්තුව ආරම්භක අගයන්ගෙන් සන්නද්ධ කරයි.",
            "• extends: පවතින පන්තියක සියලු ගුණාංග නව පන්තියකට උරුම කර ගනී.",
            "• super(): මව් පන්තියේ (Parent class) constructor එක ක්‍රියාත්මක කරවයි."
          ]
        },
        {
          title: "51.3 Getters (get) සහ Setters (set)",
          content: [
            "දත්ත කෙලින්ම වෙනස් කිරීමට ඉඩ නොදී, නිශ්චිත නීති පරීක්ෂා කර (Validation) පමණක් අගයන් වෙනස් කිරීමට getters සහ setters යොදයි."
          ]
        },
        {
          title: "51.4 Memory Management සහ Garbage Collection",
          content: [
            "ජාවාස්ක්‍රිප්ට් එන්ජිම මතකය ප්‍රධාන කොටස් 2කට බෙදයි:",
            "• Call Stack: ප්‍රාථමික විචල්‍යයන් සහ ක්‍රියාත්මක වන ශ්‍රිත සඳහා වේගවත් තාවකාලික මතකය.",
            "• Memory Heap: Objects, Arrays සහ Functions ගබඩා වන විශාල මතකාගාරය.",
            "Garbage Collector (Mark-and-Sweep Algorithm): තවදුරටත් කිසිදු විචල්‍යයකින් යොමු නොවූ (Unreferenced) වස්තූන් ස්වයංක්‍රීයව හඳුනාගෙන මතකයෙන් ඉවත් කරයි (Clean up)."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "OOP Classes, Inheritance & Getters/Setters",
              code: `class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this._speed = 0; // Private convention
  }

  // Getter
  get speed() {
    return \`\${this._speed} km/h\`;
  }

  // Setter with Validation
  set speed(value) {
    if (value < 0) {
      console.error("වේගය සෘණ අගයක් විය නොහැක!");
      return;
    }
    if (value > 300) {
      console.warn("අනතුරුදායක වේග සීමාවකි!");
    }
    this._speed = value;
  }

  drive() {
    console.log(\`\${this.brand} \${this.model} ධාවනය වේ...\`);
  }
}

// Inheritance: Car extends Vehicle
class ElectricCar extends Vehicle {
  constructor(brand, model, batteryCapacity) {
    super(brand, model); // මව් පන්තියේ constructor කැඳවීම
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(\`\${this.brand} \${this.model} බැටරිය (\${this.batteryCapacity} kWh) ආරෝපණය වේ.\`);
  }
}

const myTesla = new ElectricCar("Tesla", "Model 3", 75);
myTesla.drive();
myTesla.speed = 80;
console.log("වත්මන් වේගය: " + myTesla.speed);
myTesla.charge();`
            }
          ]
        }
      ],
      keyPoints: [
        "Inheritance යෙදීමේදී Child Class එකක constructor තුළ this භාවිතා කිරීමට පෙර super() අනිවාර්යයෙන්ම කැඳවිය යුතුය.",
        "Getters/Setters මඟින් දත්ත වලංගුභාවය (Data Validation) තහවුරු කරයි.",
        "Memory Leak වැළැක්වීමට වැඩ නිම වූ Event Listeners ඉවත් (removeEventListener) කරන්න."
      ],
      exercises: [
        { id: 1, question: "super() යෙදීමෙන් සිදුවන්නේ කුමක්ද? එය නොයෙදුවහොත් කුමක් සිදුවේද?" },
        { id: 2, question: "Garbage Collector එක ක්‍රියා කරන්නේ කුමන මූලධර්මය මතද?" }
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
        "පරිශීලකයාගේ සෙවුම් ඉතිහාසය LocalStorage හි තබා ගැනීම සහ Quick Reload",
        "Glassmorphism සහ Responsive CSS මඟින් උසස් නිමාවක් ලබා දීම",
        "Live Weather API (Open-Meteo හෝ OpenWeatherMap) සමඟ සැබෑ දත්ත ලබා ගැනීම"
      ],
      sections: [
        {
          title: "52.1 SkyCast Pro ගෘහ නිර්මාණ ශිල්පය (Architecture)",
          content: [
            "මෙය සාමාන්‍ය කාලගුණ ඇප් එකක් නොවේ. පන්ති මූලික සැලසුම්කරණය (Class-based Architecture) සහිත වෘත්තීය මට්ටමේ Dashboard එකකි. ව්‍යාපෘතිය කොටස් 3කට බෙදා ඇත:",
            "1. WeatherService: API එක සමඟ ගනුදෙනු කර දත්ත ගෙන එන පන්තිය (Data Layer).",
            "2. HistoryManager: සෙවූ නගර LocalStorage හි සුරකින පන්තිය (Persistence Layer).",
            "3. UIManager: HTML පිටුව යාවත්කාලීන කරන පන්තිය (Presentation Layer)."
          ],
          asciiDiagram: `[User Interaction] ──► [UIManager]
                            │
               ┌────────────┴────────────┐
               ▼                         ▼
      [WeatherService]          [HistoryManager]
      (Fetch Open-Meteo)         (LocalStorage)`
        },
        {
          title: "52.2 WeatherService සහ HistoryManager ක්‍රියාත්මක කිරීම",
          content: [
            "Open-Meteo නොමිලේ ලබා දෙන කාලගුණ API එක භාවිතයෙන් කිසිදු API Key එකක් නොමැතිව ඕනෑම නගරයක කාලගුණය සෙවිය හැක."
          ]
        },
        {
          title: "52.3 සම්පූර්ණ SkyCast Pro JavaScript කේතය",
          content: [
            "පහත දැක්වෙන්නේ සම්පූර්ණ මොඩියුලර් වෘත්තීය කේතයයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "SkyCast Pro Production Architecture",
              code: `// 1. Data Layer: Weather Service
class WeatherService {
  static async getCoordinates(cityName) {
    const geoUrl = \`https://geocoding-api.open-meteo.com/v1/search?name=\${encodeURIComponent(cityName)}&count=1&language=en&format=json\`;
    const res = await fetch(geoUrl);
    if (!res.ok) throw new Error("භූගෝලීය දත්ත ලබා ගැනීමට නොහැකි විය!");
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      throw new Error(\`'\${cityName}' නගරය සොයාගත නොහැක!\`);
    }
    return data.results[0]; // { latitude, longitude, name, country }
  }

  static async getWeather(lat, lon) {
    const weatherUrl = \`https://api.open-meteo.com/v1/forecast?latitude=\${lat}&longitude=\${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code\`;
    const res = await fetch(weatherUrl);
    if (!res.ok) throw new Error("කාලගුණ දත්ත ලබා ගැනීමට නොහැකි විය!");
    return await res.json();
  }
}

// 2. Persistence Layer: History Manager
class HistoryManager {
  static STORAGE_KEY = "skycast_history";

  static getHistory() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : ["Colombo", "Kandy", "Galle"];
  }

  static addCity(city) {
    let history = this.getHistory();
    // අනුපිටපත් ඉවත් කර ඉහළටම එකතු කිරීම
    history = [city, ...history.filter(c => c.toLowerCase() !== city.toLowerCase())].slice(0, 5);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
  }
}

// 3. Presentation Layer: UI Controller
class UIManager {
  constructor() {
    this.cityInput = document.getElementById("cityInput");
    this.searchBtn = document.getElementById("searchBtn");
    this.weatherCard = document.getElementById("weatherCard");
    this.historyContainer = document.getElementById("historyContainer");
    this.init();
  }

  init() {
    this.searchBtn.addEventListener("click", () => this.handleSearch());
    this.cityInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.handleSearch();
    });
    this.renderHistory();
    this.loadCity("Colombo"); // ආරම්භක නගරය
  }

  renderHistory() {
    const history = HistoryManager.getHistory();
    this.historyContainer.innerHTML = history.map(city => \`
      <button class="history-chip" onclick="app.loadCity('\${city}')">\${city}</button>
    \`).join("");
  }

  async handleSearch() {
    const city = this.cityInput.value.trim();
    if (!city) return;
    await this.loadCity(city);
    this.cityInput.value = "";
  }

  async loadCity(cityName) {
    try {
      this.weatherCard.innerHTML = "<div class='loader'>කාලගුණය සොයමින්...</div>";
      const geo = await WeatherService.getCoordinates(cityName);
      const weatherData = await WeatherService.getWeather(geo.latitude, geo.longitude);
      const current = weatherData.current;

      HistoryManager.addCity(geo.name);
      this.renderHistory();

      this.weatherCard.innerHTML = \`
        <div class="glass-panel">
          <h2>\${geo.name}, \${geo.country || ""}</h2>
          <div class="temp-display">\${Math.round(current.temperature_2m)}°C</div>
          <div class="stats-grid">
            <div class="stat-item">💧 ආර්ද්‍රතාව: \${current.relative_humidity_2m}%</div>
            <div class="stat-item">💨 සුළගේ වේගය: \${current.wind_speed_10m} km/h</div>
          </div>
        </div>
      \`;
    } catch (err) {
      this.weatherCard.innerHTML = \`<div class="error-badge">⚠ \${err.message}</div>\`;
    }
  }
}

// Initialize Application
const app = new UIManager();`
            }
          ]
        }
      ],
      keyPoints: [
        "Separation of Concerns මූලධර්මය මඟින් කේතය නඩත්තු කිරීම සහ දෝෂ සෙවීම ඉතා පහසු කරයි.",
        "Static Methods භාවිතයෙන් Class එක Instance නොකර සෘජුවම Helper functions ක්‍රියාත්මක කළ හැක.",
        "LocalStorage හි ඉතිහාසය තබා ගැනීම මඟින් පරිශීලක අත්දැකීම (UX) බෙහෙවින් ප්‍රශස්ත වේ."
      ],
      exercises: [
        { id: 1, question: "SkyCast Pro හි WeatherService, HistoryManager සහ UIManager ලෙස පන්ති 3කට බෙදීමේ ප්‍රධාන වාසිය කුමක්ද?" },
        { id: 2, question: "නගරයේ කාලගුණයට අමතරව ඉදිරි දින 7ක කාලගුණ අනාවැකිය (7-Day Forecast) ඇතුළත් කිරීමට WeatherService යාවත්කාලීන කරන්නේ කෙසේද?" }
      ]
    }
  ]
};
