import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '../i18n/I18nProvider';

const IMAGES = {
  portrait: '/stories/suharno-ali.png',
  team: '/stories/suharno-papar-team.png',
  session: '/stories/suharno-papar-session.png',
} as const;

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="story-serif my-12 border-l-2 border-primary pl-6 text-2xl leading-snug text-foreground sm:pl-8 sm:text-3xl">
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
  return (
    <figure className="my-12 overflow-hidden rounded-[1.75rem] border bg-muted/20">
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
      <figcaption className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export default function Story() {
  const { t } = useI18n();
  const s = t.stories;

  return (
    <article className="pt-20">
      <header className="relative isolate overflow-hidden bg-foreground text-background">
        <img
          src={IMAGES.team}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/75 to-foreground" />
        <div className="relative container mx-auto max-w-3xl space-y-7 px-4 py-20 text-center sm:py-28">
          <p className="text-sm text-white/60">
            <Link to="/" className="hover:text-white">
              {t.nav.home}
            </Link>
            <span aria-hidden> › </span>
            <span className="text-white">{s.badge}</span>
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{s.series}</p>
          <h1 className="story-serif text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">{s.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{s.dek}</p>
          <p className="text-sm text-white/55">
            {s.date} · {s.place}
          </p>
        </div>
      </header>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto grid max-w-5xl items-start gap-10 px-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <figure className="lg:sticky lg:top-36">
            <div className="overflow-hidden rounded-[1.75rem] border bg-muted/20 shadow-sm">
              <img
                src={IMAGES.portrait}
                alt={s.portraitAlt}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 space-y-1 text-sm">
              <p className="font-semibold">{s.portraitCaption}</p>
              <p className="text-muted-foreground">{s.portraitRole}</p>
            </figcaption>
          </figure>

          <div className="max-w-2xl">
            {s.opening.map((para) => (
              <p key={para} className="mb-5 text-lg leading-[1.85] text-foreground/90 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/20 py-16 sm:py-20">
        <div className="container mx-auto max-w-2xl px-4">
          {s.chapters.map((chapter) => (
            <section key={chapter.title} className="mb-16 last:mb-0">
              <h2 className="story-serif mb-6 text-3xl leading-snug sm:text-4xl">{chapter.title}</h2>
              {chapter.paras.map((para) => (
                <p key={para} className="mb-5 text-lg leading-[1.85] text-foreground/90 last:mb-0">
                  {para}
                </p>
              ))}
              {chapter.quote ? <PullQuote>{chapter.quote}</PullQuote> : null}
              {chapter.image === 'team' ? (
                <StoryImage src={IMAGES.team} alt={s.teamAlt} caption={s.teamCaption} />
              ) : null}
              {chapter.image === 'session' ? (
                <StoryImage src={IMAGES.session} alt={s.sessionAlt} caption={s.sessionCaption} />
              ) : null}
            </section>
          ))}
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto max-w-2xl space-y-6 px-4">
          {s.thanks.map((para) => (
            <p key={para} className="text-lg leading-[1.85] text-foreground/90">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-foreground py-20 text-background sm:py-24">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <p className="story-serif text-3xl leading-snug sm:text-4xl">{s.finalQuote}</p>
          <p className="text-white/65">{s.finalLine}</p>
          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/news#aim-papar-september-2026">
                {s.relatedNews}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link to="/news">{s.moreNews}</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
