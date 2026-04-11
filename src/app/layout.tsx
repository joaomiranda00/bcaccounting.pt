import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../index.css';

export const metadata: Metadata = {
  title: 'BCA - Business Consulting and Accounting',
  description:
    'Serviços profissionais de contabilidade, consultoria fiscal e apoio à gestão em Vila do Conde.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
