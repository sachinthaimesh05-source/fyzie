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
        "මූලික ටර්මිනල් විධාන (ls, cd, mkdir, clear) භාවිතා කිරීම"
      ],
      sections: [
        {
          title: "53.1 GUI එදිරිව CLI සහ මූලික විධාන",
          content: [
            "රොබෝවරයා සහ දුරස්ථ පාලකය උපමාව: ඔබ රොබෝවරයාගේ පිටේ ඇති 'බත් උයන්න' බොත්තම එබුවහොත් එය GUI ක්‍රමයයි. ඔබ රොබෝවරයාට කටින් 'මුළුතැන්ගෙයට ගොස් බත් උයන්න' කියා පැවසුවහොත් එය CLI ක්‍රමයයි.",
            "මූලික විධාන:",
            "• ls / dir: වත්මන් ෆෝල්ඩරයේ ඇති ලිපිගොනු පෙන්වීම.",
            "• cd folder_name: ෆෝල්ඩරයක් තුළට යාම (cd .. මඟින් ආපසු යාම).",
            "• mkdir new_folder: අලුත් ෆෝල්ඩරයක් සෑදීම."
          ]
        }
      ],
      keyPoints: [
        "Tab key එක එබූ විට පරිගණකය විසින් ඉතිරි අකුරු ස්වයංක්‍රීයව සම්පූර්ණ කරයි (Auto-complete).",
        "ෆෝල්ඩර නම් වලට හිස්තැන් නොතබා my-project ලෙස ඉරි යොදන්න."
      ],
      exercises: [
        { id: 1, question: "cd .. විධානය මඟින් සිදුවන්නේ කුමක්ද?" }
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
        "සංස්කරණ පාලනය (Version Control) යනු කුමක්ද සහ එහි වැදගත්කම",
        "2005 දී ලිනස් ටෝවල්ඩ්ස් විසින් Git නිර්මාණය කළ අයුරු",
        "Git (පරිගණකයේ මෙවලම) සහ GitHub (වෙබ් අඩවිය) අතර වෙනස",
        "Git හි ස්ථර 3: Working Directory, Staging Area, Repository",
        "මූලික විධාන: git init, git status, git add ., git commit -m 'පණිවිඩය'"
      ],
      sections: [
        {
          title: "54.1 Git ක්‍රියාවලිය සහ Checkpoints",
          content: [
            "වීඩියෝ ක්‍රීඩාවක Save Points උපමාව: ඔබ ක්‍රීඩාවකදී Save කළ විට පරාජය වුවහොත් මුල සිට ආරම්භ නොකර අවසානයට Save කළ තැනින් (Checkpoint) ආරම්භ කළ හැක. Git යනු කේත සඳහා ඇති එවැනි Save Point පද්ධතියකි."
          ],
          asciiDiagram: `[ Working Directory ] ----( git add . )----> [ Staging Area ]
                                                    |
                                            ( git commit -m "" )
                                                    v
                                           [ Repository (.git) ]`
        }
      ],
      keyPoints: [
        "git add මඟින් ගොනු පෝලිමට දමන අතර git commit මඟින් Save Point එකක් සාදයි.",
        "Commit Message සැමවිටම වර්තමාන කාලයෙන් සහ පැහැදිලිව ලියන්න (උදා: 'Add login form')."
      ],
      exercises: [
        { id: 1, question: "Git හි Staging Area යන්නෙන් අදහස් වන්නේ කුමක්ද?" }
      ]
    },
    {
      id: 55,
      volumeId: 5,
      chapterNumber: 55,
      title: "ගිට්හබ් - ඔබේ කේතය වලාකුළේ තැන්පත් කරමු (GitHub)",
      englishTitle: "GitHub - Hosting Your Code in the Cloud",
      pageRange: "පිටු 166 - 168",
      description: "GitHub යනු කුමක්ද (පුද්ගලික දිනපොත vs පුස්තකාලය), Remote Repository, git remote, git push, git pull, git clone, Daily workflow.",
      learningObjectives: [
        "GitHub යනු ලොව විශාලතම මෘදුකාංග සංවර්ධකයන්ගේ සමාජ ජාලය බව",
        "පරිගණකයේ ඇති Git ව්‍යාපෘතියක් GitHub වෙත push කරන ආකාරය",
        "git remote add origin, git branch -M main, git push -u origin main විධාන",
        "වෘත්තීය සංවර්ධකයෙකු ලෙස GitHub Profile එක සහ Contribution Graph එක පවත්වා ගැනීම"
      ],
      sections: [
        {
          title: "55.1 කේතය GitHub වෙත යැවීම",
          content: [
            "දිනපොත සහ මහජන පුස්තකාලය උපමාව: Git යනු ඔබේ නිවසේ ලියන රහස් දිනපොතයි. GitHub යනු එම දිනපොතේ පිටපතක් මුළු ලෝකයටම (හෝ අවශ්‍ය අයට) බලාගත හැකි පුස්තකාලයකි."
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Daily Git & GitHub Commands",
              code: `# 1. වෙනස්කම් පෝලිමට දැමීම
git add .

# 2. අර්ථවත් පණිවිඩයක් සමඟ Save කිරීම
git commit -m "Update navbar styling and responsive layout"

# 3. GitHub වෙත යැවීම
git push origin main`
            }
          ]
        }
      ],
      keyPoints: [
        "සෑම ව්‍යාපෘතියකම README.md ගොනුවක් තබා ගැනීම වෘත්තීය මට්ටමේ සංවර්ධකයෙකුගේ ලක්ෂණයකි."
      ],
      exercises: [
        { id: 1, question: "git push සහ git pull අතර වෙනස කුමක්ද?" }
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
        "Netlify සහ Vercel මඟින් නොමිලේ සජීවී වෙබ් අඩවි පවත්වා ගැනීම",
        "GitHub වෙත Push කළ සැණින් ස්වයංක්‍රීයව අඩවිය යාවත්කාලීන වීම (Continuous Deployment - CD)",
        "ප්‍රසිද්ධ කිරීමට පෙර index.html තිබේදැයි සහ Case sensitivity පරීක්ෂා කිරීම"
      ],
      sections: [
        {
          title: "56.1 Netlify සහ Continuous Deployment",
          content: [
            "පොතක් ලිවීම සහ මුද්‍රණය උපමාව: ඔබේ පරිගණකයේ ඇති තාක් එය Local Development වේ. මුද්‍රණය කර බෙදාහැරි පසු Deployment වේ.",
            "Netlify හෝ Vercel ගිණුමක් සාදා GitHub Repository එක සම්බන්ධ කළ විට සම්පූර්ණ ක්‍රියාවලිය ස්වයංක්‍රීයව සිදු වේ."
          ]
        }
      ],
      keyPoints: [
        "සෑම ව්‍යාපෘතියකම මූලික ගොනුව index.html විය යුතුය (නැතහොත් 404 Not Found ලැබේ)."
      ],
      exercises: [
        { id: 1, question: "Continuous Deployment (CD) යන්නෙන් අදහස් වන්නේ කුමක්ද?" }
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
        "On-Page SEO සඳහා <title> සහ <meta name='description'> භාවිතය",
        "වෙබ් අඩවියේ වේගය සහ SEO අතර සෘජු සම්බන්ධය (පිටුවක් ලෝඩ් වීමට තත්පර 3ට වඩා ගත වුවහොත් පරිශීලකයන් හැරී යයි)",
        "Google Lighthouse මඟින් Performance, Accessibility, Best Practices, SEO පරීක්ෂා කිරීම"
      ],
      sections: [
        {
          title: "57.1 On-Page SEO සහ Google Lighthouse",
          content: [
            "පුස්තකාල උපමාව: ලෝකයේ ඇති සියලු වෙබ් අඩවි පුස්තකාලයක ඇති පොත් වැනිය. Google යනු එහි සිටින සේවකයාය. කෙනෙකු පොතක් ඉල්ලූ විට සේවකයා මුලින්ම ලබා දෙන්නේ හොඳම මාතෘකාව සහ පිරිසිදු අන්තර්ගතය ඇති පොතයි."
          ],
          codeSnippets: [
            {
              language: "html",
              title: "Essential SEO Meta Tags",
              code: `<title>Full Stack Web Development | T. Sachintha Imesh [FYZIE]</title>
<meta name="description" content="A Complete Learning Guide to Modern Web Development in Sinhala by Fyzie.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph / WhatsApp / Facebook Share -->
<meta property="og:title" content="Full Stack Web Development Course Book">
<meta property="og:description" content="HTML, CSS, JavaScript, React, Next.js Complete Guide">
<meta property="og:image" content="https://example.com/cover.png">`
            }
          ]
        }
      ],
      keyPoints: [
        "WebP ආකෘතිය මඟින් පින්තූරවල ප්‍රමාණය 50% කින් පමණ අඩු කළ හැක.",
        "Lighthouse ලකුණු 90+ ලබා ගැනීම වෘත්තීය මට්ටමේ ඉලක්කයකි."
      ],
      exercises: [
        { id: 1, question: "Google සෙවුම් යන්ත්‍රය වෙබ් අඩවියක් සොයා ගන්නා ප්‍රධාන පියවර 3 මොනවාද?" }
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
        "Lighthouse Audit එකක් සිදු කර අඩු ලකුණු ඇති අංශ නිවැරදි කිරීම",
        "Quality Assurance (QA) මඟින් සේවාදායකයාට දීමට පෙර කේත විගණනය"
      ],
      sections: [
        {
          title: "58.1 Professional Folder Structure & Quality Assurance",
          content: [
            "වෘත්තීය මට්ටමේදී වෙබ් අඩවියක් ලස්සනට තිබීම පමණක් ප්‍රමාණවත් නොවේ; එය තාක්ෂණිකව ද නිවැරදිව (Machine Readable & Performant) තිබිය යුතුය."
          ]
        }
      ],
      keyPoints: [
        "පින්තූර වලට alt tags අමතක වීම Accessibility ලකුණු පහත වැටීමට ප්‍රධාන හේතුවකි."
      ],
      exercises: [
        { id: 1, question: "Lighthouse ලකුණු අඩු වූ විට කළ යුතු ප්‍රධාන පියවර මොනවාද?" }
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
        "Rebase මඟින් පිරිසිදු රේඛීය ඉතිහාසයක් (Linear History) පවත්වා ගැනීම",
        "GitHub Actions මඟින් CI/CD (Continuous Integration) ස්වයංක්‍රීයව ක්‍රියාත්මක කිරීම",
        "Robots.txt සහ Sitemap.xml සකස් කිරීම"
      ],
      sections: [
        {
          title: "59.1 Git Snapshots සහ CI/CD",
          content: [
            "Git විසින් සෑම Commit එකකදීම මුළු ව්‍යාපෘතියේම 'ඡායාරූපයක්' (Snapshot) ලබා ගනී. ගොනුවක් වෙනස් නොවූයේ නම් එය නැවත ගබඩා නොකර පරණ ගොනුවට සබැඳියක් (Link) ලබා දෙයි."
          ]
        }
      ],
      keyPoints: [
        "GitHub Actions මඟින් කේතය Push කළ සැණින් Linting සහ Testing ස්වයංක්‍රීයව සිදු කළ හැක."
      ],
      exercises: [
        { id: 1, question: "Git Rebase සහ Git Merge අතර වෙනස කුමක්ද?" }
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
        "Git Branching මඟින් එකම ව්‍යාපෘතියේ විවිධ විශේෂාංග එකවර නිර්මාණය කිරීම",
        "වැරදි Commit එකක් ආපසු හැරවීමට git reset සහ git revert භාවිතය",
        "Markdown (.md) භාෂාව මඟින් වෘත්තීය README ගොනු ලිවීම",
        ".env ගොනුව සහ .gitignore මඟින් API Keys ආරක්‍ෂා කිරීම",
        "SSH Keys මඟින් මුරපද රහිතව ආරක්ෂිතව GitHub සම්බන්ධ වීම"
      ],
      sections: [
        {
          title: "60.1 .env ආරක්‍ෂාව සහ SSH Keys",
          content: [
            "API Keys හෝ මුරපද කිසිවිටකත් සාමාන්‍ය කේතය තුළ (JS file) ලියන්න එපා! ඒවා .env ගොනුවක තබා .gitignore එකට .env ඇතුළත් කරන්න. එසේ නොවුණහොත් ලෝකයේ ඕනෑම අයෙකුට ඔබේ රහස් යතුරු සොරකම් කළ හැක."
          ],
          codeSnippets: [
            {
              language: "bash",
              title: "Branching & Gitignore",
              code: `# අලුත් ශාඛාවක් සාදා මාරු වීම
git checkout -b feature-payment

# වැඩ අවසන් වූ පසු main එකට එකතු කිරීම
git checkout main
git merge feature-payment

# .gitignore ගොනුව තුළ:
node_modules/
.env
dist/`
            }
          ]
        }
      ],
      keyPoints: [
        "Credential Leak (රහස්‍ය යතුරු GitHub යැවීම) සිදු වූ වහාම එම API Key එක අවලංගු කර අලුත් එකක් ලබා ගන්න."
      ],
      exercises: [
        { id: 1, question: ".gitignore ගොනුවේ කාර්යභාරය කුමක්ද?" }
      ]
    }
  ]
};
