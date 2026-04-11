import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Blog from '@/views/Blog';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog BCA | Contabilidade, Fiscalidade e Gestão',
  description:
    'Artigos e conteúdos da BCA sobre contabilidade, fiscalidade, gestão empresarial e incentivos ao investimento para empresas.',
  path: '/blog',
  keywords: [
    'blog de contabilidade',
    'artigos de contabilidade',
    'fiscalidade para empresas',
    'gestão empresarial',
  ],
});

export default Blog;
