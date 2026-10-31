import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { CATEGORIES, SITE } from '../data/site';
import type { Lang } from '../i18n/ui';
import { localizePath, useTranslations } from '../i18n/utils';
import { getPosts, postSlug } from './blog';

export async function blogFeed(context: APIContext, lang: Lang) {
  const t = useTranslations(lang);
  const posts = await getPosts(lang);
  return rss({
    title: `${SITE.name} · ${t('blog.title')}`,
    description: t('blog.description'),
    site: context.site!,
    customData: `<language>${lang === 'es' ? 'es-MX' : 'en-US'}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags.map((tag) => CATEGORIES[tag][lang]),
      link: localizePath(lang, `/blog/${postSlug(post)}/`),
    })),
  });
}
