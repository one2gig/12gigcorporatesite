import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Store } from 'lucide-react';
import { SITE_LOGO_SHOW_WORDMARK } from '@/lib/branding';
import { SiteLogo } from '@/components/SiteLogo';
import { useI18n } from '../i18n/I18nProvider';
import { CONTACT_EMAIL, MARKETPLACE_URL, SOCIAL, WHATSAPP_DISPLAY } from '../lib/site';

const SOCIAL_LINKS = [
  { label: 'Facebook', href: SOCIAL.facebook, icon: Facebook },
  { label: 'Instagram', href: SOCIAL.instagram, icon: Instagram },
  { label: 'Marketplace', href: MARKETPLACE_URL, icon: Store },
] as const;

const linkClass = 'text-sm text-muted-foreground hover:text-primary';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2">
              <SiteLogo />
              {SITE_LOGO_SHOW_WORDMARK && (
                <span className="text-2xl font-bold tracking-tight">
                  12<span className="text-primary">gig</span>
                </span>
              )}
            </NavLink>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <p className="text-sm font-medium">{t.footer.origin}</p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background transition-all hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-semibold">{t.footer.corporate}</h4>
            <ul className="space-y-4">
              <li><NavLink to="/about" className={linkClass}>{t.nav.about}</NavLink></li>
              <li><NavLink to="/what-we-do" className={linkClass}>{t.nav.whatWeDo}</NavLink></li>
              <li><NavLink to="/impact" className={linkClass}>{t.nav.impact}</NavLink></li>
              <li><NavLink to="/partnerships" className={linkClass}>{t.nav.partnerships}</NavLink></li>
              <li><NavLink to="/news" className={linkClass}>{t.nav.news}</NavLink></li>
              <li><NavLink to="/contact" className={linkClass}>{t.nav.contact}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-semibold">{t.footer.platform}</h4>
            <ul className="space-y-4">
              <li><NavLink to="/for-giggers" className={linkClass}>{t.nav.forGiggers}</NavLink></li>
              <li><NavLink to="/for-users" className={linkClass}>{t.nav.forUsers}</NavLink></li>
              <li><NavLink to="/for-organisasi" className={linkClass}>{t.nav.forOrganisasi}</NavLink></li>
              <li><NavLink to="/how-it-works" className={linkClass}>{t.nav.howItWorks}</NavLink></li>
              <li>
                <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t.nav.openPlatform}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-semibold">{t.footer.help}</h4>
            <ul className="space-y-4">
              <li><NavLink to="/faq" className={linkClass}>{t.nav.faq}</NavLink></li>
              <li><NavLink to="/privacy" className={linkClass}>{t.nav.privacy}</NavLink></li>
              <li><NavLink to="/terms" className={linkClass}>{t.nav.terms}</NavLink></li>
              <li><NavLink to="/cookie-settings" className={linkClass}>{t.nav.cookies}</NavLink></li>
              <li>
                <NavLink to="/terms#pembatalan-bayaran-balik" className={linkClass}>
                  {t.nav.cancellation}
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms#aduan-pertikaian" className={linkClass}>
                  {t.nav.complaints}
                </NavLink>
              </li>
            </ul>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{t.footer.companyName}</p>
              <p>{t.footer.location}</p>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>WhatsApp: {WHATSAPP_DISPLAY}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 12Gig Sdn. Bhd. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
