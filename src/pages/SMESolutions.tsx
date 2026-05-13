import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ContactForm } from '@/components/ContactForm';
import { CheckCircle2, Globe, Laptop, Rocket, Zap, MessageSquare, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SMESolutions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-8 max-w-4xl">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-full px-4 py-1">SME Digital Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Digital Solutions Built for Local <span className="text-primary italic">SMEs</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We help Malaysia's local businesses transform from manual workflows to efficient, automated, and human-centered digital systems.
          </p>
          <div className="pt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                  Book a Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-[500px] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8">
                <DialogHeader className="space-y-2 pb-2">
                  <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight">Transform Your Business</DialogTitle>
                  <DialogDescription className="text-base sm:text-lg">
                    Schedule a free 30-minute digital strategy session with our SME experts.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">The Cost of Doing Business <span className="text-primary">Manually</span></h2>
                <p className="text-lg text-muted-foreground">Local SMEs struggle with common digital bottlenecks that prevent growth.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'WhatsApp Chaos', desc: 'Losing orders and details in messy chat threads.' },
                  { title: 'Manual Ops', desc: 'Wasting hours on repetitive, error-prone paperwork.' },
                  { title: 'Weak Presence', desc: 'No professional face for potentially global customers.' },
                  { title: 'Zero Data', desc: 'Flying blind without actual business analytics.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-muted/50 border border-muted space-y-3 flex flex-col items-center text-center">
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
                  alt="Team briefing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-foreground pt-32 pb-32 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4 text-background">
            <h2 className="text-4xl font-bold tracking-tight">Our Solution Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't just build websites; we build engines for business growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-background">
            {[
              { icon: Globe, title: 'Corporate Websites', desc: 'Fast, SEO-optimized presence to establish your brand credibility.' },
              { icon: Laptop, title: 'Custom Web Apps', desc: 'Specialized tools unique to your business workflow.' },
              { icon: Rocket, title: 'Booking Systems', desc: 'Automated appointments and scheduling for service providers.' },
              { icon: Zap, title: 'Ordering Portals', desc: 'Direct-to-customer ordering systems to cut third-party commissions.' },
              { icon: Briefcase, title: 'Internal Systems', desc: 'Inventory management and employee portals for smooth operations.' },
              { icon: MessageSquare, title: 'AI & Automation', desc: 'Intelligent chatbots and workflow triggers to save time.' },
            ].map((service, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="group">
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-10 space-y-6 flex flex-col items-center text-center">
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why Local SMEs Choose 12gig</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: 'Local Context', desc: 'We understand the Malaysia business culture and market unique needs.' },
                { title: 'Affordable Pricing', desc: 'Technology shouldn\'t bankrupt you. We offer flexible SME pricing.' },
                { title: 'Agile & Fast', desc: 'We deliver results in weeks, not months, using modern tech stacks.' },
                { title: 'Human Centered', desc: 'We build for your staff and customers, ensuring high adoption.' }
            ].map((reason, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-secondary/50 space-y-4 flex flex-col items-center text-center">
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

      {/* Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200" alt="Consultation" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-10">
                    <h2 className="text-4xl font-bold tracking-tight">Our Development <span className="text-primary italic">Process</span></h2>
                    <div className="space-y-8">
                        {[
                            { step: '01', title: 'Consultation', desc: 'We sit down to understand your business pain points and goals.' },
                            { step: '02', title: 'Strategy & UX', desc: 'We map out the user journey and system architecture.' },
                            { step: '03', title: 'Agile Development', desc: 'Rapid building with transparent feedback loops.' },
                            { step: '04', title: 'Launch & Support', desc: 'We guide your team through onboarding and post-launch scale.' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6 group">
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

      {/* CTA */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-4 text-center space-y-10">
            <h2 className="text-5xl font-bold tracking-tight">Ready to Digitize Your Business?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join the digital revolution in Malaysia. Let's build something great together.</p>
            <div className="pt-4">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg" className="rounded-full h-16 px-12 text-xl font-bold bg-foreground text-background hover:bg-foreground/90 transition-all shadow-2xl">
                            Get Started Now
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-[500px] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8">
                        <DialogHeader className="space-y-2 pb-2">
                            <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight">Transform Your Business</DialogTitle>
                            <DialogDescription className="text-base sm:text-lg">
                                Schedule a free 30-minute digital strategy session with our SME experts.
                            </DialogDescription>
                        </DialogHeader>
                        <ContactForm />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
      </section>
    </div>
  );
}
