export interface ChapterSection {
  title: string;
  content: string[];
  codeSnippet?: {
    language: string;
    code: string;
    description?: string;
  };
  asciiDiagram?: string;
  tips?: string[];
  mistakes?: string[];
}

export interface Chapter {
  id: string;
  chapterNumber: number | string;
  title: string;
  englishTitle: string;
  volumeId: number;
  volumeTitle: string;
  pageNumber: number;
  learningObjectives: string[];
  sections: ChapterSection[];
  keyPoints: string[];
  exercises: string[];
  interviewQuestions?: {
    question: string;
    answer: string;
  }[];
  practicalTask?: {
    title: string;
    steps: string[];
  };
}

export interface Volume {
  id: number;
  numberString: string;
  title: string;
  englishTitle: string;
  summary: string;
  chapterRange: string;
  chapters: Chapter[];
}

export type ReaderTheme = 'paper' | 'modern' | 'sepia' | 'dark';
export type FontSize = 'normal' | 'large' | 'xlarge';
export type FontFamily = 'sans' | 'serif';
