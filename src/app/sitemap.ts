import type { MetadataRoute } from 'next';

import { getAllBlogPosts } from '@/content/blog';
import { SITE_URL } from '@/lib/seo';

const SITE_LAST_UPDATED_AT = '2026-04-11';

const staticRoutes: Array<{
  path: string;
  changeFrequency:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/sobre', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/servicos', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/servicos/contabilidade', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/servicos/consultoria-fiscal',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/servicos/consultoria-de-gestao',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/servicos/incentivos-ao-investimento',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  { path: '/contactos', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  {
    path: '/politica-de-privacidade',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  { path: '/termos-e-condicoes', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified: new Date(SITE_LAST_UPDATED_AT),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
