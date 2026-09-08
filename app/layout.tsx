import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'EA Kuaför | Antalya Kepez',
  description:
    'Antalya Kepez’de EA Kuaför. Saç, makyaj ve kişisel bakım için WhatsApp veya telefon üzerinden randevu alın.',
  robots: { index: true, follow: true },
  icons: { icon: '/ea-logo.jpeg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
