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
  repair_prices: {
    [key: string]: string
  }
}

export const iPhoneModelsData: iPhoneModel[] = [
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
    repair_prices: {
      "Ekran Değişimi": "899₺",
      "Batarya Değişimi": "399₺",
      "Kamera Onarımı": "599₺",
      "Şarj Soketi Onarımı": "299₺",
      "Hoparlör Onarımı": "249₺",
      "Home Tuşu Onarımı": "199₺",
      "Su Hasarı Onarımı": "999₺+",
    },
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
    repair_prices: {
      "Ekran Değişimi": "1199₺",
      "Batarya Değişimi": "449₺",
      "Kamera Onarımı": "699₺",
      "Şarj Soketi Onarımı": "349₺",
      "Hoparlör Onarımı": "299₺",
      "Home Tuşu Onarımı": "249₺",
      "Su Hasarı Onarımı": "1199₺+",
    },
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
    repair_prices: {
      "Ekran Değişimi": "1599₺",
      "Batarya Değişimi": "499₺",
      "Face ID Onarımı": "899₺",
      "Kamera Onarımı": "799₺",
      "Şarj Soketi Onarımı": "399₺",
      "Hoparlör Onarımı": "349₺",
      "Su Hasarı Onarımı": "1299₺+",
    },
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
    repair_prices: {
      "Ekran Değişimi": "1299₺",
      "Batarya Değişimi": "549₺",
      "Face ID Onarımı": "799₺",
      "Kamera Onarımı": "699₺",
      "Şarj Soketi Onarımı": "399₺",
      "Hoparlör Onarımı": "349₺",
      "Su Hasarı Onarımı": "1099₺+",
    },
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
    repair_prices: {
      "Ekran Değişimi": "1799₺",
      "Batarya Değişimi": "599₺",
      "Face ID Onarımı": "999₺",
      "Kamera Onarımı": "899₺",
      "Şarj Soketi Onarımı": "449₺",
      "Hoparlör Onarımı": "399₺",
      "Su Hasarı Onarımı": "1399₺+",
    },
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
    repair_prices: {
      "Ekran Değişimi": "2199₺",
      "Batarya Değişimi": "649₺",
      "Face ID Onarımı": "1099₺",
      "Kamera Onarımı": "999₺",
      "Şarj Soketi Onarımı": "499₺",
      "Hoparlör Onarımı": "449₺",
      "Su Hasarı Onarımı": "1599₺+",
    },
  },
  {
    model: "iPhone 11",
    slug: "iphone-11",
    meta_title: "iPhone 11 Kronik Sorunları: Ekran, Batarya ve Isınma",
    meta_description:
      "iPhone 11'de sıkça rastlanan ekran sararması, dokunmatik sorunları, aşırı ısınma ve batarya performansı düşüklüğü gibi kronik arızalar ve çözüm önerileri.",
    h1_baslik: "iPhone 11 Yaygın Arızaları ve Çözüm Yöntemleri",
    cihaz_aciklama:
      "Eylül 2019'da tanıtılan iPhone 11, 6.1 inç Liquid Retina LCD ekrana, A13 Bionic çipe ve 12MP geniş ve ultra geniş lenslerden oluşan çift arka kamera sistemine sahiptir. Renkli tasarım seçenekleriyle dikkat çeker.",
    ozellikler: {
      ekran: "6.1 inç Liquid Retina IPS LCD",
      islemci: "Apple A13 Bionic",
      ram: "4GB RAM",
      batarya: "3110 mAh",
      kamera: "12MP Çift Kamera (Geniş, Ultra Geniş)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (2 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Ekranın, özellikle kenar kısımlarında zamanla sararması veya ölü piksellerin oluşması.",
      "Ekranın dokunmaya hiç yanıt vermemesi (Apple bu sorun için belirli bir seri için onarım programı başlatmıştı).",
      "Hoparlörden çıkan sesin az veya cızırtılı olması.",
      "Cihazın alüminyum kenar çerçevelerinde zamanla kendiliğinden oluşan boya dökülmeleri.",
      "Cihazın normal kullanımda bile belirgin şekilde ısınması ve batarya sağlığının hızlı düşmesi.",
    ],
    cozum_onerileri: [
      "Dokunmatik ekran sorunu yaşıyorsanız, Apple'ın onarım programının cihazınız için geçerli olup olmadığını kontrol edin.",
      "Aşırı ısınma için, işlemciyi yoğun kullanan uygulamaların kullanımını sınırlayın ve cihazı güncel tutun.",
      "Ses sorunları için hoparlör ve mikrofon ızgaralarının temiz olduğundan emin olun.",
      "Kasa soyulması kozmetik bir sorun olduğundan, önlem olarak kaliteli bir kılıf kullanın.",
    ],
    sss: [
      {
        soru: "iPhone 11 suya dayanıklı mı?",
        cevap:
          "Evet, IP68 sertifikasına sahiptir ve 2 metreye kadar tatlı suda 30 dakika boyunca dayanıklılık gösterebilir. Ancak bu dayanıklılık zamanla azalabilir.",
      },
      {
        soru: "iPhone 11 kamerasının en belirgin özelliği nedir?",
        cevap:
          "Geniş ve ultra geniş açılı çift kamera sistemi ile Gece Modu özelliği, düşük ışıkta bile net fotoğraflar çekilmesini sağlamasıyla öne çıkar.",
      },
    ],
    kullanici_yorumlari: [
      "Ekranımın kenarları bariz bir şekilde sarardı, beyaz renkler sarı görünüyor.",
      "Telefonla konuşurken sesim karşıya cızırtılı gidiyormuş, herkes şikayetçi.",
      "Telefonun kenarları kılıf kullanmama rağmen kendiliğinden soyuldu.",
    ],
    repair_prices: {
      "Ekran Değişimi": "1399₺",
      "Batarya Değişimi": "599₺",
      "Face ID Onarımı": "899₺",
      "Kamera Onarımı": "799₺",
      "Şarj Soketi Onarımı": "449₺",
      "Hoparlör Onarımı": "399₺",
      "Su Hasarı Onarımı": "1199₺+",
    },
  },
  {
    model: "iPhone 11 Pro",
    slug: "iphone-11-pro",
    meta_title: "iPhone 11 Pro Kamera, Batarya ve Performans Sorunları",
    meta_description:
      "iPhone 11 Pro'da yaşanan kamera dalgalanması, kötü batarya performansı, güncelleme sonrası yavaşlama ve Face ID hataları için onarım bilgileri.",
    h1_baslik: "iPhone 11 Pro Kronik Arızaları ve Kullanıcı Şikayetleri",
    cihaz_aciklama:
      "iPhone 11'in Pro versiyonu, 5.8 inç Super Retina XDR OLED ekrana, üçlü kamera sistemine ve mat cam arka yüzeye sahiptir.",
    ozellikler: {
      ekran: "5.8 inç Super Retina XDR OLED",
      islemci: "Apple A13 Bionic",
      ram: "4GB RAM",
      batarya: "3046 mAh",
      kamera: "12MP Üçlü Kamera Sistemi (Geniş, Ultra Geniş, Telefoto)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (4 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Kötü batarya performansı ve hızlı pil sağlığı düşüşü.",
      "Güncelleme sonrası performans sorunları (klavye kasması, aşırı ısınma).",
      "Kamera sorunları (dalgalanma, titreme, video kaydında cızırtılı ses).",
      "Face ID'nin kayıtlı olmayan yüzleri (örneğin kullanıcının çocuğu) tanıması.",
      "Jiroskop sensöründe hata oluşması (oyunlarda jiroskopun çalışmaması).",
    ],
    cozum_onerileri: [
      "Kamera titremesi için öncelikle cihazı yeniden başlatmayı deneyin, sorun devam ederse donanım kontrolü gerekir.",
      "Güncelleme sonrası yavaşlama için 'Tüm Ayarları Sıfırla' seçeneği denenebilir.",
      "Face ID güvenliği için 'Alternatif Bir Görünüş Ayarla' özelliğini kullanmadığınızdan emin olun.",
      "Jiroskop sorunu için ilgili oyunun veya uygulamanın güncel olduğundan emin olun.",
    ],
    sss: [
      {
        soru: "iPhone 11 Pro'nun kamerası neden titriyor?",
        cevap:
          "Bu durum, optik görüntü stabilizasyon (OIS) sistemindeki bir donanım arızasından kaynaklanabilir ve genellikle profesyonel onarım gerektirir.",
      },
      {
        soru: "Face ID neden başkalarını tanıyor?",
        cevap:
          "Bu nadir bir durumdur ve genellikle benzer yüz hatlarına sahip kişilerde (örn. ikizler) veya 'Alternatif Bir Görünüş Ayarla' özelliğinin yanlış kullanılmasında rapor edilmiştir.",
      },
    ],
    kullanici_yorumlari: [
      "Kamerada sürekli bir titreme var, net çekim yapamıyorum.",
      "Son güncelleme sonrası telefon inanılmaz yavaşladı.",
      "Face ID kardeşimin yüzüyle açıldı, bu nasıl güvenlik?",
    ],
    repair_prices: {
      "Ekran Değişimi": "1899₺",
      "Batarya Değişimi": "699₺",
      "Face ID Onarımı": "1199₺",
      "Kamera Onarımı": "1099₺",
      "Şarj Soketi Onarımı": "499₺",
      "Hoparlör Onarımı": "449₺",
      "Su Hasarı Onarımı": "1499₺+",
    },
  },
  {
    model: "iPhone 11 Pro Max",
    slug: "iphone-11-pro-max",
    meta_title: "iPhone 11 Pro Max Isınma, Batarya ve Ses Sorunları",
    meta_description:
      "iPhone 11 Pro Max'te sıkça rastlanan aşırı ısınma, şarjın hızlı bitmesi, güncelleme sonrası ses kısıklığı ve kendi kendine arama yapma sorunları.",
    h1_baslik: "iPhone 11 Pro Max Genel Arızaları ve Çözüm Yolları",
    cihaz_aciklama:
      "Serinin en üst modeli olup, 6.5 inç Super Retina XDR OLED ekrana, A13 Bionic işlemciye ve serinin en iyi batarya ömrüne sahip olmasıyla öne çıkar.",
    ozellikler: {
      ekran: "6.5 inç Super Retina XDR OLED",
      islemci: "Apple A13 Bionic",
      ram: "4GB RAM",
      batarya: "3969 mAh",
      kamera: "12MP Üçlü Kamera Sistemi (Geniş, Ultra Geniş, Telefoto)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (4 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Kötü batarya performansı ve şarjın hızlı bitmesi.",
      "Aşırı ısınma (normal kullanımda bile).",
      "Güncelleme sonrası sorunlar (dokunmatik hassasiyet kaybı, ses kısıklığı).",
      "Cihazın kendi kendine ve istenmeyen zamanlarda arama yapması.",
      "Portre modunun düşük ışıkta yetersiz kalması.",
    ],
    cozum_onerileri: [
      "Batarya ömrünü iyileştirmek için arka planda çalışan uygulamaları kontrol edin ve parlaklığı düşürün.",
      "Güncelleme sonrası ses sorunları için ses ayarlarını kontrol edin ve cihazı yeniden başlatın.",
      "Kendi kendine arama sorunu için Ayarlar > Acil SOS menüsündeki ayarları kontrol edin.",
      "Düşük ışıkta daha iyi portre fotoğrafları için ek ışık kaynakları kullanmayı veya Gece Modu'nu tercih etmeyi deneyin.",
    ],
    sss: [
      {
        soru: "iPhone 11 Pro Max'in şarjı ne kadar gidiyor?",
        cevap:
          "Piyasaya çıktığı dönemde en iyi batarya ömrüne sahip iPhone modellerinden biriydi. Ancak zamanla ve güncellemelerle performansı düşebilir. Yoğun kullanımda bir günü rahatlıkla çıkarabilir.",
      },
      {
        soru: "iPhone 11 Pro Max neden ısınıyor?",
        cevap:
          "A13 Bionic çipin yüksek performansı, büyük ekran ve yoğun uygulamalar cihazın ısınmasına neden olabilir. Sürekli ve aşırı ısınma bir donanım veya batarya sorununa işaret edebilir.",
      },
    ],
    kullanici_yorumlari: [
      "Oyun oynamasam bile telefon çok ısınıyor.",
      "Şarjı eskiye göre çok daha hızlı bitmeye başladı.",
      "Telefonum cebimdeyken kendi kendine birini aramış, çok garip.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2299₺",
      "Batarya Değişimi": "799₺",
      "Face ID Onarımı": "1299₺",
      "Kamera Onarımı": "1199₺",
      "Şarj Soketi Onarımı": "549₺",
      "Hoparlör Onarımı": "499₺",
      "Su Hasarı Onarımı": "1699₺+",
    },
  },
  {
    model: "iPhone 12 mini",
    slug: "iphone-12-mini",
    meta_title: "iPhone 12 mini Batarya, Isınma ve Ekran Sorunları",
    meta_description:
      "Kompakt iPhone 12 mini'de en büyük şikayet olan kötü batarya performansı, aşırı ısınma, dokunmatik ekran tepkisizliği ve kasa sararması sorunları.",
    h1_baslik: "iPhone 12 mini Kronik Sorunları ve Kullanıcı Yorumları",
    cihaz_aciklama:
      "Serinin en küçük modeli olan 12 mini, 5.4 inç Super Retina XDR OLED ekrana ve A14 Bionic çipe sahiptir. Tek elle kullanım için idealdir.",
    ozellikler: {
      ekran: "5.4 inç Super Retina XDR OLED",
      islemci: "Apple A14 Bionic",
      ram: "4GB RAM",
      batarya: "2227 mAh",
      kamera: "12MP Çift Kamera (Geniş, Ultra Geniş)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Kötü batarya performansı ve şarjın günü çıkarmaması.",
      "Aşırı ısınma.",
      "Şarj azalınca ses kısılması ve üst hoparlörde cızırtı.",
      "Kilit ekranında dokunmatik ekran tepkisizliği.",
      "Kasa sararması ve kenarlarda boya atması.",
    ],
    cozum_onerileri: [
      "Batarya ömrü için yanınızda bir powerbank taşımak veya Düşük Güç Modu'nu sürekli aktif tutmak pratik bir çözüm olabilir.",
      "Kilit ekranı dokunmatik sorunu için cihazı yeniden başlatmak genellikle sorunu geçici olarak çözer.",
      "Ses kısılması sorunu için şarj seviyesini yüksek tutmaya çalışın.",
      "Kasa sararması ve boya atması için en başından itibaren kaliteli bir kılıf kullanın.",
    ],
    sss: [
      {
        soru: "iPhone 12 mini 2025'te alınır mı?",
        cevap:
          "Kompakt telefon sevenler için hala bir seçenek olsa da, kronik batarya sorunu ve daha yeni modellerin varlığı nedeniyle genellikle tavsiye edilmez.",
      },
      {
        soru: "iPhone 12 mini'nin en büyük sorunu nedir?",
        cevap:
          "Kompakt boyutundan kaynaklanan küçük bataryası ve bunun getirdiği yetersiz kullanım süresi, kullanıcıların en büyük şikayetidir.",
      },
    ],
    kullanici_yorumlari: [
      "Bataryası yarım günü bile çıkarmıyor, tam bir hayal kırıklığı.",
      "Kilit ekranındayken dokunmatik bazen çalışmıyor, şifre giremiyorum.",
      "Telefonun kasası sarardı, çok kötü görünüyor.",
    ],
    repair_prices: {
      "Ekran Değişimi": "1599₺",
      "Batarya Değişimi": "649₺",
      "Face ID Onarımı": "999₺",
      "Kamera Onarımı": "899₺",
      "Şarj Soketi Onarımı": "499₺",
      "Hoparlör Onarımı": "449₺",
      "Su Hasarı Onarımı": "1299₺+",
    },
  },
  {
    model: "iPhone 12",
    slug: "iphone-12",
    meta_title: "iPhone 12 Ahize, Batarya ve Isınma Sorunu ve Çözümleri",
    meta_description:
      "iPhone 12'de kronik hale gelen ahizeden ses gelmemesi, 5G ile artan batarya tüketimi, aşırı ısınma ve kendi kendine kapanma sorunları.",
    h1_baslik: "iPhone 12 Sık Görülen Arızalar: Ahize, Pil ve Performans",
    cihaz_aciklama:
      "Serinin standart modeli olan iPhone 12, 6.1 inç Super Retina XDR OLED ekrana, 5G desteğine ve Ceramic Shield ön yüzeye sahiptir.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED",
      islemci: "Apple A14 Bionic",
      ram: "4GB RAM",
      batarya: "2815 mAh",
      kamera: "12MP Çift Kamera (Geniş, Ultra Geniş)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Telefon görüşmesi sırasında ahizeden hiç ses gelmemesi veya sesin çok kısık gelmesi.",
      "Özellikle 5G kullanımıyla birlikte şarjın çok hızlı tükenmesi.",
      "Cihazın beklenmedik anlarda kapanıp yeniden başlaması.",
      "Yoğun kullanımda veya şarj sırasında cihazın aşırı ısınması.",
      "Kameranın bazen nesnelere odaklanmakta zorlanması.",
    ],
    cozum_onerileri: [
      "Ahize sorunu için Apple'ın servis programı uygunluğunu kontrol edin.",
      "Batarya ömrünü iyileştirmek için Ayarlar'dan '5G Otomatik' modunu seçin.",
      "Kendi kendine kapanma sorunu için yazılımı güncel tutun ve gereksiz uygulamaları kaldırın.",
      "Isınma sorunları için cihazı şarj olurken kılıfsız kullanmayı deneyin.",
    ],
    sss: [
      {
        soru: "iPhone 12 ahize sorunu nasıl çözülür?",
        cevap:
          "Bu sorun Apple tarafından tanınmış ve belirli bir üretim serisi için ücretsiz bir servis programı başlatılmıştır. Cihazınızın programa uygun olup olmadığını Apple'ın web sitesinden kontrol edebilirsiniz.",
      },
      {
        soru: "iPhone 12'de hızlı şarjda ısınması normal mi?",
        cevap:
          "Evet, hızlı şarj sırasında bataryanın %80'e kadar ısınması normaldir. Ancak bu ısı sürekli ve aşırı düzeydeyse bir sorun olabilir.",
      },
    ],
    kullanici_yorumlari: [
      "Telefonla konuşurken karşı tarafın sesini duyamıyorum, meğer kronik bir sorunmuş.",
      "5G açıkken şarjı su gibi akıyor, günü çıkarmak imkansız.",
      "Durup dururken telefon kapanıp yeniden başlıyor, çok can sıkıcı.",
    ],
    repair_prices: {
      "Ekran Değişimi": "1799₺",
      "Batarya Değişimi": "699₺",
      "Face ID Onarımı": "1099₺",
      "Kamera Onarımı": "999₺",
      "Şarj Soketi Onarımı": "549₺",
      "Hoparlör Onarımı": "499₺",
      "Su Hasarı Onarımı": "1399₺+",
    },
  },
  {
    model: "iPhone 12 Pro",
    slug: "iphone-12-pro",
    meta_title: "iPhone 12 Pro Isınma, Batarya ve Face ID Sorunları",
    meta_description:
      "iPhone 12 Pro'da sıkça rapor edilen aşırı ısınma, güncelleme sonrası azalan batarya ömrü, Face ID sorunları ve şarj olmama problemleri.",
    h1_baslik: "iPhone 12 Pro Yaygın Arızaları ve Onarım Bilgileri",
    cihaz_aciklama:
      "Paslanmaz çelik kasalı 12 Pro, 6.1 inç ekrana, üçlü kamera sistemine ve artırılmış gerçeklik için LiDAR tarayıcıya sahiptir.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED",
      islemci: "Apple A14 Bionic",
      ram: "6GB RAM",
      batarya: "2815 mAh",
      kamera: "12MP Üçlü Kamera Sistemi (Geniş, Ultra Geniş, Telefoto) + LiDAR",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Ahizeden ses gelmemesi (12 ile ortak sorun).",
      "Kötü batarya performansı (özellikle güncelleme sonrası).",
      "Aşırı ısınma (normal kullanımda bile).",
      "Güncelleme sonrası Face ID'nin çalışmaması.",
      "Şarj olmama veya şarj sırasında akımı kesme.",
    ],
    cozum_onerileri: [
      "Ahize sorunu için Apple'ın servis programı uygunluğunu kontrol edin.",
      "Güncelleme sonrası Face ID sorunu için Ayarlar'dan Face ID'yi sıfırlayıp yeniden kurmayı deneyin.",
      "Şarj kesilmesi sorunu için farklı bir kablo/adaptör kullanın ve portu temizleyin.",
      "Aşırı ısınma için arka planda çalışan uygulamaları kapatın ve cihazı güncel tutun.",
    ],
    sss: [
      {
        soru: "iPhone 12 Pro ısınma sorunu yaygın mı?",
        cevap:
          "Evet, özellikle standart iPhone 12'ye göre daha güçlü donanımına rağmen benzer kasada olması nedeniyle ısınma şikayetleri kullanıcılar arasında yaygındır.",
      },
      {
        soru: "Güncelleme sonrası Face ID neden çalışmıyor?",
        cevap:
          "Büyük iOS güncellemeleri sonrası bu tür yazılımsal hatalar yaşanabilir. Genellikle Face ID'yi sıfırlamak veya bir sonraki küçük güncellemeyi beklemek sorunu çözer.",
      },
    ],
    kullanici_yorumlari: [
      "Instagram'da gezerken bile telefon alev gibi oluyor.",
      "Son güncellemeden sonra Face ID çalışmaz oldu.",
      "Şarja takıyorum, bir süre sonra şarj etmeyi kesiyor, sabah uyanıyorum şarj olmamış.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2099₺",
      "Batarya Değişimi": "799₺",
      "Face ID Onarımı": "1299₺",
      "Kamera Onarımı": "1199₺",
      "Şarj Soketi Onarımı": "599₺",
      "Hoparlör Onarımı": "549₺",
      "Su Hasarı Onarımı": "1599₺+",
    },
  },
  {
    model: "iPhone 12 Pro Max",
    slug: "iphone-12-pro-max",
    meta_title: "iPhone 12 Pro Max Sorunları: Batarya, Bağlantı ve Kamera",
    meta_description:
      "iPhone 12 Pro Max'te yaşanan batarya sorunları, Wi-Fi/şebeke bağlantı problemleri, kamera lens parlaması ve aşırı ısınma gibi kronik şikayetler.",
    h1_baslik: "iPhone 12 Pro Max Kronik Arızaları ve Kullanıcı Deneyimleri",
    cihaz_aciklama:
      "Serinin en büyük ve en yetenekli modeli olan 12 Pro Max, 6.7 inç Super Retina XDR OLED ekranı, A14 Bionic çipi, 6GB RAM'i ve LiDAR destekli üçlü kamera sistemiyle öne çıkar.",
    ozellikler: {
      ekran: "6.7 inç Super Retina XDR OLED",
      islemci: "Apple A14 Bionic",
      ram: "6GB RAM",
      batarya: "3687 mAh",
      kamera: "12MP Üçlü Kamera Sistemi (Geniş, Ultra Geniş, Telefoto) + LiDAR",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Kötü batarya performansı ve şarjın beklenenden hızlı tükenmesi.",
      "Aşırı ısınma, özellikle oyun ve video kaydı sırasında.",
      "Bağlantı sorunları (Wi-Fi'nin çalışmaması, şebekenin zayıf olması, Bluetooth'un kopması).",
      "Kamera lens parlaması (lens flare), özellikle gece çekimlerinde ışık kaynaklarının yansıması.",
      "Hoparlör ve ahize sesinin yetersiz veya az gelmesi.",
    ],
    cozum_onerileri: [
      "Bağlantı sorunları için 'Ağ Ayarlarını Sıfırla' seçeneğini deneyin.",
      "Kamera parlamasını azaltmak için çekim açınızı değiştirmeyi veya lensin temiz olduğundan emin olmayı deneyin.",
      "Batarya ömrünü iyileştirmek için '5G Otomatik' modunu kullanın.",
      "Yazılım kaynaklı donma ve kapanmalar için cihazı düzenli olarak yeniden başlatın.",
    ],
    sss: [
      {
        soru: "iPhone 12 Pro Max neden 120Hz ekrana sahip değil?",
        cevap:
          "Bu modelde 120Hz ProMotion ekran teknolojisi bulunmamaktadır, bu özellik iPhone 13 Pro serisi ile sunulmuştur. Bu durum, piyasaya çıktığı dönemde kullanıcılar tarafından bir eksiklik olarak görülmüştür.",
      },
      {
        soru: "Kamera lens parlaması (lens flare) sorunu yaygın mı?",
        cevap:
          "Evet, özellikle 12 Pro Max'in büyük lensleri nedeniyle gece çekimlerinde ışık kaynaklarında yansıma oluşması kullanıcılar tarafından sıkça rapor edilen bir durumdur.",
      },
    ],
    kullanici_yorumlari: [
      "Gece çekimlerinde ışık kaynakları fotoğrafta leke gibi parlıyor.",
      "Bu kadar para verip şebeke sorunu yaşamak üzücü.",
      "Wi-Fi sürekli kopuyor, modemin dibinde olsam bile.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2499₺",
      "Batarya Değişimi": "899₺",
      "Face ID Onarımı": "1399₺",
      "Kamera Onarımı": "1299₺",
      "Şarj Soketi Onarımı": "649₺",
      "Hoparlör Onarımı": "599₺",
      "Su Hasarı Onarımı": "1799₺+",
    },
  },
  {
    model: "iPhone 13 mini",
    slug: "iphone-13-mini",
    meta_title: "iPhone 13 mini Batarya, Isınma ve Şebeke Sorunları",
    meta_description:
      "iPhone 13 mini'de yaşanan kötü batarya performansı, aşırı ısınma, zayıf şebeke çekimi ve kasa boyasında soyulma gibi kronik sorunlar.",
    h1_baslik: "iPhone 13 mini Kronik Arızaları ve Çözümleri",
    cihaz_aciklama: "Apple'ın son mini modeli olan iPhone 13 mini, 5.4 inç ekrana ve A15 Bionic çipe sahiptir.",
    ozellikler: {
      ekran: "5.4 inç Super Retina XDR OLED",
      islemci: "Apple A15 Bionic",
      ram: "4GB RAM",
      batarya: "2438 mAh",
      kamera: "12MP Çift Kamera Sistemi (Geniş, Ultra Geniş)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Kötü batarya performansı ve şarjın çabuk bitmesi.",
      "Aşırı ısınma (konuşurken, şarjda, Instagram'da).",
      "Zayıf şebeke çekim gücü (Wi-Fi/hücresel).",
      "Kasa boyasında soyulma (metal kısımlar, kamera çerçevesi).",
      "Alarmın zaman zaman çalmaması.",
    ],
    cozum_onerileri: [
      "Batarya ömrü için Düşük Güç Modu'nu aktif kullanın ve gereksiz bildirimleri kapatın.",
      "Isınma sorunları için cihazı kılıfsız kullanmayı ve parlaklığı düşürmeyi deneyin.",
      "Şebeke sorunları için 'Ağ Ayarlarını Sıfırla' seçeneğini kullanın.",
      "Alarm sorunları için Ses ve Dokunuş ayarlarını kontrol edin, alarmı silip yeniden kurun.",
    ],
    sss: [
      {
        soru: "iPhone 13 mini'nin batarya ömrü nasıl?",
        cevap:
          "12 mini'ye göre daha iyi olsa da, kompakt boyutu nedeniyle hala serinin diğer modellerine göre daha kısa bir kullanım süresi sunar.",
      },
      {
        soru: "iPhone 13 mini ısınıyor mu?",
        cevap: "Evet, güçlü A15 Bionic çipin kompakt bir kasada çalışması nedeniyle ısınma yaygın bir şikayettir.",
      },
    ],
    kullanici_yorumlari: [
      "Bataryası 12 mini'den iyi ama yine de günü kurtarmıyor.",
      "Instagram'da 15 dakika gezince telefon ısınıyor.",
      "Kamera çerçevesinin boyası kendiliğinden attı.",
    ],
    repair_prices: {
      "Ekran Değişimi": "1699₺",
      "Batarya Değişimi": "699₺",
      "Face ID Onarımı": "1099₺",
      "Kamera Onarımı": "999₺",
      "Şarj Soketi Onarımı": "549₺",
      "Hoparlör Onarımı": "499₺",
      "Su Hasarı Onarımı": "1399₺+",
    },
  },
  {
    model: "iPhone 13",
    slug: "iphone-13",
    meta_title: "iPhone 13 Pil Şişmesi, Şebeke ve Mikrofon Sorunları",
    meta_description:
      "iPhone 13 modelinde yaşanan pil şişmesi, zayıf şebeke çekimi, kendi kendine açılıp kapanma ve mikrofon arızaları.",
    h1_baslik: "iPhone 13 Sıkça Karşılaşılan Arızalar ve Çözümleri",
    cihaz_aciklama:
      "2021'in standart modeli olan iPhone 13, 6.1 inç ekrana, daha küçük çentiğe ve A15 Bionic çipe sahiptir.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED",
      islemci: "Apple A15 Bionic",
      ram: "4GB RAM",
      batarya: "3240 mAh",
      kamera: "12MP Çift Kamera Sistemi (Geniş, Ultra Geniş)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Bazı cihazlarda bataryanın şişmesi.",
      "Kötü batarya performansı (günde 2-3 kere şarj etme ihtiyacı).",
      "Zayıf şebeke çekim gücü.",
      "Cihazın kendi kendine açılıp kapanması.",
      "Mikrofonun çalışmaması (görüşme ve videolarda ses gitmemesi).",
    ],
    cozum_onerileri: [
      "Pil şişmesi güvenlik riski oluşturur, cihazı hemen kullanmayı bırakıp servise başvurun.",
      "Kendi kendine kapanma sorunu için yazılımı güncel tutun ve 'Tüm Ayarları Sıfırla'yı deneyin.",
      "Mikrofon sorunları için mikrofon deliklerinin temiz olduğundan emin olun.",
      "Şebeke sorunları için Uçak Modu'nu açıp kapatmayı deneyin.",
    ],
    sss: [
      {
        soru: "iPhone 13 suya dayanıklı mı?",
        cevap: "Evet, IP68 sertifikası ile 6 metreye kadar tatlı suda 30 dakika dayanıklılık sunar.",
      },
      {
        soru: "iPhone 13 batarya ömrü ne kadar sürer?",
        cevap:
          "Normal kullanımda yaklaşık 1.5-2 yıl sağlıklı bir kullanım ömrü beklenir. Bu süre, yaklaşık 500 tam şarj döngüsüne denk gelir.",
      },
    ],
    kullanici_yorumlari: [
      "Daha bir yıllık telefonumun bataryası şişti, ekran yerinden kalktı.",
      "Sürekli şebeke gidip geliyor, şehrin merkezinde bile doğru düzgün konuşamıyorum.",
      "Video çektim ama sonradan fark ettim ki hiç ses kaydetmemiş.",
    ],
    repair_prices: {
      "Ekran Değişimi": "1899₺",
      "Batarya Değişimi": "749₺",
      "Face ID Onarımı": "1199₺",
      "Kamera Onarımı": "1099₺",
      "Şarj Soketi Onarımı": "599₺",
      "Hoparlör Onarımı": "549₺",
      "Su Hasarı Onarımı": "1499₺+",
    },
  },
  {
    model: "iPhone 13 Pro",
    slug: "iphone-13-pro",
    meta_title: "iPhone 13 Pro Sorunları: Batarya, Ekran ve Şebeke",
    meta_description:
      "iPhone 13 Pro'da yaşanan ani batarya düşüşü, 120Hz ProMotion ekran sorunları, zayıf şebeke çekimi ve ses kalitesi problemleri hakkında detaylar.",
    h1_baslik: "iPhone 13 Pro Kronik Arızaları ve Kullanıcı Şikayetleri",
    cihaz_aciklama:
      "2021'in Pro modeli, 6.1 inç 120Hz ProMotion ekrana, A15 Bionic çipe ve makro çekim yeteneği kazandırılmış gelişmiş üçlü kamera sistemine sahiptir.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED (ProMotion)",
      islemci: "Apple A15 Bionic",
      ram: "6GB RAM",
      batarya: "3095 mAh",
      kamera: "12MP Pro Kamera Sistemi (Geniş, Ultra Geniş, Telefoto)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Kötü batarya performansı (şarjın aniden %80'den %5'e düşmesi gibi).",
      "Aşırı ısınma.",
      "Zayıf şebeke çekim gücü (Wi-Fi/hücresel).",
      "Ekran sorunları (donma, renk atması, pembe ekran).",
      "Ses/mikrofon kalitesi sorunları (görüşmede sesin kesilerek veya robotik gitmesi).",
    ],
    cozum_onerileri: [
      "Ani şarj düşüşleri için batarya kalibrasyonu yapmayı veya batarya sağlığını kontrol etmeyi deneyin.",
      "Şebeke sorunları için 'Ağ Ayarlarını Sıfırla' seçeneğini kullanın.",
      "Pembe ekran gibi donanımsal sorunlar için doğrudan yetkili servise başvurun.",
      "Yazılım kaynaklı donmalar için cihazı güncel tutun ve periyodik olarak yeniden başlatın.",
    ],
    sss: [
      {
        soru: "iPhone 13 Pro bataryası neden çabuk bitiyor?",
        cevap:
          "120Hz ProMotion ekranın yüksek yenileme hızı, arka planda çalışan uygulamalar ve iOS güncellemeleri batarya tüketimini artırabilir.",
      },
      {
        soru: "iPhone 13 Pro tamir edilebilir mi?",
        cevap:
          "Evet, özellikle yaygın olan ekran, batarya ve kamera sorunları yetkili servisler veya profesyonel onarım merkezleri tarafından giderilebilir.",
      },
    ],
    kullanici_yorumlari: [
      "Şarjım %80'di, 5 dakika sonra bir baktım telefon kapanmış.",
      "Wi-Fi sürekli kopuyor, internetsiz kalıyorum.",
      "Konuşurken sesim karşıya robot gibi gidiyormuş.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2199₺",
      "Batarya Değişimi": "849₺",
      "Face ID Onarımı": "1399₺",
      "Kamera Onarımı": "1299₺",
      "Şarj Soketi Onarımı": "649₺",
      "Hoparlör Onarımı": "599₺",
      "Su Hasarı Onarımı": "1699₺+",
    },
  },
  {
    model: "iPhone 13 Pro Max",
    slug: "iphone-13-pro-max",
    meta_title: "iPhone 13 Pro Max Pembe Ekran, Batarya ve Kamera Sorunları",
    meta_description:
      "iPhone 13 Pro Max'te yaşanan pembe ekran sorunu, batarya şişmesi, 3x zoom kamera lekesi ve hücresel bağlantı problemleri.",
    h1_baslik: "iPhone 13 Pro Max Genel Arızaları ve Çözümleri",
    cihaz_aciklama: "Serinin en yetenekli modeli, 6.7 inç ProMotion ekranı ve A15 çipiyle öne çıkar.",
    ozellikler: {
      ekran: "6.7 inç Super Retina XDR OLED (ProMotion)",
      islemci: "Apple A15 Bionic",
      ram: "6GB RAM",
      batarya: "4352 mAh",
      kamera: "12MP Pro Kamera Sistemi (Geniş, Ultra Geniş, Telefoto)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Pembe ekran sorunu (ekranın kullanılamaz hale gelmesi).",
      "Kötü batarya performansı ve batarya şişmesi.",
      "3x zoom yaparken kamerada beliren siyah noktalar ve lekeler.",
      "Hücresel bağlantı sorunu ve şebeke çekmemesi.",
      "Güncellemeler sonrası donma ve yavaşlama.",
    ],
    cozum_onerileri: [
      "Pembe ekran sorunu donanımsaldır ve acil servis müdahalesi gerektirir.",
      "Zoom yaparken çıkan lekeler için lensin temiz olduğundan emin olun, sorun devam ederse sensörde toz olabilir.",
      "Batarya şişmesi durumunda cihazı kullanmayı derhal bırakın ve servise götürün.",
      "Güncelleme sonrası yavaşlama için cihazı yeniden başlatmayı deneyin.",
    ],
    sss: [
      {
        soru: "iPhone 13 Pro Max kamera zoom yapınca neden siyah leke çıkıyor?",
        cevap:
          "Bu durum, genellikle kamera lensi ile sensör arasına toz girmesinden kaynaklanır ve profesyonel temizlik veya onarım gerektirir.",
      },
      {
        soru: "iPhone 13 Pro Max'teki en önemli sorunlar nelerdir?",
        cevap:
          "Batarya tükenmesi, ekran/arka cam çatlaması, Face ID arızaları, kamera odak sorunları ve aşırı ısınma en sık rapor edilen sorunlardır.",
      },
    ],
    kullanici_yorumlari: [
      "Telefonum bir anda pembe bir ekrana döndü ve bir daha açılmadı.",
      "Kamerayla zoom yapınca siyah bir leke çıkıyor, sensörde toz var sanırım.",
      "Bataryası 10 dakikada bitti ve kapandı, sonra da şişti.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2599₺",
      "Batarya Değişimi": "949₺",
      "Face ID Onarımı": "1499₺",
      "Kamera Onarımı": "1399₺",
      "Şarj Soketi Onarımı": "699₺",
      "Hoparlör Onarımı": "649₺",
      "Su Hasarı Onarımı": "1899₺+",
    },
  },
  {
    model: "iPhone 14",
    slug: "iphone-14",
    meta_title: "iPhone 14 Pil Sağlığı, Şebeke ve Performans Sorunları",
    meta_description:
      "iPhone 14'te en büyük şikayet olan pil sağlığının hızla düşmesi, şebeke sorunu (arama alamama), kasma ve yavaşlama.",
    h1_baslik: "iPhone 14 Yaygın Arızaları ve Kullanıcı Şikayetleri",
    cihaz_aciklama:
      "2022'nin standart modeli, A15 Bionic çipi korurken kamera ve güvenlik özelliklerinde iyileştirmeler sundu.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED",
      islemci: "Apple A15 Bionic (5-çekirdek GPU)",
      ram: "6GB RAM",
      batarya: "3279 mAh",
      kamera: "12MP Çift Kamera Sistemi (Geniş, Ultra Geniş)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Pil sağlığının birkaç ay içinde bile hızla düşmesi.",
      "Aşırı ısınma.",
      "Şebeke sorunu (cihaz çekiyor görünürken arama ve mesaj alamama).",
      "Genel kullanımda kasma ve yavaşlama.",
      "Deprem uyarısı özelliğinin çalışmaması veya geç bildirmesi.",
    ],
    cozum_onerileri: [
      "Pil sağlığını korumak için Ayarlar'dan '%80 Sınırı' özelliğini aktif edebilirsiniz.",
      "Şebeke sorunu için Uçak Modu'nu açıp kapatmak veya 'Ağ Ayarlarını Sıfırla' demek geçici bir çözüm olabilir.",
      "Performans sorunları için cihazı düzenli olarak yeniden başlatın.",
      "Deprem uyarısı için Konum Servisleri'nin ve ilgili uygulamanın ayarlarının doğru yapıldığından emin olun.",
    ],
    sss: [
      {
        soru: "iPhone 14 mü daha iyi 15 mi?",
        cevap:
          "iPhone 15, Dynamic Island, USB-C portu ve 48MP ana kamera gibi önemli yenilikler sunar. iPhone 14 ise hala güçlü bir performans sunan daha uygun fiyatlı bir seçenektir.",
      },
      {
        soru: "iPhone 14 kaç hatlı?",
        cevap:
          "Türkiye'de satılan modeller genellikle bir adet fiziksel SIM ve bir adet eSIM olmak üzere çift SIM desteği sunar.",
      },
    ],
    kullanici_yorumlari: [
      "6 aylık telefonumun pil sağlığı %92'ye düştü, bu normal mi?",
      "Bazen telefon çekiyor görünüyor ama arama gelmiyor, meşgul çalıyor.",
      "Menüler arası geçişte bile takılıyor.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2099₺",
      "Batarya Değişimi": "799₺",
      "Face ID Onarımı": "1299₺",
      "Kamera Onarımı": "1199₺",
      "Şarj Soketi Onarımı": "599₺",
      "Hoparlör Onarımı": "549₺",
      "Su Hasarı Onarımı": "1599₺+",
    },
  },
  {
    model: "iPhone 14 Plus",
    slug: "iphone-14-plus",
    meta_title: "iPhone 14 Plus Ekran, Kamera ve Şarj Sorunları",
    meta_description:
      "iPhone 14 Plus'ta yaşanan ekran donması, kamera arızaları, şarj kesilmesi ve pil sağlığının hızlı düşmesi gibi kronik sorunlar.",
    h1_baslik: "iPhone 14 Plus Kronik Arızaları ve Onarım Bilgileri",
    cihaz_aciklama:
      "iPhone 14'ün büyük ekranlı versiyonu olan 14 Plus, 6.7 inç ekranı ve serinin en iyi batarya ömrüyle öne çıkar.",
    ozellikler: {
      ekran: "6.7 inç Super Retina XDR OLED",
      islemci: "Apple A15 Bionic (5-çekirdek GPU)",
      ram: "6GB RAM",
      batarya: "4325 mAh",
      kamera: "12MP Çift Kamera Sistemi (Geniş, Ultra Geniş)",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Ekran sorunları (donma, fabrikasyon hatalı iç çizik).",
      "Kamera sorunları (arka kameranın çekmemesi, flaşın bozulması).",
      "Şarj sorunları (kabloyla ani kesilme, yavaş şarj olma).",
      "Pil sağlığının hızlı düşmesi.",
      "Gelen aramalarda kilit ekranının donması, cevap verilememesi.",
    ],
    cozum_onerileri: [
      "Fabrikasyon ekran hataları için cihazı hemen iade etmeyi veya değiştirmeyi talep edin.",
      "Kamera arızaları genellikle donanımsaldır ve servis müdahalesi gerektirir.",
      "Arama ekranı donması yazılımsal bir hatadır, cihazı yeniden başlatmak geçici çözüm olabilir.",
      "Şarj kesilmesi için farklı bir kablo ve adaptör kullanın.",
    ],
    sss: [
      {
        soru: "iPhone 14 Plus'ın en büyük avantajı nedir?",
        cevap:
          "Standart iPhone 14'e göre çok daha büyük olan 6.7 inç ekranı ve daha yüksek kapasiteli bataryası sayesinde sunduğu uzun kullanım ömrü en büyük avantajıdır.",
      },
      {
        soru: "iPhone 14 Plus özellikleri nelerdir?",
        cevap: "6.7 inç OLED ekran, A15 Bionic çip, 6GB RAM, 4325 mAh batarya ve 12MP çift kamera sistemine sahiptir.",
      },
    ],
    kullanici_yorumlari: [
      "Telefonu kutusundan çıkardım, ekranın içinde çizik vardı.",
      "Arka kameram çalışmıyor, flaş da patlamıyor.",
      "Biri aradığında ekran donuyor, çağrıyı cevaplayamıyorum.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2399₺",
      "Batarya Değişimi": "849₺",
      "Face ID Onarımı": "1399₺",
      "Kamera Onarımı": "1299₺",
      "Şarj Soketi Onarımı": "649₺",
      "Hoparlör Onarımı": "599₺",
      "Su Hasarı Onarımı": "1699₺+",
    },
  },
  {
    model: "iPhone 14 Pro",
    slug: "iphone-14-pro",
    meta_title: "iPhone 14 Pro Pil Sağlığı, Isınma ve Kasa Soyulması",
    meta_description:
      "iPhone 14 Pro'da en büyük şikayet olan pil sağlığının hızla düşmesi, aşırı ısınma ve kasa çerçevesinde soyulmalar gibi kronik sorunlar.",
    h1_baslik: "iPhone 14 Pro Yaygın Arızaları: Pil, Isınma ve Kasa",
    cihaz_aciklama:
      "2022'de Dynamic Island, Always-On Display ve 48MP ana kamera gibi yeniliklerle gelen Pro modelidir. A16 Bionic çip ile güçlendirilmiştir.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED (ProMotion, Dynamic Island)",
      islemci: "Apple A16 Bionic",
      ram: "6GB RAM",
      batarya: "3200 mAh",
      kamera: "48MP Ana Kamera, 12MP Ultra Geniş, 12MP Telefoto",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Pil sağlığının birkaç ay içinde bile hızla düşmesi.",
      "Aşırı ısınma (sosyal medyada gezinirken bile).",
      "Paslanmaz çelik çerçevenin ve kamera etrafının boyasında kendiliğinden soyulmalar.",
      "Konuşma sırasında sesin sürekli kesilmesi veya ahizeden boğuk gelmesi.",
      "Ekranın aniden yanıp sönmesi veya piksel hataları.",
    ],
    cozum_onerileri: [
      "Pil ömrünü korumak için Ayarlar'dan 'Optimize Edilmiş Pil Şarjı'nı ve '%80 Sınırı'nı aktif edin.",
      "Isınma sorunları için cihaz yazılımının güncel olduğundan emin olun ve şarjda kullanmaktan kaçının.",
      "Kamera takılmaları için kamera uygulamasını kapatıp açmayı veya cihazı yeniden başlatmayı deneyin.",
      "Kasa soyulması kozmetik bir sorun olduğundan, en iyi çözüm en başından koruyucu bir kılıf kullanmaktır.",
    ],
    sss: [
      {
        soru: "iPhone 14 Pro ısınma sorunu nasıl giderilir?",
        cevap:
          "Yazılım güncellemeleri genellikle bu sorunu hafifletir. Ayrıca, aşırı kullanımdan kaçınmak, kılıfsız şarj etmek ve pil sağlığını kontrol etmek yardımcı olabilir.",
      },
      {
        soru: "Kasa soyulması garanti kapsamında mı?",
        cevap:
          "Genellikle bu tür kozmetik sorunlar kullanıcı hatası olarak kabul edilmez ancak üretim hatası olmadığı sürece garanti kapsamına girmeyebilir. Durum Apple servisinin değerlendirmesine bağlıdır.",
      },
    ],
    kullanici_yorumlari: [
      "6 aylık telefonumun pil sağlığı %91'e düştü, bu normal mi?",
      "Mor renk telefonumun çerçeveleri soyulmaya başladı, bu fiyata bu kalite hayal kırıklığı.",
      "Instagram'da gezerken bile telefon alev gibi oluyor.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2699₺",
      "Batarya Değişimi": "899₺",
      "Face ID Onarımı": "1499₺",
      "Kamera Onarımı": "1399₺",
      "Şarj Soketi Onarımı": "699₺",
      "Hoparlör Onarımı": "649₺",
      "Su Hasarı Onarımı": "1899₺+",
    },
  },
  {
    model: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    meta_title: "iPhone 14 Pro Max Sorunları: Pil Sağlığı, Isınma ve Kasa",
    meta_description:
      "iPhone 14 Pro Max'te yaşanan pil sağlığının hızla düşmesi, aşırı ısınma, kamera sorunları ve özellikle mor renkte kasa soyulması şikayetleri.",
    h1_baslik: "iPhone 14 Pro Max Kronik Arızaları: Pil, Isınma, Kasa",
    cihaz_aciklama:
      "Serinin en üst modeli, Dynamic Island, Always-On Display ve 48MP ana kamera gibi yeniliklerle geldi. A16 Bionic çip ile güçlendirilmiştir.",
    ozellikler: {
      ekran: "6.7 inç Super Retina XDR OLED (ProMotion, Dynamic Island)",
      islemci: "Apple A16 Bionic",
      ram: "6GB RAM",
      batarya: "4323 mAh",
      kamera: "48MP Ana Kamera, 12MP Ultra Geniş, 12MP Telefoto",
      dayaniklilik: "IP68 Suya ve Toza Dayanıklılık (6 metre, 30 dakika)",
    },
    yaygin_arizalar: [
      "Pil sağlığının hızla düşmesi.",
      "Aşırı ısınma.",
      "Kamera sorunları (0.5x geniş açıya geçmeme, bulanıklık).",
      "Kasa soyulması ve renk atması (özellikle mor renk).",
      "Şarj olmama veya şarj kablosunu oynatınca şarj olması.",
    ],
    cozum_onerileri: [
      "Pil ömrünü korumak için Ayarlar'dan 'Optimize Edilmiş Pil Şarjı'nı ve '%80 Sınırı'nı aktif edin.",
      "Isınma sorunları için cihaz yazılımının güncel olduğundan emin olun ve şarjda kullanmaktan kaçının.",
      "Kamera takılmaları için kamera uygulamasını kapatıp açmayı veya cihazı yeniden başlatmayı deneyin.",
      "Kasa soyulması kozmetik bir sorun olduğundan, en iyi çözüm en başından koruyucu bir kılıf kullanmaktır.",
    ],
    sss: [
      {
        soru: "iPhone 14 Pro Max'in en belirgin özellikleri nelerdir?",
        cevap:
          "Dynamic Island, 48 Megapiksel ana kamera, Always-On Display (Her Zaman Açık Ekran) ve A16 Bionic çip en önemli yenilikleridir.",
      },
      {
        soru: "Kasa soyulması garanti kapsamında mı?",
        cevap:
          "Genellikle bu tür kozmetik sorunlar kullanıcı hatası olarak kabul edilmez ancak üretim hatası olmadığı sürece garanti kapsamına girmeyebilir. Durum Apple servisinin değerlendirmesine bağlıdır.",
      },
    ],
    kullanici_yorumlari: [
      "Mor renk telefonumun çerçeveleri soyulmaya başladı, çok çirkin duruyor.",
      "Pil sağlığı gözümün önünde eriyor resmen.",
      "Kamerası bazen geniş açıya geçmiyor, takılı kalıyor.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2999₺",
      "Batarya Değişimi": "999₺",
      "Face ID Onarımı": "1599₺",
      "Kamera Onarımı": "1499₺",
      "Şarj Soketi Onarımı": "749₺",
      "Hoparlör Onarımı": "699₺",
      "Su Hasarı Onarımı": "2099₺+",
    },
  },
  {
    model: "iPhone 15",
    slug: "iphone-15",
    meta_title: "iPhone 15 Isınma, Pil Sağlığı ve Kamera Sorunları",
    meta_description:
      "Yeni iPhone 15'te yaşanan aşırı ısınma, pil sağlığının hızla düşmesi, ön kameranın fotoğrafları karartması ve şarj olmama gibi ilk kullanıcı sorunları.",
    h1_baslik: "iPhone 15 İlk Kullanıcı Sorunları ve Arıza Raporları",
    cihaz_aciklama: "2023'ün standart modeli, Dynamic Island ve USB-C portuna geçiş yaptı. 48MP ana kamera ile geldi.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED (Dynamic Island)",
      islemci: "Apple A16 Bionic",
      ram: "6GB RAM",
      batarya: "3349 mAh",
      kamera: "48MP Ana Kamera, 12MP Ultra Geniş",
      baglanti: "USB-C",
    },
    yaygin_arizalar: [
      "Pil sağlığının hızlı düşmesi (2 ayda %97 gibi).",
      "Aşırı ısınma (ilk güncellemeler öncesi daha yoğundu).",
      "Kamera sorunları (ön kamera fotoğrafları karartıyor, 0.5x bulanık).",
      "Şarj olmama ve şarjın %1'de kalıp kapanması.",
      "Yeni cihazın kutudan çıkar çıkmaz Wi-Fi'ye bağlanmaması.",
    ],
    cozum_onerileri: [
      "Isınma sorunu için iOS yazılımınızın en güncel sürümde olduğundan emin olun.",
      "Pil sağlığını korumak için Ayarlar'dan şarj döngüsü sayısını kontrol edebilir ve '%80 Sınırı'nı kullanabilirsiniz.",
      "Ön kamera karartması için kamera ayarlarını kontrol edin ve lensin temiz olduğundan emin olun.",
      "Wi-Fi bağlanmama sorunu için modeminizi ve telefonunuzu yeniden başlatın.",
    ],
    sss: [
      {
        soru: "Verilerimi yeni iPhone'a aktarmak kolay mı?",
        cevap:
          "Evet, iCloud yedeklemesi veya cihazları yan yana getirerek Hızlı Başlangıç özelliği ile verilerinizi kolayca aktarabilirsiniz.",
      },
      {
        soru: "iPhone 15 5G'yi destekliyor mu?",
        cevap: "Evet, iPhone 15 ve serideki tüm modeller 5G bağlantısını desteklemektedir.",
      },
    ],
    kullanici_yorumlari: [
      "Telefonu ilk aldığımda çok ısınıyordu, güncellemeyle azaldı ama hala ısınıyor.",
      "Daha 2 aylık telefonumun pil sağlığı %97'ye düştü.",
      "Ön kamera ile çektiğim fotoğraflar çok karanlık çıkıyor.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2299₺",
      "Batarya Değişimi": "849₺",
      "Face ID Onarımı": "1399₺",
      "Kamera Onarımı": "1299₺",
      "Şarj Soketi Onarımı": "649₺",
      "Hoparlör Onarımı": "599₺",
      "Su Hasarı Onarımı": "1699₺+",
    },
  },
  {
    model: "iPhone 15 Plus",
    slug: "iphone-15-plus",
    meta_title: "iPhone 15 Plus Çekim Gücü, Isınma ve Ekran Sorunları",
    meta_description:
      "iPhone 15 Plus'ta yaşanan zayıf şebeke çekim gücü, aşırı ısınma, fabrikasyon ekran hataları ve pil sağlığının hızlı düşmesi gibi sorunlar.",
    h1_baslik: "iPhone 15 Plus Kronik Arızaları ve Kullanıcı Şikayetleri",
    cihaz_aciklama: "iPhone 15'in büyük ekranlı versiyonu, 6.7 inç ekranı ve uzun pil ömrüyle öne çıkar.",
    ozellikler: {
      ekran: "6.7 inç Super Retina XDR OLED (Dynamic Island)",
      islemci: "Apple A16 Bionic",
      ram: "6GB RAM",
      batarya: "4383 mAh",
      kamera: "48MP Ana Kamera, 12MP Ultra Geniş",
      baglanti: "USB-C",
    },
    yaygin_arizalar: [
      "Zayıf şebeke çekim gücü.",
      "Aşırı ısınma.",
      "Ekran sorunları (fabrikasyon hatalı, iç kısımda çizik).",
      "Pil sağlığının hızlı düşmesi.",
      "Gelen aramalarda kilit ekranının donması, cevap verilememesi.",
    ],
    cozum_onerileri: [
      "Zayıf çekim gücü için 'Ağ Ayarlarını Sıfırla' seçeneğini deneyin.",
      "Fabrikasyon ekran hatası fark ederseniz cihazı hemen servise götürün veya iade edin.",
      "Arama ekranı donması yazılımsal bir hatadır, cihazı yeniden başlatmak geçici çözüm olabilir.",
      "Isınma için cihazı güncel tutun ve yoğun uygulamaları sınırlayın.",
    ],
    sss: [
      {
        soru: "iPhone 15 Plus fazla ısınıyor mu?",
        cevap:
          "Evet, özellikle A16 Bionic çipin getirdiği güç ve büyük ekran nedeniyle ısınma kullanıcılar tarafından rapor edilmektedir.",
      },
      {
        soru: "iPhone 15 Plus'ın kamerası iPhone 11'den kötü mü?",
        cevap:
          "Bu subjektif bir kullanıcı iddiasıdır. Teknik olarak 15 Plus'ın 48MP ana kamerası çok daha gelişmiştir, ancak yazılımsal işlemeler veya kişisel beklentiler algıyı değiştirebilir.",
      },
    ],
    kullanici_yorumlari: [
      "Çekim gücü eski telefonumdan daha kötü.",
      "Telefonu kutudan çıkardım, ekranın içinde çizik vardı.",
      "Biri aradığında ekran donuyor, çağrıyı cevaplayamıyorum.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2599₺",
      "Batarya Değişimi": "899₺",
      "Face ID Onarımı": "1499₺",
      "Kamera Onarımı": "1399₺",
      "Şarj Soketi Onarımı": "699₺",
      "Hoparlör Onarımı": "649₺",
      "Su Hasarı Onarımı": "1799₺+",
    },
  },
  {
    model: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    meta_title: "iPhone 15 Pro Isınma, Batarya ve Şarj Soketi Sorunları",
    meta_description:
      "iPhone 15 Pro'da yaşanan aşırı ısınma, batarya şişmesi, şarj kablosunun kolayca çıkması ve kronik kapanma sorunları.",
    h1_baslik: "iPhone 15 Pro Kronik Arızaları ve Onarım Bilgileri",
    cihaz_aciklama: "Yeni Titanyum kasalı Pro model, A17 Pro çip, USB-C ve Eylem Düğmesi gibi yenilikler sunar.",
    ozellikler: {
      ekran: "6.1 inç Super Retina XDR OLED (ProMotion, Dynamic Island)",
      islemci: "Apple A17 Pro",
      ram: "8GB RAM",
      batarya: "3274 mAh",
      kamera: "48MP Pro Kamera Sistemi (Geniş, Ultra Geniş, Telefoto)",
      baglanti: "USB-C (Daha hızlı veri aktarımı)",
    },
    yaygin_arizalar: [
      "Batarya şişmesi ve siyah ekranda kalma.",
      "Aşırı ısınma (Youtube/Instagram gibi uygulamalarda bile).",
      "Şarj sorunları (kablo gevşekliği, soketin kolayca çıkması).",
      "Kronik kapanma sorunu ve kendi kendine yeniden başlama.",
      "Hoparlör arızası ve sesin boğuk gelmesi.",
    ],
    cozum_onerileri: [
      "Batarya şişmesi güvenlik riski taşıdığından cihazı hemen kapatıp servise başvurun.",
      "Gevşek USB-C portu için farklı bir kablo deneyin, sorun devam ederse donanımsal olabilir.",
      "Kronik kapanma sorunları için 'Tüm Ayarları Sıfırla' veya son çare olarak DFU modunda yazılım yüklemesi denenebilir.",
      "Yazılım güncellemesi sonrası yaşanan sorunlar için bir sonraki küçük güncellemeyi beklemek genellikle en iyi çözümdür.",
    ],
    sss: [
      {
        soru: "iPhone 15 Pro şarj kablosu dayanıklı mı?",
        cevap:
          "Bazı kullanıcılar, örgülü yeni kablonun bile bir yıldan kısa sürede koptuğunu veya arızalandığını rapor etmiştir.",
      },
      {
        soru: "Geniş açı (0.5x) çekimlerdeki bulanıklık nasıl çözülür?",
        cevap:
          "Lensin temiz olduğundan emin olun. Bu, bazen yazılımsal bir odaklama sorunudur ve güncellemelerle giderilebilir.",
      },
    ],
    kullanici_yorumlari: [
      "Şarj kablosu yatağında çok gevşek duruyor, sürekli çıkıyor.",
      "Instagram'da gezerken bile telefonun ısınması normal değil.",
      "Durup dururken telefon kapanıyor ve bir süre açılmıyor.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2899₺",
      "Batarya Değişimi": "949₺",
      "Face ID Onarımı": "1599₺",
      "Kamera Onarımı": "1599₺",
      "Şarj Soketi Onarımı": "749₺",
      "Hoparlör Onarımı": "699₺",
      "Su Hasarı Onarımı": "1999₺+",
    },
  },
  {
    model: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    meta_title: "iPhone 15 Pro Max Aşırı Isınma, Batarya ve Yazılım Sorunları",
    meta_description:
      "En üst model iPhone 15 Pro Max'te yaşanan aşırı ısınma, pil sağlığının hızlı düşmesi, güncelleme sonrası donma/kapanma ve WhatsApp sorunları.",
    h1_baslik: "iPhone 15 Pro Max Yaygın Arızaları ve Kullanıcı Deneyimleri",
    cihaz_aciklama:
      "Serinin en büyük ve en güçlüsü, Titanyum kasa, A17 Pro çip ve 5x telefoto zoom özellikli yeni kamera sistemiyle gelir.",
    ozellikler: {
      ekran: "6.7 inç Super Retina XDR OLED (ProMotion, Dynamic Island)",
      islemci: "Apple A17 Pro",
      ram: "8GB RAM",
      batarya: "4441 mAh",
      kamera: "48MP Ana Kamera, 12MP Ultra Geniş, 12MP 5x Telefoto",
      baglanti: "USB-C (Daha hızlı veri aktarımı)",
    },
    yaygin_arizalar: [
      "Aşırı ısınma (oyunlarda ve normal kullanımda).",
      "Pil sağlığının hızlı düşmesi (1 yılda %92 gibi).",
      "Yazılım sorunları (kasılma, güncelleme sonrası şebeke gitmesi, donma).",
      "WhatsApp'ta linklerin açılmaması veya uygulamanın donması.",
      "Şarj yüzdesi düşünce telefonun kapanıp yeniden açılması.",
    ],
    cozum_onerileri: [
      "Aşırı ısınma için iOS yazılımını güncel tutun, Apple bu sorunu gidermek için güncellemeler yayınlamıştır.",
      "Pil sağlığını korumak için Ayarlar'dan şarj alışkanlıklarınızı kontrol edebilir ve optimize edebilirsiniz.",
      "Uygulamaya özgü sorunlar (örn. WhatsApp) için uygulamanın güncel olduğundan emin olun veya silip yeniden yükleyin.",
      "Yazılım kaynaklı donmalar için cihazı yeniden başlatmak ilk adımdır.",
    ],
    sss: [
      {
        soru: "iPhone 15 Pro Max neden ısınıyor?",
        cevap:
          "A17 Pro çipin yüksek performansı, ilk yazılım sürümlerindeki optimizasyon eksiklikleri ve Titanyum kasanın ısı dağılım karakteristiği nedeniyle ısınma şikayetleri yaygındı. Ancak güncellemelerle bu durum büyük ölçüde iyileştirildi.",
      },
      {
        soru: "iPhone 15 Pro Max'in en öne çıkan kamera özelliği nedir?",
        cevap:
          "5x optik zoom yapabilen yeni telefoto kamera, serideki diğer modellerden ayrılan en önemli kamera özelliğidir.",
      },
    ],
    kullanici_yorumlari: [
      "Oyunlarda telefon o kadar ısınıyor ki tutmak zorlaşıyor.",
      "Son güncellemeden sonra telefon donup kapanmaya başladı.",
      "WhatsApp'ta gelen linklere tıklayamıyorum, uygulama donuyor.",
    ],
    repair_prices: {
      "Ekran Değişimi": "2999₺",
      "Batarya Değişimi": "999₺",
      "Face ID Onarımı": "1699₺",
      "Kamera Onarımı": "1699₺",
      "Şarj Soketi Onarımı": "799₺",
      "Hoparlör Onarımı": "749₺",
      "Su Hasarı Onarımı": "2199₺+",
    },
  },
]

// Helper function to get iPhone model data
export function getiPhoneModelData(slug: string) {
  return iPhoneModelsData.find((model) => model.slug === slug)
}

// Helper function to get all iPhone model slugs
export function getAlliPhoneModelSlugs() {
  return iPhoneModelsData.map((model) => model.slug)
}
