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

  const phoneImages = [
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
  ]

  return (
    <section
      className={`relative overflow-hidden ${
        variant === "compact" ? "py-16" : "py-20 md:py-28"
      } bg-linear-to-br from-black to-purple-950/30`}
    >
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90 z-10" />
            <img
              src={backgroundImage || "/placeholder.svg"}
              alt="Background"
              className="w-full h-full object-cover object-center"
            />
          </>
        ) : (
          <>
            {/* Gradient arka plan */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/10 to-black" />

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
        <motion.div
          className={`grid ${variant === "compact" ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"} gap-12 items-center`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Sol taraf - Metin içeriği */}
          <motion.div className={`${variant !== "compact" && "lg:pr-8"} text-center lg:text-left`}>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/20 mb-6"
            >
              <span className="bg-linear-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
                #1 Mobil Cihaz Onarım Servisi
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-purple-100 to-blue-100 text-transparent bg-clip-text"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>

            {/* CTA Butonları */}
            {showCTA && (
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Link
                  href="/iletisim"
                  className="relative overflow-hidden group px-8 py-4 rounded-lg bg-linear-to-r from-purple-600 to-blue-600 text-white font-medium text-lg shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300"
                >
                  <span className="relative z-10">Ücretsiz Fiyat Teklifi</span>
                  <span className="absolute inset-0 bg-linear-to-r from-purple-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>

                <Link
                  href="/hizmetler"
                  className="group px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-lg hover:bg-white/20 transition-all duration-300 flex items-center"
                >
                  <span>Hizmetlerimizi Keşfedin</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            )}

            {/* Özellikler */}
            {showFeatures && (
              <motion.div variants={itemVariants} className="space-y-4 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                  <div className="bg-linear-to-br from-green-500 to-green-700 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">90 Gün Garanti</h3>
                    <p className="text-sm text-gray-400">Tüm onarımlar için parça ve işçilik garantisi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                  <div className="bg-linear-to-br from-blue-500 to-blue-700 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hızlı Servis</h3>
                    <p className="text-sm text-gray-400">Çoğu onarım aynı gün içinde tamamlanır</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                  <div className="bg-linear-to-br from-purple-500 to-purple-700 p-2 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Uzman Teknisyenler</h3>
                    <p className="text-sm text-gray-400">Sertifikalı ve deneyimli teknik ekip</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sağ taraf - Görsel içerik (Kompakt varyantta gösterme) */}
          {variant !== "compact" && (
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[500px]">
                {/* Telefon görselleri */}
                <motion.div
                  className="absolute left-0 top-10 z-20 shadow-xl shadow-purple-900/20"
                  initial={{ rotate: -15, y: 50 }}
                  animate={{ rotate: -5, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, type: "spring" }}
                >
                  <img
                    src={phoneImages[0] || "/placeholder.svg"}
                    alt="Phone"
                    className="h-[400px] w-auto rounded-2xl border-8 border-gray-900"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-2xl"></div>
                </motion.div>

                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-30 shadow-xl shadow-blue-900/20"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.7, type: "spring" }}
                >
                  <img
                    src={phoneImages[1] || "/placeholder.svg"}
                    alt="Phone"
                    className="h-[450px] w-auto rounded-2xl border-8 border-gray-900"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>

                  {/* Onarım animasyonu */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">Onarım Tamamlandı</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute right-0 top-20 z-10 shadow-xl shadow-blue-900/20"
                  initial={{ rotate: 15, y: 50 }}
                  animate={{ rotate: 5, y: 0 }}
                  transition={{ duration: 1, delay: 0.9, type: "spring" }}
                >
                  <img
                    src={phoneImages[2] || "/placeholder.svg"}
                    alt="Phone"
                    className="h-[380px] w-auto rounded-2xl border-8 border-gray-900"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
                </motion.div>

                {/* Dekoratif öğeler */}
                <motion.div
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* İstatistikler - Sadece varsayılan varyantta göster */}
        {variant === "default" && (
          <motion.div
            className="mt-16 bg-linear-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
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
                  <div className="text-4xl font-bold mb-1 bg-linear-to-r from-white to-purple-200 text-transparent bg-clip-text">
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
                  <div className="text-4xl font-bold mb-1 bg-linear-to-r from-white to-blue-200 text-transparent bg-clip-text">
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
                  <div className="text-4xl font-bold mb-1 bg-linear-to-r from-white to-green-200 text-transparent bg-clip-text">
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
                  <div className="text-4xl font-bold mb-1 bg-linear-to-r from-white to-yellow-200 text-transparent bg-clip-text">
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
