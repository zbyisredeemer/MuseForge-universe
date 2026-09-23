import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const planetsDir = path.join(root, 'src', 'data', 'planets');
const publicDir = path.join(root, 'public');
const imageRoot = path.join(publicDir, 'images');

const planetFiles = fs.readdirSync(planetsDir)
  .filter((name) => name.endsWith('.ts'))
  .sort();

const staticImagePattern = /image:\s*'((?:\/images\/)[^']+)'/g;
const canonicalPattern = /^\/images\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+-\d{3}\.(webp|png|jpe?g|avif)$/;
const seen = new Set();
const errors = [];
const warnings = [];
let staticImages = 0;
let placeholders = 0;
let generated = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function validateBinaryAsset(filePath) {
  const relative = path.relative(publicDir, filePath).split(path.sep).join('/');
  const ext = path.extname(filePath).toLowerCase();
  if (!['.webp', '.png', '.jpg', '.jpeg', '.avif'].includes(ext)) return;

  const size = fs.statSync(filePath).size;
  if (size < 4096) {
    errors.push(`${relative}: suspiciously small image asset (${size} bytes)`);
    return;
  }

  if (ext === '.webp') {
    const header = fs.readFileSync(filePath).subarray(0, 12);
    const riff = header.subarray(0, 4).toString('ascii');
    const webp = header.subarray(8, 12).toString('ascii');
    if (riff !== 'RIFF' || webp !== 'WEBP') {
      errors.push(`${relative}: invalid WebP header`);
    }
  }
}

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

    const diskPath = path.join(publicDir, imagePath.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      errors.push(`${fileName}: missing asset public${imagePath}`);
    }
  }
}

for (const filePath of walk(imageRoot)) {
  validateBinaryAsset(filePath);
}

if (generated > 0 && staticImages === 0) {
  warnings.push('generated entries exist but no statically declared image paths were detected');
}

console.log(`MuseForge assets: ${staticImages} static paths · ${generated} generated entries · ${placeholders} placeholder entries`);

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (errors.length > 0) {
  console.error('\nAsset validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Asset validation passed.');
