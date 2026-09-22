import { museArtwork } from '../../art';
import type { MusePlanet } from '../types';

const negativePrompt = 'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const hanfuMuse: MusePlanet = {
  id: 'hanfu-muse',
  galaxyId: 'eastern',
  name: '汉服系美女',
  subtitle: 'HANFU MUSE',
  description: '以传统汉服、古典园林、竹影、灯火和东方色彩构建克制而精致的古典人像。',
  code: 'HANFU',
  sequence: 1,
  star: { x: 45, y: 29, size: 16 },
  images: [
    {
      id: 'hanfu-01', title: '竹影青衫', image: museArtwork('hanfu', 0, '竹影青衫'),
      galaxyId: 'eastern', planetId: 'hanfu-muse',
      prompt: 'Elegant adult Chinese woman in refined pale green hanfu standing beside bamboo in a classical garden, natural black hair with minimal jade hairpin, soft morning mist, graceful calm expression, cinematic Chinese portrait photography, realistic fabric texture, 85mm lens, subtle natural light',
      negativePrompt, tags: ['汉服', '竹林', '青衫', '玉簪'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'china', hair: ['long', 'black', 'traditional-updo'] },
        fashion: { outfit: ['hanfu'], colors: ['pale-green'], accessories: ['jade-hairpin'] },
        environment: { scene: 'classical-bamboo-garden', location: 'china-inspired', season: 'spring', weather: 'mist', time: 'morning' },
        pose: { action: 'standing', expression: 'calm' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['soft-natural-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['serene', 'elegant'], palette: ['jade-green', 'ivory'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'hanfu-02', title: '朱墙雪意', image: museArtwork('hanfu', 1, '朱墙雪意'),
      galaxyId: 'eastern', planetId: 'hanfu-muse',
      prompt: 'Adult Chinese woman in ivory and muted red hanfu beside a vermilion palace wall during light snowfall, refined traditional hairstyle, quiet winter atmosphere, cinematic portrait, realistic silk texture, soft diffused light, 85mm lens, elegant composition',
      negativePrompt, tags: ['朱墙', '冬雪', '红白', '古典'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'china', hair: ['traditional-updo', 'black'] },
        fashion: { outfit: ['hanfu'], colors: ['ivory', 'muted-red'] },
        environment: { scene: 'vermilion-palace-wall', location: 'china-inspired', season: 'winter', weather: 'snow', time: 'day' },
        pose: { action: 'standing', expression: 'quiet' },
        photography: { composition: 'half-body', lens: '85mm', lighting: ['diffused-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['serene', 'elegant'], palette: ['vermilion', 'ivory', 'snow-white'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'hanfu-03', title: '灯下月白', image: museArtwork('hanfu', 2, '灯下月白'),
      galaxyId: 'eastern', planetId: 'hanfu-muse',
      prompt: 'Adult Chinese woman wearing moon-white hanfu in a traditional courtyard at night, warm lanterns, subtle moonlight, long dark hair with delicate silver ornament, calm poetic expression, cinematic night portrait, realistic silk, 50mm lens, warm and cool contrast',
      negativePrompt, tags: ['灯笼', '月白', '夜景', '诗意'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'china', hair: ['long', 'dark'], appearance: ['natural-makeup'] },
        fashion: { outfit: ['hanfu'], colors: ['moon-white'], accessories: ['silver-hair-ornament'] },
        environment: { scene: 'traditional-courtyard', location: 'china-inspired', season: 'autumn', weather: 'clear', time: 'night' },
        pose: { action: 'standing', expression: 'poetic-calm' },
        photography: { composition: 'half-body', lens: '50mm', lighting: ['lantern-light', 'moonlight'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['romantic', 'serene'], palette: ['moon-white', 'warm-gold', 'deep-blue'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'hanfu-04', title: '春水花间', image: museArtwork('hanfu', 3, '春水花间'),
      galaxyId: 'eastern', planetId: 'hanfu-muse',
      prompt: 'Graceful adult Chinese woman in soft peach hanfu beside a spring pond with flowering branches, gentle breeze, delicate traditional hairstyle, subtle smile, dreamy but photorealistic Chinese editorial portrait, 85mm lens, soft bokeh, natural color grading',
      negativePrompt, tags: ['春水', '花枝', '桃色', '柔光'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'china', hair: ['traditional-updo', 'black'] },
        fashion: { outfit: ['hanfu'], colors: ['soft-peach'] },
        environment: { scene: 'spring-garden-pond', location: 'china-inspired', season: 'spring', weather: 'sunny', time: 'morning' },
        pose: { action: 'standing', expression: 'subtle-smile' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['soft-natural-light'] },
        aesthetics: { styles: ['photorealistic', 'editorial'], mood: ['romantic', 'dreamy'], palette: ['soft-peach', 'spring-green'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    }
  ]
};
