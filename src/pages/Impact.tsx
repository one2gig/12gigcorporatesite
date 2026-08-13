import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, Globe, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const AUDIENCE_ICONS = [Users, Briefcase, Globe] as const;

export default function Impact() {
  const { t } = useI18n();

  return (
    <div className="pt-20">
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-full px-4 py-1">{t.impact.badge}</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">{t.impact.titleBefore} <br/><span className="text-primary italic">{t.impact.titleHighlight}</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.impact.intro}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.impact.audiences.map((item, idx) => {
                    const Icon = AUDIENCE_ICONS[idx];
                    return (
                    <div key={item.headline} className="text-center p-10 border rounded-3xl space-y-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                            <Icon className="h-6 w-6" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">{item.headline}</p>
                        <p className="text-muted-foreground font-medium text-sm leading-relaxed">{item.label}</p>
                    </div>
                    );
                })}
            </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
              <Quote className="h-16 w-16 text-primary/40 rotate-180" />
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {t.impact.storiesTitleBefore} <br />
                <span className="text-primary italic">{t.impact.storiesTitleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground/80 max-w-md">
                {t.impact.storiesIntro}
              </p>
            </div>

            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] space-y-6"
              >
                <p className="text-xl italic leading-relaxed text-muted-foreground">
                  &quot;{t.impact.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">{t.impact.quoteName}</p>
                    <p className="text-sm text-primary">{t.impact.quoteRole}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">{t.impact.progressTitle}</h2>
                <p className="text-muted-foreground">{t.impact.progressIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {t.impact.goals.map((goal, i) => (
                    <motion.div
                        key={goal.title}
                        {...fadeInUp}
                        className={`space-y-6 py-4 text-center ${i > 0 ? 'border-l-4 border-primary pl-8' : ''}`}
                    >
                        <h3 className="text-2xl font-bold">{goal.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{goal.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
