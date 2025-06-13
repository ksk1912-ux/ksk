import { samsungModelsData } from "./samsung-models-data"

export interface BrandModel {
  model: string
  slug: string
  repairCount: number
  startingPrice: string
}

export interface BrandData {
  name: string
  slug: string
  description: string
  models: BrandModel[]
}

export const brandsData: BrandData[] = [
  {
    name: "iPhone",
    slug: "iphone",
    description:
      "Orijinal parçalar ve uzman teknisyenlerle profesyonel iPhone onarım hizmetleri. Hızlı teslimat süresi ve garanti dahil.",
    models: [
      {
        model: "iPhone 15 Pro Max",
        slug: "iphone-15-pro-max",
        repairCount: 8,
        startingPrice: "2499",
      },
      {
        model: "iPhone 15 Pro",
        slug: "iphone-15-pro",
        repairCount: 8,
        startingPrice: "2299",
      },
      {
        model: "iPhone 15 Plus",
        slug: "iphone-15-plus",
        repairCount: 7,
        startingPrice: "1899",
      },
      {
        model: "iPhone 15",
        slug: "iphone-15",
        repairCount: 7,
        startingPrice: "1699",
      },
      {
        model: "iPhone 14 Pro Max",
        slug: "iphone-14-pro-max",
        repairCount: 8,
        startingPrice: "2199",
      },
      {
        model: "iPhone 14 Pro",
        slug: "iphone-14-pro",
        repairCount: 8,
        startingPrice: "1999",
      },
      {
        model: "iPhone 14 Plus",
        slug: "iphone-14-plus",
        repairCount: 7,
        startingPrice: "1599",
      },
      {
        model: "iPhone 14",
        slug: "iphone-14",
        repairCount: 7,
        startingPrice: "1399",
      },
      {
        model: "iPhone 13 Pro Max",
        slug: "iphone-13-pro-max",
        repairCount: 7,
        startingPrice: "1899",
      },
      {
        model: "iPhone 13 Pro",
        slug: "iphone-13-pro",
        repairCount: 7,
        startingPrice: "1699",
      },
      {
        model: "iPhone 13 mini",
        slug: "iphone-13-mini",
        repairCount: 6,
        startingPrice: "1199",
      },
      {
        model: "iPhone 13",
        slug: "iphone-13",
        repairCount: 6,
        startingPrice: "1399",
      },
      {
        model: "iPhone 12 Pro Max",
        slug: "iphone-12-pro-max",
        repairCount: 7,
        startingPrice: "1699",
      },
      {
        model: "iPhone 12 Pro",
        slug: "iphone-12-pro",
        repairCount: 7,
        startingPrice: "1499",
      },
      {
        model: "iPhone 12 mini",
        slug: "iphone-12-mini",
        repairCount: 6,
        startingPrice: "999",
      },
      {
        model: "iPhone 12",
        slug: "iphone-12",
        repairCount: 6,
        startingPrice: "1199",
      },
      {
        model: "iPhone 11 Pro Max",
        slug: "iphone-11-pro-max",
        repairCount: 6,
        startingPrice: "1399",
      },
      {
        model: "iPhone 11 Pro",
        slug: "iphone-11-pro",
        repairCount: 6,
        startingPrice: "1199",
      },
      {
        model: "iPhone 11",
        slug: "iphone-11",
        repairCount: 6,
        startingPrice: "999",
      },
      {
        model: "iPhone XS Max",
        slug: "iphone-xs-max",
        repairCount: 5,
        startingPrice: "1199",
      },
      {
        model: "iPhone XS",
        slug: "iphone-xs",
        repairCount: 5,
        startingPrice: "999",
      },
      {
        model: "iPhone XR",
        slug: "iphone-xr",
        repairCount: 5,
        startingPrice: "899",
      },
      {
        model: "iPhone X",
        slug: "iphone-x",
        repairCount: 5,
        startingPrice: "899",
      },
      {
        model: "iPhone 8 Plus",
        slug: "iphone-8-plus",
        repairCount: 4,
        startingPrice: "699",
      },
      {
        model: "iPhone 8",
        slug: "iphone-8",
        repairCount: 4,
        startingPrice: "599",
      },
    ],
  },
  {
    name: "Samsung",
    slug: "samsung",
    description:
      "Orijinal parçalar ve uzman teknisyenlerle profesyonel Samsung onarım hizmetleri. Hızlı teslimat süresi ve garanti dahil.",
    models: [
      {
        model: "Galaxy S24 Ultra",
        slug: "galaxy-s24-ultra",
        repairCount: 7,
        startingPrice: "1899",
      },
      {
        model: "Galaxy S24+",
        slug: "galaxy-s24-plus",
        repairCount: 6,
        startingPrice: "1599",
      },
      {
        model: "Galaxy S24",
        slug: "galaxy-s24",
        repairCount: 6,
        startingPrice: "1399",
      },
      {
        model: "Galaxy S23 Ultra",
        slug: "galaxy-s23-ultra",
        repairCount: 7,
        startingPrice: "1699",
      },
      {
        model: "Galaxy S23+",
        slug: "galaxy-s23-plus",
        repairCount: 6,
        startingPrice: "1399",
      },
      {
        model: "Galaxy S23",
        slug: "galaxy-s23",
        repairCount: 6,
        startingPrice: "1199",
      },
      {
        model: "Galaxy Note 20 Ultra",
        slug: "galaxy-note-20-ultra",
        repairCount: 6,
        startingPrice: "1299",
      },
      {
        model: "Galaxy A54",
        slug: "galaxy-a54",
        repairCount: 5,
        startingPrice: "699",
      },
    ],
  },
  {
    name: "Huawei",
    slug: "huawei",
    description:
      "Orijinal parçalar ve uzman teknisyenlerle profesyonel Huawei onarım hizmetleri. Hızlı teslimat süresi ve garanti dahil.",
    models: [
      {
        model: "P60 Pro",
        slug: "p60-pro",
        repairCount: 6,
        startingPrice: "1299",
      },
      {
        model: "Mate 50 Pro",
        slug: "mate-50-pro",
        repairCount: 5,
        startingPrice: "1199",
      },
      {
        model: "P50 Pro",
        slug: "p50-pro",
        repairCount: 5,
        startingPrice: "999",
      },
      {
        model: "Nova 11",
        slug: "nova-11",
        repairCount: 4,
        startingPrice: "899",
      },
      {
        model: "P40 Pro",
        slug: "p40-pro",
        repairCount: 5,
        startingPrice: "799",
      },
    ],
  },
]

// Helper function to get brand data
export function getBrandData(slug: string) {
  if (slug === "samsung") {
    return {
      name: "Samsung",
      slug: "samsung",
      description:
        "Orijinal parçalar ve uzman teknisyenlerle profesyonel Samsung onarım hizmetleri. Hızlı teslimat süresi ve garanti dahil.",
      models: samsungModelsData.map((model) => ({
        model: model.model,
        slug: model.slug,
        repairCount: 5, // İsterseniz model.repairCount varsa onu kullanabilirsiniz
        startingPrice: "999", // İsterseniz model.startingPrice varsa onu kullanabilirsiniz
      })),
    }
  }
  return brandsData.find((brand) => brand.slug === slug)
}

// Helper function to get all brand slugs
export function getAllBrandSlugs() {
  return brandsData.map((brand) => brand.slug)
}

// Helper function to get all model slugs for a brand
export function getModelSlugsForBrand(brandSlug: string) {
  const brand = getBrandData(brandSlug)
  return brand ? brand.models.map((model) => model.slug) : []
}
