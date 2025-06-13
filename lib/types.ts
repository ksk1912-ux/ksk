// lib/types.ts
import { z } from 'zod';

export const CihazModeliSchema = z.object({
  model: z.string(),
  slug: z.string(),
  meta_title: z.string().default(''),
  meta_description: z.string().default(''),
  h1_baslik: z.string().default(''),
  cihaz_aciklama: z.string().default(''),
  ozellikler: z.object({
    ekran: z.string().default(''),
    islemci: z.string().default(''),
    ram: z.string().default(''),
    batarya: z.string().default(''),
    kamera: z.string().default(''),
    dayaniklilik: z.string().optional(),
    baglanti: z.string().optional(),
  }),
  yaygin_arizalar: z.array(z.string()).default([]),
  cozum_onerileri: z.array(z.string()).default([]),
  sss: z.array(z.object({
    soru: z.string(),
    cevap: z.string(),
  })).default([]),
  kullanici_yorumlari: z.array(z.string()).default([]),
  repair_prices: z.record(z.string()).optional(),
});

export type CihazModeli = z.infer<typeof CihazModeliSchema>;