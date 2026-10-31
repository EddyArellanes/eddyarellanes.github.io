import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

export const postLang = (post: Post) => post.id.split('/')[0] as Lang;
export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/');

/** Published posts for a language, newest first. Drafts are visible only in dev. */
export async function getPosts(lang: Lang) {
  const posts = await getCollection(
    'blog',
    (post) => postLang(post) === lang && (import.meta.env.DEV || !post.data.draft),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Translations share the same slug across language folders. */
export async function hasTranslation(post: Post, lang: Lang) {
  const posts = await getPosts(lang);
  return posts.some((p) => postSlug(p) === postSlug(post));
}
