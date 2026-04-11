import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { getAccountingServiceSchema } from '@/lib/structured-data';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: 'BCA | Contabilidade e Consultoria em Vila do Conde',
  description:
    'Serviços de contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento em Vila do Conde.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'BCA | Contabilidade e Consultoria em Vila do Conde',
    description:
      'Serviços de contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento em Vila do Conde.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'BCA | Contabilidade e Consultoria em Vila do Conde',
    description:
      'Serviços de contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento em Vila do Conde.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        <JsonLd data={getAccountingServiceSchema()} />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
