import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import PoliticaPrivacidade from '@/views/PoliticaPrivacidade';

export const metadata: Metadata = createPageMetadata({
  title: 'Política de Privacidade | BCA',
  description:
    'Consulte a política de privacidade da BCA e saiba como tratamos os dados pessoais recolhidos através do website.',
  path: '/politica-de-privacidade',
});

export default PoliticaPrivacidade;
