import type React from "react"
import { Clock, Shield, CheckCircle } from "lucide-react"

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    features: string[]
    priceRange: string
    duration: string
    warranty: string
    status?: "available" | "popular" | "premium"
    seoContent: {
      title: string
      description: string
      keywords: string
    }
  }
}

function getStatusBadge(status?: string) {
  switch (status) {
    case "available":
      return (
        <span className="status-badge status-available">
          <CheckCircle className="h-3 w-3" />
          Mevcut
        </span>
      )
    case "popular":
      return (
        <span className="status-badge status-popular">
          <CheckCircle className="h-3 w-3" />
          Popüler
        </span>
      )
    case "premium":
      return (
        <span className="status-badge status-premium">
          <CheckCircle className="h-3 w-3" />
          Premium
        </span>
      )
    default:
      return (
        <span className="status-badge status-available">
          <CheckCircle className="h-3 w-3" />
          Mevcut
        </span>
      )
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`service-card p-6 h-full flex flex-col ${service.status === "premium" ? "premium" : ""} ${service.status === "popular" ? "popular" : ""}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="service-icon w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
            {service.icon}
          </div>
          <div className="flex-1">
            <h3 className="service-title text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          </div>
        </div>
        {getStatusBadge(service.status)}
      </div>

      {/* Features */}
      <div className="mb-6 flex-1">
        <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Hizmet Özellikleri</h4>
        <ul className="feature-list">
          {service.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <div className="feature-dot" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Info Grid */}
      <div className="info-grid grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-lg">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="text-muted font-semibold">₺</span>
          </div>
          <div className="text-xs text-muted mb-1">Fiyat</div>
          <div className="text-sm font-medium">{service.priceRange}</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Clock className="h-4 w-4 text-muted" />
          </div>
          <div className="text-xs text-muted mb-1">Süre</div>
          <div className="text-sm font-medium">{service.duration}</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Shield className="h-4 w-4 text-muted" />
          </div>
          <div className="text-xs text-muted mb-1">Garanti</div>
          <div className="text-sm font-medium">{service.warranty}</div>
        </div>
      </div>
    </div>
  )
}
