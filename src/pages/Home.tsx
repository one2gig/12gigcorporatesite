import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  BarChart4,
  MapPin,
  Quote,
  Truck,
  Heart,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ContactForm } from '@/components/ContactForm';
import { SiteLogo } from '@/components/SiteLogo';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  LayoutGroup,
} from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  {
    title: 'Services',
    desc: 'Runner services, pickups, deliveries, and local errands.',
    icon: Truck,
    url: 'https://12gig.com/directory/home',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Technician working on electrical equipment',
  },
  {
    title: 'Events',
    desc: 'Professional crews for weddings, corporate fairs & events.',
    icon: Users,
    url: 'https://12gig.com/directory/food',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Event venue set for a celebration',
  },
  {
    title: 'Lifestyle',
    desc: 'Fitness, beauty, and specialized home lifestyle help.',
    icon: Heart,
    url: 'https://12gig.com/directory/family',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Beautician styling a client',
  },
  {
    title: 'Digital',
    desc: 'Graphic design, content creation, and digital admin.',
    icon: BarChart4,
    url: 'https://12gig.com/directory/digital',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Digital workspace with analytics',
  },
  {
    title: 'Rural',
    desc: 'Connecting rural communities to the digital market.',
    icon: MapPin,
    url: 'https://12gig.com/directory/agriculture',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Rural farmland landscape',
  },
] as const;

const SME_OFFERINGS = [
  'Custom Ordering Systems',
  'Corporate Web Presence',
  'Internal Workflow Automation',
  'Booking & Scheduling Portals',
] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function MarketplaceStrip() {
  const [active, setActive] = useState(0);

  return (
    <LayoutGroup>
      {/* Mobile: tap-to-expand accordion */}
      <div className="flex flex-col gap-3 md:hidden" role="list">
        {CATEGORIES.map((cat, idx) => {
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
                        Browse on 12gig
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

      {/* Desktop: hover-expand strip */}
      <div
        className="hidden md:flex md:h-[320px] md:gap-3"
        onMouseLeave={() => setActive(0)}
      >
        {CATEGORIES.map((cat, idx) => {
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
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const smeImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '22%']);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0.35]);

  const { scrollYProgress: smeProgress } = useScroll({
    target: smeImageRef,
    offset: ['start end', 'end start'],
  });
  const smeScale = useTransform(smeProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
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
              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                12gig
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Malaysia&apos;s digital{' '}
              <span className="italic text-primary">gig</span> ecosystem
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
            >
              Trusted local services, flexible income, and digital tools built
              for Malaysian communities and SMEs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:gap-4"
            >
              <Button
                size="lg"
                className="h-14 rounded-full px-8 text-base font-semibold shadow-xl shadow-primary/25 group sm:text-lg"
                asChild
              >
                <a
                  href="https://12gig.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center whitespace-nowrap"
                >
                  Explore Marketplace
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
                  href="https://12gig.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center whitespace-nowrap"
                >
                  Become a Gigger
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketplace categories */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Services you can trust
            </h2>
            <p className="text-lg text-muted-foreground">
              Tap a category to explore, then open it on 12gig.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
            <MarketplaceStrip />
          </motion.div>
        </div>
      </section>

      {/* SME Solutions */}
      <section className="overflow-hidden bg-muted/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              {...fadeInUp}
              className="flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left"
            >
              <div className="space-y-4">
                <p className="text-sm font-semibold tracking-wide text-primary">
                  SME Solutions
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Helping local businesses{' '}
                  <span className="text-primary">go digital</span>
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Custom web apps, ordering systems, and automation built for
                  Malaysia&apos;s SME landscape—without the WhatsApp chaos.
                </p>
              </div>

              <ul className="w-full max-w-md space-y-2">
                {SME_OFFERINGS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left font-medium transition-colors hover:bg-background"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="h-14 rounded-full px-10 text-lg font-semibold shadow-lg shadow-primary/20"
                  >
                    Explore SME Solutions
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] rounded-[1.5rem] p-6 sm:max-w-[500px] sm:rounded-[2.5rem] sm:p-8">
                  <DialogHeader className="space-y-2 pb-2">
                    <DialogTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                      Transform Your Business
                    </DialogTitle>
                    <DialogDescription className="text-base sm:text-lg">
                      Schedule a free 30-minute digital strategy session with our
                      SME experts.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </motion.div>

            <motion.div
              ref={smeImageRef}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
            >
              <div className="relative z-10 aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl lg:max-w-none lg:aspect-square">
                <motion.img
                  style={{ scale: smeScale }}
                  src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=2000"
                  alt="SME digital solutions"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 z-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community narrative */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              {...fadeInUp}
              className="relative overflow-hidden rounded-3xl lg:col-span-5"
            >
              <div className="aspect-[4/5] w-full">
                <img
                  src="/kota-kinabalu.jpg"
                  alt="Kota Kinabalu street with Wisma Sabah mural"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm font-medium text-white/90">
                Kota Kinabalu, Sabah — where 12gig calls home
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="flex flex-col justify-center space-y-6 lg:col-span-7"
            >
              <Quote className="h-10 w-10 text-primary/40" />
              <blockquote className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                &ldquo;12gig made my home-based cake business a reality. Managing
                orders and arranging deliveries across KK is now
                effortless.&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold">Ell</p>
                <p className="text-sm text-muted-foreground">
                  Gigger · Baker · Kota Kinabalu
                </p>
              </div>
              <p className="max-w-lg text-muted-foreground leading-relaxed">
                We connect giggers, households, and SMEs on one platform—so local
                talent can earn, and local businesses can grow with tools that
                fit how Malaysia works.
              </p>
              <Button
                variant="outline"
                className="w-fit rounded-full"
                onClick={() => navigate('/impact')}
              >
                See our impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-foreground py-28 sm:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Join Malaysia&apos;s growing digital ecosystem
            </h2>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="h-14 rounded-full px-10 text-lg font-bold shadow-2xl sm:h-16 sm:text-xl"
                asChild
              >
                <a
                  href="https://12gig.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  Become a Gigger
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-primary/40 px-10 text-lg font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:h-16 sm:text-xl"
                  >
                    Discuss SME Solutions
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] rounded-[1.5rem] p-6 sm:max-w-[500px] sm:rounded-[2.5rem] sm:p-8">
                  <DialogHeader className="space-y-2 pb-2">
                    <DialogTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                      Transform Your Business
                    </DialogTitle>
                    <DialogDescription className="text-base sm:text-lg">
                      Schedule a free 30-minute digital strategy session with our
                      SME experts.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-sm font-medium text-white/50">
              Marketplace access and SME partnerships—built for Malaysia.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-[100px]" />
      </section>
    </div>
  );
}
