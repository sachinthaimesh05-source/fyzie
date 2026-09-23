import { ReaderTheme, FontSize, FontFamily } from '../types/book';

export interface ThemeClasses {
  pageBg: string;
  cardBg: string;
  cardBgSecondary: string;
  textColor: string;
  textMuted: string;
  borderColor: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  navBg: string;
  sidebarBg: string;
  codeBg: string;
  badgeBg: string;
}

export function getThemeClasses(theme: ReaderTheme): ThemeClasses {
  switch (theme) {
    case 'sepia': // Warm Sepia / Cream - Eye-friendly reading mode
      return {
        pageBg: 'bg-[#F9F6F0]',
        cardBg: 'bg-[#FFFDF8]',
        cardBgSecondary: 'bg-[#F2ECE1]',
        textColor: 'text-[#2D241E]',
        textMuted: 'text-[#7A6C60]',
        borderColor: 'border-[#E7DEC8]',
        accentBg: 'bg-[#B45309]',
        accentText: 'text-[#B45309]',
        accentBorder: 'border-[#D97706]',
        navBg: 'bg-[#FFFDF8]/95 border-b border-[#E7DEC8]',
        sidebarBg: 'bg-[#F5EFE4]',
        codeBg: 'bg-[#2B231D]',
        badgeBg: 'bg-[#EFE5D5] text-[#78350F]',
      };
    case 'paper': // Warm Parchment Paper
      return {
        pageBg: 'bg-[#FAF8F5]',
        cardBg: 'bg-[#FFFFFF]',
        cardBgSecondary: 'bg-[#F4F1EA]',
        textColor: 'text-[#1F2937]',
        textMuted: 'text-[#6B7280]',
        borderColor: 'border-[#E5E0D8]',
        accentBg: 'bg-[#0D9488]',
        accentText: 'text-[#0D9488]',
        accentBorder: 'border-[#14B8A6]',
        navBg: 'bg-[#FFFFFF]/95 border-b border-[#E5E0D8]',
        sidebarBg: 'bg-[#F6F3ED]',
        codeBg: 'bg-[#1E293B]',
        badgeBg: 'bg-[#E6F4F1] text-[#0F766E]',
      };
    case 'modern': // Crisp Clean Modern Light
      return {
        pageBg: 'bg-[#F8FAFC]',
        cardBg: 'bg-[#FFFFFF]',
        cardBgSecondary: 'bg-[#F1F5F9]',
        textColor: 'text-[#0F172A]',
        textMuted: 'text-[#64748B]',
        borderColor: 'border-[#E2E8F0]',
        accentBg: 'bg-[#2563EB]',
        accentText: 'text-[#2563EB]',
        accentBorder: 'border-[#3B82F6]',
        navBg: 'bg-[#FFFFFF]/95 border-b border-[#E2E8F0]',
        sidebarBg: 'bg-[#F8FAFC]',
        codeBg: 'bg-[#0F172A]',
        badgeBg: 'bg-[#EFF6FF] text-[#1D4ED8]',
      };
    case 'dark': // Nocturne Slate / Low-strain Dark
    default:
      return {
        pageBg: 'bg-[#0B0F19]',
        cardBg: 'bg-[#111827]',
        cardBgSecondary: 'bg-[#1A2234]',
        textColor: 'text-[#E2E8F0]',
        textMuted: 'text-[#94A3B8]',
        borderColor: 'border-[#1F293D]',
        accentBg: 'bg-[#38BDF8]',
        accentText: 'text-[#38BDF8]',
        accentBorder: 'border-[#0284C7]',
        navBg: 'bg-[#0B0F19]/95 border-b border-[#1F293D]',
        sidebarBg: 'bg-[#0D1322]',
        codeBg: 'bg-[#030712]',
        badgeBg: 'bg-[#082F49] text-[#7DD3FC]',
      };
  }
}

export function getFontClasses(fontSize: FontSize, fontFamily: FontFamily): { sizeClass: string; familyClass: string } {
  const familyClass = fontFamily === 'serif' ? 'font-sinhala-serif' : 'font-sinhala-sans';
  
  let sizeClass = 'text-base leading-relaxed';
  if (fontSize === 'large') {
    sizeClass = 'text-lg leading-loose';
  } else if (fontSize === 'xlarge') {
    sizeClass = 'text-xl leading-loose';
  }

  return { sizeClass, familyClass };
}
