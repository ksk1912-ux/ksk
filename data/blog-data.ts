export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "iPhone Ekran Değişiminde Dikkat Edilmesi Gerekenler",
    slug: "iphone-ekran-degisiminde-dikkat-edilmesi-gerekenler",
    excerpt:
      "iPhone ekranınızı değiştirirken kaliteli parça seçimi ve profesyonel servis tercihinin önemi hakkında bilmeniz gerekenler.",
    content: `
      <p>iPhone ekranınızın kırılması veya çatlaması, günlük hayatta sıkça karşılaşılan bir durumdur. Ancak ekran değişimi sırasında dikkat edilmesi gereken bazı önemli noktalar vardır.</p>
      
      <h2>Orijinal Parça Kullanımının Önemi</h2>
      <p>Ekran değişiminde kullanılan parçanın kalitesi, cihazınızın performansını doğrudan etkiler. Orijinal olmayan ekranlar başlangıçta daha uygun fiyatlı görünse de, uzun vadede çeşitli sorunlara yol açabilir:</p>
      <ul>
        <li>Dokunmatik hassasiyetinde azalma</li>
        <li>Renk kalibrasyonunda bozukluk</li>
        <li>Pil ömrünün kısalması</li>
        <li>Face ID gibi özelliklerin düzgün çalışmaması</li>
      </ul>
      
      <h2>Profesyonel Servis Seçimi</h2>
      <p>Ekran değişimi, basit görünse de aslında teknik bilgi ve deneyim gerektiren bir işlemdir. Profesyonel bir servis tercih etmenin avantajları:</p>
      <ul>
        <li>Su geçirmezlik özelliğinin korunması</li>
        <li>Garanti kapsamının devam etmesi</li>
        <li>Diğer parçalara zarar verilmemesi</li>
        <li>İşlem sonrası kalibrasyon ve testlerin yapılması</li>
      </ul>
      
      <h2>Ekran Değişimi Sonrası Dikkat Edilmesi Gerekenler</h2>
      <p>Yeni ekranınızın uzun ömürlü olması için şu noktalara dikkat etmelisiniz:</p>
      <ul>
        <li>İlk 24 saat içinde cihazınızı suya maruz bırakmayın</li>
        <li>Ekran koruyucu film veya temperli cam kullanın</li>
        <li>Aşırı basınç uygulamaktan kaçının</li>
        <li>Cihazınızı aşırı sıcak veya soğuk ortamlarda bırakmayın</li>
      </ul>
      
      <p>MobilServis olarak, tüm iPhone modellerinde orijinal parçalar ve uzman teknisyenlerle ekran değişimi hizmeti sunmaktayız. 90 gün garanti ve aynı gün teslimat avantajlarıyla cihazınızı güvenle bize emanet edebilirsiniz.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Ahmet Yılmaz",
    date: "15 Mayıs 2024",
    readTime: "5 dakika",
    category: "Tamir İpuçları",
    tags: ["iPhone", "Ekran Değişimi", "Orijinal Parça", "Tamir"],
  },
  {
    id: "2",
    title: "Telefonunuzun Batarya Ömrünü Uzatmanın 7 Etkili Yolu",
    slug: "telefonunuzun-batarya-omrunu-uzatmanin-7-etkili-yolu",
    excerpt:
      "Akıllı telefonunuzun batarya ömrünü uzatmak ve şarj döngülerini optimize etmek için uygulayabileceğiniz pratik öneriler.",
    content: `
      <p>Akıllı telefonların en büyük sorunlarından biri batarya ömrüdür. Zamanla kapasite kaybı yaşayan bataryalar, günlük kullanımı zorlaştırabilir. İşte batarya ömrünü uzatmak için uygulayabileceğiniz etkili yöntemler:</p>
      
      <h2>1. Optimum Şarj Seviyesini Koruyun</h2>
      <p>Bataryanızı %20'nin altına düşürmemeye ve %80'in üzerine çıkarmamaya çalışın. Bu aralıkta kullanmak, batarya hücrelerinin ömrünü uzatır. Modern telefonlarda bulunan "Optimize Edilmiş Şarj" özelliğini aktif etmek faydalı olacaktır.</p>
      
      <h2>2. Aşırı Isınmadan Koruyun</h2>
      <p>Yüksek sıcaklıklar batarya ömrünü ciddi şekilde kısaltır. Telefonunuzu doğrudan güneş ışığına maruz bırakmayın ve şarj esnasında kılıfını çıkarmayı düşünün.</p>
      
      <h2>3. Orijinal Şarj Aksesuarları Kullanın</h2>
      <p>Kalitesiz şarj cihazları ve kablolar, bataryanıza zarar verebilir. Mümkün olduğunca cihazınızın orijinal şarj aksesuarlarını tercih edin.</p>
      
      <h2>4. Arka Plan Uygulamalarını Kontrol Edin</h2>
      <p>Arka planda çalışan ve gereksiz bildirim gönderen uygulamalar batarya tüketimini artırır. Düzenli olarak bu uygulamaları kontrol edin ve gereksiz olanları kapatın.</p>
      
      <h2>5. Ekran Parlaklığını Optimize Edin</h2>
      <p>Ekran parlaklığı, batarya tüketiminde büyük rol oynar. Otomatik parlaklık ayarını kullanın ve gerektiğinde manuel olarak azaltın.</p>
      
      <h2>6. Konum Servislerini Sınırlayın</h2>
      <p>Sürekli açık konum servisleri bataryayı hızla tüketir. Sadece kullanırken açık tutun veya hassasiyeti düşürün.</p>
      
      <h2>7. Düzenli Yazılım Güncellemeleri Yapın</h2>
      <p>Yazılım güncellemeleri genellikle batarya optimizasyonları içerir. Cihazınızı güncel tutmak, batarya performansını iyileştirebilir.</p>
      
      <p>Bu önerilere rağmen bataryanız hızla tükeniyorsa, batarya sağlığı %80'in altına düşmüşse veya şişme belirtileri gösteriyorsa profesyonel bir batarya değişimi düşünmenin zamanı gelmiş olabilir. MobilServis olarak, tüm akıllı telefon modellerinde orijinal batarya değişimi hizmeti sunmaktayız.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Zeynep Kaya",
    date: "3 Haziran 2024",
    readTime: "7 dakika",
    category: "Bakım İpuçları",
    tags: ["Batarya", "Şarj", "Optimizasyon", "Enerji Tasarrufu"],
  },
  {
    id: "3",
    title: "Su Hasarı Alan Telefonunuzu Kurtarmanın Doğru Yolları",
    slug: "su-hasari-alan-telefonunuzu-kurtarmanin-dogru-yollari",
    excerpt:
      "Telefonunuz suya düştüğünde yapmanız ve yapmamanız gerekenler. Doğru müdahale ile cihazınızı kurtarma şansınızı artırın.",
    content: `
      <p>Akıllı telefonların suya düşmesi veya sıvı teması yaşaması oldukça yaygın bir sorundur. Doğru ve hızlı müdahale, cihazınızı kurtarma şansınızı önemli ölçüde artırabilir. İşte su hasarı durumunda yapmanız ve kaçınmanız gereken adımlar:</p>
      
      <h2>Hemen Yapmanız Gerekenler</h2>
      <ol>
        <li><strong>Cihazı Kapatın:</strong> Telefonunuzu hemen kapatın. Açık durumda kalması, kısa devreye neden olabilir.</li>
        <li><strong>SIM Kart ve SD Kartı Çıkarın:</strong> Mümkünse SIM kart, SD kart ve diğer çıkarılabilir parçaları uzaklaştırın.</li>
        <li><strong>Suyu Silin:</strong> Yumuşak, tüy bırakmayan bir bezle telefonun dış yüzeyindeki suyu nazikçe silin.</li>
        <li><strong>Cihazı Doğru Pozisyonda Tutun:</strong> Suyun daha fazla iç kısımlara gitmesini önlemek için telefonu, suyun en kolay akabileceği pozisyonda tutun.</li>
      </ol>
      
      <h2>Asla Yapmamanız Gerekenler</h2>
      <ul>
        <li><strong>Saç Kurutma Makinesi Kullanmayın:</strong> Yüksek ısı, telefonun iç bileşenlerine zarar verebilir.</li>
        <li><strong>Pirinç Kullanmayın:</strong> Yaygın bir mit olmasına rağmen, pirinç etkili bir kurutucu değildir ve pirinç tozları cihaza zarar verebilir.</li>
        <li><strong>Cihazı Sallamayın:</strong> Sallama hareketi, suyun daha derinlere nüfuz etmesine neden olabilir.</li>
        <li><strong>Hemen Şarj Etmeyin:</strong> Cihaz tamamen kurumadan şarj etmek, kalıcı hasara yol açabilir.</li>
      </ul>
      
      <h2>Profesyonel Yardım Alma Zamanı</h2>
      <p>Su hasarı, görünenden daha ciddi olabilir. Şu durumlarda mutlaka profesyonel yardım almalısınız:</p>
      <ul>
        <li>Deniz suyu veya klorlu su teması (daha koroziftir)</li>
        <li>Cihazın içinde görünür su damlaları</li>
        <li>Ekranda renk bozulmaları veya çizgiler</li>
        <li>Telefonun açılmaması veya düzgün çalışmaması</li>
      </ul>
      
      <p>MobilServis olarak, su hasarı yaşayan cihazlar için özel temizleme ve kurtarma hizmetleri sunmaktayız. Ultrasonik temizleme ve özel kurutma teknikleriyle cihazınızın kurtarılma şansını maksimuma çıkarıyoruz. Su hasarı durumunda zaman çok önemlidir, bu nedenle en kısa sürede servisimize başvurmanızı öneririz.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Mehmet Demir",
    date: "22 Nisan 2024",
    readTime: "6 dakika",
    category: "Acil Durumlar",
    tags: ["Su Hasarı", "Kurtarma", "Acil Müdahale", "Tamir"],
  },
  {
    id: "4",
    title: "Android ve iOS Arasındaki Veri Transferi Nasıl Yapılır?",
    slug: "android-ve-ios-arasindaki-veri-transferi-nasil-yapilir",
    excerpt:
      "Farklı işletim sistemleri arasında fotoğraf, rehber ve uygulama verilerinizi güvenle taşımanın adım adım yöntemleri.",
    content: `
      <p>Yeni bir telefon aldığınızda, özellikle farklı bir işletim sistemine geçiş yapıyorsanız, verilerinizi aktarmak zorlu olabilir. Bu rehberde, Android ve iOS arasında veri transferi yapmanın en etkili yollarını ele alacağız.</p>
      
      <h2>Android'den iOS'a Veri Aktarımı</h2>
      <p>Apple'ın "Android'den Geç" uygulaması, bu işlem için tasarlanmıştır:</p>
      <ol>
        <li>iOS cihazınızda kurulum sırasında veya "Ayarlar > Genel > Sıfırla > İçerik ve Ayarları Sıfırla" yolunu izleyerek başlayın.</li>
        <li>"Uygulamalar ve Veriler" ekranında "Android'den Veri Aktar" seçeneğini seçin.</li>
        <li>Android cihazınızda Google Play Store'dan "Android'den Geç" uygulamasını indirin.</li>
        <li>Her iki cihazda da uygulamayı açın ve ekrandaki talimatları izleyin.</li>
        <li>Aktarmak istediğiniz içerik türlerini (rehber, mesaj geçmişi, fotoğraflar, videolar, web yer imleri, e-posta hesapları) seçin.</li>
      </ol>
      
      <h2>iOS'tan Android'e Veri Aktarımı</h2>
      <p>Google Drive kullanarak veri aktarımı yapabilirsiniz:</p>
      <ol>
        <li>iOS cihazınızda App Store'dan Google Drive uygulamasını indirin ve Google hesabınızla giriş yapın.</li>
        <li>Google Drive uygulamasında, sol üst köşedeki menü simgesine dokunun, "Ayarlar" > "Yedekle" seçeneğini seçin.</li>
        <li>Yedeklemek istediğiniz içerik türlerini seçin ve "Yedeklemeyi Başlat" düğmesine dokunun.</li>
        <li>Yedekleme tamamlandıktan sonra, Android cihazınızda aynı Google hesabıyla oturum açın.</li>
        <li>Kurulum sırasında veya sonrasında, Google hesabınızdaki verileri geri yükleyebilirsiniz.</li>
      </ol>
      
      <h2>Üçüncü Parti Uygulamalar</h2>
      <p>Daha kapsamlı bir transfer için şu uygulamaları kullanabilirsiniz:</p>
      <ul>
        <li><strong>Smart Switch (Samsung):</strong> Samsung cihazlara veri aktarımı için özel olarak tasarlanmıştır.</li>
        <li><strong>MobileTrans:</strong> Hem Android hem de iOS arasında WhatsApp mesajları dahil çeşitli verileri aktarabilir.</li>
        <li><strong>AnyTrans:</strong> iOS ve Android arasında seçici veri transferi sağlar.</li>
      </ul>
      
      <h2>Bulut Hizmetleri Kullanımı</h2>
      <p>Google Fotoğraflar, Dropbox veya OneDrive gibi bulut hizmetleri, fotoğraf ve videolarınızı aktarmak için mükemmel seçeneklerdir. Bu hizmetler, işletim sisteminden bağımsız olarak çalışır.</p>
      
      <p>MobilServis olarak, yeni cihazınıza geçiş sürecinde profesyonel veri transferi hizmeti sunmaktayız. Deneyimli teknisyenlerimiz, verilerinizin güvenli ve eksiksiz bir şekilde aktarılmasını sağlar. Ayrıca, eski cihazınızdaki verilerin tamamen silinmesi konusunda da yardımcı olabiliriz.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Ayşe Yıldız",
    date: "10 Haziran 2024",
    readTime: "8 dakika",
    category: "Rehberler",
    tags: ["Veri Transferi", "Android", "iOS", "Yedekleme"],
  },
  {
    id: "5",
    title: "Akıllı Telefonunuzu Hızlandırmanın 5 Etkili Yöntemi",
    slug: "akilli-telefonunuzu-hizlandirmanin-5-etkili-yontemi",
    excerpt:
      "Eski telefonunuzu yeniden canlandırmak ve performansını artırmak için uygulayabileceğiniz pratik ipuçları.",
    content: `
      <p>Zamanla yavaşlayan akıllı telefonlar, kullanıcılar için büyük bir hayal kırıklığı olabilir. Yeni bir telefon almadan önce, mevcut cihazınızın performansını artırmak için deneyebileceğiniz etkili yöntemler var. İşte telefonunuzu hızlandırmak için 5 pratik öneri:</p>
      
      <h2>1. Depolama Alanını Optimize Edin</h2>
      <p>Dolmaya yaklaşan depolama alanı, telefon performansını ciddi şekilde etkiler. Şu adımları uygulayabilirsiniz:</p>
      <ul>
        <li>Kullanmadığınız uygulamaları kaldırın</li>
        <li>Fotoğraf ve videoları buluta yedekleyip silin</li>
        <li>Uygulama önbelleklerini temizleyin</li>
        <li>WhatsApp, Telegram gibi mesajlaşma uygulamalarındaki gereksiz medya dosyalarını silin</li>
      </ul>
      
      <h2>2. Arka Plan İşlemlerini Sınırlayın</h2>
      <p>Arka planda çalışan uygulamalar hem pil ömrünü kısaltır hem de performansı düşürür:</p>
      <ul>
        <li>Android: Ayarlar > Uygulamalar > Çalışan uygulamalar bölümünden kontrol edin</li>
        <li>iOS: Ayarlar > Genel > Arka Plan Uygulama Yenileme özelliğini sınırlayın</li>
        <li>Gereksiz bildirimleri kapatın</li>
      </ul>
      
      <h2>3. Arayüz Animasyonlarını Azaltın</h2>
      <p>Görsel efektler ve animasyonlar, cihazınızı yavaşlatabilir:</p>
      <ul>
        <li>Android: Geliştirici seçeneklerinden animasyon ölçeklerini 0.5x'e düşürün veya kapatın</li>
        <li>iOS: Ayarlar > Erişilebilirlik > Hareketi Azalt seçeneğini etkinleştirin</li>
      </ul>
      
      <h2>4. Yazılımı Güncel Tutun</h2>
      <p>Güncellemeler genellikle performans iyileştirmeleri içerir:</p>
      <ul>
        <li>İşletim sistemi güncellemelerini kontrol edin</li>
        <li>Uygulamaları güncel tutun</li>
        <li>Güncelleme sonrası cihazı yeniden başlatın</li>
      </ul>
      
      <h2>5. Fabrika Ayarlarına Sıfırlama</h2>
      <p>Diğer yöntemler işe yaramazsa, bu son çare olabilir:</p>
      <ul>
        <li>Tüm verilerinizi yedekleyin</li>
        <li>Cihazı fabrika ayarlarına sıfırlayın</li>
        <li>Sadece gerekli uygulamaları yeniden yükleyin</li>
      </ul>
      
      <p>Bu yöntemleri uyguladıktan sonra da telefonunuz hala yavaşsa, donanımsal bir sorun olabilir. MobilServis olarak, cihazınızın performans sorunlarını teşhis edip çözüm sunabiliriz. Batarya değişimi, hafıza optimizasyonu veya yazılım güncellemeleri ile telefonunuzu yeniden canlandırabiliriz.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Ali Kara",
    date: "5 Mayıs 2024",
    readTime: "5 dakika",
    category: "Performans",
    tags: ["Hızlandırma", "Optimizasyon", "Performans", "Temizlik"],
  },
]

// Blog kategorileri
export const blogCategories = [
  "Tamir İpuçları",
  "Bakım İpuçları",
  "Acil Durumlar",
  "Rehberler",
  "Performans",
  "Yeni Teknolojiler",
]

// Blog yazısını slug'a göre getiren yardımcı fonksiyon
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Tüm blog yazılarının slug'larını getiren yardımcı fonksiyon
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
