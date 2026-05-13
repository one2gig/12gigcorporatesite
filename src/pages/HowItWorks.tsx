import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Handshake, CheckCircle, Rocket, BarChart3, Users, Zap } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge className="rounded-full px-4 py-1">How it Works</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Our <span className="text-primary italic">Process</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you're looking for help, offering your skills, or scaling your business—12gig makes it simple and safe.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="customers" className="space-y-12">
            <div className="flex justify-center">
              <TabsList className="h-14 p-1 rounded-full bg-muted border">
                <TabsTrigger value="customers" className="rounded-full px-8 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">For Users</TabsTrigger>
                <TabsTrigger value="giggers" className="rounded-full px-8 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">For Giggers</TabsTrigger>
                <TabsTrigger value="businesses" className="rounded-full px-8 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">For Businesses</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="customers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Search, title: 'Find Services', desc: 'Browse through hundreds of local experts across multiple categories.' },
                  { icon: Handshake, title: 'Connect Locally', desc: 'Discuss your requirements directly with the service providers.' },
                  { icon: CheckCircle, title: 'Get it Done', desc: 'Confirm delivery and pay securely through our trusted platform.' },
                ].map((step, i) => (
                  <Card key={i} className="border-none shadow-none bg-muted/30 p-10 rounded-[2rem]">
                    <CardContent className="p-0 space-y-6">
                      <div className="text-5xl font-black text-primary/20">{i+1}</div>
                      <div className="h-16 w-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="giggers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Users, title: 'Build Profile', desc: 'Showcase your skills, portfolio, and local Malaysia expertise.' },
                  { icon: Zap, title: 'Find Opportunities', desc: 'Receive requests from customers looking for your exact skills.' },
                  { icon: BarChart3, title: 'Earn & Grow', desc: 'Build your reputation and earn reliable income on your own schedule.' },
                ].map((step, i) => (
                  <Card key={i} className="border-none shadow-none bg-muted/30 p-10 rounded-[2rem]">
                    <CardContent className="p-0 space-y-6">
                      <div className="text-5xl font-black text-primary/20">{i+1}</div>
                      <div className="h-16 w-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="businesses">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Handshake, title: 'Consultation', desc: 'We analyze your current manual workflows and digital needs.' },
                  { icon: Rocket, title: 'Agile Build', desc: 'We develop custom solutions—from ordering ports to booking systems.' },
                  { icon: CheckCircle, title: 'Launch & Scale', desc: 'Deploy your system and watch your operational efficiency skyrocket.' },
                ].map((step, i) => (
                  <Card key={i} className="border-none shadow-none bg-muted/30 p-10 rounded-[2rem]">
                    <CardContent className="p-0 space-y-6">
                      <div className="text-5xl font-black text-primary/20">{i+1}</div>
                      <div className="h-16 w-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
