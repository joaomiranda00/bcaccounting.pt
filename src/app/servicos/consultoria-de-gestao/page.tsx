import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import ConsultoriaGestao from '@/views/ConsultoriaGestao';

export const metadata: Metadata = createPageMetadata({
  title: 'Consultoria de Gestão para Empresas | BCA',
  description:
    'Apoio à gestão, planeamento, controlo e análise para empresas que querem crescer com mais informação e melhor decisão.',
  path: '/servicos/consultoria-de-gestao',
  keywords: [
    'consultoria de gestão',
    'consultoria de gestão para empresas',
    'apoio à gestão empresarial',
    'controlo de gestão',
  ],
});

export default ConsultoriaGestao;
