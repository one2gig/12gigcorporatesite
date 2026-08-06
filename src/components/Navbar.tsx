import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { 
  Menu,
  Home, Info, HelpCircle, 
  Briefcase, Building2, Globe, Handshake, 
  Newspaper, Users, Mail, Instagram, Facebook, Store
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_LOGO_SHOW_WORDMARK } from '@/lib/branding';
import { SiteLogo } from '@/components/SiteLogo';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/12gig_sabah/',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61576939958159',
    icon: Facebook,
  },
  {
    label: 'Marketplace',
    href: 'https://12gig.com/',
    icon: Store,
  },
] as const;

const navLinks = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'About', href: '/about', icon: Info },
  { title: 'How it Works', href: '/how-it-works', icon: HelpCircle },
  { title: 'For Giggers', href: '/giggers', icon: Briefcase },
  { title: 'SME Solutions', href: '/sme-solutions', icon: Building2 },
  { title: 'Impact', href: '/impact', icon: Globe },
  { title: 'Partnerships', href: '/partnerships', icon: Handshake },
  { title: 'News', href: '/news', icon: Newspaper },
  { title: 'Careers', href: '/careers', icon: Users },
  { title: 'FAQ', href: '/faq', icon: HelpCircle },
  { title: 'Contact', href: '/contact', icon: Mail },
];

const desktopNavHrefs = [
  '/about',
  '/how-it-works',
  '/giggers',
  '/sme-solutions',
  '/impact',
  '/contact',
] as const;

const desktopNavLinks = desktopNavHrefs.map(
  (href) => navLinks.find((link) => link.href === href)!
);

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <NavLink to="/" className="flex items-center gap-2">
              <SiteLogo />
              {SITE_LOGO_SHOW_WORDMARK && (
                <span className="text-2xl font-bold tracking-tight text-foreground">
                  12<span className="text-primary">gig</span>
                </span>
              )}
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {desktopNavLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                }
              />
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-primary/10 p-0 flex flex-col">
                <SheetHeader className="text-left p-6 border-b border-muted/50">
                  <SheetTitle className="flex items-center gap-3">
                    <SiteLogo size="lg" alt="" />
                    <div className="flex flex-col text-left">
                      {SITE_LOGO_SHOW_WORDMARK ? (
                        <>
                          <span className="text-xl font-bold tracking-tight">12gig</span>
                          <span className="text-xs text-muted-foreground font-normal">Digital Gig Ecosystem</span>
                        </>
                      ) : (
                        <span className="text-xs text-muted-foreground font-normal">Digital Gig Ecosystem</span>
                      )}
                    </div>
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group",
                            isActive 
                              ? "bg-primary/10 text-primary font-semibold" 
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <link.icon className={cn(
                              "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                              isActive ? "text-primary" : "text-muted-foreground"
                            )} />
                            <span className="text-base">{link.title}</span>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>

                  <div className="mt-8 px-4 pb-8 text-center">
                    <p className="text-xs text-muted-foreground mb-4">Follow our journey</p>
                    <div className="flex justify-center gap-6">
                      {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
