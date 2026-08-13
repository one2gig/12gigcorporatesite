import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';

function ActionLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className="mt-3 inline-block font-semibold text-primary">
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className="mt-3 inline-block font-semibold text-primary">
      {children}
    </Link>
  );
}

export default function Partnerships() {
  const { t } = useI18n();
  const p = t.partnerships;

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
        primary={{ href: '#bentuk-kerjasama', label: p.heroCta }}
        secondary={{ href: '/contact?tujuan=kerjasama', label: p.heroSecondary }}
        extra={
          <Link to="/for-organisasi" className="text-sm font-semibold text-primary">
            {p.heroLink}
          </Link>
        }
      />

      <SectionBlock id="rakan-kerjasama" muted eyebrow={p.partnersEyebrow} title={p.partnersTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.partners.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button className="rounded-full" asChild>
          <Link to="/for-organisasi">{p.partnersCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="bentuk-kerjasama" eyebrow={p.formsEyebrow} title={p.formsTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {p.forms.map((item) => (
            <div key={item.title} className="flex flex-col rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{item.desc}</p>
              <ActionLink href={item.href}>{item.cta}</ActionLink>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="model-program" muted eyebrow={p.modelEyebrow} title={p.modelTitle}>
        <ol className="space-y-4">
          {p.modelSteps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border bg-background p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
        <Button className="rounded-full" asChild>
          <Link to="/how-it-works#organisasi">{p.modelCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="struktur-pelaksanaan" eyebrow={p.structEyebrow} title={p.structTitle}>
        <ol className="space-y-4">
          {p.structPhases.map((item) => (
            <li key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </li>
          ))}
        </ol>
        <Button className="rounded-full" asChild>
          <Link to="/contact?tujuan=kerjasama">{p.structCta}</Link>
        </Button>
      </SectionBlock>

      <SectionBlock id="hasil-pengukuran" muted eyebrow={p.resultsEyebrow} title={p.resultsTitle}>
        <p className="text-lg text-muted-foreground">{p.resultsIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.results.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="maklumat-cadangan" eyebrow={p.infoEyebrow} title={p.infoTitle}>
        <p className="text-lg text-muted-foreground">{p.infoIntro}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.infoItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">{p.infoNote}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/contact?tujuan=cadangan-program">{p.infoCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/contact?tujuan=keperluan-organisasi">{p.infoSecondary}</Link>
          </Button>
        </div>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/contact?tujuan=kerjasama">{p.ctaPrimary}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link to="/for-organisasi">{p.ctaSecondary}</Link>
            </Button>
          </div>
          <Link to="/impact" className="text-sm font-semibold text-primary">
            {p.ctaLink}
          </Link>
        </div>
      </section>
    </div>
  );
}
