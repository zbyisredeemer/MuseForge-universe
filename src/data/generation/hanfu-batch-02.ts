export type HanfuGenerationSpec = {
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
  'underage, teenager, childlike face, mature middle-aged look, elderly, conservative heavy costume, documentary reenactment, same face, cloned face, recurring identity, generic influencer face, plastic skin, lowres, blurry, jpeg artifacts, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, oversaturated';

export const hanfuBatch02: HanfuGenerationSpec[] = [
  {
    id: 'hanfu-021',
    title: '梨园春昼',
    prompt: 'Clearly adult young Chinese woman age 22 to 24 in a sunlit pear blossom courtyard, Song-inspired pale celadon beizi over an ivory fitted inner dress, translucent shoulder layer, visible collarbone and defined waist, fresh refined sensuality, long black hair in a low ribbon updo, distinct soft-round face with bright almond eyes and subtle dimples, petals drifting in spring light, premium photorealistic fashion editorial, natural skin texture',
    negativePrompt,
    tags: ['汉服', '宋制灵感', '梨花', '春日', '青瓷色'],
    identity: {
      ageBand: '22-24',
      face: ['soft-round', 'bright-almond-eyes', 'small-straight-nose', 'balanced-full-lips'],
      hair: ['long-black', 'low-ribbon-updo'],
      distinctiveFeatures: ['subtle-dimples']
    },
    fashion: ['song-inspired-beizi', 'ivory-inner-dress', 'celadon', 'defined-waist', 'translucent-layer'],
    scene: ['pear-blossom-courtyard', 'spring', 'late-morning'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['soft-spring-backlight'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-021.webp'
  },
  {
    id: 'hanfu-022',
    title: '霁雨回廊',
    prompt: 'Clearly adult young Chinese woman age 25 to 27 walking through a rain-washed Jiangnan corridor after a shower, Ming-inspired ink-black and pale jade layered hanfu with fitted waist, semi-sheer sleeves and an elegant open neckline, shoulder-length textured black bob adapted with a silver hair comb, distinct soft-square face and defined cheekbones, wet stone reflections and cool green light, sophisticated restrained sensuality, cinematic luxury editorial photography, realistic skin',
    negativePrompt,
    tags: ['汉服', '明制灵感', '雨后', '江南', '墨玉'],
    identity: {
      ageBand: '25-27',
      face: ['soft-square', 'defined-cheekbones', 'narrow-upturned-eyes', 'wide-defined-lips'],
      hair: ['shoulder-length-black-bob', 'silver-comb'],
      distinctiveFeatures: ['slightly-asymmetric-smile']
    },
    fashion: ['ming-inspired-layering', 'ink-black', 'pale-jade', 'semi-sheer-sleeves', 'fitted-waist'],
    scene: ['jiangnan-covered-corridor', 'after-rain', 'blue-hour'],
    photography: { composition: 'walking-full-body', lens: '35mm', angle: 'eye-level', lighting: ['cool-rain-reflection', 'soft-lantern-fill'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-022.webp'
  },
  {
    id: 'hanfu-023',
    title: '海棠夜宴',
    prompt: 'Clearly adult young Chinese woman age 23 to 25 at an intimate ancient garden banquet under blooming crabapple trees, Tang-inspired warm coral and champagne qixiong ruqun with airy gauze sleeves, elegant shoulder and collarbone line, high waist silhouette and flowing silk, distinct heart-shaped face with slightly wide-set cat almond eyes, ornate but youthful gold hairpins, candle lanterns and flower shadows, glamorous young sensuality, photorealistic cinematic editorial',
    negativePrompt,
    tags: ['汉服', '唐制灵感', '海棠', '夜宴', '珊瑚金'],
    identity: {
      ageBand: '23-25',
      face: ['heart-shape', 'cat-almond-eyes', 'slender-nose', 'full-lower-lip'],
      hair: ['long-black', 'high-youthful-updo'],
      distinctiveFeatures: ['small-beauty-mark-near-eye']
    },
    fashion: ['tang-inspired-qixiong-ruqun', 'coral', 'champagne-gold', 'gauze-sleeves', 'high-waist'],
    scene: ['crabapple-garden-banquet', 'spring-night', 'lanterns'],
    photography: { composition: 'half-body', lens: '85mm', angle: 'slight-low-angle', lighting: ['candle-lantern-key', 'cool-night-fill'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-023.webp'
  },
  {
    id: 'hanfu-024',
    title: '青瓷茶席',
    prompt: 'Clearly adult young Chinese woman age 26 to 28 seated at a refined tea table beside a lattice window, Song-inspired pearl-white and celadon hanfu with slim inner layer, graceful neckline, translucent outer robe and clean waist line, distinct long-oval face with high soft cheekbones, narrow almond eyes and a tiny mole near the lip, dark brown low bun with jade pin, celadon tea ware and bamboo shadows, intelligent calm sensuality, premium realistic editorial photography',
    negativePrompt,
    tags: ['汉服', '宋制灵感', '茶席', '青瓷', '知性'],
    identity: {
      ageBand: '26-28',
      face: ['long-oval', 'high-soft-cheekbones', 'narrow-almond-eyes', 'small-full-lips'],
      hair: ['dark-brown', 'low-bun', 'jade-pin'],
      distinctiveFeatures: ['tiny-mole-near-lip']
    },
    fashion: ['song-inspired-hanfu', 'pearl-white', 'celadon', 'translucent-outer-robe', 'defined-waist'],
    scene: ['scholar-tea-room', 'bamboo-window-shadow', 'afternoon'],
    photography: { composition: 'seated-three-quarter', lens: '70mm', angle: 'slight-high-angle', lighting: ['window-softlight', 'warm-table-bounce'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-024.webp'
  },
  {
    id: 'hanfu-025',
    title: '雪桥绛纱',
    prompt: 'Clearly adult young Chinese woman age 21 to 23 standing on a stone bridge in light snowfall, youthful wine-red and ivory winter hanfu with fitted bodice, slim fur trim, sheer crimson shawl drifting from one shoulder and visible collarbone, distinct compact oval face with large almond eyes and soft freckles, long black braided half-up hair, white river mist and red plum branches, romantic winter fashion editorial, cinematic photorealism, natural skin',
    negativePrompt,
    tags: ['汉服', '冬雪', '石桥', '绛红', '薄纱'],
    identity: {
      ageBand: '21-23',
      face: ['compact-oval', 'large-almond-eyes', 'small-nose', 'petal-lips'],
      hair: ['long-black', 'braided-half-up'],
      distinctiveFeatures: ['light-freckles']
    },
    fashion: ['fitted-winter-hanfu', 'wine-red', 'ivory', 'light-fur-trim', 'sheer-crimson-shawl'],
    scene: ['snowy-stone-bridge', 'plum-river', 'winter-morning'],
    photography: { composition: 'full-body', lens: '50mm', angle: 'eye-level', lighting: ['snow-diffused-light', 'soft-red-reflection'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-025.webp'
  },
  {
    id: 'hanfu-026',
    title: '丹霞马场',
    prompt: 'Clearly adult young Chinese woman age 24 to 26 beside a dark horse at a highland riding ground at sunset, northern-dynasty-inspired rust red, black and sand riding hanfu with fitted leather waist belt, open layered collar, windblown scarf and practical split skirt, distinct rectangular-oval face with deep-set almond eyes and sun-kissed golden skin, long dark brown braided ponytail, dramatic cloud and mountain backdrop, adventurous feminine sensuality, premium cinematic fashion editorial',
    negativePrompt,
    tags: ['汉服', '骑装灵感', '马场', '丹霞', '飒爽'],
    identity: {
      ageBand: '24-26',
      face: ['rectangular-oval', 'deep-set-almond-eyes', 'straight-nose', 'full-lips'],
      hair: ['long-dark-brown', 'braided-ponytail'],
      distinctiveFeatures: ['sun-kissed-skin']
    },
    fashion: ['riding-hanfu-inspired', 'rust-red', 'black', 'sand', 'leather-waist-belt', 'split-layered-skirt'],
    scene: ['highland-riding-ground', 'mountains', 'sunset'],
    photography: { composition: 'environmental-full-body', lens: '35mm', angle: 'slight-low-angle', lighting: ['sunset-rim-light', 'warm-dust-fill'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-026.webp'
  },
  {
    id: 'hanfu-027',
    title: '月白帘影',
    prompt: 'Clearly adult young Chinese woman age 23 to 24 behind a translucent moon-white curtain in a quiet bedroom pavilion, Wei-Jin-inspired pale moon-white and smoky blue wide-sleeve hanfu with an elegant one-shoulder drape, fitted inner waist and soft collarbone line, distinct diamond face with long almond eyes, dark hair in a loose low knot with several natural strands, moonlight and candle glow filtering through fabric, intimate poetic sensuality without explicitness, photorealistic luxury editorial',
    negativePrompt,
    tags: ['汉服', '魏晋风灵感', '月白', '帘影', '夜色'],
    identity: {
      ageBand: '23-24',
      face: ['diamond', 'long-almond-eyes', 'slender-nose', 'defined-lips'],
      hair: ['dark', 'loose-low-knot', 'natural-face-framing-strands'],
      distinctiveFeatures: ['soft-eye-asymmetry']
    },
    fashion: ['wei-jin-inspired-wide-sleeve', 'moon-white', 'smoky-blue', 'one-shoulder-drape', 'fitted-inner-waist'],
    scene: ['bedroom-pavilion', 'translucent-curtain', 'moonlit-night'],
    photography: { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['moonlight-through-curtain', 'candle-fill'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-027.webp'
  },
  {
    id: 'hanfu-028',
    title: '金陵夏荷',
    prompt: 'Clearly adult young Chinese woman age 22 to 24 standing on a wooden lakeside deck among tall summer lotus, Ming-inspired soft cream and muted rose hanfu with a structured waist, light translucent over-sleeves and tasteful neckline, distinct round-oval face with slightly upturned eyes and a cheerful natural smile, long black hair in a youthful side bun with pearl tassels, humid golden summer light and green lotus reflections, fresh feminine sensuality, high-end photorealistic editorial',
    negativePrompt,
    tags: ['汉服', '明制灵感', '夏荷', '金陵', '奶油粉'],
    identity: {
      ageBand: '22-24',
      face: ['round-oval', 'slightly-upturned-eyes', 'small-straight-nose', 'soft-full-lips'],
      hair: ['long-black', 'youthful-side-bun', 'pearl-tassels'],
      distinctiveFeatures: ['natural-smile']
    },
    fashion: ['ming-inspired-hanfu', 'cream', 'muted-rose', 'structured-waist', 'translucent-over-sleeves'],
    scene: ['summer-lotus-lake', 'wooden-deck', 'golden-hour'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['humid-golden-backlight', 'lotus-green-bounce'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-028.webp'
  },
  {
    id: 'hanfu-029',
    title: '敦煌流光',
    prompt: 'Clearly adult young Chinese woman age 25 to 27 in a Dunhuang-inspired desert grotto terrace at blue hour, saffron, turquoise and ivory flowing historical-fantasy hanfu inspired by mural drapery, fitted waist, graceful open shoulder line and long airborne silk ribbons, distinct strong oval face with defined cheekbones and wide almond eyes, long dark hair in an ornate braided crown, sandstone texture and subtle mural color echoes, artistic but photorealistic fashion editorial, elegant youthful sensuality',
    negativePrompt,
    tags: ['汉服', '敦煌灵感', '飞天', '沙金', '青绿'],
    identity: {
      ageBand: '25-27',
      face: ['strong-oval', 'defined-cheekbones', 'wide-almond-eyes', 'full-defined-lips'],
      hair: ['long-dark', 'ornate-braided-crown'],
      distinctiveFeatures: ['strong-bone-structure']
    },
    fashion: ['dunhuang-inspired-draped-hanfu', 'saffron', 'turquoise', 'ivory', 'airborne-silk-ribbons', 'defined-waist'],
    scene: ['desert-grotto-terrace', 'blue-hour', 'sandstone'],
    photography: { composition: 'environmental-three-quarter', lens: '50mm', angle: 'slight-low-angle', lighting: ['blue-hour-ambient', 'warm-reflected-sand-light'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-029.webp'
  },
  {
    id: 'hanfu-030',
    title: '汴河灯船',
    prompt: 'Clearly adult young Chinese woman age 24 to 26 on a lantern-lit pleasure boat along an ancient canal at night, Song-inspired deep ink-blue and warm gold hanfu with slim fitted inner dress, translucent outer robe, defined waist and elegant neckline, distinct heart-oval face with cat almond eyes and confident eye contact, long black hair in a polished low updo with gold pin, moving water reflections and distant old-city lights, glamorous cinematic sensuality, premium photorealistic night editorial',
    negativePrompt,
    tags: ['汉服', '宋制灵感', '汴河', '灯船', '墨金'],
    identity: {
      ageBand: '24-26',
      face: ['heart-oval', 'cat-almond-eyes', 'high-bridge-nose', 'full-lips'],
      hair: ['long-black', 'polished-low-updo', 'gold-pin'],
      distinctiveFeatures: ['confident-eye-contact']
    },
    fashion: ['song-inspired-hanfu', 'ink-blue', 'warm-gold', 'slim-inner-dress', 'translucent-outer-robe', 'defined-waist'],
    scene: ['ancient-canal-pleasure-boat', 'night', 'lantern-reflections'],
    photography: { composition: 'half-body', lens: '85mm', angle: 'slight-low-angle', lighting: ['lantern-key', 'water-reflection-fill'] },
    outputPath: '/images/eastern/hanfu-muse/hanfu-muse-030.webp'
  }
];
