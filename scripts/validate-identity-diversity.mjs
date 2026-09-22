import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const identityPath = path.join(root, 'src', 'data', 'identity-diversity.ts');
const source = fs.readFileSync(identityPath, 'utf8');
const errors = [];

function readFlatArray(name) {
  const match = source.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\] as const;`));
  if (!match) {
    errors.push(`missing identity array ${name}`);
    return [];
  }
  return [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1]);
}

function readHairProfiles() {
  const match = source.match(/const HAIR_PROFILES = \[([\s\S]*?)\] as const;/);
  if (!match) {
    errors.push('missing HAIR_PROFILES');
    return [];
  }
  return [...match[1].matchAll(/\[([^\]]+)\]/g)].map((row) =>
    [...row[1].matchAll(/'([^']+)'/g)].map((item) => item[1]).join('|')
  );
}

const dimensions = [
  ['AGE_BANDS', 5, 1],
  ['FACE_SHAPES', 3, 2],
  ['FACE_WIDTHS', 5, 1],
  ['CHEEKBONES', 3, 0],
  ['JAW_SHAPES', 5, 2],
  ['CHIN_SHAPES', 4, 1],
  ['SKIN_TONES', 7, 1],
  ['EYE_SHAPES', 5, 3],
  ['EYE_SPACING', 3, 0],
  ['BROW_SHAPES', 7, 4],
  ['NOSE_SHAPES', 7, 2],
  ['NOSE_WIDTHS', 5, 1],
  ['LIP_SHAPES', 3, 1],
  ['LIP_RATIOS', 4, 0],
  ['ASYMMETRIES', 5, 4],
  ['DISTINCTIVE_FEATURES', 7, 5]
];

const arrays = Object.fromEntries(dimensions.map(([name]) => [name, readFlatArray(name)]));
arrays.HAIR_PROFILES = readHairProfiles();

for (const [name, values] of Object.entries(arrays)) {
  if (values.length < 7) {
    errors.push(`${name} has only ${values.length} values; keep at least 7 to avoid rapid repetition`);
  }
}

function pick(values, index, step, offset) {
  if (values.length === 0) return 'missing';
  return values[(index * step + offset) % values.length];
}

const signatures = new Map();
for (let index = 0; index < 52; index += 1) {
  const values = dimensions.map(([name, step, offset]) => pick(arrays[name], index, step, offset));
  values.push(pick(arrays.HAIR_PROFILES, index, 5, 3));
  const signature = values.join('::');
  if (signatures.has(signature)) {
    errors.push(`identity collision between indexes ${signatures.get(signature) + 1} and ${index + 1}`);
  } else {
    signatures.set(signature, index);
  }
}

const regionalBlock = source.match(/const FOREST_REGIONAL_STYLES: RegionalStyleProfile\[\] = \[([\s\S]*?)\n\];/);
if (!regionalBlock) {
  errors.push('missing FOREST_REGIONAL_STYLES');
} else {
  const countries = [...regionalBlock[1].matchAll(/country: '([^']+)'/g)].map((match) => match[1]);
  if (countries.length !== 16) {
    errors.push(`Forest 005-020 must have 16 regional style profiles, found ${countries.length}`);
  }
  if (new Set(countries).size !== countries.length) {
    errors.push('Forest 005-020 regional style countries must be unique in the current rotation');
  }
}

const requiredAntiCloneTerms = [
  'cloned face',
  'recurring identity',
  'same eyes',
  'same nose',
  'same lips',
  'same jawline',
  'same chin',
  'generic influencer face',
  'plastic skin',
  'excessive facial symmetry'
];

for (const term of requiredAntiCloneTerms) {
  if (!source.includes(term)) errors.push(`missing anti-clone term: ${term}`);
}

console.log(`MuseForge identity QA: ${signatures.size} unique structural signatures checked · Forest 005-020 regional rotation checked`);

if (errors.length > 0) {
  console.error('\nIdentity diversity validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Identity diversity validation passed.');
