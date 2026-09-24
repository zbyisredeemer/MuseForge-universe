import type { MuseImage, MusePlanet } from '../types';

const negativePrompt =
  'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

const baseIdentity = {
  gender: 'female' as const,
  ageGroup: 'adult' as const,
  region: 'east-asia'
};

type ForestExpansion = {
  title: string;
  prompt: string;
  tags: string[];
  scene: string;
  season: string;
  weather: string;
  time: string;
  action: string;
  expression: string;
  outfit: string[];
  colors: string[];
  composition: string;
  lens: string;
  aperture?: string;
  angle?: string;
  lighting: string[];
  styles: string[];
  mood: string[];
  palette: string[];
  hair?: string[];
};

const forestExpansion: ForestExpansion[] = [
  {
    title: '雨后木桥',
    prompt: 'Adult woman walking away across a narrow rain-darkened wooden bridge in a wet forest, looking briefly to the side rather than directly at camera, moss-covered rails and moving water visible around the bridge, muted sage natural-fabric dress with practical longline tailoring, full body in frame with generous environment, 35mm lens from a back three-quarter angle, soft gray overcast light reflected from wet wood, natural skin and fabric texture, realistic stride and hands, documentary-cinematic forest photography',
    tags: ['雨后', '木桥', '苔藓', '灰调'],
    scene: 'wet-forest-bridge', season: 'summer', weather: 'rain', time: 'day', action: 'walking-away', expression: 'side-glance-calm',
    outfit: ['simple-dress'], colors: ['sage'], composition: 'full-body-environmental', lens: '35mm', aperture: 'f/4', angle: 'back-three-quarter',
    lighting: ['soft-overcast-light', 'wet-surface-reflection'], styles: ['photorealistic', 'cinematic'], mood: ['serene'], palette: ['sage', 'gray', 'deep-green']
  },
  {
    title: '溪边白衫',
    prompt: 'Adult woman seated naturally on a broad stone beside a shallow forest stream, torso angled away from camera and gaze following the water, soft white textured blouse with understated layered tailoring and a long olive skirt, both hands relaxed and visible instead of a beauty-pose hand-to-face gesture, scattered leaf light across fabric and stones, 85mm lens from a slightly high three-quarter angle, realistic youthful adult skin texture, natural soft expression, delicate background bokeh, candid editorial realism',
    tags: ['溪边', '白衫', '坐姿', '斑驳光'],
    scene: 'forest-stream-bank', season: 'summer', weather: 'sunny', time: 'morning', action: 'sitting-on-stone', expression: 'thoughtful-away',
    outfit: ['white-blouse', 'long-skirt'], colors: ['white', 'olive'], composition: 'three-quarter-candid', lens: '85mm', aperture: 'f/2.2', angle: 'slightly-high-three-quarter',
    lighting: ['dappled-light', 'natural-light', 'stream-reflected-fill'], styles: ['photorealistic', 'editorial'], mood: ['fresh', 'serene'], palette: ['white', 'olive', 'emerald']
  },
  {
    title: '秋林风衣',
    prompt: 'Adult woman taking a long natural stride through an autumn woodland, camel trench coat over dark textured layers with one restrained woven belt detail, photographed from a low three-quarter side angle so the face is not front-centered, copper leaves and dark trunks forming vertical depth, soft wind moving the coat hem, 35mm full-body environmental fashion portrait, warm natural side light, realistic skin texture and hair, filmic but not airbrushed',
    tags: ['秋林', '风衣', '铜色', '行走'],
    scene: 'autumn-woodland', season: 'autumn', weather: 'cloudy', time: 'day', action: 'long-stride', expression: 'focused-away',
    outfit: ['trench-coat'], colors: ['camel'], composition: 'full-body-environmental', lens: '35mm', aperture: 'f/3.2', angle: 'low-three-quarter-side',
    lighting: ['soft-natural-light', 'warm-side-light'], styles: ['photorealistic', 'cinematic', 'editorial', 'film'], mood: ['warm', 'elegant'], palette: ['camel', 'copper', 'deep-green']
  },
  {
    title: '薄雾针叶林',
    prompt: 'Adult East Asian woman standing among tall conifers in thin morning fog, charcoal knit dress, dark natural hair, minimal makeup, cool cinematic portrait with layered atmospheric depth, 85mm lens, soft diffused light, photorealistic',
    tags: ['针叶林', '薄雾', '针织', '冷调'],
    scene: 'conifer-forest', season: 'autumn', weather: 'fog', time: 'morning', action: 'standing', expression: 'quiet',
    outfit: ['knit-dress'], colors: ['charcoal'], composition: 'half-body', lens: '85mm',
    lighting: ['diffused-light'], styles: ['photorealistic', 'cinematic', 'minimalist'], mood: ['cool', 'serene'], palette: ['charcoal', 'silver', 'pine-green']
  },
  {
    title: '林间逆光',
    prompt: 'Clearly adult young woman beside a tall tree in a sunlit forest at golden hour, body turned almost in profile and one hand resting naturally against the bark, cream long dress with restrained natural-fabric tailoring, gaze directed past the camera instead of a centered beauty pose, warm rim light outlining the face and hair with soft reflected fill from the forest floor, realistic pores and age texture, 70mm lens, three-quarter environmental portrait, subtle film bloom, photorealistic editorial color grading',
    tags: ['逆光', '金色', '侧身', '成熟感'],
    scene: 'sunlit-forest', season: 'summer', weather: 'sunny', time: 'golden-hour', action: 'leaning-on-tree', expression: 'calm-away',
    outfit: ['long-dress'], colors: ['cream'], composition: 'three-quarter-profile', lens: '70mm', aperture: 'f/2.5', angle: 'side-three-quarter',
    lighting: ['warm-backlight', 'natural-light', 'reflected-fill'], styles: ['photorealistic', 'cinematic', 'editorial', 'film'], mood: ['warm', 'serene'], palette: ['cream', 'warm-gold', 'forest-green']
  },
  {
    title: '野莓灌木',
    prompt: 'Adult East Asian woman near wild berry shrubs in a late-summer woodland, muted burgundy cardigan and dark skirt, soft afternoon light, natural expression, editorial lifestyle portrait, 50mm lens, detailed foliage and realistic skin',
    tags: ['野莓', '灌木', '酒红', '自然'],
    scene: 'berry-woodland', season: 'summer', weather: 'sunny', time: 'day', action: 'standing', expression: 'natural',
    outfit: ['cardigan', 'long-skirt'], colors: ['burgundy', 'charcoal'], composition: 'three-quarter', lens: '50mm',
    lighting: ['soft-natural-light'], styles: ['photorealistic', 'editorial'], mood: ['fresh', 'warm'], palette: ['burgundy', 'forest-green', 'brown']
  },
  {
    title: '古树根系',
    prompt: 'Clearly adult young woman crouching beside the exposed roots of an ancient tree in a deep forest, one hand resting on a massive root for scale, broad environmental composition that shows bark, roots, moss and forest floor, dark olive structured dress with practical layered texture, strong natural facial structure and visible realistic youthful adult skin texture, composed expression looking toward the roots rather than directly at camera, 28mm lens from a slightly low angle, soft side light, photorealistic cinematic environmental portrait',
    tags: ['古树', '根系', '深林', '低机位'],
    scene: 'ancient-tree-roots', season: 'summer', weather: 'cloudy', time: 'day', action: 'crouching-by-roots', expression: 'composed-away',
    outfit: ['structured-dress'], colors: ['dark-olive'], composition: 'wide-environmental-portrait', lens: '28mm', aperture: 'f/4', angle: 'slightly-low',
    lighting: ['soft-side-light', 'forest-ambient-light'], styles: ['photorealistic', 'cinematic'], mood: ['grounded', 'serene'], palette: ['dark-olive', 'brown', 'deep-green']
  },
  {
    title: '雾林读书',
    prompt: 'Adult woman with a short dark bob seated on a moss-covered fallen log in a quiet misty forest, reading an open book with her attention on the page, dark olive wool coat over a charcoal knit top and long textured skirt, practical lace-up boots, full body visible, soft fog layering between tall trees, realistic youthful adult skin and hands, 50mm environmental portrait at eye level, cool diffused morning light, restrained cinematic realism',
    tags: ['雾林', '读书', '短发', '沉静'],
    scene: 'misty-forest-reading', season: 'autumn', weather: 'fog', time: 'morning', action: 'seated-reading', expression: 'absorbed',
    outfit: ['wool-coat', 'knit-top', 'long-skirt'], colors: ['dark-olive', 'charcoal'], composition: 'full-body-environmental', lens: '50mm', aperture: 'f/2.8', angle: 'eye-level',
    lighting: ['diffused-light', 'fog-ambient-light'], styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['quiet', 'introspective'], palette: ['dark-olive', 'charcoal', 'mist-gray']
  },
  {
    title: '林中长椅',
    prompt: 'Adult woman with short textured hair seated at one end of a weathered wooden bench in a quiet woodland, bench fully visible to establish the scene, dark green coat layered over a simple muted dress, hands resting naturally in her lap, gaze turned sideways into the forest, wide 35mm composition with substantial negative space and tree depth, realistic skin texture, soft overcast afternoon light, subtle film grain, candid cinematic lifestyle portrait',
    tags: ['长椅', '短发', '留白', '胶片'],
    scene: 'woodland-bench', season: 'autumn', weather: 'cloudy', time: 'day', action: 'seated-on-bench', expression: 'introspective-away',
    outfit: ['coat', 'dress'], colors: ['dark-green', 'beige'], composition: 'wide-environmental', lens: '35mm', aperture: 'f/3.5', angle: 'side-eye-level',
    lighting: ['soft-overcast-light'], styles: ['photorealistic', 'cinematic', 'film'], mood: ['serene', 'cool'], palette: ['beige', 'moss-green', 'gray']
  },
  {
    title: '溪畔采花',
    prompt: 'Clearly adult young woman gathering small wildflowers beside a shallow forest stream at golden hour, shoulder-length natural waves, rust cardigan over a dark floral dress, one hand holding a loose bouquet while the other reaches toward plants in the foreground, warm expression with visible freckles and natural youthful adult skin texture, 50mm three-quarter environmental portrait, warm backlight and stream-reflected fill, photorealistic lifestyle editorial',
    tags: ['溪畔', '采花', '雀斑', '暖光'],
    scene: 'streamside-wildflowers', season: 'summer', weather: 'sunny', time: 'golden-hour', action: 'gathering-wildflowers', expression: 'warm-natural',
    outfit: ['cardigan', 'floral-dress'], colors: ['rust', 'dark-floral'], composition: 'three-quarter-environmental', lens: '50mm', aperture: 'f/2.8', angle: 'eye-level',
    lighting: ['warm-backlight', 'stream-reflected-fill'], styles: ['photorealistic', 'cinematic', 'lifestyle'], mood: ['warm', 'grounded'], palette: ['rust', 'forest-green', 'warm-gold']
  },
  {
    title: '暮林灯影',
    prompt: 'Adult woman with short textured dark hair standing on a narrow forest path at blue hour, holding a warm kerosene lantern low beside her body, long charcoal wool coat with restrained layered details, cool blue forest ambient light contrasting with the lantern glow on one hand and lower face, three-quarter full-body composition, realistic skin texture, 50mm lens, quiet cinematic twilight photography',
    tags: ['暮林', '提灯', '短发', '蓝调'],
    scene: 'twilight-forest-path', season: 'autumn', weather: 'clear', time: 'blue-hour', action: 'holding-lantern', expression: 'calm-alert',
    outfit: ['long-wool-coat'], colors: ['charcoal', 'black'], composition: 'three-quarter-full-body', lens: '50mm', aperture: 'f/2.2', angle: 'side-three-quarter',
    lighting: ['lantern-key-light', 'blue-hour-ambient'], styles: ['photorealistic', 'cinematic'], mood: ['mysterious', 'quiet'], palette: ['charcoal', 'deep-blue', 'warm-amber']
  },
  {
    title: '暮色林缘',
    prompt: 'Adult woman standing at the edge of a dense conifer forest during blue hour, shown as a smaller full-body figure rather than a close beauty portrait, deep teal long dress moving lightly in the wind, layered tree silhouettes and fading mountain sky occupying most of the frame, face turned in partial profile with natural mid-length layered hair, 35mm environmental lens from a slightly low angle, cool ambient twilight with a restrained soft rim light, realistic fabric and skin, cinematic photorealism',
    tags: ['林缘', '暮色', '远景', '蓝调'],
    scene: 'forest-edge', season: 'autumn', weather: 'clear', time: 'blue-hour', action: 'standing-in-wind', expression: 'calm-profile',
    outfit: ['long-dress'], colors: ['deep-teal'], composition: 'full-body-distant-environmental', lens: '35mm', aperture: 'f/3.2', angle: 'slightly-low',
    lighting: ['blue-hour-light', 'soft-rim-light'], styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['cool', 'elegant'], palette: ['deep-teal', 'blue', 'charcoal']
  }
];

