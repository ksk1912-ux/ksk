import fs from 'fs';
import path from 'path';
import { CihazModeliSchema, CihazModeli } from '@/lib/types';
import { defaultRepairPrices } from "@/data/repair-templates";

const directoryPath = path.join(process.cwd(), 'data/generated-json');

function getAllJsonFiles(dir: string): string[] {
  let results: string[] = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(getAllJsonFiles(fullPath));
    } else if (file.endsWith('.json')) {
      results.push(fullPath);
    }
  }
  return results;
}

const samsungModelsData: CihazModeli[] = [];

for (const fullPath of getAllJsonFiles(directoryPath)) {
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  try {
    const parsed: unknown = JSON.parse(fileContent);
    if (Array.isArray(parsed)) {
      for (const item of parsed) {
        const result = CihazModeliSchema.safeParse({
          ...item,
          model: item.model ?? item.model_adi ?? 'Eksik model',
          repair_prices: item.repair_prices ?? defaultRepairPrices,
        });
        if (result.success) {
          samsungModelsData.push(result.data);
        } else {
          console.warn(`❌ Zod hatası (Samsung dosyası: ${fullPath}):`, result.error.format());
        }
      }
    }
  } catch (err) {
    console.error(`🚫 JSON parse hatası (${fullPath}):`, err);
  }
}

export { samsungModelsData };
