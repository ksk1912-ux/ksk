"use client"

import { MessageCircle } from "lucide-react"

export default function CTAButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "905551234567" // Türkiye telefon numarası formatı
    const message = "Merhaba! Cihaz onarımı konusunda yardıma ihtiyacım var."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button onClick={handleWhatsAppClick} className="cta-fixed" aria-label="WhatsApp'tan bize ulaşın">
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
