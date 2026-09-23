import { Chapter } from '../../types/book';

export const volume3Chapters: Chapter[] = [
  {
    id: "ch-28",
    chapterNumber: 28,
    title: "ජාවාස්ක්‍රිප්ට් හැඳින්වීම සහ ඉතිහාසය",
    englishTitle: "Introduction and History of JavaScript",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 88,
    learningObjectives: [
      "ජාවාස්ක්‍රිප්ට් (JavaScript) යනු කුමක්දැයි වෘත්තීය මට්ටමින් තේරුම් ගැනීම.",
      "වෙබ් අඩවියක ජාවාස්ක්‍රිප්ට් වල සැබෑ කාර්යභාරය (Role) හඳුනා ගැනීම.",
      "ජාවාස්ක්‍රිප්ට් වල ඉතිහාසය සහ එය නිර්මාණය වූ ආකාරය.",
      "ජාවා සහ ජාවාස්ක්‍රිප්ට් (Java vs JavaScript) අතර ඇති වෙනස පැහැදිලිව වටහා ගැනීම.",
      "බ්‍රවුසරයක් තුළ ජාවාස්ක්‍රිප්ට් ක්‍රියා කරවන 'එන්ජිම' (Engine) යනු කුමක්දැයි ඉගෙන ගැනීම."
    ],
    sections: [
      {
        title: "28.1 ජාවාස්ක්‍රිප්ට් යනු කුමක්ද සහ මෝටර් රථ උපමාව",
        content: [
          "ජාවාස්ක්‍රිප්ට් (JavaScript) යනු වෙබ් අඩවි වලට අන්තර්ක්‍රියාකාරී බව (Interactivity) ලබා දීම සඳහා භාවිතා කරන ලොව ජනප්‍රියම ක්‍රමලේඛන භාෂාවයි (Programming Language).",
          "සැබෑ ලෝකයේ උපමාව (මෝටර් රථයක්):",
          "• HTML: මෝටර් රථයේ ඇටසැකිල්ල, රෝද, දොරවල් සහ එන්ජිම තිබෙන තැන පෙන්වයි.",
          "• CSS: රථයේ වර්ණය, සීට් වල ඇති ලස්සන සහ පෙනුම තීරණය කරයි.",
          "• JavaScript: රථයේ එන්ජිම ක්‍රියා කරන ආකාරය, බ්‍රේක් අල්ලන ආකාරය සහ ලයිට් දැල්වීමේ ක්‍රියාවලිය පාලනය කරයි.",
          "ඉතිහාසය: 1995 වසරේදී බ්‍රෙන්ඩන් අයික් (Brendan Eich) විසින් දින 10ක් ඇතුළත Netscape සමාගමේදී නිර්මාණය කරන ලදී. මුලින් Mocha ලෙසද පසුව LiveScript ලෙසද නම් වූ අතර, එකල ජනප්‍රියව තිබූ Java භාෂාවේ ප්‍රසිද්ධිය ලබාගැනීමට JavaScript ලෙස නම් කෙරිණි."
        ]
      },
      {
        title: "28.2 Java vs JavaScript සහ JS Engine",
        content: [
          "Java සහ JavaScript යනු එකම භාෂාවක සංස්කරණ දෙකක් නොවේ! කාර් (Car) සහ කාපට් (Carpet) අතර ඇති වෙනස මෙන් මේවා සම්පූර්ණයෙන්ම වෙනස් භාෂා දෙකකි.",
          "JavaScript Engine: බ්‍රවුසරය තුළ ඇති කේතයන් පරිගණකයේ Processor එකට තේරෙන Machine Code බවට පරිවර්තනය කරන මෘදුකාංගයයි.",
          "• V8 Engine: Google Chrome සහ Microsoft Edge හි ඇත.",
          "• SpiderMonkey: Firefox හි ඇත.",
          "• JavaScriptCore: Apple Safari හි ඇත."
        ],
        asciiDiagram: `+----------------------------------------------------+
| පවබ් අඩවිය (Website)                                |
+----------------------------------------------------+
| [ HTML ] <--- සැකිල්ල (ඇටසැකිල්ල වැනිය)             |
| [ CSS  ] <--- හැඩය (සම සහ ඇඳුම් පැළඳුම් වැනිය)      |
| [ JS   ] <--- ක්‍රියාව (මොළය සහ පේශී පද්ධතිය වැනිය) |
+----------------------------------------------------+`
      }
    ],
    keyPoints: [
      "ජාවාස්ක්‍රිප්ට් වෙබ් අඩවි වලට අන්තර්ක්‍රියාකාරී බව (Interactivity) ලබා දෙයි.",
      "එය 1995 දී බ්‍රෙන්ඩන් අයික් විසින් දින 10ක් ඇතුළත නිර්මාණය කරන ලදී.",
      "Java සහ JavaScript යනු සම්පූර්ණයෙන්ම වෙනස් භාෂා දෙකකි.",
      "සෑම බ්‍රවුසරයකම ජාවාස්ක්‍රිප්ට් ක්‍රියාත්මක කිරීමට විශේෂ 'එන්ජිමක්' ඇත."
    ],
    exercises: [
      "වෙබ් අඩවියක් නිර්මාණයේදී HTML, CSS සහ JavaScript වල කාර්යභාරයන් වෙන් වෙන්ව පැහැදිලි කරන්න.",
      "Java සහ JavaScript අතර ඇති ප්‍රධාන වෙනස කුමක්ද?"
    ]
  },
  {
    id: "ch-29",
    chapterNumber: 29,
    title: "වැඩබිම සැකසීම සහ ප්‍රථම ජාවාස්ක්‍රිප්ට් කේතය",
    englishTitle: "Environment Setup & Your First JavaScript Code",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 90,
    learningObjectives: [
      "ජාවාස්ක්‍රිප්ට් ලිවීමට අවශ්‍ය මෘදුකාංග පරිසරය සකසා ගැනීම.",
      "HTML ගොනුවකට ජාවාස්ක්‍රිප්ට් සම්බන්ධ කරන ක්‍රම 3 (Inline, Internal, External).",
      "බාහිර ජාවාස්ක්‍රිප්ට් ගොනුවක් (External Script) භාවිතයේ වෘත්තීය වාසි.",
      "බ්‍රවුසරයේ Console එක සහ console.log() නිවැරදිව ලිවීම.",
      "කේතය තුළ සටහන් (Comments) යෙදීම."
    ],
    sections: [
      {
        title: "29.1 ජාවාස්ක්‍රිප්ට් ලියන්නේ කොහේද සහ console.log()",
        content: [
          "ජාවාස්ක්‍රිප්ට් සම්බන්ධ කරන ක්‍රම:",
          "1. Inline: <button onclick=\"alert('Hi')\"> (වෘත්තීය මට්ටමේදී අනුමත නොකෙරේ).",
          "2. Internal: <script>console.log('Hello');</script>",
          "3. External: <script src=\"script.js\"></script> (වඩාත්ම වෘත්තීය ක්‍රමය).",
          "ඇයි අපි <script> පතුලේ (</body> ට පෙර) ලියන්නේ? බ්‍රවුසරය ඉහළ සිට පහළට කියවන බැවින්, මුලින්ම වෙබ් අඩවියේ අකුරු සහ පින්තූර පෙන්වා අවසානයේ JS ක්‍රියාත්මක වීමෙන් පිටුවේ වේගය වැඩි වේ.",
          "console.log('ආයුබෝවන් ජාවාස්ක්‍රිප්ට්!');",
          "• console: බ්‍රවුසරයේ ඇති වස්තුවකි.",
          "• log: වරහන් ඇතුළත දත්ත කොන්සෝලය මත මුද්‍රණය කරන ශ්‍රිතයයි.",
          "Comments: තනි පේළියකට // සහ පේළි කිහිපයකට /* ... */ භාවිතා කරයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `// මගේ පළමු ජාවාස්ක්‍රිප්ට් කේතය
console.log("මගේ වැඩබිම දැන් සූදානම්!");
console.log(10 + 20); // ගණිතමය ගණනය කිරීමක් -> 30`
        }
      }
    ],
    keyPoints: [
      "ජාවාස්ක්‍රිප්ට් ලිවීමට හොඳම ක්‍රමය බාහිර .js ගොනුවක් භාවිතා කිරීමයි.",
      "<script> ටැගය HTML පිටුවේ පතුලේ තැබීම පේජ් ලෝඩිං වේගය වැඩි කරයි.",
      "console.log() යනු කොන්සෝලය මත තොරතුරු පරීක්ෂා කිරීමට භාවිතා කරන ප්‍රධාන විධානයයි."
    ],
    exercises: [
      "script.js ගොනුවක ඔබේ නම සහ වයස කොන්සෝලයේ පෙන්වන කේතයක් ලියන්න.",
      "console.log(20 + 30); විධානයේ ප්‍රතිඵලය කුමක් විය හැකිද?"
    ]
  },
  {
    id: "ch-30",
    chapterNumber: 30,
    title: "විචල්‍යයන් - දත්ත ගබඩා කිරීම",
    englishTitle: "Variables in JavaScript",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 92,
    learningObjectives: [
      "විචල්‍යයක් (Variable) යනු කුමක්දැයි සැබෑ ලෝකයේ උදාහරණ ඇසුරින් වටහා ගැනීම.",
      "විචල්‍යයන් ප්‍රකාශ කිරීම (Declaration) සහ අගයන් ලබා දීම (Assignment).",
      "var, let සහ const යන මූලපද අතර ඇති වෙනස හඳුනා ගැනීම.",
      "විචල්‍යයන් නම් කිරීමේ නීති සහ camelCase සම්ප්‍රදාය."
    ],
    sections: [
      {
        title: "30.1 විචල්‍යයන් සහ let, const, var වෙනස",
        content: [
          "විචල්‍යයක් (Variable) යනු දත්තයක් ගබඩා කර තබන 'පෙට්ටියක්' හෝ 'බඳුනක්' වැනි දෙයකි. කුස්ಸියේ ඇති 'සීනි' හෝ 'ලුණු' බෝතල් වැනිය. බෝතලයේ ලේබලය Variable Name වන අතර ඇතුළත ඇති දේ Value (අගය) වේ.",
          "1. var (පැරණි ක්‍රමය - 1995-2015): තාක්ෂණික දෝෂ සහිත බැවින් නූතන කේතකරණයේදී භාවිතා නොකෙරේ.",
          "2. let (නූතන ක්‍රමය - වෙනස් කළ හැකි): පසුව අගය වෙනස් කිරීමට අවශ්‍ය විචල්‍යයන් සඳහා (let score = 10; score = 20;).",
          "3. const (නූතන ක්‍රමය - ස්ථාවර): වරක් අගයක් ලබා දුන් පසු කිසිම විටක වෙනස් කළ නොහැක (const birthYear = 2008;).",
          "වෘත්තීය උපදෙස: සැමවිටම විචල්‍යයක් සාදන විට එය const ලෙස සාදන්න. පසුව වෙනස් කිරීමට අවශ්‍ය නම් පමණක් let බවට හරවන්න.",
          "camelCase නීතිය: පළමු වචනය simple අකුරින්ද, දෙවන වචනයේ සිට මුල් අකුර Capital අකුරින්ද ලියයි (userLoginStatus, firstName)."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const country = "Sri Lanka";
let currentYear = 2026;

console.log("මගේ රට: " + country);
console.log("වත්මන් වසර: " + currentYear);

currentYear = 2027; // let නිසා වෙනස් කළ හැක
// country = "India"; // ❌ TypeError: Assignment to constant variable`
        }
      }
    ],
    keyPoints: [
      "විචල්‍යයන් දත්ත ගබඩා කිරීමට භාවිතා කරයි.",
      "let පසුව වෙනස් කළ හැකි අගයන් සඳහාද, const වෙනස් නොවන ස්ථාවර අගයන් සඳහාද භාවිතා වේ.",
      "නම් තැබීමේදී camelCase ක්‍රමය භාවිතා කිරීම වෘත්තීය පුරුද්දකි.",
      "විචල්‍ය නාමයක් අංකයකින් පටන් ගත නොහැක."
    ],
    exercises: [
      "පහත සඳහන් විචල්‍ය නාම වලින් නිවැරදි සහ වැරදි ඒවා වෙන් කරන්න: my_variable, 2ndPlace, totalAmount, let, $price.",
      "ඔබේ උපන් වසර ගබඩා කිරීමට සුදුසු let ද const ද? හේතුව පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-31",
    chapterNumber: 31,
    title: "දත්ත වර්ග - දත්ත හඳුනා ගැනීම",
    englishTitle: "Data Types & Type Checking",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 95,
    learningObjectives: [
      "ජාවාස්ක්‍රිප්ට් වල දත්ත වර්ග (Data Types) යනු මොනවාදැයි අවබෝධ කර ගැනීම.",
      "ප්‍රාථමික දත්ත වර්ග (Primitive Data Types) 7 හඳුනා ගැනීම.",
      "Dynamic Typing (නම්‍යශීලී දත්ත වර්ගීකරණය) සහිත භාෂාවක් ලෙස හැසිරෙන ආකාරය.",
      "Number, String, Boolean, Undefined, Null ගැඹුරින් ඉගෙන ගැනීම.",
      "typeof මෙහෙයුම්කරු (Operator) භාවිතය."
    ],
    sections: [
      {
        title: "31.1 ප්‍රාථමික දත්ත වර්ග සහ typeof",
        content: [
          "ජාවාස්ක්‍රිප්ට් යනු Dynamic Typing භාෂාවකි. විචල්‍යයක් සාදන විට දත්ත වර්ගය කලින්ම පැවසිය යුතු නැත. බ්‍රවුසරය ස්වයංක්‍රීයව අගය අනුව වර්ගය තීරණය කරයි.",
          "ප්‍රධාන දත්ත වර්ග:",
          "1. Number: පූර්ණ සංඛ්‍යා (16) සහ දශම සංඛ්‍යා (99.50). විශේෂ අගයන්: Infinity සහ NaN (Not a Number).",
          "2. String: අකුරු වැල් ('Hello', \"World\", `Template`).",
          "3. Boolean: true (සත්‍ය) හෝ false (අසත්‍ය).",
          "4. Undefined: විචල්‍යයක් ප්‍රකාශ කර අගයක් ලබා දී නැති විට ලැබෙන අගය ('හිස් පෙට්ටියක්').",
          "5. Null: හිතාමතාම කිසිදු අගයක් නැති බව දැක්වීමට (partnerName = null).",
          "6. BigInt: ඉතා විශාල පූර්ණ සංඛ්‍යා සඳහා (අගට n අකුර යොදයි).",
          "7. Symbol: අනන්‍ය වූ අගයන් සඳහා."
        ],
        codeSnippet: {
          language: "javascript",
          code: `let count = 100;
console.log(typeof count); // "number"

let city = "Colombo";
console.log(typeof city); // "string"

let isActive = false;
console.log(typeof isActive); // "boolean"

let unassigned;
console.log(typeof unassigned); // "undefined"

console.log(typeof null); // "object" (ඓතිහාසික JavaScript දෝෂයකි)`
        }
      }
    ],
    keyPoints: [
      "Numbers සහ Strings පටලවා නොගන්න: 10 + 10 = 20 වන අතර '10' + '10' = '1010' වේ.",
      "Undefined vs Null: කිසිවිටක විචල්‍යයකට හිතාමතා undefined ලබා නොදෙන්න, හිස් කිරීමට null භාවිතා කරන්න."
    ],
    exercises: [
      "console.log('5' + 5); සහ console.log(5 + 5); හි ප්‍රතිඵලවල වෙනස පැහැදිලි කරන්න.",
      "undefined සහ null අතර ප්‍රධාන වෙනස කුමක්ද?"
    ]
  },
  {
    id: "ch-32",
    chapterNumber: 32,
    title: "ක්‍රියාකාරුවන් - දත්ත සමඟ වැඩ කිරීම",
    englishTitle: "Operators & Expressions",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 98,
    learningObjectives: [
      "ගණිතමය ක්‍රියාකාරුවන් (Arithmetic Operators) භාවිතය.",
      "ආදේශන ක්‍රියාකාරුවන් (Assignment Operators: =, +=, -=).",
      "සංසන්දනාත්මක ක්‍රියාකාරුවන් (== vs ===, !=, !==, >, <).",
      "තර්කන ක්‍රියාකාරුවන් (Logical Operators: &&, ||, !).",
      "String Concatenation සහ Operator Precedence."
    ],
    sections: [
      {
        title: "32.1 == එදිරිව === සහ තර්කන ක්‍රියාකාරුවන්",
        content: [
          "Arithmetic: + (එකතු කිරීම / තන්තු එකට ඇලවීම), - (අඩු කිරීම), * (ගුණ කිරීම), / (බෙදීම), % (මොඩියුලස් - බෙදීමේ ඉතිරිය), ** (බලය සෙවීම).",
          "== (Loose Equality): අගය පමණක් බලයි ('5' == 5 -> true).",
          "=== (Strict Equality): අගය සහ දත්ත වර්ගය යන දෙකම බලයි ('5' === 5 -> false). වෘත්තීය මට්ටමේදී නිතරම === භාවිතා කරන්න!",
          "Logical Operators:",
          "• && (AND): සියලු කොන්දේසි සත්‍ය නම් පමණක් true.",
          "• || (OR): අවම වශයෙන් එක් කොන්දේසියක් සත්‍ය නම් true.",
          "• ! (NOT): සත්‍ය අගයක් අසත්‍ය ලෙසද, අසත්‍ය අගයක් සත්‍ය ලෙසද ප්‍රතිවිරුද්ධ කරයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `let age = 16;
let hasTicket = true;
let isVip = false;

// ඡන්දය දිය හැකිද?
console.log(age >= 18); // false

// චිත්‍රපට ශාලාවට ඇතුළු විය හැකිද?
console.log(hasTicket && (age >= 12 || isVip)); // true`
        }
      }
    ],
    keyPoints: [
      "ක්‍රියාකාරුවන් දත්ත මත යම් ක්‍රියාවක් සිදු කිරීමට භාවිතා කරයි.",
      "=== සහ !== මගින් වඩාත් ආරක්ෂිතව දත්ත සංසන්දනය කළ හැක.",
      "+ ක්‍රියාකරු අංක සමඟ එකතු කිරීමද, අකුරු සමඟ එකට ඇලවීමද (Concatenation) සිදු කරයි."
    ],
    exercises: [
      "පහත කේතයන්ගේ ප්‍රතිඵලය (true/false) සොයන්න: 10 > 5 && 3 < 1, 5 === '5', !(5 > 10).",
      "let val = 20 - 2 * 5 + (10 / 2); හි පිළිතුර සොයන්න."
    ]
  },
  {
    id: "ch-33",
    chapterNumber: 33,
    title: "පාලන ව්‍යුහයන් - තීරණ ගැනීම",
    englishTitle: "Control Flow & Decision Making",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 101,
    learningObjectives: [
      "පාලන ප්‍රවාහය (Control Flow) යනු කුමක්දැයි අවබෝධ කර ගැනීම.",
      "if, else if සහ else ප්‍රකාශන භාවිතා කර තීරණ ගන්නා ආකාරය.",
      "Truthy සහ Falsy අගයන් හඳුනා ගැනීම.",
      "switch ප්‍රකාශනය භාවිතය.",
      "තෘතීයක ක්‍රියාකරු (Ternary Operator: condition ? val1 : val2).",
      "ප්‍රායෝගික ATM යන්ත්‍රයක තර්කනය ගොඩනැගීම."
    ],
    sections: [
      {
        title: "33.1 If/Else, Falsy Values සහ Ternary Operator",
        content: [
          "if...else මගින් කොන්දේසියක් සත්‍ය නම් එක් කොටසක්ද, අසත්‍ය නම් වෙනත් කොටසක්ද ක්‍රියාත්මක කරයි.",
          "Falsy Values (ජාවාස්ක්‍රිප්ට් හි අසත්‍ය ලෙස සලකන අගයන් 6):",
          "1. false, 2. 0, 3. \"\" (හිස් string), 4. null, 5. undefined, 6. NaN. (අනෙක් සියලුම අගයන් Truthy වේ).",
          "Ternary Operator (කෙටි if ක්‍රමය):",
          "const message = (age >= 18) ? 'වැඩිහිටි' : 'ළමා';"
        ],
        codeSnippet: {
          language: "javascript",
          code: `let balance = 5000;
let withdrawalAmount = 2000;
let pin = 1234;
const correctPin = 1234;

if (pin !== correctPin) {
  console.log("වැරදි PIN අංකයකි!");
} else if (withdrawalAmount > balance) {
  console.log("ප්‍රමාණවත් මුදල් නොමැත!");
} else {
  balance -= withdrawalAmount;
  console.log("මුදල් ලබා ගැනීම සාර්ථකයි. ඉතිරි මුදල: රු. " + balance);
}`
        }
      }
    ],
    keyPoints: [
      "if භාවිතා කර තීරණ ගනු ලැබේ.",
      "0, '', null, undefined, NaN යනු Falsy අගයන්ය.",
      "switch මගින් බොහෝ තේරීම් කළමනාකරණය කිරීමට පහසුය."
    ],
    exercises: [
      "අංකයක් ඉරට්ටේද (Even) ඔත්තේ ද (Odd) කියා පරීක්ෂා කරන කේතයක් ලියන්න.",
      "සිසුවෙකුගේ ලකුණු මත පදනම්ව ශ්‍රේණිය (A, B, C, F) පෙන්වන කේතයක් ලියන්න."
    ]
  },
  {
    id: "ch-34",
    chapterNumber: 34,
    title: "පුඩු හෙවත් ලූප්ස් - නැවත නැවත සිදුවන ක්‍රියා",
    englishTitle: "Loops in JavaScript (for, while, do...while)",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 105,
    learningObjectives: [
      "පුඩු (Loops) යනු කුමක්ද සහ ඒවායේ වැදගත්කම.",
      "for ලූප් එකෙහි ව්‍යුහය (Initialization; Condition; Increment).",
      "while ලූප් එක සහ එය භාවිතා කළ යුතු අවස්ථා.",
      "do...while ලූප් එකෙහි වෙනස.",
      "අනන්ත පුඩු (Infinite Loops) වලින් බේරෙන ආකාරය.",
      "break සහ continue විධානයන්."
    ],
    sections: [
      {
        title: "34.1 For, While සහ Loop පාලනය",
        content: [
          "එකම කේත කොටසක් නිශ්චිත වාර ගණනක් හෝ යම් කොන්දේසියක් සත්‍ය වන තෙක් නැවත නැවත ක්‍රියාත්මක කිරීමට Loop භාවිතා කරයි.",
          "for (let i = 1; i <= 5; i++): ආරම්භය, කොන්දේසිය, සහ වැඩිවීම යන කොටස් 3න් සමන්විත වේ.",
          "while (energy > 0): කී වතාවක් කළ යුතුදැයි හරියටම නොදන්නා නමුත් යම් කොන්දේසියක් සත්‍ය වන තෙක් ක්‍රියාත්මක වීමට.",
          "break: ලූප් එකෙන් සම්පූර්ණයෙන්ම පිටතට යාමට.",
          "continue: වත්මන් වාරය මඟහැර ඊළඟ වාරයට යාමට."
        ],
        codeSnippet: {
          language: "javascript",
          code: `// 5 ගුණන වගුව
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(\`\${num} x \${i} = \${num * i}\`);
}`
        }
      }
    ],
    keyPoints: [
      "for ලූප් එක වාර ගණන දන්නා විටත්, while ලූප් එක කොන්දේසියක් මත පදනම් වන විටත් භාවිතා කරයි.",
      "Infinite loop ඇතිවීම වළක්වා ගැනීමට කොන්දේසිය කවදා හෝ false වන බවට වගබලා ගන්න."
    ],
    exercises: [
      "1 සිට 20 දක්වා ඇති ඉරට්ටේ සංඛ්‍යා (Even Numbers) පමණක් මුද්‍රණය කරන for ලූප් එකක් ලියන්න.",
      "10 සිට 1 දක්වා පසුපසට (Reverse) ගණන් කරන for ලූප් එකක් ලියන්න."
    ]
  },
  {
    id: "ch-35",
    chapterNumber: 35,
    title: "ශ්‍රිත හෙවත් ෆන්ක්ෂන්ස් - කේතය නැවත භාවිතා කිරීම",
    englishTitle: "Functions & Scope in JavaScript",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 107,
    learningObjectives: [
      "ශ්‍රිතයක් (Function) යනු කුමක්ද සහ DRY සංකල්පය.",
      "තේ යන්ත්‍රය (The Tea Machine) උපමාව.",
      "ශ්‍රිතයක් ප්‍රකාශ කිරීම (Declaration) සහ එය කැඳවීම (Calling).",
      "පරාමිතීන් (Parameters) සහ තර්කයන් (Arguments).",
      "return ප්‍රකාශනය මගින් ප්‍රතිඵලයක් ලබා ගැනීම.",
      "ශ්‍රිත විෂය පථය (Function Scope)."
    ],
    sections: [
      {
        title: "35.1 ශ්‍රිතයක ව්‍යුහය, පරාමිතීන් සහ Return",
        content: [
          "ශ්‍රිතයක් යනු යම් නිශ්චිත කාර්යයක් ඉටු කිරීම සඳහා වෙන් කර තබන ලද, නැවත නැවත භාවිතා කළ හැකි කේත සමූහයකි.",
          "තේ යන්ත්‍ර උපමාව: Input (තේ කොළ, සීනි, වතුර) -> Process (රත් වී මිශ්‍ර වීම) -> Output/Return (උණුසුම් තේ කෝප්පය).",
          "Parameters: ශ්‍රිතය සාදන විට වරහන් තුළ ලියන විචල්‍ය නාමයයි (පෙට්ටියක් වැනිය).",
          "Arguments: ශ්‍රිතය ක්‍රියාත්මක කරන විට ලබා දෙන සැබෑ අගයයි.",
          "return: ශ්‍රිතයෙන් ප්‍රතිඵලය ආපසු ලබා දෙයි. return ක්‍රියාත්මක වූ සැණින් ශ්‍රිතය එතැනින් අවසන් වේ.",
          "Function Scope: ශ්‍රිතයක් ඇතුළත සාදන විචල්‍යයන් එම ශ්‍රිතයෙන් පිටතදී භාවිතා කළ නොහැක."
        ],
        codeSnippet: {
          language: "javascript",
          code: `function calculateArea(width, height) {
  const area = width * height;
  return area;
}

const tableArea = calculateArea(10, 5);
console.log("මේසයේ වර්ගඵලය: " + tableArea); // 50`
        }
      }
    ],
    keyPoints: [
      "DRY මූලධර්මය: එකම දේ දෙපාරකට වඩා ලියනවා නම් වහාම එය ශ්‍රිතයක් බවට පත් කරන්න.",
      "Parameters යනු Input වන අතර Return යනු Output වේ.",
      "ශ්‍රිතයේ නම සැමවිටම ක්‍රියා පදයකින් (Verb) ආරම්භ කරන්න (calculateTotal, fetchData)."
    ],
    exercises: [
      "අංකයක් ලබා දුන් විට එහි වර්ගඵලය (Square) ගණනය කර ආපසු ලබා දෙන (return) ශ්‍රිතයක් ලියන්න.",
      "පරිශීලකයාගේ නම සහ උපන් වර්ෂය පරාමිතීන් ලෙස ගෙන වයස ගණනය කරන ශ්‍රිතයක් ලියන්න."
    ]
  },
  {
    id: "ch-36",
    chapterNumber: 36,
    title: "අරාවන් - දත්ත ලැයිස්තු කළමනාකරණය",
    englishTitle: "Arrays and Array Methods",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 110,
    learningObjectives: [
      "අරාවක් (Array) යනු කුමක්දැයි තේරුම් ගැනීම.",
      "අරාවක් ප්‍රකාශ කරන ආකාරය [ ].",
      "දර්ශකය (Index) සහ 0 සිට ගණන් කිරීමේ වැදගත්කම.",
      "අරාවක ඇති දත්ත ලබා ගැනීම, වෙනස් කිරීම සහ දිග (.length).",
      "මූලික අරා ක්‍රමවේද: push, pop, shift, unshift.",
      "අරාවක් සහ ලූප්ස් එකට භාවිතා කරන ආකාරය."
    ],
    sections: [
      {
        title: "36.1 බිත්තර පැකට්ටු උපමාව සහ Array Methods",
        content: [
          "Array යනු එකම විචල්‍ය නාමයක් යටතේ අගයන් සමූහයක් ලැයිස්තුවක් ලෙස ගබඩා කළ හැකි දත්ත ව්‍යුහයකි (බිත්තර 12ක් එක පෙළට තැබිය හැකි ඇසුරුමක් වැනිය).",
          "0-based Indexing: පළමු අගය ඇත්තේ [0] ස්ථානයේය.",
          "ප්‍රධාන Array Methods:",
          "• push(item): අරාවේ අගට අලුත් අගයක් එකතු කරයි.",
          "• pop(): අරාවේ අග ඇති අගය ඉවත් කරයි.",
          "• unshift(item): අරාවේ මුලට අලුත් අගයක් එකතු කරයි.",
          "• shift(): අරාවේ මුලින්ම ඇති අගය ඉවත් කරයි.",
          "• .length: අරාවේ අයිතම ගණන ලබා දෙයි. අවසාන අයිතමය ලබා ගැනීමට arr[arr.length - 1] භාවිතා කරයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange"); // අගට එකතු වේ
fruits.unshift("Strawberry"); // මුලට එකතු වේ

for (let i = 0; i < fruits.length; i++) {
  console.log(\`\${i}: \${fruits[i]}\`);
}`
        }
      }
    ],
    keyPoints: [
      "අරාවක ගණන් කිරීම 0 සිට ආරම්භ වේ (Index 0).",
      "push/pop අගට වැඩ කරන අතර, unshift/shift මුලට වැඩ කරයි.",
      ".length මගින් අරාවේ ඇති මුළු අයිතම ගණන ලබා දෙයි."
    ],
    exercises: [
      "ඔබේ මිතුරන් පස් දෙනෙකුගේ නම් අඩංගු අරාවක් සාදන්න.",
      "ලූප් එකක් භාවිතා කර එම අරාවේ ඇති සියලුම නම් 'මගේ මිතුරා: [නම]' ලෙස පෙන්වන්න."
    ]
  },
  {
    id: "ch-37",
    chapterNumber: 37,
    title: "වස්තූන් - සැබෑ ලෝකයේ දත්ත නිරූපණය",
    englishTitle: "Objects in JavaScript",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 113,
    learningObjectives: [
      "වස්තුවක් (Object) යනු කුමක්ද සහ එහි වැදගත්කම.",
      "අරාවක් (Array) සහ වස්තුවක් (Object) අතර ඇති ප්‍රධාන වෙනස.",
      "යතුරු-අගය යුගල (Key-Value Pairs).",
      "Dot notation සහ Bracket notation.",
      "වස්තු ක්‍රමවේද හෙවත් මෙතඩ්ස් (Methods) සහ this මූලපදය.",
      "වස්තුවක් තුළ තවත් වස්තුවක් (Nested Objects)."
    ],
    sections: [
      {
        title: "37.1 Objects, Methods සහ this Keyword",
        content: [
          "Object යනු සැබෑ ලෝකයේ ඕනෑම දෙයක් (මිනිසෙකු, මෝටර් රථයක්) ගුණාංග (Properties) සහ ක්‍රියාකාරකම් (Methods) සහිතව එකම ස්ථානයක ගබඩා කරන දත්ත වර්ගයයි.",
          "Array vs Object: Array හි අංක (0, 1, 2) මගින් දත්ත ලබා ගන්නා අතර Object හි නම් (Keys) භාවිතා කරයි.",
          "Dot notation: student.firstName",
          "Bracket notation: student[\"firstName\"]",
          "this keyword: වස්තුවක් ඇතුළත ඇති ශ්‍රිතයකදී එම වස්තුවේම වෙනත් ගුණාංග භාවිතා කිරීමට this යොදාගනී."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const student = {
  firstName: "Kasun",
  lastName: "Kalhara",
  age: 16,
  isStudent: true,
  subjects: ["Maths", "ICT", "Science"],
  greet: function() {
    return \`ආයුබෝවන්, මගේ නම \${this.firstName} \${this.lastName}\`;
  }
};

console.log(student.greet());`
        }
      }
    ],
    keyPoints: [
      "වස්තූන් යනු Key-Value යුගල ලෙස දත්ත ගබඩා කරන ව්‍යුහයකි.",
      "Properties මගින් දත්ත විස්තර කරන අතර Methods මගින් ක්‍රියාවන් පෙන්වයි.",
      "නූතන වෙබ් සංවර්ධනයේදී API හරහා ලැබෙන දත්ත සියල්ලම පාහේ JSON Objects වේ."
    ],
    exercises: [
      "ජංගම දුරකථනයක් (Brand, Model, Price, Storage) පිළිබඳ තොරතුරු අඩංගු Object එකක් සාදන්න.",
      "එම Object එකට checkBattery නමින් Method එකක් එකතු කර 'Battery level is 80%' පෙන්වන්න."
    ]
  },
  {
    id: "ch-38",
    chapterNumber: 38,
    title: "ඩොම් පාලනය - වෙබ් පිටුවට පණ ලබා දීම",
    englishTitle: "DOM Manipulation - Giving Life to the Web Page",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 116,
    learningObjectives: [
      "ඩොම් (DOM - Document Object Model) යනු කුමක්දැයි තේරුම් ගැනීම.",
      "DOM Tree සංකල්පය.",
      "මූලිකාංග තෝරා ගැනීම: getElementById, querySelector.",
      "අන්තර්ගතය වෙනස් කිරීම: innerText සහ innerHTML.",
      "හැඩතල වෙනස් කිරීම: .style ගුණාංගය (camelCase).",
      "අලුතින් HTML ටැග් සෑදීම: createElement සහ appendChild."
    ],
    sections: [
      {
        title: "38.1 DOM යනු කුමක්ද සහ Elements හැසිරවීම",
        content: [
          "DOM (Document Object Model) යනු බ්‍රවුසරය විසින් HTML ගොනුව කියවා මතකය තුළ සාදා ගන්නා 'සිතියමයි'.",
          "උපමාව: HTML පිටුව රූපවාහිනිය වැනිය. DOM යනු රූපවාහිනිය ඇතුළත පරිපථයයි. JavaScript යනු Remote Control එකයි.",
          "තෝරාගැනීම:",
          "• document.getElementById('myId')",
          "• document.querySelector('.myClass')",
          "• document.querySelectorAll('p')",
          "අන්තර්ගතය වෙනස් කිරීම:",
          "• innerText: අකුරු පමණක් වෙනස් කිරීමට.",
          "• innerHTML: ඇතුළත අලුත් HTML ටැග් සමඟ වෙනස් කිරීමට (XSS ප්‍රහාර වලින් ප්‍රවේශම් වන්න).",
          "CSS හැඩතල වෙනස් කිරීම: el.style.backgroundColor = 'blue'; (background-color වෙනුවට camelCase)."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const title = document.getElementById("title");
title.innerText = "ඔබ සාර්ථකව වෙනස් කළා!";
title.style.color = "#2563eb";
title.style.fontSize = "32px";`
        }
      }
    ],
    keyPoints: [
      "document වස්තුව මගින් මුළු HTML පිටුවටම පිවිසෙයි.",
      "querySelector මගින් CSS Selectors භාවිතා කර ඕනෑම ටැග් එකක් තෝරාගත හැක.",
      "පරිශීලකයා ලබා දෙන දත්ත සෘජුවම innerHTML තුළට ඇතුළත් නොකරන්න."
    ],
    exercises: [
      "HTML හි ඇති ඡේදයක අකුරු නිල් පාට කිරීමට අවශ්‍ය JavaScript කේතය ලියන්න.",
      "innerText සහ innerHTML අතර ඇති ප්‍රධාන වෙනස කුමක්ද?"
    ]
  },
  {
    id: "ch-39",
    chapterNumber: 39,
    title: "සිදුවීම් පාලනය - පරිශීලකයා සමඟ ගනුදෙනු කිරීම",
    englishTitle: "Event Handling in JavaScript",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 118,
    learningObjectives: [
      "සිදුවීමක් (Event) යනු කුමක්දැයි වටහා ගැනීම.",
      "ප්‍රධාන සිදුවීම්: click, input, submit, mouseover, keypress.",
      "addEventListener() නමැති වෘත්තීය ක්‍රමවේදය.",
      "සිදුවීම් වස්තුව (Event Object - e).",
      "e.preventDefault() මගින් පිටුව Refresh වීම නැවැත්වීම."
    ],
    sections: [
      {
        title: "39.1 Event Listeners සහ Event Object (e)",
        content: [
          "සිදුවීමක් (Event) යනු බ්‍රවුසරය තුළ සිදුවන යම් ක්‍රියාවක් හෝ අවස්ථාවකි (ක්ලික් කිරීම, යතුරු එබීම).",
          "දොර සීනුව උපමාව: අමුත්තා සීනුව ඔබයි (Event) -> සීනුවේ විදුලි පරිපථය එය හඳුනාගනී (Listener) -> 'ඩිං ඩොං' හඬ ඇසේ (Callback function / Action).",
          "addEventListener Syntax:",
          "element.addEventListener('click', function(e) { ... });",
          "Event Object (e): ක්ලික් කළ ස්ථානය, වේලාව, එබූ යතුර වැනි සියලු තොරතුරු අඩංගු වේ.",
          "Forms වලදී පිටුව Refresh වීම නැවැත්වීමට e.preventDefault() භාවිතා කරයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const btn = document.getElementById("toggleBtn");
const body = document.body;

btn.addEventListener("click", (e) => {
  body.classList.toggle("dark-mode");
  console.log("ක්ලික් කළ ස්ථානය X:", e.clientX, "Y:", e.clientY);
});`
        }
      }
    ],
    keyPoints: [
      "addEventListener යනු සිදුවීම් හසුරුවන වෘත්තීය ක්‍රමයයි.",
      "onclick වෙනුවට addEventListener('click', ...) භාවිතා කළ යුතුය.",
      "e.preventDefault() පිටුව Refresh වීම වළක්වයි."
    ],
    exercises: [
      "පින්තූරයක් මතට මවුසය ගෙන ගිය විට පළල වැඩි වන සේ Event Listener එකක් ලියන්න.",
      "Input කොටුවක යමක් ටයිප් කරන විට එම අකුරු තත්‍ය කාලීනව (Real-time) පහළින් ඇති ඡේදයක පෙන්වන්න."
    ]
  },
  {
    id: "ch-40",
    chapterNumber: 40,
    title: "ප්‍රායෝගික ව්‍යාපෘතිය - වැඩ ලැයිස්තු පද්ධතිය (To-Do List)",
    englishTitle: "Capstone Project - To-Do List Application",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 121,
    learningObjectives: [
      "පරිමාව 3 තුළ ඉගෙන ගත් සියලුම ජාවාස්ක්‍රිප්ට් සංකල්ප (Variables, Functions, Arrays, DOM, Events) එක් කර සැබෑ යෙදුමක් නිර්මාණය කිරීම.",
      "මෘදුකාංගයක් නිර්මාණය කිරීමට පෙර එහි තර්කනය (Logic) සැලසුම් කිරීම.",
      "Dynamic Elements සෑදීම සහ ඉවත් කිරීම (createElement, remove).",
      "classList.toggle මගින් තත්ත්වයන් කළමනාකරණය."
    ],
    sections: [
      {
        title: "40.1 To-Do List App නිර්මාණය සහ කේත විග්‍රහය",
        content: [
          "මෙම මෘදුකාංගයෙන් කළ හැකි දේ:",
          "1. පරිශීලකයාට තමා කිරීමට ඇති වැඩක් (Task) ටයිප් කර එකතු කළ හැක.",
          "2. එකතු කළ වැඩ සියල්ල ලැයිස්තුවක් ලෙස පෙනේ.",
          "3. වැඩක් කර අවසන් වූ පසු ක්ලික් කර එය 'සම්පූර්ණයි' (Completed) ලෙස සලකුණු කළ හැක.",
          "4. අවශ්‍ය නොවන වැඩ ලැයිස්තුවෙන් මකා දැමිය හැක."
        ],
        codeSnippet: {
          language: "javascript",
          code: `const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("කරුණාකර වැඩක් ඇතුළත් කරන්න!");
    return;
  }
  
  const li = document.createElement("li");
  li.innerText = taskValue;
  
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "මකන්න";
  deleteBtn.addEventListener("click", () => li.remove());
  
  li.addEventListener("click", () => li.classList.toggle("completed"));
  
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});`
        }
      }
    ],
    keyPoints: [
      "createElement සහ appendChild මගින් වෙබ් පිටුවට ගතිකව කොටස් එක් කළ හැක.",
      "අලුතින් හදන මූලිකාංග වලට (Dynamic elements) Event Listeners එකතු කළ යුත්තේ ඒවා නිර්මාණය කරන අවස්ථාවේදීමය."
    ],
    exercises: [
      "To-Do List එකට 'සියල්ල මකන්න' (Clear All) බොත්තමක් එක් කරන්න.",
      "එක් එක් වැඩක් එකතු කළ විට, එය එකතු කළ වේලාවද (new Date()) ඒ අසලින් පෙන්වන්න."
    ]
  },
  {
    id: "ch-41",
    chapterNumber: 41,
    title: "ජාවාස්ක්‍රිප්ට් ඉංජිනේරු විද්‍යාව - එන්ජිම ඇතුළත සිදුවන රහස්",
    englishTitle: "JavaScript Engineering - Under the Hood",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 125,
    learningObjectives: [
      "V8 එන්ජිමේ පියවර 3: Parsing (AST), JIT Compilation, Execution.",
      "Execution Context (GEC) සහ Memory vs Code Components.",
      "Hoisting රහස: var vs let/const (Temporal Dead Zone).",
      "The Call Stack: Single-threaded ස්වභාවය.",
      "The Event Loop: Microtasks සහ Callback Queue හරහා අසමමුහුර්ත වැඩ සිදුවන ආකාරය.",
      "Closures (ක්ලෝෂර්ස්): ශ්‍රිතයක් තමා උපන් වටපිටාව මතක තබා ගැනීමේ මායාව."
    ],
    sections: [
      {
        title: "41.1 Execution Context, Hoisting සහ Event Loop",
        content: [
          "Execution Context: JS ගොනුවක් ක්‍රියාත්මක වන විට නිර්මාණය වන පරිසරයයි. මෙහි Memory Component (විචල්‍යයන් සහ ශ්‍රිත key:value ලෙස ගබඩා වේ) සහ Code Component (පේළියෙන් පේළිය ක්‍රියාත්මක වන Thread of Execution) ඇත.",
          "Hoisting: කේතය ක්‍රියාත්මක වීමට පෙර මතකය සූදානම් කිරීමයි. var මගින් හදන විචල්‍යයන්ට undefined අගය ලැබෙන අතර, ශ්‍රිත සම්පූර්ණයෙන්ම මතකයේ තැන්පත් වේ. let සහ const වලදීද Hoisting සිදු වුවද Temporal Dead Zone නිසා ඒවාට පිවිසීමට ඉඩ නොදෙයි.",
          "Event Loop: අසමකාලීන වැඩ (setTimeout, fetch) Web APIs වෙත යවා, අවසන් වූ පසු Callback Queue එකට දමා, Call Stack එක හිස් වූ සැණින් ඒවා ක්‍රියාත්මක කරයි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `// Closure උදාහරණය
function createWallet() {
  let balance = 100;
  return {
    getBalance: () => balance,
    spend: (amt) => { balance -= amt; }
  };
}

const myWallet = createWallet();
myWallet.spend(30);
console.log(myWallet.getBalance()); // 70 (balance විචල්‍යය මතකයේ පවතී!)`
        }
      }
    ],
    keyPoints: [
      "Call Stack එක තනි නූලක් (Single-threaded) ලෙස එක වරකට එක වැඩක් පමණක් කරයි.",
      "Event Loop මගින් වෙබ් අඩවිය හිර නොවී අසමකාලීන වැඩ පාලනය කරයි.",
      "Closure මගින් ශ්‍රිතවලට තම මුල් Scope එක ආරක්ෂා කර තබා ගත හැක."
    ],
    exercises: [
      "console.log('1'); setTimeout(() => console.log('2'), 0); console.log('3'); හි ප්‍රතිඵල පිළිවෙළ අනුමාන කර Call Stack ඇසුරින් පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-42",
    chapterNumber: 42,
    title: "දත්ත හැසිරවීමේ රහස්, ගැඹුරු Scope සහ DOM Traversal",
    englishTitle: "Advanced Scope, DOM Traversal & Value vs Reference",
    volumeId: 3,
    volumeTitle: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
    pageNumber: 128,
    learningObjectives: [
      "String Methods (trim, slice, replace, toUpperCase) සහ Math Object (round, floor, ceil, random).",
      "Scope Hierarchy: Global, Function, සහ Block Scope.",
      "DOM Traversal: parentElement, children, nextElementSibling, previousElementSibling.",
      "Value vs Reference: Primitive Types සහ Reference Types මතකයේ ගබඩා වන ආකාරය.",
      "Prototypes සහ Prototype Chain.",
      "reduce() ශ්‍රිත ප්‍රවීණත්වය සහ Call, Apply, Bind."
    ],
    sections: [
      {
        title: "42.1 Value vs Reference සහ Prototypes",
        content: [
          "Value vs Reference:",
          "• Primitive (Number, String): අගය (Value) පිටපත් වේ. එකක් වෙනස් කළ විට අනෙක වෙනස් නොවේ.",
          "• Reference (Array, Object): මතකයේ ඇති ලිපිනය (Reference) පිටපත් වේ. එකක් වෙනස් කළ විට දෙකම වෙනස් වේ! (ආරක්ෂිත පිටපතක් සෑදීමට [...arr] හෝ {...obj} Spread Operator භාවිතා කරන්න).",
          "Prototypes: සෑම JavaScript වස්තුවකටම [[Prototype]] නමැති රහසිගත සබැඳියක් ඇත. වස්තුවක නැති දෙයක් සෙවීමේදී JS එන්ජිම එහි Prototype එක වෙත ගොස් සොයයි (Prototype Chain)."
        ],
        codeSnippet: {
          language: "javascript",
          code: `// Array.reduce() මගින් එකතුව සෙවීම
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("මුළු එකතුව:", total); // 100

// Spread Operator මගින් ආරක්ෂිතව Array පිටපත් කිරීම
const original = [1, 2, 3];
const copy = [...original, 4];`
        }
      }
    ],
    keyPoints: [
      "Arrays සහ Objects හැසිරෙන්නේ ලිපින (Reference) හරහාය.",
      "DOM Traversal මගින් මුළු වෙබ් පිටුව පුරාම ගමන් කළ හැක.",
      "reduce යනු දත්ත ගොනුවක් තනි අගයකට කළමනාකරණය කිරීමට ඇති බලවත්ම ශ්‍රිතයයි."
    ],
    exercises: [
      "Math.random() භාවිතයෙන් 1 සහ 100 අතර අහඹු පූර්ණ සංඛ්‍යාවක් ලබා ගන්නා කේතයක් ලියන්න.",
      "reduce() භාවිතා කර අරාවක ඇති සියලුම ඉලක්කම්වල ගුණිතය සොයන්න."
    ]
  }
];
