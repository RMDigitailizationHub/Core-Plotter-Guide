---

---
# Core

>[!TIP] **Önemli Bilgi**
>Bu uygulamalar kullanıldığı sırada her seferinde aracın öncelikle ölçülerek çalışılması en önemli noktasıdır. Hataların önlenmesi için ölçülerin bilinmesi ve ona göre aksiyon alınması gerekir. Bu konuda hata yapılmaması açısından dikkat edilmesi gerekir. 

## İlk Kullanımı

**Web Sitesi:** [Core Portal](https://morewithcore.com/)

Siteden önceden Core tarafından alınmış kullanıcı hesabı ile giriş yapıldığında şu şekilde bir arayüz ile karşı karşıya kalıyoruz.

1) Giriş yapılma esnasında bu lokasyon ekranı açılacaktır. 
2) Plotter kesim yapılmadan önce, uygulamanın son sürümü `Download Software` kullanılarak uygulamanın bilgisayara indirilmesi gerekir.

![[download.png|829]]

3) Gerekli istemci ile uygulamanın indirilmesi gerekir.
	1) Windows bilgisayar kullananlar için: `Download for Windows` seçeneği kullanılarak indirme yapılabilir.
	2) MacOS bilgisayar kullananlar için: `Download for Mac` seçeneği kullanılarak ilerlenmesi gerekmektedir. 

>[!INFO] 
>Uygulama içinde zaman zaman güncelleme yapılabilemektedir. Uygulamanın açılmadığı zamanlarda her seferinden tekrardan indirilmelidir. 

***
## Uygulama Arayüzü

