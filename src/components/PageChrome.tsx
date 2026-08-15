import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PageBreadcrumb, type Crumb } from './PageBreadcrumb';

function isHashOrHttp(href: string) {
  return href.startsWith('#') || href.startsWith('http');
}

function HeroLink({
  href,
  external,
  children,
  className,
  ...props
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<'a'>, 'href'>) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    className,
  );

  if (external || isHashOrHttp(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  extra,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
  extra?: React.ReactNode;
}) {
  return (
    <section className="border-b py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl space-y-8 px-4 text-center">
        <PageBreadcrumb items={crumbs} />
        <Badge className="rounded-full px-4 py-1">{eyebrow}</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">{subtitle}</div>
        {(primary || secondary) && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {primary && (
              <Button size="lg" className="h-11 rounded-full px-6" asChild>
                <HeroLink href={primary.href} external={primary.external}>
                  {primary.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </HeroLink>
              </Button>
            )}
            {secondary && (
              <Button size="lg" variant="outline" className="h-11 rounded-full px-6" asChild>
                <HeroLink href={secondary.href} external={secondary.external}>
                  {secondary.label}
                </HeroLink>
              </Button>
            )}
          </div>
        )}
        {extra}
      </div>
    </section>
  );
}

export function SectionBlock({
  id,
  eyebrow,
  title,
  children,
  muted,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-36 py-20 sm:py-24 ${muted ? 'bg-muted/30' : 'bg-background'}`}>
      <div className="container mx-auto max-w-4xl space-y-8 px-4">
        {eyebrow && <Badge className="rounded-full px-4 py-1">{eyebrow}</Badge>}
        {title && <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
