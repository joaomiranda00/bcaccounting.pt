import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import FAQ from '@/views/FAQ';

export const metadata: Metadata = createPageMetadata({
  title: 'FAQ | Perguntas Frequentes sobre Contabilidade e Consultoria',
  description:
    'Veja respostas às perguntas frequentes sobre contabilidade, fiscalidade, consultoria de gestão e incentivos ao investimento na BCA.',
  path: '/faq',
  keywords: [
    'FAQ contabilidade',
    'perguntas frequentes contabilidade',
    'dúvidas sobre contabilista',
    'dúvidas incentivos empresas',
  ],
});

export default FAQ;
