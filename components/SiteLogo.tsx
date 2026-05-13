import { SITE_LOGO_SRC } from '@/lib/branding';
import { cn } from '@/lib/utils';

type SiteLogoProps = {
  /** Diameter of the circular logo crop. */
  size?: 'md' | 'lg';
  className?: string;
  alt?: string;
};

const sizeClass = {
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
} as const;

export function SiteLogo({ size = 'md', className, alt = '12gig' }: SiteLogoProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 overflow-hidden rounded-full bg-background',
        sizeClass[size],
        className
      )}
    >
      <img
        src={SITE_LOGO_SRC}
        alt={alt}
        className="h-full w-full object-contain object-center"
        decoding="async"
      />
    </span>
  );
}
