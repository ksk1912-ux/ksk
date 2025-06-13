import Header from "@/components/header"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import ServiceCard from "@/components/service-card"
import HeroSection from "@/components/hero-section"
import { Smartphone, Battery, Zap, Camera, Shield, Download, Wrench, Clock, Scan } from "lucide-react"

const services = [
  {
    id: "on-cam-degisimi",
    title: "Ön Cam Değişimi",
    description: "Çatlak veya kırık ön cam değişimi. Orijinal kalitede parçalar ile profesyonel montaj.",
    icon: <Smartphone className="h-8 w-8" />,
    features: ["Orijinal kalite parçalar", "30 dakika hızlı servis", "90 gün garanti", "Ücretsiz temizlik"],
    priceRange: "299₺ - 899₺",
    duration: "30-45 dk",
    warranty: "90 gün",
    status: "available" as const,
    seoContent: {
      title: "Profesyonel Ön Cam Değişimi Hizmeti",
      description:
        "Telefonunuzun ön camı çatladı mı? Uzman teknisyenlerimiz ile hızlı ve güvenilir ön cam değişimi hizmeti alın. Orijinal parçalar, uygun fiyat ve garanti dahil.",
      keywords: "ön cam değişimi, telefon cam tamiri, mobil cam değişimi, ekran koruyucu",
    },
  },
  {
    id: "ekran-degisimi",
    title: "Ekran Değişimi",
    description: "LCD, OLED ve AMOLED ekran değişimi. Dokunmatik sorunları ve görüntü bozuklukları tamiri.",
    icon: <Smartphone className="h-8 w-8" />,
    features: ["Tüm ekran teknolojileri", "Dokunmatik kalibrasyonu", "Renk kalitesi testi", "Su geçirmezlik koruması"],
    priceRange: "599₺ - 2.499₺",
    duration: "1-2 saat",
    warranty: "90 gün",
    status: "popular" as const,
    seoContent: {
      title: "Mobil Cihaz Ekran Değişimi ve Tamiri",
      description:
        "Kırık, çizik veya dokunmatik sorunu yaşayan ekranınızı profesyonel olarak değiştiriyoruz. iPhone, Samsung, Huawei tüm modeller için hızlı ekran tamiri.",
      keywords: "ekran değişimi, LCD tamiri, OLED değişimi, dokunmatik tamiri, mobil ekran",
    },
  },
  {
    id: "batarya-degisimi",
    title: "Batarya Değişimi",
    description: "Hızla biten batarya sorunu çözümü. Orijinal kapasiteli bataryalar ile uzun kullanım süresi.",
    icon: <Battery className="h-8 w-8" />,
    features: [
      "Orijinal kapasiteli bataryalar",
      "Batarya sağlık testi",
      "Şarj döngüsü optimizasyonu",
      "Güvenlik sertifikalı parçalar",
    ],
    priceRange: "199₺ - 799₺",
    duration: "45-60 dk",
    warranty: "90 gün",
    status: "available" as const,
    seoContent: {
      title: "Profesyonel Batarya Değişimi Hizmeti",
      description:
        "Telefonunuz hızla mı bitiyor? Uzman teknisyenlerimiz ile orijinal batarya değişimi hizmeti. Tüm marka ve modeller için uygun fiyatlı batarya tamiri.",
      keywords: "batarya değişimi, pil tamiri, batarya ömrü, şarj sorunu, mobil batarya",
    },
  },
  {
    id: "face-id-onarimi",
    title: "Face ID Onarımı",
    description: "Face ID tanıma sorunu, TrueDepth kamera ve yüz tanıma sisteminin profesyonel tamiri.",
    icon: <Scan className="h-8 w-8" />,
    features: [
      "TrueDepth kamera sistemi",
      "Yüz tanıma kalibrasyonu",
      "Infrared sensör tamiri",
      "Orijinal Apple parçaları",
    ],
    priceRange: "899₺ - 1.899₺",
    duration: "2-3 saat",
    warranty: "90 gün",
    status: "premium" as const,
    seoContent: {
      title: "iPhone Face ID Onarımı ve Tamiri",
      description:
        "Face ID çalışmıyor mu? TrueDepth kamera sistemi tamiri ile yüz tanıma özelliğini geri kazanın. Uzman teknisyenler, orijinal parçalar.",
      keywords: "face id tamiri, yüz tanıma sorunu, truedepth kamera, iphone face id, biometric onarım",
    },
  },
  {
    id: "sarj-soketi-degisimi",
    title: "Şarj Soketi Değişimi",
    description: "Şarj alamayan, gevşek veya bozuk şarj soketlerinin tamiri ve değişimi.",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Lightning, USB-C, Micro USB",
      "Şarj hızı optimizasyonu",
      "Bağlantı stabilitesi testi",
      "Su hasarı koruması",
    ],
    priceRange: "149₺ - 599₺",
    duration: "30-45 dk",
    warranty: "90 gün",
    status: "available" as const,
    seoContent: {
      title: "Şarj Soketi Tamiri ve Değişimi",
      description:
        "Telefonunuz şarj olmuyor mu? Şarj soketi gevşek mi? Profesyonel şarj soketi tamiri ile cihazınızı yeniden hayata döndürün. Hızlı servis, uygun fiyat.",
      keywords: "şarj soketi tamiri, şarj alamıyor, USB-C tamiri, Lightning tamiri, şarj sorunu",
    },
  },
  {
    id: "kamera-degisimi",
    title: "Kamera Değişimi",
    description: "Ön ve arka kamera değişimi. Bulanık görüntü, odaklama ve flaş sorunlarının çözümü.",
    icon: <Camera className="h-8 w-8" />,
    features: ["Ön ve arka kamera tamiri", "Odaklama sistemi ayarı", "Flaş modülü değişimi", "Görüntü kalitesi testi"],
    priceRange: "299₺ - 1.299₺",
    duration: "1-2 saat",
    warranty: "90 gün",
    status: "premium" as const,
    seoContent: {
      title: "Mobil Cihaz Kamera Tamiri ve Değişimi",
      description:
        "Kameranız bulanık mı çekiyor? Odaklanamıyor mu? Profesyonel kamera tamiri ile fotoğraf kalitesini geri kazanın. Ön ve arka kamera değişimi hizmeti.",
      keywords: "kamera tamiri, bulanık kamera, odaklama sorunu, kamera değişimi, fotoğraf kalitesi",
    },
  },
  {
    id: "lazerli-arka-cam-degisimi",
    title: "Lazerli Arka Cam Değişimi",
    description: "Lazer teknolojisi ile hassas arka cam değişimi. Orijinal tasarım ve su geçirmezlik koruması.",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "Lazer kesim teknolojisi",
      "Orijinal tasarım koruması",
      "Su geçirmezlik sağlama",
      "Mükemmel uyum garantisi",
    ],
    priceRange: "399₺ - 1.499₺",
    duration: "2-3 saat",
    warranty: "90 gün",
    status: "premium" as const,
    seoContent: {
      title: "Lazerli Arka Cam Değişimi Hizmeti",
      description:
        "Arka camınız kırıldı mı? Lazer teknolojisi ile hassas arka cam değişimi. Orijinal görünüm ve su geçirmezlik koruması ile profesyonel hizmet.",
      keywords: "arka cam değişimi, lazerli cam tamiri, cam kırığı, arka panel tamiri",
    },
  },
  {
    id: "yazilim-guncelleme",
    title: "Yazılım Güncelleme",
    description: "İşletim sistemi güncellemeleri, yazılım optimizasyonu ve performans iyileştirmeleri.",
    icon: <Download className="h-8 w-8" />,
    features: [
      "İOS ve Android güncellemeleri",
      "Performans optimizasyonu",
      "Güvenlik yamaları",
      "Veri yedekleme hizmeti",
    ],
    priceRange: "99₺ - 299₺",
    duration: "30-60 dk",
    warranty: "30 gün",
    status: "available" as const,
    seoContent: {
      title: "Mobil Cihaz Yazılım Güncelleme Hizmeti",
      description:
        "Telefonunuz yavaş mı çalışıyor? Yazılım güncellemeleri ile cihazınızın performansını artırın. iOS ve Android güncellemeleri, güvenlik yamaları.",
      keywords: "yazılım güncelleme, iOS güncelleme, Android güncelleme, telefon yavaş, performans",
    },
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section - Kompakt ve ortalanmış varyant */}
        <HeroSection
          title="Profesyonel Onarım Hizmetleri"
          subtitle="Uzman teknisyenlerimiz ile tüm mobil cihaz onarım hizmetleri. Orijinal parçalar, hızlı servis ve 90 gün garanti ile güvenilir çözümler."
          variant="compact"
          showFeatures={false}
        />

        {/* Services Grid */}
        <section className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">Hizmetlerimiz</h2>
            <p className="text-xl text-muted">Tüm mobil cihaz onarım ihtiyaçlarınız için profesyonel çözümler</p>
          </div>

          <div className="service-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container-custom section-padding">
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
              <p className="text-lg text-muted max-w-3xl mx-auto mb-8">
                Mobil cihaz onarımında 10+ yıllık deneyim ve binlerce memnun müşteri. Farkımızı keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Uzman Teknisyenler</h3>
                <p className="text-muted text-sm">Sertifikalı ve sürekli eğitim alan deneyimli teknisyen kadromuz</p>
              </div>

              <div className="text-center bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">90 Gün Garanti</h3>
                <p className="text-muted text-sm">Tüm onarımlar parça ve işçilik garantisi kapsamındadır</p>
              </div>

              <div className="text-center bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Hızlı Servis</h3>
                <p className="text-muted text-sm">Çoğu onarım aynı gün, bazıları ise siz beklerken tamamlanır</p>
              </div>

              <div className="text-center bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Orijinal Parçalar</h3>
                <p className="text-muted text-sm">Yüksek kaliteli orijinal veya OEM parçalar kullanıyoruz</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="glass-card p-6 max-w-3xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">5000+</div>
                    <div className="text-sm text-muted">Onarılan Cihaz</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">4.9/5</div>
                    <div className="text-sm text-muted">Müşteri Memnuniyeti</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">30+</div>
                    <div className="text-sm text-muted">Model Desteği</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">%98</div>
                    <div className="text-sm text-muted">Başarı Oranı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-custom section-padding">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">Cihazınızı Onarmaya Hazır mısınız?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Profesyonel onarım hizmetlerimiz ile cihazınızı yeniden hayata döndürün. Hızlı servis, uygun fiyat ve
              garanti dahil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-success">Ücretsiz Fiyat Teklifi</button>
              <button className="btn-outline-info">WhatsApp'tan İletişim</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CTAButton />
    </div>
  )
}

export const metadata = {
  title: "Profesyonel Mobil Cihaz Onarım Hizmetleri | MobilServis",
  description:
    "iPhone, Samsung, Huawei için profesyonel onarım hizmetleri. Ekran değişimi, batarya tamiri, Face ID onarımı, kamera tamiri ve daha fazlası. 90 gün garanti, hızlı servis.",
  keywords:
    "mobil onarım, telefon tamiri, ekran değişimi, batarya değişimi, face id tamiri, kamera tamiri, şarj soketi tamiri, yazılım güncelleme",
  openGraph: {
    title: "Profesyonel Mobil Cihaz Onarım Hizmetleri",
    description:
      "Uzman teknisyenler ile hızlı ve güvenilir mobil cihaz onarım hizmetleri. Orijinal parçalar ve 90 gün garanti.",
    type: "website",
  },
}
