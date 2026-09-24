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
  'underage, teenager, childlike face, mature middle-aged look, elderly, same face, cloned face, recurring identity, generic influencer face, plastic skin, waxy skin, lowres, blurry, jpeg artifacts, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const snowBatch02: SnowGenerationSpec[] = [
  {
    id: 'snow-011',
    title: '冰蓝露台',
    prompt: 'Clearly adult young East Asian woman age 23 to 25 on a snow-covered alpine hotel terrace at blue hour, fitted pearl-gray off-shoulder knit mini dress under a cropped ivory faux-fur jacket, tall white boots, long dark hair in loose waves, distinct tapered oval face with wide almond eyes and a soft cupid bow, calm confident expression, icy lake and cobalt mountains behind, realistic natural skin, premium photorealistic winter fashion editorial, tasteful sensuality, cinematic depth, no text, no logo',
    negativePrompt,
    tags: ['冰蓝', '露台', '露肩针织裙', '白色长靴', '蓝调时刻'],
    identity: {
      ageBand: '23-25',
      face: ['tapered-oval', 'wide-almond-eyes', 'straight-small-nose', 'soft-cupid-bow-lips'],
      hair: ['long-dark', 'loose-waves'],
      distinctiveFeatures: ['soft-arched-brows']
    },
    fashion: ['pearl-gray-off-shoulder-knit-mini-dress', 'cropped-ivory-faux-fur-jacket', 'tall-white-boots'],
    scene: ['alpine-hotel-terrace', 'winter', 'blue-hour'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['blue-hour-ambient', 'warm-window-rim', 'snow-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-011.webp'
  },
  {
    id: 'snow-012',
    title: '雪镇红裙',
    prompt: 'Clearly adult young East Asian woman age 25 to 27 walking through a quiet snow-covered European mountain street at night, fitted deep-crimson knit dress with a thigh slit, short black wool coat draped over the shoulders, sheer black tights and heeled knee boots, sleek shoulder-length black hair, distinct soft diamond face with deep-set eyes and defined lips, warm shop lights reflecting on snow, sophisticated photorealistic winter editorial, cinematic warm-cool contrast, tasteful sensuality',
    negativePrompt,
    tags: ['雪镇', '红裙', '夜景', '短大衣', '长靴'],
    identity: {
      ageBand: '25-27',
      face: ['soft-diamond', 'deep-set-almond-eyes', 'high-bridge-nose', 'defined-full-lips'],
      hair: ['shoulder-length-black', 'sleek-straight'],
      distinctiveFeatures: ['sharp-cheekbone-highlight']
    },
    fashion: ['deep-crimson-fitted-knit-dress', 'short-black-wool-coat', 'sheer-black-tights', 'heeled-knee-boots'],
    scene: ['snowy-mountain-town-street', 'winter', 'night'],
    photography: { composition: 'walking-full-body', lens: '50mm', angle: 'slight-low-angle', lighting: ['warm-shop-practicals', 'cool-night-fill', 'snow-reflection'] },
    outputPath: '/images/nature/snow-muse/snow-muse-012.webp'
  },
  {
    id: 'snow-013',
    title: '冰屋银夜',
    prompt: 'Clearly adult young woman age 24 to 26 with East Asian features inside a modern glass igloo surrounded by deep snow, fitted silver-gray satin slip dress layered with a soft cream cropped knit cardigan, bare shoulders, minimal jewelry, dark hair in a polished low bun, distinct long oval face with narrow cat eyes and a tiny mole beneath one eye, aurora glow visible through the glass, luxury travel portrait, realistic skin and fabric, cinematic photorealism, elegant tasteful sensuality',
    negativePrompt,
    tags: ['冰屋', '银灰', '吊带裙', '极光', '旅行写真'],
    identity: {
      ageBand: '24-26',
      face: ['long-oval', 'narrow-cat-eyes', 'slender-nose', 'balanced-full-lips'],
      hair: ['dark', 'polished-low-bun'],
      distinctiveFeatures: ['tiny-mole-below-eye']
    },
    fashion: ['silver-gray-satin-slip-dress', 'cream-cropped-knit-cardigan', 'minimal-silver-jewelry'],
    scene: ['glass-igloo-interior', 'deep-snow', 'aurora-night'],
    photography: { composition: 'half-body', lens: '85mm', angle: 'eye-level', lighting: ['warm-interior-key', 'aurora-ambient', 'snow-bounce'] },
    outputPath: '/images/nature/snow-muse/snow-muse-013.webp'
  },
  {
    id: 'snow-014',
    title: '缆车晴雪',
    prompt: 'Clearly adult young East Asian woman age 21 to 23 beside a mountain cable-car station after fresh snowfall, fitted cream ribbed turtleneck mini dress, cropped camel shearling jacket, dark over-the-knee boots, long black hair in a high ponytail with loose strands, distinct round-heart face with large bright eyes and light freckles, playful confident pose, crisp alpine daylight and vivid blue sky, premium photorealistic winter fashion campaign',
    negativePrompt,
    tags: ['缆车', '晴雪', '羊羔绒短外套', '针织短裙', '过膝靴'],
    identity: {
      ageBand: '21-23',
      face: ['round-heart', 'large-bright-eyes', 'small-upturned-nose', 'petal-lips'],
      hair: ['long-black', 'high-ponytail', 'loose-face-framing-strands'],
      distinctiveFeatures: ['light-freckles']
    },
    fashion: ['cream-ribbed-turtleneck-mini-dress', 'camel-shearling-cropped-jacket', 'dark-over-the-knee-boots'],
    scene: ['alpine-cable-car-station', 'winter', 'clear-day'],
    photography: { composition: 'full-body', lens: '50mm', angle: 'slight-low-angle', lighting: ['crisp-daylight', 'snow-bounce'] },
    outputPath: '/images/nature/snow-muse/snow-muse-014.webp'
  },
  {
    id: 'snow-015',
    title: '雪桥暮色',
    prompt: 'Clearly adult young East Asian woman age 26 to 28 standing on a narrow wooden bridge over a partially frozen river at sunset, fitted charcoal belted coat dress with a short hem, burgundy leather gloves and black knee-high boots, dark brown bob with a side part, distinct square-oval face with straight brows and slightly upturned eyes, poised direct gaze, pink winter sky and snowy pines reflected in the river, photorealistic cinematic fashion editorial, elegant tasteful sensuality',
    negativePrompt,
    tags: ['雪桥', '暮色', '大衣裙', '酒红手套', '冰河'],
    identity: {
      ageBand: '26-28',
      face: ['square-oval', 'slightly-upturned-eyes', 'straight-nose', 'wide-soft-lips'],
      hair: ['dark-brown-bob', 'side-part'],
      distinctiveFeatures: ['straight-defined-brows']
    },
    fashion: ['charcoal-belted-coat-dress', 'burgundy-leather-gloves', 'black-knee-high-boots'],
    scene: ['wooden-bridge-over-frozen-river', 'winter', 'sunset'],
    photography: { composition: 'environmental-three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['sunset-rim-light', 'river-reflection-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-015.webp'
  },
  {
    id: 'snow-016',
    title: '雪夜温泉',
    prompt: 'Clearly adult young East Asian woman age 24 to 26 on a private outdoor hot-spring terrace in a snowy mountain resort, elegant fitted black one-piece swimsuit with a soft ivory robe loosely draped over the shoulders, wet dark hair swept back, distinct heart-oval face with long almond eyes and natural full lips, visible steam, warm lantern glow, snow-covered rocks and pines, luxury spa editorial photography, photorealistic skin, tasteful sensuality, no nudity',
    negativePrompt,
    tags: ['雪夜', '温泉', '黑色连体泳装', '浴袍', '暖灯'],
    identity: {
      ageBand: '24-26',
      face: ['heart-oval', 'long-almond-eyes', 'small-straight-nose', 'natural-full-lips'],
      hair: ['dark', 'wet-swept-back'],
      distinctiveFeatures: ['softly-flushed-cheeks']
    },
    fashion: ['black-fitted-one-piece-swimsuit', 'ivory-soft-robe'],
    scene: ['private-outdoor-hot-spring-terrace', 'winter', 'night'],
    photography: { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['warm-lantern-key', 'steam-diffusion', 'cool-snow-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-016.webp'
  },
  {
    id: 'snow-017',
    title: '雪原骑行',
    prompt: 'Clearly adult young woman age 23 to 25 with mixed East Asian and Central Asian features beside a matte-black snowmobile on a vast snowy plateau, fitted white technical ski top and slim black ski pants under a cropped silver winter jacket, tall boots, long dark hair braided to one side, distinct strong oval face with wide-set eyes and defined cheekbones, confident athletic pose, windblown snow and distant mountains, high-end photorealistic winter sports fashion editorial',
    negativePrompt,
    tags: ['雪原', '雪地摩托', '运动时尚', '银色短外套', '高山'],
    identity: {
      ageBand: '23-25',
      face: ['strong-oval', 'wide-set-eyes', 'defined-cheekbones', 'full-defined-lips'],
      hair: ['long-dark', 'side-braid'],
      distinctiveFeatures: ['strong-bone-structure']
    },
    fashion: ['white-fitted-technical-ski-top', 'slim-black-ski-pants', 'cropped-silver-winter-jacket', 'tall-boots'],
    scene: ['open-snow-plateau', 'winter', 'windy-day'],
    photography: { composition: 'full-body', lens: '35mm', angle: 'slight-low-angle', lighting: ['bright-overcast', 'snow-rim-light'] },
    outputPath: '/images/nature/snow-muse/snow-muse-017.webp'
  },
  {
    id: 'snow-018',
    title: '壁炉雪窗',
    prompt: 'Clearly adult young East Asian woman age 22 to 24 sitting beside a panoramic cabin window while snow falls outside, fitted ivory wrap sweater dress with a defined waist and over-the-knee cream socks, long dark-brown hair in a loose half-up style, distinct compact oval face with round almond eyes and a gentle asymmetric smile, warm fireplace glow on skin, blue snowy forest beyond glass, intimate luxury lifestyle fashion portrait, photorealistic and tasteful',
    negativePrompt,
    tags: ['壁炉', '雪窗', '毛衣裙', '室内写真', '冷暖对比'],
    identity: {
      ageBand: '22-24',
      face: ['compact-oval', 'round-almond-eyes', 'small-nose', 'soft-full-lips'],
      hair: ['long-dark-brown', 'loose-half-up'],
      distinctiveFeatures: ['gentle-asymmetric-smile']
    },
    fashion: ['ivory-wrap-sweater-dress', 'cream-over-the-knee-socks'],
    scene: ['modern-cabin-window', 'winter', 'snowfall-evening'],
    photography: { composition: 'seated-three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['fireplace-key', 'cool-window-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-018.webp'
  },
  {
    id: 'snow-019',
    title: '雪林酒红',
    prompt: 'Clearly adult young East Asian woman age 25 to 27 in a dense snow-covered cedar forest, fitted burgundy off-shoulder knit midi dress with a side slit, black ankle boots and a short cream faux-fur cape, long black hair in a low ponytail, distinct angular oval face with narrow almond eyes and a high bridge nose, elegant direct eye contact, fine snow suspended in the air, deep forest green and burgundy palette, cinematic photorealistic winter editorial',
    negativePrompt,
    tags: ['雪林', '酒红', '露肩针织裙', '侧开衩', '冷杉'],
    identity: {
      ageBand: '25-27',
      face: ['angular-oval', 'narrow-almond-eyes', 'high-bridge-nose', 'defined-lips'],
      hair: ['long-black', 'low-ponytail'],
      distinctiveFeatures: ['precise-direct-eye-contact']
    },
    fashion: ['burgundy-off-shoulder-knit-midi-dress', 'side-slit', 'cream-faux-fur-cape', 'black-ankle-boots'],
    scene: ['snow-covered-cedar-forest', 'winter', 'soft-snowfall'],
    photography: { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['soft-overcast-key', 'snow-reflection-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-019.webp'
  },
  {
    id: 'snow-020',
    title: '极昼冰湾',
    prompt: 'Clearly adult young East Asian woman age 24 to 26 standing above a frozen Arctic bay during pale golden polar daylight, fitted icy-blue knit mini dress under a cropped white faux-fur jacket, white knee-high boots and minimal pearl earrings, shoulder-length dark hair with a soft outward flip, distinct soft rectangular face with wide-set eyes and a subtle confident smile, sweeping snow ridge and frozen sea behind, luminous photorealistic high-fashion winter portrait, premium editorial finish',
    negativePrompt,
    tags: ['极昼', '冰湾', '冰蓝针织裙', '白色短毛绒', '极地'],
    identity: {
      ageBand: '24-26',
      face: ['soft-rectangular', 'wide-set-eyes', 'straight-nose', 'balanced-lips'],
      hair: ['shoulder-length-dark', 'soft-outward-flip'],
      distinctiveFeatures: ['subtle-confident-smile']
    },
    fashion: ['icy-blue-fitted-knit-mini-dress', 'cropped-white-faux-fur-jacket', 'white-knee-high-boots', 'pearl-earrings'],
    scene: ['frozen-arctic-bay-overlook', 'winter', 'polar-daylight'],
    photography: { composition: 'environmental-full-body', lens: '50mm', angle: 'eye-level', lighting: ['pale-golden-polar-light', 'ice-reflection-fill'] },
    outputPath: '/images/nature/snow-muse/snow-muse-020.webp'
  }
];
