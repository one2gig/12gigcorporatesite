import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export function AnnouncementBar() {
  const { t } = useI18n();
  const article = t.news.articles[0];

  if (!article) return null;

  const href = `/news#${article.id}`;

  return (
    <div className="border-t border-primary-foreground/15 bg-primary text-primary-foreground">
      <Link
        to={href}
        className="announcement-track block overflow-hidden py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
        aria-label={`${t.nav.announcementLabel}: ${article.title}. ${t.nav.announcementCta}`}
      >
        <span className="announcement-slide inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium">
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
            {t.nav.announcementLabel}
          </span>
          <span>{article.title}</span>
          <span aria-hidden>·</span>
          <span className="underline decoration-white/50 underline-offset-4">{t.nav.announcementCta}</span>
        </span>
      </Link>
    </div>
  );
}
