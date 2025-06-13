// lib/data-loader.ts

import { iPhoneModelsData } from "@/data/iphone-models-data";
import { samsungModelsData } from "@/data/samsung-models-data";
import type { CihazModeli } from "@/lib/types";

type DeviceModel = CihazModeli;

// Samsung modelleri için eksik model/slug varsa tamamla
const normalizedSamsungModels = samsungModelsData.map((device) => {
  const model = device.model || (device as any).model_adi || "bilinmeyen-model";
  const slug = device.slug || model.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return {
    ...device,
    model,
    slug,
    brand: "samsung",
  };
});

// iPhone modelleri doğrudan ekleniyor
const normalizedIphoneModels = iPhoneModelsData.map((device) => ({
  ...device,
  brand: "iphone",
}));

// Tüm cihazları birleştir
const allDevices: (DeviceModel & { brand: string })[] = [
  ...normalizedIphoneModels,
  ...normalizedSamsungModels,
];

export function getAllDevices() {
  return allDevices;
}

export function getAllDevicePaths() {
  return allDevices.map((device) => ({
    brand: device.brand,
    slug: device.slug,
  }));
}

export function getDeviceData(brand: string, slug: string) {
  return allDevices.find((device) => device.brand === brand && device.slug === slug);
}
