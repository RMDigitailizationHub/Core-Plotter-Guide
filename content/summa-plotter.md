---
title: Summa Plotter — Konfigürasyon
tags:
  - summa
  - plotter
  - guide
date: 2026-03-16
---

# Summa Plotter — Konfigürasyon

 [[core-kesim-tahtasi|← Kesim Tahtası]] | [[index|Ana Sayfa]]

---

> [!IMPORTANT] ÖNEMLİ
> Her çalışma sırasında **Core** uygulamasının verdiği ölçüler ile arabanın/parçanın gerçek boyut değerlerinin karşılaştırılması zorunludur.

![[summa_1.png|227]]

---

## Boyut Değerleri

Görselde `50000 x 1492 mm` olarak belirtilen değerler şunu ifade eder:

| Eksen | Değer | Açıklama |
|---|---|---|
| Dikey | 50000 mm | Plotter cihazının dikey eksende hareket aralığı |
| Yatay | 1492 mm | Plotter cihazının yatay eksende hareket aralığı |

---

## Bıçak Kesim

Kesim tipinin belirtilmesinde kullanılan işarettir. Plotter kesim yapılacağından bu şekilde gösterilmektedir.

---

## Hız Ayarı

Plotter hızı **50 mm/s ve katları** şeklinde artırılabilir.

![[summa_velocity.png|234]]

> [!INFO] İdeal Hız Değerleri
> - **PPF kesimi** için ideal hız: **150 mm/s**
> - **Cam Filmi / TINT kesimi** için ideal hız: **50 mm/s**

### Hız Seçiminin Etkileri

| Durum          | Sonuç                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| **Yüksek hız** | Bıçaklar malzeme üzerinde hızlı hareket eder → malzemede kaynama riski    |
| **Düşük hız**  | Bıçaklar düşük hızda çalışır → özellikle cam filmi kesiminde daha güvenli |

---

## Bıçak Baskı Ağırlığı

Plotter kesiminde bıçağın malzemeye uygulayacağı baskı miktarını belirler. İstenilen değer `g (gram)` cinsinden girilebilir.

![[summa_pressure.png|240]]

> [!NOTE] Test Prosedürü
> - Ağırlık değeri girilirken **▶️ (play)** tuşu ile küçük testler yapılmalıdır.
> - Test **başarılı** ise **☑️ (onay)** tuşu ile kesim cihazı test edilmelidir.
> - Eski ayarlara dönmek için **✖️ (red)** tuşu kullanılabilir.

---

## Malzemenin Başlangıç Konumunun Belirlenmesi

**↔️↕️ simgesi** üzerine tıklanarak plotter malzemesinin aşağıdaki yönlerde hareketi sağlanır:

- İleri / Geri
- Sağ / Sol

![[summa_origin.png|214]]

Seçenek belirlendikten sonra plotter kesiminin başlayacağı merkez noktası sabitlenmiş olur.

> [!WARNING] Önemli
> Plotter kesim yapılacak malzeme aşağıdaki görselde gösterildiği gibi hazırlanmalıdır. Malzemenin bu şekilde sabitlenmesi, parçanın yerinden oynamasını önleyecektir.
>
> ![[ppf_suggested_rolling.jpg|300x430]]

---

[[core-kesim-tahtasi|← Kesim Tahtası]] | [[index|Ana Sayfa]]
