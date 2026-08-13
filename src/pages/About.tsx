import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, BarChart4, Users, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { GIG_WORKERS_ACT_URL, MARKETPLACE_URL } from '../lib/site';

const FIELD_ICONS = [Wrench, Users, Heart, BarChart4, MapPin] as const;

export default function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: a.badge }]}
        eyebrow={a.badge}
        title={a.title}
        subtitle={
          <>
            <p>{a.heroP1}</p>
            <p>{a.heroP2}</p>
          </>
        }
        primary={{ href: '/what-we-do', label: a.heroCta }}
        secondary={{ href: MARKETPLACE_URL, label: a.heroSecondary, external: true }}
      />

      <SectionBlock id="siapa-kami" muted eyebrow={a.whoEyebrow} title={a.whoTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{a.whoP1}</p>
        <p className="text-lg leading-relaxed text-muted-foreground">{a.whoP2}</p>
        <p className="text-lg leading-relaxed text-muted-foreground">{a.whoP3}</p>
        <div className="rounded-3xl border bg-background p-8 text-sm leading-relaxed">
          <p><span className="font-semibold">{a.corpNameLabel}:</span> {a.corpName}</p>
          <p><span className="font-semibold">{a.corpLocationLabel}:</span> {a.corpLocation}</p>
          <p><span className="font-semibold">{a.corpPlatformLabel}:</span> 12gig.com</p>
          <p><span className="font-semibold">{a.corpSiteLabel}:</span> 12gig.my</p>
        </div>
        <Link to="/what-we-do#model-12gig" className="inline-flex items-center font-semibold text-primary">
          {a.whoLink} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </SectionBlock>

      <SectionBlock id="kisah-penubuhan" eyebrow={a.originEyebrow} title={a.originTitle}>
        {a.originParas.map((p) => (
          <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-muted-foreground">{p}</p>
        ))}
        <blockquote className="rounded-[2rem] bg-foreground p-8 text-background sm:p-10">
          <p className="text-xl font-medium leading-snug">{a.originPrinciple}</p>
          <p className="mt-4 text-background/75">{a.originPrincipleBody}</p>
        </blockquote>
        <Button className="rounded-full" asChild>
          <Link to="/what-we-do#gigger-first">{a.originCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="mengapa-sekarang" muted eyebrow={a.nowEyebrow} title={a.nowTitle}>
        {a.nowParas.map((p) => (
          <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-muted-foreground">{p}</p>
        ))}
        <a
          href={GIG_WORKERS_ACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-semibold text-primary"
        >
          {a.nowLink} <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </SectionBlock>

      <SectionBlock id="cabaran-pasaran" eyebrow={a.challengesEyebrow} title={a.challengesTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {a.challenges.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/what-we-do#penyelesaian-12gig">{a.challengesCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="misi-visi" muted title={a.missionTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {a.missionItems.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold text-primary">{item.title}</h3>
              <p className="mt-3 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/impact">{a.missionCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="prinsip-kami" eyebrow={a.principlesEyebrow} title={a.principlesTitle}>
        <div className="space-y-4">
          {a.principles.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/impact#kaedah-pengukuran" className="inline-flex items-center font-semibold text-primary">
          {a.principlesLink} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </SectionBlock>

      <SectionBlock id="kelainan-12gig" muted eyebrow={a.diffEyebrow} title={a.diffTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{a.diffIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {a.ecosystems.map((item, idx) => {
            const Icon = FIELD_ICONS[idx] ?? Users;
            return (
              <div key={item.title} className="flex gap-4 rounded-3xl border bg-background p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-muted-foreground">{a.diffOutro}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/what-we-do">{a.diffCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{a.diffSecondary}</a>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock id="perjalanan-12gig" eyebrow={a.journeyEyebrow} title={a.journeyTitle}>
        <div className="space-y-6">
          {a.journey.map((item) => (
            <div key={item.year} className="border-l-4 border-primary pl-6">
              <p className="font-bold">{item.year}</p>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/impact#perkembangan">{a.journeyCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="kepimpinan" muted eyebrow={a.teamEyebrow} title={a.teamTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{a.teamP1}</p>
        <p className="text-lg leading-relaxed text-muted-foreground">{a.teamP2}</p>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{a.ctaTitle}</h2>
          <p className="text-lg text-white/70">{a.ctaBody}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/what-we-do">{a.ctaPrimary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
              <Link to="/impact">{a.ctaSecondary}</Link>
            </Button>
          </div>
          <Link to="/partnerships" className="inline-block text-sm font-semibold text-primary">
            {a.ctaLink}
          </Link>
        </div>
      </section>
    </div>
  );
}
