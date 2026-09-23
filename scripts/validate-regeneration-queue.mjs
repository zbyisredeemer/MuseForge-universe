import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const queuePath = path.join(root, 'src', 'data', 'regeneration-queue.ts');
const identityPath = path.join(root, 'src', 'data', 'identity-diversity.ts');

const queueSource = fs.readFileSync(queuePath, 'utf8');
const identitySource = fs.readFileSync(identityPath, 'utf8');
const errors = [];

const ids = [...queueSource.matchAll(/imageId:\s*'([^']+)'/g)].map((m) => m[1]);
const uniqueIds = new Set(ids);

if (ids.length === 0) errors.push('regeneration queue is empty');
if (uniqueIds.size !== ids.length) errors.push('regeneration queue contains duplicate imageId values');

const expectedHighPriority = [
  'hanfu-004',
  'forest-05',
  'forest-06',
  'forest-10',
  'forest-13',
  'forest-15',
  'forest-17',
  'forest-20'
];

for (const id of expectedHighPriority) {
  if (!uniqueIds.has(id)) errors.push(`missing expected high-priority target: ${id}`);
}

const lockedIdentityTargets = ['forest-05', 'forest-06', 'forest-10', 'forest-13', 'forest-15', 'forest-17', 'forest-20'];
for (const id of lockedIdentityTargets) {
  const pattern = new RegExp(`'${id.replace('-', '\\-')}':\\s*\\{`);
  if (!pattern.test(identitySource)) {
    errors.push(`missing locked Identity DNA override for ${id}`);
  }
}

const requiredStages = ['candidate-needed', 'prompt-ready', 'candidate-review', 'approved', 'replaced'];
if (!requiredStages.some((stage) => queueSource.includes(stage))) {
  errors.push('regeneration stage vocabulary is missing');
}

const keepBaselinesMatch = queueSource.match(/forestKeepBaselines\s*=\s*\[([^\]]+)\]/);
if (!keepBaselinesMatch) {
  errors.push('missing forestKeepBaselines');
} else {
  const keepIds = [...keepBaselinesMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  const expectedKeep = ['forest-07', 'forest-08', 'forest-09', 'forest-11', 'forest-12', 'forest-14', 'forest-16', 'forest-18', 'forest-19'];
  for (const id of expectedKeep) {
    if (!keepIds.includes(id)) errors.push(`missing keep baseline ${id}`);
  }
}

console.log(`MuseForge regeneration QA: ${uniqueIds.size} queued targets · ${lockedIdentityTargets.length} locked identity overrides checked`);

if (errors.length > 0) {
  console.error('\nRegeneration queue validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Regeneration queue validation passed.');
