import type { ComponentProps } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useI18n } from '../i18n/I18nProvider';
import { companyProfilePdfPath } from '../lib/companyProfile';

export function DownloadCompanyProfileButton({
  variant = 'outline',
  size = 'lg',
  className,
}: {
  variant?: ComponentProps<typeof Button>['variant'];
  size?: ComponentProps<typeof Button>['size'];
  className?: string;
}) {
  const { t, locale } = useI18n();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('rounded-full', className)}
      asChild
    >
      <a href={companyProfilePdfPath(locale)} download>
        <Download className="h-4 w-4" />
        {t.companyProfile.downloadPdf}
      </a>
    </Button>
  );
}
