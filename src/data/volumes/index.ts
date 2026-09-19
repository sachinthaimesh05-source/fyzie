import { volume1 } from './vol1_html';
import { volume2 } from './vol2_css';
import { volume3 } from './vol3_js';
import { volume4 } from './vol4_adv_js';
import { volume5 } from './vol5_git';
import { volume6 } from './vol6_react';
import { volume7 } from './vol7_ts';
import { volume8 } from './vol8_next';
import { volume9 } from './vol9_career';
import { Volume, Chapter } from '../../types';

export const allVolumes: Volume[] = [
  volume1,
  volume2,
  volume3,
  volume4,
  volume5,
  volume6,
  volume7,
  volume8,
  volume9
];

export const allChapters: Chapter[] = allVolumes.flatMap(v => v.chapters);

export function getVolumeById(id: number): Volume | undefined {
  return allVolumes.find(v => v.id === id);
}

export function getChapterById(id: number): Chapter | undefined {
  return allChapters.find(c => c.id === id);
}

export function getNextChapter(currentChapterId: number): Chapter | undefined {
  const currentIndex = allChapters.findIndex(c => c.id === currentChapterId);
  if (currentIndex >= 0 && currentIndex < allChapters.length - 1) {
    return allChapters[currentIndex + 1];
  }
  return undefined;
}

export function getPreviousChapter(currentChapterId: number): Chapter | undefined {
  const currentIndex = allChapters.findIndex(c => c.id === currentChapterId);
  if (currentIndex > 0) {
    return allChapters[currentIndex - 1];
  }
  return undefined;
}

export function searchContent(query: string): { chapter: Chapter; volume: Volume; matchType: 'title' | 'description' | 'section' }[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const results: { chapter: Chapter; volume: Volume; matchType: 'title' | 'description' | 'section' }[] = [];

  for (const volume of allVolumes) {
    for (const chapter of volume.chapters) {
      if (chapter.title.toLowerCase().includes(q) || chapter.englishTitle.toLowerCase().includes(q)) {
        results.push({ chapter, volume, matchType: 'title' });
      } else if (chapter.description.toLowerCase().includes(q)) {
        results.push({ chapter, volume, matchType: 'description' });
      } else {
        const hasSectionMatch = chapter.sections.some(s => 
          s.title.toLowerCase().includes(q) || 
          s.content.some(c => c.toLowerCase().includes(q))
        );
        if (hasSectionMatch) {
          results.push({ chapter, volume, matchType: 'section' });
        }
      }
    }
  }

  return results;
}
