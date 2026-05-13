import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Impact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-full px-4 py-1">Community & Impact</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">Empowering Malaysia's <br/><span className="text-primary italic">Digital Economy</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            12gig is more than a platform. We are a community-driven ecosystem dedicated to youth empowerment and SME digitalization across Malaysia.
          </p>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        headline: 'For everyone',
                        label: 'Flexible ways to earn, learn, and build experience—without needing a polished CV first.',
                        icon: Users,
                    },
                    {
                        headline: 'For businesses',
                        label: 'Practical support for SMEs and local operators who want to show up confidently online.',
                        icon: Briefcase,
                    },
                    {
                        headline: 'For Malaysia',
                        label: 'A community-first approach that keeps opportunities and value circulating locally.',
                        icon: Globe,
                    },
                ].map((item, idx) => (
                    <div key={idx} className="text-center p-10 border rounded-3xl space-y-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">{item.headline}</p>
                        <p className="text-muted-foreground font-medium text-sm leading-relaxed">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight text-center mb-16">Stories of Transformation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="rounded-[3rem] overflow-hidden border-none shadow-xl">
                    <CardContent className="p-0 flex flex-col md:flex-row">
                        <div className="md:w-1/2 aspect-square">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Gigger" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-1/2 p-10 space-y-6 flex flex-col justify-center">
                            <Badge className="w-fit">Gigger Success</Badge>
                            <h3 className="text-2xl font-bold">"12gig gave me the flexibility to support my family while I study."</h3>
                            <p className="text-muted-foreground italic">"I started as a runner in Penampang, and now I handle digital logistics for three local cafes. 12gig isn't just work, it's a career path."</p>
                            <div>
                                <p className="font-bold">Aiman R.</p>
                                <p className="text-sm text-primary">Logistics Specialist</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-[3rem] overflow-hidden border-none shadow-xl">
                    <CardContent className="p-0 flex flex-col md:flex-row-reverse">
                        <div className="md:w-1/2 aspect-square">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="SME" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-1/2 p-10 space-y-6 flex flex-col justify-center">
                            <Badge className="w-fit">SME Growth</Badge>
                            <h3 className="text-2xl font-bold">"Digitalization used to be scary. 12gig made it human."</h3>
                            <p className="text-muted-foreground italic">"Integrating their booking system reduced our administrative errors by 80%. We can finally track our growth with real data."</p>
                            <div>
                                <p className="font-bold">Hafiz M.</p>
                                <p className="text-sm text-primary">Retail Business Owner</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Sustainable Development Goals */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Contributing to Malaysia's Progress</h2>
                <p className="text-muted-foreground">Our initiatives align with regional and global development goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: 'Youth Empowerment', desc: 'Providing the first digital income opportunities for thousands of university students and school leavers in Malaysia.' },
                    { title: 'SME Resilience', desc: 'Helping traditional businesses bridge the digital divide and survive in the modern internet-first economy.' },
                    { title: 'Community Wealth', desc: 'Keeping wealth within Malaysia by connecting local service seekers with local service providers.' },
                ].map((goal, i) => (
                    <motion.div
                        key={i}
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
