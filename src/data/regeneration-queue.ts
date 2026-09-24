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
    imageId: 'forest-06',
    priority: 'high',
    stage: 'replaced',
    reasons: ['current-look-too-serious', 'outfit-too-conservative', 'needs-more-feminine-fashion-energy'],
    targetChanges: ['age-25-26', 'young-attractive', 'short-bob', 'distinct-wide-or-heart-face', 'misty-pine-fashion-walk', 'fitted-dark-green-coat-dress']
  },
  {
    imageId: 'forest-10',
    priority: 'high',
    stage: 'replaced',
    reasons: ['face-similarity', 'pose-template', 'current-lifestyle-styling-too-conservative'],
    targetChanges: ['age-27-28', 'young-elegant', 'wavy-bob', 'distinct-face', 'streamside-seated', 'white-blouse-low-neckline-olive-skirt']
  },
  {
    imageId: 'forest-13',
    priority: 'high',
    stage: 'replaced',
    reasons: ['needs-more-distinct-face', 'needs-stronger-fashion-sensuality'],
    targetChanges: ['age-24-25', 'young-attractive', 'warm-backlight', 'cream-slip-dress', '70mm-three-quarter']
  },
  {
    imageId: 'forest-15',
    priority: 'high',
    stage: 'replaced',
    reasons: ['metadata-image-semantic-mismatch', 'current-look-too-rustic'],
    targetChanges: ['age-22-23', 'young-feminine', 'ancient-tree-roots', 'dark-olive-fitted-dress', '28mm-environmental']
  },
  {
    imageId: 'forest-17',
    priority: 'high',
    stage: 'replaced',
    reasons: ['metadata-image-semantic-mismatch', 'needs-younger-fashion-language'],
    targetChanges: ['age-20-21', 'clearly-adult', 'young-attractive', 'short-pixie', 'forest-bench', 'fitted-coat-dress', '35mm']
  },
  {
    imageId: 'forest-20',
    priority: 'high',
    stage: 'replaced',
    reasons: ['metadata-image-semantic-mismatch', 'too-similar-to-forest-05'],
    targetChanges: ['age-26-27', 'young-elegant-sexy', 'blue-hour-forest-edge', 'deep-teal-slit-dress', '35mm-distant-full-body']
  },
  {
    imageId: 'hanfu-06',
    priority: 'high',
    stage: 'replaced',
    reasons: ['visual-age-too-mature', 'winter-fur-styling-too-heavy', 'does-not-fit-young-sexy-style-bible'],
    targetChanges: ['age-23-25', 'clearly-adult-young', 'burgundy-fitted-winter-hanfu', 'lighter-fur-trim', 'visible-neckline-and-waist', 'snow-palace-editorial']
  },
  {
    imageId: 'hanfu-15',
    priority: 'high',
    stage: 'replaced',
    reasons: ['visual-age-too-mature', 'face-and-expression-too-mature', 'does-not-fit-young-sexy-style-bible'],
    targetChanges: ['age-22-24', 'clearly-adult-young', 'aqua-off-shoulder-hanfu', 'defined-waist', 'misty-lake-pavilion', 'romantic-editorial']
  },
  {
    imageId: 'hanfu-17',
    priority: 'high',
    stage: 'replaced',
    reasons: ['visual-age-too-mature', 'styling-too-rustic-documentary', 'does-not-fit-young-sexy-style-bible'],
    targetChanges: ['age-24-26', 'clearly-adult-young', 'silk-road-fashion-hanfu', 'open-shoulder-drape', 'defined-waist', 'windblown-sunset-editorial']
  }
];

export const forestKeepBaselines = [
  'forest-05',
  'forest-07',
  'forest-08',
  'forest-09',
  'forest-11',
  'forest-12',
  'forest-14',
  'forest-16',
  'forest-18',
  'forest-19'
] as const;

export function getRegenerationTarget(imageId: string) {
  return regenerationQueue.find((target) => target.imageId === imageId);
}
