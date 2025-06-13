import Link from "next/link"
import { Wrench } from "lucide-react"
import { AppleLogo, SamsungLogo, HuaweiLogo } from "./brand-logos"

interface ModelCardProps {
  brand: string
  model: string
  slug: string
  image?: string
  repairCount: number
  startingPrice: string
}

function getBrandLogo(brand: string) {
  switch (brand.toLowerCase()) {
    case "iphone":
      return <AppleLogo className="h-12 w-12" />
    case "samsung":
      return <SamsungLogo className="h-12 w-12" />
    case "huawei":
      return <HuaweiLogo className="h-12 w-12" />
    default:
      return <span className="text-4xl text-muted">{brand.charAt(0)}</span>
  }
}

export default function ModelCard({ brand, model, slug, repairCount, startingPrice }: ModelCardProps) {
  return (
    <Link href={`/${brand.toLowerCase()}/${slug}`}>
      <div className="glass-card p-6 hover:bg-white/10 transition-all duration-200 fade-in cursor-pointer">
        <div className="aspect-square bg-white/5 rounded-lg mb-4 flex items-center justify-center">
          {getBrandLogo(brand)}
        </div>

        <h3 className="text-xl font-semibold mb-2">{model}</h3>

        <div className="flex items-center justify-between text-muted mb-4">
          <div className="flex items-center space-x-1">
            <Wrench className="h-4 w-4" />
            <span className="text-sm">{repairCount} hizmet</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-muted font-semibold text-sm">₺</span>
            <span className="text-sm">{startingPrice}₺'den başlayan</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
