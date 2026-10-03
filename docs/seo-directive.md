# SEO + GEO + Spam-Safety Master Directive

Bu belge, bu repoda yapılacak tüm SEO, GEO, içerik, landing page, keyword clustering, programmatic SEO, çok dilli SEO, iç link, schema, sitemap, indexing, content refresh/pruning ve site mimarisi çalışmalarının üzerinde çalışan genel kalite ve güvenlik katmanıdır. Siteye özgü kurallar en sonda **§SİTE** bölümündedir ve bu genel kuralların altında çalışır.

> **Doğrulama notu.** `[DOĞRULANMAMIŞ]` ile işaretlenen satırlar, belgeyi derleyen kişinin aktardığı ancak Google'ın resmi kaynaklarından (Search Status Dashboard, Search Central) teyit edilmemiş iddialardır. Bunlara dayanarak karar verme, önce teyit et.

## AMAÇ

Google'ın spam politikalarının generative-AI sonuçları dahil Search'ün tamamına uygulandığını kabul et.

- `[DOĞRULANMAMIŞ: Google Search Status / Search Central'dan teyit et]` Eylül 2026 Spam Update'i ve Ekim 2026 itibarıyla güncellenen generative-AI content guidance'ı (1 Ekim 2026'da Search Quality Rater rehberleriyle uyumlu hale getirildiği iddia ediliyor) dikkate alınacak.

## 1. TEMEL ÇALIŞMA PRENSİBİ

Varsayılan yöntem şu olmasın:

```
Keyword → Page → Optimize → Publish
```

Yeni yaklaşım:

```
Search Intent → User Problem → Existing Coverage → Unique Value → Evidence → Best Resource → SEO/GEO → Publish
```

Bir keyword bulunması tek başına yeni URL açmak için yeterli gerekçe değildir. Her yeni URL için önce şunu cevapla: **"Bu sayfanın ayrı bir URL olarak var olması için kullanıcı açısından somut gerekçe nedir?"** Net cevap yoksa yeni URL oluşturma. Mevcut güçlü sayfayı geliştirmeyi, birleştirmeyi veya yeni section eklemeyi değerlendir.

## 2. SCALED CONTENT ABUSE KORUMASI

Kısa sürede çok sayıda benzer sayfa oluşturulmasına özellikle dikkat et. Şunlar yüksek risktir:

- aynı template'in yüzlerce varyasyonu
- yalnızca şehir/ilçe, yalnızca tedavi veya yalnızca property/building değiştirilmiş sayfalar
- keyword-swapped landing pages
- AI ile paraphrase edilmiş duplicate içerikler
- düşük information gain taşıyan programmatic pages
- başka kaynakların AI ile yeniden özetlenmesi
- search volume var diye oluşturulan thin pages
- otomatik üretilmiş çok sayıda blog
- otomatik çeviriyle çoğaltılmış URL'ler
- aynı intent'i hedefleyen çok sayıda makale

AI kullanımı tek başına problem değildir. Problem: **scale + redundancy + low originality + search-engine-first intent** kombinasyonudur.

## 3. SITE-WIDE SCALE AUDIT

Mevcut siteyi de bu kriterlerle denetle. Şunları hesapla:

- toplam indexable URL, template bazında URL sayısı, son 30/90 günde oluşturulan URL sayısı
- organik impression veya click almayan URL
- near-duplicate ve aynı intent'i hedefleyen URL
- thin content ve orphan pages
- canonical conflicts
- indexable fakat sitemap dışında kalan URL
- sitemap'te olup noindex olan URL
- soft-404 benzeri düşük değerli sayfalar

Sadece "çok URL var" diye siteyi spam olarak sınıflandırma. Scale bir risk sinyalidir, tek başına ihlal kanıtı değildir.

## 4. LOW-VALUE PAGE AUDIT

**90 günde 0 click + 10'dan az impression** alan sayfaları **LOW-VALUE REVIEW QUEUE**'ya al. Otomatik olarak noindex yapma. Her URL için karar ver:

| Karar | Anlam |
| --- | --- |
| KEEP | Sayfa stratejik ve özgün değere sahip. |
| IMPROVE | Intent değerli ama içerik yetersiz. |
| MERGE | Başka URL ile aynı veya çok yakın intent. |
| 301 | Daha güçlü canonical resource mevcut. |
| NOINDEX | Kullanıcı için gerekli ama Search'te bağımsız landing page değeri düşük. |
| 404/410 | Gerçekten kaldırılmış, replacement gerektirmiyor. |
| DELETE | Gereksiz içerik. |

Toplu işlem öncesinde rapor oluştur ve onay iste.

## 5. INFORMATION GAIN GATE

Yeni veya önemli ölçüde güncellenecek sayfaların internetteki commodity content'i tekrar etmesini engelle. Mümkün olduğunda en az 2 güçlü özgün değer sinyali ekle:

first-party data, gerçek fiyat, gerçek vaka, gerçek süreç, anonimleştirilmiş gerçek doküman, uzman görüşü, özgün fotoğraf/video, gerçek kullanıcı deneyimi, hesaplama, comparison table, dataset, checklist, interactive tool, özgün analiz, proprietary methodology, yerel kaynak/veri, resmi kaynak, tarihli doğrulama.

Sırf quota doldurmak için yapay "unique elements" ekleme. Amaç gerçek information gain'dir.

## 6. LOCAL / DISTRICT PROGRAMMATIC PAGES

Şehir → ilçe → mahalle gibi programmatic yapılarda çok dikkatli ol. Yüzlerce birbirine benzeyen yerel sayfanın tamamını indexable tutmayı varsayılan kabul etme.

Trafik/intent değeri taşıyan lokal sayfaları gerçek lokal bilgiyle güçlendir: resmi belediye/kurum kaynakları, gerçek mahalleler, lokal fiyat/veri, resmi istatistikler, yerel süreç farklılıkları, kaynaklandırılmış rakamlar. Kaynağı doğrulanamayan sayısal iddiaları kaldır.

Bir yerel sayfa yalnızca `[YER ADI] + aynı template` ise MERGE/NOINDEX değerlendirmesine girsin. Gerekirse düşük değerli sayfaları güçlü şehir hub'ında section olarak birleştir.

## 7. CONTENT CANNIBALIZATION

Yeni URL oluşturmadan önce tüm mevcut URL'lerde semantic intent overlap kontrolü yap. Örneğin `implant turkey cost` ve `dental implants turkey price` aynı intent'i karşılıyorsa iki ayrı sayfa yerine tek authoritative resource tercih et.

Bir konu için 4 benzer blog yazısı varsa dördünü otomatik tutma. En güçlü URL'yi belirle, diğerlerinin merge + 301 olup olmayacağını değerlendir. Yalnızca keyword benzerliğine bakarak redirect yapma, gerçek search intent'i karşılaştır.

## 8. PROGRAMMATIC SEO TESTİ

Programmatic URL üretmeden önce sor: **"Template variable'larını kaldırdığımda bu sayfalar hâlâ anlamlı şekilde farklı mı?"** Hayır ise üretme. Şehir, ilçe, tedavi, fiyat veya dil gibi tek değişkeni değiştirerek yüzlerce URL oluşturma. Programmatic SEO ancak her sayfa gerçek `data + context + intent + utility` taşıyorsa kullanılır.

## 9. DOORWAY PAGE KORUMASI

Çok sayıda benzer query için oluşturulup kullanıcıyı aynı commercial page/form'a yönlendiren URL kümelerinden kaçın. Her landing page kendi başına kullanıcının sorgusunu anlamlı biçimde cevaplayabilmelidir. Sayfanın tek varlık nedeni başka bir conversion page'e trafik göndermek olmamalı.

## 10. TRUST / AUTHORSHIP / EDITORIAL SIGNALS

Uygun editorial/YMYL içeriklerde mümkün olduğunca:

- **Author:** gerçek kişi
- **Reviewer / Medical Reviewer / Editor:** gerekiyorsa gerçek uzman
- **Credentials:** ilgili uzmanlık
- **Published:** ilk yayın tarihi
- **Last reviewed / updated:** gerçek son kontrol tarihi
- **Sources:** iddiaları destekleyen güvenilir kaynaklar
- **About / Editorial Policy / Methodology:** site düzeyinde şeffaflık

Varsayılan yazar olarak anlamsızca `Organization` göstermek yerine, içeriğin sorumluluğunu gerçekten alan kişi/kurum ilişkisini doğru modelle. Sahte author/persona üretme.

## 11. YMYL EXTRA QUALITY GATE

Dental, sağlık, finans ve diğer YMYL sayfalarında ekstra standart uygula. Her önemli iddia için sor:

- **WHO** says this?
- **WHAT** evidence supports it?
- **WHEN** was it verified?
- **IS** expert review required?

Tedavi sonucu, başarı oranı, risk, maliyet veya finansal koşulları kaynak olmadan kesin gerçek gibi yazma. Marketing copy ile clinical/factual claim'i birbirinden ayır.

## 12. MULTILINGUAL SEO

Translation ≠ localization. Her market için gerekirse yeniden değerlendir: search intent, terminoloji, para birimi, regülasyon, finans seçenekleri, kullanıcı itirazları, seyahat lojistiği, yerel örnekler, SERP yapısı.

```
Translate → Publish        (yanlış)
Research → Localize → Add local value → Review → Optimize → Publish   (doğru)
```

## 13. INDEXING API KURALI

Google Indexing API'yi normal web sayfalarını indexletmek için kullanma. Google'ın açıkça desteklediği içerik türlerinde kullan: **JobPosting** (ve livestream/`BroadcastEvent`) sayfaları.

- Normal blog / guide / landing page: Indexing API kullanma.
- Gerçek job listing: Google JobPosting kurallarına uygunsa kullanılabilir.
- Bing/Yandex: IndexNow ayrı değerlendirilir, devam edebilir.

"Indexing API her yerde kapalı" gibi kör bir kural uygulama, "her sayfada aç" da deme.

## 14. JOB POSTING ÖZEL KURALI

İş ilanı olan projelerde her job URL'sini ayrı kontrol et. `JobPosting` structured data yalnızca tek gerçek iş ilanını içeren spesifik sayfada kullanılır, liste/arama sonucu sayfasında kullanılmaz. İlan gerçek ve açık olmalı, detaylı açıklama ve başvuru yöntemi içermeli, doğru `datePosted`, `validThrough`, `hiringOrganization`, `location` taşımalı, structured data içerikle eşleşmeli. Süresi biten ilanı aktif göstermeye devam etme. (Bu repoda iş ilanı sayfası yok.)

## 15. SITEMAP HYGIENE

Sitemap yalnızca indexlenmesini istediğimiz canonical URL'leri içermeli. Şunları çıkar: noindex, redirect, duplicate, non-canonical, gereksiz parametreli URL'ler, silinmiş içerik. `lastmod` yalnızca içerik gerçekten anlamlı biçimde değiştiğinde güncellensin; doğru `lastmod` gereksiz yeniden taramayı azaltır.

## 16. SEO / GEO AYRIMI

SEO ve GEO tamamen ayrı sistemler değildir. Spam-safe, özgün ve güvenilir içerik temel katmandır. GEO için ayrıca: entity clarity, answerability, factual density, açık ilişkiler, yapılı başlıklar, first-party evidence, kaynak şeffaflığı, faydalı tablolar, özgün görsel, açıklayıcı alt/bağlam, uygun yerde schema.

- `[DOĞRULANMAMIŞ: Search Central'dan teyit et]` Search Console'da multimodal Search performans raporlaması başladığı iddia ediliyor. Mevcut olduğunda audit'e dahil et.

## 17. LLMS.TXT

`llms.txt`, diğer AI crawler/agent ekosistemleri için kullanılabilir. Google ranking factor veya Google GEO sinyali olarak değerlendirme. SEO/GEO skorunu `llms.txt` varlığına aşırı bağlama.

## 18. GOOGLE UPDATE INCIDENT PROTOCOL

Google trafiğinde anormal düşüşte hemen kod değiştirme. Önce teşhis, şu sırayla:

1. Google Search Status / doğrulanmış update'ler
2. GSC: impressions, clicks, CTR, position, query, page, country, device
3. GA4: Google Organic, landing pages, sessions, conversions
4. Kontrol kanalları: Bing, direct, referral
5. Teknik: 200 yanıtları, Googlebot erişimi, robots.txt, meta robots, canonical, sitemap, sunucu hataları, firewall/CDN, rendering
6. Indexation: URL Inspection örneklemi
7. Deployment zaman çizelgesi: düşüşten önce ne deploy edildi?

## 19. CORRELATION ≠ CAUSATION

Tipik teşhis örüntüsü: Google clicks/impressions belirgin düşer, Bing yükselir, sunucu 200 döner, Googlebot açıktır, örnek URL'ler indexlidir, benzer diğer siteler etkilenmemiştir ve deployment zamanlaması düşüşle örtüşmez. Bu kombinasyon Google tarafı ranking/reassessment hipotezini güçlendirir.

Ama "Spam Update kesin vurdu" diye hüküm verme. Bunu **high-probability algorithmic reassessment candidate** olarak sınıflandır ve kanıt toplamaya devam et.

## 20. ROLLOUT SIRASINDA PANİK DEĞİŞİKLİĞİ YAPMA

Doğrulanmış bir Google update devam ederken büyük site-wide değişikliklerden kaçın: yüzlerce noindex, yüzlerce redirect, mimari değişikliği, toplu title rewrite, canonical overhaul, içerik silme. Aksi halde update etkisini kendi müdahalenizin etkisinden ayıramazsınız. Önce audit hazırla.

## 21. 90-DAY LOW-VALUE RULE

`90 gün + 0 click + <10 impression` → **LOW VALUE CANDIDATE**. **LOW VALUE CANDIDATE ≠ AUTOMATIC NOINDEX.** Önce kontrol et: sayfa kaç günlük, seasonal mı, ticari değeri var mı, stratejik topical coverage sağlıyor mu, long-tail conversion alıyor mu, backlink alıyor mu, iç link değeri var mı, başka URL ile overlap ediyor mu, geliştirilebilir mi. Sonra aksiyon belirle.

## 22. CONTENT PRUNING SAFETY

Audit çok sayıda potansiyel noindex URL bulursa hepsini doğrudan değiştirme. Önce rapor üret:

```
URL | Click | Impression | Age | Intent | Duplicate | Recommended action
```

Sonra KEEP / IMPROVE / MERGE / 301 / NOINDEX / REMOVE olarak sınıflandır. **İnsan onayı olmadan toplu noindex, silme veya 301 uygulama.**

## 23. FALSE INFORMATION CLEANUP

Programmatic içerikte özellikle sayı ve yerel bilgileri doğrula: fiyat, nüfus, kurum desteği, sağlık başarı oranı, tedavi maliyeti, vergi, finansman uygunluğu, ücretler gibi değişken bilgileri hallucinate etme. Kaynak yoksa karar ver: **verify → qualify → remove**.

## 24. DEPLOYMENT LOG

Her SEO deployment için kayıt tut:

```
DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT
```

Böylece sonradan Google update, deployment, seasonality veya teknik sorun ayırt edilebilir.

## 25. WEEKLY MONITORING

Haftalık GSC + GA4 değerlendir. Yalnızca toplam trafiğe değil, **Query → Page → Intent Cluster** düzeyine bak. Karşılaştır: son 7 gün vs önceki 7, gerektiğinde son 28 vs önceki 28. Doğrulanmış update varsa pre-update baseline vs rollout vs post-rollout kullan. Update öncesi baseline'ı (örneğin günlük impression ortalaması) ayrıca kaydet.

## 26. RECOVERY METRICS

Update sonrası yalnızca "trafik geri geldi mi?" diye bakma. İzle: indexlenen değerli sayfalar, impressions, ranking query sayısı, Top 3/10/20, clicks, organik conversion, branded/non-branded, long-tail görünürlük, crawling, mevcutsa AI/generative ve multimodal görünürlük.

## 27. PRE-PUBLISH QUALITY GATE

Her yeni URL için:

- **INTENT:** ayrı kullanıcı ihtiyacı var mı?
- **OVERLAP:** başka URL zaten cevaplıyor mu?
- **ORIGINALITY:** yeni bilgi sağlıyor muyuz?
- **INFORMATION GAIN:** commodity content'in ötesinde ne var?
- **EVIDENCE:** iddialar doğrulanabilir mi?
- **EXPERTISE:** uzman incelemesi gerekli mi?
- **AUTHORSHIP:** içerikten kimin sorumlu olduğu açık mı?
- **UTILITY:** kullanıcı bu sayfadan sonra daha iyi karar verebiliyor mu?
- **SEO:** title/H1/canonical/iç link/indexability doğru mu?
- **GEO:** entity/fact/answer yapısı açık mı?
- **SPAM:** scaled content, doorway, keyword stuffing, duplicate riski var mı?
- **PURPOSE:** bu sayfayı kullanıcı için mi oluşturuyoruz, yoksa sadece Google'dan trafik almak için mi?

Son sorunun cevabı esas olarak "keyword/ranking yakalamak" ise **STOP**: sayfayı yayınlama, daha güçlü bir alternatif öner.

## 28. AGENT'IN YETKİ SINIRI

Agent kendiliğinden yapabilir: audit, crawl analizi, GSC/GA4 analizi, duplicate tespiti, intent clustering, content gap analizi, olgusal doğrulama, schema doğrulama, iç link önerileri, kalite skoru ve öneri raporu.

Agent **önce onay istemelidir**: toplu noindex, toplu 301, toplu silme, canonical mimari değişikliği, yüzlerce URL konsolidasyonu, büyük sitemap budaması, site genelinde taksonomi değişikliği. Bunlar geri dönüşü zor müdahalelerdir.

## 29. ANA OPTİMİZASYON HEDEFİ

Başarıyı daha fazla URL ile ölçme. Optimize et:

- Indexed Useful Pages / Total Indexed Pages
- Unique Search Intent Coverage / Indexed Pages

Düşük performanslı URL'yi sırf metriği yükseltmek için silme. Amaç küçük site değil, yüksek sinyal / düşük gürültü oranlı site.

## 30. SON MASTER RULE

Kararlarda şu sırayı kullan:

```
USER VALUE → ORIGINALITY → EVIDENCE → INTENT DIFFERENTIATION → TRUST
→ TECHNICAL ACCESSIBILITY → SEO → GEO → SCALE
```

Scale en son gelir. Bir sayfanın var olmasının ana gerekçesi yalnızca Google trafiği ise o sayfayı yayınlama. Bir sayfa kullanıcının ayrı bir problemini çözüyor, özgün bilgi sağlıyor ve güvenilir biçimde doğrulanabiliyorsa SEO ve GEO ile maksimum görünürlük için optimize et.

---

## §SİTE: teethdoneinturkey.co.uk

Yukarıdaki genel kuralların altında, bu repoya özgü doğrulanmış kurallar:

- **Stack:** Next.js App Router (`src/app`). Sürüm kırıcı değişiklikler içerir, kod yazmadan önce `node_modules/next/dist/docs/` okunur (bkz. `AGENTS.md`).
- **Sitemap:** `src/app/sitemap.ts`, `seo/route-lastmod.json` manifestini okur. Manifest her build'de `npm run seo:lastmod` ile (`prebuild`) `src/app` taranarak üretilir. Redirect stub'ları (`permanentRedirect`) ve `robots: { index: false }` sayfalar otomatik dışarıda kalır. `lastmod`, rota klasörünün kendi dosya içeriğinin hash'ine bağlıdır, paylaşılan bileşen değişikliği tüm siteyi güncellemez. Sayfa içeriği değiştirince `npm run seo:lastmod` çalıştırılır, CI `npm run seo:lastmod:check` ile doğrular.
- **Redirect'ler:** Canlı sayfalardan redirect stub'larına iç link verilmez, doğrudan hedef URL'ye link verilir. Bir sayfa birleştirilirse (301) eski URL'ye giden tüm iç linkler aynı değişiklikte güncellenir ve `sitemap.ts` içindeki ölü override'lar silinir.
- **Başlık ve açıklama:** `<title>` ≤ 60 karakter (`layout.tsx` şablonu `| Teeth Done in Turkey` ekliyorsa sayfa başlığına eklenmez), meta açıklama 150–160 karakter.
- **IndexNow:** Key dosyası `public/7e8fa3d2b9e5c741f0a1b2c3d4e5f678.txt`. Ping `scripts/indexnow-ping.mjs` ve `src/lib/indexnow.ts` ile gönderilir, `prebuild` yalnızca manifestte değişen rotalar için ping atar. Ekim 2026'daki ilk denemede Bing `UserForbiddedToAccessSite` (403) döndürdü. Key dosyası canlıda doğru yayınlanıyordu, sebep doğrulanmadı. Olası neden: Bing Webmaster Tools'a siteyi `www`'suz (`teethdoneinturkey.co.uk`) eklememiz, ping'lerin ve key dosyasının ise `www` altında olması. IndexNow sorunu çözülene kadar ping'in başarılı olduğu varsayılmaz, Bing'in sitemap'i işlemesi birincil yoldur.
- **YMYL (dental):** Gerçek reviewer `src/lib/reviewer.ts` ve `/medical-reviewers/mustafa-akca` ile modellenir, politika `/editorial-policy` sayfasındadır. Reviewer'ın sorumluluğunu üstlenmediği sayfaya reviewer atfı eklenmez. Fiyat, başarı oranı ve süre iddiaları kaynaklandırılır ve tarihlenir.
- **İç link kayıt defteri:** `src/lib/internal-links.ts` yalnızca denetim kaydıdır, sayfalara render edilmez (sayfalar kendi `RelatedLinksGrid` listelerini taşır). Link eklemek için ilgili hub sayfasının grid'ine eklenir.
- **llms.txt / llms-full.txt:** `public/` altında. Noindex veya redirect URL listelenmez. Google ranking sinyali sayılmaz.
- **Toplu işlem onayı:** Toplu noindex, 301, silme ve canonical değişikliği için §28 uygulanır, önce rapor ve onay.
