import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefixes a site-relative path with the locale (the default locale has no prefix). */
export function localizePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Removes the locale prefix from a pathname, e.g. "/es/blog/" -> "/blog/". */
export function stripLang(pathname: string) {
  const [, first, ...rest] = pathname.split('/');
  return first in languages && first !== defaultLang ? `/${rest.join('/')}` : pathname;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
