import { forestArtwork } from '../../art';
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
  lighting: string[];
  styles: string[];
  mood: string[];
  palette: string[];
  hair?: string[];
};

const forestExpansion: ForestExpansion[] = [
  {
    title: '雨后木桥',
    prompt: 'Adult East Asian woman crossing a narrow wooden bridge in a wet forest after rain, moss-covered rails, soft gray daylight, long dark hair, simple sage dress, cinematic environmental portrait, realistic skin and fabric, 50mm lens, natural color grading',
    tags: ['雨后', '木桥', '苔藓', '灰调'],
    scene: 'wet-forest-bridge', season: 'summer', weather: 'rain', time: 'day', action: 'walking', expression: 'calm',
    outfit: ['simple-dress'], colors: ['sage'], composition: 'full-body', lens: '50mm',
    lighting: ['soft-overcast-light'], styles: ['photorealistic', 'cinematic'], mood: ['serene'], palette: ['sage', 'gray', 'deep-green']
  },
  {
    title: '溪边白衫',
    prompt: 'Adult East Asian woman sitting beside a shallow forest stream, soft white blouse and long olive skirt, scattered sunlight through leaves, relaxed thoughtful expression, photorealistic editorial portrait, 85mm lens, delicate bokeh and realistic textures',
    tags: ['溪边', '白衫', '坐姿', '斑驳光'],
    scene: 'forest-stream-bank', season: 'summer', weather: 'sunny', time: 'morning', action: 'sitting', expression: 'thoughtful',
    outfit: ['white-blouse', 'long-skirt'], colors: ['white', 'olive'], composition: 'three-quarter', lens: '85mm',
    lighting: ['dappled-light', 'natural-light'], styles: ['photorealistic', 'editorial'], mood: ['fresh', 'serene'], palette: ['white', 'olive', 'emerald']
  },
  {
    title: '秋林风衣',
    prompt: 'Elegant adult East Asian woman in a camel trench coat walking through an autumn forest, copper leaves and dark tree trunks, soft wind, cinematic fashion editorial, 50mm lens, warm filmic grading, realistic hair strands and skin texture',
    tags: ['秋林', '风衣', '铜色', '行走'],
    scene: 'autumn-woodland', season: 'autumn', weather: 'cloudy', time: 'day', action: 'walking', expression: 'focused',
    outfit: ['trench-coat'], colors: ['camel'], composition: 'full-body', lens: '50mm',
    lighting: ['soft-natural-light'], styles: ['photorealistic', 'cinematic', 'editorial', 'film'], mood: ['warm', 'elegant'], palette: ['camel', 'copper', 'deep-green']
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
    image: forestArtwork(number - 1),
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
      photography: { composition: item.composition, lens: item.lens, lighting: item.lighting },
      aesthetics: { styles: item.styles, mood: item.mood, palette: item.palette },
      generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
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
      image: forestArtwork(4),
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Beautiful adult East Asian woman in a quiet woodland glade filled with tiny wildflowers, soft golden morning light, gentle breeze, natural expression, cream and moss green dress, dreamy but photorealistic editorial portrait, realistic skin texture, balanced composition, 85mm lens, soft bokeh, premium color grading, ultra detailed 4K',
      negativePrompt,
      tags: ['野花', '林隙', '柔光', '清新'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'natural'] },
        fashion: { outfit: ['dress'], colors: ['cream', 'moss-green'] },
        environment: { scene: 'woodland-glade', season: 'spring', weather: 'sunny', time: 'morning' },
        pose: { action: 'standing', expression: 'natural' },
        photography: { composition: 'environmental-portrait', lens: '85mm', lighting: ['soft-light', 'golden-light'] },
        aesthetics: { styles: ['photorealistic', 'editorial'], mood: ['fresh', 'dreamy'], palette: ['cream', 'moss-green', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'forest-06',
      title: '雾松',
      image: forestArtwork(5),
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Adult East Asian woman in a highland pine forest wrapped in silver mist, minimalist dark green coat dress, soft diffused light, quiet eyes, cool cinematic palette, photorealistic fashion portrait, subtle moisture on hair, layered fog depth, 85mm lens, fine skin texture, elegant composition, 4K',
      negativePrompt,
      tags: ['松林', '银雾', '冷调', '极简'],
      dna: {
        subject: { ...baseIdentity, hair: ['dark', 'slightly-wet'] },
        fashion: { outfit: ['coat-dress'], colors: ['dark-green'] },
        environment: { scene: 'pine-forest', season: 'autumn', weather: 'fog', time: 'morning' },
        pose: { action: 'standing', expression: 'quiet' },
        photography: { composition: 'half-body', lens: '85mm', lighting: ['diffused-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'minimalist'], mood: ['cool', 'serene'], palette: ['silver', 'deep-green'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'forest-07',
      title: '月夜森林',
      image: forestArtwork(6),
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Adult East Asian woman in a moonlit forest, blue-black trees, soft moon rim light outlining long dark hair, deep teal velvet dress, faint fireflies, mysterious calm expression, cinematic night portrait, realistic skin and fabric, controlled highlights, 85mm lens, high detail, premium fantasy realism, 4K',
      negativePrompt,
      tags: ['月夜', '萤火', '蓝绿调', '神秘'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'dark'] },
        fashion: { outfit: ['velvet-dress'], colors: ['deep-teal'] },
        environment: { scene: 'moonlit-forest', season: 'summer', weather: 'clear', time: 'night' },
        pose: { action: 'standing', expression: 'mysterious-calm' },
        photography: { composition: 'half-body', lens: '85mm', lighting: ['moonlight', 'rim-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'fantasy-realism'], mood: ['mysterious', 'serene'], palette: ['blue-black', 'teal'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'forest-08',
      title: '金叶暮光',
      image: forestArtwork(7),
      galaxyId: 'nature',
      planetId: 'forest-muse',
      prompt:
        'Elegant adult East Asian woman walking through a forest at golden hour in early autumn, green and amber leaves, warm backlight, natural long hair, understated olive dress, cinematic fashion photography, realistic skin, soft lens bloom, layered woodland depth, 50mm lens, editorial composition, ultra detailed, 4K',
      negativePrompt,
      tags: ['秋林', '金叶', '暮光', '时尚'],
      dna: {
        subject: { ...baseIdentity, hair: ['long', 'natural'] },
        fashion: { outfit: ['dress'], colors: ['olive'] },
        environment: { scene: 'autumn-forest', season: 'autumn', weather: 'sunny', time: 'golden-hour' },
        pose: { action: 'walking', expression: 'calm' },
        photography: { composition: 'full-body', lens: '50mm', lighting: ['warm-backlight', 'natural-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['warm', 'elegant'], palette: ['amber', 'olive', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    ...forestExpansion.map(createForestExpansionImage)
  ]
};
