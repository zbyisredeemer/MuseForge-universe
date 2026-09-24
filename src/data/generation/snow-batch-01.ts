export type SnowGenerationSpec = {
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
  'underage, teenager, childlike face, mature middle-aged look, elderly, bulky puffer jacket dominating the frame, conservative heavy winter costume, same face, cloned face, recurring identity, generic influencer face, plastic skin, waxy skin, lowres, blurry, jpeg artifacts, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const snowBatch01: SnowGenerationSpec[] = [
  {
    id: 'snow-001',
    title: '初雪晨光',
    prompt: 'Clearly adult young East Asian woman age 22 to 24 standing in a quiet snowy pine field at dawn, fitted ivory wool coat worn open over a soft cream ribbed knit dress, elegant collarbone line and defined waist, bare legs with tall winter boots, long black hair moving lightly in cold air, distinct soft oval face with bright almond eyes and a gentle confident expression, fine falling snow and pale blue morning haze, realistic skin texture, premium cinematic winter fashion editorial, photorealistic, ultra detailed',
    negativePrompt,
    tags: ['初雪', '晨光', '修身大衣', '针织裙', '冰蓝'],
    identity: {
      ageBand: '22-24',
      face: ['soft-oval', 'bright-almond-eyes', 'small-straight-nose', 'balanced-full-lips'],
      hair: ['long-black', 'loose-natural'],
      distinctiveFeatures: ['subtle-dimples']
    },
    fashion: ['fitted-ivory-wool-coat', 'cream-ribbed-knit-dress', 'tall-winter-boots', 'defined-waist'],
    scene: ['snowy-pine-field', 'winter', 'dawn'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['soft-dawn-backlight', 'snow-bounce'] },
    outputPath: '/images/nature/snow-muse/snow-muse-001.webp'
  },
  {
    id: 'snow-002',
    title: '冰湖蓝影',
    prompt: 'Clearly adult young East Asian woman age 25 to 27 beside a frozen alpine lake at blue hour, sleek navy belted coat dress with a short hem, charcoal tights and knee-high leather boots, silver scarf loosened around the neck, dark brown shoulder-length hair, distinct soft-square face with defined cheekbones and narrow upturned eyes, elegant poised stance, blue ice reflections and distant snowy mountains, realistic natural skin, sophisticated cinematic winter fashion portrait, premium editorial photography',
    negativePrompt,
    tags: ['冰湖', '蓝调', '短大衣裙', '长靴', '银色围巾'],
    identity: {
      ageBand: '25-27',
      face: ['soft-square', 'defined-cheekbones', 'narrow-upturned-eyes', 'wide-defined-lips'],
      hair: ['shoulder-length-dark-brown', 'soft-texture'],
      distinctiveFeatures: ['slightly-asymmetric-smile']
    },
    fashion: ['navy-belted-coat-dress', 'charcoal-tights', 'knee-high-leather-boots', 'silver-scarf'],
    scene: ['frozen-alpine-lake', 'winter', 'blue-hour'],
    photography: { composition: 'environmental-full-body', lens: '50mm', angle: 'eye-level', lighting: ['blue-hour-ambient', 'ice-reflection-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-002.webp'
  },
  {
    id: 'snow-003',
    title: '风雪红围巾',
    prompt: 'Clearly adult young East Asian woman age 23 to 25 walking through light windblown snow in a northern forest, fitted charcoal wrap coat over a black mini knit dress, burgundy red scarf streaming in the wind, tall black boots, long dark hair swept sideways, distinct heart-shaped face with cat almond eyes and a tiny beauty mark near one eye, strong youthful expression, crisp snow detail and cinematic movement, natural realistic skin, high-end winter editorial photography',
    negativePrompt,
    tags: ['风雪', '红围巾', '黑色针织短裙', '行走', '电影感'],
    identity: {
      ageBand: '23-25',
      face: ['heart-shape', 'cat-almond-eyes', 'slender-nose', 'full-lower-lip'],
      hair: ['long-dark', 'windblown'],
      distinctiveFeatures: ['small-beauty-mark-near-eye']
    },
    fashion: ['charcoal-wrap-coat', 'black-mini-knit-dress', 'burgundy-scarf', 'tall-black-boots'],
    scene: ['snow-forest', 'winter', 'windblown-snow'],
    photography: { composition: 'walking-full-body', lens: '85mm', angle: 'slight-low-angle', lighting: ['soft-overcast-light', 'snow-rim-light'] },
    outputPath: '/images/nature/snow-muse/snow-muse-003.webp'
  },
  {
    id: 'snow-004',
    title: '雪夜灯火',
    prompt: 'Clearly adult young East Asian woman age 24 to 26 in a snowy mountain village at night, dark tailored coat draped over a cream off-shoulder fitted knit dress, slim black belt and heeled winter boots, dark soft-wave hair, distinct long oval face with calm narrow almond eyes and a tiny mole near the lip, warm cabin windows glowing behind her, snowflakes catching amber light, elegant warm-and-cool contrast, natural skin and fabric texture, cinematic luxury winter editorial',
    negativePrompt,
    tags: ['雪夜', '灯火', '露肩针织裙', '冷暖对比', '山村'],
    identity: {
      ageBand: '24-26',
      face: ['long-oval', 'narrow-almond-eyes', 'high-soft-cheekbones', 'small-full-lips'],
      hair: ['dark', 'soft-wave'],
      distinctiveFeatures: ['tiny-mole-near-lip']
    },
    fashion: ['dark-tailored-coat', 'cream-off-shoulder-knit-dress', 'slim-black-belt', 'heeled-winter-boots'],
    scene: ['snowy-mountain-village', 'winter', 'night'],
    photography: { composition: 'half-body', lens: '50mm', angle: 'eye-level', lighting: ['warm-window-key', 'cool-night-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-004.webp'
  },
  {
    id: 'snow-005',
    title: '雪松长靴',
    prompt: 'Clearly adult young East Asian woman age 21 to 23 beside frost-covered cedar trees after fresh snowfall, cropped camel shearling jacket over a fitted ivory turtleneck mini dress, bare thighs and dark brown over-the-knee boots, long black braided half-up hair, distinct compact round-oval face with large almond eyes and light freckles, playful confident winter fashion pose, soft white snow and warm camel tones, realistic skin texture, premium photorealistic editorial photography',
    negativePrompt,
    tags: ['雪松', '长靴', '短外套', '针织短裙', '奶油色'],
    identity: {
      ageBand: '21-23',
      face: ['round-oval', 'large-almond-eyes', 'small-nose', 'petal-lips'],
      hair: ['long-black', 'braided-half-up'],
      distinctiveFeatures: ['light-freckles']
    },
    fashion: ['cropped-camel-shearling-jacket', 'ivory-turtleneck-mini-dress', 'over-the-knee-boots'],
    scene: ['frosted-cedar-grove', 'winter', 'late-morning'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['soft-snow-diffusion', 'warm-reflected-light'] },
    outputPath: '/images/nature/snow-muse/snow-muse-005.webp'
  },
  {
    id: 'snow-006',
    title: '冰屋暖光',
    prompt: 'Clearly adult young woman age 26 to 28 with East Asian features at the entrance of a modern glass igloo in deep snow, slim burgundy ribbed midi dress with a side slit, cropped black wool jacket resting on the shoulders, ankle boots and minimal silver jewelry, dark hair in a polished low bun, distinct diamond face with deep-set almond eyes and defined lips, warm interior glow meeting cold blue snow outside, poised glamorous expression, photorealistic luxury travel fashion editorial',
    negativePrompt,
    tags: ['冰屋', '暖光', '酒红针织裙', '侧开衩', '旅行写真'],
    identity: {
      ageBand: '26-28',
      face: ['diamond', 'deep-set-almond-eyes', 'straight-nose', 'defined-lips'],
      hair: ['dark', 'polished-low-bun'],
      distinctiveFeatures: ['strong-cheekbone-line']
    },
    fashion: ['burgundy-ribbed-midi-dress', 'side-slit', 'cropped-black-wool-jacket', 'ankle-boots'],
    scene: ['glass-igloo', 'deep-snow', 'twilight'],
    photography: { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['warm-interior-key', 'cool-snow-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-006.webp'
  },
  {
    id: 'snow-007',
    title: '雪站月台',
    prompt: 'Clearly adult young East Asian woman age 22 to 24 waiting alone on a small snowy railway platform, fitted black short coat over a deep forest-green sweater dress, sheer black tights and knee-high boots, long dark-brown ponytail with loose face-framing strands, distinct soft rectangular face with wide-set eyes and a natural confident smile, distant train lights and falling snow creating cinematic bokeh, realistic skin, modern winter fashion editorial, photorealistic',
    negativePrompt,
    tags: ['雪站', '月台', '短大衣', '毛衣裙', '列车灯光'],
    identity: {
      ageBand: '22-24',
      face: ['soft-rectangular', 'wide-set-eyes', 'straight-nose', 'soft-full-lips'],
      hair: ['long-dark-brown', 'high-ponytail', 'face-framing-strands'],
      distinctiveFeatures: ['natural-confident-smile']
    },
    fashion: ['fitted-black-short-coat', 'forest-green-sweater-dress', 'sheer-black-tights', 'knee-high-boots'],
    scene: ['snowy-rural-railway-platform', 'winter', 'evening'],
    photography: { composition: 'full-body', lens: '50mm', angle: 'slight-low-angle', lighting: ['platform-practical-light', 'train-bokeh-backlight'] },
    outputPath: '/images/nature/snow-muse/snow-muse-007.webp'
  },
  {
    id: 'snow-008',
    title: '极光雪原',
    prompt: 'Clearly adult young woman age 24 to 26 with mixed East Asian and Central Asian features standing on an open Arctic snowfield beneath a subtle green aurora, fitted white faux-fur cropped jacket over a silver-gray bodycon knit dress, tall white boots, long dark hair with a cool brown tone, distinct strong oval face with wide almond eyes and defined cheekbones, elegant confident pose, aurora glow and moonlit snow outlining her silhouette, realistic skin and fabric, cinematic high-fashion winter editorial',
    negativePrompt,
    tags: ['极光', '雪原', '短毛绒外套', '修身针织裙', '银灰'],
    identity: {
      ageBand: '24-26',
      face: ['strong-oval', 'wide-almond-eyes', 'defined-cheekbones', 'full-defined-lips'],
      hair: ['long-dark-cool-brown', 'loose'],
      distinctiveFeatures: ['strong-bone-structure']
    },
    fashion: ['white-faux-fur-cropped-jacket', 'silver-gray-bodycon-knit-dress', 'tall-white-boots'],
    scene: ['arctic-snowfield', 'winter', 'aurora-night'],
    photography: { composition: 'environmental-three-quarter', lens: '35mm', angle: 'slight-low-angle', lighting: ['moonlit-snow', 'subtle-aurora-rim'] },
    outputPath: '/images/nature/snow-muse/snow-muse-008.webp'
  },
  {
    id: 'snow-009',
    title: '雪屋咖啡',
    prompt: 'Clearly adult young East Asian woman age 23 to 25 outside a small wooden snow cabin holding a hot coffee, fitted oatmeal wrap cardigan worn as a mini sweater dress with a slim leather belt, cream knee socks and dark winter boots, shoulder-length black bob tucked behind one ear, distinct heart-oval face with slightly upturned eyes and soft natural lips, rosy cold-weather cheeks, relaxed intimate expression, warm porch light and snowy background, premium lifestyle fashion photography, photorealistic natural skin',
    negativePrompt,
    tags: ['雪屋', '咖啡', '毛衣裙', '生活方式', '暖灯'],
    identity: {
      ageBand: '23-25',
      face: ['heart-oval', 'slightly-upturned-eyes', 'small-straight-nose', 'soft-natural-lips'],
      hair: ['shoulder-length-black-bob', 'tucked-behind-ear'],
      distinctiveFeatures: ['rosy-cold-weather-cheeks']
    },
    fashion: ['oatmeal-wrap-cardigan-dress', 'slim-leather-belt', 'cream-knee-socks', 'dark-winter-boots'],
    scene: ['wooden-snow-cabin', 'winter', 'early-evening'],
    photography: { composition: 'half-body', lens: '70mm', angle: 'eye-level', lighting: ['warm-porch-key', 'cool-snow-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-009.webp'
  },
  {
    id: 'snow-010',
    title: '冰瀑银影',
    prompt: 'Clearly adult young East Asian woman age 25 to 27 in front of a dramatic frozen waterfall, tailored pale-gray long coat opened over a fitted black sleeveless knit mini dress, slim waist belt and black knee-high boots, long dark hair in a low ponytail, distinct angular oval face with long almond eyes and a high bridge nose, poised direct eye contact, crystal ice textures and soft winter mist, elegant monochrome palette, realistic skin texture, high-end cinematic winter fashion editorial, photorealistic',
    negativePrompt,
    tags: ['冰瀑', '银灰', '无袖针织短裙', '长靴', '冷雾'],
    identity: {
      ageBand: '25-27',
      face: ['angular-oval', 'long-almond-eyes', 'high-bridge-nose', 'defined-full-lips'],
      hair: ['long-dark', 'low-ponytail'],
      distinctiveFeatures: ['direct-confident-eye-contact']
    },
    fashion: ['pale-gray-tailored-long-coat', 'black-sleeveless-knit-mini-dress', 'slim-waist-belt', 'black-knee-high-boots'],
    scene: ['frozen-waterfall', 'winter', 'soft-mist-day'],
    photography: { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['soft-overcast-key', 'ice-reflection-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-010.webp'
  }
];
