import type { BlogPost } from '@/content/blog';

import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const BUSINESS_LEGAL_NAME = 'BCA - Business Consulting and Accounting, Lda.';
export const BUSINESS_TELEPHONE = '252 642 059';
export const BUSINESS_EMAIL = 'bca@bcaccounting.pt';
export const BUSINESS_DESCRIPTION =
  'Serviços de contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento em Vila do Conde.';

export function getAccountingServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': `${SITE_URL}/#accounting-service`,
    name: SITE_NAME,
    legalName: BUSINESS_LEGAL_NAME,
    url: SITE_URL,
    description: BUSINESS_DESCRIPTION,
    telephone: BUSINESS_TELEPHONE,
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Edifício Alameda, Sala 3, 1.º Andar, Avenida Dr. João Canavarro, n.º 305',
      postalCode: '4480-668',
      addressLocality: 'Vila do Conde',
      addressCountry: 'PT',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
}

type FaqSchemaItem = {
  question: string;
  answerText: string;
};

export function getFaqPageSchema(items: FaqSchemaItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answerText,
      },
    })),
  };
}

export function getBlogPostingSchema(post: BlogPost) {
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.category,
    inLanguage: 'pt-PT',
    image: [post.coverImage],
    keywords: post.keywords.join(', '),
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#accounting-service`,
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#accounting-service`,
      name: BUSINESS_LEGAL_NAME,
      url: SITE_URL,
    },
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
