import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Users,
  BarChart4,
  MapPin,
  Truck,
  Heart,
  UserRound,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SiteLogo } from '@/components/SiteLogo';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  LayoutGroup,
} from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useI18n } from '../i18n/I18nProvider';

const GIGGER_AUTH_URL = 'https://12gig.com/auth';
const MARKETPLACE_URL = 'https://12gig.com/';

const CATEGORY_META = [
  {
    icon: Truck,
    url: 'https://12gig.com/directory/home',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    icon: Users,
    url: 'https://12gig.com/directory/food',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
  },
  {
    icon: Heart,
    url: 'https://12gig.com/directory/family',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
  },
  {
    icon: BarChart4,
    url: 'https://12gig.com/directory/digital',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    icon: MapPin,
    url: 'https://12gig.com/directory/agriculture',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
  },
] as const;

const AUDIENCE_META = [
  { icon: UserRound, href: '/for-giggers' },
  { icon: Users, href: '/for-users' },
  { icon: Building2, href: '/for-organisasi' },
] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function MarketplaceStrip() {
  const [active, setActive] = useState(0);
  const { t } = useI18n();
  const categories = CATEGORY_META.map((meta, idx) => ({
    ...meta,
    ...t.home.categories[idx],
  }));

  return (
    <LayoutGroup>
      <div className="flex flex-col gap-3 md:hidden" role="list">
        {categories.map((cat, idx) => {
          const isActive = active === idx;
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.title}
              layout
              role="listitem"
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              className={cn(
                'relative overflow-hidden rounded-2xl border outline-none',
                isActive
                  ? 'border-white/15 text-white'
                  : 'border-border/60 bg-muted/40'
              )}
            >
              {isActive && (
                <>
                  <img
                    src={cat.image}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-900/65" />
                </>
              )}

              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => setActive(isActive ? -1 : idx)}
                className="relative z-10 flex w-full items-start gap-4 p-5 text-left"
              >
                <span
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-primary'
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1 pt-1.5">
                  <span className="block text-xl font-bold tracking-tight">
                    {cat.title}
                  </span>
                </span>
                <motion.span
                  animate={{ rotate: isActive ? 90 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className={cn(
                    'mt-2.5 shrink-0',
                    isActive ? 'text-primary' : 'text-primary/70'
                  )}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 overflow-hidden"
                  >
                    <div className="space-y-4 px-5 pb-5 pl-[4.75rem]">
                      <p className="text-sm leading-relaxed text-white/80">
                        {cat.desc}
                      </p>
                      <a
                        href={cat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        {cat.explore}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div
        className="hidden md:flex md:h-[320px] md:gap-3"
        onMouseLeave={() => setActive(0)}
      >
        {categories.map((cat, idx) => {
          const isActive = active === idx;
          const Icon = cat.icon;

          return (
            <motion.a
              key={cat.title}
              href={cat.url}
              target="_blank"
              rel="noopener noreferrer"
              layout
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className={cn(
                'group relative flex h-full overflow-hidden rounded-2xl border border-border/60 bg-muted/40 outline-none',
                'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                isActive ? 'flex-[2.4] border-white/15 text-white' : 'flex-1'
              )}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={cat.image}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-neutral-900/60" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10 flex w-full flex-col justify-between p-7">
                <div className="flex items-start justify-between gap-4">
                  <motion.div
                    layout="position"
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-xl transition-colors',
                      'bg-secondary text-primary',
                      isActive && 'bg-primary text-primary-foreground'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <ArrowRight
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-all duration-300',
                      isActive
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-1 opacity-0'
                    )}
                  />
                </div>

                <div className="mt-auto space-y-2">
                  <motion.h3
                    layout="position"
                    className="text-2xl font-bold tracking-tight"
                  >
                    {cat.title}
                  </motion.h3>
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.25 }}
                        className="max-w-xs text-[15px] leading-relaxed text-white/80"
                      >
                        {cat.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

export default function Home() {
  const { t } = useI18n();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '22%']);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0.35]);

  return (
    <div className="flex flex-col">
      <section
        ref={heroRef}
        className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-foreground pt-24 pb-20 text-background"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src="/hero-malaysia.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/50 to-foreground/85" />
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground/70 via-transparent to-primary/15" />
        </motion.div>

        <div className="relative z-10 container mx-auto flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-7 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <SiteLogo
                size="lg"
                className="h-16 w-16 shadow-lg shadow-black/20 ring-1 ring-white/15 sm:h-20 sm:w-20"
              />
              <Badge
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 px-4 py-1 text-white"
              >
                {t.home.heroEyebrow}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl"
            >
              {t.home.heroTitleBefore}{' '}
              <span className="italic text-primary">{t.home.heroTitleHighlight}</span>{' '}
              {t.home.heroTitleAfter}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl space-y-3"
            >
              <p className="text-lg leading-relaxed text-white/75 sm:text-xl">
                {t.home.heroSubtitle}
              </p>
              <p className="text-sm font-medium text-white/60 sm:text-base">
                {t.home.heroOrigin}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5 pt-2"
            >
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  className="h-14 rounded-full px-8 text-base font-semibold shadow-xl shadow-primary/25 group sm:text-lg"
                  asChild
                >
                  <a
                    href={GIGGER_AUTH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center whitespace-nowrap"
                  >
                    {t.home.becomeGigger}
                    <ArrowRight className="ml-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white sm:text-lg"
                  asChild
                >
                  <a
                    href={MARKETPLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center whitespace-nowrap"
                  >
                    {t.home.findServices}
                  </a>
                </Button>
              </div>
              <Link
                to="/about"
                className="text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {t.home.learnAbout}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge className="rounded-full px-4 py-1">{t.home.whyEyebrow}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.home.whyTitleBefore}{' '}
              <span className="italic text-primary">{t.home.whyTitleHighlight}</span>{' '}
              {t.home.whyTitleAfter}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{t.home.whyP1}</p>
              <p>{t.home.whyP2}</p>
              <p>{t.home.whyP3}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/about#kisah-penubuhan">
                  {t.home.whyCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                to="/what-we-do"
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {t.home.whyLink}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14"
          >
            <Badge className="rounded-full px-4 py-1">{t.home.audiencesEyebrow}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.home.audiencesTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {AUDIENCE_META.map((meta, idx) => {
              const audience = t.home.audiences[idx];
              if (!audience) return null;
              const Icon = meta.icon;

              return (
                <motion.div
                  key={audience.title}
                  className="h-full"
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: idx * 0.08 }}
                >
                  <Link
                    to={meta.href}
                    className="group flex h-full w-full flex-col items-start gap-4 rounded-3xl border border-border/60 bg-background p-8 text-left shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">{audience.title}</h3>
                    <p className="flex-1 text-[15px] leading-relaxed text-muted-foreground">
                      {audience.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {audience.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14"
          >
            <Badge className="rounded-full px-4 py-1">{t.home.howEyebrow}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.home.howTitleBefore}{' '}
              <span className="italic text-primary">{t.home.howTitleHighlight}</span>{' '}
              {t.home.howTitleAfter}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.howSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: idx * 0.08 }}
                className="rounded-3xl border border-border/60 bg-muted/30 p-8"
              >
                <p className="text-5xl font-black text-primary/20">{idx + 1}</p>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/how-it-works#gigger">{t.home.howCtaGigger}</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link to="/how-it-works#pengguna">{t.home.howCtaUser}</Link>
            </Button>
            <Link
              to="/how-it-works#organisasi"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {t.home.howLinkOrg}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14"
          >
            <Badge className="rounded-full px-4 py-1">{t.home.categoriesEyebrow}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.categoriesTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.home.categoriesSubtitle}</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
            <MarketplaceStrip />
          </motion.div>

          <motion.div {...fadeInUp} className="mt-10 flex justify-center">
            <Button size="lg" className="rounded-full" asChild>
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                {t.home.viewAllServices}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mx-auto mb-12 max-w-2xl space-y-4 text-center sm:mb-14"
          >
            <Badge className="rounded-full px-4 py-1">{t.home.tractionEyebrow}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.home.tractionTitleBefore}{' '}
              <span className="italic text-primary">{t.home.tractionTitleHighlight}</span>{' '}
              {t.home.tractionTitleAfter}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.home.tractionBody}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="mx-auto mt-10 flex justify-center">
            <Button className="rounded-full" asChild>
              <Link to="/impact">
                {t.home.tractionCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge className="rounded-full px-4 py-1">{t.home.giggerFirstEyebrow}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.home.giggerFirstTitle}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{t.home.giggerFirstP1}</p>
              <p>{t.home.giggerFirstP2}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/what-we-do#gigger-first">{t.home.giggerFirstCta}</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">
                  {t.home.becomeGigger}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge className="rounded-full px-4 py-1">{t.home.partnersEyebrow}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.home.partnersTitle}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{t.home.partnersP1}</p>
              <p>{t.home.partnersP2}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/partnerships#bentuk-kerjasama">{t.home.partnersCta}</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link to="/contact?tujuan=kerjasama">{t.home.partnersCtaSecondary}</Link>
              </Button>
            </div>
            <Link
              to="/for-organisasi"
              className="inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {t.home.partnersLink}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground py-28 sm:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t.home.ctaTitle}
            </h2>
            <p className="text-lg text-white/70">{t.home.ctaBody}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                size="lg"
                className="h-14 rounded-full px-8 text-lg font-bold shadow-2xl"
                asChild
              >
                <a href={GIGGER_AUTH_URL} target="_blank" rel="noopener noreferrer">
                  {t.home.ctaGigger}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/25 bg-white/5 px-8 text-lg font-bold text-white hover:bg-white/15 hover:text-white"
                asChild
              >
                <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                  {t.home.ctaUser}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-primary/40 px-8 text-lg font-bold text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/contact?tujuan=kerjasama">{t.home.ctaOrg}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-[100px]" />
      </section>
    </div>
  );
}
