import { readdir, stat, readFile, writeFile, mkdir } from 'node:fs/promises';
import { extname, join, dirname, basename } from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = new URL('../src/assets/images', import.meta.url).pathname;

async function walk(dir) {
  const ents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    ents.map(async (ent) => {
      const res = join(dir, ent.name);
      return ent.isDirectory() ? walk(res) : res;
    })
  );
  return files.flat();
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function toWebp(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const outPath = join(dirname(inputPath), `${basename(inputPath, ext)}.webp`);
  try {
    // Skip if target exists and is newer
    const [srcStat, outStat] = await Promise.allSettled([stat(inputPath), stat(outPath)]);
    if (outStat.status === 'fulfilled' && srcStat.status === 'fulfilled') {
      if (outStat.value.mtimeMs >= srcStat.value.mtimeMs) return; // up to date
    }
  } catch {}

  await ensureDir(dirname(outPath));

  const img = sharp(inputPath, { failOn: 'none' });
  const meta = await img.metadata();
  const width = meta.width || 0;
  const MAX_W = 1600;
  const pipeline = width > MAX_W ? img.resize({ width: MAX_W }) : img;

  await pipeline
    .webp({ quality: 80, effort: 4 })
    .toFile(outPath);

  return outPath;
}

async function main() {
  console.log('Optimizing images in', IMAGES_DIR);
  const all = await walk(IMAGES_DIR);
  const targets = all.filter((p) => ['.jpg', '.jpeg', '.png'].includes(extname(p).toLowerCase()));
  let converted = 0;
  for (const p of targets) {
    const res = await toWebp(p);
    if (res) {
      converted++;
      console.log('→', basename(res));
    }
  }
  console.log(`Done. Converted ${converted}/${targets.length} images to WebP.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
