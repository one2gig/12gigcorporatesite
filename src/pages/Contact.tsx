import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/60123977896';
const ENQUIRY_EMAIL = 'contact@12gig.com';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Let&apos;s <span className="text-primary italic">Talk</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you&apos;re a gigger, an SME looking to digitize, or a potential
            partner—we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-12">
            <div className="space-y-6 text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out via email or WhatsApp—we&apos;re based in Kota Kinabalu,
                Malaysia.
              </p>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-lg">General Enquiries</p>
                <a
                  href={`mailto:${ENQUIRY_EMAIL}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {ENQUIRY_EMAIL}
                </a>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary/10 border border-primary/20 space-y-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Quick WhatsApp Chat</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Need a fast response for SME consultation? Message our team
                directly.
              </p>
              <Button
                size="lg"
                className="w-full rounded-full bg-[#25D366] hover:bg-[#20bd5c] text-white"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
