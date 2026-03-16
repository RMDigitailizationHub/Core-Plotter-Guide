---
title: Core — Araç Seçimi ve Katalog
tags:
  - core
  - vehicles
  - guide
date: 2026-03-16
---

# Core — Araç Seçimi ve Katalog

[[core-giris|← Giriş ve Arayüz]] | [[index|Ana Sayfa]]

---

## Vehicle (Araç Kütüphanesi)

Plotter kesim yapılmadan önce araç seçiminin yapıldığı kütüphane burasıdır.

![[filter_catalogue.png|760x400]]

---

## Filtreleme Seçenekleri

### Film Type (Film Tipi)
- **PPF** → Araç boya koruma filmi için
- **TINT** → Cam filmi için

### Market
Aracın model ülke varyantını belirler:

| Varyant | Açıklama |
|---|---|
| EU | Avrupa |
| USA | Amerika |
| CH | İsviçre |
| CAN | Kanada |

> [!INFO] Bilgi
> **Market** opsiyonunun ilk başta seçilmesi önerilmez. Core yazılımı her varyantın kütüphanesine sahip olmayabilir. Her opsiyon arasında ölçüm yaparak ve araç üzerinde kontroller sağlayarak hareket edilmelidir.

### Year (Yıl)
Araçlar düzenli olarak güncellendiğinden dolayı, örneğin 2017 model aracın plotter kesimi 2022 yılında üretilmiş araca uygun olmayabilir. Dikkat edilmesi gerekir.

### Make (Marka)
Araç markalarının listelendiği sınıftır.

### Model
Araçların modelleri bu listede bulunur.

> [!WARNING] Dikkat
> Bu filtreyi kullanmadan önce **Make** opsiyonunun seçili olması gerekir.

### Trim (Paket)
Araçlar paket paket üretildiğinden, paketlerin araçlar üzerindeki farklılıklarına karşı oluşturulmuş seçenektir. Aracın opsiyon paketine göre seçim yapılmalıdır.

---

## Önerilen Seçim Sırası

> Doğru seçim sırası aşağıdaki gibi olmalıdır:
>
> **Make → Model → Year → Market** *(opsiyonel)*

---

## Örnek Senaryo

Aşağıdaki örnekte bir aracın PPF yapılması için listelerden seçilme süreci gösterilmiştir:

![[filtering_gif.gif|640x400]]

| Adım     | Seçim                                                          |
| -------- | -------------------------------------------------------------- |
| 1. Make  | Rolls-Royce                                                    |
| 2. Model | Cullinan                                                       |
| 3. Trim  | Base                                                           |
| 4. Year  | 2026                                                           |
|          | Listeye göre varyant versiyonu seçilerek kesim kısmına geçilir |

---

[[core-giris|← Giriş ve Arayüz]] | Sonraki: [[core-kesim-tahtasi|Kesim Tahtası →]]
