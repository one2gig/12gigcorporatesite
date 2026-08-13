import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { DIRECTORY, MARKETPLACE_URL } from '../lib/site';

const CAT_HREFS = [DIRECTORY.servicing, DIRECTORY.events, DIRECTORY.lifestyle, DIRECTORY.digital, DIRECTORY.rural];

export default function ForUsers() {
  const { t } = useI18n();
  const p = t.forUsers;

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
          </>
        }
        primary={{ href: MARKETPLACE_URL, label: p.heroCta, external: true }}
        secondary={{ href: '#cara-mendapatkan-perkhidmatan', label: p.heroSecondary }}
        extra={<Link to="/faq#pengguna" className="text-sm font-semibold text-primary">{p.heroLink}</Link>}
      />

      <SectionBlock id="kategori-perkhidmatan" muted eyebrow={p.catEyebrow} title={p.catTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.home.categories.map((cat, idx) => (
            <a key={cat.title} href={CAT_HREFS[idx]} target="_blank" rel="noopener noreferrer" className="rounded-3xl border bg-background p-6 hover:border-primary/40">
              <h3 className="font-bold">{cat.title}</h3>
              <p className="mt-2 text-muted-foreground">{cat.desc}</p>
              <p className="mt-3 text-sm font-semibold text-primary">{cat.explore}</p>
            </a>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{p.catCta}</a>
        </Button>
      </SectionBlock>

      <SectionBlock id="cara-mendapatkan-perkhidmatan" eyebrow={p.howEyebrow} title={p.howTitle}>
        <ol className="space-y-4">
          {p.howSteps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
        <Link to="/how-it-works#pengguna" className="font-semibold text-primary">{p.howLink}</Link>
      </SectionBlock>

      <SectionBlock id="memilih-penyedia" muted eyebrow={p.chooseEyebrow} title={p.chooseTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.chooseItems.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <a href="#keselamatan">{p.chooseCta}</a>
        </Button>
      </SectionBlock>

      <SectionBlock id="sebelum-perkhidmatan" eyebrow={p.beforeEyebrow} title={p.beforeTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.beforeItems.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/terms#pembatalan-bayaran-balik">{p.beforeCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="harga-bayaran" muted eyebrow={p.payEyebrow} title={p.payTitle}>
        <p className="text-lg text-muted-foreground">{p.payP1}</p>
        <p className="text-muted-foreground">{p.payIntro}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.payChecks.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-muted-foreground">{p.payP2}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/faq#bayaran-caj">{p.payCta}</Link>
          </Button>
          <Link to="/terms#pembayaran" className="font-semibold text-primary">{p.payLink}</Link>
        </div>
      </SectionBlock>

      <SectionBlock id="keselamatan" eyebrow={p.safetyEyebrow} title={p.safetyTitle}>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.safetyItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/faq#keselamatan">{p.safetyCta}</Link>
          </Button>
          <Link to="/contact?tujuan=keselamatan" className="font-semibold text-primary">{p.safetyLink}</Link>
        </div>
      </SectionBlock>

      <SectionBlock muted eyebrow={p.complainEyebrow} title={p.complainTitle}>
        <p className="text-lg text-muted-foreground">{p.complainP1}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/contact?tujuan=aduan">{p.complainCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/terms#aduan-pertikaian">{p.complainSecondary}</Link>
          </Button>
        </div>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="text-3xl font-bold">{p.ctaTitle}</h2>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{p.ctaPrimary}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
              <Link to="/how-it-works#pengguna">{p.ctaSecondary}</Link>
            </Button>
          </div>
          <Link to="/faq#pengguna" className="text-sm font-semibold text-primary">{p.ctaLink}</Link>
        </div>
      </section>
    </div>
  );
}
