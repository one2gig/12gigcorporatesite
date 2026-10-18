import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '../i18n/I18nProvider';
import type { Dictionary } from '../i18n/en';

type StoryItem = Dictionary['stories']['items'][number];

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="story-serif my-8 border-l-2 border-primary pl-6 text-2xl leading-snug text-foreground sm:pl-8 sm:text-3xl">
      {children}
    </blockquote>
  );
}

function StoryImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  if (!src) return null;
  return (
    <figure className="my-8 overflow-hidden rounded-[1.75rem] border bg-muted/20">
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
      {caption ? (
        <figcaption className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function StoryIndex() {
  const { t } = useI18n();
  const s = t.stories;

  return (
    <div className="pt-20">
      <header className="border-b bg-foreground text-background">
        <div className="container mx-auto max-w-3xl space-y-6 px-4 py-20 text-center sm:py-28">
          <p className="text-sm text-white/60">
            <Link to="/" className="hover:text-white">
              {t.nav.home}
            </Link>
            <span aria-hidden> › </span>
            <span className="text-white">{s.badge}</span>
          </p>
          <h1 className="story-serif text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">{s.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{s.intro}</p>
        </div>
      </header>

      <section className="bg-background py-12 sm:py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4">
          {s.items.map((story) => (
            <Link
              key={story.slug}
              to={`/stories/${story.slug}`}
              className="group grid overflow-hidden rounded-[1.75rem] border bg-background transition-colors hover:bg-muted/30 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
            >
              {story.portraitSrc ? (
                <img
                  src={story.portraitSrc}
                  alt={story.portraitAlt}
                  className="h-72 w-full object-cover object-top sm:h-full"
                />
              ) : null}
              <div className="space-y-4 p-6 sm:p-8">
                <p className="text-sm text-muted-foreground">
                  {story.date} · {story.place}
                </p>
                <h2 className="story-serif text-3xl leading-snug group-hover:text-primary sm:text-4xl">{story.title}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{story.dek}</p>
                <p className="inline-flex items-center gap-2 font-semibold text-primary">
                  {s.readCta}
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function StoryArticle({ story, badge }: { story: StoryItem; badge: string }) {
  const { t } = useI18n();
  const heroSrc = story.teamSrc || story.portraitSrc;

  return (
    <article className="pt-20">
      <header className="relative isolate overflow-hidden bg-foreground text-background">
        {heroSrc ? (
          <img
            src={heroSrc}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-top opacity-35"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/75 to-foreground" />
        <div className="relative container mx-auto max-w-3xl space-y-7 px-4 py-20 text-center sm:py-28">
          <p className="text-sm text-white/60">
            <Link to="/" className="hover:text-white">
              {t.nav.home}
            </Link>
            <span aria-hidden> › </span>
            <Link to="/stories" className="hover:text-white">
              {badge}
            </Link>
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{story.series}</p>
          <h1 className="story-serif text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">{story.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{story.dek}</p>
          <p className="text-sm text-white/55">
            {story.date} · {story.place}
          </p>
        </div>
      </header>

      <section className="bg-background py-12 sm:py-14">
        <div className="container mx-auto grid max-w-5xl items-start gap-10 px-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <figure className="lg:sticky lg:top-36">
            {story.portraitSrc ? (
              <div className="overflow-hidden rounded-[1.75rem] border bg-muted/20 shadow-sm">
                <img
                  src={story.portraitSrc}
                  alt={story.portraitAlt}
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </div>
            ) : null}
            <figcaption className="mt-4 space-y-1 text-sm">
              <p className="font-semibold">{story.portraitCaption}</p>
              <p className="text-muted-foreground">{story.portraitRole}</p>
            </figcaption>
          </figure>

          <div className="max-w-2xl">
            {story.opening.map((para) => (
              <p key={para} className="mb-4 text-lg leading-[1.75] text-foreground/90 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/20 py-12 sm:py-14">
        <div className="container mx-auto max-w-2xl px-4">
          {story.chapters.map((chapter) => (
            <section key={chapter.title} className="mb-10 last:mb-0">
              <h2 className="story-serif mb-4 text-3xl leading-snug sm:text-4xl">{chapter.title}</h2>
              {chapter.paras.map((para) => (
                <p key={para} className="mb-4 text-lg leading-[1.75] text-foreground/90">
                  {para}
                </p>
              ))}
              {'quote' in chapter && chapter.quote ? <PullQuote>{chapter.quote}</PullQuote> : null}
              {'list' in chapter && chapter.list ? (
                <ul className="mb-4 list-disc space-y-1.5 pl-6 text-lg leading-[1.75] text-foreground/90">
                  {chapter.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {'afterList' in chapter && chapter.afterList
                ? chapter.afterList.map((para) => (
                    <p key={para} className="mb-4 text-lg leading-[1.75] text-foreground/90">
                      {para}
                    </p>
                  ))
                : null}
              {'image' in chapter && chapter.image === 'team' ? (
                <StoryImage src={story.teamSrc} alt={story.teamAlt} caption={story.teamCaption} />
              ) : null}
              {'image' in chapter && chapter.image === 'session' ? (
                <StoryImage src={story.sessionSrc} alt={story.sessionAlt} caption={story.sessionCaption} />
              ) : null}
            </section>
          ))}

          {story.thanks.length > 0 ? (
            <div className="mt-8">
              {story.thanks.map((para) => (
                <p key={para} className="mb-4 text-lg leading-[1.75] text-foreground/90 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-foreground py-16 text-background sm:py-20">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <p className="story-serif text-3xl leading-snug sm:text-4xl">{story.finalQuote}</p>
          <p className="text-white/65">{story.finalLine}</p>
          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to={story.relatedHref}>
                {story.relatedNews}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link to={story.moreHref}>{story.moreNews}</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default function Story() {
  const { slug } = useParams();
  const { t } = useI18n();

  if (!slug) return <StoryIndex />;

  const story = t.stories.items.find((item) => item.slug === slug);
  if (!story) {
    return (
      <div className="container mx-auto max-w-3xl space-y-4 px-4 pb-20 pt-40 text-center">
        <h1 className="text-4xl font-bold">{t.notFound.title}</h1>
        <p className="text-muted-foreground">{t.notFound.description}</p>
        <Button className="rounded-full" asChild>
          <Link to="/stories">{t.stories.badge}</Link>
        </Button>
      </div>
    );
  }

  return <StoryArticle story={story} badge={t.stories.badge} />;
}
