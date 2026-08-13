import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PageHero, SectionBlock } from '../components/PageChrome';
import { useI18n } from '../i18n/I18nProvider';
import { CONTACT_EMAIL, MARKETPLACE_URL, WHATSAPP_URL } from '../lib/site';

const PARTNERSHIP_INTENTS = new Set([
  'kerjasama',
  'cadangan-program',
  'keperluan-organisasi',
  'penyelidikan',
]);

export default function Contact() {
  const { t } = useI18n();
  const p = t.contact;
  const [searchParams, setSearchParams] = useSearchParams();
  const intentIds = p.types.map((item) => item.id);
  const rawIntent = searchParams.get('tujuan') ?? 'pertanyaan-umum';
  const intent = intentIds.includes(rawIntent) ? rawIntent : 'pertanyaan-umum';
  const selected = p.types.find((item) => item.id === intent) ?? p.types[0];

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [org, setOrg] = React.useState('');
  const [ref, setRef] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [consent, setConsent] = React.useState(false);

  const setIntent = (id: string) => {
    const next = new URLSearchParams(searchParams);
    next.set('tujuan', id);
    setSearchParams(next, { replace: true });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!consent) return;
    const lines = [
      `Enquiry type: ${selected.title}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '-'}`,
      `Organisation: ${org || '-'}`,
      `Reference: ${ref || '-'}`,
      '',
      message,
    ];
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[${selected.title}] ${subject}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
    window.location.href = mailto;
  };

  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: p.badge }]}
        eyebrow={p.badge}
        title={p.title}
        subtitle={
          <>
            <p>{p.intro1}</p>
            <p>{p.intro2}</p>
          </>
        }
        primary={{ href: '#borang-hubungan', label: p.heroCta }}
        secondary={{ href: MARKETPLACE_URL, label: p.heroSecondary, external: true }}
      />

      <SectionBlock muted eyebrow={p.typesEyebrow} title={p.typesTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.types.map((item) => (
            <Link
              key={item.id}
              to={`/contact?tujuan=${item.id}#borang-hubungan`}
              className={`rounded-3xl border p-6 transition-colors hover:border-primary/40 ${
                item.id === intent ? 'border-primary/50 bg-primary/5' : 'bg-background'
              }`}
            >
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
              <p className="mt-3 text-sm font-semibold text-primary">{item.cta}</p>
            </Link>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="borang-hubungan" eyebrow={p.formEyebrow} title={p.formTitle}>
        {PARTNERSHIP_INTENTS.has(intent) && (
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="font-bold">{p.partnershipIntentTitle}</h3>
            <p className="mt-2 text-muted-foreground">{p.partnershipIntentBody}</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="enquiry-type">{p.formType}</Label>
            <select
              id="enquiry-type"
              className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
              value={intent}
              onChange={(event) => setIntent(event.target.value)}
            >
              {p.types.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{p.formName}</Label>
              <Input id="name" className="h-11" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{p.formEmail}</Label>
              <Input
                id="email"
                type="email"
                className="h-11"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">{p.formPhone}</Label>
              <Input id="phone" className="h-11" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org">{p.formOrg}</Label>
              <Input id="org" className="h-11" value={org} onChange={(e) => setOrg(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ref">{p.formRef}</Label>
            <Input id="ref" className="h-11" value={ref} onChange={(e) => setRef(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">{p.formSubject}</Label>
            <Input id="subject" className="h-11" required value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{p.formMessage}</Label>
            <Textarea id="message" className="min-h-40" required value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <p className="text-sm text-muted-foreground">{p.formAttachNote}</p>
          <label className="flex items-start gap-3 text-sm leading-relaxed">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <span>{p.formConsent}</span>
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" className="rounded-full" disabled={!consent}>
              {p.formSubmit}
            </Button>
            <Link to="/privacy" className="font-semibold text-primary">
              {p.formPrivacy}
            </Link>
          </div>
        </form>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border p-6 hover:border-primary/40"
          >
            <MessageCircle className="mb-3 h-6 w-6 text-primary" />
            <h3 className="font-bold">{p.whatsappTitle}</h3>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-3xl border p-6 hover:border-primary/40">
            <h3 className="font-bold">{p.emailTitle}</h3>
            <p className="mt-2 text-muted-foreground">{CONTACT_EMAIL}</p>
          </a>
        </div>
      </SectionBlock>

      <SectionBlock muted eyebrow={p.helpEyebrow} title={p.helpTitle}>
        <div className="space-y-4">
          {p.help.map((item) => (
            <div key={item.title} className="rounded-3xl border bg-background p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
              <Link to={item.href} className="mt-3 inline-block font-semibold text-primary">
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </SectionBlock>

      <section className="bg-foreground py-24 text-background">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="text-3xl font-bold">{p.ctaTitle}</h2>
          <p className="text-white/70">{p.ctaBody}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" asChild>
              <a href="#borang-hubungan">{p.ctaPrimary}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link to="/faq">{p.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
