import { Volume } from '../../types';

export const volume6: Volume = {
  id: 6,
  volumeNumber: 6,
  title: "රියැක්ට් (React.js) - නූතන ඉදිරිපෙළ සංවර්ධනය",
  englishTitle: "React.js Modern Frontend Development",
  color: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
  iconName: "Atom",
  badge: "React 19 & Architecture",
  description: "Virtual DOM, Vite, JSX, Component-based Architecture, Props, State (useState), Event Handling, Lists & Keys, useEffect Lifecycle, React Router, Context API, Tailwind CSS, CVA, සහ TaskMaster Pro ව්‍යාපෘතිය.",
  chapterCount: 22,
  pageRange: "පිටු 181 - 252",
  chapters: [
    {
      id: 61,
      volumeId: 6,
      chapterNumber: 61,
      title: "රියැක්ට් හැඳින්වීම සහ අතථ්‍ය ඩොම් (Virtual DOM)",
      englishTitle: "Introduction to React and the Virtual DOM",
      pageRange: "පිටු 181 - 184",
      description: "Library vs Framework, Imperative vs Declarative, Virtual DOM & Diffing algorithm, Reconciliation, Component-based Architecture, Single Page Applications (SPA).",
      learningObjectives: [
        "React යනු Facebook (Meta) විසින් නිර්මාණය කළ UI පුස්තකාලයක් බව තේරුම් ගැනීම",
        "Imperative (පියවරෙන් පියවර විධාන) සහ Declarative (අවශ්‍ය ප්‍රතිඵලය පමණක් පැවසීම) අතර වෙනස",
        "Virtual DOM සංකල්පය සහ එය සැබෑ DOM එකට වඩා අතිශය වේගවත් වන්නේ ඇයිද යන්න",
        "Reconciliation (Diffing): වෙනස් වූ කොටස පමණක් සැබෑ DOM එකේ යාවත්කාලීන වීම",
        "Single Page Application (SPA) මඟින් පිටුව Reload නොවී App එකක් මෙන් ක්‍රියා කිරීම"
      ],
      sections: [
        {
          title: "61.1 Virtual DOM සහ Declarative Programming",
          content: [
            "සැබෑ ලෝකයේ උපමාව (ආපනශාලාවේ වතුර වීදුරුවක් ඉල්ලීම):",
            "• Imperative ක්‍රමය (සාමාන්‍ය JS): 'මේසයෙන් නැගිටින්න, කුස්සියට යන්න, වීදුරුවක් ගන්න, කරාමය හරවන්න, වතුර පුරවන්න, මේසයට ගෙන එන්න' කියා පියවරෙන් පියවර පැවසීම.",
            "• Declarative ක්‍රමය (React): 'මට වතුර වීදුරුවක් දෙන්න' කියා අවශ්‍ය ප්‍රතිඵලය පමණක් පැවසීම. එය කරන්නේ කෙසේදැයි වේටර්වරයා බලා ගනී.",
            "Virtual DOM යනු මතකය තුළ තබා ගන්නා සැබෑ DOM එකේ සැහැල්ලු පිටපතකි. දත්ත වෙනස් වූ විට React මුලින්ම Virtual DOM එකේ වෙනස සලකුණු කර, පැරණි එක හා සසඳා (Diffing), වෙනස් විය යුතුම කොටස පමණක් සැබෑ DOM එකේ යාවත්කාලීන කරයි (Reconciliation)."
          ],
          asciiDiagram: `[ දත්ත (State) වෙනස් වීම ]
            │
            ▼
[ අලුත් Virtual DOM එකක් සෑදේ ]
            │
            ▼
[ පරණ සහ අලුත් සසඳයි (Diffing) ]
            │
            ▼
[ වෙනස ඇති කොටස පමණක් සොයා ගනී ]
            │
            ▼
[ සැබෑ DOM එක යාවත්කාලීන කරයි (Reconciliation) ]`
        },
        {
          title: "61.2 Library vs Framework සහ React හි මූලික ගුණාංග",
          content: [
            "Angular හෝ Next.js යනු සම්පූර්ණ Frameworks වන අතර, ඒවායේ දැඩි නීති සහ සියල්ල සපයා ඇත. නමුත් React යනු Library එකකි; එනම් එය පරිශීලක අතුරුමුහුණත (UI) ඇඳීමට පමණක් අවධානය යොමු කරයි. Routing, State Management සඳහා ඔබට කැමති පුස්තකාල තෝරා ගැනීමේ පූර්ණ නිදහස ඇත.",
            "Unidirectional Data Flow: රියැක්ට් හි දත්ත ගලා යන්නේ ඉහළ සිට පහළට (Parent සිට Child දක්වා) එක් දිශාවකට පමණි."
          ]
        },
        {
          title: "61.3 Single Page Applications (SPA) සහ සාම්ප්‍රදායික වෙබ් අඩවි",
          content: [
            "සාම්ප්‍රදායික වෙබ් අඩවි වල සෑම පිටු පෙරළීමකදීම සර්වර් එකෙන් මුළු HTML පිටුවම නැවත බාගත කර බ්‍රවුසරය සුදු වී Reload වේ. නමුත් Single Page Application (SPA) එකකදී පූරණය වන්නේ එකම index.html ගොනුවකි. ඉන්පසු පිටු පෙරළීම සිදු කරන්නේ JavaScript මඟින් DOM එක ක්ෂණිකව මාරු කිරීමෙනි."
          ]
        }
      ],
      keyPoints: [
        "React හි දත්ත ගලා යන්නේ එක් දිශාවකට පමණි (Unidirectional Data Flow).",
        "SPA මඟින් පරිශීලකයා පිටු මාරු කරන විට බ්‍රවුසරය Refresh වන්නේ නැත."
      ],
      exercises: [
        { id: 1, question: "Virtual DOM මඟින් වෙබ් අඩවියක වේගය වැඩි වන්නේ කෙසේද?" }
      ]
    },
    {
      id: 62,
      volumeId: 6,
      chapterNumber: 62,
      title: "වැඩබිම සකස් කිරීම - Node.js සහ Vite",
      englishTitle: "React Environment Setup - Node.js & Vite",
      pageRange: "පිටු 184 - 187",
      description: "Node.js (Runtime), NPM (Package Manager), Vite build tool, CRA යල් පැනීම, npm create vite@latest, සහ React Folder Structure.",
      learningObjectives: [
        "Node.js යනු බ්‍රවුසරයෙන් පිටත ජාවාස්ක්‍රිප්ට් ධාවනය කරන පරිසරය බව",
        "NPM (Play Store එක වැනි) මඟින් බාහිර පුස්තකාල ලබා ගැනීම",
        "Vite හි අතිශය වේගවත් Hot Module Replacement (HMR) වාසි",
        "React ව්‍යාපෘතියක ගොනු ව්‍යුහය (node_modules, src, App.jsx, main.jsx, package.json) අවබෝධ කර ගැනීම"
      ],
      sections: [
        {
          title: "62.1 Vite සහ React ගොනු ව්‍යුහය",
          content: [
            "අතීතයේ භාවිතා වූ create-react-app (CRA) දැන් යල් පැන ගොස් ඇති අතර අද ලොව පුරා වෘත්තීය සංවර්ධකයන් භාවිතා කරන්නේ Vite ය."
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Create React App with Vite",
              code: `# 1. අලුත් Vite React ව්‍යාපෘතියක් සෑදීම
npm create vite@latest my-react-app -- --template react

# 2. ෆෝල්ඩරය තුළට පිවිසීම
cd my-react-app

# 3. පුස්තකාල ස්ථාපනය
npm install

# 4. සංවර්ධන සර්වර් එක පණ ගැන්වීම
npm run dev`
            }
          ]
        },
        {
          title: "62.2 React Project Execution Flow (පණ ගැන්වීමේ අනුපිළිවෙල)",
          content: [
            "1. index.html: බ්‍රවුසරය මුලින්ම කියවන පිටුවයි. එහි <div id='root'></div> පවතී.",
            "2. src/main.jsx: ReactDom.createRoot මඟින් 'root' ඩිව් එක අල්ලාගෙන ඒ තුළට App සංරචකය ඇතුළු කරයි.",
            "3. src/App.jsx: අපේ යෙදුමේ ප්‍රධාන මව් සංරචකයයි (Root Component)."
          ],
          asciiDiagram: `index.html (<div id="root">)
           ▲
           │ ReactDOM.createRoot
src/main.jsx
           │ <App />
           ▼
src/App.jsx (මුළු වෙබ් අතුරුමුහුණත)`
        }
      ],
      keyPoints: [
        "node_modules ෆෝල්ඩරය කිසිවිටකත් GitHub යවන්නේ නැත; package.json පමණක් ප්‍රමාණවත් වේ."
      ],
      exercises: [
        { id: 1, question: "Vite භාවිතා කිරීමේ ප්‍රධාන වාසි 2ක් ලියන්න." }
      ]
    },
    {
      id: 63,
      volumeId: 6,
      chapterNumber: 63,
      title: "JSX - ජාවාස්ක්‍රිප්ට් තුළ HTML ලිවීම (Understanding JSX)",
      englishTitle: "Understanding JSX - JavaScript XML",
      pageRange: "පිටු 187 - 191",
      description: "JavaScript XML (JSX), Babel Transpilation, JSX රන් නීති 4 (Single Parent / Fragment, Close all tags, camelCase attributes, className & htmlFor), JS Expressions in { }.",
      learningObjectives: [
        "JSX යනු ජාවාස්ක්‍රිප්ට් තුළ HTML වැනි කේත ලිවීමට සාදන ලද දිගුවක් බව",
        "Babel මඟින් JSX සාමාන්‍ය React.createElement() බවට හැරවීම",
        "JSX හි අනිවාර්ය රන් නීති 4 ප්‍රගුණ කිරීම",
        "{ } (Curly braces) මඟින් JSX තුළ ඕනෑම ජාවාස්ක්‍රිප්ට් විචල්‍යයක් හෝ ගණනයක් සිදු කිරීම"
      ],
      sections: [
        {
          title: "63.1 JSX හි රන් නීති 4",
          content: [
            "1. එකම පියා (Single Parent Element): ශ්‍රිතයකින් return කරන විට එක් ප්‍රධාන ටැගයක් හෝ Fragment (<> ... </>) තුළ තිබිය යුතුය.",
            "2. සෑම ටැගයක්ම වැසිය යුතුය (Close All Tags): <br /> හෝ <img /> ලෙස අනිවාර්යයෙන්ම වැසිය යුතුය.",
            "3. camelCase ගුණාංග: onclick වෙනුවට onClick, onchange වෙනුවට onChange.",
            "4. වෙන්වූ වචන (Reserved Words): class වෙනුවට className ද, for වෙනුවට htmlFor ද යෙදිය යුතුය."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "JSX Example with Expressions",
              code: `function WelcomeCard({ username, isOnline }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="card">
      <h2>ආයුබෝවන්, {username}!</h2>
      <p>වත්මන් වසර: {currentYear}</p>
      <span className={isOnline ? "status-online" : "status-offline"}>
        {isOnline ? "සක්‍රීයයි" : "අක්‍රීයයි"}
      </span>
    </div>
  );
}`
            }
          ]
        },
        {
          title: "63.2 Babel Transpilation සහ React.createElement",
          content: [
            "බ්‍රවුසරවලට සෘජුවම JSX තේරුම් ගත නොහැක. Babel නම් Transpiler එක මඟින් JSX කේතය පිරිසිදු JavaScript බවට පත් කරයි: <h1>Hello</h1> යන්න React.createElement('h1', null, 'Hello') බවට පත්වන්නේ එබැවිනි."
          ]
        }
      ],
      keyPoints: [
        "JSX තුළ Comments ලිවීමට {/* සටහන */} යොදයි.",
        "HTML වල class වෙනුවට className ලිවීම අනිවාර්ය වේ."
      ],
      exercises: [
        { id: 1, question: "JSX හි Fragment (<> </>) භාවිතා කරන්නේ කුමන හේතුවක් සඳහාද?" }
      ]
    },
    {
      id: 64,
      volumeId: 6,
      chapterNumber: 64,
      title: "සංරචක - රියැක්ට් හි ගඩොල් සහ සිමෙන්ති (Components)",
      englishTitle: "React Components - Lego Bricks of the Web",
      pageRange: "පිටු 191 - 194",
      description: "Component සංකල්පය (Lego උපමාව), Functional vs Class Components, Capital letter naming rule, Component Tree, සහ Export/Import.",
      learningObjectives: [
        "සංරචකයක් (Component) යනු තමන්ගේම පෙනුමක් සහ තර්කනයක් ඇති ස්වාධීන කොටසක් බව",
        "Lego Bricks මෙන් නැවත නැවත භාවිතා කළ හැකි (Reusable) බව",
        "සංරචක නාමය සැමවිටම Capital අකුරකින් ආරම්භ විය යුතු රීතිය",
        "Presentational vs Container Components වෙන් කිරීම"
      ],
      sections: [
        {
          title: "64.1 Lego Bricks උපමාව සහ Component Tree",
          content: [
            "ලෙගෝ කෑලි වලින් නිවසක් හදනවාක් මෙන්, රියැක්ට් වලදී Header, Sidebar, Card, Button යන කොටස් වෙන වෙනම සාදා එකිනෙකට අමුණා වෙබ් අඩවිය නිර්මාණය කරයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Header.jsx (Component)",
              code: `export default function Header() {
  return (
    <header className="navbar">
      <h1>My Modern App</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}`
            }
          ]
        },
        {
          title: "64.2 Reusability සහ File Separation",
          content: [
            "සෑම සංරචකයක්ම තමන්ගේම වෙනම .jsx ගොනුවක තබා ගැනීම (උදා: Button.jsx, Navbar.jsx) මඟින් ව්‍යාපෘතිය පිරිසිදුව තබා ගැනීමටත් කණ්ඩායමක් ලෙස වැඩ කිරීමටත් පහසු වේ."
          ]
        }
      ],
      keyPoints: [
        "function myButton() වැරදියි (බ්‍රවුසරය සාමාන්‍ය HTML ලෙස සිතයි); function MyButton() නිවැරදියි."
      ],
      exercises: [
        { id: 1, question: "සංරචකයක් Capital අකුරකින් ආරම්භ විය යුත්තේ ඇයි?" }
      ]
    },
    {
      id: 65,
      volumeId: 6,
      chapterNumber: 65,
      title: "ප්‍රොප්ස් - සංරචක අතර දත්ත හුවමාරුව (Props)",
      englishTitle: "Props - Passing Data to Components",
      pageRange: "පිටු 194 - 197",
      description: "Props යනු කුමක්ද (තැපැල් පාර්සලය උපමාව), Passing & Receiving props, Destructuring props, Read-only / Immutability නීතිය.",
      learningObjectives: [
        "ප්‍රොප්ස් (Props / Properties) මඟින් දෙමාපිය සංරචකයේ සිට දරු සංරචකයට දත්ත ගලා යන අයුරු",
        "Unidirectional Data Flow (ඉහළ සිට පහළට පමණක් ගලා යෑම)",
        "Destructuring: function Greeting({ name, age }) වෘත්තීය ක්‍රමය",
        "Props යනු Read-only (Immutable) වන අතර දරුවාට එය වෙනස් කළ නොහැකි බව"
      ],
      sections: [
        {
          title: "65.1 තැපැල් පාර්සලය උපමාව සහ Destructuring",
          content: [
            "අම්මා (Parent) ඔබට (Child) පාර්සලයක් (Props) එවයි. එහි තිබිය යුත්තේ මොනවාදැයි තීරණය කරන්නේ අම්මාය. ඔබට කළ හැක්කේ එය භාවිතා කිරීම පමණි. එය වෙනස් කිරීමට ඔබට බලයක් නැත (Read-only)."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Passing & Destructuring Props",
              code: `// Parent: App.jsx
<UserCard name="කසුන්" role="Frontend Developer" age={24} />

// Child: UserCard.jsx
function UserCard({ name, role, age }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>තනතුර: {role}</p>
      <p>වයස: {age}</p>
    </div>
  );
}`
            }
          ]
        },
        {
          title: "65.2 Children Prop සහ Wrapper Components",
          content: [
            "විශේෂ prop එකක් වන children මඟින් සංරචකයේ ආරම්භක සහ අවසාන ටැග් අතර (<Card> ... </Card>) ලියන ඕනෑම JSX එකක් සංරචකය තුළට ලබා ගත හැක."
          ]
        }
      ],
      keyPoints: [
        "props.name = 'අලුත් නම' ලෙස වෙනස් කිරීම තහනම්ය (Error එකක් ලැබේ)."
      ],
      exercises: [
        { id: 1, question: "Props සහ State අතර ඇති මූලික වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 66,
      volumeId: 6,
      chapterNumber: 66,
      title: "ස්ටේට් - සංරචකයක අභ්‍යන්තර දත්ත පාලනය (State & useState)",
      englishTitle: "State - Internal Data Management and useState Hook",
      pageRange: "පිටු 197 - 200",
      description: "State යනු කුමක්ද (මිනිස් සිරුරේ හෘද ස්පන්දනය උපමාව), useState Hook, Setter function, Re-rendering flow, Immutability රීතිය.",
      learningObjectives: [
        "State (ස්ටේට්) යනු සංරචකයක අභ්‍යන්තරයේ කාලයත් සමඟ වෙනස් වන දත්ත බව",
        "useState Hook එකේ කොටස් 4: const [data, setData] = useState(initialValue);",
        "Re-rendering: State එකක් වෙනස් වූ විට React විසින් ස්වයංක්‍රීයව එම සංරචකය නැවත ඇඳීම",
        "State සෘජුව වෙනස් නොකිරීමේ නීතිය: count = count + 1 වැරදියි; setCount(count + 1) නිවැරදියි"
      ],
      sections: [
        {
          title: "66.1 useState Hook සහ Re-rendering",
          content: [
            "මිනිස් සිරුරේ උපමාව: Props යනු පිටතින් පළඳින ඇඳුම් වැනිය. State යනු සිරුරේ උෂ්ණත්වය හෝ හද ගැස්ම වැනිය (අභ්‍යන්තරව වෙනස් වන).",
            "Counter ඇප් එකක් හරහා useState භාවිතය:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Interactive Counter with useState",
              code: `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>ගණනය: {count}</h2>
      <button onClick={() => setCount(count + 1)}>එකතු කරන්න (+1)</button>
      <button onClick={() => setCount(count - 1)}>අඩු කරන්න (-1)</button>
      <button onClick={() => setCount(0)}>මුලට (Reset)</button>
    </div>
  );
}`
            }
          ]
        },
        {
          title: "66.2 State Immutability සහ Objects/Arrays Update කිරීම",
          content: [
            "State එකක Object එකක් හෝ Array එකක් ඇති විට, එය කෙලින්ම user.name = 'Kamal' ලෙස වෙනස් කළ නොහැක. සැමවිටම Spread Operator (...) භාවිතයෙන් නව පිටපතක් සෑදිය යුතුය:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Updating Object State with Spread Operator",
              code: `const [user, setUser] = useState({ name: "Nimal", age: 20 });

// නිවැරදි ක්‍රමය:
setUser(prevUser => ({
  ...prevUser,
  name: "Kamal"
}));`
            }
          ]
        },
        {
          title: "66.3 Previous State Callback (setCount(prev => prev + 1))",
          content: [
            "පෙර අගය මත පදනම්ව State වෙනස් වන විට, සෘජු අගය වෙනුවට Updater Function එකක් (prev => prev + 1) ලබා දීමෙන් React හි Asynchronous State Updates නිසා ඇති වන Race conditions සම්පූර්ණයෙන්ම වළක්වා ගත හැක."
          ]
        }
      ],
      keyPoints: [
        "Hooks (useState, useEffect) සැමවිටම සංරචකයේ ඉහළින්ම ලිවිය යුතු අතර if හෝ loops තුළ ලිවිය නොහැක."
      ],
      exercises: [
        { id: 1, question: "State එකක් සෘජුව වෙනස් කළහොත් (count = count + 1) කුමක් සිදුවේද?" }
      ]
    },
    {
      id: 67,
      volumeId: 6,
      chapterNumber: 67,
      title: "සිදුවීම් පාලනය - පරිශීලක ක්‍රියාකාරකම්වලට ප්‍රතිචාර දැක්වීම (Events)",
      englishTitle: "Handling Events in React & SyntheticEvent",
      pageRange: "පිටු 200 - 203",
      description: "onClick, onChange, SyntheticEvent cross-browser wrapper, Event Object (e), e.target.value, e.preventDefault(), Passing arguments.",
      learningObjectives: [
        "රියැක්ට් හි සිදුවීම් camelCase (onClick, onChange) ලෙස ලිවීම",
        "SyntheticEvent මඟින් සියලුම බ්‍රවුසර වල එක හා සමානව ක්‍රියා කිරීම",
        "input පාලනය සඳහා e.target.value ලබා ගැනීම",
        "ශ්‍රිතයකට අමතර දත්ත යැවීම: onClick={() => deleteItem(id)}"
      ],
      sections: [
        {
          title: "67.1 Input Events & Passing Arguments",
          content: [
            "බ්‍රවුසරය සහ React අතර වෙනස: onClick={handleClick} ලෙස නම ලබා දෙයි. onClick={handleClick()} ලෙස ලියුවහොත් බොත්තම එබීමට පෙරම එය ක්‍රියාත්මක වේ!"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Controlled Input with Event Object",
              code: `import { useState } from 'react';

export default function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="සොයන්න..." 
      />
      <p>ඔබ සොයන්නේ: {query}</p>
    </div>
  );
}`
            }
          ]
        },
        {
          title: "67.2 SyntheticEvent සහ e.preventDefault()",
          content: [
            "HTML Forms submit වන විට මුළු පිටුවම Refresh වීම වැළැක්වීමට e.preventDefault() යොදයි. React විසින් බ්‍රවුසර අතර වෙනස්කම් ඉවත් කිරීම සඳහා සාමාන්‍ය බ්‍රවුසර සිදුවීම SyntheticEvent නමැති ආරක්ෂිත ආවරණයකින් ඔතා ලබා දෙයි."
          ]
        }
      ],
      keyPoints: [
        "Inline arrow function මඟින් ඕනෑම ශ්‍රිතයකට ID එකක් හෝ අගයක් තර්කයක් ලෙස යැවිය හැක."
      ],
      exercises: [
        { id: 1, question: "onClick={handleClick} සහ onClick={handleClick()} අතර වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 68,
      volumeId: 6,
      chapterNumber: 68,
      title: "කොන්දේසි මත පදනම් වූ නිරූපණය (Conditional Rendering)",
      englishTitle: "Conditional Rendering in React",
      pageRange: "පිටු 203 - 206",
      description: "if statements, Ternary Operator (? :), Logical AND (&&) short-circuiting, Returning null to hide, Traffic Light ව්‍යාපෘතිය.",
      learningObjectives: [
        "පරිශීලකයාගේ තත්ත්වය අනුව (Login/Logout, Loading) UI එක වෙනස් කිරීම",
        "Ternary Operator (? :) මඟින් JSX තුළ සරල කොන්දේසි ලිවීම",
        "&& ක්‍රියාකාරු මඟින් යමක් සත්‍ය නම් පමණක් පෙන්වීම",
        "null ආපසු යැවීමෙන් සංරචකයක් සම්පූර්ණයෙන්ම සඟවා තැබීම"
      ],
      sections: [
        {
          title: "68.1 Ternary සහ Logical AND (&&)",
          content: [
            "ස්වයංක්‍රීය දොරක් උපමාව: දොර ඉදිරිපිට කෙනෙකු සිටීද? ඔව් නම් දොර විවෘත වේ, නැතහොත් වැසී පවතී."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Conditional Rendering Patterns",
              code: `function NotificationBadge({ count, isLoggedIn }) {
  if (!isLoggedIn) return null; // සැඟවීම

  return (
    <div className="badge-wrapper">
      <span>පණිවිඩ පුවරුව</span>
      {/* Short-circuiting */}
      {count > 0 && <span className="badge">{count}</span>}
      {/* Ternary */}
      <p>{count > 0 ? "අලුත් පණිවිඩ ඇත" : "පණිවිඩ නොමැත"}</p>
    </div>
  );
}`
            }
          ]
        },
        {
          title: "68.2 Early Return Pattern (Guard Clauses)",
          content: [
            "සංරචකයක ප්‍රධාන JSX එක ඇඳීමට පෙර if (loading) return <Spinner />; හෝ if (error) return <ErrorMessage />; ලෙස කලින්ම පිටවීම Early Return නම් වේ. මෙය කේතය අතිශය පිරිසිදුව තබයි."
          ]
        }
      ],
      keyPoints: [
        "count && ... ලිවීමේදී count අගය 0 වුවහොත් තිරයේ '0' දිස්විය හැක. ඒ නිසා count > 0 && ... ලෙස ලියන්න."
      ],
      exercises: [
        { id: 1, question: "JSX තුළ කොන්දේසි පරීක්ෂා කිරීමට භාවිතා කරන ක්‍රම 3 මොනවාද?" }
      ]
    },
    {
      id: 69,
      volumeId: 6,
      chapterNumber: 69,
      title: "ලැයිස්තු සහ කීස් - දත්ත සමූහයක් පෙන්වීම (Lists & Keys)",
      englishTitle: "Lists and Keys - Rendering Collections",
      pageRange: "පිටු 206 - 209",
      description: "map() method in JSX, Key prop හි වැදගත්කම (පන්තියක සිසුන් උපමාව), Reconciliation, Array of Objects, සහ Unique IDs.",
      learningObjectives: [
        "ජාවාස්ක්‍රිප්ට් map() ශ්‍රිතය මඟින් දත්ත අරාවක් UI සංරචක බවට හැරවීම",
        "key ගුණාංගය යනු කුමක්ද සහ රියැක්ට් හට එය අත්‍යවශ්‍ය වන්නේ ඇයිද යන්න",
        "Array Index එක key එකක් ලෙස භාවිතා කිරීමේ අන්තරාය සහ Database ID එකක් යෙදීම",
        "Product List එකක් නිර්මාණය කිරීම"
      ],
      sections: [
        {
          title: "69.1 map() සහ key prop රහස",
          content: [
            "පන්තියක සිසුන් උපමාව: සිසුන් හඳුනා ගැනීමට වාඩි වී සිටින පුටු අංකය ගත්තොත් එක් අයෙකු අස් වූ විට සියලු අංක මාරු වේ (Index). නමුත් ශිෂ්‍ය හැඳුනුම්පත් අංකය (ID / Key) ගත්තොත් කොතැන සිටියත් නිවැරදිව හඳුනා ගත හැක."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Rendering Lists with Keys",
              code: `const products = [
  { id: 101, title: "HTML5 Course", price: 2500 },
  { id: 102, title: "React Mastery", price: 3500 },
  { id: 103, title: "Next.js Pro", price: 4500 }
];

export default function ProductList() {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <h4>{item.title}</h4>
          <p>මිල: රු. {item.price}</p>
        </div>
      ))}
    </div>
  );
}`
            }
          ]
        },
        {
          title: "69.2 Index as Key හි බරපතල අන්තරාය",
          content: [
            "අරාවක index එක (0, 1, 2) key එකක් ලෙස දුන් විට, ඔබ ලැයිස්තුවේ ඉහළින් අයිතමයක් මකා දැමුවහොත් හෝ අලුතින් එකක් දැමුවහොත් React විසින් වැරදි සංරචක නැවත Render කරයි. සැමවිටම අද්විතීය ID එකක් යොදන්න."
          ]
        }
      ],
      keyPoints: [
        "key එක මඟින් රියැක්ට් හට වෙනස් වූ අයිතමය පමණක් නිවැරදිව යාවත්කාලීන කිරීමට හැකි වේ."
      ],
      exercises: [
        { id: 1, question: "ලැයිස්තුවක key prop එකක් නොලැබුණහොත් කුමක් සිදුවේද?" }
      ]
    },
    {
      id: 70,
      volumeId: 6,
      chapterNumber: 70,
      title: "ඉෆෙක්ට්ස් - බාහිර ක්‍රියාකාරකම් සහ ජීවන චක්‍රය (useEffect Hook)",
      englishTitle: "Side Effects and Component Lifecycle (useEffect)",
      pageRange: "පිටු 209 - 212",
      description: "Side Effects යනු මොනවාද, useEffect syntax, Lifecycle (Mounting, Updating, Unmounting), Dependency Array ([ ], [data], no array), Cleanup function.",
      learningObjectives: [
        "Side Effect (බාහිර කාර්යයන් - API calls, Timers, DOM updates) යනු මොනවාදැයි අවබෝධ කර ගැනීම",
        "useEffect හි Dependency Array එක ක්‍රියාත්මක වන අවස්ථා 3 (No array, Empty array [], With dependencies [prop])",
        "Cleanup Function (return () => { }) මඟින් Memory Leaks වැළැක්වීම",
        "Infinite Loops ඇතිවීම වළක්වා ගැනීම"
      ],
      sections: [
        {
          title: "70.1 Dependency Array අවස්ථා 3",
          content: [
            "• useEffect(() => { ... }): සෑම render වාරයකදීම ධාවනය වේ.",
            "• useEffect(() => { ... }, []): සංරචකය තිරයට පැමිණි විට (Mount) එකම එක වරක් පමණක් ධාවනය වේ (API calls සඳහා).",
            "• useEffect(() => { ... }, [count]): count අගය වෙනස් වන සෑම වාරයකදීම ධාවනය වේ."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Timer with Cleanup Function",
              code: `import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function: සංරචකය ඉවත් වන විට ඔරලෝසුව නතර කරයි
    return () => clearInterval(timer);
  }, []); // එක වරක් පමණි

  return <div>ගත වූ තත්පර: {seconds}</div>;
}`
            }
          ]
        },
        {
          title: "70.2 Component Lifecycle (Mounting, Updating, Unmounting)",
          content: [
            "1. Mounting: සංරචකය ප්‍රථම වරට DOM එකට ඇතුළු වීම.",
            "2. Updating: Props හෝ State වෙනස් වී සංරචකය නැවත Render වීම.",
            "3. Unmounting: සංරචකය තිරයෙන් ඉවත් වීම. මෙහිදී Cleanup Function ක්‍රියාත්මක වේ."
          ]
        }
      ],
      keyPoints: [
        "Timer හෝ Event Listener ඉවත් නොකිරීම නිසා Memory Leak ඇති වේ; Cleanup Function අත්‍යවශ්‍යය."
      ],
      exercises: [
        { id: 1, question: "useEffect හි හිස් අරාවක් ([]) ලබා දුන් විට එය ක්‍රියාත්මක වන්නේ කී වතාවක්ද?" }
      ]
    },
    {
      id: 71,
      volumeId: 6,
      chapterNumber: 71,
      title: "ෆෝර්ම් හැසිරවීම - පාලිත සංරචක (Controlled Components)",
      englishTitle: "Handling Forms - Controlled Components",
      pageRange: "පිටු 212 - 216",
      description: "Controlled Components, Single Source of Truth, value & onChange, Multi-input handler with [e.target.name], Basic validation.",
      learningObjectives: [
        "රියැක්ට් හි පාලිත සංරචක (Controlled Components) සංකල්පය (අශ්වයෙකු පැදවීම උපමාව)",
        "value={state} සහ onChange={(e) => setState(e.target.value)} අනිවාර්ය සම්බන්ධය",
        "එක් ශ්‍රිතයක් මඟින් input කොටු 10ක් පාලනය කරන වෘත්තීය ක්‍රමය",
        "Form Validation (වලංගුභාවය පරීක්ෂා කිරීම)"
      ],
      sections: [
        {
          title: "71.1 Single Handler Form",
          content: [
            "අශ්වයා පැදවීම උපමාව: සාමාන්‍ය HTML වලදී අශ්වයාට තනිවම යාමට ඉඩ දී අවසානයේ බලයි. රියැක්ට් වලදී අශ්වයාගේ ලණුව (State) ඔබ අතේ තබාගෙන සෑම අඩියක්ම (keystroke) පාලනය කරයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Multi-input Controlled Form",
              code: `import { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'student'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="නම" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="ඊමේල්" />
      <button type="submit">ලියාපදිංචි වන්න</button>
    </form>
  );
}`
            }
          ]
        },
        {
          title: "71.2 Uncontrolled Components සහ useRef",
          content: [
            "සෑම අකුරකටම State Update නොකර, Form එක Submit කරන මොහොතේ පමණක් input එකේ අගය කියවීමට useRef Hook එක භාවිත කළ හැක (Uncontrolled Component)."
          ]
        }
      ],
      keyPoints: [
        "value පමණක් ලියා onChange නොලිවුවහොත් input එක Read-only වේ."
      ],
      exercises: [
        { id: 1, question: "Controlled Component එකක Single Source of Truth වන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 72,
      volumeId: 6,
      chapterNumber: 72,
      title: "රියැක්ට් රවුටින් - බහු-පිටු මෘදුකාංග නිර්මාණය (React Router)",
      englishTitle: "React Router - Multi-page Applications (SPA)",
      pageRange: "පිටු 216 - 219",
      description: "react-router-dom, BrowserRouter, Routes, Route, Link vs <a>, 404 Not Found, NavLink (Active states).",
      learningObjectives: [
        "React Router මඟින් පිටුව Reload නොවී බහු-පිටු (Multi-page) අත්දැකීමක් ලබා දීම (නාට්‍ය වේදිකාව උපමාව)",
        "BrowserRouter, Routes, Route, Link ප්‍රධාන සංරචක 4",
        "<a> ටැගය භාවිතා නොකර <Link> භාවිතා කරන්නේ ඇයි දැයි වටහා ගැනීම",
        "path='*' මඟින් 404 Not Found පිටුවක් හැසිරවීම"
      ],
      sections: [
        {
          title: "72.1 React Router Setup",
          content: [
            "නාට්‍ය වේදිකාව උපමාව: පිටුවක් මාරු වන විට නරඹන්නා ශාලාවෙන් පිටතට ගොස් නැවත පැමිණෙන්නේ නැත. තිරය වසා වේදිකාවේ ඇති බඩුබාහිරාදිය පමණක් මාරු කර අලුත් තැනක් පෙන්වයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "React Router Structure",
              code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">මුලට</Link>
        <Link to="/about">මා ගැන</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - පිටුව හමු නොවිණි!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`
            }
          ]
        },
        {
          title: "72.2 NavLink සහ Active Navigation Classes",
          content: [
            "<NavLink> භාවිතා කළ විට පරිශීලකයා දැනට සිටින පිටුවේ ලින්ක් එකට ස්වයංක්‍රීයව 'active' class එකක් ලැබෙන අතර, එමඟින් Menu එකේ සක්‍රීය පිටුව පහසුවෙන් පාට කළ හැක."
          ]
        }
      ],
      keyPoints: [
        "<a> ටැගය භාවිතා කළහොත් මුළු පිටුවම Refresh වී සියලු State මැකී යයි."
      ],
      exercises: [
        { id: 1, question: "Link සහ <a> අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 73,
      volumeId: 6,
      chapterNumber: 73,
      title: "කොන්ටෙක්ස්ට් ඒ.පී.අයි - ගෝලීය දත්ත පාලනය (Context API)",
      englishTitle: "Context API - Global State Management",
      pageRange: "පිටු 219 - 222",
      description: "Prop Drilling ගැටලුව, ගුවන්විදුලි විකාශනය උපමාව, createContext, Provider, useContext Hook, Theme Switcher (Dark/Light).",
      learningObjectives: [
        "Prop Drilling (දත්ත අතින් අත යැවීමේ ගැටලුව) තේරුම් ගැනීම",
        "Context API මඟින් ගෝලීය දත්ත පද්ධතියක් (Global Store) සෑදීම",
        "createContext(), <Provider value={...}> සහ useContext() පියවර 3",
        "මුළු ඇප් එකටම බලපාන Dark/Light Mode Theme Switcher එකක් සෑදීම"
      ],
      sections: [
        {
          title: "73.1 ගුවන්විදුලි විකාශන උපමාව සහ Theme Switcher",
          content: [
            "Prop Drilling: ලියුමක් එක් අයෙකුගෙන් තවත් අයෙකුට අතින් අත යැවීම වැනිය (මැද සිටින අයට අදාළ නැතත් කරදරයකි).",
            "Context API: ගුවන්විදුලි මධ්‍යස්ථානයක් (Provider) වාතයට දත්ත මුදා හරියි (Broadcast). ඕනෑම කෙනෙකුට රේඩියෝව ඔන් කර (useContext) එයට සවන් දිය හැක."
          ]
        },
        {
          title: "73.2 Custom Provider Pattern",
          content: [
            "Context Logic එක වෙනම ThemeContext.jsx ගොනුවක තබා, useTheme() නමින් Custom Hook එකක් සකස් කිරීම රියැක්ට් ප්‍රමිතියයි."
          ]
        }
      ],
      keyPoints: [
        "නිතර වෙනස් වන වේගවත් දත්ත සඳහා Redux / Zustand ද, Theme, User Auth වැනි දත්ත සඳහා Context API ද සුදුසුය."
      ],
      exercises: [
        { id: 1, question: "Prop Drilling යනු කුමක්දැයි සරලව විස්තර කරන්න." }
      ]
    },
    {
      id: 74,
      volumeId: 6,
      chapterNumber: 74,
      title: "ඒ.පී.අයි දත්ත ලබා ගැනීම (API Integration in React)",
      englishTitle: "API Integration and Data Fetching in React",
      pageRange: "පිටු 223 - 226",
      description: "useEffect + fetch(), පියවර 5ක ක්‍රියාවලිය (State, Loading, Error, Fetch, Conditional Render), JSONPlaceholder Users, AbortController.",
      learningObjectives: [
        "රියැක්ට් තුළ බාහිර API දත්ත ලබා ගැනීමේ පියවර 5 ප්‍රගුණ කිරීම",
        "isLoading සහ Error States මඟින් පරිශීලක අත්දැකීම (UX) ඉහළ නැංවීම",
        "useEffect හි හිස් අරාව ([]) මඟින් Infinite Loops වැළැක්වීම",
        "සැබෑ පරිශීලක ලැයිස්තුවක් තිරයේ පෙන්වීම"
      ],
      sections: [
        {
          title: "74.1 පියවර 5ක API Data Fetching",
          content: [
            "1. Data State සෑදීම",
            "2. Loading State සෑදීම",
            "3. Error State සෑදීම",
            "4. useEffect තුළ async fetch ක්‍රියාත්මක කිරීම",
            "5. Conditional Rendering මඟින් Loading/Error/Data පෙන්වීම"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Professional React Data Fetching",
              code: `import { useState, useEffect } from 'react';

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error("දත්ත පැමිණියේ නැත!");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">දත්ත පැමිණෙමින් පවතී...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
    </ul>
  );
}`
            }
          ]
        },
        {
          title: "74.2 AbortController මඟින් Network Leak වැළැක්වීම",
          content: [
            "පරිශීලකයා පිටුවෙන් ඉක්මනින් පිටව ගියහොත්, පසුබිමේ සිදුවන fetch ඉල්ලීම අවලංගු කිරීමට AbortController සංඥාව (signal) භාවිතා කළ හැක."
          ]
        }
      ],
      keyPoints: [
        "පළමු පරීක්ෂාවේදී useEffect නොමැතිව සෘජුව fetch කළහොත් Infinite Render Loop එකක් හට ගනී."
      ],
      exercises: [
        { id: 1, question: "Loading State එකක් පවත්වා ගැනීම වැදගත් වන්නේ ඇයි?" }
      ]
    },
    {
      id: 75,
      volumeId: 6,
      chapterNumber: 75,
      title: "රියැක්ට් ව්‍යාපෘති ප්‍රසිද්ධ කිරීම (Deploying React Apps)",
      englishTitle: "Deploying React Applications (Vite, Netlify, Vercel)",
      pageRange: "පිටු 226 - 228",
      description: "Dev vs Production Mode, npm run build (dist folder), Netlify Drag & Drop, GitHub CD, _redirects SPA routing fix.",
      learningObjectives: [
        "Development Mode (විශාල, දෝෂ පරීක්ෂා කරන) සහ Production Mode (Minified, අතිශය වේගවත්) අතර වෙනස",
        "npm run build මඟින් dist ෆෝල්ඩරය නිර්මාණය කිරීම (කේක් එකක් පුළුස්සා ගැනීම උපමාව)",
        "Netlify සහ Vercel මඟින් සජීවීව අන්තර්ජාලයට මුදා හැරීම",
        "React Router හි 404 Error විසඳීමට _redirects ගොනුව භාවිතා කිරීම"
      ],
      sections: [
        {
          title: "75.1 _redirects ගොනුව මඟින් 404 දෝෂය විසඳීම",
          content: [
            "ගැටලුව: ඔබ /about පිටුවට ගොස් Refresh කළ විට බ්‍රවුසරය සිතන්නේ /about.html කියා ගොනුවක් සර්වර් එකේ ඇතැයි කියාය. නමුත් React වල ඇත්තේ එකම index.html ගොනුවකි. එවිට 404 Not Found දෝෂය ලැබේ.",
            "විසඳුම: public ෆෝල්ඩරය තුළ _redirects නමින් ගොනුවක් සාදා /* /index.html 200 ලෙස ලියන්න."
          ]
        },
        {
          title: "75.2 npm run build සහ Production Optimization",
          content: [
            "npm run build විධානය මඟින් ඔබේ සියලු JSX, CSS සහ JS ගොනු කුඩා (Minified, Tree-shaken) ගොනු බවට පත් කර dist/ ෆෝල්ඩරය තුළ තැන්පත් කරයි."
          ]
        }
      ],
      keyPoints: [
        "අන්තර්ජාලයට යැවිය යුත්තේ dist ෆෝල්ඩරයේ ඇති ගොනු පමණි."
      ],
      exercises: [
        { id: 1, question: "React Router යෙදූ ඇප් එකක් Refresh කළ විට 404 එන්නේ ඇයි? එය විසඳන්නේ කෙසේද?" }
      ]
    },
    {
      id: 76,
      volumeId: 6,
      chapterNumber: 76,
      title: "මහා ව්‍යාපෘතිය - 'TaskMaster Pro' ව්‍යාපෘති කළමනාකරණ පද්ධතිය",
      englishTitle: "Capstone Project: TaskMaster Pro (Complete Web App)",
      pageRange: "පිටු 229 - 233",
      description: "Full React App Architecture: TaskContext, TaskForm, TaskItem, TaskList, Multi-page Routing, LocalStorage persistence, Filtering.",
      learningObjectives: [
        "පරිමාව 6 තුළ උගත් සියලුම React සංකල්ප (Components, Props, State, Context, Router, LocalStorage) එකතු කර සම්පූර්ණ යෙදුමක් සෑදීම",
        "ගෝලීය TaskContext එකක් මඟින් CRUD (Create, Read, Update, Delete) ක්‍රියාත්මක කිරීම",
        "LocalStorage සමඟ සම්බන්ධ කර බ්‍රවුසරය වැසුවද වැඩ ලැයිස්තුව සුරක්ෂිතව තබා ගැනීම",
        "Multi-page Routes: / (All), /active (ක්‍රියාකාරී), /completed (නිම කළ)"
      ],
      sections: [
        {
          title: "76.1 TaskMaster Pro ගෘහ නිර්මාණ ශිල්පය",
          content: [
            "වෘත්තීය React යෙදුමක් ගොඩනැගීමේදී සියලු දත්ත සහ ක්‍රමවේද Context තුළද, දෘශ්‍ය සංරචක Components තුළද, තිර පිරිසැලසුම් Pages තුළද වෙන්ව පවතී:"
          ],
          asciiDiagram: `src/
├── context/TaskContext.jsx   <── [ Global State & LocalStorage ]
├── components/
│   ├── TaskForm.jsx          <── [ Add New Task ]
│   ├── TaskItem.jsx          <── [ Toggle & Delete ]
│   └── TaskList.jsx          <── [ Render Filtered List ]
└── pages/
    ├── AllTasks.jsx          <── [ / Route ]
    ├── ActiveTasks.jsx       <── [ /active Route ]
    └── CompletedTasks.jsx    <── [ /completed Route ]`
        },
        {
          title: "76.2 TaskContext සහ LocalStorage Persistence",
          content: [
            "පරිශීලකයා ඇතුළත් කරන කාර්යයන් (tasks) බ්‍රවුසරය වැසුවද හෝ Refresh කළද නොමැකී සුරැකීමට useEffect සහ LocalStorage එකතු කළ TaskContext ගොනුව:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "src/context/TaskContext.jsx",
              code: `import { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('taskmaster_pro_data');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('taskmaster_pro_data', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);`
            }
          ]
        },
        {
          title: "76.3 TaskItem සහ Filtering සංරචකය",
          content: [
            "සෑම Task එකක්ම නිරූපණය කරන TaskItem සංරචකය සහ කාර්යයන් පෙරහන් කිරීමේ තර්කනය:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "src/components/TaskItem.jsx",
              code: `import { useTasks } from '../context/TaskContext';

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 accent-cyan-500 rounded cursor-pointer"
        />
        <span className={task.completed ? "line-through text-slate-500" : "text-white font-medium"}>
          {task.title}
        </span>
      </div>
      <button 
        onClick={() => deleteTask(task.id)}
        className="text-rose-400 hover:text-rose-300 text-sm px-2 py-1"
      >
        ඉවත් කරන්න
      </button>
    </div>
  );
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Lazy Initial State: useState(() => JSON.parse(...)) මඟින් සෑම render වාරයකදීම LocalStorage කියවීම වැළකී කාර්යක්ෂමතාව ඉහළ යයි.",
        "වෘත්තීය මට්ටමේ React ඇප් එකක තර්කනය Context තුළ ද, පෙනුම Components තුළ ද වෙන්ව පවතී."
      ],
      exercises: [
        { id: 1, question: "TaskMaster Pro හි LocalStorage persistence ක්‍රියාත්මක කරන useEffect එක ලියන්න." }
      ]
    },
    {
      id: 77,
      volumeId: 6,
      chapterNumber: 77,
      title: "විශේෂ ප්‍රෝ: රියැක්ට් කාර්යක්ෂමතාව, උසස් හුක්ස් සහ ගෘහ නිර්මාණ ශිල්පය",
      englishTitle: "React Performance, Advanced Hooks (useMemo, useCallback, useRef)",
      pageRange: "පිටු 234 - 236",
      description: "Memoization (React.memo), useMemo vs useCallback, useRef DOM access, Custom Hooks (useOnlineStatus), Code Splitting (lazy, Suspense), Error Boundaries.",
      learningObjectives: [
        "React.memo() මඟින් අදාළ නොවන සංරචක නැවත ඇඳීම (Unnecessary Re-renders) වැළැක්වීම",
        "useMemo (ගණනය කළ අගයන් මතක තබා ගැනීම) සහ useCallback (ශ්‍රිත මතක තබා ගැනීම)",
        "useRef මඟින් සෘජුව DOM එක වෙත පිවිසීම",
        "තමන්ගේම Custom Hooks (උදා: useOnlineStatus) නිර්මාණය කිරීම",
        "React.lazy සහ Suspense මඟින් පිටු අවශ්‍ය විට පමණක් Load කිරීම"
      ],
      sections: [
        {
          title: "77.1 useMemo සහ useCallback අතර වෙනස",
          content: [
            "• useMemo: සංකීර්ණ ගණනය කිරීමක ප්‍රතිඵල අගය මතක තබා ගනී (Caches a calculated value).",
            "• useCallback: සංරචකය re-render වන විට ශ්‍රිතය අලුතින් සෑදීම වළක්වා මුල් ශ්‍රිතයම මතක තබා ගනී (Caches a function definition)."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "useMemo Example",
              code: `import { useMemo } from 'react';

const expensiveResult = useMemo(() => {
  return performHeavyCalculation(data);
}, [data]);`
            }
          ]
        },
        {
          title: "77.2 useRef සහ Custom Hooks",
          content: [
            "useRef මඟින් සංරචකය re-render නොවී අගයක් මතක තබා ගැනීමට හෝ HTML input element එකකට focus කිරීමට ඉඩ ලබා දේ."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Custom Hook (useOnlineStatus.js)",
              code: `import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Composition vs Inheritance: රියැක්ට් වලදී පන්ති උරුම කරගන්නේ නැත; සංරචක එකක් ඇතුළත තවත් එකක් එතීම (Children props) සිදු කරයි."
      ],
      exercises: [
        { id: 1, question: "useMemo සහ useCallback අතර ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 78,
      volumeId: 6,
      chapterNumber: 78,
      title: "උසස් සංරචක රටා, ස්ටයිලින් සහ දෝෂ සෙවීම",
      englishTitle: "Advanced Component Patterns, CSS Modules & Debugging",
      pageRange: "පිටු 237 - 239",
      description: "Children Props (Component Composition), CSS Modules (Scoped styles), useReducer Hook (Bank Teller උපමාව), React DevTools.",
      learningObjectives: [
        "Children Prop මඟින් නම්‍යශීලී Shell/Layout සංරචක සෑදීම",
        "CSS Modules (.module.css) මඟින් පන්ති නාම ගැටුම් (Class collisions) සම්පූර්ණයෙන්ම වැළැක්වීම",
        "useReducer: සංකීර්ණ ස්ටේට් පාලනයට Action & Reducer ක්‍රමවේදය (බැංකු සේවකයා උපමාව)",
        "React DevTools Profiler මඟින් සංරචක විගණනය සහ Debugging"
      ],
      sections: [
        {
          title: "78.1 Children Props සහ Component Composition",
          content: [
            "රියැක්ට් වලදී Modal හෝ Card එකක් සාදන විට එහි ඇතුළත ඕනෑම අන්තර්ගතයක් (HTML හෝ වෙනත් Components) එබීමට {children} prop එක යොදයි. මෙය Composition රටාවයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "CardWrapper.jsx (Composition)",
              code: `export function CardWrapper({ title, children }) {
  return (
    <div className="border border-white/10 rounded-2xl p-6 bg-slate-900/60">
      <h3 className="text-lg font-bold text-cyan-400 mb-4">{title}</h3>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage in another component:
<CardWrapper title="පරිශීලක තොරතුරු">
  <p>නම: කසුන් පෙරේරා</p>
  <button className="btn">සංස්කරණය</button>
</CardWrapper>`
            }
          ]
        },
        {
          title: "78.2 useReducer සංකල්පය සහ බැංකු සේවකයා උපමාව",
          content: [
            "බැංකු සේවකයා උපමාව: ඔබ බැංකුවට ගොස් මුදල් තැන්පත් කරන්නේ ඔබම සේප්පුව විවෘත කර නොවේ. ඔබ සේවකයාට පවසනවා ඔබ කළ යුතු දේ (Action: { type: 'DEPOSIT', amount: 1000 }). සේවකයා ඔහුගේ පොතේ (Reducer) නීති රීති බලා ඔබේ ගිණුම (State) යාවත්කාලීන කරයි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "useReducer Pattern",
              code: `import { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
    default: return state;
  }
}

export default function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`
            }
          ]
        }
      ],
      keyPoints: [
        "CSS Modules මඟින් බ්‍රවුසරය ස්වයංක්‍රීයව අද්විතීය Class hash අංකයක් එකතු කරයි (button_btn__x1y2).",
        "useState වෙනුවට useReducer භාවිතා කරන්නේ එකිනෙකට සම්බන්ධ ස්ටේට් කිහිපයක් එකවර වෙනස් වන විටය."
      ],
      exercises: [
        { id: 1, question: "useState වෙනුවට useReducer භාවිතා කරන්නේ කුමන අවස්ථාවලදීද?" }
      ]
    },
    {
      id: 79,
      volumeId: 6,
      chapterNumber: 79,
      title: "නූතන ස්ටයිලින් - ටේල්වින්ඩ් සී.එස්.එස් සහ සංරචක පුස්තකාල",
      englishTitle: "Modern Styling - Tailwind CSS and 21st.dev",
      pageRange: "පිටු 240 - 242",
      description: "Utility-first framework, නිමි ඇඳුම් උපමාව, Tailwind vs Traditional CSS, 21st.dev, Shadcn UI සංකල්පය, Copy-Paste philosophy.",
      learningObjectives: [
        "Tailwind CSS යනු කුමක්ද සහ Utility-first ක්‍රමයේ වේගවත් බව",
        "සාමාන්‍ය CSS හි class නම් සිතීම වෙනුවට JSX තුළම පිරිසිදු utility classes යෙදීම",
        "21st.dev සහ Shadcn UI: npm install බර පුස්තකාල වෙනුවට Copy-Paste සංරචක ආකෘතිය",
        "Tailwind Responsive prefixes (sm:, md:, lg:, xl:)"
      ],
      sections: [
        {
          title: "79.1 නිමි ඇඳුම් උපමාව සහ Tailwind කාඩ්පත",
          content: [
            "නිමි ඇඳුම් උපමාව: සාමාන්‍ය CSS යනු රෙදි කැබැල්ලක් ගෙන, මිනුම් ගෙන මහන්නාට දී ඇඳුමක් මසා ගැනීම වැනිය (කාලය ගත වේ). Tailwind යනු ඉතා උසස් ප්‍රමිතියෙන් මැසූ සියලු ප්‍රමාණවල සහ වර්ණවල නිමි ඇඳුම් ඇති සාප්පුවකි. ඔබට ඇත්තේ තෝරා ඇඳීම පමණි."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Tailwind React Card",
              code: `export function ModernCard() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:border-cyan-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-cyan-400">Modern Architecture</h3>
      <p className="mt-2 text-slate-400 text-sm">Tailwind utility classes allow instant layout building directly in JSX.</p>
      <button className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:opacity-90">
        Explore
      </button>
    </div>
  );
}`
            }
          ]
        },
        {
          title: "79.2 Shadcn UI සහ Copy-Paste සංස්කෘතිය",
          content: [
            "MUI හෝ Bootstrap වැනි විශාල පැකේජ node_modules තුළට දමා සීමාවීමට වඩා, අද නූතන ප්‍රවණතාවය වන්නේ Shadcn UI හෝ 21st.dev මඟින් තමන්ට අවශ්‍ය සංරචකයේ කේතය සෘජුවම src/components තුළට Copy-Paste කර තමන්ට අවශ්‍ය පරිදි වෙනස් කර ගැනීමයි."
          ]
        }
      ],
      keyPoints: [
        "Tailwind හි Purge / JIT එන්ජිම මඟින් ඔබ භාවිතා නොකළ සියලු CSS පේළි ඉවත් කර 10KB - 20KB වැනි ඉතා කුඩා අවසාන ගොනුවක් සාදයි."
      ],
      exercises: [
        { id: 1, question: "Tailwind CSS හි 'Utility-first' යන්නෙන් අදහස් වන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 80,
      volumeId: 6,
      chapterNumber: 80,
      title: "ටේල්වින්ඩ් ප්‍රවීණතාව සහ අති නවීන සංරචක ඉංජිනේරු විද්‍යාව",
      englishTitle: "Advanced Tailwind Mastery & Modern Component Engineering",
      pageRange: "පිටු 242 - 245",
      description: "tailwind.config.js, Group hover & Peer states, Radix UI (Headless primitives), Framer Motion, clsx & tailwind-merge (cn() helper).",
      learningObjectives: [
        "tailwind.config.js හි theme.extend මඟින් තමන්ගේම Design System එකක් සැකසීම",
        "group-hover සහ peer මඟින් සංකීර්ණ අන්තර්ක්‍රියාකාරී තත්ත්ව පාලනය",
        "21st.dev පිටුපස ඇති කුළුණු 3: Tailwind CSS (පෙනුම) + Radix UI (Logic/a11y) + Framer Motion (සජීවීකරණ)",
        "cn() helper function: cn(buttonVariants({ variant, size }), className)"
      ],
      sections: [
        {
          title: "80.1 cn() Helper Function සහ CVA",
          content: [
            "සෑම වෘත්තීය රියැක්ට් ව්‍යාපෘතියකම පරස්පර විරෝධී Class නම් ගැටීම වැළැක්වීමට tailwind-merge සහ clsx එකතු කළ cn() ශ්‍රිතය භාවිතා කළ යුතුය."
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "The Ultimate cn() Helper (src/lib/utils.ts)",
              code: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}`
            }
          ]
        },
        {
          title: "80.2 Radix UI සහ Framer Motion ඒකාබද්ධතාවය",
          content: [
            "Headless UI Primitives (Radix UI) මඟින් Keyboard navigation, Focus trap, සහ Screen reader accessibility නොමිලයේ ලැබෙන අතර, Framer Motion මඟින් සුමට සජීවිකරණ (Animations) එක් කරයි."
          ]
        }
      ],
      keyPoints: [
        "Arbitrary values (top-[117px], bg-[#0f172a]) මඟින් ඕනෑම custom අගයක් ලබා දිය හැක."
      ],
      exercises: [
        { id: 1, question: "tailwind-merge පුස්තකාලය භාවිතා කරන්නේ කුමන හේතුවක් නිසාද?" }
      ]
    },
    {
      id: 81,
      volumeId: 6,
      chapterNumber: 81,
      title: "ටේල්වින්ඩ් පද්ධති ඉංජිනේරු විද්‍යාව සහ උසස් සංරචක ගෘහ නිර්මාණ ශිල්පය",
      englishTitle: "Tailwind Systems Engineering & Advanced Component Architecture",
      pageRange: "පිටු 245 - 248",
      description: "@layer base, components, utilities, @apply, CVA (Class Variance Authority), Plugins (@tailwindcss/typography, forms), Purge & Minification.",
      learningObjectives: [
        "CSS ගොනුව තුළ @layer base සහ @layer components භාවිතය",
        "Class Variance Authority (CVA) මඟින් Button Variants (primary, danger, outline) පිරිසිදුව නිර්මාණය කිරීම",
        "Tailwind Plugins මඟින් Markdown සහ Forms අලංකාර කිරීම",
        "අවසාන නිෂ්පාදන ගොනුවේ ප්‍රමාණය (Production Bundle Size) ප්‍රශස්ත කිරීම"
      ],
      sections: [
        {
          title: "81.1 Class Variance Authority (CVA) සහ Type-Safe Component Variants",
          content: [
            "බොත්තම් වර්ග කිහිපයක් ඇති විට (Primary, Secondary, Danger) if/else සිය ගණනක් ලියනවා වෙනුවට CVA භාවිතා කරයි. Shadcn UI ඇතුළු ලෝකයේ ප්‍රධාන පෙළේ මෘදුකාංග පද්ධති (Design Systems) සාදන්නේ මෙලෙසයි:"
          ],
          codeSnippets: [
            {
              language: "javascript",
              title: "Button Component with CVA",
              code: `import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-xl transition-all focus:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md shadow-cyan-500/20",
        secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-white/10",
        danger: "bg-rose-500 text-white hover:bg-rose-600",
        ghost: "hover:bg-white/5 text-slate-300"
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
);

export function Button({ className, variant, size, ...props }) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}`
            }
          ]
        },
        {
          title: "81.2 @layer base සහ Custom Utilities",
          content: [
            "@layer මඟින් Tailwind හි නිශ්චිත ප්‍රමුඛතා ස්ථර (Specificity layers) තුළට ඔබේම CSS ඇතුළත් කළ හැක:",
            "• @layer base: h1, body වැනි මූලික HTML ටැග් වල පෙරනිමි විලාසිතා සැකසීමට.",
            "• @layer components: .glass-card වැනි නැවත නැවත යොදන පන්ති සැකසීමට."
          ]
        }
      ],
      keyPoints: [
        "CVA මඟින් Type-safe සංරචක Variants ඉතා පහසුවෙන් නිර්මාණය කළ හැක.",
        "@apply පමණට වඩා භාවිතා නොකරන්න; Tailwind හි සැබෑ බලය ඇත්තේ JSX තුළ කෙලින්ම utility classes ලිවීම තුළය."
      ],
      exercises: [
        { id: 1, question: "CVA භාවිතා කිරීමේ ප්‍රධාන වාසිය කුමක්ද?" }
      ]
    },
    {
      id: 82,
      volumeId: 6,
      chapterNumber: 82,
      title: "වෘත්තීය ඉදිරිපෙළ වැඩපිළිවෙළ සහ සැලසුම්කරණයේ සිට කේතකරණය දක්වා",
      englishTitle: "Professional Frontend Workflow: From Design to Code",
      pageRange: "පිටු 249 - 251",
      description: "Design-to-Code (Figma to React), Component Thinking & Decomposition, NPM vs Yarn, package-lock.json, Prettier & ESLint, TypeScript Awareness.",
      learningObjectives: [
        "Figma සැලසුමක් බලා සෘජුව කේත නොලියා Static සහ Dynamic කොටස් හඳුනා ගැනීමේ කලාව",
        "Component Thinking: මුළු නිර්මාණයම සංරචක ගසක් (Component Tree) ලෙස සිතියම් ගත කිරීම",
        "package-lock.json මඟින් සියලු දෙනාටම එකම අනුවාදය සහතික කිරීම",
        "ESLint සහ Prettier මඟින් කේතයේ ප්‍රමිතිය රැක ගැනීම",
        "පරිමාව 6 අවසාන විගණනය සහ Junior React Developer සූදානම"
      ],
      sections: [
        {
          title: "82.1 Design to Code පියවර 3 සහ Component Decomposition",
          content: [
            "1. Design (Figma): UI/UX නිර්මාණකරු අතුරුමුහුණතේ පික්සල් සහ වර්ණ නිර්මාණය කරයි.",
            "2. Decomposition: නිර්මාණය කොටස් වලට කඩා (Header, Sidebar, Feed, Card) නැවත භාවිතා කළ හැකි සංරචක ලැයිස්තුගත කිරීම.",
            "3. Engineering: Frontend Developer එම රූපසටහන බලා React සහ Tailwind මඟින් සැබෑ අන්තර්ක්‍රියාකාරී මෘදුකාංගයක් බවට පත් කරයි."
          ],
          asciiDiagram: `[ Figma Mockup ] ──(Decomposition)──► [ Component Hierarchy Tree ]
                                              ├── Header
                                              │    └── SearchBar
                                              └── Feed
                                                   └── FeedItem (Reusable)`
        },
        {
          title: "82.2 package-lock.json සහ Code Quality Tools",
          content: [
            "• package-lock.json: ඔබගේ කණ්ඩායමේ ඕනෑම සාමාජිකයෙකු හෝ සර්වර් එකක් npm install කළ විට, ඒ සෑම තැනකදීම ස්ථාපනය වන්නේ එකම නිශ්චිත Sub-dependency අනුවාද බව සහතික කරයි ('It works on my machine' ගැටලුව විසඳයි).",
            "• Prettier: කේතයේ ඉඩ තැබීම් සහ විරාම ලකුණු ස්වයංක්‍රීයව අලංකාර කරයි.",
            "• ESLint: කේතයේ ඇති දෝෂ (භාවිතා නොකළ විචල්‍ය, අමතක වූ dependencies) කල්තියා හඳුනා ගනී."
          ]
        }
      ],
      keyPoints: [
        "සංරචක ව්‍යුහය කලින් සැලසුම් කිරීමෙන් දෝෂ (Bugs) 80% ක් පමණ අවම වේ.",
        "ඔබ දැන් React.js තාක්ෂණය පිළිබඳ වෘත්තීය මට්ටමේ (Pro-level) දැනුමක් සහිත 'React Developer' කෙනෙකි!"
      ],
      exercises: [
        { id: 1, question: "package-lock.json ගොනුවේ ප්‍රධාන කාර්යය කුමක්ද?" },
        { id: 2, question: "Prettier සහ ESLint අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    }
  ]
};
