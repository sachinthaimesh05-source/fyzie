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
        },
        {
          title: "28.2 JavaScript ඉතිහාසය සහ Brendan Eich ගේ දින 10ක ආශ්චර්යය",
          content: [
            "1995 දී Netscape සමාගමේ සේවය කළ Brendan Eich විසින් දින 10ක් ඇතුළත JavaScript හි මුල් අනුවාදය නිර්මාණය කළේය.",
            "මුලින් Mocha ලෙසද, පසුව LiveScript ලෙසද නම් කෙරුණු අතර, එකල ලොව අතිශය ජනප්‍රියව තිබූ Java භාෂාවේ ප්‍රචාරණ වාසිය ලබා ගැනීම සඳහා අවසානයේ JavaScript ලෙස නම් කරන ලදී.",
            "වර්තමානයේ JavaScript හි ප්‍රමිතිගත පිරිවිතරය (Standard) හඳුන්වන්නේ ECMAScript (ES) යන නමිනි (උදා: ES6 / ECMAScript 2015)."
          ]
        },
        {
          title: "28.3 Java එදිරිව JavaScript (Car vs Carpet)",
          content: [
            "බොහෝ ආධුනිකයන් සිතන්නේ Java සහ JavaScript යනු එකම පවුලේ සහෝදරයන් බවයි. නමුත් එය සම්පූර්ණයෙන්ම වැරදිය!",
            "ජනප්‍රිය කියමනක් ඇත: 'Java සහ JavaScript අතර ඇති සම්බන්ධය කාර් (Car) සහ කාපට් (Carpet) අතර ඇති සම්බන්ධය වැනිය!'",
            "• Java: දැඩි ලෙස වර්ගීකරණය කළ (Strictly Typed), Compiled, Object-Oriented භාෂාවකි (බොහෝවිට Enterprise Backend සහ Android සඳහා යොදයි).",
            "• JavaScript: ගතිකව වර්ගීකරණය කළ (Dynamically Typed), Multi-paradigm, වෙබ් බ්‍රවුසර තුළ ධාවනය වන සැහැල්ලු භාෂාවකි."
          ]
        },
        {
          title: "28.4 JavaScript Engine සහ V8 ක්‍රියාකාරීත්වය",
          content: [
            "සෑම වෙබ් බ්‍රවුසරයක් තුළම JavaScript කේත කියවා ධාවනය කරන 'එන්ජිමක්' (JS Engine) අඩංගු වේ:",
            "• Google Chrome & Node.js: V8 Engine",
            "• Mozilla Firefox: SpiderMonkey",
            "• Apple Safari: JavaScriptCore (Nitro)",
            "නූතන එන්ජින් JIT (Just-In-Time) Compilation තාක්ෂණය මඟින් ඔබ ලියන JavaScript කේතය තත්පරයෙන් දහස් ගණනින් පංගුවකදී පරිගණකයේ සකසනයට (CPU) තේරුම් ගත හැකි Machine Code බවට පරිවර්තනය කරයි."
          ]
        }
      ],
      keyPoints: [
        "ජාවා සහ ජාවාස්ක්‍රිප්ට් යනු 'කාර්' සහ 'කාපට්' මෙන් එකිනෙකට වෙනස් භාෂා දෙකකි.",
        "JavaScript යනු Interpreted/JIT Compiled භාෂාවකි; බ්‍රවුසරය විසින් එය එසැණින් කියවා ක්‍රියාත්මක කරයි.",
        "ECMAScript (ES6+) යනු නූතන ජාවාස්ක්‍රිප්ට් හි නිල ප්‍රමිතියයි."
      ],
      exercises: [
        { id: 1, question: "වෙබ් අඩවියක HTML, CSS සහ JavaScript වල කාර්යභාරයන් වෙන් වෙන්ව පැහැදිලි කරන්න." },
        { id: 2, question: "Google Chrome සහ Node.js තුළ ඇති JavaScript එන්ජිම කුමක්ද?" }
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
        "<script> ටැගය </body> ට මදක් ඉහළින් තැබීමෙන් වෙබ් අඩවියේ වේගය වැඩි වන අයුරු",
        "async සහ defer ගුණාංග මඟින් ස්ක්‍රිප්ට් බාගත වීම ප්‍රශස්ත කිරීම"
      ],
      sections: [
        {
          title: "29.1 JavaScript වෙබ් පිටුවට ඇතුළත් කිරීමේ ක්‍රම 3",
          content: [
            "1. Inline JavaScript: HTML ටැගය තුළම ලිවීම (උදා: <button onclick=\"alert('Hello')\">). මෙය කේතය අවුල් කරන බැවින් වෘත්තීය මට්ටමේදී කිසිවිටෙකත් නිර්දේශ නොකරයි.",
            "2. Internal JavaScript: HTML ගොනුවේ <head> හෝ <body> තුළ <script> ... </script> ටැග් අතර ලිවීම.",
            "3. External JavaScript (වඩාත්ම සුදුසු ක්‍රමය): වෙනම .js ගොනුවක් සාදා <script src=\"app.js\"></script> ලෙස සම්බන්ධ කිරීම. මෙය Separation of Concerns පිළිපදින අතර බ්‍රවුසරයට Cache කර තබා ගැනීමට පහසු වේ."
          ]
        },
        {
          title: "29.2 <script> ටැගයේ පිහිටීම සහ defer භාවිතය",
          content: [
            "සාමාන්‍යයෙන් <script> ටැගය HTML හි </body> ට මදක් ඉහළින් තබනු ලැබේ. මන්දයත් HTML සම්පූර්ණයෙන් කියවා අවසන් වීමට පෙර JS කියවීමට ගියහොත් පිටුව Load වීම ප්‍රමාද වන බැවිනි.",
            "නවීන ප්‍රමිතිය: <head> තුළ <script src=\"app.js\" defer></script> ලෙස ලිවීම. defer මඟින් HTML කියවන අතරතුර පසුබිමෙන් ස්ක්‍රිප්ට් එක බාගත කර, සම්පූර්ණ HTML DOM එක සැකසී අවසන් වූ සැණින් ස්ක්‍රිප්ට් එක ක්‍රියාත්මක කරයි."
          ]
        },
        {
          title: "29.3 Browser Console සහ console Methods",
          content: [
            "console.log() යනු සංවර්ධකයෙකුට බ්‍රවුසරය සමඟ 'කතා කිරීමට' ඇති පණිවිඩ පුවරුවයි. අප ලියන කේතයේ ප්‍රතිඵල බැලීමට සහ දෝෂ හඳුනා ගැනීමට විවිධ console methods ඇත:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Console Logging Power Tools",
              code: `// සාමාන්‍ය පණිවිඩයක් මුද්‍රණය කිරීම
console.log("ආයුබෝවන් ජාවාස්ක්‍රිප්ට්!");

// අනතුරු ඇඟවීමේ පණිවිඩයක් (Yellow warning)
console.warn("මෙය පරික්ෂණාත්මක විශේෂාංගයකි!");

// දෝෂ පණිවිඩයක් (Red error)
console.error("දත්ත සමුදායට සම්බන්ධ විය නොහැක!");

// වගුවක් ලෙස දත්ත පෙන්වීම (Array/Object සඳහා සුපිරි ක්‍රමයකි)
console.table([
  { name: "කසුන්", city: "කොළඹ" },
  { name: "නිමල්", city: "මහනුවර" }
]);`
            }
          ]
        },
        {
          title: "29.4 JavaScript Comments (සටහන් තැබීම)",
          content: [
            "කේතය කියවන වෙනත් සංවර්ධකයෙකුට හෝ අනාගතයේ ඔබටම කේතය තේරුම් ගැනීමට Comments යොදයි. බ්‍රවුසරය Comments ක්‍රියාත්මක නොකර මඟහරියි:",
            "• තනි පේළියේ සටහන් (Single-line): // මෙතැන සටහන ලියන්න",
            "• බහු පේළි සටහන් (Multi-line): /* පේළි කිහිපයක සටහනක් */"
          ]
        }
      ],
      keyPoints: [
        "ජාවාස්ක්‍රිප්ට් Case Sensitive වේ: console.log නිවැරදියි, Console.log වැරදියි.",
        "වෘත්තීය මට්ටමේදී සැමවිටම External .js ගොනු සහ <script defer> භාවිතා කරන්න.",
        "console.table() මඟින් arrays සහ objects ඉතා පැහැදිලි වගුවක් ලෙස පරීක්ෂා කළ හැක."
      ],
      exercises: [
        { id: 1, question: "<script> ටැගයේ defer ගුණාංගය මඟින් සිදුවන කාර්යය කුමක්ද?" },
        { id: 2, question: "console.log සහ console.table අතර වෙනස ප්‍රායෝගිකව දක්වන්න." }
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
        "var (පැරණි දෝෂ සහිත), let (වෙනස් කළ හැකි) සහ const (ස්ථාවර) අතර සැබෑ වෙනස",
        "Scope (Global, Function, Block Scope) සංකල්පය",
        "camelCase නාමකරණ නීති (firstName, userLoginStatus)",
        "නූතන රන් නීතිය: Default const, Only let when reassigning, Never var"
      ],
      sections: [
        {
          title: "30.1 විචල්‍යයන් යනු කුමක්ද? කුස්සියේ බෝතල් උපමාව",
          content: [
            "කුස්සියේ උපමාව: කුස්සියේ ඇති විදුරු බෝතලයකට 'සීනි' කියා ලේබලයක් අලවා ඒ තුළ සීනි දමයි. මෙහි ලේබලය යනු Variable Name වන අතර, බෝතලය මතකය (Memory) ද, ඇතුළත ඇති සීනි Value (අගය) ද වේ.",
            "පසුව අවශ්‍ය විටක එම බෝතලයෙන් සීනි ඉවත් කර ලුණු පිරවිය හැක (Reassignment)."
          ]
        },
        {
          title: "30.2 var එදිරිව let එදිරිව const (The Modern Showdown)",
          content: [
            "• const (ස්ථාවර): වරක් අගයක් ලබා දුන් පසු කිසිදා වෙනස් කළ නොහැක. Block-scoped වේ. (ස්වර්ණමය නීතිය: හැකි සෑමවිටම const යොදන්න).",
            "• let (වෙනස් කළ හැකි): පසුව අගය වෙනස් කිරීමට අවශ්‍ය නම් (උදා: ලකුණු එකතුව, loop counters) let යොදයි. Block-scoped වේ.",
            "• var (පැරණි ES5 ක්‍රමය): Function-scoped වන අතර Hoisting දෝෂ ඇති කරයි. නූතන JavaScript හි var කිසිවිටෙකත් භාවිතා නොකරන්න!"
          ],
          asciiDiagram: `┌─────────┬──────────────┬──────────────┬───────────────┐
│ Feature │ var          │ let          │ const         │
├─────────┼──────────────┼──────────────┼───────────────┤
│ Scope   │ Function     │ Block {}     │ Block {}      │
│ Reassign│ YES          │ YES          │ NO (Immutable)│
│ Redeclare│ YES (Danger)│ NO (Error)   │ NO (Error)    │
│ Hoisting│ Undefined    │ TDZ (Error)  │ TDZ (Error)   │
└─────────┴──────────────┴──────────────┴───────────────┘`
        },
        {
          title: "30.3 Variable Naming Rules සහ camelCase සම්ප්‍රදාය",
          content: [
            "1. අකුරු, ඉලක්කම්, $ සහ _ පමණක් නමේ අඩංගු විය හැක.",
            "2. පළමු අකුර අංකයකින් පටන් ගත නොහැක (උදා: 1user වැරදියි, user1 නිවැරදියි).",
            "3. JavaScript හි වෙන්කළ මූලපද (Reserved Keywords: class, return, function) නම ලෙස තැබිය නොහැක.",
            "4. camelCase සම්ප්‍රදාය: වචන කිහිපයක් එකතු වන විට පළමු වචනය කුඩා අකුරින්ද, ඉන්පසු සෑම වචනයකම මුල් අකුර කැපිටල් අකුරින්ද ලියන්න (userAccountBalance, isEmailVerified)."
          ]
        },
        {
          title: "30.4 ප්‍රායෝගික විචල්‍ය භාවිතය සහ කේත ආදර්ශ",
          content: [
            "පහත කේතයෙන් let සහ const නිවැරදිව භාවිත කරන ආකාරය දැක්වේ:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Modern Variable Declarations",
              code: `// 1. ස්ථාවර දත්ත සඳහා const
const appName = "SipThilina LMS";
const maxLoginAttempts = 3;
const taxRate = 0.08;

// 2. අගය වෙනස් වන දත්ත සඳහා let
let currentAttempts = 0;
let userScore = 150;

// අගය වෙනස් කිරීම (Reassignment)
currentAttempts += 1;
userScore = userScore + 50;

console.log("වත්මන් ලකුණු: " + userScore); // 200

// ❌ const වෙනස් කිරීමට උත්සාහ කළහොත්:
// maxLoginAttempts = 5; // TypeError: Assignment to constant variable`
            }
          ]
        }
      ],
      keyPoints: [
        "සෑමවිටම පෙරනිමියෙන් const භාවිතා කරන්න; අගය අනිවාර්යයෙන්ම වෙනස් වන අවස්ථාවල පමණක් let යොදන්න.",
        "var කිසිවිටෙකත් භාවිතා නොකරන්න; එය ගෝලීය විෂය පථය දූෂණය කරයි.",
        "නූතන සංවර්ධනයේදී camelCase අනිවාර්ය සම්මතයකි."
      ],
      exercises: [
        { id: 1, question: "let සහ const අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "Block Scope යනු කුමක්දැයි උදාහරණයක් සහිතව පැහැදිලි කරන්න." }
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
        "Undefined (අගයක් නොලැබූ) සහ Null (හිතාමතා හිස් කළ) අතර වෙනස",
        "Template Literals (Backticks `${}`) මඟින් අකුරු සහ විචල්‍යයන් සුමටව ඒකාබද්ධ කිරීම"
      ],
      sections: [
        {
          title: "31.1 Dynamic Typing යනු කුමක්ද?",
          content: [
            "C++ හෝ Java වැනි භාෂාවලදී විචල්‍යයක් සෑදීමේදී එහි දත්ත වර්ගය (int, String) පැවසිය යුතුය (Static Typing).",
            "නමුත් JavaScript යනු Dynamically Typed භාෂාවකි. එහිදී විචල්‍යයකට ඕනෑම මොහොතක ඕනෑම වර්ගයක දත්තයක් පැවරිය හැකි අතර, දත්ත වර්ගය තීරණය වන්නේ විචල්‍යයේ ගබඩා කරන අගය අනුවයි."
          ]
        },
        {
          title: "31.2 ප්‍රාථමික දත්ත වර්ග 7 (The 7 Primitive Types)",
          content: [
            "1. Number: පූර්ණ සංඛ්‍යා සහ දශම සංඛ්‍යා (උදා: 25, 99.99, NaN, Infinity).",
            "2. String: පෙළ හෝ අකුරු වැල් ('single', \"double\", හෝ `backticks`).",
            "3. Boolean: තර්කානුකූල තීරණ සඳහා true හෝ false.",
            "4. Undefined: විචල්‍යයක් සාදා ඊට අගයක් පවරා නොමැති විට බ්‍රවුසරය ස්වයංක්‍රීයව දෙන අගයයි.",
            "5. Null: හිතාමතාම 'කිසිවක් නැත' (Empty / Intentional absence) කියා සංවර්ධකයා විසින් තබන අගයයි.",
            "6. BigInt: Number ට දැරිය නොහැකි ඉතා විශාල පූර්ණ සංඛ්‍යා (උදා: 9007199254740991n).",
            "7. Symbol: සුවිශේෂී සහ අද්විතීය (Unique) හඳුනාගැනීම් සෑදීමට යොදයි."
          ]
        },
        {
          title: "31.3 typeof Operator සහ typeof null Bug එක",
          content: [
            "විචල්‍යයක හෝ අගයක දත්ත වර්ගය කුමක්දැයි පරීක්ෂා කිරීමට typeof ක්‍රියාකරු භාවිතා කරයි.",
            "ඓතිහාසික Bug එක: console.log(typeof null); ක්‍රියාත්මක කළ විට ලැබෙන්නේ 'object' යන්නයි! 1995 දී ජාවාස්ක්‍රිප්ට් නිර්මාණය කිරීමේදී සිදු වූ මෙම දෝෂය අදටත් පැරණි කේත බිඳවැටීම වැළැක්වීම සඳහා වෙනස් කර නැත."
          ]
        },
        {
          title: "31.4 Template Literals (Backticks `${}`) - සුපිරි Strings",
          content: [
            "පැරණි ක්‍රමයේදී Strings සහ Variables එකතු කිරීමට + ලකුණ යෙදූ විට කේතය ඉතා අවුල් සහගත විය.",
            "ES6 හි හඳුන්වා දුන් Backticks (`) සහ ${expression} මඟින් පේළි ගණනක පෙළ (Multi-line strings) සහ විචල්‍යයන් අලංකාරව ඒකාබද්ධ කළ හැක:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Data Types & Template Literals",
              code: `const studentName = "කසුන් පෙරේරා";
const age = 21;
const gpa = 3.85;
const isEnrolled = true;
let graduationYear; // undefined
let scholarship = null; // intentional empty

console.log(typeof studentName); // "string"
console.log(typeof age);         // "number"
console.log(typeof isEnrolled);  // "boolean"
console.log(typeof scholarship); // "object" (JavaScript historic bug!)

// Modern Template Literals:
const bio = \`ශිෂ්‍යයා: \${studentName}
වයස: \${age}
ලියාපදිංචි වී ඇත්ද: \${isEnrolled ? "ඔව්" : "නැත"}\`;

console.log(bio);`
            }
          ]
        }
      ],
      keyPoints: [
        "undefined යනු අගයක් තවම නොදුන් විට පද්ධතිය ලබා දෙන අගයයි; null යනු හිතාමතා හිස් කළ බව සංවර්ධකයා පවසන අගයයි.",
        "Strings සඳහා සැමවිටම Template Literals (Backticks) භාවිතා කිරීම වෘත්තීය පුරුද්දකි.",
        "NaN (Not a Number) යනු තාක්ෂණිකව Number වර්ගයට අයත් අගයකි (typeof NaN === 'number')."
      ],
      exercises: [
        { id: 1, question: "undefined සහ null අතර වෙනස කුමක්ද?" },
        { id: 2, question: "Template Literals භාවිතා කිරීමේ ප්‍රධාන වාසි 2ක් ලියන්න." }
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
        "Modulus (%) මඟින් බෙදීමක ඉතිරිය සෙවීම සහ ඉරට්ටේ/ඔත්තේ සංඛ්‍යා හඳුනා ගැනීම",
        "== (Loose Equality) සහ === (Strict Equality) අතර වෙනස — වෘත්තීය මට්ටමේදී === පමණක් භාවිතය",
        "Logical Operators: && (AND), || (OR), ! (NOT)",
        "ක්‍රියාකාරුවන් ක්‍රියාත්මක වීමේ ප්‍රමුඛතාවය (BODMAS) සහ Short-circuit Evaluation"
      ],
      sections: [
        {
          title: "32.1 ගණිතමය සහ ආදේශන ක්‍රියාකාරුවන්",
          content: [
            "• Arithmetic: + (එකතු කිරීම), - (අඩු කිරීම), * (ගුණ කිරීම), / (බෙදීම), % (ඉතිරිය/Modulus), ** (බලය/Exponentiation).",
            "• Modulus (%) රහස: 10 % 3 = 1 (10 තුනෙන් බෙදූ විට ඉතිරිය 1යි). ඕනෑම සංඛ්‍යාවක් 2න් බෙදූ විට ඉතිරිය 0 නම් එය ඉරට්ටේ (Even) සංඛ්‍යාවකි!",
            "• Assignment: x += 5 යනු x = x + 5 හි කෙටි යෙදුමයි. (එසේම -=, *=, /=)."
          ]
        },
        {
          title: "32.2 == එදිරිව === (Loose vs Strict Equality)",
          content: [
            "ජාවාස්ක්‍රිප්ට් හි වඩාත්ම වැදගත් සම්මුඛ පරීක්ෂණ (Interview) ප්‍රශ්නය මෙයයි:",
            "• == (Loose Equality / Type Coercion): දත්ත වර්ගය වෙනස් වුවද අගය සමාන දැයි බැලීමට පසුබිමෙන් දත්ත වර්ගය බලෙන් පරිවර්තනය කරයි. උදා: '5' == 5 ➔ true.",
            "• === (Strict Equality): කිසිදු පරිවර්තනයක් නොකර අගය සහ දත්ත වර්ගය (Data Type) යන දෙකම සමාන දැයි බලයි. උදා: '5' === 5 ➔ false (String සහ Number සමාන නොවේ).",
            "ස්වර්ණමය නීතිය: සැමවිටම === සහ !== පමණක් භාවිතා කරන්න!"
          ],
          asciiDiagram: `සංසන්දනය:      '10' == 10       |      '10' === 10
                 │                      │
Type Coercion:  '10' -> 10 බවට හැරේ     |  දත්ත වර්ග වෙනස් බැවින්
ප්‍රතිඵලය:        TRUE (අනාරක්ෂිතයි)      |  FALSE (ආරක්ෂිත සහ නිවැරදියි)`
        },
        {
          title: "32.3 තාර්කික ක්‍රියාකාරුවන් (Logical Operators)",
          content: [
            "• && (AND): සියලු කොන්දේසි සත්‍ය නම් පමණක් true වේ (උදා: isUserLoggedIn && hasPaidSubscription).",
            "• || (OR): අවම වශයෙන් එක් කොන්දේසියක් හෝ සත්‍ය නම් true වේ (උදා: isWeekend || isHoliday).",
            "• ! (NOT): අගය ප්‍රතිවිරුද්ධ පැත්තට හරවයි (!true ➔ false, !false ➔ true)."
          ]
        },
        {
          title: "32.4 ක්‍රියාකාරුවන් භාවිතය පිළිබඳ සම්පූර්ණ කේතය",
          content: [
            "පහත කේතයෙන් විවිධ ක්‍රියාකාරුවන් සහ ඒවායේ ප්‍රතිඵල නිරූපණය වේ:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "JavaScript Operators in Action",
              code: `// 1. Modulus: ඉරට්ටේ සංඛ්‍යාවක්දැයි බැලීම
const number = 14;
const isEven = (number % 2 === 0);
console.log("ඉරට්ටේ සංඛ්‍යාවක්ද: " + isEven); // true

// 2. Strict Equality Check
const enteredPin = "1234";
const actualPin = 1234;
console.log(enteredPin == actualPin);  // true  (Loose - Danger!)
console.log(enteredPin === actualPin); // false (Strict - Safe!)

// 3. Logical Operators
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

const canDrive = hasDriverLicense && hasGoodVision && !isTired;
console.log("රිය පැදවිය හැකිද: " + canDrive); // true`
            }
          ]
        }
      ],
      keyPoints: [
        "== වෙනුවට සැමවිටම === භාවිතා කරන්න; එය අනපේක්ෂිත දෝෂ (Bugs) වළක්වයි.",
        "Modulus (% 2 === 0) මඟින් සංඛ්‍යාවක් ඉරට්ටේ ද ඔත්තේ ද යන්න ක්ෂණිකව සොයා ගත හැක.",
        "Logical AND (&&) හිදී පළමු කොන්දේසිය අසත්‍ය වූ සැණින් ඉතිරිය පරීක්ෂා නොකරයි (Short-circuit)."
      ],
      exercises: [
        { id: 1, question: "10 % 3 හි පිළිතුර කුමක්ද? එය පැහැදිලි කරන්න." },
        { id: 2, question: "== සහ === අතර ඇති වෙනස උදාහරණයක් සහිතව දක්වන්න." }
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
        "Falsy අගයන් 6 සවිස්තරාත්මකව දැනගැනීම: false, 0, '', null, undefined, NaN",
        "Ternary Operator: කොන්දේසිය ? සත්‍ය_නම් : අසත්‍ය_නම්;",
        "switch statement සහ break හි වැදගත්කම"
      ],
      sections: [
        {
          title: "33.1 if, else if සහ else ප්‍රකාශන",
          content: [
            "සැබෑ ජීවිතයේ අප ගන්නා තීරණ මෙන්: 'වැස්සොත් කුඩයක් ගෙනියන්න, නැත්නම් අව් කණ්ණාඩි දාන්න'.",
            "ජාවාස්ක්‍රිප්ට් හිදී කොන්දේසියක් සත්‍ය (true) නම් එක් කේත කොටසක්ද, අසත්‍ය (false) නම් වෙනත් කේත කොටසක්ද ක්‍රියාත්මක කිරීමට if-else යොදයි."
          ]
        },
        {
          title: "33.2 Truthy සහ Falsy අගයන් (The 6 Falsy Values)",
          content: [
            "ජාවාස්ක්‍රිප්ට් හි Boolean වර්ගයේ නොවන ඕනෑම අගයකට සහජයෙන්ම සත්‍ය හෝ අසත්‍ය බවක් ඇත.",
            "ජාවාස්ක්‍රිප්ට් හි ඇති Falsy අගයන් 6 පමණි. ඒවා හැර ලොව ඇති අන් සියලුම අගයන් Truthy වේ!",
            "Falsy අගයන් 6:",
            "1. false",
            "2. 0 (සහ -0)",
            "3. '' හෝ \"\" (හිස් Strings)",
            "4. null",
            "5. undefined",
            "6. NaN (Not a Number)",
            "විශේෂත්වය: හිස් අරාවක් ([]) හෝ හිස් වස්තුවක් ({}) යනු Truthy අගයන්ය!"
          ]
        },
        {
          title: "33.3 Ternary Operator (කෙටි if-else ක්‍රමය)",
          content: [
            "පේළි 5ක සරල if-else ප්‍රකාශයක් තනි පේළියකින් ලිවීමට Ternary Operator යොදයි:",
            "syntax: කොන්දේසිය ? සත්‍ය_නම්_අගය : අසත්‍ය_නම්_අගය;"
          ]
        },
        {
          title: "33.4 switch Statement සහ ATM මුදල් ගැනීමේ තර්කනය",
          content: [
            "එකම විචල්‍යයක විවිධ අගයන් රැසක් පරීක්ෂා කිරීමට if-else පේළි 20ක් ලියනවා වෙනුවට switch statement එක ඉතා පිරිසිදු වේ. break විධානය ලිවීම අනිවාර්ය වන අතර එසේ නොවුණහොත් ඊළඟ case එකද ක්‍රියාත්මක වේ (Fall-through):"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Control Flow: if-else, Ternary & switch",
              code: `// 1. Truthy/Falsy Check
let username = "";
if (username) {
  console.log("සාදරයෙන් පිළිගනිමු " + username);
} else {
  console.log("කරුණාකර නම ඇතුළත් කරන්න!"); // "" is Falsy
}

// 2. Ternary Operator
const userAge = 19;
const accessStatus = (userAge >= 18) ? "ප්‍රවේශය අනුමතයි" : "ප්‍රවේශය තහනම්";
console.log(accessStatus);

// 3. switch Statement (ATM Menu)
const userChoice = 2;

switch (userChoice) {
  case 1:
    console.log("ගිණුම් ශේෂය පරීක්ෂා කිරීම...");
    break;
  case 2:
    console.log("මුදල් ආපසු ගැනීම...");
    break;
  case 3:
    console.log("මුදල් තැන්පත් කිරීම...");
    break;
  default:
    console.log("වලංගු නොවන තේරීමක්!");
}`
            }
          ]
        }
      ],
      keyPoints: [
        "ජාවාස්ක්‍රිප්ට් හි Falsy අගයන් 6 හැර අනෙක් සියලු අගයන් Truthy වේ.",
        "switch ප්‍රකාශයේ එක් එක් case එක අවසානයේ break අනිවාර්යයෙන්ම තබන්න.",
        "Ternary operator එක සරල තීරණ සඳහා පමණක් යොදන්න; සංකීර්ණ තර්ක සඳහා if-else භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "ජාවාස්ක්‍රිප්ට් හි Falsy අගයන් 6 නම් කරන්න." },
        { id: 2, question: "switch statement එකක break විධානය නොලියුවහොත් සිදුවන්නේ කුමක්ද?" }
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
        "Infinite Loop (අනන්ත පුඩු) අනතුර වළක්වා ගැනීම සහ ගුණන වගු සැකසීම"
      ],
      sections: [
        {
          title: "34.1 for Loop ක්‍රියාකාරීත්වය සහ කොටස් 3",
          content: [
            "සිතන්න ගුරුවරයා ඔබට 'මම නැවත පන්තියේ කතා නොකරමි' කියා 100 වතාවක් පොතේ ලිවීමට පැවසූ බව. මිනිසෙකුට මෙය වෙහෙසකර වුවද, පරිගණකයකට තත්පරයෙන් දහයෙන් පංගුවකදී කළ හැක.",
            "for loop එකක කොටස් 3:",
            "1. Initialization (ආරම්භය): let i = 1; (ගණන් කිරීම ආරම්භ වන අගය)",
            "2. Condition (කොන්දේසිය): i <= 5; (මෙම කොන්දේසිය සත්‍ය වන තුරු ලූප් එක කැරකේ)",
            "3. Increment (වැඩිවීම): i++ (සෑම වටයක් අවසානයේදීම i අගය 1කින් වැඩි වේ)"
          ]
        },
        {
          title: "34.2 while සහ do-while ලූප්ස්",
          content: [
            "• while loop: කොන්දේසිය සත්‍ය නම් පමණක් ඇතුළට යයි. (උදා: පරිශීලකයා නිවැරදි මුරපදය ගසන තුරු නැවත නැවත විමසීම).",
            "• do-while loop: කොන්දේසිය පරීක්ෂා කරන්නේ අවසානයේදී බැවින්, කොන්දේසිය අසත්‍ය වුවද අවම වශයෙන් එක් වරක් හෝ කේතය ක්‍රියාත්මක වේ!"
          ],
          asciiDiagram: `[while loop]:    කොන්දේසිය පරීක්ෂා කරයි ──► සත්‍ය නම් ──► ධාවනය වේ
                       │
                     අසත්‍ය නම් (කිසිවිටෙකත් ධාවනය නොවේ)

[do-while loop]: අවම වශයෙන් 1 වරක් ධාවනය වේ ──► පසුව කොන්දේසිය බලයි`
        },
        {
          title: "34.3 break සහ continue පාලක විධාන",
          content: [
            "• break: ලූප් එක සම්පූර්ණයෙන්ම නවත්වා ඉන් පිටතට පනී. (උදා: සොයන අයිතමය හමු වූ සැණින් ඉතිරි වට නතර කිරීම).",
            "• continue: වත්මන් වටය පමණක් මඟහැර (Skip කර) ඊළඟ වටයට පනී. (උදා: ඉරට්ටේ සංඛ්‍යා මඟහැර ඔත්තේ සංඛ්‍යා පමණක් මුද්‍රණය කිරීම)."
          ]
        },
        {
          title: "34.4 Infinite Loops අනතුර සහ ගුණන වගු කේතය",
          content: [
            "ලූප් එකේ කොන්දේසිය කිසිදා අසත්‍ය නොවුවහොත් (උදා: i++ ලිවීම අමතක වීමෙන්), එය Infinite Loop එකක් බවට පත්වී බ්‍රවුසරය සම්පූර්ණයෙන්ම හිර වේ (Browser Crash).",
            "පහත දැක්වෙන්නේ ලූප්ස් සහ ගුණන වගුවක් මුද්‍රණය කරන ප්‍රායෝගික කේතයයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Loops Mastery & Multiplication Table",
              code: `// 1. for loop: 1 සිට 5 දක්වා
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // 3 මඟහරී
  }
  console.log("අංකය: " + i); // 1, 2, 4, 5
}

// 2. while loop
let count = 3;
while (count > 0) {
  console.log("ගණන් කිරීම: " + count);
  count--; // අගය අඩු කිරීම අනිවාර්යයි!
}

// 3. 5 ගුණන වගුව (Multiplication Table)
const multiplier = 5;
console.log(\`=== \${multiplier} ගුණන වගුව ===\`);
for (let i = 1; i <= 10; i++) {
  console.log(\`\${multiplier} x \${i} = \${multiplier * i}\`);
}`
            }
          ]
        }
      ],
      keyPoints: [
        "ලූප් එකක් ඇතුළත විචල්‍යයන් සෑදීමේදී සැමවිටම let භාවිතා කරන්න.",
        "continue මඟින් වත්මන් වටය skip කරන අතර break මඟින් සම්පූර්ණ loop එක නතර කරයි.",
        "Infinite Loop එකක් වළක්වා ගැනීමට loop counter එක නිවැරදිව increment/decrement වන බව තහවුරු කරගන්න."
      ],
      exercises: [
        { id: 1, question: "while සහ do-while අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "1 සිට 20 දක්වා ඇති ඉරට්ටේ සංඛ්‍යා පමණක් මුද්‍රණය කරන for loop එකක් ලියන්න." }
      ]
    },
    {
      id: 35,
      volumeId: 3,
      chapterNumber: 35,
      title: "ශ්‍රිත හෙවත් ෆන්ක්ෂන්ස් - කේතය නැවත භාවිතා කිරීම (Functions)",
      englishTitle: "Functions - Code Reusability & Scope",
      pageRange: "පිටu 107 - 110",
      description: "Functions, DRY සංකල්පය, තේ යන්ත්‍ර උපමාව (Input, Process, Output), Parameters vs Arguments, return, සහ Function Scope.",
      learningObjectives: [
        "ශ්‍රිතයක් (Function) යනු කුමක්ද සහ එය DRY සඳහා අත්‍යවශ්‍ය වන්නේ ඇයිද යන්න",
        "Function Declaration සහ ES6 Arrow Functions (() => {})",
        "Parameters (පරාමිතීන්) සහ Arguments (තර්කයන්) අතර වෙනස",
        "return මඟින් අගයක් ආපසු ලබා දීම සහ Function Scope (Local Scope) වටහා ගැනීම",
        "Default Parameters මඟින් පෙරනිමි අගයන් සැකසීම"
      ],
      sections: [
        {
          title: "35.1 තේ යන්ත්‍ර උපමාව (The Tea Machine)",
          content: [
            "1. Input (ආදානය/පරාමිතීන්): ඔබ යන්ත්‍රයට තේ කොළ, සීනි සහ වතුර ලබා දෙයි.",
            "2. Process (සැකසීම): යන්ත්‍රය තුළ වතුර රත් වී, තේ කොළ සහ සීනි මිශ්‍ර වී තේ සෑදේ.",
            "3. Output (ප්‍රතිදානය/Return): ඔබට උණුසුම් තේ කෝප්පයක් ලැබේ.",
            "ඔබට තේ අවශ්‍ය සෑම වතාවකම යන්ත්‍රය අලුතින් සෑදීමට අවශ්‍ය නැත. ඔබ කළ යුත්තේ ද්‍රව්‍ය ලබා දී බොත්තම එබීම (Function Call) පමණි."
          ]
        },
        {
          title: "35.2 Arrow Functions (නූතන ඊතල ශ්‍රිත)",
          content: [
            "ES6 හිදී හඳුන්වා දුන් Arrow Functions (() => {}) මඟින් ශ්‍රිත ලිවීම ඉතා කෙටි සහ අලංකාර වේ:",
            "පැරණි ක්‍රමය: function add(a, b) { return a + b; }",
            "Arrow ක්‍රමය: const add = (a, b) => a + b; (තනි පේළියෙන් return වේ!)"
          ]
        },
        {
          title: "35.3 Parameters, Default Parameters සහ return හි රහස්",
          content: [
            "• Parameters: ශ්‍රිතය නිර්මාණය කිරීමේදී වරහන් තුළ තබන විචල්‍ය නම් (Placeholder).",
            "• Arguments: ශ්‍රිතය ක්‍රියාත්මක කරන විට සැබවින්ම ලබා දෙන අගයන්.",
            "• Default Parameters: යම් හෙයකින් Argument එකක් නොලැබුණහොත් ක්‍රියාත්මක වන පෙරනිමි අගය (උදා: function greet(name = 'මිත්‍රයා')).",
            "• return රීතිය: return විධානය හමු වූ සැණින් ශ්‍රිතය එතැනින්ම අවසන් වේ. return ට පහළින් ලියන කිසිදු කේතයක් ක්‍රියාත්මක නොවේ!"
          ]
        },
        {
          title: "35.4 Scope (Global Scope vs Function Scope)",
          content: [
            "ශ්‍රිතයක් ඇතුළත let හෝ const මඟින් සාදන විචල්‍යයන් ඊට පිටතදී භාවිතා කළ නොහැක (Local/Function Scope). පිටත ඇති විචල්‍යයන් ශ්‍රිතය ඇතුළත භාවිත කළ හැක (Global Scope):"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Function Declarations & Arrow Functions",
              code: `// 1. Classic Function Declaration with Default Parameter
function calculateBill(price, taxRate = 0.08) {
  const total = price + (price * taxRate);
  return total; // ගණනය කළ අගය ආපසු එවයි
}

const myBill = calculateBill(1000); // taxRate පෙරනිමියෙන් 0.08 වේ
console.log("මුළු බිල්පත: රු. " + myBill); // 1080

// 2. Modern Arrow Function (Clean One-liner)
const multiply = (x, y) => x * y;
console.log("ගුණිතය: " + multiply(6, 7)); // 42

// 3. Scope Demonstration
const appVersion = "2.0"; // Global Scope

function testScope() {
  const secretKey = "xyz123"; // Local Scope
  console.log("App Version: " + appVersion); // ක්‍රියා කරයි
}

testScope();
// console.log(secretKey); // ❌ ReferenceError: secretKey is not defined`
            }
          ]
        }
      ],
      keyPoints: [
        "DRY (Don't Repeat Yourself) සංකල්පය සුරැකීමට Functions අත්‍යවශ්‍ය වේ.",
        "return විධානය ක්‍රියාත්මක වූ සැණින් ශ්‍රිතය එතැනින් නතර වේ.",
        "Arrow functions modern React සහ frontend කේතකරණයේ ප්‍රධානතම සම්මතයයි."
      ],
      exercises: [
        { id: 1, question: "Parameters සහ Arguments අතර වෙනස ඔබේ වචනයෙන් පැහැදිලි කරන්න." },
        { id: 2, question: "සංඛ්‍යාවක් ලබා දුන් විට එහි වර්ගය (Square) ආපසු ලබා දෙන Arrow function එකක් ලියන්න." }
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
        "දර්ශකය (Index) 0 සිට ආරම්භ වන බව දැනගැනීම (Zero-based Indexing)",
        "අරාවක දිග (.length) සහ අගයන් යාවත්කාලීන කිරීම",
        "මූලික Methods: push() (අගට එකතු කිරීම), pop() (අගින් ඉවත් කිරීම), unshift() (මුලට එකතු කිරීම), shift() (මුලින් ඉවත් කිරීම)",
        "for...of සහ forEach() මඟින් අරාවක අයිතම එකින් එක කියවීම"
      ],
      sections: [
        {
          title: "36.1 අරාවන් සහ බිත්තර පැකට්ටුව උපමාව",
          content: [
            "බිත්තර පැකට්ටුව උපමාව: සාමාන්‍ය විචල්‍යයක් යනු එක බිත්තරයක් තැබිය හැකි කුඩා කුප්පියකි. අරාවක් යනු බිත්තර 12ක් හෝ 30ක් එක පෙළට තැබිය හැකි බිත්තර ඇසුරුමකි (Egg Carton).",
            "ජාවාස්ක්‍රිප්ට් හිදී පළමු අයිතමය ගබඩා වන්නේ 0 වන ස්ථානයේය (Index 0)."
          ],
          asciiDiagram: `අරාව:     ["Apple", "Banana", "Mango", "Orange"]
             │         │         │        │
දර්ශකය:     [0]       [1]       [2]      [3]
දිග (length): 4`
        },
        {
          title: "36.2 මූලික Array Methods (push, pop, shift, unshift)",
          content: [
            "• push(item): අරාවේ අවසානයට අලුත් අයිතමයක් එක් කරයි.",
            "• pop(): අරාවේ අවසාන අයිතමය ඉවත් කර ආපසු දෙයි.",
            "• unshift(item): අරාවේ ආරම්භයට අලුත් අයිතමයක් එක් කරයි.",
            "• shift(): අරාවේ පළමු අයිතමය ඉවත් කරයි."
          ]
        },
        {
          title: "36.3 Array Iteration (forEach සහ for...of)",
          content: [
            "අරාවක ඇති සියලුම අයිතම එකින් එක පරිලෝකනය කිරීමට සම්ප්‍රදායික for loop වෙනුවට නූතන ක්‍රම 2ක් ඇත:",
            "1. for...of loop: for (const item of items) { ... }",
            "2. forEach method: items.forEach((item, index) => { ... })"
          ]
        },
        {
          title: "36.4 ප්‍රයෝජනවත් Array ක්‍රමවේද සහ කේත ආදර්ශ",
          content: [
            "• includes('Mango'): අරාවේ අදාළ අගය තිබේදැයි බලා true හෝ false දෙයි.",
            "• indexOf('Banana'): අදාළ අගය ඇති Index අංකය ලබා දෙයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Array Operations & Modern Iteration",
              code: `const fruits = ["කෙසෙල්", "අඹ", "දොඩම්"];

// 1. අගට එකතු කිරීම සහ අගින් ඉවත් කිරීම
fruits.push("ඇපල්"); // ["කෙසෙල්", "අඹ", "දොඩම්", "ඇපල්"]
const removedLast = fruits.pop(); // "ඇපල්" ඉවත් විය

// 2. අරාවේ අයිතමයක් තිබේදැයි පරීක්ෂාව
console.log("අඹ තිබේද: " + fruits.includes("අඹ")); // true

// 3. Modern forEach Iteration
console.log("=== පලතුරු ලැයිස්තුව ===");
fruits.forEach((fruit, index) => {
  console.log(\`\${index + 1}. \${fruit}\`);
});

// 4. අවසාන අයිතමය ලබා ගැනීමේ කෙටි මග:
const lastItem = fruits[fruits.length - 1];
console.log("අවසාන පලතුර: " + lastItem);`
            }
          ]
        }
      ],
      keyPoints: [
        "අරාවක පළමු අයිතමය සැමවිටම Index 0 වන අතර, අවසාන අයිතමය array[array.length - 1] වේ.",
        "push සහ pop අරාවේ අගට ක්‍රියා කරන බැවින් shift සහ unshift වලට වඩා කාර්යක්ෂම වේ (O(1) complexity).",
        "forEach සහ for...of මඟින් අරාවක අයිතම කියවීම ඉතා පහසු වේ."
      ],
      exercises: [
        { id: 1, question: "අරාවක දිග 6 නම්, එහි අවසාන අයිතමයේ Index අංකය කීයද?" },
        { id: 2, question: "push() සහ unshift() අතර වෙනස කුමක්ද?" }
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
        "වස්තුවක් තුළ ඇති ශ්‍රිත හෙවත් ක්‍රමවේද (Methods) සහ this මූලපදය",
        "Nested Objects සහ JSON (JavaScript Object Notation) පදනම"
      ],
      sections: [
        {
          title: "37.1 Objects සහ සැබෑ ලෝකයේ මෝටර් රථ උපමාව",
          content: [
            "මෝටර් රථයක් සලකන්න:",
            "• Properties (ගුණාංග): Brand ('Toyota'), Model ('Corolla'), Color ('White'), Year (2024).",
            "• Methods (ක්‍රියාකාරකම්): startEngine(), drive(), brake().",
            "ජාවාස්ක්‍රිප්ට් හිදී, යම්කිසි 'වස්තුවක්' පිළිබඳ ඇති සියලුම තොරතුරු සහ ක්‍රියාකාරකම් එකම තැනක ගබඩා කිරීමට Object භාවිතා කරයි."
          ]
        },
        {
          title: "37.2 Dot Notation එදිරිව Bracket Notation",
          content: [
            "වස්තුවක ඇති දත්තයක් කියවීමට ක්‍රම 2ක් ඇත:",
            "1. Dot Notation: user.name (සරල සහ බහුලව භාවිත වේ).",
            "2. Bracket Notation: user['name'] (යතුර විචල්‍යයක් ලෙස පවතින විට හෝ හිස්තැන් ඇති විට අනිවාර්යයෙන්ම මෙය යෙදිය යුතුය: user[keyName])."
          ]
        },
        {
          title: "37.3 Methods සහ this මූලපදය",
          content: [
            "වස්තුවක් ඇතුළත ලියන ශ්‍රිතයක් Method එකක් ලෙස හඳුන්වයි.",
            "this මූලපදයෙන් අදහස් වන්නේ: 'මෙම ශ්‍රිතය අයිති වස්තුව' (Current object reference) යන්නයි. this.firstName මඟින් එම වස්තුවේම ඇති firstName ගුණාංගය කියවනු ලැබේ."
          ]
        },
        {
          title: "37.4 Nested Objects සහ සම්පූර්ණ කේතය",
          content: [
            "වස්තුවක් ඇතුළත තවත් වස්තූන් (Nested Objects) සහ අරාවන් ගබඩා කළ හැක. ලොව අන්තර්ජාලය පුරා API දත්ත හුවමාරු වන JSON ආකෘතියේ පදනම මෙයයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Object Mastery: Methods & this",
              code: `const developer = {
  firstName: "කසුන්",
  lastName: "කල්හාර",
  age: 24,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "කොළඹ",
    postalCode: 10100
  },
  // Method:
  getFullName: function() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  introduce: function() {
    console.log(\`ආයුබෝවන්, මම \${this.getFullName()}. මම \${this.address.city} හි පදිංචි වෙමි.\`);
  }
};

// දත්ත කියවීම:
console.log(developer.firstName);         // "කසුන්" (Dot notation)
console.log(developer["age"]);             // 24 (Bracket notation)
console.log(developer.address.city);      // "කොළඹ" (Nested object)
developer.introduce(); // "ආයුබෝවන්, මම කසුන් කල්හාර..."`
            }
          ]
        }
      ],
      keyPoints: [
        "Array යනු අංකිත ලැයිස්තුවකි (Indexed list); Object යනු යතුරු-අගය යුගල (Key-Value) ගබඩාවකි.",
        "JSON (JavaScript Object Notation) සම්පූර්ණයෙන්ම පදනම් වී ඇත්තේ Object සංකල්පය මතය.",
        "this මඟින් ක්‍රියාත්මක වන මොහොතේ අදාළ වස්තුව නිරූපණය කරයි."
      ],
      exercises: [
        { id: 1, question: "Dot Notation සහ Bracket Notation අතර වෙනස කුමක්ද?" },
        { id: 2, question: "වස්තුවක් තුළ method එකකදී this යෙදීමේ වැදගත්කම කුමක්ද?" }
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
        "DOM (Document Object Model) යනු බ්‍රවුසරය මතකයේ තබා ගන්නා ගස් සිතියම බව තේරුම් ගැනීම",
        "document.getElementById() සහ modern document.querySelector() මඟින් ටැග් අල්ලා ගැනීම",
        "innerText vs textContent vs innerHTML ආරක්ෂාව සහ වෙනස්කම්",
        ".style ගුණාංගය (camelCase) මඟින් CSS හැඩතල ගතිකව වෙනස් කිරීම",
        "classList (add, remove, toggle) මඟින් CSS classes පාලනය"
      ],
      sections: [
        {
          title: "38.1 DOM සංකල්පය සහ රූපවාහිනී රිමෝට් එක උපමාව",
          content: [
            "රූපවාහිනිය සහ රිමෝට් එක උපමාව: HTML පිටුව යනු රූපවාහිනී යන්ත්‍රයයි. JavaScript යනු රිමෝට් එකයි (Remote Control). රිමෝට් එක මඟින් ඩොම් එක හරහා අපට රූපවාහිනියේ නාලිකාව, ශබ්දය හෝ වර්ණය ක්ෂණිකව වෙනස් කළ හැක.",
            "බ්‍රවුසරය HTML ගොනුව කියවා මතකය තුළ 'DOM Tree' නම් ගසක හැඩයේ වස්තු පද්ධතියක් ගොඩනඟයි."
          ],
          asciiDiagram: `document
   └── <html>
        ├── <head>
        │    └── <title>
        └── <body>
             ├── <h1 id="title">
             └── <button class="btn">`
        },
        {
          title: "38.2 DOM මූලිකාංග තෝරා ගැනීම (Selection)",
          content: [
            "• document.getElementById('title'): අදාළ ID එක ඇති තනි ටැගය ක්ෂණිකව අල්ලා ගනී.",
            "• document.querySelector('.card'): CSS Selector ආකෘතියෙන්ම පළමු මූලිකාංගය අල්ලා ගනී (#id, .class, tag).",
            "• document.querySelectorAll('.card'): ගැලපෙන සියලුම ටැග් NodeList එකක් ලෙස ලබා දෙයි."
          ]
        },
        {
          title: "38.3 අන්තර්ගතය වෙනස් කිරීම සහ Security අනතුර",
          content: [
            "• innerText: පරිශීලකයාට පෙනෙන අකුරු පමණක් වෙනස් කරයි.",
            "• innerHTML: HTML ටැග් සමඟින්ම අන්තර්ගතය ප්‍රතිස්ථාපනය කරයි.",
            "Security අනතුර: පරිශීලකයන් Form එකකින් ඇතුළත් කරන දත්ත කෙලින්ම innerHTML එකට දැමීමෙන් හැකර්වරුන්ට XSS (Cross-Site Scripting) ප්‍රහාර එල්ල කළ හැක! එබැවින් පෙළ සඳහා සැමවිටම innerText හෝ textContent භාවිතා කරන්න."
          ]
        },
        {
          title: "38.4 CSS Styles සහ classList පාලනය",
          content: [
            "CSS හි background-color යන්න JavaScript හි backgroundColor (camelCase) ලෙස ලියයි. වඩාත් ප්‍රශස්ත ක්‍රමය වන්නේ CSS Class සාදා classList.add() හෝ classList.toggle() මඟින් පාලනය කිරීමයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "DOM Selection, Text & Style Manipulation",
              code: `// 1. ටැගය අල්ලා ගැනීම
const titleElement = document.querySelector("#main-title");
const actionBtn = document.querySelector(".btn-submit");

// 2. පෙළ වෙනස් කිරීම
titleElement.innerText = "සාදරයෙන් පිළිගනිමු!";

// 3. Inline CSS මෝස්තර වෙනස් කිරීම (camelCase)
titleElement.style.color = "#38bdf8";
titleElement.style.fontSize = "2.5rem";

// 4. classList මඟින් පිරිසිදුව CSS හැඩගැන්වීම (Best Practice)
actionBtn.classList.add("btn-active");
actionBtn.classList.remove("btn-disabled");

// Toggle: Class එක ඇත්නම් ඉවත් කරයි, නැත්නම් එක් කරයි
titleElement.classList.toggle("highlight");`
            }
          ]
        }
      ],
      keyPoints: [
        "DOM Selection සඳහා නවීන ප්‍රමිතිය වන්නේ document.querySelector() සහ querySelectorAll() ය.",
        "XSS ප්‍රහාර වළක්වා ගැනීමට පරිශීලක දත්ත සඳහා innerHTML වෙනුවට innerText භාවිතා කරන්න.",
        "සෘජු inline styles වෙනුවට classList.add() / classList.toggle() භාවිතා කිරීම කේතය පිරිසිදුව තබයි."
      ],
      exercises: [
        { id: 1, question: "innerText සහ innerHTML අතර ඇති ප්‍රධාන වෙනස සහ ආරක්ෂක බලපෑම කුමක්ද?" },
        { id: 2, question: "classList.toggle() මඟින් සිදු කරන්නේ කුමක්ද?" }
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
        "e.preventDefault() මඟින් ෆෝරමයක් Submit වන විට පිටුව Refresh වීම නැවැත්වීම",
        "Event Bubbling සහ e.stopPropagation() භාවිතය"
      ],
      sections: [
        {
          title: "39.1 සිදුවීම් සහ දොර සීනුව උපමාව (Doorbell Analogy)",
          content: [
            "දොර සීනුව උපමාව:",
            "• Event (සිදුවීම): අමුත්තෙකු පැමිණ දොර සීනුවේ ස්විචය එබීම (Click event).",
            "• Listener (සවන්දෙන්නා): සීනුවේ ස්විචය නාද යන්ත්‍රය සමඟ සම්බන්ධ කර ඇති විදුලි කම්බිය (addEventListener).",
            "• Handler/Response (ප්‍රතිචාරය): ගෙදර ඇතුළත 'ඩිං ඩොං' ශබ්දය නාද වීම සහ ඔබ ගොස් දොර හැරීම (Callback function)."
          ],
          asciiDiagram: `[පරිශීලකයා ක්ලික් කරයි] ──► Event හටගනී ('click')
                                │
[addEventListener] ────────► සිදුවීමට සවන් දෙයි
                                │
[Callback Function] ───────► නියමිත කේතය ක්‍රියාත්මක කරයි`
        },
        {
          title: "39.2 addEventListener සහ විවිධ Events වර්ග",
          content: [
            "වෙබ් බ්‍රවුසරයක නිතර භාවිතා වන Events වර්ග:",
            "• Mouse Events: 'click', 'dblclick', 'mouseenter', 'mouseleave'.",
            "• Keyboard Events: 'keydown', 'keyup', 'keypress'.",
            "• Form Events: 'submit', 'input' (ටයිප් කරන සෑම අකුරකටම), 'change' (අගය වෙනස් වූ විට)."
          ]
        },
        {
          title: "39.3 Event Object (e) සහ e.preventDefault()",
          content: [
            "Event Listener ශ්‍රිතයකට බ්‍රවුසරය ස්වයංක්‍රීයව Event Object එකක් (බොහෝවිට e හෝ event ලෙස නම් කරයි) ලබා දෙයි:",
            "• e.target: සිදුවීම හටගත් නිශ්චිත HTML ටැගය.",
            "• e.clientX, e.clientY: මවුසය ක්ලික් කළ නිශ්චිත ඛණ්ඩාංක (Coordinates).",
            "• e.preventDefault(): බ්‍රවුසරයේ සාමාන්‍ය ස්වභාවය අවලංගු කරයි. (උදා: <form> එකක් submit වන විට පිටුව නැවත reload වීම නවතා දත්ත background එකෙන් යැවීමට මෙය අත්‍යවශ්‍ය වේ)."
          ]
        },
        {
          title: "39.4 Event Bubbling සහ e.stopPropagation()",
          content: [
            "HTML ටැගයක් ක්ලික් කළ විට එම Event එක බුබුලක් මෙන් (Bubble up) එහි මව් ටැග් (Parent elements) දිගේ ඉහළට ගමන් කරයි. එය නැවැත්වීමට e.stopPropagation() යොදයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Interactive Event Handling & Form Control",
              code: `const submitBtn = document.querySelector("#submitBtn");
const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");

// 1. Click Event with Coordinates
submitBtn.addEventListener("click", function(e) {
  console.log(\`ක්ලික් කළ ස්ථානය: X=\${e.clientX}, Y=\${e.clientY}\`);
});

// 2. Real-time Input Validation
emailInput.addEventListener("input", function(e) {
  console.log("ටයිප් කරන පෙළ: " + e.target.value);
});

// 3. Form Submit Prevention (Crucial for Single Page Apps)
loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // පිටුව refresh වීම වළක්වයි!
  console.log("දත්ත සර්වර් එකට යැවීමට සූදානම්...");
});`
            }
          ]
        }
      ],
      keyPoints: [
        "addEventListener තුළ 'onclick' නොව 'click' ලෙස ලියන්න.",
        "Form submit කිරීමේදී පිටුව reload වීම වැළැක්වීමට e.preventDefault() අනිවාර්යයෙන්ම යොදන්න.",
        "ශ්‍රිතය ලබා දීමේදී handleClick() නොව handleClick ලෙස වරහන් රහිතව නම ලබා දෙන්න."
      ],
      exercises: [
        { id: 1, question: "e.preventDefault() භාවිතා කරන්නේ කුමන හේතුවක් සඳහාද?" },
        { id: 2, question: "e.target සහ e.currentTarget අතර ඇති වෙනස කුමක්ද?" }
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
        "මකා දැමීමේ (Delete) බොත්තම සකස් කිරීම සහ li.remove()",
        "Enter යතුර එබූ විටද කාර්යය ලැයිස්තුවට එකතු වන Keyboard Event හැසිරවීම"
      ],
      sections: [
        {
          title: "40.1 To-Do List App සැලසුම සහ ගෘහ නිර්මාණ ශිල්පය",
          content: [
            "අප අද නිර්මාණය කරන්නේ 'වැඩ ලැයිස්තු පද්ධතියක්' (To-Do List App) ය. ඕනෑම Frontend Developer කෙනෙකු තම මුල් කාලයේදී අනිවාර්යයෙන්ම නිර්මාණය කළ යුතු සන්ධිස්ථාන ව්‍යාපෘතියකි.",
            "අවශ්‍ය කොටස්:",
            "• Input Box: නව කාර්යය ටයිප් කිරීමට.",
            "• Add Button: ලැයිස්තුවට එක් කිරීමට.",
            "• <ul> ලැයිස්තුව: ගතිකව <li> ටැග් එක්වන ස්ථානය.",
            "• කාර්යයක් මත ක්ලික් කළ විට Completed (ඉරක් ඇඳීම) වීම.",
            "• Delete බොත්තම එබූ විට ලැයිස්තුවෙන් මැකී යාම."
          ]
        },
        {
          title: "40.2 createElement සහ appendChild මඟින් ගතිකව ටැග් සෑදීම",
          content: [
            "• document.createElement('li'): මතකය තුළ නව HTML මූලිකාංගයක් තනයි (තවම පිටුවේ නොපෙනේ).",
            "• parent.appendChild(child): එම මූලිකාංගය සැබෑ HTML පිටුවේ නියමිත ස්ථානයට ඇතුළත් කර පෙන්වයි."
          ]
        },
        {
          title: "40.3 Event Delegation සහ e.stopPropagation() ආරක්ෂාව",
          content: [
            "Delete බොත්තම ක්ලික් කරන විට එය ඇත්තේ <li> එක ඇතුළත බැවින්, Delete එක ක්ලික් කළ විට <li> එකද ක්ලික් වී (completed වී) අනවශ්‍ය ගැටලුවක් හට ගනී. එය වැළැක්වීමට e.stopPropagation() අනිවාර්යයෙන්ම යෙදිය යුතුය!"
          ]
        },
        {
          title: "40.4 සම්පූර්ණ To-Do List JavaScript කේතය",
          content: [
            "පහත දැක්වෙන්නේ කිසිදු බාහිර පුස්තකාලයක් නොමැතිව (Pure Vanilla JavaScript) ලියන ලද සම්පූර්ණ ක්‍රියාකාරී To-Do List පද්ධතියයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Complete Interactive To-Do List Logic",
              code: `const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("කරුණාකර යම් කාර්යයක් ඇතුළත් කරන්න!");
    return;
  }

  // 1. නව <li> මූලිකාංගයක් සෑදීම
  const li = document.createElement("li");
  li.className = "task-item";
  
  const span = document.createElement("span");
  span.innerText = taskText;
  li.appendChild(span);

  // 2. Click කළ විට Completed තත්ත්වයට මාරු කිරීම (Toggle)
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // 3. මකා දැමීමේ බොත්තම (Delete Button)
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✕";
  deleteBtn.className = "btn-delete";
  deleteBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // <li> එකේ click event එක ක්‍රියාත්මක වීම වළක්වයි!
    li.remove(); // DOM එකෙන් ඉවත් කරයි
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Input එක හිස් කර Cursor එක නැවත තැබීම
  taskInput.value = "";
  taskInput.focus();
}

// බොත්තම ක්ලික් කළ විට
addBtn.addEventListener("click", addTask);

// Enter යතුර එබූ විටද කාර්යය එක් කිරීම
taskInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});`
            }
          ]
        }
      ],
      keyPoints: [
        "createElement මඟින් මතකය තුළ ටැගයක් නිර්මාණය කරන අතර appendChild මඟින් එය DOM එකට එක් කරයි.",
        "Delete බොත්තමේ e.stopPropagation() නොයෙදුවහොත් <li> එකේ click event එකද ක්‍රියාත්මක වේ.",
        "taskInput.value.trim() මඟින් හිස් අවකාශ (Spaces) පමණක් ඇතුළත් කිරීම වළක්වයි."
      ],
      exercises: [
        { id: 1, question: "Delete බොත්තමේ e.stopPropagation() භාවිතා නොකළහොත් කුමක් සිදුවේද?" },
        { id: 2, question: "To-Do List එකට කාර්යයන් ගණන පෙන්වන Counter එකක් එක් කරන්නේ කෙසේද?" }
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
        "V8 Engine: Parser, AST, Ignition Interpreter සහ TurboFan JIT Compiler",
        "Execution Context (Memory Allocation Phase & Code Execution Phase)",
        "Call Stack හි තැටි තට්ටුව සහ Single-threaded Concurrency",
        "Hoisting සහ Temporal Dead Zone (TDZ)",
        "Event Loop, Web APIs, Callback Queue සහ Microtask Queue",
        "Closures: ශ්‍රිතයකට තම උපන් වටපිටාව මතක තබා ගැනීමේ මායා බලය"
      ],
      sections: [
        {
          title: "41.1 Google V8 Engine එක ක්‍රියා කරන්නේ කෙසේද?",
          content: [
            "ඔබ ලියන JavaScript කේතය බ්‍රවුසරයට කෙලින්ම ක්‍රියාත්මක කළ නොහැක. V8 එන්ජිම එය පියවර 4කින් සකසයි:",
            "1. Parser: ඔබගේ කේතය කියවා ව්‍යාකරණ පරීක්ෂා කර AST (Abstract Syntax Tree) එකක් සාදයි.",
            "2. Ignition Interpreter: AST එක කියවා වේගයෙන් Bytecode බවට පත් කරයි.",
            "3. TurboFan Optimizer: නැවත නැවත ක්‍රියාත්මක වන කේත (Hot Code) අතිශය වේගවත් Machine Code බවට ප්‍රශස්ත කරයි."
          ],
          asciiDiagram: `JS Code ──► Parser ──► AST ──► Ignition (Bytecode)
                                      │
                               TurboFan (Optimized Machine Code)`
        },
        {
          title: "41.2 Execution Context සහ Call Stack",
          content: [
            "ජාවාස්ක්‍රිප්ට් කේතයක් ධාවනය වන සෑම අවස්ථාවකම Execution Context එකක් නිර්මාණය වේ. එහි අදියර 2කි:",
            "• අදියර 1 (Memory Creation Phase): විචල්‍යයන් සහ ශ්‍රිත සඳහා මතකය වෙන් කරයි (Hoisting සිදුවන්නේ මෙහිදීය).",
            "• අදියර 2 (Code Execution Phase): කේතය පේළියෙන් පේළිය කියවා ක්‍රියාත්මක කරයි.",
            "Call Stack: මෙය කේත ක්‍රියාත්මක වන තැටි තට්ටුවකි (LIFO - Last In First Out). ජාවාස්ක්‍රිප්ට් Single-threaded බැවින් එක වරකදී Call Stack එක තුළ එක් ශ්‍රිතයක් පමණක් ක්‍රියාත්මක වේ."
          ]
        },
        {
          title: "41.3 Event Loop සහ අසමකාලීන (Async) මායාව",
          content: [
            "ජාවාස්ක්‍රිප්ට් Single-threaded නම් setTimeout, Fetch වැනි දිගු වේලාවක් ගතවන වැඩ කරන්නේ කෙසේද?",
            "පිළිතුර: බ්‍රවුසරයේ ඇති Web APIs පසුබිමෙන් එම කාර්යයන් කර අවසන් වූ පසු Callback Queue එකට දමයි.",
            "Event Loop එක නිරන්තරයෙන් Call Stack එක දෙස බලා සිටී. Call Stack එක හිස් වූ සැණින් Callback Queue එකේ ඇති වැඩ Stack එකට තල්ලු කරයි!"
          ]
        },
        {
          title: "41.4 Closures (වැසුම් සංකල්පය)",
          content: [
            "Closure යනු ශ්‍රිතයකට තම පිටත වටපිටාවේ (Lexical Scope) ඇති විචල්‍යයන්, පිටත ශ්‍රිතය ක්‍රියාත්මක වී අවසන් වූ පසුවද මතකයේ රඳවා ගැනීමේ හැකියාවයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Closure & Lexical Scope in Action",
              code: `function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable (පිටතින් වෙනස් කළ නොහැක)

  return {
    deposit: function(amount) {
      balance += amount;
      console.log(\`තැන්පත් කළා: \${amount} | නව ශේෂය: \${balance}\`);
    },
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(5000);
myAccount.deposit(1500); // 6500
console.log("ශේෂය: " + myAccount.getBalance()); // 6500

// සෘජුවම balance විචල්‍යයට පිටතින් ප්‍රවේශ විය නොහැක (Data Encapsulation)!
// console.log(balance); // ReferenceError`
            }
          ]
        }
      ],
      keyPoints: [
        "JavaScript යනු Single-threaded, Synchronous භාෂාවක් වුවද Event Loop සහ Web APIs මඟින් Asynchronous බලය ලබා ගනී.",
        "var විචල්‍යයන් Hoisting වලදී undefined ලෙස සකසන අතර let/const විචල්‍යයන් Temporal Dead Zone (TDZ) හි පවතී.",
        "Closures මඟින් දත්ත ආරක්ෂා කිරීම (Data Privacy / Encapsulation) ඉතා පහසුවෙන් කළ හැක."
      ],
      exercises: [
        { id: 1, question: "Call Stack සහ Event Loop අතර සම්බන්ධය සරලව පැහැදිලි කරන්න." },
        { id: 2, question: "Closure එකක් මඟින් දත්ත ආරක්ෂා කිරීමේ (Data Privacy) වාසිය කුමක්ද?" }
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
        "String Methods භාවිතයෙන් අකුරු හැසිරවීම (slice, replace, toUpperCase, trim, split)",
        "Math Object (floor, ceil, round, random) භාවිතයෙන් ගණිතමය ගණනය කිරීම් සහ අහඹු අංක සෑදීම",
        "DOM Traversal: parentElement, children, nextElementSibling හරහා ඩොම් ගස තුළ ගමන් කිරීම",
        "Primitive Types (Value) සහ Reference Types (Array/Object by reference) අතර මූලික වෙනස"
      ],
      sections: [
        {
          title: "42.1 ප්‍රයෝජනවත් String Methods",
          content: [
            "• trim(): දෙකෙළවර ඇති අනවශ්‍ය හිස්තැන් ඉවත් කරයි.",
            "• toUpperCase() / toLowerCase(): අකුරු කැපිටල් හෝ සිම්පල් කරයි.",
            "• includes('word'): යම් වචනයක් අඩංගු දැයි බලයි.",
            "• slice(start, end): අකුරු වැලක නිශ්චිත කොටසක් කපා ගනී.",
            "• split(','): අකුරු වැලක් අරාවක් (Array) බවට කඩා වෙන් කරයි."
          ]
        },
        {
          title: "42.2 Math Object සහ Random Number Generator",
          content: [
            "• Math.floor(): දශම ඉවත් කර පහළ පූර්ණ සංඛ්‍යාව ලබා දෙයි (4.9 ➔ 4).",
            "• Math.ceil(): ඉහළ පූර්ණ සංඛ්‍යාව ලබා දෙයි (4.1 ➔ 5).",
            "• Math.round(): ආසන්නතම පූර්ණ සංඛ්‍යාවට වටයයි.",
            "• Math.random(): 0 (ඇතුළුව) සහ 1 (නොඇතුළුව) අතර අහඹු දශමයක් දෙයි.",
            "1 සිට 10 දක්වා අහඹු අංකයක් සෑදීමේ සූත්‍රය: Math.floor(Math.random() * 10) + 1;"
          ]
        },
        {
          title: "42.3 DOM Traversal (ඩොම් ගස දිගේ ගමන් කිරීම)",
          content: [
            "සෑම විටම querySelector මඟින් ටැග් සෙවීම වෙනුවට, දැනට සිටින ටැගයට සාපේක්ෂව ගමන් කළ හැක:",
            "• element.parentElement: මව් ටැගය ලබා ගනී.",
            "• element.children: දරු ටැග් ලැයිස්තුව ලබා ගනී.",
            "• element.nextElementSibling: ඊළඟට ඇති සහෝදර ටැගය ලබා ගනී."
          ]
        },
        {
          title: "42.4 Primitive (Value) vs Reference Types",
          content: [
            "• Primitive Types (Number, String, Boolean): අගය පමණක් මතකයේ තබයි. එකක් වෙනස් කළ විට අනෙක වෙනස් නොවේ.",
            "• Reference Types (Objects, Arrays): මතකයේ ලිපිනය (Memory Address/Pointer) බෙදා ගනී. එබැවින් එකක් වෙනස් කළ විට අනෙකද වෙනස් වේ!"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Strings, Math & Reference Types Demo",
              code: `// 1. String Manipulation
const email = "   Kasun@Example.com   ";
const cleanEmail = email.trim().toLowerCase();
console.log(cleanEmail); // "kasun@example.com"

// 2. Random Dice Roll (1 සිට 6 දක්වා දාදු කැටයක් පෙරළීම)
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("දාදු කැටයේ අගය: " + diceRoll);

// 3. Primitive vs Reference Demonstration:
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a වෙනස් නොවීය!)

const list1 = [1, 2, 3];
const list2 = list1; // Reference එකක්!
list2.push(4);
console.log(list1); // [1, 2, 3, 4] (list1 ද වෙනස් විය!)

// Reference ගැටලුවට විසඳුම: Spread Operator පිටපත් කිරීම
const safeCopy = [...list1];
safeCopy.push(99);
console.log(list1); // [1, 2, 3, 4] (ආරක්ෂිතයි)`
            }
          ]
        }
      ],
      keyPoints: [
        "Math.floor(Math.random() * N) + 1 මඟින් 1 සිට N දක්වා අහඹු අංකයක් ජනනය කළ හැක.",
        "Arrays සහ Objects Reference Types බැවින් පිටපත් කිරීමේදී Spread Operator ([...arr], {...obj}) භාවිතා කළ යුතුය."
      ],
      exercises: [
        { id: 1, question: "1 සිට 100 දක්වා අහඹු අංකයක් ජනනය කරන JavaScript කේතය ලියන්න." },
        { id: 2, question: "Reference Types පිටපත් කිරීමේදී Spread Operator භාවිතය අත්‍යවශ්‍ය වන්නේ ඇයි?" }
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
        "ජාවාස්ක්‍රිප්ට් හි Prototypal Inheritance සහ Prototype Chain ක්‍රියා කරන අයුරු",
        "Microtask Queue (Promises) එක සැමවිටම Macrotask Queue (setTimeout) එකට වඩා ප්‍රමුඛතාවය ගන්නා බව",
        "this හි Context පාලනය සඳහා call(), apply(), සහ bind() භාවිතය",
        "Functional Programming පදනම: map(), filter(), reduce() සහ Immutability"
      ],
      sections: [
        {
          title: "43.1 Prototypal Inheritance සහ Prototype Chain",
          content: [
            "ජාවාස්ක්‍රිප්ට් වල සෑම Object එකකටම 'Prototype' නම් සැඟවුණු මව් වස්තුවක් ඇත. ඔබ array.push() හෝ string.toUpperCase() අමතන විට, එම ශ්‍රිත අදාළ අරාව තුළ කෙලින්ම නැතත්, එය Prototype Chain එක හරහා Array.prototype වෙතින් සොයා ගනී."
          ]
        },
        {
          title: "43.2 Microtask Queue එදිරිව Macrotask Queue",
          content: [
            "Event Loop එකේ ප්‍රමුඛතා නීතිය:",
            "1. Call Stack එකේ සියලු කේත ක්‍රියාත්මක කර අවසන් කරයි.",
            "2. Microtask Queue (Promises, queueMicrotask) හි ඇති සියලුම කාර්යයන් සම්පූර්ණයෙන්ම ඉවර කරයි.",
            "3. ඉන්පසුව පමණක් Macrotask Queue (setTimeout, setInterval, DOM Events) වෙත යයි.",
            "එබැවින් setTimeout(fn, 0) ට වඩා Promise.resolve() සැමවිටම පළමුව ධාවනය වේ!"
          ],
          asciiDiagram: `Call Stack ──► Microtask Queue (Promises) ──► Macrotask Queue (setTimeout)`
        },
        {
          title: "43.3 Explicit Binding: call(), apply(), සහ bind()",
          content: [
            "ශ්‍රිතයක් ක්‍රියාත්මක කිරීමේදී this අගය අපට අවශ්‍ය වස්තුවකට බලෙන් පැවරීමට (Explicit Binding) මෙම ක්‍රමවේද 3 යොදයි:",
            "• call(thisArg, arg1, arg2): ක්ෂණිකව ශ්‍රිතය ක්‍රියාත්මක කරයි.",
            "• apply(thisArg, [args]): තර්කයන් අරාවක් (Array) ලෙස ලබා දී ක්ෂණිකව ක්‍රියාත්මක කරයි.",
            "• bind(thisArg): ක්ෂණිකව ක්‍රියාත්මක නොකර, this ස්ථිරව බඳින ලද අලුත් ශ්‍රිතයක් ආපසු ලබා දෙයි (React හි Event Handler සඳහා බහුලව යොදයි)."
          ]
        },
        {
          title: "43.4 map, filter සහ reduce (Functional Power)",
          content: [
            "නූතන මෘදුකාංග ඉංජිනේරු විද්‍යාවේදී මුල් දත්ත වෙනස් නොකර (Immutability) නව දත්ත සැකසීමට map, filter, reduce යොදයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Microtasks & Modern Array Methods",
              code: `// 1. Microtask vs Macrotask Event Loop Priority:
console.log("1. ආරම්භය");

setTimeout(() => {
  console.log("4. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise)");
});

console.log("2. අවසානය");
// ප්‍රතිඵලයේ පිළිවෙළ: 1 ➔ 2 ➔ 3 ➔ 4 !

// 2. map, filter, reduce Mastery:
const numbers = [10, 20, 30, 40, 50];

// Filter: 25 ට වැඩි අගයන් පමණක් ගැනීම
const filtered = numbers.filter(n => n > 25); // [30, 40, 50]

// Map: සෑම අගයක්ම දෙගුණ කිරීම
const doubled = filtered.map(n => n * 2); // [60, 80, 100]

// Reduce: සියල්ලේ මුළු එකතුව සෙවීම
const totalSum = doubled.reduce((acc, curr) => acc + curr, 0);
console.log("මුළු එකතුව: " + totalSum); // 240`
            }
          ]
        }
      ],
      keyPoints: [
        "Event Loop එක සැමවිටම Macrotask (setTimeout) වලට පෙර Microtask (Promises) ක්‍රියාත්මක කරයි.",
        "map(), filter(), reduce() මඟින් මුල් අරාවට හානියක් නොකර (Immutability) නව දත්ත නිර්මාණය කරයි.",
        "bind() මඟින් this ස්ථිරව බැඳුණු නව ශ්‍රිතයක් ආපසු ලබා දෙයි."
      ],
      exercises: [
        { id: 1, question: "setTimeout(..., 0) සහ Promise.resolve().then(...) අතරින් පළමුව ක්‍රියාත්මක වන්නේ කුමක්ද? හේතුව දක්වන්න." },
        { id: 2, question: "call, apply සහ bind අතර ප්‍රධාන වෙනස්කම් මොනවාද?" }
      ]
    }
  ]
};
