import Header from "@/components/header"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import { reviews, getAverageRating, getRatingDistribution } from "@/data/reviews-data"
import { Star, CheckCircle, MessageSquare } from "lucide-react"

export default function ReviewsPage() {
  const averageRating = getAverageRating()
  const ratingDistribution = getRatingDistribution()

  // Yıldız sayısına göre yüzde hesaplama
  const calculatePercentage = (rating: number) => {
    return (ratingDistribution[rating] / reviews.length) * 100
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container-custom section-padding">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow mb-6">Müşteri Yorumları</h1>
            <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-8">
              Müşterilerimizin deneyimleri ve geri bildirimleri bizim için çok değerli. İşte onların MobilServis
              hakkındaki düşünceleri.
            </p>
          </div>
        </section>

        {/* Rating Summary */}
        <div className="glass-card p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                  />
                ))}
              </div>
              <div className="text-muted">{reviews.length} yorum</div>
            </div>

            {/* Rating Distribution */}
            <div className="col-span-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center mb-2">
                  <div className="w-12 text-right mr-2">{rating} yıldız</div>
                  <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400" style={{ width: `${calculatePercentage(rating)}%` }}></div>
                  </div>
                  <div className="w-12 text-left ml-2 text-sm text-muted">{ratingDistribution[rating]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-6 mb-12">
          {reviews.map((review, index) => (
            <div key={review.id} className="glass-card p-6 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="font-semibold mr-2">{review.customerName}</div>
                    {review.verified && (
                      <div className="flex items-center text-green-400 text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        <span>Doğrulanmış Müşteri</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted mb-2">{review.date}</div>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-lg text-sm mt-2 md:mt-0">
                  <div className="font-medium">{review.device}</div>
                  <div className="text-muted">{review.service}</div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-muted">{review.content}</p>
              </div>

              {review.response && (
                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-4 w-4 mr-2 text-blue-400" />
                    <div className="font-medium">{review.response.author}</div>
                    <div className="text-xs text-muted ml-2">{review.response.date}</div>
                  </div>
                  <p className="text-sm text-muted">{review.response.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Leave Review CTA */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Deneyiminizi Paylaşın</h2>
          <p className="text-lg text-muted mb-6">
            Hizmetlerimizden memnun kaldıysanız veya önerileriniz varsa, lütfen bizimle paylaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Yorum Yazın</button>
            <button className="btn-outline-white">Google'da Değerlendirin</button>
          </div>
        </div>
      </main>

      <Footer />
      <CTAButton />
    </div>
  )
}

export const metadata = {
  title: "Müşteri Yorumları | MobilServis - Mobil Cihaz Onarımı",
  description:
    "MobilServis müşterilerinin deneyimleri ve geri bildirimleri. Telefon tamiri, ekran değişimi ve diğer hizmetlerimiz hakkında gerçek müşteri yorumları.",
  keywords:
    "müşteri yorumları, telefon tamiri yorumları, ekran değişimi deneyimleri, mobil servis değerlendirmeleri, iPhone tamiri yorumları",
  openGraph: {
    title: "Müşteri Yorumları | MobilServis",
    description: "Müşterilerimizin deneyimleri ve geri bildirimleri",
    type: "website",
  },
}
