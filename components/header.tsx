import Link from "next/link"
import { Smartphone } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="header-nav sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Smartphone className="h-6 w-6" />
            <span className="text-xl font-semibold text-glow">MobilServis</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/hizmetler" className="text-muted hover:text-white transition-colors">
              Hizmetler
            </Link>
            <Link href="/iphone" className="text-muted hover:text-white transition-colors">
              iPhone
            </Link>
            <Link href="/samsung" className="text-muted hover:text-white transition-colors">
              Samsung
            </Link>
            <Link href="/huawei" className="text-muted hover:text-white transition-colors">
              Huawei
            </Link>
            <Link href="/blog" className="text-muted hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/yorumlar" className="text-muted hover:text-white transition-colors">
              Yorumlar
            </Link>
            <Link href="/iletisim" className="btn-outline-white">
              İletişim
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
