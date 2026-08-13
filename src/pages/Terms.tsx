import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';

export default function Terms() {
  const { t } = useI18n();
  const p = t.terms;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={
          <>
            <p className="text-base">{p.effective}</p>
            <p className="text-base">{p.updated}</p>
            {p.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </>
        }
      />

      {p.sections.map((section, idx) => (
        <React.Fragment key={section.id}>
          <SectionBlock id={section.id} muted={idx % 2 === 0} title={section.title}>
            {section.paras.map((para) => (
              <p key={para.slice(0, 40)} className="text-muted-foreground">
                {para}
              </p>
            ))}
          </SectionBlock>
        </React.Fragment>
      ))}

      <SectionBlock title={p.relatedTitle}>
        <ul className="space-y-3">
          <li>
            <Link to="/privacy" className="font-semibold text-primary">
              {t.nav.privacy}
            </Link>
          </li>
          <li>
            <Link to="/for-giggers" className="font-semibold text-primary">
              {t.nav.forGiggers}
            </Link>
          </li>
          <li>
            <Link to="/faq" className="font-semibold text-primary">
              {t.nav.faq}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-semibold text-primary">
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </SectionBlock>
    </div>
  );
}
