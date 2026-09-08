# EA Kuaför — GitHub ve Vercel

Bu klasör tek başına çalışan Next.js projesidir. GitHub deposunun köküne BU KLASÖRÜN İÇERİĞİNİ gönderin. Üstteki Sites projesini göndermeyin.

## Bilgisayarda
Node.js 22 veya 24 LTS kullanın.

    npm ci
    npm run dev

Kontrol:

    npm run build
    npm run typecheck

## Vercel
1. Bu klasörün içeriğiyle GitHub'da bir depo oluşturun.
2. Vercel'de Add New > Project ile depoyu seçin.
3. Framework: Next.js. Root Directory: `.` (bu klasörün içeriğini köke gönderdiyseniz).
4. Build: `npm run build`. Output Directory: varsayılan. Node.js: 22.x veya 24.x.
5. Deploy. API anahtarı veya ortam değişkeni gerekmiyor.

Videolar ve resimler `public` içindedir, GitHub'a dahil edilmelidir. `node_modules`, `.next`, eski Instagram HTML dosyaları, `.openai` ve eski yayın arşivi gönderilmemelidir.

## İçerik düzenleme
- `app/page.tsx`: salon, adres, galeri ve WhatsApp bağlantıları.
- `app/prices.tsx`: referans fiyatlar ve hesaplama. 500 TL üzerindekilerden 100 TL düşer; 500 TL ve altı korunur. Fiyat aralıklarının uçları ayrı hesaplanır.
- `app/globals.css`: görünüm.
- `app/studio-video.tsx`: ana video davranışı.

## İşletmenin son kontrolü
Adres son gönderilen ekran görüntüsüne göre 3725 Sokak No:2, 07220 Kepez/Antalya olarak kullanılıyor. Harita adres aramasıyla oluşturulmuştur; işletmenin kesin Google Maps paylaşım bağlantısı gelirse onunla değiştirin.
Hizmetlerin tamamını, fiyatları ve her gün 09.00–22.00 saatini yayından önce işletme olarak kontrol edin.
Google Maps ve Google Fonts harici bağlantılardır; internet/servis engellerinde yazılı adres, yol tarifi bağlantısı ve sistem fontları kullanılabilir.

Mevcut Sites yayını bu paketin hazırlanmasıyla değiştirilmedi. GitHub'a push ve Vercel yayını kullanıcı tarafından yapılacak.
