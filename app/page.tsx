import Header from "@/components/header"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import HeroSection from "@/components/hero-section"
import Link from "next/link"
import { Clock, Shield, Award, ArrowRight } from "lucide-react"
import { AppleLogo, SamsungLogo, HuaweiLogo } from "@/components/brand-logos"

export default function HomePage() {
  const brands = [
    {
      name: "iPhone",
      slug: "iphone",
      models: "15+ Model",
      logo: <AppleLogo className="h-12 w-12" />,
    },
    {
      name: "Samsung",
      slug: "samsung",
      models: "20+ Model",
      logo: <SamsungLogo className="h-12 w-12" />,
    },
    {
      name: "Huawei",
      slug: "huawei",
      models: "10+ Model",
      logo: <HuaweiLogo className="h-12 w-12" />,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Ana Bölüm - Hero Section - Ortalanmış ve düzenlenmiş */}
        <HeroSection
          variant="centered"
          showFeatures={true}
          title="Profesyonel Mobil Cihaz Onarımı"
          subtitle="Tüm akıllı telefon markalarında uzman onarım hizmetleri. Hızlı, güvenilir ve garantili çözümler."
        />

        {/* Markalar Bölümü */}
        <section className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">Desteklenen Markalar</h2>
            <p className="text-xl text-muted">Tüm büyük akıllı telefon markalarını orijinal parçalarla onarıyoruz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <Link key={brand.slug} href={`/${brand.slug}`}>
                <div
                  className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-200 slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    {brand.logo}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{brand.name}</h3>
                  <p className="text-muted mb-4">{brand.models}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span>Modelleri Görüntüle</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Özellikler Bölümü */}
        <section className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto mb-8">
              Mobil cihaz onarımında 10+ yıllık deneyim ve binlerce memnun müşteri. Farkımızı keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-linear-to-br from-green-400/20 to-green-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Güvenilir Hizmet</h3>
              <p className="text-muted mb-4">
                Tüm onarımlar 90 gün garantilidir. Orijinal veya orijinal kalitesinde yedek parçalar kullanıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">90 gün yazılı garanti</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">Orijinal parça kullanımı</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">Şeffaf fiyatlandırma</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-linear-to-br from-blue-400/20 to-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hızlı Çözüm</h3>
              <p className="text-muted mb-4">
                Zamanınızın değerli olduğunu biliyoruz. Çoğu onarımı aynı gün içinde, bazılarını ise siz beklerken
                tamamlıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">Aynı gün teslimat</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">Randevusuz hizmet</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">Ücretsiz teşhis</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-linear-to-br from-purple-400/20 to-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Uzman Ekip</h3>
              <p className="text-muted mb-4">
                Sertifikalı ve deneyimli teknisyenlerimiz, en karmaşık sorunları bile çözebilecek bilgi ve donanıma
                sahiptir.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">Sertifikalı teknisyenler</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">10+ yıl deneyim</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  <span className="text-sm text-muted">Sürekli eğitim</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Çağrı Bölümü */}
        <section className="container-custom section-padding">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">Cihazınızı Onarmaya Hazır mısınız?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Akıllı telefonunuzu uzman teknisyenlerimize teslim edin. Hızlı hizmet, kaliteli parçalar ve garanti dahil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Ücretsiz Fiyat Teklifi</button>
              <button className="btn-outline-white">WhatsApp'tan İletişim</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CTAButton />
    </div>
  )
}
