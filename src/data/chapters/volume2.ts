import { Chapter } from '../../types/book';

export const volume2Chapters: Chapter[] = [
  {
    id: "ch-13",
    chapterNumber: 13,
    title: "CSS හැඳින්වීම - වෙබ් අඩවියකට පණ පොවමු",
    englishTitle: "Introduction to CSS",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 43,
    learningObjectives: [
      "CSS යනු කුමක්ද සහ එහි ඇති වැදගත්කම තේරුම් ගැනීම.",
      "CSS වල ඉතිහාසය සහ පරිණාමය.",
      "CSS ලියන මූලික රටාව (Syntax) අවබෝධ කර ගැනීම.",
      "CSS ගොනුවක් HTML ගොනුවකට සම්බන්ධ කරන ක්‍රම 3 හඳුනා ගැනීම.",
      "පළමු වරට වෙබ් පිටුවක වර්ණ සහ හැඩතල වෙනස් කිරීම."
    ],
    sections: [
      {
        title: "13.1 CSS යනු කුමක්ද සහ ලිවීමේ රටාව (Syntax)",
        content: [
          "CSS යනු Cascading Style Sheets යන්නෙහි කෙටි නමයි. HTML මගින් වෙබ් අඩවියක සැකිල්ල (Structure) සාදන අතර, CSS මගින් එම සැකිල්ල අලංකාර කිරීම සිදු කරයි.",
          "සරල උපමාව: HTML යනු නිවසක ගඩොල් සැකිල්ලයි. CSS යනු එම නිවසේ බිත්තිවල ගාන 'සායම්', දොර ජනෙල් වල 'හැඩය' සහ ගෘහ භාණ්ඩ තබන 'ස්ථානය' තීරණය කරන සැලසුම් ශිල්පියා වැනිය.",
          "CSS Syntax:",
          "Selector { Property: Value; }",
          "• Selector (තේරීම්කාරකය): අප හැඩ කිරීමට බලාපොරොත්තු වන HTML ටැගය (උදා: h1, p).",
          "• Property (ගුණාංගය): අප වෙනස් කිරීමට යන දේ (උදා: color, font-size).",
          "• Value (අගය): අප ලබා දෙන අගය (උදා: blue, 30px)."
        ],
        codeSnippet: {
          language: "css",
          code: `/* සියලුම h1 ටැග් නිල් පාට කර, විශාලත්වය 30px කරයි */
h1 {
  color: #2563eb;
  font-size: 30px;
  text-align: center;
}`
        }
      },
      {
        title: "13.2 CSS එකතු කරන ක්‍රම 3 (Three Ways to Add CSS)",
        content: [
          "1. Inline CSS: HTML ටැගය තුළම style attribute එක භාවිතා කර ලිවීම (<h1 style=\"color: red;\">). මෙය වෘත්තීය ක්‍රමයක් නොවේ.",
          "2. Internal CSS: HTML ගොනුවේ <head> තුළ <style> ටැගය තුළ ලිවීම.",
          "3. External CSS (වඩාත්ම නිර්දේශිත ක්‍රමය): CSS වෙනමම style.css ගොනුවක ලියා, HTML පිටුවට සම්බන්ධ කිරීම: <link rel=\"stylesheet\" href=\"style.css\">."
        ]
      }
    ],
    keyPoints: [
      "CSS මගින් වෙබ් පිටු වල පෙනුම පාලනය කරයි.",
      "CSS හි ප්‍රධාන කොටස් Selector, Property සහ Value ය.",
      "හොඳම ක්‍රමය වන්නේ External CSS (බාහිර ගොනු) භාවිතා කිරීමයි.",
      "සෑම Property එකක් අවසානයේම සෙමිකෝලනයක් (;) තිබිය යුතුය."
    ],
    exercises: [
      "CSS යන්නෙහි සම්පූර්ණ නම කුමක්ද?",
      "External CSS භාවිතයේ වාසි 2ක් ලියන්න.",
      "සියලුම ඡේද (<p>) වල අකුරු මැදට (center) සහ තද (bold) කිරීමට අවශ්‍ය CSS ලියන්න."
    ]
  },
  {
    id: "ch-14",
    chapterNumber: 14,
    title: "CSS තේරීම්කාරක - නිවැරදි ඉලක්කය තෝරා ගැනීම",
    englishTitle: "CSS Selectors & Specificity",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 45,
    learningObjectives: [
      "CSS Selector (තේරීම්කාරකයක්) යනු කුමක්දැයි වෘත්තීය මට්ටමින් තේරුම් ගැනීම.",
      "මූලික තේරීම්කාරක වර්ග (Universal *, Element, Class ., ID #) හඳුනා ගැනීම.",
      "Class සහ ID අතර ඇති තාක්ෂණික සහ ප්‍රායෝගික වෙනස්කම් ඉගෙන ගැනීම.",
      "සමූහ තේරීම්කාරක (Grouping) සහ පැවත එන්නන් තේරීම (Descendant).",
      "CSS ප්‍රමුඛතාවය (Specificity) ක්‍රියා කරන ආකාරය."
    ],
    sections: [
      {
        title: "14.1 Class vs ID සහ ප්‍රමුඛතාවය (Specificity)",
        content: [
          "Universal Selector (*): සියලුම ටැග් තෝරා ගනී (* { margin: 0; padding: 0; }).",
          "Element Selector: HTML ටැගයේ නම කෙලින්ම භාවිතා කරයි (p { color: red; }).",
          "Class Selector (.name): ටැග් ගණනාවකට එකම හැඩතල නැවත නැවත ලබා දීමට (Reusable).",
          "ID Selector (#name): පිටුවකට එක් වරක් පමණක් භාවිත වන අනන්‍ය ටැගයකට.",
          "Specificity Hierarchy (ප්‍රමුඛතාවය):",
          "[*] < [Element] < [Class (.name)] < [ID (#id)] < [Inline style] < [!important]",
          "එකම ටැගයකට Class එකකින් නිල් පාටද, ID එකකින් රතු පාටද දුනහොත්, ID එකේ ප්‍රමුඛතාවය වැඩි බැවින් රතු පාට ජය ගනී."
        ],
        codeSnippet: {
          language: "css",
          code: `/* Grouping Selector */
h1, h2, p {
  font-family: sans-serif;
}

/* Descendant Selector */
nav a {
  color: #2563eb;
  text-decoration: none;
}`
        }
      }
    ],
    keyPoints: [
      ".class මගින් සමාන ගතිලක්ෂණ ඇති ටැග් සමූහයක් හැඩගන්වයි (Reusable).",
      "#id මගින් එක් විශේෂිත ටැගයක් පමණක් හැඩගන්වයි (Unique).",
      "ID සතු ප්‍රමුඛතාවය Class එකට වඩා වැඩිය.",
      "වෘත්තීය Frontend Developer කෙනෙකු ලෙස හැඩතල සඳහා 95% ක්ම Class භාවිතා කරන්න."
    ],
    exercises: [
      "class=\"main-text\" ඇති සියලුම ඡේදවල අකුරු ප්‍රමාණය 18px කිරීමට අවශ්‍ය CSS ලියන්න.",
      "id=\"footer-section\" ඇති කොටසක පසුබිම් වර්ණය කළු කිරීමට අවශ්‍ය CSS ලියන්න.",
      "Class සහ ID අතර සැබෑ ලෝකයේ වෙනස උදාහරණයකින් දක්වන්න."
    ]
  },
  {
    id: "ch-15",
    chapterNumber: 15,
    title: "වර්ණ සහ පසුබිම් - වෙබ් අඩවිය අලංකාර කිරීම",
    englishTitle: "Colors, Backgrounds & Gradients",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 48,
    learningObjectives: [
      "CSS මගින් වර්ණ ලබා දීමේ විවිධ ක්‍රමවේද (Names, HEX, RGB, RGBA) හඳුනා ගැනීම.",
      "Foreground Color සහ Background Color සැකසීම.",
      "වර්ණවල විනිවිදභාවය (Opacity / Transparency) පාලනය කිරීම.",
      "පසුබිමට පින්තූරයක් එක් කිරීම සහ එහි හැසිරීම පාලනය කිරීම (cover, contain, fixed).",
      "වර්ණ අනුක්‍රමණ (Gradients) භාවිතය.",
      "වර්ණ තෝරා ගැනීමේදී සැලකිලිමත් විය යුතු ප්‍රවේශ්‍යතා නීති (Color Accessibility)."
    ],
    sections: [
      {
        title: "15.1 වර්ණ ලබා දීමේ ක්‍රම 4 සහ Background පාලනය",
        content: [
          "1. Color Names: red, blue, green, tomato, skyblue...",
          "2. HEX Codes (#RRGGBB): #FF0000 (රතු), #00FF00 (කොළ), #0000FF (නිල්), #FFFFFF (සුදු), #000000 (කළු).",
          "3. RGB System: rgb(255, 165, 0) - රතු, කොළ, නිල් ප්‍රමාණ 0 සිට 255 දක්වා.",
          "4. RGBA System: rgba(0, 0, 0, 0.5) - A යනු Alpha (0.0 සිට 1.0 දක්වා විනිවිදභාවය).",
          "පසුබිම් පින්තූර පාලනය (Background Properties):",
          "• background-image: url('hero.jpg');",
          "• background-repeat: no-repeat;",
          "• background-size: cover; (මුළු පසුබිමම වැසෙන සේ විශාල කරයි - වඩාත්ම ජනප්‍රියයි)",
          "• background-position: center;",
          "• background-attachment: fixed; (Parallax Effect සාදයි)"
        ],
        codeSnippet: {
          language: "css",
          code: `.hero {
  background-color: #0f172a; /* Fallback Color */
  background-image: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8)), url('hero.jpg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 80px 20px;
}`
        }
      }
    ],
    keyPoints: [
      "color මගින් අකුරුවල වර්ණයද, background-color මගින් පසුබිමේ වර්ණයද වෙනස් කරයි.",
      "background-size: cover පසුබිම් පින්තූර පෙන්වීමට ඇති හොඳම ක්‍රමයයි.",
      "සුදු පසුබිමක කළු හෝ තද පැහැති අකුරු යොදාගෙන Contrast අගය 4.5:1 ට වඩා ඉහළින් පවත්වා ගන්න."
    ],
    exercises: [
      "සුදු, කළු, රතු, නිල් වර්ණවලට අදාළ HEX Codes ලියන්න.",
      "rgba භාවිතා කර 70% ක් පෙනෙන (0.7 opacity) කොළ පැහැති පසුබිමක් සාදන්න.",
      "Linear Gradient එකක් භාවිතා කර නිල් සිට කොළ දක්වා වර්ණ මාරු වන div එකක් සාදන්න."
    ]
  },
  {
    id: "ch-16",
    chapterNumber: 16,
    title: "අකුරු හැඩගැන්වීම - කියවීමේ පහසුව සහ කලාව",
    englishTitle: "Typography - Readability and Font Styling",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 50,
    learningObjectives: [
      "ටයිපෝග්‍රැෆි (Typography) යනු කුමක්ද සහ එහි වැදගත්කම අවබෝධ කර ගැනීම.",
      "අකුරු පවුල් (Font Families): Serif, Sans-serif, Monospace වෙනස.",
      "අකුරු ප්‍රමාණය සඳහා භාවිතා කරන ඒකක (px, rem, em) තේරුම් ගැනීම.",
      "font-weight, font-style, text-decoration සහ text-transform.",
      "පේළි අතර පරතරය (line-height) සහ අකුරු අතර පරතරය (letter-spacing).",
      "Google Fonts වෙබ් අඩවියට සම්බන්ධ කරන ආකාරය."
    ],
    sections: [
      {
        title: "16.1 අකුරු පවුල් සහ ඒකක (rem vs px)",
        content: [
          "වෙබ් අඩවියක තොරතුරු වලින් 90% කට වඩා අඩංගු වන්නේ අකුරු ලෙසය. එබැවින් Typography කියවීමේ පහසුව තීරණය කරයි.",
          "1. Serif: අකුරුවල කෙළවර කුඩා ඉරි සහිත සම්ප්‍රදායික අකුරු (Times New Roman). මුද්‍රිත පොත් සඳහා යොදාගනී.",
          "2. Sans-serif: අකුරුවල කෙළවර අමතර ඉරි නැති පිරිසිදු නූතන අකුරු (Arial, Inter, Roboto). වෙබ් අඩවි සඳහා වඩාත් සුදුසුය.",
          "3. Monospace: සෑම අකුරකටම සමාන පළලක් ඇති අකුරු (Courier, JetBrains Mono). කේත පෙන්වීමට යොදාගනී.",
          "ප්‍රමාණ ඒකක:",
          "• px (Pixels): ස්ථාවර ඒකකයකි.",
          "• rem (Root em): වඩාත්ම නිර්දේශිත ඒකකයයි. බ්‍රවුසරයේ මූලික අකුරු ප්‍රමාණයට (සාමාන්‍යයෙන් 16px) සාපේක්ෂව ගණනය වේ (1rem = 16px, 1.5rem = 24px). පරිශීලකයා බ්‍රවුසර settings වෙනස් කළ විට rem අගයන්ද ස්වයංක්‍රීයව වෙනස් වේ."
        ],
        codeSnippet: {
          language: "css",
          code: `body {
  font-family: 'Plus Jakarta Sans', Arial, sans-serif;
  font-size: 1rem; /* 16px */
  line-height: 1.7; /* කියවීමේ පහසුව සඳහා */
  color: #1e293b;
}

h1 {
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  line-height: 1.25;
}`
        }
      }
    ],
    keyPoints: [
      "Sans-serif අකුරු වෙබ් අඩවි වල කියවීමේ පහසුව සඳහා වඩාත් සුදුසුය.",
      "rem ඒකකය ප්‍රවේශ්‍යතාව (Accessibility) සඳහා ඉතා වැදගත් වේ.",
      "line-height අගය 1.5 - 1.7 අතර තැබීම කියවීමේ පහසුව වැඩි කරයි.",
      "එක් වෙබ් අඩවියකට අකුරු වර්ග (Fonts) 2කට වඩා භාවිතා නොකරන්න."
    ],
    exercises: [
      "Serif සහ Sans-serif අකුරු අතර ඇති වෙනස පැහැදිලි කරන්න.",
      "ලින්ක් එකක (<a>) යටින් ඇති ඉර ඉවත් කිරීමට සහ hover කළ විට පමණක් ඉරක් ඒමට අවශ්‍ය CSS ලියන්න.",
      "Google Fonts වෙතින් අකුරු වර්ගයක් වෙබ් අඩවියට සම්බන්ධ කරන ආකාරය පියවරෙන් පියවර ලියන්න."
    ]
  },
  {
    id: "ch-17",
    chapterNumber: 17,
    title: "සී.එස්.එස්. පෙට්ටි ආකෘතිය - වෙබ් අඩවියක පදනම",
    englishTitle: "The CSS Box Model",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 53,
    learningObjectives: [
      "'සෑම HTML මූලිකාංගයක්ම පෙට්ටියකි' යන සංකල්පය තේරුම් ගැනීම.",
      "පෙට්ටි ආකෘතියේ ප්‍රධාන කොටස් හතර: Content, Padding, Border, Margin.",
      "සම්පූර්ණ පළල සහ උස (Total Width/Height) ගණනය කරන ආකාරය.",
      "box-sizing: border-box මගින් පිරිසැලසුම් ගැටලු විසඳන ආකාරය.",
      "margin: auto භාවිතයෙන් මූලිකාංග මැදට (Center) ගැනීම."
    ],
    sections: [
      {
        title: "17.1 පෙට්ටි ආකෘතියේ ස්ථර 4 (The 4 Layers)",
        content: [
          "බ්‍රවුසරයක් ඕනෑම HTML ටැගයක් දකින්නේ සෘජුකෝණාස්‍රාකාර පෙට්ටියක් ලෙසය.",
          "1. Content (අන්තර්ගතය): පෙට්ටිය තුළ ඇති දත්ත (අකුරු හෝ පින්තූර).",
          "2. Padding (අභ්‍යන්තර පරතරය): අන්තර්ගතය සහ බෝඩරය අතර ඉඩ (බුබුළු දවටන Bubble wrap වැනිය).",
          "3. Border (මායිම): පෙට්ටියේ වටේ ඇති මායිම් ඉර.",
          "4. Margin (බාහිර පරතරය): පෙට්ටියෙන් පිටත අනෙක් පෙට්ටි සමඟ ගැටීම වළක්වන හිස් ඉඩ.",
          "වෘත්තීය විසඳුම: box-sizing: border-box;",
          "සාමාන්‍යයෙන් width: 300px දුන් විට padding සහ border එකතු වී සම්පූර්ණ පළල 360px දක්වා වැඩි වේ. නමුත් box-sizing: border-box ලබා දුන් විට padding සහ border සියල්ල 300px තුළටම අඩංගු වේ!"
        ],
        asciiDiagram: `+-------------------------------------------------+
| Margin (බාහිර ඉඩ - විනිවිද පෙනේ)                |
|  +-------------------------------------------+  |
|  | Border (මායිම)                            |  |
|  |  +-------------------------------------+  |  |
|  |  | Padding (අභ්‍යන්තර ඉඩ - පාට පෙනේ)    |  |  |
|  |  |  +-------------------------------+  |  |  |
|  |  |  | Content (අන්තර්ගතය - දත්ත)   |  |  |  |
|  |  |  +-------------------------------+  |  |  |
|  |  +-------------------------------------+  |  |
|  +-------------------------------------------+  |
+-------------------------------------------------+`
      }
    ],
    keyPoints: [
      "Content -> Padding -> Border -> Margin යනු පෙට්ටි ආකෘතියේ පිළිවෙළයි.",
      "Padding පෙට්ටිය ඇතුළතය; Margin පෙට්ටියෙන් පිටතය.",
      "* { box-sizing: border-box; } නූතන වෙබ් සංවර්ධනයේ රන් නීතියයි.",
      "margin: auto මගින් පෙට්ටිය තිරයේ තිරස් අතට මැදට (Center) ගනී."
    ],
    exercises: [
      "width: 250px, padding: 15px, border: 2px, margin: 10px ඇති පෙට්ටියක සම්පූර්ණ පළල ගණනය කරන්න (box-sizing නැතිව).",
      "Padding සහ Margin අතර ඇති ප්‍රධාන තාක්ෂණික වෙනස කුමක්ද?",
      "හතර පැත්තටම 20px padding එකක් shorthand ක්‍රමයෙන් ලියන්න."
    ]
  },
  {
    id: "ch-18",
    chapterNumber: 18,
    title: "පිරිසැලසුම් මූලධර්ම - ඩිස්ප්ලේ ගුණාංගය",
    englishTitle: "Layout Fundamentals - Display Property",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 56,
    learningObjectives: [
      "display ගුණාංගය යනු කුමක්ද සහ එය Layout එකකට බලපාන ආකාරය.",
      "බ්ලොක් මට්ටමේ මූලිකාංග (Block-level Elements).",
      "ඉන්ලයින් මූලිකාංග (Inline Elements).",
      "ඉන්ලයින්-බ්ලොක් (Inline-block) මූලිකාංග.",
      "display: none මගින් මූලිකාංගයක් තාවකාලිකව ඉවත් කරන ආකාරය."
    ],
    sections: [
      {
        title: "18.1 Block vs Inline vs Inline-block",
        content: [
          "• Block Elements (<div>, <h1>, <p>, <section>): සෑමවිටම අලුත් පේළියකින් ආරම්භ වේ. තිරයේ සම්පූර්ණ පළල (100%) ලබා ගනී. width, height, padding, margin සියල්ල නිවැරදිව ලබා දිය හැක.",
          "• Inline Elements (<span>, <a>, <strong>): අලුත් පේළියකින් පටන් නොගනී. අන්තර්ගතයට අවශ්‍ය ඉඩ පමණක් ගනී. width හෝ height ලබා දිය නොහැක (බ්‍රවුසරය නොසලකා හරියි).",
          "• Inline-block: එකම පේළියේ රැඳී සිටින අතරම width සහ height ලබා දිය හැකි මුහුම් (Hybrid) ක්‍රමයයි.",
          "• display: none: මූලිකාංගය සම්පූර්ණයෙන්ම වෙබ් පිටුවෙන් ඉවත් කරයි (වෙන්ව තිබූ ඉඩද නැති වේ).",
          "• visibility: hidden: මූලිකාංගය නොපෙනී ගියද එම ඉඩ හිස්ව පවතී (හොල්මනක් මෙන්)."
        ]
      }
    ],
    keyPoints: [
      "display ගුණාංගය මූලිකාංගවල දෘශ්‍ය හැසිරීම තීරණය කරයි.",
      "<span> ටැගයකට width ලබා දීමට නම් එය inline-block කළ යුතුය.",
      "Block මූලිකාංගයක් ඇතුළත Inline තිබිය හැකි නමුත් Inline ඇතුළත Block නොලිවිය යුතුය."
    ],
    exercises: [
      "Block සහ Inline මූලිකාංග අතර ඇති ප්‍රධාන වෙනස්කම් 3ක් ලියන්න.",
      "පහත HTML ටැග් Block ද Inline ද කියා වෙන් කරන්න: <h1>, <a>, <div>, <span>, <p>, <img>."
    ]
  },
  {
    id: "ch-19",
    chapterNumber: 19,
    title: "පිහිටීම පාලනය කිරීම - CSS Position",
    englishTitle: "Controlling Position & Layering (z-index)",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 59,
    learningObjectives: [
      "සාමාන්‍ය ලේඛන ප්‍රවාහය (Normal Document Flow) තේරුම් ගැනීම.",
      "ප්‍රධාන පිහිටීම් අගයන් 5: Static, Relative, Absolute, Fixed, Sticky.",
      "දිශා පාලක: top, right, bottom, left.",
      "z-index මගින් ස්ථර (Layers) පාලනය කිරීම.",
      "Fixed Navbars, Sticky Headers, සහ Badges නිර්මාණය කිරීම."
    ],
    sections: [
      {
        title: "19.1 Position අගයන් 5 සහ z-index",
        content: [
          "1. static (සම්මතය): ලේඛන ප්‍රවාහය අනුව පිහිටයි. top/left ක්‍රියා නොකරයි.",
          "2. relative: තිබිය යුතු තැනට සාපේක්ෂව සුළු වශයෙන් වෙනස් වේ. පෙර තිබූ ඉඩ රඳවා ගනී.",
          "3. absolute: සාමාන්‍ය ලේඛන ප්‍රවාහයෙන් සම්පූර්ණයෙන්ම ඉවත් වේ (Drone එකක් මෙන්). position: relative ඇති ළඟම දෙමාපිය ටැගයට සාපේක්ෂව පිහිටයි.",
          "4. fixed: පිටුව scroll කළද තිරයට (Viewport) සාපේක්ෂව එකම තැන සිරවී පවතී (Chat buttons, Back to Top).",
          "5. sticky: යම් සීමාවකට යන තෙක් scroll වී, එම සීමාවට පැමිණි පසු ඇලී පවතී (Sticky Table Header, Navbars).",
          "z-index: ස්ථරවල ඉදිරි-පසු පිළිවෙළ තීරණය කරයි. position අගයක් ලබා දී ඇති ටැග් සඳහා පමණක් ක්‍රියා කරයි."
        ],
        codeSnippet: {
          language: "css",
          code: `/* Relative Parent */
.product-card {
  position: relative;
  width: 300px;
}

/* Absolute Child Badge */
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ef4444;
  color: white;
  padding: 4px 8px;
  z-index: 10;
}`
        }
      }
    ],
    keyPoints: [
      "The Relative Parent Rule: යමක් absolute කරන විට 99% කදීම එහි දෙමාපිය ටැගයට position: relative තිබිය යුතුය.",
      "Sticky Header සඳහා position: sticky; top: 0; භාවිතා වේ.",
      "z-index ක්‍රියා කරන්නේ position අගයක් ඇති ටැග් සඳහා පමණි."
    ],
    exercises: [
      "Relative සහ Absolute අතර ඇති ප්‍රධාන වෙනස පැහැදිලි කරන්න.",
      "පිටුව scroll කරන විටත් පෙනෙන Chat with Us බොත්තමක් සෑදීමට සුදුසුම Position අගය කුමක්ද?"
    ]
  },
  {
    id: "ch-20",
    chapterNumber: 20,
    title: "ෆ්ලෙක්ස්බොක්ස් - නම්‍යශීලී පිරිසැලසුම්",
    englishTitle: "CSS Flexbox - 1D Layout System",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 62,
    learningObjectives: [
      "Flexbox යනු කුමක්ද සහ එය නිර්මාණය වීමට හේතුව.",
      "Flex Container (දෙමාපියා) සහ Flex Items (දරුවෝ).",
      "ප්‍රධාන අක්ෂය (Main Axis) සහ හරස් අක්ෂය (Cross Axis).",
      "Parent Properties: flex-direction, justify-content, align-items, flex-wrap.",
      "මූලිකාංගයක් තිරයේ හරියටම මැදට (Center) ගන්නා ආකාරය."
    ],
    sections: [
      {
        title: "20.1 Flexbox මූලධර්ම සහ මැදට ගැනීම",
        content: [
          "Flexbox යනු වෙබ් පිටුවක ඇති මූලිකාංග එක දිශාවකට (පේළියක් හෝ තීරුවක් ලෙස) ඉතාමත් පහසුවෙන් නම්‍යශීලීව පෙළගැස්වීමට භාවිතා කරන 1D CSS ක්‍රමයකි.",
          "Main Axis: ප්‍රධාන අක්ෂය (සාමාන්‍යයෙන් වමේ සිට දකුණට - Row).",
          "Cross Axis: හරස් අක්ෂය (ඉහළ සිට පහළට - Column).",
          "ප්‍රධාන Container Properties:",
          "• display: flex;",
          "• flex-direction: row | column | row-reverse | column-reverse;",
          "• justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;",
          "• align-items: stretch | center | flex-start | flex-end;",
          "• flex-wrap: wrap | nowrap;"
        ],
        codeSnippet: {
          language: "css",
          code: `/* ඕනෑම දෙයක් හරියටම මැදට ගැනීමේ ක්‍රමය */
.center-box {
  display: flex;
  justify-content: center; /* තිරස් අතට මැදට */
  align-items: center;     /* සිරස් අතට මැදට */
  height: 300px;
}`
        }
      }
    ],
    keyPoints: [
      "Flexbox ක්‍රියාත්මක වීමට නම් display: flex තිබිය යුතුය.",
      "justify-content මගින් ප්‍රධාන අක්ෂයද, align-items මගින් හරස් අක්ෂයද පාලනය කරයි.",
      "Navigation Bar සෑදීමට justify-content: space-between ඉතාමත් ප්‍රයෝජනවත්ය."
    ],
    exercises: [
      "Flex Container සහ Flex Items අතර වෙනස ඔබේ වචනයෙන් පැහැදිලි කරන්න.",
      "justify-content සහ align-items අතර වෙනස කුමක්ද?"
    ]
  },
  {
    id: "ch-21",
    chapterNumber: 21,
    title: "ෆ්ලෙක්ස්බොක්ස් අයිතම පාලනය",
    englishTitle: "Flexbox Items - Deep Dive",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 64,
    learningObjectives: [
      "Flex Items සඳහාම භාවිතා වන විශේෂිත ගුණාංග: flex-grow, flex-shrink, flex-basis.",
      "flex shorthand: flex: [grow] [shrink] [basis].",
      "align-self මගින් තනි අයිතමයක පිහිටීම වෙනස් කිරීම.",
      "order ගුණාංගය මගින් HTML කේතය වෙනස් නොකර අයිතමවල අනුපිළිවෙළ මාරු කිරීම."
    ],
    sections: [
      {
        title: "21.1 Flex Grow, Shrink සහ Basis",
        content: [
          "• flex-grow: ඉතිරි ඉඩ බෙදා ගැනීමේ අනුපාතය (0 = විශාල නොවේ, 1 = ඉතිරි ඉඩ ලබා ගනී).",
          "• flex-shrink: ඉඩ මදි වූ විට හැකිලෙන ප්‍රමාණය (0 = කිසිසේත්ම හැකිලෙන්නේ නැත).",
          "• flex-basis: මූලික ප්‍රමාණය (width හෝ height වැනිය).",
          "• Shorthand: flex: 1 0 200px; (grow: 1, shrink: 0, basis: 200px).",
          "• align-self: තනි අයිතමයක් පමණක් flex-end හෝ center කිරීමට.",
          "• order: අයිතම දිස්වන අනුපිළිවෙළ මාරු කරයි (Mobile වලදී විශේෂයෙන් ප්‍රයෝජනවත් වේ)."
        ]
      }
    ],
    keyPoints: [
      "Logo එකක් හෝ පින්තූරයක් හැකිලීම වැළැක්වීමට flex-shrink: 0 ලබා දෙන්න.",
      "order භාවිතා කළද Screen Readers කියවන්නේ HTML පිළිවෙළටම බව මතක තබා ගන්න."
    ],
    exercises: [
      "flex: 0 1 auto යන්නෙහි තේරුම කොටස් වශයෙන් පැහැදිලි කරන්න.",
      "HTML කේතයේ මුලින්ම ඇති div එකක් අන්තිමට පෙන්වීමට කළ යුත්තේ කුමක්ද?"
    ]
  },
  {
    id: "ch-22",
    chapterNumber: 22,
    title: "සී.එස්.එස්. ග්‍රිඩ් - ද්විමාන පිරිසැලසුම්",
    englishTitle: "CSS Grid Layout - 2D Layouts",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 67,
    learningObjectives: [
      "CSS Grid යනු කුමක්ද සහ එය Flexbox වලින් වෙනස් වන්නේ කෙසේද?",
      "Grid Lines, Tracks, Cells සහ Grid Areas.",
      "fr (Fractional Unit) නවීන ඒකකය.",
      "repeat() සහ minmax() ශ්‍රිත භාවිතය.",
      "gap මගින් පරතරය තැබීම.",
      "Grid Areas මගින් මුළු වෙබ් පිටුවක සැකිල්ලක් සෑදීම."
    ],
    sections: [
      {
        title: "22.1 Grid vs Flexbox සහ Grid Areas",
        content: [
          "Flexbox යනු 1D (පේළියක් හෝ තීරුවක්) වන අතර CSS Grid යනු 2D (පේළි සහ තීරු දෙකම එකවර පාලනය කරන) පද්ධතියකි. මුළු පිටුවේ ප්‍රධාන Layout එක සෑදීමට Grid ද, ඒ තුළ ඇති කුඩා කොටස් සඳහා Flexbox ද යොදාගනී.",
          "fr (Fractional Unit): පවතින ඉඩ කොටස් වලට බෙදා දෙන ඒකකයයි (1fr 1fr 1fr = සමාන තීරු 3ක්).",
          "repeat(3, 1fr): 1fr තීරු 3ක් කෙටියෙන් සෑදීම.",
          "minmax(150px, 1fr): අවම 150px ද උපරිම 1fr ද ලබා දෙයි.",
          "grid-template-areas: රූපසටහනක් අඳින්නාක් මෙන් වෙබ් පිටුවේ කොටස් නම් කර සැලසුම් සෑදිය හැක."
        ],
        codeSnippet: {
          language: "css",
          code: `.layout-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 240px 1fr 1fr;
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`
        }
      }
    ],
    keyPoints: [
      "CSS Grid යනු 2D (පේළි සහ තීරු) පිරිසැලසුම් පද්ධතියකි.",
      "fr ඒකකය responsive layouts සඳහා ඉතා සුදුසුය.",
      "grid-template-areas මගින් ඉතා පහසුවෙන් සම්පූර්ණ පිටු සැකිල්ලක් නිර්මාණය කළ හැක."
    ],
    exercises: [
      "Flexbox සහ CSS Grid අතර ඇති ප්‍රධාන වෙනස්කම් 3ක් ලියන්න.",
      "සමාන ප්‍රමාණයේ තීරු 4ක් සෑදීමට අවශ්‍ය CSS ලියන්න."
    ]
  },
  {
    id: "ch-23",
    chapterNumber: 23,
    title: "ප්‍රතිචාරාත්මක වෙබ් නිර්මාණය",
    englishTitle: "Responsive Web Design (RWD)",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 72,
    learningObjectives: [
      "ප්‍රතිචාරාත්මක වෙබ් නිර්මාණය (Responsive Web Design - RWD) යනු කුමක්ද?",
      "Viewport Meta Tag එකෙහි වැදගත්කම.",
      "Media Queries (@media) භාවිතා කර විවිධ තිර ප්‍රමාණයන් සඳහා CSS ලියන ආකාරය.",
      "Breakpoints (බිඳීමේ ලක්ෂ්‍යයන්) හඳුනා ගැනීම.",
      "Mobile-First ප්‍රවේශය (Mobile-First Approach).",
      "නම්‍යශීලී ඒකක (%, vw, vh, rem) සහ පින්තූර."
    ],
    sections: [
      {
        title: "23.1 Viewport, Media Queries සහ Mobile-First",
        content: [
          "RWD යනු ඕනෑම උපකරණයක තිරයේ ප්‍රමාණයට (Smartphones, Tablets, Laptops, 4K TVs) ස්වයංක්‍රීයව හැඩගැසෙන සේ වෙබ් අඩවි නිර්මාණය කිරීමේ කලාවයි. බෲස් ලී පැවසූ පරිදි 'ජලය බෝතලයකට දැමූ විට බෝතලයේ හැඩය ගනී... ජලය මෙන් වන්න'.",
          "HTML හි අනිවාර්ය Viewport Tag:",
          "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
          "Media Queries:",
          "@media screen and (max-width: 768px) { ... }",
          "Mobile-First ප්‍රවේශය: මුලින්ම සාමාන්‍ය CSS ලෙස ජංගම දුරකථනයට ගැලපෙන කේත ලියා, පසුව min-width යොදා විශාල තිර සඳහා වෙනස්කම් සිදු කිරීම.",
          "Responsive Images: img { max-width: 100%; height: auto; }"
        ],
        codeSnippet: {
          language: "css",
          code: `/* 1. Mobile Default (තීරුවක් ලෙස) */
.card-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 2. Tablet & Desktop (පේළියක් ලෙස) */
@media screen and (min-width: 768px) {
  .card-grid {
    flex-direction: row;
  }
}`
        }
      }
    ],
    keyPoints: [
      "Viewport Meta Tag එක නොමැතිව Responsive නිර්මාණ කළ නොහැක.",
      "ස්ථාවර පළල (Fixed Width, උදා: width: 1000px) වෙනුවට max-width: 100% භාවිතා කරන්න.",
      "Mobile-First යනු වෘත්තීය වෙබ් සංවර්ධකයන් අනුගමනය කරන ප්‍රමිතියයි."
    ],
    exercises: [
      "Viewport Meta Tag එක මගින් සිදුකරන ප්‍රධාන කාර්යයන් දෙක කුමක්ද?",
      "තිරයක පළල 1024px සහ 726px අතර පවතින විට පමණක් ක්‍රියාත්මක වන Media Query එකක් ලියන්න."
    ]
  },
  {
    id: "ch-24",
    chapterNumber: 24,
    title: "සී.එස්.එස්. විචල්‍යයන් සහ හොඳම පුරුදු",
    englishTitle: "CSS Variables, BEM & Best Practices",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 75,
    learningObjectives: [
      "CSS විචල්‍යයන් (CSS Variables / Custom Properties) යනු කුමක්ද?",
      ":root සලකුණ භාවිතයෙන් ගෝලීය විචල්‍යයන් (Global Variables) සෑදීම.",
      "var() මගින් විචල්‍යයන් භාවිතය.",
      "BEM නාමකරණ ක්‍රමය (Block Element Modifier).",
      "DRY සංකල්පය (Don't Repeat Yourself).",
      "CSS Variables මගින් Dark Mode සෑදීම."
    ],
    sections: [
      {
        title: "24.1 CSS Variables සහ BEM නාමකරණය",
        content: [
          ":root තුළ විචල්‍යයන් සෑදීම: විචල්‍ය නාමයක් සැමවිටම ඉරි කෑලි දෙකකින් (--) ආරම්භ වේ.",
          ":root { --primary-color: #2563eb; --bg-color: #ffffff; }",
          "භාවිතය: color: var(--primary-color);",
          "Dark Mode පහසුව: @media (prefers-color-scheme: dark) හෝ .dark පන්තිය මගින් :root හි විචල්‍යයන්ගේ අගයන් පමණක් මාරු කිරීමෙන් මුළු වෙබ් අඩවියම Dark Mode බවට පත් කළ හැක!",
          "BEM (Block Element Modifier):",
          "• Block: ස්වාධීන කොටස (card)",
          "• Element: බ්ලොක් එක ඇතුළත ඇති කුඩා කොටස - යට ඉරි දෙකකින් (card__title)",
          "• Modifier: එම කොටසේ වෙනස් අවස්ථාවක් - මැද ඉරි දෙකකින් (card--dark)"
        ],
        codeSnippet: {
          language: "css",
          code: `:root {
  --clr-primary: #2563eb;
  --clr-bg: #f8fafc;
  --clr-text: #0f172a;
}

[data-theme="dark"] {
  --clr-bg: #0f172a;
  --clr-text: #f8fafc;
}

body {
  background-color: var(--clr-bg);
  color: var(--clr-text);
  transition: background-color 0.3s ease;
}`
        }
      }
    ],
    keyPoints: [
      "CSS Variables මගින් කේතය නඩත්තු කිරීම ඉතා පහසු කරයි.",
      "BEM ක්‍රමය මගින් CSS නීති එකිනෙක ගැටීම වළක්වයි.",
      "DRY මූලධර්මය: එකම CSS කේතය නැවත නැවත ලිවීමෙන් වළකින්න."
    ],
    exercises: [
      "CSS විචල්‍යයන් භාවිතා කිරීමේ ප්‍රධාන වාසි 2ක් ලියන්න.",
      "BEM ක්‍රමය භාවිතා කරමින් පුවත්පත් ලිපියක් (article) සඳහා Class නම් සකසන්න."
    ]
  },
  {
    id: "ch-25",
    chapterNumber: 25,
    title: "වෘත්තීය පෝර්ට්ෆෝලියෝ ව්‍යාපෘතිය",
    englishTitle: "The Professional Portfolio Project",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 77,
    learningObjectives: [
      "මෙතෙක් උගත් සියලුම CSS සංකල්ප (Flexbox, Grid, Positioning, Responsive, Animations, Variables) එක් කර පූර්ණ ව්‍යාපෘතියක් නිර්මාණය කිරීම.",
      "වෙබ් අඩවියක් නිර්මාණය කිරීමට පෙර සැලසුම් කරන ආකාරය.",
      "වෘත්තීය මට්ටමේ CSS ගොනුවක් සංවිධානය කිරීම.",
      "ප්‍රතිචාරාත්මක සහ අලංකාර Portfolio එකක් නිර්මාණය කිරීම."
    ],
    sections: [
      {
        title: "25.1 ව්‍යාපෘති සැකැස්ම: Navigation, Hero, Skills, Projects",
        content: [
          "පෝර්ට්ෆෝලියෝ වෙබ් අඩවියේ ප්‍රධාන කොටස් 5:",
          "1. Navigation Bar: Sticky මෙනුව, Flexbox භාවිතයෙන්.",
          "2. Hero Section: හඳුන්වාදීම, @keyframes fade-in animation එකක් සහිතව.",
          "3. Skills Section: Grid repeat(auto-fit, minmax(150px, 1fr)) භාවිතයෙන් කාඩ්පත්.",
          "4. Projects Section: Responsive Grid කාඩ්පත්.",
          "5. Footer: සම්බන්ධතා තොරතුරු සහ හිමිකම්."
        ],
        codeSnippet: {
          language: "css",
          code: `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
}`
        }
      }
    ],
    keyPoints: [
      "Over-animating නොකරන්න: ඕනෑවට වඩා animations භාවිතය වෙබ් අඩවිය සෙල්ලම් බඩුවක් මෙන් පෙනෙන්නට හේතු වේ.",
      "Horizontal scroll ඇතිවීම වැළැක්වීමට max-width: 100% භාවිතා කරන්න."
    ],
    exercises: [
      "පෝර්ට්ෆෝලියෝ වෙබ් අඩවිය Dark Mode කිරීමට අවශ්‍ය CSS විචල්‍යයන් ලියන්න.",
      "Skill card එකක් මත මවුසය ගෙන ගිය විට translateY(-10px) වන transition එකක් ලියන්න."
    ]
  },
  {
    id: "ch-26",
    chapterNumber: 26,
    title: "CSS ගෘහ නිර්මාණ ශිල්පය, පද්ධති සහ තාක්ෂණික රහස් (විශේෂ ප්‍රෝ-මට්ටම)",
    englishTitle: "Advanced CSS Architecture, Design Systems & Engineering",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 80,
    learningObjectives: [
      "CSS Architecture: විශාල මෘදුකාංග සඳහා BEM & ITCSS ක්‍රමවේද.",
      "Design Tokens: වර්ණ සහ පරතරයන් නිර්මාණ පද්ධතියක් (Design System) ලෙස කළමනාකරණය.",
      "Modern CSS Math: clamp(), calc(), aspect-ratio භාවිතය.",
      "Browser Rendering Internal: Reflow සහ Repaint අවබෝධය.",
      "Pseudo-elements ::before සහ ::after ප්‍රවීණත්වය.",
      "CSS Logical Properties (margin-inline-start)."
    ],
    sections: [
      {
        title: "26.1 Modern CSS Math සහ Reflow/Repaint",
        content: [
          "clamp(min, preferred, max): font-size: clamp(1.5rem, 4vw + 1rem, 3.5rem); - Media Queries සිය ගණනක් ලිවීමෙන් තොරව ජංගම දුරකථනයට සහ ඩෙස්ක්ටොප් එකට ගැලපෙන අකුරු ප්‍රමාණයන් ස්වයංක්‍රීයව සකසයි.",
          "aspect-ratio: 16 / 9; - පින්තූර සහ වීඩියෝ පෙට්ටි නිවැරදි අනුපාතයේ තබා ගැනීමට.",
          "Reflow vs Repaint: width හෝ position වෙනස් කළ විට බ්‍රවුසරය මුළු පිටුවේම පෙට්ටිවල පිහිටීම නැවත ගණනය කරයි (Reflow - CPU වැය වේ). Color පමණක් වෙනස් වූ විට පික්සල් මත පාට තවරයි (Repaint - වේගවත්ය). Animations සඳහා සැමවිටම transform සහ opacity භාවිතා කරන්න."
        ]
      }
    ],
    keyPoints: [
      "clamp() මගින් අකුරු සහ පරතරයන් සුමටව පරිමාණය කරයි.",
      "Animations සඳහා transform සහ opacity භාවිතය බ්‍රවුසර Layout එකට බලපෑමක් නොකරන බැවින් වේගවත්ය.",
      "!important අනවශ්‍ය ලෙස භාවිත නොකර Specificity පාලනය කරන්න."
    ],
    exercises: [
      "clamp() භාවිතයෙන් තිරයේ පළල අනුව වෙනස් වන Card Grid එකක් සාදන්න.",
      "::after භාවිතයෙන් බොත්තමකට hover effect එකක් ලබා දෙන්න."
    ]
  },
  {
    id: "ch-27",
    chapterNumber: 27,
    title: "දෘශ්‍ය ප්‍රයෝග, උසස් තේරීම්කාරක සහ රූප පාලනය",
    englishTitle: "Visual Effects, Advanced Selectors, and Image Mastery",
    volumeId: 2,
    volumeTitle: "CSS සහ වෙබ් අඩවි අලංකරණය",
    pageNumber: 83,
    learningObjectives: [
      "Shadows: box-shadow සහ text-shadow මගින් 3D ගැඹුරක් ලබා දීම.",
      "CSS Filters: blur, grayscale, brightness ප්‍රයෝග.",
      "Backdrop-filter: වීදුරු පෙනුම (Glassmorphism) නිර්මාණය කිරීම.",
      "Object-fit සහ Object-position: පින්තූර ඇද නොවී (Stretching) ප්‍රදර්ශනය කිරීම.",
      "Advanced Selectors: Attribute selectors සහ :not() pseudo-class.",
      "Modern CSS Reset බොයිලර්ප්ලේට්."
    ],
    sections: [
      {
        title: "27.1 Glassmorphism, Object-fit සහ CSS Reset",
        content: [
          "Box Shadow: box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);",
          "Glassmorphism (වීදුරු පෙනුම): background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.2);",
          "Object-fit: cover; - පින්තූරය ඇද නොවී (distortion නැතිව) නියමිත කොටුව සම්පූර්ණයෙන්ම වසා ගනී.",
          "Advanced Selectors: input[type=\"text\"], a[href$=\".pdf\"], p:not(.special).",
          "Modern CSS Reset: *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; } img { display: block; max-width: 100%; }"
        ],
        codeSnippet: {
          language: "css",
          code: `/* Glassmorphism Card */
.glass-panel {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

/* Image Object-fit */
.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}`
        }
      }
    ],
    keyPoints: [
      "box-shadow මගින් වෙබ් අඩවියට ගැඹුරක් (depth) ලබා දෙයි.",
      "backdrop-filter: blur() මගින් නවීන Glassmorphism පෙනුම නිර්මාණය කරයි.",
      "object-fit: cover පින්තූර ඇද වීම වළක්වයි."
    ],
    exercises: [
      "වීදුරු පෙනුම (Glassmorphism) සහිත Navbar එකක් සාදන්න.",
      "පින්තූරයක් මත මවුසය ගෙන ගිය විට grayscale(100%) සිට grayscale(0%) වන filter එකක් ලියන්න."
    ]
  }
];
