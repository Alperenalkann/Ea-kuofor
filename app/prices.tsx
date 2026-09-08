import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
const services: [string, string][] = [
  ['Saç kesimi', '800 – 1.000 ₺'],
  ['Ombre', '3.000 / 5.000 / 8.000 ₺'],
  ['Sombre', '3.000 / 4.000 / 6.000 ₺'],
  ['Röfle', '4.000 / 6.000 / 8.000 ₺'],
  ['Bruslight', '3.000 / 5.000 / 6.000 ₺'],
  ['Mikro kaynak', '7.000 – 15.000 ₺'],
  ['Fön', '4.000 – 600 ₺'],
  ['Maşa', '500 – 900 ₺'],
  ['Kaş alımı', '300 ₺'],
  ['Bıyık', '100 ₺'],
  ['Tek renk boyama', '2.000 – 3.500 ₺'],
  ['Açma boyama', '3.000 – 6.000 ₺'],
  ['Dip açma boyama', '3.000 – 5.000 ₺'],
  ['Dip boyama', '1.000 ₺'],
  ['Keratin bakımı', '2.000 – 4.000 ₺'],
  ['Protein bakımı', '2.000 – 4.000 ₺'],
  ['Kolajen bakımı', '2.000 – 4.000 ₺'],
  ['Brezilya fönü', '2.000 – 4.000 ₺'],
  ['Ağda', '3.000 – 1.400 ₺'],
];
export default function Prices() {
  return (
    <section className="section prices" id="fiyatlar">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FİYAT LİSTESİ</p>
          <h2>
            Bakımınızı <em>planlayın.</em>
          </h2>
        </div>
        <p>Saç ve kişisel bakım hizmetlerimiz.</p>
      </div>
      <p className="note">
        İşleminize uygun fiyat ve randevu bilgisi için bize ulaşabilirsiniz.
      </p>
      <div className="price-group">
        <Table>
          <TableCaption>
            Fiyat tablosunu küçük ekranlarda yana kaydırabilirsiniz.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead scope="col">İşlem</TableHead>
              <TableHead scope="col">Fiyat</TableHead>
              <TableHead scope="col">Randevu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map(([name, price]) => (
              <TableRow key={name}>
                <TableHead scope="row">{name}</TableHead>
                <TableCell>{price}</TableCell>
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
    </section>
  );
}

