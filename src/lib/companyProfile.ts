import type { Locale } from '../i18n/I18nProvider';

export const COMPANY_PROFILE_PATH_MS = '/profil-syarikat';
export const COMPANY_PROFILE_PATH_EN = '/en/company-profile';
export const COMPANY_PROFILE_PDF_MS = '/12Gig-Profil-Syarikat.pdf';
export const COMPANY_PROFILE_PDF_EN = '/12Gig-Company-Profile.pdf';

export function companyProfilePath(locale: Locale) {
  return locale === 'ms' ? COMPANY_PROFILE_PATH_MS : COMPANY_PROFILE_PATH_EN;
}

export function companyProfilePdfPath(locale: Locale) {
  return locale === 'ms' ? COMPANY_PROFILE_PDF_MS : COMPANY_PROFILE_PDF_EN;
}

export function isCompanyProfilePath(pathname: string) {
  return (
    pathname === COMPANY_PROFILE_PATH_MS ||
    pathname === COMPANY_PROFILE_PATH_EN ||
    pathname === '/company-profile'
  );
}

export function localeFromCompanyProfilePath(pathname: string): Locale | null {
  if (pathname === COMPANY_PROFILE_PATH_MS) return 'ms';
  if (pathname === COMPANY_PROFILE_PATH_EN || pathname === '/company-profile') return 'en';
  return null;
}
