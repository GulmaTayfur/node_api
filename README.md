# Node Farm Projesi

Bu proje, Node.js ve Express.js kullanarak basit bir ürün listeleme web uygulaması geliştirmeyi amaçlamaktadır. Uygulama, çeşitli ürünlerin organik olup olmadığını ve temel bilgilerini göstermektedir.

## Proje Yapısı

- `index.js`: Uygulamanın ana giriş noktası. HTTP sunucusunu oluşturur ve istekleri yönlendirir.
- `modules/replaceTemplate.js`: HTML şablonlarını veri ile değiştiren yardımcı modül.
- `templates/`: HTML şablon dosyalarını içerir.
  - `overview.html`: Ürünlerin listelendiği genel görünüm sayfası.
  - `product.html`: Tek bir ürünün detaylarının gösterildiği sayfa.
  - `card.html`: Her bir ürün için kart şablonu.
- `dev-data/data.json`: Ürün verilerini içeren JSON dosyası.

## Kullanım

### Ürün Kartları

Her ürün için bir kart oluşturulur ve şu bilgileri içerir:

- Ürün Adı
- Miktar
- Fiyat
- Menşei
- Besin Değerleri
- Açıklama
- Organik olup olmadığı

### Organik Ürünler

Organik ürünler, kart üzerinde özel bir işaret ile belirtilir. Organik olmayan ürünler için ise "not-organic" sınıfı kullanılır ve bu sınıf CSS ile görünmez hale getirilir.

# Ekran Görüntüsü

![](node_api.gif)
