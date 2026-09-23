import { Chapter } from '../../types/book';
import { volume1Chapters } from './volume1';
import { volume2Chapters } from './volume2';
import { volume3Chapters } from './volume3';
import { volume4Chapters } from './volume4';
import { volume5Chapters } from './volume5';
import { volume6Chapters } from './volume6';
import { volume7Chapters } from './volume7';
import { volume8Chapters } from './volume8';
import { volume9Chapters } from './volume9';

export const allChapters: Chapter[] = [
  ...volume1Chapters,
  ...volume2Chapters,
  ...volume3Chapters,
  ...volume4Chapters,
  ...volume5Chapters,
  ...volume6Chapters,
  ...volume7Chapters,
  ...volume8Chapters,
  ...volume9Chapters,
].sort((a, b) => Number(a.chapterNumber) - Number(b.chapterNumber));

export function getChapterById(id: string): Chapter | undefined {
  if (!id) return allChapters[0];
  
  // Exact match on id
  const exact = allChapters.find((ch) => ch.id === id);
  if (exact) return exact;

  // Try normalized id format (e.g. "ch-01" vs "ch-1")
  const numericPart = parseInt(id.replace(/[^0-9]/g, ''), 10);
  if (!isNaN(numericPart)) {
    const numMatch = allChapters.find((ch) => Number(ch.chapterNumber) === numericPart);
    if (numMatch) return numMatch;
  }

  return allChapters[0];
}

export function getChapterByNumber(num: number): Chapter | undefined {
  return allChapters.find((ch) => Number(ch.chapterNumber) === num);
}

export function getNextChapter(currentId: string): Chapter | undefined {
  const current = getChapterById(currentId);
  if (!current) return undefined;
  const index = allChapters.findIndex((ch) => ch.id === current.id);
  if (index >= 0 && index < allChapters.length - 1) {
    return allChapters[index + 1];
  }
  return undefined;
}

export function getPrevChapter(currentId: string): Chapter | undefined {
  const current = getChapterById(currentId);
  if (!current) return undefined;
  const index = allChapters.findIndex((ch) => ch.id === current.id);
  if (index > 0) {
    return allChapters[index - 1];
  }
  return undefined;
}

export function searchChapters(query: string): Chapter[] {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();
  return allChapters.filter((ch) => {
    const inTitle = ch.title.toLowerCase().includes(q);
    const inEnTitle = ch.englishTitle.toLowerCase().includes(q);
    const inVol = ch.volumeTitle.toLowerCase().includes(q);
    const inNum = ch.chapterNumber.toString() === q;
    const inSections = ch.sections.some(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.content.some((line) => line.toLowerCase().includes(q))
    );
    return inTitle || inEnTitle || inVol || inNum || inSections;
  });
}
