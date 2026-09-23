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
    prompt: 'Adult woman seated naturally on a broad stone beside a shallow forest stream, torso angled away from camera and gaze following the water, soft white textured blouse with understated layered tailoring and a long olive skirt, both hands relaxed and visible instead of a beauty-pose hand-to-face gesture, scattered leaf light across fabric and stones, 85mm lens from a slightly high three-quarter angle, realistic mature skin texture, restrained smile lines, delicate background bokeh, candid editorial realism',
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
    prompt: 'Adult East Asian woman in a cream dress standing between tall forest trees at golden hour, strong warm backlight outlining hair, subtle lens bloom, calm expression, luxury cinematic portrait, 85mm lens, realistic skin, editorial color grading',
    tags: ['逆光', '金色', '奶油裙', '胶片'],
    scene: 'sunlit-forest', season: 'summer', weather: 'sunny', time: 'golden-hour', action: 'standing', expression: 'calm',
    outfit: ['dress'], colors: ['cream'], composition: 'three-quarter', lens: '85mm',
    lighting: ['warm-backlight', 'natural-light'], styles: ['photorealistic', 'cinematic', 'editorial', 'film'], mood: ['warm', 'romantic'], palette: ['cream', 'warm-gold', 'forest-green']
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
    prompt: 'Adult East Asian woman beside the exposed roots of an ancient tree in a deep forest, dark olive dress, low soft side light, composed expression, cinematic environmental portrait, realistic bark and fabric texture, 35mm lens, grounded natural palette',
    tags: ['古树', '根系', '深林', '环境人像'],
    scene: 'ancient-tree-roots', season: 'summer', weather: 'cloudy', time: 'day', action: 'standing', expression: 'composed',
    outfit: ['dress'], colors: ['dark-olive'], composition: 'environmental-portrait', lens: '35mm',
    lighting: ['soft-side-light'], styles: ['photorealistic', 'cinematic'], mood: ['mysterious', 'serene'], palette: ['dark-olive', 'brown', 'deep-green']
  },
  {
    title: '晨露蕨径',
    prompt: 'Adult East Asian woman walking along a fern-lined path covered in morning dew, pale gray-green dress, soft sunrise haze, loose long hair, fresh quiet mood, photorealistic cinematic portrait, 50mm lens, fine droplets and natural bokeh',
    tags: ['晨露', '蕨径', '清晨', '清新'],
    scene: 'fern-path', season: 'spring', weather: 'mist', time: 'dawn', action: 'walking', expression: 'soft',
    outfit: ['dress'], colors: ['gray-green'], composition: 'full-body', lens: '50mm',
    lighting: ['soft-dawn-light'], styles: ['photorealistic', 'cinematic'], mood: ['fresh', 'serene'], palette: ['gray-green', 'silver', 'soft-gold']
  },
  {
    title: '林中长椅',
    prompt: 'Adult East Asian woman sitting on a weathered wooden bench in a quiet woodland, beige coat over a simple dress, overcast afternoon, introspective expression, cinematic lifestyle portrait, 85mm lens, realistic skin and subtle film grain',
    tags: ['长椅', '米色', '沉静', '胶片'],
    scene: 'woodland-bench', season: 'autumn', weather: 'cloudy', time: 'day', action: 'sitting', expression: 'introspective',
    outfit: ['beige-coat', 'dress'], colors: ['beige', 'dark-green'], composition: 'half-body', lens: '85mm',
    lighting: ['soft-overcast-light'], styles: ['photorealistic', 'cinematic', 'film'], mood: ['serene', 'cool'], palette: ['beige', 'moss-green', 'gray']
  },
  {
    title: '小径回眸',
    prompt: 'Adult East Asian woman walking away on a narrow forest trail and looking back over her shoulder, understated dark green dress, warm late-afternoon light, cinematic storytelling portrait, 50mm lens, realistic motion and hair detail',
    tags: ['小径', '回眸', '叙事感', '暖光'],
    scene: 'narrow-forest-trail', season: 'summer', weather: 'sunny', time: 'golden-hour', action: 'walking', expression: 'looking-back',
    outfit: ['dress'], colors: ['dark-green'], composition: 'full-body', lens: '50mm',
    lighting: ['warm-backlight'], styles: ['photorealistic', 'cinematic'], mood: ['warm', 'romantic'], palette: ['dark-green', 'warm-gold', 'brown']
  },
  {
    title: '雨幕深林',
    prompt: 'Adult East Asian woman standing under light rain in a dense dark forest, waterproof black coat over muted green layers, wet hair, cinematic moody portrait, cool diffused light, 85mm lens, realistic rain streaks and skin texture',
    tags: ['雨幕', '深林', '黑外套', '冷调'],
    scene: 'dense-rain-forest', season: 'summer', weather: 'rain', time: 'day', action: 'standing', expression: 'focused',
    outfit: ['rain-coat'], colors: ['black', 'muted-green'], composition: 'half-body', lens: '85mm',
    lighting: ['diffused-light'], styles: ['photorealistic', 'cinematic'], mood: ['cool', 'mysterious'], palette: ['black', 'deep-green', 'silver']
  },
  {
    title: '暮色林缘',
    prompt: 'Elegant adult East Asian woman at the edge of a forest during blue hour, deep teal long dress, fading sky behind tree silhouettes, gentle breeze, cinematic twilight portrait, 85mm lens, controlled highlights, realistic skin and fabric',
    tags: ['林缘', '暮色', '蓝调', '长裙'],
    scene: 'forest-edge', season: 'autumn', weather: 'clear', time: 'blue-hour', action: 'standing', expression: 'calm',
    outfit: ['long-dress'], colors: ['deep-teal'], composition: 'three-quarter', lens: '85mm',
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
        'Adult woman kneeling naturally at the edge of a quiet woodland glade filled with tiny wildflowers, body turned three-quarters away from camera and face returning softly toward the light, cream and moss-green natural-fabric dress, hands resting naturally near one knee, soft golden morning light, believable skin pores and fine facial texture, individual flyaway hairs, 35mm environmental portrait, eye-level camera, subject occupying less than half the frame, realistic forest depth, restrained editorial color grading, photorealistic 4K',
      negativePrompt,
      tags: ['野花', '林隙', '柔光', '清新'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'natural'] },
        fashion: { outfit: ['dress'], colors: ['cream', 'moss-green'] },
        environment: { scene: 'woodland-glade', season: 'spring', weather: 'sunny', time: 'morning' },
        pose: { action: 'kneeling', expression: 'natural' },
        photography: { composition: 'environmental-portrait', lens: '35mm', aperture: 'f/2.8', angle: 'eye-level-three-quarter', lighting: ['soft-light', 'golden-light', 'reflected-fill'] },
        aesthetics: { styles: ['photorealistic', 'editorial'], mood: ['fresh', 'dreamy'], palette: ['cream', 'moss-green', 'warm-gold'] },
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
        'Adult woman walking slowly between tall highland pines wrapped in silver mist, charcoal and dark-green structured coat dress with practical natural-fiber layers, one hand lightly touching the coat collar, full body visible, slightly low camera angle, 50mm lens, soft diffused morning light, moisture on hair and fabric, realistic mature skin texture, layered fog depth, quiet focused gaze away from the lens, cinematic but documentary-real forest portrait, restrained cool grading, 4K',
      negativePrompt,
      tags: ['松林', '银雾', '冷调', '极简'],
      dna: {
        subject: { ...baseIdentity, hair: ['dark', 'slightly-wet'] },
        fashion: { outfit: ['coat-dress'], colors: ['dark-green'] },
        environment: { scene: 'pine-forest', season: 'autumn', weather: 'fog', time: 'morning' },
        pose: { action: 'walking', expression: 'quiet-focused-away' },
        photography: { composition: 'full-body', lens: '50mm', aperture: 'f/2.8', angle: 'slightly-low', lighting: ['diffused-light', 'fog-ambient-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'minimalist'], mood: ['cool', 'serene'], palette: ['silver', 'deep-green'] },
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
        'Adult woman seated sideways on a moss-covered boulder in a moonlit forest, shoulders relaxed and face shown in a soft three-quarter profile rather than a centered beauty pose, deep teal wool-and-velvet layered dress, faint fireflies and blue-black trees, soft moon rim light with subtle cool fill on the face, realistic mature skin with pores and under-eye texture, natural hands visible, 85mm lens, controlled highlights, shallow but believable depth of field, cinematic night realism without fantasy-glow skin, 4K',
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
    ...forestExpansion.map(createForestExpansionImage)
  ]
};
