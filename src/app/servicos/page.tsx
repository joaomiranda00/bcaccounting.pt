import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Servicos from '@/views/Servicos';

export const metadata: Metadata = createPageMetadata({
  title: 'Serviços de Contabilidade e Consultoria para Empresas | BCA',
  description:
    'Explore os serviços da BCA: contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento para empresas em Portugal.',
  path: '/servicos',
  keywords: [
    'serviços de contabilidade para empresas',
    'consultoria fiscal',
    'consultoria de gestão',
    'incentivos ao investimento',
  ],
});

export default Servicos;
