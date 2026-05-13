import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, Globe, Quote } from 'lucide-react';
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

      {/* Stories — same community story as homepage */}
      <section className="py-24 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
              <Quote className="h-16 w-16 text-primary/40 rotate-180" />
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Stories of <br />
                <span className="text-primary italic">Transformation</span>
              </h2>
              <p className="text-lg text-muted-foreground/80 max-w-md">
                12gig isn&apos;t just a platform; it&apos;s a movement to empower Malaysia&apos;s digital talent and small businesses.
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
                  &quot;12gig made my home-based cake business a reality. Managing orders and arranging deliveries across KK is now effortless, allowing me to focus entirely on my passion for baking!&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Ell</p>
                    <p className="text-sm text-primary">12Gig Gigger, Baker</p>
                  </div>
                </div>
              </motion.div>
            </div>
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
