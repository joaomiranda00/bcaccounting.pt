import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Home from '@/views/Home';

export const metadata: Metadata = createPageMetadata({
  title: 'Contabilidade em Vila do Conde para Empresas | BCA',
  description:
    'Serviços de contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento em Vila do Conde. Conheça a BCA e fale connosco.',
  path: '/',
  keywords: [
    'contabilidade Vila do Conde',
    'empresa de contabilidade Vila do Conde',
    'consultoria fiscal Vila do Conde',
    'contabilidade para empresas',
  ],
});

export default Home;
