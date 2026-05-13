import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, ShieldCheck, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge className="rounded-full px-4 py-1">Our Story</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Rooted in Malaysia, <br/><span className="text-primary italic">Driven by Innovation</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            12gig was born from a simple observation: Malaysia has incredible talent and thriving local businesses, but they lacked a cohesive digital glue to connect them effortlesly.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[2.5rem] bg-background border space-y-6 flex flex-col items-center text-center">
              <Target className="h-12 w-12 text-primary shrink-0" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower every Malaysian with digital tools that unlock income opportunities and help local businesses go digital without complexity.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-background border space-y-6 flex flex-col items-center text-center">
              <Eye className="h-12 w-12 text-primary shrink-0" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the primary engine of Malaysia's digital economy, creating a world-class gig ecosystem that remains true to our local values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: Users, title: 'Community First', desc: 'Every feature we build starts with the local community in mind.' },
                    { icon: ShieldCheck, title: 'Trust & Safety', desc: 'We maintain rigorous standards to ensure a safe environment for everyone.' },
                    { icon: Zap, title: 'Agile Innovation', desc: 'We move fast, listen to feedback, and iterate constantly.' },
                    { icon: Heart, title: 'Youth Empowerment', desc: 'Creating pathways for the next generation of digital professionals.' },
                ].map((value, idx) => (
                    <div key={idx} className="space-y-4 flex flex-col items-center text-center">
                        <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <value.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Timeline Placeholder */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight text-center mb-16">The Journey So Far</h2>
            <div className="max-w-3xl mx-auto space-y-12">
                {[
                    { year: '2024', event: '12gig founded in Kota Kinabalu' },
                    { year: '2025', event: 'Launched SME Solutions division' },
                    { year: '2025', event: 'Official partnership with regional government agencies' },
                ].map((item, i) => (
                    <div key={i} className="flex gap-8 items-start">
                        <span className="text-2xl font-black text-primary p-2 border-b-2 border-primary">{item.year}</span>
                        <p className="text-xl font-medium text-muted-foreground pt-2">{item.event}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
