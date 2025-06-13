export interface iPhoneModel {
  model: string
  slug: string
  meta_title: string
  meta_description: string
  h1_baslik: string
  cihaz_aciklama: string
  ozellikler: {
    ekran: string
    islemci: string
    ram: string
    batarya: string
    kamera: string
    dayaniklilik?: string
    baglanti?: string
  }
  yaygin_arizalar: string[]
  cozum_onerileri: string[]
  sss: Array<{
    soru: string
    cevap: string
  }>
  kullanici_yorumlari: string[]
}

export const iPhoneData: iPhoneModel[] = [
  {
    model: "iPhone 8",
    slug: "iphone-8",
    meta_title: "iPhone 8 Kronik Sorunlar ve Onarım Fiyatları",
    meta_description:
      "iPhone 8'de sıkça karşılaşılan batarya, aşırı ısınma, Touch ID ve ses sorunları için detaylı analiz, çözüm önerileri ve güncel onarım fiyatları.",
    h1_baslik: "iPhone 8 Arıza Tespiti ve Onarım Hizmetleri",
    cihaz_aciklama:
      "Eylül 2017'de piyasaya sürülen iPhone 8, 4.7 inç Retina IPS LCD ekranı ve A11 Bionic çipiyle klasik iPhone tasarımını sevenler için modern bir deneyim sunar. Cam arka yüzeyi kablosuz şarja olanak tanırken, Touch ID özelliği güvenli ve hızlı bir kullanım sağlar.",
    ozellikler: {
      ekran: "4.7 inç Retina IPS LCD",
      islemci: "Apple A11 Bionic",
      ram: "2GB RAM",
      batarya: "1821 mAh",
      kamera: "12MP Tek Ana Kamera",
      dayaniklilik: "IP67 Suya ve Toza Dayanıklılık",
    },
    yaygin_arizalar: [
      "Batarya performansının kötü olması ve pil sağlığının hızlı düşmesi.",
      "Cihazın normal kullanımda veya şarj sırasında aşırı ısınması.",
      "Yazılım güncellemelerini yapamama veya güncelleme sonrası yavaşlama.",
      "Görüşme sırasında sesin karşıya gitmemesi veya cızırtılı olması.",
      "Ana menü (Home) tuşu ve Touch ID sensöründe yaşanan hassasiyet kaybı.",
    ],
    cozum_onerileri: [
      "Batarya ömrü için Düşük Güç Modu'nu aktif kullanın ve arka plan uygulama yenilemesini sınırlayın.",
      "Isınma için şarj esnasında cihazı kullanmaktan kaçının ve orijinal aksesuarlar tercih edin.",
      "Ses sorunları için hoparlör ve mikrofon deliklerini yumuşak bir fırça ile nazikçe temizleyin.",
      "Performans sorunları için gereksiz dosyaları silerek depolama alanı açın ve cihazı periyodik olarak yeniden başlatın.",
    ],
    sss: [
      {
        soru: "iPhone 8 hala güncelleme alıyor mu?",
        cevap:
          "iPhone 8, iOS 16 ana sürümünü almıştır ve artık yeni ana güncellemeleri desteklememektedir. Ancak önemli güvenlik güncellemelerini almaya devam edebilir.",
      },
      {
        soru: "iPhone 8 parmak izi okuyucu (Touch ID) neden çalışmaz?",
        cevap:
          "Bu durum sensör yüzeyinin kirli veya nemli olmasından, yazılımsal bir hatadan veya donanımsal bir arızadan kaynaklanabilir. Temizleme ve yeniden başlatma sonrası sorun devam ederse servis müdahalesi gerekir.",
      },
    ],
    kullanici_yorumlari: [
      "Batarya sağlığı bir yılda çok düştü, şarjı bir günü zor çıkarıyor.",
      "Konuşurken sesim karşıya gitmiyor, sürekli mikrofon sorunu yaşıyorum.",
      "Son güncellemeden sonra telefon hissedilir derecede yavaşladı.",
    ],
  },
  {
    model: "iPhone 8 Plus",
    slug: "iphone-8-plus",
    meta_title: "iPhone 8 Plus Batarya, Kamera ve Donma Sorunları",
    meta_description:
      "iPhone 8 Plus modelinde yaşanan batarya şişmesi, arka kamera arızaları, donma, kasılma ve ses sorunları için onarım bilgileri ve kullanıcı yorumları.",
    h1_baslik: "iPhone 8 Plus Yaygın Arızaları ve Kullanıcı Şikayetleri",
    cihaz_aciklama:
      "iPhone 8 ile birlikte tanıtılan Plus modeli, 5.5 inç Retina IPS LCD ekrana, A11 Bionic çipe ve Portre Modu sunan 12MP çift arka kameraya sahiptir.",
    ozellikler: {
      ekran: "5.5 inç Retina IPS LCD",
      islemci: "Apple A11 Bionic",
      ram: "3GB RAM",
      batarya: "2691 mAh",
      kamera: "12MP Çift Kamera (Geniş, Telefoto)",
      dayaniklilik: "IP67 Suya ve Toza Dayanıklılık",
    },
    yaygin_arizalar: [
      "Batarya performansının kötü olması, şarj sırasında aşırı ısınma.",
      "WhatsApp video kayıtlarında sesin cızırtılı çıkması ve kulaklıkta çatırtı.",
      "Özellikle iOS güncellemelerinden sonra cihazda yaşanan donma ve kasmalar.",
      "Arka kameranın zaman zaman çalışmaması veya çekilen fotoğrafların bulanık çıkması.",
      "Zamanla bataryanın şişerek kasaya baskı yapması.",
    ],
    cozum_onerileri: [
      "Isınmayı azaltmak için şarj esnasında kılıfı çıkarın ve cihazı yoğun kullanmayın.",
      "Ses cızırtısı için hoparlör ve mikrofon deliklerinin temiz olduğundan emin olun.",
      "Donma sorunları için Ayarlar menüsünden 'Tüm Ayarları Sıfırla' seçeneğini deneyin (verileriniz silinmez).",
      "Pil şişmesi güvenlik riski oluşturur, hemen yetkili servise başvurun.",
    ],
    sss: [
      {
        soru: "iPhone 8 Plus'ın normal 8'den farkı nedir?",
        cevap:
          "Daha büyük ekran, daha yüksek kapasiteli batarya ve Portre Modu çekimler yapabilen çift arka kamera sistemine sahiptir.",
      },
      {
        soru: "iPhone 8 Plus batarya kapasitesi ne kadar?",
        cevap:
          "Yaklaşık 2691 mAh kapasiteli bir bataryaya sahiptir, bu da standart iPhone 8'den daha uzun bir kullanım süresi sunar.",
      },
    ],
    kullanici_yorumlari: [
      "WhatsApp'ta video çekerken sesim o kadar cızırtılı çıkıyor ki anlaşılmıyor.",
      "Son güncellemeden sonra telefon donmaya başladı, uygulamalar arası geçiş işkence oldu.",
      "Arka kameram bazen hiç açılmıyor, sadece siyah ekran görüyorum.",
    ],
  },
  {
    model: "iPhone X",
    slug: "iphone-x",
    meta_title: "iPhone X Face ID ve Ekran Sorunları | Onarım Bilgileri",
    meta_description:
      "iPhone X'te en sık rastlanan Face ID arızası, OLED ekranda yeşil çizgi sorunu ve batarya problemleri için kesin çözümler ve SSS.",
    h1_baslik: "iPhone X Kronik Arızaları: Face ID, Ekran ve Performans",
    cihaz_aciklama:
      "Kasım 2017'de devrimsel bir tasarımla çıkan iPhone X, 5.8 inç Super Retina OLED ekrana ve yüz tanıma teknolojisi Face ID'ye sahip ilk modeldir. Paslanmaz çelik kasasıyla premium bir hissiyat sunar.",
    ozellikler: {
      ekran: "5.8 inç Super Retina OLED",
      islemci: "Apple A11 Bionic",
      ram: "3GB RAM",
      batarya: "2716 mAh",
      kamera: "12MP Çift Kamera (Geniş, Telefoto)",
      dayaniklilik: "IP67 Suya ve Toza Dayanıklılık",
    },
    yaygin_arizalar: [
      'Face ID\'nin aniden "kullanılamıyor" uyarısı vererek hiç çalışmaması.',
      "Ekranda aniden beliren dikey yeşil çizgi.",
      "Dokunmatik hassasiyetin, özellikle soğukta, kaybolması veya gecikmeli yanıt vermesi.",
      "Yüksek ses seviyelerinde hoparlörlerden gelen çatırtılı veya bozuk sesler.",
      "Normal kullanımda bile aşırı ısınma ve batarya performansında belirgin düşüş.",
    ],
    cozum_onerileri: [
      "Face ID sorunları için Ayarlar'dan Face ID'yi sıfırlayıp yeniden kurmayı deneyin.",
      "Yeşil çizgi sorunu genellikle donanımsaldır ve profesyonel onarım gerektirir.",
      "Hoparlör cızırtısı için cihaz yazılımının güncel olduğundan emin olun, sorun devam ederse servis gerekir.",
      "Performans düşüşü için gereksiz uygulamaları kapatın ve depolama alanınızı kontrol edin.",
    ],
    sss: [
      {
        soru: "iPhone X güncelleme desteği ne zaman bitecek?",
        cevap:
          "iPhone X, son ana güncelleme olarak iOS 16'yı almıştır. Yeni ana sürümleri almayacak ancak güvenlik güncellemelerini bir süre daha alabilir.",
      },
      {
        soru: "iPhone X'in en bilinen sorunu nedir?",
        cevap:
          "Face ID'nin aniden çalışmayı durdurması ve ekranda beliren dikey yeşil çizgi, iPhone X ile en çok anılan kronik sorunlardır.",
      },
    ],
    kullanici_yorumlari: [
      "Face ID bir anda çalışmamaya başladı, telefonu açmak için sürekli şifre girmek zorunda kalıyorum.",
      "Bir sabah uyandım ve ekranın kenarında fosforlu yeşil bir çizgi vardı.",
      "Müzik dinlerken son seste hoparlörler cızırdıyor, ses bozuluyor.",
    ],
  },
  {
    model: "iPhone XR",
    slug: "iphone-xr",
    meta_title: "iPhone XR Batarya, Isınma ve Ekran Sorunları | Çözüm ve Onarım",
    meta_description:
      "Uygun fiyatlı iPhone XR modelinde sıkça karşılaşılan kötü batarya performansı, aşırı ısınma ve ekranda oluşan çizgiler gibi kronik sorunlara yönelik onarım bilgileri.",
    h1_baslik: "iPhone XR Kullanıcı Şikayetleri ve Yaygın Arızaları",
    cihaz_aciklama:
      "Ekim 2018'de renkli tasarımıyla dikkat çeken iPhone XR, 6.1 inç Liquid Retina LCD ekrana ve güçlü A12 Bionic çipe sahiptir. Face ID teknolojisini daha uygun fiyata sunan bir modeldir.",
    ozellikler: {
      ekran: "6.1 inç Liquid Retina IPS LCD",
      islemci: "Apple A12 Bionic",
      ram: "3GB RAM",
      batarya: "2942 mAh",
      kamera: "12MP Tek Ana Kamera",
      dayaniklilik: "IP67 Suya ve Toza Dayanıklılık",
    },
    yaygin_arizalar: [
      "Bataryanın bir günü çıkarmaması ve şarjın çabuk bitmesi.",
      "Cihazın konuşurken veya şarjdayken eli yakacak derecede ısınması.",
      "Güncellemeler sonrası ekranda beliren dikey/yatay çizgiler ve gölgelenmeler.",
      "Genel yavaşlama, donma ve uygulamalarda takılma.",
      "Zayıf şebeke çekim gücü ve Wi-Fi bağlantısında yaşanan kopmalar.",
    ],
    cozum_onerileri: [
      "Batarya ve ısınma için Düşük Güç Modu kullanın, ekran parlaklığını optimize edin ve şarj sırasında cihazı kılıfından çıkarın.",
      "Ekranda yazılımsal olduğu düşünülen çizgiler için cihazı yeniden başlatmayı veya fabrika ayarlarına dönmeyi deneyin.",
      "Performans için Ayarlar > Pil bölümünden en çok güç tüketen uygulamaları kontrol edip kullanımlarını sınırlayın.",
      "Bağlantı sorunları için Ayarlar > Genel > Sıfırla menüsünden 'Ağ Ayarlarını Sıfırla' seçeneğini deneyin.",
    ],
    sss: [
      {
        soru: "iPhone XR hala güncelleme alıyor mu?",
        cevap:
          "Evet, iPhone XR güncel iOS sürümlerini desteklemektedir ancak yeni ana güncellemeleri alma süresinin sonlarına yaklaşıyor olabilir.",
      },
      {
        soru: "iPhone XR şebeke sorunları nasıl çözülür?",
        cevap:
          "'Ağ Ayarlarını Sıfırla' seçeneğini denemek, SIM kartı kontrol etmek ve yazılımı güncel tutmak genellikle ilk adımlardır. Sorun devam ederse donanımsal olabilir.",
      },
    ],
    kullanici_yorumlari: [
      "Telefonum o kadar çok ısınıyor ki bazen elimde tutamıyorum.",
      "Son güncellemeden sonra ekranımda garip çizgiler belirdi ve şarjı daha da kötüleşti.",
      "Uygulamalar arasında gezerken bile takılıyor, eski hızından eser yok.",
    ],
  },
  {
    model: "iPhone XS",
    slug: "iphone-xs",
    meta_title: "iPhone XS Şarj, Şebeke ve Ekran Sorunu Çözümleri",
    meta_description:
      "iPhone XS'te sık görülen şarj olmama, zayıf şebeke sinyali, ekranda yeşil çizgi oluşumu ve Bluetooth bağlantı sorunları için onarım bilgileri.",
    h1_baslik: "iPhone XS Kronik Arızaları ve Onarım Yöntemleri",
    cihaz_aciklama:
      "Eylül 2018'de tanıtılan iPhone XS, 5.8 inç Super Retina OLED ekrana, A12 Bionic çipe ve paslanmaz çelik kasaya sahiptir.",
    ozellikler: {
      ekran: "5.8 inç Super Retina OLED",
      islemci: "Apple A12 Bionic",
      ram: "4GB RAM",
      batarya: "2658 mAh",
      kamera: "12MP Çift Kamera (Geniş, Telefoto)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık",
    },
    yaygin_arizalar: [
      "Şarj sorunları (şarj almama, şarj logosunda takılı kalma).",
      "Zayıf ağ sinyali ve sıkça 'Servis Yok' hatası alınması.",
      "Ekranda aniden beliren dikey yeşil çizgi.",
      "Bluetooth cihazlarıyla bağlantı kurmada veya sürdürmede zorluklar.",
      "Aşırı ısınma ve genel performans düşüklüğü.",
    ],
    cozum_onerileri: [
      "Şarj sorunları için farklı bir kablo ve adaptör deneyin, şarj portunu temizleyin.",
      "Zayıf şebeke için 'Ağ Ayarlarını Sıfırla' seçeneğini kullanın.",
      "Yeşil çizgi sorunu donanımsaldır ve ekran değişimi gerektirir.",
      "Bluetooth sorunları için cihazları yeniden eşleştirmeyi deneyin.",
    ],
    sss: [
      {
        soru: "iPhone XS'in en yaygın sorunları nelerdir?",
        cevap:
          "Şarj sorunları, zayıf şebeke sinyali ve OLED ekranda beliren yeşil çizgi en sık rapor edilen kronik sorunlardır.",
      },
      {
        soru: "iPhone XS'teki şebeke sorununun nedeni nedir?",
        cevap:
          "Bu durumun, Apple'ın o dönemde modem tedarikçisini değiştirmesiyle ilgili olabileceği ve bazı operatör ağlarında daha belirgin olduğu düşünülmektedir.",
      },
    ],
    kullanici_yorumlari: [
      "Telefonum bazen şarj olmuyor, şarj logosunda takılı kalıyor.",
      "Şebeke sinyali çok zayıf, diğer telefonların çektiği yerde çekmiyor.",
      "Ekranda benim de yeşil bir çizgi belirdi, meğer kronik bir sorunmuş.",
    ],
  },
  {
    model: "iPhone XS Max",
    slug: "iphone-xs-max",
    meta_title: "iPhone XS Max Sorunları: Şarj, Şebeke ve Büyük Ekran",
    meta_description:
      "iPhone XS Max modelinde yaşanan şarj olmama, zayıf şebeke sinyali, ekranda yeşil çizgi oluşumu gibi kronik sorunlar için onarım bilgileri.",
    h1_baslik: "iPhone XS Max Yaygın Arızaları ve Çözümleri",
    cihaz_aciklama:
      "iPhone XS'in büyük ekranlı versiyonu olan XS Max, 6.5 inç Super Retina OLED ekrana ve daha büyük bir bataryaya sahiptir.",
    ozellikler: {
      ekran: "6.5 inç Super Retina OLED",
      islemci: "Apple A12 Bionic",
      ram: "4GB RAM",
      batarya: "3174 mAh",
      kamera: "12MP Çift Kamera (Geniş, Telefoto)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık",
    },
    yaygin_arizalar: [
      "Şarj sorunları (iPhone XS ile benzer).",
      "Zayıf ağ sinyali (iPhone XS ile benzer).",
      "Donma ve performans düşüklüğü.",
      "Ekranda dikey yeşil çizgi.",
      "Yavaş Wi-Fi ve veri hızları.",
    ],
    cozum_onerileri: [
      "Sorunlar genellikle iPhone XS ile benzer olduğu için, 'Ağ Ayarlarını Sıfırla' veya farklı şarj aksesuarları denemek gibi çözümler geçerlidir.",
      "Büyük ekranın daha fazla güç tüketmesi nedeniyle batarya ömrünü korumak için parlaklığı optimize edin.",
      "Performans sorunları için arka planda çalışan uygulamaları kapatın.",
      "Yeşil ekran çizgisi için yetkili servise başvurun.",
    ],
    sss: [
      {
        soru: "iPhone XS Max'in iPhone XS'ten farkı nedir?",
        cevap:
          "Temel farklar daha büyük olan 6.5 inç ekran boyutu ve daha yüksek kapasiteli bataryasıdır. Diğer teknik özellikler ve kronik sorunlar büyük ölçüde aynıdır.",
      },
      {
        soru: "iPhone XS Max hala alınır mı?",
        cevap:
          "Büyük ekran sevenler için uygun fiyatlı bir seçenek olabilir ancak yaygın kronik sorunları ve yazılım desteğinin sonlarına yaklaşması göz önünde bulundurulmalıdır.",
      },
    ],
    kullanici_yorumlari: [
      "Büyük ekran güzel ama bataryası ve şebeke sorunları can sıkıcı.",
      "Bu kadar para verip bu sorunları yaşamak üzücü.",
      "Sorunları küçük modeliyle tamamen aynı, sadece ekranı büyük.",
    ],
  },
  // Diğer modeller için veri yapısı aynı şekilde devam eder...
]

