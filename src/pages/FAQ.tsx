import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export default function FAQ() {
  const { t } = useI18n();

  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge className="rounded-full px-4 py-1">{t.faq.badge}</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{t.faq.titleBefore} <span className="text-primary italic">{t.faq.titleHighlight}</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.faq.intro}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.items.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-2xl px-6 bg-card shadow-sm hover:shadow-md transition-all duration-300 border-muted/50 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 p-12 bg-primary/5 rounded-[2.5rem] border border-primary/10 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t.faq.stillTitle}</h2>
              <p className="text-muted-foreground">
                {t.faq.stillBody}
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full h-14 px-8 gap-2" asChild>
                <a href="mailto:contact@12gig.com">
                  <Mail className="h-5 w-5" />
                  {t.faq.contactSupport}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
