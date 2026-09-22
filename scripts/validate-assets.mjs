import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const planetsDir = path.join(root, 'src', 'data', 'planets');
const publicDir = path.join(root, 'public');

const planetFiles = fs.readdirSync(planetsDir)
  .filter((name) => name.endsWith('.ts'))
  .sort();

const staticImagePattern = /image:\s*'((?:\/images\/)[^']+)'/g;
const canonicalPattern = /^\/images\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+-\d{3}\.(webp|png|jpe?g|avif)$/;
const seen = new Set();
const errors = [];
let staticImages = 0;
let placeholders = 0;
let generated = 0;

for (const fileName of planetFiles) {
  const filePath = path.join(planetsDir, fileName);
  const source = fs.readFileSync(filePath, 'utf8');

  placeholders += (source.match(/assetType:\s*'placeholder'/g) ?? []).length;
  generated += (source.match(/assetType:\s*'generated'/g) ?? []).length;

  for (const match of source.matchAll(staticImagePattern)) {
    const imagePath = match[1];
    staticImages += 1;

    if (seen.has(imagePath)) {
      errors.push(`${fileName}: duplicate static image path ${imagePath}`);
    }
    seen.add(imagePath);

    if (!canonicalPattern.test(imagePath)) {
      errors.push(`${fileName}: non-canonical image path ${imagePath}`);
    }

    const diskPath = path.join(publicDir, imagePath.replace(/^\//, '').replace(/^images\//, 'images/'));
    if (!fs.existsSync(diskPath)) {
      errors.push(`${fileName}: missing asset public${imagePath}`);
    }
  }
}

console.log(`MuseForge assets: ${staticImages} static files · ${generated} generated entries · ${placeholders} placeholder entries`);

if (errors.length > 0) {
  console.error('\nAsset validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Asset validation passed.');
