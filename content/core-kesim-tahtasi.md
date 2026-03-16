---
title: Core — Kesim Tahtası (Cut Board)
tags:
  - core
  - cutboard
  - guide
date: 2025-01-01
---

# Core — Kesim Tahtası (Cut Board)

← [[core-arac-secimi|Araç Seçimi]] | [[index|Ana Sayfa]]

---

## Bütün Parçalar (All Parts)

Kesim tahtası ayarlanırken dikkat edilmesi gereken konular aşağıdaki videoda gösterilmiştir:

<video controls width="200">
  <source src="./media/part_adding.mp4" type="video/mp4">
  <source src="./media/part_adding.mov" type="video/quicktime">
</video>

![[vehicle_searching.png|740x500]]

> [!TIP] Dikkat Edilecek Konular
> Plotter kesim yapılmadan önce genellikle `Prefer Wrapped Patterns` seçeneği kullanılarak seçim yapılması önerilir.
> Wrap özelliği, dış parçalardan ekstradan et kalınlığı bırakmak için yapılan seçenektir.

---

## Önceden Ayarlanmış Kesme Tahtaları (Pre Nested Boards & Kits)

Uygulama sürekli geliştirildiğinden, kendi onayladığı parça gruplarını toplu halde elde etmek mümkündür.

![[boardsandkits.gif|640x400]]

### Notlar (Notes)

Belirli opsiyonlar hakkında önceden eklenmiş notlar bulunmaktadır. Bazı parçalar uyumlu olmayabilir.

