import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  BarChart4, 
  MapPin, 
  Zap,
  Quote,
  Truck,
  Heart
} from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { ContactForm } from '@/components/ContactForm';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col pt-20 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1542642832-1b15392867d3?auto=format&fit=crop&q=80&w=2000" 
            alt="Malaysia Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground via-foreground/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-16">
          <div className="max-w-3xl space-y-8 mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Built for Malaysia
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Malaysia's Digital <br />
              <span className="text-primary italic">Gig</span> Ecosystem
            </motion.h1>
 
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              Connecting communities with trusted local services, flexible income opportunities, and digital solutions for modern businesses.
            </motion.p>
 
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="rounded-full h-14 px-8 text-lg font-semibold group shadow-xl shadow-primary/20"
                asChild
              >
                <a href="https://12gig.com/" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 shrink-0" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full h-14 px-8 text-lg font-semibold border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://12gig.com/auth" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  Become a Gigger
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floaties or Stats Bar */}
        <div className="relative z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-md mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex items-center justify-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Malaysia Focused</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Community Powered</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Technology Driven</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Trusted Ecosystem</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Marketplace</h2>
            <p className="text-4xl font-bold tracking-tight">Services You Can Trust</p>
            <p className="text-muted-foreground text-lg">
                Find local giggers for your daily needs or business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {[
                { title: 'Services', desc: 'Runner services, pickups, deliveries, and local errands.', icon: Truck, url: 'https://12gig.com/directory/home' },
                { title: 'Events', desc: 'Professional crews for weddings, corporate fairs & events.', icon: Users, url: 'https://12gig.com/directory/food' },
                { title: 'Lifestyle', desc: 'Fitness, beauty, and specialized home lifestyle help.', icon: Heart, url: 'https://12gig.com/directory/family' },
                { title: 'Digital', desc: 'Graphic design, content creation, and digital admin.', icon: BarChart4, url: 'https://12gig.com/directory/digital' },
                { title: 'Rural', desc: 'Connecting rural communities to the digital market.', icon: MapPin, url: 'https://12gig.com/directory/agriculture' },
            ].map((cat, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeInUp} 
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "lg:col-span-2",
                    idx === 3 && "lg:col-start-2",
                    idx === 4 && "sm:max-lg:col-span-2 sm:max-lg:flex sm:max-lg:justify-center"
                  )}
                >
                    <Card className={cn(
                        "group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-muted/50 w-full",
                        idx === 4 && "sm:max-lg:max-w-[calc(50%-1rem)]"
                    )}>
                        <CardContent className="p-8 space-y-6 flex flex-col items-center text-center">
                            <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300 shadow-sm">
                                <cat.icon className="h-8 w-8" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold tracking-tight">{cat.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {cat.desc}
                                </p>
                            </div>
                            <Button 
                                variant="ghost" 
                                className="p-0 h-auto font-semibold text-primary hover:bg-transparent transition-all"
                                asChild
                            >
                                <a href={cat.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center translate-x-0">
                                    <span className="transition-transform duration-300">Learn More</span>
                                    <span className="max-w-0 opacity-0 group-hover:max-w-[24px] group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden flex items-center">
                                        <ArrowRight className="h-4 w-4 ml-1 shrink-0" />
                                    </span>
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SME Solutions Highlight */}
      <section className="py-24 bg-muted/50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div {...fadeInUp} className="space-y-8 flex flex-col items-center text-center">
                    <div className="space-y-4 flex flex-col items-center">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-full px-4 py-1">SME Solutions</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Helping Local Businesses <span className="text-primary underline decoration-primary/30 underline-offset-8">Go Digital</span></h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            Stop managing your business via WhatsApp chaos. 12gig builds custom web apps, ordering systems, and automation tools designed specifically for Malaysia's unique SME landscape.
                        </p>
                    </div>
                    
                    <ul className="space-y-4 w-full flex flex-col items-center">
                        {['Custom Ordering Systems', 'Corporate Web Presence', 'Internal Workflow Automation', 'Booking & Scheduling Portals'].map((item, i) => (
                            <li key={i} className="flex items-center justify-center gap-3 font-medium w-full text-center">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4 flex justify-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button 
                                    size="lg" 
                                    className="rounded-full px-10 h-14 text-lg font-semibold shadow-lg shadow-primary/20"
                                >
                                    Explore SME Solutions
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
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 w-full max-w-md lg:max-w-none">
                        <img 
                            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=2000" 
                            alt="SME Digital Solutions" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl z-0" />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Trust & Impact */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our community</h2>
                <p className="text-4xl font-bold tracking-tight">The Hearts Behind 12gig</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { stat: 'Rising', label: 'Giggers Community', icon: Users },
                    { stat: 'Growing', label: 'SME Network', icon: Briefcase },
                    { stat: 'Empowering', label: 'Local Economy', icon: Zap },
                ].map((item, idx) => (
                    <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 + 0.3 }} className="text-center p-8 rounded-3xl bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-background transition-all group">
                        <div className="h-16 w-16 bg-background rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <item.icon className="h-8 w-8" />
                        </div>
                        <p className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mb-2 whitespace-nowrap leading-tight">{item.stat}</p>
                        <p className="text-muted-foreground font-medium">{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 flex flex-col items-center text-center">
                    <Quote className="h-16 w-16 text-primary/40 rotate-180" />
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">Hear it from our <br/><span className="text-primary italic">local community</span></h2>
                    <p className="text-lg text-muted-foreground/80 max-w-md">12gig isn't just a platform; it's a movement to empower Malaysia's digital talent and small businesses.</p>
                </div>

                <div className="relative">
                    <motion.div 
                        animate={{ 
                            y: [0, -10, 0],
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] space-y-6"
                    >
                        <p className="text-xl italic leading-relaxed text-muted-foreground leading-relaxed">
                            "12gig made my home-based cake business a reality. Managing orders and arranging deliveries across KK is now effortless, allowing me to focus entirely on my passion for baking!"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-bold">Ell</p>
                                <p className="text-sm text-primary">12Gig Gigger, Cake Maker</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    Join Malaysia's Growing <br/>Digital Ecosystem
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                        size="lg" 
                        className="rounded-full h-16 px-10 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl"
                        asChild
                    >
                        <a href="https://12gig.com/auth" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
                            Become a Gigger
                        </a>
                    </Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="rounded-full h-16 px-10 text-xl font-bold text-primary border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                Discuss SME Solutions
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
                <p className="text-muted-foreground font-medium mt-8">Be among the first to join Malaysia's next-gen gig economy.</p>
            </motion.div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </section>
    </div>
  );
}
