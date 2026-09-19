export interface BookAuthor {
  name: string;
  penName: string;
  title: string;
  email: string;
  copyright: string;
  bio: string[];
  dedication: string;
}

export const authorInfo: BookAuthor = {
  name: "T. Sachintha Imesh",
  penName: "FyZie",
  title: "Full Stack Web Developer & Software Engineering Mentor",
  email: "fyzie44@gmail.com",
  copyright: "© 2026 T. SACHINTHA IMESH [FyZie]. සියලුම ප්‍රකාශන හිමිකම් ඇවිරිණි.",
  bio: [
    "T. SACHINTHA IMESH (FyZie) යනු වෙබ් තාක්ෂණයන්, programming සහ digital creativity පිළිබඳ දැඩි උනන්දුවක් ඇති ඉගෙනගන්නෙකු සහ වෙබ් සංවර්ධකයෙකු ලෙස තම දැනුම පුළුල් කරගනිමින් සිටින කෙනෙකි.",
    "ඉගෙනගන්නා සංකල්ප ක්‍රමානුකූලව සකස් කිරීම, කේත සමඟ අත්හදා බැලීම සහ තාක්ෂණික අදහස් වඩාත් පැහැදිලි ඉගෙනුම් මාර්ගයක් බවට පත් කිරීම පිළිබඳ ඔහුට විශේෂ උනන්දුවක් ඇත.",
    "මෙම පොත එම ඉගෙනුම් ගමනේ ප්‍රතිඵලයක් ලෙස සකස් කර ඇති අතර, වෙබ් සංවර්ධනය ඉගෙන ගැනීමට කැමති අනෙකුත් පාඨකයන්ටද පිළිවෙලකට ගමන් කළ හැකි මාර්ගෝපදේශයක් ලබාදීම මෙහි අරමුණයි."
  ],
  dedication: "මෘදුකාංග ඉංජිනේරු විද්‍යාව යනු හුදෙක් කේත ලිවීම (Coding) පමණක් නොව, එය ලෝකයේ පවතින ගැටළු වලට තාක්ෂණික විසඳුම් ලබාදීමේ කලාවකි. ශ්‍රී ලාංකික තාරුණ්‍යය ලෝකයේ ඉහළම තාක්ෂණික මට්ටම් වලට රැගෙන යාම මගේ එකම සිහිනයයි."
};

export const bookPreface = {
  title: "පෙරවදන",
  content: [
    "FULL STACK WEB DEVELOPMENT යනු නූතන වෙබ් සංවර්ධනය ඉගෙන ගැනීමට කැමති පාඨකයෙකු සඳහා මූලික සංකල්පවලින් ආරම්භ වී ක්‍රමයෙන් වඩාත් උසස් තාක්ෂණයන් වෙත ගමන් කරන සම්පූර්ණ පාඨමාලා මාර්ගෝපදේශයකි.",
    "මෙහි HTML සහ CSS මගින් වෙබ් පිටු ගොඩනැගීමේ පදනම තැබීමෙන් පසු JavaScript, React, Next.js සහ TypeScript වැනි නූතන තාක්ෂණයන් වෙත පියවරෙන් පියවර ගමන් කිරීමට අවකාශ සලසා ඇත.",
    "මෙම පොත නිර්මාණය කිරීමේ අරමුණ වූයේ ඉගෙන ගන්නා කෙනෙකුට තනි තනි තොරතුරු අතර අතරමං නොවී, සම්බන්ධිත සහ පිළිවෙලකට සැකසූ ඉගෙනුම් ගමනක් ලබාදීමයි.",
    "සංකල්පයක් කියවා ඉදිරියට යාම පමණක් ප්‍රමාණවත් නොවේ; එය කේතයක් ලෙස ලියා, ප්‍රතිඵලය නිරීක්ෂණය කර, වෙනස්කම් කර බලමින් අත්දැකීමෙන් අවබෝධ කරගැනීම වඩාත් වැදගත්ය."
  ]
};

export const bookGuide = {
  title: "මෙම පොත භාවිතා කරන ආකාරය",
  rules: [
    "1. පරිච්ඡේද අනුපිළිවෙලින් අනුගමනය කරන්න — මූලික සංකල්ප මඟහැර උසස් කොටස් වෙත නොයන්න.",
    "2. කේත ඔබම ටයිප් කරන්න — කියවීම පමණක් නොව, සෑම උදාහරණයක්ම ඔබගේ පරිගණකයේ ලියා බලන්න.",
    "3. පුහුණු වී අත්හදා බලන්න — අගයන්, styles සහ logic වෙනස් කර ප්‍රතිඵල නිරීක්ෂණය කරන්න.",
    "4. වැරදිවලින් ඉගෙනගන්න — error message එකක් ලැබුණු විට එය තේරුම්ගෙන හේතුව සොයා නිවැරදි කිරීමට උත්සාහ කරන්න.",
    "5. කුඩා ව්‍යාපෘති ගොඩනගන්න — ඉගෙනගත් සංකල්ප එකට යොදා සරල නිර්මාණ සෑදීමෙන් දැනුම තහවුරු කරගන්න.",
    "6. පෙර සංකල්ප වෙත නැවත යන්න — අලුත් මාතෘකා ඉගෙනගන්නා විට අවශ්‍ය මූලික කරුණු නැවත සමාලෝචනය කරන්න.",
    "7. අවශ්‍ය විට official documentation භාවිත කරන්න — නිවැරදි syntax, නවතම විශේෂාංග සහ වැඩිදුර පැහැදිලි කිරීම් සඳහා මුල් ලේඛන පරිශීලනය කරන්න."
  ]
};

