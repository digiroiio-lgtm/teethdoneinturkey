# Birleştirme (cannibalization) raporu: fiyat, finans, kaplama, implant

Tarih: 8 Kasım 2026. Durum: **ONAY BEKLİYOR**. Bu rapordaki hiçbir 301, noindex veya silme işlemi henüz uygulanmadı (`docs/seo-directive.md` §4, §7, §28).

## Veri ve yöntem

- **GSC:** `sc-domain:teethdoneinturkey.co.uk`. 10 Ağustos – 6 Kasım 2026 aralığında sayfa+sorgu kırılımı; kontrol için 24 Ekim – 6 Kasım sayfa kırılımı. Sayfa+sorgu kırılımı anonim sorguları göstermez, bu yüzden sayfa toplamlarından biraz düşüktür.
- **GA4:** property `552638430`, son 28 ve 90 gün.
- **Kod:** `src/app/**/page.tsx` taranarak bakıldı: `permanentRedirect`, `robots.index`, canonical, başlıklar ve iç linkler.
- **Çakışma tanımı:** Aynı sorgu için 2 veya daha fazla canlı URL'nin gösterim alması. Karar yalnızca kelime benzerliğine göre değil, sayfanın cevapladığı soruya (intent) ve içerik bölümlerine göre verildi (§7).

## Önce bir düzeltme

Önceki analizde "`/guides/turkey-teeth-cost` (65. sıra) `/prices/turkey-teeth-cost` ile yarışıyor" dedim. Bu yanlıştı. O URL zaten `/prices/turkey-teeth-cost` adresine 301 ile yönleniyor ve son 2 haftada hiç gösterim almadı. Eski gösterimler yönlendirme öncesinden kalma. `/guides/turkey-teeth-monthly-payments` sayfası da aynı durumda, zaten `/finance-options-uk` adresine yönleniyor.

## Mevcut yönlendirmeler: temiz

Bu kümelerde 16 eski URL zaten 301 ile yönleniyor. **Hiçbirine iç link verilmiyor**, `src/` ve `public/llms*.txt` kontrol edildi. Bu konuda yapılacak bir şey yok.

`/dental-implants-turkey-cost`, `/turkey-teeth-price`, `/turkey-teeth-cost`, `/veneers-turkey-cost`, `/prices`, `/prices/dental-implants-turkey-cost`, `/prices/teeth-done-in-turkey-cost`, `/blog/full-mouth-dental-implants-turkey-cost`, `/blog/dental-treatment-turkey-payment-plans`, `/guides/full-mouth-dental-implants-turkey-cost`, `/guides/full-set-of-teeth-turkey-cost`, `/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey`, `/guides/turkey-teeth-cost`, `/guides/turkey-teeth-monthly-payments`, `/guides/turkey-teeth-cost-in-pounds`, `/guides/antalya-teeth-prices`

## Karar tablosu (canlı sayfalar)

Kısaltmalar: **Gös.** = gösterim, **Tık** = tıklama, **Ort.** = ortalama Google sırası, **Son 2 hf** = son iki haftanın gösterimi.

### A. Finans kümesi: en çok çakışma burada

Hub (ana sayfa): `/finance-options-uk`. "Pay monthly turkey teeth" ve "turkey teeth on finance" gibi aynı sorgularda 3–4 sayfa birlikte görünüyor ve hiçbiri ilk 5'e çıkamıyor.

| URL | 90 gün Gös. / Tık / Ort. | Son 2 hf | İç link | Karar | Hedef | Güven |
|---|---|---|---|---|---|---|
| `/finance-options-uk` | 1.639 / 20 / 19,6 | 612 | — | **KEEP (hub)** | — | Yüksek |
| `/blog/can-you-pay-monthly-for-teeth-in-turkey` | 599 / 5 / 10,0 | 92 | 3 | **MERGE + 301** | `/finance-options-uk` | Orta |
| `/blog/dental-tourism-finance-explained` | 28 / 0 / 11,1 | 4 | 6 | **MERGE + 301** | `/finance-options-uk` | Yüksek |
| `/blog/finance-dental-implants-turkey-uk-patients` | 36 / 1 / 22,4 | 6 | 5 | **MERGE + 301** | `/finance-options-uk` | Yüksek |
| `/blog/can-you-pay-monthly-for-veneers-turkey` | 26 / 1 / 30,6 | 2 | 3 | **MERGE + 301** | `/finance-options-uk` | Yüksek |
| `/monthly-payment` | 0 / 0 / – | 0 | 39 | **KEEP** (dönüşüm sayfası) | — | Orta |

Gerekçeler:

