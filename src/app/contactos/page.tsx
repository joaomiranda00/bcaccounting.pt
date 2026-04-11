import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Contactos from '@/views/Contactos';

export const metadata: Metadata = createPageMetadata({
  title: 'Contactos BCA | Contabilidade em Vila do Conde',
  description:
    'Entre em contacto com a BCA em Vila do Conde. Consulte morada, telefone, email e envie o seu pedido sobre contabilidade ou consultoria.',
  path: '/contactos',
  keywords: [
    'contactos BCA',
    'contabilidade Vila do Conde',
    'empresa de contabilidade Vila do Conde',
    'contactar contabilista',
  ],
});

export default Contactos;
