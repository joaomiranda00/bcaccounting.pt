import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import TermosCondicoes from '@/views/TermosCondicoes';

export const metadata: Metadata = createPageMetadata({
  title: 'Termos e Condições | BCA',
  description:
    'Leia os termos e condições de utilização do website da BCA - Business Consulting and Accounting, Lda.',
  path: '/termos-e-condicoes',
});

export default TermosCondicoes;
