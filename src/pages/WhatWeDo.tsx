import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { GIGGER_AUTH_URL, MARKETPLACE_URL } from '../lib/site';

export default function WhatWeDo() {
  const { t } = useI18n();
  const p = t.whatWeDo;

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
        primary={{ href: '/how-it-works', label: p.heroCta }}
        secondary={{ href: MARKETPLACE_URL, label: p.heroSecondary, external: true }}
      />

      <SectionBlock id="model-12gig" muted eyebrow={p.modelEyebrow} title={p.modelTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{p.modelIntro}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {p.audiences.map((item) => (
            <div key={item.title} className="flex flex-col rounded-3xl border bg-background p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{item.desc}</p>
              <Link to={item.href} className="mt-4 inline-flex items-center font-semibold text-primary">
                {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="penyelesaian-12gig" eyebrow={p.solutionsEyebrow} title={p.solutionsTitle}>
        <div className="space-y-6">
          {p.solutions.map((item) => (
            <div key={item.problem} className="rounded-3xl border p-6">
              <h3 className="text-lg font-bold">{item.problem}</h3>
              <p className="mt-2 text-muted-foreground">{item.problemDesc}</p>
              <p className="mt-4 font-semibold text-primary">{item.action}</p>
              <p className="mt-1 text-muted-foreground">{item.actionDesc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/partnerships#bentuk-kerjasama">{p.solutionsCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="fungsi-utama" muted eyebrow={p.functionsEyebrow} title={p.functionsTitle}>
        <div className="space-y-6">
          {p.functions.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-muted-foreground">{item.desc}</p>
              <Link to={item.href} className="mt-4 inline-flex items-center font-semibold text-primary">
                {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="gigger-first" eyebrow={p.giggerFirstEyebrow} title={p.giggerFirstTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{p.giggerFirstP1}</p>
        <p className="text-lg leading-relaxed text-muted-foreground">{p.giggerFirstP2}</p>
        <div className="space-y-4">
          {p.giggerFirstFocus.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/for-giggers#manfaat">{p.giggerFirstCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">{p.giggerFirstSecondary}</a>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock id="ekosistem-perkhidmatan" muted eyebrow={p.ecoEyebrow} title={p.ecoTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.ecosystems.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.examples}</p>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center font-semibold text-primary">
                {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{p.ecoCta}</a>
        </Button>
      </SectionBlock>

      <SectionBlock id="organisasi-perniagaan" eyebrow={p.orgEyebrow} title={p.orgTitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {p.orgPaths.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-muted-foreground">{item.desc}</p>
              <Link to={item.href} className="mt-4 inline-flex items-center font-semibold text-primary">
                {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{p.orgNote}</p>
      </SectionBlock>

      <SectionBlock id="batas-peranan" muted eyebrow={p.limitsEyebrow} title={p.limitsTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{p.limitsP1}</p>
        <p className="text-lg leading-relaxed text-muted-foreground">{p.limitsP2}</p>
        <p className="text-lg leading-relaxed text-muted-foreground">{p.limitsP3}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/terms">{p.limitsCta}</Link>
          </Button>
          <Link to="/faq" className="inline-flex items-center font-semibold text-primary">{p.limitsLink}</Link>
        </div>
      </SectionBlock>

      <SectionBlock eyebrow={p.chooseEyebrow} title={p.chooseTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {p.choose.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
              <Button className="mt-4 rounded-full" asChild>
                <Link to={item.href}>{item.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="text-3xl font-bold">{p.ctaTitle}</h2>
          <p className="text-white/70">{p.ctaBody}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/how-it-works">{p.ctaPrimary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{p.ctaSecondary}</a>
            </Button>
          </div>
          <Link to="/contact?tujuan=kerjasama" className="text-sm font-semibold text-primary">{p.ctaLink}</Link>
        </div>
      </section>
    </div>
  );
}
