import Header from "@/components/header"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import Link from "next/link"
import { blogPosts, blogCategories } from "@/data/blog-data"
import { Clock, Calendar, Tag } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container-custom section-padding">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow mb-6">Blog</h1>
            <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-8">
              Mobil cihaz onarımı, bakımı ve teknoloji dünyasındaki son gelişmeler hakkında uzman içerikler
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="glass-card p-6 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-white/5 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </Link>

                  <div className="flex items-center space-x-4 text-sm text-muted mb-3">
                    <span className="bg-white/10 px-3 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold mb-3 hover:text-white transition-colors">{post.title}</h2>
                  </Link>

                  <p className="text-muted mb-4">{post.excerpt}</p>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted">
                      <span>Yazar: {post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium hover:text-white transition-colors flex items-center"
                    >
                      Devamını Oku
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Kategoriler</h3>
              <ul className="space-y-2">
                {blogCategories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog?category=${encodeURIComponent(category)}`}
                      className="flex items-center justify-between text-muted hover:text-white transition-colors py-2"
                    >
                      <span>{category}</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                        {blogPosts.filter((post) => post.category === category).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Popüler Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
                  .slice(0, 10)
                  .map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="bg-white/10 hover:bg-white/20 transition-colors px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Link>
                  ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Son Yazılar</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`} className="block">
                    <div className="flex items-start space-x-3 group">
                      <div className="w-16 h-16 bg-white/5 rounded shrink-0 overflow-hidden">
                        <img
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-white transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-muted mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Cihaz Sorununuz mu Var?</h3>
              <p className="text-muted mb-4">Uzman teknisyenlerimiz tüm mobil cihaz sorunlarınızı çözmeye hazır.</p>
              <Link href="/iletisim" className="btn-primary w-full">
                Hemen İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CTAButton />
    </div>
  )
}

export const metadata = {
  title: "Blog | MobilServis - Mobil Cihaz Onarımı ve Teknoloji",
  description:
    "Mobil cihaz onarımı, bakımı ve teknoloji dünyasındaki son gelişmeler hakkında uzman içerikler. iPhone, Samsung ve diğer markalar için ipuçları.",
  keywords:
    "mobil cihaz blog, telefon tamiri ipuçları, akıllı telefon bakımı, teknoloji blog, iPhone tamir, Samsung tamir",
  openGraph: {
    title: "Blog | MobilServis",
    description: "Mobil cihaz onarımı ve teknoloji dünyası hakkında uzman içerikler",
    type: "website",
  },
}
