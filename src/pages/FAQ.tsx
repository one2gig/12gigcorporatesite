import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';

export default function FAQ() {
  const { t } = useI18n();
  const p = t.faq;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={<p>{p.intro}</p>}
        primary={{ href: '#topik', label: p.heroCta }}
        secondary={{ href: '/contact', label: p.heroSecondary }}
      />

      <SectionBlock id="topik" muted eyebrow={p.topicsTitle} title={p.topicsTitle}>
        <div className="flex flex-wrap gap-2">
          {p.groups.map((group) => (
            <Button key={group.id} variant="outline" className="rounded-full" asChild>
              <a href={`#${group.id}`}>{group.title}</a>
            </Button>
          ))}
        </div>
      </SectionBlock>

      {p.groups.map((group, idx) => (
        <React.Fragment key={group.id}>
          <SectionBlock id={group.id} muted={idx % 2 === 1} title={group.title}>
            <Accordion className="space-y-3">
              {group.items.map((item, itemIdx) => (
                <AccordionItem
                  key={item.q}
                  value={`${group.id}-${itemIdx}`}
                  className="rounded-2xl border px-6"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SectionBlock>
        </React.Fragment>
      ))}

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="text-3xl font-bold">{p.stillTitle}</h2>
          <p className="text-white/70">{p.stillBody}</p>
          <Button size="lg" className="rounded-full" asChild>
            <Link to="/contact">{p.contactSupport}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