- **`/blog/can-you-pay-monthly-for-teeth-in-turkey`:** Bölümleri ("How monthly payment works", "What decides a monthly payment", "Why the treatment price matters") hub'da zaten var. Hub ile 17 ortak sorgu var ve bu sayfa o sorgularda hub'dan biraz daha iyi sıralanıyor (yaklaşık 9–10'a karşı 9–21). Bu yüzden güven orta. Sayfadaki SSS (FAQ) soruları hub'a taşınır, sonra 301 yapılır.
- **`/blog/dental-tourism-finance-explained`:** Yaptığı "loan / credit card / saving" karşılaştırması hub'daki "Payment Plan, Loan, Credit Card or NHS Charge" bölümüyle aynı.
- **`/blog/finance-dental-implants-turkey-uk-patients` ve `/blog/can-you-pay-monthly-for-veneers-turkey`:** Hub'ın implant ve kaplamaya göre değiştirilmiş kopyaları, ayrı bir intent taşımıyorlar. İmplant ve kaplama örnek tutarları hub'daki "What You May Be Borrowing For" bölümüne eklenir.
- **`/monthly-payment`:** Google'da hiç gösterim yok, ama ChatGPT'den gelen trafiğin ve CTA'ların indiği sayfa. 28 günde 24 `cta_click` aldı ve artık kısa form var. Arama hedefi değil, dönüşüm sayfası olarak tutulsun. **Noindex önermiyorum.** ChatGPT'nin arama kaynakları bu sayfayı görmeye devam etmeli.
- **Uyum (compliance):** Birleştirmede `FinanceDisclosure` korunur. Faiz, aylık tutar veya onay iddiası eklenmez (`finance-options-uk/page.tsx` başındaki not).

### B. Kaplama kümesi

Hub: `/prices/veneers-turkey-cost`. "turkey veneers price" ve "veneers turkey cost" gibi 15 sorguda 2–4 sayfa birlikte görünüyor.

| URL | 90 gün Gös. / Tık / Ort. | Son 2 hf | İç link | Karar | Hedef | Güven |
|---|---|---|---|---|---|---|
| `/prices/veneers-turkey-cost` | 993 / 0 / 30,8 | 250 | — | **KEEP (hub)** | — | Yüksek |
| `/blog/full-set-veneers-turkey-cost` | 142 / 0 / 52,1 | 2 | 3 | **MERGE + 301** | `/prices/veneers-turkey-cost` | Yüksek |
| `/blog/veneers-turkey-cost-uk-vs-turkey` | 63 / 0 / 51,4 | 3 | 3 | **MERGE + 301** | `/prices/veneers-turkey-cost` | Yüksek |
| `/guides/veneers-turkey-packages` | 104 / 0 / 61,3 | 5 | 8 | **MERGE + 301** | `/prices/veneers-turkey-cost` | Orta |
| `/prices/veneers-antalya-cost` | 17 / 1 / 27,6 | 1 | — | **KEEP** (Antalya, yerel intent) | — | Orta |
| `/blog/hollywood-smile-turkey-cost` | 120 / 0 / 26,7 | 15 | — | **KEEP** | — | Yüksek |
| `/prices/hollywood-smile-turkey-package` | ~0 | 1 | 9 | **MERGE + 301** | `/blog/hollywood-smile-turkey-cost` | Orta |

Gerekçeler:

- **`/blog/full-set-veneers-turkey-cost`:** Hub'da zaten "Cost by Number of Veneers" bölümü var (8–24 diş). Bu sayfaya özgü tek parça "20 veneer + seyahat toplam maliyet" örneği. O örnek hub'a taşınır.
- **`/blog/veneers-turkey-cost-uk-vs-turkey`:** Hub zaten UK karşılaştırması içeriyor.
- **`/guides/veneers-turkey-packages`:** "Paket fiyatı mı, tedavi fiyatı mı" konusu gerçekten değerli. Ancak "veneers turkey package" sorgusunda hub 48 gösterimle 27. sırada, bu sayfa 7 gösterimle 89. sırada. Google hub'ı tercih ediyor. Kırmızı bayraklar ve paket içeriği hub'a ayrı bir bölüm olarak eklenir. Güven orta, çünkü sayfa 869 kelime ve özgün kontrol listesi içeriyor.
- **Hollywood smile:** Google blog sayfasını tercih ediyor ("hollywood teeth prices turkey" sorgusunda 65 gösterim, 30. sıra). Paket sayfası ince ve gösterim almıyor, ama 9 iç link alıyor. İç linkler blog sayfasına çevrilir, paket fiyat tablosu blog sayfasına taşınır.

### C. Genel fiyat ve paket kümesi

Hub: `/prices/turkey-teeth-cost`. Genel "how much are turkey teeth" sorgularının büyük kısmını zaten bu sayfa alıyor (11. sıra civarı).

| URL | 90 gün Gös. / Tık / Ort. | Son 2 hf | İç link | Karar | Hedef | Güven |
|---|---|---|---|---|---|---|
| `/prices/turkey-teeth-cost` | 2.561 / 20 / 16,8 | 2.019 | — | **KEEP (hub)** | — | Yüksek |
| `/guides/turkey-teeth-packages` | 268 / 5 / 41,1 | 31 (5 tık) | — | **KEEP** (paket intent'i, son 2 haftada CTR %16) | — | Yüksek |
| `/blog/dental-holiday-packages-turkey` | 143 / 0 / 58,0 | 1 | 3 | **MERGE + 301** | `/guides/turkey-teeth-packages` | Yüksek |
| `/price-calculator` | 118 / 2 / 31,6 | 33 | — | **KEEP** (araç) | — | Yüksek |

- **`/blog/dental-holiday-packages-turkey`:** "turkey teeth packages" ve "turkey dental packages" sorgularında packages rehberiyle yarışıyor ve 82–87. sıralarda kalıyor. İstanbul ve Antalya paket bölümleri rehbere kısa bir bölüm olarak taşınır.

### D. İmplant kümesi

| URL | 90 gün Gös. / Tık / Ort. | Son 2 hf | İç link | Karar | Hedef | Güven |
|---|---|---|---|---|---|---|
| `/blog/implants-cost-uk-vs-turkey` | 1.407 / 3 / 18,9 | 656 | — | **KEEP (implant hub)**, başlığı PR #69'da daraltıldı | — | Yüksek |
| `/blog/single-tooth-implant-turkey-cost` | 190 / 1 / 32,5 | 3 | 3 | **MERGE + 301** | `/blog/implants-cost-uk-vs-turkey` | Orta |
| `/blog/full-mouth-implants-uk-vs-turkey` | 113 / 0 / 26,7 | 1 | — | **KEEP** (tam ağız intent'i) | — | Orta |
| `/prices/all-on-6-dental-implants-turkey-package` | 5 / 0 / 9,8 | 1 | — | **KEEP** | — | Orta |

- **`/blog/single-tooth-implant-turkey-cost`:** "dental implant cost turkey" ve "implant cost in turkey" gibi 14 sorguda hub ile yarışıyor ve her seferinde geride kalıyor. Hub zaten "single implant with crown, by brand" fiyatını veriyor.
- **`/blog/implants-cost-uk-vs-turkey`:** Genel "turkey teeth cost" sorgularında da görünüyordu. PR #69'daki yeni başlık onu implant aramalarına odaklıyor. 3–4 hafta izlenmeli. Karışma sürerse genel fiyat bölümünü kısaltıp `/prices/turkey-teeth-cost` sayfasına link vermek ikinci adım olur.

## Özet

| Karar | Adet | URL'ler |
|---|---|---|
| KEEP | 13 | Hub'lar ve yukarıdaki KEEP satırları |
| MERGE + 301 | **10** | Finans 4, kaplama 4, paket 1, implant 1 |
| NOINDEX / DELETE | 0 | — |

10 URL'nin son 2 haftadaki toplam gösterimi yaklaşık 120, toplam tıklaması 0. Hepsinin yönlendirildiği hub'lar o sorgularda zaten daha iyi sıralanıyor. Risk düşük, ama sıfır değil. En büyük risk `/blog/can-you-pay-monthly-for-teeth-in-turkey`, çünkü bazı sorgularda hub'dan iyi sıralanıyor.

## Onay verilirse uygulama planı (tek PR)

1. Her MERGE sayfasındaki özgün bölümleri (SSS, örnek hesap, kontrol listesi) hedef hub'a taşı. İddiaları kaynaklı ve tarihli tut (§11). Reviewer atfını yalnızca reviewer'ın sorumlu olduğu sayfada koru.
2. Eski sayfaları `permanentRedirect(hedef)` stub'ına çevir. Bu, mevcut 16 yönlendirmeyle aynı yöntem.
3. Bu URL'lere verilen tüm iç linkleri (toplam 46) doğrudan hedefe çevir. `RelatedLinksGrid`, `internal-links.ts` kaydını ve `public/llms*.txt` dosyalarını güncelle.
4. `sitemap.ts` içinde ölü override varsa sil. `npm run seo:lastmod` çalıştır.
5. Yayından sonraki 2. ve 4. haftada GSC'de hub sayfalarının sırasını ve tıklamasını kontrol et. Düşüş olursa 301 geri alınabilir, çünkü eski içerik git geçmişinde duruyor.

## Onay seçenekleri

- **Hepsi:** 10 URL'nin hepsi birleştirilir.
- **Sadece "Yüksek" güvenli 6:** `dental-tourism-finance-explained`, `finance-dental-implants-turkey-uk-patients`, `can-you-pay-monthly-for-veneers-turkey`, `full-set-veneers-turkey-cost`, `veneers-turkey-cost-uk-vs-turkey`, `dental-holiday-packages-turkey`.
- **Satır satır:** Hangi URL'lerin birleştirileceğini tek tek belirt.
