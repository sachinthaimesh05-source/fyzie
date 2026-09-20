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
        "CSS (Cascading Style Sheets) යනු කුමක්දැයි සහ එහි අවශ්‍යතාව අවබෝධ කර ගැනීම",
        "CSS ලියන මූලික රටාව (Selector { Property: Value; }) තේරුම් ගැනීම",
        "CSS එකතු කරන ක්‍රම 3 (Inline, Internal, External) සහ External ක්‍රමයේ උසස් වාසි",
        "External stylesheet එකක් HTML <link> ටැගය මඟින් නිවැරදිව සම්බන්ධ කිරීම"
      ],
      sections: [
        {
          title: "13.1 CSS යනු කුමක්ද සහ ඇයි අපට අවශ්‍ය වන්නේ?",
          content: [
            "HTML මඟින් වෙබ් අඩවියක සැකිල්ල (Structure) සාදන අතර, CSS (Cascading Style Sheets) මඟින් එම සැකිල්ල අලංකාර කිරීම (Styling & Presentation) සිදු කරයි.",
            "සරල පැහැදිලි කිරීම: HTML යනු නිවසක ගඩොල් සැකිල්ලයි. CSS යනු එම නිවසේ බිත්තිවල ගාන සායම්, දොර ජනෙල්වල හැඩය, අලංකාර ආලෝකකරණය සහ ගෘහ භාණ්ඩ තබන ස්ථාන තීරණය කරන අභ්‍යන්තර සැලසුම් ශිල්පියා (Interior Designer) වැනිය.",
            "• Cascading (ඇල්ලක් මෙන් ගලා යාම): නීති දෙකක් ගැටුණහොත් වඩාත්ම නිවැරදි හෝ පහළින්ම ඇති නීතිය ක්‍රියාත්මක වීම.",
            "• Style (මෝස්තරය): අකුරු වල පාට, ප්‍රමාණය, පින්තූර වල හැඩය සහ සජීවීකරණ.",
            "• Sheets (පිටු): මෙම නීති රීති ලියා තබන ගොනු."
          ]
        },
        {
          title: "13.2 CSS Syntax (නීතියක ව්‍යුහය)",
          content: [
            "සෑම CSS නීතියක්ම ප්‍රධාන කොටස් 3කින් සමන්විත වේ:",
            "1. Selector (තේරීම්කාරකය): අප හැඩගන්වන්නේ කුමන HTML ටැගයදැයි තෝරා ගැනීම (උදා: h1, p, .button).",
            "2. Property (ගුණාංගය): අප වෙනස් කිරීමට බලාපොරොත්තු වන ලක්ෂණය (උදා: color, font-size, background-color).",
            "3. Value (අගය): එම ගුණාංගයට අප ලබා දෙන නිශ්චිත අගය (උදා: red, 20px, #0f172a).",
            "සෑම Property සහ Value එකක්ම කොලනයකින් (:) වෙන් විය යුතු අතර, නීතිය අවසානයේ අනිවාර්යයෙන්ම සෙමිකෝලනයක් (;) තිබිය යුතුය."
          ],
          asciiDiagram: `Selector { Property: Value; }
   │         │        │
  h1   {   color:   #38bdf8;  }`
        },
        {
          title: "13.3 CSS එක් කළ හැකි ක්‍රම 3 (Inline, Internal, External)",
          content: [
            "1. Inline CSS: HTML ටැගය තුළම style attribute එක මඟින් ලිවීම. (උදා: <h1 style='color: red;'>). මෙය නැවත භාවිත කළ නොහැකි අතර කේතය අවුල් කරයි.",
            "2. Internal CSS: HTML පිටුවේ <head> කොටස තුළ <style> ටැගයක් ඇතුළත ලිවීම. තනි පිටුවකට පමණක් සීමා වේ.",
            "3. External CSS (වඩාත්ම නිර්දේශිත සහ වෘත්තීය ක්‍රමය): සියලුම CSS නීති වෙනම style.css ගොනුවක ලියා HTML ගොනුවට <link> ටැගය මඟින් සම්බන්ධ කිරීම. වෙබ් අඩවියේ පිටු සිය ගණනකට එකම CSS ගොනුව භාවිතා කළ හැක!"
          ]
        },
        {
          title: "13.4 External CSS සම්බන්ධ කිරීම සහ භාවිතය",
          content: [
            "HTML ගොනුවේ <head> කොටස තුළ පහත පරිදි External Stylesheet එක සම්බන්ධ කරනු ලැබේ:",
            "<link rel='stylesheet' href='css/style.css'>",
            "වාසි: කේතයේ පිරිසිදුකම (Separation of Concerns), ගොනු Browser Cache වීම නිසා වෙබ් අඩවිය අතිශය වේගවත්ව පැටවීම (Fast Loading)."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "External Style Sheet (style.css)",
              code: `/* ගෝලීය මුලික සැකසුම් */
body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 20px;
}

/* ප්‍රධාන මාතෘකාව හැඩගැන්වීම */
h1 {
  color: #38bdf8;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* ඡේද හැඩගැන්වීම */
p {
  color: #94a3b8;
  line-height: 1.7;
  font-size: 1.1rem;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "External CSS (<link rel='stylesheet' href='style.css'>) ලොව පිළිගත් සම්මත වෘත්තීය ක්‍රමයයි.",
        "සෑම CSS නීතියක් අවසානයේදීම අනිවාර්යයෙන්ම සෙමිකෝලනයක් (;) තිබිය යුතුය.",
        "Inline CSS හැකිතාක් මඟහරින්න; එය නැවත භාවිතයට සහ නඩත්තුවට බාධාවකි."
      ],
      exercises: [
        { id: 1, question: "External CSS භාවිතයේ ප්‍රධාන තාක්ෂණික වාසි 3ක් ලියන්න." },
        { id: 2, question: "CSS නීතියක ඇති ප්‍රධාන කොටස් 3 (Selector, Property, Value) උදාහරණයක් මඟින් පෙන්වන්න." }
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
        "CSS Selectors යනු කුමක්ද සහ ඒවා වර්ගීකරණය වන ආකාරය",
        "Class (.) සහ ID (#) අතර ඇති තාක්ෂණික සහ ප්‍රායෝගික වෙනස්කම්",
        "Grouping සහ Combinator Selectors (Descendant, Child) භාවිතය",
        "Specificity (ප්‍රමුඛතාවය) ගණනය කිරීම සහ !important භාවිතයේ අනතුරු"
      ],
      sections: [
        {
          title: "14.1 මූලික Selectors (Universal, Element, Class, ID)",
          content: [
            "• Universal Selector (*): පිටුවේ ඇති සියලුම ටැග් තෝරා ගනී (උදා: * { margin: 0; box-sizing: border-box; }).",
            "• Element Selector: HTML ටැගයේ නම මඟින් තෝරා ගැනීම (උදා: p { color: blue; }).",
            "• Class Selector (.): එකම පන්තියට අයත් මූලිකාංග සමූහයක් හැඩගැන්වීමට (Reusable). පිටුවක ඕනෑම වාර ගණනක් භාවිතා කළ හැක (උදා: .btn, .card).",
            "• ID Selector (#): එක් විශේෂිත මූලිකාංගයක් පමණක් හැඩගැන්වීමට (Unique). පිටුවකට එක් වරක් පමණක් යෙදිය යුතුය (උදා: #navbar, #submit-button)."
          ]
        },
        {
          title: "14.2 Combinators සහ Grouping Selectors",
          content: [
            "• Grouping Selector (,): ටැග් කිහිපයකට එකම CSS නීතියක් ලබා දීමට කොමාව යොදයි (උදා: h1, h2, h3 { font-family: 'Poppins', sans-serif; }).",
            "• Descendant Selector (හිස්තැනක්): දෙමාපිය ටැගය තුළ ඇති ඕනෑම ගැඹුරක පිහිටි දරුවෙකු තෝරා ගනී (උදා: .card p { font-size: 14px; }).",
            "• Direct Child Selector (>): දෙමාපිය ටැගයට සෘජුවම යටින් ඇති දරුවා පමණක් තෝරා ගනී (උදා: ul > li)."
          ]
        },
        {
          title: "14.3 Specificity (ප්‍රමුඛතාවය) සහ ගණනය කිරීමේ සූත්‍රය",
          content: [
            "එකම ටැගයකට නීති දෙකකින් එකිනෙකට පටහැනි මෝස්තර ලබා දුනහොත්, බ්‍රවුසරය තීරණය කරන්නේ Specificity (විශේෂත්වය හෝ බලය) පදනම් කරගෙනයි.",
            "Specificity ධූරාවලිය (අඩු බලයේ සිට වැඩි බලයට):",
            "1. Universal Selector (*) = 0, 0, 0, 0",
            "2. Element Selectors (p, div, h1) = 0, 0, 0, 1",
            "3. Class Selectors (.btn, .active) = 0, 0, 1, 0",
            "4. ID Selectors (#header) = 0, 1, 0, 0",
            "5. Inline Styles (style='...') = 1, 0, 0, 0",
            "!important: මෙම නීතිය මඟින් ඉහත සියලු බලයන් අභිබවා යයි. එහෙත් එය භාවිතා කිරීමෙන් කේතයේ නඩත්තුව බිඳවැටෙන බැවින් විශේෂ හදිසි අවස්ථාවකදී හැර කිසිවිටෙකත් !important භාවිතා නොකරන්න."
          ],
          asciiDiagram: `අඩු බලය (Low Power) -----------------------------> වැඩි බලය (High Power)
[ * (0) ] < [ Element (1) ] < [ Class (10) ] < [ ID (100) ] < [ Inline (1000) ]`
        },
        {
          title: "14.4 ප්‍රායෝගික Selectors කේත උදාහරණය",
          content: [
            "පහත දැක්වෙන්නේ Class, ID, Grouping සහ Combinator selectors නිවැරදිව භාවිත කර ඇති ආකාරයයි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Selectors & Specificity in Action",
              code: `/* 1. Universal reset */
* {
  box-sizing: border-box;
}

/* 2. Element selector */
body {
  font-family: sans-serif;
}

/* 3. Class selector (Reusable) */
.btn {
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

/* 4. Combinator: Specific variant class */
.btn.btn-primary {
  background-color: #38bdf8;
  color: #0f172a;
}

/* 5. Descendant combinator */
.card .card-title {
  font-size: 1.25rem;
  color: #f1f5f9;
}

/* 6. ID selector (High specificity) */
#main-header {
  border-bottom: 2px solid #334155;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "හැඩගැන්වීම් (Styling) සඳහා 95% ක්ම Class භාවිතා කරන්න.",
        "ID භාවිතා කළ යුත්තේ JavaScript හෝ Internal Page Anchors සඳහා පමණි.",
        "!important භාවිතා කිරීමෙන් වළකින්න; එය Specificity පද්ධතිය අඩපණ කරයි."
      ],
      exercises: [
        { id: 1, question: "Class සහ ID අතර ප්‍රධාන වෙනස්කම් 3ක් ලියන්න." },
        { id: 2, question: "div p සහ div > p අතර ඇති වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 15,
      volumeId: 2,
      chapterNumber: 15,
      title: "වර්ණ සහ පසුබිම් - වෙබ් අඩවිය අලංකාර කිරීම",
      englishTitle: "Colors, Gradients & Backgrounds",
      pageRange: "පිටු 48 - 50",
      description: "Color Systems (Names, HEX, RGB, RGBA, HSL), Gradients (linear, radial), Background Images (cover, contain, fixed parallax), සහ Color Contrast.",
      learningObjectives: [
        "CSS හි වර්ණ ලබා දීමේ ක්‍රම (Names, HEX, RGB, RGBA, HSL)",
        "RGBA හි Alpha අගය මඟින් විනිවිදභාවය (Opacity) පාලනය",
        "background-image, background-size, background-position, background-repeat සහ attachment: fixed",
        "Linear Gradients, Radial Gradients සහ Color Accessibility (Contrast Ratio)"
      ],
      sections: [
        {
          title: "15.1 CSS වර්ණ ආකෘති (Color Formats)",
          content: [
            "වෙබ් නිර්මාණයේදී වර්ණ ලබා දීමට ප්‍රධාන ක්‍රම 4ක් ඇත:",
            "1. Color Names: red, blue, tomato වැනි නම් (සීමිතයි).",
            "2. HEX Codes (#RRGGBB): රතු (Red), කොළ (Green), නිල් (Blue) අගයන් 16 පාදයෙන් (00 සිට FF දක්වා) දැක්වීම. ලොව බහුලවම භාවිත වන ක්‍රමයයි. (උදා: #38bdf8 - Sky Blue, #ffffff - සුදු, #000000 - කළු).",
            "3. RGB (Red, Green, Blue): 0 සිට 255 දක්වා අගයන් (උදා: rgb(56, 189, 248)).",
            "4. RGBA: RGB සමඟ Alpha අගයක් (0.0 සිට 1.0 දක්වා) එක් කිරීම. 0.0 යනු සම්පූර්ණයෙන්ම විනිවිද පෙනෙන (Fully transparent) අතර 1.0 යනු සම්පූර්ණයෙන් පෙනෙන (Fully opaque) තත්ත්වයයි."
          ]
        },
        {
          title: "15.2 Background Properties (පසුබිම් පාලනය)",
          content: [
            "වෙබ් අඩවියක පසුබිම පාලනය කරන ප්‍රධාන ගුණාංග:",
            "• background-color: පසුබිම් වර්ණය.",
            "• background-image: පසුබිම් පින්තූරය (url('banner.jpg')).",
            "• background-repeat: no-repeat (පින්තූරය නැවත නැවත පුනරාවර්තනය වීම වළක්වයි).",
            "• background-size: cover (මුළු පෙට්ටියම සම්පූර්ණයෙන් වැසී යන සේ පින්තූරය විශාල කරයි) හෝ contain (පින්තූරය නොකැඩී සම්පූර්ණයෙන් පෙන්වයි).",
            "• background-position: center center (පින්තූරය හරියටම මැදට තැබීම).",
            "• background-attachment: fixed (පරිශීලකයා scroll කරන විට පසුබිම් පින්තූරය නොසෙල්වී පවතින Parallax effect එක සාදයි)."
          ]
        },
        {
          title: "15.3 Gradients (වර්ණ සංයෝජන) සහ Overlays",
          content: [
            "Gradient යනු එක් වර්ණයක සිට තවත් වර්ණයකට ක්‍රමයෙන් වෙනස් වන සුමට මාරුවීමකි.",
            "• Linear Gradient: සරල රේඛාවක් ඔස්සේ දිශාවකට ගලා යාම (උදා: linear-gradient(135deg, #0284c7, #7c3aed)).",
            "• Radial Gradient: කේන්ද්‍රයේ සිට වෘත්තාකාරව විහිදී යාම.",
            "Dark Overlay රහස: පින්තූරයක් මත සුදු අකුරු ලිවීමේදී, පින්තූරයේ දීප්තිය නිසා අකුරු කියවීමට අපහසු විය හැක. ඒ සඳහා පින්තූරයට ඉහළින් අර්ධ-විනිවිද අඳුරු linear-gradient එකක් (Overlay) යෙදීම වෘත්තීය රහසකි."
          ]
        },
        {
          title: "15.4 Hero Section සඳහා සම්පූර්ණ Background කේතය",
          content: [
            "පහත දැක්වෙන්නේ Parallax සහ Dark Overlay සහිත වෘත්තීය Hero Banner එකකි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Professional Hero Section with Overlay & Parallax",
              code: `.hero {
  /* Fallback color if image fails */
  background-color: #0f172a;
  
  /* Gradient overlay + image */
  background-image: 
    linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.9)), 
    url('../images/hero-bg.jpg');
    
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Parallax effect */
  
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8fafc;
  text-align: center;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "සුදු පසුබිමක කළු අකුරු හෝ අඳුරු පසුබිමක සුදු අකුරු ඉතා හොඳ contrast එකක් ලබා දෙයි (WCAG AA 4.5:1).",
        "පින්තූරයක් ලෝඩ් වන තෙක් background-color එකක් සැමවිටම fallback ලෙස ලබා දෙන්න.",
        "background-size: cover මඟින් පින්තූරය විකෘති නොවී සම්පූර්ණ ඉඩ ආවරණය කරයි."
      ],
      exercises: [
        { id: 1, question: "RGB සහ RGBA අතර ඇති වෙනස කුමක්ද? Alpha අගය යොදන්නේ කුමකටද?" },
        { id: 2, question: "background-attachment: fixed මඟින් ලබා දෙන ප්‍රයෝගය කුමක්ද?" }
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
        "ටයිපෝග්‍රැෆි (Typography) යනු වෙබ් අඩවියේ 90% ක්ම වන කියවීමේ පහසුව බව අවබෝධ කර ගැනීම",
        "Serif, Sans-serif සහ Monospace අකුරු පවුල් අතර වෙනස හඳුනා ගැනීම",
        "px වෙනුවට නම්‍යශීලී rem ඒකකය භාවිතා කිරීමේ වැදගත්කම (1rem = 16px)",
        "කියවීමේ පහසුව සඳහා line-height (1.5 - 1.7) සහ Line Length (45-75 අකුරු) නීති",
        "Google Fonts වෙබ් අඩවියට සම්බන්ධ කිරීම"
      ],
      sections: [
        {
          title: "16.1 අකුරු පවුල් වර්ගීකරණය (Font Families)",
          content: [
            "ඩිජිටල් නිර්මාණයේදී අකුරු ප්‍රධාන පවුල් 3කට බෙදේ:",
            "1. Serif: අකුරුවල කෙළවර කුඩා අලංකාර ඉරි (Serifs) සහිත සම්භාව්‍ය අකුරු. පොත්පත් සහ පුවත්පත් සඳහා යොදයි (උදා: Times New Roman, Georgia).",
            "2. Sans-serif: අකුරුවල කෙළවර අමතර ඉරි නැති පිරිසිදු, නූතන අකුරු. පරිගණක සහ ජංගම තිර වල කියවීමේ උපරිම පහසුව සලසයි (උදා: Inter, Arial, Plus Jakarta Sans).",
            "3. Monospace: සෑම අකුරකටම සමාන පළලක් (Fixed width) ඇති අකුරු. කේත (Code blocks) ලිවීමට යොදයි (උදා: Fira Code, Courier New).",
            "Font Stack (Fallback System): font-family: 'Inter', system-ui, sans-serif; මෙහි තේරුම පරිශීලකයාගේ පරිගණකයේ Inter නොමැති නම් system-ui ද, එයද නැතිනම් සාමාන්‍ය sans-serif ද පෙන්වන ලෙසයි."
          ]
        },
        {
          title: "16.2 ඒකක සංසන්දනය (px vs rem vs em)",
          content: [
            "• Pixels (px): ස්ථාවර (Static) ඒකකයකි. තිරයේ පික්සල් ගණන අනුව වෙනස් නොවේ. Accessibility සඳහා සුදුසු නැත.",
            "• Root EM (rem): Root HTML ටැගයේ font-size එකට සාපේක්ෂ වේ. සාමාන්‍යයෙන් බ්‍රවුසර වල Root font-size = 16px වේ. එබැවින් 1rem = 16px, 1.5rem = 24px, 2rem = 32px වේ.",
            "වාසිය: පෙනීම දුර්වල අයෙකු බ්‍රවුසර සැකසුම් වලින් අකුරු ප්‍රමාණය විශාල කළ විට, rem වලින් ලියූ අකුරු ඒ සමඟම විශාල වේ.",
            "• EM (em): දෙමාපිය ටැගයේ (Parent) අකුරු ප්‍රමාණයට සාපේක්ෂ වේ. සංකීර්ණ සහ පැටලිලි සහගත බැවින් rem භාවිතා කිරීම නිර්දේශ කෙරේ."
          ]
        },
        {
          title: "16.3 කියවීමේ පහසුව රකින රන් නීති (Readability Rules)",
          content: [
            "වෘත්තීය වෙබ් අඩවියක අකුරු කියවීමේ පහසුව සඳහා අනුගමනය කළ යුතු සම්මත:",
            "1. Line Height (පේළි පරතරය): line-height අගය 1.5 සිට 1.7 දක්වා විය යුතුය. පේළි එකිනෙක ඇලීමෙන් කියවීම අපහසු වේ.",
            "2. Line Length (පේළියක පළල): ඡේදයක එක් පේළියකට අකුරු 45 සිට 75 දක්වා තිබීම පරිපූර්ණයි (max-width: 65ch). පේළිය දිග වැඩි වූ විට ඇස වෙහෙසට පත් වේ.",
            "3. Font Hierarchy: මාතෘකා (h1, h2) සහ සාමාන්‍ය ඡේද අතර ප්‍රමාණය සහ font-weight පැහැදිලිව වෙනස් විය යුතුය.",
            "4. අකුරු වර්ග සීමා කිරීම: එකම වෙබ් අඩවියකට අකුරු වර්ග 2කට වඩා භාවිතා නොකරන්න."
          ]
        },
        {
          title: "16.4 Google Fonts සම්බන්ධ කිරීම සහ භාවිතය",
          content: [
            "Google Fonts (fonts.google.com) වෙතින් නොමිලේ අලංකාර අකුරු වෙබ් අඩවියට ලබා ගත හැක:"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML <head> Google Font Import",
              code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">`
            },
            {
              language: "css",
              title: "CSS Typography Styling Rules",
              code: `body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;       /* 16px */
  line-height: 1.65;     /* පරිපූර්ණ පේළි පරතරය */
  color: #334155;
}

h1 {
  font-size: 2.25rem;    /* 36px */
  font-weight: 700;
  line-height: 1.25;
  color: #0f172a;
  letter-spacing: -0.025em; /* Track tight for headings */
}

p {
  max-width: 65ch;       /* පේළියකට උපරිම අකුරු 65ක් */
  margin-bottom: 1.25rem;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "වෙබ් අඩවියකට අකුරු වර්ග (Fonts) 2කට වඩා භාවිතා නොකරන්න.",
        "px වෙනුවට නම්‍යශීලී rem ඒකකය භාවිතා කරන්න (1rem = 16px).",
        "line-height 1.65 ක් සහ max-width 65ch ලෙස තැබීමෙන් කියවීමේ පහසුව උපරිම වේ."
      ],
      exercises: [
        { id: 1, question: "px සහ rem අතර වෙනස පැහැදිලි කරන්න. rem වඩා හොඳ වන්නේ ඇයි?" },
        { id: 2, question: "Serif සහ Sans-serif අකුරු අතර ඇති වෙනස කුමක්ද?" }
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
        "'සෑම HTML මූලිකාංගයක්ම පෙට්ටියකි' යන මූලික සංකල්පය වටහා ගැනීම",
        "පෙට්ටි ආකෘතියේ ස්ථර 4 (Content, Padding, Border, Margin) සහ ඒවායේ වෙනස්කම්",
        "TRBL (Top, Right, Bottom, Left) ඔරලෝසු නීතිය මඟින් Shorthand ලිවීම",
        "Margin Collapse සංසිද්ධිය සහ margin: 0 auto මඟින් තිරයේ මැදට ගැනීම",
        "box-sizing: border-box මඟින් පිරිසැලසුම් වල ඇතිවන මාන බිඳවැටීම් විසඳීම"
      ],
      sections: [
        {
          title: "17.1 Box Model සංකල්පය සහ ස්ථර 4",
          content: [
            "බ්‍රවුසරයක දකින සෑම HTML මූලිකාංගයක්ම (ඡේදයක්, බොත්තමක් හෝ රූපයක් වේවා) සෘජුකෝණාස්‍රාකාර පෙට්ටියක් (Box) ලෙස සලකනු ලැබේ. මෙම පෙට්ටිය ස්ථර 4කින් සමන්විත වේ:",
            "1. Content (අන්තර්ගතය): පෙට්ටිය තුළ ඇති වටිනා අන්තර්ගතයයි (අකුරු, පින්තූර හෝ වීඩියෝ). width සහ height මඟින් පාලනය වේ.",
            "2. Padding (අභ්‍යන්තර පරතරය): අන්තර්ගතය වටා ආරක්ෂාවට තබන බුබුළු දවටන (Bubble wrap) වැනිය. අන්තර්ගතය සහ මායිම (Border) අතර ඇති හිස් ඉඩයි. පසුබිම් වර්ණය මෙයටද බලපායි.",
            "3. Border (මායිම): පෙට්ටියේ පිටත කාඩ්බෝඩ් මායිමයි. පෙට්ටියේ සීමාව වෙන් කර දක්වයි.",
            "4. Margin (බාහිර පරතරය): එක් පෙට්ටියක් තවත් පෙට්ටියක් සමඟ ගැටීම වැළැක්වීමට පෙට්ටියෙන් පිටත තබන ආරක්ෂිත පරතරයයි. මෙය සම්පූර්ණයෙන්ම විනිවිද පෙනේ (Transparent)."
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
        },
        {
          title: "17.2 TRBL Shorthand ඔරලෝසු නීතිය",
          content: [
            "Padding සහ Margin සඳහා අගයන් 4ක් ලබා දීමේදී ඔරලෝසුවේ කටු කැරකෙන දිශාව (Clockwise: Top -> Right -> Bottom -> Left) අනුගමනය කෙරේ:",
            "• අගයන් 4: padding: 10px 20px 15px 5px; (Top: 10px, Right: 20px, Bottom: 15px, Left: 5px)",
            "• අගයන් 2: padding: 20px 40px; (ඉහළ සහ පහළට 20px | දෙපැත්තට 40px)",
            "• තනි අගය: padding: 20px; (සතර දිශාවටම 20px)",
            "margin: 0 auto; නීතිය: පෙට්ටියකට ස්ථාවර width එකක් (උදා: max-width: 800px) ඇති විට, margin: 0 auto යෙදීමෙන් එම පෙට්ටිය දෙපසින් ඉතිරි වන ඉඩ සමානව බෙදී තිරයේ හරියටම මැදට (Center) පිහිටයි."
          ]
        },
        {
          title: "17.3 Margin Collapse (මායිම් බිඳවැටීම)",
          content: [
            "ඉහළින් ඇති පෙට්ටියක margin-bottom: 30px ද, පහළින් ඇති පෙට්ටියක margin-top: 20px ද තිබේ නම්, සාමාන්‍ය ගණිතයට අනුව ඒවා අතර පරතරය 50px විය යුතුය.",
            "නමුත් CSS හි සිදුවන්නේ Margin Collapse වීමයි: බ්‍රවුසරය අගයන් දෙකෙන් විශාලතම අගය (30px) පමණක් තෝරාගෙන අනෙක් අගය ඒ තුළට ගිල්වා දමයි! මෙම සංසිද්ධිය තිරස් (Horizontal) මායිම් වලදී සිදු නොවන අතර සිරස් (Vertical) මායිම් වලදී පමණක් සිදු වේ."
          ]
        },
        {
          title: "17.4 box-sizing: content-box vs border-box",
          content: [
            "• content-box (පැරණි පෙරනිමි ක්‍රමය): ඔබ width: 300px, padding: 20px, border: 5px ලබා දුන් විට, පෙට්ටියේ මුළු පළල (Total Width) = 300 + 40(padding) + 10(border) = 350px වේ! මෙය පිරිසැලසුම් කඩා වැටීමට ප්‍රධාන හේතුවක් විය.",
            "• border-box (නූතන සම්මත ක්‍රමය): ඔබ width: 300px ලබා දුන් විට, ඔබ ලබා දෙන padding සහ border සියල්ල එම 300px ඇතුළතටම අන්තර්ග්‍රහණය වේ. පෙට්ටිය පිටතට ප්‍රසාරණය නොවේ!",
            "සෑම වෘත්තීය වෙබ් අඩවියකම මුදුනේ Universal Box Sizing Reset යෙදීම අනිවාර්ය වේ:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Universal Box-Sizing Reset & Card Layout",
              code: `/* 1. Universal Box-Sizing Reset (සෑම වෙබ් අඩවියකම අනිවාර්යයි) */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 2. Container Centering */
.container {
  max-width: 1100px;
  margin: 0 auto;       /* තිරයේ තිරස් අතට හරියටම මැදට ගනී */
  padding: 0 20px;
}

/* 3. Card with proper Box Model */
.feature-card {
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;         /* අභ්‍යන්තර පරතරය */
  margin-bottom: 24px;   /* පහළ පෙට්ටිය අතර බාහිර පරතරය */
  color: #f8fafc;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "සෑම වෘත්තීය CSS ගොනුවකම ඉහළින් *, *::before, *::after { box-sizing: border-box; } යෙදීම සම්මතයයි.",
        "Padding පෙට්ටිය ඇතුළතය; Margin පෙට්ටියෙන් පිටතය.",
        "margin: 0 auto මඟින් width එකක් සහිත ඕනෑම Block පෙට්ටියක් මැදට ගත හැක."
      ],
      exercises: [
        { id: 1, question: "box-sizing: border-box සහ content-box අතර ඇති ප්‍රධාන වෙනස පැහැදිලි කරන්න." },
        { id: 2, question: "TRBL ඔරලෝසු නීතියට අනුව padding: 10px 20px 30px 40px; හි සතර දිශාවන් නම් කරන්න." }
      ]
    },
    {
      id: 18,
      volumeId: 2,
      chapterNumber: 18,
      title: "පිරිසැලසුම් මූලධර්ම - ඩිස්ප්ලේ ගුණාංගය (Display Property)",
      englishTitle: "Layout Fundamentals - Display Property",
      pageRange: "පිටු 56 - 58",
      description: "Block-level vs Inline vs Inline-block elements, display: none vs visibility: hidden vs opacity: 0, සහ element nesting rules.",
      learningObjectives: [
        "display ගුණාංගය මඟින් පිරිසැලසුම (Layout flow) තීරණය වන ආකාරය",
        "Block elements (div, p, h1) සහ Inline elements (span, a) අතර වෙනස",
        "Inline-block මඟින් එකම පේළියේ සිටින අතරම width සහ height ලබා දීම",
        "මූලිකාංගයක් සැඟවීමේ ක්‍රම (display: none vs visibility: hidden vs opacity: 0)"
      ],
      sections: [
        {
          title: "18.1 Block vs Inline vs Inline-block",
          content: [
            "HTML මූලිකාංග බ්‍රවුසරයේ හැසිරෙන මූලික ආකාර 3කි:",
            "1. Block Elements (<div>, <p>, <h1>-<h6>, <section>): තිරයේ සම්පූර්ණ පළලම (100% width) තනිව අත්පත් කර ගනී. සෑමවිටම නව පේළියකින් ආරම්භ වේ. width, height, margin, padding සියල්ල නිදහසේ පාලනය කළ හැක.",
            "2. Inline Elements (<span>, <a>, <strong>, <em>): තමන්ගේ අන්තර්ගතයට අවශ්‍ය ඉඩ පමණක් ලබා ගනී. නව පේළියකට නොයයි (වචන ගලා යන සේ එක ළඟ පිහිටයි). width සහ height ලබා දිය නොහැක! vertical margin/padding නියමිත පරිදි ක්‍රියා නොකරයි.",
            "3. Inline-block Elements (<button>, <input>, <img> හෝ display: inline-block කළ ටැග්): දෙමුහුන් (Hybrid) ක්‍රමයකි. Inline මෙන් එක ළඟ එකම පේළියේ රැඳී සිටින අතරම, Block මෙන් width, height, padding සහ margin ලබා ගැනීමේ හැකියාව ඇත."
          ]
        },
        {
          title: "18.2 Display පරිවර්තනය සහ Navigation Bar නිර්මාණය",
          content: [
            "CSS හි බලවත්ම හැකියාවක් වන්නේ Block මූලිකාංගයක් Inline බවටද, Inline මූලිකාංගයක් Block බවටද පහසුවෙන් හැරවීමට හැකි වීමයි.",
            "උදාහරණයක් ලෙස <ul> සහ <li> යනු සිරස්ව පිහිටන Block මූලිකාංග වේ. නමුත් display: inline-block හෝ display: flex යෙදීමෙන් ඒවා තිරස් (Horizontal) මෙනුවක් බවට ක්ෂණිකව පත් කළ හැක."
          ]
        },
        {
          title: "18.3 මූලිකාංග සැඟවීමේ ක්‍රම 3 (Hiding Elements)",
          content: [
            "වෙබ් පිටුවක මූලිකාංගයක් පරිශීලකයාට නොපෙනී සඟවා තැබීමට ප්‍රධාන ක්‍රම 3ක් ඇත:",
            "• display: none: මූලිකාංගය පිටුවෙන් සම්පූර්ණයෙන්ම ඉවත් වේ. එය තිබූ ඉඩකඩ පවා අතුරුදහන් වන අතර අවට ඇති අංග එම හිස්තැන වසා ගනී. Screen Readers වලටද නොකියවේ.",
            "• visibility: hidden: මූලිකාංගය නොපෙනී ගියද එය තිබූ හිස් ඉඩකඩ එලෙසම රඳවා ගනී (Ghost effect).",
            "• opacity: 0: මූලිකාංගය 100% විනිවිද පෙනේ. එය තවමත් එම ස්ථානයේම පවතින අතර click කිරීමටද හැක. CSS Transitions මඟින් Fade-in / Fade-out සජීවීකරණ සඳහා බහුලව යොදයි."
          ]
        },
        {
          title: "18.4 ප්‍රායෝගික Display Styling කේතය",
          content: [
            "පහත දැක්වෙන්නේ Inline <a> ටැග් ලස්සන Button බවට inline-block මඟින් පත් කරන ආකාරයයි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Buttons with display: inline-block",
              code: `/* a ටැගය inline බැවින් width/padding හරියට ක්‍රියා නොකරයි. 
   inline-block කිරීමෙන් එය සම්පූර්ණ බොත්තමක් බවට පත්වේ */
.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #38bdf8;
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn:hover {
  background-color: #7dd3fc;
  transform: translateY(-2px);
}

/* Dropdown Menu Item Hide/Show */
.dropdown-menu {
  display: none; /* පෙරනිමියෙන් සැඟවී ඇත */
}

.dropdown:hover .dropdown-menu {
  display: block; /* hover කළ විට මතුවෙයි */
}`
            }
          ]
        }
      ],
      keyPoints: [
        "<span> හෝ <a> ටැගයකට width, height, vertical padding ලබා දීමට නම් එය display: inline-block හෝ display: block කළ යුතුය.",
        "display: none මූලිකාංගයේ ඉඩකඩද සමඟ සම්පූර්ණයෙන්ම පිටුවෙන් ඉවත් කරයි.",
        "opacity: 0 සජීවීකරණ (Animations) සඳහා කදිම විසඳුමකි."
      ],
      exercises: [
        { id: 1, question: "Block සහ Inline මූලිකාංග අතර ඇති ප්‍රධාන වෙනස්කම් 3ක් ලියන්න." },
        { id: 2, question: "display: none සහ visibility: hidden අතර වෙනස කුමක්ද?" }
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
        "Fixed Navbars සහ Sticky Header මූලිකාංග නිවැරදිව තැනීම",
        "z-index සහ Stacking Context මඟින් ස්ථර (Layering) පාලනය කිරීම"
      ],
      sections: [
        {
          title: "19.1 Position අගයන් 5 සහ Document Flow",
          content: [
            "සාමාන්‍යයෙන් HTML මූලිකාංග ඉහළ සිට පහළට එක පෙළට ගලා යයි (Normal Document Flow). position ගුණාංගය මඟින් මෙම ප්‍රවාහය බිඳ දමා මූලිකාංග කැමති ඕනෑම තැනක රඳවා තැබිය හැක:",
            "1. static (පෙරනිමි අගය): සාමාන්‍ය ගලායාමයි. top, right, bottom, left හෝ z-index කිසිවක් ක්‍රියා නොකරයි.",
            "2. relative: මූලිකාංගය තිබූ මුල් ස්ථානයට සාපේක්ෂව top, left මඟින් චලනය කළ හැක. මුල් ස්ථානයේ තිබූ ඉඩකඩ එලෙසම රඳවා ගනී.",
            "3. absolute: Normal Flow එකෙන් සම්පූර්ණයෙන්ම ඉවත් වී, position: relative සහිත ළඟම දෙමාපිය ටැගයට සාපේක්ෂව නිශ්චිත ඛණ්ඩාංකයක පාවෙයි (Drone එකක් බිම සිට ඉහළට එසවී පාවෙනවා වැනිය).",
            "4. fixed: තිරයට (Browser Viewport) සාපේක්ෂව සිරවී පවතී. පිටුව පහළට කොතෙක් scroll කළද එකම තැන නොසෙල්වී පවතී (Chat widgets, Back to top buttons).",
            "5. sticky: relative සහ fixed දෙකෙහි එකතුවකි. පරිශීලකයා scroll කරන විට සාමාන්‍ය පරිදි ඉහළට ගොස්, නිශ්චිත සීමාවකට (උදා: top: 0) ළඟා වූ විට එතැන ඇලී පවතී (Table headers, Sticky navbars)."
          ]
        },
        {
          title: "19.2 The Golden Rule: Relative Parent සහ Absolute Child",
          content: [
            "වෙබ් නිර්මාණකරණයේ රන් නීතිය වන්නේ:",
            "'ඔබ යම් දරුවෙකු (Child) position: absolute කරන්නේ නම්, එහි දෙමාපිය ටැගය (Parent) අනිවාර්යයෙන්ම position: relative කළ යුතුය!'",
            "එසේ නොකළහොත්, එම Absolute දරුවා මුළු වෙබ් පිටුවටම (<body> ටැගයට) සාපේක්ෂව පාවී ගොස් සැලසුම සම්පූර්ණයෙන්ම අවුල් වේ."
          ],
          asciiDiagram: `┌────────────────────────────────────────┐
│ .card (position: relative)             │
│                                        │
│               ┌──────────────────────┐ │
│               │ .badge               │ │
│               │ (position: absolute; │ │
│               │  top: 10px;          │ │
│               │  right: 10px;)       │ │
│               └──────────────────────┘ │
│                                        │
└────────────────────────────────────────┘`
        },
        {
          title: "19.3 Fixed සහ Sticky Navigation Bar නිර්මාණය",
          content: [
            "වෘත්තීය වෙබ් අඩවි වල Navbar එක පරිශීලකයා පිටුව කියවන අතරතුර පහසුවෙන් භාවිත කිරීමට sticky ලෙස සකසනු ලැබේ.",
            "Sticky එකක් ක්‍රියා කිරීමට නම්: 1) position: sticky තිබිය යුතුය, 2) top, bottom, left හෝ right අගයක් අනිවාර්යයෙන්ම තිබිය යුතුය (උදා: top: 0), 3) දෙමාපිය ටැගයට overflow: hidden නොතිබිය යුතුය."
          ]
        },
        {
          title: "19.4 z-index සහ Stacking Context (ස්ථර පාලනය)",
          content: [
            "මූලිකාංග එකිනෙක මත පතිත වන විට, කුමන මූලිකාංගය ඉදිරියෙන් සහ කුමන මූලිකාංගය පසුපසින් තිබිය යුතුද යන්න z-index මඟින් තීරණය වේ.",
            "• z-index ක්‍රියා කරන්නේ position එකක් (relative, absolute, fixed, sticky) සහිත මූලිකාංග සඳහා පමණි.",
            "• වැඩි z-index අගයක් ඇති මූලිකාංගය (උදා: z-index: 50) අඩු z-index අගයක් ඇති මූලිකාංගයට (උදා: z-index: 10) වඩා පරිශීලකයාගේ ඇසට ඉදිරියෙන් පෙනේ."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Card with Floating Badge & Sticky Nav",
              code: `/* 1. Sticky Navigation Bar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100; /* පිටුවේ අනෙක් සියලු දේට වඩා ඉදිරියෙන් */
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  padding: 16px 24px;
}

/* 2. Relative Parent */
.product-card {
  position: relative;
  background-color: #1e293b;
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
}

/* 3. Absolute Child (Badge) */
.badge-discount {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #ef4444;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 10;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Absolute මූලිකාංගයක් භාවිතා කරන විට එහි දෙමාපිය ටැගයට position: relative ලබා දීමට අමතක නොකරන්න.",
        "z-index ක්‍රියාත්මක වීමට නම් අනිවාර්යයෙන්ම position එකක් (relative, absolute, fixed, sticky) තිබිය යුතුය.",
        "position: fixed මුළු තිරයට සාපේක්ෂව සිරවී පවතී."
      ],
      exercises: [
        { id: 1, question: "Fixed සහ Absolute අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "Absolute මූලිකාංගයක දෙමාපිය ටැගය Relative විය යුත්තේ ඇයි?" }
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
        "Main Axis (ප්‍රධාන අක්ෂය) සහ Cross Axis (හරස් අක්ෂය) හඳුනා ගැනීම",
        "justify-content හි සියලුම අගයන් (flex-start, center, space-between, space-evenly)",
        "align-items මඟින් සිරස් අතට පෙළගැස්වීම සහ පරිපූර්ණ Centering (1-Minute Centering)"
      ],
      sections: [
        {
          title: "20.1 Flexbox මූලධර්ම සහ Container vs Items",
          content: [
            "Flexbox හඳුන්වා දීමට පෙර වෙබ් අඩවිවල කොටස් එක ළඟින් තැබීමට float හෝ display: inline-block භාවිතා කිරීමට සිදු විය. එය ඉතාමත් සංකීර්ණ සහ දෝෂ සහිත විය.",
            "Flexbox යනු 1-Dimensional (තනි දිශාවක - පේළියක් හෝ තීරුවක් ඔස්සේ) පිරිසැලසුම් සැකසීමේ සුපිරි මෙවලමකි.",
            "• Flex Container: display: flex යෙදූ දෙමාපිය ටැගය (Parent).",
            "• Flex Items: එම දෙමාපිය ටැගය තුළ සෘජුවම ඇති දරුවන් (Direct children). ඔවුන් එක පෙළට පෙළගැසේ."
          ]
        },
        {
          title: "20.2 Main Axis සහ Cross Axis සංකල්පය",
          content: [
            "Flexbox ක්‍රියාත්මක වන ප්‍රධාන අක්ෂ දෙකක් ඇත:",
            "1. Main Axis (ප්‍රධාන අක්ෂය): flex-direction අනුව තීරණය වේ. පෙරනිමියෙන් flex-direction: row (වමේ සිට දකුණට) වේ. flex-direction: column කළ විට ප්‍රධාන අක්ෂය ඉහළ සිට පහළට හැරේ.",
            "2. Cross Axis (හරස් අක්ෂය): Main Axis එකට ලම්බකව (90 ಡಿഗ്രියෙන්) පිහිටන අක්ෂයයි. row වලදී එය සිරස් අක්ෂය වේ.",
            "flex-wrap: nowrap (පෙරනිමි - සියලු දරුවන් එකම පේළියේ හැකිලී සිටී) | wrap (ඉඩ මදි වූ විට ඊළඟ පේළියට වැටේ)."
          ],
          asciiDiagram: `flex-direction: row (පෙරනිමි):
────────────────── Main Axis (තිරස්) ──────────────────►
│ [ Item 1 ]  [ Item 2 ]  [ Item 3 ]
▼ Cross Axis (සිරස්)`
        },
        {
          title: "20.3 justify-content සහ align-items",
          content: [
            "• justify-content (Main Axis ඔස්සේ පෙළගැස්වීම):",
            "  - flex-start: මුලට පෙළගැස්වීම (වමේ කෙළවරට).",
            "  - center: තිරස් අතට හරියටම මැදට ගැනීම.",
            "  - flex-end: අගට පෙළගැස්වීම (දකුණු කෙළවරට).",
            "  - space-between: පළමු සහ අවසාන අයිතම දෙකෙළවරට තබා ඉතිරි ඉඩ සමානව බෙදීම (Navbar සඳහා පරිපූර්ණයි!).",
            "  - space-around & space-evenly: සියලු අයිතම අතර සහ දෙපස සමාන හිස් ඉඩ තැබීම.",
            "• align-items (Cross Axis ඔස්සේ පෙළගැස්වීම):",
            "  - stretch (පෙරනිමි): පෙට්ටියේ සම්පූර්ණ උසට ඇදීම.",
            "  - center: සිරස් අතට හරියටම මැදට ගැනීම.",
            "  - flex-start / flex-end: ඉහළට හෝ පහළට පෙළගැස්වීම.",
            "• gap: අයිතම අතර පරතරය තැබීම (උදා: gap: 16px)."
          ]
        },
        {
          title: "20.4 Perfect Centering සහ Responsive Navbar කේතය",
          content: [
            "පහත දැක්වෙන්නේ Flexbox මඟින් ඕනෑම දෙයක් මැදට ගන්නා ආකාරය සහ වෘත්තීය Navbar එකක් සාදන ආකාරයයි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "1-Minute Perfect Centering",
              code: `.center-hero {
  display: flex;
  justify-content: center; /* Main Axis මැදට */
  align-items: center;     /* Cross Axis මැදට */
  min-height: 80vh;
}`
            },
            {
              language: "css",
              title: "Professional Responsive Flexbox Navbar",
              code: `.navbar {
  display: flex;
  justify-content: space-between; /* ලෝගෝව වමට, මෙනුව දකුණට */
  align-items: center;            /* සිරස්ව එකම උසට */
  padding: 16px 32px;
  background-color: #0f172a;
  border-bottom: 1px solid #1e293b;
}

.nav-links {
  display: flex;
  gap: 24px;                      /* මෙනු අතර පරතරය */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #38bdf8;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "display: flex; නොමැතිව කිසිදු Flexbox ගුණාංගයක් ක්‍රියා නොකරයි.",
        "justify-content ප්‍රධාන අක්ෂයද (Main axis), align-items හරස් අක්ෂයද (Cross axis) පාලනය කරයි.",
        "space-between මඟින් Logo සහ Menu දෙකෙළවරට තැබීම වෙබ් සම්මතයයි."
      ],
      exercises: [
        { id: 1, question: "justify-content සහ align-items අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "flex-direction: column කළ විට Main Axis එක කුමන දිශාවට හැරේද?" }
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
        "flex-grow මඟින් ඉතිරි ඉඩ බෙදා ගන්නා ආකාරය ගණිතමය වශයෙන් තේරුම් ගැනීම",
        "flex-shrink: 0 මඟින් වැදගත් අයිතම හැකිලීම (Squishing) වැළැක්වීම",
        "align-self මඟින් තනි අයිතමයක පිහිටීම පමණක් වෙනස් කිරීම",
        "order ගුණාංගය මඟින් HTML කේතය වෙනස් නොකර පෙනෙන පිළිවෙල මාරු කිරීම"
      ],
      sections: [
        {
          title: "21.1 flex-grow: ඉතිරි ඉඩ බෙදා ගැනීම",
          content: [
            "දෙමාපිය පෙට්ටිය තුළ අයිතම පිහිටුවා අවසන් වූ පසු අමතර හිස් ඉඩක් (Available free space) ඉතිරි වේ නම්, එම ඉඩ අයිතම අතර බෙදා දීමට flex-grow යොදයි.",
            "• flex-grow: 0 (පෙරනිමි): අයිතමය ප්‍රසාරණය නොවේ.",
            "• flex-grow: 1: ඉතිරි ඉඩ සමානව ලබා ගනී.",
            "• අයිතම 3ක් ඇති විට එකකට flex-grow: 2 ද, අනෙක් දෙකට flex-grow: 1 ද දුනහොත්, මුළු ඉඩ කොටස් 4කට බෙදා (2+1+1), පළමු අයිතමයට අමතර ඉඩෙන් 50%ක්ද, අනෙක් දෙකට 25% බැගින්ද හිමි වේ!"
          ]
        },
        {
          title: "21.2 flex-shrink: හැකිලීම පාලනය කිරීම",
          content: [
            "තිරය කුඩා වන විට අයිතම තිරය තුළ තබා ගැනීමට ඒවා හැකිලීමට (Shrink) සිදු වේ.",
            "• flex-shrink: 1 (පෙරනිමි): තිරය මදි වන විට අයිතම හැකිලේ.",
            "• flex-shrink: 0 (රන් රහස!): අයිතමය කිසිම අවස්ථාවක හැකිලීමෙන් තොරව එහි නියමිත පළලෙන්ම රඳවා ගනී. විශේෂයෙන් Profile Avatar පින්තූර, Icons, හෝ Badges හැකිලී විකෘති වීම වැළැක්වීමට flex-shrink: 0 අනිවාර්යයෙන්ම යොදයි."
          ]
        },
        {
          title: "21.3 flex-basis සහ Ultimate flex Shorthand",
          content: [
            "• flex-basis: අයිතමය ප්‍රසාරණය වීමට හෝ හැකිලීමට පෙර එහි තිබිය යුතු මූලික ආරම්භක ප්‍රමාණයයි (Initial default size). width ගුණාංගය වැනිය.",
            "වෘත්තීය කේතකරණයේදී ඉහත තුනම එකට ලියන Shorthand එක භාවිතා කරනු ලැබේ:",
            "flex: [grow] [shrink] [basis];",
            "උදාහරණ: flex: 1 1 0; (සියලු අයිතම සමාන පළලකින් යුතුව සමබරව තැබීමට බහුලවම භාවිත වේ)."
          ]
        },
        {
          title: "21.4 align-self සහ order ගුණාංග",
          content: [
            "• align-self: දෙමාපිය ටැගයේ align-items නීතිය නොසලකා, එක් විශේෂිත දරුවෙකුට පමණක් වෙනස් සිරස් පිහිටීමක් ලබා දීමට යොදයි (උදා: align-self: flex-end;).",
            "• order: HTML කේතයේ ස්ථානය වෙනස් නොකර, CSS මඟින් තිරයේ පෙනෙන අනුපිළිවෙල මාරු කළ හැක. Mobile View වලදී Sidebars හෝ Images ඉහළට ගැනීමට මෙය අතිශය ප්‍රයෝජනවත් වේ."
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Card with Fixed Avatar & Flexible Body",
              code: `.media-object {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Avatar පින්තූරය කිසිවිටෙක හැකිලෙන්නේ නැත */
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  flex-shrink: 0; 
}

/* විස්තර කොටස ඉතිරි සම්පූර්ණ ඉඩ ලබා ගනී */
.content {
  flex-grow: 1;
}

/* බොත්තම පමණක් දකුණු කෙළවරට තල්ලු වේ */
.action-btn {
  align-self: flex-end;
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Avatar සහ Icon හැකිලී විකෘති වීම වැළැක්වීමට flex-shrink: 0; යොදන්න.",
        "flex: 1; යෙදූ විට අයිතමය ඉතිරි සියලු හිස් ඉඩ අත්පත් කර ගනී.",
        "order ගුණාංගය මඟින් HTML කේතය නොකැඩී පෙනුම පමණක් වෙනස් කළ හැක."
      ],
      exercises: [
        { id: 1, question: "flex-shrink: 0 යෙදීමේ ප්‍රධාන ප්‍රායෝගික වාසිය කුමක්ද?" },
        { id: 2, question: "flex: 1 0 200px; යන්නෙහි කොටස් 3 පැහැදිලි කරන්න." }
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
        "Flexbox (1D - තනි පේළියක්) සහ CSS Grid (2D) අතර පැහැදිලි වෙනස",
        "fr (Fractional Unit) නූතන ඒකකය සහ repeat(), minmax() ශ්‍රිත භාවිතය",
        "Media Queries නොමැතිව සම්පූර්ණයෙන්ම Responsive වන auto-fit Grid සෑදීම",
        "grid-template-areas මඟින් සිතියමක් අඳින්නාක් මෙන් Layout එකක් සෑදීම"
      ],
      sections: [
        {
          title: "22.1 Flexbox vs CSS Grid (1D vs 2D)",
          content: [
            "• Flexbox (1-Dimensional): තනි අක්ෂයක් (පේළියක් හෝ තීරුවක්) ඔස්සේ අන්තර්ගතය පෙළගැස්වීමට සුදුසුයි (Navbar, බොත්තම් සමූහ, සරල ලැයිස්තු). අන්තර්ගතය අනුව හැඩය තීරණය වේ (Content-first).",
            "• CSS Grid (2-Dimensional): එකවර පේළි (Rows) සහ තීරු (Columns) දෙකම පාලනය කරන ප්‍රබල පද්ධතියකි. මුළු පිටුවේ ප්‍රධාන සැකිල්ල, ඡායාරූප ගැලරි, Dashboard පිරිසැලසුම් සඳහා කදිමයි (Layout-first)."
          ],
          asciiDiagram: `Flexbox (1D):  [ Item 1 ] [ Item 2 ] [ Item 3 ] (තනි පේළියක්)

CSS Grid (2D): ┌──────────┬──────────┬──────────┐
               │ Header   │ Header   │ Header   │ (පේළි සහ
               ├──────────┼──────────┼──────────┤  තීරු දෙකම
               │ Sidebar  │ Main     │ Main     │  එකට පාලනය
               └──────────┴──────────┴──────────┘  වේ)`
        },
        {
          title: "22.2 Grid Container, fr ඒකකය සහ repeat()",
          content: [
            "• display: grid: දෙමාපිය ටැගය Grid Container එකක් බවට පත් කරයි.",
            "• grid-template-columns: තීරු වල පළල තීරණය කරයි (උදා: 200px 1fr 2fr).",
            "• fr (Fractional Unit): Grid සඳහාම ආවේණික වූ නවීන ඒකකයකි. ඉතිරි වන මුළු ඉඩෙන් භාගික කොටස් නිරූපණය කරයි.",
            "• repeat() ශ්‍රිතය: සමාන තීරු කිහිපයක් නැවත නැවත ලිවීම වෙනුවට repeat(3, 1fr) මඟින් සමාන තීරු 3ක් තනි පියවරකින් සාදාගත හැක.",
            "• gap: පේළි සහ තීරු අතර පරතරය තැබීම (උදා: gap: 24px)."
          ]
        },
        {
          title: "22.3 The Magic Responsive Grid (auto-fit & minmax)",
          content: [
            "සාමාන්‍යයෙන් වෙබ් පිටුවක් ජංගම දුරකථනයට ගැලපීමට Media Queries ලිවීමට සිදු වේ. නමුත් CSS Grid වල ඇති එක් මැජික් කේත පේළියකින් Media Queries රහිතවම ඕනෑම තිරයකට ගැලපෙන Responsive Card Grid එකක් සෑදිය හැක:",
            "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));",
            "තේරුම: 'තිරය තුළ රැඳවිය හැකි උපරිම කාඩ්පත් ගණන රඳවන්න (auto-fit). එක් කාඩ්පතක අවම පළල 280px විය යුතු අතර (minmax), ඉතිරි ඉඩ ඇත්නම් 1fr බැගින් සමානව විශාල වන්න!'"
          ]
        },
        {
          title: "22.4 Grid Areas මඟින් සම්පූර්ණ පිටු පිරිසැලසුම",
          content: [
            "grid-template-areas මඟින් CSS තුළම වෙබ් පිටුවේ සැලසුම සිතියමක් සේ ඇඳ දැක්විය හැක:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Responsive Card Grid without Media Queries",
              code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  background-color: #1e293b;
  border-radius: 12px;
  padding: 20px;
}`
            },
            {
              language: "css",
              title: "Full Page Layout with Grid Areas",
              code: `.app-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 260px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`
            }
          ]
        }
      ],
      keyPoints: [
        "පිටුවේ ප්‍රධාන බාහිර සැකිල්ල (Outer layout) සඳහා Grid ද, ඇතුළත කුඩා කොටස් සඳහා Flexbox ද භාවිතා කරන්න.",
        "repeat(auto-fit, minmax(280px, 1fr)) මඟින් Media Query නොමැතිව පරිපූර්ණ Responsive Grids සෑදිය හැක.",
        "fr ඒකකය ඉතිරි ඉඩ සමානුපාතිකව බෙදා දීමට උපකාරී වේ."
      ],
      exercises: [
        { id: 1, question: "Flexbox සහ CSS Grid අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "repeat(auto-fit, minmax(250px, 1fr)) හි තේරුම පැහැදිලි කරන්න." }
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
        "Media Queries ලියන රටාව සහ සම්මත Breakpoints (480px, 768px, 1024px, 1280px)",
        "Mobile-First ප්‍රවේශය සහ min-width භාවිතයේ වාසි",
        "Responsive Images (max-width: 100%) සහ Responsive Layout Patterns"
      ],
      sections: [
        {
          title: "23.1 Viewport Meta Tag සහ RWD මූලධර්ම",
          content: [
            "ජංගම දුරකථනයක තිරය කුඩා බැවින්, පරිගණක වෙබ් අඩවියක් එහි පෙන්වීමේදී බ්‍රවුසරය මුළු පිටුවම හැකිළීමකට (Zoom-out) ලක් කරයි. එවිට අකුරු කූඹින් මෙන් කුඩා වී කියවීමට නොහැකි වේ.",
            "මෙය විසඳීමට HTML හි <head> තුළ Viewport Meta Tag එක යෙදීම අත්‍යවශ්‍ය වේ:",
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            "මෙමගින් බ්‍රවුසරයට පවසන්නේ: 'වෙබ් පිටුවේ පළල දුරකථනයේ සැබෑ තිරයේ පළලට සමාන කරන්න, කිසිදු Zoom-out එකක් නොකර 1:1 අනුපාතයෙන් පෙන්වන්න!'"
          ]
        },
        {
          title: "23.2 Media Queries සහ කර්මාන්ත සම්මත Breakpoints",
          content: [
            "Media Query යනු තිරයේ පළල (Screen width) අනුව විවිධ CSS නීති ක්‍රියාත්මක කරන කොන්දේසි ප්‍රකාශයකි (If-condition in CSS):",
            "• Mobile (ජංගම දුරකථන): 320px - 480px (සාමාන්‍යයෙන් පෙරනිමි Base CSS වේ)",
            "• Tablets (ටැබ්ලට් පරිගණක): 481px - 768px (උදා: @media (min-width: 768px))",
            "• Laptops (ලැප්ටොප්): 769px - 1024px (උදා: @media (min-width: 1024px))",
            "• Desktop & Ultra-wide: 1025px - 1280px+"
          ],
          asciiDiagram: `┌───────────────┐
│ Mobile (<768) │ ──► Column Layout (තනි තීරුවක්)
└───────────────┘
┌───────────────────────────────┐
│ Tablet & Desktop (>= 768px)   │ ──► Multi-column Grid (තීරු 2 හෝ 3ක්)
└───────────────────────────────┘`
        },
        {
          title: "23.3 Mobile-First ප්‍රවේශය (The Modern Standard)",
          content: [
            "• Desktop-First (පැරණි ක්‍රමය): පරිගණකයට ලියා max-width මඟින් කුඩා තිර සඳහා නීති අතිච්ඡාදනය කිරීම.",
            "• Mobile-First (නවීන ප්‍රශස්ත ක්‍රමය): කිසිදු Media Query එකකින් තොරව ජංගම දුරකථනයට සුදුසු තනි තීරුවේ කේත මුලින්ම ලියනු ලැබේ. ඉන්පසු තිරය පළල් වන විට min-width: 768px සහ min-width: 1024px මඟින් තීරු 2ක් හෝ 3ක් බවට පත් කෙරේ.",
            "වාසි: ජංගම දුරකථන වල CPU එකට බරක් නොවන අතර වෙබ් අඩවිය අකුණු වේගයෙන් Load වේ. Google Search Ranking ඉහළ යයි."
          ]
        },
        {
          title: "23.4 Responsive Images සහ Layout කේතය",
          content: [
            "පින්තූරයක් කිසිවිටෙකත් තිරයේ සීමාවෙන් පිටතට පැන තිරය කඩා දැමීම වැළැක්වීමට මෙම නීතිය යොදන්න:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Responsive Images & Mobile-First Media Queries",
              code: `/* 1. Fluid Responsive Images (සෑමවිටම භාවිතා කරන්න) */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 2. Base Style: Mobile-First (තනි තීරුව) */
.content-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
}

/* 3. Tablet (768px+) - තීරු 2ක් */
@media screen and (min-width: 768px) {
  .content-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    flex: 1 1 calc(50% - 20px);
  }
}

/* 4. Desktop (1024px+) - තීරු 3ක් */
@media screen and (min-width: 1024px) {
  .card {
    flex: 1 1 calc(33.333% - 20px);
  }
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Viewport Meta Tag එක නොමැතිව කිසිදු Media Query එකක් ජංගම දුරකථන වල නිවැරදිව ක්‍රියා නොකරයි.",
        "Mobile-First ක්‍රමයේදී min-width භාවිත කරමින් කුඩා තිරයේ සිට විශාල තිර දක්වා සැලසුම වැඩිදියුණු කරන්න.",
        "Fixed width (උදා: width: 1000px) යෙදීමෙන් වළකින්න; max-width හෝ ප්‍රතිශත (%) භාවිතා කරන්න."
      ],
      exercises: [
        { id: 1, question: "Viewport Meta Tag එකෙහි ඇති වැදගත්කම කුමක්ද?" },
        { id: 2, question: "min-width සහ max-width අතර වෙනස පැහැදිලි කරන්න." }
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
        "CSS Variables මඟින් තනි පියවරකින් Dark Mode සහ Theme Switching ක්‍රියාත්මක කිරීම",
        "BEM නාමකරණ ක්‍රමය (Block__Element--Modifier) මඟින් කේතය පිරිසිදුව තබා ගැනීම",
        "DRY (Don't Repeat Yourself) මූලධර්මය සහ Maintainable CSS"
      ],
      sections: [
        {
          title: "24.1 CSS Custom Properties (:root සහ var())",
          content: [
            "සාමාන්‍ය CSS හි එකම වර්ණ කේතය (උදා: #38bdf8) පිටු 50ක තැන් 200ක ලිවීමට සිදුවුවහොත්, එම වර්ණය වෙනස් කිරීමට සම්පූර්ණ ගොනුවම සෙවීමට සිදු වේ.",
            "CSS Variables මඟින් එම වර්ණය තනි ස්ථානයක ගබඩා කර (Design Token) අවශ්‍ය ඕනෑම තැනක නැවත නැවත භාවිත කළ හැක.",
            "• ප්‍රකාශ කිරීම: :root { --primary-color: #38bdf8; } (-- පෙර යොදන්න)",
            "• භාවිතය: color: var(--primary-color);",
            "• Fallback අගය: var(--custom-color, #ffffff) (විචල්‍යය නොමැති නම් ක්‍රියාත්මක වන අගය)."
          ]
        },
        {
          title: "24.2 Theme Switching සහ Instant Dark Mode",
          content: [
            "නූතන වෙබ් අඩවි වල Dark Mode සැකසීමට CSS Variables භාවිතය අතිවිශිෂ්ට වේ. HTML ගොනුවේ කිසිදු Class එකක් වෙනස් නොකර, :root තුළ ඇති විචල්‍යයන් පමණක් Dark Mode වලදී වෙනස් කිරීමෙන් මුළු වෙබ් අඩවියම Dark Mode බවට පත් වේ!"
          ]
        },
        {
          title: "24.3 BEM නාමකරණ සම්මුතිය (Block__Element--Modifier)",
          content: [
            "විශාල ව්‍යාපෘති වලදී Class Names එකිනෙක ගැටී විනාශ වීම වැළැක්වීමට ලොව පුරා ඉංජිනේරුවන් භාවිතා කරන ක්‍රමය BEM වේ:",
            "• Block (ස්වාධීන සංරචකය): .card, .navbar, .btn",
            "• Element (Block එක ඇතුළත ඇති අනු කොටස - __ මඟින් වෙන් කරයි): .card__title, .card__image, .card__btn",
            "• Modifier (හැසිරීම හෝ වර්ණය වෙනස් කිරීම - -- මඟින් වෙන් කරයි): .card--featured, .btn--primary, .btn--large"
          ]
        },
        {
          title: "24.4 ප්‍රායෝගික Dark Mode සහ BEM කේතය",
          content: [
            "පහත දැක්වෙන්නේ CSS Variables සහ BEM සම්මතය භාවිතයෙන් ලියූ පිරිසිදු කේතයකි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "CSS Variables, Dark Mode & BEM",
              code: `/* 1. Global Design Tokens (Light Theme) */
:root {
  --bg-main: #f8fafc;
  --bg-card: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --accent: #0284c7;
  --radius: 12px;
}

/* 2. Dark Theme Overrides */
[data-theme="dark"], @media (prefers-color-scheme: dark) {
  :root {
    --bg-main: #020617;
    --bg-card: #0f172a;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent: #38bdf8;
  }
}

/* 3. BEM Structure */
.product-card {
  background-color: var(--bg-card);
  border-radius: var(--radius);
  padding: 24px;
}

.product-card__title {
  color: var(--text-main);
  font-size: 1.25rem;
}

.product-card__btn--highlight {
  background-color: var(--accent);
  color: #ffffff;
}`
            }
          ]
        }
      ],
      keyPoints: [
        ":root යනු HTML හි ඉහළම මට්ටමයි (Global scope).",
        "BEM ක්‍රමය (card__title, btn--primary) මඟින් විශාල කණ්ඩායම් වලදී කේතය අවුල් වීම වළක්වයි.",
        "DRY (Don't Repeat Yourself) පිළිපැදීමෙන් කේතය නඩත්තු කිරීම පහසු වේ."
      ],
      exercises: [
        { id: 1, question: "CSS විචල්‍යයක් ප්‍රකාශ කිරීමේදී නමේ මුලට යොදන අක්ෂර 2 කුමක්ද?" },
        { id: 2, question: "BEM සම්මුතියට අනුව Element සහ Modifier වෙන් කිරීමට යොදන සලකුණු මොනවාද?" }
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
        "මෙතෙක් උගත් සියලුම CSS සංකල්ප (Box Model, Flexbox, Grid, Positioning, Responsive) ඒකාබද්ධ කිරීම",
        "Sticky Glassmorphic Navigation Bar එකක් නිර්මාණය කිරීම",
        "@keyframes fade-in සජීවීකරණ සහිත Hero Section එකක් සැකසීම",
        "Responsive Card Grid මඟින් Projects ප්‍රදර්ශනය කිරීම",
        "Micro-interactions: Hover states, button transitions, සහ clean typography"
      ],
      sections: [
        {
          title: "25.1 පෝට්ෆෝලියෝ ව්‍යාපෘති සැලසුම",
          content: [
            "පෝට්ෆෝලියෝවක් යනු වෙබ් සංවර්ධකයෙකුගේ (Web Developer) පළමු හැඳුනුම්පතයි. Freelancing හෝ රැකියාවකට අයදුම් කරන විට සේවාදායකයා බලන්නේ මෙම වෙබ් අඩවියයි.",
            "මෙම ව්‍යාපෘතියේ අඩංගු ප්‍රධාන කොටස්:",
            "1. Header & Sticky Nav: Flexbox මඟින් සැකසූ, scroll කිරීමේදී තිරයේ ඉහළ රැඳෙන මෙනුව.",
            "2. Hero Section: පරිශීලකයාගේ අවධානය දිනාගන්නා ප්‍රධාන සිරස්තලය සහ Call To Action බොත්තම.",
            "3. Skills Section: CSS Grid මඟින් සැකසූ තාක්ෂණ කුසලතා ලාංඡන.",
            "4. Featured Projects: සුඛෝපභෝගී Hover Effects සහිත ව්‍යාපෘති කාඩ්පත්.",
            "5. Contact & Socials: සම්බන්ධ වීමේ පෝරමය සහ සමාජ මාධ්‍ය සබැඳි."
          ]
        },
        {
          title: "25.2 Sticky Glassmorphic Navbar සහ Hero සජීවීකරණ",
          content: [
            "Hero Section එක පිටුව විවෘත වන විට මෘදුව ඉහළට පාවී එන Fade-in animation එකක් සහිතව ගොඩනැගිය හැක."
          ]
        },
        {
          title: "25.3 Featured Projects Grid සහ Hover Effects",
          content: [
            "පරිශීලකයා කාඩ්පතක් මතට මවුසය ගෙන යන විට (Hover), කාඩ්පත මදක් ඉහළට එසවී (transform: translateY(-8px)), සෙවණැල්ල තීව්‍ර වන විට වෙබ් අඩවියට ඉතා උසස් සජීවී බවක් එකතු වේ."
          ]
        },
        {
          title: "25.4 පූර්ණ Portfolio CSS මෝස්තර කේතය",
          content: [
            "මෙම සම්පූර්ණ කේතය ඔබේ ව්‍යාපෘතියට කෙලින්ම යොදාගත හැක:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Complete Portfolio Core Stylesheet",
              code: `/* Reset & Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #090d16;
  color: #f1f5f9;
  line-height: 1.6;
}

/* 1. Sticky Glass Navbar */
.nav-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8%;
  background: rgba(9, 13, 22, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* 2. Hero Section with Keyframe Animation */
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  animation: heroFadeIn 0.8s ease-out;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 3. Project Cards Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 60px 8%;
}

.project-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: #38bdf8;
  box-shadow: 0 20px 25px -5px rgba(56, 189, 248, 0.15);
}`
            }
          ]
        }
      ],
      keyPoints: [
        "වෘත්තීය පෝට්ෆෝලියෝවක වේගය (Performance) සහ ප්‍රතිචාරාත්මක බව (Responsiveness) ප්‍රමුඛ වේ.",
        "Hover Transitions යෙදීමේදී සැමවිටම 0.2s - 0.3s අතර කාලයක් ලබා දෙන්න; එය පරිශීලකයාට සුමට බවක් ගෙනදෙයි.",
        "අකුරු සහ පසුබිම අතර Contrast එක WCAG AA ප්‍රමිතියට අනුකූල විය යුතුය."
      ],
      exercises: [
        { id: 1, question: "කාඩ්පතක් Hover කළ විට සුමටව එසවීමට යොදන CSS ගුණාංගය කුමක්ද?" },
        { id: 2, question: "Sticky Navigation Bar එකක් සඳහා අත්‍යවශ්‍ය CSS ගුණාංග මොනවාද?" }
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
        "බ්‍රවුසරය CSS කියවන අභ්‍යන්තර ක්‍රියාවලිය (Reflow, Repaint, Composite)",
        "CPU කාර්යක්ෂමතාව ඉහළ නැංවීම: transform සහ opacity පමණක් සජීවීකරණය කිරීම",
        "Modern CSS Math: clamp(min, val, max), min(), max(), සහ Fluid Typography",
        "aspect-ratio මඟින් වීඩියෝ සහ පින්තූර Layout Shift (CLS) වැළැක්වීම",
        "::before සහ ::after මඟින් අමතර HTML නොමැතිව උසස් නිර්මාණ සැකසීම"
      ],
      sections: [
        {
          title: "26.1 Browser Rendering Engine (Reflow vs Repaint vs Composite)",
          content: [
            "වෙබ් පිටුවක් තිරයේ ඇඳීමට බ්‍රවුසරය පියවර 3ක් අනුගමනය කරයි:",
            "1. Reflow (Layout): මූලිකාංගවල පිහිටීම සහ ප්‍රමාණය (width, height, margin, top) ගණනය කිරීම. මෙහි වෙනසක් වූ විට මුළු පිටුවේම පෙට්ටි නැවත ගණනය කිරීමට සිදු වේ (ඉතා මන්දගාමී වේ).",
            "2. Repaint (Paint): වර්ණ, සෙවණැලි (color, background, box-shadow) තිරයේ තීන්ත ආලේප කිරීම.",
            "3. Composite (GPU acceleration): ස්ථර එකිනෙක මත තැබීම (transform සහ opacity).",
            "Golden Rule: සජීවීකරණ වලදී top, left වෙනුවට සැමවිටම transform: translate() සහ width වෙනුවට transform: scale() භාවිතා කරන්න! එය GPU එකෙන් 60fps සුමටව ධාවනය වේ."
          ]
        },
        {
          title: "26.2 Modern CSS Math: clamp() සහ Fluid Typography",
          content: [
            "Media Queries 10ක් ලිවීම වෙනුවට clamp() එක මඟින් තිරයේ ප්‍රමාණය අනුව ස්වයංක්‍රීයව අකුරු ප්‍රමාණය විශාල හෝ කුඩා වන Fluid Typography සෑදිය හැක:",
            "clamp(අවම අගය, සාපේක්ෂ අගය, උපරිම අගය);",
            "උදාහරණ: font-size: clamp(1.5rem, 3vw + 1rem, 3.5rem);",
            "කුඩා දුරකථන වලදී 1.5rem ට වඩා කුඩා නොවේ. විශාල මොනිටර වලදී 3.5rem ට වඩා විශාල නොවේ. අතරමැද තිර වලදී 3vw අනුපාතයට සුමටව ප්‍රමාණය වෙනස් වේ!"
          ]
        },
        {
          title: "26.3 aspect-ratio මඟින් Cumulative Layout Shift (CLS) වැළැක්වීම",
          content: [
            "වෙබ් අඩවියක් Load වන විට පින්තූර පසුව පැමිණ පිටුවේ ඇති අකුරු එක්වරම පහළට පැනීම ඔබ දැක ඇත (Layout Shift). Google විසින් මෙවැනි අඩවි වල Search Rank පහත දමයි.",
            "aspect-ratio: 16 / 9; යෙදීමෙන් පින්තූරය Load වීමටත් පෙරම එහි නියමිත ඉඩකඩ වෙන් කර තබන බැවින් කිසිදු පැනීමක් සිදු නොවේ."
          ]
        },
        {
          title: "26.4 Pseudo-elements (::before, ::after) මඟින් උසස් Effects",
          content: [
            "HTML කේතයට අමතර <div> ටැග් නොදමා, CSS මඟින්ම බොත්තම් වල දිලිසෙන ආලෝක ධාරා (Glow effects) හෝ Tooltips සැකසීමට ::before සහ ::after යොදයි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "High Performance CSS: clamp(), aspect-ratio & ::after",
              code: `/* 1. Fluid Title */
.fluid-title {
  font-size: clamp(2rem, 5vw + 1rem, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
}

/* 2. Responsive Video Container without layout jump */
.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
}

/* 3. Glowing Button using ::after (GPU Accelerated) */
.glow-btn {
  position: relative;
  padding: 14px 28px;
  background: #38bdf8;
  color: #0f172a;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
}

.glow-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #38bdf8;
  border-radius: 8px;
  z-index: -1;
  filter: blur(14px);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.glow-btn:hover::after {
  opacity: 0.8;
  transform: scale(1.08); /* CPU එක නොව GPU එක භාවිත කරයි */
}`
            }
          ]
        }
      ],
      keyPoints: [
        "සජීවීකරණ සඳහා සැමවිටම transform සහ opacity පමණක් යොදන්න; එය 60fps සුමට බවක් ලබා දෙයි.",
        "clamp() මඟින් Media Query නොමැතිව තිරයේ ප්‍රමාණයට ගැලපෙන අකුරු නිර්මාණය කළ හැක.",
        "aspect-ratio මඟින් CLS (Cumulative Layout Shift) ගැටලුව සම්පූර්ණයෙන්ම විසඳයි."
      ],
      exercises: [
        { id: 1, question: "Reflow සහ Repaint අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "clamp(1rem, 2.5vw, 2.5rem) හි අගයන් තුනෙන් අදහස් වන්නේ කුමක්ද?" }
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
        "box-shadow ගුණාංගය මඟින් වෙබ් අඩවියට ස්ථර සහ 3D ගැඹුරක් ලබා දීම",
        "නූතන වෙබ් නිර්මාණයේ ඉතා ජනප්‍රිය Glassmorphism (වීදුරු පෙනුම) නිර්මාණය කිරීම",
        "backdrop-filter සහ සාමාන්‍ය filter අතර ඇති වෙනස හඳුනා ගැනීම",
        "object-fit: cover සහ object-position මඟින් පින්තූර විකෘති නොවී පාලනය කිරීම",
        "Modern CSS Reset මඟින් බ්‍රවුසර පෙරනිමි අගයන් පිරිසිදු කිරීම"
      ],
      sections: [
        {
          title: "27.1 Multi-Layer Elevation & Shadow Mastery",
          content: [
            "සරල තනි සෙවණැල්ලක් වෙනුවට ස්ථර 2කින් හෝ 3කින් යුත් Multi-layer Shadows යෙදීමෙන් සැබෑ ලෝකයේ මෙන් ස්වභාවික ආලෝක පරාවර්තනයක් ලැබේ:",
            "box-shadow: [offset-x] [offset-y] [blur-radius] [spread-radius] [color];",
            "උදා: box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); (Tailwind shadow-md)"
          ]
        },
        {
          title: "27.2 Glassmorphism (නූතන වීදුරු පෙනුම) නිර්මාණය",
          content: [
            "Apple, Microsoft සහ නවීන වෙබ් අඩවි වල දකින Glassmorphism හි රහස් 4:",
            "1. Semi-transparent පසුබිම: background: rgba(255, 255, 255, 0.08);",
            "2. පසුපස බොඳ කිරීම: backdrop-filter: blur(16px); (-webkit-backdrop-filter ද එක් කරන්න)",
            "3. ලා පැහැති දිලිසෙන මායිම: border: 1px solid rgba(255, 255, 255, 0.15);",
            "4. මෘදු සෙවණැල්ල: box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);"
          ],
          asciiDiagram: `[ පසුබිම් රූපය හෝ අන්තර්ගතය ]
               │
┌──────────────┴──────────────┐
│  Glass Panel                │
│  • rgba(255, 255, 255, 0.08)│
│  • backdrop-filter: blur    │ ──► සුඛෝපභෝගී වීදුරු පෙනුම
│  • 1px subtle border        │
└─────────────────────────────┘`
        },
        {
          title: "27.3 CSS Filters (දෘශ්‍ය පෙරහන්)",
          content: [
            "Photoshop නොමැතිව CSS මඟින්ම පින්තූර වෙනස් කිරීමට filter යොදයි:",
            "• grayscale(100%): පින්තූරය කළු-සුදු කරයි (Client Logos සඳහා hover කළ විට පාට වීමට බහුලව භාවිත වේ).",
            "• blur(5px): බොඳ කිරීම.",
            "• brightness(120%): දීප්තිය වැඩි කිරීම.",
            "• contrast(110%): වෙනස වැඩි කිරීම.",
            "• drop-shadow(): විනිවිද පෙනෙන PNG පින්තූර වල හැඩයටම සෙවණැලි දැමීම."
          ]
        },
        {
          title: "27.4 object-fit සහ Modern Professional CSS Reset",
          content: [
            "• object-fit: cover; - පින්තූරයේ aspect ratio එක විකෘති නොවී පෙට්ටිය සම්පූර්ණයෙන් ආවරණය කරයි.",
            "• object-position: center; - පින්තූරයේ කේන්ද්‍රය මුල් කරගෙන කැපීම සිදු වේ.",
            "පහත දැක්වෙන්නේ Glassmorphic Card සහ Image Styling කේතයයි:"
          ],
          codeSnippets: [
            {
              language: "css",
              title: "Glassmorphism Card & Image Object-Fit",
              code: `/* 1. Glassmorphic Card */
.glass-card {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #f8fafc;
}

/* 2. Image with object-fit: cover */
.card-thumbnail {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.glass-card:hover .card-thumbnail {
  transform: scale(1.03);
  filter: brightness(1.1);
}`
            }
          ]
        }
      ],
      keyPoints: [
        "Glassmorphism ක්‍රියා කිරීමට නම් පසුබිම අනිවාර්යයෙන්ම semi-transparent (rgba) විය යුතු අතර backdrop-filter: blur() තිබිය යුතුය.",
        "object-fit: cover මඟින් පින්තූර විකෘති නොවී පෙට්ටියට අලංකාරව ගැළපේ.",
        "drop-shadow() යනු විනිවිද පෙනෙන PNG වල සැබෑ හැඩයට සෙවණැල්ල තබන filter එකයි."
      ],
      exercises: [
        { id: 1, question: "Glassmorphism පෙනුමක් ලබා ගැනීමට අත්‍යවශ්‍ය ප්‍රධාන CSS ගුණාංග 3 කුමක්ද?" },
        { id: 2, question: "box-shadow සහ filter: drop-shadow() අතර වෙනස කුමක්ද?" }
      ]
    }
  ]
};
