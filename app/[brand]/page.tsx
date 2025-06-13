import Header from "@/components/header"
import Footer from "@/components/footer"
import ModelCard from "@/components/model-card"
import CTAButton from "@/components/cta-button"
import { notFound } from "next/navigation"
import { AppleLogo, SamsungLogo, HuaweiLogo } from "@/components/brand-logos"
import { getBrandData, getAllBrandSlugs } from "@/data/brands-data"

function getBrandLogo(brandName: string) {
  switch (brandName.toLowerCase()) {
    case "iphone":
      return <AppleLogo className="h-16 w-16" />
    case "samsung":
      return <SamsungLogo className="h-16 w-16" />
    case "huawei":
      return <HuaweiLogo className="h-16 w-16" />
    default:
      return <span className="text-4xl text-muted">{brandName.charAt(0)}</span>
  }
}

interface BrandPageProps {
  params: {
    brand: string
  }
}

export default function BrandPage({ params }: BrandPageProps) {
  const brandData = getBrandData(params.brand)

  if (!brandData) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container-custom section-padding">
        <div className="text-center mb-12 fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center">
              {getBrandLogo(brandData.name)}
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-glow mb-4">
            {brandData.name} Onarım Hizmetleri
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">{brandData.description}</p>
        </div>

        <div className="model-grid">
          {brandData.models.map((model, index) => (
            <div key={model.slug} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ModelCard
                brand={params.brand}
                model={model.model}
                slug={model.slug}
                repairCount={model.repairCount}
                startingPrice={model.startingPrice}
              />
            </div>
          ))}
        </div>

        <div className="glass-card p-8 mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Modelinizi bulamadınız mı?</h2>
          <p className="text-muted mb-6">
            Daha birçok {brandData.name} modelini onarıyoruz. Özel fiyat teklifi için bizimle iletişime geçin.
          </p>
          <button className="btn-primary">Ücretsiz Fiyat Teklifi Al</button>
        </div>
      </main>

      <Footer />
      <CTAButton />
    </div>
  )
}

export function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ brand: slug }))
}
