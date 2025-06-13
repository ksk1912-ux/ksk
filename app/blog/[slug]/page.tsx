import Header from "@/components/header"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "@/data/blog-data"
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // İlgili yazılar - aynı kategorideki diğer yazılar
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Blog'a Dön</span>
            </Link>
          </div>

          {/* Post Header */}
          <div className="mb-8 fade-in">
            <div className="flex items-center space-x-4 text-sm text-muted mb-4">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-glow mb-6">{post.title}</h1>
            <p className="text-xl text-muted">{post.excerpt}</p>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-white/5 rounded-lg mb-8 overflow-hidden">
            <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Author */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold">{post.author.charAt(0)}</span>
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-muted">Yazar</div>
            </div>
          </div>

          {/* Content */}
          <div className="glass-card p-8 mb-8">
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="text-sm text-muted mb-2">Etiketler:</div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
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

          {/* Share */}
          <div className="glass-card p-6 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-semibold mb-1">Bu yazıyı paylaşın</h3>
                <p className="text-sm text-muted">Faydalı bulduysanız arkadaşlarınızla paylaşın</p>
              </div>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-white/10 hover:bg-blue-600 transition-colors rounded-full flex items-center justify-center">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-blue-400 transition-colors rounded-full flex items-center justify-center">
                  <Twitter className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-blue-700 transition-colors rounded-full flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-gray-600 transition-colors rounded-full flex items-center justify-center">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">İlgili Yazılar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Link key={index} href={`/blog/${relatedPost.slug}`}>
                    <div className="glass-card p-4 h-full hover:bg-white/10 transition-colors">
                      <div className="aspect-video bg-white/5 rounded-lg mb-3 overflow-hidden">
                        <img
                          src={relatedPost.coverImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <h3 className="font-medium mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <div className="flex items-center text-xs text-muted">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Cihazınızla İlgili Sorun mu Yaşıyorsunuz?</h2>
            <p className="text-lg text-muted mb-6">
              Uzman teknisyenlerimiz tüm mobil cihaz sorunlarınızı çözmeye hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn-primary">
                Ücretsiz Fiyat Teklifi
              </Link>
              <Link href="/hizmetler" className="btn-outline-white">
                Hizmetlerimizi İnceleyin
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

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
      description: "Aradığınız blog yazısı bulunamadı.",
    }
  }

  return {
    title: `${post.title} | MobilServis Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}
