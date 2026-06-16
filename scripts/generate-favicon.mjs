import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function svg(size, fontSize) {
  return Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#111827"/>
    <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${fontSize}" fill="#ffffff">BC</text>
  </svg>`);
}

const targets = [
  ['public/favicon-16x16.png', await sharp(svg(16, 7)).png().toBuffer()],
  ['public/favicon.ico', await sharp(svg(32, 14)).png().toBuffer()],
  ['public/apple-touch-icon.png', await sharp(svg(180, 72)).png().toBuffer()],
];

for (const [rel, buf] of targets) {
  const full = path.join(root, rel);
  await fs.promises.mkdir(path.dirname(full), { recursive: true });
  await fs.promises.writeFile(full, buf);
  console.log(`wrote ${rel} (${buf.length} bytes)`);
}
