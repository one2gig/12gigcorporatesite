import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { GIGGER_AUTH_URL, MARKETPLACE_URL } from '../lib/site';

export default function Impact() {
  const { t } = useI18n();
  const p = t.impact;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={
          <>
            <p>{p.intro1}</p>
            <p>{p.intro2}</p>
          </>
        }
        primary={{ href: '#bidang-impak', label: p.heroCta }}
        secondary={{ href: '#kaedah-pengukuran', label: p.heroSecondary }}
      />

      <SectionBlock id="bidang-impak" eyebrow={p.areasEyebrow} title={p.areasTitle}>
        <div className="space-y-4">
          {p.areas.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/what-we-do">{p.areasCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="gigger-first" muted eyebrow={p.gfEyebrow} title={p.gfTitle}>
        <p className="text-lg text-muted-foreground">{p.gfP1}</p>
        <p className="text-muted-foreground">{p.gfFocus}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.gfItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-muted-foreground">{p.gfP2}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/for-giggers#manfaat">{p.gfCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">
              {p.gfSecondary}
            </a>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock id="impak-pengguna" eyebrow={p.usersEyebrow} title={p.usersTitle}>
        <p className="text-lg text-muted-foreground">{p.usersP1}</p>
        <p className="text-muted-foreground">{p.usersP2}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.usersItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-muted-foreground">{p.usersP3}</p>
        <Button className="rounded-full" asChild>
          <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
            {p.usersCta}
          </a>
        </Button>
      </SectionBlock>

      <SectionBlock id="impak-kerjasama" muted eyebrow={p.collabEyebrow} title={p.collabTitle}>
        <p className="text-lg text-muted-foreground">{p.collabP1}</p>
        <p className="text-muted-foreground">{p.collabP2}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.collabItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-muted-foreground">{p.collabP3}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/partnerships#bentuk-kerjasama">{p.collabCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/for-organisasi">{p.collabSecondary}</Link>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock id="kaedah-pengukuran" eyebrow={p.methodEyebrow} title={p.methodTitle}>
        <p className="text-lg text-muted-foreground">{p.methodIntro}</p>
        <div className="space-y-4">
          {p.methodItems.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">{p.methodP1}</p>
        <Button className="rounded-full" asChild>
          <Link to="/for-organisasi#ukuran-program">{p.methodCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="perkembangan" muted eyebrow={p.commitEyebrow} title={p.commitTitle}>
        <p className="text-lg text-muted-foreground">{p.commitP1}</p>
        <p className="text-muted-foreground">{p.commitP2}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.commitItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-center">
          <Button size="lg" className="rounded-full" asChild>
            <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">
              {p.ctaGigger}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            asChild
          >
            <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
              {p.ctaUser}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            asChild
          >
            <Link to="/contact?tujuan=kerjasama">{p.ctaOrg}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
