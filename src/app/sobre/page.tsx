import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Sobre from '@/views/Sobre';

export const metadata: Metadata = createPageMetadata({
  title: 'Sobre a BCA | Contabilidade e Consultoria em Vila do Conde',
  description:
    'Conheça a BCA, empresa de contabilidade, fiscalidade e consultoria de gestão em Vila do Conde, focada no apoio próximo a empresas.',
  path: '/sobre',
  keywords: [
    'BCA',
    'contabilidade Vila do Conde',
    'consultoria de gestão Vila do Conde',
    'empresa de contabilidade',
  ],
});

export default Sobre;
