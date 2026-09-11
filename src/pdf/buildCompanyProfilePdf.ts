import { PDFDocument, PDFFont, PDFImage, PDFPage, rgb, StandardFonts } from 'pdf-lib';
import type { Dictionary } from '../i18n/en';
import type { Locale } from '../i18n/I18nProvider';

type Copy = Dictionary['companyProfile'];

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 42;
const CONTENT_W = PAGE_W - MARGIN * 2;
const HEADER_BOTTOM = 788;
const FOOTER_TOP = 48;

const green = rgb(0.102, 0.62, 0.424);
const ink = rgb(0.086, 0.2, 0.169);
const muted = rgb(0.357, 0.42, 0.4);
const line = rgb(0.843, 0.894, 0.871);
const wash = rgb(0.953, 0.973, 0.961);
const white = rgb(1, 1, 1);

function toWinAnsi(text: string) {
  return text
    .replace(/[\u2018\u2019\u02BC]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/\u00A0/g, ' ')
    .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, '');
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number) {
  const words = toWinAnsi(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current: string[] = [];

  for (const word of words) {
    const next = [...current, word].join(' ');
    if (wordsWidth(next, font, size) <= maxWidth || current.length === 0) {
      current.push(word);
      continue;
    }
    lines.push(current.join(' '));
    current = [word];
  }
  if (current.length) lines.push(current.join(' '));
  return lines;
}

function wordGap(font: PDFFont, size: number) {
  return Math.max(font.widthOfTextAtSize(' ', size), size * 0.28);
}

function wordsWidth(text: string, font: PDFFont, size: number) {
  const words = toWinAnsi(text).split(/\s+/).filter(Boolean);
  if (words.length === 0) return 0;
  const gap = wordGap(font, size);
  return words.reduce((sum, word) => sum + font.widthOfTextAtSize(word, size), 0) + gap * (words.length - 1);
}

function drawWords(
  page: PDFPage,
  text: string,
  x: number,
  y: number,
  font: PDFFont,
  size: number,
  color: ReturnType<typeof rgb>,
) {
  const words = toWinAnsi(text).split(/\s+/).filter(Boolean);
  const gap = wordGap(font, size);
  let cursor = x;
  for (const word of words) {
    page.drawText(word, { x: cursor, y, size, font, color });
    cursor += font.widthOfTextAtSize(word, size) + gap;
  }
}

class Brochure {
  private readonly pages: PDFPage[] = [];
  private page!: PDFPage;
  private y = HEADER_BOTTOM;

  constructor(
    private readonly doc: PDFDocument,
    private readonly regular: PDFFont,
    private readonly bold: PDFFont,
    private readonly copy: Copy,
  ) {
    this.addPage();
  }

  private addPage() {
    this.page = this.doc.addPage([PAGE_W, PAGE_H]);
    this.pages.push(this.page);
    this.y = HEADER_BOTTOM;
    this.drawChrome();
  }

  private drawChrome() {
    drawWords(this.page, '12Gig Sdn. Bhd.', MARGIN, PAGE_H - 36, this.bold, 10, green);
    const badge = toWinAnsi(this.copy.badge);
    drawWords(
      this.page,
      badge,
      PAGE_W - MARGIN - wordsWidth(badge, this.regular, 8),
      PAGE_H - 36,
      this.regular,
      8,
      muted,
    );
    this.page.drawLine({
      start: { x: MARGIN, y: PAGE_H - 46 },
      end: { x: PAGE_W - MARGIN, y: PAGE_H - 46 },
      thickness: 1,
      color: line,
    });
  }

  finish() {
    this.pages.forEach((page, index) => {
      page.drawLine({
        start: { x: MARGIN, y: 36 },
        end: { x: PAGE_W - MARGIN, y: 36 },
        thickness: 1,
        color: line,
      });
      const left = `${this.copy.updated}  ·  ${this.copy.pdfFooterUrl}`;
      drawWords(page, left, MARGIN, 22, this.regular, 8, muted);
      const right = `${this.copy.pdfPageLabel} ${index + 1} / ${this.pages.length}`;
      drawWords(
        page,
        right,
        PAGE_W - MARGIN - wordsWidth(right, this.regular, 8),
        22,
        this.regular,
        8,
        muted,
      );
    });
  }

  ensure(height: number) {
    if (this.y - height < FOOTER_TOP) {
      this.addPage();
    }
  }

  gap(size = 10) {
    this.y -= size;
  }

  eyebrow(text: string) {
    this.ensure(18);
    drawWords(this.page, text.toUpperCase(), MARGIN, this.y, this.bold, 8, green);
    this.y -= 16;
  }

  heading(text: string, size = 14) {
    const lines = wrapText(text, this.bold, size, CONTENT_W);
    this.ensure(lines.length * (size + 4) + 4);
    for (const line of lines) {
      drawWords(this.page, line, MARGIN, this.y, this.bold, size, ink);
      this.y -= size + 4;
    }
    this.y -= 2;
  }

  para(text: string, size = 10, color = muted, width = CONTENT_W, x = MARGIN) {
    const lines = wrapText(text, this.regular, size, width);
    const lineH = size + 3;
    this.ensure(lines.length * lineH + 6);
    for (const line of lines) {
      drawWords(this.page, line, x, this.y, this.regular, size, color);
      this.y -= lineH;
    }
    this.y -= 4;
  }

  title(text: string, size: number, color = ink) {
    const lines = wrapText(text, this.bold, size, CONTENT_W);
    this.ensure(lines.length * (size + 5) + 4);
    for (const line of lines) {
      drawWords(this.page, line, MARGIN, this.y, this.bold, size, color);
      this.y -= size + 5;
    }
  }

  image(image: PDFImage, height: number) {
    this.ensure(height + 12);
    this.page.drawImage(image, {
      x: MARGIN,
      y: this.y - height,
      width: CONTENT_W,
      height,
    });
    this.y -= height + 12;
  }

  cards(items: { title: string; desc: string }[], columns: number) {
    const gap = 8;
    const cardW = (CONTENT_W - gap * (columns - 1)) / columns;
    const padding = 8;
    const innerW = cardW - padding * 2;
    const rows = Math.ceil(items.length / columns);

    for (let row = 0; row < rows; row += 1) {
      const slice = items.slice(row * columns, row * columns + columns);
      const heights = slice.map((item) => {
        const titleLines = wrapText(item.title, this.bold, 9, innerW);
        const bodyLines = wrapText(item.desc, this.regular, 8, innerW);
        return padding * 2 + titleLines.length * 12 + bodyLines.length * 11 + 4;
      });
      const rowH = Math.max(...heights);
      this.ensure(rowH + 8);
      slice.forEach((item, col) => {
        const x = MARGIN + col * (cardW + gap);
        const y = this.y - rowH;
        this.page.drawRectangle({
          x,
          y,
          width: cardW,
          height: rowH,
          color: wash,
          borderColor: line,
          borderWidth: 1,
        });
        let ty = this.y - padding - 9;
        for (const line of wrapText(item.title, this.bold, 9, innerW)) {
          drawWords(this.page, line, x + padding, ty, this.bold, 9, ink);
          ty -= 12;
        }
        ty -= 2;
        for (const line of wrapText(item.desc, this.regular, 8, innerW)) {
          drawWords(this.page, line, x + padding, ty, this.regular, 8, muted);
          ty -= 11;
        }
      });
      this.y -= rowH + 8;
    }
  }

  chips(items: string[]) {
    const gap = 6;
    const chipW = (CONTENT_W - gap) / 2;
    for (let i = 0; i < items.length; i += 2) {
      const pair = items.slice(i, i + 2);
      this.ensure(26);
      pair.forEach((item, col) => {
        const x = MARGIN + col * (chipW + gap);
        this.page.drawRectangle({
          x,
          y: this.y - 18,
          width: chipW,
          height: 22,
          borderColor: line,
          borderWidth: 1,
          color: white,
        });
        const label = wrapText(item, this.bold, 8, chipW - 12)[0] ?? '';
        drawWords(this.page, label, x + 8, this.y - 12, this.bold, 8, ink);
      });
      this.y -= 28;
    }
  }

  bullets(items: string[]) {
    for (const item of items) {
      const lines = wrapText(item, this.regular, 10, CONTENT_W - 14);
      this.ensure(lines.length * 13 + 4);
      this.page.drawText(toWinAnsi('•'), {
        x: MARGIN,
        y: this.y,
        size: 10,
        font: this.regular,
        color: green,
      });
      for (const line of lines) {
        drawWords(this.page, line, MARGIN + 12, this.y, this.regular, 10, muted);
        this.y -= 13;
      }
      this.y -= 2;
    }
  }

  table(rows: { label: string; value: string }[], labelHeader: string, valueHeader: string) {
    const labelW = 190;
    const valueW = CONTENT_W - labelW;
    const rowH = 18;
    this.ensure(rowH * (rows.length + 1) + 8);
    this.page.drawRectangle({
      x: MARGIN,
      y: this.y - rowH,
      width: CONTENT_W,
      height: rowH,
      color: wash,
    });
    drawWords(this.page, labelHeader, MARGIN + 8, this.y - 12, this.bold, 8, ink);
    drawWords(this.page, valueHeader, MARGIN + labelW + 8, this.y - 12, this.bold, 8, ink);
    this.y -= rowH;
    for (const row of rows) {
      this.page.drawRectangle({
        x: MARGIN,
        y: this.y - rowH,
        width: CONTENT_W,
        height: rowH,
        borderColor: line,
        borderWidth: 0.6,
      });
      drawWords(this.page, row.label, MARGIN + 8, this.y - 12, this.regular, 8, ink);
      drawWords(this.page, row.value, MARGIN + labelW + 8, this.y - 12, this.regular, 8, muted);
      this.y -= rowH;
    }
    this.y -= 8;
  }

  closeBox(title: string, body: string, links: string[]) {
    const titleLines = wrapText(title, this.bold, 12, CONTENT_W - 24);
    const bodyLines = wrapText(body, this.regular, 9, CONTENT_W - 24);
    const height = 28 + titleLines.length * 16 + bodyLines.length * 12 + links.length * 12;
    this.ensure(height);
    this.page.drawRectangle({
      x: MARGIN,
      y: this.y - height,
      width: CONTENT_W,
      height,
      color: ink,
    });
    let ty = this.y - 18;
    for (const line of titleLines) {
      drawWords(this.page, line, MARGIN + 12, ty, this.bold, 12, white);
      ty -= 16;
    }
    ty -= 4;
    for (const line of bodyLines) {
      drawWords(this.page, line, MARGIN + 12, ty, this.regular, 9, rgb(0.84, 0.89, 0.87));
      ty -= 12;
    }
    ty -= 4;
    for (const link of links) {
      drawWords(this.page, link, MARGIN + 12, ty, this.regular, 8, rgb(0.557, 0.878, 0.737));
      ty -= 12;
    }
    this.y -= height + 8;
  }
}

export async function buildCompanyProfilePdf(
  copy: Copy,
  locale: Locale,
  assets: { logo?: Uint8Array; cover?: Uint8Array },
) {
  const doc = await PDFDocument.create();
  doc.setTitle(locale === 'ms' ? 'Profil Syarikat 12Gig' : '12Gig Company Profile');
  doc.setAuthor('12Gig Sdn. Bhd.');
  doc.setSubject(toWinAnsi(copy.tagline));

  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const cover = assets.cover ? await doc.embedJpg(assets.cover) : undefined;

  const pdf = new Brochure(doc, regular, bold, copy);

  if (cover) pdf.image(cover, 148);
  pdf.title(copy.tagline, 12, green);
  pdf.gap(4);
  pdf.para(copy.intro, 11);
  pdf.para(copy.intro2, 11);
  pdf.para('12gig.com  ·  contact@12gig.com  ·  012 - 397 7896', 8, muted);

  pdf.gap(8);
  pdf.eyebrow(copy.whoEyebrow);
  pdf.heading(copy.whoTitle);
  copy.whoParas.forEach((p) => pdf.para(p));

  pdf.gap(6);
  pdf.eyebrow(copy.problemEyebrow);
  pdf.heading(copy.problemTitle);
  copy.problemParas.forEach((p) => pdf.para(p));

  pdf.gap(6);
  pdf.eyebrow(copy.howEyebrow);
  pdf.heading(copy.howTitle);
  pdf.cards(copy.howItems, 3);

  pdf.gap(6);
  pdf.eyebrow(copy.clustersEyebrow);
  pdf.heading(copy.clustersTitle);
  pdf.para(copy.clustersIntro);
  pdf.chips(copy.clusters);
  pdf.para(copy.clustersNote, 8);

  pdf.gap(6);
  pdf.eyebrow(copy.valuesEyebrow);
  pdf.heading(copy.valuesTitle);
  pdf.cards(copy.values, 1);

  pdf.gap(6);
  pdf.eyebrow(copy.audienceEyebrow);
  pdf.heading(copy.audienceTitle);
  pdf.bullets(copy.audience);

  pdf.gap(6);
  pdf.eyebrow(copy.partnersEyebrow);
  pdf.heading(copy.partnersTitle);
  pdf.para(copy.partnersIntro);
  pdf.bullets(copy.partners);
  pdf.para(copy.partnersNote, 8);

  pdf.gap(6);
  pdf.eyebrow(copy.leadershipEyebrow);
  pdf.heading(copy.leadershipTitle);
  pdf.cards(
    copy.leaders.map((leader) => ({ title: `${leader.name} — ${leader.role}`, desc: leader.bio })),
    1,
  );

  pdf.gap(6);
  pdf.eyebrow(copy.journeyEyebrow);
  pdf.heading(copy.journeyTitle);
  copy.journey.forEach((item) => {
    pdf.heading(item.year, 11);
    pdf.para(item.desc);
  });

  pdf.gap(4);
  pdf.eyebrow(copy.corpEyebrow);
  pdf.heading(copy.corpTitle);
  pdf.table(copy.corpRows, copy.corpColItem, copy.corpColInfo);

  pdf.closeBox(copy.closeTitle, copy.closeBody, [
    `${copy.exploreCta}: https://12gig.com`,
    `${copy.partnerCta}: contact@12gig.com`,
  ]);

  pdf.finish();
  return doc.save();
}
