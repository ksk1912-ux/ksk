"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden theme-toggle" aria-label="Menüyü aç">
        <Menu className="h-5 w-5" />
      </button>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button onClick={closeMenu} className="absolute top-4 right-4 theme-toggle" aria-label="Menüyü kapat">
          <X className="h-5 w-5" />
        </button>

        <nav>
          <Link href="/hizmetler" onClick={closeMenu} className="text-muted hover:text-white transition-colors">
            Hizmetler
          </Link>
          <Link href="/iphone" onClick={closeMenu} className="text-muted hover:text-white transition-colors">
            iPhone
          </Link>
          <Link href="/samsung" onClick={closeMenu} className="text-muted hover:text-white transition-colors">
            Samsung
          </Link>
          <Link href="/huawei" onClick={closeMenu} className="text-muted hover:text-white transition-colors">
            Huawei
          </Link>
          <Link href="/blog" onClick={closeMenu} className="text-muted hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/yorumlar" onClick={closeMenu} className="text-muted hover:text-white transition-colors">
            Yorumlar
          </Link>
          <Link href="/iletisim" onClick={closeMenu} className="btn-outline-white inline-block text-center">
            İletişim
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu} />}
    </>
  )
}
