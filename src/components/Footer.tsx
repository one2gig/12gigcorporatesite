import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Store } from 'lucide-react';
import { SITE_LOGO_SHOW_WORDMARK } from '@/lib/branding';
import { SiteLogo } from '@/components/SiteLogo';
import { useI18n } from '../i18n/I18nProvider';

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61576939958159',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/12gig_sabah/',
    icon: Instagram,
  },
  {
    label: 'Marketplace',
    href: 'https://12gig.com/',
    icon: Store,
  },
] as const;

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2">
              <SiteLogo />
              {SITE_LOGO_SHOW_WORDMARK && (
                <span className="text-2xl font-bold tracking-tight">
                  12<span className="text-primary">gig</span>
                </span>
              )}
            </NavLink>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 flex items-center justify-center rounded-lg bg-background border hover:border-primary hover:text-primary transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t.footer.explore}</h4>
            <ul className="space-y-4">
              <li><NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary">{t.footer.aboutUs}</NavLink></li>
              <li><NavLink to="/sme-solutions" className="text-sm text-muted-foreground hover:text-primary">{t.nav.smeSolutions}</NavLink></li>
              <li><NavLink to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary">{t.nav.howItWorks}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t.footer.information}</h4>
            <ul className="space-y-4">
              <li><NavLink to="/impact" className="text-sm text-muted-foreground hover:text-primary">{t.footer.ourImpact}</NavLink></li>
              <li><NavLink to="/faq" className="text-sm text-muted-foreground hover:text-primary">{t.nav.faq}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t.footer.connect}</h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  {t.nav.contact}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 12gig Sdn Bhd. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
