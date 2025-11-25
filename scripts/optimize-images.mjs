import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

const widths = [480, 768, 1024, 1400]
const rootDir = path.join(process.cwd(), 'public', 'images')

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...(await collectFiles(full)))
    else if (/\.(webp|png|jpg|jpeg)$/i.test(e.name)) files.push(full)
  }
  return files
}

function variantName(file, w, ext) {
  const { name } = path.parse(file)
  return name + '-' + w + '.' + ext
}

async function ensureVariants(file) {
  const dir = path.dirname(file)
  const base = path.parse(file).name
  const buf = await fs.readFile(file)
  const image = sharp(buf)
  const meta = await image.metadata()
  for (const w of widths) {
    if (meta.width && meta.width < w) continue
    const webpPath = path.join(dir, variantName(file, w, 'webp'))
    const avifPath = path.join(dir, variantName(file, w, 'avif'))
    let needWebp = true
    let needAvif = true
    try { await fs.access(webpPath); needWebp = false } catch {}
    try { await fs.access(avifPath); needAvif = false } catch {}
    if (!needWebp && !needAvif) continue
    const resized = sharp(buf).resize({ width: w })
    if (needWebp) await resized.clone().webp({ quality: 80 }).toFile(webpPath)
    if (needAvif) await resized.clone().avif({ quality: 50 }).toFile(avifPath)
    process.stdout.write(base + ' ' + w + '\n')
  }
}

async function run() {
  const originals = await collectFiles(rootDir)
  for (const f of originals) await ensureVariants(f)
}

run().catch(e => { console.error(e); process.exit(1) })