> [!WARNING] Dikkat
> Özellikle Rolls-Royce araçlar bespoke parçalar içerdiğinden dolayı her kesim araca uyumlu olmayabilir. (Özellikle iç tasarımda kullanılacak PPF'ler için geçerlidir.)

---

## Kesim Tahtası Arayüzü

Kesim tahtası, **Paint** programına benzer bir yapıya sahiptir; ancak tüm fonksiyonlar plotter kesimin daha verimli yapılabilmesi için geliştirilmiştir.

![[cutboard_first_view.png|750]]

---

## Info Çubuğu

![[properties.png|640x75]]

| Özellik | Açıklama |
|---|---|
| **Width Used** | Mevcut Cut Board'da toplamda ne kadar dikey alanda yayıldığı |
| **Length Used** | Alınan parçaların ne kadar yatay alan kapladığı |
| **Sq Meters** | Toplam parçaların metrekare hesabı |
| **Efficiency** | Kullanılan alanın kağıt alanında ne kadar değerlendirildiği |

> [!TIP] Bilgi
> Plotter kesimde hedeflenen verimlilik **%60'ın üstünde** olmasıdır. Bu sayede PPF malzemesinden tasarruf sağlanır ve fire azaltılır.

---

## Araç Çubukları

![[tool_box.png|600]]

---

### Select — Seçim **(S)**

![[cursor.png|30]] ![[cursor_1.png|31]]

Plotter parçalarının seçilmesini ve kesim tahtasında bir noktadan başka bir noktaya taşınmasını sağlar.

![[cursor_gif.gif|433]]

Length ve Width değerlerine bakılarak bir objenin ne kadar yer kapladığı öğrenilebilir.

![[measurement_properties.png|478]]

---

### Pan — Ekran Kaydırma **(P)**

![[pan_3.png|32]] ![[pan.png|35]]

Çalışma alanındaki objelerin yerini değiştirmeden, sadece görüş penceresini kaydırma işlemidir.

![[pan.gif|525]]

---

### Reset View — Görünümü Sıfırlama **(Z)**

![[grid_1.png|42]] ![[grid.png|40]]

Tüm Zoom ve Pan işlemlerini tek hamlede iptal ederek varsayılan bakış açısına döndürür.

![[reset_view.gif]]

---

### Auto Nest — AI Destekli Parça Yerleştirme (N)

![[nest.png|44]]

**Auto Nest**, farklı boyut ve şekillerdeki parçaları belirlenen malzeme üzerine minimum fire ve maksimum verimlilikle otomatik olarak dizen bir optimizasyon algoritmasıdır.

![[auto_nest.gif|762]]

#### Ön Koşul

Beta özelliğinin aktif edilmesi gerekir:

> `Ayarlar > Beta Ayarları > Auto Nest Beta` seçeneğini açık konuma getirin.

![[nest_settings.png|844]]

#### Kullanım Adımları

1. **Özelliğe Tıklayın:** Ekranda **Nest cut board tool** simgesini göreceksiniz.
2. **Yerleşim Modunu Seçin:** `Custom Fast` veya `Custom Efficient` arasında seçim yapın.
3. **Parametreleri Ayarlayın:**
   - `Steps per mm` — Parçanın yerleştirilmeye çalışılırken kontrol sıklığı
   - `Degrees per step` — Her adımda kaç derece döndürüleceği
   - `Minimum spacing` — Desenler arasındaki minimum mesafe
4. **Yerleşimi İzleyin (Opsiyonel):** `Watch nest` onay kutusunu işaretleyebilirsiniz.
5. **İşlemi Başlatın:** Ayarlar tamamlandıktan sonra yerleşim işlemini çalıştırın.

> [!INFO] Hız ve Verimlilik Dengesi
> Büyük parçalar algoritmanın daha yavaş çalışmasına neden olabilir. Daha hızlı sonuç için `Fast`, maksimum tasarruf için `Efficient` ayarını tercih edin.

> [!DANGER] Desen Gruplandırma
> Nest aracı varsayılan olarak bazı desen gruplarını parçalayabilir. Desenlerin birlikte kalmasını istiyorsanız, manuel olarak gruplandırın.

> [!INFO] Hizalama Payı
> `Minimum spacing` ayarı, fiziksel kesim sırasında plotter'ın küçük kaymalar yapması durumunda desenlerin birbirinin üzerine binmesini engeller.

#### Sık Karşılaşılan Sorunlar

- **İşlemin Takılması veya Yavaşlaması:** Kesim tahtasında çok büyük bir parça varsa hesaplama süresi uzar. Bu bir donma değil, normal hesaplama sürecidir. Büyük panolarda hız sürgüsünü `Fast` yönüne çekmek süreci hızlandırır.

---

### Group / Ungroup — Birleştirme / Ayırma **(T / Y)**

![[group_ungroup.png|78]]

**Group**, birden fazla bağımsız nesneyi tek bir ünite gibi hareket edecek şekilde birbirine bağlar. **Ungroup** ise her parçayı tekrar bağımsız hale getirir.

![[move.gif]]

> [!INFO] Bilgi
> Core platformunda plotter ürünleri yansıtılırken krom kaplamalarda da parça görüntüsü oluşabiliyor. Belirli parçaların ayrılması plotter cihazının doğru çıktı vermesini sağlar.

---

### Duplicate — Parça Çoğaltma **(D)**

Birden fazla parça çıkartmak için kullanılır.

![[duplicate.gif|367]]

> [!INFO] Bilgi
> Aynı özellikteki bir parça üzerinde düzenleme yapıldığında, bu işlemleri tekrarlamak için kullanılabilir.

---

### Delete — Obje Silme **(Backspace)**

Seçili çizimlerin silinmesinde kullanılır.

![[remove.gif]]

---

### Hide — Gizleme **(O)**

![[hide_1.png|34]]

Bazı parçalarda kesilmesi istenmeyen bölümler bulunmaktadır (sensör noktaları, benzin kapakları, referans gösterimleri vb.). Bu opsiyonla ilgili öğeler gizlenebilir.

![[suggested_points.gif|528]]

| Opsiyon | Açıklama |
|---|---|
| **Tack Points On** | Malzemenin araç üzerine yerleştirilme sırasını gösteren kılavuz. Kesim üzerinde etkisi yoktur. |
| **All Badges On** | Deaktive edildiğinde logo için ayrılan kesim alanı iptal edilir. |
| **All Sensors On** | Deaktive edildiğinde sensör için ayrılan kesim alanı iptal edilir. |
| **All Cutouts On** | Deaktive edildiğinde depo kapağı gibi özel kesim bölgeleri iptal edilir. |

> [!DANGER] Dikkat
> Parçanın nasıl yerleştirileceği konusunda sorun yaşanıyorsa mutlaka **Tack Points On** seçeneğinde gösterildiği gibi yerleşim yapınız. Bu, en optimal PPF kalıbının oturmasını sağlar.

---

### Wrap — Sarma Aracı **(W)**

![[wrap_1.png|37]] ![[wrap.png|35]]

Mevcut desen seçenekleri arasında uygun bir sarma tipi bulunmadığında veya sarılma şeklini değiştirmek istediğinizde özel sarmalar eklemenizi sağlar.

![[wrap.gif]]

#### Kullanım Adımları

1. **Cut Board** üzerinde **Wrap** aracını seçin.
2. Sarma özelliklerini yapılandırın:
   - `Corner type` — Köşe tipi
   - `Corner radius` — Köşe yarıçapı
   - `Wrap depth` — Sarma derinliği
3. Desen üzerinde başlangıç ve bitiş noktasına tıklayın.
4. Oluşturduktan sonra:
   - **Invert** → Sarmanın desenin hangi tarafında durduğunu değiştirir
   - **Remove** → Sarmayı tamamen kaldırır

---

### Weld / Chop — Desen Birleştirme ve Kesme

![[weld.png|40]] ![[chop.png|41]]

**Weld** aracı, iki ayrı deseni birleştirerek tek bir parça haline getirir. Özellikle bir tarafta yapılan değişiklikleri simetrik olarak diğer tarafa aktarmak istediğinizde kullanışlıdır.

![[chop.gif]]

#### Kullanım Adımları

1. Mevcut deseni ayırın (split).
2. Değişiklik yapılan parçayı çoğaltın ve diğer taraf için aynalayın (mirror).
3. İki parçayı hafif üst üste binecek şekilde yan yana getirin.
4. Kaydırırken **Shift** tuşuna basılı tutun — parçalar birleşim noktasında otomatik kenetlenir (snap).
5. Her iki deseni seçili yapın.
6. `Weld` komutuyla desenleri tek bütün haline getirin.

> [!INFO] Bilgi
> **Shift** tuşu, parçaların milimetrik olarak doğru noktadan birbirine tutunmasını (snap) sağlar.

> [!WARNING] Uyarı
> `Weld` işleminin gerçekleşmesi için iki desenin mutlaka birbiriyle az da olsa temas etmesi veya üst üste binmesi gerekir.

---

### EasyEdit — Kolay Düzenleme **(Q)**

Kesim panosu üzerindeki basit desenlerin uzunluklarında hızlı ve hassas ayarlamalar yapmak için kullanılır.

![[easy_edit.gif]]

#### Kullanım Adımları

1. **EasyEdit** aracına tıklayın.
2. Düzenlemek istediğiniz deseni seçin.
3. Uzunluğu artırmak veya azaltmak için beliren okları kullanın.
4. Daha büyük adımlar için `nudge amount` değerini yükseltin.
5. Tamamlandığında **Apply** butonuna tıklayın.

> [!INFO] Bilgi
> EasyEdit, desenin köşe ve kenarlarını otomatik algılayarak `node` (düğüm) noktaları oluşturur. Otomatik düğümlerin konumunu beğenmezseniz **Delete** ile silip manuel olarak yenisini ekleyebilirsiniz.

---

### Outline — Desen Boyutlandırma

Bir desenin tamamını büyütmek veya küçültmek için kullanılır.

![[scale.gif]]

#### Kullanım Adımları

1. **Outline** aracını seçin.
2. İşlem yapılacak deseni seçin.
3. `Scale` ile büyütme/küçültme miktarını belirleyin.
4. Yön seçin:
   - **Outline** → Boyutu artırır (dış hat)
   - **Inline** → Boyutu azaltır (iç hat)
5. `Keep original` → Orijinal hattı korur.
6. **Apply** butonuna tıklayın.

---

### Node Editing — Düğüm Düzenleme

Desen üzerinde tam kontrol sağlamak için düğümlerin (nodes) düzenlenmesini kapsar.

![[edit_node.gif]]

#### Kullanım Adımları

1. **Edit Node** aracını seçin.
2. Parametreleri yapılandırın:
   - `Position` — Düğümün ne kadar taşındığını gösterir
   - `Nudge Amount` — Ok tuşlarıyla hareket mesafesi
   - `Total Nudge` — Toplam taşınan mesafe
3. Düzenlenecek deseni seçin.
4. Fare orta tuşuyla yakınlaştırma/kaydırma yapın.
5. Düğüm seçimi:
   - Tekli: düğüm üzerine tıklayın
   - Çoklu: **Ctrl** basılı tutarak tıklayın veya alan tarayın
6. Seçili düğümleri kaldırmak için **Delete** tuşuna basın.
7. İşlem tamamlandığında **Select** aracına geri dönün.

> [!WARNING] Uyarı
> Düğümleri sildiğinizde desenin genel hattı değişecektir. "Ghost line" (hayalet çizgi) özelliği, değişikliği orijinal hatla kıyaslamanıza yardımcı olur.

---

### Measurement Tool — Ölçüm Aracı **(Shift + M)**

![[measure.png]]

![[measure.gif]]

1. **Çizgi Oluşturma:** Panel üzerinde serbestçe çizgiler çizebilirsiniz.
2. **Hizalama (Snap):** Farklı desenlere veya noktalara tam doğrulukla hizalama yapabilirsiniz.
3. **Çizgileri Düzenleme:** Uç noktalarını hareket ettirebilir veya çizgiyi taşıyabilirsiniz.
4. **Çoklu Seçim:** **Ctrl** basılı tutarak birden fazla çizgi seçin.
5. **Silme:** **Delete** veya **Backspace** tuşlarını kullanın.
6. **Hassas Değer Girişi:** `length` veya `angle` değerlerini manuel olarak girin.

> [!INFO] Bilgi
> Ölçüm aracı hâlen geliştirme aşamasında (work in progress) olan bir özelliktir.

---

### Desen Dönüştürme İşlemleri

![[edit_tools.png|198]]

| İşlem | Açıklama |
|---|---|
| **Rotate** | 90° saat yönünde veya tersine döndürme; köşe sürükleyerek manuel döndürme |
| **Duplicate** | Seçili desenin kopyasını oluşturur |
| **Mirror** | Deseni simetrik olarak çevirir |
| **Delete** | Seçili deseni panelden kaldırır |
| **Clear** | Kesim panelindeki tüm desenleri tek seferde kaldırır |
| **Undo / Redo** | İşlemleri geri alır veya yeniden yapar |

> [!TIP] İpucu
> Manuel döndürme sırasında **Shift** tuşuna basılı tutarsanız, döndürme açısı **15 derecelik** artışlarla kilitlenir.

---

## Plotter Cihazı ve Uygulama İzdüşümü

Plotter cihazı ve uygulamanın nasıl izdüşüm çıkardığı aşağıdaki videoda anlatılmaktadır:

<video controls width="200">
  <source src="./media/plotter_referance_line.mp4" type="video/mp4">
  <source src="./media/plotter_referance_line.mov" type="video/quicktime">
</video>

---

[[core-arac-secimi|← Araç Seçimi]] | Sonraki: [[summa-plotter|Summa Plotter →]]
