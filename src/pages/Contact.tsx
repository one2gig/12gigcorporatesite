import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/60123977896';
const ENQUIRY_EMAIL = 'contact@12gig.com';

export default function Contact() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const data = new FormData(e.currentTarget);
    const body = {
      type: 'general' as const,
      name: data.get('name') as string,
      email: data.get('email') as string,
      subject: data.get('subject') as string,
      message: data.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? 'Something went wrong.');
      }

      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
      setStatus('error');
    }
  };

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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out via email or WhatsApp—we&apos;re based in Kota Kinabalu,
                  Malaysia.
                </p>
              </div>

              <div className="space-y-8">
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

            <div className="bg-muted/30 p-8 md:p-12 rounded-[3rem] border">
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="rounded-full px-8 mt-4"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="h-12 rounded-xl bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12 rounded-xl bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What are you interested in?"
                      required
                      className="h-12 rounded-xl bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you today?"
                      required
                      className="min-h-[150px] rounded-xl bg-background"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-xl px-4 py-3">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full h-14 rounded-full text-lg font-bold shadow-lg shadow-primary/20"
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
