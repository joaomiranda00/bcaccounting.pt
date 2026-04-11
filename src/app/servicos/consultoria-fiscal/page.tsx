import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import ConsultoriaFiscal from '@/views/ConsultoriaFiscal';

export const metadata: Metadata = createPageMetadata({
  title: 'Consultoria Fiscal para Empresas | BCA Vila do Conde',
  description:
    'Consultoria fiscal para empresas com planeamento fiscal, apoio declarativo e redução de risco. Fale com a BCA em Vila do Conde.',
  path: '/servicos/consultoria-fiscal',
  keywords: [
    'consultoria fiscal',
    'consultoria fiscal para empresas',
    'planeamento fiscal',
    'consultoria fiscal Vila do Conde',
  ],
});

export default ConsultoriaFiscal;
