export type RegenerationPriority = 'high' | 'medium' | 'low';
export type RegenerationStage = 'prompt-ready' | 'candidate-needed' | 'candidate-review' | 'approved' | 'replaced';

export type RegenerationTarget = {
  imageId: string;
  priority: RegenerationPriority;
  stage: RegenerationStage;
  reasons: string[];
  targetChanges: string[];
  candidateAssets?: string[];
  candidateNotes?: string[];
};

export const regenerationQueue: RegenerationTarget[] = [
  {
    imageId: 'forest-05',
    priority: 'high',
    stage: 'candidate-review',
    reasons: ['face-similarity', 'needs-stronger-young-sexy-editorial-style'],
    targetChanges: ['age-23-24', 'young-attractive', 'subtly-sensual', '35mm-kneeling-flower-glade', 'cream-fitted-dress'],
    candidateAssets: ['/images/nature/forest-muse/candidates/forest-muse-005-candidate-a.webp'],
    candidateNotes: ['generated candidate uploaded for review; do not replace published asset until approved']
  },
  {
    imageId: 'forest-06',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['current-look-too-serious', 'needs-more-feminine-fashion-energy'],
    targetChanges: ['age-25-26', 'young-attractive', 'short-bob', 'misty-pine-fashion-walk', 'fitted-dark-green-coat-dress']
  },
  {
    imageId: 'forest-07',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['face-similarity', 'needs-more-glamorous-night-beauty-language'],
    targetChanges: ['age-21-22', 'young-glamorous', 'diamond-face', 'moonlit-side-seated', 'deep-teal-sensual-dress']
  },
  {
    imageId: 'forest-10',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['face-similarity', 'pose-template'],
    targetChanges: ['age-27-28', 'young-elegant', 'wavy-bob', 'streamside-seated', 'white-blouse-low-neckline-olive-skirt']
  },
  {
    imageId: 'forest-12',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['current-age-impression-outside-core-style', 'too-conservative'],
    targetChanges: ['age-22-24', 'young-sexy-minimalist', 'short-hair', 'misty-conifer', 'charcoal-knit-mini-or-fitted-dress']
  },
  {
    imageId: 'forest-13',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['needs-more-distinct-face', 'needs-stronger-fashion-sensuality'],
    targetChanges: ['age-24-25', 'young-attractive', 'warm-backlight', 'cream-slip-dress', '70mm-three-quarter']
  },
  {
    imageId: 'forest-15',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['metadata-image-semantic-mismatch', 'current-look-too-rustic'],
    targetChanges: ['age-22-23', 'young-feminine', 'ancient-tree-roots', 'dark-olive-fitted-dress', '28mm-environmental']
  },
  {
    imageId: 'forest-16',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['current-scene-too-conservative', 'not-sexy-enough-for-project-core'],
    targetChanges: ['age-23-25', 'young-intellectual-sexy', 'misty-forest-reading', 'short-skirt-layering-or-fitted-knit', '50mm']
  },
  {
    imageId: 'forest-17',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['metadata-image-semantic-mismatch', 'needs-younger-fashion-language'],
    targetChanges: ['age-20-21', 'young-attractive', 'short-pixie', 'forest-bench', 'fitted-coat-dress', '35mm']
  },
  {
    imageId: 'forest-18',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['current-age-impression-outside-core-style', 'too-lifestyle-mature'],
    targetChanges: ['age-22-24', 'young-sweet-sexy', 'streamside-flowers', 'cropped-cardigan-floral-dress', '50mm']
  },
  {
    imageId: 'forest-19',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['current-look-too-serious', 'needs-young-sexy-night-language'],
    targetChanges: ['age-23-25', 'young-mysterious', 'short-hair', 'lantern-blue-hour', 'fitted-charcoal-dress-or-coat-dress']
  },
  {
    imageId: 'forest-20',
    priority: 'high',
    stage: 'candidate-needed',
    reasons: ['metadata-image-semantic-mismatch', 'too-similar-to-forest-05'],
    targetChanges: ['age-26-27', 'young-elegant-sexy', 'blue-hour-forest-edge', 'deep-teal-slit-dress', '35mm-distant-full-body']
  }
];

export const forestKeepBaselines = ['forest-08', 'forest-09', 'forest-11', 'forest-14'] as const;

export function getRegenerationTarget(imageId: string) {
  return regenerationQueue.find((target) => target.imageId === imageId);
}
