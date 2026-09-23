import React, { createContext, useContext, useState, useEffect } from 'react';
import { ReaderTheme, FontSize, FontFamily } from '../types/book';

export type TabType = 'home' | 'reader' | 'contents' | 'roadmap' | 'playground' | 'author';

interface ReaderContextType {
  theme: ReaderTheme;
  setTheme: (theme: ReaderTheme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  fontFamily: FontFamily;
  setFontFamily: (family: FontFamily) => void;
  currentChapterId: string;
  setCurrentChapterId: (id: string) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  readChapterIds: string[];
  toggleReadChapter: (id: string) => void;
  isChapterRead: (id: string) => boolean;
  bookmarkedChapterIds: string[];
  toggleBookmarkChapter: (id: string) => void;
  isChapterBookmarked: (id: string) => boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  openReaderWithChapter: (chapterId: string) => void;
}

const ReaderContext = createContext<ReaderContextType | undefined>(undefined);

export const ReaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setThemeState] = useState<ReaderTheme>(() => {
    return (localStorage.getItem('book_theme') as ReaderTheme) || 'sepia'; // Default to warm, eye-friendly sepia/cream
  });

  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    return (localStorage.getItem('book_fontsize') as FontSize) || 'normal';
  });

  const [fontFamily, setFontFamilyState] = useState<FontFamily>(() => {
    return (localStorage.getItem('book_fontfamily') as FontFamily) || 'serif';
  });

  const [currentChapterId, setCurrentChapterId] = useState<string>(() => {
    return localStorage.getItem('book_current_chapter') || 'ch-1';
  });

  const [activeTab, setActiveTab] = useState<TabType>('home');

  const [readChapterIds, setReadChapterIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('book_read_chapters');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedChapterIds, setBookmarkedChapterIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('book_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('book_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('book_fontsize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('book_fontfamily', fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    localStorage.setItem('book_current_chapter', currentChapterId);
  }, [currentChapterId]);

  useEffect(() => {
    localStorage.setItem('book_read_chapters', JSON.stringify(readChapterIds));
  }, [readChapterIds]);

  useEffect(() => {
    localStorage.setItem('book_bookmarks', JSON.stringify(bookmarkedChapterIds));
  }, [bookmarkedChapterIds]);

  const toggleReadChapter = (id: string) => {
    setReadChapterIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isChapterRead = (id: string) => readChapterIds.includes(id);

  const toggleBookmarkChapter = (id: string) => {
    setBookmarkedChapterIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isChapterBookmarked = (id: string) => bookmarkedChapterIds.includes(id);

  const openReaderWithChapter = (chapterId: string) => {
    setCurrentChapterId(chapterId);
    setActiveTab('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ReaderContext.Provider
      value={{
        theme,
        setTheme: setThemeState,
        fontSize,
        setFontSize: setFontSizeState,
        fontFamily,
        setFontFamily: setFontFamilyState,
        currentChapterId,
        setCurrentChapterId,
        activeTab,
        setActiveTab,
        readChapterIds,
        toggleReadChapter,
        isChapterRead,
        bookmarkedChapterIds,
        toggleBookmarkChapter,
        isChapterBookmarked,
        searchQuery,
        setSearchQuery,
        openReaderWithChapter,
      }}
    >
      {children}
    </ReaderContext.Provider>
  );
};

export const useReader = (): ReaderContextType => {
  const context = useContext(ReaderContext);
  if (!context) {
    throw new Error('useReader must be used within a ReaderProvider');
  }
  return context;
};
