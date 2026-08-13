from pathlib import Path

p = Path(r"c:\Users\Redz\Documents\12gig site\src\i18n\ms.ts")
text = p.read_text(encoding="utf-8")
start = text.index("  about: {")
sme_start = text.index("  sme: {")
sme_end = text.index("  impact: {")
head = text[:start]
sme = text[sme_start:sme_end]
new = "import type { Dictionary } from './en';\nimport { pagesMs } from './pagesMs';\n\n" + head.replace(
    "import type { Dictionary } from './en';\n\n", ""
)
# head already includes `export const ms: Dictionary = {`
new = "import type { Dictionary } from './en';\nimport { pagesMs } from './pagesMs';\n\nexport const ms: Dictionary = {\n" 
# rebuild: find export const
idx = text.index("export const ms")
obj_start = text.index("{", idx)
preamble_end = start  # '  about'
inner_head = text[obj_start + 1 : start]  # language, nav, footer, notFound, home
new = (
    "import type { Dictionary } from './en';\n"
    "import { pagesMs } from './pagesMs';\n\n"
    "export const ms: Dictionary = {\n"
    + inner_head
    + sme
    + "  ...pagesMs,\n};\n"
)
p.write_text(new, encoding="utf-8")
print("ok", len(new), "starts", new[:120])