Web Editor: [Core Web Portal](https://web.morewithcore.com/search)

Uygulama ilk başlatıdığında şöyle bir arayüz karşımıza çıkmaktadır:

![[filtering.png|570]]

Bu menüde gerekli olan değiştirilmesi önemli olan kısımlar şu şekildedir.

### Ayarlar

Uygulamayı ilk defa kullanıyorsanız fotoğraftaki işaretli opsiyonların aktive edilmesi önerilir:

![[settings.png|740x1500]]

***
#### Measurements (Ölçüm Birimleri)

Bu menüde uygulama Amerika merkezli bir uygulama olduğundan dolayı İmperial sistem kullanmaktadırlar. Bundan dolayı ölçü metriklerinde hata olmaktadır. Bundan dolayı `Measurements`opsiyonu mutlata `milimeters/Square Meters` olarak ayarlanmalıdır.

***
#### Beta Features

Bu kısımda belirli opsiyonlar kullanılara sunulmuştur. Bu opsiyonlar zorunlu değildir ama kullanıldığı taktirde kullanıcıların faydasına opsiyonlar sunmaktadır.

>  [[Core Yazılımı#AI Destekli Parça Yerleştirme - Auto Nest **(N)**|Auto Nest]] opsiyonu en çok kullanılacak opsiyondur.  

***
#### Teknik Destek

Core ekininden teknik destek alınmak istendiği zaman buradaki iletişim bilgileri kullanabilir. Uygulama menüsünde profil fotoğrafına basılarak teknik destek bilgilerine ulaşılabilir. 

Mail: support@morewithcore.com

Tutorial: [Core Eğitim Videoları](https://vimeo.com/showcase/7620276)
![[support.png|640x500]]

Herhangi bir problemle karşılaşıldığında bu opsiyonlar kullanılabilir.

- `Report Software Issue`, bir yazılım hatası ile karşılaşılırsa iletilebilir.
- `Report Plotter Issue`, plotter üzerinde hata ile karşılaşılırsa kullanılmadır. 
- `Request Vehicle/Parts`, herhangi bir aracın kaydı bulunamıyorsa buradan bu opsiyon seçilebilir.  

***
### Menü
 
![[category_box.png|620x500]]

- **Vehicles (Arabalar):** Sistemde kayıtlı olan bütün araçların listelenmesi buradan yapılır. 
- **Cut History (Plotter Kesim Geçmişi)**: Firma içerisinde yapılmış olan bütün plotter kesimlerin geçmişinin listelenmesi Cut History'den sağlanır
- **Saved Boards (Kayıtlı Plotter Kesimler):** Plotter kesim çalışmaları burada listelenir. Önceden kaydedilen çalışmalar burada listelenir. 
- **Cut Boards (Kesim Tahtaları)**: En çok çalışma yapılacak alan burasıdır. Burada kesim üzerinde oynamaların yapıldığı ve çıkacak kesim objesinin uzunluğu buradan öğrenilir. 
- **Analytics (Analiz):** Burası yapılan çalışmaların ne kadar yapıldığını ve ne kadar fire verildiğini listeleyen kısıma denir. Burası kullanılarak Jelatinin ne kadar kullanıldığını ve ne kadar verimle plotter kesim yapıldığı kaydedilmektedir. 

Kesim sırasında sadece 3-5 m kesimler yapılması önerilir. Çünkü kullanılcak metraj büyüdüğü zamanlarda makinede tolerans hatası olabilmektedir. 

***
### Vehicle (Arabalar)

#### Ayrıntılar

Plotter kesim yapılmadan önce aracın seçileceği kütüphane burasıdır. Seçilecek araç yapılmadan önce burada filtreleme yapmak için burayı kullanılırız:

![[filter_catalogue.png|640x400]]

- **Film Type (Film Tipi):** Burada araç PPF filmi yapılacaksa PPF opsiyonu seçilmelidir. TINT opsiyonu da Cam Filmi için kullanılmalıdır. 
- **Market:** Aracın model ülke varyantının seçildiği opsiyondur. Bu opsiyonla şu varyantlara ulaşılabilir:
	- EU
	- USA
	- CH
	- CAN (Canada) vs, 

- **Year:** Araçların Model yıllarının sınıflandırılması yapılırken kullanılır. Araçlar düzenli olarak güncellendiğinden dolayı 2017 model aracın Plotter kesimi 2022 yılında üretilmiş aracın PPF'ine uygun olmaya bilir. Dikkat edilmesi gerekebilir. 
- **Make:** Araç markalarının listelendiği sınıftır
- **Model:** Araçların modellerini bu listede bulunabilir. Bu filtreyi kullanmadan önce make opsiyonun seçili olması gerekir. 
- **Trim:** Araçlar paket paket üretildiğinden dolayı paketlerin araçlar üzerinde farklılık yaşanması durumuna karşı oluşturulmuş seçenektir. Aracın opsiyon paketine göre seçim yapılmalıdır. 

>[!INFO] Bilgi
>**Market** opsiyonun ilk başta seçilmesi önerilmez. Çünkü core yazılımı her zaman her variantın kütüphansine sahip değil. Bundan dolayı her opsiyon arasında ölçüm yaparak ve araç üzerinde kontroller sağlaranarak hareket edilmelidir. 

> Burada öncelikle seçilmesi gereken opsiyon şekli şu şekilde olmalıdır: 
> Make -> Model -> Year -> Market (Opsiyonel)



***
#### Örnek

Buradaki örnekte bir tane aracın PPF yapılması sırasında listelerden seçilme durumu açıklanmıştır:
![[filtering_gif.gif|640x400]]

1) Make: Rolls-Royce 
2) Model: Cullinan
3) Trim: Base
4) Year: 2026
5) Listeye göre variant versionu seçilerek araç kesim kısmına geçişi yapılır. 


***
### Cut Board (Plotter Kesim Arayüzü)

#### Bütün Parçalar (All Parts) 

Kesim tahtası ayarlanırken dikkat edilmesi konular videoda gösterilmiştir. 

<video src="./Media/part_adding.mov" controls width=200></video>


Kesim tahtası ayarlanırken sınıflar bu şekilde listelenmiştir.

![[vehicle_searching.png|740x500]]

> [!TIP] **Dikkat edilecek konular**
> Plotter kesim yapılmadan önce genellikle `Prefer Wrapped Patterns` seçeneği kullanılarak seçim yapılması önerilir. 
> Wrap özelliği dış parçalardan ekstradan et kalınlığı bırakılmak için yapılcan seçenektir. 

***
#### Önceden Ayarlanmış Kesme Tahtaları ve Parça Grupları (Pre Nested Boards & Kits) 

Uygulama durmadan geliştirildiğinden dolayı, uygulamanın kendi onayladığı parça gruplarını toplu halde elde edilebilir. 

Resimdeki örnekte sol parçaların otomatik olarak yerleştirilmiş optimize kesim profilleri gösterilmiştir. 

![[boardsandkits.gif|640x400]]

***
##### Notlar (Notes)

Burada verilen notlarda belirli opsiyonların hakkında önceden eklenmiş notlar hakkında bilgilendirme yapılır. Bazen bazı parçalar uyumlu olmamaktadır. 

