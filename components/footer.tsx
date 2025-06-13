import { Smartphone, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-6 w-6" />
              <span className="text-xl font-semibold">MobilServis</span>
            </div>
            <p className="text-muted">
              Kaliteli parçalar ve uzman teknisyenlerle profesyonel mobil cihaz onarım hizmetleri.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-muted">
              <li>Ekran Değişimi</li>
              <li>Batarya Değişimi</li>
              <li>Su Hasarı Onarımı</li>
              <li>Kamera Onarımı</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Markalar</h3>
            <ul className="space-y-2 text-muted">
              <li>iPhone</li>
              <li>Samsung</li>
              <li>Huawei</li>
              <li>Xiaomi</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-muted">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+90 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@mobilservis.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Teknoloji Cad. No:123, İstanbul</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted">
          <p>&copy; 2024 MobilServis. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
