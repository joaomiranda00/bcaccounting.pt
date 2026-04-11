import type { Metadata } from 'next';

import JsonLd from '@/components/seo/JsonLd';
import { faqItems } from '@/content/faq';
import { createPageMetadata } from '@/lib/seo';
import { getFaqPageSchema } from '@/lib/structured-data';
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

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={getFaqPageSchema(
          faqItems.map((item) => ({
            question: item.question,
            answerText: item.answerText,
          }))
        )}
      />
      <FAQ />
    </>
  );
}
