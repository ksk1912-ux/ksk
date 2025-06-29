// app/[brand]/[slug]/page.tsx

import Header from "@/components/header";
import Footer from "@/components/footer";
import RepairItem from "@/components/repair-item";
import FaqItem from "@/components/faq-item";
import CTAButton from "@/components/cta-button";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

// 1. DİKKAT: Veri fonksiyonlarını artık merkezi yükleyicimizden alıyoruz
import { getDeviceData, getAllDevicePaths, getAllDevices } from "@/lib/data-loader"; 
import { getBrandData } from "@/data/brands-data";

interface ModelPageProps {
  params: {
    brand: string;
    slug: string;
  };
}

// 2. DİKKAT: Bu fonksiyon artık tüm markalar için otomatik çalışıyor
export async function generateStaticParams() {
  const paths = await getAllDevicePaths();
  return paths;
}

export default async function ModelPage({ params }: ModelPageProps) {
  const resolvedParams = await params;
  const deviceData = await getDeviceData(resolvedParams.brand, resolvedParams.slug);
  const brandData = getBrandData(resolvedParams.brand);

  if (!deviceData || !brandData) {
    notFound();
  }

  const repairs = deviceData.repair_prices
    ? Object.entries(deviceData.repair_prices)
        .filter(([name]) => !name.includes("Su Hasarı"))
        .map(([name, price]) => ({
          name,
          price: price.replace("₺", ""),
          duration: name.includes("Ekran") ? "1-2 saat" : "45-60 dk",
        }))
    : [];

  const specialRepair = deviceData.repair_prices?.["Su Hasarı Onarımı"]
    ? {
        type: "Su Hasarı Onarımı",
        price: deviceData.repair_prices["Su Hasarı Onarımı"].replace("₺", "") || "999+",
        note: "Teşhis gereklidir. Onarım süresi ve başarı oranı değişebilir.",
      }
    : null;

  // resolvedParams ile güncellendi
  const allDevicesInBrand = (await getAllDevices()).filter(d => d.brand === resolvedParams.brand);
  const currentModelIndex = allDevicesInBrand.findIndex((model) => model.slug === resolvedParams.slug);
  const previousModel = currentModelIndex > 0 ? allDevicesInBrand[currentModelIndex - 1] : null;
  const nextModel = currentModelIndex < allDevicesInBrand.length - 1 ? allDevicesInBrand[currentModelIndex + 1] : null;

  // 5. DİKKAT: BURADAN İTİBAREN SENİN ORİJİNAL, ÇALIŞAN JSX KODUN
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container-custom section-padding">
        <div className="mb-8 fade-in">
          <Link
            href={`/${resolvedParams.brand}`}
            className="inline-flex items-center space-x-2 text-muted hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{brandData.name} sayfasına dön</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-glow mb-4">{deviceData.h1_baslik}</h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl">{deviceData.cihaz_aciklama}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="glass-card p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Mevcut Onarımlar</h2>
              <div className="space-y-4">
                {repairs.map((repair, index) => (
                  <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <RepairItem name={repair.name} price={repair.price} duration={repair.duration} />
                  </div>
                ))}

                {specialRepair && (
                    <div className="slide-up" style={{ animationDelay: `${repairs.length * 0.1}s` }}>
                        <RepairItem
                            name={specialRepair.type}
                            price={specialRepair.price}
                            duration="24-48 saat"
                            isSpecial={true}
                            note={specialRepair.note}
                        />
                    </div>
                )}
              </div>
            </div>

            <div className="glass-card p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Yaygın Arızalar</h2>
              <ul className="space-y-3">
                {deviceData.yaygin_arizalar.map((issue, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <span className="text-muted">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Çözüm Önerileri</h2>
              <ul className="space-y-3">
                {deviceData.cozum_onerileri.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                    <span className="text-muted">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Kullanıcı Yorumları</h2>
              <div className="space-y-4">
                {deviceData.kullanici_yorumlari.map((comment, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-muted italic">"{comment}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-6">Sıkça Sorulan Sorular</h2>
              <div>
                {deviceData.sss.map((faq, index) => (
                  <FaqItem key={index} question={faq.soru} answer={faq.cevap} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Teknik Özellikler</h3>
              <div className="space-y-3">
                {Object.entries(deviceData.ozellikler).map(([key, value]) => (
                  value && (
                    <div key={key} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-muted capitalize">{key}:</span>
                      <span className="font-medium text-right">{value}</span>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Neden Bizi Seçmelisiniz?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 mt-1 text-white" />
                  <div>
                    <h4 className="font-medium">90 Gün Garanti</h4>
                    <p className="text-sm text-muted">Tüm onarımlar garanti kapsamında</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 mt-1 text-white" />
                  <div>
                    <h4 className="font-medium">Hızlı Hizmet</h4>
                    <p className="text-sm text-muted">Çoğu onarım aynı gün teslim</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 mt-1 text-white" />
                  <div>
                    <h4 className="font-medium">Uzman Teknisyenler</h4>
                    <p className="text-sm text-muted">Sertifikalı ve deneyimli</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Onarıma Hazır mısınız?</h3>
              <p className="text-muted mb-6">
                {deviceData.model} cihazınızı uzman teknisyenlerimize bugün teslim edin.
              </p>
              <button className="btn-primary w-full mb-3">Ücretsiz Fiyat Teklifi</button>
              <button className="btn-outline-white w-full">WhatsApp'tan İletişim</button>
            </div>
          </div>
        </div>
      </main>

      <div className="container-custom mt-12 mb-20">
        <div className="glass-card p-6">
          <div className="flex justify-between items-center">
            {previousModel ? (
              <Link href={`/${previousModel.brand}/${previousModel.slug}`} className="flex items-center space-x-2 hover:bg-white/10 transition-colors p-3 rounded-lg">
                <ChevronLeft className="h-5 w-5" />
                <div>
                  <div className="text-xs text-muted">Önceki Model</div>
                  <div className="font-medium">{previousModel.model}</div>
                </div>
              </Link>
            ) : ( <div className="p-3 opacity-50"><div className="text-xs text-muted">Önceki Model</div><div className="font-medium">Mevcut Değil</div></div> )}

            <div className="hidden md:block text-center">
              <div className="text-sm text-muted">Şu an görüntülüyorsunuz</div>
              <div className="font-semibold">{deviceData.model}</div>
            </div>

            {nextModel ? (
              <Link href={`/${nextModel.brand}/${nextModel.slug}`} className="flex items-center space-x-2 hover:bg-white/10 transition-colors p-3 rounded-lg text-right">
                <div>
                  <div className="text-xs text-muted">Sonraki Model</div>
                  <div className="font-medium">{nextModel.model}</div>
                </div>
                <ChevronRight className="h-5 w-5" />
              </Link>
            ) : ( <div className="p-3 text-right opacity-50"><div className="text-xs text-muted">Sonraki Model</div><div className="font-medium">Mevcut Değil</div></div> )}
          </div>
        </div>
      </div>

      <Footer />
      <CTAButton />
    </div>
  )
}