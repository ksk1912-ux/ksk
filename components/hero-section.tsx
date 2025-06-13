"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Clock, Award, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  showFeatures?: boolean
  showCTA?: boolean
  variant?: "default" | "compact" | "centered"
  backgroundImage?: string
}

export default function HeroSection({
  title = "Profesyonel Mobil Cihaz Onarım Hizmetleri",
  subtitle = "iPhone, Samsung ve Huawei için uzman onarım hizmetleri. Hızlı, güvenilir ve garantili çözümler.",
  showFeatures = true,
  showCTA = true,
  variant = "default",
  backgroundImage,
}: HeroSectionProps) {
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStats(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: i * 0.1 + 0.5,
      },
    }),
  }

  // Telefon görselleri
  const phoneImages = [
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "iPhone Onarım",
      title: "iPhone Onarımı",
      description: "Ekran, batarya ve kamera değişimi",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Samsung Onarım",
      title: "Samsung Onarımı",
      description: "Su hasarı ve anakart tamiri",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Huawei Onarım",
      title: "Huawei Onarımı",
      description: "Şarj soketi ve hoparlör değişimi",
    },
  ]

  return (
    <section
      className={`relative overflow-hidden ${
        variant === "compact" ? "py-16" : "py-20 md:py-28"
      } bg-gradient-to-br from-black to-purple-950/30`}
    >
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10" />
            <img
              src={backgroundImage || "/placeholder.svg"}
              alt="Background"
              className="w-full h-full object-cover object-center"
            />
          </>
        ) : (
          <>
            {/* Gradient arka plan */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black" />

            {/* Dekoratif ışık efektleri */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

            {/* Dekoratif grid */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5" />
          </>
        )}
      </div>

      {/* Ana içerik */}
      <div className="container-custom relative z-10">
        {/* Başlık ve açıklama - Tüm varyantlarda göster */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/20 mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
              #1 Mobil Cihaz Onarım Servisi
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 text-transparent bg-clip-text"
          >
            {title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </motion.p>

          {/* CTA Butonları */}
          {showCTA && (
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/iletisim"
                className="relative overflow-hidden group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-lg shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300"
              >
                <span className="relative z-10">Ücretsiz Fiyat Teklifi</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>

              <Link
                href="/hizmetler"
                className="group px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <span>Hizmetlerimizi Keşfedin</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Telefon Görselleri - Kompakt varyantta gösterme */}
        {variant !== "compact" && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {phoneImages.map((phone, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-2xl border border-white/10 p-6 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Telefon görseli */}
                <div className="relative h-[350px] mb-4 overflow-hidden rounded-xl">
                  <motion.img
                    src={phone.src}
                    alt={phone.alt}
                    className="h-full w-full object-cover object-center rounded-xl border-4 border-gray-800 shadow-lg"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <motion.div
                      className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 w-full"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mb-1" />
                      <p className="text-sm font-medium text-white">Aynı Gün Onarım</p>
                    </motion.div>
                  </div>

                  {/* Dekoratif efekt */}
                  <motion.div
                    className="absolute top-2 right-2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  />
                </div>

                {/* Telefon bilgileri */}
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
                  {phone.title}
                </h3>
                <p className="text-gray-300 text-sm">{phone.description}</p>

                {/* Fiyat etiketi */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg shadow-purple-900/30">
                  En Uygun Fiyat
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Özellikler - Sadece showFeatures true ise göster */}
        {showFeatures && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-white/10 flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">90 Gün Garanti</h3>
                <p className="text-sm text-gray-400">Tüm onarımlar için parça ve işçilik garantisi</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-white/10 flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-full">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Hızlı Servis</h3>
                <p className="text-sm text-gray-400">Çoğu onarım aynı gün içinde tamamlanır</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-white/10 flex items-center space-x-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-3 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Uzman Teknisyenler</h3>
                <p className="text-sm text-gray-400">Sertifikalı ve deneyimli teknik ekip</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* İstatistikler - Sadece varsayılan varyantta göster */}
        {variant === "default" && (
          <motion.div
            className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <motion.div
                custom={0}
                variants={statVariants}
                initial="hidden"
                animate={animateStats ? "visible" : "hidden"}
              >
                <div className="relative">
                  <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
                    5000+
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-purple-500/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
                <div className="text-sm text-gray-300">Onarılan Cihaz</div>
              </motion.div>

              <motion.div
                custom={1}
                variants={statVariants}
                initial="hidden"
                animate={animateStats ? "visible" : "hidden"}
              >
                <div className="relative">
                  <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
                    4.9/5
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                </div>
                <div className="text-sm text-gray-300">Müşteri Memnuniyeti</div>
              </motion.div>

              <motion.div
                custom={2}
                variants={statVariants}
                initial="hidden"
                animate={animateStats ? "visible" : "hidden"}
              >
                <div className="relative">
                  <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-green-200 text-transparent bg-clip-text">
                    30+
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-green-500/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </div>
                <div className="text-sm text-gray-300">Model Desteği</div>
              </motion.div>

              <motion.div
                custom={3}
                variants={statVariants}
                initial="hidden"
                animate={animateStats ? "visible" : "hidden"}
              >
                <div className="relative">
                  <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-yellow-200 text-transparent bg-clip-text">
                    %98
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                  />
                </div>
                <div className="text-sm text-gray-300">Başarı Oranı</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Dalga efekti */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="rgba(255,255,255,0.03)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
