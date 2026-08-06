import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const data = new FormData(e.currentTarget);
    const body = {
      type: 'sme' as const,
      name:    data.get('name')    as string,
      company: data.get('company') as string,
      email:   data.get('email')   as string,
      phone:   data.get('phone')   as string,
      needs:   data.get('needs')   as string,
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

  if (status === 'success') {
    return (
      <div className="py-6 sm:py-12 flex flex-col items-center text-center space-y-4">
        <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for your interest. Our SME solutions team will be in touch shortly.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="rounded-full px-8 mt-4">
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Ahmad Zulkifli" required className="rounded-xl h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" placeholder="SME Solutions Sdn Bhd" required className="rounded-xl h-12" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Work Email</Label>
        <Input id="email" name="email" type="email" placeholder="ahmad@company.com" required className="rounded-xl h-12" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+60 12-345 6789" required className="rounded-xl h-12" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="needs">Business Needs</Label>
        <Textarea id="needs" name="needs" placeholder="Tell us about the digital transformation you're looking for..." className="min-h-[80px] sm:min-h-[120px] rounded-xl" required />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-xl px-4 py-3">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button type="submit" disabled={status === 'loading'} className="w-full h-12 sm:h-14 rounded-full text-lg font-bold gap-2">
        <Send className="h-5 w-5" />
        {status === 'loading' ? 'Sending…' : 'Request Free Consultation'}
      </Button>
    </form>
  );
}