export const bookCreationNote = {
  title: "නිර්මාණය පිළිබඳ සටහන",
  content: [
    "මෙම පොත ආරම්භ වූයේ සරල අදහසකිනි — මම ඉගෙනගන්නා දේ තනි තනි සටහන් ලෙස තබා නොගෙන, මටත් තවත් කෙනෙකුටත් නැවත කියවා ඉගෙනගත හැකි සම්පූර්ණ පොතක් බවට පත් කළ යුතුය යන අදහසෙනි.",
    "එම අදහස පොතක් බවට පත් වීම එක් දිනකින් සිදු වූ දෙයක් නොවේ. මට අවශ්‍ය තොරතුරු සෙවීමට, විවිධ මාතෘකා අධ්‍යයනය කිරීමට, ඒවා තේරුම් ගැනීමට සහ එකිනෙකට සම්බන්ධ වන ආකාරය සොයා බැලීමට කාලය ගත විය.",
    "අවශ්‍ය තැන්වල තොරතුරු පරීක්ෂා කිරීම, අදහස් සාකච්ඡා කිරීම හෝ සමහර කරුණු සංවිධානය කිරීම සඳහා Google AI Studio කුඩා සහායක මෙවලමක් ලෙස භාවිත කළෙමි. එහෙත් මෙම පොතේ අවසාන අන්තර්ගතය, ව්‍යුහය, පරිච්ඡේද අනුපිළිවෙල සහ ඉදිරිපත් කිරීම තීරණය කර සකස් කළේ මමමය.",
    "මෙය මගේ පොතක් පමණක් නොවේ — මම තනිවම ඉගෙනගත් ගමනක මතකයක්ද වේ."
  ]
};

export const bookMeta = {
  title: "Full Stack Web Development",
  subtitle: "A Complete Learning Guide to Modern Web Development in Sinhala",
  edition: "Version 2.0 (Pro Edition)",
  releaseYear: 2026,
  totalPages: 315,
  totalVolumes: 9,
  totalChapters: 107,
  language: "සිංහල (Sinhala)",
  author: {
    name: "T. Sachintha Imesh",
    alias: "FyZie",
    title: "Full Stack Web Developer & Software Engineering Author",
    email: "fyzie44@gmail.com",
    whatsapp: "0743491866",
    whatsappIntl: "94743491866",
    quote: "මෘදුකාංග ඉංජිනේරු විද්‍යාව යනු හුදෙක් කේත ලිවීම (Coding) පමණක් නොව, එය ලෝකයේ පවතින ගැටළු වලට තාක්ෂණික විසඳුම් ලබාදීමේ කලාවකි. ශ්‍රී ලාංකික තාරුණ්‍යය ලෝකයේ ඉහළම තාක්ෂණික මට්ටම් වලට රැගෙන යාම මගේ එකම සිහිනයයි.",
    bio: "T. Sachintha Imesh (FyZie) යනු වෙබ් තාක්ෂණයන්, පද්ධති නිර්මාණ ශිල්පය සහ ඩිජිටල් ඉංජිනේරු විද්‍යාව පිළිබඳ ප්‍රවීණ මෘදුකාංග සංවර්ධකයෙකි."
  },
  whatsappLink: "https://wa.me/94743491866",
  preface: "FULL STACK WEB DEVELOPMENT යනු නූතන වෙබ් සංවර්ධනය ඉගෙන ගැනීමට කැමති ශ්‍රී ලාංකික පාඨකයන් සඳහා මූලික සංකල්පවලින් ආරම්භ වී ක්‍රමයෙන් වඩාත් උසස් Enterprise මට්ටමේ තාක්ෂණයන් (React, TypeScript, Next.js App Router, SSR, REST & GraphQL APIs, Database Modeling) දක්වා පියවරෙන් පියවර ගමන් කරන ප්‍රායෝගික පාඨමාලා මාර්ගෝපදේශයකි.",
  features: [
    "පරිමාවන් 09ක් සහ සවිස්තරාත්මක පරිච්ඡේද 107ක්",
    "HTML5, CSS3, Flexbox, CSS Grid, Responsive Web Design",
    "JavaScript Core, DOM Manipulation, Async/Await, Advanced ES6+",
    "Git & GitHub Version Control, Professional Terminal, Netlify/Vercel Deployment",
    "React.js (Virtual DOM, Hooks, Context API, Router, Tailwind CSS)",
    "TypeScript Mastery (Static Types, Interfaces, Generics, Utility Types)",
    "Next.js App Router, Server-Side Rendering, Server Actions, Middleware",
    "Freelancing, ATS Developer Resume, Portfolio Architecture & Interview Preparation"
  ],
  dedication: "ශ්‍රී ලංකාවේ තාක්ෂණික අනාගතය ගොඩනැගීමට වෙහෙසෙන සියලුම උද්‍යෝගිමත් සිසුන්ට සහ තරුණ මෘදුකාංග ඉංජිනේරුවන්ට උපහාරයක් වේවා!"
};

export function getWhatsAppBuyUrl(buyerName?: string, buyerEmail?: string): string {
  let message = `හෙලෝ Fyzie! මට ඔබගේ "Full Stack Web Development" (FyZie) සම්පූර්ණ PDF පොත (පිටු 315) මිලදී ගැනීමට අවශ්‍යයි.`;
  if (buyerName && buyerName.trim()) {
    message += `\n\nමගේ නම: ${buyerName.trim()}`;
  }
  if (buyerEmail && buyerEmail.trim()) {
    message += `\nඊමේල්: ${buyerEmail.trim()}`;
  }
  message += `\n\nකරුණාකර ගෙවීම් තොරතුරු සහ PDF එක ලබාගන්නා ආකාරය දන්වන්න.`;
  return `https://wa.me/94743491866?text=${encodeURIComponent(message)}`;
}
