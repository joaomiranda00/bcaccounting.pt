import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Contabilidade from '@/views/Contabilidade';

export const metadata: Metadata = createPageMetadata({
  title: 'Serviços de Contabilidade para Empresas | BCA Vila do Conde',
  description:
    'Serviço de contabilidade para empresas com acompanhamento técnico, cumprimento legal e informação de gestão. Contacte a BCA em Vila do Conde.',
  path: '/servicos/contabilidade',
  keywords: [
    'serviços de contabilidade',
    'contabilidade para empresas',
    'contabilidade Vila do Conde',
    'contabilista para empresas',
  ],
});

export default Contabilidade;
