export interface Exercise {
  id: number;
  question: string;
  hint?: string;
  solution?: string;
}

export interface CodeSnippet {
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'bash' | 'json' | 'yaml';
  title: string;
  code: string;
  outputDescription?: string;
}

export interface Chapter {
  id: number;
  volumeId: number;
  chapterNumber: number;
  title: string;
  englishTitle: string;
  pageRange: string;
  description: string;
  learningObjectives: string[];
  sections: {
    title: string;
    content: string[];
    codeSnippets?: CodeSnippet[];
    asciiDiagram?: string;
    callout?: {
      type: 'tip' | 'warning' | 'info' | 'pro';
      title: string;
      text: string;
    };
  }[];
  keyPoints: string[];
  exercises: Exercise[];
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface Volume {
  id: number;
  volumeNumber: number;
  title: string;
  englishTitle: string;
  color: string;
  iconName: string;
  badge: string;
  description: string;
  chapterCount: number;
  pageRange: string;
  chapters: Chapter[];
}

export interface SpecialSection {
  id: string;
  title: string;
  englishTitle: string;
  type: 'preface' | 'author' | 'guide' | 'outcomes' | 'notes' | 'conclusion';
  content: string[];
}

export type ReadingTheme = 'dark-glass' | 'obsidian' | 'midnight' | 'sepia' | 'light-glass';
export type FontSize = 'sm' | 'md' | 'lg' | 'xl';
