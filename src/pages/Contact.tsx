import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Let's <span className="text-primary italic">Talk</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you're a gigger, an SME looking to digitize, or a potential partner—we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
                    <p className="text-muted-foreground">Visit our office or reach out via our digital channels.</p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start gap-6">
                        <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Our Office</p>
                            <p className="text-muted-foreground">Jalan Tun Fuad Stephens, Kota Kinabalu, Malaysia, 88000</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">General Enquiries</p>
                            <p className="text-muted-foreground">hello@12gig.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Call Us</p>
                            <p className="text-muted-foreground">+60 88 123 4567</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-primary/10 border border-primary/20 space-y-6">
                    <div className="flex items-center gap-3">
                        <MessageCircle className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">Quick WhatsApp Chat</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Need a fast response for SME consultation? Message our team directly.</p>
                    <Button size="lg" className="w-full rounded-full bg-[#25D366] hover:bg-[#20bd5c] text-white">
                        Chat on WhatsApp
                    </Button>
                </div>
            </div>

            <div className="bg-muted/30 p-8 md:p-12 rounded-[3rem] border">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" className="h-12 rounded-xl bg-background" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-background" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What are you interested in?" className="h-12 rounded-xl bg-background" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea id="message" placeholder="How can we help you today?" className="min-h-[150px] rounded-xl bg-background" />
                    </div>

                    <Button size="lg" className="w-full h-14 rounded-full text-lg font-bold shadow-lg shadow-primary/20">
                        Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
