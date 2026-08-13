import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { GIGGER_AUTH_URL, MARKETPLACE_URL } from '../lib/site';

export default function HowItWorks() {
  const { t } = useI18n();
  const p = t.howItWorks;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: t.nav.whatWeDo, href: '/what-we-do' }, { label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={<p>{p.intro}</p>}
        extra={
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button className="rounded-full" asChild>
              <a href="#gigger">{p.roleGigger}</a>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="#pengguna">{p.roleUser}</a>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="#organisasi">{p.roleOrg}</a>
            </Button>
          </div>
        }
      />

      <SectionBlock id="gigger" muted eyebrow={p.giggerEyebrow} title={p.giggerTitle}>
        <p className="text-lg text-muted-foreground">{p.giggerIntro}</p>
        <ol className="space-y-4">
          {p.giggerSteps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border bg-background p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/for-giggers">{p.giggerCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/terms#terma-gigger">{p.giggerSecondary}</Link>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock id="pengguna" eyebrow={p.userEyebrow} title={p.userTitle}>
        <p className="text-lg text-muted-foreground">{p.userIntro}</p>
        <ol className="space-y-4">
          {p.userSteps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
              {i === 1 && (
                <Button className="mt-4 rounded-full" asChild>
                  <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{p.userFind}</a>
                </Button>
              )}
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/for-users">{p.userCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/terms#pembatalan-bayaran-balik">{p.userSecondary}</Link>
          </Button>
        </div>
        <Link to="/contact?tujuan=aduan" className="font-semibold text-primary">{p.userLink}</Link>
      </SectionBlock>

      <SectionBlock id="organisasi" muted eyebrow={p.orgEyebrow} title={p.orgTitle}>
        <p className="text-lg text-muted-foreground">{p.orgIntro}</p>
        <h3 className="text-2xl font-bold">{p.orgPathATitle}</h3>
        <ol className="space-y-4">
          {p.orgPathA.map((step, i) => (
            <li key={step.title} className="rounded-3xl border bg-background p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
        <Button className="rounded-full" asChild>
          <Link to="/for-organisasi#mendapatkan-perkhidmatan">{p.orgPathACta}</Link>
        </Button>
        <h3 className="text-2xl font-bold">{p.orgPathBTitle}</h3>
        <ol className="space-y-4">
          {p.orgPathB.map((step, i) => (
            <li key={step.title} className="rounded-3xl border bg-background p-6">
              <p className="text-sm font-semibold text-primary">{i + 1}</p>
              <h3 className="mt-2 font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/partnerships#model-program">{p.orgPathBCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/contact?tujuan=kerjasama">{p.orgPathBSecondary}</Link>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock id="sebelum-bersetuju" eyebrow={p.agreeEyebrow} title={p.agreeTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.agreeItems.map((item) => (
            <div key={item.title} className="rounded-3xl border p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/terms" className="font-semibold text-primary">{p.agreeLink}</Link>
      </SectionBlock>

      <SectionBlock id="bayaran-caj" muted eyebrow={p.payEyebrow} title={p.payTitle}>
        <p className="text-lg text-muted-foreground">{p.payP1}</p>
        <p className="text-lg text-muted-foreground">{p.payP2}</p>
        <p className="text-lg text-muted-foreground">{p.payP3}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/faq#bayaran-caj">{p.payCta}</Link>
          </Button>
          <Link to="/terms#pembayaran" className="font-semibold text-primary">{p.payLink}</Link>
        </div>
      </SectionBlock>

      <SectionBlock id="masalah-pertikaian" eyebrow={p.issueEyebrow} title={p.issueTitle}>
        <p className="text-lg text-muted-foreground">{p.issueP1}</p>
        <p className="text-lg text-muted-foreground">{p.issueP2}</p>
        <p className="font-semibold">{p.issueTypesTitle}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {p.issueTypes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/contact?tujuan=aduan">{p.issueCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/terms#aduan-pertikaian">{p.issueSecondary}</Link>
          </Button>
        </div>
        <Link to="/contact?tujuan=keselamatan" className="font-semibold text-primary">{p.issueSafety}</Link>
        <p className="text-sm text-muted-foreground">{p.issueNote}</p>
      </SectionBlock>

      <SectionBlock muted title={p.chooseTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {p.choose.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
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
              <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">{p.ctaGigger}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">{p.ctaUser}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/contact?tujuan=kerjasama">{p.ctaOrg}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
