import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';

export default function CookieSettings() {
  const { t } = useI18n();
  const p = t.cookies;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={<p>{p.intro}</p>}
      />

      <SectionBlock muted title={p.essentialTitle}>
        <p className="text-lg text-muted-foreground">{p.essentialBody}</p>
        <p className="text-muted-foreground">{p.note}</p>
        <Button className="rounded-full" asChild>
          <Link to="/privacy#kuki">{p.privacyCta}</Link>
        </Button>
      </SectionBlock>
    </div>
  );
}
