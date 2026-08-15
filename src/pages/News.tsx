import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { CONTACT_EMAIL, SOCIAL } from '../lib/site';

export default function News() {
  const { t } = useI18n();
  const p = t.news;
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryIds = p.categories.map((item) => item.id);
  const raw = searchParams.get('kategori') ?? 'all';
  const category = categoryIds.includes(raw) ? raw : 'all';
  const selected = p.categories.find((item) => item.id === category) ?? p.categories[0];
  const categoryTitle = Object.fromEntries(p.categories.map((item) => [item.id, item.title]));

  const filteredArticles =
    category === 'all'
      ? p.articles
      : p.articles.filter((article) => article.categories.includes(category));

  const setCategory = (id: string) => {
    const next = new URLSearchParams(searchParams);
    if (id === 'all') next.delete('kategori');
    else next.set('kategori', id);
    setSearchParams(next, { replace: true });
  };

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
        primary={{ href: '#berita-terkini', label: p.heroCta }}
        secondary={{ href: '/contact?tujuan=media', label: p.heroSecondary }}
      />

      <SectionBlock id="berita-terkini" muted eyebrow={p.latestEyebrow} title={p.latestTitle}>
        {p.articles.length === 0 ? (
          <p className="rounded-3xl border bg-background p-8 text-lg text-muted-foreground">{p.empty}</p>
        ) : (
          <div className="space-y-8">
            {p.articles.map((article) => (
              <article
                key={article.id}
                id={article.id}
                className="scroll-mt-40 space-y-8 rounded-3xl border bg-background p-6 sm:p-10"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {article.categories.map((id) => (
                      <Badge key={id} variant="secondary" className="rounded-full">
                        {categoryTitle[id] ?? id}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {article.date} | {article.location}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{article.title}</h3>
                </div>

                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  {article.intro.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="font-semibold">{article.goalsIntro}</p>
                  <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
                    {article.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ol>
                </div>

                {article.sections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h4 className="text-xl font-bold tracking-tight">{section.title}</h4>
                    {section.paras.map((para) => (
                      <p key={para} className="leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}

                <dl className="grid gap-4 sm:grid-cols-2">
                  {article.facts.map((fact) => (
                    <div key={fact.label} className="rounded-2xl border bg-muted/30 p-5">
                      <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                      <dd className="mt-1 font-bold">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="space-y-1 pt-2">
                  <p className="font-bold">{article.signoff}</p>
                  <p className="text-muted-foreground">{article.tagline}</p>
                </div>
                {article.testerCta ? (
                  <Button className="rounded-full" asChild>
                    <Link to="/beta">{article.testerCta}</Link>
                  </Button>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </SectionBlock>

      <SectionBlock eyebrow={p.catsEyebrow} title={p.catsTitle}>
        <div className="flex flex-wrap gap-2">
          {p.categories.map((item) => (
            <Button
              key={item.id}
              type="button"
              variant={item.id === category ? 'default' : 'outline'}
              className="rounded-full"
              onClick={() => setCategory(item.id)}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <p className="text-muted-foreground">{selected.desc}</p>
        {filteredArticles.length === 0 ? (
          <p className="rounded-3xl border p-8 text-muted-foreground">{p.empty}</p>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={`#${article.id}`}
                className="block rounded-3xl border p-6 transition-colors hover:bg-muted/40"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  {article.date} | {article.location}
                </p>
                <h3 className="mt-2 font-bold">{article.title}</h3>
                <p className="mt-2 text-muted-foreground">{article.excerpt}</p>
              </a>
            ))}
          </div>
        )}
      </SectionBlock>

      <SectionBlock muted eyebrow={p.mediaEyebrow} title={p.mediaTitle}>
        <p className="text-lg text-muted-foreground">{p.mediaP1}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link to="/contact?tujuan=media">{p.mediaCta}</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>{p.mediaSecondary}</a>
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock eyebrow={p.socialEyebrow} title={p.socialTitle}>
        <p className="text-lg text-muted-foreground">{p.socialIntro}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full" asChild>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Button>
        </div>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="text-3xl font-bold">{p.ctaTitle}</h2>
          <p className="text-white/70">{p.ctaBody}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/about">{p.ctaPrimary}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link to="/impact">{p.ctaSecondary}</Link>
            </Button>
          </div>
          <Link to="/contact?tujuan=media" className="text-sm font-semibold text-primary">
            {p.ctaLink}
          </Link>
        </div>
      </section>
    </div>
  );
}
