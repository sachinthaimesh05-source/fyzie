import { Chapter } from '../../types/book';

export const volume6Chapters: Chapter[] = [
  {
    id: "ch-60",
    chapterNumber: 60,
    title: "රියැක්ට් (React.js) හැඳින්වීම සහ අතථ්‍ය ඩොම්",
    englishTitle: "Introduction to React and the Virtual DOM",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 181,
    learningObjectives: [
      "රියැක්ට් (React) යනු කුමක්ද සහ එහි ඓතිහාසික පසුබිම (Jordan Walke, Facebook, 2013).",
      "පුස්තකාලයක් (Library) සහ රාමුවක් (Framework) අතර ඇති වෙනස.",
      "නියෝගාත්මක (Imperative) සහ ප්‍රකාශනශීලී (Declarative) ක්‍රමලේඛන රටා.",
      "අතථ්‍ය ඩොම් (Virtual DOM) සංකල්පය, Diffing සහ Reconciliation.",
      "සංරචක (Components) පදනම් කරගත් නිර්මාණකරණය.",
      "තනි පිටුවේ යෙදුම් (Single Page Applications - SPA) ක්‍රියාකාරීත්වය."
    ],
    sections: [
      {
        title: "60.1 React යනු කුමක්ද සහ Virtual DOM",
        content: [
          "රියැක්ට් (React) යනු වෙබ් අඩවි වල පරිශීලක අතුරුමුහුණත් (User Interfaces - UI) නිර්මාණය කිරීම සඳහා භාවිතා කරන, නිදහස් සහ විවෘත මූලාශ්‍ර ජාවාස්ක්‍රිප්ට් පුස්තකාලයකි.",
          "Imperative vs Declarative:",
          "• Imperative (Vanilla JS): පරිගණකයට වැඩක් කරන ආකාරය පියවරෙන් පියවර පැවසීම ('මේසයෙන් නැගිටින්න, කුස්සියට යන්න, වීදුරුවක් ගන්න, වතුර පුරවන්න').",
          "• Declarative (React): අවසානයේදී අවශ්‍ය ප්‍රතිඵලය කුමක්දැයි පමණක් පැවසීම ('මට වතුර වීදුරුවක් දෙන්න'). දත්ත 5 නම් තිරයේ 5 පෙන්වන්නැයි පවසයි. දත්ත වෙනස් වූ සැණින් තිරය ස්වයංක්‍රීයව වෙනස් වේ.",
          "Virtual DOM: සැබෑ DOM එක වෙනස් කිරීම කාලය ගතවන මිල අධික වැඩකි. React විසින් මතකයේ තබා ගන්නා සැහැල්ලු පිටපත Virtual DOM වේ. දත්ත වෙනස් වූ විට පැරණි හා අලුත් Virtual DOM සංසන්දනය කර (Diffing), වෙනස් විය යුතුම කොටස පමණක් සැබෑ DOM එකේ යාවත්කාලීන කරයි (Reconciliation)."
        ],
        asciiDiagram: `[ State වෙනස් වීම ]
          |
          v
[ අලුත් Virtual DOM එකක් සෑදේ ]
          |
          v
[ පැරණි සහ අලුත් සසඳයි (Diffing) ]
          |
          v
[ වෙනස පමණක් සැබෑ DOM එකේ යාවත්කාලීන කරයි (Reconciliation) ]`
      }
    ],
    keyPoints: [
      "React යනු Facebook (Meta) විසින් නිර්මාණය කළ Declarative UI පුස්තකාලයකි.",
      "Virtual DOM නිසා වෙබ් අඩවිය අතිශය වේගවත් වේ.",
      "මුළු වෙබ් අඩවියම කුඩා Components (සංරචක) වල එකතුවකි.",
      "SPA සංකල්පය නිසා පිටුව Refresh නොවී ක්ෂණිකව මාරු වේ."
    ],
    exercises: [
      "Imperative සහ Declarative අතර වෙනස සරල උදාහරණයකින් දක්වන්න.",
      "සැබෑ DOM එකට වඩා Virtual DOM එක වේගවත් වන්නේ කෙසේද?"
    ]
  },
  {
    id: "ch-61",
    chapterNumber: 61,
    title: "වැඩබිම සකස් කිරීම - Node.js සහ Vite",
    englishTitle: "Environment Setup with Node.js & Vite",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 184,
    learningObjectives: [
      "රියැක්ට් මෘදුකාංගයක් නිර්මාණය කිරීමට අවශ්‍ය මූලික මෙවලම්.",
      "Node.js සහ NPM (Node Package Manager).",
      "Vite (වීට්) Build Tool එකෙහි වාසි සහ අතීත CRA වෙනස.",
      "Vite හරහා පළමු රියැක්ට් ව්‍යාපෘතිය සෑදීම.",
      "රියැක්ට් ගොනු ව්‍යුහය (Folder Structure)."
    ],
    sections: [
      {
        title: "61.1 Vite ස්ථාපනය සහ Folder Structure",
        content: [
          "Node.js: ජාවාස්ක්‍රිප්ට් බ්‍රවුසරයෙන් පිටත පරිගණකයේ ක්‍රියාත්මක කරන පරිසරයයි.",
          "NPM: ලොව විශාලතම මෘදුකාංග ගබඩාවයි (Apps බාගත කරන Play Store වැනිය).",
          "Vite (වීට්): අතිශය වේගවත් නූතන Build Tool එකකි (Hot Module Replacement සහිතයි).",
          "විධානය: npm create vite@latest my-react-app -- --template react",
          "ප්‍රධාන ගොනු:",
          "• src/App.jsx: ප්‍රධාන සංරචකය.",
          "• src/main.jsx: මුළු React මෘදුකාංගයම index.html හි 'root' div එකට අමුණන ස්ථානය.",
          "• package.json: ව්‍යාපෘතියේ විස්තර සහ dependencies ලැයිස්තුව."
        ]
      }
    ],
    keyPoints: [
      "Vite මගින් තත්පරයකටත් අඩු කාලයකින් සංවර්ධන සේවාදායකය පණ ගන්වයි.",
      "node_modules ෆෝල්ඩරය කිසිවිටකත් GitHub වෙත නොයවා package.json පමණක් යවයි."
    ],
    exercises: [
      "Vite භාවිතා කර my-first-react-app නමින් ව්‍යාපෘතියක් සාදන්න.",
      "Node.js සහ NPM අතර ඇති සම්බන්ධය සරලව පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-62",
    chapterNumber: 62,
    title: "JSX - ජාවාස්ක්‍රිප්ට් තුළ HTML ලිවීම",
    englishTitle: "Understanding JSX (JavaScript XML)",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 187,
    learningObjectives: [
      "JSX යනු කුමක්ද සහ එහි වැදගත්කම.",
      "Babel මගින් JSX සාමාන්‍ය ජාවාස්ක්‍රිප්ට් බවට පරිවර්තනය වන ආකාරය (Transpilation).",
      "JSX ලිවීමේ රන් නීති 4: Single Parent, Close All Tags, camelCase Attributes, Reserved Words (className, htmlFor).",
      "JSX තුළ ජාවාස්ක්‍රිප්ට් ප්‍රකාශන Expressions { } භාවිතය."
    ],
    sections: [
      {
        title: "62.1 JSX නීති සහ ජාවාස්ක්‍රිප්ට් ඇතුළත් කිරීම",
        content: [
          "JSX යනු JavaScript XML යන්නෙහි කෙටි නමයි. එය ජාවාස්ක්‍රිප්ට් ගොනුවක් ඇතුළත HTML ආකාරයෙන් කේත ලිවීමට ඉඩ සලසයි.",
          "නීති 4:",
          "1. තනි පියා (Single Parent Element): සියලු ටැග් එක් ප්‍රධාන ටැගයක් හෝ Fragment (<>...</>) තුළ තිබිය යුතුය.",
          "2. සෑම ටැගයක්ම වැසිය යුතුය (Close All Tags): <img src=\"...\" />, <br />, <input />.",
          "3. camelCase Attributes: onClick, onChange, tabIndex.",
          "4. Reserved Words: class වෙනුවට className, for වෙනුවට htmlFor.",
          "Expressions { }: JSX තුළ ඕනෑම ජාවාස්ක්‍රිප්ට් විචල්‍යයක් හෝ ගණිතයක් ලිවීමට { } යොදයි: <h1>ආයුබෝවන් {name}!</h1>."
        ],
        codeSnippet: {
          language: "jsx",
          code: `function WelcomeCard() {
  const user = { name: "Kasun", role: "Developer" };
  const isAdmin = true;

  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>තනතුර: {user.role}</p>
      {isAdmin && <span className="badge">පරිපාලක</span>}
    </div>
  );
}`
        }
      }
    ],
    keyPoints: [
      "JSX බ්‍රවුසරයට යැවීමට පෙර Babel මගින් React.createElement() බවට පත් කරයි.",
      "HTML හි class වෙනුවට JSX හි className භාවිතා කළ යුතුය.",
      "Fragment (<> </>) මගින් අනවශ්‍ය div ටැග් ඉවත් කරගත හැක."
    ],
    exercises: [
      "HTML හි <input type=\"text\" class=\"box\"> යන්න නිවැරදි JSX කේතයක් බවට පරිවර්තනය කරන්න."
    ]
  },
  {
    id: "ch-63",
    chapterNumber: 63,
    title: "සංරචක - රියැක්ට් හි ගඩොල් සහ සිමෙන්ති",
    englishTitle: "React Components & Component Tree",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 191,
    learningObjectives: [
      "සංරචක (Component) යනු කුමක්දැයි තේරුම් ගැනීම.",
      "Functional Components සහ Naming Conventions (කැපිටල් අකුරින් ආරම්භ වීම).",
      "සංරචක එකක් ඇතුළත තවත් එකක් තැබීම (Nesting Components).",
      "Component Tree සංකල්පය.",
      "Export සහ Import භාවිතයෙන් සංරචක සංවිධානය."
    ],
    sections: [
      {
        title: "63.1 Functional Components සහ Component Tree",
        content: [
          "Component යනු තමන්ගේම පෙනුමක් (UI) සහ තර්කනයක් (Logic) සහිත, වෙබ් අඩවියේ ඕනෑම තැනක නැවත නැවත භාවිතා කළ හැකි (Reusable) ස්වාධීන කේත කොටසකි (Lego Bricks වැනිය).",
          "අනිවාර්ය නීතිය: නම සැමවිටම කැපිටල් (Capital) අකුරකින් ආරම්භ විය යුතුය: function MyButton() { ... }.",
          "Component Tree:",
          "[ App ] -> [ Header ], [ MainContent ], [ Footer ]."
        ],
        codeSnippet: {
          language: "jsx",
          code: `// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-slate-900 text-white">
      <div className="font-bold">MyBrand</div>
      <div className="space-x-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}`
        }
      }
    ],
    keyPoints: [
      "නූතන රියැක්ට් ලෝකයේ 99% ක්ම Functional Components භාවිතා කරයි.",
      "සංරචකයක නම සිම්පල් අකුරින් ලිව්වහොත් බ්‍රවුසරය එය සාමාන්‍ය HTML ටැගයක් ලෙස වරදවා වටහා ගනී."
    ],
    exercises: [
      "Footer.jsx නමින් සංරචකයක් සාදා එහි ඔබේ නම සහ හිමිකම් පණිවිඩයක් ලියන්න."
    ]
  },
  {
    id: "ch-64",
    chapterNumber: 64,
    title: "ප්‍රොප්ස් - සංරචක අතර දත්ත හුවමාරුව",
    englishTitle: "Props - Passing Data to Components",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 194,
    learningObjectives: [
      "Props (Properties) යනු මොනවාදැයි තේරුම් ගැනීම.",
      "දෙමාපිය සංරචකයේ (Parent) සිට දරු සංරචකයට (Child) දත්ත යැවීම.",
      "Unidirectional Data Flow (දත්ත ගලා යන්නේ ඉහළ සිට පහළට පමණි).",
      "Props යනු Read-only / Immutable බව තේරුම් ගැනීම.",
      "Destructuring මගින් props පිරිසිදුව ලබා ගැනීම."
    ],
    sections: [
      {
        title: "64.1 තැපැල් පාර්සල් උපමාව සහ Props භාවිතය",
        content: [
          "Props යනු දෙමාපිය සංරචකයක සිට දරු සංරචකයකට තොරතුරු යැවීමට භාවිතා කරන ක්‍රමයයි (තැපැල් පාර්සලයක් වැනිය).",
          "වැදගත්ම නීතිය (Read-only): දරු සංරචකයකට තමාට ලැබුණු props අගයන් වෙනස් කළ නොහැක (props.name = 'අලුත් නම' දෝෂයකි).",
          "Destructuring ක්‍රමය: function Greeting({ name, age }) { ... }."
        ],
        codeSnippet: {
          language: "jsx",
          code: `// Parent: App.jsx
<UserCard name="කාසුන්" age={20} isMember={true} />

// Child: UserCard.jsx
function UserCard({ name, age, isMember }) {
  return (
    <div className="border p-4 rounded-lg">
      <h3>{name}</h3>
      <p>වයස: {age}</p>
      {isMember && <p>සාමාජිකයෙකි</p>}
    </div>
  );
}`
        }
      }
    ],
    keyPoints: [
      "Props මගින් සංරචක නැවත නැවත භාවිතය (Reusability) ඉහළ නංවයි.",
      "දත්ත ගලා යන්නේ ඉහළ සිට පහළට පමණි (Top to Down).",
      "ඕනෑම ජාවාස්ක්‍රිප්ට් දත්තයක් (Strings, Numbers, Objects, Functions) props ලෙස යැවිය හැක."
    ],
    exercises: [
      "Product.jsx නමින් සංරචකයක් සාදා name, price, description යන props යවා කාඩ්පතක් ලෙස පෙන්වන්න."
    ]
  },
  {
    id: "ch-65",
    chapterNumber: 65,
    title: "ස්ටේට් - සංරචකයක අභ්‍යන්තර දත්ත පාලනය",
    englishTitle: "State - Internal Data Management & useState Hook",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 197,
    learningObjectives: [
      "State (ස්ටේට්) යනු කුමක්ද සහ Props vs State වෙනස.",
      "useState හුක් එකෙහි ව්‍යුහය: const [state, setState] = useState(initialValue).",
      "Re-rendering ක්‍රියාවලිය: ස්ටේට් එක වෙනස් වූ විට රියැක්ට් විසින් ස්වයංක්‍රීයව UI එක යාවත්කාලීන කිරීම.",
      "Immutability: ස්ටේට් එක සෘජුව වෙනස් නොකිරීමේ (count = count + 1 නොකිරීමේ) රන් නීතිය."
    ],
    sections: [
      {
        title: "65.1 useState හුක් එක සහ Counter App",
        content: [
          "Props යනු පිටතින් ලැබෙන දත්ත වන අතර State යනු සංරචකයකටම ආවේණික අභ්‍යන්තර වෙනස් වන දත්ත වේ (හද ගැස්ම හෝ උෂ්ණත්වය වැනිය).",
          "const [count, setCount] = useState(0);",
          "• count: වත්මන් අගය.",
          "• setCount: අගය වෙනස් කරන setter ශ්‍රිතය.",
          "• 0: ආරම්භක අගය.",
          "නීතිය: count = count + 1 කියා කෙලින්ම වෙනස් කළහොත් React එය නොදනී, Re-render නොවේ. සැමවිටම setCount(count + 1) භාවිතා කරන්න!"
        ],
        codeSnippet: {
          language: "jsx",
          code: `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">ගණනය: {count}</h2>
      <div className="space-x-2">
        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-emerald-600 text-white rounded">වැඩි කරන්න</button>
        <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-rose-600 text-white rounded">අඩු කරන්න</button>
        <button onClick={() => setCount(0)} className="px-4 py-2 bg-slate-600 text-white rounded">මුලට</button>
      </div>
    </div>
  );
}`
        }
      }
    ],
    keyPoints: [
      "useState හුක් එක ස්ටේට් එකක් නිර්මාණය කිරීමට භාවිතා කරයි.",
      "ස්ටේට් එකක් වෙනස් වූ විට රියැක්ට් විසින් සංරචකය නැවත අඳියි (Re-render).",
      "සැමවිටම අගය වෙනස් කිරීමට Setter function එක භාවිතා කළ යුතුය."
    ],
    exercises: [
      "useState භාවිතා කර බොත්තමක් එබූ විට පෙනුම Show/Hide වන VisibilityToggle සංරචකයක් සාදන්න."
    ]
  },
  {
    id: "ch-66",
    chapterNumber: 66,
    title: "සිදුවීම් පාලනය - පරිශීලක ක්‍රියාකාරකම්වලට ප්‍රතිචාර දැක්වීම",
    englishTitle: "Handling Events in React",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 200,
    learningObjectives: [
      "රියැක්ට් හි සිදුවීම් පාලනය (onClick, onChange) සහ SyntheticEvent.",
      "Event Handlers වෙත අමතර දත්ත (Arguments) යැවීම.",
      "Event Object (e) සහ e.target.value මගින් input අගයන් ලබා ගැනීම.",
      "e.preventDefault() මගින් Form Submit වැළැක්වීම."
    ],
    sections: [
      {
        title: "66.1 onClick, onChange සහ Forms",
        content: [
          "React හි සිදුවීම් camelCase වලින් ලියනු ලැබේ (onClick, onSubmit).",
          "SyntheticEvent: විවිධ බ්‍රවුසර වල පවතින වෙනස්කම් ඉවත් කර එක සමාන පොදු ඉවෙන්ට් එකක් ලබා දෙයි.",
          "ශ්‍රිතයක් ලබා දීමේදී onClick={handleClick} මිස onClick={handleClick()} ලෙස වරහන් නොයොදන්න. අමතර දත්ත යැවීමට onClick={() => handleClick(id)} ලෙස Arrow function එකක් ලියන්න."
        ],
        codeSnippet: {
          language: "jsx",
          code: `import { useState } from 'react';

export default function TextEcho() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="යමක් ලියන්න..." 
        className="border p-2 rounded w-full"
      />
      <p className="mt-2 text-stone-600">ඔබ ටයිප් කළේ: <span className="font-semibold">{text}</span></p>
    </div>
  );
}`
        }
      }
    ],
    keyPoints: [
      "onClick={handleClick} ලෙස ශ්‍රිතයේ නම පමණක් ලබා දෙන්න.",
      "e.target.value මගින් input එකේ ලියූ අකුරු ලබා ගත හැක."
    ],
    exercises: [
      "Color Picker එකක් සාදා පරිශීලකයා input එකේ ලියන වර්ණය අනුව පසුබිම වෙනස් වන සංරචකයක් සාදන්න."
    ]
  },
  {
    id: "ch-67",
    chapterNumber: 67,
    title: "කොන්දේසි මත පදනම් වූ නිරූපණය",
    englishTitle: "Conditional Rendering in React",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 203,
    learningObjectives: [
      "Conditional Rendering යනු කුමක්දැයි තේරුම් ගැනීම.",
      "ක්‍රමය 1: if ප්‍රකාශන return එකට ඉහළින් භාවිතය.",
      "ක්‍රමය 2: Ternary Operator (? :) JSX තුළ භාවිතය.",
      "ක්‍රමය 3: Logical AND (&&) කෙටිමග භාවිතය.",
      "ක්‍රමය 4: සංරචකයක් සම්පූර්ණයෙන්ම සැඟවීමට return null කිරීම."
    ],
    sections: [
      {
        title: "67.1 Ternary Operator සහ Logical AND (&&)",
        content: [
          "පරිශීලකයාගේ තත්ත්වය අනුව (උදා: ලොග් වී ඇත්නම් 'සාදරයෙන් පිළිගනිමු', නැත්නම් 'Login' බොත්තම) පෙනුම වෙනස් කිරීමට කොන්දේසි යොදාගනී.",
          "Ternary Operator: {isLoggedIn ? <UserDashboard /> : <LoginForm />}",
          "Logical AND (&&): {hasUnread && <span className=\"dot\" />} - සත්‍ය නම් පමණක් පෙන්වීමට.",
          "බිංදුව (0) පිළිබඳ ගැටලුව: count && <Component /> ලිවීමේදී count අගය 0 වුවහොත් තිරයේ 0 අකුර මුද්‍රණය වේ. එබැවින් count > 0 && ... ලෙස ලියන්න."
        ]
      }
    ],
    keyPoints: [
      "Ternary Operator JSX තුළ කෙටි තීරණ සඳහා සුදුසුය.",
      "Logical AND (&&) යමක් තිබේ නම් පමණක් පෙන්වීමට භාවිතා කරයි.",
      "return null මගින් සංරචකයක් සම්පූර්ණයෙන්ම සඟවා තැබිය හැක."
    ],
    exercises: [
      "පරිශීලකයාගේ වයස අනුව 18ට වැඩි නම් 'ඇතුළුවීමට අවසර ඇත' ද, නැත්නම් 'අවසර නැත' ද පෙන්වන සංරචකයක් සාදන්න."
    ]
  },
  {
    id: "ch-68",
    chapterNumber: 68,
    title: "ලැයිස්තු සහ කීස් - දත්ත සමූහයක් පෙන්වීම",
    englishTitle: "Lists and Keys in React",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 206,
    learningObjectives: [
      "Array එකක් JSX ලැයිස්තුවක් ලෙස පෙන්වීම (map() method).",
      "key (කී) ගුණාංගය යනු කුමක්ද සහ එහි වැදගත්කම.",
      "Reconciliation ක්‍රියාවලියේදී key එකෙහි කාර්යභාරය.",
      "Array of Objects හැසිරවීම."
    ],
    sections: [
      {
        title: "68.1 map() ශ්‍රිතය සහ Keys වල වැදගත්කම",
        content: [
          "පන්තියක සිසුන් 40ක් සිටින විට ඔවුන්ගේ ඇතුළත් වීමේ අංකය (Index Number / ID) මගින් ඔවුන්ව අනන්‍යව හඳුනාගන්නාක් මෙන්, රියැක්ට් ලැයිස්තුවක සෑම අයිතමයකටම key එකක් අවශ්‍ය වේ.",
          "අයිතමයක් මකා දැමූ විට හෝ මාරු කළ විට, මුළු ලැයිස්තුවම නැවත නොඇඳ වෙනස් වූ එක පමණක් යාවත්කාලීන කිරීමට key උපකාරී වේ.",
          "වෘත්තීය රහස: සැමවිටම key එක ලෙස දත්තවල ඇති ස්ථිර id එක භාවිතා කරන්න (උදා: key={product.id}). Array index එක key ලෙස භාවිතා කිරීම අනුමත නොකෙරේ."
        ],
        codeSnippet: {
          language: "jsx",
          code: `const products = [
  { id: 101, name: "ලැප්ටොප්", price: 150000 },
  { id: 102, name: "දුරකථනය", price: 85000 }
];

export default function ProductList() {
  return (
    <div className="grid gap-4">
      {products.map(p => (
        <div key={p.id} className="p-4 border rounded">
          <h3 className="font-bold">{p.name}</h3>
          <p>රු. {p.price}</p>
        </div>
      ))}
    </div>
  );
}`
        }
      }
    ],
    keyPoints: [
      "map() මගින් අරාවක ඇති දත්ත JSX ලැයිස්තුවක් බවට හරවයි.",
      "සෑම ලැයිස්තු අයිතමයකටම අනන්‍ය වූ key එකක් තිබිය යුතුය.",
      "හොඳම key අගය වන්නේ දත්තවල ඇති id එකයි."
    ],
    exercises: [
      "Shopping List එකක් සාදා map() මගින් පෙන්වා, අයිතමයක් ක්ලික් කළ විට ඉවත් වන (filter) පද්ධතියක් සාදන්න."
    ]
  },
  {
    id: "ch-69",
    chapterNumber: 69,
    title: "ඉෆෙක්ට්ස් - බාහිර ක්‍රියාකාරකම් සහ ජීවන චක්‍රය",
    englishTitle: "Side Effects & useEffect Hook",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 209,
    learningObjectives: [
      "Side Effects (බාහිර ක්‍රියාකාරකම්) යනු මොනවාදැයි තේරුම් ගැනීම.",
      "useEffect හුක් එකෙහි අවශ්‍යතාවය.",
      "සංරචකයක ජීවන චක්‍රය: Mounting, Updating, Unmounting.",
      "Dependency Array අවස්ථා 3: No Array, Empty Array [], With Values [val].",
      "Cleanup Function මගින් මතකය පිරිසිදු කිරීම."
    ],
    sections: [
      {
        title: "69.1 Component Lifecycle සහ Dependency Array",
        content: [
          "Side Effects: අන්තර්ජාලයෙන් දත්ත ලබා ගැනීම (API Fetching), document.title වෙනස් කිරීම, Timers / setInterval ක්‍රියාත්මක කිරීම.",
          "ජීවන චක්‍රය (Lifecycle): 1. Mounting (උපත - තිරය මත දිස්වීම), 2. Updating (ජීවිතය - state/props වෙනස් වීම), 3. Unmounting (මරණය - තිරයෙන් ඉවත් වීම).",
          "Dependency Array [ ] අවස්ථා:",
          "• [] නැති විට: සෑම render එකකදීම ක්‍රියාත්මක වේ.",
          "• []: සංරචකය තිරයට පැමිණි මුල්ම අවස්ථාවේදී පමණක් ක්‍රියාත්මක වේ (API call සඳහා සුදුසුය).",
          "• [count]: count වෙනස් වන සෑම අවස්ථාවකම ක්‍රියාත්මක වේ.",
          "Cleanup: return () => { clearInterval(timer); } - මතක කාන්දුවීම් (Memory Leaks) වළක්වයි."
        ],
        codeSnippet: {
          language: "jsx",
          code: `import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup Function
    return () => clearInterval(interval);
  }, []);

  return <p className="text-xl">ගත වූ කාලය: {seconds} තත්පර</p>;
}`
        }
      }
    ],
    keyPoints: [
      "useEffect මගින් බාහිර ක්‍රියාකාරකම් පාලනය කරයි.",
      "හිස් අරාවක් [] දුන් විට සංරචකය Mount වන විට පමණක් ක්‍රියා කරයි.",
      "return මගින් පිරිසිදු කිරීමේ (Cleanup) කාර්යයන් සිදු කරයි."
    ],
    exercises: [
      "බ්‍රවුසරයේ Document Title එකෙහි 'ක්ලික් කිරීම්: {count}' පෙන්වන useEffect එකක් ලියන්න."
    ]
  },
  {
    id: "ch-70",
    chapterNumber: 70,
    title: "ෆෝරම හැසිරවීම - පාලිත සංරචක",
    englishTitle: "Handling Forms - Controlled Components",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 212,
    learningObjectives: [
      "Controlled Components (පාලිත සංරචක) සංකල්පය.",
      "Single Source of Truth: රියැක්ට් ස්ටේට් එක මගින් input අගයන් පාලනය.",
      "Text, Textarea, Select සහ Checkbox හැසිරවීම.",
      "තනි ශ්‍රිතයක් (Single Handler) මගින් input කොටු කිහිපයක් පාලනය කිරීම.",
      "මූලික දත්ත වලංගුතාව (Form Validation)."
    ],
    sections: [
      {
        title: "70.1 Controlled Components සහ Single Change Handler",
        content: [
          "Controlled Components: HTML input කොටුවේ අගය (value) තීරණය වන්නේ රියැක්ට් ස්ටේට් එක මගිනි (අශ්වයෙකු පැදවීමේදී ලණුව අතේ තබා ගැනීම වැනිය).",
          "ප්‍රධාන නීතිය: value සහ onChange යන දෙකම තිබිය යුතුය.",
          "Single Handler තාක්ෂණය: සලම input එකකටම name attribute එකක් ලබා දී, [e.target.name]: e.target.value මගින් තනි Object එකක සියලු input දත්ත රැස් කිරීම."
        ],
        codeSnippet: {
          language: "jsx",
          code: `import { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', role: 'student' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ලැබුණු දත්ත:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="නම" className="border p-2 w-full" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="විද්‍යුත් තැපෑල" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">ලියාපදිංචි වන්න</button>
    </form>
  );
}`
        }
      }
    ],
    keyPoints: [
      "Controlled Components වලදී ස්ටේට් එක මගින් input කොටුව පාලනය කරයි.",
      "Spread Operator (...formData) මගින් අනෙක් දත්ත ආරක්ෂා කරගනී.",
      "e.preventDefault() පිටුව Refresh වීම වළක්වයි."
    ],
    exercises: [
      "නම, ලකුණු (1-5), සහ අදහස් ලබා ගන්නා Feedback Form එකක් සාදන්න."
    ]
  },
  {
    id: "ch-71",
    chapterNumber: 71,
    title: "රියැක්ට් රවුටින් - බහු-පිටු මෘදුකාංග නිර්මාණය",
    englishTitle: "React Router - Multi-page Applications",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 216,
    learningObjectives: [
      "SPA සහ බහු-පිටු මෘදුකාංග සංකල්පය.",
      "react-router-dom ස්ථාපනය සහ භාවිතය.",
      "ප්‍රධාන සංරචක 4: BrowserRouter, Routes, Route, Link.",
      "Link vs NavLink (Active links).",
      "404 Not Found පිටුවක් සකස් කිරීම (path='*')."
    ],
    sections: [
      {
        title: "71.1 SPA රවුටින් සහ react-router-dom",
        content: [
          "රවුටින් මගින් සිදුවන්නේ පිටුව Refresh නොවී, URL එක වෙනස් වන විට අදාළ සංරචකය තිරයට ගෙන ඒමයි (වේදිකා නාට්‍යයක දර්ශන මාරු වීම වැනිය).",
          "ඇයි <a> ටැගය භාවිතා නොකරන්නේ? <a> ටැගය බ්‍රවුසරය refresh කරන බැවින් සියලු ස්ටේට් දත්ත මැකී යයි. <Link to=\"/about\"> මගින් ක්ෂණිකව සංරචකය මාරු කරයි."
        ],
        codeSnippet: {
          language: "jsx",
          code: `import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 border-b">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-blue-600" : "text-slate-600"}>මුල් පිටුව</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold text-blue-600" : "text-slate-600"}>මා ගැන</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2>404 - පිටුව සොයාගත නොහැක!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}`
        }
      }
    ],
    keyPoints: [
      "react-router-dom මගින් React SPA එකක් බහු-පිටු මෘදුකාංගයක් බවට පත් කරයි.",
      "Link සහ NavLink පිටුව Refresh වීම වළක්වයි.",
      "path='*' මගින් 404 පිටුව පාලනය කරයි."
    ],
    exercises: [
      "Home, Projects, Skills, Contact යන පිටු 4 සහිත Navigation පද්ධතියක් සාදන්න."
    ]
  },
  {
    id: "ch-72",
    chapterNumber: 72,
    title: "කොන්ටෙක්ස්ට් ඒ.පී.අයි - ගෝලීය දත්ත පාලනය",
    englishTitle: "Context API - Global State Management",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 219,
    learningObjectives: [
      "Prop Drilling ගැටලුව තේරුම් ගැනීම.",
      "Context API යනු කුමක්ද සහ ගෝලීය දත්ත පාලනය (Global State Management).",
      "පියවර 3: createContext, Provider, useContext.",
      "Dark/Light Theme Switcher පද්ධතියක් ගොඩනැගීම."
    ],
    sections: [
      {
        title: "72.1 Prop Drilling ගැටලුව සහ ගුවන්විදුලි විකාශන උපමාව",
        content: [
          "Prop Drilling: App සිට 5වන මට්ටමේ ඇති සංරචකයකට දත්ත යැවීමට අතරමැදි සංරචක 4ක් හරහා props යැවීමට සිදුවීම ඉතා වෙහෙසකරය.",
          "ගුවන්විදුලි විකාශන උපමාව: Context API යනු ගුවන්විදුලි මධ්‍යස්ථානයක් (Provider) වැනිය. දත්ත වාතයට මුදා හරින අතර අවශ්‍ය ඕනෑම සංරචකයකට (Consumer - useContext) එම දත්ත සෘජුවම ලබා ගත හැක."
        ],
        codeSnippet: {
          language: "jsx",
          code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}`
        }
      }
    ],
    keyPoints: [
      "Context API මගින් Prop Drilling ගැටලුව විසඳයි.",
      "createContext මගින් සන්දර්භය සාදන අතර Provider මගින් දත්ත බෙදා හරියි.",
      "useContext මගින් ඕනෑම තැනක සිට දත්ත සෘජුවම ලබා ගනී."
    ],
    exercises: [
      "UserContext නමින් සන්දර්භයක් සාදා පරිශීලකයාගේ නම මුළු ඇප් එක පුරාම බෙදා හරින්න."
    ]
  },
  {
    id: "ch-73",
    chapterNumber: 73,
    title: "ඒ.පී.අයි දත්ත ලබා ගැනීම - සැබෑ ලෝකයේ දත්ත",
    englishTitle: "API Integration and Data Fetching in React",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 223,
    learningObjectives: [
      "රියැක්ට් සංරචකයක් තුළ බාහිර API දත්ත ලබා ගැනීමේ අවශ්‍යතාවය.",
      "පියවර 5: State, Loading State, Error State, useEffect, Conditional Rendering.",
      "JSONPlaceholder පරිශීලක ලැයිස්තුව ප්‍රායෝගිකව ලබා ගැනීම."
    ],
    sections: [
      {
        title: "73.1 React Data Fetching පියවර 5",
        content: [
          "වෘත්තීය මට්ටමේ දත්ත ලබා ගැනීමේ ක්‍රියාවලියක අනිවාර්යයෙන්ම පහත පියවර 5 තිබිය යුතුය:",
          "1. data state: ලැබෙන දත්ත ගබඩා කිරීමට.",
          "2. isLoading state: දත්ත ලැබෙන තෙක් 'Loading...' පෙන්වීමට.",
          "3. error state: ජාල දෝෂ හසුකර ගැනීමට.",
          "4. useEffect([], ...): සංරචකය Mount වන විට පමණක් fetch කිරීමට.",
          "5. Conditional Rendering: තත්ත්වය අනුව තිරය වෙනස් කිරීමට."
        ],
        codeSnippet: {
          language: "jsx",
          code: `import { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error("දත්ත ලබාගත නොහැක!");
        return res.json();
      })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p>දත්ත බාගත වෙමින් පවතී...</p>;
  if (error) return <p className="text-red-500">දෝෂය: {error}</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
    </ul>
  );
}`
        }
      }
    ],
    keyPoints: [
      "Loading සහ Error තත්ත්වයන් පාලනය කිරීම වෘත්තීය මට්ටමේදී අනිවාර්ය වේ.",
      "useEffect හි [] නොයෙදුවහොත් Infinite Loop එකක් ඇති විය හැක."
    ],
    exercises: [
      "කාලගුණ API එකක් සොයාගෙන නගරයේ නම දුන් විට උෂ්ණත්වය පෙන්වන සංරචකයක් සාදන්න."
    ]
  },
  {
    id: "ch-74",
    chapterNumber: 74,
    title: "රියැක්ට් ව්‍යාපෘති ප්‍රසිද්ධ කිරීම - ලෝකයටම පෙන්වමු",
    englishTitle: "Deploying React Applications",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 226,
    learningObjectives: [
      "Development Mode සහ Production Mode අතර තාක්ෂණික වෙනස.",
      "npm run build විධානය මගින් ප්‍රශස්ත ගොනු (dist) සෑදීම.",
      "Netlify / Vercel වෙත සජීවීව විකාශනය කිරීම.",
      "React Router සඳහා _redirects ගොනුව මගින් 404 දෝෂය විසඳීම."
    ],
    sections: [
      {
        title: "74.1 Build Process සහ _redirects විසඳුම",
        content: [
          "කේක් එකක් සෑදීමට පිටි, බිත්තර පෝරණුවක දමා පුළුස්සා ගන්නාක් මෙන්, අප ලියන සියලුම JSX සහ CSS කේත බ්‍රවුසරයට තේරෙන සාමාන්‍ය HTML, CSS, JS බවට පරිවර්තනය කර කුඩා කිරීමට npm run build විධානය භාවිතා කරයි.",
          "Routing සහ 404 ගැටලුව: Netlify සඳහා public/_redirects ගොනුවක් සාදා එහි /* /index.html 200 ලියන්න. එවිට ඕනෑම URL එකක් index.html වෙත යොමු කර React Router හට පාලනය භාර දෙයි."
        ]
      }
    ],
    keyPoints: [
      "npm run build මගින් dist ෆෝල්ඩරයේ Production files සාදයි.",
      "_redirects ගොනුව SPA Routing වලදී 404 ගැටලුව විසඳයි."
    ],
    exercises: [
      "ඔබ සෑදූ React ව්‍යාපෘතියක් build කර Netlify වෙත drag and drop කර සජීවීව පරීක්ෂා කරන්න."
    ]
  },
  {
    id: "ch-75",
    chapterNumber: 75,
    title: "මහා ව්‍යාපෘතිය - 'TaskMaster' වෘත්තීය ව්‍යාපෘති කළමනාකරණ පද්ධතිය",
    englishTitle: "Capstone Project - TaskMaster Pro",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 229,
    learningObjectives: [
      "උගත් සියලුම රියැක්ට් සංකල්ප (Components, Props, State, Context, Router, LocalStorage) එක් කර සම්පූර්ණ Web App එකක් නිර්මාණය කිරීම.",
      "සම්පූර්ණ CRUD ක්‍රියාවලිය (Create, Read, Update, Delete).",
      "බහු-පිටු සංචලනය: All Tasks, Active Tasks, Completed Tasks."
    ],
    sections: [
      {
        title: "75.1 TaskMaster Pro ගෘහ නිර්මාණ ශිල්පය",
        content: [
          "ප්‍රධාන අංග:",
          "• TaskContext: සියලුම වැඩ (Tasks) සහ ඒවායේ තත්ත්වයන් ගබඩා වන මධ්‍යස්ථානය (Central Store).",
          "• LocalStorage Persistence: බ්‍රවුසරය වැසුවද දත්ත නොමැකී පවතී.",
          "• Components: TaskForm (එකතු කිරීම), TaskItem (තනි වැඩක්), TaskList (ලැයිස්තුව), Navbar.",
          "• Pages: Home (/), Active (/active), Completed (/completed)."
        ]
      }
    ],
    keyPoints: [
      "Context API මගින් Prop Drilling වළක්වා ගනී.",
      "LocalStorage මගින් දත්ත ස්ථිරව සුරැකේ.",
      "React Router මගින් පිටුව refresh නොවී බහු පිටු අත්දැකීමක් ලබා දෙයි."
    ],
    exercises: [
      "TaskMaster Pro එකට වැඩක් සංස්කරණය කිරීමේ (Edit Task) පහසුකම එක් කරන්න."
    ]
  },
  {
    id: "ch-76",
    chapterNumber: 76,
    title: "රියැක්ට් කාර්යක්ෂමතාව, උසස් හුක්ස් සහ ගෘහ නිර්මාණ ශිල්පය (විශේෂ ප්‍රෝ-මට්ටම)",
    englishTitle: "React Performance, Advanced Hooks, and Architecture",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 234,
    learningObjectives: [
      "React Performance: අනවශ්‍ය Re-rendering වැළැක්වීම.",
      "React.memo, useMemo, සහ useCallback.",
      "useRef මගින් DOM එකට සෘජුව පිවිසීම.",
      "Custom Hooks (පුද්ගලික හුක්ස්) නිර්මාණය කිරීම.",
      "Lazy Loading සහ Suspense මගින් කේතය පංගු කිරීම (Code Splitting)."
    ],
    sections: [
      {
        title: "76.1 Memoization, useMemo, useCallback සහ useRef",
        content: [
          "React.memo: props වෙනස් නොවන්නේ නම් සංරචකය නැවත render වීම වළක්වයි.",
          "useMemo: විශාල ගණනය කිරීමක ප්‍රතිඵලය මතක තබා ගනී: const sorted = useMemo(() => items.sort(), [items]);",
          "useCallback: ශ්‍රිතයක් මතක තබා ගනී: const handleClick = useCallback(() => { ... }, []);",
          "useRef: DOM එකට සෘජුව focus වීමට හෝ පෙර අගයන් රඳවා ගැනීමට (render නොවන විචල්‍යයන්).",
          "Custom Hooks: useOnlineStatus, useLocalStorage වැනි පොදු තර්කනයන් නැවත භාවිතයට."
        ]
      }
    ],
    keyPoints: [
      "useMemo අගයන් මතක තබා ගන්නා අතර useCallback ශ්‍රිත මතක තබා ගනී.",
      "useRef මගින් input එකකට focus කිරීම හෝ render නොවන අගයක් තබා ගත හැක."
    ],
    exercises: [
      "useRef භාවිතා කර බොත්තම එබූ විට input කොටුවට focus වන සංරචකයක් සාදන්න."
    ]
  },
  {
    id: "ch-77",
    chapterNumber: 77,
    title: "උසස් සංරචක රටා, ස්ටයිලින් සහ දෝෂ සෙවීම",
    englishTitle: "Advanced Component Patterns, Styling & Debugging",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 237,
    learningObjectives: [
      "Children Props සහ Component Composition.",
      "CSS Modules (Button.module.css).",
      "useReducer Hook මගින් සංකීර්ණ ස්ටේට් පාලනය.",
      "React DevTools බ්‍රවුසර Extension එක භාවිතය."
    ],
    sections: [
      {
        title: "77.1 Composition, CSS Modules සහ useReducer",
        content: [
          "Children Prop: සංරචකයක් ඇතුළත තවත් ඕනෑම HTML හෝ සංරචකයක් පාර්සල් කර යැවීමට (Composition over Inheritance).",
          "CSS Modules: එකම class නම වෙනත් සංරචක සමඟ ගැටීම වැළැක්වීමට අද්විතීය hashed classes සාදයි (Button_btn__x1y2).",
          "useReducer: බැංකු සේවකයෙකු මෙන් (state, action) -> new state ලබා දෙන Redux වැනි රටාවකි."
        ]
      }
    ],
    keyPoints: [
      "CSS Modules මගින් CSS නීති එකිනෙක පටලැවීම වළක්වයි.",
      "useReducer සංකීර්ණ ස්ටේට් කළමනාකරණයට ඉතා සුදුසුය."
    ],
    exercises: [
      "useReducer භාවිතා කර Counter එකක් Increment, Decrement, Reset සමඟ ලියන්න."
    ]
  },
  {
    id: "ch-78",
    chapterNumber: 78,
    title: "නූතන ස්ටයිලින් - ටේල්වින්ඩ් සී.එස්.එස් සහ සංරචක පුස්තකාල",
    englishTitle: "Modern Styling - Tailwind CSS & Component Libraries",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 240,
    learningObjectives: [
      "Tailwind CSS යනු කුමක්ද සහ 'Utility-first' ක්‍රමයේ වාසි.",
      "Tailwind ස්ථාපනය සහ tailwind.config.js.",
      "21st.dev සහ Shadcn UI සංකල්පය (Copy-Paste Philosophy).",
      "Radix UI Headless සංරචක සහ Framer Motion සජීවීකරණ."
    ],
    sections: [
      {
        title: "78.1 Tailwind Utility-First සහ 21st.dev",
        content: [
          "Tailwind CSS: වෙනම .css ගොනු වල ලියනවා වෙනුවට, සූදානම් කළ utility classes (bg-white, p-5, rounded-lg, shadow-md, text-blue-600) කෙලින්ම JSX ටැග් තුළ ලියනු ලැබේ (නිමි ඇඳුම් වෙළඳසැලක් වැනිය).",
          "21st.dev / Shadcn UI: සම්පූර්ණ npm පැකේජ බර කරගන්නවා වෙනුවට, ලෝකයේ ප්‍රවීණයන් හැදූ අලංකාර Radix UI + Tailwind කේතය තමන්ගේ ව්‍යාපෘතියට පිටපත් කරගෙන නිදහසේ වෙනස් කිරීම."
        ]
      }
    ],
    keyPoints: [
      "Tailwind මගින් CSS ගොනු අතර එහා මෙහා යාම වළක්වා වේගයෙන් UI නිර්මාණය කළ හැක.",
      "PostCSS Purge මගින් භාවිත නොවන classes ඉවත් කර අවසාන build එක 15KB තරම් කුඩා කරයි."
    ],
    exercises: [
      "Tailwind Classes භාවිතා කරමින් අලංකාර Login Card එකක් සාදන්න."
    ]
  },
  {
    id: "ch-79",
    chapterNumber: 79,
    title: "ටේල්වින්ඩ් ප්‍රවීණතාව සහ අති නවීන සංරචක ඉංජිනේරු විද්‍යාව",
    englishTitle: "Advanced Tailwind Mastery & Modern Component Engineering",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 242,
    learningObjectives: [
      "tailwind.config.js තුළ Design Tokens සහ Brand Colors සැකසීම.",
      "Group-hover සහ Peer state variants.",
      "Framer Motion සජීවීකරණ රියැක්ට් තුළ භාවිතය.",
      "cn() helper function: clsx සහ tailwind-merge එකතුව."
    ],
    sections: [
      {
        title: "79.1 cn() Helper, Variants සහ Framer Motion",
        content: [
          "cn() Helper: tailwind-merge සහ clsx එකතු කර, එකිනෙකට පරස්පර classes (උදා: p-4 සහ p-6) ගැටීම නිරාකරණය කරන වෘත්තීය ශ්‍රිතයයි.",
          "Group-hover: දෙමාපිය පෙට්ටිය මත මවුසය තැබූ විට දරුවාගේ හැඩය වෙනස් කිරීමට: <div className=\"group\"><h2 className=\"group-hover:text-white\">...</h2></div>.",
          "Framer Motion: <motion.div animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }}>..."
        ],
        codeSnippet: {
          language: "javascript",
          code: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}`
        }
      }
    ],
    keyPoints: [
      "cn() ශ්‍රිතය සෑම වෘත්තීය රියැක්ට් ව්‍යාපෘතියකම තිබිය යුතුය.",
      "group-hover සහ peer මගින් සංකීර්ණ UI අවස්ථා පාලනය කළ හැක."
    ],
    exercises: [
      "cn() ශ්‍රිතය සාදාගෙන conditional class එකක් පාලනය කරන ආකාරය ලියන්න."
    ]
  },
  {
    id: "ch-80",
    chapterNumber: 80,
    title: "ටේල්වින්ඩ් පද්ධති ඉංජිනේරු විද්‍යාව සහ උසස් සංරචක ගෘහ නිර්මාණ ශිල්පය",
    englishTitle: "Tailwind Systems Engineering & CVA Architecture",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 245,
    learningObjectives: [
      "@layer base, @layer components සහ @apply භාවිතය.",
      "Tailwind Plugins: @tailwindcss/typography සහ @tailwindcss/forms.",
      "CVA (Class Variance Authority) මගින් වෘත්තීය Design Systems සෑදීම.",
      "Production Optimization (Purge & Minification)."
    ],
    sections: [
      {
        title: "80.1 CVA (Class Variance Authority) භාවිතය",
        content: [
          "බොත්තම් වර්ග කිහිපයක් (primary, danger, outline) සහ ප්‍රමාණ කිහිපයක් (sm, md, lg) තිබෙන විට if/else දහස් ගණනක් ලියනවා වෙනුවට CVA භාවිතා කරයි.",
          "ලෝකයේ ප්‍රධාන පෙළේ මෘදුකාංග පද්ධති (Design Systems) සාදන්නේ CVA මගිනි."
        ],
        codeSnippet: {
          language: "javascript",
          code: `import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-slate-300 hover:bg-slate-100"
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);`
        }
      }
    ],
    keyPoints: [
      "CVA මගින් ඉතා සංකීර්ණ සහ නම්‍යශීලී සංරචක නිර්මාණය කළ හැක.",
      "@layer base සහ components මගින් පිරිසිදු CSS ගොනුවක් නඩත්තු කරයි."
    ],
    exercises: [
      "CVA භාවිතා කරමින් Success, Warning, සහ Error යන Alert Component එකක් සාදන්න."
    ]
  },
  {
    id: "ch-81",
    chapterNumber: 81,
    title: "වෘත්තීය ඉදිරිපෙළ වැඩපිළිවෙළ සහ සැලසුම්කරණයේ සිට කේතකරණය දක්වා",
    englishTitle: "Professional Frontend Workflow - Design to Code",
    volumeId: 6,
    volumeTitle: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
    pageNumber: 249,
    learningObjectives: [
      "Design-to-Code Workflow: Figma සැලසුමක් රියැක්ට් කේතයක් බවට හැරවීම.",
      "Component Thinking: මුළු නිර්මාණය කුඩා සංරචක වලට කඩා වෙන් කිරීම (Decomposition).",
      "NPM සහ package-lock.json හි වැදගත්කම.",
      "ESLint සහ Prettier මගින් කේතයේ ප්‍රමිතිය පවත්වා ගැනීම.",
      "TypeScript අවශ්‍යතාවය පිළිබඳ මූලික අවබෝධය."
    ],
    sections: [
      {
        title: "81.1 Component Thinking සහ Prettier/ESLint",
        content: [
          "මෘදුකාංගයක් නිර්මාණය වන්නේ පියවර 3කිනි: 1. Design (Figma), 2. Handoff (වර්ණ, පරතරයන් ලබා දීම), 3. Engineering (HTML, CSS, React මගින් සැබෑ යෙදුමක් තැනීම).",
          "Static (වෙනස් නොවන) සහ Dynamic (වෙනස් වන) කොටස් හඳුනා ගැනීම.",
          "Prettier: කේතයේ හිස්තැන් සහ පේළි ස්වයංක්‍රීයව සකසයි.",
          "ESLint: කේතයේ තාක්ෂණික වැරදි සහ නරක පුරුදු පෙන්වා දෙයි."
        ]
      }
    ],
    keyPoints: [
      "සංරචක ව්‍යුහය කලින් සැලසුම් කිරීම දෝෂ අවම කරයි.",
      "Prettier සහ ESLint මගින් කේතය උසස් ප්‍රමිතියකට පත් කරයි."
    ],
    exercises: [
      "Instagram profile පිටුවක් දෙස බලා එහි ඇති සංරචක ගසක් (Component Tree) ලෙස සටහන් කරන්න."
    ]
  }
];
