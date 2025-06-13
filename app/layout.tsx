import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MobilServis - Profesyonel Mobil Cihaz Onarımı",
  description: "iPhone, Samsung, Huawei ve daha fazlası için uzman onarım hizmetleri. Hızlı, güvenilir ve garantili.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
