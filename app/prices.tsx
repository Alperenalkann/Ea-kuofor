import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
type Row = [string, ...string[]];
const hair: Row[] = [
  ['Gelin saçı ve makyajı', ''],
  ['Fön', '300', '350', '400'],
  ['Mikro kaynak takma', '60-70', '70-90', '90-120'],
  ['Kişiye özel saç kesimi', '1000', '1000', '1000'],
  ['Kahkül kesimi', '500', '500', '500'],
  ['Çocuk saç kesimi', '1000', '1000', '1000'],
  ['Topuz', '1000', '1000', '1000-1700'],
  ['Örgü', '750', '1000', '1000'],
  ['Maşa', '1000', '1000', '1000-1500'],
  ['Brezilya fönü', '2500', '3000-4500', '3500-7000'],
  ['Saf keratin bakımı', '1500', '1500-2000', '2000-3000'],
  ['Dip boya', '1000', '1500', '2000'],
  ['Tüm saç boyama', '1500', '1500-2000', '2000-3000'],
  ['Renk değişimi', '3000', '3000-4500', '4500-8000'],
  ['Röfle', '4000', '5000', '5000-8000'],
  ['Balyaj', '4000', '5000', '5000-12000'],
  ['Ombre', '4000', '4000-6000', '6000-12000'],
  ['Sombre', '4000', '4000-6000', '6000-12000'],
  ['Mikro kaynak Gold serisi (adet)', '70-90', '70-90', '90-120'],
  ['Mikro kaynak Silver serisi (adet)', '60', '60', '60'],
  ['Dip açma', '2000', '2000-3500', '3500-5000'],
  ['Renk silme / temizleme', '3000', '4000-6000', '6000-8000'],
  ['Cila', '600', '600', '1000-2000'],
  ['Keratin saç botoksu', '1500', '1500-2000', '2000-3000'],
  ['Protein ve nem bakımı', '1500', '1500-2000', '2000-3000'],
  ['Yeni nesil perma', '4000', '4000-6000', '6000-9000'],
  ['Pigmentasyon', '750', '750', '750'],
  ['Facelight', '4000', '4000-6000', '6000-8000'],
  ['Erkek saç kesimi', '1000', '1000', '1000'],
];
const groups: { title: string; rows: Row[]; hair?: boolean }[] = [
  { title: 'Saç işlemleri', rows: hair, hair: true },
  {
    title: 'El, ayak ve kalıcı uygulamalar',
    rows: [
      ['Manikür', '600'],
      ['Keratinli manikür', '700'],
      ['Pedikür', '700'],
      ['Keratinli pedikür', '850'],
      ['Kalıcı oje', '1000-1500'],
      ['Kalıcı oje çıkarma', '600'],
      ['Erkek manikür ve pedikür', '1500'],
      ['Protez tırnak', '1000-1500'],
      ['Microblading', '3500-6000'],
      ['Jel tırnak', '1000-1500'],
      ['Eyeliner', '2500-4000'],
      ['Babyliner', '2500-4000'],
    ],
  },
  {
    title: 'Ağda işlemleri',
    rows: [
      ['Kaş alma', '350-500'],
      ['Komple ağda', '1000-1200'],
    ],
  },
  {
    title: 'Makyaj, kaş ve kirpik',
    rows: [
      ['Kaş kirpik laminasyonu', '1000-1250'],
      ['Profesyonel makyaj', '1500-2000'],
      ['Günlük kirpik', '600-1200'],
      ['İpek kirpik ekleme', '1500-3000'],
      ['Kirpik lifting', '750-1250'],
      ['Kaş lifting', '750-1250'],
    ],
  },
];
function price(value: string) {
  if (!value) return 'Bilgi alın';
  const amounts = value.split('-').map(Number);
  return (
    amounts
      .map((n) => (n <= 500 ? n : n - 100).toLocaleString('tr-TR'))
      .join(' – ') + ' TL'
  );
}
export default function Prices() {
  return (
    <section className="section prices" id="fiyatlar">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FİYAT LİSTESİ / 2026</p>
          <h2>
            Bakımınızı <em>planlayın.</em>
          </h2>
        </div>
        <p>Saç uzunluğunuza ve seçtiğiniz uygulamaya göre.</p>
      </div>
      <p className="note">
        Saç uzunluğuna göre fiyatları inceleyebilirsiniz. Fiyatı belirtilmeyen
        işlemler için WhatsApp üzerinden bilgi alın.
      </p>
      {groups.map((group) => (
        <div className="price-group" key={group.title}>
          <h3>{group.title}</h3>
          <Table>
            <TableCaption>
              {group.hair
                ? 'Saç fiyat tablosunu küçük ekranlarda yana kaydırabilirsiniz.'
                : group.title + ' fiyatları'}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead scope="col">İşlem</TableHead>
                {(group.hair
                  ? ['Kısa saç', 'Orta saç', 'Uzun saç']
                  : ['Fiyat']
                ).map((t) => (
                  <TableHead scope="col" key={t}>
                    {t}
                  </TableHead>
                ))}
                <TableHead scope="col">Randevu</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.rows.map(([name, ...values]) => (
                <TableRow key={name}>
                  <TableHead scope="row">{name}</TableHead>
                  {Array.from({ length: group.hair ? 3 : 1 }, (_, i) => (
                    <TableCell key={i}>{price(values[i] || '')}</TableCell>
                  ))}
                  <TableCell>
                    <a
                      className="text-link"
                      href={
                        'https://wa.me/905438927719?text=' +
                        encodeURIComponent(
                          'Merhaba, ' +
                            name +
                            ' için bilgi ve randevu almak istiyorum.',
                        )
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp ↗
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </section>
  );
}
