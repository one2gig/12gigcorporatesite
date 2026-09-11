import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Store, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DownloadCompanyProfileButton } from '../components/DownloadCompanyProfileButton';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { CONTACT_EMAIL, MARKETPLACE_URL } from '../lib/site';

const HOW_ICONS = [Store, Users, Handshake] as const;

const LEADER_PHOTOS: Record<
  string,
  { src: string; position: string; zoom?: number; shiftX?: number; shiftY?: number; bg: string }
> = {
  '/profile/syed-abdullah-mohamad': {
    src: '/team/syed-abdullah-mohamad.jpeg',
    position: 'center 18%',
    zoom: 1.65,
    shiftY: 16,
    bg: '#9eb0bc',
  },
  '/profile/redzuan-hiew': {
    src: '/team/redzuan-hiew.png',
    position: 'center 16%',
    zoom: 1.15,
    bg: '#6b6b6b',
  },
  '/profile/elaina-sukaimi': {
    src: '/team/elaina-sukaimi.jpeg',
    position: 'center 12%',
    zoom: 2.4,
    shiftY: 8,
    bg: '#d4d4d0',
  },
};

const CLUSTER_IMAGES = [
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=900',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=900',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=900',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=900',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=900',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=900',
] as const;

export default function CompanyProfile() {
  const { t } = useI18n();
  const c = t.companyProfile;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: t.nav.about, href: '/about' }, { label: c.badge }]}
        eyebrow={c.badge}
        title={c.title}
        subtitle={
          <>
            <p className="font-medium text-foreground">{c.tagline}</p>
            <p>{c.intro}</p>
            <p>{c.intro2}</p>
          </>
        }
        primary={{ href: MARKETPLACE_URL, label: c.exploreCta, external: true }}
        secondary={{ href: `mailto:${CONTACT_EMAIL}`, label: c.partnerCta, external: true }}
        extra={
          <div className="flex justify-center">
            <DownloadCompanyProfileButton />
          </div>
        }
      />

      <SectionBlock id="siapa-kami" muted eyebrow={c.whoEyebrow} title={c.whoTitle}>
        <div className="overflow-hidden rounded-3xl border">
          <img
            src="/kota-kinabalu.jpg"
            alt=""
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>
        {c.whoParas.map((p) => (
          <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </SectionBlock>

      <SectionBlock id="masalah" eyebrow={c.problemEyebrow} title={c.problemTitle}>
        {c.problemParas.map((p) => (
          <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </SectionBlock>

      <SectionBlock id="cara-berfungsi" muted eyebrow={c.howEyebrow} title={c.howTitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {c.howItems.map((item, idx) => {
            const Icon = HOW_ICONS[idx] ?? Users;
            return (
              <div key={item.title} className="rounded-3xl border bg-background p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionBlock>

      <SectionBlock id="kluster" eyebrow={c.clustersEyebrow} title={c.clustersTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{c.clustersIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.clusters.map((label, idx) => (
            <div key={label} className="overflow-hidden rounded-3xl border bg-background">
              <img src={CLUSTER_IMAGES[idx]} alt="" className="h-40 w-full object-cover" />
              <p className="p-5 font-semibold">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{c.clustersNote}</p>
      </SectionBlock>

      <SectionBlock id="nilai" muted eyebrow={c.valuesEyebrow} title={c.valuesTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.values.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="kumpulan-sasaran" eyebrow={c.audienceEyebrow} title={c.audienceTitle}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.audience.map((item) => (
            <li key={item} className="rounded-2xl border px-5 py-4 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock id="kerjasama" muted eyebrow={c.partnersEyebrow} title={c.partnersTitle}>
        <p className="text-lg leading-relaxed text-muted-foreground">{c.partnersIntro}</p>
        <ul className="space-y-3">
          {c.partners.map((item) => (
            <li key={item} className="rounded-2xl border bg-background px-5 py-4 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">{c.partnersNote}</p>
      </SectionBlock>

      <SectionBlock id="kepimpinan" eyebrow={c.leadershipEyebrow} title={c.leadershipTitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {c.leaders.map((leader) => {
            const photo = LEADER_PHOTOS[leader.href];
            return (
              <article key={leader.name} className="flex flex-col rounded-3xl border p-6">
                {photo ? (
                  <div
                    className="mx-auto mb-4 h-14 w-14 shrink-0 overflow-hidden rounded-full"
                    style={{ backgroundColor: photo.bg }}
                  >
                    <img
                      src={photo.src}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                      style={{
                        objectPosition: photo.position,
                        transform: `scale(${photo.zoom ?? 1}) translate(${photo.shiftX ?? 0}%, ${photo.shiftY ?? 0}%)`,
                        transformOrigin: photo.position,
                      }}
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {leader.name
                      .split(' ')
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('')}
                  </div>
                )}
                <h3 className="font-bold">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{leader.role}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{leader.bio}</p>
              </article>
            );
          })}
        </div>
      </SectionBlock>

      <SectionBlock id="perjalanan" muted eyebrow={c.journeyEyebrow} title={c.journeyTitle}>
        <div className="space-y-6">
          {c.journey.map((item) => (
            <div key={item.year} className="border-l-4 border-primary pl-6">
              <p className="font-bold">{item.year}</p>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="maklumat-korporat" eyebrow={c.corpEyebrow} title={c.corpTitle}>
        <div className="overflow-hidden rounded-3xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-5 py-3 font-semibold">{c.corpColItem}</th>
                <th className="px-5 py-3 font-semibold">{c.corpColInfo}</th>
              </tr>
            </thead>
            <tbody>
              {c.corpRows.map((row) => (
                <tr key={row.label} className="border-t">
                  <td className="px-5 py-3 font-medium">{row.label}</td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {row.value.startsWith('http') ? (
                      <a
                        href={row.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {row.value.replace('https://', '')}
                      </a>
                    ) : row.value.includes('@') ? (
                      <a href={`mailto:${row.value}`} className="text-primary hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <DownloadCompanyProfileButton />
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{c.closeEyebrow}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{c.closeTitle}</h2>
          <p className="text-lg text-white/70">{c.closeBody}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/contact">{c.contactTeam}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <a href={`mailto:${CONTACT_EMAIL}`}>{c.partnerCta}</a>
            </Button>
          </div>
          <div className="flex justify-center">
            <DownloadCompanyProfileButton className="border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white" />
          </div>
        </div>
      </section>

      <p className="py-8 text-center text-sm text-muted-foreground">{c.updated}</p>
    </div>
  );
}
