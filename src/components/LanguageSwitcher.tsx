import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useI18n, type Locale } from '../i18n/I18nProvider';
import { companyProfilePath, isCompanyProfilePath } from '../lib/companyProfile';

const OPTIONS: { value: Locale; labelKey: 'en' | 'ms' }[] = [
  { value: 'en', labelKey: 'en' },
  { value: 'ms', labelKey: 'ms' },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={cn(
        'inline-flex items-center rounded-full border bg-muted/60 p-0.5 text-xs font-semibold',
        className
      )}
    >
      {OPTIONS.map(({ value, labelKey }) => {
        const active = locale === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => {
              setLocale(value);
              if (isCompanyProfilePath(location.pathname)) {
                navigate(companyProfilePath(value));
              }
            }}
            className={cn(
              'rounded-full px-2.5 py-1 transition-colors',
              active
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {t.language[labelKey]}
          </button>
        );
      })}
    </div>
  );
}
