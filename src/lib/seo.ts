import type { Metadata } from 'next';

export const SITE_URL = 'https://www.bcaccounting.pt';
export const SITE_NAME = 'BCA';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
}: PageMetadataInput): Metadata {
  const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'pt_PT',
      type,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}