> Özellikle Rolls-Royce araçlar bespoke parçalar içerdiğinden dolayı her kesim araca uyumlu olmayabilir. (Özellikler iç tasarımda kullanılcak PPF'ler için geçerlidir.)

***
#### Kesim Tahtası (Cut Board)

Kesim tahtası bütün plotter kesiminin ana kısmıdır. Plotter kesim yapmak için belirli konuların üzerinden geçilecekdir.

Kesim tahtası temel olarak **Paint** ile benzer yapıya sahiptir ama bütün fonksiyonları plotter kesimin daha verimli şekilde yapılabilmesi için geliştirmeler mevcuttur. 

İstenen parçaların kesimleri belirlendikten sonra şöyle bir tane menü ile karşılaşılmaktadır. 

![[cutboard_first_view.png|750]]

Seçilen parçalar listeye atıldıktan sonra böyle bir görsel ile karşılanacaktır. 

***
#### Info Çubuğu

![[properties.png|640x75]]

Info çubuğu, mevcutta bulunan görselde kullanılan parçaların ne kadar uzunluğa dağıtıldığını yazmaktadır.
- **Width Used (Kullanılan Dikey Uzunluk):** Mevcut Cut Board'da toplamda ne kadar dikey alanda yayıldığını gösteren böyledir. 
- **Length Used (Kullanılan Yatay Uzunluk):** Mevcut Cut Board'da alınan parçaların ne kadar yatay alan kapsadığı listelendir. 
- **Sq Meters (Kullanılan Metre Kare):** Toplam parçaların ne kadar metrekare hesapladığını gösteren özelliktir. 
- **Efficiency:** Kullanılan alanın kağıt alanında ne kadar değerlendirildiğini gösteren kısımdır. 

>[!TIPS] Bilgi
>Plotter kesimde hedeflenen %60'ın üstünde olması beklenmektedir. Basit mantıkla kullanılcak PPF malzemesinden kazanç sağlanır ve fire azaltma hedeflenmektedir. 

***
#### Araç Çubukları

Core altyapısında PPF ve Cam Filmi kaplamalarını üretmek amacıyla çeşitli fonksiyonlara sahiptir. Bu bölümde her bir fonksiyonun ne işe yaradığı anlatılacak. 

![[tool_box.png|600]]

***
##### Seçim - Select **(S)**
![[cursor.png|30]]![[cursor_1.png|31]]
Select opsiyonu kullanılarak plotter parçalarının seçilmesinde yardımcı olur. Bu şekilde objelerin kesim tahtasında herhangi bir noktadan başka bir noktaya taşınması sağlanabilir. 

![[cursor_gif.gif|433]]

Length ve Width boylarına bakılarak bir objenin ne kadara yer kapladığı öğrenilebilir. 

![[measurement_properties.png|478]]

***
##### Ekran Kaydırma - Pan **(P)**
![[pan_3.png|32]]![[pan.png|35]]

Pan, çalışma alanındaki objelerin yerini değiştirmeden, sadece sizin o objelere baktığınız kamera açısını veya görüş penceresini kaydırma işlemidir.

![[pan.gif|525]]

***
##### Görünümü Sıfırlama - Reset View **(Z)**
![[grid_1.png|42]]![[grid.png|40]]

Reset View, çalışma alanında yaptığınız tüm Zoom (yakınlaştırma) ve Pan (kaydırma) işlemlerini tek bir hamlede iptal ederek sizi "Ana Ekran" veya "Varsayılan Bakış Açısına" döndüren fonksiyondur.

![[reset_view.gif]]

***
##### AI Destekli Parça Yerleştirme - Auto Nest **(N)**

![[nest.png|44]]
**Auto Nest**, çalışma alanındaki farklı boyut ve şekillerdeki parçaları, belirlenen malzeme (kumaş, metal, folyo vb.) üzerine **minimum fire (atık)** ve **maksimum verimlilikle** otomatik olarak dizen gelişmiş bir optimizasyon algoritmasıdır.

![[auto_nest.gif|762]]

**Ön Koşul:**
Aracı kullanabilmek için öncelikle beta özelliğini aktif etmeniz gerekir:
* `Ayarlar > Beta Ayarları > Auto Nest Beta` (Settings > Beta Settings > Auto Nest Beta) seçeneğini açık konuma getirin.
![[nest_settings.png|844]]

1. **Özelliğe Tıklayın:** Özellik aktifleştirildiğinde, kesim tahtası ekranında **Nest cut board tool** (Kesim tahtası yerleşim aracı) simgesini göreceksiniz.
2. **Yerleşim Modunu Seçin:** Araç içerisinde varsayılan ayarları kullanabilir veya `Custom Fast` (Özel Hızlı) ve `Custom Efficient` (Özel Verimli) seçenekleri arasında geçiş yapabilirsiniz.
3. **Parametreleri Ayarlayın:**
    * `Steps per mm` (milimetre başına adım): Bir parçanın kesim tahtasına yerleştirilmeye çalışılırken ne kadar sıklıkla kontrol edileceğini belirler.
    * `Degrees per step` (Adım başına derece): Parçanın uygun bir boşluk bulmak için her adımda kaç derece döndürüleceğini belirler.
    * `Minimum spacing` (Minimum boşluk): Desenler arasında bırakılacak minimum mesafeyi ayarlar.
4. **Yerleşimi İzleyin (Opsiyonel):** İşlemin nasıl gerçekleştiğini görmek için **Watch nest** (Yerleşimi izle) onay kutusunu işaretleyebilirsiniz. Bu işlem süreci biraz yavaşlatsa da parçaların yerleşimini adım adım görmenizi sağlar.
5. **İşlemi Başlatın:** Ayarlarınızı yaptıktan sonra yerleşim işlemini çalıştırın.


>[!INFO] **Hız ve Verimlilik Dengesi:**  
>Büyük parçalar (örneğin bir tampon parçası) yerleşim algoritmasının daha yavaş çalışmasına neden olabilir. Daha hızlı bir sonuç için `Fast` (Hızlı) ayarını, maksimum malzeme tasarrufu için `Efficient` (Verimli) ayarını tercih edin.

> [!Danger] **Desen Gruplandırma:**
> Nest aracı varsayılan olarak bazı desen gruplarını daha iyi yerleşim sağlamak için parçalayabilir. Eğer desenlerin birlikte kalmasını istiyorsanız, bu desenleri manuel olarak gruplandırın. Bu işlem ayrıca algoritmanın desenleri tek bir blok olarak görmesini sağlayarak yerleşim hızını artırır.

> [!INFO] **Hizalama Payı:** 
> `Minimum spacing` (Minimum boşluk) ayarını kullanmak, fiziksel kesim sırasında plotter cihazının küçük kaymalar yapması (walking) durumunda desenlerin birbirinin üzerine binmesini engeller.

###### Sık Karşılaşılan Sorunlar

* **İşlemin Takılması veya Yavaşlaması:** Eğer kesim tahtasında çok büyük bir parça varsa, algoritma bu parçanın etrafına küçük parçaları yerleştirmek için daha fazla zaman harcar. Bu bir donma değil, hesaplama sürecidir. Büyük panolarda hız sürgüsünü `Fast` yönüne çekmek süreci hızlandıracaktır.W

***
##### Birleşik Parçaları Birbirinden Ayrılması ve Birleştirilmesi - Group - Ungroup - **(TY)**
![[group_ungroup.png|78]]

**Group**, seçilen birden fazla bağımsız nesneyi veya parçayı tek bir ünite gibi hareket edecek şekilde birbirine bağlama işlemidir. **Ungroup** ise bu bağımlılığı ortadan kaldırarak her bir parçayı tekrar bağımsız hale getirir.

![[move.gif]]

> [!INFO] Bilgi
> Genelikle core platformunda plotter ürünleri yansıtılırken krom kaplamalardada parça görüntüsünü oluşturabiliyor. Bundan dolayı belirli paraçların ayrılması plotter cihazının çıkmasını sağlar. 

***
##### Parça Çoğaltma - Duplicate - **(D)**

Parça çoğaltma **(Duplicate)** birden fazla parça çıkartmak için kullanılır.

![[duplicate.gif|367]]

>[!INFO] Bilgi
> Bu seçenek *(Duplicate)* aynı özellikteki bir parça üzerinde düzenleme yapıldığında yapılan işlemleri tekrarlamak için kullanılmaktadır. 

***
##### Obje Silme - Delete - **(Backspace)**

Çizimlerin silinmesinde kullanılır. 

![[remove.gif]]

***
##### Gizleme - Hide - **(O)**
![[hide_1.png|34]]
![[hide.png]]

Gizleme bu uygulamada en önemli özelliklerden birisidir. 

Bazı parçalarda kesilmesi istenmeyen bölümler bulunmaktadır, mesela sensör noktaları, benzin kapakları veya bazı parçaların referans gösterimi bulunmaktadır. Bunları gizlemek için kullanılan opsiyondur. 

**Tack Points On** - Bu özellik malzemenin hangi sırayla araç üzerine yerleştirmesini/tutturmasını kılavuz olarak gösteren opsiyondur. Bu opsiyonun açılıp ve kapatılması kesim üzerinde etkisi olmaz. 

![[suggested_points.gif|528]]

> [!DANGER] Dikkat Edilmesi Gereken Konular
> Eğer parçanın nasıl yerleştirilmesi konusunda sorun yaşanıyorsa mutlaka **Tack Points On** seçeneğinde gösterildiği gibi yerleşimi yapınız. Bu en optimal PPF kalıbının oturmasını sağlayacaktır. 

**All Badges On** - Bu opsiyon deaktive edildiğinde, eğer malzemede logo için ayrılan kesim alanı varsa yazılım tarafından kesim edilmesi iptal edilir. 

**All Sensors On** - Bu opsiyon deaktive edildiğinde, eğer malzemede sensör için ayrılan kesim alanı varsa yazılım tarafından kesim edilmesi iptal edilir.

**All Cutouts On** - Bu opsiyon deaktive edildiğinde, eğer malzemede kesilecek bölge varsa örneğin depo kapağı için ayrılan kesim alanı varsa yazılım tarafından kesim edilmesi iptal edilir.

***
##### Wrap (Sarma) Aracı Kullanımı - **(W)**
![[wrap_1.png|37]]![[wrap.png|35]]
**Wrap (Sarma)** aracı, mevcut desen seçenekleri arasında uygun bir sarma tipi bulunmadığında veya mevcut desenin sarılma şeklini değiştirmek istediğinizde, kendi özel sarmalarınızı kolayca eklemenizi sağlar.

![[wrap.gif]]


1.  **Cut Board** (Kesim Paneli) üzerinde **Wrap** (Sarma) aracını seçin.
2.  Aracı seçtikten sonra karşınıza çıkan seçenekler üzerinden sarma özelliklerini yapılandırın:
    *   **Corner type** (Köşe tipi)
    *   **Corner radius** (Köşe yarıçapı)
    *   **Wrap depth** (Sarma derinliği)
3.  Sarmayı yerleştirmek için desen üzerinde sarmayı başlatmak istediğiniz noktaya ve ardından bitirmek istediğiniz noktaya tıklayın.
4.  Sarmayı oluşturduktan sonra şu düzenlemeleri yapabilirsiniz:
    *   Sarmanın desenin hangi tarafında duracağını değiştirmek için **Invert** (Ters Çevir) seçeneğini kullanın.
    *   Sarmayı tamamen kaldırmak için **Remove** (Kaldır) seçeneğini kullanın.
5.  İşlemi tamamlamak için sarmayı mevcut haliyle doğrudan uygulamada düzenleyin.

***
##### Parçaları Kesme, Weld (Kaynatma/Birleştirme) Aracı ile Desenleri Birleştirme 
![[weld.png|40]]![[chop.png|41]]
![[chop.gif]]
**Kesim panosu (cut board)** üzerinde yer alan `Weld` (kaynatma/birleştirme) aracı, iki ayrı deseni birleştirerek tek bir parça haline getirmenize olanak tanır. Bu özellik, özellikle bir desenin bir yarısında yapılan değişiklikleri diğer yarıya simetrik olarak aktarmak istediğinizde kullanışlıdır.


1.  Mevcut deseni ayırın (split).
2.  Değişiklik yapılan parçayı çoğaltın (duplicate) ve ardından diğer taraf için aynalayın (mirror).
3.  İki parçayı, aralarında hafif bir üst üste binme (overlap) olacak şekilde yan yana getirin.
4.  Parçaları kaydırırken **Shift** tuşuna basılı tutun; bu işlem parçaların birleşim noktasında otomatik olarak birbirine kenetlenmesini (snap) sağlayacaktır.
5.  Birleştirmek istediğiniz her iki deseni de seçili hale getirin.
6.  `Weld` (kaynatma) komutunu seçerek desenleri tek bir bütün halinde birleştirin.


> [!INFO] Bilgi
> **Shift** tuşunu kullanmak, parçaların milimetrik olarak doğru noktadan birbirine tutunmasını (snap) sağlar.

> [!WARNING]  Uyarı
> `Weld` işleminin gerçekleşmesi için iki desenin birbiriyle mutlaka az da olsa temas etmesi veya üst üste binmesi (overlap) gerekir.

***
##### Kolay Düzenleme - EasyEdit - **(Q)**

EasyEdit aracı, kesim panosu üzerindeki basit desenlerin uzunluklarında hızlı ve hassas ayarlamalar yapmak için kullanılır. Bu araç sayesinde desenlerin boyutlarını manuel olarak belirlediğiniz ölçülerde değiştirebilirsiniz.

![[easy_edit.gif]]


1. Araç panelinden **EasyEdit** aracına tıklayın.
2. Düzenlemek istediğiniz deseni seçin.
3. Desenin uzunluğunu artırmak veya azaltmak için ekranda beliren okları kullanın.
4. Değişikliklerin daha büyük adımlarla gerçekleşmesini istiyorsanız, `nudge amount` (kaydırma miktarı) değerini ihtiyacınıza göre yükseltin.
5. Ayarlamalar tamamlandığında, sağ üst köşede bulunan **Apply** (Uygula) butonuna tıklayarak işlemi onaylayın.


> [!INFO] Bilgi
>  **EasyEdit**, desenin köşelerini ve kenarlarını otomatik olarak algılayarak `node` (düğüm) noktaları oluşturur.

> [!INFO] Bilgi
>  Eğer otomatik yerleştirilen düğümlerin konumunu beğenmezseniz, ilgili düğümü seçip **Delete** tuşuna basarak silebilir ve daha uygun bir konuma manuel olarak yeni bir düğüm ekleyebilirsiniz.

> [!INFO] Bilgi
> Kendi düğümlerinizi eklemek, EasyEdit aracına desenin kenarlarının tam olarak nerede bittiğini daha doğru bir şekilde tanımlamanıza yardımcı olur.

***
##### Outline (Anahat) Aracı ile Desen Boyutlandırma

Bu kılavuz, kesim panosu üzerindeki bir desenin tamamını "Outline" aracını kullanarak nasıl büyütebileceğinizi veya küçültebileceğinizi açıklamaktadır.

![[scale.gif]]

1. Menüden **Outline** (Anahat) aracını seçin.
2. İşlem yapmak istediğiniz deseni seçin.
3. `Scale` (Ölçek) ayarı ile desenin boyutunu ne kadar artırmak veya azaltmak istediğinizi belirleyin.
4. Boyutlandırma yönüne karar verin:
   - Boyutu artırmak için `Outline` (Dış hat) seçeneğini kullanın.
   - Boyutu azaltmak için `Inline` (İç hat) seçeneğini kullanın.
5. Orijinal hattı korumak isterseniz `Keep original` (Orijinali koru) seçeneğini aktif hale getirin. Bu, yeni oluşturulan hattın yanında orijinal çizgiyi de muhafaza eder.
6. İşlemi tamamlamak için **Apply** (Uygula) butonuna tıklayın.


> [!INFO] Bilgi 
> `Keep original` seçeneği seçildiğinde, cihaz hem eski deseni hem de yeni oluşturulan boyutlandırılmış çizgiyi aynı anda ekranda tutar.
   
***
##### Düğüm Düzenleme (Node Editing)

Bu bölüm, bir desen üzerinde tam kontrol sağlamak için "cut board" üzerinde düğümlerin (nodes) nasıl düzenleneceğini kapsar. Bu işlem sayesinde desenlerin hatlarını daha keskin veya daha kavisli hale getirebilirsiniz.

![[edit_node.gif]]

1.  Düzenlemeye başlamak için **Edit Node** (Düğüm Düzenle) aracını seçin.
2.  Aşağıdaki parametreleri ihtiyacınıza göre yapılandırın:
    *   `Position` (Konum): Bir düğümün ne kadar taşındığını gösterir.
    *   `Nudge Amount` (Kaydırma Miktarı): Klavye üzerindeki ok tuşlarını kullandığınızda bir düğümün hareket edeceği mesafeyi belirler.
    *   `Total Nudge` (Toplam Kaydırma): Bir düğümün taşındığı toplam mesafeyi görüntüler.
3.  Düzenlemek istediğiniz deseni seçin.
4.  Çalışma alanında gezinmek için farenin orta tuşunu kullanarak yakınlaştırma (zoom in), uzaklaştırma (zoom out) veya kaydırma (pan) işlemlerini yapın.
5.  Düğüm seçimi gerçekleştirin:
    *   Tekli seçim için düğüm üzerine tıklayın.
    *   Çoklu seçim için **Ctrl** tuşuna basılı tutarak tıklayın veya bir seçim kutusu sürükleyerek alanı tarayın.
6.  Seçili düğümleri kaldırmak için klavyeden **Delete** tuşuna basın.
7.  Düğümleri hareket ettirdiğinizde, eski konumlarını belirten bir "ghost line" (hayalet çizgi) görünecektir.
8.  İhtiyaca göre düğüm tipini daha keskin veya daha kavisli olacak şekilde değiştirin.
9.  İşlemi tamamladığınızda tekrar **Select** (Seçim) aracına geri dönün.


> [!INFO] Bilgi 
> Düğüm tipini değiştirerek desenin köşelerini yumuşatabilir veya daha belirgin hale getirebilirsiniz.

> [!WARNING] Uyarı
> Düğümleri sildiğinizde desenin genel hattı değişecektir; "ghost line" (hayalet çizgi) özelliği, yaptığınız değişikliği orijinal hatla kıyaslamanıza yardımcı olur.

***
##### Cutboard Ölçüm Aracı (Measurement Tool) Kullanımı **(Shift + M)**
![[measure.png]]
Bu bölümde, Cutboard üzerinde yer alan ölçüm aracının (measurement tool) temel işlevleri, çizgi oluşturma ve düzenleme yöntemleri anlatılmaktadır.

![[measure.gif]]

1.  **Çizgi Oluşturma:** Ölçüm aracını kullanarak panel üzerinde serbestçe çizgiler çizebilirsiniz.
2.  **Hizalama (Snap):** Çizgileri farklı desenlere veya noktalara `snap` (hizalama/yapışma) özelliği ile tam doğrulukla yerleştirebilirsiniz.
3.  **Çizgileri Düzenleme:** Mevcut bir çizgiyi seçerek uç noktalarını tek tek hareket ettirebilir veya çizginin tamamını farklı bir konuma taşıyabilirsiniz.
4.  **Çoklu Seçim ve Silme:** 
    *   Birden fazla çizgiyi aynı anda seçmek için **Ctrl** tuşuna basılı tutun.
    *   Seçili çizgileri kaldırmak için **Delete** veya **Backspace** tuşlarını kullanın.
5.  **Hassas Değer Girişi:** Çizgileriniz için belirli `length` (uzunluk) veya `angle` (açı) değerlerini klavyenizden manuel olarak girerek tam ölçülü işlemler gerçekleştirebilirsiniz.

> [!INFO] Bilgi
>  Ölçüm aracı (measurement tool) halen geliştirme aşamasında (work in progress) olan bir özelliktir; bu nedenle kullanım sırasında arayüzde güncellemelerle karşılaşabilirsiniz.

***

##### Kesim Paneli Üzerinde Desen Dönüştürme İşlemleri
![[edit_tools.png|198]]
Kesim paneli (cut board), desenleriniz üzerinde temel dönüştürme (transformation) işlemlerini hızlıca yapmanıza olanak tanıyan araçlar sunar. Bu bölümde desenleri döndürme, çoğaltma, aynalama ve panel yönetimi adımları açıklanmaktadır.

**Özellikler:**
1.  **Desen Döndürme (Rotate):** 
    *   Bir deseni seçin ve **90 Derece Döndürme** araçlarını kullanarak saat yönünde veya saat yönünün tersine döndürme işlemini gerçekleştirin.
    *   Alternatif olarak, desenin bir köşesini seçip sürükleyerek manuel döndürme yapabilirsiniz.
2.  **Çoğaltma (Duplicate):** Seçili bir desenin kopyasını oluşturmak için **Çoğalt** aracını kullanın.
3.  **Aynalama (Mirror):** Deseni simetrik olarak çevirmek için **Aynala** aracını kullanın. Bu işlem, aracın bir tarafı için hazırlanan desen değişikliklerini diğer tarafa hızlıca uygulamak için kullanışlıdır.
4.  **Silme (Delete):** Seçili olan deseni panelden kaldırmak için **Sil** aracını kullanın.
5.  **Paneli Temizle (Clear):** Kesim panelindeki tüm desenleri tek seferde kaldırmak için **Temizle** (clear) aracını kullanın.
6.  **Geri Al ve Yeniden Yap (Undo/Redo):** Yaptığınız işlemleri geri almak veya iptal edilen işlemi tekrarlamak için **Geri Al** ve **Yeniden Yap** komutlarını kullanın.

> [!TIP] İpucu
>  Manuel döndürme işlemi sırasında **Shift** tuşuna basılı tutarsanız, döndürme açısı `15` derecelik artışlarla (increments) kilitlenerek daha hassas kontrol sağlar.

***

#### Uygulama ile ile Plotter Cihazın Konumunun Tespit Edilmesi

Videoda Plotter Cihazı ve Uygulamanın nasıl izdüşüm çıkardığı anlatılmıştır.   

<video src="./Media/plotter_referance_line.mov" controls width=400></video>

## Summa Plotter - Konfigurasyon

>[!IMPORTANT] ÖNEMLİ
>Her çalışma sırasında **Core** uygulamasının verdiği ölçüler ile arabanın/parçanın gerçek boyut değerlerinin incelenmesi gerekmektedir.
>![[measuring_gif.gif|400]]


![[summa_1.png|227]]

Görselde 4 farklı kutucuk ve 4 farklı özellik karşımıza çıkmaktadır. 
### Boyutların değerleri 
Burada `50000 x 1492 mm` olarak belirtilmiştir. Bu şunu anlatmaktadır: 
- Plotter cihazı dikey eksende `50000 mm`  hareket edebilmektedir.
- Yatay eksende yatay eksende `1492 mm` hareket edebilmektedir.
### Bıçak Kesim 
Kesimin tipinin belirtmesinde kullanılan işarettir. Plotter kesim yapılacağından dolayı böyle gösterilmektedir. 
### Hız İşareti 
kesimin ne kadar hızlı yapılcağını belirten göstergeye denir. Plotter hızı 50mm/s ve katları olacak şekilde arttırılabilir. 
- Plotter kesim cihazının genellikle bıçak kullandığından dolayı belirli bir ömürü bulunmaktadır. 
- **Yüksek hızda kesim yapıldığında** bıçaklar malzemenin üzerinde hızlı hareket edeceğinden dolayı malzemenin kaynasına sebep olabilir. 
- **Düşük hızda kesim yapıldığında** bıçaklar düşük hızlarda çalışacaktır. Bundan dolayı **cam filmi/TINT** gibi malzemelerde sorunsuzluk için çok önemlidir.
![[summa_velocity.png|234]]

>[!INFO] Bilgi
> - [i] **Plotter PPF** kesim için ideal hız 150mm/s
> - [i] **Cam Film'i/TINT** kesimi için ideal hız 50mm/s seçilmelidir

### Bıçak baskı ağırlığı
Plotter kesiminin parçanın malzemeye baskı oluşturacağı ağırlığın belirlenmesinde kullanılır. Yapılmak istenen press ağırlığı `g(gram)` şeklinde istenilen değerde girilebilir.

![[summa_pressure.png|240]]

>[!NOTE] Not
>- Burada kesin yapılacak press ağırlığının değeleri girilirken **play** ▶️ tuşu kullanılarak küçük testler yapılması gerekmektedir. 
> - Ağırlık testi **başarılı olduğu** durumda **onay** ☑️ tuşu kullanılarak kesim cihazı test edilmelidir. 
> - Yapılan ayarları eskiye döndürmek istenen durumda **red✖️**tuşu kullanılarak eski ayarlara dönülebilir

### Malzemenin Başlangıç Konumun Belirlenmesi

Malzemelerin kaydırılması **↔️↕️ simgesi** üzerine tıklanarak plotter malzemesinin;
- ileri
- geri
- sağ
- sol’a
	hareketinin sağlanması konusunda yardımcı olur. 

![[summa_origin.png|214]]

Seçenek seçildikten sonra plotter kesimin başlancağı merkez noktası belirlenmiş olur. Böylelikler plotter kesimin başlancağı bölge belirlenmiş olur.

>[!WARNING] Önemli
>Görselde gösterildiği üzere plotter kesim yapılacak malzemenin şekildeki gibi ayrılılması lazımdır. Bu malzeme bu şekilde hareket edilmesi parçanın yerinden oynamasını engelleyecektir.
>
>![[ppf_suggested_rolling.jpg|300x430]]