// Repair prices for each model
export const repairPrices = {
  "iphone-8": {
    "Ekran Değişimi": "899₺",
    "Batarya Değişimi": "399₺",
    "Kamera Onarımı": "599₺",
    "Şarj Soketi Onarımı": "299₺",
    "Hoparlör Onarımı": "249₺",
    "Home Tuşu Onarımı": "199₺",
  },
  "iphone-8-plus": {
    "Ekran Değişimi": "1199₺",
    "Batarya Değişimi": "449₺",
    "Kamera Onarımı": "699₺",
    "Şarj Soketi Onarımı": "349₺",
    "Hoparlör Onarımı": "299₺",
    "Home Tuşu Onarımı": "249₺",
  },
  "iphone-x": {
    "Ekran Değişimi": "1599₺",
    "Batarya Değişimi": "499₺",
    "Face ID Onarımı": "899₺",
    "Kamera Onarımı": "799₺",
    "Şarj Soketi Onarımı": "399₺",
    "Hoparlör Onarımı": "349₺",
  },
  "iphone-xr": {
    "Ekran Değişimi": "1299₺",
    "Batarya Değişimi": "549₺",
    "Face ID Onarımı": "799₺",
    "Kamera Onarımı": "699₺",
    "Şarj Soketi Onarımı": "399₺",
    "Hoparlör Onarımı": "349₺",
  },
  "iphone-xs": {
    "Ekran Değişimi": "1799₺",
    "Batarya Değişimi": "599₺",
    "Face ID Onarımı": "999₺",
    "Kamera Onarımı": "899₺",
    "Şarj Soketi Onarımı": "449₺",
    "Hoparlör Onarımı": "399₺",
  },
  "iphone-xs-max": {
    "Ekran Değişimi": "2199₺",
    "Batarya Değişimi": "649₺",
    "Face ID Onarımı": "1099₺",
    "Kamera Onarımı": "999₺",
    "Şarj Soketi Onarımı": "499₺",
    "Hoparlör Onarımı": "449₺",
  },
}
