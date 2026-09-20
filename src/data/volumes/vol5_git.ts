import { Volume } from '../../types';

export const volume5: Volume = {
  id: 5,
  volumeNumber: 5,
  title: "වෘත්තීය මෙවලම් සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
  englishTitle: "Professional Tools, Git & Deployment",
  color: "from-purple-500/20 via-indigo-500/10 to-blue-500/20",
  iconName: "Terminal",
  badge: "Git, GitHub & DevOps",
  description: "Command Line Interface (CLI), Git සංස්කරණ පාලනය, GitHub, Netlify/Vercel සජීවී ප්‍රකාශනය, SEO සහ Performance විගණනය, CI/CD සහ උසස් Git ශිල්ප.",
  chapterCount: 8,
  pageRange: "පිටු 161 - 180",
  chapters: [
    {
      id: 53,
      volumeId: 5,
      chapterNumber: 53,
      title: "ටර්මිනල් - විධාන මඟින් පරිගණකය පාලනය කිරීම",
      englishTitle: "The Command Line Interface / Terminal",
      pageRange: "පිටු 161 - 163",
      description: "GUI vs CLI, රොබෝවරයා උපමාව, ප්‍රධාන විධාන: ls/dir, cd, mkdir, touch/ni, clear/cls, Path සංකල්පය, සහ VS Code Integrated Terminal.",
      learningObjectives: [
        "ටර්මිනල් (Terminal / CLI) යනු කුමක්දැයි වෘත්තීය මට්ටමින් තේරුම් ගැනීම",
        "GUI (ප්‍රස්ථාරික) සහ CLI (විධාන පේළි) අතර වෙනස හඳුනා ගැනීම",
        "වෘත්තීය මෘදුකාංග ඉංජිනේරුවෙකුට ටර්මිනල් දැනුම අත්‍යවශ්‍ය වන්නේ ඇයිද යන්න (වේගය, ස්වයංක්‍රීයකරණය, සර්වර් පාලනය)",
        "මූලික ටර්මිනල් විධාන (ls, cd, mkdir, touch, rm, clear) ප්‍රගුණ කිරීම",
        "VS Code හි Integrated Terminal පහසුවෙන් හැසිරවීම"
      ],
      sections: [
        {
          title: "53.1 GUI එදිරිව CLI සහ රොබෝවරයා උපමාව",
          content: [
            "GUI (Graphical User Interface): ඔබ රොබෝවරයෙකුගේ පිටේ ඇති 'බත් උයන්න' බොත්තම මවුසයෙන් ඔබනවා වැනිය. දෘශ්‍යමාන බොත්තම් ඇතත් කළ හැක්කේ සීමිත දේවල් පමණි.",
            "CLI (Command Line Interface): ඔබ රොබෝවරයාට මයික්‍රෆෝනයෙන් 'මුළුතැන්ගෙට ගොස් සහල් කිලෝ 1ක් ගෙන විනාඩි 20ක් උයන්න' කියා නිශ්චිත විධානයක් දෙනවා වැනිය. මවුසයක් නැතත් අතිශය වේගවත්ව ඕනෑම සංකීර්ණ කාර්යයක් කළ හැක."
          ],
          asciiDiagram: `[GUI]: පරිශීලකයා ──(මවුස් ක්ලික්)──► අතුරුමුහුණත ──► මෙහෙයුම් පද්ධතිය
[CLI]: පරිශීලකයා ──(පෙළ විධාන)────► ටර්මිනල් ─────► මෙහෙයුම් පද්ධතිය`
        },
        {
          title: "53.2 අත්‍යවශ්‍ය Navigation සහ File විධාන",
          content: [
            "• pwd (Mac/Linux) / cd (Windows): ඔබ දැනට සිටින්නේ කුමන ෆෝල්ඩරයේදැයි පෙන්වයි.",
            "• ls (Mac/Linux) / dir (Windows): ෆෝල්ඩරයේ ඇති සියලුම ලිපිගොනු ලැයිස්තුගත කරයි.",
            "• cd folder_name: අදාළ ෆෝල්ඩරය තුළට පිවිසීම.",
            "• cd ..: එක් පියවරක් ආපසු (Parent folder එකට) පැමිණීම.",
            "• mkdir project-name: නව ෆෝල්ඩරයක් සෑදීම.",
            "• touch index.html (Mac/Linux) හෝ ni index.html (PowerShell): නව හිස් ගොනුවක් සෑදීම."
          ]
        },
        {
          title: "53.3 Terminal Shortcuts & Tips",
          content: [
            "• Tab Key: අකුරු කිහිපයක් ටයිප් කර Tab එබූ විට ෆෝල්ඩර හෝ ලිපිගොනු නම් ස්වයංක්‍රීයව සම්පූර්ණ වේ (Autocomplete).",
            "• Up Arrow (↑): පෙර ටයිප් කළ විධාන නැවත ලබා ගැනීම.",
            "• Ctrl + C: දැනට ධාවනය වන ඕනෑම ක්‍රියාවලියක් (Process / Dev Server) බලෙන් නතර කිරීම.",
            "• clear (Mac/Linux) / cls (Windows): ටර්මිනල් තිරය පිරිසිදු කිරීම."
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Essential Terminal Workflow",
              code: `# 1. නව වෙබ් ව්‍යාපෘතියක් සඳහා ෆෝල්ඩරයක් සාදා එය තුළට පිවිසෙමු
mkdir my-awesome-project
cd my-awesome-project

# 2. මූලික වෙබ් ලිපිගොනු සාදමු
touch index.html style.css app.js README.md

# 3. ෆෝල්ඩර සෑදීම
mkdir assets css js

# 4. ඇති ලිපිගොනු පරීක්ෂා කිරීම
ls -la

# 5. VS Code මඟින් මෙම ෆෝල්ඩරය විවෘත කිරීම
code .`
            }
          ]
        }
      ],
      keyPoints: [
        "ෆෝල්ඩර සහ ලිපිගොනු නම් වලට කිසිවිටෙක හිස්තැන් (Spaces) නොතබන්න; my-project ලෙස ඉරි යොදන්න.",
        "Tab Autocomplete පුරුදු වීමෙන් ඔබේ ටයිප් කිරීමේ වේගය සහ නිවැරදිභාවය දෙගුණ වේ.",
        "Ctrl+C මඟින් සිරවී ඇති ඕනෑම විධානයක් නවත්වා ගත හැක."
      ],
      exercises: [
        { id: 1, question: "cd .. සහ cd ~ විධාන මඟින් සිදුවන කාර්යයන් මොනවාද?" },
        { id: 2, question: "ටර්මිනල් භාවිතයෙන් තනි විධානයකින් එකවර ගොනු 3ක් සාදන ආකාරය ලියන්න." }
      ]
    },
    {
      id: 54,
      volumeId: 5,
      chapterNumber: 54,
      title: "ගිට් - සංස්කරණ පාලන පද්ධතිය (Git - Version Control)",
      englishTitle: "Git - Distributed Version Control System",
      pageRange: "පිටු 163 - 165",
      description: "වාර්තාව.docx ගැටලුව, වීඩියෝ ගේම් Save Point උපමාව, Git vs GitHub, ස්ථර 3 (Working, Staging, Repository), git init, add, commit, status.",
      learningObjectives: [
        "සංස්කරණ පාලනය (Version Control) යනු කුමක්ද සහ එහි අත්‍යවශ්‍ය වැදගත්කම",
        "2005 දී ලිනස් ටෝවල්ඩ්ස් විසින් Git නිර්මාණය කළ අයුරු",
        "Git (පරිගණකයේ මෙවලම) සහ GitHub (වෙබ් අඩවිය) අතර වෙනස",
        "Git හි ස්ථර 3: Working Directory, Staging Area, Local Repository",
        "මූලික විධාන: git init, git status, git add ., git commit -m 'පණිවිඩය'"
      ],
      sections: [
        {
          title: "54.1 'වාර්තාව_final_final2.docx' ගැටලුව සහ Save Points",
          content: [
            "බොහෝ අය ලිපිගොනු සංස්කරණය කිරීමේදී 'final.docx', 'final_really_final.docx', 'final_v2_ok.docx' ආදී වශයෙන් අනුපිටපත් සාදමින් අවුල් ජාලයක පැටලේ. මෙම අවුලට පරිගණක ඉංජිනේරු විද්‍යාත්මක විසඳුම Git ය.",
            "වීඩියෝ ක්‍රීඩාවක Save Points උපමාව: ඔබ ක්‍රීඩාවක Boss කෙනෙකු සමඟ සටන් කිරීමට පෙර Save කරන්නේ නම්, පරාජය වුවද මුල සිට ආරම්භ නොකර අවසන් Save Point එකෙන් නැවත පටන් ගත හැක. Git යනු කේත සඳහා කාල තරණය කළ හැකි එවැනි Save Point පද්ධතියකි."
          ]
        },
        {
          title: "54.2 Git හි ප්‍රධාන ස්ථර 3 (Three Stages)",
          content: [
            "1. Working Directory: ඔබගේ පරිගණකයේ ගොනු වෙනස් කරමින් සිටින සැබෑ ෆෝල්ඩරය.",
            "2. Staging Area (Index): Save කිරීමට සූදානම් කර පෝලිමට දැමූ ලිපිගොනු පෙළ (git add .).",
            "3. Repository (.git): ස්ථිරව Save Point (Commit) එකක් ලෙස ඉතිහාසයට එක් වූ තත්ත්වය (git commit)."
          ],
          asciiDiagram: `[ Working Directory ] ──( git add . )──► [ Staging Area ] ──( git commit )──► [ Local Repository ]
(කේත සංස්කරණය)                             (පෝලිමට දැමීම)                        (ස්ථිර Save Point)`
        },
        {
          title: "54.3 පළමු Git ව්‍යාපෘතිය ආරම්භ කිරීම",
          content: [
            "ඕනෑම ව්‍යාපෘතියක් ආරම්භයේදී එක් වරක් පමණක් git init විධානය ලබා දිය යුතුය. ඉන්පසු කේත වෙනස් කරන සෑම විටම add සහ commit කළ යුතුය."
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Basic Git Lifecycle",
              code: `# 1. Git ආරම්භක සැකසුම් (ජීවිතයටම එක් වරක් පමණි)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 2. නව Git ව්‍යාපෘතියක් ආරම්භ කිරීම
git init

# 3. ලිපිගොනුවල තත්ත්වය පරීක්ෂා කිරීම
git status

# 4. සියලු වෙනස්කම් Staging Area එකට එක් කිරීම
git add .

# 5. ස්ථිර Save Point එකක් (Commit) සටහන් කිරීම
git commit -m "feat: Initial project setup with HTML and CSS layout"`
            }
          ]
        }
      ],
      keyPoints: [
        "git add මඟින් ගොනු පෝලිමට දමන අතර git commit මඟින් Save Point එකක් සටහන් කරයි.",
        "Commit Message සැමවිටම අර්ථවත් ලෙස සහ වර්තමාන කාලයෙන් ලියන්න (උදා: 'Add contact form validation').",
        "git status යනු Git භාවිතා කිරීමේදී නිතරම පරික්ෂා කළ යුතු හොඳම මිතුරාය."
      ],
      exercises: [
        { id: 1, question: "Git හි Staging Area යන්නෙහි වැදගත්කම කුමක්ද?" },
        { id: 2, question: "git add . සහ git add index.html අතර වෙනස කුමක්ද?" }
      ]
    },
    {
      id: 55,
      volumeId: 5,
      chapterNumber: 55,
      title: "ගිට්හබ් - ඔබේ කේතය වලාකුළේ තැන්පත් කරමු (GitHub)",
      englishTitle: "GitHub - Hosting Your Code in the Cloud",
      pageRange: "පිටu 166 - 168",
      description: "GitHub යනු කුමක්ද (පුද්ගලික දිනපොත vs පුස්තකාලය), Remote Repository, git remote, git push, git pull, git clone, Daily workflow.",
      learningObjectives: [
        "GitHub යනු ලොව විශාලතම මෘදුකාංග සංවර්ධකයන්ගේ වලාකුළු වේදිකාව බව",
        "Git (දේශීය මෙවලම) සහ GitHub (වෙබ් ගබඩාව) අතර වෙනස",
        "පරිගණකයේ ඇති Git ව්‍යාපෘතියක් GitHub Remote Repository එකකට සම්බන්ධ කිරීම",
        "git push, git pull සහ git clone විධාන භාවිතය",
        "වෘත්තීය සංවර්ධකයෙකු ලෙස GitHub Profile එක සහ Contribution Graph එක පවත්වා ගැනීම"
      ],
      sections: [
        {
          title: "55.1 දිනපොත සහ මහජන පුස්තකාලය උපමාව",
          content: [
            "Git: ඔබේ කාමරයේ මේසය මත ඔබ තනිව ලියන රහස් දිනපොතයි. ඔබේ පරිගණකය අක්‍රිය වුවහොත් දිනපොතද විනාශ විය හැක.",
            "GitHub: එම දිනපොතේ පිටපතක් මුළු ලෝකයටම (හෝ ඔබේ කණ්ඩායමේ මිතුරන්ට) ආරක්ෂිතව පරිශීලනය කළ හැකි වලාකුළේ පිහිටි මහජන පුස්තකාලයකි. පරිගණකය කැඩී ගියද කේත ආරක්ෂිතය!"
          ]
        },
        {
          title: "55.2 Remote Repository සම්බන්ධ කිරීම සහ පළමු Push එක",
          content: [
            "GitHub වෙබ් අඩවියේ නව Repository එකක් සාදා, පහත විධාන මඟින් ඔබේ පරිගණකයේ ඇති Git ව්‍යාපෘතිය ඊට සම්බන්ධ කර කේත උඩුගත කළ හැක:"
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Linking Local Git to GitHub",
              code: `# 1. ප්‍රධාන ශාඛාව 'main' ලෙස නම් කිරීම
git branch -M main

# 2. GitHub හි ඇති Remote සබැඳිය 'origin' ලෙස එකතු කිරීම
git remote add origin https://github.com/your-username/my-project.git

# 3. ප්‍රථම වරට කේත GitHub වෙත තල්ලු කිරීම (Push)
git push -u origin main`
            }
          ]
        },
        {
          title: "55.3 එදිනෙදා සංවර්ධන චක්‍රය (Daily Developer Workflow)",
          content: [
            "මෘදුකාංග ඉංජිනේරුවෙකු දිනපතා අනුගමනය කරන ස්වර්ණමය පියවර 3:",
            "1. git add . (වෙනස්කම් සූදානම් කිරීම)",
            "2. git commit -m 'විස්තරය' (Save කිරීම)",
            "3. git push (GitHub වෙත යැවීම)"
          ],
          asciiDiagram: `[පරිගණකයේ කේත ලිවීම] ──► git add . ──► git commit -m "" ──► git push ──► [GitHub Cloud]`
        }
      ],
      keyPoints: [
        "පළමු push එකෙන් පසු ඊළඟ වාර වලදී git push පමණක් ලබා දීම ප්‍රමාණවත්ය.",
        "වෙනත් කෙනෙකුගේ කේතයක් පරිගණකයට බාගත කිරීමට git clone <url> විධානය යොදයි.",
        "GitHub Contribution Graph හි කොළ පැහැති කොටු (Green squares) ඔබගේ දෛනික කැපවීම සේවා යෝජකයන්ට පෙන්වයි."
      ],
      exercises: [
        { id: 1, question: "git push සහ git pull අතර ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "git clone විධානය මඟින් සිදුවන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 56,
      volumeId: 5,
      chapterNumber: 56,
      title: "වෙබ් අඩවි ප්‍රසිද්ධ කිරීම - ලෝකයටම පෙන්වමු (Deployment)",
      englishTitle: "Deployment - Making Your Site Public (Netlify & Vercel)",
      pageRange: "පිටු 168 - 170",
      description: "Deployment යනු කුමක්ද, Localhost vs Live Server, Netlify, Vercel, Continuous Deployment (CD), සහ Custom Domains.",
      learningObjectives: [
        "Deployment යනු පරිගණකයේ ඇති වෙබ් අඩවි ගොනු අන්තර්ජාල සර්වර් එකකට මුදාහැරීම බව",
        "Localhost (127.0.0.1) සහ Production URL අතර වෙනස",
        "Netlify සහ Vercel මඟින් නොමිලේ සජීවී වෙබ් අඩවි පවත්වා ගැනීම",
        "Continuous Deployment (CD) මඟින් Git Push සමඟ ස්වයංක්‍රීයව අඩවිය අලුත්වීම",
        "Custom Domain Name (www.yourname.com) සහ නොමිලේ SSL / HTTPS සහතිකය"
      ],
      sections: [
        {
          title: "56.1 Localhost එදිරිව Live Production",
          content: [
            "පොතක් ලිවීම සහ මුද්‍රණය උපමාව: ඔබ පොතක් අතින් ලියන තාක් එය කියවිය හැක්කේ ඔබට පමණි (Localhost). එය මුද්‍රණය කර ලොව පුරා පොත් සාප්පු වලට බෙදාහැරි පසු මුළු ලෝකයටම කියවිය හැක (Deployment).",
            "නූතන වෙබ් සංවර්ධනයේදී Netlify සහ Vercel මඟින් තත්පර කිහිපයකින් වෙබ් අඩවියක් ලොවටම විවෘත කළ හැක."
          ]
        },
        {
          title: "56.2 Continuous Deployment (CD) මැජික් එක",
          content: [
            "අතීතයේදී FTP මඟින් අතින් ගොනු upload කළ යුතු විය. නමුත් වර්තමානයේ:",
            "ඔබ පරිගණකයේ කේතය වෙනස් කර git push කළ සැණින්, Netlify හෝ Vercel එය ක්ෂණිකව හඳුනාගෙන තත්පර 15ක් ඇතුළත වෙබ් අඩවිය සජීවීව අලුත් කරයි!"
          ],
          asciiDiagram: `[VS Code] ──(git push)──► [GitHub] ──(Webhook)──► [Netlify / Vercel] ──► [Live Website 🚀]`
        },
        {
          title: "56.3 Deployment පෙර පිරික්සුම් ලැයිස්තුව (Pre-deployment Checklist)",
          content: [
            "• ප්‍රධාන ගොනුව index.html නමින්ම තිබිය යුතුය (Home.html හෝ Index.HTML නොවේ).",
            "• ලිපිගොනු නම් Case-sensitive වේ (Linux සර්වර් වල image.PNG සහ image.png දෙකක් ලෙස සලකයි).",
            "• සියලු Relative Paths (./css/style.css) නිවැරදි දැයි පරීක්ෂා කිරීම."
          ]
        }
      ],
      keyPoints: [
        "සෑම ව්‍යාපෘතියකම මූලික ගොනුව අනිවාර්යයෙන්ම index.html විය යුතුය.",
        "Netlify සහ Vercel ස්වයංක්‍රීයව නොමිලේ SSL (HTTPS පෑඩ්ලොක් එක) සපයයි.",
        "Continuous Deployment මඟින් සංවර්ධන කාර්යක්ෂමතාව උපරිම වේ."
      ],
      exercises: [
        { id: 1, question: "Continuous Deployment (CD) ක්‍රියාවලිය ක්‍රියාත්මක වන අයුරු පියවරෙන් පියවර ලියන්න." },
        { id: 2, question: "වෙබ් අඩවියක් Deploy කළ පසු 404 Not Found දෝෂයක් ඒමට ප්‍රධානම හේතුව කුමක්ද?" }
      ]
    },
    {
      id: 57,
      volumeId: 5,
      chapterNumber: 57,
      title: "සෙවුම් යන්ත්‍ර ප්‍රශස්තකරණය සහ කාර්යක්ෂමතාව (SEO & Performance)",
      englishTitle: "SEO & Web Performance (Google Lighthouse)",
      pageRange: "පිටු 170 - 172",
      description: "SEO (Crawling, Indexing, Ranking), On-Page SEO (Title, Meta Description, Semantic Tags), WebP Image Compression, Google Lighthouse ලකුණු 100/100.",
      learningObjectives: [
        "SEO (Search Engine Optimization) යනු කුමක්ද සහ Google Bots ක්‍රියා කරන අයුරු",
        "Google හි අදියර 3: Crawling, Indexing, සහ Ranking",
        "On-Page SEO සඳහා <title>, <meta name='description'> සහ Semantic HTML",
        "Open Graph Meta Tags (WhatsApp, Facebook, LinkedIn හි ලස්සන Preview කාඩ්පත් සැකසීම)",
        "Google Lighthouse මඟින් Performance, Accessibility, Best Practices, SEO විගණනය"
      ],
      sections: [
        {
          title: "57.1 Google Bots සහ පුස්තකාල උපමාව",
          content: [
            "ලෝකයේ ඇති සියලු වෙබ් අඩවි මහජන පුස්තකාලයක ඇති පොත් මිලියන ගණන වැනිය. Google යනු එහි සිටින කාර්යක්ෂම පුස්තකාලයාධිපතියාය (Crawler/Bot).",
            "1. Crawling: Google Bots අන්තර්ජාලය පුරා ගමන් කරමින් නව වෙබ් පිටු කියවයි.",
            "2. Indexing: කියවූ පිටුවල තොරතුරු Google දත්ත ගබඩාවේ වර්ගීකරණය කර තැන්පත් කරයි.",
            "3. Ranking: පරිශීලකයෙකු යමක් සෙවූ විට වඩාත්ම ගුණාත්මක, වේගවත් වෙබ් අඩවි පළමු පිටුවේ ඉහළින්ම පෙන්වයි."
          ]
        },
        {
          title: "57.2 Open Graph Tags (සමාජ මාධ්‍ය පෙරදසුන්)",
          content: [
            "WhatsApp හෝ Facebook එකකට වෙබ් අඩවියේ Link එකක් දැමූ විට එහි මාතෘකාව, කුඩා විස්තරය සහ රූපය (Preview Card) ලස්සනට පෙන්වීමට Open Graph Meta Tags යොදයි:"
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Essential SEO & Social Meta Tags",
              code: `<!-- Standard SEO -->
<title>Learn Web Development in Sinhala | Fyzie Learning</title>
<meta name="description" content="A Complete Guide to Modern Web Development by T. Sachintha Imesh. Master HTML, CSS, JavaScript, React and Next.js.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph / WhatsApp / Facebook Share -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://fyzie.dev/">
<meta property="og:title" content="Full Stack Web Development in Sinhala">
<meta property="og:description" content="පරිගණක මෘදුකාංග ඉංජිනේරු ශිල්පය මුල සිට අගට සරල සිංහලෙන්.">
<meta property="og:image" content="https://fyzie.dev/assets/social-card.png">`
            }
          ]
        },
        {
          title: "57.3 Google Lighthouse විගණනය (100/100 ඉලක්කය)",
          content: [
            "Chrome DevTools හි Lighthouse ටැබ් එක මඟින් අංශ 4ක් විගණනය කරයි:",
            "• Performance: පිටුව ලෝඩ් වන වේගය (WebP images, minified code).",
            "• Accessibility: ආබාධිත පුද්ගලයන්ට සහ Screen Readers සඳහා පහසුව (Alt tags, Color contrast).",
            "• Best Practices: ආරක්ෂිත ප්‍රමිතීන් (HTTPS).",
            "• SEO: සෙවුම් යන්ත්‍ර සඳහා සූදානම."
          ]
        }
      ],
      keyPoints: [
        "පින්තූර WebP ආකෘතියට හැරවීමෙන් ගොනු ප්‍රමාණය 60% කින් පමණ අඩු කරගත හැක.",
        "<img> ටැග් වලට alt attribute අමතක වීම Accessibility ලකුණු පහත වැටීමට ප්‍රධාන හේතුවකි.",
        "වෙබ් පිටුවක් ලෝඩ් වීමට තත්පර 3 කට වඩා ගත වුවහොත් 53% ක් පරිශීලකයන් පිටව යයි."
      ],
      exercises: [
        { id: 1, question: "Google Search Engine එක ක්‍රියාත්මක වන ප්‍රධාන පියවර 3 මොනවාද?" },
        { id: 2, question: "WhatsApp හි ලින්ක් එකක් දැමූ විට පෙරදසුන් රූපයක් පෙන්වීමට යොදන meta tag එක කුමක්ද?" }
      ]
    },
    {
      id: 58,
      volumeId: 5,
      chapterNumber: 58,
      title: "වෘත්තීය වෙබ් අඩවි ප්‍රසිද්ධ කිරීමේ ව්‍යාපෘතිය සහ විගණනය",
      englishTitle: "Professional Deployment Project & Audit",
      pageRange: "පිටු 173 - 174",
      description: "Deployment Pipeline, Professional Folder Structure (css/, js/, images/, README.md), Lighthouse Audit සහ Debugging.",
      learningObjectives: [
        "සම්පූර්ණ වෙබ් ව්‍යාපෘතියක් වෘත්තීය ප්‍රමිතීන්ට අනුව ගොනු ව්‍යුහගත කිරීම",
        "ව්‍යාපෘතිය සඳහා ආකර්ෂණීය README.md ලේඛනයක් සකස් කිරීම",
        "Lighthouse Audit එකක් සිදු කර අඩු ලකුණු ඇති අංශ හඳුනාගෙන නිවැරදි කිරීම",
        "Quality Assurance (QA) මඟින් සේවාදායකයාට දීමට පෙර කේත විගණනය"
      ],
      sections: [
        {
          title: "58.1 වෘත්තීය වෙබ් අඩවි ගොනු ව්‍යුහය (Folder Architecture)",
          content: [
            "පළපුරුදු ඉංජිනේරුවෙකුගේ ව්‍යාපෘතියක් දුටු සැණින් හඳුනාගත හැක්කේ එහි පිළිවෙළෙනි:"
          ],
          asciiDiagram: `my-portfolio/
├── index.html          # ප්‍රධාන පිටුව
├── 404.html            # දෝෂ පිටුව
├── README.md           # ව්‍යාපෘති විස්තරය
├── assets/
│   ├── images/         # WebP පින්තූර
│   └── icons/          # SVG අයිකන
├── css/
│   └── style.css       # විලාසිතා
└── js/
    └── app.js          # ජාවාස්ක්‍රිප්ට් තර්කනය`
        },
        {
          title: "58.2 Pre-launch Quality Assurance (QA) පිරික්සුම",
          content: [
            "සජීවීව ලොවට මුදාහැරීමට පෙර පහත කරුණු 5 පරීක්ෂා කරන්න:",
            "1. Broken Links පරීක්ෂාව: සියලු සබැඳි නිවැරදිව ක්‍රියා කරන්නේද?",
            "2. Responsive Check: Mobile, Tablet, Desktop යන තිර 3හිම නිවැරදිව පෙනේද?",
            "3. Console Errors: DevTools Console හි කිසිදු රතු පාට දෝෂයක් නොතිබිය යුතුය.",
            "4. Image Optimization: කිසිදු පින්තූරයක් 200KB ට වඩා විශාල නොවිය යුතුය.",
            "5. Contact Form Validation: ෆෝරම හිස්ව submit කළ නොහැකි බව තහවුරු කිරීම."
          ]
        }
      ],
      keyPoints: [
        "සේවාදායකයෙකුට භාර දීමට පෙර Console හි ඇති console.log ඉවත් කිරීම වෘත්තීය පුරුද්දකි.",
        "Lighthouse හි සියලු අංශ සඳහා 90+ ලකුණු පවත්වා ගැනීම ඉහළ ප්‍රමිතියක් සහතික කරයි."
      ],
      exercises: [
        { id: 1, question: "Deployment එකකට පෙර පරීක්ෂා කළ යුතු ප්‍රධාන කරුණු 3ක් ලියන්න." }
      ]
    },
    {
      id: 59,
      volumeId: 5,
      chapterNumber: 59,
      title: "ගිට් අභ්‍යන්තරය, ස්වයංක්‍රීයකරණය සහ උසස් වෙබ් ඉංජිනේරු විද්‍යාව",
      englishTitle: "Git Internals, CI/CD Automation & Advanced Web Engineering",
      pageRange: "පිටු 175 - 177",
      description: "Git Snapshots vs Diffs, SHA-1 Content Addressable Storage, GitFlow vs Trunk-based, Rebase vs Merge, GitHub Actions, Robots.txt & Sitemap.xml.",
      learningObjectives: [
        ".git ෆෝල්ඩරය ඇතුළත Git ක්‍රියා කරන්නේ Snapshots සහ SHA-1 hash මඟින් බව අවබෝධ කර ගැනීම",
        "Git Branching Strategies: GitFlow vs Trunk-based Development",
        "Git Rebase සහ Git Merge අතර මූලික වෙනස (Linear History vs True History)",
        "GitHub Actions මඟින් CI/CD (Continuous Integration) ස්වයංක්‍රීයව ක්‍රියාත්මක කිරීම",
        "Robots.txt සහ Sitemap.xml මඟින් තාක්ෂණික SEO සැකසුම"
      ],
      sections: [
        {
          title: "59.1 Git Snapshots සහ SHA-1 Hash ගෘහ නිර්මාණ ශිල්පය",
          content: [
            "අනෙකුත් පැරණි Version Control පද්ධති (SVN) ගබඩා කළේ පේළි වෙනස්කම් පමණි (Delta Diffs). නමුත් Git සෑම Commit එකකදීම මුළු ව්‍යාපෘතියේම 'සම්පූර්ණ ඡායාරූපයක්' (Snapshot) ගනී.",
            "ගොනුවක අන්තර්ගතය වෙනස් වූ සැණින් ඊට අදාළ 40-character SHA-1 Hash අංකය වෙනස් වන බැවින් කිසිදු දත්තයක් හොරෙන් වෙනස් කළ නොහැක (Content-Addressable Storage)."
          ]
        },
        {
          title: "59.2 Git Rebase එදිරිව Git Merge",
          content: [
            "• Git Merge: ශාඛා දෙකක් එකතු කර නව Merge Commit එකක් සාදයි. සැබෑ ඉතිහාසය නොවෙනස්ව තබා ගනී.",
            "• Git Rebase: ඔබේ ශාඛාවේ commit ඉතිහාසය වෙනත් ශාඛාවක අගට ගෙන ගොස් අලවයි. ඉතිහාසය එකම සරල රේඛාවක් මෙන් පිරිසිදු කරයි (Linear History)."
          ],
          asciiDiagram: `[Merge]:  main ────●──────●────► (Merge Commit)
                     \\    /
           feature    ●──●

[Rebase]: main ────●──────●
                          \\
                feature    ●'───●' (Linear History)`
        },
        {
          title: "59.3 GitHub Actions (CI/CD Pipeline)",
          content: [
            "කේතය GitHub වෙත push කළ සැණින් ස්වයංක්‍රීයව Tests ධාවනය කිරීම, Lint කිරීම සහ Deploy කිරීම GitHub Actions (.github/workflows/main.yml) මඟින් සිදු කළ හැක:"
          ],
          codeSnippets: [
            {
              language: "yaml",
              title: ".github/workflows/deploy.yml",
              code: `name: Build & Deploy
on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test
      - run: npm run build`
            }
          ]
        }
      ],
      keyPoints: [
        "පොදු (Public / Shared) ශාඛා වලදී කිසිවිටෙක git rebase නොකරන්න; එය අනෙක් අයගේ ඉතිහාසය අවුල් කරයි.",
        "Robots.txt මඟින් Search Engine Bots වලට අවසර ඇති සහ නැති පිටු නියම කරයි."
      ],
      exercises: [
        { id: 1, question: "Git Rebase සහ Git Merge අතර ප්‍රධාන වෙනස කුමක්ද?" },
        { id: 2, question: "GitHub Actions මඟින් ස්වයංක්‍රීය කළ හැකි කාර්යයන් 2ක් සඳහන් කරන්න." }
      ]
    },
    {
      id: 60,
      volumeId: 5,
      chapterNumber: 60,
      title: "උසස් ගිට් ශිල්පීය ක්‍රම, මාර්ක්ඩවුන් සහ ආරක්ෂිත වෙබ් ප්‍රමිතීන්",
      englishTitle: "Advanced Git Techniques, Markdown, and Secure Web Standards",
      pageRange: "පිටු 177 - 180",
      description: "Git Branching, git checkout -b, Undoing Mistakes (reset, revert), Markdown (.md), .env සහ රහස්‍යභාවය, SSH Keys, සහ Google Analytics.",
      learningObjectives: [
        "Git Branching මඟින් ප්‍රධාන කේතයට හානියක් නොවී අලුත් විශේෂාංග සෑදීම",
        "Merge Conflicts ඇතිවන ආකාරය සහ ඒවා සහයෝගයෙන් විසඳන අයුරු",
        "වැරදි නිවැරදි කරගැනීම: git reset, git revert, සහ git stash භාවිතය",
        "Markdown (.md) මඟින් වෘත්තීය README ගොනු සැකසීම",
        ".env ගොනුව සහ .gitignore මඟින් API Keys ආරක්‍ෂා කිරීම",
        "SSH Keys මඟින් මුරපද රහිතව ආරක්ෂිතව GitHub සම්බන්ධ වීම"
      ],
      sections: [
        {
          title: "60.1 Git Branching සහ Merge Conflicts විසඳීම",
          content: [
            "ප්‍රධාන කේතය (main branch) සැමවිටම සජීවීව ක්‍රියාත්මක වන පරිපූර්ණ කේතයයි. අලුත් විශේෂාංගයක් සෑදීමට git checkout -b feature-name මඟින් අතුරු ශාඛාවක් කපා ගත යුතුය.",
            "Merge Conflict: සංවර්ධකයන් දෙදෙනෙකු එකම ගොනුවේ එකම පේළිය වෙනස් කළ විට Git හට තෝරාගත යුත්තේ කුමක්දැයි සිතාගත නොහැකි වූ විට හටගනී. දෙදෙනා කතා කර නිවැරදි කේතය තෝරා conflict එක විසඳිය යුතුය."
          ]
        },
        {
          title: "60.2 වැරදි ආපසු හැරවීම (git reset vs git revert)",
          content: [
            "• git revert <commit_id>: වැරදි commit එක අවලංගු කරන අලුත් commit එකක් සාදයි (පොදු ශාඛා සඳහා ආරක්ෂිතයි).",
            "• git reset --hard <commit_id>: අදාළ commit එකෙන් පසු කළ සියලු වෙනස්කම් ඉතිහාසයෙන්ම මකා දමයි (තමන්ගේ පුද්ගලික පරිගණකයේදී පමණක් යොදන්න!).",
            "• git stash: වැඩ අවසන් නැති වෙනස්කම් තාවකාලිකව පැත්තකට දමා පිරිසිදු තත්ත්වයකට පැමිණීම."
          ]
        },
        {
          title: "60.3 Credential Security: .env සහ .gitignore",
          content: [
            "රහස්‍ය යතුරු (API Keys, Database Passwords) කිසිවිටෙක සාමාන්‍ය කේතය තුළ නොලියන්න! ඒවා .env ගොනුවක තබා, .gitignore ගොනුවට .env ඇතුළත් කරන්න. එසේ නොවුණහොත් GitHub Bots තත්පර ගණනක් ඇතුළත ඔබේ යතුරු සොයාගෙන සොරකම් කරනු ඇත!"
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Branching, Stashing & Gitignore Mastery",
              code: `# 1. අලුත් ශාඛාවක් සාදා මාරු වීම
git checkout -b feature-dark-mode

# 2. හදිසි වෙනස්කමක් නිසා වැඩ තාවකාලිකව සඟවා තැබීම (Stash)
git stash
# නැවත එම වැඩ ලබා ගැනීම
git stash pop

# 3. ප්‍රධාන ශාඛාවට එකතු කිරීම
git checkout main
git merge feature-dark-mode

# 4. වැඩ නිම වූ ශාඛාව මකා දැමීම
git branch -d feature-dark-mode

# .gitignore ගොනුවේ ආකෘතිය:
node_modules/
.env
dist/
.DS_Store`
            }
          ]
        }
      ],
      keyPoints: [
        "Credential Leak (රහස්‍ය යතුරු GitHub යැවීම) සිදු වූ වහාම එම API Key එක revoke කර අලුත් එකක් ලබා ගන්න.",
        "පොදු ශාඛාවල ඉතිහාසය නිවැරදි කිරීමට සැමවිටම git revert භාවිතා කරන්න; git reset නොයොදන්න.",
        "ලස්සන README.md ගොනුවක් සහිත ව්‍යාපෘතියක් රැකියා සම්මුඛ පරීක්ෂණ වලදී කැපී පෙනේ."
      ],
      exercises: [
        { id: 1, question: "git revert සහ git reset අතර වෙනස කුමක්ද?" },
        { id: 2, question: ".gitignore ගොනුවට .env ඇතුළත් කිරීම අත්‍යවශ්‍ය වන්නේ ඇයි?" }
      ]
    }
  ]
};
