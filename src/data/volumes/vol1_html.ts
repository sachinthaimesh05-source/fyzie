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
        },
        {
          title: "1.5 ප්‍රධාන මතක වර්ග: RAM, ROM සහ Storage (SSD/HDD)",
          content: [
            "පරිගණකයක මතකය (Memory) ප්‍රධාන ආකාර 3කට බෙදිය හැක:",
            "1. RAM (Random Access Memory): මෙය අධිවේගී තාවකාලික මතකයයි (Volatile). පරිගණකය ක්‍රියාත්මකව පවතින විට ඔබ විවෘත කර ඇති වෙබ් බ්‍රවුසරය සහ කේත රඳවා ගන්නේ මෙහිය. විදුලිය විසන්ධි වූ විට මෙහි දත්ත මැකී යයි.",
            "2. ROM (Read-Only Memory): පරිගණකය මුලින්ම පණගැන්වීමට (Booting/BIOS) අවශ්‍ය ස්ථිර උපදෙස් අඩංගු කියවිය හැකි පමණක් වූ මතකයයි.",
            "3. Storage (SSD / Hard Disk): ඔබ ලියන HTML ගොනු සහ ඡායාරූප ස්ථිරව ගබඩා වන මතකයයි (Non-volatile). සාම්ප්‍රදායික HDD වලට වඩා නවීන NVMe SSD ධාවක 10 ගුණයකටත් වඩා වේගවත්ය."
          ]
        },
        {
          title: "1.6 CPU (මධ්‍යම සැකසුම් ඒකකය) සහ පරිගණක ඔරලෝසු වේගය",
          content: [
            "CPU (Central Processing Unit) යනු පරිගණකයේ 'මොළය'යි. ඔබ දෙන සෑම උපදෙසක්ම තත්පරයකට බිලියන ගණනින් ගණනය කර ක්‍රියාත්මක කරන්නේ CPU එකයි.",
            "Clock Speed (උදා: 3.5 GHz) මඟින් කියවෙන්නේ තත්පරයකට CPU එකට චක්‍ර (Cycles) බිලියන 3.5ක් ක්‍රියාත්මක කළ හැකි බවයි.",
            "බහු-හර (Multi-core) තාක්ෂණය: Dual-core, Quad-core හෝ Octa-core මඟින් පරිගණකයට එකවර කාර්යයන් කිහිපයක් (Multitasking) සුමටව සිදු කිරීමට හැකියාව ලැබේ."
          ]
        },
        {
          title: "1.7 වෙබ් සංවර්ධකයෙකුට පරිගණක විද්‍යා මූලධර්ම වැදගත් වන්නේ ඇයි?",
          content: [
            "වෙබ් අඩවි නිර්මාණය කරන විට ඔබ ලියන සෑම කේත පේළියක්ම අවසානයේදී ක්‍රියාත්මක වන්නේ පරිශීලකයාගේ දුරකථනයේ හෝ පරිගණකයේ CPU සහ RAM මතය.",
            "ඔබ අධික මතක ප්‍රමාණයක් (Memory Leak) ගන්නා බර කේත ලිවුවහොත් පරිශීලකයාගේ උපකරණය හිරවීම (Lag/Freeze) සිදුවේ.",
            "කාර්යක්ෂම, වේගවත් වෙබ් අඩවි (High Performance Web Apps) ගොඩනැගීමට දත්ත සකසන ආකාරය පිළිබඳ මෙම මූලික අවබෝධය අතිශය තීරණාත්මක වේ."
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
        },
        {
          title: "2.4 IP ලිපින (IPv4 vs IPv6) සහ MAC ලිපින",
          content: [
            "අන්තර්ජාලයට සම්බන්ධ සෑම පරිගණකයකටම අනන්‍ය ලිපිනයක් (Unique Identifier) තිබිය යුතුය. මෙය IP (Internet Protocol) ලිපිනයයි.",
            "• IPv4 (32-bit): තිත් 4කින් වෙන් වූ අංක (උදා: 192.168.1.1 හෝ 142.250.190.46). ලොව පරිගණක බිලියන 4.3ක් සඳහා ප්‍රමාණවත් වූ අතර එය දැන් අවසන් වෙමින් පවතී.",
            "• IPv6 (128-bit): නවීන පරම්පරාවේ විසඳුමයි (උදා: 2001:0db8:85a3:0000:0000:8a2e:0370:7334). ලෝකයේ සෑම වැලි කැටයකටම පවා IP ලිපිනයක් දිය හැකි තරම් ලිපින සංඛ්‍යාවක් මෙහි ඇත.",
            "• MAC Address: ඔබේ Network Card එකට නිෂ්පාදකයා විසින් ලබා දෙන වෙනස් කළ නොහැකි භෞතික ලිපිනයයි."
          ]
        },
        {
          title: "2.5 DNS (Domain Name System) සහ URL එකක ව්‍යුහය",
          content: [
            "මිනිසුන්ට 142.250.190.46 වැනි අංක මතක තබා ගැනීම අසීරුය. නමුත් 'google.com' මතක තබා ගැනීම පහසුය. DNS කරන්නේ මෙම නම් අංක බවට පරිවර්තනය කිරීමයි.",
            "සම්පූර්ණ URL එකක ව්‍යුහය (URL Anatomy):",
            "https://www.fyzie.com:443/courses/web-dev?lang=si#syllabus",
            "1. Protocol: https:// (ආරක්ෂිත සන්නිවේදන ක්‍රමය)",
            "2. Subdomain: www",
            "3. Domain Name: fyzie.com",
            "4. Port: :443 (HTTPS සඳහා සම්මත තොටුපළ)",
            "5. Path: /courses/web-dev (ගොනුව ඇති ස්ථානය)",
            "6. Query String: ?lang=si (අමතර දත්ත)",
            "7. Anchor / Hash: #syllabus (පිටුවේ අදාළ කොටස)"
          ]
        },
        {
          title: "2.6 HTTP vs HTTPS (SSL/TLS ආරක්ෂණ සහතිකය)",
          content: [
            "HTTP (HyperText Transfer Protocol) යනු දත්ත සාමාන්‍ය Plain Text ලෙස හුවමාරු වන පැරණි ක්‍රමයයි. අතරමඟදී ඕනෑම හැකර්වරයෙකුට දත්ත කියවිය හැක.",
            "HTTPS (HTTP Secure): SSL/TLS සහතිකයක් මඟින් දත්ත කේතනය (Encryption) කර යවයි. මුරපද (Passwords) සහ Credit Card තොරතුරු සුරක්ෂිතව ගමන් කරන්නේ HTTPS හරහාය.",
            "නවීන බ්‍රවුසර වල HTTPS නොමැති අඩවි 'Not Secure' ලෙස රතු අනතුරු ඇඟවීම් පෙන්වයි."
          ]
        },
        {
          title: "2.7 වෙබ් සේවාදායක (Apache, Nginx, Node.js) සහ Port අංක",
          content: [
            "Web Server යනු ඔබේ HTML, CSS ගොනු ලෝකයට බෙදාහරින විශේෂිත මෘදුකාංගයකි.",
            "ලොව ජනප්‍රිය වෙබ් සේවාදායක:",
            "• Nginx: අතිශය වේගවත්, Reverse Proxy ලෙස භාවිත වන නවීන සේවාදායකය.",
            "• Apache HTTP Server: මොඩියුලර් සහ WordPress වැනි PHP අඩවි සඳහා බහුලව භාවිත වන සේවාදායකය.",
            "• Node.js: JavaScript මඟින් Backend සේවාදායකයන් තැනීමට භාවිතා කරන පරිසරයයි.",
            "Port 80 (සාමාන්‍ය HTTP) සහ Port 443 (ආරක්ෂිත HTTPS) ලෝකයේ සම්මත සන්නිවේදන තොටුපළවල් වේ."
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
        },
        {
          title: "3.2 DOM (Document Object Model) සහ CSSOM සංකල්පය",
          content: [
            "DOM (Document Object Model) යනු HTML ලියවිල්ල බ්‍රවුසරයේ මතකය (Memory) තුළ ගස් ආකාර ව්‍යුහයකට (Tree Structure) පරිවර්තනය වීමයි.",
            "• Root Node එක වන්නේ <html> ටැගයයි.",
            "• එයින් <head> සහ <body> යන ප්‍රධාන අතු දෙක බෙදී යයි.",
            "• JavaScript මඟින් වෙබ් පිටුවේ ඕනෑම කොටසක් ක්ෂණිකව වෙනස් කරන්නේ මෙම DOM ගස හරහාය.",
            "CSSOM (CSS Object Model) යනු ඔබ ලියූ CSS නීති රීති බ්‍රවුසරය විසින් ව්‍යුහගත කර තබා ගන්නා අනුරූප ගසයි."
          ]
        },
        {
          title: "3.3 Browser Developer Tools (Inspect Element) භාවිතය",
          content: [
            "ලොව සිටින සෑම Frontend ඉංජිනේරුවෙකුගේම ප්‍රධානතම ආයුධය වන්නේ බ්‍රවුසරයේ ඇති Developer Tools (DevTools) ය.",
            "විවෘත කරගන්නා ආකාරය: යතුරුපුවරුවේ F12 ඔබන්න (හෝ Right Click ➔ Inspect).",
            "ප්‍රධාන Tabs:",
            "• Elements Tab: සජීවීව DOM එක සහ CSS මෝස්තර පරීක්ෂා කිරීමට හා එසැනින් සංස්කරණය කර බැලීමට.",
            "• Console Tab: JavaScript දෝෂ (Errors) සහ console.log පණිවිඩ බැලීමට.",
            "• Network Tab: පිටුවට බාගත වන ගොනු (Images, CSS, JS) සහ ඒවාට ගතවන කාලය නිරීක්ෂණය කිරීමට."
          ]
        },
        {
          title: "3.4 Browser Cache, Cookies සහ Local Storage හැඳින්වීම",
          content: [
            "බ්‍රවුසරයක් තොරතුරු මතක තබා ගන්නේ කෙසේද?",
            "• Browser Cache: පින්තූර, CSS සහ JS ගොනු ඔබේ පරිගණකයේ සුරැකීමෙන් ඊළඟ වතාවේ පිටුව ක්ෂණිකව විවෘත වීමට මඟ පාදයි.",
            "• Cookies: සර්වර් එක සහ බ්‍රවුසරය අතර හුවමාරු වන කුඩා දත්ත කොටස් (උදා: Session ID, Login තත්ත්වය).",
            "• Local Storage: බ්‍රවුසරය තුළ 5MB - 10MB දක්වා පරිශීලක දත්ත (උදා: Dark Mode තේරීම) සදාකාලිකව ගබඩා කිරීමේ පහසුකම."
          ]
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
          title: "4.1 VS Code අතුරුමුහුණත සහ ප්‍රධාන කොටස්",
          content: [
            "Microsoft සමාගම විසින් නිර්මාණය කරන ලද Visual Studio Code (VS Code) යනු වර්තමාන මෘදුකාංග ඉංජිනේරුවන් සහ වෙබ් සංවර්ධකයන් අතර ලොව ජනප්‍රියතම කේත සංස්කාරකයයි (Code Editor).",
            "සරල පැහැදිලි කිරීම: සාමාන්‍යයෙන් පරිගණකයක ලියුමක් ලිවීමට Microsoft Word හෝ Notepad භාවිතා කරනවාක් මෙන්, පරිගණක කේත (Codes) ලිවීම සඳහා විශේෂයෙන් සැකසූ මෙවලම කේත සංස්කාරකයකි.",
            "VS Code හි ප්‍රධාන කවුළු 4ක් ඇත:",
            "1. Activity Bar (වම්පස කෙළවර තීරුව): File Explorer, Search, Source Control (Git), Run & Debug, සහ Extensions වෙත ප්‍රවේශය ලබා දෙයි.",
            "2. Side Bar (පැති පුවරුව): ඔබේ ව්‍යාපෘතියේ ඇති සියලුම ගොනු සහ ෆෝල්ඩර (Project Directory) පෙන්වයි.",
            "3. Editor Area (ප්‍රධාන ලියන ප්‍රදේශය): ඔබ HTML, CSS, JavaScript කේත ලියන ප්‍රධාන වැඩබිමයි.",
            "4. Status Bar (පහළ තීරුව): විවෘත කර ඇති ගොනුවේ තොරතුරු, UTF-8 encoding, සහ Errors/Warnings තත්ත්වය පෙන්වයි."
          ],
          asciiDiagram: `+-----------------------------------------------------------+
| [Menu Bar: File  Edit  Selection  View  Go  Run  Terminal] |
+---+---------------+---------------------------------------+
| A | Side Bar      | Editor Area (කේත ලියන ප්‍රදේශය)       |
| c | (ගොනු පටුන)   |                                       |
| t | • index.html  |   <!DOCTYPE html>                     |
| i | • style.css   |   <html>                              |
| v | • app.js      |     <h1>Hello World!</h1>             |
| i |               |   </html>                             |
| t |               +---------------------------------------+
| y |               | Integrated Terminal (Ctrl + \`)       |
+---+---------------+---------------------------------------+
| Status Bar: Ln 1, Col 1  Spaces: 2  UTF-8  Port: 5500 Go Live |
+-----------------------------------------------------------+`
        },
        {
          title: "4.2 අත්‍යවශ්‍ය Extensions (Live Server & Prettier)",
          content: [
            "VS Code හි ඇති විශාලතම වාසිය නම් අපට අවශ්‍ය පරිදි අලුත් හැකියාවන් එක් කර ගැනීමට (Extensions) ඇති හැකියාවයි.",
            "ආරම්භක වෙබ් සංවර්ධකයෙකුට අත්‍යවශ්‍යම Extensions 3:",
            "• Live Server (by Ritwick Dey): ඔබ කේතය ලියා Save (Ctrl + S) කළ සැණින් බ්‍රවුසරය ස්වයංක්‍රීයව refresh වී ප්‍රතිඵලය සජීවීව පෙන්වයි. නැවත නැවත බ්‍රවුසරය Reload කිරීම අවශ්‍ය නොවේ.",
            "• Prettier - Code Formatter: ඔබගේ කේතයේ හිස්තැන්, පේළි ගැළපීම් සහ Indentation ස්වයංක්‍රීයව පිළිවෙලකට සකස් කර දෙන ලොව සම්මත මෙවලමයි.",
            "• Auto Rename Tag: Opening HTML tag එකක් වෙනස් කරන විට Closing tag එකද ස්වයංක්‍රීයව වෙනස් කරයි."
          ],
          callout: {
            type: "tip",
            title: "Prettier සැකසුම (Auto Format on Save)",
            text: "VS Code Settings (Ctrl + ,) විවෘත කර 'Format On Save' ටික් (check) කරන්න. එවිට Save කරන සෑම මොහොතකම කේතය සුපිරිසිදු ලෙස පෙළගැසේ."
          }
        },
        {
          title: "4.3 ප්‍රධාන Keyboard Shortcuts සහ Emmet කෙටිමං",
          content: [
            "වෘත්තීය වෙබ් සංවර්ධකයෙකුගේ වේගය (Productivity) රඳා පවතින්නේ Keyboard Shortcuts භාවිතය මතය.",
            "අත්‍යවශ්‍ය කෙටිමං (Shortcuts):",
            "• Ctrl + S (Mac: Cmd + S): ගොනුව Save කිරීම.",
            "• Ctrl + B (Mac: Cmd + B): වම්පස Side Bar එක සඟවා තිරයේ ඉඩ වැඩි කර ගැනීම.",
            "• Ctrl + / (Mac: Cmd + /): කේත පේළියක් Comment කිරීම.",
            "• Ctrl + ` (Tilde key): Terminal එක විවෘත කිරීම.",
            "Emmet Magic: VS Code හි HTML ලිවීමට සම්පූර්ණ ටැග් අකුරෙන් අකුර ලිවීම අවශ්‍ය නැත.",
            "උදාහරණයක් ලෙස හිස් HTML ගොනුවක ! ලකුණ ගසා Tab හෝ Enter එබූ සැණින් සම්පූර්ණ HTML5 සැකිල්ලම තත්පරයකින් ජනනය වේ!"
          ]
        },
        {
          title: "4.4 ඔබේ පළමු Folder එක සහ index.html නිර්මාණය",
          content: [
            "පියවර 1: පරිගණකයේ Desktop මත 'MyFirstWeb' නමින් නව Folder එකක් සාදන්න.",
            "පියවර 2: VS Code විවෘත කර File ➔ Open Folder වෙත ගොස් එම Folder එක තෝරන්න.",
            "පියවර 3: New File අයිකනය ක්ලික් කර 'index.html' ලෙස නම් කරන්න. (වෙබ් අඩවියක ආරම්භක පිටුව සැමවිටම index.html ලෙස නම් කිරීම වෙබ් සම්මතයකි).",
            "පියවර 4: පහත කේතය ලියා පහළ දකුණු කෙළවරේ ඇති 'Go Live' බටනය ඔබන්න."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "පළමු පරීක්ෂණ ගොනුව (index.html)",
              code: `<!DOCTYPE html>
<html lang="si">
  <head>
    <meta charset="UTF-8" />
    <title>මගේ පළමු වෙබ් පිටුව</title>
  </head>
  <body>
    <h1>ආයුබෝවන් ලෝකය!</h1>
    <p>මම සාර්ථකව VS Code සහ Live Server සකස් කරගතිමි.</p>
    <p>කේතය වෙනස් කර Save කළ සැණින් බ්‍රවුසරය මෙය යාවත්කාලීන කරයි.</p>
  </body>
</html>`
            }
          ]
        },
        {
          title: "4.5 VS Code Built-in Terminal එක සහ මූලික CLI විධාන",
          content: [
            "වෘත්තීය වෙබ් සංවර්ධකයෙකුට වෙනම Command Prompt විවෘත කිරීම අවශ්‍ය නැත. VS Code තුළම බලගතු Terminal එකක් (Ctrl + `) ඇත.",
            "අත්‍යවශ්‍ය මූලික විධාන (Basic CLI Commands):",
            "• pwd (හෝ cd): ඔබ සිටින Folder එක බැලීම.",
            "• ls (හෝ dir): Folder එක තුළ ඇති ගොනු ලැයිස්තුව බැලීම.",
            "• mkdir project-name: අලුත් Folder එකක් සෑදීම.",
            "• touch style.css (හෝ type nul > style.css): අලුත් ගොනුවක් සෑදීම.",
            "• clear (හෝ cls): Terminal තිරය පිරිසිදු කිරීම."
          ]
        },
        {
          title: "4.6 Multi-cursor Editing සහ Productivity Tips",
          content: [
            "කේත පේළි කිහිපයක එකවර වෙනස්කම් සිදු කිරීමට Alt (Mac: Option) ඔබා අවශ්‍ය තැන් ක්ලික් කරන්න.",
            "• Alt + Click: ස්ථාන කිහිපයක එකවර ටයිප් කිරීම (Multi-cursor).",
            "• Alt + Up/Down: තෝරාගත් කේත පේළිය ඉහළට හෝ පහළට ගෙන යාම.",
            "• Shift + Alt + Down: කේත පේළියක් ක්ෂණිකව පහළට Duplicate කිරීම.",
            "• Ctrl + D: එක සමාන වචන එකින් එක තෝරාගෙන එකවර වෙනස් කිරීම."
          ]
        },
        {
          title: "4.7 Developer Workspace සහ Themes සැකසීම",
          content: [
            "දීර්ඝ වේලාවක් පරිගණක තිරය දෙස බලා සිටීමේදී ඇස්වල ආතතිය අවම කිරීමට Dark Themes භාවිතා කිරීම අත්‍යවශ්‍ය වේ.",
            "ජනප්‍රිය Dark Themes: One Dark Pro, Dracula Theme, Night Owl, GitHub Dark.",
            "Font Ligatures: Fira Code හෝ JetBrains Mono වැනි අකුරු වර්ග මඟින් ===, !==, => වැනි සංකේත අලංකාර ලීගේචර් ලෙස දිස්වේ."
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
          title: "5.1 HTML හැඳින්වීම සහ Document Structure",
          content: [
            "HTML යනු HyperText Markup Language යන්නෙහි කෙටි යෙදුමයි. එය Programming Language එකක් නොව Markup භාෂාවකි.",
            "සරල පැහැදිලි කිරීම: අප නිවසක් තනන විට මුලින්ම ගඩොල්, වැලි සහ සිමෙන්ති යොදා නිවසේ සැකිල්ල (Structure) සාදා ගනිමු. වෙබ් අඩවියක 'ගඩොල් සහ සිමෙන්ති' හෙවත් මූලික සැකිල්ල වන්නේ HTML ය.",
            "ටැග් එකක (Tag) සහ එලිමන්ට් එකක (Element) ව්‍යුහය:",
            "• Opening Tag: <tagname>",
            "• Content: අපට පෙන්වීමට අවශ්‍ය පාඨය හෝ දත්ත",
            "• Closing Tag: </tagname>",
            "සම්පූර්ණ ඒකකය (Opening tag + Content + Closing tag) හඳුන්වන්නේ 'HTML Element' එකක් ලෙසයි.",
            "HTML5 ලේඛනයක අත්‍යවශ්‍ය මූලික ටැග් 4:",
            "1. <!DOCTYPE html>: බ්‍රවුසරයට මෙය නූතන HTML5 ලේඛනයක් බව පවසයි.",
            "2. <html lang='si'>: සමස්ත ලේඛනයේ මව් ටැගය (Root element).",
            "3. <head>: පිටුවේ සැකසුම්, මාතෘකාව (Title), UTF-8 කේතනය සහ පිටුවට අදාළ අමතර තොරතුරු (Metadata) අඩංගු වේ. මෙහි ඇති දෑ සෘජුව පිටුවේ නොපෙනේ.",
            "4. <body>: වෙබ් පිටුව මත පරිශීලකයාගේ ඇසට පෙනෙන සියලුම දෑ (Headings, Paragraphs, Images, Videos) අඩංගු වන්නේ මෙහිය."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML5 Basic Skeleton",
              code: `<!DOCTYPE html>
<html lang="si">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>මගේ පළමු වෙබ් පිටුව</title>
</head>
<body>
  <h1>ආයුබෝවන්!</h1>
  <p>HTML යනු වෙබ් අඩවියක අත්තිවාරමයි.</p>
</body>
</html>`
            }
          ]
        },
        {
          title: "5.2 Headings (h1 සිට h6) සහ Paragraphs (<p>, <br>, <hr>)",
          content: [
            "වෙබ් පිටුවක තොරතුරු පාඨකයාට පහසුවෙන් කියවිය හැකි පරිදි මාතෘකා සහ ඡේද වලට වෙන් කිරීම අත්‍යවශ්‍ය වේ.",
            "Headings (මාතෘකා): HTML හි <h1> සිට <h6> දක්වා මාතෘකා මට්ටම් 6ක් ඇත.",
            "• <h1>: පිටුවේ ප්‍රධානතම මාතෘකාවයි. (එක් වෙබ් පිටුවකට එක් <h1> ටැගයක් පමණක් භාවිතා කිරීම SEO සඳහා ස්වර්ණමය නීතියකි).",
            "• <h2>: ප්‍රධාන අනු මාතෘකා (Sub-headings).",
            "• <h3> සිට <h6>: තවදුරටත් කුඩා මාතෘකා.",
            "Paragraphs (ඡේද): ඡේද ලිවීම සඳහා <p> ටැගය භාවිතා කරයි. බ්‍රවුසරය ස්වයංක්‍රීයව එක් ඡේදයකට පසු පහළින් ඉඩක් (Margin) තබයි.",
            "පේළි කැඩීම සහ සිරස් ඉරි:",
            "• <br>: ඡේදය අවසන් නොකර ඊළඟ පේළියට යාමට (Line Break). මෙය closing tag එකක් නැති Empty/Self-closing ටැගයකි.",
            "• <hr>: මාතෘකා අතර තිරස් බෙදුම් ඉරක් (Horizontal Rule) ඇඳීමට යොදයි."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Headings & Paragraphs Example",
              code: `<h1>පරිගණක ඉතිහාසය</h1>
<p>පරිගණකය මිනිස් ශිෂ්ටාචාරයේ විශිෂ්ටතම සොයාගැනීමකි.<br>එය මිනිසාගේ කාර්යයන් පහසු කළේය.</p>

<hr>

<h2>පළමු පරම්පරාවේ පරිගණක</h2>
<p>මෙම පරිගණක සඳහා රික්තක නල (Vacuum Tubes) භාවිතා කරන ලදී.</p>`
            }
          ]
        },
        {
          title: "5.3 Text Formatting Tags (අකුරු හැඩගැන්වීම)",
          content: [
            "පාඨයක් තුළ වැදගත් වචන ඉස්මතු කිරීමට පහත ටැග් භාවිතා වේ:",
            "• <strong>: අතිශය වැදගත් වචනයක් තද කළු අකුරෙන් පෙන්වීමට (Bold + Semantic meaning).",
            "• <em>: වචනයක් අවධාරණය කිරීමට (Italics + Emphasis).",
            "• <mark>: පාඨකයෙකු කහ පැහැති Highlighter පෑනකින් ලකුණු කළාක් මෙන් පෙන්වීමට.",
            "• <small>: නීතිමය කොන්දේසි (Copyright/Terms) වැනි කුඩා අකුරු සඳහා.",
            "• <code>: පරිගණක කේතයක් හෝ command එකක් පාඨය තුළ පෙන්වීමට.",
            "• <blockquote>: වෙනත් අයෙකුගේ ප්‍රකාශයක් උපුටා දැක්වීමට (Quote)."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Formatting Elements Example",
              code: `<p>මෙම පාඨමාලාව <strong>නොමිලේ</strong> ලබා දේ.</p>
<p>කරුණාකර <em>අවධානයෙන්</em> කියවන්න.</p>
<p>අපගේ පිරිනැමීම <mark>අදින් අවසන්</mark> වේ.</p>
<p>Terminal එකේ <code>git status</code> ලෙස ටයිප් කරන්න.</p>
<blockquote cite="https://example.com">
  "දැනුම යනු බලයයි." - සර් ෆ්‍රැන්සිස් බේකන්
</blockquote>`
            }
          ]
        },
        {
          title: "5.4 Lists: Ordered (<ol>), Unordered (<ul>), සහ Description (<dl>)",
          content: [
            "තොරතුරු ලැයිස්තුවක් ලෙස ඉදිරිපත් කිරීමට HTML හි ලැයිස්තු වර්ග 3ක් ඇත:",
            "1. Unordered List (<ul>): පිළිවෙලක් වැදගත් නොවන ලැයිස්තු සඳහා බුලට් පොයින්ට්ස් (Bullet points) මඟින් පෙන්වයි.",
            "2. Ordered List (<ol>): පියවරෙන් පියවර අනුපිළිවෙලක් වැදගත් වන දෑ සඳහා අංක (1, 2, 3) හෝ අකුරු (A, B, C) මඟින් පෙන්වයි.",
            "සෑම ලැයිස්තු අයිතමයක්ම <li> (List Item) ටැගය තුළ ලියයි.",
            "3. Description List (<dl>): ශබ්දකෝෂයක් මෙන් වචනය සහ එහි අර්ථ දැක්වීම පෙන්වීමට (<dt> = Term, <dd> = Definition)."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML Lists in Action",
              code: `<!-- Unordered List -->
<h3>කැමතිම ක්‍රීඩා:</h3>
<ul>
  <li>ක්‍රිකට්</li>
  <li>පාපන්දු</li>
  <li>බැඩ්මින්ටන්</li>
</ul>

<!-- Ordered List -->
<h3>තේ එකක් සාදන පියවර:</h3>
<ol>
  <li>වතුර උණු කරන්න.</li>
  <li>තේ කොළ දමන්න.</li>
  <li>සීනි සහ කිරි එකතු කරන්න.</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>වෙබ් අඩවියක සැකිල්ල සාදන භාෂාව.</dd>
  <dt>CSS</dt>
  <dd>වෙබ් අඩවිය අලංකාර කරන භාෂාව.</dd>
</dl>`
            }
          ]
        },
        {
          title: "5.5 HTML Comments (<!-- සටහන් -->) සහ කේත කියවීමේ හැකියාව",
          content: [
            "HTML Comments යනු බ්‍රවුසරය මඟින් කියවා ක්‍රියාත්මක නොකරන, නමුත් කේතය ලියන සංවර්ධකයාගේ පහසුව සඳහා තබන සටහන් වේ.",
            "සින්ටැක්ස්: <!-- මෙතැන ඔබේ සටහන ලියන්න -->",
            "ප්‍රයෝජන:",
            "• විශාල වෙබ් පිටුවක කොටස් ලේබල් කිරීම (උදා: <!-- Navbar Starts -->, <!-- Footer Ends -->).",
            "• දෝෂ සෙවීමේදී (Debugging) යම් කේත කොටසක් තාවකාලිකව අක්‍රිය කර තැබීමට.",
            "සටහන: කිසිවිටෙකත් මුරපද හෝ රහසිගත දත්ත Comments තුළ නොතැබිය යුතුය, මන්ද ඕනෑම අයෙකුට 'View Page Source' මඟින් ඒවා දැක ගත හැක!"
          ]
        },
        {
          title: "5.6 Block vs Inline Elements සංකල්පය",
          content: [
            "HTML හි සියලුම elements ප්‍රධාන වර්ග දෙකකට බෙදේ:",
            "1. Block Elements: සැමවිටම අලුත් පේළියකින් ආරම්භ වන අතර පිටුවේ තිරස් සම්පූර්ණ පළලම (Full width: 100%) අත්පත් කර ගනී. උදාහරණ: <div>, <h1>-<h6>, <p>, <ul>, <ol>, <section>, <form>.",
            "2. Inline Elements: අලුත් පේළියකට නොයන අතර අකුරු අතර පවතින ඉඩ පමණක් අත්පත් කර ගනී. උදාහරණ: <span>, <a>, <strong>, <em>, <img>, <code>.",
            "නීතිය: Inline element එකක් තුළ සාමාන්‍යයෙන් Block element එකක් නොතැබිය යුතුය."
          ]
        },
        {
          title: "5.7 HTML Void Elements (Self-closing Tags)",
          content: [
            "බොහෝ HTML elements වලට Opening tag සහ Closing tag ඇත (උදා: <p>...</p>).",
            "නමුත් සමහර elements වලට අභ්‍යන්තර පාඨ අන්තර්ගතයක් නොමැති අතර Closing tag එකක් අවශ්‍ය නොවේ. මේවා Void Elements හෝ Self-closing Elements ලෙස හැඳින්වේ.",
            "ප්‍රධාන Void Elements:",
            "• <img>: ඡායාරූප පෙන්වීමට",
            "• <br>: පේළි කැඩීමට (Line break)",
            "• <hr>: තිරස් බෙදුම් ඉරක් ඇඳීමට",
            "• <input>: Form input fields සඳහා",
            "• <meta>: Document metadata සඳහා",
            "• <link>: බාහිර CSS stylesheets සම්බන්ධ කිරීමට"
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
      description: "Attributes (href, src, alt, target), Hyperlinks (<a>), Images (<img>), Self-closing tags, සහ Tables (table, tr, th, td, rowspan, colspan).",
      learningObjectives: [
        "ගුණාංග (Attributes) යනු මොනවාදැයි සහ ඒවා ලියන syntax එක තේරුම් ගැනීම",
        "<a> ටැගය සහ href, target='_blank', internal page anchors මඟින් පිටු සම්බන්ධ කිරීම",
        "<img> ටැගය, src සහ alt attribute වල වැදගත්කම අවබෝධ කර ගැනීම",
        "<table>, <tr>, <th>, <td>, thead, tbody, rowspan සහ colspan මඟින් දත්ත වගු නිර්මාණය කිරීම"
      ],
      sections: [
        {
          title: "6.1 Attributes යනු මොනවාද? (ටැග් වල ගුණාංග)",
          content: [
            "Attributes (ගුණාංග) යනු HTML ටැග් එකකට අමතර බලයක් හෝ අමතර තොරතුරු ලබා දීම සඳහා භාවිතා කරන විශේෂ වචන වේ.",
            "නිරීක්ෂණ නීති:",
            "1. Attributes සැමවිටම ලියනු ලබන්නේ ආරම්භක ටැගය (Opening Tag) තුළ පමණි.",
            "2. ඒවා නම සහ අගය (name='value') ලෙස යුගල වශයෙන් ලියයි.",
            "උදාහරණයක් ලෙස <a href='https://google.com'> හි 'href' යනු Attribute නම වන අතර 'https://google.com' යනු එහි අගයයි.",
            "පොදු Attributes: id (තනි අනන්‍යතාවය), class (කණ්ඩායම් හැඩගැන්වීම්), title (Mouse hover කළ විට පෙන්වන tooltip එක), style (inline styling)."
          ]
        },
        {
          title: "6.2 සබැඳි හෙවත් Hyperlinks (<a> ටැගය)",
          content: [
            "අන්තර්ජාලය (World Wide Web) එකිනෙකට බැඳී පවතින්නේ සබැඳි හෙවත් Hyperlinks මඟිනි. මේ සඳහා <a> (Anchor tag) භාවිතා කරයි.",
            "ප්‍රධාන Attributes:",
            "• href (Hypertext Reference): පරිශීලකයා ක්ලික් කළ විට යා යුතු වෙබ් ලිපිනය.",
            "• target='_blank': සබැඳිය දැනට ඇති ටැබ් එක වෙනුවට අලුත් browser tab එකක විවෘත කිරීමට.",
            "• Internal Anchors (පිටුව ඇතුළත පිවිසුම්): <a href='#section2'> මඟින් එකම පිටුවේ පහළ කොටසකට ක්ෂණිකව යා හැක.",
            "• Email & Phone Links: mailto:info@example.com සහ tel:+94743491866 මඟින් සෘජුව Email හෝ Call ලබා ගැනීමට හැකියාව ලැබේ."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Hyperlinks Example",
              code: `<!-- බාහිර වෙබ් අඩවියකට සබැඳියක් -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">ගූගල් වෙත පිවිසෙන්න</a>

<!-- එකම වෙබ් අඩවියේ වෙනත් පිටුවකට (Relative URL) -->
<a href="about.html">අප ගැන පිටුව</a>

<!-- සෘජු ඊමේල් සහ දුරකථන සබැඳි -->
<a href="mailto:support@example.com">ඊමේල් පණිවිඩයක් එවන්න</a>
<a href="tel:+94743491866">අප අමතන්න</a>`
            }
          ]
        },
        {
          title: "6.3 පින්තූර එකතු කිරීම (<img> ටැගය)",
          content: [
            "වෙබ් පිටුවකට ඡායාරූප හෝ නිදර්ශන ඇතුළත් කිරීමට <img> ටැගය යොදයි. මෙහි වැදගත්ම කරුණ වන්නේ <img> ටැගයට closing tag එකක් නොමැති වීමයි (Self-closing / Void tag).",
            "අත්‍යවශ්‍ය Attributes 2:",
            "1. src (Source): පින්තූරය ඇති පරිගණක ගොනු ලිපිනය හෝ අන්තර්ජාල URL එක.",
            "2. alt (Alternative Text): අන්තර්ජාලය බිඳවැටීම නිසා පින්තූරය ලෝඩ් නොවූවහොත් ඒ වෙනුවට පෙන්වන විස්තරයයි.",
            "ඇයි alt අත්‍යවශ්‍ය වන්නේ? ඇස් පෙනීම දුර්වල පුද්ගලයන් Screen Reader මෘදුකාංග මඟින් වෙබ් අඩවි කියවන විට, මෙම alt text එක ඔවුන්ට හඬ නඟා කියවයි. එමෙන්ම Google SEO සඳහාද මෙය ප්‍රමුඛ වේ.",
            "width සහ height මඟින් පින්තූරයේ ප්‍රමාණය පික්සල් (px) වලින් පාලනය කළ හැක."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Image Insertion Example",
              code: `<!-- ප්‍රාදේශීය ගොනුවකින් පින්තූරයක් -->
<img src="images/logo.png" alt="වෙබ් අඩවියේ නිල ලාංඡනය" width="200" height="80">

<!-- අන්තර්ජාලයෙන් පින්තූරයක් -->
<img 
  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
  alt="ලැප්ටොප් පරිගණකයක කේත ලියන මෘදුකාංග ඉංජිනේරුවෙක්" 
  width="600" 
  height="400"
>`
            }
          ]
        },
        {
          title: "6.4 දත්ත වගු (HTML Tables - <table>, <tr>, <th>, <td>)",
          content: [
            "ලකුණු ලේඛන, මිල ගණන් ලැයිස්තු හෝ කාලසටහන් වැනි දත්ත පේළි සහ තීරු ලෙස ඉදිරිපත් කිරීමට HTML Tables භාවිතා කරයි.",
            "වගුවක ප්‍රධාන ටැග්:",
            "• <table>: සම්පූර්ණ වගුවේ මව් ටැගය.",
            "• <tr> (Table Row): වගුවේ තිරස් පේළියක්.",
            "• <th> (Table Header): ශීර්ෂ තීරුව (අකුරු තද කළුවෙන් සහ මධ්‍යගතව දිස්වේ).",
            "• <td> (Table Data): සාමාන්‍ය දත්ත කොටුවක්.",
            "උසස් ගුණාංග:",
            "• colspan='2': කොටු දෙකක් තිරස්ව එකතු කිරීමට (Merge Columns).",
            "• rowspan='2': කොටු දෙකක් සිරස්ව එකතු කිරීමට (Merge Rows).",
            "• <thead>, <tbody>, <tfoot>: වගුව වඩාත් වෘත්තීය ලෙස කොටස් 3කට වෙන් කිරීම."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Comprehensive HTML Table with Colspan & Rowspan",
              code: `<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>අංකය</th>
      <th>නම</th>
      <th>විෂයය</th>
      <th>ලකුණු</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td rowspan="2">කසුන් පෙරේරා</td>
      <td>HTML5</td>
      <td>95</td>
    </tr>
    <tr>
      <td>02</td>
      <td>CSS3</td>
      <td>88</td>
    </tr>
    <tr>
      <td colspan="3"><strong>සාමාන්‍ය ලකුණු එකතුව</strong></td>
      <td><strong>183</strong></td>
    </tr>
  </tbody>
</table>`
            }
          ]
        }
      ],
      keyPoints: [
        "Attributes සැමවිටම opening tag එක තුළ name='value' ලෙස ලියයි.",
        "<a> ටැගය href සමඟ සබැඳි සාදයි; target='_blank' අලුත් ටැබ් එකක විවෘත කරයි.",
        "<img> ටැගය self-closing වන අතර alt attribute එක accessibility සහ SEO සඳහා අත්‍යවශ්‍ය වේ.",
        "වගුවක් සෑදීමට <table>, පේළි සඳහා <tr>, ශීර්ෂ සඳහා <th> සහ දත්ත සඳහා <td> යොදයි."
      ],
      exercises: [
        { id: 1, question: "පින්තූරයක් සඳහා alt Attribute එක වැදගත් වන්නේ ඇයි?" },
        { id: 2, question: "colspan සහ rowspan අතර ඇති වෙනස උදාහරණයක් සහිතව පැහැදිලි කරන්න." }
      ]
    },
    {
      id: 7,
      volumeId: 1,
      chapterNumber: 7,
      title: "ෆෝම් - පරිශීලක දත්ත ලබා ගැනීම (HTML Forms)",
      englishTitle: "HTML Forms & User Input",
      pageRange: "පිටු 24 - 27",
      description: "<form> ටැගය, action & method (GET vs POST), input types (text, password, email, checkbox, radio), <label> (for/id), textarea, select, සහ validation.",
      learningObjectives: [
        "HTML ෆෝම් (Forms) වල වැදගත්කම සහ <form> ටැගයේ කාර්යභාරය",
        "GET සහ POST methods අතර ඇති ආරක්ෂක සහ තාක්ෂණික වෙනස්කම්",
        "විවිධ Input වර්ග (text, password, email, number, date, file) නිවැරදිව භාවිතය",
        "<label> ටැගයේ for ගුණාංගය සහ input එකේ id අතර සම්බන්ධය",
        "Dropdown (<select>) සහ බහුවිධ පෙළ (<textarea>) භාවිතය",
        "HTML5 Validation (required, minlength, pattern) මඟින් නිවැරදි දත්ත තහවුරු කිරීම"
      ],
      sections: [
        {
          title: "7.1 ෆෝරමයක මූලික ව්‍යුහය සහ <form> ටැගය",
          content: [
            "සැබෑ ලෝකයේ වෙබ් අඩවියකදී පරිශීලකයාගෙන් තොරතුරු ලබා ගැනීම අතිශය සුලභ කාර්යයකි (Login, Register, Contact, Search, Online Shopping Checkout).",
            "මේ සියල්ල සඳහා පදනම වන්නේ <form> ටැගයයි.",
            "<form> ටැගයේ ප්‍රධාන ගුණාංග 2:",
            "1. action: ෆෝරමය Submit කළ විට එහි දත්ත යැවිය යුතු Backend Server එකේ ලිපිනය (උදා: /api/login හෝ process.php).",
            "2. method: දත්ත යවන ක්‍රමය (HTTP Method). ප්‍රධාන ක්‍රම 2කි:",
            "• GET: දත්ත URL එක හරහා ප්‍රසිද්ධියේ යවයි (උදා: search.html?q=shoes). Search boxes සඳහා සුදුසුය. මුරපද (Passwords) සඳහා කිසිවිටෙකත් සුදුසු නොවේ.",
            "• POST: දත්ත HTTP Request Body එක තුළ සඟවා ආරක්ෂිතව යවයි. Passwords, Credit card තොරතුරු සහ Personal data සඳහා සැමවිටම POST භාවිතා කළ යුතුය."
          ]
        },
        {
          title: "7.2 ප්‍රධාන Input වර්ග සහ Labels (<label for='...'>)",
          content: [
            "<input> යනු ෆෝරමයක වඩාත්ම බහුකාර්ය ටැගයයි. එහි 'type' attribute එක මඟින් එය ක්‍රියා කරන ආකාරය තීරණය වේ:",
            "• type='text': සාමාන්‍ය නම හෝ පාඨ ලබා ගැනීමට.",
            "• type='password': ටයිප් කරන අකුරු තිත් (Dots/Bullets) ලෙස සඟවා පෙන්වීමට.",
            "• type='email': විද්‍යුත් තැපැල් ලිපිනයක් දැයි බ්‍රවුසරය මඟින්ම (@ ලකුණ) පරීක්ෂා කිරීමට.",
            "• type='number': ඉලක්කම් පමණක් ලබා ගැනීමට (min සහ max අගයන් සහිතව).",
            "• type='date': Calendar එකකින් දිනයක් තෝරා ගැනීමට.",
            "• type='file': පරිගණකයෙන් PDF හෝ පින්තූරයක් Upload කිරීමට.",
            "<label> ටැගයේ රහස: <label for='user-name'> හි 'for' අගය සහ <input id='user-name'> හි 'id' අගය සමාන කළ යුතුය. එවිට පරිශීලකයා අදාළ අකුරු මත ක්ලික් කළ විටද input කොටුව Active වේ. Accessibility සඳහා මෙය අනිවාර්ය වේ."
          ]
        },
        {
          title: "7.3 Radio Buttons, Checkboxes සහ Selection Elements",
          content: [
            "විකල්ප තෝරා ගැනීම සඳහා:",
            "• Radio Buttons (type='radio'): විකල්ප කිහිපයකින් එකක් පමණක් තෝරා ගැනීමට (උදා: ස්ත්‍රී/පුරුෂ භාවය). සියලුම Radio බොත්තම් වල name attribute එක සමාන විය යුතුය. එවිට එකක් තෝරන විට අනෙක deselect වේ.",
            "• Checkboxes (type='checkbox'): එකකට වඩා වැඩි විකල්ප කිහිපයක් තෝරා ගැනීමට (උදා: කැමති විෂයයන්, Terms & Conditions එකඟ වීම).",
            "• Dropdown List (<select> සහ <option>): ඉඩ ඉතිරි කරමින් පහළට විවෘත වන ලැයිස්තුවකින් එකක් තෝරා ගැනීමට (උදා: රට හෝ දිස්ත්‍රික්කය තෝරා ගැනීම).",
            "• Textarea (<textarea>): ඡේද හෝ දිගු පණිවිඩ ලබා ගැනීමට (rows සහ cols ප්‍රමාණය තීරණය කරයි)."
          ]
        },
        {
          title: "7.4 Form Validation සහ සම්පූර්ණ ලියාපදිංචි වීමේ ෆෝරමය",
          content: [
            "HTML5 මඟින් JavaScript නොමැතිවම සරල දත්ත නිවැරදිදැයි පරීක්ෂා කිරීම (Client-side Validation) සිදු කළ හැක:",
            "• required: මෙම කොටුව හිස්ව තබා submit කළ නොහැක.",
            "• minlength / maxlength: අකුරු අවම සහ උපරිම ප්‍රමාණය සීමා කිරීමට.",
            "• placeholder: කොටුව තුළ ලා අළු පැහැයෙන් පෙන්වන ඉඟිය (Hint).",
            "පහත දැක්වෙන්නේ සියලු අංග සහිත වෘත්තීය ලියාපදිංචි වීමේ ආකෘතියකි:"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Complete Professional Registration Form",
              code: `<form action="/register" method="POST">
  <fieldset>
    <legend>පරිශීලක ගිණුම් විස්තර</legend>
    
    <p>
      <label for="fullname">සම්පූර්ණ නම:</label><br>
      <input type="text" id="fullname" name="fullname" placeholder="කසුන් පෙරේරා" required minlength="3">
    </p>

    <p>
      <label for="useremail">විද්‍යුත් තැපෑල:</label><br>
      <input type="email" id="useremail" name="email" placeholder="kasun@example.com" required>
    </p>

    <p>
      <label for="pass">මුරපදය:</label><br>
      <input type="password" id="pass" name="password" required minlength="8" placeholder="අවම අකුරු 8ක්">
    </p>

    <p>
      <label>ස්ත්‍රී/පුරුෂ භාවය:</label><br>
      <input type="radio" name="gender" id="male" value="male" checked>
      <label for="male">පිරිමි</label>
      <input type="radio" name="gender" id="female" value="female">
      <label for="female">ගැහැණු</label>
    </p>

    <p>
      <label for="province">පළාත තෝරන්න:</label><br>
      <select id="province" name="province">
        <option value="western">බස්නාහිර</option>
        <option value="central">මධ්‍යම</option>
        <option value="southern">දකුණ</option>
      </select>
    </p>

    <p>
      <label for="bio">ඔබ ගැන හැඳින්වීමක්:</label><br>
      <textarea id="bio" name="bio" rows="4" cols="40" placeholder="කෙටි විස්තරයක්..."></textarea>
    </p>

    <p>
      <input type="checkbox" id="terms" name="terms" required>
      <label for="terms">මම සියලුම නීති හා කොන්දේසි වලට එකඟ වෙමි.</label>
    </p>

    <button type="submit">ගිණුම සාදන්න</button>
    <button type="reset">නැවත සකසන්න</button>
  </fieldset>
</form>`
            }
          ]
        }
      ],
      keyPoints: [
        "name attribute එක Backend Server එකට දත්ත හඳුනා ගැනීමට අත්‍යවශ්‍ය වේ.",
        "Passwords සහ වැදගත් තොරතුරු සඳහා සැමවිටම method='POST' භාවිතා කරන්න.",
        "Radio buttons වල name එක සමාන විය යුතු අතර Labels වල for සහ Input වල id සමාන විය යුතුය.",
        "required attribute මඟින් හිස්ව submit කිරීම වළක්වයි."
      ],
      exercises: [
        { id: 1, question: "GET සහ POST ක්‍රම අතර ඇති ප්‍රධාන වෙනස්කම් 2ක් ලියන්න." },
        { id: 2, question: "<label> හි for සහ <input> හි id එක සමාන කිරීමෙන් ලැබෙන ප්‍රධාන වාසි 2 කුමක්ද?" },
        { id: 3, question: "Radio Buttons වල එකක් පමණක් තෝරා ගැනීමට ඉඩ සලසන්නේ කෙසේද?" }
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
        "Layout Elements: header, nav, main, section, article, aside, footer සම්මත භාවිතය",
        "SEO (Search Engine Optimization) සහ Screen Readers සඳහා සෙමැන්ටික් ටැග් වල දැවැන්ත බලපෑම"
      ],
      sections: [
        {
          title: "8.1 සෙමැන්ටික් ටැග් යනු කුමක්ද සහ ඇයි එය වැදගත්?",
          content: [
            "සෙමැන්ටික් (Semantic) යනු 'අර්ථවත්' යන්නයි. සෙමැන්ටික් HTML ටැගයක් දුටු සැණින් එම ටැගය තුළ ඇත්තේ කුමන ආකාරයේ අන්තර්ගතයක්දැයි බ්‍රවුසරයට, සෙවුම් යන්ත්‍ර (Googlebot) වලට මෙන්ම කේතය කියවන වෙනත් සංවර්ධකයෙකුටද පැහැදිලිව තේරුම් ගත හැක.",
            "සැබෑ ලෝකයේ උපමාව: නිවසක් සැලසුම් කිරීමේදී කාමර වලට 'කාමරය 1', 'කාමරය 2', 'කාමරය 3' කියනවා වෙනුවට 'කුස්සිය', 'නිදන කාමරය', 'නාන කාමරය' සහ 'සාලය' ලෙස අර්ථවත්ව නම් කිරීම වැනි දෙයකි.",
            "පැරණි ක්‍රමය (Non-semantic): සෑම දෙයකටම <div class='header'>, <div class='nav'>, <div class='footer'> ලිවීම.",
            "නූතන ක්‍රමය (Semantic HTML5): <header>, <nav>, <footer> වැනි සෘජු ටැග් භාවිතය."
          ]
        },
        {
          title: "8.2 සම්මත වෙබ් සැකිල්ල සහ ප්‍රධාන Layout Elements",
          content: [
            "සම්මත වෙබ් පිටුවක ප්‍රධාන කොටස් 7:",
            "1. <header>: පිටුවේ හෝ ලිපියක ඉහළම කොටස (ලාංඡනය, ආදර්ශ පාඨය ආදිය).",
            "2. <nav>: ප්‍රධාන සංචාලන මෙනුව (Navigation Links).",
            "3. <main>: පිටුවේ මූලික සහ අද්විතීය ප්‍රධාන අන්තර්ගතය. (එක් පිටුවකට ඇත්තේ එක් <main> ටැගයක් පමණි).",
            "4. <article>: තනිව සම්පූර්ණ අර්ථයක් දෙන ಸ್ವයංක්‍රීය අන්තර්ගතයක් (උදා: බ්ලොග් ලිපියක්, පුවත්පත් වාර්තාවක් හෝ පරිශීලක Review එකක්). වෙනත් වෙබ් අඩවියක නැවත පළ කළද අර්ථය නොවෙනස් වන දෑ.",
            "5. <section>: එකම තේමාවකට අයත් අන්තර්ගත කණ්ඩයක් (උදා: 'අපගේ සේවාවන්', 'මිල ගණන්', 'ප්‍රශ්නෝත්තර').",
            "6. <aside>: ප්‍රධාන අන්තර්ගතයට අදාළ නමුත් අතුරු තොරතුරු (Sidebar, දැන්වීම්, අදාළ ලිපි).",
            "7. <footer>: පිටුවේ පහළම කොටස (Copyright, Terms, Contact links)."
          ],
          asciiDiagram: `__________________________________________________________
|                  <header> (හිස)                         |
|________________________________________________________|
|                  <nav> (සංචාලන මෙනුව)                   |
|________________________________________________________|
|           |                 <main>                 |   |
|  <aside>  |  _________________   ________________  | <aside>
|  (වම්     | |   <article>     | |   <section>    | | (දකුණු
|   පුවරුව) | |_________________| |________________| |  පුවරුව)
|___________|________________________________________|___|
|                  <footer> (පාදය)                       |
|________________________________________________________|`
        },
        {
          title: "8.3 Semantic vs Non-Semantic (div සහ span වල නියම තැන)",
          content: [
            "<div> සහ <span> යනු කිසිදු සහජ අර්ථයක් (No semantic meaning) නැති ටැග් වේ.",
            "• <div>: Block-level container එකකි. එය භාවිතා කළ යුත්තේ පිරිසිදු CSS Layout හැඩගැන්වීම් (Styling hooks) සහ Flexbox/Grid wrappers සඳහා පමණි.",
            "• <span>: Inline container එකකි. ඡේදයක් මැද ඇති තනි වචනයක පාට හෝ අකුරු හැඩය වෙනස් කිරීමට යොදයි.",
            "රන් නීතිය: යම් කොටසකට අදාළ සෙමැන්ටික් ටැගයක් (nav, header, article ආදිය) පවතී නම්, ඒ වෙනුවට <div> භාවිතා නොකරන්න!"
          ]
        },
        {
          title: "8.4 SEO සහ Accessibility සඳහා Semantic HTML හි බලපෑම",
          content: [
            "1. Google Search Ranking (SEO): Google සෙවුම් යන්ත්‍රයේ Web Crawler එක පැමිණි විට, පිටුවේ <main> සහ <article> තුළ ඇති වචන වලට වැඩි ප්‍රමුඛතාවයක් ලබා දී ශ්‍රේණිගත කරයි.",
            "2. Screen Readers (Accessibility): ඇස් පෙනීම දුර්වල පුද්ගලයන් Screen Reader මෘදුකාංග මඟින් පිටුව කියවන විට, ඔවුන්ට පහසුවෙන් 'Jump to Navigation' හෝ 'Jump to Main Content' ලෙස එක් ක්ලික් එකකින් අදාළ කොටසට යා හැක්කේ සෙමැන්ටික් ටැග් තිබුණහොත් පමණි."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Complete Semantic HTML5 Page Architecture",
              code: `<!DOCTYPE html>
<html lang="si">
<head>
  <meta charset="UTF-8">
  <title>සෙමැන්ටික් වෙබ් පිටුව</title>
</head>
<body>
  <header>
    <h1>තාක්ෂණික දැක්ම</h1>
    <nav>
      <ul>
        <li><a href="#home">මුල් පිටුව</a></li>
        <li><a href="#articles">ලිපි</a></li>
        <li><a href="#contact">අප අමතන්න</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article id="articles">
      <header>
        <h2>HTML5 සෙමැන්ටික් ටැග් වල වටිනාකම</h2>
        <p>කර්තෘ: සචින්ත ඉමේෂ | දිනය: 2026-03-20</p>
      </header>
      <section>
        <p>සෙමැන්ටික් ටැග් මඟින් වෙබ් අඩවියක ව්‍යුහය අතිශය පැහැදිලි වේ.</p>
      </section>
    </article>
  </main>

  <aside>
    <h3>අනුග්‍රාහක දැන්වීම්</h3>
    <p>නවතම Full Stack සංවර්ධන කට්ටලය දැන් ලබාගන්න.</p>
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
        "Semantic HTML මඟින් SEO ශ්‍රේණිගත කිරීම සහ Screen Readers වලට උපරිම සහය ලැබේ.",
        "පිටුවක ප්‍රධාන අන්තර්ගතය සඳහා ඇත්තේ එක් <main> ටැගයක් පමණි.",
        "<div> සහ <span> යෙදිය යුත්තේ අර්ථයක් රහිත පිරිසිදු Styling සඳහා පමණි."
      ],
      exercises: [
        { id: 1, question: "<div> වෙනුවට <article> හෝ <section> භාවිතා කිරීමේ වාසි 2ක් ලියන්න." },
        { id: 2, question: "පිටුවක <main> ටැගය තුළ තැබිය යුත්තේ කුමන ආකාරයේ අන්තර්ගතයක්ද?" }
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
        "වෙබ් ප්‍රවේශ්‍යතාව (a11y) යනු කුමක්දැයි සහ WCAG මාර්ගෝපදේශ වටහා ගැනීම",
        "ආබාධ සහිත පුද්ගලයන් වෙබ් අඩවි පරිශීලනය කරන අයුරු (Screen Readers, Voice Control)",
        "Alt text නීති, Form Labels, Heading Hierarchy සහ Color Contrast මූලධර්ම",
        "Keyboard Navigation (Tab Index) සහ ARIA Attributes (aria-label, role) භාවිතය"
      ],
      sections: [
        {
          title: "9.1 ප්‍රවේශ්‍යතාවය (a11y) යනු කුමක්ද සහ WCAG මූලධර්ම",
          content: [
            "Accessibility යනු ලෝකයේ ඕනෑම අයෙකුට - විශේෂයෙන් ශාරීරික, දෘශ්‍යාබාධ හෝ ශ්‍රවණාබාධ ඇති පුද්ගලයන්ටද - කිසිදු බාධාවකින් තොරව වෙබ් අඩවියක් භාවිතා කිරීමට ඇති හැකියාවයි.",
            "තාක්ෂණික ලෝකයේ Accessibility යන්න 'a11y' ලෙස හඳුන්වයි (A සහ Y අතර අකුරු 11ක් ඇති බැවින්).",
            "සැබෑ ලෝකයේ උපමාව: පොදු රෝහලකට හෝ බැංකුවකට පඩිපෙළට අමතරව රෝද පුටු සඳහා බෑවුම් මාර්ගයක් (Wheelchair Ramp) හෝ විදුලි සෝපානයක් (Elevator) සවි කිරීම වැනි දෙයකි වෙබ් ප්‍රවේශ්‍යතාව.",
            "WCAG (Web Content Accessibility Guidelines) යනු ලෝක සම්මත ප්‍රවේශ්‍යතා නීති පද්ධතියයි (POUR මූලධර්ම: Perceivable, Operable, Understandable, Robust)."
          ]
        },
        {
          title: "9.2 Alt Text, Heading Hierarchy සහ Color Contrast නීති",
          content: [
            "අත්‍යවශ්‍ය a11y රීති 3:",
            "1. අර්ථවත් Alt Text: පින්තූර සඳහා alt='image1' ලිවීම සම්පූර්ණයෙන්ම වැරදිය. පින්තූරයෙන් කියවෙන සැබෑ අදහස ලිවිය යුතුය.",
            "වැරදි: <img src='dog.jpg' alt='බල්ලාගේ පින්තූරය'>",
            "නිවැරදි: <img src='dog.jpg' alt='තණකොළ පිට්ටනියක කහ පැහැති බෝලයක් අල්ලා ගන්නා රිට්‍රීවර් වර්ගයේ බල්ලෙක්'>",
            "2. Headings පිළිවෙල (Hierarchy): <h1> න් පසු කෙළින්ම <h3> ට නොපනින්න. සැමවිටම <h1> ➔ <h2> ➔ <h3> අනුපිළිවෙල රකින්න.",
            "3. වර්ණ වෙනස (Color Contrast): පසුබිම සහ අකුරු අතර ප්‍රමාණවත් වෙනසක් (අවම Contrast Ratio 4.5:1) තිබිය යුතුය. ලා අළු පසුබිමක සුදු අකුරු ලිවීම දෘශ්‍යාබාධිත අයට කියවීමට නොහැකිය."
          ]
        },
        {
          title: "9.3 Keyboard Navigation සහ ARIA මූලික කරුණු",
          content: [
            "බොහෝ ආබාධ සහිත පුද්ගලයන් Mouse එක භාවිතා නොකරයි; ඔවුන් මුළු වෙබ් අඩවියම පාලනය කරන්නේ Keyboard එකේ Tab, Enter, සහ Space බොත්තම් මඟිනි.",
            "• Buttons vs Links: පරිශීලකයා වෙනත් පිටුවකට ගෙන යන්නේ නම් <a> යොදන්න. පිටුව ඇතුළත ක්‍රියාවක් (Modal විවෘත කිරීම, Submit කිරීම) කරන්නේ නම් <button> යොදන්න. <div> එකකට click event දැමීමෙන් Keyboard Navigation බිඳවැටේ.",
            "• ARIA (Accessible Rich Internet Applications): HTML ටැග් වලින් පමණක් ප්‍රකාශ කළ නොහැකි අවස්ථාවලදී Screen Readers වලට උපකාර කිරීමට ARIA attributes භාවිතා වේ.",
            "උදා: <button aria-label='මෙනුව විවෘත කරන්න'>☰</button>"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Accessible HTML Components Example",
              code: `<!-- Accessible Icon Button with aria-label -->
<button type="button" aria-label="ගිණුමෙන් ඉවත් වන්න" class="logout-btn">
  <svg width="24" height="24" aria-hidden="true">
    <!-- Icon Graphic -->
  </svg>
</button>

<!-- Accessible Input with Explicit Label -->
<div class="form-group">
  <label for="search-box">වෙබ් අඩවිය තුළ සොයන්න:</label>
  <input type="search" id="search-box" name="query" placeholder="උදා: HTML පාඩම්">
</div>`
            }
          ]
        }
      ],
      keyPoints: [
        "Accessibility යනු සැමට සම අයිතිය ලබා දෙන සදාචාරාත්මක සහ වෘත්තීය වගකීමකි.",
        "Keyboard එකෙන් පමණක් වෙබ් අඩවිය භාවිතා කළ හැකි විය යුතුය (Tab Navigation).",
        "Screen Readers සඳහා අර්ථවත් alt attributes සහ Form Labels අනිවාර්ය වේ."
      ],
      exercises: [
        { id: 1, question: "<button> සහ <a> අතර ප්‍රවේශ්‍යතාවට (a11y) අදාළ මූලික වෙනස කුමක්ද?" },
        { id: 2, question: "aria-label attribute එක භාවිතා කරන්නේ කුමන අවස්ථාවලදීද?" }
      ]
    },
    {
      id: 10,
      volumeId: 1,
      chapterNumber: 10,
      title: "පළමු පූර්ණ HTML ව්‍යාපෘතිය (The Final HTML Capstone Project)",
      englishTitle: "The Final HTML Capstone Project",
      pageRange: "පිටු 32 - 36",
      description: "My Tech Journal බහු-පිටු වෙබ් අඩවිය, වෘත්තීය Folder Structure (index, about, contact, images), සහ Testing & Debugging.",
      learningObjectives: [
        "මෙතෙක් උගත් සියලුම HTML පාඩම් එකතු කර පූර්ණ බහු-පිටු වෙබ් අඩවියක් නිර්මාණය කිරීම",
        "වෘත්තීය මට්ටමේ ගොනු ව්‍යුහයක් (Folder Structure) සහ Cross-linking සැකසීම",
        "Testing & Debugging: කැඩුණු ලින්ක්ස් (Broken links) සහ Validation පරීක්ෂා කිරීම",
        "පළමු පරිමාවේ සම්පූර්ණ සාරාංශය සහ සම්මුඛ පරීක්ෂණ (Interview) ප්‍රශ්න"
      ],
      sections: [
        {
          title: "10.1 ව්‍යාපෘති සැකැස්ම සහ Folder Structure",
          content: [
            "වෘත්තීය වෙබ් සංවර්ධකයෙකුගේ ගමනේ වැදගත්ම සන්ධිස්ථානය වන්නේ තනිවම බහු-පිටු වෙබ් අඩවියක් (Multi-page Website) බිංදුවේ සිට ගොඩනැගීමයි.",
            "අප නිර්මාණය කරන්නේ 'My Tech Journal' (මගේ තාක්ෂණික දිනපොත) වෙබ් අඩවියයි.",
            "ව්‍යාපෘති ගොනු ව්‍යුහය (Folder Architecture):",
            "• my-tech-journal/ (ප්‍රධාන ෆෝල්ඩරය)",
            "  ├── index.html (මුල් පිටුව / Homepage)",
            "  ├── about.html (මා ගැන සහ අත්දැකීම්)",
            "  ├── contact.html (සම්බන්ධතා ෆෝරමය)",
            "  └── assets/",
            "      └── images/ (logo.png, profile.jpg)"
          ],
          asciiDiagram: `my-tech-journal/
│
├── index.html        <-- මුල් පිටුව (Home, Articles list, Intro)
├── about.html        <-- කර්තෘ ගැන විස්තර සහ දක්ෂතා වගුව
├── contact.html      <-- Feedback & Contact Form
└── assets/
    └── images/
        ├── avatar.jpg
        └── banner.png`
        },
        {
          title: "10.2 Navigation Bar සහ අන්තර්-සම්බන්ධතා (Cross-linking)",
          content: [
            "සියලුම පිටු එකිනෙකට සම්බන්ධ කිරීමට සෑම පිටුවකම එකම ආකාරයේ Navigation Bar එකක් තිබිය යුතුය.",
            "සාපේක්ෂ ලිපින (Relative Paths):",
            "• index.html හි සිට about.html වෙත: <a href='about.html'>",
            "• පින්තූරයකට: <img src='assets/images/avatar.jpg'>",
            "පරිශීලකයා කුමන පිටුවේ සිටියද වෙනත් ඕනෑම පිටුවකට එක් ක්ලික් එකකින් යා හැකි විය යුතුය."
          ]
        },
        {
          title: "10.3 Testing, Debugging සහ W3C Validator",
          content: [
            "වෙබ් අඩවියක් Live කිරීමට පෙර සිදු කළ යුතු පරීක්ෂණ:",
            "1. Broken Links Check: පිටුවේ ඇති සියලුම ලින්ක්ස් ක්ලික් කර බලන්න. කිසිදු සබැඳියකින් 404 Not Found error නොපැමිණිය යුතුය.",
            "2. Form Submission Check: Contact Form එකේ required fields හිස්ව submit කළ නොහැකි බවත්, නිවැරදි email එකක් ඉල්ලා සිටින බවත් පරීක්ෂා කරන්න.",
            "3. W3C HTML Validator (validator.w3.org): ඔබේ HTML කේතය W3C නිල වෙබ් අඩවියට ඇතුළත් කර කිසිදු Syntax Errors හෝ Unclosed Tags නොමැති බව තහවුරු කරගන්න."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Capstone Project: contact.html Complete Code",
              code: `<!DOCTYPE html>
<html lang="si">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>සම්බන්ධ වන්න - My Tech Journal</title>
</head>
<body>
  <header>
    <h1>My Tech Journal</h1>
    <nav>
      <ul>
        <li><a href="index.html">මුල් පිටුව</a></li>
        <li><a href="about.html">මා ගැන</a></li>
        <li><a href="contact.html"><strong>සම්බන්ධ වන්න</strong></a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>අප හා සම්බන්ධ වන්න</h2>
    <p>ඔබට කිසියම් ගැටළුවක් හෝ සහයෝගීතා යෝජනාවක් ඇත්නම් පහත පෝරමය පුරවන්න.</p>

    <form action="/submit-contact" method="POST">
      <fieldset>
        <legend>පණිවිඩය එවන්න</legend>
        <p>
          <label for="name">ඔබේ සම්පූර්ණ නම:</label><br>
          <input type="text" id="name" name="sender_name" required placeholder="කසුන් පෙරේරා">
        </p>
        <p>
          <label for="email">විද්‍යුත් තැපෑල:</label><br>
          <input type="email" id="email" name="sender_email" required placeholder="kasun@example.com">
        </p>
        <p>
          <label for="msg">ඔබගේ පණිවිඩය:</label><br>
          <textarea id="msg" name="message" rows="5" cols="45" required placeholder="ඔබගේ අදහස මෙහි ලියන්න..."></textarea>
        </p>
        <button type="submit">පණිවිඩය එවන්න</button>
      </fieldset>
    </form>
  </main>

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
        "වෘත්තීය මට්ටමේදී වෙබ් අඩවියක අලංකාරයට වඩා එහි ව්‍යුහය (Structure) නිවැරදිව තිබීම අතිශය වැදගත් වේ.",
        "සැකිල්ල ශක්තිමත් නම්, ඕනෑම මොහොතක CSS මඟින් ලස්සන කිරීම ඉතා පහසුය.",
        "W3C Validator මඟින් කේතය පරීක්ෂා කිරීම ලොව පිළිගත් සම්මතයකි."
      ],
      exercises: [
        { id: 1, question: "බහු-පිටු වෙබ් අඩවියක Navigation Bar එකක් අත්‍යවශ්‍ය වන්නේ ඇයි?" },
        { id: 2, question: "W3C Validator භාවිතයේ ප්‍රධාන වාසිය කුමක්ද?" }
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
        "HTTP/HTTPS Headers සහ Status Codes (200, 301, 404, 500) වල අර්ථයන්",
        "Schema.org සහ JSON-LD මඟින් Google සෙවුම් ප්‍රතිඵලවල Rich Snippets ලබා ගැනීම",
        "Core Web Vitals (LCP, FID/INP, CLS) මැනීම සහ Layout Shift වැළැක්වීම",
        "HTML මට්ටමින් සිදුවන XSS (Cross-Site Scripting) ප්‍රහාර සහ Sanitization"
      ],
      sections: [
        {
          title: "11.1 HTTP Headers සහ Status Codes (2xx, 3xx, 4xx, 5xx)",
          content: [
            "බ්‍රවුසරයක් සහ වෙබ් සර්වර් එකක් අතර සන්නිවේදනය සිදුවන්නේ HTTP (Hypertext Transfer Protocol) හරහාය.",
            "සෑම ඉල්ලීමකටම (Request) සර්වර් එක ලබා දෙන පිළිතුරේ (Response) තත්ත්වය Status Code එකකින් දැක්වේ:",
            "• 2xx (Success): 200 OK - ඉල්ලීම සාර්ථකව ඉටු විය.",
            "• 3xx (Redirection): 301 Moved Permanently - පිටුව ස්ථිරවම අලුත් ලිපිනයකට මාරු කර ඇත (SEO ආරක්ෂා වේ).",
            "• 4xx (Client Error): 404 Not Found - ඔබ සොයන පිටුව සර්වර් එකේ නැත. 403 Forbidden - පිවිසීමට අවසර නැත.",
            "• 5xx (Server Error): 500 Internal Server Error - සර්වර් එකේ කේත දෝෂයක් නිසා අඩපණ වී ඇත. 503 Service Unavailable."
          ]
        },
        {
          title: "11.2 Schema.org සහ JSON-LD Structured Data",
          content: [
            "සාමාන්‍යයෙන් Google සෙවුම් යන්ත්‍රයට වෙබ් පිටුවක ඇති අකුරු කියවිය හැකි වුවද, 'රු. 5,000' යනු මිලක් බවත්, 'තරු 5' යනු Rating එකක් බවත් තේරුම් ගැනීමට අපහසුය.",
            "Schema.org Structured Data මඟින් සෙවුම් යන්ත්‍ර වලට මෙම අර්ථය ලබා දේ. මේ සඳහා වර්තමානයේ ලොව ප්‍රමුඛතම ආකෘතිය වන්නේ JSON-LD (JavaScript Object Notation for Linked Data) ය.",
            "වාසිය: Google Search වල ඔබේ පිටුව ඉදිරියෙන් තරු ලකුණු, මිල ගණන් සහ පින්තූර සහිත Rich Snippets ලෙස දිස්වීමෙන් Click-Through Rate (CTR) ඉහළ යයි."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "JSON-LD Structured Data Example",
              code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Full Stack Web Development in Sinhala",
  "description": "ශ්‍රී ලංකාවේ ප්‍රමුඛතම පූර්ණ වෙබ් සංවර්ධන පාඨමාලාව.",
  "provider": {
    "@type": "Person",
    "name": "T. Sachintha Imesh [FYZIE]"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "LKR",
    "availability": "https://schema.org/InStock"
  }
}
</script>`
            }
          ]
        },
        {
          title: "11.3 Core Web Vitals (LCP, INP, CLS) සහ XSS ආරක්ෂාව",
          content: [
            "Google විසින් වෙබ් අඩවියක වේගය සහ පරිශීලක අත්දැකීම මනින ප්‍රධාන මිතික (Core Web Vitals) 3:",
            "1. LCP (Largest Contentful Paint): පිටුවේ විශාලතම පින්තූරය හෝ අකුරු කොටස පෙනීමට ගතවන කාලය (තත්පර 2.5 ට වඩා අඩු විය යුතුය).",
            "2. INP (Interaction to Next Paint): පරිශීලකයා බොත්තමක් එබූ විට ප්‍රතිචාර දැක්වීමට ගතවන කාලය (200ms ට අඩු විය යුතුය).",
            "3. CLS (Cumulative Layout Shift): පිටුව ලෝඩ් වන විට කොටස් එහා මෙහා සෙලවීමේ ප්‍රමාණය (0.1 ට අඩු විය යුතුය). පින්තූර සඳහා width සහ height ලබා දීමෙන් CLS බිංදුවට අඩු කළ හැක!",
            "XSS (Cross-Site Scripting) ආරක්‍ෂාව: පරිශීලකයන් ෆෝරම් හරහා ඇතුළත් කරන අකුරු සෘජුව HTML ලෙස render නොකරන්න. විශේෂ ලකුණු HTML Entities (&lt;, &gt;, &quot;) බවට පරිවර්තනය (Sanitize) කරන්න."
          ]
        }
      ],
      keyPoints: [
        "HTTP Status Codes (200, 301, 404, 500) මඟින් සර්වර් සහ බ්‍රවුසර සන්නිවේදනයේ තත්ත්වය කියවයි.",
        "JSON-LD මඟින් Google සෙවුම් ප්‍රතිඵලවල Rich Results ලබා ගැනීමට ඉඩ සලසයි.",
        "CLS වැළැක්වීමට සෑමවිටම පින්තූර වලට width සහ height ලබා දෙන්න.",
        "XSS ප්‍රහාර වැළැක්වීමට විශේෂ ලකුණු වෙනුවට HTML Entities යොදන්න."
      ],
      exercises: [
        { id: 1, question: "HTTP 301 සහ 404 අතර වෙනස කුමක්ද?" },
        { id: 2, question: "CLS (Cumulative Layout Shift) යනු කුමක්ද? එය වළක්වා ගන්නේ කෙසේද?" }
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
        "<video> සහ <audio> ටැග් නිවැරදිව පාලනය කිරීම (controls, poster, autoplay, loop)",
        "<iframe> භාවිතයෙන් Google Maps සහ YouTube වීඩියෝ වෙබ් පිටුවට ඇතුළත් කිරීම",
        "SVG (Scalable Vector Graphics) සහ සාමාන්‍ය පික්සල් පින්තූර අතර වෙනස",
        "Favicons සැකසීම සහ data-* attributes මඟින් JavaScript සඳහා රහස් දත්ත ගබඩා කිරීම"
      ],
      sections: [
        {
          title: "12.1 <video> සහ <audio> මල්ටිමීඩියා ටැග්",
          content: [
            "HTML5 පැමිණීමට පෙර වෙබ් පිටුවක වීඩියෝවක් පෙන්වීමට Adobe Flash වැනි බාහිර ප්ලගීන අවශ්‍ය විය. එහෙත් HTML5 සමඟ බ්‍රවුසරයටම ස්වදේශීයව (Natively) වීඩියෝ සහ හඬ පට ධාවනය කළ හැක.",
            "ප්‍රධාන Attributes:",
            "• controls: Play, Pause, Volume සහ Fullscreen බොත්තම් පෙන්වීමට.",
            "• poster: වීඩියෝව Play කිරීමට පෙර පෙන්වන Preview thumbnail පින්තූරය.",
            "• autoplay: පිටුව විවෘත වූ සැණින් වීඩියෝව ධාවනය වීමට. (නූතන බ්‍රවුසර වල autoplay වැඩ කරන්නේ 'muted' attribute එක සමඟ පමණි).",
            "• loop: වීඩියෝව අවසන් වූ පසු නැවත මුල සිට ධාවනය වීමට."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML5 Native Video & Audio",
              code: `<!-- HTML5 Video Player -->
<video width="640" height="360" controls poster="images/preview.jpg">
  <source src="media/intro.mp4" type="video/mp4">
  <source src="media/intro.webm" type="video/webm">
  ඔබේ බ්‍රවුසරය HTML5 වීඩියෝ සඳහා සහය නොදක්වයි.
</video>

<!-- HTML5 Audio Player -->
<audio controls>
  <source src="media/podcast.mp3" type="audio/mpeg">
  ඔබේ බ්‍රවුසරය හඬ පට සඳහා සහය නොදක්වයි.
</audio>`
            }
          ]
        },
        {
          title: "12.2 Iframes (Inline Frames - YouTube & Google Maps)",
          content: [
            "<iframe> (Inline Frame) යනු ඔබේ වෙබ් පිටුව ඇතුළත තවත් සම්පූර්ණ බාහිර වෙබ් පිටුවක් හෝ සේවාවක් කවුළුවක් ලෙස පෙන්වීමයි.",
            "ප්‍රධාන ප්‍රායෝගික භාවිතයන්:",
            "1. YouTube වීඩියෝ Embed කිරීම: වීඩියෝව අපගේ සර්වර් එකේ තබා නොගෙන YouTube එකෙන් ධාවනය කරවීමෙන් සර්වර් bandwidth විශාල වශයෙන් ඉතිරි වේ.",
            "2. Google Maps Embed කිරීම: Contact පිටුවක ඔබේ කාර්යාලය හෝ ව්‍යාපාරික ස්ථානය පෙන්වීමට සජීවී සිතියමක් ඇතුළත් කිරීම."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "YouTube & Google Maps Iframes",
              code: `<!-- YouTube Video Embed -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" 
  title="YouTube වීඩියෝ ධාවකය" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`
            }
          ]
        },
        {
          title: "12.3 SVG Graphics, Favicon සහ Scalable Icons",
          content: [
            "1. SVG (Scalable Vector Graphics): සාමාන්‍ය පින්තූර (JPG/PNG) පික්සල් වලින් හැදෙන බැවින් Zoom කරන විට බොඳ වී කැඩී යයි. නමුත් SVG සෑදෙන්නේ ගණිතමය දෛශික (XML කේත) මඟිනි. එම නිසා 4K හෝ Retina තිරයකදී පවා කිසිදා නොකැඩී අතිශය තියුණුව දිස්වේ. Logos සහ Icons සඳහා අංක 1 තේරීම SVG ය.",
            "2. Favicon: බ්‍රවුසර් ටැබ් එකේ පිටුවේ මාතෘකාව අසල පෙන්වන කුඩා ලාංඡනයයි (<link rel='icon' type='image/x-icon' href='favicon.ico'>)."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "SVG Graphic Example",
              code: `<!-- Scalable Vector Graphic (SVG) Circle & Star -->
<svg width="120" height="120" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" stroke="#38bdf8" stroke-width="4" fill="#0f172a" />
  <polygon points="50,15 61,38 85,42 68,59 72,83 50,72 28,83 32,59 15,42 39,38" fill="#f59e0b" />
</svg>`
            }
          ]
        },
        {
          title: "12.4 Custom Data Attributes (data-*) සහ JavaScript සමඟ සම්බන්ධතාව",
          content: [
            "Custom Data Attributes (data-*): HTML5 හි හඳුන්වා දුන් අතිශය ප්‍රබල පහසුකමකි. HTML ටැග් එකක් තුළ JavaScript මඟින් කියවිය හැකි අමතර දත්ත (Metadata) ගබඩා කිරීමට යොදයි.",
            "නීති සහ සම්මුති:",
            "• නම ආරම්භ විය යුත්තේ 'data-' යන උපසර්ගයෙනි (උදා: data-user-id, data-category, data-price).",
            "• JavaScript මඟින් element.dataset.userId ලෙස camelCase ආකාරයට පහසුවෙන්ම කියවිය හැක.",
            "• CSS මඟින්ද [data-category='books'] ලෙස style තෝරා ගැනීමට (attribute selector) භාවිතා කළ හැක."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "data-* Attributes Example",
              code: `<!-- Product Card with Custom Data Attributes -->
<div class="product-item" data-product-id="9481" data-price="2500" data-category="books">
  <h4>HTML5 සම්පූර්ණ අත්පොත</h4>
  <p>මිල: රු. 2,500.00</p>
</div>

<!-- JavaScript එකෙන් කියවන ආකාරය: -->
<!-- const item = document.querySelector('.product-item'); -->
<!-- console.log(item.dataset.price); // '2500' -->`
            }
          ]
        },
        {
          title: "12.5 HTML Entities සහ විශේෂ අක්ෂර සංකේත (&copy;, &lt;, &gt;, &amp;)",
          content: [
            "HTML හි සමහර අක්ෂර (උදා: < සහ >) කේතයේ ටැග් හඳුනා ගැනීමට වෙන් කර ඇති බැවින්, සාමාන්‍ය අකුරක් ලෙස ඒවා ලියූ විට බ්‍රවුසරය නොමඟ යා හැක. ඒ සඳහා HTML Entities භාවිතා කරනු ලැබේ.",
            "නිතර භාවිත වන ප්‍රධාන Entities:",
            "• &lt; (Less than: <) සහ &gt; (Greater than: >)",
            "• &amp; (Ampersand: &)",
            "• &copy; (Copyright symbol: ©)",
            "• &reg; (Registered trademark: ®)",
            "• &nbsp; (Non-breaking space: කඩා නොවැටෙන හිස්තැනක්)"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML Entities Usage",
              code: `<p>5 &lt; 10 සහ 20 &gt; 15 සත්‍ය ප්‍රකාශ වේ.</p>
<p>කේතයක් ලිවීමේදී: &lt;div class="container"&gt; ලෙස ලියන්න.</p>
<footer>
  <p>&copy; 2026 Frontend Mastery Book. All Rights Reserved.</p>
</footer>`
            }
          ]
        },
        {
          title: "12.6 <canvas> මූලිකාංගය සහ වෙබ් ග්‍රැෆික්ස්",
          content: [
            "<canvas> ටැගය යනු JavaScript මඟින් 2D හෝ 3D චිත්‍ර, සජීවිකරණ (Animations), ප්‍රස්ථාර (Charts) සහ ක්‍රීඩා (HTML5 Games) ඇඳිය හැකි හිස් ඩිජිටල් කැන්වසයකි.",
            "SVG සහ Canvas අතර වෙනස:",
            "• SVG: Vector පාදක වේ, DOM මූලිකාංග ලෙස පවතී, Events (click, hover) ලබා දිය හැක. Icons, Logos, UI සඳහා සුදුසුය.",
            "• Canvas: Pixel (Raster) පාදක වේ. වේගවත් ගණනය කිරීම් සහ තත්පරයකට Frames 60ක ධාවනය වන Game Development සඳහා අතිශය සුදුසුය."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "HTML5 Canvas Element",
              code: `<canvas id="gameCanvas" width="400" height="200" style="border: 1px solid #38bdf8; background: #020617;">
  ඔබේ බ්‍රවුසරය HTML5 Canvas සඳහා සහය නොදක්වයි.
</canvas>

<script>
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(20, 20, 100, 60); // නිල් පැහැති සෘජුකෝණාස්‍රයක් ඇඳීම
</script>`
            }
          ]
        },
        {
          title: "12.7 අනාගත වෙබ් සංවර්ධනය සහ HTML5 හොඳම පුරුදු (Best Practices)",
          content: [
            "පළමු වෙළුම අවසන් කරන විට ඔබ සැමවිටම සිහියේ තබාගත යුතු රන් නීති:",
            "1. සැමවිටම <!DOCTYPE html> සහ UTF-8 charset භාවිතා කරන්න.",
            "2. පින්තූර සඳහා නිවැරදි alt text සහ lazy-loading (loading='lazy') ලබා දෙන්න.",
            "3. අර්ථවත් Semantic Tags (header, nav, main, article, section, footer) මුල් තැන තබන්න.",
            "4. W3C HTML Validator (validator.w3.org) මඟින් ඔබේ කේතයේ දෝෂ පරීක්ෂා කර පිරිසිදුව තබාගන්න."
          ]
        }
      ],
      keyPoints: [
        "HTML5 native <video> සහ <audio> මඟින් බාහිර ප්ලගීන නොමැතිව මාධ්‍ය ධාවනය කළ හැක.",
        "SVG යනු කිසිදා නොකැඩෙන, සැහැල්ලු දෛශික රූප ආකෘතියකි.",
        "data-* attributes මඟින් අමතර දත්ත ගබඩා කර JavaScript මඟින් කියවිය හැක.",
        "HTML Entities (&lt;, &gt;, &copy;) මඟින් ආරක්ෂිතව විශේෂ අක්ෂර වෙබ් පිටුවේ ප්‍රදර්ශනය කළ හැක."
      ],
      exercises: [
        { id: 1, question: "JPG/PNG සහ SVG අතර ඇති ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "වීඩියෝවක් සඳහා poster attribute එක වැදගත් වන්නේ ඇයි?" },
        { id: 3, question: "&copy; &amp; &lt; &gt; යන HTML Entities වල අර්ථයන් ලියන්න." }
      ]
    }
  ]
};
