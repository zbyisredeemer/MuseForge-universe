export type OceanGenerationSpec = {
  id: string;
  title: string;
  prompt: string;
  negativePrompt: string;
  tags: string[];
  identity: {
    ageBand: string;
    face: string[];
    hair: string[];
    distinctiveFeatures: string[];
    region: string;
  };
  fashion: string[];
  scene: string[];
  photography: {
    composition: string;
    lens: string;
    angle: string;
    lighting: string[];
  };
  outputPath: string;
};

const negativePrompt =
  'underage, teenager, childlike face, mature middle-aged look, elderly, same face, cloned face, recurring identity, generic influencer face, plastic skin, waxy skin, lowres, blurry, jpeg artifacts, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const oceanBatch02: OceanGenerationSpec[] = [
  {
    id: 'ocean-011',
    title: '珊瑚晨帆',
    prompt: 'Clearly adult young Mediterranean woman age 23 to 25 on the bow of a white catamaran at sunrise, fitted coral satin slip dress with delicate straps and a side slit, warm olive skin, long dark chestnut hair moving in the sea breeze, distinct heart-shaped face with hazel almond eyes and a softly defined cupid bow, calm confident gaze, pale turquoise sea and distant islands, premium photorealistic resort fashion editorial, tasteful sensuality, realistic skin texture, no text, no logo',
    negativePrompt,
    tags: ['晨帆', '双体船', '珊瑚吊带裙', '日出', '海风'],
    identity: {
      ageBand: '23-25',
      face: ['heart-shaped', 'hazel-almond-eyes', 'straight-refined-nose', 'defined-cupid-bow-lips'],
      hair: ['long-dark-chestnut', 'windblown-waves'],
      distinctiveFeatures: ['warm-olive-skin', 'soft-arched-brows'],
      region: 'mediterranean'
    },
    fashion: ['coral-satin-slip-dress', 'side-slit', 'minimal-gold-jewelry'],
    scene: ['catamaran-bow', 'summer', 'sunrise'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'slight-low-angle', lighting: ['sunrise-rim-light', 'sea-reflection-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-011.webp'
  },
  {
    id: 'ocean-012',
    title: '黑潮冲浪',
    prompt: 'Clearly adult young East Asian woman age 22 to 24 on a windswept Pacific beach after surfing, fitted black long-sleeve surf suit unzipped modestly at the collar over a dark swimsuit, wet shoulder-length black hair, distinct compact oval face with wide-set eyes and a small straight nose, athletic feminine build, surfboard beside her, slate-blue waves and dramatic clouds, premium photorealistic sports-fashion editorial, tasteful sensuality, natural wet skin and hair texture',
    negativePrompt,
    tags: ['冲浪', '黑色冲浪服', '湿发', '太平洋', '风浪'],
    identity: {
      ageBand: '22-24',
      face: ['compact-oval', 'wide-set-almond-eyes', 'small-straight-nose', 'soft-full-lips'],
      hair: ['shoulder-length-black', 'wet-texture'],
      distinctiveFeatures: ['clean-straight-brows'],
      region: 'east-asia'
    },
    fashion: ['fitted-black-surf-suit', 'dark-swimsuit-layer'],
    scene: ['windswept-pacific-beach', 'summer', 'overcast-day'],
    photography: { composition: 'full-body', lens: '50mm', angle: 'eye-level', lighting: ['soft-overcast', 'wet-sand-reflection'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-012.webp'
  },
  {
    id: 'ocean-013',
    title: '圣岛蓝顶',
    prompt: 'Clearly adult young Greek woman age 25 to 27 on a whitewashed Santorini terrace above the Aegean Sea, fitted ivory halter mini dress with an open back and clean sculpted waist, long honey-brown hair in loose waves, distinct angular oval face with deep-set green eyes and defined cheekbones, blue domes and cobalt sea behind, bright cinematic summer light, luxury travel-fashion editorial, photorealistic skin and fabric, tasteful sensuality',
    negativePrompt,
    tags: ['圣托里尼', '蓝顶', '白裙', '爱琴海', '露台'],
    identity: {
      ageBand: '25-27',
      face: ['angular-oval', 'deep-set-green-eyes', 'high-bridge-nose', 'defined-full-lips'],
      hair: ['long-honey-brown', 'loose-waves'],
      distinctiveFeatures: ['defined-cheekbones'],
      region: 'southern-europe'
    },
    fashion: ['ivory-halter-mini-dress', 'open-back', 'minimal-gold-earrings'],
    scene: ['santorini-white-terrace', 'summer', 'bright-day'],
    photography: { composition: 'three-quarter-back', lens: '85mm', angle: 'eye-level', lighting: ['bright-natural-light', 'white-wall-bounce'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-013.webp'
  },
  {
    id: 'ocean-014',
    title: '巴厘崖池',
    prompt: 'Clearly adult young Southeast Asian woman age 24 to 26 at a private Bali cliffside infinity pool, elegant emerald one-piece swimsuit with a deep but tasteful neckline and a loose white linen shirt draped from the shoulders, long black hair in a high ponytail with damp face-framing strands, distinct soft diamond face with dark cat-shaped eyes, lush tropical cliff and Indian Ocean behind, premium luxury resort editorial, photorealistic, cinematic, tasteful sensuality, no nudity',
    negativePrompt,
    tags: ['巴厘岛', '无边泳池', '翡翠泳装', '白衬衫', '海崖'],
    identity: {
      ageBand: '24-26',
      face: ['soft-diamond', 'dark-cat-eyes', 'small-upturned-nose', 'balanced-full-lips'],
      hair: ['long-black', 'high-ponytail', 'damp-face-framing-strands'],
      distinctiveFeatures: ['warm-golden-brown-skin'],
      region: 'southeast-asia'
    },
    fashion: ['emerald-one-piece-swimsuit', 'loose-white-linen-shirt'],
    scene: ['bali-cliff-infinity-pool', 'summer', 'late-afternoon'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['late-afternoon-sun', 'pool-reflection', 'soft-rim-light'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-014.webp'
  },
  {
    id: 'ocean-015',
    title: '桑给巴尔金帆',
    prompt: 'Clearly adult young Black East African woman age 25 to 28 on a wooden dhow at Zanzibar sunset, fitted amber wrap dress with a thigh slit and bare shoulders, deep rich skin tone, short natural curls, distinct long oval face with large expressive eyes and high cheekbones, gold water and lateen sail behind, graceful confident pose, luxury photorealistic coastal fashion editorial, cinematic sunset, tasteful sensuality',
    negativePrompt,
    tags: ['桑给巴尔', '木帆船', '琥珀裙', '夕阳', '非洲海岸'],
    identity: {
      ageBand: '25-28',
      face: ['long-oval', 'large-expressive-eyes', 'broad-refined-nose', 'full-defined-lips'],
      hair: ['short-natural-curls'],
      distinctiveFeatures: ['high-cheekbones', 'deep-rich-skin-tone'],
      region: 'east-africa'
    },
    fashion: ['amber-wrap-dress', 'thigh-slit', 'bare-shoulders', 'gold-hoop-earrings'],
    scene: ['zanzibar-dhow-deck', 'summer', 'sunset'],
    photography: { composition: 'full-body', lens: '50mm', angle: 'slight-low-angle', lighting: ['sunset-backlight', 'gold-water-bounce'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-015.webp'
  },
  {
    id: 'ocean-016',
    title: '水屋晨雾',
    prompt: 'Clearly adult young South Asian woman age 23 to 25 on the deck of a Maldives overwater villa just after sunrise, elegant pearl-white one-piece swimsuit under a light translucent aqua robe, long dark hair in a loose low braid, distinct round-oval face with large dark almond eyes and a softly curved nose, warm brown skin, pale lagoon mist and glassy turquoise water, refined luxury resort editorial, natural realistic skin, tasteful sensuality, no nudity',
    negativePrompt,
    tags: ['马尔代夫', '水屋', '白色泳装', '薄纱罩衫', '晨雾'],
    identity: {
      ageBand: '23-25',
      face: ['round-oval', 'large-dark-almond-eyes', 'soft-curved-nose', 'full-soft-lips'],
      hair: ['long-dark', 'loose-low-braid'],
      distinctiveFeatures: ['warm-brown-skin', 'subtle-beauty-mark-near-cheek'],
      region: 'south-asia'
    },
    fashion: ['pearl-white-one-piece-swimsuit', 'translucent-aqua-robe'],
    scene: ['maldives-overwater-villa-deck', 'summer', 'sunrise'],
    photography: { composition: 'seated-three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['soft-sunrise-key', 'lagoon-fill', 'mist-diffusion'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-016.webp'
  },
  {
    id: 'ocean-017',
    title: '火山银岸',
    prompt: 'Clearly adult young Latina woman age 26 to 28 on a dramatic volcanic black-sand beach, fitted silver-gray asymmetric dress with one bare shoulder and a high side slit, long dark curly hair, distinct square-oval face with slightly upturned brown eyes and strong brows, foaming Atlantic surf and basalt cliffs behind, moody premium fashion editorial, photorealistic skin and fabric texture, cinematic contrast, elegant tasteful sensuality',
    negativePrompt,
    tags: ['火山黑沙', '银灰礼服', '单肩', '大西洋', '玄武岩'],
    identity: {
      ageBand: '26-28',
      face: ['square-oval', 'slightly-upturned-brown-eyes', 'straight-medium-nose', 'wide-soft-lips'],
      hair: ['long-dark', 'natural-curls'],
      distinctiveFeatures: ['strong-defined-brows'],
      region: 'latin-america'
    },
    fashion: ['silver-gray-asymmetric-dress', 'one-shoulder', 'high-side-slit'],
    scene: ['volcanic-black-sand-beach', 'summer', 'cloudy-late-afternoon'],
    photography: { composition: 'environmental-three-quarter', lens: '70mm', angle: 'slight-low-angle', lighting: ['cloud-filtered-key', 'white-surf-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-017.webp'
  },
  {
    id: 'ocean-018',
    title: '热雨长桥',
    prompt: 'Clearly adult young Southeast Asian woman age 21 to 23 on a long wooden pier during a warm tropical rain shower, fitted teal satin camisole dress under a cropped light linen jacket, wet dark bob tucked behind one ear, distinct heart-oval face with round almond eyes and a small beauty mark beneath the lower lip, rain-beaded skin, emerald lagoon and storm-softened palms, cinematic photorealistic resort editorial, youthful but clearly adult, tasteful sensuality',
    negativePrompt,
    tags: ['热带雨', '木栈桥', '青绿吊带裙', '湿发', '泻湖'],
    identity: {
      ageBand: '21-23',
      face: ['heart-oval', 'round-almond-eyes', 'small-straight-nose', 'petal-lips'],
      hair: ['dark-bob', 'wet-tucked-behind-ear'],
      distinctiveFeatures: ['small-beauty-mark-below-lip'],
      region: 'southeast-asia'
    },
    fashion: ['teal-satin-camisole-dress', 'cropped-light-linen-jacket'],
    scene: ['tropical-wooden-pier', 'summer', 'warm-rain'],
    photography: { composition: 'walking-three-quarter', lens: '50mm', angle: 'eye-level', lighting: ['soft-rain-light', 'lagoon-reflection', 'subtle-backlight'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-018.webp'
  },
  {
    id: 'ocean-019',
    title: '灯塔曙蓝',
    prompt: 'Clearly adult young Northern European woman age 24 to 26 on a windswept lighthouse cliff at dawn, fitted navy ribbed knit mini dress beneath a cropped cream trench cape, pale skin, chin-length ash-blonde bob, distinct soft rectangular face with gray-blue eyes and a straight nose, white lighthouse and steel-blue ocean behind, refined cinematic coastal fashion portrait, photorealistic texture, elegant tasteful sensuality',
    negativePrompt,
    tags: ['灯塔', '曙光', '海军蓝针织裙', '风崖', '北海'],
    identity: {
      ageBand: '24-26',
      face: ['soft-rectangular', 'gray-blue-eyes', 'straight-nose', 'balanced-lips'],
      hair: ['chin-length-ash-blonde-bob', 'windblown'],
      distinctiveFeatures: ['light-freckles-across-nose'],
      region: 'northern-europe'
    },
    fashion: ['navy-ribbed-knit-mini-dress', 'cropped-cream-trench-cape', 'dark-ankle-boots'],
    scene: ['lighthouse-sea-cliff', 'spring', 'dawn'],
    photography: { composition: 'full-body', lens: '35mm', angle: 'slight-low-angle', lighting: ['cool-dawn-ambient', 'soft-warm-horizon-rim'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-019.webp'
  },
  {
    id: 'ocean-020',
    title: '荧海蓝夜',
    prompt: 'Clearly adult young East Asian woman age 25 to 27 walking barefoot along a dark tropical shoreline at night with subtle natural bioluminescent blue surf, fitted midnight-cobalt satin dress with a low back and clean side slit, long black hair in a loose low ponytail, distinct tapered face with narrow almond eyes and a refined straight nose, moonlit palms and deep ocean beyond, premium cinematic night fashion editorial, photorealistic, tasteful sensuality, realistic low-light skin texture',
    negativePrompt,
    tags: ['荧光海', '蓝夜', '深蓝缎裙', '月光', '夜滩'],
    identity: {
      ageBand: '25-27',
      face: ['tapered-oval', 'narrow-almond-eyes', 'refined-straight-nose', 'defined-soft-lips'],
      hair: ['long-black', 'loose-low-ponytail'],
      distinctiveFeatures: ['precise-direct-eye-contact'],
      region: 'east-asia'
    },
    fashion: ['midnight-cobalt-satin-dress', 'low-back', 'side-slit'],
    scene: ['bioluminescent-tropical-shoreline', 'summer', 'night'],
    photography: { composition: 'walking-full-body', lens: '50mm', angle: 'eye-level', lighting: ['moonlight-key', 'subtle-bioluminescent-fill', 'soft-hidden-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-020.webp'
  }
];
