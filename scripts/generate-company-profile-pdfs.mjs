import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildCompanyProfilePdf } from '../src/pdf/buildCompanyProfilePdf.ts';
import { pagesEn } from '../src/i18n/pagesEn.ts';
import { pagesMs } from '../src/i18n/pagesMs.ts';

const cover = new Uint8Array(readFileSync(resolve('public/kota-kinabalu.jpg')));

const files = [
  { locale: 'ms', copy: pagesMs.companyProfile, name: '12Gig-Profil-Syarikat.pdf' },
  { locale: 'en', copy: pagesEn.companyProfile, name: '12Gig-Company-Profile.pdf' },
];

for (const file of files) {
  const bytes = await buildCompanyProfilePdf(file.copy, file.locale, { cover });
  const path = resolve('public', file.name);
  writeFileSync(path, bytes);
  console.log(`Wrote ${file.name} (${bytes.length} bytes)`);
}
