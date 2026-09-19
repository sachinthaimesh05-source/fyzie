import { Volume } from '../../types';

export const volume1: Volume = {
  id: 1,
  volumeNumber: 1,
  title: "වෙබ් සහ HTML මූලික කරුණු",
  englishTitle: "Web & HTML Fundamentals",
  color: "from-amber-500/20 via-orange-500/10 to-red-500/20",
  iconName: "Globe",
  badge: "HTML5 & Fundamentals",
  description: "පරිගණක ක්‍රියාකාරීත්වය, අන්තර්ජාලය සහ බ්‍රවුසර ක්‍රියාවලිය, VS Code සැකසුම, Semantic HTML, Forms, ප්‍රවේශ්‍යතාව (a11y) සහ පූර්ණ HTML ව්‍යාපෘතිය.",
  chapterCount: 12,
  pageRange: "පිටු 10 - 42",
  chapters: [
    {
      id: 1,
      volumeId: 1,
      chapterNumber: 1,
      title: "පරිගණකයක් යනු කුමක්ද? සහ එය ක්‍රියා කරන්නේ කෙසේද?",
      englishTitle: "What is a Computer & How Does It Work?",
      pageRange: "පිටු 11 - 12",
      description: "පරිගණකයක මූලික ක්‍රියාවලිය (IPOS), දෘඩාංග සහ මෘදුකාංග අතර වෙනස, සහ ද්විමය පද්ධතිය (Binary).",
      learningObjectives: [
        "පරිගණකයක් යනු කුමක්දැයි සරලව පැහැදිලි කිරීම",
        "දෘඩාංග (Hardware) සහ මෘදුකාංග (Software) අතර වෙනස හඳුනා ගැනීම",
        "පරිගණකයක් දත්ත සකසන ආකාරය (Input-Process-Output-Storage) තේරුම් ගැනීම",
        "ද්විමය පද්ධතිය (Binary System: 0 සහ 1) අවබෝධ කර ගැනීම",
        "වෙබ් සංවර්ධකයෙකුට (Web Developer) පරිගණක ක්‍රියාකාරීත්වය වැදගත් වන්නේ ඇයි දැයි තේරුම් ගැනීම"
      ],
      sections: [
        {
          title: "1.1 හැඳින්වීම (Introduction)",
          content: [
            "ඔබ වෙබ් අඩවි නිර්මාණය කිරීමට ඉගෙන ගැනීමට පෙර, ඔබ භාවිතා කරන උපකරණය එනම් 'පරිගණකය' ඇත්තටම ක්‍රියා කරන්නේ කෙසේදැයි දැනගත යුතුය.",
            "බොහෝ දෙනෙක් සිතන්නේ පරිගණකය යනු මැජික් පෙට්ටියක් කියාය. නමුත් එය ඉතාමත් ක්‍රමානුකූලව වැඩ කරන යන්ත්‍රයකි.",
            "ඔබ අනාගතයේදී වෙබ් අඩවියක් නිර්මාණය කරන විට, ඔබ කරන්නේ පරිගණකයට යම් උපදෙස් මාලාවක් ලබා දීමයි. පරිගණකය ක්‍රියා කරන ආකාරය ඔබ නොදන්නේ නම්, නිවැරදි උපදෙස් ලබා දීම අපහසු වේ."
          ]
        },
        {
          title: "1.2 පරිගණකය යනු කුමක්ද? (Definition of a Computer)",
          content: [
            "සරලවම කිවහොත්, පරිගණකය (Computer) යනු අප ලබා දෙන දත්ත (Data) ලබාගෙන, ඒවා අපට අවශ්‍ය පරිදි සකස් කර (Process), අපට අවශ්‍ය තොරතුරු (Information) ලබා දෙන විද්‍යුත් යන්ත්‍රයකි.",
            "සැබෑ ලෝකයේ උදාහරණයක්: සහල් මෝලක් ගැන සිතන්න.",
            "1. ඔබ මෝලට වී (Raw Material) ඇතුළු කරයි.",
            "2. මෝල තුළදී එම වී කෙටීම සිදු වේ (Process).",
            "3. අවසානයේදී ඔබට සහල් (Finished Product / Output) ලැබේ.",
            "පරිගණකයත් මෙලෙසමයි. ඔබ යතුරුපුවරුවෙන් (Keyboard) යමක් ටයිප් කරන විට එය 'වී' වැනිය. පරිගණකය තුළ එය සැකසීම 'කෙටීම' වැනිය. තිරය මත අකුරු දිස්වීම 'සහල්' වැනිය."
          ],
          callout: {
            type: "info",
            title: "IPOS චක්‍රය",
            text: "Input (ආදානය) ➔ Process (සැකසීම) ➔ Output (ප්‍රතිදානය) ➔ Storage (ගබඩා කිරීම)"
          }
        },
        {
          title: "1.3 දෘඩාංග සහ මෘදුකාංග (Hardware and Software)",
          content: [
            "පරිගණකයක් ප්‍රධාන කොටස් දෙකකින් සමන්විත වේ:",
            "1. දෘඩාංග (Hardware): පරිගණකයක අපට ඇල්ලිය හැකි, ස්පර්ශ කළ හැකි සියලුම භෞතික කොටස් මෙයට අයත් වේ (Monitor, Keyboard, CPU, RAM).",
            "2. මෘදුකාංග (Software): පරිගණකයේ දෘඩාංග වලට වැඩ කිරීමට ලබා දෙන උපදෙස් මාලාවන් මෘදුකාංග ලෙස හැඳින්වේ (Web Browser, Operating System)."
          ]
        },
        {
          title: "1.4 ද්විමය පද්ධතිය (Binary System) - පරිගණකයේ භාෂාව",
          content: [
            "මිනිසුන් වන අපට සිංහල හෝ ඉංග්‍රීසි භාෂාව වැටහුණත්, පරිගණකයට මේ කිසිවක් තේරෙන්නේ නැත.",
            "පරිගණකය යනු විදුලියෙන් ක්‍රියා කරන යන්ත්‍රයකි. එයට තේරෙන්නේ අවස්ථා දෙකක් පමණි: විදුලිය ඇත (ON - 1) සහ විදුලිය නැත (OFF - 0).",
            "ඔබ පරිගණකයේ 'A' අකුර ටයිප් කළත්, පරිගණකය එය දකින්නේ 01000001 වැනි 0 සහ 1 සමූහයක් ලෙසයි."
          ]
        }
      ],
      keyPoints: [
        "පරිගණකය දත්ත ලබාගෙන (Input), සකසා (Process), ප්‍රතිඵල ලබා දෙයි (Output).",
        "දෘඩාංග යනු භෞතික කොටස් වන අතර මෘදුකාංග යනු උපදෙස් මාලාවන්ය.",
        "පරිගණකය තේරුම් ගන්නා එකම භාෂාව Binary (0 සහ 1) වේ.",
        "RAM යනු වේගවත් තාවකාලික මතකය වන අතර Storage යනු ස්ථිර මතකයයි."
      ],
      exercises: [
        { id: 1, question: "ඔබ අවට ඇති දෘඩාංග (Hardware) 5ක් නම් කරන්න." },
        { id: 2, question: "ඔබ භාවිතා කරන මෘදුකාංග (Software) 3ක් නම් කරන්න." },
        { id: 3, question: "පරිගණකයක Input සහ Output අතර වෙනස සරලව පැහැදිලි කරන්න." },
        { id: 4, question: "RAM එක සහ Hard Drive එක අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" }
      ],
      quiz: [
        {
          question: "පරිගණකය තේරුම් ගන්නා මූලික සංඛ්‍යා පද්ධතිය කුමක්ද?",
          options: ["දශමය පද්ධතිය (Decimal)", "ද්විමය පද්ධතිය (Binary - 0 සහ 1)", "අෂ්ටක පද්ධතිය (Octal)", "RGB පද්ධතිය"],
          correctIndex: 1,
          explanation: "පරිගණකය ක්‍රියා කරන්නේ විදුලිය සක්‍රිය (1) සහ අක්‍රිය (0) වන ද්විමය (Binary) පද්ධතියෙනි."
        }
      ]
    },
    {
      id: 2,
      volumeId: 1,
      chapterNumber: 2,
      title: "අන්තර්ජාලය සහ වෙබ් අඩවි ක්‍රියා කරන ආකාරය",
      englishTitle: "How the Internet and Web Work",
      pageRange: "පිටු 13 - 15",
      description: "Client-Server ගෘහ නිර්මාණ ශිල්පය, IP ලිපින, DNS සහ වෙබ් පිටුවක් ලෝඩ් වන අදියර 7.",
      learningObjectives: [
        "අන්තර්ජාලය (Internet) සහ ලෝක ව්‍යාප්ත වෙබය (World Wide Web) අතර වෙනස හඳුනාගැනීම",
        "සේවාලාභියා (Client) සහ සේවාදායකයා (Server) යනු කවුරුන්දැයි වටහා ගැනීම",
        "IP ලිපිනයක් (IP Address) සහ DNS (Domain Name System) ක්‍රියා කරන ආකාරය අවබෝධ කර ගැනීම",
        "ඔබ වෙබ් ලිපිනයක් ටයිප් කළ විට පසුබිමෙහි සිදුවන ක්‍රියාවලිය පියවරෙන් පියවර තේරුම් ගැනීම"
      ],
      sections: [
        {
          title: "2.1 හැඳින්වීම & අන්තර්ජාලය යනු කුමක්ද?",
          content: [
            "අන්තර්ජාලය (Internet) යනු ලොව පුරා විසිරී ඇති පරිගණක කෝටි ගණනක් එකිනෙක සම්බන්ධ කර ඇති දැවැන්ත ජාලයකි (Network).",
            "අන්තර්ජාලය සහ වෙබය (Web) යනු දෙකකි:",
            "• අන්තර්ජාලය (Internet): භෞතිකව පවතින කේබල්, වයර්, සහ පරිගණක ජාලයයි (පාරවල් පද්ධතිය වැනිය).",
            "• වෙබය (Web): එම ජාලය හරහා අප බලන වෙබ් අඩවි සහ තොරතුරුයි (පාරේ ගමන් කරන වාහන වැනිය)."
          ]
        },
        {
          title: "2.2 සේවාලාභියා සහ සේවාදායකයා (Client and Server)",
          content: [
            "අන්තර්ජාලය හරහා තොරතුරු හුවමාරු වීමේදී ප්‍රධාන චරිත දෙකක් ඇත:",
            "1. සේවාලාභියා (Client): තොරතුරු ඉල්ලා සිටින පුද්ගලයා හෝ උපකරණයයි (ඔබගේ දුරකථනය, Browser එක).",
            "2. සේවාදායකයා (Server): තොරතුරු ගබඩා කර තබාගෙන සිටින සහ ඒවා ලබා දෙන ප්‍රබල පරිගණකයයි.",
            "ආපනශාලා උපමාව: ඔබ (Client) ➔ වේටර්වරයා (Request/Response) ➔ කුස්සිය (Server)."
          ],
          asciiDiagram: ` [ ඔබගේ පරිගණකය ]          [ අන්තර්ජාලය ]           [ වෙබ් සේවාදායකයා ]
     (Client)                                           (Server)
        |                                                   |
        |---- 1. මට google.com ඕනේ ------>|                   |
        |<--- 2. එහි IP එක 142.250... ----|                   |
        |                                                   |
        |---- 3. මට වෙබ් පිටුව දෙන්න ------------------------>|
        |<--- 4. මෙන්න HTML ගොනුව --------------------------|
        |                                                   |
 [ වෙබ් අඩවිය පෙන්වයි ]`
        },
        {
          title: "2.3 වෙබ් අඩවියක් ක්‍රියා කරන පියවර 7",
          content: [
            "1. Request (ඉල්ලීම): ඔබ www.google.com යන්න ටයිප් කරයි.",
            "2. DNS Lookup: බ්‍රවුසරය DNS සේවාදායකයාගෙන් අසයි 'Google හි IP ලිපිනය කුමක්ද?'",
            "3. Getting IP: DNS විසින් IP ලිපිනය ලබා දෙයි.",
            "4. Connecting to Server: බ්‍රවුසරය එම IP ලිපිනය ඇති Server වෙත සම්බන්ධ වේ.",
            "5. Sending Request: බ්‍රවුසරය HTML ගොනුව ඉල්ලා සිටියි.",
            "6. Response (ප්‍රතිචාරය): සේවාදායකයා එම ගොනුව බ්‍රවුසරය වෙත එවයි.",
            "7. Rendering: බ්‍රවුසරය එම කේත කියවා ලස්සන වෙබ් පිටුවක් ලෙස තිරය මත පෙන්වයි."
          ]
        }
      ],
      keyPoints: [
        "Internet යනු පරිගණක ජාලයයි; Web යනු එහි ඇති තොරතුරු පද්ධතියයි.",
        "DNS යනු අන්තර්ජාලයේ දුරකථන නාමාවලියයි (Domain Name ➔ IP Address).",
        "Frontend Developer කෙනෙකු ලියන HTML, CSS, JS සර්වර් එකක host කළ යුතුය."
      ],
      exercises: [
        { id: 1, question: "Client සහ Server අතර ඇති ප්‍රධාන වෙනස ඔබේ වචනයෙන් පැහැදිලි කරන්න." },
        { id: 2, question: "DNS පද්ධතියක් නොතිබුණේ නම් අපට ඇතිවන ගැටලුව කුමක්ද?" },
        { id: 3, question: "Command Prompt එකේ 'nslookup google.com' ගසා ලැබෙන IP ලිපිනය පරීක්ෂා කරන්න." }
      ]
    },
    {
      id: 3,
      volumeId: 1,
      chapterNumber: 3,
      title: "බ්‍රවුසරයක ක්‍රියාකාරීත්වය (Browser Fundamentals)",
      englishTitle: "Browser Fundamentals & Rendering Engine",
      pageRange: "පිටු 15 - 17",
      description: "Rendering Engine (Blink, WebKit, Gecko), DOM සහ CSSOM සැකසීම, පියවර 5ක Rendering Process එක සහ DevTools.",
      learningObjectives: [
        "වෙබ් බ්‍රවුසරයක් යනු පරිවර්තකයෙකු (Translator) බව තේරුම් ගැනීම",
        "ප්‍රධාන Browser Engines (Blink, WebKit, Gecko) හඳුනා ගැනීම",
        "පියවර 5ක Rendering Process එක (DOM, CSSOM, Render Tree, Layout, Paint) අවබෝධ කර ගැනීම",
        "Inspect Element (Developer Tools) භාවිතයෙන් කේත පරීක්ෂා කිරීම"
      ],
      sections: [
        {
          title: "3.1 බ්‍රවුසර එන්ජිම සහ Rendering Process එක",
          content: [
            "සෑම බ්‍රවුසරයකම 'හදවත' ලෙස ක්‍රියා කරන්නේ Rendering Engine එකයි (Chrome: Blink, Safari: WebKit, Firefox: Gecko).",
            "ඔබ ටයිප් කරන කේතයක් තිරය මත පෙනෙන්නට පියවර 5ක් පසු කළ යුතුය:",
            "1. DOM නිර්මාණය කිරීම (Creating the DOM Tree): HTML ටැග් ගසක අතු බෙදී යන ආකාරයට සකස් කරයි.",
            "2. CSSOM නිර්මාණය කිරීම: CSS ගොනු කියවා අකුරුවල පාට, විශාලත්වය වැනි දේ සකසයි.",
            "3. Render Tree එක සෑදීම: DOM සහ CSSOM එකට එකතු කර පෙන්විය යුතු දේ පමණක් තෝරා ගනී.",
            "4. Layout (පිරිසැලසුම): එක් එක් කොටස තිරයේ කොතැන තිබිය යුතුදැයි ගණනය කරයි.",
            "5. Painting (ආලේප කිරීම): පික්සල් මත වර්ණ තවරා ඇසට පෙනෙන වෙබ් පිටුව නිර්මාණය කරයි."
          ],
          asciiDiagram: ` [ HTML ] ------> [ DOM Tree ] --\\
                                     > [ Render Tree ] ----> [ Layout ] ----> [ Painting ] ➔ වෙබ් පිටුව
 [ CSS ] ------> [ CSSOM Tree ] -/`
        }
      ],
      keyPoints: [
        "බ්‍රවුසරය යනු කේත කියවා දර්ශනීය පිටු සාදන මෘදුකාංගයකි.",
        "පිටුවක් පෙන්වීමට පෙර DOM, CSSOM සහ Render Tree එක සෑදිය යුතුය.",
        "F12 මඟින් Developer Tools විවෘත කර වෙබ් පිටුවක් Inspect කළ හැක."
      ],
      exercises: [
        { id: 1, question: "ප්‍රධාන බ්‍රවුසර එන්ජින් 3 නම් කරන්න." },
        { id: 2, question: "Rendering Process එකේ පියවර 5 අනුපිළිවෙලින් ලියන්න." }
      ]
    },
    {
      id: 4,
      volumeId: 1,
      chapterNumber: 4,
      title: "VS Code - අපගේ වැඩබිම සකස් කරගනිමු",
      englishTitle: "Visual Studio Code Setup",
      pageRange: "පිටු 17 - 19",
      description: "VS Code ස්ථාපනය, අතුරුමුහුණත, Live Server සහ Prettier extensions, සහ ප්‍රධාන Keyboard Shortcuts.",
      learningObjectives: [
        "කේත සංස්කාරකයක් (Code Editor) යනු කුමක්දැයි තේරුම් ගැනීම",
        "VS Code හි මූලික කොටස් (Activity Bar, Side Bar, Editor Area, Status Bar) හඳුනා ගැනීම",
        "Live Server සහ Prettier extensions ස්ථාපනය කර ගැනීම",
        "Ctrl + S, Ctrl + B වැනි අත්‍යවශ්‍ය කෙටිමං පුරුදු වීම"
      ],
      sections: [
        {
          title: "4.1 VS Code අතුරුමුහුණත සහ Extensions",
          content: [
            "Microsoft සමාගම විසින් නිර්මාණය කරන ලද VS Code යනු අද ලොව ජනප්‍රියතම කේත සංස්කාරකයයි.",
            "අත්‍යවශ්‍ය Extensions දෙකක්:",
            "1. Live Server: කේතයේ යමක් වෙනස් කර Save කළ සැණින් බ්‍රවුසරය reload වී ප්‍රතිඵලය පෙන්වයි.",
            "2. Prettier - Code Formatter: ඔබගේ කේතය පිළිවෙලකට සහ පිරිසිදුව ස්වයංක්‍රීයව සකස් කර දෙයි."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "පළමු පරීක්ෂණ ගොනුව (index.html)",
              code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>මම VS Code සමඟ වෙබ් සංවර්ධනය ආරම්භ කළෙමි.</p>
  </body>
</html>`
            }
          ]
        }
      ],
      keyPoints: [
        "VS Code යනු ලොව පුරා වෘත්තීය වෙබ් සංවර්ධකයන් භාවිතා කරන කේත සංස්කාරකයයි.",
        "Live Server මඟින් වැඩ වේගවත් වන අතර Prettier මඟින් කේතය පිළිවෙලකට තබා ගනී."
      ],
      exercises: [
        { id: 1, question: "Notepad වෙනුවට VS Code භාවිතා කිරීමේ වාසි 3ක් ලියන්න." },
        { id: 2, question: "කේතයක් Save කිරීමට භාවිතා කරන කෙටිමඟ කුමක්ද?" }
      ]
    },
    {
      id: 5,
      volumeId: 1,
      chapterNumber: 5,
      title: "HTML ආරම්භය - වෙබ් අඩවියක සැකිල්ල",
      englishTitle: "HTML Beginner - Structure & Tags",
      pageRange: "පිටු 20 - 22",
      description: "HTML යනු කුමක්ද, Tags, Elements, HTML5 මූලික සැකිල්ල, Headings (h1-h6), Paragraphs සහ Lists (ol, ul).",
      learningObjectives: [
        "HTML (HyperText Markup Language) යනු කුමක්දැයි අවබෝධ කර ගැනීම",
        "Opening Tag, Content, Closing Tag සහ Element ව්‍යුහය තේරුම් ගැනීම",
        "HTML5 මූලික ලේඛන සැකිල්ල (DOCTYPE, html, head, title, body) ගොඩනැගීම",
        "Headings 6 සහ Paragraphs, Ordered & Unordered Lists නිවැරදිව භාවිතය"
      ],
      sections: [
        {
          title: "5.1 HTML මූලික සැකිල්ල සහ ටැග් ව්‍යුහය",
          content: [
            "අප නිවසක් තනන විට මුලින්ම ගඩොල් සහ සිමෙන්ති යොදා සැකිල්ල (Structure) සාදා ගනිමු. වෙබ් අඩවියක 'ගඩොල් සහ සිමෙන්ති' හෙවත් සැකිල්ල වන්නේ HTML ය.",
            "ටැග් එකක ව්‍යුහය: <h1>මෙය මාතෘකාවකි</h1> (Opening Tag, Content, Closing Tag).",
            "HTML මූලික සැකිල්ල:"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML5 Basic Skeleton",
              code: `<!DOCTYPE html>
<html lang="si">
<head>
  <meta charset="UTF-8">
  <title>මගේ පළමු වෙබ් පිටුව</title>
</head>
<body>
  <h1>ආයුබෝවන්!</h1>
  <h2>Frontend Development</h2>
  <p>HTML යනු වෙබ් අඩවියක අත්තිවාරමයි.</p>
  
  <h3>මගේ ප්‍රියතම විෂයයන්:</h3>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
  </ul>
</body>
</html>`
            }
          ]
        }
      ],
      keyPoints: [
        "HTML වෙබ් අඩවියක සැකිල්ල සාදයි.",
        "<h1> සිට <h6> දක්වා මාතෘකා ඇති අතර <h1> ප්‍රධාන මාතෘකාවට යොදයි.",
        "<ul> මඟින් බුලට් පොයින්ට්ස් ලැයිස්තු ද <ol> මඟින් අංක සහිත ලැයිස්තු ද සාදයි."
      ],
      exercises: [
        { id: 1, question: "HTML5 ලේඛනයක තිබිය යුතු මූලික ටැග් 4ක් ලියන්න." },
        { id: 2, question: "<ul> සහ <ol> අතර වෙනස පැහැදිලි කරන්න." }
      ]
    },
    {
      id: 6,
      volumeId: 1,
      chapterNumber: 6,
      title: "HTML උසස් මට්ටම - පින්තූර, සබැඳි සහ වගු",
      englishTitle: "HTML Advanced - Images, Links & Tables",
      pageRange: "පිටු 22 - 24",
      description: "Attributes (href, src, alt, target), Hyperlinks (<a>), Images (<img>), Self-closing tags, සහ Tables (table, tr, th, td).",
      learningObjectives: [
        "ගුණාංග (Attributes) යනු මොනවාදැයි තේරුම් ගැනීම",
        "<a> ටැගය සහ href, target='_blank' මඟින් පිටු සම්බන්ධ කිරීම",
        "<img> ටැගය, src සහ alt attribute වල වැදගත්කම අවබෝධ කර ගැනීම",
        "<table>, <tr>, <th>, <td> මඟින් දත්ත වගු නිර්මාණය කිරීම"
      ],
      sections: [
        {
          title: "6.1 සබැඳි (Links), පින්තූර (Images) සහ වගු (Tables)",
          content: [
            "Attributes යනු ටැග් එකකට ලබා දෙන අමතර විස්තරයි. ඒවා සැමවිටම opening tag එක තුළ ලියයි.",
            "පින්තූර සඳහා alt attribute එක අනිවාර්ය වන්නේ ඇස් පෙනීම දුර්වල අයට Screen Reader එකෙන් පින්තූරය කියවා දීමට සහ SEO සඳහායි."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Links, Images & Tables Example",
              code: `<!-- සබැඳියක් -->
<a href="https://google.com" target="_blank">ගූගල් වෙත යන්න</a>

<!-- පින්තූරයක් (Self-closing) -->
<img src="photo.jpg" alt="සුන්දර වෙරළ තීරයක්" width="400" height="250">

<!-- වගුවක් -->
<table border="1">
  <tr>
    <th>විෂයය</th>
    <th>ලකුණු</th>
  </tr>
  <tr>
    <td>ගණිතය</td>
    <td>85</td>
  </tr>
  <tr>
    <td>විද්‍යාව</td>
    <td>90</td>
  </tr>
</table>`
            }
          ]
        }
      ],
      keyPoints: [
        "<a> ටැගය href සමඟ සබැඳි සාදයි; target='_blank' අලුත් ටැබ් එකක විවෘත කරයි.",
        "<img> ටැගය self-closing වන අතර alt attribute එක accessibility සඳහා අත්‍යවශ්‍ය වේ.",
        "වගුවක් සෑදීමට <table>, පේළි සඳහා <tr>, ශීර්ෂ සඳහා <th> සහ දත්ත සඳහා <td> යොදයි."
      ],
      exercises: [
        { id: 1, question: "පින්තූරයක් සඳහා alt Attribute එක වැදගත් වන්නේ ඇයි?" },
        { id: 2, question: "පේළි දෙකක නම සහ වයස අඩංගු සරල HTML වගුවක් ලියන්න." }
      ]
    },
    {
      id: 7,
      volumeId: 1,
      chapterNumber: 7,
      title: "ෆෝම් - පරිශීලක දත්ත ලබා ගැනීම (HTML Forms)",
      englishTitle: "HTML Forms & User Input",
      pageRange: "පිටු 24 - 27",
      description: "<form> ටැගය, action & method, input types (text, password, email, checkbox, radio), <label> (for/id), textarea, select, සහ validation.",
      learningObjectives: [
        "HTML ෆෝම් (Forms) වල වැදගත්කම සහ <form> ටැගය",
        "විවිධ Input වර්ග (text, password, email, checkbox, radio) හඳුනා ගැනීම",
        "<label> ටැගයේ for ගුණාංගය සහ input එකේ id අතර සම්බන්ධය",
        "Dropdown (select) සහ Textarea භාවිතය",
        "සම්පූර්ණ ලියාපදිංචි වීමේ ෆෝරමයක් නිර්මාණය කිරීම"
      ],
      sections: [
        {
          title: "7.1 ෆෝරමයක මූලික ව්‍යුහය සහ Inputs",
          content: [
            "සැබෑ වෙබ් අඩවියකදී අපට පරිශීලකයාගෙන් තොරතුරු ලබා ගැනීමට සිදුවේ (Login, Search, Checkout).",
            "ප්‍රධාන ගුණාංග: action (දත්ත යැවිය යුතු ලිපිනය), method (GET හෝ POST).",
            "ලියාපදිංචි වීමේ සම්පූර්ණ උදාහරණයක්:"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Complete Registration Form",
              code: `<form action="/submit" method="POST">
  <p>
    <label for="username">නම:</label><br>
    <input type="text" id="username" name="username" placeholder="ඔබගේ නම" required>
  </p>
  <p>
    <label for="email">විද්‍යුත් තැපෑල:</label><br>
    <input type="email" id="email" name="email" required>
  </p>
  <p>
    <label for="password">මුරපදය:</label><br>
    <input type="password" id="password" name="password" required>
  </p>
  <p>
    <label>ස්ත්‍රී/පුරුෂ භාවය:</label><br>
    <input type="radio" name="gender" id="m" value="male"><label for="m">පිරිමි</label>
    <input type="radio" name="gender" id="f" value="female"><label for="f">ගැහැණු</label>
  </p>
  <p>
    <label for="city">නගරය තෝරන්න:</label>
    <select id="city" name="city">
      <option value="colombo">කොළඹ</option>
      <option value="kandy">මහනුවර</option>
      <option value="galle">ගාල්ල</option>
    </select>
  </p>
  <p>
    <label for="bio">ඔබ ගැන කෙටි විස්තරයක්:</label><br>
    <textarea id="bio" name="bio" rows="4" cols="40"></textarea>
  </p>
  <input type="submit" value="ලියාපදිංචි වන්න">
</form>`
            }
          ]
        }
      ],
      keyPoints: [
        "name attribute එක සර්වර් එකට දත්ත හඳුනා ගැනීමට අත්‍යවශ්‍ය වේ.",
        "Radio buttons වල name එක සමාන විය යුතුය.",
        "required attribute මඟින් හිස්ව submit කිරීම වළක්වයි."
      ],
      exercises: [
        { id: 1, question: "type='text' සහ type='password' අතර ඇති වෙනස කුමක්ද?" },
        { id: 2, question: "<label> හි for සහ <input> හි id එක සමාන කිරීමෙන් ලැබෙන වාසිය කුමක්ද?" }
      ]
    },
    {
      id: 8,
      volumeId: 1,
      chapterNumber: 8,
      title: "සෙමැන්ටික් HTML - අර්ථවත් වෙබ් පිටු (Semantic HTML)",
      englishTitle: "Semantic HTML & Layout Architecture",
      pageRange: "පිටු 27 - 29",
      description: "Semantic vs Non-semantic tags, <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> සහ SEO / Accessibility වාසි.",
      learningObjectives: [
        "සෙමැන්ටික් (Semantic) යන්නෙහි තේරුම සහ අර්ථවත් ටැග් හඳුනා ගැනීම",
        "<div> සහ <span> වැනි non-semantic ටැග් වෙනුවට අර්ථවත් ටැග් භාවිතය",
        "SEO (Search Engine Optimization) සඳහා සෙමැන්ටික් ටැග් උපකාරී වන අයුරු",
        "වෙබ් පිටුවක සම්මත සැකිල්ල (Standard Web Layout) නිර්මාණය කිරීම"
      ],
      sections: [
        {
          title: "8.1 සෙමැන්ටික් ටැග් සහ සම්මත වෙබ් සැකිල්ල",
          content: [
            "සෙමැන්ටික් ටැග් යනු එම ටැගය තුළ ඇති අන්තර්ගතය කුමක්දැයි බ්‍රවුසරයට සහ සෙවුම් යන්ත්‍ර (Google) වලට පැහැදිලිව පවසන ටැග් වේ.",
            "නිවසක කාමර වලට කාමර 1, 2, 3 කියනවා වෙනුවට 'කුස්සිය', 'නිදන කාමරය', 'සාලය' ලෙස නම් කිරීම වැනිය."
          ],
          asciiDiagram: `__________________________________________________________
|                  <header> (හිස)                         |
|________________________________________________________|
|                  <nav> (මෙනුව)                          |
|________________________________________________________|
|           |                 <main>                 |   |
|  <aside>  |  _________________   ________________  | <aside>
|  (වම්     | |   <article>     | |   <section>    | | (දකුණු
|   පුවරුව) | |_________________| |________________| |  පුවරුව)
|___________|________________________________________|___|
|                  <footer> (පාදය)                       |
|________________________________________________________|`,
          codeSnippets: [
            {
              language: "html",
              title: "Semantic HTML Layout",
              code: `<!DOCTYPE html>
<html lang="si">
<head>
  <meta charset="UTF-8">
  <title>සෙමැන්ටික් වෙබ් පිටුව</title>
</head>
<body>
  <header>
    <h1>මගේ තාක්ෂණික බ්ලොග් අඩවිය</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#home">මුල් පිටුව</a></li>
      <li><a href="#articles">ලිපි</a></li>
    </ul>
  </nav>
  <main>
    <article>
      <h2>HTML5 යනු කුමක්ද?</h2>
      <p>HTML5 යනු නූතන වෙබ් පිටු සඳහා ප්‍රමිතියයි.</p>
    </article>
  </main>
  <aside>
    <h3>දැන්වීම්</h3>
    <p>අපගේ අලුත්ම පොත මිලදී ගන්න.</p>
  </aside>
  <footer>
    <p>&copy; 2026 T. Sachintha Imesh [FYZIE]. සියලුම හිමිකම් ඇවිරිණි.</p>
  </footer>
</body>
</html>`
            }
          ]
        }
      ],
      keyPoints: [
        "Semantic HTML මඟින් SEO ශ්‍රේණිගත කිරීම සහ Screen Readers වලට පහසුව ලැබේ.",
        "පිටුවක ප්‍රධාන අන්තර්ගතය සඳහා ඇත්තේ එක් <main> ටැගයක් පමණි."
      ],
      exercises: [
        { id: 1, question: "<div> වෙනුවට <article> හෝ <section> භාවිතා කිරීමේ වාසිය කුමක්ද?" }
      ]
    },
    {
      id: 9,
      volumeId: 1,
      chapterNumber: 9,
      title: "ප්‍රවේශ්‍යතාව - සැමට සම වෙබ් අඩවි (Web Accessibility - a11y)",
      englishTitle: "Web Accessibility (a11y) & WCAG",
      pageRange: "පිටු 29 - 31",
      description: "Accessibility (a11y), Screen Readers (NVDA/JAWS), Alt text නීති, Color contrast, Buttons vs Links, සහ ARIA මූලික කරුණු.",
      learningObjectives: [
        "වෙබ් ප්‍රවේශ්‍යතාව (a11y) යනු කුමක්දැයි වටහා ගැනීම",
        "ආබාධ සහිත පුද්ගලයන් වෙබ් අඩවි පරිශීලනය කරන අයුරු (Screen Readers, Magnifiers)",
        "Alt text, Labels, Heading hierarchy සහ Keyboard Navigation මූලධර්ම",
        "ARIA (Accessible Rich Internet Applications) මූලික සංකල්ප"
      ],
      sections: [
        {
          title: "9.1 ප්‍රවේශ්‍යතාවය සහ ARIA මූලධර්ම",
          content: [
            "ලෝක ජනගහනයෙන් 15% ක් පමණ ආබාධ සහිත අය වෙති. ඔවුන්ටද තොරතුරු දැනගැනීමේ අයිතිය ඇත. පොදු ගොඩනැගිල්ලකට පඩිපෙළට අමතරව බෑවුමක් (Ramp) හෝ විදුලි සෝපානයක් (Lift) සවි කිරීම වැනි දෙයකි වෙබ් ප්‍රවේශ්‍යතාව.",
            "වැරදි Alt Text: <img src='dog.jpg' alt='රූපය 1'>",
            "නිවැරදි Alt Text: <img src='dog.jpg' alt='බෝලයක් සමඟ සෙල්ලම් කරන දුඹුරු පැහැති බල්ලෙක්'>"
          ]
        }
      ],
      keyPoints: [
        "Accessibility යනු විශේෂ අවශ්‍යතා ඇති අයටද බාධාවකින් තොරව වෙබ් අඩවිය භාවිතා කිරීමට ඉඩ සැලසීමයි.",
        "Keyboard එකෙන් පමණක් වෙබ් අඩවිය භාවිතා කළ හැකි විය යුතුය (Tab Navigation)."
      ],
      exercises: [
        { id: 1, question: "<button> සහ <a> අතර ප්‍රවේශ්‍යතාවට අදාළ වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 10,
      volumeId: 1,
      chapterNumber: 10,
      title: "පළමු පූර්ණ HTML ව්‍යාපෘතිය (The Final HTML Project)",
      englishTitle: "The Final HTML Capstone Project",
      pageRange: "පිටු 32 - 36",
      description: "My Tech Journal බහු-පිටු වෙබ් අඩවිය, වෘත්තීය Folder Structure (index, about, contact, images), සහ Testing & Debugging.",
      learningObjectives: [
        "මෙතෙක් උගත් සියලුම HTML පාඩම් එකතු කර පූර්ණ බහු-පිටු වෙබ් අඩවියක් නිර්මාණය කිරීම",
        "වෘත්තීය මට්ටමේ ගොනු ව්‍යුහයක් (Folder Structure) සැකසීම",
        "Testing & Debugging: කැඩුණු ලින්ක්ස් (Broken links) සහ වැරදි පරීක්ෂා කිරීම",
        "පළමු පරිමාවේ සම්පූර්ණ සාරාංශය සහ සම්මුඛ පරීක්ෂණ ප්‍රශ්න"
      ],
      sections: [
        {
          title: "10.1 ව්‍යාපෘති සැකැස්ම: My Tech Journal",
          content: [
            "අප නිර්මාණය කරන්නේ පිටු 3කින් සමන්විත 'මගේ තාක්ෂණික සටහන් පොත' (My Tech Journal) වෙබ් අඩවියයි:",
            "• index.html (මුල් පිටුව)",
            "• about.html (මා ගැන පිටුව)",
            "• contact.html (සම්බන්ධ වන්න පිටුව)",
            "• images/ (පින්තූර ගබඩා කරන ෆෝල්ඩරය)"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Contact Page Form Example",
              code: `<main>
  <h2>සම්බන්ධ වන්න</h2>
  <form action="#" method="GET">
    <p>
      <label for="name">ඔබේ නම:</label><br>
      <input type="text" id="name" name="user_name" required>
    </p>
    <p>
      <label for="email">විද්‍යුත් තැපෑල:</label><br>
      <input type="email" id="email" name="user_email" required>
    </p>
    <p>
      <label for="msg">පණිවිඩය:</label><br>
      <textarea id="msg" name="user_message" rows="5"></textarea>
    </p>
    <button type="submit">පණිවිඩය යවන්න</button>
  </form>
</main>`
            }
          ]
        }
      ],
      keyPoints: [
        "වෘත්තීය මට්ටමේදී වෙබ් අඩවියක අලංකාරයට වඩා එහි ව්‍යුහය (Structure) නිවැරදිව තිබීම අතිශය වැදගත් වේ.",
        "සැකිල්ල ශක්තිමත් නම්, ඕනෑම කාලයකදී CSS මඟින් ලස්සන කිරීම පහසුය."
      ],
      exercises: [
        { id: 1, question: "Form එකක POST සහ GET අතර වෙනස කුමක්ද?" },
        { id: 2, question: "වෙබ් අඩවියක SEO වැඩි කිරීමට HTML මඟින් කළ හැකි ක්‍රම 2ක් කියන්න." }
      ]
    },
    {
      id: 11,
      volumeId: 1,
      chapterNumber: 11,
      title: "විශේෂ ප්‍රෝ-මට්ටමේ: වෙබ් ඉංජිනේරු විද්‍යාව, අභ්‍යන්තර ක්‍රියාවලීන් සහ උසස් ප්‍රමිතීන්",
      englishTitle: "Web Engineering Internals & Advanced Semantic Architecture",
      pageRange: "පිටු 36 - 38",
      description: "HTTP/HTTPS Request-Response, Headers, Status Codes (2xx, 3xx, 4xx, 5xx), Schema.org JSON-LD Structured Data, Core Web Vitals, සහ XSS ආරක්‍ෂාව.",
      learningObjectives: [
        "HTTP Headers (User-Agent, Content-Type) සහ Status Codes (200, 301, 404, 500) තේරුම් ගැනීම",
        "Schema.org සහ JSON-LD මඟින් Google සෙවුම් ප්‍රතිඵලවල Rich Snippets ලබා ගැනීම",
        "Core Web Vitals (LCP, FID, CLS) මැනීම සහ Layout Shift වැළැක්වීම",
        "HTML මට්ටමින් සිදුවන XSS (Cross-Site Scripting) ප්‍රහාර වැළැක්වීම"
      ],
      sections: [
        {
          title: "11.1 JSON-LD Structured Data & Core Web Vitals",
          content: [
            "Google සෙවුම් යන්ත්‍රයට 'කසුන්' යනු නමක් බවත්, 'රු. 500' යනු මිලක් බවත් තේරුම් කර දීමට Schema.org ප්‍රමිතිය භාවිතා කරයි.",
            "LCP (Largest Contentful Paint - <2.5s), FID (First Input Delay - <100ms), CLS (Cumulative Layout Shift - <0.1).",
            "CLS වැළැක්වීමට සෑමවිටම පින්තූර වලට width සහ height ලබා දෙන්න!"
          ],
          codeSnippets: [
            {
              language: "json",
              title: "JSON-LD Microdata (Product Schema)",
              code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "අත් ඔරලෝසුව",
  "image": "watch.jpg",
  "description": "ඉතා උසස් තත්ත්වයේ අත් ඔරලෝසුවකි.",
  "offers": {
    "@type": "Offer",
    "price": "2500.00",
    "priceCurrency": "LKR"
  }
}
</script>`
            }
          ]
        }
      ],
      keyPoints: [
        "JSON-LD මඟින් සෙවුම් යන්ත්‍ර සඳහා Structured Data සපයයි.",
        "XSS ප්‍රහාර වැළැක්වීමට විශේෂ ලකුණු වෙනුවට HTML Entities (&lt;, &gt;, &quot;) යොදන්න."
      ],
      exercises: [
        { id: 1, question: "LCP, FID සහ CLS යනු මොනවාදැයි කෙටියෙන් විස්තර කරන්න." }
      ]
    },
    {
      id: 12,
      volumeId: 1,
      chapterNumber: 12,
      title: "බහුමාධ්‍ය, SVG සහ දියුණු HTML රහස්",
      englishTitle: "HTML Multimedia, SVG & Advanced HTML Secrets",
      pageRange: "පිටු 39 - 41",
      description: "<video> සහ <audio>, <iframe> (YouTube, Maps), SVG (Scalable Vector Graphics), Favicon, HTML Entities සහ data-* attributes.",
      learningObjectives: [
        "<video> සහ <audio> ටැග් නිවැරදිව පාලනය කිරීම (controls, poster, autoplay)",
        "<iframe> භාවිතයෙන් Google Maps සහ YouTube වීඩියෝ ඇතුළත් කිරීම",
        "SVG (Scalable Vector Graphics) සහ පික්සල් පින්තූර අතර වෙනස",
        "data-* attributes මඟින් JavaScript සඳහා රහස් දත්ත ගබඩා කිරීම"
      ],
      sections: [
        {
          title: "12.1 Multimedia & SVG Graphics",
          content: [
            "HTML5 සමඟ Flash වැනි බාහිර මෘදුකාංග නොමැතිව සෘජුවම වීඩියෝ සහ හඬ පට ඇතුළත් කළ හැක.",
            "SVG සාමාන්‍ය පින්තූර (JPG/PNG) මෙන් නොව ගණිතමය සූත්‍ර (Vectors) මඟින් සෑදෙන බැවින් 4K හෝ කුඩා තිරයකදී කිසිදා නොකැඩී පැහැදිලිව පෙනේ."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML5 Video & SVG Example",
              code: `<!-- වීඩියෝවක් ඇතුළත් කිරීම -->
<video width="640" height="360" controls poster="preview.jpg">
  <source src="movie.mp4" type="video/mp4">
  ඔබේ බ්‍රවුසරය මෙම වීඩියෝවට සහය නොදක්වයි.
</video>

<!-- SVG රවුමක් නිර්මාණය කිරීම -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="#38bdf8" stroke-width="4" fill="#0f172a" />
</svg>

<!-- data-* attribute -->
<div class="user-card" data-user-id="501" data-role="admin">
  කසුන් කල්හාර
</div>`
            }
          ]
        }
      ],
      keyPoints: [
        "SVG යනු කිසිදා නොකැඩෙන, සැහැල්ලු දෛශික රූප ආකෘතියකි.",
        "data-* attributes මඟින් අමතර දත්ත ගබඩා කර JavaScript මඟින් කියවිය හැක."
      ],
      exercises: [
        { id: 1, question: "JPG සහ SVG අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "&copy; &amp; &lt; &gt; යන HTML Entities වල තේරුම් ලියන්න." }
      ]
    }
  ]
};
