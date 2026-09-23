import fs from 'fs';
import path from 'path';
import { jsPDF } from 'jspdf';
import { allChapters } from '../src/data/chapters/allChapters';
import {
  BOOK_METADATA,
  COPYRIGHT_NOTICE,
  PREFACE,
  ABOUT_AUTHOR,
  HOW_TO_USE,
  NOTE_ON_CREATION,
  LEARNING_OUTCOMES,
  bookDedication,
  bookVolumes,
} from '../src/data/bookInfo';

function generatePdf() {
  console.log('Starting PDF generation for Full Stack Web Development...');
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;

  // Load and embed Sinhala Font
  const fontPath = path.resolve('src/assets/fonts/NotoSansSinhala-Regular.ttf');
  if (fs.existsSync(fontPath)) {
    const fontBase64 = fs.readFileSync(fontPath).toString('base64');
    doc.addFileToVFS('NotoSansSinhala.ttf', fontBase64);
    doc.addFont('NotoSansSinhala.ttf', 'NotoSansSinhala', 'normal');
  }

  const setSinhalaFont = (size: number = 10, isBold: boolean = false) => {
    doc.setFont('NotoSansSinhala', 'normal');
    doc.setFontSize(size);
  };

  const setAsciiFont = (size: number = 10, style: string = 'normal') => {
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
  };

  let y = margin;

  function checkNewPage(neededSpace: number = 20) {
    if (y + neededSpace > pageHeight - margin) {
      doc.addPage();
      y = margin;
      drawHeaderFooter();
    }
  }

  function drawHeaderFooter() {
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.line(margin, 12, pageWidth - margin, 12);
    setAsciiFont(8, 'normal');
    doc.setTextColor(120, 120, 120);
    doc.text('FULL STACK WEB DEVELOPMENT • T. SACHINTHA IMESH [FYZIE]', margin, 9);

    // Footer
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    const pageNum = doc.getNumberOfPages();
    doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 8, { align: 'right' });
    setSinhalaFont(7);
    doc.text('© 2026 T. Sachintha Imesh [FYZIE] • සියලුම හිමිකම් ඇවිරිණි.', margin, pageHeight - 8);
    doc.setTextColor(30, 30, 30);
  }

  // ================= PAGE 1: COVER PAGE =================
  doc.setFillColor(24, 24, 27); // Dark slate bg
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative border
  doc.setDrawColor(217, 119, 6); // Amber border
  doc.setLineWidth(1.2);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

  // Title
  doc.setTextColor(245, 158, 11);
  setAsciiFont(24, 'bold');
  doc.text('FULL STACK WEB DEVELOPMENT', pageWidth / 2, 60, { align: 'center' });

  doc.setTextColor(255, 255, 255);
  setAsciiFont(15, 'normal');
  doc.text('Complete Course Book', pageWidth / 2, 72, { align: 'center' });

  // Sinhala Subtitle
  doc.setTextColor(229, 231, 235);
  setSinhalaFont(13);
  doc.text('නූතන වෙබ් සංවර්ධනය පිළිබඳ පූර්ණ පාඨමාලා ග්‍රන්ථය', pageWidth / 2, 84, { align: 'center' });

  // Technologies Tag
  doc.setFillColor(217, 119, 6);
  doc.roundedRect(margin + 15, 105, contentWidth - 30, 12, 3, 3, 'F');
  doc.setTextColor(0, 0, 0);
  setAsciiFont(10, 'bold');
  doc.text('HTML  •  CSS  •  JAVASCRIPT  •  REACT.JS  •  NEXT.JS  •  TYPESCRIPT', pageWidth / 2, 112.5, { align: 'center' });

  // Stats Box
  doc.setDrawColor(75, 85, 99);
  doc.setFillColor(39, 39, 42);
  doc.roundedRect(margin + 20, 140, contentWidth - 40, 35, 3, 3, 'FD');
  doc.setTextColor(245, 158, 11);
  setAsciiFont(12, 'bold');
  doc.text('09 VOLUMES  |  107 CHAPTERS  |  340+ PAGES', pageWidth / 2, 154, { align: 'center' });
  doc.setTextColor(209, 213, 219);
  setSinhalaFont(9);
  doc.text('ප්‍රායෝගික කේත නිදසුන් • ව්‍යාපෘති • තාක්ෂණික සම්මුඛ පරීක්ෂණ ගැටලු', pageWidth / 2, 164, { align: 'center' });

  // Author details at bottom
  doc.setTextColor(245, 158, 11);
  setAsciiFont(11, 'bold');
  doc.text('AUTHOR: T. SACHINTHA IMESH', pageWidth / 2, 220, { align: 'center' });

  doc.setTextColor(255, 255, 255);
  setAsciiFont(12, 'bold');
  doc.text('[FYZIE]', pageWidth / 2, 227, { align: 'center' });

  setSinhalaFont(9);
  doc.setTextColor(156, 163, 175);
  doc.text('Full Stack Web Developer & Software Engineering Mentor', pageWidth / 2, 235, { align: 'center' });
  doc.text('විද්‍යුත් තැපෑල: fyzie44@gmail.com  •  කොළඹ, ශ්‍රී ලංකාව', pageWidth / 2, 242, { align: 'center' });

  setAsciiFont(9, 'normal');
  doc.text('FIRST EDITION 2026', pageWidth / 2, 260, { align: 'center' });

  // ================= PAGE 2: DEDICATION & COPYRIGHT =================
  doc.addPage();
  drawHeaderFooter();
  y = 35;

  // Dedication
  setSinhalaFont(16, true);
  doc.setTextColor(180, 83, 9);
  doc.text('පිදුම (Dedication)', margin, y);
  y += 10;

  setSinhalaFont(11);
  doc.setTextColor(40, 40, 40);
  const dedLines = doc.splitTextToSize(`"${bookDedication.text}"`, contentWidth);
  doc.text(dedLines, margin, y);
  y += dedLines.length * 6 + 6;

  setSinhalaFont(10);
  doc.setTextColor(120, 120, 120);
  doc.text(`- ${bookDedication.authorSign}`, margin + 10, y);
  y += 20;

  // Divider
  doc.setDrawColor(220, 220, 220);
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;

  // Copyright
  setSinhalaFont(14, true);
  doc.setTextColor(180, 83, 9);
  doc.text(COPYRIGHT_NOTICE.title, margin, y);
  y += 8;

  setAsciiFont(9, 'bold');
  doc.setTextColor(40, 40, 40);
  doc.text(COPYRIGHT_NOTICE.copyright, margin, y);
  y += 7;

  setSinhalaFont(9.5);
  doc.setTextColor(60, 60, 60);
  COPYRIGHT_NOTICE.content.forEach((line) => {
    const cLines = doc.splitTextToSize(line, contentWidth);
    doc.text(cLines, margin, y);
    y += cLines.length * 5 + 4;
  });

  y += 15;
  // About Author
  setSinhalaFont(14, true);
  doc.setTextColor(180, 83, 9);
  doc.text(ABOUT_AUTHOR.title, margin, y);
  y += 8;

  setSinhalaFont(9.5);
  doc.setTextColor(50, 50, 50);
  ABOUT_AUTHOR.content.forEach((line) => {
    const aLines = doc.splitTextToSize(line, contentWidth);
    doc.text(aLines, margin, y);
    y += aLines.length * 5 + 4;
  });

  // ================= PAGE 3: PREFACE =================
  doc.addPage();
  drawHeaderFooter();
  y = 25;

  setSinhalaFont(16, true);
  doc.setTextColor(180, 83, 9);
  doc.text(PREFACE.title, margin, y);
  y += 10;

  setSinhalaFont(9.5);
  doc.setTextColor(40, 40, 40);
  PREFACE.paragraphs.forEach((p) => {
    checkNewPage(25);
    const pLines = doc.splitTextToSize(p, contentWidth);
    doc.text(pLines, margin, y);
    y += pLines.length * 5.2 + 5;
  });

  // ================= PAGE 4: HOW TO USE & CREATION NOTE =================
  doc.addPage();
  drawHeaderFooter();
  y = 25;

  setSinhalaFont(15, true);
  doc.setTextColor(180, 83, 9);
  doc.text(HOW_TO_USE.title, margin, y);
  y += 9;

  HOW_TO_USE.rules.forEach((rule) => {
    checkNewPage(18);
    setSinhalaFont(10, true);
    doc.setTextColor(30, 30, 30);
    doc.text(`${rule.num}. ${rule.heading}`, margin, y);
    y += 5.5;

    setSinhalaFont(9);
    doc.setTextColor(80, 80, 80);
    const descLines = doc.splitTextToSize(rule.desc, contentWidth - 4);
    doc.text(descLines, margin + 4, y);
    y += descLines.length * 4.8 + 4;
  });

  // Learning Outcomes
  checkNewPage(40);
  y += 6;
  setSinhalaFont(14, true);
  doc.setTextColor(180, 83, 9);
  doc.text('අවසාන ඉගෙනුම් ප්‍රතිඵල (Learning Outcomes)', margin, y);
  y += 8;

  LEARNING_OUTCOMES.forEach((out, idx) => {
    checkNewPage(12);
    setSinhalaFont(9);
    doc.setTextColor(40, 40, 40);
    const outLines = doc.splitTextToSize(`✓  ${out}`, contentWidth);
    doc.text(outLines, margin, y);
    y += outLines.length * 4.8 + 2.5;
  });

  // ================= TABLE OF CONTENTS (VOLUMES & CHAPTERS) =================
  doc.addPage();
  drawHeaderFooter();
  y = 25;

  setSinhalaFont(18, true);
  doc.setTextColor(180, 83, 9);
  doc.text('ග්‍රන්ථ පටුන • TABLE OF CONTENTS (පරිච්ඡේද 1 - 107)', margin, y);
  y += 10;

  bookVolumes.forEach((vol) => {
    checkNewPage(24);
    // Volume Heading Box
    doc.setFillColor(243, 244, 246);
    doc.rect(margin, y, contentWidth, 8, 'F');
    setSinhalaFont(10, true);
    doc.setTextColor(180, 83, 9);
    doc.text(`පරිමාව ${vol.numberString}: ${vol.title} (${vol.chapterRange})`, margin + 3, y + 5.5);
    y += 11;

    setSinhalaFont(8.5);
    doc.setTextColor(90, 90, 90);
    const sumLines = doc.splitTextToSize(vol.summary, contentWidth - 6);
    doc.text(sumLines, margin + 3, y);
    y += sumLines.length * 4.2 + 4;

    // Chapters inside volume
    vol.chapters.forEach((ch) => {
      checkNewPage(9);
      setSinhalaFont(8.5);
      doc.setTextColor(30, 30, 30);
      const chTitle = `Chapter ${ch.chapterNumber}: ${ch.title}`;
      const shortTitle = doc.splitTextToSize(chTitle, contentWidth - 25)[0];
      doc.text(shortTitle, margin + 4, y);

      setAsciiFont(8, 'normal');
      doc.setTextColor(140, 140, 140);
      doc.text(`p. ${ch.pageNumber}`, pageWidth - margin, y, { align: 'right' });

      y += 5.2;
    });

    y += 4;
  });

  // ================= CHAPTER BY CHAPTER SYLLABUS & CONTENT =================
  allChapters.forEach((ch) => {
    checkNewPage(35);

    // Chapter Header
    doc.setFillColor(254, 243, 199); // amber 100
    doc.rect(margin, y, contentWidth, 11, 'F');
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin, y + 11);

    setSinhalaFont(11, true);
    doc.setTextColor(146, 64, 14); // amber 800
    doc.text(`පරිච්ඡේදය ${ch.chapterNumber}: ${ch.title}`, margin + 3, y + 5);

    setAsciiFont(8, 'normal');
    doc.setTextColor(120, 53, 15);
    doc.text(ch.englishTitle, margin + 3, y + 9);

    y += 15;

    // Learning Objectives
    if (ch.learningObjectives && ch.learningObjectives.length > 0) {
      checkNewPage(18);
      setSinhalaFont(9, true);
      doc.setTextColor(30, 30, 30);
      doc.text('ඉගෙනුම් අරමුණු (Learning Objectives):', margin, y);
      y += 5;

      setSinhalaFont(8);
      doc.setTextColor(70, 70, 70);
      ch.learningObjectives.forEach((obj) => {
        checkNewPage(8);
        const objLines = doc.splitTextToSize(`• ${obj}`, contentWidth - 4);
        doc.text(objLines, margin + 3, y);
        y += objLines.length * 4 + 1.5;
      });
      y += 3;
    }

    // Sections
    ch.sections.forEach((sec) => {
      checkNewPage(22);
      setSinhalaFont(9.5, true);
      doc.setTextColor(180, 83, 9);
      doc.text(sec.title, margin, y);
      y += 5;

      setSinhalaFont(8.5);
      doc.setTextColor(40, 40, 40);
      sec.content.forEach((cnt) => {
        checkNewPage(12);
        const cntLines = doc.splitTextToSize(cnt, contentWidth);
        doc.text(cntLines, margin, y);
        y += cntLines.length * 4.3 + 2.5;
      });

      // Code Snippet
      if (sec.codeSnippet) {
        checkNewPage(24);
        doc.setFillColor(30, 41, 59); // slate 800
        const codeText = sec.codeSnippet.code;
        const codeLines = doc.splitTextToSize(codeText, contentWidth - 8);
        const boxHeight = Math.min(codeLines.length * 3.8 + 6, 70);

        doc.rect(margin, y, contentWidth, boxHeight, 'F');
        setAsciiFont(7, 'normal');
        doc.setTextColor(241, 245, 249);
        doc.text(codeLines.slice(0, 16), margin + 4, y + 4.5);
        y += boxHeight + 4;
      }

      // Pro Tips
      if (sec.tips && sec.tips.length > 0) {
        checkNewPage(15);
        sec.tips.forEach((tip) => {
          setSinhalaFont(8);
          doc.setTextColor(5, 150, 105); // emerald
          const tipLines = doc.splitTextToSize(`💡 ප්‍රවීණ ඉඟිය: ${tip}`, contentWidth);
          doc.text(tipLines, margin, y);
          y += tipLines.length * 4 + 2;
        });
      }

      y += 3;
    });

    // Interview Questions
    if (ch.interviewQuestions && ch.interviewQuestions.length > 0) {
      checkNewPage(22);
      setSinhalaFont(9, true);
      doc.setTextColor(30, 41, 59);
      doc.text('💼 තාක්ෂණික සම්මුඛ පරීක්ෂණ ගැටලුව:', margin, y);
      y += 5;

      ch.interviewQuestions.forEach((iq) => {
        checkNewPage(16);
        setSinhalaFont(8.5, true);
        doc.setTextColor(180, 83, 9);
        const qLines = doc.splitTextToSize(`Q: ${iq.question}`, contentWidth - 4);
        doc.text(qLines, margin + 2, y);
        y += qLines.length * 4 + 2;

        setSinhalaFont(8);
        doc.setTextColor(60, 60, 60);
        const aLines = doc.splitTextToSize(`A: ${iq.answer}`, contentWidth - 4);
        doc.text(aLines, margin + 2, y);
        y += aLines.length * 4 + 3;
      });
    }

    y += 6;
  });

  // Final Back Cover Page
  doc.addPage();
  doc.setFillColor(24, 24, 27);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  doc.setTextColor(245, 158, 11);
  setAsciiFont(18, 'bold');
  doc.text('FULL STACK WEB DEVELOPMENT', pageWidth / 2, 100, { align: 'center' });

  doc.setTextColor(255, 255, 255);
  setSinhalaFont(12);
  doc.text('T. Sachintha Imesh [FYZIE]', pageWidth / 2, 112, { align: 'center' });

  doc.setTextColor(156, 163, 175);
  setSinhalaFont(9);
  doc.text('මෙම පොත කියවීමෙන් ඔබේ මෘදුකාංග ඉංජිනේරු ගමන ජයග්‍රාහී වේවා!', pageWidth / 2, 130, { align: 'center' });

  setAsciiFont(8, 'normal');
  doc.text('© 2026 T. Sachintha Imesh [FYZIE]. All rights reserved.', pageWidth / 2, 260, { align: 'center' });

  // Save to public directory
  const outPath = path.resolve('public/Full_Stack_Web_Development_Book_FYZIE.pdf');
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outPath, pdfBuffer);

  const stats = fs.statSync(outPath);
  console.log(`Successfully generated book PDF at: ${outPath}`);
  console.log(`Total Pages: ${doc.getNumberOfPages()}`);
  console.log(`File Size: ${(stats.size / 1024).toFixed(2)} KB`);
}

generatePdf();