function createForestExpansionImage(item: ForestExpansion, offset: number): MuseImage {
  const number = offset + 9;
  return {
    id: `forest-${String(number).padStart(2, '0')}`,
    title: item.title,
    image: `/images/nature/forest-muse/forest-muse-${String(number).padStart(3, '0')}.webp`,
    galaxyId: 'nature',
    planetId: 'forest-muse',
    prompt: item.prompt,
    negativePrompt,
    tags: item.tags,
    dna: {
      subject: { ...baseIdentity, hair: item.hair ?? ['long', 'dark', 'natural'] },
      fashion: { outfit: item.outfit, colors: item.colors },
      environment: { scene: item.scene, season: item.season, weather: item.weather, time: item.time },
      pose: { action: item.action, expression: item.expression },
      photography: { composition: item.composition, lens: item.lens, aperture: item.aperture, angle: item.angle, lighting: item.lighting },
      aesthetics: { styles: item.styles, mood: item.mood, palette: item.palette },
      generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
    }
  };
}

export const forestMuse: MusePlanet = {
  id: 'forest-muse',
  galaxyId: 'nature',
  name: '森林系美女',
  subtitle: 'FOREST MUSE',
  description:
    '潮湿苔藓、树影、晨雾、溪流与自然光构成的清冷森林人像宇宙。第一批以自然、克制、电影感为主。',
  code: 'FOREST',
  sequence: 1,
  star: { x: 61, y: 45, size: 18 },
  images: [
    {
      id: 'forest-01',
      title: '苔光晨雾',
      image: '/images/nature/forest-muse/forest-muse-001.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Portrait of an elegant adult East Asian woman standing in a primeval moss forest at dawn, soft emerald mist, wet leaves, delicate natural makeup, long dark hair moved by a light breeze, dark green linen dress, cinematic volumetric sun rays through ancient trees, shallow depth of field, realistic skin texture, subtle film grain, editorial fashion photography, 85mm lens, f/1.8, ultra detailed, natural color grading, vertical composition, 4K',
      negativePrompt,
      tags: ['晨雾', '苔藓', '自然光', '电影感'],
      dna: {
        subject: { ...baseIdentity, appearance: ['natural-makeup'], hair: ['long', 'dark', 'loose'] },
        fashion: { outfit: ['linen-dress'], colors: ['dark-green'] },
        environment: { scene: 'moss-forest', season: 'summer', weather: 'mist', time: 'dawn' },
        pose: { action: 'standing', expression: 'calm' },
        photography: { composition: 'environmental-portrait', lens: '85mm', aperture: 'f/1.8', lighting: ['natural-light', 'volumetric-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial', 'film'], mood: ['serene'], palette: ['emerald', 'cool-green'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'forest-02',
      title: '蕨雨',
      image: '/images/nature/forest-muse/forest-muse-002.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Adult East Asian woman among giant fern leaves after a summer rain, translucent raindrops, soft overcast forest light, calm expression, wet black hair, muted olive dress, atmospheric green background, realistic pores and hair strands, luxury editorial portrait, cinematic composition, 85mm portrait lens, high dynamic range, ultra detailed, 4K',
      negativePrompt,
      tags: ['雨林', '蕨叶', '湿润', '编辑人像'],
      dna: {
        subject: { ...baseIdentity, hair: ['wet', 'black'] },
        fashion: { outfit: ['dress'], colors: ['muted-olive'] },
        environment: { scene: 'fern-forest', season: 'summer', weather: 'rain', time: 'day' },
        pose: { action: 'standing', expression: 'calm' },
        photography: { composition: 'half-body', lens: '85mm', lighting: ['soft-overcast-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['fresh', 'serene'], palette: ['olive', 'forest-green'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'forest-03',
      title: '杉林斜阳',
      image: '/images/nature/forest-muse/forest-muse-003.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Graceful adult East Asian woman in a cedar forest during late afternoon, warm diagonal sunlight cutting through cool green shadows, loose natural hair, elegant forest-green dress, serene cinematic portrait, realistic skin, subtle dust particles in light beams, fashion editorial photography, 50mm lens, filmic contrast, intricate details, 4K',
      negativePrompt,
      tags: ['杉林', '斜阳', '暖冷对比', '胶片'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'natural', 'loose'] },
        fashion: { outfit: ['dress'], colors: ['forest-green'] },
        environment: { scene: 'cedar-forest', season: 'summer', weather: 'sunny', time: 'golden-hour' },
        pose: { action: 'standing', expression: 'serene' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['diagonal-sunlight', 'natural-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial', 'film'], mood: ['warm', 'serene'], palette: ['warm-gold', 'cool-green'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'forest-04',
      title: '翡翠溪谷',
      image: '/images/nature/forest-muse/forest-muse-004.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Adult East Asian woman beside a clear emerald stream deep in a forest valley, smooth dark stones, reflected green light on skin, flowing dark green dress, quiet contemplative mood, cinematic natural light, photorealistic portrait, fine hair detail, realistic hands, 85mm lens, high-end magazine photography, ultra sharp subject, soft background, 4K',
      negativePrompt,
      tags: ['溪流', '翡翠绿', '安静', '写实'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'dark'] },
        fashion: { outfit: ['flowing-dress'], colors: ['dark-green'] },
        environment: { scene: 'forest-stream', season: 'summer', weather: 'cloudy', time: 'day' },
        pose: { action: 'standing', expression: 'contemplative' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['natural-light', 'reflected-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['serene'], palette: ['emerald', 'deep-green'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'forest-05',
      title: '野花林隙',
      image: '/images/nature/forest-muse/forest-muse-005.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Clearly adult young East Asian woman around 23 to 24 kneeling naturally in a sunlit forest wildflower glade beside a shallow stream, long dark softly wavy hair, distinct youthful face, fitted cream embroidered slip dress with delicate botanical details, tasteful open neckline and visible leg line, both hands resting naturally near her knees, warm golden backlight through trees, realistic skin texture and hair strands, premium romantic outdoor fashion editorial, 35mm environmental portrait, photorealistic high detail',
      negativePrompt,
      tags: ['野花', '林隙', '奶油吊带裙', '暖光'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'dark', 'soft-waves'] },
        fashion: { outfit: ['fitted-floral-slip-dress'], colors: ['cream', 'soft-sage'] },
        environment: { scene: 'woodland-wildflower-glade', season: 'spring', weather: 'sunny', time: 'morning' },
        pose: { action: 'kneeling', expression: 'soft-confident' },
        photography: { composition: 'environmental-fashion-portrait', lens: '35mm', aperture: 'f/2.8', angle: 'eye-level-three-quarter', lighting: ['warm-backlight', 'golden-light', 'reflected-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['young', 'romantic', 'sensual'], palette: ['cream', 'soft-sage', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
        {
      id: 'forest-06',
      title: '雾松',
      image: '/images/nature/forest-muse/forest-muse-006.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Clearly adult young East Asian woman around 25 to 26 standing in a misty conifer forest beside a mountain stream, distinct soft-square face and shoulder-length textured dark hair, fitted charcoal ribbed knit midi dress with defined waist and elegant long sleeves, calm confident expression, cool diffused morning light, layered pine fog and waterfall depth, realistic skin texture and natural hair strands, premium cinematic outdoor fashion editorial, 85mm lens, vertical 9:16 composition',
      negativePrompt,
      tags: ['雾松', '针叶林', '针织裙', '冷调'],
      dna: {
        subject: { ...baseIdentity, hair: ['shoulder-length', 'dark', 'textured-wave'] },
        fashion: { outfit: ['fitted-ribbed-knit-dress'], colors: ['charcoal'] },
        environment: { scene: 'misty-conifer-stream', season: 'autumn', weather: 'fog', time: 'morning' },
        pose: { action: 'standing', expression: 'calm-confident' },
        photography: { composition: 'three-quarter', lens: '85mm', aperture: 'f/2.2', angle: 'eye-level', lighting: ['diffused-morning-light', 'mist-ambient-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['young', 'cool', 'elegant'], palette: ['charcoal', 'mist-gray', 'pine-green'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'forest-07',
      title: '月夜森林',
      image: '/images/nature/forest-muse/forest-muse-007.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Adult woman seated sideways on a moss-covered boulder in a moonlit forest, shoulders relaxed and face shown in a soft three-quarter profile rather than a centered beauty pose, deep teal wool-and-velvet layered dress, faint fireflies and blue-black trees, soft moon rim light with subtle cool fill on the face, realistic youthful adult skin with pores and under-eye texture, natural hands visible, 85mm lens, controlled highlights, shallow but believable depth of field, cinematic night realism without fantasy-glow skin, 4K',
      negativePrompt,
      tags: ['月夜', '萤火', '蓝绿调', '神秘'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'dark'] },
        fashion: { outfit: ['velvet-dress'], colors: ['deep-teal'] },
        environment: { scene: 'moonlit-forest', season: 'summer', weather: 'clear', time: 'night' },
        pose: { action: 'sitting-sideways', expression: 'mysterious-calm' },
        photography: { composition: 'three-quarter', lens: '85mm', aperture: 'f/2', angle: 'three-quarter-profile', lighting: ['moonlight', 'rim-light', 'cool-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'fantasy-realism'], mood: ['mysterious', 'serene'], palette: ['blue-black', 'teal'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'forest-08',
      title: '金叶暮光',
      image: '/images/nature/forest-muse/forest-muse-008.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Adult woman walking across the frame through an early-autumn forest at golden hour, captured mid-step from a three-quarter side angle rather than facing camera, tailored olive natural-fabric dress with a clean long silhouette, green and amber leaves moving in a light breeze, warm backlight balanced by soft reflected fill, realistic skin texture and hair strands, 50mm lens, full-body composition with generous environmental space, subtle film bloom, layered woodland depth, understated fashion editorial realism, 4K',
      negativePrompt,
      tags: ['秋林', '金叶', '暮光', '时尚'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'natural'] },
        fashion: { outfit: ['dress'], colors: ['olive'] },
        environment: { scene: 'autumn-forest', season: 'autumn', weather: 'sunny', time: 'golden-hour' },
        pose: { action: 'walking', expression: 'calm' },
        photography: { composition: 'full-body', lens: '50mm', aperture: 'f/2.8', angle: 'three-quarter-side', lighting: ['warm-backlight', 'natural-light', 'reflected-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['warm', 'elegant'], palette: ['amber', 'olive', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    ...forestExpansion.map(createForestExpansionImage),
    {
      id: 'forest-21',
      title: '溪光花影',
      image: '/images/nature/forest-muse/forest-muse-021.webp',
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Clearly adult young East Asian woman reclining naturally on moss-covered stones beside a sunlit forest stream, long dark slightly damp hair with a small white floral hairpiece, fitted cream botanical lace dress with translucent embroidered layers and a tasteful open neckline, warm dappled golden light through dense green foliage, soft waterfall bokeh in the background, realistic skin texture and individual hair strands, elegant sensual outdoor fashion portrait, intimate eye-level composition, photorealistic cinematic editorial detail',
      negativePrompt,
      tags: ['溪流', '花影', '奶油蕾丝裙', '暖光'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'dark', 'slightly-damp'], appearance: ['natural-makeup', 'floral-hairpiece'] },
        fashion: { outfit: ['botanical-lace-dress'], colors: ['cream', 'soft-sage'] },
        environment: { scene: 'sunlit-forest-stream', season: 'summer', weather: 'clear', time: 'golden-hour' },
        pose: { action: 'reclining-by-stream', expression: 'soft-direct-gaze' },
        photography: { composition: 'intimate-environmental-portrait', lens: '50mm', aperture: 'f/2.2', angle: 'eye-level', lighting: ['dappled-sunlight', 'warm-backlight', 'stream-reflected-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['young', 'romantic', 'sensual'], palette: ['cream', 'forest-green', 'warm-gold'] },
        generation: { aspectRatio: '4:3', resolution: '1448x1086', format: 'webp', assetType: 'generated' }
      }
    }
  ]
};
