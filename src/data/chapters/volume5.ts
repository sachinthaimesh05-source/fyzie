import { Chapter } from '../../types/book';

export const volume5Chapters: Chapter[] = [
  {
    id: "ch-52",
    chapterNumber: 52,
    title: "ටර්මිනල් - විධාන මගින් පරිගණකය පාලනය කිරීම",
    englishTitle: "The Command Line Interface / Terminal",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 161,
    learningObjectives: [
      "ටර්මිනල් (Terminal) හෙවත් Command Line යනු කුමක්දැයි තේරුම් ගැනීම.",
      "GUI (Graphical User Interface) සහ CLI (Command Line Interface) අතර වෙනස.",
      "වෘත්තීය මෘදුකාංග ඉංජිනේරුවෙකුට ටර්මිනල් දැනුම අත්‍යවශ්‍ය වන්නේ ඇයි?",
      "මූලික ටර්මිනල් විධාන: ls, cd, mkdir, clear, touch.",
      "ගොනු පද්ධතිය (File System) හරහා විධාන මගින් ගමන් කිරීම."
    ],
    sections: [
      {
        title: "52.1 GUI vs CLI සහ මූලික විධාන",
        content: [
          "GUI (Graphical User Interface): මවුසය මගින් අයිකන ක්ලික් කරමින් පරිගණකය හැසිරවීම.",
          "CLI (Command Line Interface): කළු තිරයක අකුරු (Commands) ටයිප් කර පරිගණකය පාලනය කිරීම (රොබෝවරයෙකුට කටින් උපදෙස් දීමක් වැනිය).",
          "ඇයි CLI වැදගත්: වේගවත්ය, ස්වයංක්‍රීය කළ හැක, සර්වර් වල බොහෝවිට GUI නැත, Git/Node.js/React ක්‍රියා කරන්නේ ටර්මිනල් හරහාය.",
          "මූලික විධාන:",
          "• ls / dir: දැනට සිටින තැන ඇති ගොනු ලැයිස්තුව බැලීම.",
          "• cd folder_name: අදාළ ෆෝල්ඩරය වෙත යාම.",
          "• cd ..: නැවත පස්සට යාම (පෙර ෆෝල්ඩරයට).",
          "• mkdir new_project: අලුත් ෆෝල්ඩරයක් සෑදීම.",
          "• touch index.html (හෝ ni index.html): අලුත් ගොනුවක් සෑදීම.",
          "• clear / cls: තිරය පිරිසිදු කිරීම.",
          "• Tab Key: ෆෝල්ඩරයේ නම ස්වයංක්‍රීයව සම්පූර්ණ කර ගැනීමට."
        ],
        codeSnippet: {
          language: "bash",
          code: `# අලුත් ව්‍යාපෘතියක් සෑදීම
mkdir my-web-project
cd my-web-project
touch index.html style.css script.js
ls`
        }
      }
    ],
    keyPoints: [
      "CLI යනු අකුරු මගින් පරිගණකය පාලනය කරන ක්‍රමයයි.",
      "VS Code තුළම Integrated Terminal එකක් ඇති බැවින් වෙනමම විවෘත කිරීමට අවශ්‍ය නැත.",
      "Tab Key එක මගින් නම් ස්වයංක්‍රීයව සම්පූර්ණ වේ."
    ],
    exercises: [
      "GUI සහ CLI අතර ඇති ප්‍රධාන වෙනස්කම් 2ක් ලියන්න.",
      "ටර්මිනලය හරහා web-lab නමින් ෆෝල්ඩරයක් සාදා, ඒ තුළට ගොස් hello.txt ගොනුවක් සාදන්න."
    ]
  },
  {
    id: "ch-53",
    chapterNumber: 53,
    title: "ගිට් - සංස්කාරණ පාලන පද්ධතිය",
    englishTitle: "Git - Version Control System",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 163,
    learningObjectives: [
      "සංස්කාරණ පාලනය (Version Control) යනු කුමක්ද සහ එහි වැදගත්කම.",
      "ගිට් (Git) යනු කුමක්ද සහ එහි ඉතිහාසය (Linus Torvalds, 2005).",
      "Git සහ GitHub අතර ඇති වෙනස.",
      "Git හි ක්‍රියාකාරී ස්ථර 3: Working Directory, Staging Area, Repository.",
      "මූලික ගිට් විධාන: git init, git status, git add, git commit -m.",
      "වෘත්තීය Commit Message එකක් ලියන ආකාරය."
    ],
    sections: [
      {
        title: "53.1 Git යනු කුමක්ද සහ ස්ථර 3",
        content: [
          "වාර්තාවක් සකසන විට වාර්තාව_1.docx, වාර්තාව_අවසන්.docx, වාර්තාව_සැබෑ_අවසන්.docx ලෙස පටලවා ගන්නවා වෙනුවට, කේතයේ සිදුවන සියලු වෙනස්කම් කාලරාමුවක් ලෙස සුරකින පද්ධතිය Version Control වේ (Video Game එකක Save Points වැනිය).",
          "Git හි ස්ථර 3:",
          "1. Working Directory: දැනට කේතය ලියමින් සිටින සාමාන්‍ය ෆෝල්ඩරය.",
          "2. Staging Area: Commit කිරීමට බලාපොරොත්තු වන ගොනු පෝලිමේ තබා ගන්නා ස්ථානය (git add .).",
          "3. Repository (.git): ස්ථිරවම Save Point එකක් සලකුණු කළ පසු ආරක්ෂිතව ගබඩා වන ස්ථානය (git commit -m '...')."
        ],
        asciiDiagram: `[ Working Directory ]
          |
     ( git add . )
          v
  [ Staging Area ]
          |
  ( git commit -m "..." )
          v
 [ Git Repository (.git) ] <--- දැන් ආරක්ෂිතයි!`
      }
    ],
    keyPoints: [
      "Git යනු පරිගණකයේ ස්ථාපනය වන මෙවලමකි; GitHub යනු අන්තර්ජාලයේ ඇති වෙබ් අඩවියකි.",
      "git add මගින් ගොනු Staging Area එකට දමන අතර git commit මගින් ස්ථිර Save Point එකක් සාදයි.",
      "Commit Messages සැමවිටම කෙටි, පැහැදිලි සහ වර්තමාන කාලයෙන් (Present Tense) ලියන්න."
    ],
    exercises: [
      "VCS එකක ප්‍රධාන වාසි 3ක් ලියන්න.",
      "git add සහ git commit අතර වෙනස පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-54",
    chapterNumber: 54,
    title: "ගිට්හබ් - ඔබේ කේතය වලාකුළේ තැන්පත් කරමු",
    englishTitle: "GitHub - Hosting Your Code in the Cloud",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 166,
    learningObjectives: [
      "ගිට්හබ් (GitHub) යනු කුමක්ද සහ එහි වෘත්තීය වැදගත්කම.",
      "ගිට්හබ් ගිණුමක් (Account) සහ දුරස්ථ ගබඩාවක් (Remote Repository) සෑදීම.",
      "පරිගණකයේ ඇති Git ව්‍යාපෘතියක් GitHub වෙත යවන (Push) ආකාරය.",
      "git remote, git push, git pull, සහ git clone විධාන.",
      "ගිට්හබ් ඔබගේ වෘත්තීය කළඹ (Developer Portfolio) ලෙස භාවිතය."
    ],
    sections: [
      {
        title: "54.1 Git vs GitHub සහ Push/Pull/Clone",
        content: [
          "Git යනු ඔබ නිවසේ ලියන රහස් දිනපොත වැනිය. GitHub යනු එම දිනපොත ලෝකයටම කියවිය හැකි සේ (හෝ තමන්ට පමණක්) තබා ඇති විශාල පුස්තකාලයක් වැනිය.",
          "වෘත්තීය වැදගත්කම: Backup එකක් ලෙස පවතී, කණ්ඩායම් සමඟ එකට වැඩ කළ හැක (Collaboration), රැකියාවකට අයදුම් කිරීමේදී අනිවාර්යයෙන්ම බලන සාධකයකි.",
          "මූලික පියවර:",
          "1. git remote add origin https://github.com/user/repo.git",
          "2. git branch -M main",
          "3. git push -u origin main (කේතය GitHub වෙත යැවීම).",
          "• git pull: GitHub හි ඇති වෙනස්කම් පරිගණකයට ලබා ගැනීම.",
          "• git clone: අන්තර්ජාලයේ ඇති ව්‍යාපෘතියක් සම්පූර්ණයෙන්ම තම පරිගණකයට බාගත කිරීම."
        ]
      }
    ],
    keyPoints: [
      "README.md ගොනුවක් සෑම ව්‍යාපෘතියකම තබා ගැනීම වෘත්තීය මට්ටමේ සංවර්ධකයෙකුගේ ලක්ෂණයකි.",
      "දිනපතා කේත ලියා GitHub වෙත යවන්න (Green Contribution Graph)."
    ],
    exercises: [
      "GitHub හි අලුත් Repository එකක් සාදා ඔබගේ පළමු වෙබ් අඩවිය push කරන්න.",
      "git push සහ git pull අතර වෙනස පැහැදිලි කරන්න."
    ]
  },
  {
    id: "ch-55",
    chapterNumber: 55,
    title: "වෙබ් අඩවි ප්‍රසිද්ධ කිරීම - ලෝකයටම පෙන්වමු",
    englishTitle: "Deployment - Making Your Site Public",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 168,
    learningObjectives: [
      "Deployment (ප්‍රසිද්ධ කිරීම) සහ Hosting (සත්කාරකත්වය) යනු කුමක්ද?",
      "Localhost සහ සජීවී සේවාදායකයක් (Live Server) අතර වෙනස.",
      "නෙට්ලිෆයි (Netlify) සහ වර්සෙල් (Vercel) නවීන මෙවලම් හඳුනා ගැනීම.",
      "Continuous Deployment (CD) සන්තතික ප්‍රසිද්ධ කිරීම.",
      "නොමිලේ වෙබ් ලිපිනයක් (URL) ලබා ගැනීම."
    ],
    sections: [
      {
        title: "55.1 Deployment සංකල්පය සහ Netlify පියවර",
        content: [
          "ඔබ පරිගණකයේ සාදන වෙබ් අඩවිය C:/Users/... වැනි ලිපිනයකින් ක්‍රියාත්මක වන අතර මිතුරෙකුට යැවුවහොත් ඔහුට එය නැරඹිය නොහැක. Deployment යනු එම ගොනු අන්තර්ජාලයට සම්බන්ධ ප්‍රබල සේවාදායකයක් (Server) වෙත යවා, ලෝකයේ ඕනෑම අයෙකුට නැරඹිය හැකි සජීවී URL එකක් ලබා ගැනීමේ ක්‍රියාවලියයි.",
          "Continuous Deployment (CD): ඔබ පරිගණකයේ කේතය වෙනස් කර GitHub වෙත Push කළ සැණින්, Netlify විසින් ස්වයංක්‍රීයව එම කේතය ගෙන වෙබ් අඩවිය යාවත්කාලීන කරයි.",
          "පියවර: netlify.com -> Sign up with GitHub -> Add new site -> Import from GitHub -> Deploy!"
        ]
      }
    ],
    keyPoints: [
      "Netlify සහ Vercel යනු Frontend Developers සඳහා ඇති හොඳම නොමිලේ හෝස්ටිං සේවාවන්ය.",
      "සෑම ව්‍යාපෘතියකටම index.html ගොනුවක් තිබීම අනිවාර්ය වේ.",
      "HTTPS (SSL සහතිකය) ස්වයංක්‍රීයව ලැබේ."
    ],
    exercises: [
      "Deployment සහ Hosting අතර වෙනස ඔබේ වචනයෙන් පැහැදිලි කරන්න.",
      "ඔබගේ Portfolio එක Netlify හරහා ප්‍රසිද්ධ කර සජීවී URL එක පරීක්ෂා කරන්න."
    ]
  },
  {
    id: "ch-56",
    chapterNumber: 56,
    title: "සෙවුම් යන්ත්‍ර ප්‍රශස්තකරණය සහ කාර්යක්ෂමතාව",
    englishTitle: "SEO and Web Performance",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 170,
    learningObjectives: [
      "SEO (Search Engine Optimization) යනු කුමක්දැයි තේරුම් ගැනීම.",
      "Google සෙවුම් යන්ත්‍ර ක්‍රියා කරන පියවර 3: Crawling, Indexing, Ranking.",
      "On-Page SEO: Title, Meta Description, Semantic HTML.",
      "වෙබ් අඩවියේ වේගය (Performance) සහ WebP පින්තූර.",
      "Google Lighthouse මගින් ලකුණු 100න් පරීක්ෂා කිරීම."
    ],
    sections: [
      {
        title: "56.1 SEO මූලධර්ම සහ Google Lighthouse",
        content: [
          "SEO යනු යමෙකු Google හි සෙවුමක් කළ විට ඔබේ වෙබ් අඩවිය ප්‍රතිඵල ලැයිස්තුවේ ඉහළට ගෙන ඒමට කරන තාක්ෂණික වෙනස්කම් සමූහයයි (පුස්තකාලයාධිපති උපමාව).",
          "On-Page SEO අංග:",
          "• <title>: අකුරු 50-60 අතර සෙවුම් ලින්ක් එක.",
          "• <meta name=\"description\" content=\"...\">: අකුරු 150-160 අතර විස්තරය.",
          "• Semantic HTML (<header>, <article>, <main>): Google bots ලාට අන්තර්ගතය කියවීමට පහසු කරයි.",
          "• WebP පින්තූර: ගුණාත්මකභාවය අඩු නොවී 50%-80% දක්වා ප්‍රමාණය කුඩා කරයි.",
          "Google Lighthouse: Chrome හි F12 -> Lighthouse -> Analyze page load මගින් Performance, Accessibility, Best Practices, SEO යන අංශ 4න් ලකුණු 100න් ලබා දෙයි."
        ]
      }
    ],
    keyPoints: [
      "SEO මගින් වෙබ් අඩවියට කාබනික (Organic) පිවිසුම්කරුවන් වැඩි කරයි.",
      "Google අඩවිය ලෝඩ් වීමට තත්පර 3කට වඩා ගත වුවහොත් Rank එක අඩු කරයි.",
      "සෑම පින්තූරයකටම alt text අනිවාර්ය වේ."
    ],
    exercises: [
      "SEO යනු කුමක්ද සහ එය ව්‍යාපාරයකට වැදගත් වන්නේ ඇයි?",
      "Lighthouse පරීක්ෂාවක් සිදු කර එහි ලකුණු 90ට වඩා වැඩිකර ගන්නා ආකාරය ලියන්න."
    ]
  },
  {
    id: "ch-57",
    chapterNumber: 57,
    title: "වෘත්තීය වෙබ් අඩවි ප්‍රසිද්ධ කිරීමේ ව්‍යාපෘතිය සහ විගණනය",
    englishTitle: "Professional Deployment Project & Audit",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 173,
    learningObjectives: [
      "ටර්මිනලය, Git, GitHub, Netlify, SEO සියල්ල එකට එක් කර සැබෑ ව්‍යාපෘතියක් නිම කිරීම.",
      "ව්‍යාපෘතියක් මුල සිට අගට වෘත්තීය මට්ටමින් සංවිධානය කිරීම.",
      "Lighthouse Audit එකක් සිදු කර වැරදි නිවැරදි කිරීම."
    ],
    sections: [
      {
        title: "57.1 ව්‍යාපෘතිය: Portfolio අඩවිය ප්‍රසිද්ධ කිරීම සහ Audit",
        content: [
          "අදියර 4:",
          "1. සංවිධානය: ටර්මිනලය මගින් git init, පිරිසිදු ගොනු ව්‍යුහය (css/, js/, images/).",
          "2. ප්‍රශස්තකරණය: Open Graph (OG) tags එක් කිරීම (WhatsApp/Facebook හි ලින්ක් එක යවන විට ලස්සනට පින්තූරය පෙනීමට).",
          "3. ප්‍රසිද්ධ කිරීම: GitHub වෙත push කර Netlify සජීවී කිරීම.",
          "4. විගණනය: Lighthouse මගින් 90+ ලකුණු තහවුරු කර ගැනීම."
        ],
        codeSnippet: {
          language: "html",
          code: `<!-- Open Graph Tags -->
<meta property="og:title" content="Kasun Kalhara - Professional Frontend Developer">
<meta property="og:description" content="Check out my modern web projects built with React and Tailwind CSS.">
<meta property="og:image" content="https://mysite.com/images/og-preview.jpg">
<meta property="og:type" content="website">`
        }
      }
    ],
    keyPoints: [
      "Open Graph tags මගින් සමාජ මාධ්‍ය බෙදාගැනීම් ආකර්ෂණීය කරයි.",
      "වෘත්තීය මට්ටමේදී කේතය ලස්සන වීම පමණක් නොව තාක්ෂණිකව නිවැරදි විය යුතුය."
    ],
    exercises: [
      "ඔබේ වෙබ් අඩවියේ පින්තූර WebP බවට හරවා ගොනු ප්‍රමාණය 50% කින් අඩු කරන්න."
    ]
  },
  {
    id: "ch-58",
    chapterNumber: 58,
    title: "ගිට් අභ්‍යන්තරය, ස්වයංක්‍රීයකරණය සහ උසස් වෙබ් ඉංජිනේරු විද්‍යාව (විශේෂ ප්‍රෝ-මට්ටම)",
    englishTitle: "Git Internals, CI/CD Automation, and Advanced Web Engineering",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 175,
    learningObjectives: [
      "Git Internals: Snapshots vs Diffs සහ SHA-1 Hash අගයන්හි රහස.",
      "GitFlow සහ Trunk-based Development.",
      "Rebase එදිරිව Merge.",
      "CI/CD සහ GitHub Actions මගින් ස්වයංක්‍රීයව පරීක්ෂා කිරීම සහ ප්‍රසිද්ධ කිරීම.",
      "Technical SEO: Robots.txt සහ Sitemap.xml.",
      "Resource Hinting: preload සහ preconnect."
    ],
    sections: [
      {
        title: "58.1 Snapshots, Rebase vs Merge සහ CI/CD",
        content: [
          "Git ක්‍රියා කරන්නේ Snapshots පදනම මතය. සෑම commit එකකදීම මුළු ව්‍යාපෘතියේම ඡායාරූපයක් ලබා ගනී. වෙනස් නොවූ ගොනු වලට Link එකක් පමණක් තබයි.",
          "SHA-1 Hash: සෑම commit එකකටම අකුරු සහ ඉලක්කම් 40ක අනන්‍ය හැෂ් අගයක් ලැබේ. එබැවින් දත්ත වෙනස් කළ නොහැක.",
          "Rebase vs Merge:",
          "• Merge: අලුතින් Merge Commit එකක් සාදයි (ඉතිහාසය සංකීර්ණ වේ).",
          "• Rebase: තමන්ගේ වෙනස්කම් ප්‍රධාන අත්තට පසුව එක පෙළට තබා පිරිසිදු රේඛීය ඉතිහාසයක් (Linear History) ලබා දෙයි.",
          "GitHub Actions: කේතය Push කළ සැණින් ස්වයංක්‍රීයව පරීක්ෂා කර (Linter / Tests) Netlify වෙත යවන CI/CD පද්ධතියයි."
        ]
      }
    ],
    keyPoints: [
      "Rebase මගින් පිරිසිදු, සරල ඉතිහාසයක් ලැබේ.",
      "Robots.txt සහ Sitemap.xml මගින් සෙවුම් යන්ත්‍රවලට වෙබ් අඩවියේ පිටු ඉක්මනින් සොයා ගැනීමට උදව් වේ."
    ],
    exercises: [
      "Robots.txt ගොනුවක අඩංගු විය යුතු මූලික නීති ලියන්න."
    ]
  },
  {
    id: "ch-59",
    chapterNumber: 59,
    title: "උසස් ගිට් ශිල්පීය ක්‍රම, මාර්ක්ඩවුන් සහ ආරක්ෂිත වෙබ් ප්‍රමිතීන්",
    englishTitle: "Advanced Git Techniques, Markdown, and Secure Web Standards",
    volumeId: 5,
    volumeTitle: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    pageNumber: 177,
    learningObjectives: [
      "Git Branching (අතු බෙදීම): නව විශේෂාංග වෙනම අතුවල (Branches) හැදීම.",
      "Undoing Mistakes: checkout, reset, සහ revert.",
      "Markdown (.md): README ගොනු ලිවීම.",
      "Environment Variables (.env): රහස්‍ය දත්ත ආරක්ෂා කිරීම.",
      "SSH Keys මගින් මුරපද නැතිව GitHub සම්බන්ධ කිරීම."
    ],
    sections: [
      {
        title: "59.1 Git Branching, Undoing සහ .env ආරක්ෂාව",
        content: [
          "Branching: ප්‍රධාන කේතයට (main) හානියක් නොවී අලුත් විශේෂාංගයක් (උදා: feature-login) තැනීමට: git checkout -b feature-login.",
          "Undoing:",
          "• git checkout file: වෙනස්කම් පෙර තිබූ තත්ත්වයට ගැනීමට.",
          "• git reset --soft HEAD~1: අවසාන commit එක මකා දමා ගොනු Staging area එකට නැවත ගැනීමට.",
          "• git revert <id>: පරණ commit එකක් අවලංගු කරන අලුත් commit එකක් සෑදීමට.",
          ".env රහස්‍යතාව: API keys කිසිවිටක සාමාන්‍ය කේතය තුළ නොලියා .env තුළ තබා .gitignore එකට ඇතුළත් කළ යුතුය."
        ]
      }
    ],
    keyPoints: [
      "ප්‍රධාන කේතය (main) ආරක්ෂිතව තබා ගැනීමට අතු (Branches) භාවිතා කරන්න.",
      ".gitignore ගොනුව මගින් .env සහ node_modules GitHub වෙත යාම වළක්වයි.",
      "Credential Leak වීම වැළැක්වීමට නිතරම .env රහස්‍යව තබා ගන්න."
    ],
    exercises: [
      "ව්‍යාපෘතියකට README.md ගොනුවක් සාදා Markdown භාවිතයෙන් සිරස්තල සහ ලැයිස්තු සකසන්න."
    ]
  }
];
