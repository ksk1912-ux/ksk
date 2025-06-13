// app/layout.tsx

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Bu satırı ekleyin

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
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme" // globals.css'teki seçici ile aynı olmalı
          defaultTheme="dark"
          enableSystem={false} // Sistem temasını şimdilik devre dışı bırakalım
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}