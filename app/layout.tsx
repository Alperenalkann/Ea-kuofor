import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'EA Kuaför | Antalya Kepez',
  description:
    'Antalya Kepez’de EA Kuaför. Saç tasarımı, renklendirme ve bakım için WhatsApp veya telefon üzerinden randevu alın.',
  robots: { index: true, follow: true },
  icons: { icon: '/ea-logo.jpeg' },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
