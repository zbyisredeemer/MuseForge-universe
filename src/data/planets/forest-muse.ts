import { forestArtwork } from '../../art';
import type { MusePlanet } from '../types';

const negativePrompt =
  'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

const baseIdentity = {
  gender: 'female' as const,
  ageGroup: 'adult' as const,
  region: 'east-asia'
};

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
      image: '/images/forest/forest-01.webp',
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
      image: '/images/forest/forest-02.webp',
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
      image: '/images/forest/forest-03.webp',
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
      image: '/images/forest/forest-04.webp',
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
    }
  ]
};
