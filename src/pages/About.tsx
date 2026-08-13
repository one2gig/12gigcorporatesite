import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Wrench, BarChart4, Users, Heart, MapPin, Quote } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

const FIELD_ICONS = [Wrench, BarChart4, Users, Heart, MapPin] as const;

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-relaxed text-muted-foreground">{children}</p>
  );
}

export default function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <div className="pt-20">
      <section className="border-b py-24">
        <div className="container mx-auto max-w-4xl space-y-8 px-4 text-center">
          <Badge className="rounded-full px-4 py-1">{a.badge}</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {a.title}
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">{a.background}</p>
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="container mx-auto max-w-4xl space-y-10 px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{a.orgTitle}</h2>
          <Prose>{a.orgBody}</Prose>
          <p className="text-lg font-medium">{a.fieldsIntro}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {a.fields.map((field, idx) => {
              const Icon = FIELD_ICONS[idx] ?? Users;
              return (
                <div
                  key={field}
                  className="flex items-start gap-4 rounded-2xl border bg-background p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="pt-2 font-semibold leading-snug">{field}</p>
                </div>
              );
            })}
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 sm:p-10">
            <p className="text-lg leading-relaxed">{a.giggerFirst}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-4xl space-y-8 px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{a.originTitle}</h2>
          <Prose>{a.originP1}</Prose>
          <Prose>{a.originP2}</Prose>
          <Prose>{a.originP3}</Prose>
          <blockquote className="space-y-4 rounded-[2rem] bg-foreground p-8 text-background sm:p-10">
            <Quote className="h-10 w-10 text-primary/50" />
            <p className="text-2xl font-medium italic leading-snug sm:text-3xl">
              &ldquo;{a.quote}&rdquo;
            </p>
          </blockquote>
          <Prose>{a.quoteBody}</Prose>
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="container mx-auto max-w-4xl space-y-8 px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{a.tagalTitle}</h2>
          <Prose>{a.tagalP1}</Prose>
          <Prose>{a.tagalP2}</Prose>
          <Prose>{a.tagalP3}</Prose>
        </div>
      </section>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-4xl space-y-8 px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{a.directionTitle}</h2>
          <p className="text-lg leading-relaxed text-primary">{a.directionP1}</p>
          <p className="text-lg leading-relaxed text-primary">{a.directionP2}</p>
        </div>
      </section>
    </div>
  );
}
