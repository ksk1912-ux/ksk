export interface Review {
  id: string
  customerName: string
  rating: number
  date: string
  device: string
  service: string
  content: string
  verified: boolean
  response?: {
    author: string
    content: string
    date: string
  }
}

export const reviews: Review[] = [
  {
    id: "1",
    customerName: "Mehmet Yılmaz",
    rating: 5,
    date: "12 Haziran 2024",
    device: "iPhone 13 Pro",
    service: "Ekran Değişimi",
    content:
      "Ekranım tamamen kırılmıştı ve dokunmatik çalışmıyordu. MobilServis'e getirdim ve sadece 2 saat içinde telefonum yepyeni gibi oldu. Kullanılan parçalar orijinal, hizmet hızlı ve fiyat da gayet uygundu. Kesinlikle tavsiye ederim!",
    verified: true,
    response: {
      author: "MobilServis Ekibi",
      content: "Değerli yorumunuz için teşekkür ederiz Mehmet Bey. Tekrar görüşmek dileğiyle!",
      date: "12 Haziran 2024",
    },
  },
  {
    id: "2",
    customerName: "Ayşe Kaya",
    rating: 4,
    date: "5 Haziran 2024",
    device: "Samsung Galaxy S23",
    service: "Batarya Değişimi",
    content:
      "Telefonum çok hızlı şarj bitiriyordu. Batarya değişimi için MobilServis'i tercih ettim. İşlem sonrası batarya performansı çok iyi oldu. Tek eksik, randevu saatinde biraz gecikme yaşanması oldu, bu yüzden 4 yıldız veriyorum. Yine de hizmet kalitesi tatmin ediciydi.",
    verified: true,
  },
  {
    id: "3",
    customerName: "Ali Demir",
    rating: 5,
    date: "28 Mayıs 2024",
    device: "iPhone 12",
    service: "Su Hasarı Onarımı",
    content:
      "Telefonum havuza düştü ve hiç açılmıyordu. Başka servislerde kurtarılamaz denildi ama MobilServis ekibi telefonu tamamen kurtardı! Tüm verilerim duruyordu. İnanılmaz bir hizmet, çok teşekkürler.",
    verified: true,
    response: {
      author: "MobilServis Teknik Ekibi",
      content:
        "Ali Bey merhaba, su hasarı durumlarında hızlı müdahale çok önemlidir. Doğru kararı verip hemen bize getirdiğiniz için biz de teşekkür ederiz. Cihazınızı sağlıkla kullanmanız dileğiyle.",
      date: "29 Mayıs 2024",
    },
  },
  {
    id: "4",
    customerName: "Zeynep Şahin",
    rating: 3,
    date: "15 Mayıs 2024",
    device: "Huawei P40 Pro",
    service: "Kamera Değişimi",
    content:
      "Kamera değişimi için servise bıraktım. İşlem beklenenden uzun sürdü (3 gün) ve fiyat telefonda konuştuğumuzdan biraz daha yüksekti. Ancak sonuç olarak kamera sorunsuz çalışıyor ve kalitesi iyi. Bu nedenle ortalama bir puan veriyorum.",
    verified: true,
    response: {
      author: "MobilServis Müşteri Hizmetleri",
      content:
        "Zeynep Hanım, yaşanan gecikme için özür dileriz. Huawei P40 Pro için kamera parçasının tedarikinde beklenmedik bir gecikme yaşandı. Fiyat farkı konusunda da sizi önceden bilgilendirmemiz gerekirdi. Geri bildiriminiz için teşekkür eder, tekrar hizmet vermek isteriz.",
      date: "16 Mayıs 2024",
    },
  },
  {
    id: "5",
    customerName: "Emre Yıldız",
    rating: 5,
    date: "10 Mayıs 2024",
    device: "iPhone 14 Pro Max",
    service: "Face ID Onarımı",
    content:
      "Face ID çalışmıyordu ve Apple Store'da değişim için çok yüksek bir fiyat teklif edildi. MobilServis'te çok daha uygun bir fiyata ve profesyonel bir şekilde onarıldı. Şimdi sorunsuz çalışıyor. Teknik bilgileri de detaylı bir şekilde açıkladılar.",
    verified: true,
  },
  {
    id: "6",
    customerName: "Mustafa Öztürk",
    rating: 5,
    date: "3 Mayıs 2024",
    device: "Samsung Galaxy A54",
    service: "Ekran Değişimi",
    content:
      "Ekranım çatlamıştı ve dokunmatik düzgün çalışmıyordu. MobilServis'te aynı gün içinde değiştirildi. Kullanılan ekran kaliteli ve orijinal. Fiyat da piyasaya göre uygundu. Ayrıca 3 aylık garanti verilmesi de güven verici.",
    verified: true,
  },
  {
    id: "7",
    customerName: "Deniz Aydın",
    rating: 4,
    date: "25 Nisan 2024",
    device: "iPhone 13 mini",
    service: "Şarj Soketi Değişimi",
    content:
      "Telefonum şarj almıyordu, soket değişimi gerekti. İşlem hızlı yapıldı ve sorun çözüldü. Servis personeli ilgili ve bilgiliydi. Tek eksik, bekleme alanının biraz daha konforlu olabilmesi.",
    verified: true,
  },
  {
    id: "8",
    customerName: "Selin Korkmaz",
    rating: 5,
    date: "18 Nisan 2024",
    device: "iPhone 11",
    service: "Batarya Değişimi",
    content:
      "3 yıllık telefonumun bataryası çok kötüydü, 2 saatte bitiyordu. MobilServis'te değişim sonrası adeta yeni telefon gibi oldu. Şimdi tam gün kullanabiliyorum. Üstelik işlem sadece 45 dakika sürdü ve ben beklerken yapıldı.",
    verified: true,
    response: {
      author: "MobilServis Ekibi",
      content:
        "Selin Hanım, olumlu yorumunuz için teşekkür ederiz. iPhone 11 modelinde batarya değişimi sonrası performans artışı genellikle çok belirgin oluyor. Tekrar görüşmek dileğiyle!",
      date: "19 Nisan 2024",
    },
  },
  {
    id: "9",
    customerName: "Burak Yılmaz",
    rating: 2,
    date: "10 Nisan 2024",
    device: "Samsung Galaxy S22",
    service: "Arka Cam Değişimi",
    content:
      "Arka camın değişimi için servise bıraktım. İşlem sonrası kamera odaklanma sorunu yaşamaya başladım. Geri götürdüğümde sorunun başka bir şeyden kaynaklandığını söylediler ama ben değişim sonrası başladığından eminim. Ek ücret talep edildi.",
    verified: true,
    response: {
      author: "MobilServis Teknik Müdürü",
      content:
        "Burak Bey, yaşadığınız sorun için üzgünüz. Servisimize tekrar gelmenizi ve cihazınızı detaylı incelememize izin vermenizi rica ederiz. Sorunu çözmek için elimizden geleni yapacağız. Lütfen müşteri hizmetlerimizle iletişime geçin.",
      date: "11 Nisan 2024",
    },
  },
  {
    id: "10",
    customerName: "Elif Yıldırım",
    rating: 5,
    date: "5 Nisan 2024",
    device: "iPhone 12 Pro",
    service: "Hoparlör Değişimi",
    content:
      "Hoparlörden ses gelmiyordu, MobilServis'te hızlı bir şekilde değiştirildi. Fiyat gayet uygundu ve servis personeli çok ilgiliydi. Ayrıca telefonu teslim almadan önce test etmem için zaman tanıdılar. Kesinlikle tavsiye ederim.",
    verified: true,
  },
]

// Yardımcı fonksiyonlar
export function getAverageRating(): number {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return total / reviews.length
}

export function getRatingDistribution(): { [key: number]: number } {
  const distribution: { [key: number]: number } = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  }

  reviews.forEach((review) => {
    distribution[review.rating]++
  })

  return distribution
}
