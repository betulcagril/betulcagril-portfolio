import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

async function optimizeFile(inputPath, outputPath, maxWidth, quality) {
  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outputPath);

  const before = fs.statSync(inputPath).size;
  const after = fs.statSync(outputPath).size;
  console.log(
    `${path.basename(outputPath)}: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024).toFixed(0)} KB`
  );
}

async function main() {
  const projectsDir = path.join(root, 'public/images/projects');
  for (const file of fs.readdirSync(projectsDir).filter((f) => f.endsWith('.png'))) {
    const input = path.join(projectsDir, file);
    const output = path.join(projectsDir, file.replace(/\.png$/i, '.webp'));
    await optimizeFile(input, output, 1280, 82);
  }

  const aboutInput = path.join(root, 'public/images/betul-about.png');
  const aboutOutput = path.join(root, 'public/images/betul-about.webp');
  if (fs.existsSync(aboutInput)) {
    await optimizeFile(aboutInput, aboutOutput, 768, 85);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
