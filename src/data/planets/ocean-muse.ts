import { museArtwork } from '../../art';
import type { MusePlanet } from '../types';

const negativePrompt = 'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const oceanMuse: MusePlanet = {
  id: 'ocean-muse',
  galaxyId: 'nature',
  name: '海洋系美女',
  subtitle: 'OCEAN MUSE',
  description: '海风、礁石、晨潮、蓝绿色海水与日落构成的清透海岸人像世界。',
  code: 'OCEAN',
  sequence: 3,
  star: { x: 79, y: 57, size: 15 },
  images: [
    {
      id: 'ocean-01', title: '晨潮白裙', image: museArtwork('ocean', 0, '晨潮白裙'),
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Adult East Asian woman walking barefoot along a quiet beach at sunrise, flowing white linen dress, soft sea breeze, pale turquoise water, natural makeup, cinematic coastal portrait, golden rim light, 50mm lens, realistic skin, editorial photography',
      negativePrompt, tags: ['晨潮', '白裙', '海风', '日出'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'windblown'] },
        fashion: { outfit: ['linen-dress'], colors: ['white'] },
        environment: { scene: 'quiet-beach', season: 'summer', weather: 'sunny', time: 'dawn' },
        pose: { action: 'walking', expression: 'natural' },
        photography: { composition: 'full-body', lens: '50mm', lighting: ['golden-rim-light', 'natural-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['fresh', 'serene'], palette: ['turquoise', 'white', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'ocean-02', title: '礁石海风', image: museArtwork('ocean', 1, '礁石海风'),
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Elegant adult East Asian woman standing on dark coastal rocks above the sea, muted teal dress, strong ocean breeze, overcast silver sky, textured waves, cinematic fashion editorial, 85mm lens, realistic hair strands, cool sophisticated color grading',
      negativePrompt, tags: ['礁石', '海风', '阴天', '青绿'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'windblown'] },
        fashion: { outfit: ['dress'], colors: ['muted-teal'] },
        environment: { scene: 'coastal-rocks', season: 'summer', weather: 'cloudy', time: 'day' },
        pose: { action: 'standing', expression: 'calm' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['soft-overcast-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['cool', 'elegant'], palette: ['teal', 'silver', 'charcoal'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'ocean-03', title: '蓝洞微光', image: museArtwork('ocean', 2, '蓝洞微光'),
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Adult East Asian woman inside a luminous sea cave, reflected aqua light on skin, dark flowing dress, wet stone textures, mysterious calm mood, fantasy realism blended with luxury editorial photography, 85mm lens, controlled highlights, photorealistic',
      negativePrompt, tags: ['海洞', '蓝光', '倒影', '神秘'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'slightly-wet'] },
        fashion: { outfit: ['flowing-dress'], colors: ['black'] },
        environment: { scene: 'sea-cave', season: 'summer', weather: 'clear', time: 'day' },
        pose: { action: 'standing', expression: 'mysterious-calm' },
        photography: { composition: 'half-body', lens: '85mm', lighting: ['reflected-light', 'aqua-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'fantasy-realism'], mood: ['mysterious'], palette: ['aqua', 'black', 'deep-blue'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'ocean-04', title: '落日金浪', image: museArtwork('ocean', 3, '落日金浪'),
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Adult East Asian woman at the shoreline during sunset, amber silk dress, warm sun reflecting across waves, loose dark hair, relaxed elegant expression, cinematic golden-hour portrait, 50mm lens, premium fashion editorial, realistic skin texture',
      negativePrompt, tags: ['落日', '金浪', '丝绸裙', '暖金'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'loose'] },
        fashion: { outfit: ['silk-dress'], colors: ['amber'] },
        environment: { scene: 'shoreline', season: 'summer', weather: 'sunny', time: 'sunset' },
        pose: { action: 'standing', expression: 'relaxed' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['golden-hour-light', 'backlight'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['warm', 'romantic'], palette: ['amber', 'gold', 'deep-blue'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    }
  ]
};
