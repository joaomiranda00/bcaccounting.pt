import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Cookies from '@/views/Cookies';

export const metadata: Metadata = createPageMetadata({
  title: 'Política de Cookies | BCA',
  description:
    'Consulte a política de cookies da BCA e saiba como o website utiliza cookies e preferências de navegação.',
  path: '/cookies',
});

export default Cookies;
