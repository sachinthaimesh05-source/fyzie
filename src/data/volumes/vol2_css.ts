import { Volume } from '../../types';

export const volume2: Volume = {
  id: 2,
  volumeNumber: 2,
  title: "CSS සහ වෙබ් අඩවි අලංකරණය",
  englishTitle: "CSS & Responsive Web Design",
  color: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
  iconName: "Palette",
  badge: "CSS3 & Modern Layouts",
  description: "CSS Selectors, Specificity, Box Model, Flexbox, CSS Grid, Responsive Design, CSS Variables (Design Tokens), Glassmorphism සහ Professional Portfolio ව්‍යාපෘතිය.",
  chapterCount: 15,
  pageRange: "පිටු 43 - 87",
  chapters: [
    {
      id: 13,
      volumeId: 2,
      chapterNumber: 13,
      title: "CSS හැඳින්වීම - වෙබ් අඩවියකට පණ පොවමු",
      englishTitle: "Introduction to CSS",
      pageRange: "පිටු 43 - 45",
      description: "Cascading Style Sheets යනු කුමක්ද, Selector / Property / Value syntax, සහ Inline, Internal, External ක්‍රම 3.",
      learningObjectives: [
        "CSS (Cascading Style Sheets) යනු කුමක්දැයි අවබෝධ කර ගැනීම",
        "CSS ලියන මූලික රටාව (Selector { Property: Value; }) තේරුම් ගැනීම",
        "CSS එකතු කරන ක්‍රම 3 (Inline, Internal, External) සහ External ක්‍රමයේ වාසි",
        "වෙබ් පිටුවක වර්ණ සහ හැඩතල ප්‍රථම වරට වෙනස් කිරීම"
      ],
      sections: [
        {
          title: "13.1 CSS යනු කුමක්ද සහ ඇයි අපට අවශ්‍ය වන්නේ?",
          content: [
            "HTML මඟින් වෙබ් අඩවියක සැකිල්ල (Structure) සාදන අතර, CSS මඟින් එම සැකිල්ල අලංකාර කිරීම සිදු කරයි.",
            "සරල පැහැදිලි කිරීම: HTML යනු නිවසක ගඩොල් සැකිල්ලයි. CSS යනු එම නිවසේ බිත්තිවල ගාන සායම්, දොර ජනෙල්වල හැඩය, සහ ගෘහ භාණ්ඩ තබන ස්ථාන තීරණය කරන අභ්‍යන්තර සැලසුම් ශිල්පියා වැනිය.",
            "• Cascading: නීති දෙකක් තිබුණහොත් වඩාත්ම නිවැරදි හෝ අවසානයට ඇති නීතිය ක්‍රියාත්මක වීම.",
            "• Style: අකුරු වල පාට, ප්‍රමාණය, පින්තූර වල හැඩය.",
            "• Sheets: මෙම නීති රීති ලියා තබන ගොනු."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "External Style (style.css)",
              code: `h1 {
  color: #1e40af;
  text-align: center;
  text-decoration: underline;
}

p {
  color: #475569;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "External CSS (<link rel='stylesheet' href='style.css'>) වඩාත්ම වෘත්තීය ක්‍රමයයි.",
        "සෑම CSS නීතියක් අවසානයේදීම අනිවාර්යයෙන්ම සෙමිකෝලනයක් (;) තිබිය යුතුය."
      ],
      exercises: [
        { id: 1, question: "External CSS භාවිතයේ ප්‍රධාන වාසි 2ක් ලියන්න." },
        { id: 2, question: "CSS නීතියක ඇති ප්‍රධාන කොටස් 3 නම් කරන්න." }
      ]
    },
    {
      id: 14,
      volumeId: 2,
      chapterNumber: 14,
      title: "සී.එස්.එස්. තේරීම්කාරක - නිවැරදි ඉලක්කය තෝරා ගැනීම",
      englishTitle: "CSS Selectors & Specificity",
      pageRange: "පිටු 45 - 47",
      description: "Universal (*), Element, Class (.), ID (#), Grouping (,), Descendant selectors, සහ Specificity ධූරාවලිය.",
      learningObjectives: [
        "CSS Selectors යනු බ්‍රවුසරයට ලබා දෙන ලිපිනයක් බව තේරුම් ගැනීම",
        "Class සහ ID අතර ඇති තාක්ෂණික සහ ප්‍රායෝගික වෙනස්කම්",
        "Specificity (ප්‍රමුඛතාවය): * < Element < Class < ID",
        "Grouping සහ Descendant selectors මඟින් පිරිසිදු කේත ලිවීම"
      ],
      sections: [
        {
          title: "14.1 Class vs ID සහ Specificity",
          content: [
            "• Class (.): එකම ගතිලක්ෂණ ඇති ටැග් සමූහයක් හැඩගැන්වීමට (Reusable). පිටුවක ඕනෑම වාර ගණනක් භාවිතා කළ හැක.",
            "• ID (#): එක් විශේෂිත ටැගයක් පමණක් හැඩගැන්වීමට (Unique). පිටුවකට එක් වරක් පමණි.",
            "පාසල් උපමාව: Class = 11 ශ්‍රේණියේ සිසුන් (පොදු ලක්ෂණ). ID = ජාතික හැඳුනුම්පත් අංකය (එක් අයෙකුට එකකි).",
            "ඔබ එකම ටැගයකට Class එකකින් නිල් පාටත්, ID එකකින් රතු පාටත් ලබා දුන්නොත්, බ්‍රවුසරය තෝරා ගන්නේ ID එකේ රතු පාටයි. මන්ද ID හි ප්‍රමුඛතාවය (Specificity) Class එකට වඩා වැඩිය."
          ],
          asciiDiagram: `අඩු බලය (Low Power) -----------------------------> වැඩි බලය (High Power)
[ * ]  <  [ Element (p) ]  <  [ Class (.name) ]  <  [ ID (#id) ]`
        }
      ],
      keyPoints: [
        "හැඩගැන්වීම් (Styling) සඳහා 95% ක්ම Class භාවිතා කරන්න.",
        "ID භාවිතා කළ යුත්තේ JavaScript හෝ Internal Page Anchors සඳහා පමණි."
      ],
      exercises: [
        { id: 1, question: "Class සහ ID අතර ප්‍රධාන වෙනස්කම් 3ක් ලියන්න." }
      ]
    },
    {
      id: 15,
      volumeId: 2,
      chapterNumber: 15,
      title: "වර්ණ සහ පසුබිම් - වෙබ් අඩවිය අලංකාර කිරීම",
      englishTitle: "Colors, Gradients & Backgrounds",
      pageRange: "පිටු 48 - 50",
      description: "Color Systems (Names, HEX, RGB, RGBA), Gradients (linear-gradient), Background Images (cover, contain, fixed parallax), සහ Color Contrast.",
      learningObjectives: [
        "CSS හි වර්ණ ලබා දීමේ ක්‍රම 4 (Color Names, HEX Codes, RGB, RGBA)",
        "RGBA හි Alpha අගය මඟින් විනිවිදභාවය (Opacity / Transparency) පාලනය",
        "background-image, background-size: cover, background-attachment: fixed භාවිතය",
        "Linear Gradients සහ Color Accessibility / Contrast නීති"
      ],
      sections: [
        {
          title: "15.1 වර්ණ පද්ධති සහ Hero Section Background",
          content: [
            "HEX Codes (#RRGGBB) වෘත්තීය මට්ටමේදී බහුලවම භාවිතා වේ (#FFFFFF = සුදු, #000000 = කළු).",
            "RGBA හි 'A' (Alpha) අගය 0.0 (සම්පූර්ණයෙන්ම නොපෙනෙන) සිට 1.0 දක්වා පාලනය කරයි.",
            "background-attachment: fixed මඟින් Parallax effect එකක් සාදාගත හැක."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Professional Hero Section with Overlay",
              code: `.hero {
  background-color: #0f172a; /* Fallback Color */
  background-image: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.9)), url('hero.jpg');
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8fafc;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "සුදු පසුබිමක කළු අකුරු හෝ අඳුරු පසුබිමක සුදු අකුරු ඉතා හොඳ contrast එකක් ලබා දෙයි.",
        "පින්තූරයක් ලෝඩ් වන තෙක් Fallback Color එකක් සැමවිටම ලබා දෙන්න."
      ],
      exercises: [
        { id: 1, question: "RGB සහ RGBA අතර වෙනස කුමක්ද?" },
        { id: 2, question: "background-size: cover හි වාසිය කුමක්ද?" }
      ]
    },
    {
      id: 16,
      volumeId: 2,
      chapterNumber: 16,
      title: "අකුරු හැඩගැන්වීම - ටයිපෝග්‍රැෆි (Typography)",
      englishTitle: "Typography - Readability and Art",
      pageRange: "පිටු 50 - 53",
      description: "Font Families (Serif vs Sans-serif vs Monospace), Font Size (px, rem, em), font-weight, line-height, Google Fonts සහ Line Length නීති.",
      learningObjectives: [
        "ටයිපෝග්‍රැෆි (Typography) යනු වෙබ් අඩවියේ 90% ක්ම වන අකුරු කියවීමේ පහසුව බව අවබෝධ කර ගැනීම",
        "Serif, Sans-serif සහ Monospace අකුරු පවුල් අතර වෙනස හඳුනා ගැනීම",
        "px වෙනුවට නම්‍යශීලී rem ඒකකය භාවිතා කිරීමේ වැදගත්කම (1rem = 16px)",
        "කියවීමේ පහසුව සඳහා line-height (1.5 - 1.7) සහ Line Length (45-75 අකුරු) නීති",
        "Google Fonts වෙබ් අඩවියට සම්බන්ධ කිරීම"
      ],
      sections: [
        {
          title: "16.1 අකුරු පවුල් සහ rem ඒකකය",
          content: [
            "• Serif: අකුරුවල කෙළවර කුඩා ඉරි සහිත සාම්ප්‍රදායික අකුරු (Times New Roman).",
            "• Sans-serif: අකුරුවල කෙළවර අමතර ඉරි නැති පිරිසිදු නූතන අකුරු (Arial, Inter, Plus Jakarta Sans). වෙබ් අඩවි වල කියවීමේ පහසුව සඳහා නිර්දේශිතයි.",
            "• Monospace: සෑම අකුරකටම සමාන පළලක් ඇති අකුරු (Fira Code, Courier). කේත පෙන්වීමට යොදයි.",
            "rem (Root em) ඒකකය මඟින් පරිශීලකයා බ්‍රවුසරයේ අකුරු විශාල කළ විට වෙබ් අඩවියේ අකුරුද ඒ අනුව සුමටව විශාල වේ."
          ]
        }
      ],
      keyPoints: [
        "වෙබ් අඩවියකට අකුරු වර්ග (Fonts) 2කට හෝ 3කට වඩා භාවිතා නොකරන්න.",
        "line-height 1.6 ක් ලෙස තැබීමෙන් පේළි එකිනෙක ඇලීම වැළකී කියවීමේ පහසුව වැඩි වේ."
      ],
      exercises: [
        { id: 1, question: "px සහ rem අතර වෙනස පැහැදිලි කරන්න." }
      ]
    },
    {
      id: 17,
      volumeId: 2,
      chapterNumber: 17,
      title: "සී.එස්.එස්. පෙට්ටි ආකෘතිය (CSS Box Model)",
      englishTitle: "The Foundation - CSS Box Model",
      pageRange: "පිටු 53 - 56",
      description: "Everything is a box, 4 Layers: Content, Padding, Border, Margin, Total Size ගණනය, සහ box-sizing: border-box.",
      learningObjectives: [
        "'සෑම HTML මූලිකාංගයක්ම පෙට්ටියකි' යන සංකල්පය වටහා ගැනීම",
        "පෙට්ටි ආකෘතියේ ස්ථර 4 (Content, Padding, Border, Margin) හඳුනා ගැනීම",
        "box-sizing: border-box මඟින් පිරිසැලසුම් වල ඇතිවන ගැටලු විසඳීම",
        "margin: auto මඟින් මූලිකාංග තිරයේ මැදට (Center) ගැනීම"
      ],
      sections: [
        {
          title: "17.1 Box Model ස්ථර 4 සහ border-box",
          content: [
            "1. Content (අන්තර්ගතය): වටිනා බඩු වැනිය (අකුරු හෝ පින්තූර).",
            "2. Padding (අභ්‍යන්තර පරතරය): බඩු ආරක්ෂා කිරීමට දමන බුබුළු දවටන වැනිය.",
            "3. Border (මායිම): බඩු අඩංගු කාඩ්බෝඩ් පෙට්ටිය වැනිය.",
            "4. Margin (බාහිර පරතරය): පෙට්ටිය තවත් පෙට්ටියක් සමඟ ගැටීම වැළැක්වීමට තබන හිස් ඉඩයි.",
            "box-sizing: border-box නොමැති විට: Total Width = Width + Padding + Border (ගණනය සංකීර්ණයි).",
            "box-sizing: border-box යෙදූ විට: ඔබ ලබා දෙන width එක තුළටම padding සහ border ඇතුළත් වේ!"
          ],
          asciiDiagram: `_________________________________________________
|                    Margin (බාහිර ඉඩ)            |
|  _____________________________________________  |
| |                  Border (මායිම)             | |
| |  _________________________________________  | |
| | |                Padding (අභ්‍යන්තර ඉඩ)   | | |
| | |  _____________________________________  | | |
| | | |              Content (දත්ත)         | | | |
| | | |_____________________________________| | | |
| | |_________________________________________| | |
| |_____________________________________________| |
|_________________________________________________|`
        }
      ],
      keyPoints: [
        "සෑම වෘත්තීය CSS ගොනුවකම ඉහළින් * { box-sizing: border-box; } යෙදීම සම්මතයයි.",
        "Padding පෙට්ටිය ඇතුළතය; Margin පෙට්ටියෙන් පිටතය."
      ],
      exercises: [
        { id: 1, question: "පෙට්ටියක් තිරයේ තිරස් අතට මැදට ගැනීමට යොදන CSS ගුණාංගය කුමක්ද?" }
      ]
    },
    {
      id: 18,
      volumeId: 2,
      chapterNumber: 18,
      title: "පිරිසැලසුම් මූලධර්ම - ඩිස්ප්ලේ ගුණාංගය (Display Property)",
      englishTitle: "Layout Fundamentals - Display Property",
      pageRange: "පිටු 56 - 58",
      description: "Block-level vs Inline vs Inline-block elements, display: none vs visibility: hidden, සහ element nesting rules.",
      learningObjectives: [
        "display ගුණාංගය මඟින් පිරිසැලසුම (Layout) තීරණය වන ආකාරය",
        "Block elements (div, p, h1) සහ Inline elements (span, a) අතර වෙනස",
        "Inline-block මඟින් එකම පේළියේ සිටින අතරම width සහ height ලබා දීම",
        "display: none මඟින් මූලිකාංගයක් සම්පූර්ණයෙන්ම පිටුවෙන් ඉවත් කිරීම"
      ],
      sections: [
        {
          title: "18.1 Block vs Inline vs Inline-block",
          content: [
            "• Block: VIP පේළියක් වැනිය. සම්පූර්ණ පේළියම (100% width) තනිවම ලබා ගනී.",
            "• Inline: සාමාන්‍ය අසුනක් වැනිය. අකුරු වලට අවශ්‍ය ඉඩ ප්‍රමාණය පමණක් ගනී. width/height ලබා දිය නොහැක.",
            "• Inline-block: දෙමුහුන් (Hybrid) අවස්ථාවකි. එකම පේළියේ සිටිය හැක, එමෙන්ම width සහ height ද ලබා දිය හැක (Navbar links, buttons සඳහා කදිමයි)."
          ]
        }
      ],
      keyPoints: [
        "<span> ටැගයකට width ලබා දීමට නම් එය display: inline-block හෝ display: block කළ යුතුය."
      ],
      exercises: [
        { id: 1, question: "Block සහ Inline මූලිකාංග අතර ඇති ප්‍රධාන වෙනස්කම් 3ක් ලියන්න." }
      ]
    },
    {
      id: 19,
      volumeId: 2,
      chapterNumber: 19,
      title: "සී.එස්.එස්. පිහිටීම පාලනය කිරීම (CSS Position Property)",
      englishTitle: "CSS Positioning (Static, Relative, Absolute, Fixed, Sticky)",
      pageRange: "පිටු 59 - 61",
      description: "Normal Document Flow, Position අගයන් 5 (Static, Relative, Absolute, Fixed, Sticky), top/right/bottom/left, සහ z-index ස්ථර පාලනය.",
      learningObjectives: [
        "Normal Document Flow එකෙන් ඔබ්බට මූලිකාංග පිහිටුවීම",
        "Relative, Absolute, Fixed, Sticky පිහිටීම් 5 මනා ලෙස වටහා ගැනීම",
        "The Relative Parent Rule: Absolute දරුවෙකු සඳහා Relative දෙමාපිය ටැගයක් තිබිය යුතුයි",
        "z-index මඟින් ස්ථර (Layering) පාලනය කිරීම"
      ],
      sections: [
        {
          title: "19.1 Position අගයන් 5 සහ z-index",
          content: [
            "• Static: සාමාන්‍ය පෙරනිමි අගයයි.",
            "• Relative: මුල් තැනට සාපේක්ෂව සුළු වශයෙන් චලනය වේ, මුල් ඉඩ රඳවා ගනී.",
            "• Absolute: සාමාන්‍ය ප්‍රවාහයෙන් සම්පූර්ණයෙන්ම ඉවත් වී Relative දෙමාපිය ටැගයට සාපේක්ෂව පාවෙයි (Drone එකක් වැනිය).",
            "• Fixed: පරිශීලකයා scroll කළද තිරයට (Viewport) සාපේක්ෂව එකම තැන සිරවී පවතී (Chat buttons, Sticky Navbars).",
            "• Sticky: scroll කිරීමේදී යම් සීමාවකදී ඇලී පවතී (Table headers).",
            "• z-index: Z අක්ෂය (ඔබ දෙසට දිවෙන අක්ෂය) පාලනය කරයි. z-index: 10 ඇති එක z-index: 1 ට වඩා ඉදිරියෙන් පෙනේ."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Product Card with Floating 'NEW' Badge",
              code: `.product-card {
  position: relative; /* දෙමාපිය ටැගය සාපේක්ෂයි */
  width: 300px;
}

.badge {
  position: absolute; /* පාවෙමින් දකුණු කෙළවරේ */
  top: 10px;
  right: 10px;
  background-color: #ef4444;
  color: white;
  padding: 4px 10px;
  border-radius: 9999px;
  font-weight: bold;
  z-index: 10;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Absolute මූලිකාංගයක් භාවිතා කරන විට එහි දෙමාපිය ටැගයට position: relative ලබා දීමට අමතක නොකරන්න."
      ],
      exercises: [
        { id: 1, question: "Fixed සහ Absolute අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 20,
      volumeId: 2,
      chapterNumber: 20,
      title: "ෆ්ලෙක්ස්බොක්ස් - නම්‍යශීලී පිරිසැලසුම් (CSS Flexbox)",
      englishTitle: "CSS Flexbox - Flexible Box Layout",
      pageRange: "පිටු 62 - 64",
      description: "display: flex, Flex Container vs Items, Main Axis & Cross Axis, flex-direction, justify-content, align-items, flex-wrap සහ පරිපූර්ණ Centering.",
      learningObjectives: [
        "Flexbox යනු කුමක්ද සහ Float පැරණි ක්‍රම වෙනුවට එය පැමිණියේ ඇයි දැයි තේරුම් ගැනීම",
        "Flex Container (display: flex) සහ Flex Items අතර සම්බන්ධය",
        "Main Axis (තිරස්) සහ Cross Axis (සිරස්) අක්ෂ දෙක හඳුනා ගැනීම",
        "justify-content (flex-start, center, flex-end, space-between) භාවිතය",
        "align-items මඟින් සිරස් අතට පෙළගැස්වීම සහ ඕනෑම දෙයක් මැදට (Center) ගැනීම"
      ],
      sections: [
        {
          title: "20.1 Flexbox මූලධර්ම සහ Perfect Centering",
          content: [
            "Flexbox හඳුන්වා දීමට පෙර වෙබ් අඩවිවල කොටස් එක ළඟින් තැබීමට float හෝ display: inline-block භාවිතා කිරීමට සිදු විය. එය ඉතාමත් අපහසු සහ දෝෂ සහිත විය.",
            "ඕනෑම දෙයක් තිරයේ සිරස්ව සහ තිරස්ව හරියටම මැදට ගැනීමේ කෙටිම සහ හොඳම ක්‍රමය Flexbox වේ:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Perfect Centering in Flexbox",
              code: `.center-container {
  display: flex;
  justify-content: center; /* තිරස් අතට මැදට */
  align-items: center;     /* සිරස් අතට මැදට */
  min-height: 100vh;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "display: flex; නොමැතිව කිසිදු Flex ගුණාංගයක් ක්‍රියා නොකරයි.",
        "Mobile view වලදී flex-direction: column; මඟින් පහසුවෙන්ම Responsive කළ හැක."
      ],
      exercises: [
        { id: 1, question: "justify-content සහ align-items අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 21,
      volumeId: 2,
      chapterNumber: 21,
      title: "ෆ්ලෙක්ස්බොක්ස් අයිතම පාලනය (Flexbox Items Deep Dive)",
      englishTitle: "Flexbox Items - Deep Dive",
      pageRange: "පිටු 64 - 66",
      description: "flex-grow, flex-shrink, flex-basis, flex shorthand (grow shrink basis), align-self සහ order ගුණාංග.",
      learningObjectives: [
        "Flex Items සඳහාම වෙන්වූ ගුණාංග 5 හඳුනා ගැනීම",
        "flex-grow මඟින් ඉතිරි ඉඩ ලබා ගන්නා ආකාරය ගණිතමය වශයෙන් තේරුම් ගැනීම",
        "flex-shrink: 0 මඟින් අයිතම හැකිලීම වැළැක්වීම",
        "align-self මඟින් තනි අයිතමයක පිහිටීම වෙනස් කිරීම",
        "order ගුණාංගය මඟින් HTML කේතය වෙනස් නොකර පෙනෙන පිළිවෙල මාරු කිරීම"
      ],
      sections: [
        {
          title: "21.1 flex shorthand සහ order",
          content: [
            "• flex-grow: ඉතිරි ඉඩ බෙදා ගන්නා අනුපාතය.",
            "• flex-shrink: ඉඩ මදි වූ විට අයිතමය හැකිලෙන ප්‍රමාණය (0 දුන් විට කිසිදා නොහැකිලේ).",
            "• flex-basis: මූලික පළල හෝ උස.",
            "වෘත්තීය කෙටි ක්‍රමය: flex: [grow] [shrink] [basis]; (උදා: flex: 1 0 200px;)."
          ]
        }
      ],
      keyPoints: [
        "flex: 1 යනු ඉතිරි සියලු ඉඩ ලබා ගන්නා ලෙස පැවසීමයි."
      ],
      exercises: [
        { id: 1, question: "flex: 0 1 auto; යන්නෙහි තේරුම කොටස් වශයෙන් පැහැදිලි කරන්න." }
      ]
    },
    {
      id: 22,
      volumeId: 2,
      chapterNumber: 22,
      title: "සී.එස්.එස්. ග්‍රිඩ් - ද්විමාන පිරිසැලසුම් (CSS Grid 2D Layouts)",
      englishTitle: "CSS Grid Layout - 2D Layouts",
      pageRange: "පිටු 67 - 69",
      description: "Flexbox (1D) vs CSS Grid (2D), Grid Container & Items, fr ඒකකය, repeat(), minmax(), gap, සහ Grid Areas.",
      learningObjectives: [
        "CSS Grid යනු ද්විමාන (2D - පේළි සහ තීරු දෙකම) පිරිසැලසුම් පද්ධතියක් බව තේරුම් ගැනීම",
        "Flexbox (1D - තනි පේළියක් හෝ තීරුවක්) සහ CSS Grid (2D) අතර වෙනස",
        "fr (Fractional Unit) නවීන ඒකකය සහ repeat(), minmax() ශ්‍රිත භාවිතය",
        "grid-template-areas මඟින් සිතියමක් අඳින්නාක් මෙන් Layout එකක් සෑදීම"
      ],
      sections: [
        {
          title: "22.1 Grid Areas මඟින් සම්පූර්ණ පිටු පිරිසැලසුම",
          content: [
            "Grid Areas යනු CSS Grid වල ඇති ඉතාමත් පහසු සහ රූ සටහනක් අඳින්නාක් වැනි ක්‍රමයකි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "CSS Grid Layout with Areas",
              code: `.grid-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`
            }
          ]
        }
      ],
      keyPoints: [
        "පිටුවක ප්‍රධාන බාහිර ව්‍යුහය (Outer layout) සඳහා Grid ද, එහි ඇතුළත ඇති කුඩා කොටස් සඳහා Flexbox ද භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "Flexbox සහ CSS Grid අතර ප්‍රධාන වෙනස්කම් 3ක් ලියන්න." }
      ]
    },
    {
      id: 23,
      volumeId: 2,
      chapterNumber: 23,
      title: "ප්‍රතිචාරාත්මක වෙබ් නිර්මාණය (Responsive Web Design)",
      englishTitle: "Responsive Web Design & Media Queries",
      pageRange: "පිටු 72 - 74",
      description: "Viewport Meta Tag, Media Queries (@media), Breakpoints (Mobile, Tablet, Desktop), Mobile-First Approach, සහ Responsive Images.",
      learningObjectives: [
        "ප්‍රතිචාරාත්මක වෙබ් නිර්මාණය (RWD) යනු කුමක්දැයි අවබෝධ කර ගැනීම",
        "Viewport Meta Tag එක නොමැතිව Media Queries ක්‍රියා නොකරන බව දැනගැනීම",
        "Media Queries ලියන රටාව සහ සම්මත Breakpoints (480px, 768px, 1024px)",
        "Mobile-First ප්‍රවේශය සහ max-width: 100% responsive images"
      ],
      sections: [
        {
          title: "23.1 Mobile-First ප්‍රවේශය සහ Media Queries",
          content: [
            "වතුර මෙන් වෙබ් අඩවියක්ද විවෘත කරන ඕනෑම භාජනයක (තිරයක) හැඩය ගත යුතුය.",
            "Mobile-First ක්‍රමය: මුලින්ම සාමාන්‍ය CSS ලෙස ජංගම දුරකථනයට ගැලපෙන කේත ලියන්න. ඉන්පසු තිරය විශාල වන විට min-width මඟින් වෙනස්කම් සිදු කරන්න."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Mobile-First Media Query Example",
              code: `/* 1. Mobile view (Default) */
.container {
  display: flex;
  flex-direction: column;
}

/* 2. Tablet & Desktop (768px+) */
@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Fixed width (උදා: width: 1000px) යෙදීමෙන් ජංගම තිරවලදී වෙබ් අඩවිය කැඩී යයි. සෑමවිටම max-width හෝ % යොදන්න."
      ],
      exercises: [
        { id: 1, question: "Viewport Meta Tag එකෙහි ප්‍රධාන කාර්යයන් 2 මොනවාද?" }
      ]
    },
    {
      id: 24,
      volumeId: 2,
      chapterNumber: 24,
      title: "සී.එස්.එස්. විචල්‍යයන් සහ හොඳම පුරුදු (CSS Variables & Best Practices)",
      englishTitle: "CSS Custom Properties & Clean Code",
      pageRange: "පිටු 75 - 77",
      description: ":root සහ CSS Custom Properties (--variable-name), var(), BEM (Block Element Modifier), DRY මූලධර්මය, සහ Dark Mode සැකසීම.",
      learningObjectives: [
        "CSS විචල්‍යයන් (Custom Properties) යනු කුමක්දැයි තේරුම් ගැනීම",
        ":root තුළ ගෝලීය විචල්‍යයන් (Global Variables) ප්‍රකාශ කිරීම සහ var() මඟින් භාවිතය",
        "BEM නාමකරණ ක්‍රමය (Block__Element--Modifier) මඟින් කේතය පිරිසිදුව තබා ගැනීම",
        "CSS Variables මඟින් තනි පියවරකින් Dark Mode ක්‍රියාත්මක කිරීම"
      ],
      sections: [
        {
          title: "24.1 CSS Variables සහ Dark Mode",
          content: [
            "විචල්‍යයක් යනු වර්ණයක්, ප්‍රමාණයක් ගබඩා කර තබන පෙට්ටියක් වැනිය. සායම් බාල්දිය මෙන් එකම තැනකින් වෙනස් කළ විට සියලුම පිටු වල අදාළ වර්ණය ස්වයංක්‍රීයව වෙනස් වේ."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Design Tokens & Dark Mode",
              code: `:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  --accent-color: #2563eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
    --accent-color: #38bdf8;
  }
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "BEM ක්‍රමය (card__title, btn--primary) මඟින් කේතය අවුල් වීම වළක්වයි.",
        "DRY (Don't Repeat Yourself) පිළිපැදීමෙන් කේතය නඩත්තු කිරීම පහසු වේ."
      ],
      exercises: [
        { id: 1, question: "BEM හි Block, Element, සහ Modifier යන්නෙන් අදහස් වන්නේ මොනවාද?" }
      ]
    },
    {
      id: 25,
      volumeId: 2,
      chapterNumber: 25,
      title: "වෘත්තීය පෝට්ෆෝලියෝ ව්‍යාපෘතිය (Professional Portfolio Project)",
      englishTitle: "The Professional Portfolio Project",
      pageRange: "පිටු 77 - 80",
      description: "පූර්ණ Portfolio අඩවියක් නිර්මාණය: Sticky Navbar (Flexbox), Animated Hero Section, Skills Grid, Mobile Responsive, සහ Project Cards.",
      learningObjectives: [
        "මෙතෙක් උගත් සියලුම CSS සංකල්ප (Box Model, Flexbox, Grid, Positioning, Responsive) එකතු කර පූර්ණ ව්‍යාපෘතියක් සෑදීම",
        "Sticky Navigation Bar එකක් නිර්මාණය කිරීම",
        "@keyframes fade-in සජීවීකරණ සහිත Hero Section එකක් සැකසීම",
        "ජංගම දුරකථන සහ පරිගණක තිර දෙකටම පරිපූර්ණව ගැලපීම"
      ],
      sections: [
        {
          title: "25.1 පෝට්ෆෝලියෝ සැලසුම සහ සජීවීකරණ",
          content: [
            "පෝට්ෆෝලියෝවක් යනු ඔබ කවුද, ඔබ දන්නා දේ කුමක්ද සහ ඔබ කළ නිර්මාණ මොනවාදැයි ලෝකයට පෙන්වන කැඩපතයි.",
            "Freelancing හෝ රැකියාවකට අයදුම් කරන විට සේවාදායකයා මුලින්ම බලන්නේ ඔබේ මෙම වෙබ් අඩවියයි."
          ]
        }
      ],
      keyPoints: [
        "පින්තූර වල file size අඩු කර (TinyPNG/WebP) වෙබ් අඩවියේ වේගය උපරිම කරන්න.",
        "අකුරු සහ පසුබිම් වර්ණ අතර හොඳ Contrast එකක් පවත්වා ගන්න."
      ],
      exercises: [
        { id: 1, question: "Hover Effect එකක් සෑදීමට භාවිතා කරන CSS Transition කේතය ලියන්න." }
      ]
    },
    {
      id: 26,
      volumeId: 2,
      chapterNumber: 26,
      title: "විශේෂ ප්‍රෝ: සී.එස්.එස්. ගෘහ නිර්මාණ ශිල්පය සහ පද්ධති නිර්මාණය",
      englishTitle: "Advanced CSS Architecture, Design Systems & Engineering",
      pageRange: "පිටු 80 - 83",
      description: "CSS Architecture (ITCSS/BEM), Design Tokens, Reflow & Repaint, clamp() CSS Math, aspect-ratio, සහ Advanced Pseudo-elements (::after).",
      learningObjectives: [
        "බ්‍රවුසරය CSS කියවන ආකාරය (Reflow & Repaint) සහ එය වේගවත් කරන රහස්",
        "Design Tokens මඟින් විශාල මෘදුකාංග සඳහා Design System එකක් ගොඩනැගීම",
        "Modern CSS Math: clamp(min, val, max) මඟින් responsive typography සෑදීම",
        "::before සහ ::after මඟින් අමතර HTML නොමැතිව උසස් සැරසිලි සෑදීම"
      ],
      sections: [
        {
          title: "26.1 clamp() සහ Performance Optimization",
          content: [
            "Reflow: මූලිකාංගයක width හෝ position වෙනස් කළ විට බ්‍රවුසරය මුළු පිටුවේම පෙට්ටිවල පිහිටීම නැවත ගණනය කරයි (CPU එකට බර වැඩකි).",
            "Repaint: වර්ණයක් පමණක් වෙනස් වන විට සිදුවන වේගවත් ක්‍රියාවලියකි.",
            "Pro-Tip: සජීවීකරණ (Animations) වලදී layout වෙනස් කරන top/left වෙනුවට සැමවිටම transform: translate() භාවිතා කරන්න!"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Responsive Typography with clamp()",
              code: `h1 {
  /* අකුරු 2rem ට වඩා කුඩා නොවේ, තිරයේ පළලින් 5vw ලෙස පවතී, 5rem ට වඩා විශාල නොවේ */
  font-size: clamp(2rem, 5vw + 1rem, 5rem);
}`
            }
          ]
        }
      ],
      keyPoints: [
        "!important භාවිතා නොකරන්න; එය කේතය අවුල් කරන ප්‍රධාන සාධකයකි.",
        "aspect-ratio: 16 / 9 මඟින් පින්තූර හෝ වීඩියෝ පෙට්ටි නිවැරදි හැඩයෙන් තබා ගනී."
      ],
      exercises: [
        { id: 1, question: "Reflow සහ Repaint අතර වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 27,
      volumeId: 2,
      chapterNumber: 27,
      title: "දෘශ්‍ය ප්‍රයෝග, උසස් තේරීම්කාරක සහ රූප පාලනය (Visual Effects & Glassmorphism)",
      englishTitle: "Visual Effects, Glassmorphism, Filters & Image Mastery",
      pageRange: "පිටු 83 - 87",
      description: "CSS Shadows (box-shadow, text-shadow), Backdrop-filter සහ Glassmorphism රහස්, CSS Filters, Object-fit (cover, contain), සහ Modern CSS Reset.",
      learningObjectives: [
        "box-shadow ගුණාංගය මඟින් වෙබ් අඩවියට 3D ගැඹුරක් ලබා දීම",
        "නූතන වෙබ් නිර්මාණයේ ඉතා ජනප්‍රිය Glassmorphism (වීදුරු පෙනුම) නිර්මාණය කිරීම",
        "object-fit: cover මඟින් පින්තූර ඇද නොවී ලස්සනට පෙන්වීම",
        "වෘත්තීය Modern CSS Reset කේතය හඳුනා ගැනීම"
      ],
      sections: [
        {
          title: "27.1 Glassmorphism (වීදුරු පෙනුම) සහ Shadows",
          content: [
            "Glassmorphism හි රහස වන්නේ මූලිකාංගයේ පසුබිම නොව, එම මූලිකාංගයට පිටුපසින් ඇති දේ (Background) බොඳ කර පෙන්වීමයි (backdrop-filter: blur).",
            "වීදුරු මට්ටමේ කාඩ්පතක් සඳහා කේතය:"
          ],
          asciiDiagram: `[ පිටුපස ඇති රූපය (Background Image) ]
                   |
[ වීදුරු පෙට්ටිය - background: rgba(255,255,255,0.1) ]
[ Backdrop-filter: blur(16px) ]
                   |
[ පරිශීලකයාට පෙනෙන අතිශය සුඛෝපභෝගී වීදුරු පෙනුම (Glassmorphism) ]`,
          codeSnippets: [
            {
              language: "css",
              title: "Glassmorphism Card Code",
              code: `.glass-panel {
  background: rgba(255, 255, 255, 0.08); /* ඉතා ලා විනිවිද පෙනෙන පසුබිමක් */
  backdrop-filter: blur(16px);           /* පිටුපස ඇති දේ බොඳ කරයි */
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15); /* වීදුරුවේ කෙළවර දිලිසීමට */
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  color: white;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Glassmorphism ක්‍රියා කිරීමට නම් පසුබිම් වර්ණය අනිවාර්යයෙන්ම semi-transparent (rgba) විය යුතුය.",
        "object-fit: cover මඟින් පින්තූරය ඇද නොවී, එහි මැද කොටස පෙනෙන සේ පෙට්ටිය ආවරණය කරයි."
      ],
      exercises: [
        { id: 1, question: "Glassmorphism පෙනුමක් ලබා ගැනීමට අත්‍යවශ්‍ය CSS ගුණාංග 2 මොනවාද?" }
      ]
    }
  ]
};
