import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { MARKETPLACE_URL } from '../lib/site';

export default function ForOrganisasi() {
  const { t } = useI18n();
  const p = t.forOrganisasi;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: t.nav.whatWeDo, href: '/what-we-do' }, { label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={<p>{p.intro}</p>}
        primary={{ href: '#mendapatkan-perkhidmatan', label: p.heroCta }}
        secondary={{ href: '#program-ekonomi-gig', label: p.heroSecondary }}
        extra={<Link to="/contact?tujuan=kerjasama" className="text-sm font-semibold text-primary">{p.heroLink}</Link>}
      />

      <SectionBlock id="siapa-kami-layani" muted eyebrow={p.whoEyebrow} title={p.whoTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.who.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/partnerships#bentuk-kerjasama">{p.whoCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="penyelesaian" eyebrow={p.pathsEyebrow} title={p.pathsTitle}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-bold">{p.pathATitle}</h3>
            <p className="mt-3 text-muted-foreground">{p.pathADesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {p.pathAExamples.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Button className="mt-4 rounded-full" asChild>
              <a href="#mendapatkan-perkhidmatan">{p.pathACta}</a>
            </Button>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-bold">{p.pathBTitle}</h3>
            <p className="mt-3 text-muted-foreground">{p.pathBDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {p.pathBExamples.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Button className="mt-4 rounded-full" asChild>
              <a href="#program-ekonomi-gig">{p.pathBCta}</a>
            </Button>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock id="mendapatkan-perkhidmatan" muted eyebrow={p.getEyebrow} title={p.getTitle}>
        <p className="text-lg text-muted-foreground">{p.getIntro}</p>
        <ol className="space-y-4">
          {p.getSteps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border bg-background p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{p.getCta}</a>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/contact?tujuan=keperluan-organisasi">{p.getSecondary}</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{p.getNote}</p>
      </SectionBlock>

      <SectionBlock id="program-ekonomi-gig" eyebrow={p.progEyebrow} title={p.progTitle}>
        <p className="text-lg text-muted-foreground">{p.progIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.progParts.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/partnerships#model-program">{p.progCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/contact?tujuan=cadangan-program">{p.progSecondary}</Link>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock id="struktur-program" muted eyebrow={p.structEyebrow} title={p.structTitle}>
        <ol className="space-y-4">
          {p.structPhases.map((item) => (
            <li key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </li>
          ))}
        </ol>
        <Button className="rounded-full" asChild>
          <Link to="/how-it-works#organisasi">{p.structCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="ukuran-program" eyebrow={p.measureEyebrow} title={p.measureTitle}>
        <p className="text-lg text-muted-foreground">{p.measureIntro}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.measureItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Button className="rounded-full" asChild>
          <Link to="/partnerships">{p.measureCta}</Link>
        </Button>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="text-3xl font-bold">{p.ctaTitle}</h2>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/contact?tujuan=kerjasama">{p.ctaPrimary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
              <Link to="/partnerships">{p.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
