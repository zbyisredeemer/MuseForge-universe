export type RegenerationPriority = 'high' | 'medium' | 'low';
export type RegenerationStage = 'prompt-ready' | 'candidate-needed' | 'candidate-review' | 'approved' | 'replaced';

export type RegenerationTarget = {
  imageId: string;
  priority: RegenerationPriority;
  stage: RegenerationStage;
  reasons: string[];
  targetChanges: string[];
};

export const regenerationQueue: RegenerationTarget[] = [
  {
    imageId: 'forest-05',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['young-narrow-face-template', 'similar-to-forest-06-and-07', 'front-facing-beauty-language'],
    targetChanges: ['age-33-36', 'soft-wide-face', '35mm-kneeling-environmental', 'japanese-minimal-natural-fabric']
  },
  {
    imageId: 'forest-06',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['face-proportions-too-close-to-005-and-007', 'youthful-template'],
    targetChanges: ['age-46-50', 'soft-square-broad-face', 'short-bob', 'full-body-walking-low-angle', 'kazakh-woven-detail']
  },
  {
    imageId: 'forest-07',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['young-refined-face-template', 'face-similarity-to-005-and-006'],
    targetChanges: ['age-37-40', 'diamond-face', 'deep-set-eyes', 'side-seated-night-portrait', 'finnish-wool-minimalism']
  },
  {
    imageId: 'forest-10',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['young-soft-face-template', 'similar-to-forest-05-and-06', 'common-hand-to-face-pose-in-current-asset'],
    targetChanges: ['age-51-56', 'round-medium-wide-face', 'jaw-length-wavy-bob', 'candid-streamside-seated', 'french-quiet-luxury']
  },
  {
    imageId: 'forest-13',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['young-long-hair-narrow-face-template', 'front-centered-beauty-language'],
    targetChanges: ['mature-profile', 'tree-contact-pose', '70mm-side-three-quarter']
  },
  {
    imageId: 'forest-15',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['metadata-image-semantic-mismatch', 'face-too-close-to-forest-10'],
    targetChanges: ['ancient-tree-root-scene', '28mm-wide-environment', 'mature-strong-bone-structure']
  },
  {
    imageId: 'forest-17',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['metadata-image-semantic-mismatch', 'young-refined-face-template'],
    targetChanges: ['visible-wooden-bench', 'short-textured-hair', '35mm-wide-negative-space']
  },
  {
    imageId: 'forest-20',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['metadata-image-semantic-mismatch', 'high-similarity-to-forest-05', 'white-dress-stream-template'],
    targetChanges: ['blue-hour-forest-edge', 'distant-full-body', '35mm-environmental', 'mid-length-layered-hair']
  }
];

export const forestKeepBaselines = ['forest-12', 'forest-16', 'forest-18', 'forest-19'] as const;

export function getRegenerationTarget(imageId: string) {
  return regenerationQueue.find((target) => target.imageId === imageId);
}
