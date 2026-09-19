import { Volume } from '../../types';

export const volume3: Volume = {
  id: 3,
  volumeNumber: 3,
  title: "ජාවාස්ක්‍රිප්ට් මූලධර්ම",
  englishTitle: "JavaScript Fundamentals",
  color: "from-yellow-500/20 via-amber-500/10 to-orange-500/20",
  iconName: "FileCode",
  badge: "Core JavaScript & DOM",
  description: "JavaScript හැඳින්වීම, විචල්‍යයන් (let/const), දත්ත වර්ග, ක්‍රියාකාරුවන්, පාලන ව්‍යුහ, ලූප්ස්, ශ්‍රිත, අරාවන්, වස්තූන්, DOM Manipulation, සිදුවීම් පාලනය සහ To-Do List ව්‍යාපෘතිය.",
  chapterCount: 16,
  pageRange: "පිටු 88 - 133",
  chapters: [
    {
      id: 28,
      volumeId: 3,
      chapterNumber: 28,
      title: "ජාවාස්ක්‍රිප්ට් හැඳින්වීම සහ ඉතිහාසය",
      englishTitle: "Introduction and History of JavaScript",
      pageRange: "පිටු 88 - 89",
      description: "වෙබ් අඩවියකට 'බුද්ධිය' සහ 'පණ' ලබා දෙන භාෂාව, Brendan Eich සහ දින 10ක ආශ්චර්යය, Java vs JavaScript, සහ V8 Engine.",
      learningObjectives: [
        "ජාවාස්ක්‍රිප්ට් (JavaScript) යනු වෙබ් අඩවි වලට අන්තර්ක්‍රියාකාරී බව (Interactivity) ලබා දෙන ක්‍රමලේඛන භාෂාව බව තේරුම් ගැනීම",
        "HTML (සැකිල්ල), CSS (හැඩය/ඇඳුම්) සහ JavaScript (ක්‍රියාව/මොළය) අතර ත්‍රිකෝණාකාර සම්බන්ධය",
        "1995 දී බ්‍රෙන්ඩන් අයික් විසින් දින 10ක් ඇතුළත JavaScript නිර්මාණය කළ ඉතිහාසය",
        "Java සහ JavaScript යනු කිසිදු සම්බන්ධයක් නැති සම්පූර්ණයෙන්ම වෙනස් භාෂා දෙකක් බව වටහා ගැනීම",
        "බ්‍රවුසර තුළ ඇති JavaScript Engine (Chrome: V8, Firefox: SpiderMonkey) ක්‍රියා කරන අයුරු"
      ],
      sections: [
        {
          title: "28.1 ජාවාස්ක්‍රිප්ට් යනු කුමක්ද සහ මෝටර් රථ උපමාව",
          content: [
            "HTML මඟින් වෙබ් අඩවියේ ශරීරයත්, CSS මඟින් එහි හැඩයත් නිර්මාණය කරන විට, ජාවාස්ක්‍රිප්ට් මඟින් එම ශරීරයේ 'හැසිරීම' (Behavior) තීරණය කරයි.",
            "සැබෑ ලෝකයේ උපමාව (මෝටර් රථයක්):",
            "• HTML: මෝටර් රථයේ ඇටසැකිල්ල, රෝද, දොරවල් සහ එන්ජිම තිබෙන තැන පෙන්වයි.",
            "• CSS: රථයේ වර්ණය, සීට් වල ඇති ලස්සන සහ පෙනුම තීරණය කරයි.",
            "• JavaScript: රථයේ එන්ජිම ක්‍රියා කරන ආකාරය, බ්‍රේක් අල්ලන ආකාරය සහ ලයිට් දැල්වීමේ ක්‍රියාවලිය පාලනය කරයි."
          ],
          asciiDiagram: `+-------------------------------------------------------------+
|                     වෙබ් අඩවිය (Website)                    |
+-------------------------------------------------------------+
| [ HTML ] <------- සැකිල්ල (ඇටසැකිල්ල වැනිය)                 |
| [ CSS  ] <------- හැඩය (සම සහ ඇඳුම් වැනිය)                   |
| [ JS   ] <------- ක්‍රියාව (මොළය සහ මාංශ පේශී වැනිය)        |
+-------------------------------------------------------------+`
        }
      ],
      keyPoints: [
        "ජාවා සහ ජාවාස්ක්‍රිප්ට් යනු 'කාර්' සහ 'කාපට්' මෙන් එකිනෙකට වෙනස් භාෂා දෙකකි.",
        "JavaScript යනු Interpreted භාෂාවකි; බ්‍රවුසරය විසින් එය එසැණින් කියවා ක්‍රියාත්මක කරයි."
      ],
      exercises: [
        { id: 1, question: "වෙබ් අඩවියක HTML, CSS සහ JavaScript වල කාර්යභාරයන් වෙන් වෙන්ව පැහැදිලි කරන්න." }
      ]
    },
    {
      id: 29,
      volumeId: 3,
      chapterNumber: 29,
      title: "වැඩබිම සැකසීම සහ ප්‍රථම ජාවාස්ක්‍රිප්ට් කේතය",
      englishTitle: "Environment Setup & Your First JavaScript Code",
      pageRange: "පිටු 90 - 92",
      description: "Inline, Internal, External (<script src>) ක්‍රම 3, Browser Console, console.log() සහ Comments.",
      learningObjectives: [
        "ජාවාස්ක්‍රිප්ට් ලිවීමට බාහිර ගොනුවක් (.js) භාවිතා කිරීමේ වෘත්තීය වාසි",
        "බ්‍රවුසරයේ Console (කොන්සෝලය) විවෘත කිරීම සහ console.log() විධානය",
        "Single-line (//) සහ Multi-line (/* */) Comments භාවිතය",
        "<script> ටැගය </body> ට මදක් ඉහළින් තැබීමෙන් වෙබ් අඩවියේ වේගය වැඩි වන අයුරු"
      ],
      sections: [
        {
          title: "29.1 console.log() සහ කොන්සෝලය",
          content: [
            "console.log() යනු සංවර්ධකයෙකුට බ්‍රවුසරය සමඟ 'කතා කිරීමට' ඇති පණිවිඩ පුවරුවයි. අප ලියන කේතයේ ප්‍රතිඵල බැලීමට සහ වැරදි (Errors) හඳුනා ගැනීමට මෙය යොදයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "First JS Code (script.js)",
              code: `// කොන්සෝලයට පණිවිඩයක් මුද්‍රණය කිරීම
console.log("ආයුබෝවන් ජාවාස්ක්‍රිප්ට්!");
console.log(10 + 20); // ගණිතමය ගණනය කිරීම් (පිළිතුර: 30)`
            }
          ]
        }
      ],
      keyPoints: [
        "ජාවාස්ක්‍රිප්ට් Case Sensitive වේ: console.log නිවැරදියි, Console.log වැරදියි.",
        "වෘත්තීය මට්ටමේදී External .js ගොනු පමණක් භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "<script> ටැගය පිටුවේ පතුලේ </body> ට පෙර තැබීමේ වාසිය කුමක්ද?" }
      ]
    },
    {
      id: 30,
      volumeId: 3,
      chapterNumber: 30,
      title: "විචල්‍යයන් - දත්ත ගබඩා කිරීම (Variables)",
      englishTitle: "Variables - Storing Data in Memory",
      pageRange: "පිටු 92 - 95",
      description: "විචල්‍යයක් යනු කුමක්ද (කුස්සියේ බෝතල් උපමාව), var vs let vs const, camelCase නාමකරණ සම්ප්‍රදාය.",
      learningObjectives: [
        "විචල්‍යයක් (Variable) යනු දත්තයක් ගබඩා කර තබන මතක පෙට්ටියක් බව වටහා ගැනීම",
        "var (පැරණි), let (වෙනස් කළ හැකි) සහ const (ස්ථාවර) අතර වෙනස",
        "camelCase නාමකරණ නීති (firstName, userLoginStatus)",
        "විචල්‍යයක් සාදන විට සැමවිටම const ලෙස සාදා, අගය වෙනස් වන්නේ නම් පමණක් let බවට හැරවීම"
      ],
      sections: [
        {
          title: "30.1 let සහ const භාවිතය",
          content: [
            "• const: වරක් අගයක් ලබා දුන් පසු කිසිම විටක වෙනස් කළ නොහැක.",
            "• let: පසුව අගය වෙනස් කිරීමට අවශ්‍ය විට භාවිතා කරයි.",
            "කුස්සියේ උපමාව: බෝතලයකට අලවා ඇති 'සීනි' ලේබලය Variable Name වන අතර, ඇතුළත ඇති සීනි Value (අගය) වේ."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Variables Example",
              code: `const country = "Sri Lanka"; // ස්ථාවරයි
let currentYear = 2026;         // වෙනස් කළ හැක

currentYear = 2027; // නිවැරදියි
// country = "India"; // ❌ TypeError: Assignment to constant variable`
            }
          ]
        }
      ],
      keyPoints: [
        "විචල්‍ය නාමයක් අංකයකින් පටන් ගත නොහැක (උදා: 1name වැරදියි, name1 නිවැරදියි).",
        "හිස්තැන් තැබිය නොහැක; camelCase භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "ඔබගේ උපන් වසර ගබඩා කිරීමට සුදුසු let ද const ද? හේතුව ලියන්න." }
      ]
    },
    {
      id: 31,
      volumeId: 3,
      chapterNumber: 31,
      title: "දත්ත වර්ග - දත්ත හඳුනා ගැනීම (Data Types)",
      englishTitle: "Data Types & Primitive Types",
      pageRange: "පිටු 95 - 98",
      description: "Dynamic Typing, ප්‍රාථමික දත්ත වර්ග 7 (Number, String, Boolean, Undefined, Null, BigInt, Symbol), typeof operator.",
      learningObjectives: [
        "ජාවාස්ක්‍රිප්ට් හි Dynamic Typing හැසිරීම අවබෝධ කර ගැනීම",
        "Number, String, Boolean, Undefined සහ Null සවිස්තරාත්මකව ඉගෙන ගැනීම",
        "typeof මඟින් විචල්‍යයක දත්ත වර්ගය පරීක්ෂා කිරීම",
        "Undefined (අගයක් නොලැබූ) සහ Null (හිතාමතා හිස් කළ) අතර වෙනස"
      ],
      sections: [
        {
          title: "31.1 ප්‍රාථමික දත්ත වර්ග",
          content: [
            "• Number: පූර්ණ හා දශම සංඛ්‍යා (16, 99.50, NaN).",
            "• String: උද්ධෘත ලකුණු (' ' හෝ \" \" හෝ ` `) තුළ ලියන අකුරු වැල්.",
            "• Boolean: true හෝ false (තීරණ ගැනීමට).",
            "• Undefined: අගයක් ලබා දී නැති විට ලැබෙන අගයයි.",
            "• Null: හිතාමතාම 'කිසිවක් නැත' කියා පෙන්වීමට යොදයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Data Types & typeof",
              code: `let age = 20;
let name = "කසුන්";
let isStudent = true;
let x; // undefined
let car = null;

console.log(typeof age);   // "number"
console.log(typeof name);  // "string"
console.log(typeof isStudent); // "boolean"`
            }
          ]
        }
      ],
      keyPoints: [
        "typeof null යනු 'object' ලෙස පෙන්වීම ජාවාස්ක්‍රිප්ට් හි ඇති ඓතිහාසික දෝෂයකි (Bug).",
        "Strings සඳහා Backticks (`) භාවිතා කිරීම Template Literals සඳහා ඉතා ප්‍රයෝජනවත්ය."
      ],
      exercises: [
        { id: 1, question: "undefined සහ null අතර ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 32,
      volumeId: 3,
      chapterNumber: 32,
      title: "ක්‍රියාකාරුවන් - දත්ත සමඟ වැඩ කිරීම (Operators)",
      englishTitle: "Operators & Operator Precedence",
      pageRange: "පිටු 98 - 101",
      description: "Arithmetic (+, -, *, /, %), Assignment (+=, -=), Comparison (== vs ===, !=, !==, >, <), Logical (&&, ||, !), String Concatenation.",
      learningObjectives: [
        "ගණිතමය ක්‍රියාකාරුවන් (Arithmetic Operators) භාවිතය",
        "Modulus (%) මඟින් බෙදීමක ඉතිරිය සෙවීම",
        "== (Loose Equality) සහ === (Strict Equality) අතර වෙනස — වෘත්තීය මට්ටමේදී === පමණක් භාවිතය",
        "Logical Operators: && (AND), || (OR), ! (NOT)",
        "ක්‍රියාකාරුවන් ක්‍රියාත්මක වීමේ ප්‍රමුඛතාවය (BODMAS)"
      ],
      sections: [
        {
          title: "32.1 == එදිරිව === (Strict Equality)",
          content: [
            "• == (Loose): දත්ත වර්ගය නොසලකා අගය පමණක් බලයි. '5' == 5 ➔ true.",
            "• === (Strict): අගය සහ දත්ත වර්ගය (Data Type) යන දෙකම සමාන දැයි බලයි. '5' === 5 ➔ false.",
            "වෘත්තීය උපදෙස: සැමවිටම === භාවිතා කරන්න! එය අනපේක්ෂිත දෝෂ වළක්වයි."
          ]
        }
      ],
      keyPoints: [
        "+ ලකුණ අංක සමඟ භාවිතා කළ විට එකතු කිරීම ද, අකුරු (Strings) සමඟ භාවිතා කළ විට එකට ඇලවීම (Concatenation) ද සිදු කරයි.",
        "&& හිදී සියලු කොන්දේසි සත්‍ය විය යුතුය; || හිදී එක් කොන්දේසියක් සත්‍ය වීම ප්‍රමාණවත්ය."
      ],
      exercises: [
        { id: 1, question: "10 % 3 හි පිළිතුර කුමක්ද? එය පැහැදිලි කරන්න." }
      ]
    },
    {
      id: 33,
      volumeId: 3,
      chapterNumber: 33,
      title: "පාලන ව්‍යුහයන් - තීරණ ගැනීම (Control Flow)",
      englishTitle: "Control Flow - Decisions (if, else, switch, ternary)",
      pageRange: "පිටු 101 - 104",
      description: "if, else if, else, Truthy & Falsy අගයන්, switch statement, Ternary Operator (? :), සහ ATM මුදල් ගැනීමේ තර්කනය.",
      learningObjectives: [
        "පාලන ප්‍රවාහය (Control Flow) යනු කොන්දේසි මත පදනම්ව කේතය ක්‍රියාත්මක කිරීම බව තේරුම් ගැනීම",
        "if, else if, else මඟින් බහු කොන්දේසි පරීක්ෂා කිරීම",
        "Falsy අගයන් 6: false, 0, '', null, undefined, NaN",
        "Ternary Operator: කොන්දේසිය ? සත්‍ය_නම් : අසත්‍ය_නම්;",
        "switch statement සහ break හි වැදගත්කම"
      ],
      sections: [
        {
          title: "33.1 Truthy & Falsy අගයන් සහ Ternary Operator",
          content: [
            "ජාවාස්ක්‍රිප්ට් හි සෑම අගයකටම සහජයෙන්ම සත්‍ය හෝ අසත්‍ය බවක් ඇත. Falsy අගයන් 6 හැර අනෙක් ඕනෑම අගයක් (ඕනෑම අංකයක්, ඕනෑම අකුරක්) Truthy ලෙස සලකයි.",
            "Ternary Operator උදාහරණය:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Ternary & if/else Logic",
              code: `let age = 20;
let message = (age >= 18) ? "වැඩිහිටියෙකි" : "කුඩා දරුවෙකි";
console.log(message); // "වැඩිහිටියෙකි"`
            }
          ]
        }
      ],
      keyPoints: [
        "switch එකේ break නොලියුවහොත් ඊළඟ case එක ස්වයංක්‍රීයව ක්‍රියාත්මක වේ.",
        "if (x = 5) වැරදියි (එය ආදේශ කිරීමකි); if (x === 5) නිවැරදියි."
      ],
      exercises: [
        { id: 1, question: "ජාවාස්ක්‍රිප්ට් හි Falsy අගයන් 6 නම් කරන්න." }
      ]
    },
    {
      id: 34,
      volumeId: 3,
      chapterNumber: 34,
      title: "පුඩු හෙවත් ලූප්ස් - නැවත නැවත සිදුවන ක්‍රියා (Loops)",
      englishTitle: "Loops - for, while, do-while & Control",
      pageRange: "පිටු 105 - 107",
      description: "for loop (ආරම්භය; කොන්දේසිය; වැඩිවීම), while loop, do-while, break & continue, සහ ගුණන වගු ව්‍යාපෘතිය.",
      learningObjectives: [
        "ලූප්ස් (Loops) යනු නිශ්චිත වාර ගණනක් එකම කේතය නැවත නැවත ක්‍රියාත්මක කිරීම බව තේරුම් ගැනීම",
        "for ලූප් එකේ කොටස් 3 (Initialization, Condition, Increment)",
        "while සහ do-while අතර වෙනස (අවම වශයෙන් එක් වරක් හෝ ධාවනය වීම)",
        "break මඟින් ලූප් එකෙන් පිටවීම සහ continue මඟින් වත්මන් පියවර මඟහැරීම",
        "Infinite Loop (අනන්ත පුඩු) අනතුර වළක්වා ගැනීම"
      ],
      sections: [
        {
          title: "34.1 for Loop ක්‍රියාකාරීත්වය",
          content: [
            "සිතන්න ගුරුවරයා ඔබට 'මම නැවත පන්තියේ කතා නොකරමි' කියා 100 වතාවක් ලිවීමට පැවසුවා කියා. මිනිසෙකුට එය වෙහෙසකර නමුත් පරිගණකයකට තත්පරයෙන් දහයෙන් පංගුවකදී කළ හැක."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "for Loop Example (1 to 5)",
              code: `for (let i = 1; i <= 5; i++) {
  console.log("අංකය: " + i);
}`
            }
          ]
        }
      ],
      keyPoints: [
        "ලූප් එකක් ඇතුළත විචල්‍යයන් සෑදීමේදී සැමවිටම let භාවිතා කරන්න.",
        "කොන්දේසිය කිසිදා අසත්‍ය නොවුවහොත් Infinite Loop එකක් සෑදී බ්‍රවුසරය හිර වේ (Crash)."
      ],
      exercises: [
        { id: 1, question: "break සහ continue අතර ඇති වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 35,
      volumeId: 3,
      chapterNumber: 35,
      title: "ශ්‍රිත හෙවත් ෆන්ක්ෂන්ස් - කේතය නැවත භාවිතා කිරීම (Functions)",
      englishTitle: "Functions - Code Reusability & Scope",
      pageRange: "පිටු 107 - 110",
      description: "Functions, DRY සංකල්පය, තේ යන්ත්‍ර උපමාව (Input, Process, Output), Parameters vs Arguments, return, සහ Function Scope.",
      learningObjectives: [
        "ශ්‍රිතයක් (Function) යනු කුමක්ද සහ එය DRY සඳහා අත්‍යවශ්‍ය වන්නේ ඇයිද යන්න",
        "Function Declaration (function name() { }) සහ Function Calling (name())",
        "Parameters (පරාමිතීන් - පෙට්ටිය) සහ Arguments (තර්කයන් - අගය) අතර වෙනස",
        "return මඟින් අගයක් ආපසු ලබා දීම සහ Function Scope (Local Scope) වටහා ගැනීම"
      ],
      sections: [
        {
          title: "35.1 තේ යන්ත්‍ර උපමාව (The Tea Machine)",
          content: [
            "1. Input (ආදානය/පරාමිතීන්): ඔබ යන්ත්‍රයට තේ කොළ, සීනි සහ වතුර ලබා දෙයි.",
            "2. Process (සැකසීම): යන්ත්‍රය තුළ වතුර රත් වී, තේ කොළ සහ සීනි මිශ්‍ර වී තේ සෑදේ.",
            "3. Output (ප්‍රතිදානය/Return): ඔබට උණුසුම් තේ කෝප්පයක් ලැබේ.",
            "ඔබට තේ අවශ්‍ය සෑම වතාවකම යන්ත්‍රය අලුතින් සෑදීමට අවශ්‍ය නැත. ඔබ කළ යුත්තේ ද්‍රව්‍ය ලබා දී බොත්තම එබීම (Call) පමණි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Function with Parameters & Return",
              code: `function addNumbers(a, b) {
  let sum = a + b;
  return sum; // ප්‍රතිඵලය ආපසු එවයි
}

let result = addNumbers(10, 20);
console.log("පිළිතුර: " + result); // 30`
            }
          ]
        }
      ],
      keyPoints: [
        "return විධානය ක්‍රියාත්මක වූ සැණින් ශ්‍රිතය එතැනින් නතර වේ.",
        "ශ්‍රිතයක් ඇතුළත සාදන විචල්‍යයන් ඊට පිටතදී භාවිතා කළ නොහැක (Local Scope)."
      ],
      exercises: [
        { id: 1, question: "Parameters සහ Arguments අතර වෙනස ඔබේ වචනයෙන් පැහැදිලි කරන්න." }
      ]
    },
    {
      id: 36,
      volumeId: 3,
      chapterNumber: 36,
      title: "අරාවන් - දත්ත ලැයිස්තු කළමනාකරණය (Arrays)",
      englishTitle: "Arrays - Managing Data Lists",
      pageRange: "පිටු 110 - 112",
      description: "Array සංකල්පය (බිත්තර පැකට්ටුව උපමාව), Indexing (0 සිට ගණන් කිරීම), .length, Array Methods: push, pop, shift, unshift, සහ Arrays with Loops.",
      learningObjectives: [
        "අරාවක් (Array) යනු එකම විචල්‍ය නාමයක් යටතේ අගයන් සමූහයක් ගබඩා කළ හැකි ව්‍යුහයක් බව තේරුම් ගැනීම",
        "දර්ශකය (Index) 0 සිට ආරම්භ වන බව දැනගැනීම (Index 0)",
        "අරාවක දිග (.length) සහ අගයන් වෙනස් කිරීම",
        "මූලික Methods: push() (අගට එකතු කිරීම), pop() (අගින් ඉවත් කිරීම), unshift() (මුලට එකතු කිරීම), shift() (මුලින් ඉවත් කිරීම)"
      ],
      sections: [
        {
          title: "36.1 අරාවන් සහ Indexing",
          content: [
            "බිත්තර පැකට්ටුව උපමාව: සාමාන්‍ය විචල්‍යයක් යනු එක බිත්තරයක් තැබිය හැකි කුඩා කුප්පියකි. අරාවක් යනු බිත්තර 12ක් හෝ 30ක් එක පෙළට තැබිය හැකි බිත්තර ඇසුරුමකි (Egg Carton)."
          ],
          asciiDiagram: `අරාව:     ["Apple", "Banana", "Mango", "Orange"]
             |         |         |        |
දර්ශකය:     [0]       [1]       [2]      [3]`
        }
      ],
      keyPoints: [
        "අරාවක අවසාන අයිතමය ලබා ගැනීමට: array[array.length - 1].",
        "push සහ pop අගට ක්‍රියා කරයි; unshift සහ shift මුලට ක්‍රියා කරයි."
      ],
      exercises: [
        { id: 1, question: "අරාවක දිග 5 නම්, එහි අවසාන අයිතමයේ Index එක කීයද?" }
      ]
    },
    {
      id: 37,
      volumeId: 3,
      chapterNumber: 37,
      title: "වස්තූන් - සැබෑ ලෝකයේ දත්ත නිරූපණය (Objects)",
      englishTitle: "Objects - Real World Data Modeling",
      pageRange: "පිටු 113 - 116",
      description: "Array vs Object, Key-Value Pairs, Dot notation vs Bracket notation, Methods (Object Functions), this keyword, සහ Nested Objects.",
      learningObjectives: [
        "වස්තුවක් (Object) යනු කුමක්දැයි සැබෑ ලෝකයේ උපමා (මෝටර් රථයක්) ඇසුරින් වටහා ගැනීම",
        "යතුරු-අගය යුගල (Key-Value Pairs) සංකල්පය",
        "Dot Notation (obj.prop) සහ Bracket Notation (obj['prop']) භාවිතය",
        "වස්තුවක් තුළ ඇති ශ්‍රිත හෙවත් ක්‍රමවේද (Methods) සහ this මූලපදය"
      ],
      sections: [
        {
          title: "37.1 Objects සහ Methods",
          content: [
            "මෝටර් රථයක් සලකන්න: Properties (Brand, Color, Year), Methods/Actions (Drive, Stop).",
            "ජාවාස්ක්‍රිප්ට් හිදී, යම්කිසි 'වස්තුවක්' පිළිබඳ ඇති සියලුම තොරතුරු සහ ක්‍රියාකාරකම් එකම ස්ථානයක ගබඩා කිරීමට Object භාවිතා කරයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Object with Method & this",
              code: `const student = {
  firstName: "කසුන්",
  lastName: "කල්හාර",
  age: 16,
  subjects: ["Maths", "Science"],
  greet: function() {
    console.log("ආයුබෝවන්, මගේ නම " + this.firstName);
  }
};

student.greet(); // "ආයුබෝවන්, මගේ නම කසුන්"`
            }
          ]
        }
      ],
      keyPoints: [
        "JSON (JavaScript Object Notation) සම්පූර්ණයෙන්ම පදනම් වී ඇත්තේ Object සංකල්පය මතය.",
        "this මඟින් වත්මන් වස්තුව හඳුන්වයි."
      ],
      exercises: [
        { id: 1, question: "Array සහ Object අතර ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 38,
      volumeId: 3,
      chapterNumber: 38,
      title: "ඩොම් පාලනය - වෙබ් පිටුවට පණ ලබා දීම (DOM Manipulation)",
      englishTitle: "DOM Manipulation - Giving Life to the Web Page",
      pageRange: "පිටු 116 - 118",
      description: "DOM යනු කුමක්ද (රූපවාහිනිය සහ රිමෝට් එක උපමාව), DOM Tree, getElementById, querySelector, innerText vs innerHTML, .style.",
      learningObjectives: [
        "DOM (Document Object Model) යනු බ්‍රවුසරය මතකයේ තබා ගන්නා සිතියම බව තේරුම් ගැනීම",
        "document.getElementById() සහ document.querySelector() මඟින් ටැග් අල්ලා ගැනීම",
        "innerText සහ innerHTML මඟින් අන්තර්ගතය වෙනස් කිරීම",
        ".style ගුණාංගය මඟින් CSS හැඩතල ගතිකව වෙනස් කිරීම"
      ],
      sections: [
        {
          title: "38.1 DOM සංකල්පය සහ අන්තර්ගතය වෙනස් කිරීම",
          content: [
            "රූපවාහිනිය සහ රිමෝට් එක උපමාව: HTML පිටුව යනු රූපවාහිනී යන්ත්‍රයයි. JavaScript යනු රිමෝට් එකයි (Remote Control). රිමෝට් එක මඟින් ඩොම් එක හරහා අපට රූපවාහිනියේ ඕනෑම දෙයක් වෙනස් කළ හැක."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "DOM Selection & Styling",
              code: `// මාතෘකාව තෝරා ගැනීම
const title = document.getElementById("title");

// අන්තර්ගතය වෙනස් කිරීම
title.innerText = "සාදරයෙන් පිළිගනිමු!";

// CSS හැඩතල වෙනස් කිරීම (camelCase)
title.style.color = "#38bdf8";
title.style.fontSize = "36px";`
            }
          ]
        }
      ],
      keyPoints: [
        "CSS වල background-color යන්න ජාවාස්ක්‍රිප්ට් වලදී backgroundColor (camelCase) ලෙස ලියයි.",
        "XSS ප්‍රහාර වළක්වා ගැනීමට පරිශීලක දත්ත සඳහා innerHTML වෙනුවට innerText භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "innerText සහ innerHTML අතර ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 39,
      volumeId: 3,
      chapterNumber: 39,
      title: "සිදුවීම් පාලනය - පරිශීලකයා සමඟ ගනුදෙනු කිරීම (Event Handling)",
      englishTitle: "Event Handling - Interacting with the User",
      pageRange: "පිටු 118 - 121",
      description: "Events (Click, Input, Submit, Mouseover), Event Listeners, addEventListener(), Event Object (e), e.target, e.preventDefault().",
      learningObjectives: [
        "සිදුවීමක් (Event) යනු බ්‍රවුසරය තුළ සිදුවන ක්‍රියාවක් බව වටහා ගැනීම (දොර සීනුව උපමාව)",
        "addEventListener('click', function) වෘත්තීය ක්‍රමවේදය",
        "Event Object (e) සහ e.target මඟින් ක්ලික් කළ ටැගය හඳුනා ගැනීම",
        "e.preventDefault() මඟින් ෆෝරමයක් Submit වන විට පිටුව Refresh වීම නැවැත්වීම"
      ],
      sections: [
        {
          title: "39.1 addEventListener සහ Form Submission",
          content: [
            "දොර සීනුව උපමාව: Event = අමුත්තෙකු සීනුව එබීම. Listener = සීනුවට සම්බන්ධ විදුලි පද්ධතිය. Action/Response = නිවස තුළ 'ඩිං ඩොං' ශබ්දය ඇසීම."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Event Listener & PreventDefault",
              code: `const btn = document.getElementById("myBtn");

btn.addEventListener("click", function(e) {
  console.log("ක්ලික් කළ ස්ථානය: ", e.clientX, e.clientY);
  alert("බොත්තම ක්ලික් විය!");
});

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault(); // පිටුව refresh වීම වළක්වයි
  console.log("දත්ත සර්වර් එකට යවමු...");
});`
            }
          ]
        }
      ],
      keyPoints: [
        "addEventListener තුළ 'onclick' නොව 'click' ලෙස ලියන්න.",
        "ශ්‍රිතය ලබා දීමේදී handleClick() නොව handleClick ලෙස වරහන් රහිතව නම ලබා දෙන්න."
      ],
      exercises: [
        { id: 1, question: "e.preventDefault() භාවිතා කරන්නේ කුමන හේතුවක් සඳහාද?" }
      ]
    },
    {
      id: 40,
      volumeId: 3,
      chapterNumber: 40,
      title: "ප්‍රායෝගික ව්‍යාපෘතිය - වැඩ ලැයිස්තු පද්ධතිය (Capstone: To-Do List App)",
      englishTitle: "Capstone Project: Interactive To-Do List App",
      pageRange: "පිටු 121 - 124",
      description: "Full Vanilla JS To-Do List App, createElement, appendChild, remove, classList.toggle, සහ Keypress Enter shortcut.",
      learningObjectives: [
        "පරිමාව 3 තුළ උගත් සියලු සංකල්ප (Variables, Functions, Arrays, DOM, Events) එකතු කර සැබෑ යෙදුමක් සෑදීම",
        "document.createElement('li') මඟින් ගතිකව අලුත් ටැග් නිර්මාණය කිරීම",
        "classList.toggle('completed') මඟින් වැඩක් නිම කළ බව සලකුණු කිරීම",
        "මකා දැමීමේ (Delete) බොත්තම සකස් කිරීම සහ li.remove()"
      ],
      sections: [
        {
          title: "40.1 To-Do List App සම්පූර්ණ තර්කනය",
          content: [
            "අප අද නිර්මාණය කරන්නේ 'වැඩ ලැයිස්තු පද්ධතියක්' (To-Do List App) ය. ඕනෑම Frontend Developer කෙනෙකු තම මුල් කාලයේදී අනිවාර්යයෙන්ම නිර්මාණය කළ යුතු මූලික ව්‍යාපෘතියකි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Complete To-Do List Logic",
              code: `const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("කරුණාකර වැඩක් ඇතුළත් කරන්න!");
    return;
  }

  // 1. අලුත් li එකක් සෑදීම
  const li = document.createElement("li");
  li.innerText = taskValue;

  // 2. Click කළ විට Completed කිරීම
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // 3. Delete බොත්තම
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "මකන්න";
  deleteBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});`
            }
          ]
        }
      ],
      keyPoints: [
        "createElement මඟින් මතකය තුළ ටැගයක් නිර්මාණය කරන අතර appendChild මඟින් එය තිරයට එක් කරයි."
      ],
      exercises: [
        { id: 1, question: "classList.toggle() මඟින් සිදුවන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 41,
      volumeId: 3,
      chapterNumber: 41,
      title: "ජාවාස්ක්‍රිප්ට් ඉංජිනේරු විද්‍යාව - එන්ජිම ඇතුළත සිදුවන රහස්",
      englishTitle: "JavaScript Engineering - Under the Hood",
      pageRange: "පිටු 125 - 127",
      description: "V8 Engine, Execution Context (Memory & Code), Hoisting, Call Stack (Single-threaded), Event Loop, සහ Closures.",
      learningObjectives: [
        "V8 Engine: Parsing, Compilation (JIT Compiler), Execution පියවර 3",
        "Global Execution Context (GEC) සහ Call Stack හි තැටි තට්ටුව",
        "Hoisting: විචල්‍යයන් සහ ශ්‍රිත ප්‍රකාශ කිරීමට පෙර මතකයේ සැකසෙන අයුරු",
        "Event Loop සහ Asynchronous කාර්යයන් පාලනය",
        "Closures: ශ්‍රිතයකට තම උපන් වටපිටාව (Scope) මතක තබා ගැනීමේ මායා බලය"
      ],
      sections: [
        {
          title: "41.1 Call Stack, Event Loop සහ Closures",
          content: [
            "ජාවාස්ක්‍රිප්ට් යනු Single-threaded භාෂාවකි (එක වරකදී එක් වැඩක් පමණි). නමුත් Event Loop එක මඟින් අසමකාලීන වැඩ (Web APIs, Timers) පසුබිමෙන් පාලනය කර බ්‍රවුසරය හිර නොවී තබා ගනී.",
            "Closure උදාහරණය:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "JavaScript Closure Pattern",
              code: `function outer() {
  let money = 100;
  function inner() {
    console.log("මම ළඟ රුපියල් " + money + " තියෙනවා.");
  }
  return inner;
}

const myWallet = outer();
myWallet(); // "මම ළඟ රුපියල් 100 තියෙනවා." (money අගය මතකයේ ඇත!)`
            }
          ]
        }
      ],
      keyPoints: [
        "var මඟින් හදන විචල්‍යයන් Hoisting වලදී undefined වන අතර let/const Temporal Dead Zone හි පවතී.",
        "Memory Leak වැළැක්වීමට වැඩ අවසන් වූ පසු විශාල විචල්‍යයන් null කරන්න."
      ],
      exercises: [
        { id: 1, question: "Call Stack සහ Event Loop අතර සම්බන්ධය විස්තර කරන්න." }
      ]
    },
    {
      id: 42,
      volumeId: 3,
      chapterNumber: 42,
      title: "දත්ත හැසිරවීමේ රහස් සහ ඩොම් ගවේෂණය",
      englishTitle: "String/Math Methods, Deep Scope & DOM Traversal",
      pageRange: "පිටු 128 - 130",
      description: "String Methods (slice, replace, toUpperCase, trim), Math Object (floor, ceil, random), Deep Scope, DOM Traversal, සහ Value vs Reference.",
      learningObjectives: [
        "String Methods භාවිතයෙන් අකුරු හැසිරවීම",
        "Math.random() භාවිතයෙන් අහඹු අංක සෑදීම",
        "DOM Traversal: parentElement, children, nextElementSibling හරහා ගමන් කිරීම",
        "Primitive Types (Value) සහ Reference Types (Array/Object by reference) අතර වෙනස"
      ],
      sections: [
        {
          title: "42.1 Value vs Reference Types",
          content: [
            "• Primitive Types (Number, String): අගයක් ලෙස ගබඩා වේ (එකක් වෙනස් කළ විට අනෙක වෙනස් නොවේ).",
            "• Reference Types (Array, Object): මතකයේ ඇති ලිපිනය (Reference) ලබා ගනී. එකක් වෙනස් කළ විට අනෙකද වෙනස් වේ!",
            "වෘත්තීය විසඳුම: අරාවක් පිටපත් කිරීමට Spread Operator ([...arr]) භාවිතා කරන්න."
          ]
        }
      ],
      keyPoints: [
        "Math.floor(Math.random() * 10) + 1 මඟින් 1 සිට 10 දක්වා අහඹු අංකයක් ලැබේ."
      ],
      exercises: [
        { id: 1, question: "Primitive Types සහ Reference Types අතර වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 43,
      volumeId: 3,
      chapterNumber: 43,
      title: "ජාවාස්ක්‍රිප්ට් ගෘහ නිර්මාණ ශිල්පය",
      englishTitle: "Prototypes, Microtasks & Context Binding",
      pageRange: "පිටු 130 - 133",
      description: "Prototypal Inheritance, Microtask Queue (Promises) vs Macrotask Queue (setTimeout), call/apply/bind, reduce() method, සහ Immutability.",
      learningObjectives: [
        "ජාවාස්ක්‍රිප්ට් හි Prototype Chain එක ක්‍රියා කරන අයුරු",
        "Microtask Queue එක සැමවිටම Macrotask එකට වඩා ප්‍රමුඛතාවය ගන්නා බව",
        "this පාලනයට call(), apply(), bind() භාවිතය",
        "reduce() මඟින් අරාවක සියලු දත්ත තනි අගයක් බවට පත් කිරීම"
      ],
      sections: [
        {
          title: "43.1 Microtasks vs Macrotasks සහ reduce()",
          content: [
            "රන් නීතිය: Event Loop එක සැමවිටම Microtask Queue (Promises) එකට ප්‍රමුඛතාවය ලබා දෙයි (setTimeout ට වඩා කලින් Promise ක්‍රියාත්මක වේ).",
            "reduce() භාවිතයෙන් සියල්ලේ එකතුව සෙවීම:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Array reduce() Power",
              code: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(sum); // 15`
            }
          ]
        }
      ],
      keyPoints: [
        "Array.push() හෝ String methods ක්‍රියාත්මක වන්නේ Prototype Chain එක හරහාය."
      ],
      exercises: [
        { id: 1, question: "reduce() මඟින් අරාවක ඇති සියලු සංඛ්‍යාවල ගුණිතය සොයන ආකාරය ලියන්න." }
      ]
    }
  ]
};
