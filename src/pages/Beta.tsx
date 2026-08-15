import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { BETA_WHATSAPP_GROUP_URL } from '../lib/site';

function WhatsAppButton({ label, className }: { label: string; className?: string }) {
  return (
    <Button size="lg" className={className ?? 'rounded-full'} asChild>
      <a href={BETA_WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-5 w-5" />
        {label}
      </a>
    </Button>
  );
}

export default function Beta() {
  const { t } = useI18n();
  const p = t.beta;

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={<p>{p.intro}</p>}
        primary={{ href: BETA_WHATSAPP_GROUP_URL, label: p.heroCta, external: true }}
        secondary={{ href: '#jemputan', label: p.heroSecondary }}
      />

      <SectionBlock id="jemputan" muted eyebrow={p.inviteEyebrow} title={p.inviteTitle}>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          {p.inviteParas.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        <div className="space-y-4 rounded-3xl border bg-background p-6 sm:p-8">
          <p className="font-semibold">{p.recognitionIntro}</p>
          <ul className="space-y-3">
            {p.recognition.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground">{p.whatsappNote}</p>
        <WhatsAppButton label={p.joinCta} />
        <div className="space-y-3 text-muted-foreground">
          {p.thanks.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="faq" eyebrow={p.faqEyebrow} title={p.faqTitle}>
        <Accordion className="space-y-3">
          {p.faqs.map((item, idx) => (
            <AccordionItem key={item.q} value={`beta-faq-${idx}`} className="rounded-2xl border px-6">
              <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                <p>{item.a}</p>
                {'items' in item && item.items ? (
                  <ul className="mt-4 list-disc space-y-1 pl-5">
                    {item.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{p.closeEyebrow}</p>
          <h2 className="text-3xl font-bold">{p.closeTitle}</h2>
          <div className="space-y-4 text-white/70">
            {p.closeParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <div className="flex justify-center">
            <WhatsAppButton label={p.joinCta} />
          </div>
        </div>
      </section>
    </div>
  );
}
