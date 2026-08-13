import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { DIRECTORY, GIGGER_AUTH_URL } from '../lib/site';

const CAT_HREFS = [DIRECTORY.servicing, DIRECTORY.events, DIRECTORY.lifestyle, DIRECTORY.digital, DIRECTORY.rural];

export default function ForGiggers() {
  const { t } = useI18n();
  const p = t.forGiggers;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: t.nav.whatWeDo, href: '/what-we-do' }, { label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={
          <>
            <p>{p.intro1}</p>
            <p>{p.intro2}</p>
            <p className="text-base">{p.note}</p>
          </>
        }
        primary={{ href: GIGGER_AUTH_URL, label: p.heroCta, external: true }}
        secondary={{ href: '#cara-menyertai', label: p.heroSecondary }}
      />

      <SectionBlock id="siapa-boleh-menyertai" muted eyebrow={p.whoEyebrow} title={p.whoTitle}>
        <p className="text-lg text-muted-foreground">{p.whoIntro}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.whoCriteria.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.whoGroups.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <a href="#kategori-perkhidmatan" className="font-semibold text-primary">{p.whoLink}</a>
      </SectionBlock>

      <SectionBlock id="manfaat" eyebrow={p.benefitsEyebrow} title={p.benefitsTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {p.benefits.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/what-we-do#gigger-first">{p.benefitsCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="tiada-jaminan" muted eyebrow={p.noPromiseEyebrow} title={p.noPromiseTitle}>
        <p className="text-lg text-muted-foreground">{p.noPromiseP1}</p>
        <p className="text-muted-foreground">{p.noPromiseP2}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.noPromiseFactors.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-lg text-muted-foreground">{p.noPromiseP3}</p>
        <Link to="/what-we-do#batas-peranan" className="font-semibold text-primary">{p.noPromiseLink}</Link>
      </SectionBlock>

      <SectionBlock id="cara-menyertai" eyebrow={p.joinEyebrow} title={p.joinTitle}>
        <ol className="space-y-4">
          {p.joinSteps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">{p.joinCta}</a>
          </Button>
          <Link to="/how-it-works#gigger" className="font-semibold text-primary">{p.joinLink}</Link>
        </div>
      </SectionBlock>

      <SectionBlock id="bina-perkhidmatan" muted eyebrow={p.listingEyebrow} title={p.listingTitle}>
        <p className="text-lg text-muted-foreground">{p.listingIntro}</p>
        <div className="space-y-4">
          {p.listingPoints.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/faq#gigger">{p.listingCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="kategori-perkhidmatan" eyebrow={p.catEyebrow} title={p.catTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.home.categories.map((cat, idx) => (
            <a key={cat.title} href={CAT_HREFS[idx]} target="_blank" rel="noopener noreferrer" className="rounded-3xl border p-6 transition-colors hover:border-primary/40">
              <h3 className="font-bold">{cat.title}</h3>
              <p className="mt-2 text-muted-foreground">{cat.desc}</p>
              <p className="mt-3 text-sm font-semibold text-primary">{cat.explore}</p>
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{p.catNote}</p>
      </SectionBlock>

      <SectionBlock id="harga-caj" muted eyebrow={p.priceEyebrow} title={p.priceTitle}>
        <p className="text-lg text-muted-foreground">{p.priceIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.priceTypes.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">{p.priceP1}</p>
        <p className="text-muted-foreground">{p.priceP2}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/faq#bayaran-caj">{p.priceCta}</Link>
          </Button>
          <Link to="/terms#pembayaran" className="font-semibold text-primary">{p.priceLink}</Link>
        </div>
      </SectionBlock>

      <SectionBlock id="tanggungjawab" eyebrow={p.dutyEyebrow} title={p.dutyTitle}>
        <p className="text-lg text-muted-foreground">{p.dutyIntro}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.duties.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-muted-foreground">{p.dutyOutro}</p>
        <Button className="rounded-full" asChild>
          <Link to="/terms#terma-gigger">{p.dutyCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="keselamatan-pengesahan" muted eyebrow={p.safetyEyebrow} title={p.safetyTitle}>
        <p className="text-lg text-muted-foreground">{p.safetyIntro}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.safetyItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-sm text-muted-foreground">{p.safetyNote}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/faq#keselamatan">{p.safetyCta}</Link>
          </Button>
          <Link to="/contact?tujuan=keselamatan" className="font-semibold text-primary">{p.safetyLink}</Link>
        </div>
      </SectionBlock>

      <SectionBlock id="sokongan" eyebrow={p.supportEyebrow} title={p.supportTitle}>
        <div className="space-y-4">
          {p.support.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
              <Link to={item.href} className="mt-3 inline-block font-semibold text-primary">{item.cta}</Link>
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
              <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">{p.ctaPrimary}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
              <Link to="/how-it-works#gigger">{p.ctaSecondary}</Link>
            </Button>
          </div>
          <Link to="/faq#gigger" className="text-sm font-semibold text-primary">{p.ctaLink}</Link>
        </div>
      </section>
    </div>
  );
}
