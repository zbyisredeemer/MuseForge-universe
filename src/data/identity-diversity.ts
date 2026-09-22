import type { MusePlanet } from './types';

type IdentityProfile = {
  id: string;
  ageBand: string;
  faceShape: string;
  skinTone: string;
  eyeShape: string;
  browShape: string;
  noseShape: string;
  lipShape: string;
  distinctiveFeature: string;
  hair: string[];
};

const AGE_BANDS = ['21-24', '25-28', '29-32', '33-36', '37-40', '41-45'] as const;
const FACE_SHAPES = ['oval', 'round', 'heart-shaped', 'long-oval', 'soft-square', 'diamond', 'pear-shaped', 'angular-oval'] as const;
const SKIN_TONES = ['porcelain-neutral', 'fair-warm', 'light-neutral', 'light-olive', 'warm-beige', 'golden-beige', 'medium-neutral', 'sun-kissed-warm'] as const;
const EYE_SHAPES = ['almond', 'round-almond', 'slightly upturned', 'soft downturned', 'deep-set almond', 'wide-set almond', 'close-set almond', 'hooded almond', 'monolid', 'tapered double-eyelid'] as const;
const BROW_SHAPES = ['straight-soft', 'gently arched', 'low straight', 'defined arch', 'full natural', 'fine curved', 'soft angled', 'thick straight'] as const;
const NOSE_SHAPES = ['small straight', 'slender bridge', 'soft rounded tip', 'low straight bridge', 'defined narrow bridge', 'short refined', 'gentle convex bridge', 'wider natural bridge', 'delicate upturned tip'] as const;
const LIP_SHAPES = ['soft full', 'medium balanced', 'defined cupid-bow', 'slender upper lip', 'full lower lip', 'small rounded', 'wide soft smile', 'subtle asymmetrical'] as const;
const DISTINCTIVE_FEATURES = [
  'subtle beauty mark under the left eye',
  'tiny beauty mark near the right cheekbone',
  'light freckles across the nose',
  'faint freckles on both cheeks',
  'slight natural smile asymmetry',
  'soft cheek dimples',
  'defined cupid bow',
  'high cheekbones',
  'softly prominent cheekbones',
  'gentle jawline asymmetry',
  'slightly fuller left eyebrow',
  'clean face with no visible marks'
] as const;

const HAIR_PROFILES = [
  ['chin-length', 'straight', 'black'],
  ['jaw-length-bob', 'slightly-wavy', 'dark-brown'],
  ['shoulder-length', 'straight', 'espresso-brown'],
  ['shoulder-length', 'wavy', 'black'],
  ['collarbone-length', 'soft-waves', 'dark-brown'],
  ['long', 'straight', 'black'],
  ['long', 'loose-waves', 'dark-brown'],
  ['long', 'soft-curls', 'black'],
  ['mid-length', 'layered', 'dark-brown'],
  ['long', 'low-ponytail', 'black'],
  ['mid-length', 'half-up', 'dark-brown'],
  ['short-pixie', 'textured', 'black'],
  ['long', 'side-parted', 'espresso-brown'],
  ['shoulder-length', 'center-parted', 'black']
] as const;

function pick<T>(values: readonly T[], index: number, step: number, offset: number) {
  return values[(index * step + offset) % values.length];
}

function buildIdentityProfile(index: number): IdentityProfile {
  const hair = pick(HAIR_PROFILES, index, 11, 3);
  return {
    id: `muse-face-${String(index + 1).padStart(4, '0')}`,
    ageBand: pick(AGE_BANDS, index, 5, 1),
    faceShape: pick(FACE_SHAPES, index, 5, 2),
    skinTone: pick(SKIN_TONES, index, 7, 1),
    eyeShape: pick(EYE_SHAPES, index, 7, 3),
    browShape: pick(BROW_SHAPES, index, 3, 4),
    noseShape: pick(NOSE_SHAPES, index, 5, 2),
    lipShape: pick(LIP_SHAPES, index, 3, 1),
    distinctiveFeature: pick(DISTINCTIVE_FEATURES, index, 7, 5),
    hair: [...hair]
  };
}

function identityPrompt(profile: IdentityProfile) {
  return [
    `distinct adult woman identity ${profile.id}`,
    `age ${profile.ageBand}`,
    `${profile.faceShape} face`,
    `${profile.skinTone} complexion`,
    `${profile.eyeShape} eyes`,
    `${profile.browShape} brows`,
    `${profile.noseShape} nose`,
    `${profile.lipShape} lips`,
    profile.distinctiveFeature,
    `${profile.hair.join(' ')} hair`,
    'facial bone structure and proportions must be clearly different from every other portrait in this collection',
    'avoid a recurring model identity'
  ].join(', ');
}

const identityNegativePrompt =
  'same face as another image, cloned face, recurring identity, lookalike, identical facial proportions, repeated model, face copy';

export function applyIdentityDiversity(planets: MusePlanet[]): MusePlanet[] {
  let globalIndex = 0;

  return planets.map((planet) => ({
    ...planet,
    images: planet.images.map((image) => {
      const profile = buildIdentityProfile(globalIndex++);
      return {
        ...image,
        prompt: `${identityPrompt(profile)}. ${image.prompt}`,
        negativePrompt: `${image.negativePrompt}, ${identityNegativePrompt}`,
        dna: {
          ...image.dna,
          subject: {
            ...image.dna.subject,
            identityId: profile.id,
            ageBand: profile.ageBand,
            hair: profile.hair,
            face: {
              shape: profile.faceShape,
              skinTone: profile.skinTone,
              eyeShape: profile.eyeShape,
              browShape: profile.browShape,
              noseShape: profile.noseShape,
              lipShape: profile.lipShape,
              distinctiveFeatures: [profile.distinctiveFeature]
            }
          }
        }
      };
    })
  }));
}
