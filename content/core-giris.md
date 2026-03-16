---
title: Core — Giriş ve Arayüz
tags:
  - core
  - setup
  - guide
date: 2025-01-01
---

# Core — Giriş ve Arayüz

← [[index|Ana Sayfa]]

---

## İlk Kullanımı

**Web Sitesi:** [Core Portal](https://morewithcore.com/)

Siteden önceden Core tarafından alınmış kullanıcı hesabı ile giriş yapıldığında portal arayüzü karşımıza çıkar.

1. Giriş yapılma esnasında lokasyon ekranı açılacaktır.
2. Plotter kesim yapılmadan önce, uygulamanın son sürümü `Download Software` kullanılarak bilgisayara indirilmesi gerekir.

![[download.png|829]]

3. Gerekli istemciye göre indirme yapılması gerekir:
   - **Windows** için: `Download for Windows`
   - **MacOS** için: `Download for Mac`

> [!INFO]
> Uygulamaya belirli tarihlerde güncelleme yapılabilmektedir. Uygulamanın açılmadığı zamanlarda her seferinde tekrardan indirilmelidir.

---

## Uygulama Arayüzü

**Web Editor:** [Core Web Portal](https://web.morewithcore.com/search)

Uygulama ilk başlatıldığında aşağıdaki arayüz karşımıza çıkmaktadır:

![[filtering.png|570]]

> [!TIP] Öneri
> İlk başlangıçta uygulamada belirli ayarların değiştirilmesi önerilir.

---

## Ayarlar

Uygulamayı ilk defa kullanıyorsanız aşağıdaki işaretli opsiyonların aktive edilmesi önerilir:

![[settings.png|740x1500]]

---

### Measurements (Ölçüm Birimleri)

Uygulama Amerika merkezli olduğundan dolayı varsayılan olarak **Imperial sistem** kullanmaktadır. Bu durum ölçü metriklerinde hataya yol açar.

> [!DANGER] Zorunlu Ayar
> `Measurements` opsiyonu mutlaka **milimeters / Square Meters** olarak ayarlanmalıdır.

---

### Beta Features

Bu kısımda belirli opsiyonlar kullanıcılara sunulmuştur. Zorunlu değildir ancak kullanıldığında fayda sağlar.

En çok kullanılacak Beta özelliği: [[core-kesim-tahtasi#AI Destekli Parça Yerleştirme - Auto Nest **(N)**|Auto Nest]]

---

### Teknik Destek

Core ekibinden teknik destek almak için uygulama menüsünde profil fotoğrafına basılarak iletişim bilgilerine ulaşılabilir.

- **Mail:** support@morewithcore.com
- **Tutorial:** [Core Eğitim Videoları](https://vimeo.com/showcase/7620276)

![[support.png|840x500]]

Karşılaşılan problemlere göre kullanılabilecek seçenekler:

| Seçenek                 | Kullanım Amacı                     |
| ----------------------- | ---------------------------------- |
| `Report Software Issue` | Yazılım hatası bildiriminde        |
| `Report Plotter Issue`  | Plotter üzerinde hata bildiriminde |
| `Request Vehicle/Parts` | Araç kaydı bulunamıyorsa           |


---

## Menü

![[category_box.png|620x500]]

| Menü Öğesi       | Açıklama                                        |
| ---------------- | ----------------------------------------------- |
| **Vehicles**     | Sistemde kayıtlı bütün araçların listesi        |
| **Cut History**  | Firma içinde yapılmış tüm plotter kesim geçmişi |
| **Saved Boards** | Önceden kaydedilen kesim çalışmaları            |
| **Cut Boards**   | Ana çalışma alanı — kesim ve boyut ayarları     |
| **Analytics**    | Fire oranı ve verimlilik istatistikleri         |

> [!TIP] Öneri
> Kesim sırasında sadece **3–5 m** aralığında kesimler yapılması önerilir. Daha büyük metrajlarda makinede tolerans hatası oluşabilmektedir.

---

 [[index|← Ana Sayfa]] | Sonraki: [[core-arac-secimi|Araç Seçimi →]]
