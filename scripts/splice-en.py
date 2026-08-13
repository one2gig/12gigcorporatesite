from pathlib import Path

p = Path(r"c:\Users\Redz\Documents\12gig site\src\i18n\en.ts")
text = p.read_text(encoding="utf-8")
start = text.index("  about: {")
sme_start = text.index("  sme: {")
sme_end = text.index("  impact: {")
head = text[:start]
sme = text[sme_start:sme_end]
new = "import { pagesEn } from './pagesEn';\n\n" + head + sme + "  ...pagesEn,\n};\n\nexport type Dictionary = typeof en;\n"
p.write_text(new, encoding="utf-8")
print("ok", len(new))
