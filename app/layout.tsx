import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://ea-kuafor1.vercel.app/';
const title = 'EA Kuaför | Antalya Kepez Kuaför';
const description = "Antalya Kepez'de saç kesimi, ombre, sombre, renklendirme, mikro kaynak ve saç bakımı için EA Kuaför. Bilgi ve randevu için bizimle iletişime geçin.";
const salonImage = { url: '/ea-salon.jpeg', width: 1320, height: 904, alt: 'EA Kuaför salonunun ışıklandırılmış dış cephesi' };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'EA Kuaför',
  keywords: ['EA Kuaför', 'Antalya kuaför', 'Kepez kuaför', 'saç kesimi Antalya'],
  creator: 'EA Kuaför',
  publisher: 'EA Kuaför',
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  icons: { icon: '/ea-logo.jpeg' },
  openGraph: { title, description, url: siteUrl, siteName: 'EA Kuaför', type: 'website', locale: 'tr_TR', images: [salonImage] },
  twitter: { card: 'summary_large_image', title, description, images: [salonImage] },
};

// Phone, address and hours mirror the existing contact section.
const business = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': `${siteUrl}#business`,
  name: 'EA Kuaför',
  url: siteUrl,
  image: new URL('/ea-salon.jpeg', siteUrl).href,
  logo: new URL('/ea-logo.jpeg', siteUrl).href,
  telephone: '+905438927719',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3725 Sokak No:2',
    addressLocality: 'Kepez',
    addressRegion: 'Antalya',
    postalCode: '07220',
    addressCountry: 'TR',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '22:00',
  }],
  sameAs: ['https://www.instagram.com/eakuaforr/'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, '\\u003c') }} />
        {children}
      </body>
    </html>
  );
}
