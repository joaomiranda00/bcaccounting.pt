import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Incentivos from '@/views/Incentivos';

export const metadata: Metadata = createPageMetadata({
  title: 'Incentivos ao Investimento e Fundos para Empresas | BCA',
  description:
    'Apoio na identificação de incentivos, preparação de candidaturas e acompanhamento de fundos para empresas, incluindo Portugal 2030 e PRR.',
  path: '/servicos/incentivos-ao-investimento',
  keywords: [
    'incentivos ao investimento',
    'fundos europeus para empresas',
    'Portugal 2030 empresas',
    'PRR empresas',
  ],
});

export default Incentivos;
