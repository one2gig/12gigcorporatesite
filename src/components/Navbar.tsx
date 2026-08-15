import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  Menu,
  Home,
  Info,
  HelpCircle,
  Globe,
  Mail,
  Handshake,
  Newspaper,
  Shield,
  FileText,
  UserRound,
  Users,
  Building2,
  ChevronDown,
  Instagram,
  Facebook,
  Store,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_LOGO_SHOW_WORDMARK } from '@/lib/branding';
import { SiteLogo } from '@/components/SiteLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AnnouncementBar } from './AnnouncementBar';
import { useI18n } from '../i18n/I18nProvider';
import { MARKETPLACE_URL, SOCIAL } from '../lib/site';

const socialLinks = [
  { label: 'Instagram', href: SOCIAL.instagram, icon: Instagram },
  { label: 'Facebook', href: SOCIAL.facebook, icon: Facebook },
  { label: 'Marketplace', href: MARKETPLACE_URL, icon: Store },
] as const;

const whatWeDoLinks = [
  { titleKey: 'whatWeDo' as const, href: '/what-we-do' },
  { titleKey: 'howItWorks' as const, href: '/how-it-works' },
  { titleKey: 'forGiggers' as const, href: '/for-giggers' },
  { titleKey: 'forUsers' as const, href: '/for-users' },
  { titleKey: 'forOrganisasi' as const, href: '/for-organisasi' },
];

const mobileLinks = [
  { titleKey: 'home' as const, href: '/', icon: Home },
  { titleKey: 'about' as const, href: '/about', icon: Info },
  { titleKey: 'whatWeDo' as const, href: '/what-we-do', icon: HelpCircle },
  { titleKey: 'howItWorks' as const, href: '/how-it-works', icon: HelpCircle },
  { titleKey: 'forGiggers' as const, href: '/for-giggers', icon: UserRound },
  { titleKey: 'forUsers' as const, href: '/for-users', icon: Users },
  { titleKey: 'forOrganisasi' as const, href: '/for-organisasi', icon: Building2 },
  { titleKey: 'impact' as const, href: '/impact', icon: Globe },
  { titleKey: 'partnerships' as const, href: '/partnerships', icon: Handshake },
  { titleKey: 'news' as const, href: '/news', icon: Newspaper },
  { titleKey: 'faq' as const, href: '/faq', icon: HelpCircle },
  { titleKey: 'contact' as const, href: '/contact', icon: Mail },
  { titleKey: 'privacy' as const, href: '/privacy', icon: Shield },
  { titleKey: 'terms' as const, href: '/terms', icon: FileText },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [whatOpen, setWhatOpen] = React.useState(false);
  const { t } = useI18n();
  const location = useLocation();
  const whatActive = whatWeDoLinks.some((link) => location.pathname === link.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <SiteLogo />
            {SITE_LOGO_SHOW_WORDMARK && (
              <span className="text-2xl font-bold tracking-tight text-foreground">
                12<span className="text-primary">gig</span>
              </span>
            )}
          </NavLink>

          <div className="flex items-center gap-3 sm:gap-4">
            <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )
                }
              >
                {t.nav.about}
              </NavLink>

              <div
                className="relative"
                onMouseEnter={() => setWhatOpen(true)}
                onMouseLeave={() => setWhatOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    'inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors hover:text-primary',
                    whatActive || whatOpen ? 'text-primary' : 'text-muted-foreground'
                  )}
                  aria-expanded={whatOpen}
                >
                  {t.nav.whatWeDo}
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', whatOpen && 'rotate-180')} />
                </button>
                {whatOpen && (
                  <div className="absolute top-full left-0 z-50 pt-2">
                    <div className="min-w-[240px] rounded-xl border bg-popover p-2 shadow-lg">
                      {whatWeDoLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={cn(
                            'block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted',
                            location.pathname === link.href
                              ? 'font-semibold text-primary'
                              : 'text-muted-foreground'
                          )}
                        >
                          {t.nav[link.titleKey]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/impact"
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )
                }
              >
                {t.nav.impact}
              </NavLink>
              <NavLink
                to="/partnerships"
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )
                }
              >
                {t.nav.partnerships}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )
                }
              >
                {t.nav.contact}
              </NavLink>
            </nav>

            <LanguageSwitcher />

            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger
                  render={
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">{t.nav.toggleMenu}</span>
                    </Button>
                  }
                />
                <SheetContent side="right" className="flex w-[300px] flex-col border-l-primary/10 p-0 sm:w-[400px]">
                  <SheetHeader className="border-b border-muted/50 p-6 text-left">
                    <SheetTitle className="flex items-center gap-3">
                      <SiteLogo size="lg" alt="" />
                      <div className="flex flex-col text-left">
                        {SITE_LOGO_SHOW_WORDMARK ? (
                          <>
                            <span className="text-xl font-bold tracking-tight">12gig</span>
                            <span className="text-xs font-normal text-muted-foreground">
                              {t.nav.ecosystemTagline}
                            </span>
                          </>
                        ) : (
                          <span className="text-xs font-normal text-muted-foreground">
                            {t.nav.ecosystemTagline}
                          </span>
                        )}
                      </div>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex-1 overflow-y-auto px-4 py-6">
                    <div className="space-y-1">
                      {mobileLinks.map((link) => (
                        <NavLink
                          key={link.href}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300',
                              isActive
                                ? 'bg-primary/10 font-semibold text-primary'
                                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                            )
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <link.icon
                                className={cn(
                                  'h-5 w-5 transition-transform duration-300 group-hover:scale-110',
                                  isActive ? 'text-primary' : 'text-muted-foreground'
                                )}
                              />
                              <span className="text-base">{t.nav[link.titleKey]}</span>
                            </>
                          )}
                        </NavLink>
                      ))}
                    </div>

                    <div className="mt-8 px-4 pb-8 text-center">
                      <p className="mb-4 text-xs text-muted-foreground">{t.nav.followJourney}</p>
                      <div className="flex justify-center gap-6">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        ))}
                      </div>
                      <div className="mt-6 flex justify-center">
                        <LanguageSwitcher />
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      <AnnouncementBar />
    </header>
  );
}
