import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const preset = fs.readFileSync(path.join(root, 'src', 'data', 'generation-presets.ts'), 'utf8');
const identity = fs.readFileSync(path.join(root, 'src', 'data', 'identity-diversity.ts'), 'utf8');
const bible = fs.readFileSync(path.join(root, 'docs', 'STYLE_BIBLE.md'), 'utf8');
const errors = [];

for (const token of ['20-28', '年轻', '性感', '高级写真']) {
  if (!bible.includes(token)) errors.push(`STYLE_BIBLE missing core token: ${token}`);
}

for (const token of ['adultAgeRange: \'20-28\'', 'subtly sensual', 'high-attractiveness', '9:16']) {
  if (!preset.includes(token)) errors.push(`generation preset missing core token: ${token}`);
}

const ageBandsMatch = identity.match(/const AGE_BANDS = \[([^\]]+)\]/);
if (!ageBandsMatch) {
  errors.push('AGE_BANDS not found');
} else {
  const bands = [...ageBandsMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  for (const band of bands) {
    const nums = band.match(/\d+/g)?.map(Number) ?? [];
    if (nums.length !== 2 || nums[0] < 20 || nums[1] > 28) {
      errors.push(`identity age band outside 20-28: ${band}`);
    }
  }
}

const overrideAges = [...identity.matchAll(/ageBand:\s*'(\d+)-(\d+)'/g)];
for (const match of overrideAges) {
  const lo = Number(match[1]);
  const hi = Number(match[2]);
  if (lo < 20 || hi > 28) errors.push(`identity override outside 20-28: ${match[0]}`);
}

console.log(`MuseForge style QA: Style Bible + global preset + ${overrideAges.length} locked identity ages checked`);

if (errors.length) {
  console.error('\nStyle validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Style validation passed.');
