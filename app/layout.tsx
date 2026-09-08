import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'EA Kuaför | Antalya Kepez', description: 'Antalya Kepez’de EA Kuaför. Saç tasarımı, renklendirme ve bakım için WhatsApp veya telefon üzerinden randevu alın.', robots: {index: false, follow: false}};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){return <html lang="tr"><body>
