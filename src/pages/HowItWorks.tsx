import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Handshake, CheckCircle, Rocket, BarChart3, Users, Zap } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

const USER_ICONS = [Search, Handshake, CheckCircle] as const;
const GIGGER_ICONS = [Users, Zap, BarChart3] as const;
const BUSINESS_ICONS = [Handshake, Rocket, CheckCircle] as const;

function StepCards({
  steps,
  icons,
}: {
  steps: readonly { title: string; desc: string }[];
  icons: readonly React.ComponentType<{ className?: string }>[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, i) => {
        const Icon = icons[i];
        return (
          <Card key={step.title} className="border-none shadow-none bg-muted/30 p-10 rounded-[2rem]">
            <CardContent className="p-0 space-y-6">
              <div className="text-5xl font-black text-primary/20">{i + 1}</div>
              <div className="h-16 w-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <div className="pt-20">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge className="rounded-full px-4 py-1">{t.howItWorks.badge}</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{t.howItWorks.titleBefore} <span className="text-primary italic">{t.howItWorks.titleHighlight}</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.howItWorks.intro}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="customers" className="space-y-12">
            <div className="flex justify-center overflow-x-auto">
              <TabsList className="h-auto min-h-14 flex-wrap p-1 rounded-full bg-muted border">
                <TabsTrigger value="customers" className="rounded-full px-5 sm:px-8 text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                  {t.howItWorks.tabUsers}
                </TabsTrigger>
                <TabsTrigger value="giggers" className="rounded-full px-5 sm:px-8 text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                  {t.howItWorks.tabGiggers}
                </TabsTrigger>
                <TabsTrigger value="businesses" className="rounded-full px-5 sm:px-8 text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                  {t.howItWorks.tabBusinesses}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="customers">
              <StepCards steps={t.howItWorks.users} icons={USER_ICONS} />
            </TabsContent>

            <TabsContent value="giggers">
              <StepCards steps={t.howItWorks.giggers} icons={GIGGER_ICONS} />
            </TabsContent>

            <TabsContent value="businesses">
              <StepCards steps={t.howItWorks.businesses} icons={BUSINESS_ICONS} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
