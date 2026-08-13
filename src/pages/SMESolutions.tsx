import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Globe, Laptop, Rocket, Zap, MessageSquare, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const SERVICE_ICONS = [Globe, Laptop, Rocket, Zap, Briefcase, MessageSquare] as const;

export default function SMESolutions() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="pt-20">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-8 max-w-4xl">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-full px-4 py-1">{t.sme.badge}</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{t.sme.titleBefore} <span className="text-primary italic">{t.sme.titleHighlight}</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.sme.intro}
          </p>
          <div className="pt-6">
            <Button
              size="lg"
              className="rounded-full h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20"
              onClick={() => navigate('/contact')}
            >
              {t.sme.bookConsultation}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">{t.sme.problemsTitleBefore} <span className="text-primary">{t.sme.problemsTitleHighlight}</span></h2>
                <p className="text-lg text-muted-foreground">{t.sme.problemsIntro}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.sme.problems.map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl bg-muted/50 border border-muted space-y-3 flex flex-col items-center text-center">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt={t.sme.briefingAlt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground pt-32 pb-32 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4 text-background">
            <h2 className="text-4xl font-bold tracking-tight">{t.sme.stackTitle}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.sme.stackIntro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-background">
            {t.sme.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx];
              return (
              <motion.div key={service.title} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="group">
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-10 space-y-6 flex flex-col items-center text-center">
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">{t.sme.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.sme.reasons.map((reason) => (
                <div key={reason.title} className="p-8 rounded-3xl bg-secondary/50 space-y-4 flex flex-col items-center text-center">
                    <div className="h-10 w-10 shrink-0 text-primary flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200" alt={t.sme.consultationAlt} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-10">
                    <h2 className="text-4xl font-bold tracking-tight">{t.sme.processTitleBefore} <span className="text-primary italic">{t.sme.processTitleHighlight}</span></h2>
                    <div className="space-y-8">
                        {t.sme.process.map((item) => (
                            <div key={item.step} className="flex gap-6 group">
                                <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors">{item.step}</span>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 border-t">
        <div className="container mx-auto px-4 text-center space-y-10">
            <h2 className="text-5xl font-bold tracking-tight">{t.sme.ctaTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.sme.ctaBody}</p>
            <div className="pt-4">
                <Button
                  size="lg"
                  className="rounded-full h-16 px-12 text-xl font-bold bg-foreground text-background hover:bg-foreground/90 transition-all shadow-2xl"
                  onClick={() => navigate('/contact')}
                >
                  {t.sme.ctaButton}
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
